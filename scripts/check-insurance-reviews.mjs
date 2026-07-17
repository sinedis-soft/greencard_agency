import { readdirSync, readFileSync } from "node:fs";
import { join, relative, sep, extname } from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const seoSource = readFileSync(join(root, "app/seo.ts"), "utf8");
const sitemapSource = readFileSync(join(root, "app/sitemapUtils.ts"), "utf8");
const componentSource = readFileSync(join(root, "app/components/ContentReview.tsx"), "utf8");
const structuredDataSource = readFileSync(join(root, "app/components/StructuredData.tsx"), "utf8");
const expertSource = readFileSync(join(root, "app/experts/experts.ts"), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function stringValuesFromArray(source, name) {
  const match = source.match(new RegExp(`${name}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s+as const`));
  assert(match, `${name} array was not found`);
  return [...match[1].matchAll(/"([^"]+)"/g)].map(([, value]) => value);
}

function routeMetaBlock(route) {
  const start = seoSource.indexOf(`"${route}":`);
  assert(start >= 0, `${route} missing from ROUTE_META`);
  const rest = seoSource.slice(start);
  const next = rest.slice(1).search(/\n\s+"\//);
  return next > 0 ? rest.slice(0, next + 1) : rest;
}

function reviewFromBlock(route) {
  const block = routeMetaBlock(route);
  const reviewedAt = block.match(/reviewedAt:\s*"([0-9]{4}-[0-9]{2}-[0-9]{2})"/)?.[1];
  return {
    block,
    authorId: block.match(/authorId:\s*"([^"]+)"/)?.[1],
    reviewerId: block.match(/reviewerId:\s*"([^"]+)"/)?.[1],
    reviewedAt,
    lastModified: block.match(/lastModified:\s*"([0-9]{4}-[0-9]{2}-[0-9]{2})"/)?.[1],
  };
}

function assertValidIsoDate(value, route) {
  assert(/^\d{4}-\d{2}-\d{2}$/.test(value), `${route} reviewedAt must be YYYY-MM-DD`);
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  assert(date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day, `${route} reviewedAt is not a real calendar date`);
  const today = new Date();
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  assert(date.getTime() <= todayUtc, `${route} reviewedAt is in the future`);
}

const routeRoot = join(root, "app", "[lang]", "route");
const routePages = walk(routeRoot)
  .filter((path) => path.endsWith(`${sep}page.tsx`))
  .map((path) => `/route/${relative(routeRoot, path).split(sep).slice(0, -1).join("/")}`)
  .sort();
const sitemapRoutes = stringValuesFromArray(sitemapSource, "SITEMAP_ROUTE_ROUTES");
const insuranceRoutes = [...seoSource.matchAll(/"(\/route\/[^"]+)":\s*{[\s\S]*?pageType:\s*"insurance-route"/g)].map(([, route]) => route).sort();

assert(JSON.stringify(routePages) === JSON.stringify(insuranceRoutes), `insurance route coverage mismatch: pages=${routePages.join(",")} meta=${insuranceRoutes.join(",")}`);
assert(componentSource.includes("export default function ContentReview"), "ContentReview server component missing");
assert(!componentSource.includes('"use client"') && !componentSource.includes("'use client'"), "ContentReview must not be a client component");
assert(componentSource.includes("review.authorId === review.reviewerId"), "ContentReview must collapse same author/reviewer into one entry");
assert(componentSource.includes("preparedAndReviewed"), "ContentReview must render prepared-and-reviewed label");
assert(componentSource.includes("localizedExpertPagePath"), "ContentReview must use centralized expert profile path helper");
assert(componentSource.includes("Intl.DateTimeFormat"), "ContentReview must format dates by locale");
assert(!componentSource.includes("biography"), "ContentReview must not duplicate full biography");
assert(structuredDataSource.includes('"@type": "WebPage"'), "WebPage JSON-LD helper missing");
assert(structuredDataSource.includes("author") && structuredDataSource.includes("dateModified") && structuredDataSource.includes("publisher"), "Insurance JSON-LD fields missing");
assert(structuredDataSource.includes('"@id": "https://greencard.agency/#person-sergey-anatska"'), "Insurance JSON-LD must use stable Person @id");
assert(!structuredDataSource.match(/BreadcrumbList[\s\S]*?author/), "BreadcrumbList must not receive author");

for (const route of routePages) {
  const pageSource = readFileSync(join(root, "app", "[lang]", "route", ...route.replace(/^\/route\//, "").split("/"), "page.tsx"), "utf8");
  const review = reviewFromBlock(route);
  assert(review.authorId === "sergey-anatska", `${route} authorId mismatch`);
  assert(review.reviewerId === "sergey-anatska", `${route} reviewerId mismatch`);
  assert(review.reviewedAt, `${route} reviewedAt missing`);
  assertValidIsoDate(review.reviewedAt, route);
  assert(review.lastModified === review.reviewedAt, `${route} sitemap lastModified must match reviewedAt`);
  assert(sitemapRoutes.includes(route), `${route} missing from sitemap routes`);
  assert(pageSource.includes("requireRouteContentReview"), `${route} must require centralized review metadata`);
  assert(pageSource.includes("InsurancePageJsonLd"), `${route} must render insurance WebPage JSON-LD`);
  assert(pageSource.includes("review={CONTENT_REVIEW}"), `${route} must pass review to shared component`);
}

const uaeSource = readFileSync(join(root, "app/[lang]/route/uae/page.tsx"), "utf8");
assert(uaeSource.includes("author: {"), "UAE FAQPage JSON-LD must include author");
assert(uaeSource.includes("dateModified: CONTENT_REVIEW.reviewedAt"), "UAE FAQPage JSON-LD dateModified must use review metadata");
assert(uaeSource.includes("publisher: {"), "UAE FAQPage JSON-LD must include publisher");
assert(expertSource.includes('personId: "https://greencard.agency/#person-sergey-anatska"'), "central Person @id missing");
assert(!seoSource.includes("Date.now()") && !seoSource.includes("new Date()") && !seoSource.includes("fs.stat") && !seoSource.includes("git log"), "review metadata must not use dynamic dates");

const binaryExts = new Set([".pdf", ".jpg", ".jpeg", ".png", ".webp", ".gif", ".docx", ".xlsx", ".zip"]);
const changedFiles = execSync("git status --porcelain", { encoding: "utf8" })
  .split("\n")
  .map((line) => line.slice(3).trim())
  .filter(Boolean);
for (const file of changedFiles) {
  assert(!binaryExts.has(extname(file).toLowerCase()), `binary file changed or created: ${file}`);
}

console.log(`ok insurance reviews (${routePages.length} route pages checked)`);
