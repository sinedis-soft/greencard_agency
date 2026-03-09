#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const entry = process.argv[2];
if (!entry) {
  console.error('Usage: node scripts/run-ts-script.js <file.ts>');
  process.exit(1);
}

const cache = new Map();

function executeTs(filePath) {
  const absPath = path.resolve(process.cwd(), filePath);
  if (cache.has(absPath)) return cache.get(absPath).exports;

  const source = fs.readFileSync(absPath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
      resolveJsonModule: true
    },
    fileName: absPath
  });

  const module = { exports: {} };
  cache.set(absPath, module);

  const customRequire = (specifier) => {
    if (specifier.startsWith('./') || specifier.startsWith('../')) {
      const resolved = path.resolve(path.dirname(absPath), specifier);
      if (resolved.endsWith('.ts')) return executeTs(resolved);
      if (fs.existsSync(`${resolved}.ts`)) return executeTs(`${resolved}.ts`);
      if (fs.existsSync(path.join(resolved, 'index.ts'))) return executeTs(path.join(resolved, 'index.ts'));
      return require(resolved);
    }
    return require(specifier);
  };

  const wrapped = new Function('exports', 'require', 'module', '__filename', '__dirname', transpiled.outputText);
  wrapped(module.exports, customRequire, module, absPath, path.dirname(absPath));
  return module.exports;
}

executeTs(entry);
