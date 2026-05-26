import type { MetadataRoute } from "next";
import { LOCALES } from "@/app/dictionaries/header";

import { ROUTES, localePath, routeLastModified, toAbsolute } from "@/app/seo";


export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: toAbsolute(localePath(lang, route)),
      lastModified: routeLastModified(route),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    })),
  );
}