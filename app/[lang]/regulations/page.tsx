import type { Metadata } from 'next';
import { ContentPageSection } from '@/components/sections/shared/ContentPageSection';
import { getDictionary, isLocale } from '@/lib/i18n/getDictionary';
import { createLocalizedMetadata } from '@/lib/seo/metadata';
import type { Locale } from '@/types/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang: Locale = isLocale(lang) ? lang : 'ru';
  const dict = getDictionary(safeLang);
  return createLocalizedMetadata({ lang: safeLang, pathname: '/regulations', title: dict.pages.regulations.title, description: dict.pages.regulations.intro });
}

export default async function RegulationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <ContentPageSection content={dict.pages.regulations} />;
}
