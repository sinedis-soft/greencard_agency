import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import type { Metadata } from "next";
import { LOCALES, type Lang } from "@/app/dictionaries/header";
import { SITE_URL, buildHreflangAlternates } from "@/app/seo";
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

function getDirection(lang: Lang): "rtl" | "ltr" {
  return lang === "fa" ? "rtl" : "ltr";
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
    alternates: {
      canonical: `/${lang}`,
      languages: buildHreflangAlternates(""),
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `/${lang}`,
      siteName: "Green card agency",
      title: seo.home.title,
      description: seo.home.description,
    },
  };
}