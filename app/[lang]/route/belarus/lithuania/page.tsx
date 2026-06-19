import { notFound } from "next/navigation";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import {
  isRouteLocaleIndexable,
  pageAlternates,
  pageSocialMetadata,
  routeStaticParams,
  toAbsolute,
} from "@/app/seo";
import { getbelarusLithuaniaOcDictionary } from "@/app/dictionaries/seo-landings/belarusLithuaniaOc";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";
import RouteLandingPage from "@/app/components/RouteLandingPage";

const BELARUS_LITHUANIA_ROUTE = "/route/belarus/lithuania";

export function generateStaticParams() {
  return routeStaticParams(BELARUS_LITHUANIA_ROUTE);
}

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

function FaqJsonLd({ lang }: { lang: Lang }) {
  const t = getbelarusLithuaniaOcDictionary(lang);
  const data = {"@context":"https://schema.org","@type":"FAQPage","@id":toAbsolute(`/${lang}${BELARUS_LITHUANIA_ROUTE}#faq`),mainEntity:t.faq.items.map((item)=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, BELARUS_LITHUANIA_ROUTE)) {
    return { robots: { index: false, follow: false } };
  }

  const t = getbelarusLithuaniaOcDictionary(lang);
  return { alternates: pageAlternates(lang, BELARUS_LITHUANIA_ROUTE), title: t.seo.title, description: t.seo.description, ...pageSocialMetadata(lang, BELARUS_LITHUANIA_ROUTE, t.seo.title, t.seo.description) };
}

export default async function BelarusLithuaniaOcPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, BELARUS_LITHUANIA_ROUTE)) {
    notFound();
  }

  const t = getbelarusLithuaniaOcDictionary(lang);

  return (
    <main id="main">
      <BreadcrumbListJsonLd lang={lang} pageName={t.breadcrumbTitle} pagePath={BELARUS_LITHUANIA_ROUTE} />
      <FaqJsonLd lang={lang} />
      <RouteLandingPage lang={lang} dictionary={t} />
    </main>
  );
}
