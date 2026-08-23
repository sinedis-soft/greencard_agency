import { LOCALES, type Lang } from "@/app/dictionaries/header";
import type { ExpertId } from "@/app/experts/experts";

export const SITE_URL = "https://greencard.agency";

export const SOCIAL_PREVIEW_IMAGE = {
  url: toAbsolute("/og_twitter_image.png"),
  width: 1200,
  height: 630,
  alt: "SINEDIS border insurance online for Poland and the EU",
} as const;

export type InsuranceContentReview = {
  authorId: ExpertId;
  reviewerId: ExpertId;
  reviewedAt: string;
};

type RouteMeta = {
  lastModified: string;
  lastModifiedByLocale?: Partial<Record<Lang, string>>;
  review?: InsuranceContentReview;
  pageType?: "insurance-route" | "expert";
  hreflangOverrides?: Partial<Record<Lang, string>>;
};

type RouteLocaleKey =
  | "belarus/poland"
  | "belarus/lithuania"
  | "georgia/romania"
  | "georgia/bulgaria"
  | "georgia/greece"
  | "kazakhstan/poland"
  | "uae"
  | "uae/bulgaria"
  | "uae/greece"
  | "albania/bulgaria"
  | "algeria/france"
  | "experts/sergey-anatska";

export const ROUTE_LOCALES = {
  "belarus/poland": ["ru", "pl", "en", "be", "kk", "ka", "tr", "fa", "hy", "ar", "he"],
  "belarus/lithuania": ["ru", "en", "be", "ka", "hy", "ar"],
  "georgia/romania": ["ru", "en", "be", "ka", "kk"],
  "georgia/bulgaria": ["ru", "en", "ka", "hy", "ar"],
   "georgia/greece": ["ru", "en", "ka", ],
  "kazakhstan/poland": ["ru", "kk", "en", "ar"],
  uae: ["ru", "en", "ar"],
  "uae/bulgaria": ["ru", "en", "ar"],
  "uae/greece": ["ru", "en", "ar"],
  "albania/bulgaria": ["ru", "en", "sq"],
  "algeria/france": ["ar", "en"],
  "experts/sergey-anatska": ["ru", "pl", "en", "be"],
} as const satisfies Record<RouteLocaleKey, readonly Lang[]>;

export const ROUTE_META = {
  "": { lastModified: "2026-08-23" },
  "/about": { lastModified: "2026-07-17" },
  "/contacts": { lastModified: "2026-06-12" },
  "/product-info": { lastModified: "2026-05-08" },
  "/rules": { lastModified: "2026-05-08" },
  "/privacy": { lastModified: "2026-05-08" },
  "/cookiepolicy": { lastModified: "2026-05-08" },
  "/experts/sergey-anatska": { lastModified: "2026-07-17" },
  "/route/belarus/poland": {
    lastModified: "2026-08-23",
    lastModifiedByLocale: {
      en: "2026-08-15", pl: "2026-07-17", be: "2026-06-12", kk: "2026-07-10",
      ka: "2026-05-14", tr: "2026-05-14", fa: "2026-05-14", hy: "2026-05-14",
      ar: "2026-06-12", he: "2026-06-12",
    },
    review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-17",
    },
    pageType: "insurance-route",
  },
  "/route/belarus/lithuania": { lastModified: "2026-08-23", lastModifiedByLocale: {
      en: "2026-06-19", be: "2026-06-19", ka: "2026-06-19", hy: "2026-06-19", ar: "2026-06-19",
    }, review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-17",
    },
    pageType: "insurance-route", },
  "/route/georgia/romania": { lastModified: "2026-08-23", lastModifiedByLocale: {
      en: "2026-05-14", be: "2026-05-14", ka: "2026-05-14", kk: "2026-05-14",
    }, review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-17",
    },
    pageType: "insurance-route", },
  "/route/georgia/bulgaria": { lastModified: "2026-08-23", review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-17",
    },
    pageType: "insurance-route", },
  "/route/kazakhstan/poland": { lastModified: "2026-08-23", review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-17",
    },
    pageType: "insurance-route", },
  "/route/uae": {
    lastModified: "2026-08-23",
    review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-02",
    },
    pageType: "insurance-route",
    hreflangOverrides: {
      ar: "ar-AE",
    },
  },
  "/route/uae/bulgaria": {
    lastModified: "2026-08-23",
    review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-20",
    },
    pageType: "insurance-route",
    hreflangOverrides: {
      ar: "ar-AE",
    },
  },
  "/route/georgia/greece": {
    lastModified: "2026-08-23",
    lastModifiedByLocale: { en: "2026-08-16", ka: "2026-08-16" },
    review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-08-15",
    },
    pageType: "insurance-route",
  },
  "/route/uae/greece": {
    lastModified: "2026-08-23",
    review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-20",
    },
    pageType: "insurance-route",
    hreflangOverrides: {
      ar: "ar-AE",
    },
  },
  "/route/albania/bulgaria": {
    lastModified: "2026-08-23",
    review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-07-20",
    },
    pageType: "insurance-route",
  },

  "/route/algeria/france": {
    lastModified: "2026-08-23",
    review: {
      authorId: "sergey-anatska",
      reviewerId: "sergey-anatska",
      reviewedAt: "2026-08-06",
    },
    pageType: "insurance-route",
    hreflangOverrides: {
      ar: "ar-DZ",
    }
  },
  
} as const satisfies Record<string, RouteMeta>;

export const ROUTES = Object.keys(ROUTE_META) as Array<keyof typeof ROUTE_META>;

export type AppRoute = keyof typeof ROUTE_META;

function normalizeRoute(route: string = ""): string {
  return route === "/" ? "" : route;
}

function routeLocaleKey(route: string): RouteLocaleKey | undefined {
  const normalizedRoute = normalizeRoute(route).replace(/^\/route\//, "").replace(/^\//, "");

  return Object.hasOwn(ROUTE_LOCALES, normalizedRoute)
    ? (normalizedRoute as RouteLocaleKey)
    : undefined;
}

export function routeLastModified(route: AppRoute, lang?: Lang): string {
  const metadata = ROUTE_META[route] as RouteMeta;

  return (lang && metadata.lastModifiedByLocale?.[lang]) ?? metadata.lastModified;
}

export function routeContentReview(route: AppRoute): InsuranceContentReview | undefined {
  return (ROUTE_META[route] as RouteMeta).review;
}

export function requireRouteContentReview(route: AppRoute): InsuranceContentReview {
  const review = routeContentReview(route);

  if (!review) {
    throw new Error(`Missing content review metadata for ${route}`);
  }

  return review;
}

export function insurancePageRoutes(): AppRoute[] {
  return ROUTES.filter((route) => (ROUTE_META[route] as RouteMeta).pageType === "insurance-route");
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

export function buildHreflangAlternates(
  route: string = "",
): Record<string, string> {
  const normalizedRoute = normalizeRoute(route);
  const locales = routeLocales(normalizedRoute);
  const defaultLocale = locales.includes("en") ? "en" : locales[0];

  const routeMeta = Object.hasOwn(ROUTE_META, normalizedRoute)
    ? (ROUTE_META[
        normalizedRoute as keyof typeof ROUTE_META
      ] as RouteMeta)
    : undefined;

  const alternates = Object.fromEntries(
    locales.map((locale) => {
      const hreflang =
        routeMeta?.hreflangOverrides?.[locale] ??
        REGIONAL_HREFLANG_MAP[locale];

      return [
        hreflang,
        toAbsolute(localePath(locale, normalizedRoute)),
      ];
    }),
  );

  return {
    ...alternates,
    ...(defaultLocale
      ? {
          "x-default": toAbsolute(
            localePath(defaultLocale, normalizedRoute),
          ),
        }
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
