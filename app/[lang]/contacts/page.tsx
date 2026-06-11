export const dynamic = "force-static";
export const dynamicParams = false;

import type { Metadata } from "next";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { pageAlternates, pageSocialMetadata } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";

import ContactsPage from "@/app/components/ContactsPage";




const breadcrumbTitleByLang: Record<Lang, string> = {
  ru: "Контакты",
  pl: "Kontakt",
  en: "Contacts",
  be: "Кантакты",
  uk: "Контакти",

  ro: "Contacte",
  sr: "Kontakt",
  sq: "Kontakt",

  kk: "Байланыс",
  uz: "Kontaktlar",
  az: "Əlaqə",

  tr: "İletişim",

  hy: "Կոնտակտներ",
  ka: "კონტაქტები",

  fa: "تماس با ما",
  ar: "اتصل بنا",
  ckb: "پەیوەندی",
  kmr: "Têkilî",

  he: "צור קשר",

  mn: "Холбоо барих",
};

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const seo = getSeoDictionary(lang);


  return {
    alternates: pageAlternates(lang, "/contacts"),
    title: seo.contacts.title,
    description: seo.contacts.description,
    ...pageSocialMetadata(lang, "/contacts", seo.contacts.title, seo.contacts.description),
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return <>
    <BreadcrumbListJsonLd lang={lang} pageName={breadcrumbTitleByLang[lang]} pagePath="/contacts" />
    <ContactsPage lang={lang} />
  </>;

}
