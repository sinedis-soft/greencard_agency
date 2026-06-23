import { notFound } from "next/navigation";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import {
  isRouteLocaleIndexable,
  pageAlternates,
  pageSocialMetadata,
  routeStaticParams,
} from "@/app/seo";
import { getBelarusPolandOcDictionary } from "@/app/dictionaries/seo-landings/belarusPolandOc";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";
import RouteLandingPage from "@/app/components/RouteLandingPage";

const BELARUS_POLAND_ROUTE = "/route/belarus/poland";

export function generateStaticParams() {
  return routeStaticParams(BELARUS_POLAND_ROUTE);
}

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, BELARUS_POLAND_ROUTE)) {
    return { robots: { index: false, follow: false } };
  }

  const t = getBelarusPolandOcDictionary(lang);
  return { alternates: pageAlternates(lang, BELARUS_POLAND_ROUTE), title: t.seo.title, description: t.seo.description, ...pageSocialMetadata(lang, BELARUS_POLAND_ROUTE, t.seo.title, t.seo.description) };
}

export default async function BelarusPolandOcPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, BELARUS_POLAND_ROUTE)) {
    notFound();
  }

  const t = getBelarusPolandOcDictionary(lang);

  return (
    <main id="main">
      <BreadcrumbListJsonLd lang={lang} pageName={t.breadcrumbTitle} pagePath={BELARUS_POLAND_ROUTE} />
      <RouteLandingPage lang={lang} dictionary={t} />
    </main>
  );
}
