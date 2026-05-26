export const dynamic = "force-static";
export const dynamicParams = false;

import type { Metadata } from "next";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { getCookiesPolicyDictionary } from "@/app/dictionaries/privacyCookies";
import CookiesPolicyPage from "@/app/components/CookiesPolicyPage";
import { pageAlternates, pageSocialMetadata } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";

const breadcrumbTitleByLang: Record<Lang, string> = {
  ru: "Cookie политика",
  pl: "Polityka cookie",
  en: "Cookie policy",
  be: "Палітыка cookie",
  uz: "Cookie siyosati",
  ka: "Cookie პოლიტიკა",
  kk: "Cookie саясаты",
  tr: "Çerez politikası",
  fa: "سیاست کوکی",
  hy: "Cookie քաղաքականություն",
};

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
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
    alternates: pageAlternates(lang, "/cookiepolicy"),
    title: seo.cookiePolicy.title,
    description: seo.cookiePolicy.description,
    ...pageSocialMetadata(lang, "/cookiepolicy", seo.cookiePolicy.title, seo.cookiePolicy.description),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const t = getCookiesPolicyDictionary(lang);

  return <>
    <BreadcrumbListJsonLd lang={lang} pageName={breadcrumbTitleByLang[lang]} pagePath="/cookiepolicy" />
    <CookiesPolicyPage lang={lang} t={t} />
  </>;
}
