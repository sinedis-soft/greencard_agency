import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import LanguagePreferenceGate from "@/app/components/LanguagePreferenceGate";
import BitrixSiteButton from "@/app/components/BitrixSiteButton";
import GoogleAnalyticsTag from "@/app/components/GoogleAnalyticsTag";
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
        <GoogleAnalyticsTag />
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
