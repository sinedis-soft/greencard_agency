import { LOCALES, type Lang } from "@/app/dictionaries/header";

export const SITE_URL = "https://greencard.agency";

export const ROUTE_META = {
  "": { lastModified: "2026-05-08" },
  "/about": { lastModified: "2026-05-08" },
  "/contacts": { lastModified: "2026-05-08" },
  "/product-info": { lastModified: "2026-05-08" },
  "/rules": { lastModified: "2026-05-08" },
  "/privacy": { lastModified: "2026-05-08" },
  "/cookiepolicy": { lastModified: "2026-05-08" },
  "/belarus-poland-oc": { lastModified: "2026-05-14" },
  "/georgia-romania-oc": { lastModified: "2026-05-14" },
} as const;

export const ROUTES = Object.keys(ROUTE_META) as Array<keyof typeof ROUTE_META>;
;

export type AppRoute = keyof typeof ROUTE_META;

export function routeLastModified(route: AppRoute): Date {
  return new Date(ROUTE_META[route].lastModified);
}

export const REGIONAL_HREFLANG_MAP: Record<Lang, string> = {
  ru: "ru",
  pl: "pl-PL",
  en: "en",
  be: "be-BY",
  uz: "uz-UZ",
  ka: "ka-GE",
  kk: "kk-KZ",
  tr: "tr-TR",
  fa: "fa",
  hy: "hy-AM", // Armenia regional target
};

export function localePath(lang: Lang, route: string = ""): string {
  const normalizedRoute = route === "/" ? "" : route;

  return `/${lang}${normalizedRoute}`;
}

export function toAbsolute(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildHreflangAlternates(route: string = ""): Record<string, string> {
  const normalizedRoute = route === "/" ? "" : route;

  const alternates = Object.fromEntries(
    LOCALES.map((locale) => [
      REGIONAL_HREFLANG_MAP[locale],
      toAbsolute(localePath(locale, normalizedRoute)),
    ]),
  );

  return {
    ...alternates,
    "x-default": toAbsolute(localePath("en", normalizedRoute)),
  };
}

export function pageAlternates(lang: Lang, route: string = "") {
  const normalizedRoute = route === "/" ? "" : route;

  return {
    canonical: localePath(lang, normalizedRoute),
    languages: buildHreflangAlternates(normalizedRoute),
  };
}


export function pageSocialMetadata(lang: Lang, route: string, title: string, description: string) {
  const normalizedRoute = route === "/" ? "" : route;
  const url = localePath(lang, normalizedRoute);

  return {
    openGraph: {
      type: "website" as const,

      locale: REGIONAL_HREFLANG_MAP[lang],

      url,
      siteName: "Green card agency",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}
