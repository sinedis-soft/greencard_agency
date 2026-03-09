import path from 'node:path';
import { readCsv } from './lib/csv';

const sheetPath = path.join(process.cwd(), 'MIGRATION_CONTROL_SHEET_TEMPLATE.csv');

const requiredColumns = [
  'old_url',
  'new_url',
  'page_type',
  'language',
  'title',
  'meta_description',
  'h1',
  'canonical',
  'hreflang',
  'indexability',
  'redirect_type',
  'primary_cta',
  'files_assets_to_migrate',
  'legal_blocks_required',
  'responsible_person',
  'migration_status'
] as const;

const rows = readCsv(sheetPath);
const headers = Object.keys(rows[0] ?? {});

const missingColumns = requiredColumns.filter((column) => !headers.includes(column));

const oldUrlCount = new Map<string, number>();
const newUrlCount = new Map<string, number>();
const missingTitleMetaH1: number[] = [];
const missingRedirect: number[] = [];

rows.forEach((row, index) => {
  const rowNumber = index + 2;
  oldUrlCount.set(row.old_url, (oldUrlCount.get(row.old_url) ?? 0) + 1);
  newUrlCount.set(row.new_url, (newUrlCount.get(row.new_url) ?? 0) + 1);

  if (!row.title || !row.meta_description || !row.h1) {
    missingTitleMetaH1.push(rowNumber);
  }

  if (!row.new_url || !row.redirect_type) {
    missingRedirect.push(rowNumber);
  }
});

const duplicateOldUrls = Array.from(oldUrlCount.entries()).filter(([, count]) => count > 1);
const duplicateNewUrls = Array.from(newUrlCount.entries()).filter(([, count]) => count > 1);

const hasErrors =
  missingColumns.length > 0 ||
  missingTitleMetaH1.length > 0 ||
  missingRedirect.length > 0 ||
  duplicateOldUrls.length > 0 ||
  duplicateNewUrls.length > 0;

console.log('Migration Sheet Validation Report');
console.log(`Rows: ${rows.length}`);
console.log(`Missing required columns: ${missingColumns.length}`);
if (missingColumns.length > 0) {
  console.log(` - ${missingColumns.join(', ')}`);
}

console.log(`Rows missing title/meta/H1: ${missingTitleMetaH1.length}`);
if (missingTitleMetaH1.length > 0) {
  console.log(` - row numbers: ${missingTitleMetaH1.join(', ')}`);
}

console.log(`Rows missing redirect target/type: ${missingRedirect.length}`);
if (missingRedirect.length > 0) {
  console.log(` - row numbers: ${missingRedirect.join(', ')}`);
}

console.log(`Duplicate old URLs: ${duplicateOldUrls.length}`);
if (duplicateOldUrls.length > 0) {
  console.log(` - ${duplicateOldUrls.map(([url]) => url).join(', ')}`);
}

console.log(`Duplicate new URLs: ${duplicateNewUrls.length}`);
if (duplicateNewUrls.length > 0) {
  console.log(` - ${duplicateNewUrls.map(([url]) => url).join(', ')}`);
}

if (hasErrors) {
  process.exitCode = 1;
} else {
  console.log('Validation passed.');
}
