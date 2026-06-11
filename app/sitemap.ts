import type { MetadataRoute } from "next";
import {
  ROUTES,
  buildHreflangAlternates,
  localePath,
  routeLastModified,
  routeLocales,
  toAbsolute,
} from "@/app/seo";


export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) =>
    routeLocales(route).map((lang) => ({
      url: toAbsolute(localePath(lang, route)),
      lastModified: routeLastModified(route),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: buildHreflangAlternates(route),
      },
    })),
  );
}
