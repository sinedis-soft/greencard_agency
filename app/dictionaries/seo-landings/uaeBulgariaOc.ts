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
    title: "Страховка для авто из ОАЭ в Болгарии — OC graniczne",
    description:
        "Пограничная страховка для автомобиля с номерами ОАЭ при въезде в Болгарию. Проверка маршрута и документов, расчёт стоимости и получение полиса в PDF.",
    },

  breadcrumbTitle: "Страховка для авто из ОАЭ в Болгарии",

  hero: {
    eyebrow: "ОАЭ → Болгария",
    title: "Страховка для автомобиля из ОАЭ при поездке в Болгарию",
    lead:
      "Автомобилю, зарегистрированному в Объединённых Арабских Эмиратах, для передвижения по территории Болгарии требуется действующее страхование гражданской ответственности. В зависимости от имеющихся документов может быть оформлено пограничное страхование (OC graniczne).",
    noticeLabel: "Главное:",
    notice:
      "полис должен действовать в Болгарии на дату въезда и в течение всего периода использования автомобиля. Страхование для Болгарии не заменяет полисы, которые могут потребоваться в транзитных странах. И не дает право двигаться по платным дорогам без виньетки",
    primaryCta: "Оформить страховку",
    secondaryCta: "Проверить документы",
    cardLabel: "Условия поездки",
    facts: [
      {
        label: "Регистрация автомобиля",
        value: "ОАЭ",
      },
      {
        label: "Страна назначения",
        value: "Болгария",
      },
      {
        label: "Тип страхования",
        value: "OC graniczne",
      },
      {
        label: "Формат полиса",
        value: "PDF на email",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Можно оформить",
      title: "Для автомобиля с регистрацией ОАЭ",
      text:
        "Пограничное страхование может быть оформлено для автомобиля с регистрационными номерами ОАЭ, который временно въезжает в Болгарию.",
    },
    {
      tone: "warning",
      label: "Проверьте заранее",
      title: "Страхование транзитных стран",
      text:
        "Полис, действующий в Болгарии, не обязательно покрывает весь маршрут от ОАЭ. Для каждой транзитной страны необходимо отдельно проверить наличие страхового покрытия.",
    },
    {
      tone: "no",
      label: "Не является КАСКО",
      title: "Повреждение собственного автомобиля",
      text:
        "OC graniczne покрывает ответственность перед третьими лицами. Полис не возмещает кражу, поломку или повреждение самого автомобиля.",
    },
  ],

  suitability: {
    eyebrow: "Применимость",
    title: "Когда подходит страховка ОАЭ → Болгария",
    text:
      "Эта страница относится к автомобилям, зарегистрированным в ОАЭ и временно используемым в Болгарии. Для автомобиля с регистрацией другой страны условия необходимо проверять отдельно.",
    yesTitle: "Полис может подойти",
    noTitle: "Этот вариант не подходит",
    yesItems: [
      "автомобиль зарегистрирован в ОАЭ;",
      "Болгария входит в маршрут поездки;",
      "нет другого действующего полиса, признаваемого в Болгарии;",
      "имеется читаемый регистрационный документ автомобиля;",
      "страхование оформляется до въезда или начала использования автомобиля.",
    ],
    noItems: [
      "автомобиль зарегистрирован в стране Европейской экономической зоны;",
      "нужно застраховать повреждение или кражу собственного автомобиля;",
      "нужен полис только для Турции или другой транзитной страны;",
      "требуется оформление задним числом;",
      "данные автомобиля невозможно подтвердить документами.",
    ],
  },

  routeWarning: {
    eyebrow: "Маршрут до Болгарии",
    title: "Проверьте страхование на всём пути до Болгарии",
    text:
      "При сухопутной поездке из ОАЭ автомобиль может пересекать несколько государств до въезда в Болгарию. OC graniczne для Болгарии нельзя считать автоматически действующим в Турции, Сербии, Северной Македонии или других транзитных странах. Маршрут необходимо проверять по каждой стране отдельно.",
    cta: "Проверить маршрут",
  },

  coverage: {
    eyebrow: "Территория действия",
    title: "Действует ли полис в Болгарии",
    text:
      "Полис действует в Болгарии, если Болгария указана в страховом документе как страна покрытия и срок действия полиса уже начался. Перед поездкой проверьте территорию действия непосредственно в полученном документе.",
    listLabel: "Страны, которые могут быть указаны в покрытии",
    countries: [
      "Болгария",
      "Австрия",
      "Бельгия",
      "Кипр",
      "Чехия",
      "Германия",
      "Дания",
      "Испания",
      "Эстония",
      "Франция",
      "Финляндия",
      "Греция",
      "Венгрия",
      "Хорватия",
      "Италия",
      "Ирландия",
      "Исландия",
      "Литва",
      "Латвия",
      "Норвегия",
      "Польша",
      "Румыния",
      "Швеция",
      "Словакия",
      "Словения",
      "Швейцария",
    ],
    warningTitle: "Полис не покрывает автоматически весь маршрут",
    warningText:
      "Если Турция, Сербия, Северная Македония, Черногория, Босния и Герцеговина, Албания, Косово или другая страна не указана в документе, страхование не действует на её территории.",
    warningNote:
      "Для транзитной страны может потребоваться местное пограничное страхование или другой полис.",
  },

  documents: {
    eyebrow: "Документы",
    title: "Что нужно для страховки автомобиля из ОАЭ",
    text:
      "Основные данные берутся из регистрационного документа автомобиля. Если документ содержит информацию на арабском языке, необходимо, чтобы регистрационный номер, VIN, марка и сведения о владельце можно было однозначно проверить.",
    vehicleTitle: "Автомобиль",
    policyholderTitle: "Страхователь",
    vehicleItems: [
      "регистрационный документ автомобиля;",
      "регистрационный номер ОАЭ;",
      "VIN или номер кузова;",
      "марка и модель;",
      "тип транспортного средства;",
      "год выпуска;",
      "страна регистрации — ОАЭ.",
    ],
    policyholderItems: [
      "паспорт или другой документ, удостоверяющий личность;",
      "имя и фамилия латиницей;",
      "email для получения полиса;",
      "номер телефона или мессенджер;",
      "дата начала страхования;",
      "необходимый срок полиса;",
      "планируемый маршрут до Болгарии.",
    ],
  },

  price: {
    eyebrow: "Стоимость",
    title: "Сколько стоит страховка для поездки в Болгарию",
    text:
      "Цена зависит от категории транспортного средства, срока страхования и тарифа страховщика. Окончательная стоимость и возможность оформления подтверждаются после проверки документов автомобиля. В шапке меню вы найдете ссылку на калькулятор стоимости.",
    factors: [
      "тип транспортного средства;",
      "срок действия полиса;",
    ],
  },

  timing: {
    eyebrow: "Дата оформления",
    title: "Когда оформлять полис перед поездкой",
    text:
      "Рекомендуется отправить заявку за 1–2 рабочих дня до планируемого въезда в Болгарию. Это оставляет время на проверку регистрационных документов и исправление возможных ошибок. Так же марка или моель Вашего транспортного средства могут отсутствовать в справочнеке страховой компании, и его необходимо будет согласовывать в рабочее время со страховой компанией.",
    notice:
      "Полис нельзя оформить задним числом. Дата начала страхования должна наступить не позднее даты использования автомобиля в Болгарии.",
  },

  steps: {
    eyebrow: "Оформление",
    title: "Как получить страховку",
    items: [
      {
        title: "Укажите маршрут",
        text:
          "Выберите ОАЭ как страну регистрации автомобиля.",
      },
      {
        title: "Загрузите документы",
        text:
          "Приложите регистрационный документ автомобиля и данные страхователя.",
      },
      {
        title: "Пройдите проверку",
        text:
          "Мы проверим регистрационный номер, VIN, тип автомобиля и возможность оформления.",
      },
      {
        title: "Оплатите полис",
        text:
          "После подтверждения стоимости получите инструкции или ссылку для оплаты.",
      },
      {
        title: "Получите PDF",
        text:
          "Выпущенный страховой документ будет отправлен на указанный email.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Перед въездом в Болгарию",
    title: "Что проверить в готовом полисе",
    text:
      "Ошибки в регистрационном номере, VIN или сроке действия могут сделать документ непригодным для использования. Сверьте полис с регистрационным документом до поездки.",
    items: [
      "регистрационный номер;",
      "VIN или номер кузова;",
      "страна регистрации — ОАЭ;",
      "марка и модель автомобиля;",
      "категория транспортного средства;",
      "дата начала и окончания полиса;",
      "Болгария в территории действия;",
      "данные страхователя.",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Вопросы о страховке ОАЭ → Болгария",
    items: [
      {
        q: "Можно ли оформить страховку для автомобиля из ОАЭ для въезда в Болгарию?",
        a:
          "Да, пограничное страхование может быть оформлено для автомобиля с регистрацией ОАЭ. Возможность оформления подтверждается после проверки типа автомобиля и регистрационного документа.",
      },
      {
        q: "Действует ли OC graniczne в Болгарии?",
        a:
          "Да, Данный полис действует во всех странах Европейской экономической зоны.",
      },
      {
        q: "Покрывает ли этот полис дорогу из ОАЭ до Болгарии?",
        a:
          "Нет. Полис для Болгарии не следует считать действующим во всех транзитных странах. Покрытие необходимо проверять отдельно для каждого государства маршрута.",
      },
      {
        q: "Действует ли полис в Турции?",
        a:
          "Нет. Для Турции потребуется отдельное страхование.",
      },
      {
        q: "Какие документы нужны для автомобиля из ОАЭ?",
        a:
          "Нужны регистрационный документ автомобиля, регистрационный номер, VIN, сведения о марке и модели, а также данные страхователя.",
      },
      {
        q: "Можно ли получить полис онлайн?",
        a:
          "Да. Заявка и документы передаются онлайн. После проверки, оплаты и выпуска готовый полис направляется в формате PDF.",
      },
      {
        q: "Когда должен начинаться полис?",
        a:
          "Полис должен действовать до начала использования автомобиля в Болгарии. Оформление задним числом невозможно.",
      },
      {
        q: "Возмещает ли полис повреждение автомобиля?",
        a:
          "Нет. Это страхование гражданской ответственности перед третьими лицами, а не КАСКО автомобиля.",
      },
    ],
  },

  carousel: {
    title: "Страхование по маршрутам",
    cardTitle: "Автомобиль из ОАЭ в Болгарию",
    cardText:
      "Страхование гражданской ответственности для автомобиля с номерами ОАЭ при поездке в Болгарию.",
    cta: "Подробнее",
  },

  finalCta: {
    eyebrow: "Оформление полиса",
    title: "Отправьте заявку на страховку для поездки в Болгарию",
    text:
      "Подготовьте регистрационный документ автомобиля, укажите дату начала страхования и сообщите планируемый маршрут. После проверки вы получите расчёт и инструкции по оформлению.",
    button: "Отправить заявку",
  },
};

const en: UaeOcDictionary = {
  seo: {
    title: "Car Insurance for UAE Vehicles in Bulgaria — Border Insurance",
    description:
      "Border insurance for a UAE-registered vehicle entering Bulgaria. Route and document review, price calculation, and delivery of the policy as a PDF.",
  },

  breadcrumbTitle: "Insurance for UAE Vehicles in Bulgaria",

  hero: {
    eyebrow: "UAE → Bulgaria",
    title: "Insurance for a UAE-Registered Vehicle Traveling to Bulgaria",
    lead:
      "A vehicle registered in the United Arab Emirates must have valid third-party liability insurance to be driven in Bulgaria. Depending on the documents already available, border insurance (OC graniczne) may be issued.",
    noticeLabel: "Important:",
    notice:
      "The policy must be valid in Bulgaria on the date of entry and throughout the entire period the vehicle is used there. Insurance issued for Bulgaria does not replace any policies that may be required in transit countries, nor does it allow the vehicle to use toll roads without a valid vignette.",
    primaryCta: "Get Insurance",
    secondaryCta: "Check Documents",
    cardLabel: "Trip Details",
    facts: [
      {
        label: "Vehicle registration",
        value: "UAE",
      },
      {
        label: "Destination country",
        value: "Bulgaria",
      },
      {
        label: "Insurance type",
        value: "Border insurance",
      },
      {
        label: "Policy format",
        value: "PDF by email",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Eligible",
      title: "For UAE-Registered Vehicles",
      text:
        "Border insurance may be issued for a vehicle with UAE registration plates that is entering Bulgaria temporarily.",
    },
    {
      tone: "warning",
      label: "Check in Advance",
      title: "Insurance for Transit Countries",
      text:
        "A policy valid in Bulgaria may not cover the full journey from the UAE. Insurance coverage must be checked separately for every transit country.",
    },
    {
      tone: "no",
      label: "Not Comprehensive Insurance",
      title: "Damage to Your Own Vehicle",
      text:
        "Border insurance covers third-party liability. It does not cover theft, mechanical breakdown, or damage to the insured vehicle itself.",
    },
  ],

  suitability: {
    eyebrow: "Eligibility",
    title: "When UAE → Bulgaria Insurance Is Suitable",
    text:
      "This page applies to vehicles registered in the UAE and used temporarily in Bulgaria. Vehicles registered in other countries are subject to different requirements and must be reviewed separately.",
    yesTitle: "This Policy May Be Suitable",
    noTitle: "This Option Is Not Suitable",
    yesItems: [
      "the vehicle is registered in the UAE;",
      "Bulgaria is included in the planned route;",
      "there is no other valid insurance policy recognized in Bulgaria;",
      "a legible vehicle registration document is available;",
      "the insurance is arranged before entry into Bulgaria or before the vehicle is first used there.",
    ],
    noItems: [
      "the vehicle is registered in a European Economic Area country;",
      "you need coverage for damage to or theft of your own vehicle;",
      "you only need insurance for Turkey or another transit country;",
      "you need the policy to be issued retroactively;",
      "the vehicle details cannot be verified from official documents.",
    ],
  },

  routeWarning: {
    eyebrow: "Route to Bulgaria",
    title: "Check Insurance Coverage for the Entire Journey",
    text:
      "When traveling overland from the UAE, the vehicle may cross several countries before entering Bulgaria. Border insurance issued for Bulgaria must not be assumed to be valid in Turkey, Serbia, North Macedonia, or any other transit country. Coverage must be checked separately for every country on the route.",
    cta: "Check Your Route",
  },

  coverage: {
    eyebrow: "Territorial Coverage",
    title: "Is the Policy Valid in Bulgaria?",
    text:
      "The policy is valid in Bulgaria if Bulgaria is listed in the insurance document as a covered country and the policy period has already begun. Before traveling, verify the territorial coverage shown in the issued policy.",
    listLabel: "Countries That May Be Included in the Coverage",
    countries: [
      "Bulgaria",
      "Austria",
      "Belgium",
      "Cyprus",
      "Czechia",
      "Germany",
      "Denmark",
      "Spain",
      "Estonia",
      "France",
      "Finland",
      "Greece",
      "Hungary",
      "Croatia",
      "Italy",
      "Ireland",
      "Iceland",
      "Lithuania",
      "Latvia",
      "Norway",
      "Poland",
      "Romania",
      "Sweden",
      "Slovakia",
      "Slovenia",
      "Switzerland",
    ],
    warningTitle: "The Policy Does Not Automatically Cover the Entire Route",
    warningText:
      "If Turkey, Serbia, North Macedonia, Montenegro, Bosnia and Herzegovina, Albania, Kosovo, or another country is not listed in the document, the policy is not valid there.",
    warningNote:
      "A transit country may require local border insurance or another type of policy.",
  },

  documents: {
    eyebrow: "Documents",
    title: "Documents Required for a UAE-Registered Vehicle",
    text:
      "The main vehicle details are taken from the registration document. If the document contains information in Arabic, the registration number, VIN, make, and owner details must still be clear and unambiguous.",
    vehicleTitle: "Vehicle",
    policyholderTitle: "Policyholder",
    vehicleItems: [
      "vehicle registration document;",
      "UAE registration number;",
      "VIN or chassis number;",
      "make and model;",
      "vehicle type;",
      "year of manufacture;",
      "country of registration — UAE.",
    ],
    policyholderItems: [
      "passport or another identity document;",
      "first and last name in Latin characters;",
      "email address for policy delivery;",
      "telephone number or messenger contact;",
      "requested insurance start date;",
      "required policy term;",
      "planned route to Bulgaria.",
    ],
  },

  price: {
    eyebrow: "Price",
    title: "How Much Does Insurance for Bulgaria Cost?",
    text:
      "The price depends on the vehicle category, the policy term, and the insurer’s current rates. The final price and eligibility for issuance are confirmed after the vehicle documents have been reviewed. A link to the price calculator is available in the main menu.",
    factors: [
      "vehicle type;",
      "policy term;",
    ],
  },

  timing: {
    eyebrow: "When to Apply",
    title: "When to Arrange the Policy Before Your Trip",
    text:
      "We recommend submitting your application 1–2 business days before the planned entry into Bulgaria. This allows time to verify the registration documents and correct any errors. The make or model of your vehicle may also be missing from the insurer’s database, in which case it must be approved by the insurance company during business hours.",
    notice:
      "The policy cannot be issued retroactively. Its start date must be no later than the date the vehicle is first used in Bulgaria.",
  },

  steps: {
    eyebrow: "Application Process",
    title: "How to Get the Insurance",
    items: [
      {
        title: "Provide Your Route",
        text:
          "Select the UAE as the country of vehicle registration.",
      },
      {
        title: "Upload the Documents",
        text:
          "Attach the vehicle registration document and the policyholder’s details.",
      },
      {
        title: "Complete the Review",
        text:
          "We will verify the registration number, VIN, vehicle type, and eligibility for issuance.",
      },
      {
        title: "Pay for the Policy",
        text:
          "Once the price is confirmed, you will receive payment instructions or a secure payment link.",
      },
      {
        title: "Receive the PDF",
        text:
          "The issued insurance document will be sent to the email address provided.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Before Entering Bulgaria",
    title: "What to Check in the Issued Policy",
    text:
      "Errors in the registration number, VIN, or policy period may make the document invalid for travel. Compare the policy with the vehicle registration document before departure.",
    items: [
      "registration number;",
      "VIN or chassis number;",
      "country of registration — UAE;",
      "vehicle make and model;",
      "vehicle category;",
      "policy start and end dates;",
      "Bulgaria included in the territorial coverage;",
      "policyholder details.",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions About UAE → Bulgaria Insurance",
    items: [
      {
        q: "Can insurance be issued for a UAE-registered vehicle entering Bulgaria?",
        a:
          "Yes. Border insurance may be issued for a vehicle registered in the UAE. Eligibility is confirmed after the vehicle type and registration document have been reviewed.",
      },
      {
        q: "Is border insurance valid in Bulgaria?",
        a:
          "Yes. This policy is valid throughout the European Economic Area, provided the relevant countries are included in the policy’s territorial coverage.",
      },
      {
        q: "Does this policy cover the entire journey from the UAE to Bulgaria?",
        a:
          "No. A policy issued for Bulgaria should not be assumed to cover every transit country. Coverage must be checked separately for each country on the route.",
      },
      {
        q: "Is the policy valid in Turkey?",
        a:
          "No. Separate insurance is required for Turkey.",
      },
      {
        q: "What documents are required for a UAE-registered vehicle?",
        a:
          "You will need the vehicle registration document, registration number, VIN, make and model details, and the policyholder’s information.",
      },
      {
        q: "Can I receive the policy online?",
        a:
          "Yes. The application and documents are submitted online. Once the documents have been reviewed, payment has been made, and the policy has been issued, the completed policy will be sent as a PDF.",
      },
      {
        q: "When must the policy start?",
        a:
          "The policy must be valid before the vehicle is first used in Bulgaria. Retroactive issuance is not possible.",
      },
      {
        q: "Does the policy cover damage to my vehicle?",
        a:
          "No. This is third-party liability insurance, not comprehensive insurance for damage to your own vehicle.",
      },
    ],
  },

  carousel: {
    title: "Insurance by Route",
    cardTitle: "UAE-Registered Vehicle Traveling to Bulgaria",
    cardText:
      "Third-party liability insurance for a UAE-registered vehicle traveling to Bulgaria.",
    cta: "Learn More",
  },

  finalCta: {
    eyebrow: "Apply for Insurance",
    title: "Submit an Application for Your Trip to Bulgaria",
    text:
      "Prepare the vehicle registration document, specify the requested policy start date, and provide your planned route. After review, you will receive a quote and instructions for completing the application.",
    button: "Submit Application",
  },
};


const ar: UaeOcDictionary = {
  seo: {
    title: "تأمين سيارة مسجّلة في الإمارات داخل بلغاريا — التأمين الحدودي",
    description:
      "تأمين حدودي لسيارة تحمل لوحات إماراتية عند دخول بلغاريا. مراجعة خط الرحلة والمستندات، وحساب التكلفة، واستلام وثيقة التأمين بصيغة PDF.",
  },

  breadcrumbTitle: "تأمين سيارة مسجّلة في الإمارات داخل بلغاريا",

  hero: {
    eyebrow: "الإمارات → بلغاريا",
    title: "تأمين سيارة مسجّلة في الإمارات عند السفر إلى بلغاريا",
    lead:
      "يجب أن تكون السيارة المسجّلة في دولة الإمارات العربية المتحدة مشمولة بتأمين ساري للمسؤولية المدنية تجاه الغير كي يُسمح باستخدامها داخل بلغاريا. وبحسب المستندات المتوفرة، قد يكون من الممكن إصدار تأمين حدودي (OC graniczne).",
    noticeLabel: "تنبيه مهم:",
    notice:
      "يجب أن تكون الوثيقة سارية في بلغاريا يوم الدخول وطوال مدة استخدام السيارة هناك. ولا يحل التأمين المخصّص لبلغاريا محل وثائق التأمين التي قد تكون مطلوبة في دول العبور، كما أنه لا يجيز استخدام الطرق الخاضعة للرسوم من دون شراء ملصق طرق صالح.",
    primaryCta: "إصدار التأمين",
    secondaryCta: "التحقق من المستندات",
    cardLabel: "بيانات الرحلة",
    facts: [
      {
        label: "بلد تسجيل السيارة",
        value: "الإمارات",
      },
      {
        label: "بلد الوجهة",
        value: "بلغاريا",
      },
      {
        label: "نوع التأمين",
        value: "التأمين الحدودي",
      },
      {
        label: "صيغة الوثيقة",
        value: "PDF عبر البريد الإلكتروني",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "يمكن الإصدار",
      title: "للسيارات المسجّلة في الإمارات",
      text:
        "يمكن إصدار تأمين حدودي لسيارة تحمل لوحات تسجيل إماراتية وتدخل بلغاريا بصورة مؤقتة.",
    },
    {
      tone: "warning",
      label: "تحقّق مسبقًا",
      title: "التأمين في دول العبور",
      text:
        "لا يعني سريان الوثيقة في بلغاريا بالضرورة أنها تغطي كامل الطريق من الإمارات. يجب التحقق من وجود تغطية تأمينية مستقلة في كل دولة عبور.",
    },
    {
      tone: "no",
      label: "ليس تأمينًا شاملًا",
      title: "الأضرار التي تلحق بسيارتك",
      text:
        "يغطي التأمين الحدودي المسؤولية المدنية تجاه الغير، ولا يعوّض عن سرقة السيارة أو أعطالها أو الأضرار التي تلحق بها.",
    },
  ],

  suitability: {
    eyebrow: "مدى الملاءمة",
    title: "متى يكون تأمين الإمارات → بلغاريا مناسبًا؟",
    text:
      "تخص هذه الصفحة السيارات المسجّلة في الإمارات والمستخدمة مؤقتًا داخل بلغاريا. أما السيارات المسجّلة في دول أخرى، فيجب التحقق من شروطها بصورة منفصلة.",
    yesTitle: "قد تكون هذه الوثيقة مناسبة",
    noTitle: "هذا الخيار غير مناسب",
    yesItems: [
      "السيارة مسجّلة في الإمارات؛",
      "بلغاريا ضمن خط الرحلة؛",
      "لا توجد وثيقة تأمين أخرى سارية ومعترف بها في بلغاريا؛",
      "تتوفر وثيقة تسجيل واضحة ومقروءة للسيارة؛",
      "يُصدر التأمين قبل دخول بلغاريا أو قبل بدء استخدام السيارة فيها.",
    ],
    noItems: [
      "السيارة مسجّلة في إحدى دول المنطقة الاقتصادية الأوروبية؛",
      "تحتاج إلى تغطية أضرار سيارتك أو سرقتها؛",
      "تحتاج إلى وثيقة لتركيا وحدها أو لدولة عبور أخرى؛",
      "تطلب إصدار الوثيقة بأثر رجعي؛",
      "يتعذر إثبات بيانات السيارة بالمستندات.",
    ],
  },

  routeWarning: {
    eyebrow: "الطريق إلى بلغاريا",
    title: "تحقّق من التغطية التأمينية على امتداد الطريق إلى بلغاريا",
    text:
      "قد تعبر السيارة عدة دول أثناء السفر برًا من الإمارات قبل الوصول إلى بلغاريا. ولا يجوز افتراض أن التأمين الحدودي الصادر لبلغاريا ساري تلقائيًا في تركيا أو صربيا أو مقدونيا الشمالية أو غيرها من دول العبور. يجب التحقق من شروط التأمين في كل دولة على حدة.",
    cta: "التحقق من خط الرحلة",
  },

  coverage: {
    eyebrow: "نطاق التغطية الجغرافي",
    title: "هل تسري الوثيقة في بلغاريا؟",
    text:
      "تسري الوثيقة في بلغاريا إذا كانت بلغاريا مذكورة في مستند التأمين ضمن الدول المشمولة بالتغطية، وكان تاريخ سريان الوثيقة قد بدأ بالفعل. قبل السفر، تحقّق من نطاق التغطية الجغرافي المبين في الوثيقة الصادرة.",
    listLabel: "الدول التي قد تكون مشمولة بالتغطية",
    countries: [
      "بلغاريا",
      "النمسا",
      "بلجيكا",
      "قبرص",
      "التشيك",
      "ألمانيا",
      "الدنمارك",
      "إسبانيا",
      "إستونيا",
      "فرنسا",
      "فنلندا",
      "اليونان",
      "المجر",
      "كرواتيا",
      "إيطاليا",
      "أيرلندا",
      "آيسلندا",
      "ليتوانيا",
      "لاتفيا",
      "النرويج",
      "بولندا",
      "رومانيا",
      "السويد",
      "سلوفاكيا",
      "سلوفينيا",
      "سويسرا",
    ],
    warningTitle: "الوثيقة لا تغطي كامل الطريق تلقائيًا",
    warningText:
      "إذا لم تكن تركيا أو صربيا أو مقدونيا الشمالية أو الجبل الأسود أو البوسنة والهرسك أو ألبانيا أو كوسوفو أو أي دولة أخرى مذكورة في الوثيقة، فلا تسري التغطية التأمينية على أراضيها.",
    warningNote:
      "قد تتطلب دولة العبور تأمينًا حدوديًا محليًا أو نوعًا آخر من التأمين.",
  },

  documents: {
    eyebrow: "المستندات",
    title: "المستندات المطلوبة لتأمين سيارة مسجّلة في الإمارات",
    text:
      "تُستخرج البيانات الأساسية من وثيقة تسجيل السيارة. وإذا كانت الوثيقة تتضمن معلومات باللغة العربية، فيجب أن يكون من الممكن التحقق بوضوح من رقم التسجيل ورقم الهيكل VIN والعلامة التجارية وبيانات المالك.",
    vehicleTitle: "السيارة",
    policyholderTitle: "طالب التأمين",
    vehicleItems: [
      "وثيقة تسجيل السيارة؛",
      "رقم التسجيل الإماراتي؛",
      "رقم الهيكل VIN أو رقم الشاسيه؛",
      "العلامة التجارية والطراز؛",
      "نوع المركبة؛",
      "سنة الصنع؛",
      "بلد التسجيل — الإمارات.",
    ],
    policyholderItems: [
      "جواز السفر أو وثيقة أخرى لإثبات الهوية؛",
      "الاسم الأول واسم العائلة بالأحرف اللاتينية؛",
      "البريد الإلكتروني لاستلام الوثيقة؛",
      "رقم الهاتف أو وسيلة التواصل عبر تطبيقات المراسلة؛",
      "تاريخ بدء التأمين؛",
      "مدة الوثيقة المطلوبة؛",
      "خط الرحلة المخطط إلى بلغاريا.",
    ],
  },

  price: {
    eyebrow: "التكلفة",
    title: "كم تبلغ تكلفة التأمين للسفر إلى بلغاريا؟",
    text:
      "تعتمد التكلفة على فئة المركبة ومدة التأمين وتعرفة شركة التأمين. ولا تُعتمد التكلفة النهائية وإمكانية الإصدار إلا بعد مراجعة مستندات السيارة. ستجد في القائمة الرئيسية رابطًا إلى حاسبة التكلفة.",
    factors: [
      "نوع المركبة؛",
      "مدة سريان الوثيقة؛",
    ],
  },

  timing: {
    eyebrow: "موعد الإصدار",
    title: "متى ينبغي إصدار الوثيقة قبل السفر؟",
    text:
      "يُنصح بإرسال الطلب قبل موعد الدخول المخطط إلى بلغاريا بيوم أو يومي عمل. ويتيح ذلك وقتًا كافيًا لمراجعة مستندات التسجيل وتصحيح الأخطاء المحتملة. وقد لا تكون العلامة التجارية أو طراز مركبتك مدرجين في قاعدة بيانات شركة التأمين، وعندئذ يلزم الحصول على موافقة الشركة خلال ساعات عملها.",
    notice:
      "لا يمكن إصدار الوثيقة بأثر رجعي. ويجب أن يبدأ سريان التأمين في موعد لا يتجاوز تاريخ بدء استخدام السيارة في بلغاريا.",
  },

  steps: {
    eyebrow: "خطوات الإصدار",
    title: "كيفية الحصول على التأمين",
    items: [
      {
        title: "حدّد خط الرحلة",
        text:
          "اختر الإمارات باعتبارها بلد تسجيل السيارة.",
      },
      {
        title: "ارفع المستندات",
        text:
          "أرفق وثيقة تسجيل السيارة وبيانات طالب التأمين.",
      },
      {
        title: "استكمل عملية التحقق",
        text:
          "سنتحقق من رقم التسجيل ورقم الهيكل VIN ونوع السيارة وإمكانية إصدار الوثيقة.",
      },
      {
        title: "ادفع قيمة الوثيقة",
        text:
          "بعد تأكيد التكلفة، ستتلقى تعليمات الدفع أو رابطًا مخصصًا للدفع.",
      },
      {
        title: "استلم ملف PDF",
        text:
          "ستُرسل وثيقة التأمين الصادرة إلى البريد الإلكتروني الذي أدخلته.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "قبل دخول بلغاريا",
    title: "ما الذي ينبغي التحقق منه في الوثيقة الصادرة؟",
    text:
      "قد تؤدي الأخطاء في رقم التسجيل أو رقم الهيكل VIN أو مدة السريان إلى عدم صلاحية الوثيقة للاستخدام. قارن بيانات الوثيقة بوثيقة تسجيل السيارة قبل السفر.",
    items: [
      "رقم التسجيل؛",
      "رقم الهيكل VIN أو رقم الشاسيه؛",
      "بلد التسجيل — الإمارات؛",
      "العلامة التجارية للسيارة وطرازها؛",
      "فئة المركبة؛",
      "تاريخ بدء الوثيقة وانتهائها؛",
      "إدراج بلغاريا ضمن نطاق التغطية؛",
      "بيانات طالب التأمين.",
    ],
  },

  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة شائعة حول تأمين الإمارات → بلغاريا",
    items: [
      {
        q: "هل يمكن إصدار تأمين لسيارة مسجّلة في الإمارات لدخول بلغاريا؟",
        a:
          "نعم، يمكن إصدار تأمين حدودي لسيارة مسجّلة في الإمارات. وتُؤكد إمكانية الإصدار بعد التحقق من نوع السيارة ووثيقة تسجيلها.",
      },
      {
        q: "هل يسري التأمين الحدودي في بلغاريا؟",
        a:
          "نعم، تسري هذه الوثيقة في جميع دول المنطقة الاقتصادية الأوروبية، شريطة أن تكون الدول المعنية مدرجة ضمن نطاق التغطية المبين في الوثيقة.",
      },
      {
        q: "هل تغطي هذه الوثيقة كامل الطريق من الإمارات إلى بلغاريا؟",
        a:
          "لا. لا ينبغي اعتبار الوثيقة المخصصة لبلغاريا سارية في جميع دول العبور. ويجب التحقق من التغطية بصورة منفصلة في كل دولة على الطريق.",
      },
      {
        q: "هل تسري الوثيقة في تركيا؟",
        a:
          "لا. يلزم الحصول على تأمين منفصل لتركيا.",
      },
      {
        q: "ما المستندات المطلوبة لسيارة مسجّلة في الإمارات؟",
        a:
          "تحتاج إلى وثيقة تسجيل السيارة ورقم التسجيل ورقم الهيكل VIN وبيانات العلامة التجارية والطراز، إلى جانب بيانات طالب التأمين.",
      },
      {
        q: "هل يمكن استلام الوثيقة عبر الإنترنت؟",
        a:
          "نعم. يُرسل الطلب والمستندات عبر الإنترنت، وبعد المراجعة والدفع وإصدار الوثيقة، تُرسل النسخة النهائية بصيغة PDF.",
      },
      {
        q: "متى يجب أن يبدأ سريان الوثيقة؟",
        a:
          "يجب أن تكون الوثيقة سارية قبل بدء استخدام السيارة في بلغاريا. ولا يمكن إصدارها بأثر رجعي.",
      },
      {
        q: "هل تعوّض الوثيقة عن الأضرار التي تلحق بالسيارة؟",
        a:
          "لا. هذا تأمين للمسؤولية المدنية تجاه الغير، وليس تأمينًا شاملًا يغطي الأضرار التي تلحق بسيارتك.",
      },
    ],
  },

  carousel: {
    title: "التأمين بحسب خط الرحلة",
    cardTitle: "سيارة مسجّلة في الإمارات ومتجهة إلى بلغاريا",
    cardText:
      "تأمين المسؤولية المدنية تجاه الغير لسيارة تحمل لوحات إماراتية عند السفر إلى بلغاريا.",
    cta: "معرفة المزيد",
  },

  finalCta: {
    eyebrow: "إصدار الوثيقة",
    title: "أرسل طلب تأمين لرحلتك إلى بلغاريا",
    text:
      "جهّز وثيقة تسجيل السيارة، وحدد تاريخ بدء التأمين، وأرسل خط الرحلة المخطط. وبعد المراجعة، ستتلقى عرض السعر وتعليمات استكمال الإصدار.",
    button: "إرسال الطلب",
  },
};


const dictionaries: Partial<Record<Lang, UaeOcDictionary>> = {
  ru, 
  en, 
  ar,
};

export function getUaeBulgariaOcDictionary(
  lang: Lang,
): UaeOcDictionary {
  return dictionaries[lang] ?? en;
}