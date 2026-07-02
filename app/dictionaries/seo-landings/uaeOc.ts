import type { Lang } from "@/app/dictionaries/header";

export type UaeOcDictionary = {
  seo: { title: string; description: string };
  breadcrumbTitle: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    noticeLabel: string;
    notice: string;
    primaryCta: string;
    secondaryCta: string;
    cardLabel: string;
    facts: Array<{ label: string; value: string }>;
  };
  answers: Array<{ tone: "yes" | "warning" | "no"; label: string; title: string; text: string }>;
  suitability: {
    eyebrow: string;
    title: string;
    text: string;
    yesTitle: string;
    noTitle: string;
    yesItems: string[];
    noItems: string[];
  };
  routeWarning: { eyebrow: string; title: string; text: string; cta: string };
  coverage: {
    eyebrow: string;
    title: string;
    text: string;
    listLabel: string;
    countries: string[];
    warningTitle: string;
    warningText: string;
    warningNote: string;
  };
  documents: {
    eyebrow: string;
    title: string;
    text: string;
    vehicleTitle: string;
    policyholderTitle: string;
    vehicleItems: string[];
    policyholderItems: string[];
  };
  price: { eyebrow: string; title: string; text: string; factors: string[] };
  timing: { eyebrow: string; title: string; text: string; notice: string };
  steps: { eyebrow: string; title: string; items: Array<{ title: string; text: string }> };
  beforeTrip: { eyebrow: string; title: string; text: string; items: string[] };
  faq: { eyebrow: string; title: string; items: Array<{ q: string; a: string }> };
  finalCta: { eyebrow: string; title: string; text: string; button: string };
};

const ru: UaeOcDictionary = {
  seo: {
    title: "OC graniczne для авто из ОАЭ — страховка для поездки по Европе",
    description: "Пограничное страхование OC graniczne для автомобиля из ОАЭ: страны покрытия, документы, стоимость, ручная проверка и онлайн-заявка на PDF-полис.",
  },
  breadcrumbTitle: "Страховка для авто из ОАЭ",
  hero: {
    eyebrow: "OC graniczne для авто из ОАЭ",
    title: "Страховка для автомобиля из ОАЭ для поездки по Европе",
    lead: "Если автомобиль зарегистрирован в Объединённых Арабских Эмиратах и временно въезжает в Польшу или другие страны покрытия, может потребоваться пограничное страхование гражданской ответственности — OC graniczne.",
    noticeLabel: "Коротко:",
    notice: "полис подходит для авто из ОАЭ, если поездка проходит по странам, указанным в документе. Он не действует автоматически во всей Европе и не заменяет КАСКО.",
    primaryCta: "Оформить полис онлайн",
    secondaryCta: "Какие документы нужны",
    cardLabel: "Краткие условия",
    facts: [
      { label: "Страна регистрации", value: "ОАЭ" },
      { label: "Тип полиса", value: "OC graniczne" },
      { label: "Формат получения", value: "PDF на email" },
      { label: "Проверка", value: "Ручная проверка данных" },
    ],
  },
  answers: [
    { tone: "yes", label: "Да, подходит", title: "Если авто зарегистрировано в ОАЭ", text: "OC graniczne может быть оформлен для автомобиля из ОАЭ, если транспортное средство временно используется в Польше или другой стране покрытия." },
    { tone: "warning", label: "Важно проверить", title: "Маршрут и страны покрытия", text: "Полис действует только в странах, указанных в документе. Если страна маршрута не указана, для неё нужен другой страховой продукт." },
    { tone: "no", label: "Не покрывает", title: "Собственный автомобиль", text: "OC graniczne покрывает гражданскую ответственность перед третьими лицами. Это не КАСКО и не страхование ремонта вашего автомобиля." },
  ],
  suitability: {
    eyebrow: "Применимость",
    title: "Кому подходит страховка для авто из ОАЭ",
    text: "Эта страница относится к автомобилям, зарегистрированным в Объединённых Арабских Эмиратах. Для автомобилей с регистрацией в странах ЕЭЗ условия будут другими.",
    yesTitle: "Подходит",
    noTitle: "Не подходит",
    yesItems: ["автомобиль зарегистрирован в ОАЭ;", "поездка проходит через Польшу или страны покрытия;", "нет действующего полиса, признаваемого на маршруте;", "есть регистрационный документ автомобиля;", "данные автомобиля можно проверить по документам."],
    noItems: ["автомобиль зарегистрирован в стране ЕЭЗ;", "нужна защита собственного автомобиля;", "маршрут проходит по странам вне покрытия;", "нужно оформить полис задним числом;", "нет читаемого регистрационного документа."],
  },
  routeWarning: {
    eyebrow: "Особенность авто из ОАЭ",
    title: "Проверьте транзит через Турцию и Балканы",
    text: "Для автомобиля из ОАЭ маршрут в Европу часто проходит через Турцию, Сербию, Черногорию, Северную Македонию, Боснию и Герцеговину или другие страны Балкан. OC graniczne не следует считать действительным для таких стран, если они не указаны в полисе.",
    cta: "Проверить покрытие",
  },
  coverage: {
    eyebrow: "Территория действия",
    title: "Где действует OC graniczne",
    text: "Полис действует только в странах, указанных в страховом документе как покрываемые. Перед поездкой нужно проверить, что каждая страна маршрута включена в покрытие.",
    listLabel: "Страны покрытия",
    countries: ["Австрия", "Бельгия", "Болгария", "Кипр", "Чехия", "Германия", "Дания", "Испания", "Эстония", "Франция", "Финляндия", "Греция", "Венгрия", "Хорватия", "Италия", "Ирландия", "Исландия", "Литва", "Латвия", "Норвегия", "Польша", "Румыния", "Швеция", "Словакия", "Словения", "Швейцария"],
    warningTitle: "Где полис не действует",
    warningText: "Если Турция, Сербия, Черногория, Северная Македония, Босния и Герцеговина, Албания, Косово или другая страна маршрута не указаны в документе, этот полис не покрывает такую часть поездки.",
    warningNote: "Для таких стран нужно заранее уточнить местное пограничное страхование или другой подходящий продукт.",
  },
  documents: {
    eyebrow: "Документы",
    title: "Что нужно для оформления",
    text: "Для авто из ОАЭ важна читаемость регистрационного документа. Если документ оформлен на арабском языке, данные могут потребовать дополнительной проверки.",
    vehicleTitle: "Данные автомобиля",
    policyholderTitle: "Данные страхователя",
    vehicleItems: ["свидетельство о регистрации ТС;", "номерной знак;", "VIN;", "марка и модель;", "тип транспортного средства;", "год выпуска;", "страна регистрации — ОАЭ."],
    policyholderItems: ["паспорт или ID;", "имя и фамилия;", "email для получения PDF;", "телефон или мессенджер;", "дата начала страхования;", "срок действия полиса;", "маршрут поездки, если он нестандартный."],
  },
  price: {
    eyebrow: "Стоимость",
    title: "Сколько стоит страховка",
    text: "Стоимость зависит от типа транспортного средства, срока страхования и правил страховщика. Калькулятор на сайте может показать ориентировочную стоимость, но окончательная возможность оформления подтверждается после проверки данных.",
    factors: ["тип ТС;", "срок действия полиса;", "страна регистрации автомобиля;", "дата начала страхования;", "корректность документов."],
  },
  timing: {
    eyebrow: "Срок оформления",
    title: "Когда подавать заявку",
    text: "Заявку лучше отправить за 1–2 рабочих дня до поездки. Если все данные корректны, оформление может пройти быстрее, но для автомобиля из ОАЭ возможна ручная проверка.",
    notice: "Полис не оформляется задним числом. Дата начала действия должна быть указана до использования документа.",
  },
  steps: {
    eyebrow: "Порядок оформления",
    title: "Как получить полис",
    items: [
      { title: "Заполните заявку", text: "Укажите страну регистрации автомобиля, тип ТС, срок и дату начала страхования." },
      { title: "Прикрепите документы", text: "Загрузите регистрационный документ автомобиля и данные страхователя." },
      { title: "Дождитесь проверки", text: "Мы проверим данные автомобиля, VIN, номерной знак и возможность оформления." },
      { title: "Оплатите полис", text: "После подтверждения получите инструкции по оплате." },
      { title: "Получите PDF", text: "После выпуска полис отправляется на email, указанный в заявке." },
    ],
  },
  beforeTrip: {
    eyebrow: "Перед поездкой",
    title: "Что проверить в полисе",
    text: "Не используйте полис, если в нём есть ошибка. Данные в документе должны совпадать с регистрационным документом автомобиля.",
    items: ["Номерной знак", "VIN", "Страна регистрации", "Марка и модель", "Тип ТС", "Срок действия", "Данные страхователя", "Страны покрытия"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Частые вопросы",
    items: [
      { q: "Можно ли оформить OC graniczne для автомобиля из ОАЭ онлайн?", a: "Да. Заявку можно отправить онлайн. После проверки данных, оплаты и выпуска полиса PDF-документ направляется на email." },
      { q: "Подходит ли этот полис для автомобиля с регистрацией ОАЭ?", a: "Да, может подойти, потому что ОАЭ не входят в Европейскую экономическую зону. Возможность оформления зависит от типа ТС, документов и маршрута." },
      { q: "Действует ли OC graniczne в Польше?", a: "Да, если Польша указана в полисе как страна покрытия и срок действия полиса уже начался." },
      { q: "Действует ли этот полис в Турции или Сербии?", a: "Нет, если Турция или Сербия не указаны в документе как покрываемые страны. Для этих стран может потребоваться отдельное местное страхование." },
      { q: "Можно ли оформить полис в день поездки?", a: "Иногда это возможно, если все данные корректны. Но для автомобиля из ОАЭ лучше подать заявку за 1–2 рабочих дня до поездки." },
      { q: "Можно ли оформить OC graniczne задним числом?", a: "Нет. Полис не оформляется задним числом. Дата начала действия должна быть указана до использования документа." },
      { q: "Можно ли оформить страховку без техпаспорта?", a: "Нет. Для оформления нужен регистрационный документ автомобиля. Без него нельзя корректно проверить номер, VIN, страну регистрации и данные транспортного средства." },
      { q: "Что делать, если в полисе ошибка?", a: "Не используйте полис с ошибочными данными. Свяжитесь с сервисом оформления до поездки. В зависимости от ошибки может потребоваться исправление или переоформление." },
    ],
  },
  finalCta: {
    eyebrow: "Готовы оформить?",
    title: "Отправьте заявку на OC graniczne для автомобиля из ОАЭ",
    text: "Подготовьте регистрационный документ автомобиля, укажите дату начала страхования и проверьте маршрут. После проверки данных вы получите расчёт и инструкции по оплате.",
    button: "Оформить полис онлайн",
  },
};

const en: UaeOcDictionary = {
  ...ru,
  seo: { title: "OC graniczne for UAE-registered cars — Europe trip insurance", description: "Border liability insurance for a UAE-registered vehicle: covered countries, documents, price logic, manual review and online application for a PDF policy." },
  breadcrumbTitle: "Insurance for UAE-registered cars",
  hero: {
    eyebrow: "OC graniczne for UAE cars",
    title: "Insurance for a UAE-registered car travelling in Europe",
    lead: "If a vehicle is registered in the United Arab Emirates and temporarily enters Poland or another covered country, border third-party liability insurance — OC graniczne — may be required.",
    noticeLabel: "In short:",
    notice: "the policy can fit a UAE-registered vehicle if the journey goes through countries listed in the document. It is not automatically valid across all Europe and does not replace comprehensive cover.",
    primaryCta: "Apply online",
    secondaryCta: "Required documents",
    cardLabel: "Key conditions",
    facts: [
      { label: "Registration country", value: "UAE" },
      { label: "Policy type", value: "OC graniczne" },
      { label: "Delivery format", value: "PDF by email" },
      { label: "Review", value: "Manual data check" },
    ],
  },
  answers: [
    { tone: "yes", label: "Yes, it can fit", title: "If the car is registered in the UAE", text: "OC graniczne may be arranged for a UAE-registered vehicle if it is temporarily used in Poland or another covered country." },
    { tone: "warning", label: "Check carefully", title: "Route and covered countries", text: "The policy is valid only in countries listed in the document. If a route country is not listed, another insurance product is needed for that country." },
    { tone: "no", label: "Does not cover", title: "Your own vehicle", text: "OC graniczne covers third-party liability. It is not comprehensive insurance and does not cover repairs to your own vehicle." },
  ],
  suitability: { ...ru.suitability, eyebrow: "Eligibility", title: "Who UAE car insurance fits", text: "This page applies to vehicles registered in the United Arab Emirates. Vehicles registered in EEA countries follow different rules.", yesTitle: "Fits", noTitle: "Does not fit", yesItems: ["the vehicle is registered in the UAE;", "the trip goes through Poland or covered countries;", "there is no valid policy recognized on the route;", "the vehicle registration document is available;", "vehicle data can be checked from documents."], noItems: ["the vehicle is registered in an EEA country;", "you need protection for your own vehicle;", "the route goes through countries outside the coverage;", "you need backdated insurance;", "there is no readable registration document."] },
  routeWarning: { eyebrow: "UAE vehicle route detail", title: "Check transit through Turkey and the Balkans", text: "For a UAE-registered vehicle, the route to Europe often goes through Turkey, Serbia, Montenegro, North Macedonia, Bosnia and Herzegovina or other Balkan countries. Do not treat OC graniczne as valid for such countries unless they are listed in the policy.", cta: "Check coverage" },
  coverage: { ...ru.coverage, eyebrow: "Territory", title: "Where OC graniczne is valid", text: "The policy is valid only in countries listed in the insurance document as covered. Before travelling, check that every country on the route is included.", listLabel: "Covered countries", warningTitle: "Where the policy is not valid", warningText: "If Turkey, Serbia, Montenegro, North Macedonia, Bosnia and Herzegovina, Albania, Kosovo or another route country is not listed in the document, this policy does not cover that part of the trip.", warningNote: "For those countries, check local border insurance or another suitable product in advance." },
  documents: { ...ru.documents, eyebrow: "Documents", title: "What is needed to apply", text: "For a UAE vehicle, the readability of the registration document is important. If the document is in Arabic, the data may need additional verification.", vehicleTitle: "Vehicle data", policyholderTitle: "Policyholder data", vehicleItems: ["vehicle registration certificate;", "plate number;", "VIN;", "make and model;", "vehicle type;", "year of manufacture;", "registration country — UAE."], policyholderItems: ["passport or ID;", "first and last name;", "email for PDF delivery;", "phone or messenger;", "insurance start date;", "policy period;", "trip route if non-standard."] },
  price: { eyebrow: "Price", title: "How much the insurance costs", text: "The price depends on vehicle type, insurance period and insurer rules. The website calculator can show an estimated cost, but final availability is confirmed after data review.", factors: ["vehicle type;", "policy period;", "vehicle registration country;", "insurance start date;", "document correctness."] },
  timing: { eyebrow: "Processing time", title: "When to submit the application", text: "It is better to send the application 1–2 working days before travel. If all data is correct, processing can be faster, but a UAE-registered vehicle may require manual review.", notice: "The policy cannot be issued retroactively. The start date must be set before using the document." },
  steps: { eyebrow: "Application process", title: "How to get the policy", items: [ { title: "Fill in the application", text: "Enter registration country, vehicle type, period and insurance start date." }, { title: "Attach documents", text: "Upload the vehicle registration document and policyholder data." }, { title: "Wait for review", text: "We check vehicle data, VIN, plate number and issuing availability." }, { title: "Pay for the policy", text: "After confirmation, you receive payment instructions." }, { title: "Receive PDF", text: "After issue, the policy is sent to the email used in the application." } ] },
  beforeTrip: { eyebrow: "Before travel", title: "What to check in the policy", text: "Do not use the policy if it contains an error. The document data must match the vehicle registration document.", items: ["Plate number", "VIN", "Registration country", "Make and model", "Vehicle type", "Validity period", "Policyholder data", "Covered countries"] },
  faq: { eyebrow: "FAQ", title: "Frequently asked questions", items: [ { q: "Can I arrange OC graniczne for a UAE car online?", a: "Yes. You can send the application online. After data review, payment and issue, the PDF policy is sent by email." }, { q: "Does this policy fit a UAE-registered vehicle?", a: "Yes, it may fit because the UAE is not in the European Economic Area. Availability depends on vehicle type, documents and route." }, { q: "Is OC graniczne valid in Poland?", a: "Yes, if Poland is listed in the policy as a covered country and the policy period has started." }, { q: "Is this policy valid in Turkey or Serbia?", a: "No, unless Turkey or Serbia is listed in the document as a covered country. Separate local insurance may be needed." }, { q: "Can I arrange the policy on the travel day?", a: "Sometimes it is possible if all data is correct. For a UAE vehicle, it is better to apply 1–2 working days before travel." }, { q: "Can OC graniczne be backdated?", a: "No. The policy cannot be issued retroactively. The start date must be set before using the document." }, { q: "Can I buy insurance without the registration document?", a: "No. The registration document is needed to verify plate, VIN, registration country and vehicle data." }, { q: "What if there is an error in the policy?", a: "Do not use a policy with incorrect data. Contact the arrangement service before travel. The policy may need correction or reissue." } ] },
  finalCta: { eyebrow: "Ready to apply?", title: "Send an OC graniczne application for a UAE-registered car", text: "Prepare the vehicle registration document, enter the insurance start date and check the route. After data review, you receive a quote and payment instructions.", button: "Apply online" },
};

const pl: UaeOcDictionary = {
  ...en,
  seo: { title: "OC graniczne dla auta z ZEA — ubezpieczenie na podróż po Europie", description: "Ubezpieczenie graniczne OC dla pojazdu zarejestrowanego w ZEA: kraje ochrony, dokumenty, koszt, weryfikacja ręczna i wniosek online o polisę PDF." },
  breadcrumbTitle: "Ubezpieczenie dla auta z ZEA",
  hero: { ...en.hero, eyebrow: "OC graniczne dla auta z ZEA", title: "Ubezpieczenie samochodu z ZEA na podróż po Europie", lead: "Jeżeli pojazd jest zarejestrowany w Zjednoczonych Emiratach Arabskich i tymczasowo wjeżdża do Polski lub innego kraju ochrony, może być potrzebne graniczne ubezpieczenie OC — OC graniczne.", noticeLabel: "Krótko:", notice: "polisa może pasować do auta z ZEA, jeśli trasa przebiega przez kraje wskazane w dokumencie. Nie działa automatycznie w całej Europie i nie zastępuje AC.", primaryCta: "Złóż wniosek online", secondaryCta: "Jakie dokumenty są potrzebne", cardLabel: "Warunki w skrócie", facts: [ { label: "Kraj rejestracji", value: "ZEA" }, { label: "Typ polisy", value: "OC graniczne" }, { label: "Format otrzymania", value: "PDF na email" }, { label: "Weryfikacja", value: "Ręczne sprawdzenie danych" } ] },
  answers: [ { tone: "yes", label: "Tak, może pasować", title: "Jeśli auto jest zarejestrowane w ZEA", text: "OC graniczne może zostać zawarte dla pojazdu z ZEA, jeśli pojazd jest czasowo używany w Polsce lub innym kraju ochrony." }, { tone: "warning", label: "Ważne do sprawdzenia", title: "Trasa i kraje ochrony", text: "Polisa działa tylko w krajach wskazanych w dokumencie. Jeśli kraju na trasie nie ma na liście, potrzebny jest inny produkt ubezpieczeniowy." }, { tone: "no", label: "Nie obejmuje", title: "Własnego samochodu", text: "OC graniczne obejmuje odpowiedzialność wobec osób trzecich. Nie jest AC i nie pokrywa naprawy własnego pojazdu." } ],
  finalCta: { ...en.finalCta, eyebrow: "Gotowi do złożenia wniosku?", title: "Wyślij wniosek o OC graniczne dla samochodu z ZEA", text: "Przygotuj dowód rejestracyjny pojazdu, wskaż datę początku ubezpieczenia i sprawdź trasę. Po weryfikacji danych otrzymasz kalkulację i instrukcje płatności.", button: "Złóż wniosek online" },
};

const dictionaries: Partial<Record<Lang, UaeOcDictionary>> = {
  ru,
  en,
  pl,
};

export function getUaeOcDictionary(lang: Lang): UaeOcDictionary {
  return dictionaries[lang] ?? en;
}
