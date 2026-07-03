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
  carousel: {
    title: string;
    cardTitle: string;
    cardText: string;
    cta: string;
  };
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
    carousel: {
    title: "Полезные страницы",
    cardTitle: "Страховка для автомобиля из ОАЭ",
    cardText:
      "OC graniczne для автомобиля, зарегистрированного в ОАЭ: страны покрытия, документы, стоимость и оформление онлайн.",
    cta: "Открыть страницу",
  },
  finalCta: {
    eyebrow: "Готовы оформить?",
    title: "Отправьте заявку на OC graniczne для автомобиля из ОАЭ",
    text: "Подготовьте регистрационный документ автомобиля, укажите дату начала страхования и проверьте маршрут. После проверки данных вы получите расчёт и инструкции по оплате.",
    button: "Оформить полис онлайн",
  },
};

const en: UaeOcDictionary = {
  seo: {
    title: "OC graniczne for UAE-registered vehicles — insurance for travel in Europe",
    description: "Border liability insurance OC graniczne for a UAE-registered vehicle: covered countries, documents, cost, manual review, and an online application for a PDF policy.",
  },
  breadcrumbTitle: "Insurance for UAE-registered vehicles",
  hero: {
    eyebrow: "OC graniczne for UAE-registered vehicles",
    title: "Insurance for a UAE-registered vehicle for travel in Europe",
    lead: "If a vehicle is registered in the United Arab Emirates and temporarily enters Poland or other covered countries, border third-party liability insurance — OC graniczne — may be required.",
    noticeLabel: "In brief:",
    notice: "the policy is suitable for UAE-registered vehicles if the trip takes place in the countries listed in the document. It does not automatically apply throughout Europe and does not replace comprehensive insurance.",
    primaryCta: "Get the policy online",
    secondaryCta: "What documents are needed",
    cardLabel: "Key terms",
    facts: [
      { label: "Country of registration", value: "UAE" },
      { label: "Policy type", value: "OC graniczne" },
      { label: "Delivery format", value: "PDF by email" },
      { label: "Review", value: "Manual data review" },
    ],
  },
  answers: [
    { tone: "yes", label: "Yes, it may be suitable", title: "If the vehicle is registered in the UAE", text: "OC graniczne may be issued for a UAE-registered vehicle if the vehicle is used temporarily in Poland or another covered country." },
    { tone: "warning", label: "Important to check", title: "Route and covered countries", text: "The policy is valid only in the countries listed in the document. If a country on the route is not listed, a different insurance product is required for that country." },
    { tone: "no", label: "Does not cover", title: "Your own vehicle", text: "OC graniczne covers third-party civil liability. It is not comprehensive insurance and does not cover repairs to your own vehicle." },
  ],
  suitability: {
    eyebrow: "Eligibility",
    title: "Who insurance for UAE-registered vehicles is suitable for",
    text: "This page applies to vehicles registered in the United Arab Emirates. Vehicles registered in EEA countries are subject to different terms.",
    yesTitle: "Suitable",
    noTitle: "Not suitable",
    yesItems: ["the vehicle is registered in the UAE;", "the trip goes through Poland or covered countries;", "there is no valid policy recognized on the route;", "the vehicle registration document is available;", "the vehicle data can be verified from the documents."],
    noItems: ["the vehicle is registered in an EEA country;", "you need coverage for your own vehicle;", "the route goes through countries outside the coverage area;", "you need the policy issued retroactively;", "there is no readable registration document."],
  },
  routeWarning: {
    eyebrow: "Specifics for UAE-registered vehicles",
    title: "Check transit through Turkey and the Balkans",
    text: "For a UAE-registered vehicle, the route to Europe often passes through Turkey, Serbia, Montenegro, North Macedonia, Bosnia and Herzegovina, or other Balkan countries. OC graniczne should not be considered valid for those countries unless they are listed in the policy.",
    cta: "Check coverage",
  },
  coverage: {
    eyebrow: "Territorial coverage",
    title: "Where OC graniczne is valid",
    text: "The policy is valid only in the countries listed as covered in the insurance document. Before the trip, check that every country on the route is included in the coverage.",
    listLabel: "Covered countries",
    countries: ["Austria", "Belgium", "Bulgaria", "Cyprus", "Czech Republic", "Germany", "Denmark", "Spain", "Estonia", "France", "Finland", "Greece", "Hungary", "Croatia", "Italy", "Ireland", "Iceland", "Lithuania", "Latvia", "Norway", "Poland", "Romania", "Sweden", "Slovakia", "Slovenia", "Switzerland"],
    warningTitle: "Where the policy is not valid",
    warningText: "If Turkey, Serbia, Montenegro, North Macedonia, Bosnia and Herzegovina, Albania, Kosovo, or another country on the route is not listed in the document, this policy does not cover that part of the trip.",
    warningNote: "For those countries, you should check local border insurance or another suitable product in advance.",
  },
  documents: {
    eyebrow: "Documents",
    title: "What is needed for issuance",
    text: "For a UAE-registered vehicle, the registration document must be readable. If the document is in Arabic, the data may require additional review.",
    vehicleTitle: "Vehicle details",
    policyholderTitle: "Policyholder details",
    vehicleItems: ["vehicle registration certificate;", "license plate number;", "VIN;", "make and model;", "vehicle type;", "year of manufacture;", "country of registration — UAE."],
    policyholderItems: ["passport or ID;", "first and last name;", "email for receiving the PDF;", "phone number or messenger contact;", "insurance start date;", "policy term;", "travel route if it is non-standard."],
  },
  price: {
    eyebrow: "Cost",
    title: "How much the insurance costs",
    text: "The cost depends on the vehicle type, insurance period, and insurer rules. The website calculator may show an estimated cost, but final issuance eligibility is confirmed after the data review.",
    factors: ["vehicle type;", "policy term;", "vehicle registration country;", "insurance start date;", "accuracy of the documents."],
  },
  timing: {
    eyebrow: "Issuance time",
    title: "When to submit the application",
    text: "It is best to submit the application 1–2 business days before the trip. If all data is correct, issuance may be faster, but a UAE-registered vehicle may require manual review.",
    notice: "The policy cannot be issued retroactively. The start date must be set before the document is used.",
  },
  steps: {
    eyebrow: "Issuance process",
    title: "How to get the policy",
    items: [
      { title: "Fill out the application", text: "Enter the vehicle registration country, vehicle type, insurance period, and start date." },
      { title: "Attach the documents", text: "Upload the vehicle registration document and the policyholder details." },
      { title: "Wait for the review", text: "We will check the vehicle details, VIN, license plate number, and issuance eligibility." },
      { title: "Pay for the policy", text: "After confirmation, you will receive payment instructions." },
      { title: "Receive the PDF", text: "After issuance, the policy is sent to the email address specified in the application." },
    ],
  },
  beforeTrip: {
    eyebrow: "Before the trip",
    title: "What to check in the policy",
    text: "Do not use the policy if it contains an error. The data in the document must match the vehicle registration document.",
    items: ["License plate number", "VIN", "Country of registration", "Make and model", "Vehicle type", "Validity period", "Policyholder details", "Covered countries"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "Can OC graniczne be issued online for a UAE-registered vehicle?", a: "Yes. The application can be submitted online. After the data review, payment, and policy issuance, the PDF document is sent by email." },
      { q: "Is this policy suitable for a vehicle registered in the UAE?", a: "Yes, it may be suitable because the UAE is not part of the European Economic Area. Issuance eligibility depends on the vehicle type, documents, and route." },
      { q: "Is OC graniczne valid in Poland?", a: "Yes, if Poland is listed in the policy as a covered country and the policy term has already started." },
      { q: "Is this policy valid in Turkey or Serbia?", a: "No, if Turkey or Serbia is not listed in the document as a covered country. Separate local insurance may be required for those countries." },
      { q: "Can the policy be issued on the day of travel?", a: "Sometimes this is possible if all data is correct. However, for a UAE-registered vehicle, it is better to submit the application 1–2 business days before the trip." },
      { q: "Can OC graniczne be issued retroactively?", a: "No. The policy cannot be issued retroactively. The start date must be set before the document is used." },
      { q: "Can insurance be issued without a vehicle registration document?", a: "No. A vehicle registration document is required for issuance. Without it, the number, VIN, country of registration, and vehicle data cannot be properly verified." },
      { q: "What should I do if there is an error in the policy?", a: "Do not use a policy with incorrect data. Contact the issuance service before the trip. Depending on the error, a correction or reissue may be required." },
    ],
  },
    carousel: {
    title: "Useful pages",
    cardTitle: "Insurance for a UAE-registered vehicle",
    cardText:
      "OC graniczne for a vehicle registered in the UAE: covered countries, documents, cost, and online issuance.",
    cta: "Open page",
  },
  finalCta: {
    eyebrow: "Ready to issue the policy?",
    title: "Submit an application for OC graniczne for a UAE-registered vehicle",
    text: "Prepare the vehicle registration document, specify the insurance start date, and check the route. After the data review, you will receive a quote and payment instructions.",
    button: "Get the policy online",
  },
};

const ar: UaeOcDictionary = {
  seo: {
    title: "OC graniczne للسيارات من الإمارات — تأمين للسفر في أوروبا",
    description: "تأمين حدودي OC graniczne للسيارة القادمة من الإمارات: دول التغطية، المستندات، التكلفة، المراجعة اليدوية، وطلب إلكتروني للحصول على وثيقة PDF.",
  },
  breadcrumbTitle: "تأمين للسيارات من الإمارات",
  hero: {
    eyebrow: "OC graniczne للسيارات من الإمارات",
    title: "تأمين للسيارة من الإمارات للسفر في أوروبا",
    lead: "إذا كانت السيارة مسجلة في دولة الإمارات العربية المتحدة وتدخل مؤقتًا إلى بولندا أو إلى دول أخرى مشمولة بالتغطية، فقد يكون تأمين المسؤولية المدنية الحدودي — OC graniczne — مطلوبًا.",
    noticeLabel: "باختصار:",
    notice: "الوثيقة مناسبة للسيارات من الإمارات إذا كانت الرحلة تمر عبر الدول المذكورة في المستند. ولا تسري تلقائيًا في جميع أنحاء أوروبا ولا تُعد بديلًا عن تأمين كاسكو.",
    primaryCta: "إصدار الوثيقة عبر الإنترنت",
    secondaryCta: "ما المستندات المطلوبة",
    cardLabel: "الشروط المختصرة",
    facts: [
      { label: "دولة التسجيل", value: "الإمارات" },
      { label: "نوع الوثيقة", value: "OC graniczne" },
      { label: "صيغة الاستلام", value: "PDF عبر البريد الإلكتروني" },
      { label: "التحقق", value: "مراجعة يدوية للبيانات" },
    ],
  },
  answers: [
    { tone: "yes", label: "نعم، مناسب", title: "إذا كانت السيارة مسجلة في الإمارات", text: "يمكن إصدار OC graniczne لسيارة من الإمارات إذا كانت المركبة تُستخدم مؤقتًا في بولندا أو في دولة أخرى مشمولة بالتغطية." },
    { tone: "warning", label: "من المهم التحقق", title: "المسار ودول التغطية", text: "تسري الوثيقة فقط في الدول المذكورة في المستند. إذا لم تكن دولة ضمن مسار الرحلة مذكورة، فستحتاج إلى منتج تأميني آخر لتلك الدولة." },
    { tone: "no", label: "لا يغطي", title: "سيارتك الخاصة", text: "يغطي OC graniczne المسؤولية المدنية تجاه الغير. وهو ليس تأمين كاسكو ولا يغطي إصلاح سيارتك." },
  ],
  suitability: {
    eyebrow: "مدى الملاءمة",
    title: "لمن يناسب تأمين السيارات من الإمارات",
    text: "تتعلق هذه الصفحة بالسيارات المسجلة في دولة الإمارات العربية المتحدة. أما السيارات المسجلة في دول المنطقة الاقتصادية الأوروبية فتخضع لشروط مختلفة.",
    yesTitle: "يناسب",
    noTitle: "لا يناسب",
    yesItems: ["السيارة مسجلة في الإمارات؛", "الرحلة تمر عبر بولندا أو دول التغطية؛", "لا توجد وثيقة سارية معترف بها على مسار الرحلة؛", "يتوفر مستند تسجيل السيارة؛", "يمكن التحقق من بيانات السيارة من خلال المستندات."],
    noItems: ["السيارة مسجلة في دولة من دول المنطقة الاقتصادية الأوروبية؛", "تحتاج إلى حماية لسيارتك الخاصة؛", "يمر المسار عبر دول غير مشمولة بالتغطية؛", "تحتاج إلى إصدار الوثيقة بأثر رجعي؛", "لا يوجد مستند تسجيل مقروء."],
  },
  routeWarning: {
    eyebrow: "خصوصية السيارات من الإمارات",
    title: "تحققوا من العبور عبر تركيا والبلقان",
    text: "بالنسبة للسيارة القادمة من الإمارات، غالبًا ما يمر المسار إلى أوروبا عبر تركيا أو صربيا أو الجبل الأسود أو مقدونيا الشمالية أو البوسنة والهرسك أو دول أخرى في البلقان. لا ينبغي اعتبار OC graniczne ساريًا في هذه الدول إذا لم تكن مذكورة في الوثيقة.",
    cta: "التحقق من التغطية",
  },
  coverage: {
    eyebrow: "نطاق السريان الإقليمي",
    title: "أين يسري OC graniczne",
    text: "تسري الوثيقة فقط في الدول المذكورة في مستند التأمين باعتبارها مشمولة بالتغطية. قبل السفر، يجب التحقق من أن كل دولة في مسار الرحلة مشمولة بالتغطية.",
    listLabel: "دول التغطية",
    countries: ["النمسا", "بلجيكا", "بلغاريا", "قبرص", "التشيك", "ألمانيا", "الدنمارك", "إسبانيا", "إستونيا", "فرنسا", "فنلندا", "اليونان", "المجر", "كرواتيا", "إيطاليا", "أيرلندا", "آيسلندا", "ليتوانيا", "لاتفيا", "النرويج", "بولندا", "رومانيا", "السويد", "سلوفاكيا", "سلوفينيا", "سويسرا"],
    warningTitle: "أين لا تسري الوثيقة",
    warningText: "إذا لم تكن تركيا أو صربيا أو الجبل الأسود أو مقدونيا الشمالية أو البوسنة والهرسك أو ألبانيا أو كوسوفو أو أي دولة أخرى ضمن مسار الرحلة مذكورة في المستند، فإن هذه الوثيقة لا تغطي ذلك الجزء من الرحلة.",
    warningNote: "بالنسبة لهذه الدول، يجب التحقق مسبقًا من التأمين الحدودي المحلي أو من منتج آخر مناسب.",
  },
  documents: {
    eyebrow: "المستندات",
    title: "ما المطلوب للإصدار",
    text: "بالنسبة للسيارة من الإمارات، من المهم أن يكون مستند التسجيل واضحًا ومقروءًا. إذا كان المستند باللغة العربية، فقد تتطلب البيانات تحققًا إضافيًا.",
    vehicleTitle: "بيانات السيارة",
    policyholderTitle: "بيانات طالب التأمين",
    vehicleItems: ["شهادة تسجيل المركبة؛", "رقم اللوحة؛", "VIN؛", "الماركة والطراز؛", "نوع المركبة؛", "سنة الصنع؛", "دولة التسجيل — الإمارات."],
    policyholderItems: ["جواز السفر أو الهوية؛", "الاسم واللقب؛", "البريد الإلكتروني لاستلام PDF؛", "رقم الهاتف أو وسيلة المراسلة؛", "تاريخ بدء التأمين؛", "مدة سريان الوثيقة؛", "مسار الرحلة إذا كان غير اعتيادي."],
  },
  price: {
    eyebrow: "التكلفة",
    title: "كم تبلغ تكلفة التأمين",
    text: "تعتمد التكلفة على نوع المركبة ومدة التأمين وقواعد شركة التأمين. قد يعرض الحاسوب على الموقع تكلفة تقديرية، لكن إمكانية الإصدار النهائية تؤكد بعد التحقق من البيانات.",
    factors: ["نوع المركبة؛", "مدة سريان الوثيقة؛", "دولة تسجيل السيارة؛", "تاريخ بدء التأمين؛", "صحة المستندات."],
  },
  timing: {
    eyebrow: "مدة الإصدار",
    title: "متى يجب تقديم الطلب",
    text: "من الأفضل إرسال الطلب قبل الرحلة بيوم أو يومي عمل. إذا كانت جميع البيانات صحيحة، فقد يتم الإصدار بشكل أسرع، لكن السيارة من الإمارات قد تتطلب مراجعة يدوية.",
    notice: "لا تُصدر الوثيقة بأثر رجعي. يجب تحديد تاريخ بدء السريان قبل استخدام المستند.",
  },
  steps: {
    eyebrow: "إجراءات الإصدار",
    title: "كيفية الحصول على الوثيقة",
    items: [
      { title: "املأ الطلب", text: "اذكر دولة تسجيل السيارة، ونوع المركبة، ومدة التأمين وتاريخ بدايته." },
      { title: "أرفق المستندات", text: "حمّل مستند تسجيل السيارة وبيانات طالب التأمين." },
      { title: "انتظر التحقق", text: "سنراجع بيانات السيارة، وVIN، ورقم اللوحة، وإمكانية الإصدار." },
      { title: "ادفع قيمة الوثيقة", text: "بعد التأكيد، ستتلقى تعليمات الدفع." },
      { title: "استلم ملف PDF", text: "بعد إصدار الوثيقة، تُرسل إلى البريد الإلكتروني المذكور في الطلب." },
    ],
  },
  beforeTrip: {
    eyebrow: "قبل الرحلة",
    title: "ما الذي يجب التحقق منه في الوثيقة",
    text: "لا تستخدم الوثيقة إذا كانت تحتوي على خطأ. يجب أن تتطابق البيانات في المستند مع مستند تسجيل السيارة.",
    items: ["رقم اللوحة", "VIN", "دولة التسجيل", "الماركة والطراز", "نوع المركبة", "مدة السريان", "بيانات طالب التأمين", "دول التغطية"],
  },
  faq: {
    eyebrow: "FAQ",
    title: "الأسئلة الشائعة",
    items: [
      { q: "هل يمكن إصدار OC graniczne لسيارة من الإمارات عبر الإنترنت؟", a: "نعم. يمكن إرسال الطلب عبر الإنترنت. بعد التحقق من البيانات والدفع وإصدار الوثيقة، يُرسل مستند PDF إلى البريد الإلكتروني." },
      { q: "هل هذه الوثيقة مناسبة لسيارة مسجلة في الإمارات؟", a: "نعم، قد تكون مناسبة، لأن الإمارات ليست ضمن المنطقة الاقتصادية الأوروبية. وتعتمد إمكانية الإصدار على نوع المركبة والمستندات والمسار." },
      { q: "هل يسري OC graniczne في بولندا؟", a: "نعم، إذا كانت بولندا مذكورة في الوثيقة كدولة مشمولة بالتغطية وكان سريان الوثيقة قد بدأ بالفعل." },
      { q: "هل تسري هذه الوثيقة في تركيا أو صربيا؟", a: "لا، إذا لم تكن تركيا أو صربيا مذكورتين في المستند كدولتين مشمولتين بالتغطية. قد تكون هناك حاجة إلى تأمين محلي منفصل لهاتين الدولتين." },
      { q: "هل يمكن إصدار الوثيقة في يوم السفر؟", a: "قد يكون ذلك ممكنًا أحيانًا إذا كانت جميع البيانات صحيحة. لكن بالنسبة للسيارة من الإمارات، من الأفضل تقديم الطلب قبل الرحلة بيوم أو يومي عمل." },
      { q: "هل يمكن إصدار OC graniczne بأثر رجعي؟", a: "لا. لا تُصدر الوثيقة بأثر رجعي. يجب تحديد تاريخ بدء السريان قبل استخدام المستند." },
      { q: "هل يمكن إصدار التأمين من دون رخصة المركبة؟", a: "لا. يلزم مستند تسجيل السيارة للإصدار. ومن دونه لا يمكن التحقق بشكل صحيح من الرقم وVIN ودولة التسجيل وبيانات المركبة." },
      { q: "ماذا أفعل إذا كان في الوثيقة خطأ؟", a: "لا تستخدم الوثيقة التي تحتوي على بيانات خاطئة. تواصل مع خدمة الإصدار قبل الرحلة. وبحسب نوع الخطأ، قد يلزم التصحيح أو إعادة الإصدار." },
    ],
  },
    carousel: {
    title: "صفحات مفيدة",
    cardTitle: "تأمين للسيارة من الإمارات",
    cardText:
      "OC graniczne للسيارة المسجلة في الإمارات: دول التغطية، المستندات، التكلفة، والإصدار عبر الإنترنت.",
    cta: "فتح الصفحة",
  },
  finalCta: {
    eyebrow: "هل أنتم جاهزون للإصدار؟",
    title: "أرسلوا طلب OC graniczne لسيارة من الإمارات",
    text: "جهّزوا مستند تسجيل السيارة، وحددوا تاريخ بدء التأمين، وتحققوا من المسار. بعد مراجعة البيانات، ستحصلون على الحساب وتعليمات الدفع.",
    button: "إصدار الوثيقة عبر الإنترنت",
  },
};

const dictionaries: Partial<Record<Lang, UaeOcDictionary>> = {
  ru,
  en,
  ar,
};

export function getUaeOcDictionary(lang: Lang): UaeOcDictionary {
  return dictionaries[lang] ?? en;
}
