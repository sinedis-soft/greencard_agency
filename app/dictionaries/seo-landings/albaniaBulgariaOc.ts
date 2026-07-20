import type { Lang } from "@/app/dictionaries/header";
import type { UaeOcDictionary } from "@/app/dictionaries/seo-landings/uaeOc";

const ru: UaeOcDictionary = {
  seo: {
    title: "Страховка для авто из Албании в Болгарии — онлайн",
    description:
      "Страхование автомобиля с албанскими номерами для въезда в Болгарию: Green Card в своей страховой или пограничный полис OC graniczne онлайн.",
  },

  breadcrumbTitle: "Страховка для авто из Албании в Болгарии",

  hero: {
    eyebrow: "Албания → Болгария",
    title:
      "Страховка для автомобиля из Албании при въезде в Болгарию",
    lead:
      "Для поездки в Болгарию на автомобиле с албанскими номерами необходимо действующее страхование гражданской ответственности. Водитель может получить Green Card у своей страховой компании в Албании либо оформить пограничное страхование OC graniczne через наш сервис.",
    noticeLabel: "Два варианта:",
    notice:
      "если ваша албанская страховая компания выдаёт Green Card с покрытием Болгарии, можно использовать её. Если Green Card нет или её неудобно оформлять, у нас можно заказать пограничное страхование для Болгарии и других стран, указанных в полисе.",
    primaryCta: "Оформить пограничный полис",
    secondaryCta: "Сравнить варианты",
    cardLabel: "Краткие условия",
    facts: [
      {
        label: "Страна регистрации",
        value: "Албания",
      },
      {
        label: "Страна назначения",
        value: "Болгария",
      },
      {
        label: "Вариант 1",
        value: "Green Card в Албании",
      },
      {
        label: "Вариант 2",
        value: "OC graniczne онлайн",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Вариант 1",
      title: "Green Card у своей страховой компании",
      text:
        "Вы можете обратиться к страховщику, у которого оформлено обязательное страхование автомобиля в Албании, и получить Green Card. Перед поездкой необходимо проверить, что документ действует в Болгарии и на всех нужных датах.",
    },
    {
      tone: "yes",
      label: "Вариант 2",
      title: "Пограничное страхование через наш сервис",
      text:
        "Если Green Card отсутствует, её невозможно получить вовремя или вы предпочитаете отдельный полис, можно оформить OC graniczne для автомобиля с албанской регистрацией.",
    },
    {
      tone: "no",
      label: "Не покрывает",
      title: "Повреждение собственного автомобиля",
      text:
        "Оба варианта страхуют гражданскую ответственность перед третьими лицами. Ни Green Card, ни OC graniczne не заменяют КАСКО и не покрывают повреждение или угон самого автомобиля.",
    },
  ],

  suitability: {
    eyebrow: "Выбор страховки",
    title:
      "Green Card или пограничное страхование: что выбрать",
    text:
      "Оба документа могут подтвердить необходимое страхование ответственности в Болгарии. Выбор зависит от того, может ли ваша албанская страховая компания выдать Green Card, её стоимости, срока оформления и маршрута поездки.",
    yesTitle: "Можно выбрать один из вариантов",
    noTitle: "Когда документ не подходит",
    yesItems: [
      "получить Green Card у своей страховой компании в Албании;",
      "оформить OC graniczne через наш сервис;",
      "выбрать вариант, покрывающий Болгарию и даты поездки;",
      "проверить покрытие всех транзитных стран;",
      "оформить документ до начала поездки.",
    ],
    noItems: [
      "Green Card не действует в Болгарии;",
      "срок документа не покрывает поездку;",
      "регистрационный номер указан с ошибкой;",
      "нужно покрытие повреждения собственного автомобиля;",
      "страхование пытаются оформить задним числом.",
    ],
  },

  routeWarning: {
    eyebrow: "Маршрут до Болгарии",
    title:
      "Проверьте не только Болгарию, но и страны транзита",
    text:
      "Албания и Болгария не имеют общей границы. Маршрут может проходить через Северную Македонию, Грецию, Сербию, Косово или другие территории. Green Card или OC graniczne должны действовать не только в Болгарии, но и в каждой стране, где автомобиль будет использоваться.",
    cta: "Проверить маршрут",
  },

  coverage: {
    eyebrow: "Территория действия",
    title: "Где действует выбранная страховка",
    text:
      "Green Card действует в странах, которые не исключены в международном сертификате. OC graniczne действует в странах, прямо указанных в выданном пограничном полисе. В обоих случаях решающее значение имеет территория действия конкретного документа.",
    listLabel: "Страны, которые могут входить в покрытие OC graniczne",
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
    warningTitle:
      "Не считайте полис действующим автоматически на всём маршруте",
    warningText:
      "Если Северная Македония, Сербия, Косово, Албания или другая транзитная территория не входит в покрытие выбранного документа, для неё потребуется отдельное страхование.",
    warningNote:
      "Перед поездкой сверяйте не название продукта, а фактический перечень стран в страховом документе.",
  },

  documents: {
    eyebrow: "Документы",
    title: "Что нужно для оформления OC graniczne",
    text:
      "Для заказа пограничного страхования необходимо предоставить читаемый регистрационный документ автомобиля и данные страхователя. Green Card оформляется непосредственно через албанскую страховую компанию.",
    vehicleTitle: "Данные автомобиля",
    policyholderTitle: "Данные страхователя",
    vehicleItems: [
      "свидетельство о регистрации автомобиля;",
      "албанский регистрационный номер;",
      "VIN или номер кузова;",
      "марка и модель;",
      "тип транспортного средства;",
      "год выпуска;",
      "страна регистрации — Албания;",
    ],
    policyholderItems: [
      "паспорт или ID;",
      "имя и фамилия;",
      "email для получения PDF;",
      "номер телефона или мессенджер;",
      "дата начала страхования;",
      "необходимый срок действия;",
      "планируемый маршрут до Болгарии;",
    ],
  },

  price: {
    eyebrow: "Стоимость",
    title: "Сколько стоит страховка для поездки в Болгарию",
    text:
      "Стоимость Green Card определяет ваша страховая компания в Албании. Стоимость OC graniczne зависит от категории транспортного средства, срока страхования и тарифа страховщика. Перед выбором имеет смысл сравнить цену, срок оформления и территорию покрытия обоих вариантов.",
    factors: [
      "тип транспортного средства;",
      "срок действия страховки;",
      "дата начала покрытия;",
      "страны маршрута;",
      "тариф выбранного страховщика;",
    ],
  },

  timing: {
    eyebrow: "Срок оформления",
    title: "Когда выбирать и оформлять страховку",
    text:
      "Сначала можно уточнить у своей страховой компании стоимость и срок выдачи Green Card. Если этот вариант не подходит, заявку на OC graniczne лучше отправить за 1–2 рабочих дня до поездки.",
    notice:
      "Оба документа должны быть оформлены до начала поездки. Страхование не создаёт покрытие задним числом.",
  },

  steps: {
    eyebrow: "Порядок действий",
    title: "Как выбрать и получить страховой документ",
    items: [
      {
        title: "Уточните условия Green Card",
        text:
          "Свяжитесь со своей страховой компанией в Албании и узнайте стоимость, срок выдачи и территорию действия Green Card.",
      },
      {
        title: "Сравните с OC graniczne",
        text:
          "Проверьте стоимость и условия пограничного страхования через наш сервис.",
      },
      {
        title: "Выберите один вариант",
        text:
          "Отдельно покупать оба документа обычно не требуется, если выбранный полис полностью покрывает маршрут.",
      },
      {
        title: "Передайте документы",
        text:
          "Для OC graniczne загрузите регистрационный документ автомобиля и сведения о страхователе.",
      },
      {
        title: "Получите и проверьте полис",
        text:
          "После оплаты получите документ и проверьте регистрационный номер, даты и территорию покрытия.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Перед поездкой",
    title: "Что проверить в Green Card или OC graniczne",
    text:
      "Независимо от выбранного варианта данные страхового документа должны совпадать с регистрационными данными автомобиля.",
    items: [
      "регистрационный номер;",
      "VIN или номер кузова;",
      "страна регистрации — Албания;",
      "марка и модель;",
      "категория транспортного средства;",
      "дата начала страхования;",
      "дата окончания страхования;",
      "наличие Болгарии в покрытии;",
      "покрытие транзитных стран;",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title:
      "Страховка для автомобиля из Албании в Болгарии",
    items: [
      {
        q:
          "Какая страховка нужна автомобилю из Албании для поездки в Болгарию?",
        a:
          "Можно получить Green Card у своей страховой компании в Албании либо оформить пограничное страхование OC graniczne. Выбранный документ должен действовать в Болгарии и на даты поездки.",
      },
      {
        q:
          "Где купить Green Card для автомобиля с албанскими номерами?",
        a:
          "Green Card оформляется в Албании через страховую компанию, которая имеет право выдавать международные страховые сертификаты.",
      },
      {
        q:
          "Можно ли оформить пограничное страхование вместо Green Card?",
        a:
          "Да. Если у автомобиля нет действующей Green Card, можно оформить пограничное страхование, действующее в Болгарии и других указанных в полисе странах.",
      },
      {
        q:
          "Что выгоднее: Green Card или OC graniczne?",
        a:
          "Это зависит от тарифа вашей албанской страховой компании, необходимого срока и маршрута. Сравнивать нужно не только цену, но и территорию действия каждого документа.",
      },
      {
        q:
          "Нужно ли покупать одновременно Green Card и пограничный полис?",
        a:
          "Обычно нет. Достаточно одного действующего документа, который признаётся в Болгарии и покрывает необходимые страны маршрута.",
      },
      {
        q: "Действует ли OC graniczne в Болгарии?",
        a:
          "Да, если Болгария указана в выданном документе как территория действия и срок страхования уже начался.",
      },
      {
        q:
          "Покрывает ли пограничный полис дорогу из Албании до Болгарии?",
        a:
          "Только в тех странах маршрута, которые указаны в документе. Для остальных территорий может потребоваться отдельное страхование.",
      },
      {
        q:
          "Можно ли оформить OC graniczne онлайн?",
        a:
          "Да. Регистрационные документы и данные страхователя передаются онлайн. После проверки, оплаты и выпуска полис отправляется на email в формате PDF.",
      },
      {
        q:
          "Покрывает ли Green Card или OC graniczne мой автомобиль?",
        a:
          "Нет. Оба варианта покрывают гражданскую ответственность перед третьими лицами. Для повреждения, угона или других рисков собственного автомобиля требуется КАСКО.",
      },
    ],
  },

  carousel: {
    title: "Страхование по маршрутам",
    cardTitle:
      "Страховка для авто из Албании в Болгарии",
    cardText:
      "Green Card в своей страховой компании или пограничное страхование OC graniczne через наш сервис.",
    cta: "Сравнить варианты",
  },

  finalCta: {
    eyebrow: "Пограничное страхование",
    title:
      "Оформите OC graniczne для поездки в Болгарию",
    text:
      "Вы можете запросить Green Card у своей страховой компании в Албании. Если вы выбираете пограничное страхование, подготовьте регистрационный документ автомобиля, дату начала и маршрут поездки.",
    button: "Оформить пограничный полис",
  },
};

const en: UaeOcDictionary = {
  seo: {
    title: "Insurance for Albanian Vehicles Entering Bulgaria — Online",
    description:
      "Insurance for a vehicle with Albanian license plates entering Bulgaria: a Green Card from your insurer or an online border insurance policy.",
  },

  breadcrumbTitle: "Insurance for Albanian Vehicles Entering Bulgaria",

  hero: {
    eyebrow: "Albania → Bulgaria",
    title: "Insurance for an Albanian-Registered Vehicle Entering Bulgaria",
    lead:
      "A vehicle with Albanian license plates must have valid third-party liability insurance when traveling to Bulgaria. The driver may obtain a Green Card from their insurance company in Albania or arrange border insurance through our service.",
    noticeLabel: "Two options:",
    notice:
      "If your Albanian insurance company issues a Green Card covering Bulgaria, you may use it. If you do not have a Green Card or arranging one is inconvenient, you can order border insurance from us for Bulgaria and the other countries listed in the policy.",
    primaryCta: "Arrange Border Insurance",
    secondaryCta: "Compare the Options",
    cardLabel: "Key Terms",
    facts: [
      {
        label: "Country of registration",
        value: "Albania",
      },
      {
        label: "Destination country",
        value: "Bulgaria",
      },
      {
        label: "Option 1",
        value: "Green Card in Albania",
      },
      {
        label: "Option 2",
        value: "Border insurance online",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Option 1",
      title: "Green Card from Your Insurance Company",
      text:
        "You may contact the insurer that provides your compulsory motor insurance in Albania and request a Green Card. Before traveling, check that the document covers Bulgaria and remains valid for all required travel dates.",
    },
    {
      tone: "yes",
      label: "Option 2",
      title: "Border Insurance through Our Service",
      text:
        "If you do not have a Green Card, cannot obtain one in time, or prefer a separate policy, you may arrange border insurance for a vehicle registered in Albania.",
    },
    {
      tone: "no",
      label: "Not Covered",
      title: "Damage to Your Own Vehicle",
      text:
        "Both options cover third-party liability. Neither a Green Card nor border insurance replaces comprehensive insurance or covers damage to or theft of your own vehicle.",
    },
  ],

  suitability: {
    eyebrow: "Choosing Insurance",
    title: "Green Card or Border Insurance: Which Should You Choose?",
    text:
      "Both documents may provide the required third-party liability coverage in Bulgaria. The choice depends on whether your Albanian insurer can issue a Green Card, its price, issuance time, and the route of your journey.",
    yesTitle: "You May Choose Either Option",
    noTitle: "When the Document Is Not Suitable",
    yesItems: [
      "obtain a Green Card from your insurance company in Albania;",
      "arrange border insurance through our service;",
      "choose an option that covers Bulgaria and all travel dates;",
      "check coverage for every transit country;",
      "arrange the document before starting the journey.",
    ],
    noItems: [
      "the Green Card does not cover Bulgaria;",
      "the document does not remain valid for the whole journey;",
      "the registration number is incorrect;",
      "you need coverage for damage to your own vehicle;",
      "you are trying to arrange insurance retroactively.",
    ],
  },

  routeWarning: {
    eyebrow: "Route to Bulgaria",
    title: "Check Both Bulgaria and All Transit Countries",
    text:
      "Albania and Bulgaria do not share a border. The route may pass through North Macedonia, Greece, Serbia, Kosovo, or other territories. The Green Card or border insurance must be valid not only in Bulgaria but also in every country where the vehicle will be used.",
    cta: "Check the Route",
  },

  coverage: {
    eyebrow: "Territorial Coverage",
    title: "Where the Selected Insurance Is Valid",
    text:
      "A Green Card is valid in countries that are not excluded from the international certificate. Border insurance is valid in the countries expressly listed in the issued policy. In both cases, the territorial scope of the specific document is decisive.",
    listLabel: "Countries That May Be Included in Border Insurance Coverage",
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
    warningTitle:
      "Do Not Assume the Policy Automatically Covers the Entire Route",
    warningText:
      "If North Macedonia, Serbia, Kosovo, Albania, or another transit territory is not covered by the selected document, separate insurance will be required for that territory.",
    warningNote:
      "Before traveling, check the actual list of covered countries in the insurance document rather than relying only on the product name.",
  },

  documents: {
    eyebrow: "Documents",
    title: "What Is Required to Arrange Border Insurance",
    text:
      "To order border insurance, you must provide a legible vehicle registration document and the policyholder’s details. A Green Card must be obtained directly from an Albanian insurance company.",
    vehicleTitle: "Vehicle Details",
    policyholderTitle: "Policyholder Details",
    vehicleItems: [
      "vehicle registration certificate;",
      "Albanian registration number;",
      "VIN or chassis number;",
      "make and model;",
      "vehicle type;",
      "year of manufacture;",
      "country of registration — Albania;",
    ],
    policyholderItems: [
      "passport or ID card;",
      "first and last name;",
      "email address for receiving the PDF;",
      "telephone number or messenger contact;",
      "insurance start date;",
      "required policy period;",
      "planned route to Bulgaria;",
    ],
  },

  price: {
    eyebrow: "Cost",
    title: "How Much Does Insurance for a Trip to Bulgaria Cost?",
    text:
      "The price of a Green Card is determined by your insurance company in Albania. The cost of border insurance depends on the vehicle category, the insurance period, and the insurer’s tariff. Before choosing, compare the price, issuance time, and territorial coverage of both options.",
    factors: [
      "vehicle type;",
      "insurance period;",
      "coverage start date;",
      "countries included in the route;",
      "tariff of the selected insurer;",
    ],
  },

  timing: {
    eyebrow: "Issuance Time",
    title: "When to Choose and Arrange the Insurance",
    text:
      "You may first ask your insurance company about the price and issuance time of a Green Card. If that option is unsuitable, submit your border insurance application preferably 1–2 business days before the trip.",
    notice:
      "Both documents must be arranged before the journey begins. Insurance does not provide retroactive coverage.",
  },

  steps: {
    eyebrow: "Process",
    title: "How to Choose and Obtain the Insurance Document",
    items: [
      {
        title: "Ask about Green Card Terms",
        text:
          "Contact your insurance company in Albania and ask about the price, issuance time, and territorial coverage of the Green Card.",
      },
      {
        title: "Compare It with Border Insurance",
        text:
          "Check the price and terms of border insurance available through our service.",
      },
      {
        title: "Choose One Option",
        text:
          "You generally do not need to buy both documents if the selected policy covers the entire route.",
      },
      {
        title: "Submit the Documents",
        text:
          "To arrange border insurance, upload the vehicle registration document and the policyholder’s details.",
      },
      {
        title: "Receive and Check the Policy",
        text:
          "After payment, receive the document and check the registration number, insurance dates, and territorial coverage.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Before the Trip",
    title: "What to Check in the Green Card or Border Insurance Policy",
    text:
      "Regardless of the selected option, the details in the insurance document must match the vehicle registration details.",
    items: [
      "registration number;",
      "VIN or chassis number;",
      "country of registration — Albania;",
      "make and model;",
      "vehicle category;",
      "insurance start date;",
      "insurance end date;",
      "Bulgaria included in the coverage;",
      "coverage of transit countries;",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Insurance for an Albanian Vehicle Traveling to Bulgaria",
    items: [
      {
        q:
          "What insurance does an Albanian vehicle need for a trip to Bulgaria?",
        a:
          "You may obtain a Green Card from your insurance company in Albania or arrange border insurance. The selected document must be valid in Bulgaria and cover all travel dates.",
      },
      {
        q:
          "Where can I obtain a Green Card for a vehicle with Albanian license plates?",
        a:
          "A Green Card is issued in Albania by an insurance company authorized to issue international motor insurance certificates.",
      },
      {
        q: "Can I arrange border insurance instead of a Green Card?",
        a:
          "Yes. If the vehicle does not have a valid Green Card, you may arrange border insurance covering Bulgaria and the other countries listed in the policy.",
      },
      {
        q: "Which is better: a Green Card or border insurance?",
        a:
          "This depends on the tariff of your Albanian insurance company, the required insurance period, and the route. Compare both the price and the territorial coverage of each document.",
      },
      {
        q:
          "Do I need to buy both a Green Card and border insurance?",
        a:
          "Usually not. One valid document is sufficient if it is recognized in Bulgaria and covers all required countries on the route.",
      },
      {
        q: "Is border insurance valid in Bulgaria?",
        a:
          "Yes, provided Bulgaria is listed in the issued policy as a covered country and the insurance period has already begun.",
      },
      {
        q:
          "Does border insurance cover the entire journey from Albania to Bulgaria?",
        a:
          "Only in the countries listed in the policy. Separate insurance may be required for any other territory on the route.",
      },
      {
        q: "Can border insurance be arranged online?",
        a:
          "Yes. The vehicle registration documents and policyholder details are submitted online. After verification, payment, and issuance, the policy is sent by email as a PDF.",
      },
      {
        q:
          "Does a Green Card or border insurance cover damage to my own vehicle?",
        a:
          "No. Both options cover third-party liability. Comprehensive insurance is required for damage, theft, or other risks affecting your own vehicle.",
      },
    ],
  },

  carousel: {
    title: "Insurance by Route",
    cardTitle: "Insurance for an Albanian Vehicle Entering Bulgaria",
    cardText:
      "A Green Card from your own insurance company or border insurance arranged through our service.",
    cta: "Compare the Options",
  },

  finalCta: {
    eyebrow: "Border Insurance",
    title: "Arrange Border Insurance for Your Trip to Bulgaria",
    text:
      "You may request a Green Card from your insurance company in Albania. If you choose border insurance, prepare the vehicle registration document, the required start date, and your planned route.",
    button: "Arrange Border Insurance",
  },
};

const sq: UaeOcDictionary = {
  seo: {
    title: "Sigurimi për automjet nga Shqipëria në Bullgari — online",
    description:
      "Sigurimi për automjet me targa shqiptare për hyrje në Bullgari: Karton Jeshil nga siguruesi juaj ose sigurim kufitar online.",
  },

  breadcrumbTitle: "Sigurimi për automjet nga Shqipëria në Bullgari",

  hero: {
    eyebrow: "Shqipëri → Bullgari",
    title:
      "Sigurimi për një automjet nga Shqipëria gjatë hyrjes në Bullgari",
    lead:
      "Për të udhëtuar në Bullgari me një automjet me targa shqiptare kërkohet sigurim i vlefshëm i përgjegjësisë civile ndaj palëve të treta. Drejtuesi mund të marrë Kartonin Jeshil nga shoqëria e tij e sigurimit në Shqipëri ose të lidhë sigurim kufitar përmes shërbimit tonë.",
    noticeLabel: "Dy mundësi:",
    notice:
      "Nëse shoqëria juaj shqiptare e sigurimit lëshon Karton Jeshil me mbulim për Bullgarinë, mund ta përdorni atë. Nëse nuk keni Karton Jeshil ose marrja e tij nuk është e përshtatshme, mund të porositni tek ne sigurim kufitar për Bullgarinë dhe shtetet e tjera të shënuara në policë.",
    primaryCta: "Lidhni sigurimin kufitar",
    secondaryCta: "Krahasoni mundësitë",
    cardLabel: "Kushtet kryesore",
    facts: [
      {
        label: "Shteti i regjistrimit",
        value: "Shqipëri",
      },
      {
        label: "Shteti i destinacionit",
        value: "Bullgari",
      },
      {
        label: "Mundësia 1",
        value: "Karton Jeshil në Shqipëri",
      },
      {
        label: "Mundësia 2",
        value: "Sigurim kufitar online",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Mundësia 1",
      title: "Karton Jeshil nga shoqëria juaj e sigurimit",
      text:
        "Mund të kontaktoni siguruesin ku keni lidhur sigurimin e detyrueshëm të automjetit në Shqipëri dhe të kërkoni Kartonin Jeshil. Para udhëtimit kontrolloni që dokumenti të jetë i vlefshëm në Bullgari dhe për të gjitha datat e udhëtimit.",
    },
    {
      tone: "yes",
      label: "Mundësia 2",
      title: "Sigurimi kufitar përmes shërbimit tonë",
      text:
        "Nëse nuk keni Karton Jeshil, nuk mund ta merrni në kohë ose preferoni një policë të veçantë, mund të lidhni sigurim kufitar për automjetin e regjistruar në Shqipëri.",
    },
    {
      tone: "no",
      label: "Nuk mbulon",
      title: "Dëmtimin e automjetit tuaj",
      text:
        "Të dyja mundësitë mbulojnë përgjegjësinë civile ndaj palëve të treta. As Kartoni Jeshil dhe as sigurimi kufitar nuk zëvendësojnë sigurimin KASKO dhe nuk mbulojnë dëmtimin ose vjedhjen e automjetit tuaj.",
    },
  ],

  suitability: {
    eyebrow: "Zgjedhja e sigurimit",
    title: "Karton Jeshil apo sigurim kufitar: cilin të zgjidhni?",
    text:
      "Të dy dokumentet mund të dëshmojnë sigurimin e nevojshëm të përgjegjësisë civile në Bullgari. Zgjedhja varet nga mundësia e siguruesit tuaj shqiptar për të lëshuar Kartonin Jeshil, çmimi, afati i lëshimit dhe itinerari i udhëtimit.",
    yesTitle: "Mund të zgjidhni njërën nga mundësitë",
    noTitle: "Kur dokumenti nuk është i përshtatshëm",
    yesItems: [
      "të merrni Kartonin Jeshil nga shoqëria juaj e sigurimit në Shqipëri;",
      "të lidhni sigurim kufitar përmes shërbimit tonë;",
      "të zgjidhni mundësinë që mbulon Bullgarinë dhe datat e udhëtimit;",
      "të kontrolloni mbulimin në të gjitha shtetet e tranzitit;",
      "ta lidhni sigurimin përpara fillimit të udhëtimit;",
    ],
    noItems: [
      "Kartoni Jeshil nuk është i vlefshëm në Bullgari;",
      "afati i dokumentit nuk mbulon të gjithë udhëtimin;",
      "numri i regjistrimit është shënuar gabim;",
      "kërkohet mbulim për dëmtimin e automjetit tuaj;",
      "sigurimi kërkohet të lidhet me fuqi prapavepruese;",
    ],
  },

  routeWarning: {
    eyebrow: "Itinerari drejt Bullgarisë",
    title: "Kontrolloni Bullgarinë dhe të gjitha shtetet e tranzitit",
    text:
      "Shqipëria dhe Bullgaria nuk kanë kufi të përbashkët. Itinerari mund të kalojë përmes Maqedonisë së Veriut, Greqisë, Serbisë, Kosovës ose territoreve të tjera. Kartoni Jeshil ose sigurimi kufitar duhet të jetë i vlefshëm jo vetëm në Bullgari, por edhe në çdo shtet ku do të përdoret automjeti.",
    cta: "Kontrolloni itinerarin",
  },

  coverage: {
    eyebrow: "Territori i mbulimit",
    title: "Ku është i vlefshëm sigurimi i zgjedhur",
    text:
      "Kartoni Jeshil është i vlefshëm në shtetet që nuk janë përjashtuar nga certifikata ndërkombëtare. Sigurimi kufitar është i vlefshëm në shtetet e shënuara shprehimisht në policën e lëshuar. Në të dyja rastet, vendimtar është territori i mbulimit i dokumentit konkret.",
    listLabel:
      "Shtetet që mund të përfshihen në mbulimin e sigurimit kufitar",
    countries: [
      "Bullgari",
      "Austri",
      "Belgjikë",
      "Qipro",
      "Çeki",
      "Gjermani",
      "Danimarkë",
      "Spanjë",
      "Estoni",
      "Francë",
      "Finlandë",
      "Greqi",
      "Hungari",
      "Kroaci",
      "Itali",
      "Irlandë",
      "Islandë",
      "Lituani",
      "Letoni",
      "Norvegji",
      "Poloni",
      "Rumani",
      "Suedi",
      "Sllovaki",
      "Slloveni",
      "Zvicër",
    ],
    warningTitle:
      "Mos supozoni se polica mbulon automatikisht të gjithë itinerarin",
    warningText:
      "Nëse Maqedonia e Veriut, Serbia, Kosova, Shqipëria ose një territor tjetër tranziti nuk përfshihet në dokumentin e zgjedhur, për atë territor do të kërkohet sigurim i veçantë.",
    warningNote:
      "Para udhëtimit kontrolloni listën reale të shteteve në dokumentin e sigurimit dhe jo vetëm emrin e produktit.",
  },

  documents: {
    eyebrow: "Dokumentet",
    title: "Çfarë nevojitet për lidhjen e sigurimit kufitar",
    text:
      "Për të porositur sigurimin kufitar duhet të paraqisni një dokument regjistrimi të lexueshëm të automjetit dhe të dhënat e të siguruarit. Kartoni Jeshil merret drejtpërdrejt nga një shoqëri shqiptare sigurimi.",
    vehicleTitle: "Të dhënat e automjetit",
    policyholderTitle: "Të dhënat e të siguruarit",
    vehicleItems: [
      "leja e qarkullimit të automjetit;",
      "numri shqiptar i regjistrimit;",
      "VIN-i ose numri i shasisë;",
      "marka dhe modeli;",
      "lloji i automjetit;",
      "viti i prodhimit;",
      "shteti i regjistrimit — Shqipëri;",
    ],
    policyholderItems: [
      "pasaportë ose kartë identiteti;",
      "emri dhe mbiemri;",
      "adresa e emailit për marrjen e dokumentit PDF;",
      "numri i telefonit ose aplikacioni i komunikimit;",
      "data e fillimit të sigurimit;",
      "periudha e kërkuar e sigurimit;",
      "itinerari i planifikuar drejt Bullgarisë;",
    ],
  },

  price: {
    eyebrow: "Çmimi",
    title: "Sa kushton sigurimi për udhëtimin në Bullgari?",
    text:
      "Çmimin e Kartonit Jeshil e përcakton shoqëria juaj e sigurimit në Shqipëri. Çmimi i sigurimit kufitar varet nga kategoria e automjetit, periudha e sigurimit dhe tarifa e siguruesit. Para zgjedhjes krahasoni çmimin, afatin e lëshimit dhe territorin e mbulimit të të dyja mundësive.",
    factors: [
      "lloji i automjetit;",
      "periudha e sigurimit;",
      "data e fillimit të mbulimit;",
      "shtetet e përfshira në itinerar;",
      "tarifa e siguruesit të zgjedhur;",
    ],
  },

  timing: {
    eyebrow: "Afati i lëshimit",
    title: "Kur të zgjidhni dhe të lidhni sigurimin",
    text:
      "Fillimisht mund të pyesni shoqërinë tuaj të sigurimit për çmimin dhe afatin e lëshimit të Kartonit Jeshil. Nëse kjo mundësi nuk ju përshtatet, kërkesën për sigurim kufitar rekomandohet ta dërgoni 1–2 ditë pune përpara udhëtimit.",
    notice:
      "Të dy dokumentet duhet të lëshohen përpara fillimit të udhëtimit. Sigurimi nuk krijon mbulim me fuqi prapavepruese.",
  },

  steps: {
    eyebrow: "Procedura",
    title: "Si të zgjidhni dhe të merrni dokumentin e sigurimit",
    items: [
      {
        title: "Pyetni për kushtet e Kartonit Jeshil",
        text:
          "Kontaktoni shoqërinë tuaj të sigurimit në Shqipëri dhe pyetni për çmimin, afatin e lëshimit dhe territorin e mbulimit të Kartonit Jeshil.",
      },
      {
        title: "Krahasojeni me sigurimin kufitar",
        text:
          "Kontrolloni çmimin dhe kushtet e sigurimit kufitar përmes shërbimit tonë.",
      },
      {
        title: "Zgjidhni njërën mundësi",
        text:
          "Zakonisht nuk është e nevojshme të blihen të dy dokumentet, nëse polica e zgjedhur mbulon të gjithë itinerarin.",
      },
      {
        title: "Dërgoni dokumentet",
        text:
          "Për sigurimin kufitar ngarkoni dokumentin e regjistrimit të automjetit dhe të dhënat e të siguruarit.",
      },
      {
        title: "Merrni dhe kontrolloni policën",
        text:
          "Pas pagesës merrni dokumentin dhe kontrolloni numrin e regjistrimit, datat dhe territorin e mbulimit.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Para udhëtimit",
    title: "Çfarë të kontrolloni në Kartonin Jeshil ose sigurimin kufitar",
    text:
      "Pavarësisht mundësisë së zgjedhur, të dhënat në dokumentin e sigurimit duhet të përputhen me të dhënat e regjistrimit të automjetit.",
    items: [
      "numri i regjistrimit;",
      "VIN-i ose numri i shasisë;",
      "shteti i regjistrimit — Shqipëri;",
      "marka dhe modeli;",
      "kategoria e automjetit;",
      "data e fillimit të sigurimit;",
      "data e përfundimit të sigurimit;",
      "përfshirja e Bullgarisë në mbulim;",
      "mbulimi i shteteve të tranzitit;",
    ],
  },

  faq: {
    eyebrow: "Pyetje të shpeshta",
    title: "Sigurimi për një automjet nga Shqipëria në Bullgari",
    items: [
      {
        q:
          "Çfarë sigurimi nevojitet për një automjet nga Shqipëria që udhëton në Bullgari?",
        a:
          "Mund të merrni Kartonin Jeshil nga shoqëria juaj e sigurimit në Shqipëri ose të lidhni sigurim kufitar. Dokumenti i zgjedhur duhet të jetë i vlefshëm në Bullgari dhe gjatë të gjitha datave të udhëtimit.",
      },
      {
        q:
          "Ku mund ta marr Kartonin Jeshil për një automjet me targa shqiptare?",
        a:
          "Kartoni Jeshil lëshohet në Shqipëri nga një shoqëri sigurimi e autorizuar për lëshimin e certifikatave ndërkombëtare të sigurimit motorik.",
      },
      {
        q:
          "A mund të lidh sigurim kufitar në vend të Kartonit Jeshil?",
        a:
          "Po. Nëse automjeti nuk ka Karton Jeshil të vlefshëm, mund të lidhni sigurim kufitar që mbulon Bullgarinë dhe shtetet e tjera të shënuara në policë.",
      },
      {
        q:
          "Cila mundësi është më e leverdishme: Kartoni Jeshil apo sigurimi kufitar?",
        a:
          "Kjo varet nga tarifa e shoqërisë suaj shqiptare të sigurimit, periudha e kërkuar dhe itinerari. Duhet të krahasoni jo vetëm çmimin, por edhe territorin e mbulimit të secilit dokument.",
      },
      {
        q:
          "A duhet të blej njëkohësisht Kartonin Jeshil dhe sigurimin kufitar?",
        a:
          "Zakonisht jo. Mjafton një dokument i vlefshëm që njihet në Bullgari dhe mbulon të gjitha shtetet e nevojshme të itinerarit.",
      },
      {
        q: "A është i vlefshëm sigurimi kufitar në Bullgari?",
        a:
          "Po, nëse Bullgaria është shënuar në dokumentin e lëshuar si territor i mbuluar dhe periudha e sigurimit ka filluar.",
      },
      {
        q:
          "A e mbulon sigurimi kufitar të gjithë rrugën nga Shqipëria në Bullgari?",
        a:
          "Vetëm në shtetet e shënuara në policë. Për territoret e tjera të itinerarit mund të kërkohet sigurim i veçantë.",
      },
      {
        q: "A mund të lidhet sigurimi kufitar online?",
        a:
          "Po. Dokumentet e regjistrimit dhe të dhënat e të siguruarit dërgohen online. Pas kontrollit, pagesës dhe lëshimit, polica dërgohet me email në formatin PDF.",
      },
      {
        q:
          "A e mbulon Kartoni Jeshil ose sigurimi kufitar dëmtimin e automjetit tim?",
        a:
          "Jo. Të dyja mundësitë mbulojnë përgjegjësinë civile ndaj palëve të treta. Për dëmtimin, vjedhjen ose rreziqe të tjera të automjetit tuaj nevojitet sigurim KASKO.",
      },
    ],
  },

  carousel: {
    title: "Sigurimi sipas itinerarit",
    cardTitle: "Sigurimi për automjet nga Shqipëria në Bullgari",
    cardText:
      "Karton Jeshil nga shoqëria juaj e sigurimit ose sigurim kufitar përmes shërbimit tonë.",
    cta: "Krahasoni mundësitë",
  },

  finalCta: {
    eyebrow: "Sigurimi kufitar",
    title: "Lidhni sigurimin kufitar për udhëtimin në Bullgari",
    text:
      "Mund të kërkoni Kartonin Jeshil nga shoqëria juaj e sigurimit në Shqipëri. Nëse zgjidhni sigurimin kufitar, përgatitni dokumentin e regjistrimit të automjetit, datën e fillimit dhe itinerarin e udhëtimit.",
    button: "Lidhni sigurimin kufitar",
  },
};

const dictionaries: Partial<Record<Lang, UaeOcDictionary>> = {
  ru, en, sq,
};

export function getAlbaniaBulgariaOcDictionary(
  lang: Lang,
): UaeOcDictionary {
  return dictionaries[lang] ?? en;
}