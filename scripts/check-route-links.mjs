import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const registry = readFileSync("app/routeRegistry.ts", "utf8");
const catalog = readFileSync("app/[lang]/routes/page.tsx", "utf8");
const related = readFileSync("app/components/RelatedRoutes.tsx", "utf8");
const home = readFileSync("app/components/Home.tsx", "utf8");
const sitemap = readFileSync("app/sitemapUtils.ts", "utf8");
const seo = readFileSync("app/seo.ts", "utf8");
const definitions = [...registry.matchAll(/defineRoute\("([^"]+)", "([^"]+)"/g)];
const routeEntries = [...registry.matchAll(/defineRoute\("([^"]+)", "([^"]+)", \[([^\]]+)\]/g)].map((match) => ({
  origin: match[1],
  destination: match[2],
  locales: [...match[3].matchAll(/"([a-z]+)"/g)].map((locale) => locale[1]),
}));
const catalogLocales = new Set(routeEntries.flatMap((route) => route.locales));
const emptyCatalogLocales = ["uk", "uz", "az", "ckb", "kmr", "ro", "sr", "mn"];

assert.equal(definitions.length, 10, "all ten indexed origin/destination routes are registered");
assert(catalog.includes("routesForLocale(lang)"), "catalog is generated from the registry");
assert(catalog.includes("ROUTE_CATALOG_LOCALES.map"), "only non-empty catalogs are statically generated");
assert(catalog.match(/length === 0\) notFound\(\)/g)?.length >= 2, "empty catalog metadata and page requests return 404");
assert(catalog.includes("route.href[lang]!"), "catalog links use the current locale");
assert(related.includes("selectRelatedRoutes(currentPath, lang)"), "related links use deterministic selection");
assert(related.includes("href={`/${lang}/routes`}"), "related block links to the localized catalog");
assert(home.includes("href={`/${lang}/routes`}"), "home links to the localized catalog");
assert(home.includes("hasRouteCatalog(lang)"), "home catalog link is conditional");
assert(sitemap.includes("INDEXABLE_ROUTE_PATHS"), "route sitemap is generated from the registry");
assert(sitemap.includes('"/routes"'), "catalog is registered in the sitemap");
assert(seo.includes('normalizeRoute(route) === "/routes"'), "catalog hreflang uses only catalog locales");
assert(related.includes("candidate.origin === current.origin") || readFileSync("app/routeRegistryCore.ts", "utf8").includes("candidate.origin === current.origin"), "related routes require a shared origin");
assert(readFileSync("app/routeRegistryCore.ts", "utf8").includes("candidate.destination === current.destination"), "related routes allow a shared destination");

for (const lang of emptyCatalogLocales) assert(!catalogLocales.has(lang), `${lang} must not have an empty catalog`);
for (const route of routeEntries) {
  for (const lang of route.locales) {
    assert(catalogLocales.has(lang), `${lang} catalog must include ${route.origin}/${route.destination}`);
  }
}

console.log(`ok route internal links (${definitions.length} indexed origin/destination routes, ${catalogLocales.size} non-empty catalog locales)`);
