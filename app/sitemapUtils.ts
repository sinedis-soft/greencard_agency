import {
  SITE_URL,
  buildHreflangAlternates,
  localePath,
  routeLastModified,
  routeLocales,
  toAbsolute,
  type AppRoute,
} from "@/app/seo";
import { INDEXABLE_ROUTE_PATHS } from "@/app/routeRegistry";

import type { MetadataRoute } from "next";


const SITEMAP_CONTENT_TYPE = "application/xml; charset=utf-8";

const SITEMAP_CACHE_CONTROL =
  "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";


const SITEMAP_MAIN_ROUTES = [
  "",
  "/about",
  "/contacts",
  "/routes",
  "/experts/sergey-anatska",
] as const satisfies readonly AppRoute[];
const SITEMAP_ROUTE_ROUTES = [
  ...(INDEXABLE_ROUTE_PATHS as AppRoute[]),
  // Generic UAE landing is indexable but is not an origin/destination route.
  "/route/uae",
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
] as const satisfies readonly AppRoute[];

export type SitemapRoute = (typeof SITEMAP_ALL_ROUTES)[number];


type SitemapEntry = {
  url: string;
  lastModified?: string;
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
    lastModified: routeLastModified(route, lang) || undefined,
    changeFrequency: routeChangeFrequency(route),
    priority: routePriority(route),
    alternates: buildHreflangAlternates(route),
  }));
}

export function buildSitemapMetadata(
  routes: readonly SitemapRoute[],
): MetadataRoute.Sitemap {
  return routes.flatMap(createSitemapEntry).map((entry) => ({
    url: entry.url,
    ...(entry.lastModified ? { lastModified: entry.lastModified } : {}),
    changeFrequency: entry.changeFrequency,
    priority: Number(entry.priority),
    alternates: {
      languages: entry.alternates,
    },
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

      const lastModified = entry.lastModified
        ? `\n    <lastmod>${entry.lastModified}</lastmod>`
        : "";
      return `  <url>\n    <loc>${escapeXml(entry.url)}</loc>${lastModified}\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>\n${alternates}\n  </url>`;
    })
    .join("\n\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

export function buildSitemapIndexXml(): string {
  const sitemaps = SITEMAP_SECTIONS.map(
    (section) =>
      `  <sitemap>\n    <loc>${escapeXml(new URL(section.path, SITE_URL).toString())}</loc>\n  </sitemap>`,
  ).join("\n");

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
