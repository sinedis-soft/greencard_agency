import type { Lang } from "@/app/dictionaries/header";
import { ORGANIZATION_ID } from "@/app/entityIds";

export const SUPPORTED_EXPERT_LOCALES = ["ru", "pl", "en", "be"] as const satisfies readonly Lang[];

export type SupportedExpertLocale = (typeof SUPPORTED_EXPERT_LOCALES)[number];
export type ExpertId = "sergey-anatska";

type ExternalProfileId = "dionis" | "deda";

type Expert = {
  id: ExpertId;
  slug: string;
  personId: string;
  contentRole: "prepared-and-reviewed";
  lastReviewed: string;
  localizedNames: Record<SupportedExpertLocale, string>;
  organization: {
    name: "SINEDIS Sp. z o.o.";
    schemaId: string;
  };
  professionalRoles: readonly string[];
  externalProfiles: readonly {
    id: ExternalProfileId;
    url: string;
  }[];
};

export const EXPERTS = {
  "sergey-anatska": {
    id: "sergey-anatska",
    slug: "sergey-anatska",
    personId: "https://greencard.agency/#person-sergey-anatska",
    contentRole: "prepared-and-reviewed",
    lastReviewed: "2026-07-17",
    localizedNames: {
      ru: "Анацко Сергей",
      pl: "Sergey Anatska",
      en: "Anatska Sergey",
      be: "Анацка Сяргей",
    },
    organization: {
      name: "SINEDIS Sp. z o.o.",
      schemaId: ORGANIZATION_ID,
    },
    professionalRoles: [
      "Член правления страхового агента SINEDIS",
      "Действующий консультант, OFWCA WARTA",
      "COO / CCO",
      "Технический специалист",
      "Заместитель директора",
    ],
    externalProfiles: [
      {
        id: "dionis",
        url: "https://dionis-insurance.kz/ru/authors/sergey-anatska",
      },
      {
        id: "deda",
        url: "https://deda-insurance.ge/ru/authors/sergey-anatska",
      },
    ],
  },
} as const satisfies Record<ExpertId, Expert>;

export function isSupportedExpertLocale(lang: Lang): lang is SupportedExpertLocale {
  return (SUPPORTED_EXPERT_LOCALES as readonly Lang[]).includes(lang);
}

export function getExpert(id: ExpertId): Expert {
  return EXPERTS[id];
}

export function getExpertLocalizedName(expert: Expert, lang: Lang): string {
  return isSupportedExpertLocale(lang)
    ? expert.localizedNames[lang]
    : expert.localizedNames.pl;
}

export function expertPagePath(expert: Expert): `/experts/${string}` {
  return `/experts/${expert.slug}`;
}

export function localizedExpertPagePath(expert: Expert, lang: SupportedExpertLocale): `/${SupportedExpertLocale}/experts/${string}` {
  return `/${lang}${expertPagePath(expert)}`;
}
