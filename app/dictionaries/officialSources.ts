import type { Lang } from "@/app/dictionaries/header";
import type { OfficialSourceId } from "@/app/officialSources/sources";

export type OfficialSourcesDictionary = {
  title: string;
  credentialsTitle: string;
  companyDetails: string;
  insuranceAgentStatus: string;
  verifyKnf: string;
  wartaAuthorization: string;
  agencyAgreement: string;
  documentNotPublished: string;
  productInfo: string;
  legalAct: string;
  lastVerified: string;
  sourceLabels: Record<OfficialSourceId, string>;
  sourceDescriptions: Record<OfficialSourceId, string>;
  fields: {
    legalName: string;
    legalForm: string;
    address: string;
    krs: string;
    nip: string;
    regon: string;
    knfNumber: string;
    insurer: string;
    authorizationNumber: string;
    authorizationDate: string;
    representation: string;
    boardMember: string;
    pkd: string;
    scope: string;
  };
  representationText: string;
  boardMemberText: string;
  pkdText: string;
  authorizationText: string;
  authorizationScope: string[];
  productInfoText: string;
  noPublicUrl: string;
  openSource: string;
};

const ru: OfficialSourcesDictionary = {
  title: "Официальные источники",
  credentialsTitle: "Подтверждение полномочий",
  companyDetails: "Реквизиты компании",
  insuranceAgentStatus: "Страховой агент, зарегистрированный в реестре страховых посредников KNF",
  verifyKnf: "Проверить запись в KNF",
  wartaAuthorization: "Доверенность WARTA",
  agencyAgreement: "Агентский договор",
  documentNotPublished: "Документ не публикуется на сайте",
  productInfo: "Информация о продукте",
  legalAct: "Нормативный акт",
  lastVerified: "Дата последней проверки",
  sourceLabels: {
    knf: "Запись SINEDIS в реестре страховых посредников KNF",
    krs: "Сведения KRS о SINEDIS",
    isap: "Официальный текст применимого нормативного акта в базе ISAP",
    "product-info": "Информация о страховом продукте и документах",
    "warta-authorization": "Доверенность WARTA для SINEDIS",
  },
  sourceDescriptions: {
    knf: "SINEDIS является страховым агентом, зарегистрированным в реестре страховых посредников KNF.",
    krs: "Реквизиты проверены по актуальной выписке KRS; публичная копия выписки не размещается на сайте.",
    isap: "Официальный источник правового текста в Internetowy System Aktów Prawnych.",
    "product-info": "Внутренняя страница с информацией о страховом продукте и документах.",
    "warta-authorization": "Реквизиты доверенности приведены текстом; файл доверенности не публикуется на сайте.",
  },
  fields: { legalName: "Полное наименование", legalForm: "Юридическая форма", address: "Адрес", krs: "KRS", nip: "NIP", regon: "REGON", knfNumber: "Номер записи KNF", insurer: "Страховщик", authorizationNumber: "Номер доверенности", authorizationDate: "Дата доверенности", representation: "Представительство", boardMember: "Член правления", pkd: "Виды деятельности", scope: "Подтверждённые полномочия" },
  representationText: "Каждый член правления вправе самостоятельно представлять компанию.",
  boardMemberText: "Сергей Анацко указан членом правления SINEDIS.",
  pkdText: "В видах деятельности присутствует деятельность страховых агентов и брокеров.",
  authorizationText: "Полномочия SINEDIS действовать как страховой агент TUiR WARTA S.A. подтверждены доверенностью № 07447/2024 от 1 марта 2024 года, выданной на основании агентского договора № BIAD/23315/2023.",
  authorizationScope: ["выполнение подготовительных действий, связанных с заключением договоров страхования", "приём и выдача страховых документов", "заключение договоров страхования от имени WARTA в установленных пределах", "подтверждение и приём уведомлений об уступке прав в предусмотренных случаях", "приём страховых премий и их частей по продуктам, указанным в приложении к доверенности"],
  productInfoText: "Объём полномочий определяется доверенностью, агентским договором и приложениями к ним.",
  noPublicUrl: "Документ не публикуется на сайте. Реквизиты предоставлены для проверки полномочий агентства.",
  openSource: "Открыть официальный источник",
};

const pl: OfficialSourcesDictionary = {
  ...ru,
  title: "Oficjalne źródła",
  credentialsTitle: "Potwierdzenie umocowania",
  companyDetails: "Dane spółki",
  insuranceAgentStatus: "Agent ubezpieczeniowy wpisany do rejestru pośredników ubezpieczeniowych KNF",
  verifyKnf: "Sprawdź wpis w KNF",
  wartaAuthorization: "Pełnomocnictwo WARTA",
  agencyAgreement: "Umowa agencyjna",
  documentNotPublished: "Dokument nie jest publikowany na stronie",
  productInfo: "Informacje o produkcie",
  legalAct: "Akt prawny",
  lastVerified: "Data ostatniej weryfikacji",
  sourceLabels: { knf: "Wpis SINEDIS w rejestrze pośredników ubezpieczeniowych KNF", krs: "Dane KRS SINEDIS", isap: "Oficjalny tekst właściwego aktu prawnego w bazie ISAP", "product-info": "Informacje o produkcie ubezpieczeniowym i dokumentach", "warta-authorization": "Pełnomocnictwo WARTA dla SINEDIS" },
  sourceDescriptions: { knf: "SINEDIS jest agentem ubezpieczeniowym wpisanym do rejestru pośredników ubezpieczeniowych KNF.", krs: "Dane sprawdzono na podstawie aktualnego odpisu KRS; publiczna kopia odpisu nie jest umieszczana na stronie.", isap: "Oficjalne źródło tekstu prawnego w Internetowym Systemie Aktów Prawnych.", "product-info": "Wewnętrzna strona z informacjami o produkcie ubezpieczeniowym i dokumentach.", "warta-authorization": "Dane pełnomocnictwa podano tekstowo; plik pełnomocnictwa nie jest publikowany na stronie." },
  fields: { legalName: "Pełna nazwa", legalForm: "Forma prawna", address: "Adres", krs: "KRS", nip: "NIP", regon: "REGON", knfNumber: "Numer wpisu KNF", insurer: "Ubezpieczyciel", authorizationNumber: "Numer pełnomocnictwa", authorizationDate: "Data pełnomocnictwa", representation: "Reprezentacja", boardMember: "Członek zarządu", pkd: "Przedmiot działalności", scope: "Potwierdzony zakres umocowania" },
  representationText: "Każdy członek zarządu może samodzielnie reprezentować spółkę.",
  boardMemberText: "Sergey Anatska jest wskazany jako członek zarządu SINEDIS.",
  pkdText: "W przedmiocie działalności występuje działalność agentów i brokerów ubezpieczeniowych.",
  authorizationText: "Umocowanie SINEDIS do działania jako agent ubezpieczeniowy TUiR WARTA S.A. potwierdza pełnomocnictwo nr 07447/2024 z 1 marca 2024 r., wydane na podstawie umowy agencyjnej nr BIAD/23315/2023.",
  authorizationScope: ["wykonywanie czynności przygotowawczych związanych z zawieraniem umów ubezpieczenia", "przyjmowanie i wydawanie dokumentów ubezpieczeniowych", "zawieranie umów ubezpieczenia w imieniu WARTA w określonych granicach", "potwierdzanie i przyjmowanie zawiadomień o cesji praw w przewidzianych przypadkach", "przyjmowanie składek ubezpieczeniowych i ich części dla produktów wskazanych w załączniku do pełnomocnictwa"],
  productInfoText: "Zakres umocowania określają pełnomocnictwo, umowa agencyjna oraz załączniki do nich.",
  noPublicUrl: "Dokument nie jest publikowany na stronie. Dane podano w celu weryfikacji umocowania agencji.",
  openSource: "Otwórz oficjalne źródło",
};

const en: OfficialSourcesDictionary = {
  ...ru,
  title: "Official sources",
  credentialsTitle: "Authority confirmation",
  companyDetails: "Company details",
  insuranceAgentStatus: "Insurance agent registered in the KNF register of insurance intermediaries",
  verifyKnf: "Check the KNF entry",
  wartaAuthorization: "WARTA power of attorney",
  agencyAgreement: "Agency agreement",
  documentNotPublished: "The document is not published on the website",
  productInfo: "Product information",
  legalAct: "Legal act",
  lastVerified: "Last verification date",
  sourceLabels: { knf: "SINEDIS entry in the KNF register of insurance intermediaries", krs: "SINEDIS KRS details", isap: "Official text of the applicable legal act in the ISAP database", "product-info": "Insurance product and document information", "warta-authorization": "WARTA power of attorney for SINEDIS" },
  sourceDescriptions: { knf: "SINEDIS is an insurance agent registered in the KNF register of insurance intermediaries.", krs: "Details were checked against a current KRS extract; a public copy of the extract is not hosted on the website.", isap: "Official legal-text source in the Internetowy System Aktów Prawnych.", "product-info": "Internal page with insurance product and document information.", "warta-authorization": "The power-of-attorney details are shown as text; the file is not published on the website." },
  fields: { legalName: "Full legal name", legalForm: "Legal form", address: "Address", krs: "KRS", nip: "NIP", regon: "REGON", knfNumber: "KNF register number", insurer: "Insurer", authorizationNumber: "Power-of-attorney number", authorizationDate: "Power-of-attorney date", representation: "Representation", boardMember: "Management board member", pkd: "Business activity", scope: "Confirmed authority scope" },
  representationText: "Each management board member may represent the company independently.",
  boardMemberText: "Anatska Sergey is listed as a management board member of SINEDIS.",
  pkdText: "The business activities include insurance agents and brokers activity.",
  authorizationText: "SINEDIS authority to act as an insurance agent of TUiR WARTA S.A. is confirmed by power of attorney No. 07447/2024 dated March 1, 2024, issued under agency agreement No. BIAD/23315/2023.",
  authorizationScope: ["performing preparatory activities connected with insurance contracts", "receiving and issuing insurance documents", "concluding insurance contracts on behalf of WARTA within defined limits", "confirming and receiving notices of assignment of rights in specified cases", "receiving insurance premiums and instalments for products listed in the power-of-attorney appendix"],
  productInfoText: "The scope of authority is defined by the power of attorney, agency agreement and their appendices.",
  noPublicUrl: "The document is not published on the website. The details are provided to verify the agency’s authority.",
  openSource: "Open official source",
};

const be: OfficialSourcesDictionary = {
  ...ru,
  title: "Афіцыйныя крыніцы",
  credentialsTitle: "Пацвярджэнне паўнамоцтваў",
  companyDetails: "Рэквізіты кампаніі",
  insuranceAgentStatus: "Страхавы агент, зарэгістраваны ў рэестры страхавых пасярэднікаў KNF",
  verifyKnf: "Праверыць запіс у KNF",
  wartaAuthorization: "Даверанасць WARTA",
  agencyAgreement: "Агенцкі дагавор",
  documentNotPublished: "Дакумент не публікуецца на сайце",
  productInfo: "Інфармацыя пра прадукт",
  legalAct: "Нарматыўны акт",
  lastVerified: "Дата апошняй праверкі",
  sourceLabels: { knf: "Запіс SINEDIS у рэестры страхавых пасярэднікаў KNF", krs: "Звесткі KRS пра SINEDIS", isap: "Афіцыйны тэкст прымянімага нарматыўнага акта ў базе ISAP", "product-info": "Інфармацыя пра страхавы прадукт і дакументы", "warta-authorization": "Даверанасць WARTA для SINEDIS" },
  sourceDescriptions: { knf: "SINEDIS з’яўляецца страхавым агентам, зарэгістраваным у рэестры страхавых пасярэднікаў KNF.", krs: "Рэквізіты правераны па актуальнай выпісцы KRS; публічная копія выпіскі не размяшчаецца на сайце.", isap: "Афіцыйная крыніца прававога тэксту ў Internetowy System Aktów Prawnych.", "product-info": "Унутраная старонка з інфармацыяй пра страхавы прадукт і дакументы.", "warta-authorization": "Рэквізіты даверанасці пададзены тэкстам; файл даверанасці не публікуецца на сайце." },
  fields: { legalName: "Поўнае найменне", legalForm: "Юрыдычная форма", address: "Адрас", krs: "KRS", nip: "NIP", regon: "REGON", knfNumber: "Нумар запісу KNF", insurer: "Страхоўшчык", authorizationNumber: "Нумар даверанасці", authorizationDate: "Дата даверанасці", representation: "Прадстаўніцтва", boardMember: "Член праўлення", pkd: "Віды дзейнасці", scope: "Пацверджаныя паўнамоцтвы" },
  representationText: "Кожны член праўлення мае права самастойна прадстаўляць кампанію.",
  boardMemberText: "Анацка Сяргей указаны членам праўлення SINEDIS.",
  pkdText: "У відах дзейнасці прысутнічае дзейнасць страхавых агентаў і брокераў.",
  authorizationText: "Паўнамоцтвы SINEDIS дзейнічаць як страхавы агент TUiR WARTA S.A. пацверджаны даверанасцю № 07447/2024 ад 1 сакавіка 2024 года, выдадзенай на падставе агенцкага дагавора № BIAD/23315/2023.",
  authorizationScope: ["выкананне падрыхтоўчых дзеянняў, звязаных з заключэннем дагавораў страхавання", "прыём і выдача страхавых дакументаў", "заключэнне дагавораў страхавання ад імя WARTA ва ўстаноўленых межах", "пацвярджэнне і прыём паведамленняў аб уступцы правоў у прадугледжаных выпадках", "прыём страхавых прэмій і іх частак па прадуктах, указаных у дадатку да даверанасці"],
  productInfoText: "Аб’ём паўнамоцтваў вызначаецца даверанасцю, агенцкім дагаворам і дадаткамі да іх.",
  noPublicUrl: "Дакумент не публікуецца на сайце. Рэквізіты пададзены для праверкі паўнамоцтваў агенцтва.",
  openSource: "Адкрыць афіцыйную крыніцу",
};

export const officialSourcesDictionary: Record<Lang, OfficialSourcesDictionary> = {
  ru, en, pl, be,
  uk: { ...ru, title: "Офіційні джерела", credentialsTitle: "Підтвердження повноважень" },
  kk: { ...ru, title: "Ресми дереккөздер", credentialsTitle: "Өкілеттікті растау" },
  uz: { ...en, title: "Rasmiy manbalar", credentialsTitle: "Vakolatni tasdiqlash" },
  az: { ...en, title: "Rəsmi mənbələr", credentialsTitle: "Səlahiyyətin təsdiqi" },
  tr: { ...en, title: "Resmi kaynaklar", credentialsTitle: "Yetki teyidi" },
  ka: { ...en, title: "ოფიციალური წყაროები", credentialsTitle: "უფლებამოსილების დადასტურება" },
  hy: { ...en, title: "Պաշտոնական աղբյուրներ", credentialsTitle: "Լիազորությունների հաստատում" },
  fa: { ...en, title: "منابع رسمی", credentialsTitle: "تأیید اختیار" },
  ckb: { ...en, title: "سەرچاوە فەرمییەکان", credentialsTitle: "پشتڕاستکردنەوەی دەسەڵات" },
  kmr: { ...en, title: "Çavkaniyên fermî", credentialsTitle: "Pejirandina desthilatê" },
  ar: { ...en, title: "المصادر الرسمية", credentialsTitle: "تأكيد الصلاحية" },
  he: { ...en, title: "מקורות רשמיים", credentialsTitle: "אישור סמכות" },
  ro: { ...en, title: "Surse oficiale", credentialsTitle: "Confirmarea mandatului" },
  sr: { ...en, title: "Званични извори", credentialsTitle: "Потврда овлашћења" },
  sq: { ...en, title: "Burime zyrtare", credentialsTitle: "Konfirmimi i autorizimit" },
  mn: { ...en, title: "Албан эх сурвалж", credentialsTitle: "Эрх мэдлийн баталгаа" },
};

export function getOfficialSourcesDictionary(lang: Lang): OfficialSourcesDictionary {
  return officialSourcesDictionary[lang];
}
