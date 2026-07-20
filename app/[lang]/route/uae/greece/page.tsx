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
  requireRouteContentReview,
  toAbsolute,
} from "@/app/seo";
import { getUaeGreeceOcDictionary } from "@/app/dictionaries/seo-landings/uaeGreeceOc";
import {
  BreadcrumbListJsonLd,
  InsurancePageJsonLd,
} from "@/app/components/StructuredData";
import UaeLandingPage from "@/app/components/UaeLandingPage";

const UAE_GREECE_ROUTE = "/route/uae/greece";
const CONTENT_REVIEW = requireRouteContentReview(UAE_GREECE_ROUTE);

export const dynamicParams = false;

export function generateStaticParams() {
  return routeStaticParams(UAE_GREECE_ROUTE);
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
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, UAE_GREECE_ROUTE)) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const t = getUaeGreeceOcDictionary(lang);

  return {
    alternates: pageAlternates(lang, UAE_GREECE_ROUTE),
    title: t.seo.title,
    description: t.seo.description,
    ...pageSocialMetadata(
      lang,
      UAE_GREECE_ROUTE,
      t.seo.title,
      t.seo.description,
    ),
  };
}

function faqJsonLd(
  lang: Lang,
  dictionary: ReturnType<typeof getUaeGreeceOcDictionary>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": toAbsolute(`/${lang}${UAE_GREECE_ROUTE}#faq`),
    author: {
      "@id": "https://greencard.agency/#person-sergey-anatska",
    },
    dateModified: CONTENT_REVIEW.reviewedAt,
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

export default async function UaeGreeceOcPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  if (!isRouteLocaleIndexable(lang, UAE_GREECE_ROUTE)) {
    notFound();
  }

  const t = getUaeGreeceOcDictionary(lang);

  return (
    <main id="main">
      <BreadcrumbListJsonLd
        lang={lang}
        pageName={t.breadcrumbTitle}
        pagePath={UAE_GREECE_ROUTE}
      />

      <InsurancePageJsonLd
        lang={lang}
        pagePath={UAE_GREECE_ROUTE}
        title={t.seo.title}
        description={t.seo.description}
        review={CONTENT_REVIEW}
      />

      <JsonLd data={faqJsonLd(lang, t)} />

      <UaeLandingPage
        lang={lang}
        dictionary={t}
        review={CONTENT_REVIEW}
      />
    </main>
  );
}