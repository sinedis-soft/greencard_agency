import { notFound } from "next/navigation";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import {
  isRouteLocaleIndexable,
  pageAlternates,
  pageSocialMetadata,
  routeStaticParams,
  requireRouteContentReview,
} from "@/app/seo";
import { getGeorgiaRomaniaOcDictionary } from "@/app/dictionaries/seo-landings/georgiaRomaniaOc";
import { BreadcrumbListJsonLd, InsurancePageJsonLd } from "@/app/components/StructuredData";
import RouteLandingPage from "@/app/components/RouteLandingPage";

const GEORGIA_ROMANIA_ROUTE = "/route/georgia/romania";
const CONTENT_REVIEW = requireRouteContentReview(GEORGIA_ROMANIA_ROUTE);

export function generateStaticParams() {
  return routeStaticParams(GEORGIA_ROMANIA_ROUTE);
}

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, GEORGIA_ROMANIA_ROUTE)) {
    return { robots: { index: false, follow: false } };
  }

  const t = getGeorgiaRomaniaOcDictionary(lang);
  return { alternates: pageAlternates(lang, GEORGIA_ROMANIA_ROUTE), title: t.seo.title, description: t.seo.description, ...pageSocialMetadata(lang, GEORGIA_ROMANIA_ROUTE, t.seo.title, t.seo.description) };
}

export default async function GeorgiaRomaniaOcPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, GEORGIA_ROMANIA_ROUTE)) {
    notFound();
  }

  const t = getGeorgiaRomaniaOcDictionary(lang);

  return (
    <main id="main">
      <BreadcrumbListJsonLd lang={lang} pageName={t.breadcrumbTitle} pagePath={GEORGIA_ROMANIA_ROUTE} />
      <InsurancePageJsonLd lang={lang} pagePath={GEORGIA_ROMANIA_ROUTE} title={t.seo.title} description={t.seo.description} review={CONTENT_REVIEW} />
      <RouteLandingPage lang={lang} dictionary={t} review={CONTENT_REVIEW} />
    </main>
  );
}