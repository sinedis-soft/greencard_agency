import type { Lang } from "@/app/dictionaries/header";
import type { UaeOcDictionary } from "@/app/dictionaries/seo-landings/uaeOc";

const ru: UaeOcDictionary = {
  seo: {
    title: "Европолис купить онлайн — страховка на авто в Европе",
    description:
      "Европолис для автомобиля с иностранными номерами: оформление пограничного страхования онлайн для поездки по Европе. Проверим документы, маршрут и территорию действия, рассчитаем стоимость и отправим полис в PDF.",
  },

  breadcrumbTitle: "Европолис для поездки в Европу",

  hero: {
    eyebrow: "Автомобиль с иностранными номерами → Европа",

    title: "Европолис на автомобиль для поездки в Европу - оформление онлайн",

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
        label: "Регистрация автомобиля",
        value: "Иностранные регистрационные номера",
      },
      {
        label: "Территория",
        value: "Страны EC и Швейцарии, указанные в полисе",
      },
      {
        label: "Тип страхования",
        value: "Пограничное страхование OC",
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
        "Возможность оформления зависит от страны регистрации автомобиля. Кроме того, страхование, действующее в странах ЕС, не обязательно распространяется на все государства транзита.",
    },
    {
      tone: "no",
      label: "Не покрывает",
      title: "Повреждение собственного автомобиля",
      text:
        "Европолис является страхованием гражданской ответственности перед третьими лицами. Он не является КАСКО и не покрывает повреждение, поломку, кражу или вандализм в отношении самого застрахованного автомобиля.",
    },
  ],

  suitability: {
    eyebrow: "Кому подходит",

    title: "Когда можно оформить Европолис",

    text:
      "Европолис предназначен для временного страхования гражданской ответственности иностранного автомобиля при поездке по территории, указанной в страховом документе.",

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

    warningTitle: "Транзит может потребовать отдельной страховки",

    warningText:
      "Если Турция, Сербия, Северная Македония, Черногория, Босния и Герцеговина, Албания, Косово или другая страна маршрута не указана в страховом документе, рассчитывать на действие Европолиса на её территории нельзя.",

    warningNote:
      "Для такого участка маршрута может потребоваться отдельное местное пограничное страхование, Зеленая карта или другой страховой документ, признаваемый соответствующим государством.",
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
      "email для получения полиса;",
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
      "Заявку рекомендуется отправлять заранее, до начала поездки или до даты, с которой требуется страховое покрытие. Время необходимо для проверки документов, расчёта стоимости и выпуска страхового документа.",

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
          "После подтверждения стоимости и оплаты готовый страховой документ будет отправлен на email в формате PDF.",
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
          "На этой странице под Европолисом понимается пограничное страхование гражданской ответственности OC graniczne для автомобиля с иностранными регистрационными номерами. Это страхование ответственности перед третьими лицами, а не КАСКО.",
      },
      {
        q: "Можно ли купить Европолис онлайн?",
        a:
          "Да. Документы можно передать дистанционно. После проверки данных, подтверждения возможности оформления и оплаты готовый страховой документ направляется на email в формате PDF.",
      },
      {
        q: "Европолис и Зеленая карта — это одно и то же?",
        a:
          "Нет. Зеленая карта является международным страховым сертификатом системы Green Card. Европолис на этой странице — это пограничное страхование OC graniczne. Какой документ нужен именно вашему автомобилю, зависит от страны регистрации и маршрута.",
      },
      {
        q: "Для автомобилей из каких стран можно оформить Европолис?",
        a:
          "Возможность оформления определяется страной регистрации автомобиля и условиями страховщика. Отправьте регистрационный документ автомобиля — мы проверим возможность выпуска до оплаты.",
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
          "Европолис действует только на территории, указанной непосредственно в выданном страховом документе. Перед поездкой необходимо проверить наличие всех нужных стран в полисе.",
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
      "Europolis for vehicles with foreign registration plates: arrange border insurance online for travel in Europe. We will check your documents, route and territorial coverage, calculate the price and send the policy as a PDF.",
  },

  breadcrumbTitle: "Europolis for Travel in Europe",

  hero: {
    eyebrow: "Foreign-registered vehicle → Europe",

    title: "Europolis Car Insurance — Apply Online",

    lead:
      "Europolis is the name used on this page for border third-party liability insurance (OC graniczne) for vehicles with foreign registration plates. This type of policy may be required for temporary use of a vehicle in European countries if the vehicle does not have another valid insurance policy recognized in the relevant territory.",

    noticeLabel: "Before applying:",

    notice:
      "We will check the vehicle's country of registration, your planned route and the territorial scope of the insurance. A single policy should not automatically be assumed to be valid in every transit country.",

    primaryCta: "Get Europolis",

    secondaryCta: "Check Documents",

    cardLabel: "Key Conditions",

    facts: [
      {
        label: "Vehicle registration",
        value: "Foreign registration plates",
      },
      {
        label: "Territory",
        value: "EU countries and Switzerland listed in the policy",
      },
      {
        label: "Insurance type",
        value: "Border third-party liability insurance",
      },
      {
        label: "Delivery",
        value: "Electronic policy as a PDF",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Can be issued",
      title:
        "For vehicles registered outside the countries covered by the Multilateral Agreement",
      text:
        "Europolis may be issued for a vehicle with foreign registration plates if its country of registration and vehicle details meet the insurer's requirements. Before issuing the policy, we check the registration document and confirm eligibility.",
    },
    {
      tone: "warning",
      label: "Must be checked",
      title: "Country of registration and travel route",
      text:
        "Eligibility depends on the vehicle's country of registration. In addition, insurance valid in EU countries does not necessarily cover every country through which the vehicle will transit.",
    },
    {
      tone: "no",
      label: "Not covered",
      title: "Damage to your own vehicle",
      text:
        "Europolis is third-party liability insurance. It is not comprehensive motor insurance (CASCO) and does not cover damage, mechanical breakdown, theft or vandalism affecting the insured vehicle itself.",
    },
  ],

  suitability: {
    eyebrow: "Eligibility",

    title: "When Europolis Can Be Issued",

    text:
      "Europolis is intended to provide temporary third-party liability insurance for a foreign-registered vehicle while travelling within the territory specified in the insurance document.",

    yesTitle: "Europolis may be suitable",

    noTitle: "Europolis is not suitable",

    yesItems: [
      "the vehicle is registered in a country whose national insurance bureau does not participate in the Multilateral Agreement;",
      "the planned route includes countries covered by the proposed policy;",
      "the vehicle does not have another valid insurance policy providing sufficient coverage for the route;",
      "a clear and legible vehicle registration document is available;",
      "the vehicle details can be verified from official documents;",
      "the policy is arranged before the required insurance period begins;",
    ],

    noItems: [
      "the vehicle is registered in an EEA country, Andorra, Bosnia and Herzegovina, Montenegro, Serbia, Switzerland or the United Kingdom;",
      "you need insurance covering damage to your own vehicle;",
      "you only need insurance for a country outside the territorial scope of the proposed policy;",
      "you need the insurance to be issued retroactively;",
      "the vehicle's registration details cannot be verified from official documents;",
      "the vehicle details do not meet the insurer's requirements for issuing the policy;",
    ],
  },

  routeWarning: {
    eyebrow: "Travel Route",

    title: "Check Insurance Coverage for Every Country on Your Route",

    text:
      "When travelling in Europe, a vehicle may pass through several countries. The territorial scope of Europolis is determined by the issued insurance document, so coverage must be checked not only for the destination country but also for every transit country.",

    cta: "Check Your Route",
  },

  coverage: {
    eyebrow: "Territorial Coverage",

    title: "Where Our Europolis Is Valid",

    text:
      "The territorial scope of the insurance is stated directly in the issued policy. The insurance document itself is the final confirmation of the countries in which the coverage is valid.",

    listLabel: "Countries covered by the proposed policy",

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
      "Czechia",
      "Switzerland",
      "Sweden",
      "Estonia",
    ],

    warningTitle: "Transit may require separate insurance",

    warningText:
      "If Turkey, Serbia, North Macedonia, Montenegro, Bosnia and Herzegovina, Albania, Kosovo or another country on your route is not listed in the insurance document, you should not assume that Europolis is valid there.",

    warningNote:
      "For that part of the journey, you may need separate local border insurance, a Green Card or another insurance document recognized by the relevant country.",
  },

  documents: {
    eyebrow: "Documents",

    title: "Documents Required to Get Europolis",

    text:
      "Vehicle details are verified using the registration document. The registration number, VIN or chassis number, make, model and owner details must allow the vehicle to be identified unambiguously.",

    vehicleTitle: "Vehicle Details",

    policyholderTitle: "Policyholder Details",

    vehicleItems: [
      "vehicle registration document;",
      "registration number;",
      "VIN or chassis number;",
      "make and model;",
      "vehicle type;",
      "year of manufacture;",
      "country of registration;",
    ],

    policyholderItems: [
      "passport or another required identity document;",
      "first and last name in Latin characters;",
      "email address for receiving the policy;",
      "telephone number or messenger contact;",
      "insurance start date;",
      "required insurance period;",
      "planned travel route;",
    ],
  },

  price: {
    eyebrow: "Price",

    title: "How Much Does Europolis Cost?",

    text:
      "The price depends on the vehicle category, required insurance period and the insurer's current rates. We confirm the final price and eligibility after reviewing the vehicle details.",

    factors: [
      "vehicle category;",
      "insurance period;",
      "policy start date;",
      "country of vehicle registration;",
      "whether the vehicle meets the insurer's requirements;",
    ],
  },

  timing: {
    eyebrow: "Processing Time",

    title: "When to Order Europolis",

    text:
      "We recommend submitting your application in advance, before the trip begins or before the date from which insurance coverage is required. Time is needed to review the documents, calculate the price and issue the insurance document.",

    notice:
      "Europolis cannot be issued retroactively. The insurance policy must already be in force before the vehicle is used in the relevant territory.",
  },

  steps: {
    eyebrow: "Apply Online",

    title: "How to Buy Europolis Online",

    items: [
      {
        title: "Specify the Country of Registration",
        text:
          "Tell us the country in which the vehicle is registered.",
      },
      {
        title: "Provide Your Route and Dates",
        text:
          "Tell us which countries you plan to visit, the required start date and the insurance period.",
      },
      {
        title: "Upload the Documents",
        text:
          "Attach the vehicle registration document and the required policyholder details.",
      },
      {
        title: "Receive Confirmation",
        text:
          "We will check the vehicle, documents, route and eligibility for Europolis.",
      },
      {
        title: "Pay and Receive the Policy",
        text:
          "After the price has been confirmed and payment has been made, the completed insurance document will be sent to your email address as a PDF.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "After Issuance",

    title: "What to Check in Your Europolis Before Travelling",

    text:
      "After receiving the policy, compare the information stated in it with the vehicle registration document. If you find an error, it must be corrected before the policy is used.",

    items: [
      "vehicle registration number;",
      "VIN or chassis number;",
      "country of registration;",
      "make and model;",
      "vehicle category;",
      "policy start date;",
      "policy end date;",
      "territorial coverage;",
      "policyholder details;",
    ],
  },

  faq: {
    eyebrow: "FAQ",

    title: "Frequently Asked Questions About Europolis",

    items: [
      {
        q: "What is Europolis?",
        a:
          "On this page, Europolis refers to border third-party liability insurance (OC graniczne) for a vehicle with foreign registration plates. It covers third-party liability and is not comprehensive motor insurance.",
      },
      {
        q: "Can I buy Europolis online?",
        a:
          "Yes. Documents can be submitted remotely. After the details have been reviewed, eligibility has been confirmed and payment has been made, the completed insurance document is sent to your email address as a PDF.",
      },
      {
        q: "Are Europolis and the Green Card the same thing?",
        a:
          "No. A Green Card is an international motor insurance certificate issued under the Green Card System. Europolis, as used on this page, is border third-party liability insurance (OC graniczne). Which document your vehicle requires depends on its country of registration and your travel route.",
      },
      {
        q: "For vehicles registered in which countries can Europolis be issued?",
        a:
          "Eligibility depends on the vehicle's country of registration and the insurer's requirements. Send us the vehicle registration document and we will check whether the policy can be issued before you make any payment.",
      },
      {
        q: "Can Europolis be issued for a vehicle with Russian registration plates?",
        a:
          "Eligibility must be confirmed based on the insurer's current requirements. Send us the vehicle registration document and your planned route, and we will check whether the policy can be issued.",
      },
      {
        q: "Can Europolis be issued for a vehicle with Belarusian registration plates?",
        a:
          "Eligibility is checked based on the vehicle registration document, vehicle category and planned route. After the review, we will confirm whether the policy can be issued and provide the price.",
      },
      {
        q: "In which countries is Europolis valid?",
        a:
          "Europolis is valid only within the territory specified directly in the issued insurance document. Before travelling, you should check that all required countries are included in the policy.",
      },
      {
        q: "Do I need separate insurance for Turkey?",
        a:
          "Yes. Turkey is not included in the territorial coverage of the issued policy, so you will need a separate insurance document recognized in Turkey in order to drive there.",
      },
      {
        q: "What documents are required to get Europolis?",
        a:
          "A vehicle registration document and policyholder details are normally required. We also check the registration number, VIN or chassis number, make, model, vehicle category, insurance start date and planned route.",
      },
      {
        q: "Can Europolis be provided electronically?",
        a:
          "Yes. After the details have been checked, payment has been made and the policy has been issued, the insurance document is sent to the specified email address as a PDF.",
      },
      {
        q: "Does Europolis cover repairs to my vehicle?",
        a:
          "No. Europolis covers third-party liability. Damage to your own vehicle falls under comprehensive motor insurance (CASCO).",
      },
    ],
  },

  carousel: {
    title: "Insurance for Travel in Europe",

    cardTitle: "Insurance for Vehicles with Foreign Registration Plates",

    cardText:
      "Border third-party liability insurance for temporary travel in European countries included in the policy's territorial coverage.",

    cta: "Learn More",
  },

  finalCta: {
    eyebrow: "Apply Online",

    title: "Get Europolis for Your Vehicle",

    text:
      "Upload the vehicle registration document and specify the country of registration, travel route, insurance start date and required period. We will check eligibility, calculate the price and provide payment instructions.",

    button: "Get Europolis",
  },
};

const ka: UaeOcDictionary = {
  seo: {
    title: "ევროპოლისის ონლაინ შეძენა — ავტომობილის დაზღვევა ევროპაში",
    description:
      "ევროპოლისი უცხოური სანომრე ნიშნების მქონე ავტომობილისთვის: სასაზღვრო დაზღვევის ონლაინ გაფორმება ევროპაში მოგზაურობისთვის. შევამოწმებთ დოკუმენტებს, მარშრუტსა და დაფარვის ტერიტორიას, გამოვთვლით ღირებულებას და პოლისს PDF ფორმატში გამოგიგზავნით.",
  },

  breadcrumbTitle: "ევროპოლისი ევროპაში მოგზაურობისთვის",

  hero: {
    eyebrow: "უცხოური სანომრე ნიშნების მქონე ავტომობილი → ევროპა",

    title: "ევროპოლისი ავტომობილისთვის — ონლაინ გაფორმება",

    lead:
      "ევროპოლისი — ამ გვერდზე გამოყენებული სახელწოდებაა უცხოური სანომრე ნიშნების მქონე ავტომობილის სასაზღვრო სამოქალაქო პასუხისმგებლობის დაზღვევისთვის (OC graniczne). ასეთი პოლისი შეიძლება საჭირო გახდეს ავტომობილის ევროპაში დროებით გამოყენებისთვის, თუ მას არ გააჩნია სხვა მოქმედი დაზღვევა, რომელიც შესაბამის ტერიტორიაზე აღიარებულია.",

    noticeLabel: "გაფორმებამდე:",

    notice:
      "ჩვენ შევამოწმებთ ავტომობილის რეგისტრაციის ქვეყანას, დაგეგმილ მარშრუტსა და დაზღვევის მოქმედების ტერიტორიას. არ უნდა ჩაითვალოს ავტომატურად, რომ ერთი პოლისი ყველა სატრანზიტო ქვეყანაში მოქმედებს.",

    primaryCta: "ევროპოლისის გაფორმება",

    secondaryCta: "დოკუმენტების შემოწმება",

    cardLabel: "ძირითადი პირობები",

    facts: [
      {
        label: "ავტომობილის რეგისტრაცია",
        value: "უცხოური სანომრე ნიშნები",
      },
      {
        label: "ტერიტორია",
        value: "პოლისში მითითებული ევროკავშირის ქვეყნები და შვეიცარია",
      },
      {
        label: "დაზღვევის ტიპი",
        value: "სასაზღვრო სამოქალაქო პასუხისმგებლობის დაზღვევა",
      },
      {
        label: "მიღება",
        value: "ელექტრონული პოლისი PDF ფორმატში",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "შესაძლებელია გაფორმება",
      title:
        "მრავალმხრივი შეთანხმების მონაწილე ქვეყნების ფარგლებს გარეთ რეგისტრირებული ავტომობილებისთვის",
      text:
        "ევროპოლისი შეიძლება გაფორმდეს უცხოური სანომრე ნიშნების მქონე ავტომობილისთვის, თუ მისი რეგისტრაციის ქვეყანა და ავტომობილის მონაცემები აკმაყოფილებს მზღვეველის მოთხოვნებს. პოლისის გაცემამდე ვამოწმებთ სარეგისტრაციო დოკუმენტს და დაზღვევის გაფორმების შესაძლებლობას.",
    },
    {
      tone: "warning",
      label: "საჭიროა შემოწმება",
      title: "რეგისტრაციის ქვეყანა და მოგზაურობის მარშრუტი",
      text:
        "დაზღვევის გაფორმების შესაძლებლობა დამოკიდებულია ავტომობილის რეგისტრაციის ქვეყანაზე. გარდა ამისა, ევროკავშირის ქვეყნებში მოქმედი დაზღვევა აუცილებელი არ არის ყველა სატრანზიტო ქვეყანაშიც მოქმედებდეს.",
    },
    {
      tone: "no",
      label: "არ ფარავს",
      title: "საკუთარი ავტომობილის დაზიანებას",
      text:
        "ევროპოლისი წარმოადგენს მესამე პირების წინაშე სამოქალაქო პასუხისმგებლობის დაზღვევას. ის არ არის კასკო და არ ფარავს დაზღვეული ავტომობილის დაზიანებას, ტექნიკურ გაუმართაობას, ქურდობას ან ვანდალიზმს.",
    },
  ],

  suitability: {
    eyebrow: "ვისთვის არის განკუთვნილი",

    title: "როდის შეიძლება ევროპოლისის გაფორმება",

    text:
      "ევროპოლისი განკუთვნილია უცხოეთში რეგისტრირებული ავტომობილის სამოქალაქო პასუხისმგებლობის დროებითი დაზღვევისთვის იმ ტერიტორიაზე მოგზაურობისას, რომელიც მითითებულია სადაზღვევო დოკუმენტში.",

    yesTitle: "ევროპოლისი შეიძლება გამოგადგეთ",

    noTitle: "ევროპოლისი არ არის შესაფერისი",

    yesItems: [
      "ავტომობილი რეგისტრირებულია ქვეყანაში, რომლის ეროვნული სადაზღვევო ბიურო არ მონაწილეობს მრავალმხრივ შეთანხმებაში;",
      "დაგეგმილ მარშრუტში შედის ქვეყნები, რომლებიც შეთავაზებული პოლისის მოქმედების ტერიტორიაშია მითითებული;",
      "ავტომობილს არ გააჩნია სხვა მოქმედი დაზღვევა, რომელიც საკმარისია მოცემული მარშრუტისთვის;",
      "არსებობს ავტომობილის მკაფიო და წაკითხვადი სარეგისტრაციო დოკუმენტი;",
      "ავტომობილის მონაცემების დადასტურება შესაძლებელია დოკუმენტებით;",
      "პოლისი ფორმდება საჭირო სადაზღვევო პერიოდის დაწყებამდე;",
    ],

    noItems: [
      "ავტომობილი რეგისტრირებულია ევროპის ეკონომიკური სივრცის ქვეყანაში, ანდორაში, ბოსნია და ჰერცეგოვინაში, მონტენეგროში, სერბეთში, შვეიცარიაში ან გაერთიანებულ სამეფოში;",
      "გჭირდებათ საკუთარი ავტომობილის დაზიანების დაზღვევა;",
      "დაზღვევა საჭიროა მხოლოდ იმ ქვეყნისთვის, რომელიც შეთავაზებული პოლისის მოქმედების ტერიტორიაში არ შედის;",
      "გჭირდებათ დაზღვევის უკანა რიცხვით გაფორმება;",
      "ავტომობილის სარეგისტრაციო მონაცემების დადასტურება დოკუმენტებით შეუძლებელია;",
      "ავტომობილის მონაცემები არ აკმაყოფილებს მზღვეველის მოთხოვნებს პოლისის გასაცემად;",
    ],
  },

  routeWarning: {
    eyebrow: "მოგზაურობის მარშრუტი",

    title: "შეამოწმეთ დაზღვევა მარშრუტის თითოეული ქვეყნისთვის",

    text:
      "ევროპაში მოგზაურობისას ავტომობილმა შეიძლება რამდენიმე ქვეყანა გაიაროს. ევროპოლისის მოქმედების ტერიტორია განისაზღვრება გაცემული სადაზღვევო დოკუმენტით, ამიტომ დაფარვა უნდა შემოწმდეს არა მხოლოდ დანიშნულების ქვეყნისთვის, არამედ ყველა სატრანზიტო ქვეყნისთვისაც.",

    cta: "მარშრუტის შემოწმება",
  },

  coverage: {
    eyebrow: "მოქმედების ტერიტორია",

    title: "სად მოქმედებს ჩვენი ევროპოლისი",

    text:
      "დაზღვევის მოქმედების ტერიტორია პირდაპირ არის მითითებული გაცემულ პოლისში. სწორედ სადაზღვევო დოკუმენტია საბოლოო დასტური იმისა, თუ რომელ ქვეყნებში მოქმედებს დაზღვევა.",

    listLabel: "ქვეყნები, რომლებიც შეთავაზებული პოლისის დაფარვაში შედის",

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
      "ლიტვა",
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

    warningTitle: "ტრანზიტისთვის შეიძლება ცალკე დაზღვევა გახდეს საჭირო",

    warningText:
      "თუ თურქეთი, სერბეთი, ჩრდილოეთ მაკედონია, მონტენეგრო, ბოსნია და ჰერცეგოვინა, ალბანეთი, კოსოვო ან მარშრუტის სხვა ქვეყანა სადაზღვევო დოკუმენტში არ არის მითითებული, არ უნდა ჩაითვალოს, რომ ევროპოლისი ამ ქვეყნის ტერიტორიაზეც მოქმედებს.",

    warningNote:
      "მარშრუტის ასეთი მონაკვეთისთვის შეიძლება საჭირო გახდეს ცალკე ადგილობრივი სასაზღვრო დაზღვევა, მწვანე ბარათი ან შესაბამისი ქვეყნის მიერ აღიარებული სხვა სადაზღვევო დოკუმენტი.",
  },

  documents: {
    eyebrow: "დოკუმენტები",

    title: "რა არის საჭირო ევროპოლისის გასაფორმებლად",

    text:
      "ავტომობილის მონაცემები მოწმდება სარეგისტრაციო დოკუმენტის მიხედვით. სარეგისტრაციო ნომერი, VIN ან ძარის ნომერი, მარკა, მოდელი და მფლობელის მონაცემები უნდა იძლეოდეს ავტომობილის ერთმნიშვნელოვნად იდენტიფიცირების შესაძლებლობას.",

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
      "პასპორტი ან პირადობის დამადასტურებელი სხვა საჭირო დოკუმენტი;",
      "სახელი და გვარი ლათინური ასოებით;",
      "ელფოსტა პოლისის მისაღებად;",
      "ტელეფონის ნომერი ან მესენჯერი;",
      "დაზღვევის დაწყების თარიღი;",
      "დაზღვევის საჭირო პერიოდი;",
      "დაგეგმილი მარშრუტი;",
    ],
  },

  price: {
    eyebrow: "ღირებულება",

    title: "რა ღირს ევროპოლისი",

    text:
      "ღირებულება დამოკიდებულია სატრანსპორტო საშუალების კატეგორიაზე, დაზღვევის საჭირო ვადაზე და მზღვეველის მოქმედ ტარიფზე. გაფორმების საბოლოო შესაძლებლობასა და ღირებულებას ავტომობილის მონაცემების შემოწმების შემდეგ ვადასტურებთ.",

    factors: [
      "სატრანსპორტო საშუალების კატეგორია;",
      "დაზღვევის პერიოდი;",
      "პოლისის მოქმედების დაწყების თარიღი;",
      "ავტომობილის რეგისტრაციის ქვეყანა;",
      "ავტომობილის შესაბამისობა მზღვეველის მოთხოვნებთან;",
    ],
  },

  timing: {
    eyebrow: "გაფორმების ვადა",

    title: "როდის უნდა შეუკვეთოთ ევროპოლისი",

    text:
      "განაცხადის გაგზავნა რეკომენდებულია წინასწარ, მოგზაურობის დაწყებამდე ან იმ თარიღამდე, საიდანაც სადაზღვევო დაფარვა გჭირდებათ. დრო საჭიროა დოკუმენტების შესამოწმებლად, ღირებულების გამოსათვლელად და სადაზღვევო დოკუმენტის გასაცემად.",

    notice:
      "ევროპოლისი უკანა რიცხვით არ ფორმდება. შესაბამის ტერიტორიაზე ავტომობილის გამოყენების დაწყებამდე სადაზღვევო პოლისი უკვე ძალაში უნდა იყოს.",
  },

  steps: {
    eyebrow: "ონლაინ გაფორმება",

    title: "როგორ შევიძინოთ ევროპოლისი ონლაინ",

    items: [
      {
        title: "მიუთითეთ რეგისტრაციის ქვეყანა",
        text:
          "გვაცნობეთ, რომელ ქვეყანაშია ავტომობილი რეგისტრირებული.",
      },
      {
        title: "მიუთითეთ მარშრუტი და თარიღები",
        text:
          "გვაცნობეთ მოგზაურობის ქვეყნები, დაზღვევის დაწყების თარიღი და საჭირო პერიოდი.",
      },
      {
        title: "ატვირთეთ დოკუმენტები",
        text:
          "ატვირთეთ ავტომობილის სარეგისტრაციო დოკუმენტი და დამზღვევის საჭირო მონაცემები.",
      },
      {
        title: "მიიღეთ დადასტურება",
        text:
          "ჩვენ შევამოწმებთ ავტომობილს, დოკუმენტებს, მარშრუტსა და ევროპოლისის გაფორმების შესაძლებლობას.",
      },
      {
        title: "გადაიხადეთ და მიიღეთ პოლისი",
        text:
          "ღირებულების დადასტურებისა და გადახდის შემდეგ მზა სადაზღვევო დოკუმენტი თქვენს ელფოსტაზე PDF ფორმატში გამოიგზავნება.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "გაფორმების შემდეგ",

    title: "რა უნდა შეამოწმოთ ევროპოლისში მოგზაურობის დაწყებამდე",

    text:
      "პოლისის მიღების შემდეგ შეადარეთ მასში მითითებული მონაცემები ავტომობილის სარეგისტრაციო დოკუმენტს. შეცდომის აღმოჩენის შემთხვევაში ის პოლისის გამოყენებამდე უნდა გასწორდეს.",

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
    eyebrow: "FAQ",

    title: "ხშირად დასმული კითხვები ევროპოლისის შესახებ",

    items: [
      {
        q: "რა არის ევროპოლისი?",
        a:
          "ამ გვერდზე ევროპოლისი ნიშნავს უცხოური სანომრე ნიშნების მქონე ავტომობილის სასაზღვრო სამოქალაქო პასუხისმგებლობის დაზღვევას (OC graniczne). ეს არის მესამე პირების წინაშე პასუხისმგებლობის დაზღვევა და არა კასკო.",
      },
      {
        q: "შეიძლება ევროპოლისის ონლაინ შეძენა?",
        a:
          "დიახ. დოკუმენტების გადმოგზავნა შესაძლებელია დისტანციურად. მონაცემების შემოწმების, გაფორმების შესაძლებლობის დადასტურებისა და გადახდის შემდეგ მზა სადაზღვევო დოკუმენტი თქვენს ელფოსტაზე PDF ფორმატში გამოიგზავნება.",
      },
      {
        q: "ევროპოლისი და მწვანე ბარათი ერთი და იგივეა?",
        a:
          "არა. მწვანე ბარათი წარმოადგენს Green Card სისტემის საერთაშორისო სადაზღვევო სერტიფიკატს. ევროპოლისი, როგორც ამ გვერდზეა გამოყენებული, არის სასაზღვრო სამოქალაქო პასუხისმგებლობის დაზღვევა (OC graniczne). კონკრეტულად რომელი დოკუმენტი სჭირდება თქვენს ავტომობილს, დამოკიდებულია რეგისტრაციის ქვეყანასა და მარშრუტზე.",
      },
      {
        q: "რომელ ქვეყნებში რეგისტრირებული ავტომობილებისთვის შეიძლება ევროპოლისის გაფორმება?",
        a:
          "გაფორმების შესაძლებლობა დამოკიდებულია ავტომობილის რეგისტრაციის ქვეყანასა და მზღვეველის მოთხოვნებზე. გამოგვიგზავნეთ ავტომობილის სარეგისტრაციო დოკუმენტი და გადახდამდე შევამოწმებთ პოლისის გაცემის შესაძლებლობას.",
      },
      {
        q: "შეიძლება ევროპოლისის გაფორმება რუსული სანომრე ნიშნების მქონე ავტომობილისთვის?",
        a:
          "გაფორმების შესაძლებლობა უნდა დადასტურდეს მზღვეველის მოქმედი პირობების შესაბამისად. გამოგვიგზავნეთ ავტომობილის სარეგისტრაციო დოკუმენტი და მოგზაურობის მარშრუტი — შევამოწმებთ პოლისის გაცემის შესაძლებლობას.",
      },
      {
        q: "შეიძლება ევროპოლისის გაფორმება ბელარუსული სანომრე ნიშნების მქონე ავტომობილისთვის?",
        a:
          "გაფორმების შესაძლებლობა მოწმდება ავტომობილის სარეგისტრაციო დოკუმენტის, მისი კატეგორიისა და დაგეგმილი მარშრუტის მიხედვით. შემოწმების შემდეგ დავადასტურებთ პოლისის გაცემის შესაძლებლობას და ღირებულებას.",
      },
      {
        q: "რომელ ქვეყნებში მოქმედებს ევროპოლისი?",
        a:
          "ევროპოლისი მოქმედებს მხოლოდ იმ ტერიტორიაზე, რომელიც პირდაპირ არის მითითებული გაცემულ სადაზღვევო დოკუმენტში. მოგზაურობის დაწყებამდე შეამოწმეთ, რომ ყველა საჭირო ქვეყანა პოლისშია შეტანილი.",
      },
      {
        q: "მჭირდება ცალკე დაზღვევა თურქეთისთვის?",
        a:
          "დიახ. თურქეთი გაცემული პოლისის მოქმედების ტერიტორიაში არ შედის, ამიტომ მის ტერიტორიაზე ავტომობილით გადაადგილებისთვის დაგჭირდებათ თურქეთში აღიარებული ცალკე სადაზღვევო დოკუმენტი.",
      },
      {
        q: "რა დოკუმენტებია საჭირო ევროპოლისის გასაფორმებლად?",
        a:
          "როგორც წესი, საჭიროა ავტომობილის სარეგისტრაციო დოკუმენტი და დამზღვევის მონაცემები. დამატებით მოწმდება სარეგისტრაციო ნომერი, VIN ან ძარის ნომერი, მარკა, მოდელი, ავტომობილის კატეგორია, დაზღვევის დაწყების თარიღი და მარშრუტი.",
      },
      {
        q: "შეიძლება ევროპოლისის ელექტრონულად მიღება?",
        a:
          "დიახ. მონაცემების შემოწმების, გადახდისა და პოლისის გაცემის შემდეგ სადაზღვევო დოკუმენტი მითითებულ ელფოსტაზე PDF ფორმატში იგზავნება.",
      },
      {
        q: "ფარავს ევროპოლისი ჩემი ავტომობილის შეკეთებას?",
        a:
          "არა. ევროპოლისი ფარავს მესამე პირების წინაშე სამოქალაქო პასუხისმგებლობას. საკუთარი ავტომობილის დაზიანება კასკოს დაზღვევის საგანია.",
      },
    ],
  },

  carousel: {
    title: "დაზღვევა ევროპაში მოგზაურობისთვის",

    cardTitle: "დაზღვევა უცხოური სანომრე ნიშნების მქონე ავტომობილისთვის",

    cardText:
      "სასაზღვრო სამოქალაქო პასუხისმგებლობის დაზღვევა დროებითი მოგზაურობისთვის ევროპის იმ ქვეყნებში, რომლებიც პოლისის მოქმედების ტერიტორიაში შედის.",

    cta: "დეტალურად",
  },

  finalCta: {
    eyebrow: "ონლაინ გაფორმება",

    title: "გააფორმეთ ევროპოლისი თქვენი ავტომობილისთვის",

    text:
      "ატვირთეთ ავტომობილის სარეგისტრაციო დოკუმენტი და მიუთითეთ რეგისტრაციის ქვეყანა, მარშრუტი, დაზღვევის დაწყების თარიღი და საჭირო პერიოდი. ჩვენ შევამოწმებთ გაფორმების შესაძლებლობას, გამოვთვლით ღირებულებას და მოგაწვდით გადახდის პირობებს.",

    button: "ევროპოლისის გაფორმება",
  },
};

const uk: UaeOcDictionary = {
  seo: {
    title: "Купити Європоліс онлайн — автострахування в Європі",
    description:
      "Європоліс для автомобіля з іноземними номерами: оформлення прикордонного страхування онлайн для поїздки Європою. Перевіримо документи, маршрут і територію дії, розрахуємо вартість та надішлемо поліс у PDF.",
  },

  breadcrumbTitle: "Європоліс для поїздки до Європи",

  hero: {
    eyebrow: "Автомобіль з іноземними номерами → Європа",

    title: "Європоліс на автомобіль — оформлення онлайн",

    lead:
      "Європоліс — назва, що використовується на цій сторінці для прикордонного страхування цивільної відповідальності (OC graniczne) автомобіля з іноземними реєстраційними номерами. Такий поліс може знадобитися для тимчасового використання автомобіля в країнах Європи, якщо він не має іншого чинного страхування, яке визнається на відповідній території.",

    noticeLabel: "Перед оформленням:",

    notice:
      "Ми перевіримо країну реєстрації автомобіля, запланований маршрут і територію дії страхування. Не слід автоматично вважати, що один поліс діє в усіх транзитних країнах.",

    primaryCta: "Оформити Європоліс",

    secondaryCta: "Перевірити документи",

    cardLabel: "Основні умови",

    facts: [
      {
        label: "Реєстрація автомобіля",
        value: "Іноземні реєстраційні номери",
      },
      {
        label: "Територія",
        value: "Країни ЄС і Швейцарія, зазначені в полісі",
      },
      {
        label: "Тип страхування",
        value: "Прикордонне страхування OC",
      },
      {
        label: "Отримання",
        value: "Електронний поліс у PDF",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Можна оформити",
      title:
        "Для автомобіля, зареєстрованого за межами країн Багатосторонньої угоди",
      text:
        "Європоліс може бути оформлений для автомобіля з іноземними номерами, якщо країна його реєстрації та параметри автомобіля відповідають умовам страховика. Перед випуском ми перевіряємо реєстраційний документ і можливість оформлення.",
    },
    {
      tone: "warning",
      label: "Потрібно перевірити",
      title: "Країну реєстрації та маршрут поїздки",
      text:
        "Можливість оформлення залежить від країни реєстрації автомобіля. Крім того, страхування, що діє в країнах ЄС, не обов’язково поширюється на всі транзитні держави.",
    },
    {
      tone: "no",
      label: "Не покриває",
      title: "Пошкодження власного автомобіля",
      text:
        "Європоліс є страхуванням цивільної відповідальності перед третіми особами. Він не є КАСКО та не покриває пошкодження, поломку, викрадення або вандалізм щодо самого застрахованого автомобіля.",
    },
  ],

  suitability: {
    eyebrow: "Кому підходить",

    title: "Коли можна оформити Європоліс",

    text:
      "Європоліс призначений для тимчасового страхування цивільної відповідальності іноземного автомобіля під час поїздки територією, зазначеною в страховому документі.",

    yesTitle: "Європоліс може підійти",

    noTitle: "Європоліс не підходить",

    yesItems: [
      "автомобіль зареєстрований у країні, національне страхове бюро якої не бере участі в Багатосторонній угоді;",
      "до маршруту входять країни, зазначені в території дії запропонованого поліса;",
      "автомобіль не має іншого чинного страхування, достатнього для цього маршруту;",
      "є читабельний реєстраційний документ автомобіля;",
      "дані автомобіля можна підтвердити документами;",
      "поліс оформлюється до початку необхідного періоду страхування;",
    ],

    noItems: [
      "автомобіль зареєстрований у державі ЄЕЗ, Андоррі, Боснії і Герцеговині, Чорногорії, Сербії, Швейцарії або Великій Британії;",
      "необхідно застрахувати пошкодження власного автомобіля;",
      "страхування потрібне лише для країни, яка не входить до території дії запропонованого поліса;",
      "потрібно оформити страхування заднім числом;",
      "реєстраційні дані автомобіля неможливо підтвердити документами;",
      "дані автомобіля не відповідають вимогам страховика для випуску поліса;",
    ],
  },

  routeWarning: {
    eyebrow: "Маршрут поїздки",

    title: "Перевірте страхування для кожної країни маршруту",

    text:
      "Під час поїздки Європою автомобіль може перетинати кілька держав. Територія дії Європоліса визначається виданим страховим документом, тому наявність покриття необхідно перевірити не лише для країни призначення, а й для транзитних країн.",

    cta: "Перевірити маршрут",
  },

  coverage: {
    eyebrow: "Територія дії",

    title: "Де діє наш Європоліс",

    text:
      "Територія страхування зазначається безпосередньо у виданому полісі. Саме страховий документ є остаточним підтвердженням того, у яких країнах діє страхування.",

    listLabel: "Країни, що входять до покриття запропонованого поліса",

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

    warningTitle: "Транзит може потребувати окремого страхування",

    warningText:
      "Якщо Туреччина, Сербія, Північна Македонія, Чорногорія, Боснія і Герцеговина, Албанія, Косово або інша країна маршруту не зазначена у страховому документі, не можна розраховувати на дію Європоліса на її території.",

    warningNote:
      "Для такої ділянки маршруту може знадобитися окреме місцеве прикордонне страхування, Зелена картка або інший страховий документ, який визнається відповідною державою.",
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
      "ім’я та прізвище латиницею;",
      "email для отримання поліса;",
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
      "Заявку рекомендується надсилати заздалегідь, до початку поїздки або до дати, з якої потрібне страхове покриття. Час необхідний для перевірки документів, розрахунку вартості та випуску страхового документа.",

    notice:
      "Європоліс не оформлюється заднім числом. До початку використання автомобіля на відповідній території страховий поліс уже має набути чинності.",
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
        title: "Сплатіть і отримайте поліс",
        text:
          "Після підтвердження вартості та оплати готовий страховий документ буде надісланий на email у форматі PDF.",
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
    eyebrow: "FAQ",

    title: "Питання про Європоліс",

    items: [
      {
        q: "Що таке Європоліс?",
        a:
          "На цій сторінці під Європолісом мається на увазі прикордонне страхування цивільної відповідальності OC graniczne для автомобіля з іноземними реєстраційними номерами. Це страхування відповідальності перед третіми особами, а не КАСКО.",
      },
      {
        q: "Чи можна купити Європоліс онлайн?",
        a:
          "Так. Документи можна передати дистанційно. Після перевірки даних, підтвердження можливості оформлення та оплати готовий страховий документ надсилається на email у форматі PDF.",
      },
      {
        q: "Європоліс і Зелена картка — це одне й те саме?",
        a:
          "Ні. Зелена картка є міжнародним страховим сертифікатом системи Green Card. Європоліс на цій сторінці — це прикордонне страхування OC graniczne. Який саме документ потрібен вашому автомобілю, залежить від країни реєстрації та маршруту.",
      },
      {
        q: "Для автомобілів з яких країн можна оформити Європоліс?",
        a:
          "Можливість оформлення визначається країною реєстрації автомобіля та умовами страховика. Надішліть реєстраційний документ автомобіля — ми перевіримо можливість випуску до оплати.",
      },
      {
        q: "Чи можна оформити Європоліс на автомобіль з російськими номерами?",
        a:
          "Можливість оформлення необхідно підтвердити за чинними умовами страховика. Надішліть реєстраційний документ автомобіля та маршрут поїздки — ми перевіримо можливість випуску поліса.",
      },
      {
        q: "Чи можна оформити Європоліс на автомобіль з білоруськими номерами?",
        a:
          "Можливість оформлення перевіряється за реєстраційним документом автомобіля, його категорією та запланованим маршрутом. Після перевірки ми підтвердимо можливість випуску та вартість.",
      },
      {
        q: "У яких країнах діє Європоліс?",
        a:
          "Європоліс діє лише на території, безпосередньо зазначеній у виданому страховому документі. Перед поїздкою необхідно перевірити наявність усіх потрібних країн у полісі.",
      },
      {
        q: "Чи потрібне окреме страхування для Туреччини?",
        a:
          "Так. Туреччина не входить до території дії виданого поліса, тому для руху її територією буде потрібен окремий страховий документ, який визнається в Туреччині.",
      },
      {
        q: "Які документи потрібні для оформлення Європоліса?",
        a:
          "Зазвичай потрібні реєстраційний документ автомобіля та дані страхувальника. Додатково перевіряються реєстраційний номер, VIN або номер кузова, марка, модель, категорія автомобіля, дата початку страхування та маршрут.",
      },
      {
        q: "Чи можна отримати Європоліс в електронному вигляді?",
        a:
          "Так. Після перевірки, оплати та випуску поліса страховий документ надсилається на зазначений email у форматі PDF.",
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

    cardTitle: "Страхування для автомобіля з іноземними номерами",

    cardText:
      "Прикордонне страхування цивільної відповідальності для тимчасової поїздки країнами Європи, що входять до території дії поліса.",

    cta: "Докладніше",
  },

  finalCta: {
    eyebrow: "Оформлення онлайн",

    title: "Оформити Європоліс на автомобіль",

    text:
      "Завантажте реєстраційний документ автомобіля, вкажіть країну реєстрації, маршрут, дату початку та необхідний строк страхування. Ми перевіримо можливість оформлення, розрахуємо вартість і повідомимо умови оплати.",

    button: "Оформити Європоліс",
  },
};

const dictionaries: Partial<Record<Lang, UaeOcDictionary>> = {
  ru,
  ka,
  en,
  uk,
};

export function getEuropolisDictionary(
  lang: Lang,
): UaeOcDictionary {
  return dictionaries[lang] ?? en;
}