import { LOCALES, type Lang } from "@/app/dictionaries/header";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://greencard.agency";

export const ROUTES = ["", "/about", "/contacts", "/product-info", "/rules", "/privacy", "/cookiepolicy"] as const;

const REGIONAL_HREFLANG_MAP: Record<string, Lang> = {
  // Russian
  "ru-RU": "ru",
  "ru-BY": "ru",
  "ru-KZ": "ru",
  "ru-UZ": "ru",

  // Polish
  "pl-PL": "pl",

  // English
  "en-US": "en",
  "en-GB": "en",
  "en-EU": "en", 
  "en": "en",

  // Uzbek
  "uz-UZ": "uz",

  // Georgian
  "ka-GE": "ka",

  // Kazakh
  "kk-KZ": "kk",

  // Turkish
  "tr-TR": "tr",

  // Persian (Farsi)
  "fa-IR": "fa",

  // Armenian
  "hy-AM": "hy",
};

export function toAbsolute(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function localePath(lang: Lang, route: string): string {
  return `/${lang}${route}`;
}

export function languageAlternates(route: string): Record<string, string> {
  const languageAlternatesMap = Object.fromEntries(
    LOCALES.map((lang) => [lang, toAbsolute(localePath(lang, route))]),
  );
  const regionalAlternatesMap = Object.fromEntries(
    Object.entries(REGIONAL_HREFLANG_MAP).map(([hreflang, lang]) => [hreflang, toAbsolute(localePath(lang, route))]),
  );

  return {
    ...languageAlternatesMap,
    ...regionalAlternatesMap,
    "x-default": toAbsolute(localePath("en", route)),
  };
}

export function pageAlternates(lang: Lang, route: string) {
  return {
    canonical: localePath(lang, route),
    languages: languageAlternates(route),
  };
}