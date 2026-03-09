import { locales, type Locale } from '@/types/i18n';

export const staticLocalizedSlugs = [
  '',
  'about-us',
  'insurers',
  'regulations',
  'documents',
  'contact',
  'faq',
  'coverage-countries',
  'how-it-works',
  'claims',
  'privacy-policy',
  'complaints'
] as const;

export function buildLocalizedUrl(baseUrl: string, lang: Locale, slug: string): string {
  return slug ? `${baseUrl}/${lang}/${slug}` : `${baseUrl}/${lang}`;
}

export function buildHrefLangMap(pathnameByLocale: Record<Locale, string>) {
  return Object.fromEntries(locales.map((lang) => [lang, pathnameByLocale[lang]]));
}
