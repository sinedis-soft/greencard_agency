import Home from "@/app/components/Home";
import { LOCALES, Lang } from "@/app/dictionaries/header";
import { pageAlternates, pageSocialMetadata, toAbsolute } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import { getHomeDictionary } from "@/app/dictionaries/home";
import { ORGANIZATION_ID } from "@/app/entityIds";
function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "en";
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const seo = getSeoDictionary(lang);

  return {
    alternates: pageAlternates(lang, ""),
    title: seo.home.title,
    description: seo.home.description,
    ...pageSocialMetadata(lang, "", seo.home.title, seo.home.description),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (LOCALES as readonly string[]).includes(rawLang)
    ? (rawLang as Lang)
    : "en";

  const home = getHomeDictionary(lang);
  const serviceName = home.hero.title;
  const serviceDescription = home.insuranceGuide?.directAnswer || home.hero.lead;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": toAbsolute(`/${lang}#oc-graniczne-service`),
      name: serviceName,
      serviceType: "OC graniczne border insurance arrangement",
      description: serviceDescription,
      provider: {
        "@id": ORGANIZATION_ID,
      },
      areaServed: ["PL", "EEA", "CH", "NO", "IS"],
      url: toAbsolute(`/${lang}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": toAbsolute(`/${lang}#faq`),
      mainEntity: home.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Home lang={lang} />
    </>
  );
}
