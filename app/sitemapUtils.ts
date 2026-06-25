import {
  ROUTE_META,
  SITE_URL,
  buildHreflangAlternates,
  localePath,
  routeLastModified,
  routeLocales,
  toAbsolute,
  type AppRoute,
} from "@/app/seo";

const SITEMAP_CONTENT_TYPE = "application/xml; charset=utf-8";

const SITEMAP_CACHE_CONTROL =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";


const SITEMAP_MAIN_ROUTES = [
  "",
  "/about",
  "/contacts",
] as const satisfies readonly AppRoute[];
const SITEMAP_ROUTE_ROUTES = [
  "/route/belarus/poland",
  "/route/georgia/romania",
] as const satisfies readonly AppRoute[];

export const SITEMAP_SECTIONS = [
  {
    path: "/sitemap-main.xml",
    routes: SITEMAP_MAIN_ROUTES,
  },
  {
    path: "/sitemap-routes.xml",
    routes: SITEMAP_ROUTE_ROUTES,
  },
] as const;

export const SITEMAP_ALL_ROUTES = [
  ...SITEMAP_MAIN_ROUTES,
  ...SITEMAP_ROUTE_ROUTES,
] as const;

type SitemapRoute = (typeof SITEMAP_SECTIONS)[number]["routes"][number];

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly";
  priority: string;
  alternates: Record<string, string>;
};

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function routeChangeFrequency(
  route: SitemapRoute,
): SitemapEntry["changeFrequency"] {
  return route === "" ? "weekly" : "monthly";
}

function routePriority(route: SitemapRoute): SitemapEntry["priority"] {
  if (route === "") {
    return "1.0";
  }

  if (route.startsWith("/route/")) {
    return "0.9";
  }

  return "0.3";
}

function createSitemapEntry(route: SitemapRoute): SitemapEntry[] {
  return routeLocales(route).map((lang) => ({
    url: toAbsolute(localePath(lang, route)),
    lastModified: routeLastModified(route),
    changeFrequency: routeChangeFrequency(route),
    priority: routePriority(route),
    alternates: buildHreflangAlternates(route),
  }));
}

export function buildUrlSitemapXml(routes: readonly SitemapRoute[]): string {
  const entries = routes.flatMap(createSitemapEntry);
  const urls = entries
    .map((entry) => {
      const alternates = Object.entries(entry.alternates)
        .map(
          ([hrefLang, href]) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(hrefLang)}" href="${escapeXml(href)}" />`,
        )
        .join("\n");

      return `  <url>\n    <loc>${escapeXml(entry.url)}</loc>\n    <lastmod>${entry.lastModified.toISOString()}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>\n${alternates}\n  </url>`;
    })
    .join("\n\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export function buildSitemapIndexXml(): string {
  const newestLastModified = new Date(
    Math.max(
      ...Object.values(ROUTE_META).map((meta) =>
        new Date(meta.lastModified).getTime(),
      ),
    ),
  ).toISOString();

  const sitemaps = SITEMAP_SECTIONS.map(
    (section) =>
      `  <sitemap>\n    <loc>${escapeXml(new URL(section.path, SITE_URL).toString())}</loc>\n    <lastmod>${newestLastModified}</lastmod>\n  </sitemap>`,
  ).join("\n\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>\n`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {

      "Cache-Control": SITEMAP_CACHE_CONTROL,
      "Content-Type": SITEMAP_CONTENT_TYPE,
      "X-Content-Type-Options": "nosniff",

    },
  });
}
