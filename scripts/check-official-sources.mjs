import { readFileSync } from "node:fs";
import { extname } from "node:path";
import { execSync } from "node:child_process";

const files = [
  "app/officialSources/sources.ts",
  "app/dictionaries/officialSources.ts",
  "app/components/OfficialSources.tsx",
  "app/components/AboutPage.tsx",
  "app/components/ExpertProfilePage.tsx",
  "app/[lang]/product-info/page.tsx",
  "app/components/ContentReview.tsx",
];
const sources = Object.fromEntries(files.map((file) => [file, readFileSync(file, "utf8")]));
const model = sources["app/officialSources/sources.ts"];
const dict = sources["app/dictionaries/officialSources.ts"];
const component = sources["app/components/OfficialSources.tsx"];
const combined = Object.values(sources).join("\n");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(model.includes('url: "https://rpu.knf.gov.pl/search/agent/11257162%2FA/472253"'), "KNF URL mismatch");
assert(model.includes('knfRegisterNumber: "11257162/A"'), "KNF number mismatch");
assert(dict.includes("страховым агентом") && dict.includes("insurance agent") && dict.includes("agentem ubezpieczeniowym"), "insurance-agent wording missing");
assert(!/лицензи[яюи]|licensed KNF|licencjonowany|лицензированный KNF брокер/i.test(combined), "forbidden KNF licence wording found");
assert(model.includes('krs: "0000999636"'), "KRS mismatch");
assert(model.includes('nip: "5242953841"'), "NIP mismatch");
assert(model.includes('regon: "52350998300000"'), "REGON mismatch");
assert(model.includes('ul. Henryka Dobrzańskiego „Hubala” 22D') && model.includes('01-473 Warszawa') && model.includes('Polska'), "address mismatch");
assert(model.includes('url: "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20170002486/U/D20172486Lj.pdf"'), "ISAP URL mismatch");
assert(model.includes('internalPath: "/product-info"'), "product-info must use localized internal path");
assert(model.includes('powerOfAttorneyNumber: "07447/2024"'), "WARTA authorization number mismatch");
assert(model.includes('issuedAt: "2024-03-01"'), "WARTA authorization date mismatch");
assert(model.includes('agencyAgreementNumber: "BIAD/23315/2023"'), "agency agreement number mismatch");
assert(/"warta-authorization":\s*{[\s\S]*?public:\s*false/.test(model), "WARTA authorization must be non-public");
assert(!/"warta-authorization":\s*{[\s\S]*?url:/m.test(model), "WARTA authorization must not have a public URL");
assert(!model.includes('"ufg"') && !model.includes("ufg:"), "UFG source must not be added without official URL");
assert(component.includes("source.public && href") && component.includes("documentNotPublished"), "component must show non-public documents without links");
assert(component.includes("target={href.startsWith(\"http\")") && component.includes("noopener noreferrer"), "external links must be safe");
assert(sources["app/components/AboutPage.tsx"].includes("showCredentials"), "about page must include credentials section");
assert(sources["app/components/ExpertProfilePage.tsx"].includes("<OfficialSources"), "expert page must include official sources");
assert(sources["app/[lang]/product-info/page.tsx"].includes("<OfficialSources"), "product-info must include official sources");
assert(sources["app/components/ContentReview.tsx"].includes("/about#credentials"), "route review block must link compactly to official sources");
assert(!/PESEL|BAE|Odpis_Aktualny_KRS|base64|\/public\/.*\.(pdf|json|png|jpg)|\/assets\/.*\.(pdf|json|png|jpg)/i.test(combined), "forbidden personal/document/static path data found");
assert(!/\b\d{11}\b/.test(combined.replace(/52350998300000/g, "")), "PESEL-like 11-digit value found");
assert(!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(combined), "email found in new official-source content");
assert(!combined.includes("Date.now()") && !combined.includes("new Date()"), "dynamic verification date found");

const binaryExts = new Set([".pdf", ".jpg", ".jpeg", ".png", ".webp", ".gif", ".docx", ".xlsx", ".zip", ".7z"]);
const addedFiles = execSync("git diff --cached --name-only --diff-filter=A && git ls-files -o --exclude-standard", { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);
for (const file of addedFiles) {
  assert(!binaryExts.has(extname(file).toLowerCase()), `binary file added: ${file}`);
  assert(!/Odpis_Aktualny_KRS_.*\.json$/i.test(file), `KRS JSON extract added: ${file}`);
}

console.log("ok official sources checks");
