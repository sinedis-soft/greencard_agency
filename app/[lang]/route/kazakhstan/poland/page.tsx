import { notFound } from "next/navigation";
import type { Metadata } from "next";

import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import {
  isRouteLocaleIndexable,
  pageAlternates,
  pageSocialMetadata,
  routeStaticParams,
} from "@/app/seo";
import { getKazakhstanPolandOcDictionary } from "@/app/dictionaries/seo-landings/kazakhstanPolandOc";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";
import RouteLandingPage from "@/app/components/RouteLandingPage";

const KAZAKHSTAN_POLAND_ROUTE = "/route/kazakhstan/poland";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return routeStaticParams(KAZAKHSTAN_POLAND_ROUTE);
}

function parseLang(value: string): Lang | null {
  if ((LOCALES as readonly string[]).includes(value)) {
    return value as Lang;
  }

  return null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = parseLang(rawLang);

  if (!lang || !isRouteLocaleIndexable(lang, KAZAKHSTAN_POLAND_ROUTE)) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const dictionary = getKazakhstanPolandOcDictionary(lang);

  if (!dictionary) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    alternates: pageAlternates(lang, KAZAKHSTAN_POLAND_ROUTE),
    ...pageSocialMetadata(
      lang,
      KAZAKHSTAN_POLAND_ROUTE,
      dictionary.seo.title,
      dictionary.seo.description,
    ),
  };
}

export default async function KazakhstanPolandOcPage({
  params,
}: PageProps) {
  const { lang: rawLang } = await params;
  const lang = parseLang(rawLang);

  if (!lang || !isRouteLocaleIndexable(lang, KAZAKHSTAN_POLAND_ROUTE)) {
    notFound();
  }

  const dictionary = getKazakhstanPolandOcDictionary(lang);

  if (!dictionary) {
    notFound();
  }

  return (
    <main id="main">
      <BreadcrumbListJsonLd
        lang={lang}
        pageName={dictionary.breadcrumbTitle}
        pagePath={KAZAKHSTAN_POLAND_ROUTE}
      />

      <RouteLandingPage
        lang={lang}
        dictionary={dictionary}
      />
    </main>
  );
}