import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const routeRoot = join(process.cwd(), "app", "[lang]", "route");
const seoSource = readFileSync(join(process.cwd(), "app", "seo.ts"), "utf8");
const sitemapSource = readFileSync(join(process.cwd(), "app", "sitemapUtils.ts"), "utf8");
const routePageSource = readFileSync(join(routeRoot, "belarus", "poland", "page.tsx"), "utf8");
const nextConfigSource = readFileSync(join(process.cwd(), "next.config.ts"), "utf8");

function walk(dir) {
  return readdirSync(dir)
    .flatMap((entry) => {
      const path = join(dir, entry);
      return statSync(path).isDirectory() ? walk(path) : [path];
    });
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function stringKeysFromObject(source, exportName) {
  const match = source.match(new RegExp(`${exportName}\\s*=\\s*{([\\s\\S]*?)\\n}\\s+as const`));
  assert(match, `${exportName} object was not found`);
  return [...match[1].matchAll(/"([^"]+)"\s*:/g)].map(([, key]) => key);
}

function stringValuesFromArray(source, name) {
  const match = source.match(new RegExp(`${name}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s+as const`));
  assert(match, `${name} array was not found`);
  return [...match[1].matchAll(/"([^"]+)"/g)].map(([, value]) => value);
}

const pageRoutes = walk(routeRoot)
  .filter((path) => path.endsWith(`${sep}page.tsx`))
  .map((path) => `/${relative(routeRoot, path).split(sep).slice(0, -1).join("/")}`)
  .sort();

const routeMeta = new Set(stringKeysFromObject(seoSource, "ROUTE_META"));
const sitemapRoutes = new Set(stringValuesFromArray(sitemapSource, "SITEMAP_ROUTE_ROUTES"));
for (const route of pageRoutes) {
  const appRoute = `/route${route}`;
  assert(routeMeta.has(appRoute), `${appRoute} has page.tsx but is missing from ROUTE_META`);
  assert(sitemapRoutes.has(appRoute), `${appRoute} is missing from SITEMAP_ROUTE_ROUTES`);
}

for (const route of sitemapRoutes) {
  assert(routeMeta.has(route), `${route} is in SITEMAP_ROUTE_ROUTES but missing from ROUTE_META`);
}

assert(!sitemapSource.includes("/kk/route/belarus/poland"), "/kk/route/belarus/poland must not be hard-coded in sitemap output");
const routeLocalesBody = seoSource.match(/ROUTE_LOCALES\s*=\s*{([\s\S]*?)\n}\s+as const/)?.[1] ?? "";
const belarusPolandLocales = routeLocalesBody.match(/"belarus\/poland"\s*:\s*\[([^\]]+)\]/)?.[1] ?? "";
assert(belarusPolandLocales.includes('"kk"'), "kk must be included in /route/belarus/poland hreflang/static params");
const unchangedRouteLocales = {
  "belarus/lithuania": ["ru", "en", "be", "ka", "hy", "ar"],
  "georgia/romania": ["ru", "en", "be", "ka", "kk"],
  "georgia/bulgaria": ["ru", "en", "ka", "hy", "ar"],
  "kazakhstan/poland": ["ru", "kk", "en", "ar"],
  uae: ["ru", "en", "ar"],
  "uae/bulgaria": ["ru", "en", "ar"],
  "uae/greece": ["ru", "en", "ar"],
  "albania/bulgaria": ["ru", "en", "sq"],
  "experts/sergey-anatska": ["ru", "pl", "en", "be"],
};
for (const [route, expectedLocales] of Object.entries(unchangedRouteLocales)) {
  const escapedRoute = route.replace("/", "\\/");
  const values = routeLocalesBody.match(new RegExp(`"?${escapedRoute}"?\\s*:\\s*\\[([^\\]]+)\\]`))?.[1] ?? "";
  const actualLocales = [...values.matchAll(/"([a-z]+)"/g)].map(([, locale]) => locale);
  assert(JSON.stringify(actualLocales) === JSON.stringify(expectedLocales), `${route} locale matrix must remain unchanged`);
}
assert(routePageSource.includes("routeStaticParams(BELARUS_POLAND_ROUTE)"), "Belarus-Poland static params must use the route locale matrix");
assert(routePageSource.includes("getBelarusPolandOcDictionary(lang)"), "Belarus-Poland page must load the requested locale dictionary");
assert(seoSource.includes('kk: "kk-KZ"'), "Kazakh hreflang must be kk-KZ");
assert(seoSource.includes("toAbsolute(localePath(locale, normalizedRoute))"), "hreflang URLs must be absolute");
assert(routePageSource.includes("pageAlternates(lang, BELARUS_POLAND_ROUTE)"), "Belarus-Poland canonical and hreflang must use page alternates");
assert(seoSource.includes("canonical: localePath(lang, normalizedRoute)"), "Canonical must use the requested locale path");
assert(!nextConfigSource.includes('source: "/kk/route/belarus/poland"'), "Kazakh Belarus-Poland route must not redirect");
assert(nextConfigSource.includes("source: `/:lang(${SUPPORTED_LOCALE_PATTERN})/belarus-poland-oc`"), "Legacy Belarus-Poland redirects must remain configured");
assert(nextConfigSource.includes('destination: "/:lang/route/belarus/poland"'), "Legacy Belarus-Poland redirect destination must remain unchanged");
assert(nextConfigSource.match(/belarus-poland-oc`[\s\S]*?destination: "\/:lang\/route\/belarus\/poland"[\s\S]*?permanent: true/), "Legacy Belarus-Poland redirect must remain permanent");

console.log(`ok route sitemap coverage (${pageRoutes.length} route page files)`);
