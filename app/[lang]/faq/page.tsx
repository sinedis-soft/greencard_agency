import Script from 'next/script';
import type { Metadata } from 'next';
import { getDictionary, isLocale } from '@/lib/i18n/getDictionary';
import { createLocalizedMetadata } from '@/lib/seo/metadata';
import { buildFaqSchema } from '@/lib/seo/structuredData';
import type { Locale } from '@/types/i18n';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang: Locale = isLocale(lang) ? lang : 'ru';
  const dict = getDictionary(safeLang);
  return createLocalizedMetadata({ lang: safeLang, pathname: '/faq', title: dict.pages.faq.title, description: dict.pages.faq.intro });
}

export default async function FaqPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const schema = buildFaqSchema(dict.pages.faq.items);

  return (
    <section className={styles.page}>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h1>{dict.pages.faq.title}</h1>
      <p>{dict.pages.faq.intro}</p>
      {dict.pages.faq.items.map((item) => (
        <article key={item.question} className={styles.item}>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </article>
      ))}
    </section>
  );
}
