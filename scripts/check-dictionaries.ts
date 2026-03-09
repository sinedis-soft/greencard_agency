import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const dictionaryFiles = {
  ru: path.join(root, 'dictionaries', 'ru', 'index.ts'),
  en: path.join(root, 'dictionaries', 'en', 'index.ts'),
  pl: path.join(root, 'dictionaries', 'pl', 'index.ts'),
  be: path.join(root, 'dictionaries', 'be', 'index.ts')
} as const;

const dictionaries = Object.fromEntries(
  Object.entries(dictionaryFiles).map(([lang, filePath]) => [lang, parseDictionary(filePath)])
) as Record<string, Record<string, unknown>>;

const base = flattenKeys(dictionaries.ru);
const report = {
  missing: [] as Array<{ lang: string; key: string }>,
  extra: [] as Array<{ lang: string; key: string }>,
  emptyTranslations: [] as Array<{ lang: string; key: string }>,
  unused: [] as string[]
};

for (const [lang, dict] of Object.entries(dictionaries)) {
  const keys = flattenKeys(dict);

  for (const [key, value] of base.entries()) {
    if (!keys.has(key)) {
      report.missing.push({ lang, key });
      continue;
    }

    const translated = keys.get(key);
    if (typeof translated === 'string' && translated.trim().length === 0) {
      report.emptyTranslations.push({ lang, key });
    }

  }

  for (const key of keys.keys()) {
    if (!base.has(key)) {
      report.extra.push({ lang, key });
    }
  }
}

const usedPaths = collectUsedDictionaryPaths(root);
for (const key of base.keys()) {
  if (!usedPaths.has(key) && !hasUsedDescendant(key, usedPaths)) {
    report.unused.push(key);
  }
}

console.log('Dictionary Governance Report');
console.log(`Languages checked: ${Object.keys(dictionaries).join(', ')}`);
console.log(`Missing keys: ${report.missing.length}`);
console.log(`Extra keys: ${report.extra.length}`);
console.log(`Missing/empty translations: ${report.emptyTranslations.length}`);
console.log(`Potentially unused keys: ${report.unused.length}`);

if (report.missing.length > 0) {
  console.log('\nMissing keys sample:');
  report.missing.slice(0, 20).forEach((item) => console.log(` - [${item.lang}] ${item.key}`));
}
if (report.extra.length > 0) {
  console.log('\nExtra keys sample:');
  report.extra.slice(0, 20).forEach((item) => console.log(` - [${item.lang}] ${item.key}`));
}
if (report.emptyTranslations.length > 0) {
  console.log('\nMissing/empty translation sample:');
  report.emptyTranslations.slice(0, 20).forEach((item) => console.log(` - [${item.lang}] ${item.key}`));
}
if (report.unused.length > 0) {
  console.log('\nPotentially unused keys sample:');
  report.unused.slice(0, 30).forEach((key) => console.log(` - ${key}`));
}

if (report.missing.length > 0 || report.extra.length > 0 || report.emptyTranslations.length > 0) {
  process.exitCode = 1;
}

function parseDictionary(filePath: string): Record<string, unknown> {
  const sourceText = fs.readFileSync(filePath, 'utf8');
  const source = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

  let found: ts.ObjectLiteralExpression | null = null;
  const visit = (node: ts.Node) => {
    if (
      ts.isVariableDeclaration(node) &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer) &&
      node.name.getText(source).endsWith('Dictionary')
    ) {
      found = node.initializer;
    }
    ts.forEachChild(node, visit);
  };
  visit(source);

  if (!found) {
    throw new Error(`Dictionary object not found in ${filePath}`);
  }

  return objectLiteralToValue(found, source) as Record<string, unknown>;
}

function objectLiteralToValue(node: ts.ObjectLiteralExpression, source: ts.SourceFile): unknown {
  const result: Record<string, unknown> = {};
  for (const property of node.properties) {
    if (!ts.isPropertyAssignment(property)) continue;
    const key = property.name.getText(source).replace(/^['"]|['"]$/g, '');
    result[key] = expressionToValue(property.initializer, source);
  }
  return result;
}

function expressionToValue(node: ts.Expression, source: ts.SourceFile): unknown {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isObjectLiteralExpression(node)) return objectLiteralToValue(node, source);
  if (ts.isArrayLiteralExpression(node)) return node.elements.map((element) => expressionToValue(element as ts.Expression, source));
  return node.getText(source);
}

function flattenKeys(value: unknown, prefix = ''): Map<string, unknown> {
  const out = new Map<string, unknown>();
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      const key = prefix ? `${prefix}.${index}` : String(index);
      if (item && typeof item === 'object') {
        const nested = flattenKeys(item, key);
        nested.forEach((nestedValue, nestedKey) => out.set(nestedKey, nestedValue));
      } else {
        out.set(key, item);
      }
    });
    return out;
  }

  if (value && typeof value === 'object') {
    for (const [key, nestedValue] of Object.entries(value as Record<string, unknown>)) {
      const joined = prefix ? `${prefix}.${key}` : key;
      if (nestedValue && typeof nestedValue === 'object') {
        const nested = flattenKeys(nestedValue, joined);
        nested.forEach((nestedItem, nestedKey) => out.set(nestedKey, nestedItem));
      } else {
        out.set(joined, nestedValue);
      }
    }
  }

  return out;
}

function collectUsedDictionaryPaths(projectRoot: string): Set<string> {
  const used = new Set<string>();
  const files = walk(projectRoot).filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'));
  const skip = ['dictionaries/', 'node_modules/', '.next/', 'scripts/'];

  for (const file of files) {
    const rel = path.relative(projectRoot, file).replace(/\\/g, '/');
    if (skip.some((segment) => rel.startsWith(segment))) continue;

    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/dict(?:\.[A-Za-z0-9_]+)+/g) ?? [];
    for (const match of matches) {
      const key = match.replace(/^dict\./, '');
      used.add(key);
    }
  }

  return used;
}

function hasUsedDescendant(baseKey: string, usedPaths: Set<string>) {
  for (const pathKey of usedPaths) {
    if (pathKey.startsWith(`${baseKey}.`)) return true;
  }
  return false;
}

function walk(dirPath: string): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}
