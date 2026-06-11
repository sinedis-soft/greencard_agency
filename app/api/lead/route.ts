import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { appendFile, mkdir, readdir, unlink } from "node:fs/promises";
import path from "node:path";
import net from "node:net";
import tls from "node:tls";

export const runtime = "nodejs";

const BITRIX_WEBHOOK = process.env.BITRIX_WEBHOOK_URL;

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || "465");
const SMTP_SECURE = (process.env.SMTP_SECURE || "true").toLowerCase() === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM;
const DEAL_REPORT_EMAIL_TO = process.env.DEAL_REPORT_EMAIL_TO;

type VehicleInput = {
  countryFrom: string;
  vehicleType: string;
  period: string;
  startDate: string;
  plate: string;
  vin: string;
  brend: string;
  year: string;
  engineType: string;
  engineCapacity: string;
  vehiclePower: string;
  powerUnit: string;
  comment: string;
  docs: File[];
};

type VehicleStringField = Exclude<keyof VehicleInput, "docs">;
const vehicleStringFields: VehicleStringField[] = ["countryFrom","vehicleType","period","startDate","plate","vin","brend","year","engineType","engineCapacity","vehiclePower","powerUnit","comment"];
const engineTypeMap: Record<string, string> = { petrol: "133", diesel: "135", Gas: "137", Gasoline: "139", Hybrid: "141", electric: "143" };
const powerUnitMap: Record<string, string> = { kw: "145", ph: "147" };
function isVehicleStringField(field: string): field is VehicleStringField { return vehicleStringFields.includes(field as VehicleStringField); }

const langToComm: Record<string, string> = {
  be: "3935", // Белорусский
  ru: "3937", // Русский
  uk: "3939", // Украинский

  ka: "3941", // Грузинский
  hy: "3943", // Армянский
  kk: "3945", // Казахский
  uz: "3947", // Узбекский
  kg: "3949", // Кыргызский
  az: "3951", // Азербайджанский

  en: "3953", // Английский
  pl: "3955", // Польский
  tr: "3957", // Турецкий

  ar: "4761",  // Арабский
  ckb: "4763", // Центральнокурдский (сорани)
  kmr: "4765", // Севернокурдский (курманджи)

  ro: "4767", // Румынский
  sr: "4769", // Сербский
  sq: "4771", // Албанский
  fa: "4773", // Персидский
  he: "4775", // Иврит
  mn: "4777", // Монгольский
};

const countryMap: Record<string, string> = {
  AM: "529",
  AZ: "531",
  BY: "123",
  GE: "523",
  KZ: "385",
  KG: "527",
  MD: "521",
  MN: "383",
  RU: "125",
  TR: "2253",
  UA: "519",
  UZ: "525",

  AE: "4779",
  BH: "4781",
  DZ: "4783",
  EG: "4785",
  GB: "4787",
  IL: "4789",
  IQ: "4791",
  IR: "4793",
  JO: "4795",
  KW: "4797",
  LB: "4799",
  LY: "4801",
  MA: "4803",
  OM: "4805",
  QA: "4807",
  SA: "4809",
  SY: "4811",
  TN: "4813",
  US: "4815",
  YE: "4817",

  OTHER: "411",
};

const vehicleTypeMap: Record<string, string> = { car: "127", trailer: "129", bus: "131", moto: "217", special: "457", truck: "453" };
const periodMap: Record<string, string> = { "30": "115", "90": "117", "180": "119", "365": "121" };

type BitrixResponse = { result?: unknown; error?: string; error_description?: string };
type LeadRouteStage = "form_parse" | "contact_lookup" | "contact_upsert" | "company_upsert" | "deal_upsert" | "smtp_report";
type LogLevel = "INFO" | "ERROR";

const LOG_DIR = path.join(process.cwd(), "logs");
const LOG_FILE_BASENAME = "lead-api";
const LOG_ROTATION_DAYS = 30;
const LOG_RETENTION_AFTER_ROTATION_DAYS = 30;

function toErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return typeof error === "string" ? error : "Unknown error";
}

function currentLogWindowStart(inputDate = new Date()): Date {
  const day = inputDate.getUTCDate();
  const periodStartDay = day <= LOG_ROTATION_DAYS ? 1 : LOG_ROTATION_DAYS + 1;
  return new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), periodStartDay, 0, 0, 0, 0));
}

function formatDateYYYYMMDD(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getActiveLogFileName(now = new Date()): string {
  return `${LOG_FILE_BASENAME}-${formatDateYYYYMMDD(currentLogWindowStart(now))}.log`;
}

async function pruneExpiredLogFiles(now = new Date()): Promise<void> {
  const entries = await readdir(LOG_DIR, { withFileTypes: true });
  const dayMs = 24 * 60 * 60 * 1000;
  const activeFileName = getActiveLogFileName(now);

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (!entry.name.startsWith(`${LOG_FILE_BASENAME}-`) || !entry.name.endsWith(".log")) continue;
    if (entry.name === activeFileName) continue;
    const datePart = entry.name.slice(`${LOG_FILE_BASENAME}-`.length, -".log".length);
    const startedAt = new Date(`${datePart}T00:00:00.000Z`);
    if (!Number.isFinite(startedAt.getTime())) continue;
    const windowEndMs = startedAt.getTime() + LOG_ROTATION_DAYS * dayMs;
    const retentionEndMs = windowEndMs + LOG_RETENTION_AFTER_ROTATION_DAYS * dayMs;
    if (now.getTime() >= retentionEndMs) {
      await unlink(path.join(LOG_DIR, entry.name)).catch(() => {});
    }
  }
}

async function writeLeadLog(level: LogLevel, message: string, meta?: Record<string, unknown>): Promise<void> {
  const now = new Date();
  const fileName = getActiveLogFileName(now);
  const payload = {
    ts: now.toISOString(),
    level,
    message,
    ...meta,
  };
  await mkdir(LOG_DIR, { recursive: true });
  await appendFile(path.join(LOG_DIR, fileName), `${JSON.stringify(payload)}\n`, "utf8");
  await pruneExpiredLogFiles(now);
}
async function safeWriteLeadLog(level: LogLevel, message: string, meta?: Record<string, unknown>): Promise<void> {
  try {
    await writeLeadLog(level, message, meta);
  } catch (logError) {
    console.error(`[lead-api] Failed to write log: ${toErrorMessage(logError)}`);
  }
}


async function bx(method: string, payload: unknown): Promise<unknown> { if (!BITRIX_WEBHOOK) throw new Error("BITRIX_WEBHOOK_URL is not set"); const res = await fetch(`${BITRIX_WEBHOOK}/${method}.json`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), cache: "no-store" }); const data = (await res.json()) as BitrixResponse; if (!res.ok || data.error) throw new Error(data.error_description || data.error || "Bitrix error"); return data.result; }
function toString(v: FormDataEntryValue | null): string { return typeof v === "string" ? v.trim() : ""; }
async function fileToBase64(file: File): Promise<string> { return Buffer.from(await file.arrayBuffer()).toString("base64"); }
function normalizeBitrixFileName(originalName: string): string {
  const trimmed = originalName.trim();
  const dotIndex = trimmed.lastIndexOf(".");
  const ext = dotIndex > 0 ? trimmed.slice(dotIndex).toLowerCase() : "";
  const base = dotIndex > 0 ? trimmed.slice(0, dotIndex) : trimmed;
  const safeBase = base
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^A-Za-z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80);
  return `${safeBase || "document"}${ext}`;
}
type BitrixFileValue = { fileData: [string, string] };
function describeFile(file: File): string {
  return `${file.name} (${file.type || "unknown"}, ${file.size} bytes)`;
}
function getIdFromFirstItem(value: unknown): number | null { if (!Array.isArray(value)) return null; const first = value[0]; if (!first || typeof first !== "object") return null; const id = (first as { ID?: unknown }).ID; const parsed = Number(id); return Number.isFinite(parsed) && parsed > 0 ? parsed : null; }
function getCreatedId(value: unknown): number { const parsed = Number(value); if (!Number.isFinite(parsed) || parsed <= 0) throw new Error("Bitrix returned invalid ID"); return parsed; }

function getContactIdFromDuplicateResult(value: unknown): number | null {
  if (!value || typeof value !== "object") return null;
  const contactIds = (value as { CONTACT?: unknown }).CONTACT;
  if (!Array.isArray(contactIds) || contactIds.length === 0) return null;
  const parsed = Number(contactIds[0]);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}
const escapeHtml = (value: string): string => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const formatValue = (value: string) => (value ? escapeHtml(value) : "<span style=\"color:#999;\">не заполнено</span>");

function buildDealEmailHtml(input: {dealId:number; contactId:number; companyId:number; lang:string; firstName:string; lastName:string; phone:string; email:string; isCompany:boolean; birthDate:string; address:string; policyholderPass:string; companyInn:string; ceoFullName:string; ceoTitle:string; vehicle:VehicleInput;}) {
  const { vehicle } = input;
  const rows = [
    ["Сделка ID", String(input.dealId)], ["Контакт ID", String(input.contactId)], ["Компания ID", String(input.companyId)], ["Язык", input.lang], ["Имя", input.firstName], ["Фамилия", input.lastName], ["Телефон", input.phone], ["Email", input.email], ["Юр. лицо", input.isCompany ? "Да" : "Нет"], ["Дата рождения", input.birthDate], ["Адрес", input.address], ["Паспорт", input.policyholderPass], ["ИНН", input.companyInn], ["ФИО директора", input.ceoFullName], ["Должность директора", input.ceoTitle], ["Страна", vehicle.countryFrom], ["Тип ТС", vehicle.vehicleType], ["Период", vehicle.period], ["Дата старта", vehicle.startDate], ["Номер", vehicle.plate], ["VIN", vehicle.vin], ["Бренд", vehicle.brend], ["Год", vehicle.year], ["Тип двигателя", vehicle.engineType], ["Объем", vehicle.engineCapacity], ["Мощность", vehicle.vehiclePower], ["Ед. мощности", vehicle.powerUnit], ["Комментарий", vehicle.comment], ["Кол-во документов", String(vehicle.docs.length)],
  ];
  const rowsHtml = rows.map(([k,v])=>`<tr><td style="padding:8px;border:1px solid #ddd;background:#f8f8f8;"><strong>${escapeHtml(k)}</strong></td><td style="padding:8px;border:1px solid #ddd;">${formatValue(v)}</td></tr>`).join("");
  return `<!doctype html><html><body><table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f4f4f4;margin:0;padding:0;"><tr><td align="center" style="padding:24px 12px;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;"><tr><td style="padding:20px;font-family:Arial,Helvetica,sans-serif;color:#333333;"><table width="100%"><tr><td align="center" style="padding-bottom:20px;"><img src="https://cdn.bitrix24.pl/b25731489/landing/36b/36bc0c68a9ad7f4480dba149cf24ea46/Screenshot_20230607_232655_Firefox_1x.png" width="150" alt="Green Card Agency"></td></tr></table><div style="font-size:20px;line-height:26px;color:green;font-weight:bold;margin-bottom:15px;">Новая сделка создана</div><div style="font-size:15px;line-height:22px;margin-bottom:20px;">Ниже полная информация по сделке и заполненным данным:</div><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-size:14px;">${rowsHtml}</table></td></tr></table></td></tr></table></body></html>`;
}

async function sendSmtpMail({to,subject,html}:{to:string;subject:string;html:string}) {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) throw new Error("SMTP settings are not configured");
  const crlf = "\r\n";
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const boundary = `----=_Part_${randomUUID()}`;
  const message = [`From: ${SMTP_FROM}`,`To: ${to}`,`Subject: =?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`,`MIME-Version: 1.0`,`Content-Type: multipart/alternative; boundary="${boundary}"`,"",`--${boundary}`,"Content-Type: text/plain; charset=UTF-8","Content-Transfer-Encoding: base64","",Buffer.from(text).toString("base64"),`--${boundary}`,"Content-Type: text/html; charset=UTF-8","Content-Transfer-Encoding: base64","",Buffer.from(html).toString("base64"),`--${boundary}--`,""].join(crlf);

  await new Promise<void>((resolve,reject)=>{
    let buf = "";
    const socket = SMTP_SECURE ? tls.connect(SMTP_PORT, SMTP_HOST) : net.createConnection(SMTP_PORT, SMTP_HOST);
    const send = (cmd:string) => socket.write(`${cmd}${crlf}`);
    const wait = (code:string, next:()=>void) => {
      const handler = (chunk: Buffer) => {
        buf += chunk.toString("utf8");
        const lines = buf.split(crlf).filter(Boolean);
        const last = lines[lines.length - 1];
        if (last?.startsWith(code)) {
          socket.off("data", handler);
          buf = "";
          next();
        } else if (/^[45]\d\d/.test(last || "")) {
          socket.off("data", handler);
          reject(new Error(`SMTP error: ${last}`));
        }
      };
      socket.on("data", handler);
    };

    socket.on("error", reject);
    wait("220", () => {
      send(`EHLO localhost`);
      wait("250", () => {
        send("AUTH LOGIN");
        wait("334", () => {
          send(Buffer.from(SMTP_USER).toString("base64"));
          wait("334", () => {
            send(Buffer.from(SMTP_PASS).toString("base64"));
            wait("235", () => {
              send(`MAIL FROM:<${SMTP_FROM}>`);
              wait("250", () => {
                send(`RCPT TO:<${to}>`);
                wait("250", () => {
                  send("DATA");
                  wait("354", () => {
                    socket.write(`${message}${crlf}.${crlf}`);
                    wait("250", () => { send("QUIT"); socket.end(); resolve(); });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}


export async function POST(req: Request) {
  const traceId = randomUUID();
  let stage: LeadRouteStage = "form_parse";
  let debugEmail = "";
  let vehicleCount = 0;

  try { const form = await req.formData(); const lang = toString(form.get("lang")) || "en"; const firstName = toString(form.get("contact_firstNameLat")); const lastName = toString(form.get("contact_lastNameLat")); const phone = toString(form.get("contact_phone")); const email = toString(form.get("contact_email")).toLowerCase(); debugEmail = email; const isCompany = form.get("policyholder_isCompany") === "on"; const birthDate = toString(form.get("policyholder_birthDate")); const address = toString(form.get("policyholder_address")); const policyholderPass = toString(form.get("policyholder_pass")); const companyInn = toString(form.get("company_inn")); const ceoFullName = toString(form.get("company_ceo_fullName")); const ceoTitle = toString(form.get("company_ceo_title")); const vehiclesByIdx: Record<string, VehicleInput> = {}; for (const [key, value] of form.entries()) { const match = key.match(/^vehicles\[(\d+)\]\[(\w+)\]$/); if (!match) continue; const [, idx, field] = match; vehiclesByIdx[idx] ||= { countryFrom: "", vehicleType: "", period: "", startDate: "", plate: "", vin: "", brend: "", year: "", engineType: "", engineCapacity: "", vehiclePower: "", powerUnit: "", comment: "", docs: [] }; if (field === "docs" && value instanceof File) { vehiclesByIdx[idx].docs.push(value); } else if (typeof value === "string" && isVehicleStringField(field)) { vehiclesByIdx[idx][field] = value.trim(); } } const vehicles = Object.keys(vehiclesByIdx).sort((a,b)=>Number(a)-Number(b)).map((key)=>vehiclesByIdx[key]).filter((vehicle)=>vehicle.plate || vehicle.docs.length > 0); vehicleCount = vehicles.length; if (!email || !phone || vehicles.length === 0) return NextResponse.json({ ok: false, message: "Missing required fields", traceId }, { status: 400 }); stage = "contact_lookup"; const duplicateResult = await bx("crm.duplicate.findbycomm", { type: "EMAIL", values: [email] }); stage = "contact_upsert"; const contactFields = { NAME: firstName, LAST_NAME: lastName, PHONE: phone ? [{ VALUE: phone, VALUE_TYPE: "WORK" }] : [], EMAIL: email ? [{ VALUE: email, VALUE_TYPE: "WORK" }] : [], UF_CRM_1753957395750: langToComm[lang] || "3953", UF_CRM_CONTACT_1686145698592: policyholderPass, ...(isCompany ? {} : { BIRTHDATE: birthDate, ADDRESS: address }) }; const existingContactId = getContactIdFromDuplicateResult(duplicateResult); let contactId: number; if (existingContactId) { contactId = existingContactId; await bx("crm.contact.update", { id: contactId, fields: contactFields }); } else { contactId = getCreatedId(await bx("crm.contact.add", { fields: contactFields })); } let companyId = 1817; if (isCompany) { stage = "company_upsert"; const companyList = await bx("crm.company.list", { filter: { UF_CRM_COMPANY_1692911328252: companyInn }, select: ["ID"], start: -1 }); const companyFields = { TITLE: companyInn ? `Company ${companyInn}` : `Company ${lastName} ${firstName}`.trim(), UF_CRM_COMPANY_1692911328252: companyInn, UF_CRM_1709019759168: ceoFullName, UF_CRM_1709019814756: ceoTitle }; const existingCompanyId = getIdFromFirstItem(companyList); if (existingCompanyId) { companyId = existingCompanyId; await bx("crm.company.update", { id: companyId, fields: companyFields }); } else { companyId = getCreatedId(await bx("crm.company.add", { fields: companyFields })); } } let hasFileProcessingIssue = false; for (const vehicle of vehicles) { const docs: BitrixFileValue[] = []; for (const file of vehicle.docs) { const normalizedName = `${Date.now()}_${normalizeBitrixFileName(file.name)}`; docs.push({ fileData: [normalizedName, await fileToBase64(file)] }); } const dealFields = { TITLE: `Lead ${lastName} ${firstName} ${vehicle.plate}`.trim(), CONTACT_ID: contactId, COMPANY_ID: companyId, UF_CRM_1686152306664: countryMap[vehicle.countryFrom] || "411", UF_CRM_1686152567597: vehicleTypeMap[vehicle.vehicleType] || "127", UF_CRM_1686152209741: periodMap[vehicle.period] || "115", UF_CRM_1686152149204: vehicle.startDate, UF_CRM_1686152485641: vehicle.plate, UF_CRM_1686152659867: vehicle.vin, UF_CRM_1686152515152: vehicle.brend, UF_CRM_1686152614718: vehicle.year ? Number(vehicle.year) : "", UF_CRM_1686152745455: engineTypeMap[vehicle.engineType] || "", UF_CRM_1686152831791: vehicle.engineCapacity ? Number(vehicle.engineCapacity) : "", UF_CRM_1686152861297: vehicle.vehiclePower ? Number(vehicle.vehiclePower) : "", UF_CRM_1686152902186: powerUnitMap[vehicle.powerUnit] || "", COMMENTS: vehicle.comment, UF_CRM_1693578066803: "401", UF_CRM_1686682902533: "813", UF_CRM_1690539097: "425", UF_CRM_1700656576088: "", UF_CRM_1686683031442: "231", ...(docs.length > 0 ? { UF_CRM_1686154280439: docs } : {}) }; stage = "deal_upsert"; await safeWriteLeadLog("INFO", "Attempting Bitrix deal add", { traceId, docsCount: docs.length, docs: vehicle.docs.map(describeFile) }); let dealId: number; try { dealId = getCreatedId(await bx("crm.deal.add", { fields: dealFields })); } catch (error) { const reason = error instanceof Error ? error.message : "Unknown error"; if (docs.length > 0) { await safeWriteLeadLog("ERROR", "Bitrix rejected files during deal add", { traceId, docsCount: docs.length, docs: vehicle.docs.map(describeFile), error: reason }); const fallbackDealFields = { ...dealFields }; delete (fallbackDealFields as Record<string, unknown>).UF_CRM_1686154280439; dealId = getCreatedId(await bx("crm.deal.add", { fields: fallbackDealFields })); hasFileProcessingIssue = true; } else { throw error; } }



      if (DEAL_REPORT_EMAIL_TO) {
        stage = "smtp_report";
        const html = buildDealEmailHtml({ dealId, contactId, companyId, lang, firstName, lastName, phone, email, isCompany, birthDate, address, policyholderPass, companyInn, ceoFullName, ceoTitle, vehicle });
        try {
          await sendSmtpMail({ to: DEAL_REPORT_EMAIL_TO, subject: `Сделка #${dealId}: ${lastName} ${firstName}`.trim(), html });
        } catch (smtpError) {
          console.error("SMTP send failed:", smtpError);
          await safeWriteLeadLog("ERROR", "SMTP send failed", {
            traceId,
            stage,
            error: toErrorMessage(smtpError),
          });
        }
      }
    }

    await safeWriteLeadLog("INFO", "Lead submit completed", { traceId, stage: "deal_upsert", email: debugEmail || "n/a", vehicles: vehicleCount, partialSuccess: hasFileProcessingIssue });
    return NextResponse.json({ ok: true, partialSuccess: hasFileProcessingIssue, traceId }); } catch (error) {
    const errorMessage = toErrorMessage(error);
    console.error(`[lead-api] Failed. traceId=${traceId}; stage=${stage}; email=${debugEmail || "n/a"}; vehicles=${vehicleCount}; message=${errorMessage}`);
    await safeWriteLeadLog("ERROR", "Lead submit failed", { traceId, stage, email: debugEmail || "n/a", vehicles: vehicleCount, error: errorMessage });
    return NextResponse.json({ ok: false, message: `Lead submit failed at stage "${stage}". Trace ID: ${traceId}. ${errorMessage}`, traceId }, { status: 500 });
  } }
