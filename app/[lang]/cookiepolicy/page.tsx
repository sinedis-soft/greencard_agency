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
  ru: "Политика использования файлов cookie",
  pl: "Polityka plików cookie",
  en: "Cookie Policy",
  be: "Палітыка выкарыстання файлаў cookie",
  uk: "Політика використання файлів cookie",

  ro: "Politica privind cookie-urile",
  sr: "Политика колачића",
  sq: "Politika e cookies",

  kk: "Cookie файлдарының саясаты",
  uz: "Cookie fayllari siyosati",
  az: "Kuki faylları siyasəti",

  tr: "Çerez Politikası",

  hy: "Քուքի քաղաքականություն",
  ka: "ქუქი-ფაილების პოლიტიკა",

  fa: "سیاست کوکی‌ها",

  ckb: "سیاسەتی کوکییەکان",
  kmr: "Polîtîkaya Cookieyan",

  ar: "سياسة ملفات تعريف الارتباط",

  he: "מדיניות קובצי Cookie",

  mn: "Күүки файлын бодлого",
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
