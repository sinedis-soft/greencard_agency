import { readFileSync } from "node:fs";
import { join, extname } from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const expertSource = readFileSync(join(root, "app/experts/experts.ts"), "utf8");
const dictSource = readFileSync(join(root, "app/dictionaries/experts/sergeyAnatska.ts"), "utf8");
const pageSource = readFileSync(join(root, "app/[lang]/experts/sergey-anatska/page.tsx"), "utf8");
const seoSource = readFileSync(join(root, "app/seo.ts"), "utf8");
const sitemapSource = readFileSync(join(root, "app/sitemapUtils.ts"), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const locales = [...expertSource.matchAll(/SUPPORTED_EXPERT_LOCALES = \[([^\]]+)\]/g)][0]?.[1].match(/"([a-z]+)"/g)?.map((x) => x.replaceAll('"', '')) ?? [];
assert(expertSource.includes('id: "sergey-anatska"'), "central expert record is missing sergey-anatska");
assert(JSON.stringify(locales) === JSON.stringify(["ru", "pl", "en", "be"]), "expert locales must be ru, pl, en, be only");
for (const locale of locales) assert(new RegExp(`\\b${locale}\\s*:`).test(dictSource), `${locale} dictionary missing`);
assert(pageSource.includes("SUPPORTED_EXPERT_LOCALES.map"), "static params must derive from supported expert locales");
assert(seoSource.includes('"experts/sergey-anatska": ["ru", "pl", "en", "be"]'), "route locale matrix missing expert route");
assert(sitemapSource.includes('"/experts/sergey-anatska"'), "sitemap missing expert page");
assert(expertSource.includes('ru: "Анацко Сергей"'), "ru name mismatch");
assert(expertSource.includes('pl: "Sergey Anatska"'), "pl name mismatch");
assert(expertSource.includes('en: "Anatska Sergey"'), "en name mismatch");
assert(expertSource.includes('be: "Анацка Сяргей"'), "be name mismatch");
assert(expertSource.includes('https://dionis-insurance.kz/ru/authors/sergey-anatska'), "DIONIS URL mismatch");
assert(expertSource.includes('https://deda-insurance.ge/ru/authors/sergey-anatska'), "DEDA URL mismatch");
assert(pageSource.includes('"@type": "ProfilePage"') && pageSource.includes('"@type": "Person"'), "JSON-LD types missing");
assert(pageSource.includes('"@id": expert.personId'), "Person @id must be central and stable");
assert(pageSource.includes('worksFor') && expertSource.includes('SINEDIS Sp. z o.o.'), "Person must be linked to SINEDIS");
for (const field of ["award", "alumniOf", "hasCredential", "memberOf", "birthDate", "image"]) assert(!pageSource.includes(field), `unsupported schema field present: ${field}`);
assert(expertSource.includes('lastReviewed: "2026-07-17"'), "stable review date missing");
assert(!pageSource.includes("new Date()") && !expertSource.includes("new Date()"), "new Date() must not be used for expert date");
const enBlock = dictSource.match(/const en:[\s\S]*?const be:/)?.[0] ?? "";
assert(!/[А-Яа-яЁёІіЎўЄєЇї]/.test(enBlock), "English dictionary contains Cyrillic");
const plBlock = dictSource.match(/const pl:[\s\S]*?const en:/)?.[0] ?? "";
assert(!/[А-Яа-яЁёІіЎўЄєЇї]/.test(plBlock), "Polish dictionary contains Cyrillic");
const beBlock = dictSource.match(/const be:[\s\S]*?export const/s)?.[0] ?? "";
assert(beBlock.includes("Анацка Сяргей") && !beBlock.includes("Анацко Сергей"), "Belarusian dictionary appears to use Russian name");

const binaryExts = new Set([".pdf", ".jpg", ".jpeg", ".png", ".webp", ".gif", ".docx", ".xlsx", ".zip"]);
const changedFiles = execSync("git status --porcelain", { encoding: "utf8" })
  .split("\n")
  .map((line) => line.slice(3).trim())
  .filter(Boolean);
for (const file of changedFiles) {
  assert(!binaryExts.has(extname(file).toLowerCase()), `binary file changed or created: ${file}`);
}
console.log(`ok expert page checks (${locales.join(", ")})`);
