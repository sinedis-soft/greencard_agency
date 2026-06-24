/* eslint-disable @next/next/no-page-custom-font -- Google Fonts are intentionally linked for multilingual typography. */
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import LanguagePreferenceGate from "@/app/components/LanguagePreferenceGate";
import BitrixSiteButton from "@/app/components/BitrixSiteButton";
import type { Metadata } from "next";
import { LOCALES, type Lang } from "@/app/dictionaries/header";
import { SITE_URL, pageAlternates, pageSocialMetadata } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import {
  InsuranceAgencyJsonLd,
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/app/components/StructuredData";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

function normalizeLang(rawLang: string): Lang {
  return (LOCALES as readonly string[]).includes(rawLang)
    ? (rawLang as Lang)
    : "ru";
}

const RTL_LANGS: readonly Lang[] = ["fa", "ar", "ckb", "kmr", "he"];

function getDirection(lang: Lang): "rtl" | "ltr" {
  return RTL_LANGS.includes(lang) ? "rtl" : "ltr";
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const dir = getDirection(lang);

  return (
    <html lang={lang} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Noto+Serif:wght@500;600;700&family=Noto+Sans+Georgian:wght@400;500;600;700&family=Noto+Sans+Armenian:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Noto+Sans+Hebrew:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`min-h-dvh flex flex-col ${
          dir === "rtl" ? "text-right" : "text-left"
        }`}
      >
        <OrganizationJsonLd lang={lang} />
        <InsuranceAgencyJsonLd lang={lang} />
        <WebSiteJsonLd lang={lang} />
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
        <CookieConsent lang={lang} />
        <LanguagePreferenceGate />
        <BitrixSiteButton />
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const seo = getSeoDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seo.home.title,
      template: "%s | Green card agency",
    },
    description: seo.home.description,
    alternates: pageAlternates(lang, ""),
    ...pageSocialMetadata(lang, "", seo.home.title, seo.home.description),
  };
}
