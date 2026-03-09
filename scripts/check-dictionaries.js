const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = process.cwd();
const dictionaryFiles = {
  ru: path.join(root, 'dictionaries', 'ru', 'index.ts'),
  en: path.join(root, 'dictionaries', 'en', 'index.ts'),
  pl: path.join(root, 'dictionaries', 'pl', 'index.ts'),
  be: path.join(root, 'dictionaries', 'be', 'index.ts')
};

const dictionaries = Object.fromEntries(
  Object.entries(dictionaryFiles).map(([lang, filePath]) => [lang, parseDictionary(filePath)])
);

const base = flattenKeys(dictionaries.ru);
const report = { missing: [], extra: [], emptyTranslations: [], unused: [] };

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
    if (!base.has(key)) report.extra.push({ lang, key });
  }
}

const usedPaths = collectUsedDictionaryPaths(root);
for (const key of base.keys()) {
  if (!usedPaths.has(key) && !hasUsedDescendant(key, usedPaths)) report.unused.push(key);
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

function parseDictionary(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const match = source.match(/export const\s+\w+\s*:\s*SiteDictionary\s*=\s*(\{[\s\S]*\});/);
  if (!match) throw new Error(`Dictionary object not found in ${filePath}`);
  const objectCode = match[1];
  return vm.runInNewContext(`(${objectCode})`, {});
}

function flattenKeys(value, prefix = '') {
  const out = new Map();
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
    for (const [key, nestedValue] of Object.entries(value)) {
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

function collectUsedDictionaryPaths(projectRoot) {
  const used = new Set();
  const files = walk(projectRoot).filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'));
  const skip = ['dictionaries/', 'node_modules/', '.next/', 'scripts/'];

  for (const file of files) {
    const rel = path.relative(projectRoot, file).replace(/\\/g, '/');
    if (skip.some((segment) => rel.startsWith(segment))) continue;

    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/dict(?:\.[A-Za-z0-9_]+)+/g) || [];
    for (const match of matches) {
      used.add(match.replace(/^dict\./, ''));
    }
  }

  return used;
}

function hasUsedDescendant(baseKey, usedPaths) {
  for (const pathKey of usedPaths) {
    if (pathKey.startsWith(`${baseKey}.`)) return true;
  }
  return false;
}

function walk(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}
