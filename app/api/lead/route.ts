import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
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

const langToComm: Record<string, string> = {ru: "3937", en: "3953", kz: "3945" };

const countryMap: Record<string, string> = { AR: "529", AZ: "531", BY: "123", GE: "523", KZ: "385", KG: "527", MD: "521", MN: "383", RU: "125", TR: "2253", UA: "519", UZ: "525", OTHER: "411" };
const vehicleTypeMap: Record<string, string> = { car: "127", trailer: "129", bus: "131", moto: "217", special: "457", truck: "453" };
const periodMap: Record<string, string> = { "30": "115", "90": "117", "180": "119", "365": "121" };

type BitrixResponse = { result?: unknown; error?: string; error_description?: string };

async function bx(method: string, payload: unknown): Promise<unknown> { if (!BITRIX_WEBHOOK) throw new Error("BITRIX_WEBHOOK_URL is not set"); const res = await fetch(`${BITRIX_WEBHOOK}/${method}.json`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), cache: "no-store" }); const data = (await res.json()) as BitrixResponse; if (!res.ok || data.error) throw new Error(data.error_description || data.error || "Bitrix error"); return data.result; }
function toString(v: FormDataEntryValue | null): string { return typeof v === "string" ? v.trim() : ""; }
async function fileToBase64(file: File): Promise<string> { return Buffer.from(await file.arrayBuffer()).toString("base64"); }
type BitrixFileValue = { fileData: [string, string] };
function getIdFromFirstItem(value: unknown): number | null { if (!Array.isArray(value)) return null; const first = value[0]; if (!first || typeof first !== "object") return null; const id = (first as { ID?: unknown }).ID; const parsed = Number(id); return Number.isFinite(parsed) && parsed > 0 ? parsed : null; }
function getCreatedId(value: unknown): number { const parsed = Number(value); if (!Number.isFinite(parsed) || parsed <= 0) throw new Error("Bitrix returned invalid ID"); return parsed; }
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

export async function POST(req: Request) { try { const form = await req.formData(); const lang = toString(form.get("lang")) || "en"; const firstName = toString(form.get("contact_firstNameLat")); const lastName = toString(form.get("contact_lastNameLat")); const phone = toString(form.get("contact_phone")); const email = toString(form.get("contact_email")).toLowerCase(); const isCompany = form.get("policyholder_isCompany") === "on"; const birthDate = toString(form.get("policyholder_birthDate")); const address = toString(form.get("policyholder_address")); const policyholderPass = toString(form.get("policyholder_pass")); const companyInn = toString(form.get("company_inn")); const ceoFullName = toString(form.get("company_ceo_fullName")); const ceoTitle = toString(form.get("company_ceo_title")); const vehiclesByIdx: Record<string, VehicleInput> = {}; for (const [key, value] of form.entries()) { const match = key.match(/^vehicles\[(\d+)\]\[(\w+)\]$/); if (!match) continue; const [, idx, field] = match; vehiclesByIdx[idx] ||= { countryFrom: "", vehicleType: "", period: "", startDate: "", plate: "", vin: "", brend: "", year: "", engineType: "", engineCapacity: "", vehiclePower: "", powerUnit: "", comment: "", docs: [] }; if (field === "docs" && value instanceof File) { vehiclesByIdx[idx].docs.push(value); } else if (typeof value === "string" && isVehicleStringField(field)) { vehiclesByIdx[idx][field] = value.trim(); } } const vehicles = Object.keys(vehiclesByIdx).sort((a,b)=>Number(a)-Number(b)).map((key)=>vehiclesByIdx[key]).filter((vehicle)=>vehicle.plate || vehicle.docs.length > 0); if (!email || !phone || vehicles.length === 0) return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 }); const contactList = await bx("crm.contact.list", { filter: { "=EMAIL": email }, select: ["ID"], start: -1 }); const contactFields = { NAME: firstName, LAST_NAME: lastName, PHONE: phone ? [{ VALUE: phone, VALUE_TYPE: "WORK" }] : [], EMAIL: email ? [{ VALUE: email, VALUE_TYPE: "WORK" }] : [], UF_CRM_1753957395750: langToComm[lang] || "3953", UF_CRM_CONTACT_1686145698592: policyholderPass, ...(isCompany ? {} : { BIRTHDATE: birthDate, ADDRESS: address }) }; const existingContactId = getIdFromFirstItem(contactList); let contactId: number; if (existingContactId) { contactId = existingContactId; await bx("crm.contact.update", { id: contactId, fields: contactFields }); } else { contactId = getCreatedId(await bx("crm.contact.add", { fields: contactFields })); } let companyId = 1817; if (isCompany) { const companyList = await bx("crm.company.list", { filter: { UF_CRM_COMPANY_1692911328252: companyInn }, select: ["ID"], start: -1 }); const companyFields = { TITLE: companyInn ? `Company ${companyInn}` : `Company ${lastName} ${firstName}`.trim(), UF_CRM_COMPANY_1692911328252: companyInn, UF_CRM_1709019759168: ceoFullName, UF_CRM_1709019814756: ceoTitle }; const existingCompanyId = getIdFromFirstItem(companyList); if (existingCompanyId) { companyId = existingCompanyId; await bx("crm.company.update", { id: companyId, fields: companyFields }); } else { companyId = getCreatedId(await bx("crm.company.add", { fields: companyFields })); } } for (const vehicle of vehicles) { const docs: BitrixFileValue[] = []; for (const file of vehicle.docs) docs.push({ fileData: [file.name, await fileToBase64(file)] }); const dealId = getCreatedId(await bx("crm.deal.add", { fields: { TITLE: `Lead ${lastName} ${firstName} ${vehicle.plate}`.trim(), CONTACT_ID: contactId, COMPANY_ID: companyId, UF_CRM_1686152306664: countryMap[vehicle.countryFrom] || "411", UF_CRM_1686152567597: vehicleTypeMap[vehicle.vehicleType] || "127", UF_CRM_1686152209741: periodMap[vehicle.period] || "115", UF_CRM_1686152149204: vehicle.startDate, UF_CRM_1686152485641: vehicle.plate, UF_CRM_1686152659867: vehicle.vin, UF_CRM_1686152515152: vehicle.brend, UF_CRM_1686152614718: vehicle.year ? Number(vehicle.year) : "", UF_CRM_1686152745455: engineTypeMap[vehicle.engineType] || "", UF_CRM_1686152831791: vehicle.engineCapacity ? Number(vehicle.engineCapacity) : "", UF_CRM_1686152861297: vehicle.vehiclePower ? Number(vehicle.vehiclePower) : "", UF_CRM_1686152902186: powerUnitMap[vehicle.powerUnit] || "", UF_CRM_1686154280439: docs, COMMENTS: vehicle.comment, UF_CRM_1693578066803: "401", UF_CRM_1686682902533: "813", UF_CRM_1690539097: "425", UF_CRM_1700656576088: "", UF_CRM_1686683031442: "231" } }));
      if (DEAL_REPORT_EMAIL_TO) {
        const html = buildDealEmailHtml({ dealId, contactId, companyId, lang, firstName, lastName, phone, email, isCompany, birthDate, address, policyholderPass, companyInn, ceoFullName, ceoTitle, vehicle });
        await sendSmtpMail({ to: DEAL_REPORT_EMAIL_TO, subject: `Сделка #${dealId}: ${lastName} ${firstName}`.trim(), html });
      }
    }

    return NextResponse.json({ ok: true }); } catch (error) { return NextResponse.json({ ok: false, message: error instanceof Error ? error.message : "Unknown error" }, { status: 500 }); } }
