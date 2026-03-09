import Link from 'next/link';
import type { Locale, SiteDictionary } from '@/types/i18n';
import { locales } from '@/lib/i18n/routing';
import styles from './Header.module.css';

export function Header({ lang, dict }: { lang: Locale; dict: SiteDictionary }) {
  const nav = dict.header.nav;

  return (
    <header className={styles.header}>
      <div className={styles.brand}>{dict.common.brand}</div>
      <nav className={styles.nav}>
        <Link href={`/${lang}`}>{nav.home}</Link>
        <Link href={`/${lang}/about-us`}>{nav.about}</Link>
        <Link href={`/${lang}/insurers`}>{nav.insurers}</Link>
        <Link href={`/${lang}/regulations`}>{nav.regulations}</Link>
        <Link href={`/${lang}/documents`}>{nav.documents}</Link>
        <Link href={`/${lang}/faq`}>{nav.faq}</Link>
        <Link href={`/${lang}/contact`}>{nav.contacts}</Link>
      </nav>
      <div className={styles.langs}>
        {locales.map((locale) => (
          <Link key={locale} href={`/${locale}`} aria-label={`${dict.common.languageLabel} ${locale}`}>
            {locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  );
}
