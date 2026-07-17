import type { Lang } from "@/app/dictionaries/header";

export type OfficialSourceId =
  | "knf"
  | "krs"
  | "isap"
  | "product-info"
  | "warta-authorization";

export type PublicOfficialSource = {
  id: OfficialSourceId;
  public: true;
  url?: string;
  internalPath?: `/${string}`;
  organization: string;
  reference?: string;
  verifiedAt: string;
};

export type PrivateOfficialSource = {
  id: OfficialSourceId;
  public: false;
  organization: string;
  reference: string;
  issuedAt?: string;
  verifiedAt: string;
};

export type OfficialSource = PublicOfficialSource | PrivateOfficialSource;

export const COMPANY_DETAILS = {
  legalName: "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
  shortName: "SINEDIS Sp. z o.o.",
  legalForm: "spółka z ograniczoną odpowiedzialnością",
  krs: "0000999636",
  nip: "5242953841",
  regon: "52350998300000",
  addressLines: [
    "ul. Henryka Dobrzańskiego „Hubala” 22D",
    "01-473 Warszawa",
    "Polska",
  ],
  knfRegisterNumber: "11257162/A",
  knfStatus: "insurance-agent",
  boardRepresentation: "Each member of the management board may represent the company independently.",
  boardMemberExpertId: "sergey-anatska",
  pkdInsuranceIntermediationPresent: true,
} as const;

export const WARTA_AUTHORIZATION = {
  insurer: "Towarzystwo Ubezpieczeń i Reasekuracji WARTA S.A.",
  powerOfAttorneyNumber: "07447/2024",
  issuedAt: "2024-03-01",
  agencyAgreementNumber: "BIAD/23315/2023",
  scope: [
    "preparatory-actions",
    "receive-and-issue-insurance-documents",
    "conclude-insurance-contracts-within-limits",
    "receive-assignment-notices-in-defined-cases",
    "receive-premiums-for-products-listed-in-appendix",
  ],
} as const;

export const OFFICIAL_SOURCES = {
  knf: {
    id: "knf",
    public: true,
    url: "https://rpu.knf.gov.pl/search/agent/11257162%2FA/472253",
    organization: "Komisja Nadzoru Finansowego",
    reference: COMPANY_DETAILS.knfRegisterNumber,
    verifiedAt: "2026-07-17",
  },
  krs: {
    id: "krs",
    public: false,
    organization: "Krajowy Rejestr Sądowy",
    reference: COMPANY_DETAILS.krs,
    verifiedAt: "2026-07-17",
  },
  isap: {
    id: "isap",
    public: true,
    url: "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20170002486/U/D20172486Lj.pdf",
    organization: "Internetowy System Aktów Prawnych",
    verifiedAt: "2026-07-17",
  },
  "product-info": {
    id: "product-info",
    public: true,
    internalPath: "/product-info",
    organization: "SINEDIS Sp. z o.o.",
    verifiedAt: "2026-07-17",
  },
  "warta-authorization": {
    id: "warta-authorization",
    public: false,
    organization: WARTA_AUTHORIZATION.insurer,
    reference: WARTA_AUTHORIZATION.powerOfAttorneyNumber,
    issuedAt: WARTA_AUTHORIZATION.issuedAt,
    verifiedAt: "2026-07-17",
  },
} as const satisfies Record<OfficialSourceId, OfficialSource>;

export const DEFAULT_OFFICIAL_SOURCE_IDS = [
  "knf",
  "krs",
  "isap",
  "product-info",
  "warta-authorization",
] as const satisfies readonly OfficialSourceId[];

export function getOfficialSource(id: OfficialSourceId): OfficialSource {
  return OFFICIAL_SOURCES[id];
}

export function officialSourceHref(source: OfficialSource, lang: Lang): string | undefined {
  if (!source.public) return undefined;
  if (source.internalPath) return `/${lang}${source.internalPath}`;
  return source.url;
}
