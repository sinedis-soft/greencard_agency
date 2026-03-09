import type { MetadataRoute } from 'next';
import { staticLocalizedSlugs, buildLocalizedUrl } from '@/lib/seo/routes';
import { locales, type Locale } from '@/types/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://greencard.agency';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const slug of staticLocalizedSlugs) {
      entries.push({
        url: buildLocalizedUrl(SITE_URL, locale as Locale, slug),
        lastModified: now,
        changeFrequency: slug === '' ? 'weekly' : 'monthly',
        priority: slug === '' ? 1 : 0.7
      });
    }
  }

  return entries;
}
