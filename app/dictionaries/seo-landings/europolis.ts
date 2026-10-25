import type { Lang } from "@/app/dictionaries/header";
import type { UaeOcDictionary } from "@/app/dictionaries/seo-landings/uaeOc";

const ru: UaeOcDictionary = {
  seo: {
    title: "Европолис купить онлайн — страховка для авто в Европу",
    description:
      "Европолис для автомобиля с иностранными номерами: оформление пограничного страхования онлайн для поездки по Европе. Проверим документы, маршрут и территорию действия, рассчитаем стоимость и отправим полис в PDF.",
  },

  breadcrumbTitle: "Европолис для поездки в Европу",

  hero: {
    eyebrow: "Автомобиль с иностранными номерами → Европа",

    title: "Страховка на автомобиль для поездки в Европу - оформление онлайн",

    lead:
      "Европолис - используемое на этой странице название пограничного страхования гражданской ответственности (OC graniczne) для автомобиля с иностранными регистрационными номерами. Такой полис может потребоваться для временного использования автомобиля в странах Европы, если у него нет другого действующего страхования, признаваемого на соответствующей территории.",

    noticeLabel: "Перед оформлением:",

    notice:
      "Мы проверим страну регистрации автомобиля, планируемый маршрут и территорию действия страхования. Один полис не следует автоматически считать действующим во всех странах транзита.",

    primaryCta: "Оформить Европолис",

    secondaryCta: "Проверить документы",

    cardLabel: "Основные условия",

    facts: [
      {
        label: "Страна регистрации автомобиля:",
        value: "Беларусь, Украина, Молдова, Россия, Грузия, Армения, Казахстан, Узбекистан, Таджикистан, Туркменистан, Китай, Монголия, ОАЭ, Катар, Ирак, Алжир, США, Канада, Мексика, Бразилия, Саудовская Аравия",
      },
      {
        label: "Территория покрытия",
        value: "Страны EC и Швейцария, Норвегия, Исландия",
      },
      {
        label: "Тип страхования",
        value: "Пограничное страхование (Frontier Insurance)",
      },
      {
        label: "Получение",
        value: "Электронный полис в PDF",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Можно оформить",
      title: "Для автомобиля, зарегистрированного за пределами стран Многостороннего соглашения",
      text:
        "Европолис может быть оформлен для автомобиля с иностранными номерами, если страна его регистрации и параметры автомобиля соответствуют условиям страховщика. Перед выпуском мы проверяем регистрационный документ и возможность оформления.",
    },
    {
      tone: "warning",
      label: "Нужно проверить",
      title: "Страну регистрации и маршрут поездки",
      text:
        "Возможность оформления зависит от страны регистрации автомобиля. Кроме того, страхование, действующее в странах ЕС, Швейцарии, Норвегии и Исландии, не обязательно распространяется на все государства транзита.",
    },
    {
      tone: "no",
      label: "Не покрывает",
      title: "Повреждение собственного автомобиля",
      text:
        "Европолис является страхованием гражданской ответственности перед третьими лицами. Он не является страхованием КАСКО и не покрывает повреждение, поломку, кражу или вандализм в отношении самого застрахованного автомобиля.",
    },
  ],

  suitability: {
    eyebrow: "Кому подходит",

    title: "Когда можно оформить Европолис",

    text:
      "Европолис предназначен для временного страхования гражданской ответственности иностранного автомобиля при поездке по территории стран ЕС, Швейцарии, Норвегии и Исландии.",

    yesTitle: "Европолис может подойти",

    noTitle: "Европолис не подходит",

    yesItems: [
      "автомобиль зарегистрирован в стране, национальное страховое бюро которой не участвует в Многостороннем соглашении;",
      "в маршрут входят страны, указанные в территории действия предлагаемого полиса;",
      "у автомобиля нет другого действующего страхования, достаточного для этого маршрута;",
      "имеется читаемый регистрационный документ автомобиля;",
      "данные автомобиля можно подтвердить документами;",
      "полис оформляется до начала требуемого периода страхования;",
    ],

    noItems: [
      "автомобиль зарегистрирован в государстве ЕЭЗ, Андорре, Боснии и Герцеговине, Черногории, Сербии, Швейцарии или Великобритании;",
      "необходимо застраховать повреждение собственного автомобиля;",
      "страхование требуется только для страны, которая не входит в территорию действия предлагаемого полиса;",
      "требуется оформить страхование задним числом;",
      "регистрационные данные автомобиля невозможно подтвердить документами;",
      "данные автомобиля не соответствуют требованиям страховщика для выпуска полиса;",
    ],
  },

  routeWarning: {
    eyebrow: "Маршрут поездки",

    title: "Проверьте страхование для каждой страны маршрута",

    text:
      "При поездке в Европу автомобиль может пересекать несколько государств. Территория действия Европолиса определяется выданным страховым документом, поэтому наличие покрытия необходимо проверить не только для страны назначения, но и для транзитных стран.",

    cta: "Проверить маршрут",
  },

  coverage: {
    eyebrow: "Территория действия",

    title: "Где действует наш Европолис",

    text:
      "Территория страхования указывается непосредственно в выданном полисе. Именно страховой документ является окончательным подтверждением того, в каких странах действует страхование.",

    listLabel: "Страны, входящие в покрытие предлагаемого полиса",

    countries: [
      "Австрия",
      "Бельгия",
      "Болгария",
      "Венгрия",
      "Германия",
      "Греция",
      "Дания",
      "Ирландия",
      "Исландия",
      "Испания",
      "Италия",
      "Кипр",
      "Латвия",
      "Литва",
      "Норвегия",
      "Польша",
      "Румыния",
      "Словакия",
      "Словения",
      "Финляндия",
      "Франция",
      "Хорватия",
      "Чехия",
      "Швейцария",
      "Швеция",
      "Эстония",
    ],

    warningTitle: "Транзит через другие страны требует отдельных страховок.",

    warningText:
      "Если Турция, Сербия, Северная Македония, Черногория, Босния и Герцеговина, Албания, Косово или другая страна маршрута не указана в страховом документе, рассчитывать на действие Европолиса на её территории нельзя.",

    warningNote:
      "Для такого участка маршрута потребуется отдельное местное пограничное страхование, Зеленая карта или другой страховой документ, признаваемый соответствующим государством.",
  },

  documents: {
    eyebrow: "Документы",

    title: "Что нужно для оформления Европолиса",

    text:
      "Данные автомобиля проверяются по регистрационному документу. Регистрационный номер, VIN или номер кузова, марка, модель и сведения о владельце должны позволять однозначно идентифицировать автомобиль.",

    vehicleTitle: "Данные автомобиля",

    policyholderTitle: "Данные страхователя",

    vehicleItems: [
      "регистрационный документ автомобиля;",
      "регистрационный номер;",
      "VIN или номер кузова;",
      "марка и модель;",
      "тип транспортного средства;",
      "год выпуска;",
      "страна регистрации;",
    ],

    policyholderItems: [
      "паспорт или другой необходимый документ, удостоверяющий личность;",
      "имя и фамилия латиницей;",
      "e-mail для получения полиса;",
      "номер телефона или мессенджер;",
      "дата начала страхования;",
      "необходимый срок страхования;",
      "планируемый маршрут;",
    ],
  },

  price: {
    eyebrow: "Стоимость",

    title: "Сколько стоит Европолис",

    text:
      "Стоимость зависит от категории транспортного средства, необходимого срока страхования и действующего тарифа страховщика. Окончательную возможность оформления и стоимость мы подтверждаем после проверки данных автомобиля.",

    factors: [
      "категория транспортного средства;",
      "срок страхования;",
      "дата начала действия полиса;",
      "страна регистрации автомобиля;",
      "соответствие автомобиля условиям страховщика;",
    ],
  },

  timing: {
    eyebrow: "Срок оформления",

    title: "Когда заказывать Европолис",

    text:
      "Заявку рекомендуется отправлять заранее, до начала поездки или до даты, с которой требуется страховое покрытие. Время необходимо для проверки документов, расчёта стоимости и выпуска страхового документа. Некоторые марки или модели автомобилей отсутствуют в справочнике страховой организации, поэтому их необходимо согласовывать. Согласование доступно с понедельника по пятницу с 8 утра до 20 вечера по варшавскому времени, а также в субботу с 8 утра до 16 дня по варшавскому времени.",

    notice:
      "Европолис не оформляется задним числом. До начала использования автомобиля на соответствующей территории страховой полис уже должен вступить в силу.",
  },

  steps: {
    eyebrow: "Оформление онлайн",

    title: "Как купить Европолис онлайн",

    items: [
      {
        title: "Укажите страну регистрации",
        text:
          "Сообщите, в какой стране зарегистрирован автомобиль.",
      },
      {
        title: "Укажите маршрут и даты",
        text:
          "Сообщите страны поездки, дату начала и необходимый срок страхования.",
      },
      {
        title: "Загрузите документы",
        text:
          "Приложите регистрационный документ автомобиля и необходимые данные страхователя.",
      },
      {
        title: "Получите подтверждение",
        text:
          "Мы проверим автомобиль, документы, маршрут и возможность оформления Европолиса.",
      },
      {
        title: "Оплатите и получите полис",
        text:
          "После подтверждения стоимости и оплаты готовый страховой документ будет отправлен на e-mail в формате PDF.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "После оформления",

    title: "Что проверить в Европолисе перед поездкой",

    text:
      "После получения полиса сравните указанные в нём сведения с регистрационным документом автомобиля. Если обнаружена ошибка, её необходимо исправить до использования полиса.",

    items: [
      "регистрационный номер автомобиля;",
      "VIN или номер кузова;",
      "страна регистрации;",
      "марка и модель;",
      "категория транспортного средства;",
      "дата начала действия;",
      "дата окончания действия;",
      "территория страхования;",
      "данные страхователя;",
    ],
  },

  faq: {
    eyebrow: "FAQ",

    title: "Вопросы о Европолисе",

    items: [
      {
        q: "Что такое Европолис?",
        a:
          "На этой странице под Европолисом понимается пограничное страхование гражданской ответственности OC graniczne для автомобиля с иностранными регистрационными номерами. Это страхование ответственности перед третьими лицами, а не страхование КАСКО.",
      },
      {
        q: "Можно ли купить Европолис онлайн?",
        a:
          "Да. Документы можно передать дистанционно. После проверки данных, подтверждения возможности оформления и оплаты готовый страховой документ направляется на email в формате PDF.",
      },
      {
        q: "Европолис и Зеленая карта — это одно и то же?",
        a:
          "Нет. Зеленая карта является международным страховым сертификатом системы Green Card. Европолис - это пограничное страхование OC graniczne. Какой документ нужен именно вашему автомобилю, зависит от страны регистрации и маршрута.",
      },
      {
        q: "Для автомобилей из каких стран можно оформить Европолис?",
        a:
          "Возможность оформления определяется страной регистрации автомобиля и условиями страховщика. Европолис возможно оформить для автомобилей зарегистрированных, например, в следующих странах: Беларусь, Украина, Молдова, Россия, Грузия, Армения, Казахстан, Узбекистан, Таджикистан, Туркменистан, Китай, Монголия, ОАЭ, Катар, Ирак, Алжир, США, Канада, Мексика, Бразилия, Саудовская Аравия. Отправьте регистрационный документ автомобиля — мы проверим возможность выпуска до оплаты.",
      },
      {
        q: "Можно ли оформить Европолис на автомобиль с российскими номерами?",
        a:
          "Возможность оформления необходимо подтвердить по действующим условиям страховщика. Отправьте регистрационный документ автомобиля и маршрут поездки — мы проверим возможность выпуска полиса.",
      },
      {
        q: "Можно ли оформить Европолис на автомобиль с белорусскими номерами?",
        a:
          "Возможность оформления проверяется по регистрационному документу автомобиля, его категории и планируемому маршруту. После проверки мы подтвердим возможность выпуска и стоимость.",
      },
      {
        q: "В каких странах действует Европолис?",
        a:
          "Европолис действует только на территории стран EC, Швейцарии, Норвегии и Исландии.",
      },
      {
        q: "Нужна ли отдельная страховка для Турции?",
        a:
          "Да. Турция не входит в территорию действия выданного полиса, для движения по её территории потребуется отдельный страховой документ, признаваемый в Турции.",
      },
      {
        q: "Какие документы нужны для оформления Европолиса?",
        a:
          "Обычно требуется регистрационный документ автомобиля и данные страхователя. Дополнительно проверяются регистрационный номер, VIN или номер кузова, марка, модель, категория автомобиля, дата начала страхования и маршрут.",
      },
      {
        q: "Можно ли получить Европолис в электронном виде?",
        a:
          "Да. После проверки, оплаты и выпуска страховой документ отправляется на указанный email в формате PDF.",
      },
      {
        q: "Покрывает ли Европолис ремонт моего автомобиля?",
        a:
          "Нет. Европолис покрывает гражданскую ответственность перед третьими лицами. Повреждение собственного автомобиля относится к страхованию КАСКО.",
      },
    ],
  },

  carousel: {
    title: "Страхование для поездок по Европе",

    cardTitle: "Страховка для автомобиля с иностранными номерами",

    cardText:
      "Пограничное страхование гражданской ответственности для временной поездки по европейским странам, входящим в территорию действия полиса.",

    cta: "Подробнее",
  },

  finalCta: {
    eyebrow: "Оформление онлайн",

    title: "Оформить Европолис на автомобиль",

    text:
      "Загрузите регистрационный документ автомобиля, укажите страну регистрации, маршрут, дату начала и необходимый срок страхования. Мы проверим возможность оформления, рассчитаем стоимость и сообщим условия оплаты.",

    button: "Оформить Европолис",
  },
};

const en: UaeOcDictionary = {
  seo: {
    title: "Buy Europolis Online — Car Insurance for Europe",
    description:
      "Europolis for foreign-registered vehicles: buy frontier insurance online for travel across Europe. We check your documents, route, and coverage territory, calculate the premium, and send your policy as a PDF.",
  },

  breadcrumbTitle: "Europolis for Travel to Europe",

  hero: {
    eyebrow: "Foreign-Registered Vehicle → Europe",

    title: "Car Insurance for Travel to Europe — Apply Online",

    lead:
      "Europolis is the name used on this page for frontier motor third-party liability insurance (OC graniczne) for vehicles with foreign registration plates. This policy may be required for temporary use of a vehicle in European countries if the vehicle does not have other valid insurance recognised in the relevant territory.",

    noticeLabel: "Before applying:",

    notice:
      "We will check the vehicle's country of registration, planned route, and insurance coverage territory. A single policy should not automatically be assumed to provide coverage in every transit country.",

    primaryCta: "Buy Europolis Insurance",

    secondaryCta: "Check Required Documents",

    cardLabel: "Key Policy Details",

    facts: [
      {
        label: "Vehicle registration country:",
        value: "Belarus, Ukraine, Moldova, Russia, Georgia, Armenia, Kazakhstan, Uzbekistan, Tajikistan, Turkmenistan, China, Mongolia, UAE, Qatar, Iraq, Algeria, USA, Canada, Mexico, Brazil, Saudi Arabia",
      },
      {
        label: "Coverage territory",
        value: "EU countries, Switzerland, Norway, and Iceland",
      },
      {
        label: "Insurance type",
        value: "Frontier Insurance (Border Insurance)",
      },
      {
        label: "Policy delivery",
        value: "Electronic insurance policy in PDF format",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Eligible for Insurance",
      title: "Vehicles Registered Outside the Multilateral Agreement Area",
      text:
        "Europolis insurance may be issued for a foreign-registered vehicle if its country of registration and vehicle details meet the insurer's requirements. Before issuing the policy, we check the vehicle registration document and confirm eligibility.",
    },
    {
      tone: "warning",
      label: "Verification Required",
      title: "Vehicle Registration Country and Travel Route",
      text:
        "Eligibility depends on the vehicle's country of registration. In addition, insurance valid in EU countries, Switzerland, Norway, and Iceland does not necessarily cover every country along your transit route.",
    },
    {
      tone: "no",
      label: "Not Covered",
      title: "Damage to Your Own Vehicle",
      text:
        "Europolis provides third-party liability insurance. It is not comprehensive motor insurance (CASCO) and does not cover damage, breakdown, theft, or vandalism affecting the insured vehicle itself.",
    },
  ],

  suitability: {
    eyebrow: "Eligibility",

    title: "When Can You Buy Europolis Insurance?",

    text:
      "Europolis is intended to provide temporary motor third-party liability insurance for foreign-registered vehicles travelling within EU countries, Switzerland, Norway, and Iceland.",

    yesTitle: "Europolis May Be Suitable If",

    noTitle: "Europolis Is Not Suitable If",

    yesItems: [
      "the vehicle is registered in a country whose national motor insurance bureau does not participate in the Multilateral Agreement;",
      "your travel route includes countries covered by the offered policy;",
      "the vehicle does not have other valid insurance providing sufficient coverage for the planned route;",
      "you have a legible vehicle registration document;",
      "the vehicle details can be verified using supporting documents;",
      "the policy is arranged before the required insurance coverage period begins;",
    ],

    noItems: [
      "the vehicle is registered in an EEA country, Andorra, Bosnia and Herzegovina, Montenegro, Serbia, Switzerland, or the United Kingdom;",
      "you need insurance covering damage to your own vehicle;",
      "you only need insurance for a country outside the coverage territory of the offered policy;",
      "you need insurance issued retroactively;",
      "the vehicle registration details cannot be verified using documents;",
      "the vehicle does not meet the insurer's requirements for issuing a policy;",
    ],
  },

  routeWarning: {
    eyebrow: "Travel Route",

    title: "Check Insurance Coverage for Every Country on Your Route",

    text:
      "When travelling to Europe, your vehicle may cross several countries. Europolis coverage is determined by the issued insurance document. Therefore, you should verify coverage not only for your destination country but also for every transit country.",

    cta: "Check Your Route",
  },

  coverage: {
    eyebrow: "Coverage Territory",

    title: "Where Is Our Europolis Insurance Valid?",

    text:
      "The insurance coverage territory is specified directly in the issued policy. The insurance document is the definitive confirmation of the countries in which coverage applies.",

    listLabel: "Countries Covered by the Offered Policy",

    countries: [
      "Austria",
      "Belgium",
      "Bulgaria",
      "Hungary",
      "Germany",
      "Greece",
      "Denmark",
      "Ireland",
      "Iceland",
      "Spain",
      "Italy",
      "Cyprus",
      "Latvia",
      "Lithuania",
      "Norway",
      "Poland",
      "Romania",
      "Slovakia",
      "Slovenia",
      "Finland",
      "France",
      "Croatia",
      "Czech Republic",
      "Switzerland",
      "Sweden",
      "Estonia",
    ],

    warningTitle: "Transit Through Other Countries Requires Separate Insurance.",

    warningText:
      "If Turkey, Serbia, North Macedonia, Montenegro, Bosnia and Herzegovina, Albania, Kosovo, or another country on your route is not listed in the insurance document, you must not assume that Europolis provides coverage in that country.",

    warningNote:
      "For that part of your journey, you will need separate local frontier insurance, a Green Card, or another insurance document recognised by the relevant country.",
  },

  documents: {
    eyebrow: "Required Documents",

    title: "Documents Required to Buy Europolis Insurance",

    text:
      "Vehicle details are verified against the registration document. The registration number, VIN or chassis number, make, model, and owner details must allow the vehicle to be clearly identified.",

    vehicleTitle: "Vehicle Details",

    policyholderTitle: "Policyholder Details",

    vehicleItems: [
      "vehicle registration document;",
      "vehicle registration number;",
      "VIN or chassis number;",
      "vehicle make and model;",
      "vehicle type;",
      "year of manufacture;",
      "country of registration;",
    ],

    policyholderItems: [
      "passport or another required identity document;",
      "first and last name in Latin characters;",
      "email address for receiving the policy;",
      "telephone number or messaging app contact;",
      "insurance start date;",
      "required insurance period;",
      "planned travel route;",
    ],
  },

  price: {
    eyebrow: "Insurance Cost",

    title: "How Much Does Europolis Insurance Cost?",

    text:
      "The price depends on the vehicle category, required insurance period, and the insurer's current rates. We confirm final eligibility and the insurance premium after verifying the vehicle details.",

    factors: [
      "vehicle category;",
      "insurance period;",
      "policy start date;",
      "vehicle registration country;",
      "compliance with the insurer's eligibility requirements;",
    ],
  },

  timing: {
    eyebrow: "Processing Time",

    title: "When Should You Apply for Europolis Insurance?",

    text:
      "We recommend submitting your application in advance, before your trip or before the date on which insurance coverage is required. Time is needed to verify documents, calculate the premium, and issue the insurance policy. Some vehicle makes or models are not listed in the insurer's database and therefore require additional approval. Approvals are available Monday to Friday from 8:00 AM to 8:00 PM Warsaw time, and on Saturdays from 8:00 AM to 4:00 PM Warsaw time.",

    notice:
      "Europolis insurance cannot be issued retroactively. Your insurance policy must already be in force before you use the vehicle in the relevant territory.",
  },

  steps: {
    eyebrow: "Online Application",

    title: "How to Buy Europolis Insurance Online",

    items: [
      {
        title: "Select the Country of Registration",
        text:
          "Tell us which country your vehicle is registered in.",
      },
      {
        title: "Provide Your Route and Travel Dates",
        text:
          "Specify the countries you plan to visit, the insurance start date, and the required coverage period.",
      },
      {
        title: "Upload Your Documents",
        text:
          "Attach the vehicle registration document and provide the required policyholder details.",
      },
      {
        title: "Receive Confirmation",
        text:
          "We will check your vehicle, documents, travel route, and eligibility for Europolis insurance.",
      },
      {
        title: "Pay and Receive Your Policy",
        text:
          "Once the price has been confirmed and payment completed, the issued insurance policy will be sent to your email address in PDF format.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "After Purchasing",

    title: "What to Check on Your Europolis Policy Before Travelling",

    text:
      "After receiving your policy, compare the information shown on it with your vehicle registration document. If you find an error, it must be corrected before you use the policy.",

    items: [
      "vehicle registration number;",
      "VIN or chassis number;",
      "country of registration;",
      "vehicle make and model;",
      "vehicle category;",
      "insurance start date;",
      "insurance expiry date;",
      "coverage territory;",
      "policyholder details;",
    ],
  },

  faq: {
    eyebrow: "FAQ",

    title: "Frequently Asked Questions About Europolis Insurance",

    items: [
      {
        q: "What Is Europolis Insurance?",
        a:
          "On this page, Europolis refers to frontier motor third-party liability insurance (OC graniczne) for vehicles with foreign registration plates. It covers liability to third parties and is not comprehensive motor insurance (CASCO).",
      },
      {
        q: "Can I Buy Europolis Insurance Online?",
        a:
          "Yes. You can submit your documents remotely. After verification, confirmation of eligibility, and payment, the issued insurance policy will be sent to your email address in PDF format.",
      },
      {
        q: "Are Europolis and the Green Card the Same Thing?",
        a:
          "No. A Green Card is an international motor insurance certificate issued under the Green Card System. Europolis refers to frontier insurance (OC graniczne). The document required for your vehicle depends on its country of registration and your travel route.",
      },
      {
        q: "Which Countries' Vehicles Are Eligible for Europolis Insurance?",
        a:
          "Eligibility depends on the vehicle's country of registration and the insurer's requirements. Europolis insurance may be available for vehicles registered in countries such as Belarus, Ukraine, Moldova, Russia, Georgia, Armenia, Kazakhstan, Uzbekistan, Tajikistan, Turkmenistan, China, Mongolia, the UAE, Qatar, Iraq, Algeria, the USA, Canada, Mexico, Brazil, and Saudi Arabia. Send us your vehicle registration document, and we will check eligibility before payment.",
      },
      {
        q: "Can I Buy Europolis Insurance for a Russian-Registered Vehicle?",
        a:
          "Eligibility must be confirmed under the insurer's current requirements. Send us your vehicle registration document and planned route, and we will check whether a policy can be issued.",
      },
      {
        q: "Can I Buy Europolis Insurance for a Belarusian-Registered Vehicle?",
        a:
          "Eligibility is checked based on the vehicle registration document, vehicle category, and planned travel route. After verification, we will confirm whether the policy can be issued and provide the price.",
      },
      {
        q: "In Which Countries Is Europolis Insurance Valid?",
        a:
          "Europolis insurance is valid only in EU countries, Switzerland, Norway, and Iceland.",
      },
      {
        q: "Do I Need Separate Insurance for Turkey?",
        a:
          "Yes. Turkey is not included in the coverage territory of the issued policy. To drive there, you will need a separate insurance document recognised in Turkey.",
      },
      {
        q: "What Documents Are Required for Europolis Insurance?",
        a:
          "Usually, a vehicle registration document and policyholder details are required. We also verify the registration number, VIN or chassis number, vehicle make, model, category, insurance start date, and planned travel route.",
      },
      {
        q: "Can I Receive Europolis Insurance Electronically?",
        a:
          "Yes. After verification, payment, and issuance, the insurance document will be sent to your email address in PDF format.",
      },
      {
        q: "Does Europolis Cover Repairs to My Own Vehicle?",
        a:
          "No. Europolis covers third-party liability. Damage to your own vehicle falls under comprehensive motor insurance (CASCO).",
      },
    ],
  },

  carousel: {
    title: "Insurance for Travel Across Europe",

    cardTitle: "Insurance for Foreign-Registered Vehicles",

    cardText:
      "Frontier motor third-party liability insurance for temporary travel through European countries included in the policy's coverage territory.",

    cta: "Learn More",
  },

  finalCta: {
    eyebrow: "Apply Online",

    title: "Buy Europolis Insurance for Your Vehicle",

    text:
      "Upload your vehicle registration document and specify the country of registration, travel route, insurance start date, and required coverage period. We will check eligibility, calculate the premium, and provide payment instructions.",

    button: "Buy Europolis Insurance",
  },
};

const ka: UaeOcDictionary = {
  seo: {
    title: "ევროპოლისის ონლაინ შეძენა — ავტომობილის დაზღვევა ევროპაში მგზავრობისთვის",
    description:
      "ევროპოლისი უცხოური სანომრე ნიშნების მქონე ავტომობილებისთვის: სასაზღვრო დაზღვევის ონლაინ გაფორმება ევროპაში მოგზაურობისთვის. შევამოწმებთ დოკუმენტებს, მარშრუტსა და დაზღვევის მოქმედების ტერიტორიას, გამოვთვლით ღირებულებას და პოლისს PDF ფორმატში გამოგიგზავნით.",
  },

  breadcrumbTitle: "ევროპოლისი ევროპაში მგზავრობისთვის",

  hero: {
    eyebrow: "უცხოური სანომრე ნიშნების მქონე ავტომობილი → ევროპა",

    title: "ავტომობილის დაზღვევა ევროპაში მგზავრობისთვის — ონლაინ გაფორმება",

    lead:
      "ევროპოლისი არის ამ გვერდზე გამოყენებული სახელწოდება სასაზღვრო ავტოსამოქალაქო პასუხისმგებლობის დაზღვევისთვის (OC graniczne), რომელიც განკუთვნილია უცხოური სარეგისტრაციო ნომრების მქონე ავტომობილებისთვის. ასეთი პოლისი შესაძლოა აუცილებელი იყოს ევროპის ქვეყნებში ავტომობილის დროებითი გამოყენებისთვის, თუ მას არ აქვს სხვა მოქმედი დაზღვევა, რომელიც შესაბამის ტერიტორიაზე აღიარებულია.",

    noticeLabel: "გაფორმებამდე:",

    notice:
      "ჩვენ შევამოწმებთ ავტომობილის რეგისტრაციის ქვეყანას, დაგეგმილ მარშრუტსა და დაზღვევის მოქმედების ტერიტორიას. არ უნდა ივარაუდოთ, რომ ერთი პოლისი ავტომატურად მოქმედებს ყველა სატრანზიტო ქვეყანაში.",

    primaryCta: "ევროპოლისის გაფორმება",

    secondaryCta: "დოკუმენტების შემოწმება",

    cardLabel: "ძირითადი პირობები",

    facts: [
      {
        label: "ავტომობილის რეგისტრაციის ქვეყანა:",
        value: "ბელარუსი, უკრაინა, მოლდოვა, რუსეთი, საქართველო, სომხეთი, ყაზახეთი, უზბეკეთი, ტაჯიკეთი, თურქმენეთი, ჩინეთი, მონღოლეთი, არაბთა გაერთიანებული საამიროები, კატარი, ერაყი, ალჟირი, აშშ, კანადა, მექსიკა, ბრაზილია, საუდის არაბეთი",
      },
      {
        label: "დაზღვევის მოქმედების ტერიტორია",
        value: "ევროკავშირის ქვეყნები, შვეიცარია, ნორვეგია და ისლანდია",
      },
      {
        label: "დაზღვევის ტიპი",
        value: "სასაზღვრო დაზღვევა (Frontier Insurance)",
      },
      {
        label: "პოლისის მიღება",
        value: "ელექტრონული პოლისი PDF ფორმატში",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "გაფორმება შესაძლებელია",
      title: "მრავალმხრივი შეთანხმების მონაწილე ქვეყნების ფარგლებს გარეთ რეგისტრირებული ავტომობილებისთვის",
      text:
        "ევროპოლისის გაფორმება შესაძლებელია უცხოური სანომრე ნიშნების მქონე ავტომობილისთვის, თუ მისი რეგისტრაციის ქვეყანა და ავტომობილის მონაცემები შეესაბამება მზღვეველის პირობებს. პოლისის გაცემამდე ვამოწმებთ სარეგისტრაციო დოკუმენტსა და დაზღვევის გაფორმების შესაძლებლობას.",
    },
    {
      tone: "warning",
      label: "საჭიროა შემოწმება",
      title: "რეგისტრაციის ქვეყანა და მგზავრობის მარშრუტი",
      text:
        "დაზღვევის გაფორმების შესაძლებლობა დამოკიდებულია ავტომობილის რეგისტრაციის ქვეყანაზე. გარდა ამისა, ევროკავშირის ქვეყნებში, შვეიცარიაში, ნორვეგიასა და ისლანდიაში მოქმედი დაზღვევა შესაძლოა არ ვრცელდებოდეს ყველა სატრანზიტო ქვეყანაზე.",
    },
    {
      tone: "no",
      label: "არ ფარავს",
      title: "საკუთარი ავტომობილის დაზიანებას",
      text:
        "ევროპოლისი წარმოადგენს მესამე პირების წინაშე სამოქალაქო პასუხისმგებლობის დაზღვევას. ის არ არის კასკოს დაზღვევა და არ ფარავს დაზღვეული ავტომობილის დაზიანებას, მწყობრიდან გამოსვლას, ქურდობას ან ვანდალიზმის შედეგად მიყენებულ ზიანს.",
    },
  ],

  suitability: {
    eyebrow: "ვისთვის არის განკუთვნილი",

    title: "როდის არის შესაძლებელი ევროპოლისის გაფორმება",

    text:
      "ევროპოლისი განკუთვნილია უცხოეთში რეგისტრირებული ავტომობილის სამოქალაქო პასუხისმგებლობის დროებითი დაზღვევისთვის ევროკავშირის ქვეყნებში, შვეიცარიაში, ნორვეგიასა და ისლანდიაში მგზავრობისას.",

    yesTitle: "ევროპოლისი შეიძლება გამოგადგეთ, თუ",

    noTitle: "ევროპოლისი არ გამოგადგებათ, თუ",

    yesItems: [
      "ავტომობილი რეგისტრირებულია ქვეყანაში, რომლის ეროვნული სადაზღვევო ბიურო არ მონაწილეობს მრავალმხრივ შეთანხმებაში;",
      "თქვენი მარშრუტი მოიცავს ქვეყნებს, რომლებიც მითითებულია შემოთავაზებული პოლისის მოქმედების ტერიტორიაში;",
      "ავტომობილს არ აქვს სხვა მოქმედი დაზღვევა, რომელიც საკმარისია დაგეგმილი მარშრუტისთვის;",
      "გაქვთ ავტომობილის მკაფიოდ წაკითხვადი სარეგისტრაციო დოკუმენტი;",
      "ავტომობილის მონაცემების დადასტურება შესაძლებელია დოკუმენტებით;",
      "პოლისი ფორმდება დაზღვევის საჭირო პერიოდის დაწყებამდე;",
    ],

    noItems: [
      "ავტომობილი რეგისტრირებულია ევროპის ეკონომიკური სივრცის რომელიმე ქვეყანაში, ანდორაში, ბოსნია და ჰერცეგოვინაში, მონტენეგროში, სერბეთში, შვეიცარიაში ან გაერთიანებულ სამეფოში;",
      "გსურთ საკუთარი ავტომობილის დაზიანების დაზღვევა;",
      "დაზღვევა გჭირდებათ მხოლოდ იმ ქვეყნისთვის, რომელიც არ შედის შემოთავაზებული პოლისის მოქმედების ტერიტორიაში;",
      "გსურთ დაზღვევის წარსული თარიღით გაფორმება;",
      "ავტომობილის სარეგისტრაციო მონაცემების დადასტურება დოკუმენტებით შეუძლებელია;",
      "ავტომობილის მონაცემები არ შეესაბამება პოლისის გასაცემად მზღვეველის მიერ დადგენილ მოთხოვნებს;",
    ],
  },

  routeWarning: {
    eyebrow: "მგზავრობის მარშრუტი",

    title: "შეამოწმეთ დაზღვევა მარშრუტის თითოეული ქვეყნისთვის",

    text:
      "ევროპაში მგზავრობისას ავტომობილმა შესაძლოა რამდენიმე ქვეყანა გადაკვეთოს. ევროპოლისის მოქმედების ტერიტორია განისაზღვრება გაცემული სადაზღვევო დოკუმენტით. ამიტომ დაზღვევის მოქმედება უნდა გადაამოწმოთ არა მხოლოდ დანიშნულების ქვეყანაში, არამედ ყველა სატრანზიტო ქვეყანაშიც.",

    cta: "მარშრუტის შემოწმება",
  },

  coverage: {
    eyebrow: "დაზღვევის მოქმედების ტერიტორია",

    title: "სად მოქმედებს ჩვენი ევროპოლისი",

    text:
      "დაზღვევის მოქმედების ტერიტორია მითითებულია უშუალოდ გაცემულ პოლისში. სწორედ სადაზღვევო დოკუმენტი წარმოადგენს საბოლოო დადასტურებას, თუ რომელ ქვეყნებში მოქმედებს დაზღვევა.",

    listLabel: "ქვეყნები, რომლებსაც ფარავს შემოთავაზებული პოლისი",

    countries: [
      "ავსტრია",
      "ბელგია",
      "ბულგარეთი",
      "უნგრეთი",
      "გერმანია",
      "საბერძნეთი",
      "დანია",
      "ირლანდია",
      "ისლანდია",
      "ესპანეთი",
      "იტალია",
      "კვიპროსი",
      "ლატვია",
      "ლიეტუვა",
      "ნორვეგია",
      "პოლონეთი",
      "რუმინეთი",
      "სლოვაკეთი",
      "სლოვენია",
      "ფინეთი",
      "საფრანგეთი",
      "ხორვატია",
      "ჩეხეთი",
      "შვეიცარია",
      "შვედეთი",
      "ესტონეთი",
    ],

    warningTitle: "სხვა ქვეყნების გავლით ტრანზიტისთვის საჭიროა ცალკე დაზღვევა.",

    warningText:
      "თუ თურქეთი, სერბეთი, ჩრდილოეთი მაკედონია, მონტენეგრო, ბოსნია და ჰერცეგოვინა, ალბანეთი, კოსოვო ან თქვენი მარშრუტის სხვა ქვეყანა არ არის მითითებული სადაზღვევო დოკუმენტში, არ უნდა ივარაუდოთ, რომ ევროპოლისი ამ ქვეყნის ტერიტორიაზეც მოქმედებს.",

    warningNote:
      "მარშრუტის ასეთი მონაკვეთისთვის დაგჭირდებათ ცალკე ადგილობრივი სასაზღვრო დაზღვევა, მწვანე ბარათი ან სხვა სადაზღვევო დოკუმენტი, რომელსაც შესაბამისი სახელმწიფო აღიარებს.",
  },

  documents: {
    eyebrow: "დოკუმენტები",

    title: "რა არის საჭირო ევროპოლისის გასაფორმებლად",

    text:
      "ავტომობილის მონაცემები მოწმდება სარეგისტრაციო დოკუმენტის საფუძველზე. სარეგისტრაციო ნომერი, VIN ან ძარის ნომერი, მარკა, მოდელი და მესაკუთრის მონაცემები უნდა იძლეოდეს ავტომობილის ერთმნიშვნელოვნად იდენტიფიცირების შესაძლებლობას.",

    vehicleTitle: "ავტომობილის მონაცემები",

    policyholderTitle: "დამზღვევის მონაცემები",

    vehicleItems: [
      "ავტომობილის სარეგისტრაციო დოკუმენტი;",
      "სარეგისტრაციო ნომერი;",
      "VIN ან ძარის ნომერი;",
      "მარკა და მოდელი;",
      "სატრანსპორტო საშუალების ტიპი;",
      "გამოშვების წელი;",
      "რეგისტრაციის ქვეყანა;",
    ],

    policyholderItems: [
      "პასპორტი ან პირადობის დამადასტურებელი სხვა აუცილებელი დოკუმენტი;",
      "სახელი და გვარი ლათინური ასოებით;",
      "ელექტრონული ფოსტის მისამართი პოლისის მისაღებად;",
      "ტელეფონის ნომერი ან საკონტაქტო მონაცემები მესენჯერში;",
      "დაზღვევის დაწყების თარიღი;",
      "დაზღვევის საჭირო ვადა;",
      "დაგეგმილი მარშრუტი;",
    ],
  },

  price: {
    eyebrow: "ღირებულება",

    title: "რა ღირს ევროპოლისი",

    text:
      "ღირებულება დამოკიდებულია სატრანსპორტო საშუალების კატეგორიაზე, დაზღვევის საჭირო ვადასა და მზღვეველის მოქმედ ტარიფზე. გაფორმების საბოლოო შესაძლებლობასა და ღირებულებას ვადასტურებთ ავტომობილის მონაცემების შემოწმების შემდეგ.",

    factors: [
      "სატრანსპორტო საშუალების კატეგორია;",
      "დაზღვევის ვადა;",
      "პოლისის მოქმედების დაწყების თარიღი;",
      "ავტომობილის რეგისტრაციის ქვეყანა;",
      "ავტომობილის შესაბამისობა მზღვეველის მოთხოვნებთან;",
    ],
  },

  timing: {
    eyebrow: "გაფორმების ვადა",

    title: "როდის უნდა შეუკვეთოთ ევროპოლისი",

    text:
      "რეკომენდებულია განაცხადის წინასწარ გაგზავნა, მგზავრობის დაწყებამდე ან იმ თარიღამდე, საიდანაც სადაზღვევო დაფარვა გჭირდებათ. დრო საჭიროა დოკუმენტების შესამოწმებლად, ღირებულების გამოსათვლელად და სადაზღვევო პოლისის გასაცემად. ავტომობილების ზოგიერთი მარკა ან მოდელი არ არის შეტანილი სადაზღვევო კომპანიის მონაცემთა ბაზაში, ამიტომ საჭიროა მათი დამატებითი შეთანხმება. შეთანხმება შესაძლებელია ორშაბათიდან პარასკევის ჩათვლით, ვარშავის დროით 08:00-დან 20:00 საათამდე, ხოლო შაბათს — ვარშავის დროით 08:00-დან 16:00 საათამდე.",

    notice:
      "ევროპოლისის გაფორმება წარსული თარიღით შეუძლებელია. შესაბამის ტერიტორიაზე ავტომობილის გამოყენების დაწყებამდე სადაზღვევო პოლისი უკვე ძალაში უნდა იყოს შესული.",
  },

  steps: {
    eyebrow: "ონლაინ გაფორმება",

    title: "როგორ შევიძინოთ ევროპოლისი ონლაინ",

    items: [
      {
        title: "მიუთითეთ რეგისტრაციის ქვეყანა",
        text:
          "გვაცნობეთ, რომელ ქვეყანაშია რეგისტრირებული ავტომობილი.",
      },
      {
        title: "მიუთითეთ მარშრუტი და თარიღები",
        text:
          "მიუთითეთ ქვეყნები, რომლებშიც აპირებთ მგზავრობას, დაზღვევის დაწყების თარიღი და საჭირო ვადა.",
      },
      {
        title: "ატვირთეთ დოკუმენტები",
        text:
          "დაურთეთ ავტომობილის სარეგისტრაციო დოკუმენტი და დამზღვევის აუცილებელი მონაცემები.",
      },
      {
        title: "მიიღეთ დადასტურება",
        text:
          "ჩვენ შევამოწმებთ ავტომობილს, დოკუმენტებს, მარშრუტსა და ევროპოლისის გაფორმების შესაძლებლობას.",
      },
      {
        title: "გადაიხადეთ და მიიღეთ პოლისი",
        text:
          "ღირებულების დადასტურებისა და გადახდის შემდეგ მზა სადაზღვევო დოკუმენტი PDF ფორმატში გამოგეგზავნებათ ელექტრონულ ფოსტაზე.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "გაფორმების შემდეგ",

    title: "რა უნდა შეამოწმოთ ევროპოლისში მგზავრობის წინ",

    text:
      "პოლისის მიღების შემდეგ შეადარეთ მასში მითითებული მონაცემები ავტომობილის სარეგისტრაციო დოკუმენტს. შეცდომის აღმოჩენის შემთხვევაში ის უნდა გასწორდეს პოლისის გამოყენებამდე.",

    items: [
      "ავტომობილის სარეგისტრაციო ნომერი;",
      "VIN ან ძარის ნომერი;",
      "რეგისტრაციის ქვეყანა;",
      "მარკა და მოდელი;",
      "სატრანსპორტო საშუალების კატეგორია;",
      "მოქმედების დაწყების თარიღი;",
      "მოქმედების დასრულების თარიღი;",
      "დაზღვევის მოქმედების ტერიტორია;",
      "დამზღვევის მონაცემები;",
    ],
  },

  faq: {
    eyebrow: "ხშირად დასმული კითხვები",

    title: "კითხვები ევროპოლისის შესახებ",

    items: [
      {
        q: "რა არის ევროპოლისი?",
        a:
          "ამ გვერდზე ევროპოლისი ნიშნავს სასაზღვრო ავტოსამოქალაქო პასუხისმგებლობის დაზღვევას (OC graniczne) უცხოური სარეგისტრაციო ნომრების მქონე ავტომობილებისთვის. ეს არის მესამე პირების წინაშე პასუხისმგებლობის დაზღვევა და არა კასკოს დაზღვევა.",
      },
      {
        q: "შესაძლებელია ევროპოლისის ონლაინ შეძენა?",
        a:
          "დიახ. დოკუმენტების გაგზავნა შესაძლებელია დისტანციურად. მონაცემების შემოწმების, გაფორმების შესაძლებლობის დადასტურებისა და გადახდის შემდეგ მზა სადაზღვევო დოკუმენტი PDF ფორმატში გამოგეგზავნებათ ელექტრონულ ფოსტაზე.",
      },
      {
        q: "ევროპოლისი და მწვანე ბარათი ერთი და იგივეა?",
        a:
          "არა. მწვანე ბარათი არის Green Card-ის სისტემის საერთაშორისო სადაზღვევო სერტიფიკატი. ევროპოლისი კი წარმოადგენს სასაზღვრო დაზღვევას (OC graniczne). კონკრეტულად რომელი დოკუმენტია საჭირო თქვენი ავტომობილისთვის, დამოკიდებულია რეგისტრაციის ქვეყანასა და მგზავრობის მარშრუტზე.",
      },
      {
        q: "რომელ ქვეყნებში რეგისტრირებული ავტომობილებისთვის შეიძლება ევროპოლისის გაფორმება?",
        a:
          "გაფორმების შესაძლებლობა განისაზღვრება ავტომობილის რეგისტრაციის ქვეყნისა და მზღვეველის პირობების მიხედვით. ევროპოლისის გაფორმება შესაძლებელია, მაგალითად, შემდეგ ქვეყნებში რეგისტრირებული ავტომობილებისთვის: ბელარუსი, უკრაინა, მოლდოვა, რუსეთი, საქართველო, სომხეთი, ყაზახეთი, უზბეკეთი, ტაჯიკეთი, თურქმენეთი, ჩინეთი, მონღოლეთი, არაბთა გაერთიანებული საამიროები, კატარი, ერაყი, ალჟირი, აშშ, კანადა, მექსიკა, ბრაზილია და საუდის არაბეთი. გამოგვიგზავნეთ ავტომობილის სარეგისტრაციო დოკუმენტი — გადახდამდე შევამოწმებთ პოლისის გაცემის შესაძლებლობას.",
      },
      {
        q: "შესაძლებელია ევროპოლისის გაფორმება რუსული სანომრე ნიშნების მქონე ავტომობილზე?",
        a:
          "გაფორმების შესაძლებლობა უნდა დადასტურდეს მზღვეველის მოქმედი პირობების შესაბამისად. გამოგვიგზავნეთ ავტომობილის სარეგისტრაციო დოკუმენტი და მგზავრობის მარშრუტი — შევამოწმებთ პოლისის გაცემის შესაძლებლობას.",
      },
      {
        q: "შესაძლებელია ევროპოლისის გაფორმება ბელარუსული სანომრე ნიშნების მქონე ავტომობილზე?",
        a:
          "გაფორმების შესაძლებლობა მოწმდება ავტომობილის სარეგისტრაციო დოკუმენტის, მისი კატეგორიისა და დაგეგმილი მარშრუტის საფუძველზე. შემოწმების შემდეგ დაგიდასტურებთ პოლისის გაცემის შესაძლებლობასა და ღირებულებას.",
      },
      {
        q: "რომელ ქვეყნებში მოქმედებს ევროპოლისი?",
        a:
          "ევროპოლისი მოქმედებს მხოლოდ ევროკავშირის ქვეყნების, შვეიცარიის, ნორვეგიისა და ისლანდიის ტერიტორიაზე.",
      },
      {
        q: "საჭიროა თუ არა ცალკე დაზღვევა თურქეთისთვის?",
        a:
          "დიახ. თურქეთი არ შედის გაცემული პოლისის მოქმედების ტერიტორიაში. მის ტერიტორიაზე გადაადგილებისთვის დაგჭირდებათ ცალკე სადაზღვევო დოკუმენტი, რომელიც თურქეთში აღიარებულია.",
      },
      {
        q: "რა დოკუმენტებია საჭირო ევროპოლისის გასაფორმებლად?",
        a:
          "ჩვეულებრივ საჭიროა ავტომობილის სარეგისტრაციო დოკუმენტი და დამზღვევის მონაცემები. დამატებით მოწმდება სარეგისტრაციო ნომერი, VIN ან ძარის ნომერი, მარკა, მოდელი, ავტომობილის კატეგორია, დაზღვევის დაწყების თარიღი და მარშრუტი.",
      },
      {
        q: "შესაძლებელია ევროპოლისის ელექტრონულად მიღება?",
        a:
          "დიახ. შემოწმების, გადახდისა და პოლისის გაცემის შემდეგ სადაზღვევო დოკუმენტი PDF ფორმატში იგზავნება მითითებულ ელექტრონულ ფოსტაზე.",
      },
      {
        q: "ფარავს თუ არა ევროპოლისი ჩემი ავტომობილის შეკეთებას?",
        a:
          "არა. ევროპოლისი ფარავს მესამე პირების წინაშე სამოქალაქო პასუხისმგებლობას. საკუთარი ავტომობილის დაზიანების დაზღვევა კასკოს დაზღვევას განეკუთვნება.",
      },
    ],
  },

  carousel: {
    title: "დაზღვევა ევროპაში მოგზაურობისთვის",

    cardTitle: "დაზღვევა უცხოური სანომრე ნიშნების მქონე ავტომობილებისთვის",

    cardText:
      "სასაზღვრო ავტოსამოქალაქო პასუხისმგებლობის დაზღვევა ევროპის იმ ქვეყნებში დროებითი მგზავრობისთვის, რომლებიც შედის პოლისის მოქმედების ტერიტორიაში.",

    cta: "ვრცლად",
  },

  finalCta: {
    eyebrow: "ონლაინ გაფორმება",

    title: "გააფორმეთ ევროპოლისი თქვენი ავტომობილისთვის",

    text:
      "ატვირთეთ ავტომობილის სარეგისტრაციო დოკუმენტი, მიუთითეთ რეგისტრაციის ქვეყანა, მარშრუტი, დაზღვევის დაწყების თარიღი და საჭირო ვადა. ჩვენ შევამოწმებთ გაფორმების შესაძლებლობას, გამოვთვლით ღირებულებას და გაცნობებთ გადახდის პირობებს.",

    button: "ევროპოლისის გაფორმება",
  },
};

const uk: UaeOcDictionary = {
  seo: {
    title: "Купити Європоліс онлайн — страхування авто для поїздки до Європи",
    description:
      "Європоліс для автомобіля з іноземними номерами: оформлення прикордонного страхування онлайн для поїздки Європою. Перевіримо документи, маршрут і територію дії, розрахуємо вартість та надішлемо поліс у форматі PDF.",
  },

  breadcrumbTitle: "Європоліс для поїздки до Європи",

  hero: {
    eyebrow: "Автомобіль з іноземними номерами → Європа",

    title: "Страхування автомобіля для поїздки до Європи — оформлення онлайн",

    lead:
      "Європоліс — назва, яка використовується на цій сторінці для позначення прикордонного страхування цивільної відповідальності (OC graniczne) автомобіля з іноземними реєстраційними номерами. Такий поліс може знадобитися для тимчасового використання автомобіля в країнах Європи, якщо він не має іншого чинного страхування, що визнається на відповідній території.",

    noticeLabel: "Перед оформленням:",

    notice:
      "Ми перевіримо країну реєстрації автомобіля, запланований маршрут і територію дії страхування. Не слід автоматично вважати, що один поліс діє в усіх країнах транзиту.",

    primaryCta: "Оформити Європоліс",

    secondaryCta: "Перевірити документи",

    cardLabel: "Основні умови",

    facts: [
      {
        label: "Країна реєстрації автомобіля:",
        value: "Білорусь, Україна, Молдова, Росія, Грузія, Вірменія, Казахстан, Узбекистан, Таджикистан, Туркменістан, Китай, Монголія, ОАЕ, Катар, Ірак, Алжир, США, Канада, Мексика, Бразилія, Саудівська Аравія",
      },
      {
        label: "Територія страхового покриття",
        value: "Країни ЄС, Швейцарія, Норвегія, Ісландія",
      },
      {
        label: "Вид страхування",
        value: "Прикордонне страхування (Frontier Insurance)",
      },
      {
        label: "Отримання поліса",
        value: "Електронний поліс у форматі PDF",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Можна оформити",
      title: "Для автомобіля, зареєстрованого за межами країн Багатосторонньої угоди",
      text:
        "Європоліс може бути оформлений для автомобіля з іноземними номерами, якщо країна його реєстрації та характеристики автомобіля відповідають умовам страховика. Перед видачею поліса ми перевіряємо реєстраційний документ і можливість оформлення.",
    },
    {
      tone: "warning",
      label: "Потрібна перевірка",
      title: "Країна реєстрації та маршрут поїздки",
      text:
        "Можливість оформлення залежить від країни реєстрації автомобіля. Крім того, страхування, що діє в країнах ЄС, Швейцарії, Норвегії та Ісландії, не обов'язково поширюється на всі країни транзиту.",
    },
    {
      tone: "no",
      label: "Не покриває",
      title: "Пошкодження власного автомобіля",
      text:
        "Європоліс є страхуванням цивільної відповідальності перед третіми особами. Він не є страхуванням КАСКО та не покриває пошкодження, поломку, викрадення чи вандалізм щодо самого застрахованого автомобіля.",
    },
  ],

  suitability: {
    eyebrow: "Кому підходить",

    title: "Коли можна оформити Європоліс",

    text:
      "Європоліс призначений для тимчасового страхування цивільної відповідальності власника автомобіля, зареєстрованого за кордоном, під час поїздки територією країн ЄС, Швейцарії, Норвегії та Ісландії.",

    yesTitle: "Європоліс може підійти",

    noTitle: "Європоліс не підходить",

    yesItems: [
      "автомобіль зареєстрований у країні, національне страхове бюро якої не бере участі в Багатосторонній угоді;",
      "маршрут включає країни, зазначені в території дії запропонованого поліса;",
      "автомобіль не має іншого чинного страхування, достатнього для цього маршруту;",
      "є придатний для прочитання реєстраційний документ автомобіля;",
      "дані автомобіля можна підтвердити документами;",
      "поліс оформлюється до початку необхідного періоду страхування;",
    ],

    noItems: [
      "автомобіль зареєстрований у державі Європейського економічного простору, Андоррі, Боснії і Герцеговині, Чорногорії, Сербії, Швейцарії або Великій Британії;",
      "необхідно застрахувати пошкодження власного автомобіля;",
      "страхування потрібне лише для країни, яка не входить до території дії запропонованого поліса;",
      "потрібно оформити страхування заднім числом;",
      "реєстраційні дані автомобіля неможливо підтвердити документами;",
      "дані автомобіля не відповідають вимогам страховика для видачі поліса;",
    ],
  },

  routeWarning: {
    eyebrow: "Маршрут поїздки",

    title: "Перевірте страхування для кожної країни маршруту",

    text:
      "Під час поїздки до Європи автомобіль може перетинати кілька держав. Територія дії Європоліса визначається виданим страховим документом, тому наявність покриття необхідно перевірити не лише для країни призначення, а й для транзитних країн.",

    cta: "Перевірити маршрут",
  },

  coverage: {
    eyebrow: "Територія дії",

    title: "Де діє наш Європоліс",

    text:
      "Територія страхування зазначається безпосередньо у виданому полісі. Саме страховий документ є остаточним підтвердженням того, у яких країнах діє страхування.",

    listLabel: "Країни, які входять до покриття запропонованого поліса",

    countries: [
      "Австрія",
      "Бельгія",
      "Болгарія",
      "Угорщина",
      "Німеччина",
      "Греція",
      "Данія",
      "Ірландія",
      "Ісландія",
      "Іспанія",
      "Італія",
      "Кіпр",
      "Латвія",
      "Литва",
      "Норвегія",
      "Польща",
      "Румунія",
      "Словаччина",
      "Словенія",
      "Фінляндія",
      "Франція",
      "Хорватія",
      "Чехія",
      "Швейцарія",
      "Швеція",
      "Естонія",
    ],

    warningTitle: "Транзит через інші країни потребує окремого страхування.",

    warningText:
      "Якщо Туреччина, Сербія, Північна Македонія, Чорногорія, Боснія і Герцеговина, Албанія, Косово або інша країна маршруту не зазначена у страховому документі, не можна розраховувати на дію Європоліса на її території.",

    warningNote:
      "Для такої ділянки маршруту знадобиться окреме місцеве прикордонне страхування, Зелена картка або інший страховий документ, що визнається відповідною державою.",
  },

  documents: {
    eyebrow: "Документи",

    title: "Що потрібно для оформлення Європоліса",

    text:
      "Дані автомобіля перевіряються за реєстраційним документом. Реєстраційний номер, VIN або номер кузова, марка, модель і відомості про власника повинні дозволяти однозначно ідентифікувати автомобіль.",

    vehicleTitle: "Дані автомобіля",

    policyholderTitle: "Дані страхувальника",

    vehicleItems: [
      "реєстраційний документ автомобіля;",
      "реєстраційний номер;",
      "VIN або номер кузова;",
      "марка та модель;",
      "тип транспортного засобу;",
      "рік випуску;",
      "країна реєстрації;",
    ],

    policyholderItems: [
      "паспорт або інший необхідний документ, що посвідчує особу;",
      "ім'я та прізвище латиницею;",
      "адреса електронної пошти для отримання поліса;",
      "номер телефону або месенджер;",
      "дата початку страхування;",
      "необхідний строк страхування;",
      "запланований маршрут;",
    ],
  },

  price: {
    eyebrow: "Вартість",

    title: "Скільки коштує Європоліс",

    text:
      "Вартість залежить від категорії транспортного засобу, необхідного строку страхування та чинного тарифу страховика. Остаточну можливість оформлення та вартість ми підтверджуємо після перевірки даних автомобіля.",

    factors: [
      "категорія транспортного засобу;",
      "строк страхування;",
      "дата початку дії поліса;",
      "країна реєстрації автомобіля;",
      "відповідність автомобіля умовам страховика;",
    ],
  },

  timing: {
    eyebrow: "Строк оформлення",

    title: "Коли замовляти Європоліс",

    text:
      "Рекомендуємо надсилати заявку заздалегідь, до початку поїздки або до дати, з якої потрібне страхове покриття. Час необхідний для перевірки документів, розрахунку вартості та видачі страхового поліса. Деякі марки або моделі автомобілів відсутні в довіднику страхової компанії, тому потребують додаткового погодження. Погодження доступне з понеділка до п'ятниці з 08:00 до 20:00 за варшавським часом, а також у суботу з 08:00 до 16:00 за варшавським часом.",

    notice:
      "Європоліс не оформлюється заднім числом. До початку використання автомобіля на відповідній території страховий поліс уже має набрати чинності.",
  },

  steps: {
    eyebrow: "Оформлення онлайн",

    title: "Як купити Європоліс онлайн",

    items: [
      {
        title: "Вкажіть країну реєстрації",
        text:
          "Повідомте, у якій країні зареєстрований автомобіль.",
      },
      {
        title: "Вкажіть маршрут і дати",
        text:
          "Повідомте країни поїздки, дату початку та необхідний строк страхування.",
      },
      {
        title: "Завантажте документи",
        text:
          "Додайте реєстраційний документ автомобіля та необхідні дані страхувальника.",
      },
      {
        title: "Отримайте підтвердження",
        text:
          "Ми перевіримо автомобіль, документи, маршрут і можливість оформлення Європоліса.",
      },
      {
        title: "Оплатіть та отримайте поліс",
        text:
          "Після підтвердження вартості та оплати готовий страховий документ буде надіслано на електронну пошту у форматі PDF.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Після оформлення",

    title: "Що перевірити в Європолісі перед поїздкою",

    text:
      "Після отримання поліса порівняйте зазначені в ньому відомості з реєстраційним документом автомобіля. Якщо виявлено помилку, її необхідно виправити до використання поліса.",

    items: [
      "реєстраційний номер автомобіля;",
      "VIN або номер кузова;",
      "країна реєстрації;",
      "марка та модель;",
      "категорія транспортного засобу;",
      "дата початку дії;",
      "дата закінчення дії;",
      "територія страхування;",
      "дані страхувальника;",
    ],
  },

  faq: {
    eyebrow: "Поширені запитання",

    title: "Запитання про Європоліс",

    items: [
      {
        q: "Що таке Європоліс?",
        a:
          "На цій сторінці під Європолісом мається на увазі прикордонне страхування цивільної відповідальності OC graniczne для автомобіля з іноземними реєстраційними номерами. Це страхування відповідальності перед третіми особами, а не страхування КАСКО.",
      },
      {
        q: "Чи можна купити Європоліс онлайн?",
        a:
          "Так. Документи можна передати дистанційно. Після перевірки даних, підтвердження можливості оформлення та оплати готовий страховий документ надсилається на електронну пошту у форматі PDF.",
      },
      {
        q: "Європоліс і Зелена картка — це одне й те саме?",
        a:
          "Ні. Зелена картка є міжнародним страховим сертифікатом системи Green Card. Європоліс — це прикордонне страхування OC graniczne. Який саме документ потрібен вашому автомобілю, залежить від країни реєстрації та маршруту.",
      },
      {
        q: "Для автомобілів із яких країн можна оформити Європоліс?",
        a:
          "Можливість оформлення визначається країною реєстрації автомобіля та умовами страховика. Європоліс можна оформити, наприклад, для автомобілів, зареєстрованих у таких країнах: Білорусь, Україна, Молдова, Росія, Грузія, Вірменія, Казахстан, Узбекистан, Таджикистан, Туркменістан, Китай, Монголія, ОАЕ, Катар, Ірак, Алжир, США, Канада, Мексика, Бразилія, Саудівська Аравія. Надішліть реєстраційний документ автомобіля — ми перевіримо можливість видачі поліса до оплати.",
      },
      {
        q: "Чи можна оформити Європоліс на автомобіль із російськими номерами?",
        a:
          "Можливість оформлення необхідно підтвердити відповідно до чинних умов страховика. Надішліть реєстраційний документ автомобіля та маршрут поїздки — ми перевіримо можливість видачі поліса.",
      },
      {
        q: "Чи можна оформити Європоліс на автомобіль із білоруськими номерами?",
        a:
          "Можливість оформлення перевіряється за реєстраційним документом автомобіля, його категорією та запланованим маршрутом. Після перевірки ми підтвердимо можливість видачі поліса та його вартість.",
      },
      {
        q: "У яких країнах діє Європоліс?",
        a:
          "Європоліс діє лише на території країн ЄС, Швейцарії, Норвегії та Ісландії.",
      },
      {
        q: "Чи потрібне окреме страхування для Туреччини?",
        a:
          "Так. Туреччина не входить до території дії виданого поліса. Для пересування її територією знадобиться окремий страховий документ, що визнається в Туреччині.",
      },
      {
        q: "Які документи потрібні для оформлення Європоліса?",
        a:
          "Зазвичай потрібні реєстраційний документ автомобіля та дані страхувальника. Додатково перевіряються реєстраційний номер, VIN або номер кузова, марка, модель, категорія автомобіля, дата початку страхування та маршрут.",
      },
      {
        q: "Чи можна отримати Європоліс в електронному вигляді?",
        a:
          "Так. Після перевірки, оплати та видачі поліса страховий документ надсилається на вказану адресу електронної пошти у форматі PDF.",
      },
      {
        q: "Чи покриває Європоліс ремонт мого автомобіля?",
        a:
          "Ні. Європоліс покриває цивільну відповідальність перед третіми особами. Пошкодження власного автомобіля належить до страхування КАСКО.",
      },
    ],
  },

  carousel: {
    title: "Страхування для поїздок Європою",

    cardTitle: "Страхування автомобіля з іноземними номерами",

    cardText:
      "Прикордонне страхування цивільної відповідальності для тимчасових поїздок європейськими країнами, що входять до території дії поліса.",

    cta: "Дізнатися більше",
  },

  finalCta: {
    eyebrow: "Оформлення онлайн",

    title: "Оформити Європоліс на автомобіль",

    text:
      "Завантажте реєстраційний документ автомобіля, вкажіть країну реєстрації, маршрут, дату початку та необхідний строк страхування. Ми перевіримо можливість оформлення, розрахуємо вартість і повідомимо умови оплати.",

    button: "Оформити Європоліс",
  },
};

const uz: UaeOcDictionary = {
  seo: {
    title: "Europolisni onlayn xarid qilish — Yevropaga avtomobil sug‘urtasi",
    description:
      "Chet el raqamlariga ega avtomobillar uchun Europolis: Yevropa bo‘ylab sayohat qilish uchun chegara sug‘urtasini onlayn rasmiylashtirish. Hujjatlar, yo‘nalish va sug‘urta amal qiladigan hududni tekshiramiz, narxini hisoblaymiz va polisni PDF formatida yuboramiz.",
  },

  breadcrumbTitle: "Yevropaga sayohat uchun Europolis",

  hero: {
    eyebrow: "Chet el davlat raqamiga ega avtomobil → Yevropa",

    title: "Yevropaga sayohat uchun avtomobil sug‘urtasi — onlayn rasmiylashtirish",

    lead:
      "Europolis — ushbu sahifada chet elda ro‘yxatdan o‘tgan avtomobillar uchun fuqarolik javobgarligining chegara sug‘urtasini (OC graniczne) ifodalash uchun ishlatiladigan nom. Agar avtomobilda tegishli hududda tan olinadigan boshqa amaldagi sug‘urta bo‘lmasa, Yevropa mamlakatlarida undan vaqtincha foydalanish uchun bunday polis talab qilinishi mumkin.",

    noticeLabel: "Rasmiylashtirishdan oldin:",

    notice:
      "Biz avtomobil ro‘yxatdan o‘tgan mamlakatni, rejalashtirilgan yo‘nalishni va sug‘urta amal qiladigan hududni tekshiramiz. Bitta polis barcha tranzit mamlakatlarda avtomatik ravishda amal qiladi, deb hisoblamaslik kerak.",

    primaryCta: "Europolisni rasmiylashtirish",

    secondaryCta: "Hujjatlarni tekshirish",

    cardLabel: "Asosiy shartlar",

    facts: [
      {
        label: "Avtomobil ro‘yxatdan o‘tgan mamlakat:",
        value: "Belarus, Ukraina, Moldova, Rossiya, Gruziya, Armaniston, Qozog‘iston, O‘zbekiston, Tojikiston, Turkmaniston, Xitoy, Mo‘g‘uliston, BAA, Qatar, Iroq, Jazoir, AQSH, Kanada, Meksika, Braziliya, Saudiya Arabistoni",
      },
      {
        label: "Sug‘urta qamrovi hududi",
        value: "Yevropa Ittifoqi mamlakatlari, Shveytsariya, Norvegiya va Islandiya",
      },
      {
        label: "Sug‘urta turi",
        value: "Chegara sug‘urtasi (Frontier Insurance)",
      },
      {
        label: "Polisni olish",
        value: "PDF formatidagi elektron sug‘urta polisi",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Rasmiylashtirish mumkin",
      title: "Ko‘p tomonlama bitimga kiruvchi mamlakatlardan tashqarida ro‘yxatdan o‘tgan avtomobillar uchun",
      text:
        "Agar avtomobil ro‘yxatdan o‘tgan mamlakat va uning texnik ma’lumotlari sug‘urtalovchi talablariga mos kelsa, chet el davlat raqamiga ega avtomobil uchun Europolis rasmiylashtirilishi mumkin. Polis berilishidan oldin ro‘yxatdan o‘tganlik hujjatini va sug‘urtani rasmiylashtirish imkoniyatini tekshiramiz.",
    },
    {
      tone: "warning",
      label: "Tekshirish zarur",
      title: "Ro‘yxatdan o‘tgan mamlakat va safar yo‘nalishi",
      text:
        "Sug‘urtani rasmiylashtirish imkoniyati avtomobil ro‘yxatdan o‘tgan mamlakatga bog‘liq. Bundan tashqari, Yevropa Ittifoqi mamlakatlari, Shveytsariya, Norvegiya va Islandiyada amal qiladigan sug‘urta barcha tranzit davlatlarni qamrab olmasligi mumkin.",
    },
    {
      tone: "no",
      label: "Qoplamaydi",
      title: "O‘z avtomobilingizga yetkazilgan zarar",
      text:
        "Europolis uchinchi shaxslar oldidagi fuqarolik javobgarligini sug‘urtalash hisoblanadi. U KASKO sug‘urtasi emas va sug‘urtalangan avtomobilning shikastlanishi, buzilishi, o‘g‘irlanishi yoki vandalizm oqibatida yetkazilgan zararni qoplamaydi.",
    },
  ],

  suitability: {
    eyebrow: "Kimlar uchun mos",

    title: "Europolisni qachon rasmiylashtirish mumkin",

    text:
      "Europolis Yevropa Ittifoqi mamlakatlari, Shveytsariya, Norvegiya va Islandiya hududida sayohat qilish vaqtida chet elda ro‘yxatdan o‘tgan avtomobil egasining fuqarolik javobgarligini vaqtincha sug‘urtalash uchun mo‘ljallangan.",

    yesTitle: "Europolis sizga mos kelishi mumkin, agar",

    noTitle: "Europolis sizga mos kelmaydi, agar",

    yesItems: [
      "avtomobil milliy sug‘urta byurosi Ko‘p tomonlama bitimda ishtirok etmaydigan mamlakatda ro‘yxatdan o‘tgan bo‘lsa;",
      "safar yo‘nalishingiz taklif etilayotgan polisning amal qilish hududiga kiruvchi mamlakatlarni o‘z ichiga olsa;",
      "avtomobilda rejalashtirilgan yo‘nalish uchun yetarli bo‘lgan boshqa amaldagi sug‘urta bo‘lmasa;",
      "avtomobilning o‘qilishi mumkin bo‘lgan ro‘yxatdan o‘tganlik hujjati mavjud bo‘lsa;",
      "avtomobil ma’lumotlarini hujjatlar bilan tasdiqlash mumkin bo‘lsa;",
      "polis talab etilgan sug‘urta davri boshlanishidan oldin rasmiylashtirilsa;",
    ],

    noItems: [
      "avtomobil Yevropa iqtisodiy hududi mamlakatlaridan birida, Andorra, Bosniya va Gersegovina, Chernogoriya, Serbiya, Shveytsariya yoki Buyuk Britaniyada ro‘yxatdan o‘tgan bo‘lsa;",
      "o‘z avtomobilingizga yetkazilgan zararni sug‘urtalamoqchi bo‘lsangiz;",
      "sug‘urta faqat taklif etilayotgan polisning amal qilish hududiga kirmaydigan mamlakat uchun kerak bo‘lsa;",
      "sug‘urtani o‘tgan sana bilan rasmiylashtirish talab qilinsa;",
      "avtomobilning ro‘yxatdan o‘tganlik ma’lumotlarini hujjatlar bilan tasdiqlash imkoni bo‘lmasa;",
      "avtomobil ma’lumotlari polis berish uchun sug‘urtalovchi talablariga mos kelmasa;",
    ],
  },

  routeWarning: {
    eyebrow: "Safar yo‘nalishi",

    title: "Yo‘nalishdagi har bir mamlakat uchun sug‘urtani tekshiring",

    text:
      "Yevropaga sayohat vaqtida avtomobil bir nechta davlat hududidan o‘tishi mumkin. Europolisning amal qilish hududi berilgan sug‘urta hujjati bilan belgilanadi. Shuning uchun sug‘urta qamrovini nafaqat boradigan mamlakatingiz, balki barcha tranzit mamlakatlar uchun ham tekshirish zarur.",

    cta: "Yo‘nalishni tekshirish",
  },

  coverage: {
    eyebrow: "Amal qilish hududi",

    title: "Bizning Europolis qayerlarda amal qiladi",

    text:
      "Sug‘urta amal qiladigan hudud bevosita berilgan polisda ko‘rsatiladi. Aynan sug‘urta hujjati qaysi mamlakatlarda sug‘urta amal qilishining yakuniy tasdig‘i hisoblanadi.",

    listLabel: "Taklif etilayotgan polis qamroviga kiruvchi mamlakatlar",

    countries: [
      "Avstriya",
      "Belgiya",
      "Bolgariya",
      "Vengriya",
      "Germaniya",
      "Gretsiya",
      "Daniya",
      "Irlandiya",
      "Islandiya",
      "Ispaniya",
      "Italiya",
      "Kipr",
      "Latviya",
      "Litva",
      "Norvegiya",
      "Polsha",
      "Ruminiya",
      "Slovakiya",
      "Sloveniya",
      "Finlyandiya",
      "Fransiya",
      "Xorvatiya",
      "Chexiya",
      "Shveytsariya",
      "Shvetsiya",
      "Estoniya",
    ],

    warningTitle: "Boshqa mamlakatlar orqali tranzit uchun alohida sug‘urta talab etiladi.",

    warningText:
      "Agar Turkiya, Serbiya, Shimoliy Makedoniya, Chernogoriya, Bosniya va Gersegovina, Albaniya, Kosovo yoki yo‘nalishingizdagi boshqa mamlakat sug‘urta hujjatida ko‘rsatilmagan bo‘lsa, Europolis ushbu mamlakat hududida amal qiladi, deb hisoblash mumkin emas.",

    warningNote:
      "Yo‘nalishning bunday qismi uchun alohida mahalliy chegara sug‘urtasi, Yashil karta yoki tegishli davlat tomonidan tan olinadigan boshqa sug‘urta hujjati kerak bo‘ladi.",
  },

  documents: {
    eyebrow: "Hujjatlar",

    title: "Europolisni rasmiylashtirish uchun nima kerak",

    text:
      "Avtomobil ma’lumotlari ro‘yxatdan o‘tganlik hujjati asosida tekshiriladi. Davlat raqami, VIN yoki kuzov raqami, marka, model va egasi haqidagi ma’lumotlar avtomobilni aniq identifikatsiya qilish imkonini berishi kerak.",

    vehicleTitle: "Avtomobil ma’lumotlari",

    policyholderTitle: "Sug‘urta qildiruvchi ma’lumotlari",

    vehicleItems: [
      "avtomobilning ro‘yxatdan o‘tganlik hujjati;",
      "davlat ro‘yxatidan o‘tkazish raqami;",
      "VIN yoki kuzov raqami;",
      "marka va model;",
      "transport vositasi turi;",
      "ishlab chiqarilgan yili;",
      "ro‘yxatdan o‘tgan mamlakat;",
    ],

    policyholderItems: [
      "pasport yoki shaxsni tasdiqlovchi boshqa zarur hujjat;",
      "ism va familiya lotin harflarida;",
      "polisni olish uchun elektron pochta manzili;",
      "telefon raqami yoki messenjer;",
      "sug‘urta boshlanish sanasi;",
      "zarur sug‘urta muddati;",
      "rejalashtirilgan yo‘nalish;",
    ],
  },

  price: {
    eyebrow: "Narx",

    title: "Europolis qancha turadi",

    text:
      "Narx transport vositasi toifasiga, zarur sug‘urta muddatiga va sug‘urtalovchining amaldagi tarifiga bog‘liq. Avtomobil ma’lumotlarini tekshirgandan so‘ng sug‘urtani rasmiylashtirish imkoniyati va yakuniy narxini tasdiqlaymiz.",

    factors: [
      "transport vositasi toifasi;",
      "sug‘urta muddati;",
      "polisning amal qilish boshlanish sanasi;",
      "avtomobil ro‘yxatdan o‘tgan mamlakat;",
      "avtomobilning sug‘urtalovchi talablariga muvofiqligi;",
    ],
  },

  timing: {
    eyebrow: "Rasmiylashtirish muddati",

    title: "Europolisga qachon buyurtma berish kerak",

    text:
      "Arizani oldindan, safar boshlanishidan yoki sug‘urta qamrovi talab etiladigan sanadan avval yuborish tavsiya etiladi. Hujjatlarni tekshirish, narxni hisoblash va sug‘urta polisini berish uchun vaqt talab etiladi. Ayrim avtomobil markalari yoki modellari sug‘urta kompaniyasining ma’lumotnomasida mavjud emas, shuning uchun ularni qo‘shimcha kelishish zarur. Kelishish Varshava vaqti bilan dushanbadan jumagacha soat 08:00 dan 20:00 gacha, shanba kuni esa 08:00 dan 16:00 gacha amalga oshiriladi.",

    notice:
      "Europolisni o‘tgan sana bilan rasmiylashtirish mumkin emas. Tegishli hududda avtomobildan foydalanishni boshlashdan oldin sug‘urta polisi kuchga kirgan bo‘lishi shart.",
  },

  steps: {
    eyebrow: "Onlayn rasmiylashtirish",

    title: "Europolisni onlayn qanday sotib olish mumkin",

    items: [
      {
        title: "Ro‘yxatdan o‘tgan mamlakatni ko‘rsating",
        text:
          "Avtomobil qaysi mamlakatda ro‘yxatdan o‘tganini bizga ma’lum qiling.",
      },
      {
        title: "Yo‘nalish va sanalarni ko‘rsating",
        text:
          "Safar davomida boradigan mamlakatlar, sug‘urta boshlanish sanasi va kerakli muddatni ko‘rsating.",
      },
      {
        title: "Hujjatlarni yuklang",
        text:
          "Avtomobilning ro‘yxatdan o‘tganlik hujjatini va sug‘urta qildiruvchining zarur ma’lumotlarini ilova qiling.",
      },
      {
        title: "Tasdiqni oling",
        text:
          "Biz avtomobil, hujjatlar, yo‘nalish va Europolisni rasmiylashtirish imkoniyatini tekshiramiz.",
      },
      {
        title: "To‘lov qiling va polisni oling",
        text:
          "Narx tasdiqlanib, to‘lov amalga oshirilgandan so‘ng tayyor sug‘urta hujjati PDF formatida elektron pochtangizga yuboriladi.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Rasmiylashtirishdan keyin",

    title: "Safardan oldin Europolis polisida nimalarni tekshirish kerak",

    text:
      "Polisni olgandan so‘ng undagi ma’lumotlarni avtomobilning ro‘yxatdan o‘tganlik hujjati bilan solishtiring. Agar xato aniqlansa, polisdan foydalanishdan oldin uni tuzatish zarur.",

    items: [
      "avtomobilning davlat raqami;",
      "VIN yoki kuzov raqami;",
      "ro‘yxatdan o‘tgan mamlakat;",
      "marka va model;",
      "transport vositasi toifasi;",
      "amal qilish boshlanish sanasi;",
      "amal qilish tugash sanasi;",
      "sug‘urta amal qiladigan hudud;",
      "sug‘urta qildiruvchi ma’lumotlari;",
    ],
  },

  faq: {
    eyebrow: "Ko‘p beriladigan savollar",

    title: "Europolis haqida savollar",

    items: [
      {
        q: "Europolis nima?",
        a:
          "Ushbu sahifada Europolis deganda chet el davlat raqamiga ega avtomobillar uchun fuqarolik javobgarligining chegara sug‘urtasi (OC graniczne) tushuniladi. Bu uchinchi shaxslar oldidagi javobgarlikni sug‘urtalash bo‘lib, KASKO sug‘urtasi emas.",
      },
      {
        q: "Europolisni onlayn sotib olish mumkinmi?",
        a:
          "Ha. Hujjatlarni masofadan turib yuborish mumkin. Ma’lumotlar tekshirilgach, rasmiylashtirish imkoniyati tasdiqlanib, to‘lov amalga oshirilgandan so‘ng tayyor sug‘urta hujjati PDF formatida elektron pochtangizga yuboriladi.",
      },
      {
        q: "Europolis va Yashil karta bir xilmi?",
        a:
          "Yo‘q. Yashil karta — Green Card tizimining xalqaro sug‘urta sertifikati. Europolis esa chegara sug‘urtasi (OC graniczne) hisoblanadi. Avtomobilingizga aynan qaysi hujjat kerakligi uning ro‘yxatdan o‘tgan mamlakati va safar yo‘nalishiga bog‘liq.",
      },
      {
        q: "Qaysi mamlakatlarda ro‘yxatdan o‘tgan avtomobillar uchun Europolisni rasmiylashtirish mumkin?",
        a:
          "Rasmiylashtirish imkoniyati avtomobil ro‘yxatdan o‘tgan mamlakat va sug‘urtalovchining shartlariga bog‘liq. Masalan, quyidagi mamlakatlarda ro‘yxatdan o‘tgan avtomobillar uchun Europolisni rasmiylashtirish mumkin: Belarus, Ukraina, Moldova, Rossiya, Gruziya, Armaniston, Qozog‘iston, O‘zbekiston, Tojikiston, Turkmaniston, Xitoy, Mo‘g‘uliston, BAA, Qatar, Iroq, Jazoir, AQSH, Kanada, Meksika, Braziliya va Saudiya Arabistoni. Avtomobilning ro‘yxatdan o‘tganlik hujjatini yuboring — biz to‘lovdan oldin polis berish imkoniyatini tekshiramiz.",
      },
      {
        q: "Rossiya davlat raqamiga ega avtomobil uchun Europolisni rasmiylashtirish mumkinmi?",
        a:
          "Rasmiylashtirish imkoniyati sug‘urtalovchining amaldagi shartlariga muvofiq tasdiqlanishi kerak. Avtomobilning ro‘yxatdan o‘tganlik hujjati va safar yo‘nalishini yuboring — polis berish imkoniyatini tekshiramiz.",
      },
      {
        q: "Belarus davlat raqamiga ega avtomobil uchun Europolisni rasmiylashtirish mumkinmi?",
        a:
          "Rasmiylashtirish imkoniyati avtomobilning ro‘yxatdan o‘tganlik hujjati, uning toifasi va rejalashtirilgan yo‘nalishi asosida tekshiriladi. Tekshiruvdan so‘ng polis berish imkoniyati va narxini tasdiqlaymiz.",
      },
      {
        q: "Europolis qaysi mamlakatlarda amal qiladi?",
        a:
          "Europolis faqat Yevropa Ittifoqi mamlakatlari, Shveytsariya, Norvegiya va Islandiya hududida amal qiladi.",
      },
      {
        q: "Turkiya uchun alohida sug‘urta kerakmi?",
        a:
          "Ha. Turkiya beriladigan polisning amal qilish hududiga kirmaydi. Uning hududida avtomobil boshqarish uchun Turkiyada tan olinadigan alohida sug‘urta hujjati talab etiladi.",
      },
      {
        q: "Europolisni rasmiylashtirish uchun qanday hujjatlar kerak?",
        a:
          "Odatda avtomobilning ro‘yxatdan o‘tganlik hujjati va sug‘urta qildiruvchi ma’lumotlari talab etiladi. Qo‘shimcha ravishda davlat raqami, VIN yoki kuzov raqami, marka, model, avtomobil toifasi, sug‘urta boshlanish sanasi va yo‘nalish tekshiriladi.",
      },
      {
        q: "Europolisni elektron shaklda olish mumkinmi?",
        a:
          "Ha. Tekshiruv, to‘lov va polis berish jarayonlari yakunlangandan so‘ng sug‘urta hujjati PDF formatida ko‘rsatilgan elektron pochta manziliga yuboriladi.",
      },
      {
        q: "Europolis avtomobilimni ta’mirlash xarajatlarini qoplaydimi?",
        a:
          "Yo‘q. Europolis uchinchi shaxslar oldidagi fuqarolik javobgarligini qoplaydi. O‘z avtomobilingizga yetkazilgan zarar KASKO sug‘urtasiga tegishli.",
      },
    ],
  },

  carousel: {
    title: "Yevropa bo‘ylab sayohat uchun sug‘urta",

    cardTitle: "Chet el davlat raqamiga ega avtomobillar uchun sug‘urta",

    cardText:
      "Polisning amal qilish hududiga kiruvchi Yevropa mamlakatlari bo‘ylab vaqtincha sayohat qilish uchun fuqarolik javobgarligining chegara sug‘urtasi.",

    cta: "Batafsil",
  },

  finalCta: {
    eyebrow: "Onlayn rasmiylashtirish",

    title: "Avtomobilingiz uchun Europolisni rasmiylashtiring",

    text:
      "Avtomobilning ro‘yxatdan o‘tganlik hujjatini yuklang, ro‘yxatdan o‘tgan mamlakat, yo‘nalish, sug‘urta boshlanish sanasi va kerakli muddatni ko‘rsating. Biz rasmiylashtirish imkoniyatini tekshiramiz, narxini hisoblaymiz va to‘lov shartlarini ma’lum qilamiz.",

    button: "Europolisni rasmiylashtirish",
  },
};

const kk: UaeOcDictionary = {
  seo: {
    title: "Европолисті онлайн сатып алу — Еуропаға автокөлік сақтандыруы",
    description:
      "Шетелдік нөмірлері бар автокөліктерге арналған Европолис: Еуропаға сапар үшін шекаралық сақтандыруды онлайн рәсімдеу. Құжаттарды, бағытты және сақтандырудың қолданылу аумағын тексереміз, құнын есептеп, полисті PDF форматында жібереміз.",
  },

  breadcrumbTitle: "Еуропаға сапарға арналған Европолис",

  hero: {
    eyebrow: "Шетелдік нөмірлері бар автокөлік → Еуропа",

    title: "Еуропаға сапар үшін автокөлікті сақтандыру — онлайн рәсімдеу",

    lead:
      "Европолис — осы бетте шетелдік тіркеу нөмірлері бар автокөліктерге арналған азаматтық жауапкершілікті шекаралық сақтандырудың (OC graniczne) атауы ретінде қолданылатын термин. Егер автокөліктің тиісті аумақта танылатын басқа қолданыстағы сақтандыруы болмаса, мұндай полис Еуропа елдерінде автокөлікті уақытша пайдалану үшін қажет болуы мүмкін.",

    noticeLabel: "Рәсімдеу алдында:",

    notice:
      "Біз автокөліктің тіркелген елін, жоспарланған сапар бағытын және сақтандырудың қолданылу аумағын тексереміз. Бір полис барлық транзиттік елдерде автоматты түрде жарамды деп есептеуге болмайды.",

    primaryCta: "Европолисті рәсімдеу",

    secondaryCta: "Құжаттарды тексеру",

    cardLabel: "Негізгі шарттар",

    facts: [
      {
        label: "Автокөліктің тіркелген елі:",
        value: "Беларусь, Украина, Молдова, Ресей, Грузия, Армения, Қазақстан, Өзбекстан, Тәжікстан, Түрікменстан, Қытай, Моңғолия, БАӘ, Катар, Ирак, Алжир, АҚШ, Канада, Мексика, Бразилия, Сауд Арабиясы",
      },
      {
        label: "Сақтандырудың қолданылу аумағы",
        value: "Еуропалық Одақ елдері, Швейцария, Норвегия және Исландия",
      },
      {
        label: "Сақтандыру түрі",
        value: "Шекаралық сақтандыру (Frontier Insurance)",
      },
      {
        label: "Полисті алу",
        value: "PDF форматындағы электрондық полис",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Рәсімдеуге болады",
      title: "Көпжақты келісімге қатысушы елдерден тыс жерде тіркелген автокөліктер үшін",
      text:
        "Егер автокөліктің тіркелген елі мен сипаттамалары сақтандырушының талаптарына сәйкес келсе, шетелдік нөмірлері бар автокөлікке Европолис рәсімделуі мүмкін. Полисті берер алдында тіркеу құжатын және сақтандыруды рәсімдеу мүмкіндігін тексереміз.",
    },
    {
      tone: "warning",
      label: "Тексеру қажет",
      title: "Автокөліктің тіркелген елі мен сапар бағыты",
      text:
        "Сақтандыруды рәсімдеу мүмкіндігі автокөліктің тіркелген еліне байланысты. Сонымен қатар Еуропалық Одақ елдерінде, Швейцарияда, Норвегияда және Исландияда қолданылатын сақтандыру барлық транзиттік мемлекеттерді міндетті түрде қамтымайды.",
    },
    {
      tone: "no",
      label: "Өтелмейді",
      title: "Өз автокөлігіңізге келтірілген залал",
      text:
        "Европолис үшінші тұлғалар алдындағы азаматтық жауапкершілікті сақтандыру болып табылады. Ол КАСКО сақтандыруы емес және сақтандырылған автокөліктің зақымдануын, бұзылуын, ұрлануын немесе вандализм салдарынан келтірілген залалды өтемейді.",
    },
  ],

  suitability: {
    eyebrow: "Кімдерге арналған",

    title: "Европолисті қандай жағдайда рәсімдеуге болады",

    text:
      "Европолис Еуропалық Одақ елдеріне, Швейцарияға, Норвегияға және Исландияға сапар кезінде шетелде тіркелген автокөлік иесінің азаматтық жауапкершілігін уақытша сақтандыруға арналған.",

    yesTitle: "Европолис сізге сәйкес келуі мүмкін",

    noTitle: "Европолис сізге сәйкес келмейді",

    yesItems: [
      "автокөлік ұлттық сақтандыру бюросы Көпжақты келісімге қатыспайтын елде тіркелген болса;",
      "сапар бағыты ұсынылатын полистің қолданылу аумағына кіретін елдерді қамтыса;",
      "автокөліктің осы бағыт үшін жеткілікті басқа қолданыстағы сақтандыруы болмаса;",
      "автокөліктің анық оқылатын тіркеу құжаты болса;",
      "автокөлік туралы мәліметтерді құжаттармен растауға болса;",
      "полис қажетті сақтандыру кезеңі басталғанға дейін рәсімделсе;",
    ],

    noItems: [
      "автокөлік Еуропалық экономикалық аймақ елдерінің бірінде, Андоррада, Босния және Герцеговинада, Черногорияда, Сербияда, Швейцарияда немесе Ұлыбританияда тіркелген болса;",
      "өз автокөлігіңізге келтірілген залалды сақтандыру қажет болса;",
      "сақтандыру тек ұсынылатын полистің қолданылу аумағына кірмейтін ел үшін қажет болса;",
      "сақтандыруды өткен күннен бастап рәсімдеу қажет болса;",
      "автокөліктің тіркеу деректерін құжаттармен растау мүмкін болмаса;",
      "автокөліктің деректері полис беру үшін сақтандырушы белгілеген талаптарға сәйкес келмесе;",
    ],
  },

  routeWarning: {
    eyebrow: "Сапар бағыты",

    title: "Бағыттағы әрбір ел үшін сақтандыруды тексеріңіз",

    text:
      "Еуропаға сапар кезінде автокөлік бірнеше мемлекеттің аумағынан өтуі мүмкін. Европолистің қолданылу аумағы берілген сақтандыру құжатымен анықталады. Сондықтан сақтандырудың бар-жоғын тек баратын ел үшін ғана емес, барлық транзиттік елдер үшін де тексеру қажет.",

    cta: "Бағытты тексеру",
  },

  coverage: {
    eyebrow: "Қолданылу аумағы",

    title: "Біздің Европолис қай елдерде қолданылады",

    text:
      "Сақтандырудың қолданылу аумағы берілген полисте тікелей көрсетіледі. Сақтандырудың қай елдерде жарамды екенін түпкілікті растайтын құжат — сақтандыру полисінің өзі.",

    listLabel: "Ұсынылатын полис қамтитын елдер",

    countries: [
      "Австрия",
      "Бельгия",
      "Болгария",
      "Венгрия",
      "Германия",
      "Грекия",
      "Дания",
      "Ирландия",
      "Исландия",
      "Испания",
      "Италия",
      "Кипр",
      "Латвия",
      "Литва",
      "Норвегия",
      "Польша",
      "Румыния",
      "Словакия",
      "Словения",
      "Финляндия",
      "Франция",
      "Хорватия",
      "Чехия",
      "Швейцария",
      "Швеция",
      "Эстония",
    ],

    warningTitle: "Басқа елдер арқылы транзитпен өту үшін бөлек сақтандыру қажет.",

    warningText:
      "Егер Түркия, Сербия, Солтүстік Македония, Черногория, Босния және Герцеговина, Албания, Косово немесе бағытыңыздағы басқа ел сақтандыру құжатында көрсетілмесе, Европолис сол елдің аумағында қолданылады деп есептеуге болмайды.",

    warningNote:
      "Бағыттың мұндай бөлігі үшін бөлек жергілікті шекаралық сақтандыру, Жасыл карта немесе тиісті мемлекет мойындайтын басқа сақтандыру құжаты қажет болады.",
  },

  documents: {
    eyebrow: "Құжаттар",

    title: "Европолисті рәсімдеу үшін не қажет",

    text:
      "Автокөлік туралы мәліметтер тіркеу құжаты бойынша тексеріледі. Тіркеу нөмірі, VIN немесе шанақ нөмірі, маркасы, моделі және иесі туралы мәліметтер автокөлікті нақты сәйкестендіруге мүмкіндік беруі тиіс.",

    vehicleTitle: "Автокөлік туралы мәліметтер",

    policyholderTitle: "Сақтанушы туралы мәліметтер",

    vehicleItems: [
      "автокөліктің тіркеу құжаты;",
      "мемлекеттік тіркеу нөмірі;",
      "VIN немесе шанақ нөмірі;",
      "маркасы мен моделі;",
      "көлік құралының түрі;",
      "шығарылған жылы;",
      "тіркелген елі;",
    ],

    policyholderItems: [
      "паспорт немесе жеке басты куәландыратын басқа қажетті құжат;",
      "аты мен тегі латын әріптерімен;",
      "полисті алу үшін электрондық пошта мекенжайы;",
      "телефон нөмірі немесе мессенджер;",
      "сақтандырудың басталу күні;",
      "қажетті сақтандыру мерзімі;",
      "жоспарланған сапар бағыты;",
    ],
  },

  price: {
    eyebrow: "Құны",

    title: "Европолис қанша тұрады",

    text:
      "Құны көлік құралының санатына, қажетті сақтандыру мерзіміне және сақтандырушының қолданыстағы тарифіне байланысты. Автокөлік деректерін тексергеннен кейін сақтандыруды рәсімдеу мүмкіндігі мен түпкілікті құнын растаймыз.",

    factors: [
      "көлік құралының санаты;",
      "сақтандыру мерзімі;",
      "полистің қолданыла бастайтын күні;",
      "автокөліктің тіркелген елі;",
      "автокөліктің сақтандырушы талаптарына сәйкестігі;",
    ],
  },

  timing: {
    eyebrow: "Рәсімдеу мерзімі",

    title: "Европолиске қашан тапсырыс беру керек",

    text:
      "Өтінімді алдын ала, сапар басталғанға дейін немесе сақтандыру өтемі қажет болатын күнге дейін жіберуді ұсынамыз. Құжаттарды тексеру, құнын есептеу және сақтандыру полисін беру үшін уақыт қажет. Кейбір автокөлік маркалары немесе модельдері сақтандыру компаниясының анықтамалығында болмауы мүмкін, сондықтан оларды қосымша келісу қажет. Келісу Варшава уақыты бойынша дүйсенбіден жұмаға дейін сағат 08:00-ден 20:00-ге дейін, сондай-ақ сенбі күні 08:00-ден 16:00-ге дейін қолжетімді.",

    notice:
      "Европолисті өткен күннен бастап рәсімдеу мүмкін емес. Тиісті аумақта автокөлікті пайдалануды бастамас бұрын сақтандыру полисі күшіне енген болуы тиіс.",
  },

  steps: {
    eyebrow: "Онлайн рәсімдеу",

    title: "Европолисті онлайн қалай сатып алуға болады",

    items: [
      {
        title: "Тіркелген елді көрсетіңіз",
        text:
          "Автокөліктің қай елде тіркелгенін хабарлаңыз.",
      },
      {
        title: "Бағыт пен күндерді көрсетіңіз",
        text:
          "Сапар елдерін, сақтандырудың басталу күнін және қажетті мерзімін көрсетіңіз.",
      },
      {
        title: "Құжаттарды жүктеңіз",
        text:
          "Автокөліктің тіркеу құжатын және сақтанушының қажетті деректерін тіркеңіз.",
      },
      {
        title: "Растауды алыңыз",
        text:
          "Біз автокөлікті, құжаттарды, бағытты және Европолисті рәсімдеу мүмкіндігін тексереміз.",
      },
      {
        title: "Төлем жасап, полисті алыңыз",
        text:
          "Құны расталып, төлем жасалғаннан кейін дайын сақтандыру құжаты электрондық поштаңызға PDF форматында жіберіледі.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Рәсімдегеннен кейін",

    title: "Сапар алдында Европолис полисінде нені тексеру керек",

    text:
      "Полисті алғаннан кейін ондағы мәліметтерді автокөліктің тіркеу құжатымен салыстырыңыз. Егер қате анықталса, полисті пайдаланбас бұрын оны түзету қажет.",

    items: [
      "автокөліктің мемлекеттік тіркеу нөмірі;",
      "VIN немесе шанақ нөмірі;",
      "тіркелген елі;",
      "маркасы мен моделі;",
      "көлік құралының санаты;",
      "қолданыла бастайтын күні;",
      "қолданылу мерзімінің аяқталатын күні;",
      "сақтандырудың қолданылу аумағы;",
      "сақтанушы туралы мәліметтер;",
    ],
  },

  faq: {
    eyebrow: "Жиі қойылатын сұрақтар",

    title: "Европолис туралы сұрақтар",

    items: [
      {
        q: "Европолис дегеніміз не?",
        a:
          "Бұл бетте Европолис деп шетелдік тіркеу нөмірлері бар автокөліктерге арналған азаматтық жауапкершілікті шекаралық сақтандыру (OC graniczne) түсініледі. Бұл — үшінші тұлғалар алдындағы жауапкершілікті сақтандыру, КАСКО сақтандыруы емес.",
      },
      {
        q: "Европолисті онлайн сатып алуға бола ма?",
        a:
          "Иә. Құжаттарды қашықтан жіберуге болады. Деректер тексеріліп, рәсімдеу мүмкіндігі расталғаннан және төлем жасалғаннан кейін дайын сақтандыру құжаты электрондық поштаға PDF форматында жіберіледі.",
      },
      {
        q: "Европолис пен Жасыл карта бірдей ме?",
        a:
          "Жоқ. Жасыл карта — Green Card жүйесінің халықаралық сақтандыру сертификаты. Ал Европолис — шекаралық сақтандыру (OC graniczne). Сіздің автокөлігіңізге нақты қандай құжат қажет екені оның тіркелген еліне және сапар бағытына байланысты.",
      },
      {
        q: "Қай елдерде тіркелген автокөліктерге Европолис рәсімдеуге болады?",
        a:
          "Рәсімдеу мүмкіндігі автокөліктің тіркелген еліне және сақтандырушының шарттарына байланысты. Мысалы, мына елдерде тіркелген автокөліктерге Европолис рәсімделуі мүмкін: Беларусь, Украина, Молдова, Ресей, Грузия, Армения, Қазақстан, Өзбекстан, Тәжікстан, Түрікменстан, Қытай, Моңғолия, БАӘ, Катар, Ирак, Алжир, АҚШ, Канада, Мексика, Бразилия және Сауд Арабиясы. Автокөліктің тіркеу құжатын жіберіңіз — төлем жасалғанға дейін полис беру мүмкіндігін тексереміз.",
      },
      {
        q: "Ресей нөмірлері бар автокөлікке Европолис рәсімдеуге бола ма?",
        a:
          "Рәсімдеу мүмкіндігі сақтандырушының қолданыстағы шарттарына сәйкес расталуы тиіс. Автокөліктің тіркеу құжатын және сапар бағытын жіберіңіз — полис беру мүмкіндігін тексереміз.",
      },
      {
        q: "Беларусь нөмірлері бар автокөлікке Европолис рәсімдеуге бола ма?",
        a:
          "Рәсімдеу мүмкіндігі автокөліктің тіркеу құжаты, санаты және жоспарланған сапар бағыты негізінде тексеріледі. Тексеруден кейін полис беру мүмкіндігі мен құнын растаймыз.",
      },
      {
        q: "Европолис қай елдерде қолданылады?",
        a:
          "Европолис тек Еуропалық Одақ елдерінің, Швейцарияның, Норвегияның және Исландияның аумағында қолданылады.",
      },
      {
        q: "Түркия үшін бөлек сақтандыру қажет пе?",
        a:
          "Иә. Түркия берілетін полистің қолданылу аумағына кірмейді. Оның аумағында автокөлікпен жүру үшін Түркияда танылатын бөлек сақтандыру құжаты қажет.",
      },
      {
        q: "Европолисті рәсімдеу үшін қандай құжаттар қажет?",
        a:
          "Әдетте автокөліктің тіркеу құжаты және сақтанушы туралы мәліметтер қажет. Қосымша мемлекеттік тіркеу нөмірі, VIN немесе шанақ нөмірі, маркасы, моделі, автокөлік санаты, сақтандырудың басталу күні және сапар бағыты тексеріледі.",
      },
      {
        q: "Европолисті электрондық түрде алуға бола ма?",
        a:
          "Иә. Тексеру, төлем жасау және полисті беру аяқталғаннан кейін сақтандыру құжаты көрсетілген электрондық пошта мекенжайына PDF форматында жіберіледі.",
      },
      {
        q: "Европолис менің автокөлігімді жөндеу шығындарын өтей ме?",
        a:
          "Жоқ. Европолис үшінші тұлғалар алдындағы азаматтық жауапкершілікті өтейді. Өз автокөлігіңізге келтірілген залал КАСКО сақтандыруына жатады.",
      },
    ],
  },

  carousel: {
    title: "Еуропаға сапарларға арналған сақтандыру",

    cardTitle: "Шетелдік нөмірлері бар автокөліктерді сақтандыру",

    cardText:
      "Полистің қолданылу аумағына кіретін Еуропа елдеріне уақытша сапарлар үшін азаматтық жауапкершілікті шекаралық сақтандыру.",

    cta: "Толығырақ",
  },

  finalCta: {
    eyebrow: "Онлайн рәсімдеу",

    title: "Автокөлігіңізге Европолис рәсімдеңіз",

    text:
      "Автокөліктің тіркеу құжатын жүктеңіз, тіркелген елін, сапар бағытын, сақтандырудың басталу күнін және қажетті мерзімін көрсетіңіз. Біз рәсімдеу мүмкіндігін тексеріп, құнын есептейміз және төлем шарттарын хабарлаймыз.",

    button: "Европолисті рәсімдеу",
  },
};

const hy: UaeOcDictionary = {
  seo: {
    title: "Գնել Եվրոպոլիս առցանց — ավտոմեքենայի ապահովագրություն Եվրոպայի համար",
    description:
      "Եվրոպոլիս՝ օտարերկրյա համարանիշներով ավտոմեքենաների համար. սահմանային ապահովագրության առցանց ձևակերպում Եվրոպայով ճանապարհորդելու համար։ Մենք կստուգենք փաստաթղթերը, երթուղին և ապահովագրության գործողության տարածքը, կհաշվարկենք արժեքը և պոլիսը կուղարկենք PDF ձևաչափով։",
  },

  breadcrumbTitle: "Եվրոպոլիս՝ Եվրոպա մեկնելու համար",

  hero: {
    eyebrow: "Օտարերկրյա համարանիշներով ավտոմեքենա → Եվրոպա",

    title: "Ավտոմեքենայի ապահովագրություն Եվրոպա մեկնելու համար — առցանց ձևակերպում",

    lead:
      "Եվրոպոլիսը այս էջում օգտագործվող անվանումն է օտարերկրյա հաշվառման համարանիշներով ավտոմեքենաների քաղաքացիական պատասխանատվության սահմանային ապահովագրության (OC graniczne) համար։ Նման պոլիս կարող է պահանջվել եվրոպական երկրներում ավտոմեքենան ժամանակավորապես օգտագործելու համար, եթե այն չունի տվյալ տարածքում ճանաչվող այլ գործող ապահովագրություն։",

    noticeLabel: "Մինչև ձևակերպումը՝",

    notice:
      "Մենք կստուգենք ավտոմեքենայի գրանցման երկիրը, նախատեսվող երթուղին և ապահովագրության գործողության տարածքը։ Չպետք է ենթադրել, որ մեկ պոլիսն ինքնաբերաբար գործում է տարանցման բոլոր երկրներում։",

    primaryCta: "Ձևակերպել Եվրոպոլիս",

    secondaryCta: "Ստուգել փաստաթղթերը",

    cardLabel: "Հիմնական պայմաններ",

    facts: [
      {
        label: "Ավտոմեքենայի գրանցման երկիրը՝",
        value: "Բելառուս, Ուկրաինա, Մոլդովա, Ռուսաստան, Վրաստան, Հայաստան, Ղազախստան, Ուզբեկստան, Տաջիկստան, Թուրքմենստան, Չինաստան, Մոնղոլիա, ԱՄԷ, Կատար, Իրաք, Ալժիր, ԱՄՆ, Կանադա, Մեքսիկա, Բրազիլիա, Սաուդյան Արաբիա",
      },
      {
        label: "Ապահովագրական ծածկույթի տարածքը",
        value: "Եվրամիության երկրներ, Շվեյցարիա, Նորվեգիա և Իսլանդիա",
      },
      {
        label: "Ապահովագրության տեսակը",
        value: "Սահմանային ապահովագրություն (Frontier Insurance)",
      },
      {
        label: "Պոլիսի ստացումը",
        value: "Էլեկտրոնային պոլիս՝ PDF ձևաչափով",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Հնարավոր է ձևակերպել",
      title: "Բազմակողմ համաձայնագրի մասնակից երկրներից դուրս գրանցված ավտոմեքենաների համար",
      text:
        "Եվրոպոլիսը կարող է ձևակերպվել օտարերկրյա համարանիշներով ավտոմեքենայի համար, եթե դրա գրանցման երկիրը և տվյալները համապատասխանում են ապահովագրողի պայմաններին։ Մինչև պոլիսի տրամադրումը մենք ստուգում ենք գրանցման փաստաթուղթը և ապահովագրության ձևակերպման հնարավորությունը։",
    },
    {
      tone: "warning",
      label: "Անհրաժեշտ է ստուգում",
      title: "Գրանցման երկիրը և ճանապարհորդության երթուղին",
      text:
        "Ապահովագրության ձևակերպման հնարավորությունը կախված է ավտոմեքենայի գրանցման երկրից։ Բացի այդ, Եվրամիության երկրներում, Շվեյցարիայում, Նորվեգիայում և Իսլանդիայում գործող ապահովագրությունը պարտադիր չէ, որ տարածվի տարանցման բոլոր երկրների վրա։",
    },
    {
      tone: "no",
      label: "Չի ծածկում",
      title: "Սեփական ավտոմեքենայի վնասները",
      text:
        "Եվրոպոլիսը երրորդ անձանց նկատմամբ քաղաքացիական պատասխանատվության ապահովագրություն է։ Այն ԿԱՍԿՈ ապահովագրություն չէ և չի ծածկում ապահովագրված ավտոմեքենայի վնասումը, խափանումը, գողությունը կամ վանդալիզմի հետևանքով պատճառված վնասը։",
    },
  ],

  suitability: {
    eyebrow: "Ում համար է նախատեսված",

    title: "Երբ կարելի է ձևակերպել Եվրոպոլիս",

    text:
      "Եվրոպոլիսը նախատեսված է օտարերկրյա գրանցում ունեցող ավտոմեքենայի քաղաքացիական պատասխանատվության ժամանակավոր ապահովագրության համար՝ Եվրամիության երկրներով, Շվեյցարիայով, Նորվեգիայով և Իսլանդիայով ճանապարհորդելիս։",

    yesTitle: "Եվրոպոլիսը կարող է համապատասխանել ձեզ",

    noTitle: "Եվրոպոլիսը ձեզ չի համապատասխանի",

    yesItems: [
      "ավտոմեքենան գրանցված է այնպիսի երկրում, որի ազգային ապահովագրական բյուրոն չի մասնակցում Բազմակողմ համաձայնագրին;",
      "ձեր երթուղին ներառում է առաջարկվող պոլիսի գործողության տարածքում նշված երկրներ;",
      "ավտոմեքենան չունի տվյալ երթուղու համար բավարար այլ գործող ապահովագրություն;",
      "առկա է ավտոմեքենայի հստակ ընթեռնելի գրանցման փաստաթուղթ;",
      "ավտոմեքենայի տվյալները հնարավոր է հաստատել փաստաթղթերով;",
      "պոլիսը ձևակերպվում է մինչև անհրաժեշտ ապահովագրական ժամանակահատվածի սկիզբը;",
    ],

    noItems: [
      "ավտոմեքենան գրանցված է Եվրոպական տնտեսական տարածքի երկրներից մեկում, Անդորրայում, Բոսնիա և Հերցեգովինայում, Չեռնոգորիայում, Սերբիայում, Շվեյցարիայում կամ Միացյալ Թագավորությունում;",
      "անհրաժեշտ է ապահովագրել սեփական ավտոմեքենային պատճառված վնասը;",
      "ապահովագրությունը պահանջվում է միայն այն երկրի համար, որը չի մտնում առաջարկվող պոլիսի գործողության տարածքի մեջ;",
      "անհրաժեշտ է ապահովագրությունը ձևակերպել հետին թվով;",
      "ավտոմեքենայի գրանցման տվյալները հնարավոր չէ հաստատել փաստաթղթերով;",
      "ավտոմեքենայի տվյալները չեն համապատասխանում պոլիսի տրամադրման համար ապահովագրողի պահանջներին;",
    ],
  },

  routeWarning: {
    eyebrow: "Ճանապարհորդության երթուղի",

    title: "Ստուգեք ապահովագրությունը երթուղու յուրաքանչյուր երկրի համար",

    text:
      "Եվրոպա մեկնելիս ավտոմեքենան կարող է հատել մի քանի պետությունների սահմաններ։ Եվրոպոլիսի գործողության տարածքը որոշվում է տրամադրված ապահովագրական փաստաթղթով։ Ուստի ապահովագրական ծածկույթը պետք է ստուգել ոչ միայն նպատակակետ երկրի, այլև բոլոր տարանցիկ երկրների համար։",

    cta: "Ստուգել երթուղին",
  },

  coverage: {
    eyebrow: "Գործողության տարածք",

    title: "Որտեղ է գործում մեր Եվրոպոլիսը",

    text:
      "Ապահովագրության գործողության տարածքը նշվում է անմիջապես տրամադրված պոլիսում։ Հենց ապահովագրական փաստաթուղթն է վերջնական հաստատումը, թե որ երկրներում է գործում ապահովագրությունը։",

    listLabel: "Առաջարկվող պոլիսի ծածկույթում ընդգրկված երկրները",

    countries: [
      "Ավստրիա",
      "Բելգիա",
      "Բուլղարիա",
      "Հունգարիա",
      "Գերմանիա",
      "Հունաստան",
      "Դանիա",
      "Իռլանդիա",
      "Իսլանդիա",
      "Իսպանիա",
      "Իտալիա",
      "Կիպրոս",
      "Լատվիա",
      "Լիտվա",
      "Նորվեգիա",
      "Լեհաստան",
      "Ռումինիա",
      "Սլովակիա",
      "Սլովենիա",
      "Ֆինլանդիա",
      "Ֆրանսիա",
      "Խորվաթիա",
      "Չեխիա",
      "Շվեյցարիա",
      "Շվեդիա",
      "Էստոնիա",
    ],

    warningTitle: "Այլ երկրներով տարանցման համար անհրաժեշտ է առանձին ապահովագրություն։",

    warningText:
      "Եթե Թուրքիան, Սերբիան, Հյուսիսային Մակեդոնիան, Չեռնոգորիան, Բոսնիա և Հերցեգովինան, Ալբանիան, Կոսովոն կամ ձեր երթուղու մեկ այլ երկիր նշված չէ ապահովագրական փաստաթղթում, չպետք է ենթադրել, որ Եվրոպոլիսը գործում է այդ երկրի տարածքում։",

    warningNote:
      "Երթուղու այդ հատվածի համար անհրաժեշտ կլինի առանձին տեղական սահմանային ապահովագրություն, Կանաչ քարտ կամ համապատասխան պետության կողմից ճանաչվող այլ ապահովագրական փաստաթուղթ։",
  },

  documents: {
    eyebrow: "Փաստաթղթեր",

    title: "Ինչ է անհրաժեշտ Եվրոպոլիսը ձևակերպելու համար",

    text:
      "Ավտոմեքենայի տվյալները ստուգվում են գրանցման փաստաթղթի հիման վրա։ Գրանցման համարը, VIN-ը կամ թափքի համարը, մակնիշը, մոդելը և սեփականատիրոջ տվյալները պետք է հնարավորություն տան միանշանակ նույնականացնել ավտոմեքենան։",

    vehicleTitle: "Ավտոմեքենայի տվյալներ",

    policyholderTitle: "Ապահովադրի տվյալներ",

    vehicleItems: [
      "ավտոմեքենայի գրանցման փաստաթուղթ;",
      "պետական գրանցման համարանիշ;",
      "VIN կամ թափքի համար;",
      "մակնիշ և մոդել;",
      "տրանսպորտային միջոցի տեսակ;",
      "արտադրության տարեթիվ;",
      "գրանցման երկիր;",
    ],

    policyholderItems: [
      "անձնագիր կամ անձը հաստատող այլ անհրաժեշտ փաստաթուղթ;",
      "անուն և ազգանուն՝ լատինատառ;",
      "էլեկտրոնային փոստի հասցե՝ պոլիսը ստանալու համար;",
      "հեռախոսահամար կամ հաղորդագրությունների հավելվածի կոնտակտ;",
      "ապահովագրության մեկնարկի ամսաթիվ;",
      "ապահովագրության անհրաժեշտ ժամկետ;",
      "նախատեսվող երթուղի;",
    ],
  },

  price: {
    eyebrow: "Արժեք",

    title: "Որքան արժե Եվրոպոլիսը",

    text:
      "Արժեքը կախված է տրանսպորտային միջոցի կատեգորիայից, ապահովագրության անհրաժեշտ ժամկետից և ապահովագրողի գործող սակագնից։ Ձևակերպման վերջնական հնարավորությունն ու արժեքը հաստատում ենք ավտոմեքենայի տվյալները ստուգելուց հետո։",

    factors: [
      "տրանսպորտային միջոցի կատեգորիա;",
      "ապահովագրության ժամկետ;",
      "պոլիսի գործողության մեկնարկի ամսաթիվ;",
      "ավտոմեքենայի գրանցման երկիր;",
      "ավտոմեքենայի համապատասխանությունը ապահովագրողի պայմաններին;",
    ],
  },

  timing: {
    eyebrow: "Ձևակերպման ժամկետ",

    title: "Երբ պատվիրել Եվրոպոլիսը",

    text:
      "Խորհուրդ ենք տալիս հայտը ներկայացնել նախապես՝ մինչև ճանապարհորդության սկիզբը կամ այն ամսաթիվը, որից անհրաժեշտ է ապահովագրական ծածկույթը։ Ժամանակ է պահանջվում փաստաթղթերը ստուգելու, արժեքը հաշվարկելու և ապահովագրական պոլիսը տրամադրելու համար։ Ավտոմեքենաների որոշ մակնիշներ կամ մոդելներ բացակայում են ապահովագրական ընկերության տեղեկատուում, ուստի անհրաժեշտ է դրանց լրացուցիչ համաձայնեցումը։ Համաձայնեցումը հասանելի է երկուշաբթիից ուրբաթ՝ Վարշավայի ժամանակով 08:00-ից 20:00-ը, ինչպես նաև շաբաթ օրը՝ Վարշավայի ժամանակով 08:00-ից 16:00-ը։",

    notice:
      "Եվրոպոլիսը չի ձևակերպվում հետին թվով։ Համապատասխան տարածքում ավտոմեքենան օգտագործելուց առաջ ապահովագրական պոլիսն արդեն պետք է ուժի մեջ մտած լինի։",
  },

  steps: {
    eyebrow: "Առցանց ձևակերպում",

    title: "Ինչպես գնել Եվրոպոլիս առցանց",

    items: [
      {
        title: "Նշեք գրանցման երկիրը",
        text:
          "Հայտնեք, թե որ երկրում է գրանցված ավտոմեքենան։",
      },
      {
        title: "Նշեք երթուղին և ամսաթվերը",
        text:
          "Նշեք ճանապարհորդության երկրները, ապահովագրության մեկնարկի ամսաթիվը և անհրաժեշտ ժամկետը։",
      },
      {
        title: "Վերբեռնեք փաստաթղթերը",
        text:
          "Կցեք ավտոմեքենայի գրանցման փաստաթուղթը և ապահովադրի անհրաժեշտ տվյալները։",
      },
      {
        title: "Ստացեք հաստատում",
        text:
          "Մենք կստուգենք ավտոմեքենան, փաստաթղթերը, երթուղին և Եվրոպոլիսի ձևակերպման հնարավորությունը։",
      },
      {
        title: "Վճարեք և ստացեք պոլիսը",
        text:
          "Արժեքի հաստատումից և վճարումից հետո պատրաստի ապահովագրական փաստաթուղթը PDF ձևաչափով կուղարկվի ձեր էլեկտրոնային փոստին։",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Ձևակերպումից հետո",

    title: "Ինչ ստուգել Եվրոպոլիսի պոլիսում մինչև ճանապարհորդությունը",

    text:
      "Պոլիսը ստանալուց հետո համեմատեք դրանում նշված տեղեկությունները ավտոմեքենայի գրանցման փաստաթղթի հետ։ Եթե հայտնաբերվի սխալ, անհրաժեշտ է այն ուղղել մինչև պոլիսն օգտագործելը։",

    items: [
      "ավտոմեքենայի պետական գրանցման համարանիշ;",
      "VIN կամ թափքի համար;",
      "գրանցման երկիր;",
      "մակնիշ և մոդել;",
      "տրանսպորտային միջոցի կատեգորիա;",
      "գործողության մեկնարկի ամսաթիվ;",
      "գործողության ավարտի ամսաթիվ;",
      "ապահովագրության գործողության տարածք;",
      "ապահովադրի տվյալներ;",
    ],
  },

  faq: {
    eyebrow: "Հաճախ տրվող հարցեր",

    title: "Հարցեր Եվրոպոլիսի մասին",

    items: [
      {
        q: "Ի՞նչ է Եվրոպոլիսը։",
        a:
          "Այս էջում Եվրոպոլիս անվան տակ հասկացվում է օտարերկրյա գրանցման համարանիշներով ավտոմեքենաների քաղաքացիական պատասխանատվության սահմանային ապահովագրությունը (OC graniczne)։ Այն երրորդ անձանց նկատմամբ պատասխանատվության ապահովագրություն է, այլ ոչ թե ԿԱՍԿՈ։",
      },
      {
        q: "Հնարավո՞ր է Եվրոպոլիս գնել առցանց։",
        a:
          "Այո։ Փաստաթղթերը կարելի է ուղարկել հեռավար եղանակով։ Տվյալների ստուգումից, ձևակերպման հնարավորության հաստատումից և վճարումից հետո պատրաստի ապահովագրական փաստաթուղթը PDF ձևաչափով ուղարկվում է էլեկտրոնային փոստին։",
      },
      {
        q: "Եվրոպոլիսը և Կանաչ քարտը նո՞ւյնն են։",
        a:
          "Ոչ։ Կանաչ քարտը Green Card համակարգի միջազգային ապահովագրական վկայականն է։ Եվրոպոլիսը սահմանային ապահովագրություն է (OC graniczne)։ Թե կոնկրետ որ փաստաթուղթն է անհրաժեշտ ձեր ավտոմեքենայի համար, կախված է դրա գրանցման երկրից և ճանապարհորդության երթուղուց։",
      },
      {
        q: "Ո՞ր երկրներում գրանցված ավտոմեքենաների համար կարելի է ձևակերպել Եվրոպոլիս։",
        a:
          "Ձևակերպման հնարավորությունը որոշվում է ավտոմեքենայի գրանցման երկրով և ապահովագրողի պայմաններով։ Եվրոպոլիսը հնարավոր է ձևակերպել, օրինակ, հետևյալ երկրներում գրանցված ավտոմեքենաների համար՝ Բելառուս, Ուկրաինա, Մոլդովա, Ռուսաստան, Վրաստան, Հայաստան, Ղազախստան, Ուզբեկստան, Տաջիկստան, Թուրքմենստան, Չինաստան, Մոնղոլիա, ԱՄԷ, Կատար, Իրաք, Ալժիր, ԱՄՆ, Կանադա, Մեքսիկա, Բրազիլիա և Սաուդյան Արաբիա։ Ուղարկեք ավտոմեքենայի գրանցման փաստաթուղթը, և մենք մինչև վճարումը կստուգենք պոլիսի տրամադրման հնարավորությունը։",
      },
      {
        q: "Հնարավո՞ր է Եվրոպոլիս ձևակերպել ռուսական համարանիշներով ավտոմեքենայի համար։",
        a:
          "Ձևակերպման հնարավորությունը պետք է հաստատվի ապահովագրողի գործող պայմանների համաձայն։ Ուղարկեք ավտոմեքենայի գրանցման փաստաթուղթը և ճանապարհորդության երթուղին, և մենք կստուգենք պոլիսի տրամադրման հնարավորությունը։",
      },
      {
        q: "Հնարավո՞ր է Եվրոպոլիս ձևակերպել բելառուսական համարանիշներով ավտոմեքենայի համար։",
        a:
          "Ձևակերպման հնարավորությունը ստուգվում է ավտոմեքենայի գրանցման փաստաթղթի, դրա կատեգորիայի և նախատեսվող երթուղու հիման վրա։ Ստուգումից հետո կհաստատենք պոլիսի տրամադրման հնարավորությունն ու արժեքը։",
      },
      {
        q: "Ո՞ր երկրներում է գործում Եվրոպոլիսը։",
        a:
          "Եվրոպոլիսը գործում է միայն Եվրամիության երկրների, Շվեյցարիայի, Նորվեգիայի և Իսլանդիայի տարածքում։",
      },
      {
        q: "Թուրքիայի համար առանձին ապահովագրություն անհրաժե՞շտ է։",
        a:
          "Այո։ Թուրքիան ընդգրկված չէ տրամադրվող պոլիսի գործողության տարածքում։ Թուրքիայի տարածքում ավտոմեքենայով երթևեկելու համար անհրաժեշտ է առանձին ապահովագրական փաստաթուղթ, որը ճանաչվում է Թուրքիայում։",
      },
      {
        q: "Ի՞նչ փաստաթղթեր են անհրաժեշտ Եվրոպոլիսի ձևակերպման համար։",
        a:
          "Սովորաբար պահանջվում են ավտոմեքենայի գրանցման փաստաթուղթը և ապահովադրի տվյալները։ Լրացուցիչ ստուգվում են գրանցման համարը, VIN-ը կամ թափքի համարը, մակնիշը, մոդելը, ավտոմեքենայի կատեգորիան, ապահովագրության մեկնարկի ամսաթիվը և երթուղին։",
      },
      {
        q: "Հնարավո՞ր է Եվրոպոլիսը ստանալ էլեկտրոնային եղանակով։",
        a:
          "Այո։ Ստուգումից, վճարումից և պոլիսի տրամադրումից հետո ապահովագրական փաստաթուղթը PDF ձևաչափով ուղարկվում է նշված էլեկտրոնային փոստի հասցեին։",
      },
      {
        q: "Եվրոպոլիսը ծածկո՞ւմ է իմ ավտոմեքենայի վերանորոգման ծախսերը։",
        a:
          "Ոչ։ Եվրոպոլիսը ծածկում է երրորդ անձանց նկատմամբ քաղաքացիական պատասխանատվությունը։ Սեփական ավտոմեքենայի վնասների ապահովագրությունը վերաբերում է ԿԱՍԿՈ-ին։",
      },
    ],
  },

  carousel: {
    title: "Ապահովագրություն Եվրոպայով ճանապարհորդությունների համար",

    cardTitle: "Օտարերկրյա համարանիշներով ավտոմեքենաների ապահովագրություն",

    cardText:
      "Քաղաքացիական պատասխանատվության սահմանային ապահովագրություն՝ պոլիսի գործողության տարածքում ընդգրկված եվրոպական երկրներով ժամանակավոր ճանապարհորդությունների համար։",

    cta: "Մանրամասն",
  },

  finalCta: {
    eyebrow: "Առցանց ձևակերպում",

    title: "Ձևակերպեք Եվրոպոլիս ձեր ավտոմեքենայի համար",

    text:
      "Վերբեռնեք ավտոմեքենայի գրանցման փաստաթուղթը, նշեք գրանցման երկիրը, երթուղին, ապահովագրության մեկնարկի ամսաթիվը և անհրաժեշտ ժամկետը։ Մենք կստուգենք ձևակերպման հնարավորությունը, կհաշվարկենք արժեքը և կհայտնենք վճարման պայմանները։",

    button: "Ձևակերպել Եվրոպոլիս",
  },
};

const ar: UaeOcDictionary = {
  seo: {
    title: "شراء تأمين يوروبوليس عبر الإنترنت — تأمين السيارات للسفر إلى أوروبا",
    description:
      "يوروبوليس للسيارات ذات اللوحات الأجنبية: إصدار التأمين الحدودي عبر الإنترنت للسفر في أوروبا. نتحقق من المستندات ومسار الرحلة ونطاق التغطية التأمينية، ونحسب التكلفة، ونرسل وثيقة التأمين بصيغة PDF.",
  },

  breadcrumbTitle: "تأمين يوروبوليس للسفر إلى أوروبا",

  hero: {
    eyebrow: "سيارة بلوحات تسجيل أجنبية ← أوروبا",

    title: "تأمين السيارات للسفر إلى أوروبا — إصدار الوثيقة عبر الإنترنت",

    lead:
      "يوروبوليس هو الاسم المستخدم في هذه الصفحة للإشارة إلى التأمين الحدودي للمسؤولية المدنية تجاه الغير (OC graniczne)، المخصص للسيارات التي تحمل لوحات تسجيل أجنبية. وقد تكون هذه الوثيقة مطلوبة للاستخدام المؤقت للسيارة في الدول الأوروبية إذا لم تكن لديها تغطية تأمينية أخرى سارية ومعترف بها في الإقليم المعني.",

    noticeLabel: "قبل إصدار الوثيقة:",

    notice:
      "سنتحقق من بلد تسجيل السيارة ومسار الرحلة المخطط له والنطاق الجغرافي للتغطية التأمينية. ولا ينبغي افتراض أن وثيقة تأمين واحدة تسري تلقائياً في جميع دول العبور.",

    primaryCta: "شراء تأمين يوروبوليس",

    secondaryCta: "التحقق من المستندات",

    cardLabel: "الشروط الأساسية",

    facts: [
      {
        label: "بلد تسجيل السيارة:",
        value: "بيلاروسيا، أوكرانيا، مولدوفا، روسيا، جورجيا، أرمينيا، كازاخستان، أوزبكستان، طاجيكستان، تركمانستان، الصين، منغوليا، الإمارات العربية المتحدة، قطر، العراق، الجزائر، الولايات المتحدة الأمريكية، كندا، المكسيك، البرازيل، المملكة العربية السعودية",
      },
      {
        label: "النطاق الجغرافي للتغطية",
        value: "دول الاتحاد الأوروبي وسويسرا والنرويج وآيسلندا",
      },
      {
        label: "نوع التأمين",
        value: "التأمين الحدودي (Frontier Insurance)",
      },
      {
        label: "استلام الوثيقة",
        value: "وثيقة تأمين إلكترونية بصيغة PDF",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "يمكن إصدار التأمين",
      title: "للسيارات المسجلة خارج الدول المشمولة بالاتفاق متعدد الأطراف",
      text:
        "يمكن إصدار تأمين يوروبوليس للسيارات ذات اللوحات الأجنبية إذا كان بلد تسجيل السيارة وبياناتها يستوفيان شروط شركة التأمين. وقبل إصدار الوثيقة، نتحقق من شهادة تسجيل السيارة ومن إمكانية توفير التغطية التأمينية.",
    },
    {
      tone: "warning",
      label: "يلزم التحقق",
      title: "بلد تسجيل السيارة ومسار الرحلة",
      text:
        "تعتمد إمكانية إصدار التأمين على بلد تسجيل السيارة. كما أن التأمين الساري في دول الاتحاد الأوروبي وسويسرا والنرويج وآيسلندا لا يشمل بالضرورة جميع الدول التي تمر بها السيارة أثناء العبور.",
    },
    {
      tone: "no",
      label: "غير مشمول بالتغطية",
      title: "الأضرار التي تلحق بسيارتك",
      text:
        "يوروبوليس هو تأمين للمسؤولية المدنية تجاه الغير. ولا يُعد تأميناً شاملاً للسيارة (CASCO)، ولا يغطي الأضرار التي تلحق بالسيارة المؤمن عليها نفسها، أو أعطالها، أو سرقتها، أو الأضرار الناجمة عن أعمال التخريب.",
    },
  ],

  suitability: {
    eyebrow: "الفئات المؤهلة",

    title: "متى يمكن إصدار تأمين يوروبوليس؟",

    text:
      "صُمم تأمين يوروبوليس لتوفير تغطية مؤقتة للمسؤولية المدنية للسيارات المسجلة في الخارج أثناء السفر داخل دول الاتحاد الأوروبي وسويسرا والنرويج وآيسلندا.",

    yesTitle: "قد يكون يوروبوليس مناسباً لك إذا",

    noTitle: "لا يكون يوروبوليس مناسباً لك إذا",

    yesItems: [
      "كانت السيارة مسجلة في دولة لا يشارك مكتب التأمين الوطني التابع لها في الاتفاق متعدد الأطراف؛",
      "كان مسار رحلتك يشمل دولاً تقع ضمن النطاق الجغرافي للوثيقة المعروضة؛",
      "لم تكن لدى السيارة تغطية تأمينية أخرى سارية وكافية لمسار الرحلة المخطط له؛",
      "كانت لديك شهادة تسجيل سيارة واضحة ومقروءة؛",
      "كان من الممكن التحقق من بيانات السيارة باستخدام المستندات الرسمية؛",
      "كان إصدار الوثيقة سيتم قبل بداية فترة التأمين المطلوبة؛",
    ],

    noItems: [
      "كانت السيارة مسجلة في إحدى دول المنطقة الاقتصادية الأوروبية أو أندورا أو البوسنة والهرسك أو الجبل الأسود أو صربيا أو سويسرا أو المملكة المتحدة؛",
      "كنت بحاجة إلى تأمين يغطي الأضرار التي تلحق بسيارتك الخاصة؛",
      "كنت تحتاج إلى التأمين فقط في دولة لا يشملها النطاق الجغرافي للوثيقة المعروضة؛",
      "كنت ترغب في إصدار تأمين بأثر رجعي؛",
      "تعذر التحقق من بيانات تسجيل السيارة باستخدام المستندات؛",
      "لم تستوفِ بيانات السيارة متطلبات شركة التأمين اللازمة لإصدار الوثيقة؛",
    ],
  },

  routeWarning: {
    eyebrow: "مسار الرحلة",

    title: "تحقق من التغطية التأمينية لكل دولة في مسار رحلتك",

    text:
      "قد تمر السيارة عبر عدة دول أثناء السفر إلى أوروبا. ويُحدد النطاق الجغرافي لتأمين يوروبوليس وفقاً لوثيقة التأمين الصادرة. لذلك، يجب التحقق من سريان التغطية التأمينية ليس فقط في دولة الوجهة، بل أيضاً في جميع دول العبور.",

    cta: "التحقق من مسار الرحلة",
  },

  coverage: {
    eyebrow: "النطاق الجغرافي للتغطية",

    title: "أين يسري تأمين يوروبوليس الذي نقدمه؟",

    text:
      "يُذكر النطاق الجغرافي للتغطية التأمينية مباشرة في وثيقة التأمين الصادرة. وتُعد وثيقة التأمين المرجع النهائي لتحديد الدول التي تسري فيها التغطية.",

    listLabel: "الدول المشمولة بالتغطية في وثيقة التأمين المعروضة",

    countries: [
      "النمسا",
      "بلجيكا",
      "بلغاريا",
      "المجر",
      "ألمانيا",
      "اليونان",
      "الدنمارك",
      "أيرلندا",
      "آيسلندا",
      "إسبانيا",
      "إيطاليا",
      "قبرص",
      "لاتفيا",
      "ليتوانيا",
      "النرويج",
      "بولندا",
      "رومانيا",
      "سلوفاكيا",
      "سلوفينيا",
      "فنلندا",
      "فرنسا",
      "كرواتيا",
      "التشيك",
      "سويسرا",
      "السويد",
      "إستونيا",
    ],

    warningTitle: "يتطلب العبور عبر دول أخرى تأميناً منفصلاً.",

    warningText:
      "إذا لم تكن تركيا أو صربيا أو مقدونيا الشمالية أو الجبل الأسود أو البوسنة والهرسك أو ألبانيا أو كوسوفو أو أي دولة أخرى في مسار رحلتك مذكورة في وثيقة التأمين، فلا يجوز افتراض أن تأمين يوروبوليس يسري على أراضي تلك الدولة.",

    warningNote:
      "ستحتاج لتلك المرحلة من الرحلة إلى تأمين حدودي محلي منفصل، أو البطاقة الخضراء، أو وثيقة تأمين أخرى معترف بها لدى الدولة المعنية.",
  },

  documents: {
    eyebrow: "المستندات المطلوبة",

    title: "ما المستندات اللازمة لإصدار تأمين يوروبوليس؟",

    text:
      "يتم التحقق من بيانات السيارة استناداً إلى شهادة تسجيلها. ويجب أن تتيح بيانات رقم التسجيل ورقم تعريف المركبة (VIN) أو رقم الهيكل والعلامة التجارية والطراز وبيانات المالك تحديد هوية السيارة بصورة دقيقة لا لبس فيها.",

    vehicleTitle: "بيانات السيارة",

    policyholderTitle: "بيانات طالب التأمين",

    vehicleItems: [
      "شهادة تسجيل السيارة؛",
      "رقم تسجيل السيارة؛",
      "رقم تعريف المركبة (VIN) أو رقم الهيكل؛",
      "العلامة التجارية والطراز؛",
      "نوع المركبة؛",
      "سنة الصنع؛",
      "بلد التسجيل؛",
    ],

    policyholderItems: [
      "جواز السفر أو أي وثيقة أخرى مطلوبة لإثبات الهوية؛",
      "الاسم الأول واسم العائلة بالأحرف اللاتينية؛",
      "عنوان البريد الإلكتروني لاستلام الوثيقة؛",
      "رقم الهاتف أو وسيلة التواصل عبر تطبيق مراسلة؛",
      "تاريخ بدء التأمين؛",
      "مدة التأمين المطلوبة؛",
      "مسار الرحلة المخطط له؛",
    ],
  },

  price: {
    eyebrow: "تكلفة التأمين",

    title: "كم تبلغ تكلفة تأمين يوروبوليس؟",

    text:
      "تعتمد التكلفة على فئة المركبة ومدة التأمين المطلوبة والتعرفة المعمول بها لدى شركة التأمين. ونؤكد إمكانية إصدار الوثيقة والسعر النهائي بعد التحقق من بيانات السيارة.",

    factors: [
      "فئة المركبة؛",
      "مدة التأمين؛",
      "تاريخ بدء سريان الوثيقة؛",
      "بلد تسجيل السيارة؛",
      "مدى استيفاء السيارة لشروط شركة التأمين؛",
    ],
  },

  timing: {
    eyebrow: "مدة إصدار الوثيقة",

    title: "متى يُنصح بطلب تأمين يوروبوليس؟",

    text:
      "نوصي بتقديم الطلب مسبقاً، قبل بدء الرحلة أو قبل التاريخ الذي تحتاج فيه إلى التغطية التأمينية. ويلزم وقت للتحقق من المستندات وحساب التكلفة وإصدار وثيقة التأمين. وقد لا تكون بعض العلامات التجارية أو طرازات السيارات مدرجة في قاعدة بيانات شركة التأمين، ولذلك تتطلب موافقة إضافية. ويمكن الحصول على هذه الموافقة من الاثنين إلى الجمعة، من الساعة 08:00 صباحاً حتى 20:00 مساءً بتوقيت وارسو، وكذلك يوم السبت من الساعة 08:00 صباحاً حتى 16:00 عصراً بتوقيت وارسو.",

    notice:
      "لا يمكن إصدار تأمين يوروبوليس بأثر رجعي. ويجب أن تكون وثيقة التأمين قد دخلت حيز التنفيذ قبل بدء استخدام السيارة في الإقليم المعني.",
  },

  steps: {
    eyebrow: "التقديم عبر الإنترنت",

    title: "كيفية شراء تأمين يوروبوليس عبر الإنترنت",

    items: [
      {
        title: "حدد بلد تسجيل السيارة",
        text:
          "أخبرنا بالدولة التي سُجلت فيها سيارتك.",
      },
      {
        title: "حدد مسار الرحلة والتواريخ",
        text:
          "اذكر الدول التي تنوي السفر إليها، وتاريخ بدء التأمين، والمدة المطلوبة.",
      },
      {
        title: "ارفع المستندات",
        text:
          "أرفق شهادة تسجيل السيارة وقدم بيانات طالب التأمين المطلوبة.",
      },
      {
        title: "احصل على تأكيد الأهلية",
        text:
          "سنتحقق من السيارة والمستندات ومسار الرحلة وإمكانية إصدار تأمين يوروبوليس.",
      },
      {
        title: "ادفع واستلم وثيقة التأمين",
        text:
          "بعد تأكيد السعر وإتمام الدفع، سنرسل وثيقة التأمين الصادرة إلى بريدك الإلكتروني بصيغة PDF.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "بعد إصدار الوثيقة",

    title: "ما الذي يجب التحقق منه في وثيقة يوروبوليس قبل السفر؟",

    text:
      "بعد استلام وثيقة التأمين، قارن المعلومات الواردة فيها مع شهادة تسجيل السيارة. وإذا اكتشفت أي خطأ، فيجب تصحيحه قبل استخدام الوثيقة.",

    items: [
      "رقم تسجيل السيارة؛",
      "رقم تعريف المركبة (VIN) أو رقم الهيكل؛",
      "بلد التسجيل؛",
      "العلامة التجارية والطراز؛",
      "فئة المركبة؛",
      "تاريخ بدء سريان التأمين؛",
      "تاريخ انتهاء سريان التأمين؛",
      "النطاق الجغرافي للتغطية؛",
      "بيانات طالب التأمين؛",
    ],
  },

  faq: {
    eyebrow: "الأسئلة الشائعة",

    title: "الأسئلة الشائعة حول تأمين يوروبوليس",

    items: [
      {
        q: "ما هو تأمين يوروبوليس؟",
        a:
          "يشير اسم يوروبوليس في هذه الصفحة إلى التأمين الحدودي للمسؤولية المدنية (OC graniczne) للسيارات ذات لوحات التسجيل الأجنبية. وهو تأمين للمسؤولية تجاه الغير، وليس تأميناً شاملاً للسيارة (CASCO).",
      },
      {
        q: "هل يمكن شراء تأمين يوروبوليس عبر الإنترنت؟",
        a:
          "نعم. يمكنك إرسال المستندات عن بُعد. وبعد التحقق من البيانات وتأكيد إمكانية إصدار التأمين وإتمام الدفع، تُرسل وثيقة التأمين إلى بريدك الإلكتروني بصيغة PDF.",
      },
      {
        q: "هل تأمين يوروبوليس والبطاقة الخضراء هما الشيء نفسه؟",
        a:
          "لا. البطاقة الخضراء هي شهادة تأمين دولية صادرة ضمن نظام Green Card. أما يوروبوليس فهو تأمين حدودي (OC graniczne). وتعتمد الوثيقة المطلوبة لسيارتك على بلد تسجيلها ومسار الرحلة.",
      },
      {
        q: "ما الدول التي يمكن إصدار تأمين يوروبوليس للسيارات المسجلة فيها؟",
        a:
          "تعتمد إمكانية الإصدار على بلد تسجيل السيارة وشروط شركة التأمين. وقد يكون تأمين يوروبوليس متاحاً، على سبيل المثال، للسيارات المسجلة في الدول التالية: بيلاروسيا، أوكرانيا، مولدوفا، روسيا، جورجيا، أرمينيا، كازاخستان، أوزبكستان، طاجيكستان، تركمانستان، الصين، منغوليا، الإمارات العربية المتحدة، قطر، العراق، الجزائر، الولايات المتحدة الأمريكية، كندا، المكسيك، البرازيل والمملكة العربية السعودية. أرسل إلينا شهادة تسجيل السيارة، وسنتحقق من إمكانية إصدار الوثيقة قبل الدفع.",
      },
      {
        q: "هل يمكن إصدار تأمين يوروبوليس لسيارة تحمل لوحات روسية؟",
        a:
          "يجب تأكيد إمكانية الإصدار وفقاً للشروط الحالية لشركة التأمين. أرسل إلينا شهادة تسجيل السيارة ومسار الرحلة المخطط له، وسنتحقق من إمكانية إصدار الوثيقة.",
      },
      {
        q: "هل يمكن إصدار تأمين يوروبوليس لسيارة تحمل لوحات بيلاروسية؟",
        a:
          "يتم التحقق من إمكانية الإصدار استناداً إلى شهادة تسجيل السيارة وفئتها ومسار الرحلة المخطط له. وبعد المراجعة، سنؤكد إمكانية إصدار الوثيقة وتكلفتها.",
      },
      {
        q: "في أي دول يسري تأمين يوروبوليس؟",
        a:
          "يسري تأمين يوروبوليس فقط في دول الاتحاد الأوروبي وسويسرا والنرويج وآيسلندا.",
      },
      {
        q: "هل أحتاج إلى تأمين منفصل لتركيا؟",
        a:
          "نعم. تركيا ليست ضمن النطاق الجغرافي للوثيقة الصادرة. وللقيادة داخل أراضيها، ستحتاج إلى وثيقة تأمين منفصلة معترف بها في تركيا.",
      },
      {
        q: "ما المستندات اللازمة لإصدار تأمين يوروبوليس؟",
        a:
          "عادةً ما تكون شهادة تسجيل السيارة وبيانات طالب التأمين مطلوبة. كما يتم التحقق من رقم التسجيل ورقم تعريف المركبة (VIN) أو رقم الهيكل والعلامة التجارية والطراز وفئة السيارة وتاريخ بدء التأمين ومسار الرحلة.",
      },
      {
        q: "هل يمكن استلام وثيقة يوروبوليس إلكترونياً؟",
        a:
          "نعم. بعد التحقق وإتمام الدفع وإصدار الوثيقة، تُرسل وثيقة التأمين بصيغة PDF إلى عنوان البريد الإلكتروني المحدد.",
      },
      {
        q: "هل يغطي تأمين يوروبوليس تكاليف إصلاح سيارتي؟",
        a:
          "لا. يغطي يوروبوليس المسؤولية المدنية تجاه الغير. أما الأضرار التي تلحق بسيارتك الخاصة فتندرج ضمن التأمين الشامل للسيارات (CASCO).",
      },
    ],
  },

  carousel: {
    title: "تأمين السيارات للسفر في أوروبا",

    cardTitle: "تأمين السيارات ذات لوحات التسجيل الأجنبية",

    cardText:
      "تأمين حدودي للمسؤولية المدنية تجاه الغير للرحلات المؤقتة عبر الدول الأوروبية المشمولة بالنطاق الجغرافي للوثيقة.",

    cta: "معرفة المزيد",
  },

  finalCta: {
    eyebrow: "التقديم عبر الإنترنت",

    title: "احصل على تأمين يوروبوليس لسيارتك",

    text:
      "ارفع شهادة تسجيل السيارة وحدد بلد التسجيل ومسار الرحلة وتاريخ بدء التأمين والمدة المطلوبة. سنتحقق من إمكانية الإصدار ونحسب التكلفة ونوضح لك شروط الدفع.",

    button: "شراء تأمين يوروبوليس",
  },
};




const dictionaries: Partial<Record<Lang, UaeOcDictionary>> = {
  ru,
  ka,
  en,
  uk,
  uz,
  kk,
  hy,
  ar,
};

export function getEuropolisDictionary(
  lang: Lang,
): UaeOcDictionary {
  return dictionaries[lang] ?? en;
}

