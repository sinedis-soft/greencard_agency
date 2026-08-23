import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { ORGANIZATION_ID } from "@/app/entityIds";
import {
  isRouteLocaleIndexable,
  pageAlternates,
  pageSocialMetadata,
  routeStaticParams,
  routeLastModified,
  requireRouteContentReview,
  toAbsolute,
} from "@/app/seo";
import { getAlgeriaFranceOcDictionary } from
  "@/app/dictionaries/seo-landings/algeriaFranceOc";
import {
  BreadcrumbListJsonLd,
  InsurancePageJsonLd,
} from "@/app/components/StructuredData";
import UaeLandingPage from "@/app/components/UaeLandingPage";

const ALGERIA_FRANCE_ROUTE = "/route/algeria/france";
const CONTENT_REVIEW =
  requireRouteContentReview(ALGERIA_FRANCE_ROUTE);

export const dynamicParams = false;

export function generateStaticParams() {
  return routeStaticParams(ALGERIA_FRANCE_ROUTE);
}

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value)
    ? (value as Lang)
    : "ar";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, ALGERIA_FRANCE_ROUTE)) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const t = getAlgeriaFranceOcDictionary(lang);

  return {
    alternates: pageAlternates(lang, ALGERIA_FRANCE_ROUTE),
    title: t.seo.title,
    description: t.seo.description,
    ...pageSocialMetadata(
      lang,
      ALGERIA_FRANCE_ROUTE,
      t.seo.title,
      t.seo.description,
    ),
  };
}

function faqJsonLd(
  lang: Lang,
  dictionary: ReturnType<typeof getAlgeriaFranceOcDictionary>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": toAbsolute(`/${lang}${ALGERIA_FRANCE_ROUTE}#faq`),
    author: {
      "@id": "https://greencard.agency/#person-sergey-anatska",
    },
    dateModified: routeLastModified(ALGERIA_FRANCE_ROUTE, lang),
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntity: dictionary.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function AlgeriaFranceOcPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, ALGERIA_FRANCE_ROUTE)) {
    notFound();
  }

  const t = getAlgeriaFranceOcDictionary(lang);

  return (
    <main id="main">
      <BreadcrumbListJsonLd
        lang={lang}
        pageName={t.breadcrumbTitle}
        pagePath={ALGERIA_FRANCE_ROUTE}
      />

      <InsurancePageJsonLd
        lang={lang}
        pagePath={ALGERIA_FRANCE_ROUTE}
        title={t.seo.title}
        description={t.seo.description}
        review={CONTENT_REVIEW}
      />

      <JsonLd data={faqJsonLd(lang, t)} />

      <UaeLandingPage
        lang={lang}
        dictionary={t}
        review={CONTENT_REVIEW}
        pagePath={ALGERIA_FRANCE_ROUTE}
      />
    </main>
  );
}
