import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const routeRoot = join(process.cwd(), "app", "[lang]", "route");
const seoSource = readFileSync(join(process.cwd(), "app", "seo.ts"), "utf8");
const sitemapSource = readFileSync(join(process.cwd(), "app", "sitemapUtils.ts"), "utf8");

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
const exclusionEntries = [...sitemapSource.matchAll(/"([^"]+:[^"]+)"\s*:\s*"([^"]*)"/g)];
const exclusions = new Map(exclusionEntries.map(([, key, reason]) => [key, reason]));

for (const [key, reason] of exclusions) {
  assert(reason.trim().length > 0, `Sitemap route exclusion ${key} must have a non-empty reason`);
}

for (const route of pageRoutes) {
  const appRoute = `/route${route}`;
  assert(routeMeta.has(appRoute), `${appRoute} has page.tsx but is missing from ROUTE_META`);
  assert(
    sitemapRoutes.has(appRoute) || [...exclusions.keys()].some((key) => key.startsWith(`${route.slice(1)}:`)),
    `${appRoute} is missing from SITEMAP_ROUTE_ROUTES and has no documented exclusion`,
  );
}

for (const route of sitemapRoutes) {
  assert(routeMeta.has(route), `${route} is in SITEMAP_ROUTE_ROUTES but missing from ROUTE_META`);
}

assert(!sitemapSource.includes("/kk/route/belarus/poland"), "/kk/route/belarus/poland must not be hard-coded in sitemap output");
assert(exclusions.get("belarus/poland:kk"), "belarus/poland:kk exclusion must be documented");
const routeLocalesBody = seoSource.match(/ROUTE_LOCALES\s*=\s*{([\s\S]*?)\n}\s+as const/)?.[1] ?? "";
const belarusPolandLocales = routeLocalesBody.match(/"belarus\/poland"\s*:\s*\[([^\]]+)\]/)?.[1] ?? "";
assert(!belarusPolandLocales.includes('"kk"'), "kk must be excluded from /route/belarus/poland hreflang/static params");

console.log(`ok route sitemap coverage (${pageRoutes.length} route page files)`);
