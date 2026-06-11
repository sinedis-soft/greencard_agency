import { LOCALES, type Lang } from "@/app/dictionaries/header";
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

const AVAILABLE_LANGUAGES = [...LOCALES];

/**
 * sameAs должен содержать внешние официальные профили бренда.
 * Внутренние страницы сайта сюда не добавлять.
 *
 * Когда появятся реальные профили, добавьте их сюда:
 * - Google Business Profile
 * - LinkedIn
 * - Facebook
 * - Instagram
 * - официальные карточки компании в каталогах
 */
const OFFICIAL_EXTERNAL_PROFILES: string[] = [
  "https://www.facebook.com/profile.php?id=61580498747893",
  "https://www.instagram.com/sinedis_ubezpieczenia",
];

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function getSameAs() {
  return OFFICIAL_EXTERNAL_PROFILES.length > 0
    ? OFFICIAL_EXTERNAL_PROFILES
    : undefined;
}

function getContactPage(lang: Lang) {
  return toAbsolute(`/${lang}/contacts`);
}

export function OrganizationJsonLd({ lang }: { lang: Lang }) {
  const sameAs = getSameAs();

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
    ...(sameAs ? { sameAs } : {}),
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
        url: getContactPage(lang),
      },
    ],
  };

  return <JsonLd data={data} />;
}

export function InsuranceAgencyJsonLd({ lang }: { lang: Lang }) {
  const sameAs = getSameAs();

  const data = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": toAbsolute(`/${lang}#insurance-agency`),
    name: "SINEDIS Sp. z o.o.",
    legalName: "SINEDIS Spółka z ograniczoną odpowiedzialnością",
    url: toAbsolute(`/${lang}`),
    email: "info@sinedis.pl",
    telephone: "+48573581333",
    address: COMPANY_ADDRESS,
    openingHoursSpecification: OPENING_HOURS,
    ...(sameAs ? { sameAs } : {}),
    parentOrganization: {
      "@id": toAbsolute(`/${lang}#organization`),
    },
    areaServed: ["PL", "EEA", ...TARGET_CARRIER_COUNTRIES],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+48573581333",
        email: "info@sinedis.pl",
        availableLanguage: AVAILABLE_LANGUAGES,
        areaServed: ["PL", "EEA", ...TARGET_CARRIER_COUNTRIES],
        url: getContactPage(lang),
      },
    ],
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
            serviceType:
              "International motor third-party liability insurance",
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

export function WebSiteJsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": toAbsolute(`/${lang}#website`),
    name: "Green card agency",
    alternateName: "SINEDIS",
    url: toAbsolute(`/${lang}`),
    inLanguage: lang,
    publisher: {
      "@id": toAbsolute(`/${lang}#organization`),
    },
  };

  return <JsonLd data={data} />;
}

export function BreadcrumbListJsonLd({
  lang,
  pageName,
  pagePath,
}: {
  lang: Lang;
  pageName: string;
  pagePath: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": toAbsolute(`/${lang}${pagePath}#breadcrumb`),
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: toAbsolute(`/${lang}`),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: toAbsolute(`/${lang}${pagePath}`),
      },
    ],
  };

  return <JsonLd data={data} />;
}