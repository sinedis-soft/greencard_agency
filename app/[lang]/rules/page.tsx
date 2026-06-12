export const dynamic = "force-static";
export const dynamicParams = false;

import type { Metadata } from "next";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { pageAlternates, pageSocialMetadata } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";
import { getRulesDictionary } from "@/app/dictionaries/rules";
import RulesPage from "@/app/components/RulesPage";

const breadcrumbTitleByLang: Record<Lang, string> = {
  ru: "Правила",
  pl: "Regulamin",
  en: "Terms and Conditions",
  be: "Правілы",
  uk: "Правила",

  ro: "Termeni și condiții",
  sr: "Правила коришћења",
  sq: "Kushtet dhe rregullat",

  kk: "Ережелер",
  uz: "Qoidalar",
  az: "Qaydalar",

  tr: "Kullanım Koşulları",

  hy: "Օգտագործման կանոններ",
  ka: "გამოყენების წესები",

  fa: "شرایط و قوانین",

  ckb: "یاسا و مەرجەکان",
  kmr: "Merc û Şert",

  ar: "الشروط والأحكام",

  he: "תנאים והגבלות",

  mn: "Үйлчилгээний нөхцөл",
};

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value)
    ? (value as Lang)
    : "ru";
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
    robots: { index: false, follow: true },
    alternates: pageAlternates(lang, "/rules"),
    title: seo.rules.title,
    description: seo.rules.description,
    ...pageSocialMetadata(
      lang,
      "/rules",
      seo.rules.title,
      seo.rules.description,
    ),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  return (
    <>
      <BreadcrumbListJsonLd
        lang={lang}
        pageName={breadcrumbTitleByLang[lang]}
        pagePath="/rules"
      />
      <RulesPage t={getRulesDictionary(lang)} />
    </>
  );
}
