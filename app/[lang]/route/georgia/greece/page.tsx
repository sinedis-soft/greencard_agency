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
import { getGeorgiaGreeceOcDictionary } from
  "@/app/dictionaries/seo-landings/georgiaGreeceOc";
import {
  BreadcrumbListJsonLd,
  InsurancePageJsonLd,
} from "@/app/components/StructuredData";
import RouteLandingPage from "@/app/components/RouteLandingPage";

const GEORGIA_GREECE_ROUTE = "/route/georgia/greece";
const CONTENT_REVIEW = requireRouteContentReview(GEORGIA_GREECE_ROUTE);

export function generateStaticParams() {
  return routeStaticParams(GEORGIA_GREECE_ROUTE);
}

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value)
    ? (value as Lang)
    : "ru";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, GEORGIA_GREECE_ROUTE)) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const t = getGeorgiaGreeceOcDictionary(lang);

  return {
    alternates: pageAlternates(lang, GEORGIA_GREECE_ROUTE),
    title: t.seo.title,
    description: t.seo.description,
    ...pageSocialMetadata(
      lang,
      GEORGIA_GREECE_ROUTE,
      t.seo.title,
      t.seo.description,
    ),
  };
}

export default async function GeorgiaGreeceOcPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, GEORGIA_GREECE_ROUTE)) {
    notFound();
  }

  const t = getGeorgiaGreeceOcDictionary(lang);

  return (
    <main id="main">
      <BreadcrumbListJsonLd
        lang={lang}
        pageName={t.breadcrumbTitle}
        pagePath={GEORGIA_GREECE_ROUTE}
      />

      <InsurancePageJsonLd
        lang={lang}
        pagePath={GEORGIA_GREECE_ROUTE}
        title={t.seo.title}
        description={t.seo.description}
        review={CONTENT_REVIEW}
      />

      <RouteLandingPage
        lang={lang}
        dictionary={t}
        review={CONTENT_REVIEW}
        disableEnhancements
      />
    </main>
  );
}