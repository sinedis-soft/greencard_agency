import type { Metadata } from 'next';
import { locales, type Locale } from '@/types/i18n';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://greencard.agency';

export function createLocalizedMetadata(params: {
  lang: Locale;
  pathname: string;
  title?: string;
  description?: string;
}): Metadata {
  const { lang, pathname, title, description } = params;
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const localizedPath = `/${lang}${safePath === '/' ? '' : safePath}`;
  const canonicalUrl = new URL(localizedPath, siteUrl).toString();
  const languageAlternates = Object.fromEntries(
    locales.map((locale) => [locale, `/${locale}${safePath === '/' ? '' : safePath}`])
  );

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        ...languageAlternates,
        'x-default': '/ru'
      }
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'GreenCard Agency',
      locale: lang,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
