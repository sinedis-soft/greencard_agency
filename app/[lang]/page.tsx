import type { Metadata } from 'next';
import { BenefitsSection } from '@/components/sections/home/BenefitsSection';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { LeadForm } from '@/components/sections/shared/LeadForm';
import { getDictionary, isLocale } from '@/lib/i18n/getDictionary';
import { createLocalizedMetadata } from '@/lib/seo/metadata';
import type { Locale } from '@/types/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang: Locale = isLocale(lang) ? lang : 'ru';
  const dict = getDictionary(safeLang);

  return createLocalizedMetadata({
    lang: safeLang,
    pathname: '/',
    title: dict.pages.home.hero.title,
    description: dict.pages.home.hero.subtitle
  });
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <HeroSection content={dict.pages.home.hero} />
      <BenefitsSection content={dict.pages.home.benefits} />
      <LeadForm dictionary={dict.forms.lead} lang={lang as Locale} />
    </>
  );
}
