import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Header } from '@/components/layout/Header';
import { getDictionary, isLocale } from '@/lib/i18n/getDictionary';
import { locales } from '@/lib/i18n/routing';
import { createLocalizedMetadata } from '@/lib/seo/metadata';
import { buildOrganizationSchema } from '@/lib/seo/structuredData';
import type { Locale } from '@/types/i18n';
import '@/styles/theme.css';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang: Locale = isLocale(lang) ? lang : 'ru';

  return createLocalizedMetadata({
    lang: safeLang,
    pathname: '/',
    title: 'GreenCard Agency',
    description: 'Insurance solutions for international mobility and green card policies.'
  });
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const schema = buildOrganizationSchema({
    name: dict.common.brand,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://greencard.agency',
    email: process.env.PUBLIC_CONTACT_EMAIL,
    telephone: process.env.PUBLIC_CONTACT_PHONE
  });

  return (
    <>
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header lang={lang as Locale} dict={dict} />
      <Container><main className="page-shell">{children}</main></Container>
      <Footer dict={dict} />
    </>
  );
}
