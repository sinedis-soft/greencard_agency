import type { MetadataRoute } from "next";
import { LOCALES } from "@/app/dictionaries/header";
import { ROUTES, localePath, toAbsolute } from "@/app/seo";

const ROUTE_LAST_MODIFIED: Record<string, string> = {
  "": "2026-05-08",
  "/about": "2026-05-08",
  "/contacts": "2026-05-08",
  "/product-info": "2026-05-08",
  "/rules": "2026-05-08",
  "/privacy": "2026-05-08",
  "/cookie-policy": "2026-05-08",
};

function getLastModified(route: string): Date {
  return new Date(ROUTE_LAST_MODIFIED[route] ?? "2026-01-01");
}

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: toAbsolute(localePath(lang, route)),
      lastModified: getLastModified(route),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    })),
  );
}