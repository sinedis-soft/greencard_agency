export const locales = ['ru', 'pl', 'en', 'be'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ru';

export type NavDictionary = {
  home: string;
  about: string;
  insurers: string;
  regulations: string;
  documents: string;
  faq: string;
  contacts: string;
};

export type CommonDictionary = {
  brand: string;
  languageLabel: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type HeaderDictionary = {
  nav: NavDictionary;
};

export type FooterDictionary = {
  legal: string;
  rights: string;
};

export type HomePageDictionary = {
  hero: { title: string; subtitle: string; trustBadge: string };
  benefits: { title: string; items: string[] };
};

export type ContentPageDictionary = {
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
};

export type FaqPageDictionary = {
  title: string;
  intro: string;
  items: { question: string; answer: string }[];
};

export type ContactPageDictionary = {
  title: string;
  intro: string;
  detailsTitle: string;
  mapTitle: string;
  details: { address: string; phone: string; email: string; hours: string };
  mapPlaceholder: string;
};

export type LeadFormDictionary = {
  title: string;
  loading: string;
  fields: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    registrationCountry: string;
    vehicleType: string;
    plateNumber: string;
    vin: string;
    insuranceStartDate: string;
    duration: string;
    routeCountries: string;
    borderEntryPoint: string;
    utmSource: string;
    utmCampaign: string;
    utmMedium: string;
    utmTerm: string;
    utmContent: string;
    consent: string;
    honeypot: string;
  };
  submit: string;
  success: string;
  errors: {
    invalid: string;
    required: string;
    server: string;
    ratelimit: string;
  };
};

export type SiteDictionary = {
  common: CommonDictionary;
  header: HeaderDictionary;
  footer: FooterDictionary;
  pages: {
    home: HomePageDictionary;
    about: ContentPageDictionary;
    insurers: ContentPageDictionary;
    regulations: ContentPageDictionary;
    documents: ContentPageDictionary;
    faq: FaqPageDictionary;
    contact: ContactPageDictionary;
  };
  forms: {
    lead: LeadFormDictionary;
  };
};
