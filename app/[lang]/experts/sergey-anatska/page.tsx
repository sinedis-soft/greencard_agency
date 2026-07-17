export const dynamic = "force-static";
export const dynamicParams = false;

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, type Lang } from "@/app/dictionaries/header";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";
import ExpertProfilePage from "@/app/components/ExpertProfilePage";
import { getSergeyAnatskaExpertDictionary } from "@/app/dictionaries/experts/sergeyAnatska";
import {
  SUPPORTED_EXPERT_LOCALES,
  expertPagePath,
  getExpert,
  isSupportedExpertLocale,
  type SupportedExpertLocale,
} from "@/app/experts/experts";
import { pageAlternates, pageSocialMetadata, toAbsolute } from "@/app/seo";

const expert = getExpert("sergey-anatska");
const pagePath = expertPagePath(expert);

function normalizeExpertLang(value: string): SupportedExpertLocale | null {
  if (!(LOCALES as readonly string[]).includes(value)) return null;
  const lang = value as Lang;
  return isSupportedExpertLocale(lang) ? lang : null;
}

export function generateStaticParams() {
  return SUPPORTED_EXPERT_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeExpertLang(rawLang);
  if (!lang) notFound();
  const t = getSergeyAnatskaExpertDictionary(lang);
  return {
    alternates: pageAlternates(lang, pagePath),
    title: t.seo.title,
    description: t.seo.description,
    ...pageSocialMetadata(lang, pagePath, t.seo.title, t.seo.description),
  };
}

function profilePageJsonLd(lang: SupportedExpertLocale) {
  const t = getSergeyAnatskaExpertDictionary(lang);
  const url = toAbsolute(`/${lang}${pagePath}`);
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile-page`,
    url,
    name: t.seo.title,
    description: t.seo.description,
    dateModified: expert.lastReviewed,
    inLanguage: lang,
    isPartOf: { "@id": toAbsolute(`/${lang}#website`) },
    publisher: { "@id": toAbsolute(`/${lang}#organization`) },
    mainEntity: { "@id": expert.personId },
  };
}

function personJsonLd(lang: SupportedExpertLocale) {
  const t = getSergeyAnatskaExpertDictionary(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": expert.personId,
    name: expert.localizedNames[lang],
    url: toAbsolute(`/${lang}${pagePath}`),
    jobTitle: t.professionalRoles,
    description: t.shortDescription,
    worksFor: { "@id": expert.organization.schemaId, "@type": "Organization", name: expert.organization.name },
    knowsAbout: t.specializations,
    sameAs: expert.externalProfiles.map((profile) => profile.url),
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeExpertLang(rawLang);
  if (!lang) notFound();
  const t = getSergeyAnatskaExpertDictionary(lang);
  return <>
    <BreadcrumbListJsonLd lang={lang} pageName={t.breadcrumb} pagePath={pagePath} />
    <JsonLd data={profilePageJsonLd(lang)} />
    <JsonLd data={personJsonLd(lang)} />
    <ExpertProfilePage expertId="sergey-anatska" lang={lang} t={t} />
  </>;
}
