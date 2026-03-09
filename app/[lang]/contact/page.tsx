import type { Metadata } from 'next';
import { LeadForm } from '@/components/sections/shared/LeadForm';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { getDictionary, isLocale } from '@/lib/i18n/getDictionary';
import { createLocalizedMetadata } from '@/lib/seo/metadata';
import type { Locale } from '@/types/i18n';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const safeLang: Locale = isLocale(lang) ? lang : 'ru';
  const dict = getDictionary(safeLang);
  return createLocalizedMetadata({ lang: safeLang, pathname: '/contact', title: dict.pages.contact.title, description: dict.pages.contact.intro });
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <Section>
        <div className={styles.page}>
          <h1>{dict.pages.contact.title}</h1>
          <p>{dict.pages.contact.intro}</p>
          <div className={styles.grid}>
            <Card>
              <h2>{dict.pages.contact.detailsTitle}</h2>
              <p>{dict.pages.contact.details.address}</p>
              <p>{dict.pages.contact.details.phone}</p>
              <p>{dict.pages.contact.details.email}</p>
              <p>{dict.pages.contact.details.hours}</p>
            </Card>
            <Card>
              <h2>{dict.pages.contact.mapTitle}</h2>
              <div className={styles.map}>{dict.pages.contact.mapPlaceholder}</div>
            </Card>
          </div>
        </div>
      </Section>
      <LeadForm dictionary={dict.forms.lead} lang={lang as Locale} />
    </>
  );
}
