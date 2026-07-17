import { LOCALES, type Lang } from "@/app/dictionaries/header";

export const SITE_URL = "https://greencard.agency";

export const SOCIAL_PREVIEW_IMAGE = {
  url: toAbsolute("/og_twitter_image.png"),
  width: 1200,
  height: 630,
  alt: "SINEDIS border insurance online for Poland and the EU",
} as const;

type RouteMeta = {
  lastModified: string;
};

type RouteLocaleKey =
  | "belarus/poland"
  | "belarus/lithuania"
  | "georgia/romania"
  | "georgia/bulgaria"
  | "kazakhstan/poland"
  | "uae";

export const ROUTE_LOCALES = {
  "belarus/poland": ["ru", "pl", "en", "be", "ka", "tr", "fa", "hy", "ar", "he"],
  "belarus/lithuania": ["ru", "en", "be", "ka", "hy", "ar"],
  "georgia/romania": ["ru", "pl", "en", "be", "uz", "ka", "kk", "tr", "fa", "hy", "he", "ar"],
  "georgia/bulgaria": ["ru", "en", "ka", "hy", "ar"],
  "kazakhstan/poland": ["ru", "pl", "kk", "en", "ar"],
  uae: ["ru", "en", "ar"],
} as const satisfies Record<RouteLocaleKey, readonly Lang[]>;

export const ROUTE_META = {
  "": { lastModified: "2026-05-08" },
  "/about": { lastModified: "2026-05-08" },
  "/contacts": { lastModified: "2026-05-08" },
  "/product-info": { lastModified: "2026-05-08" },
  "/rules": { lastModified: "2026-05-08" },
  "/privacy": { lastModified: "2026-05-08" },
  "/cookiepolicy": { lastModified: "2026-05-08" },
  "/route/belarus/poland": {
    lastModified: "2026-07-17",
  },
  "/route/belarus/lithuania": { lastModified: "2026-07-17" },
  "/route/georgia/romania": { lastModified: "2026-07-17" },
  "/route/georgia/bulgaria": { lastModified: "2026-07-17" },
  "/route/kazakhstan/poland": { lastModified: "2026-07-17" },
  "/route/uae": { lastModified: "2026-07-02" },
} as const satisfies Record<string, RouteMeta>;

export const ROUTES = Object.keys(ROUTE_META) as Array<keyof typeof ROUTE_META>;
;

export type AppRoute = keyof typeof ROUTE_META;

function normalizeRoute(route: string = ""): string {
  return route === "/" ? "" : route;
}

function routeLocaleKey(route: string): RouteLocaleKey | undefined {
  const normalizedRoute = normalizeRoute(route).replace(/^\/route\//, "");

  return Object.hasOwn(ROUTE_LOCALES, normalizedRoute)
    ? (normalizedRoute as RouteLocaleKey)
    : undefined;
}

export function routeLastModified(route: AppRoute): Date {
  return new Date(ROUTE_META[route].lastModified);
}

export function routeLocales(route: string = ""): Lang[] {
  const key = routeLocaleKey(route);

  if (key) {
    return [...ROUTE_LOCALES[key]];
  }

  return [...LOCALES];
}

export function isRouteLocaleIndexable(lang: Lang, route: string = ""): boolean {
  return routeLocales(route).includes(lang);
}

export function routeStaticParams(route: string): Array<{ lang: Lang }> {
  return routeLocales(route).map((lang) => ({ lang }));
}

export const REGIONAL_HREFLANG_MAP: Record<Lang, string> = {
  ru: "ru",
  en: "en",
  pl: "pl-PL",

  be: "be-BY",
  uk: "uk-UA",

  kk: "kk-KZ",
  uz: "uz-UZ",
  az: "az-AZ",

  tr: "tr-TR",
  ka: "ka-GE",
  hy: "hy-AM",

  fa: "fa-IR",
  ckb: "ku-IQ",
  kmr: "ku-TR",
  ar: "ar",
  he: "he-IL",

  ro: "ro-RO",
  sr: "sr-RS",
  sq: "sq-AL",

  mn: "mn-MN",
};

export function localePath(lang: Lang, route: string = ""): string {
  const normalizedRoute = normalizeRoute(route);

  return `/${lang}${normalizedRoute}`;
}

export function toAbsolute(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildHreflangAlternates(route: string = ""): Record<string, string> {
  const normalizedRoute = normalizeRoute(route);
  const locales = routeLocales(normalizedRoute);
  const defaultLocale = locales.includes("en") ? "en" : locales[0];

  const alternates = Object.fromEntries(
    locales.map((locale) => [
      REGIONAL_HREFLANG_MAP[locale],
      toAbsolute(localePath(locale, normalizedRoute)),
    ]),
  );

  return {
    ...alternates,
    ...(defaultLocale
      ? { "x-default": toAbsolute(localePath(defaultLocale, normalizedRoute)) }
      : {}),
  };
}

export function pageAlternates(lang: Lang, route: string = "") {
  const normalizedRoute = normalizeRoute(route);

  return {
    canonical: localePath(lang, normalizedRoute),
    languages: buildHreflangAlternates(normalizedRoute),
  };
}


export function pageSocialMetadata(lang: Lang, route: string, title: string, description: string) {
  const normalizedRoute = normalizeRoute(route);
  const url = localePath(lang, normalizedRoute);

  return {
    openGraph: {
      type: "website" as const,

      locale: REGIONAL_HREFLANG_MAP[lang],

      url,
      siteName: "Green card agency",
      title,
      description,
      images: [SOCIAL_PREVIEW_IMAGE],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [SOCIAL_PREVIEW_IMAGE.url],
    },
  };
}
