const fs = require('fs');
const path = require('path');
const { readCsv } = require('./lib/csv.js');

const inputPath = path.join(process.cwd(), 'MIGRATION_CONTROL_SHEET_TEMPLATE.csv');
const outputPath = path.join(process.cwd(), 'generated', 'redirect-map.json');

const rows = readCsv(inputPath);
const redirectMap = {};

for (const row of rows) {
  const oldUrl = (row.old_url || '').trim();
  const newUrl = (row.new_url || '').trim();
  const redirectType = (row.redirect_type || '').trim();

  if (!oldUrl || !newUrl || !redirectType) continue;

  const oldPath = toPathname(oldUrl);
  if (!oldPath) continue;

  redirectMap[normalizePath(oldPath)] = {
    destination: normalizePath(newUrl),
    statusCode: redirectType === '302' ? 302 : 301
  };
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(redirectMap, null, 2));
console.log(`Generated ${Object.keys(redirectMap).length} redirects to ${outputPath}`);

function toPathname(value) {
  try {
    if (value.startsWith('http://') || value.startsWith('https://')) return new URL(value).pathname;
    return value;
  } catch {
    return value;
  }
}

function normalizePath(value) {
  if (!value.startsWith('/')) return `/${value}`;
  if (value.length > 1 && value.endsWith('/')) return value.slice(0, -1);
  return value;
}
