import fs from 'node:fs';
import path from 'node:path';
import { readCsv } from './lib/csv';

type RedirectEntry = {
  destination: string;
  statusCode: 301 | 302;
};

const inputPath = path.join(process.cwd(), 'MIGRATION_CONTROL_SHEET_TEMPLATE.csv');
const outputPath = path.join(process.cwd(), 'generated', 'redirect-map.json');

const rows = readCsv(inputPath);
const redirectMap: Record<string, RedirectEntry> = {};

for (const row of rows) {
  const oldUrl = row.old_url?.trim();
  const newUrl = row.new_url?.trim();
  const redirectType = row.redirect_type?.trim();

  if (!oldUrl || !newUrl || !redirectType) {
    continue;
  }

  const oldPath = toPathname(oldUrl);
  if (!oldPath) {
    continue;
  }

  const statusCode = redirectType === '302' ? 302 : 301;
  redirectMap[normalizePath(oldPath)] = {
    destination: normalizePath(newUrl),
    statusCode
  };
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(redirectMap, null, 2));
console.log(`Generated ${Object.keys(redirectMap).length} redirects to ${outputPath}`);

function toPathname(value: string): string {
  try {
    if (value.startsWith('http://') || value.startsWith('https://')) {
      return new URL(value).pathname;
    }
    return value;
  } catch {
    return value;
  }
}

function normalizePath(value: string): string {
  if (!value.startsWith('/')) {
    return `/${value}`;
  }
  if (value.length > 1 && value.endsWith('/')) {
    return value.slice(0, -1);
  }
  return value;
}
