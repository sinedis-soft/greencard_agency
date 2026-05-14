import { LOCALES, type Lang } from "@/app/dictionaries/header";

export const SITE_URL = "https://greencard.agency";

export const ROUTES = [
  "",
  "/about",
  "/contacts",
  "/product-info",
  "/rules",
  "/privacy",
  "/cookiepolicy",
  "/belarus-poland-oc",
] as const;

export type AppRoute = (typeof ROUTES)[number];

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
  hy: "hy-AM",
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
