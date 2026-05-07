import type { Lang } from "@/app/dictionaries/header";
import { getHomeDictionary } from "@/app/dictionaries/home";
import { SITE_URL, toAbsolute } from "@/app/seo";

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

const TARGET_CARRIER_COUNTRIES = [
  "BY",
  "UZ",
  "AM",
  "GE",
  "TJ",
  "TR",
  "AZ",
  "TM",
  "KZ",
  "KG",
  "MD",
  "UA",
] as const;

const COMPANY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "ul. H. Dobrzańskiego Hubala 22D",
  addressLocality: "Warszawa",
  postalCode: "01-473",
  addressCountry: "PL",
};

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
];

const OFFICIAL_PROFILES = [
  toAbsolute("/ru/contacts"),
  toAbsolute("/en/contacts"),
  toAbsolute("/be/contacts"),
  toAbsolute("/uz/contacts"),
  toAbsolute("/ka/contacts"),
  toAbsolute("/kk/contacts"),
  toAbsolute("/tr/contacts"),
  toAbsolute("/pl/contacts"),
  toAbsolute("/fa/contacts"),
  toAbsolute("/hy/contacts"),
];

const AVAILABLE_LANGUAGES = [
  "ru",
  "pl",
  "en",
  "be",
  "uz",
  "ka",
  "kk",
  "tr",
  "fa",
  "hy",
];

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": toAbsolute(`/${lang}#organization`),
    name: "SINEDIS Sp. z o.o.",
    legalName: "SINEDIS Spółka z ograniczoną odpowiedzialnością",
    url: SITE_URL,
    email: "info@sinedis.pl",
    telephone: "+48573581333",
    address: COMPANY_ADDRESS,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: OFFICIAL_PROFILES,
    areaServed: ["PL", "EEA", ...TARGET_CARRIER_COUNTRIES],
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "KRS",
        value: "0000999636",
      },
      {
        "@type": "PropertyValue",
        propertyID: "NIP",
        value: "5242953841",
      },
      {
        "@type": "PropertyValue",
        propertyID: "REGON",
        value: "52350998300000",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+48573581333",
        email: "info@sinedis.pl",
        availableLanguage: AVAILABLE_LANGUAGES,
        areaServed: ["PL", "EEA", ...TARGET_CARRIER_COUNTRIES],
      },
    ],
  };

  return <JsonLd data={data} />;
}

export function InsuranceAgencyJsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": toAbsolute(`/${lang}#insurance-agency`),
    name: "SINEDIS Sp. z o.o.",
    legalName: "SINEDIS Spółka z ograniczoną odpowiedzialnością",
    url: toAbsolute(`/${lang}`),
    email: "info@sinedis.pl",
    telephone: "+48573581333",
    parentOrganization: {
      "@id": toAbsolute(`/${lang}#organization`),
    },
    address: COMPANY_ADDRESS,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: OFFICIAL_PROFILES,
    areaServed: ["PL", "EEA", ...TARGET_CARRIER_COUNTRIES],
    serviceType:
      "Insurance intermediation and border motor third-party liability insurance",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SINEDIS insurance products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Border motor third-party liability insurance",
            serviceType: "Border insurance",
            areaServed: ["EEA"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Green Card agency",
            serviceType: "International motor third-party liability insurance",
            areaServed: ["PL", "EEA"],
          },
        },
      ],
    },
  };

  return <JsonLd data={data} />;
}

export function FaqPageJsonLd({ lang }: { lang: Lang }) {
  const faqItems = getHomeDictionary(lang).faq.items;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": toAbsolute(`/${lang}#faq`),
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <JsonLd data={data} />;
}