import type { Lang } from "@/app/dictionaries/header";
import type { UaeOcDictionary } from "@/app/dictionaries/seo-landings/uaeOc";

const ru: UaeOcDictionary = {
  seo: {
    title: "Страховка для авто из ОАЭ в Греции — оформление онлайн",
    description:
      "Страхование автомобиля с номерами ОАЭ для поездки в Грецию. Проверка территории действия, маршрута и документов, расчёт и получение полиса в PDF.",
  },

  breadcrumbTitle: "Страховка для авто из ОАЭ в Греции",

  hero: {
    eyebrow: "ОАЭ → Греция",
    title: "Страховка для автомобиля из ОАЭ при поездке в Грецию",
    lead:
      "Для использования автомобиля, зарегистрированного в Объединённых Арабских Эмиратах, на территории Греции необходимо действующее страхование гражданской ответственности. Если имеющийся страховой документ не признаётся в Греции, для автомобиля может потребоваться пограничное страхование OC graniczne.",
    noticeLabel: "Главное:",
    notice:
      "до поездки необходимо проверить не только действие полиса в Греции, но и страховое покрытие на всём маршруте. Полис для стран Европейской экономической зоны не следует считать автоматически действующим в Турции и других транзитных государствах.",
    primaryCta: "Оформить страховку",
    secondaryCta: "Проверить документы",
    cardLabel: "Условия поездки",
    facts: [
      {
        label: "Страна регистрации",
        value: "ОАЭ",
      },
      {
        label: "Страна назначения",
        value: "Греция",
      },
      {
        label: "Тип страхования",
        value: "OC graniczne",
      },
      {
        label: "Получение",
        value: "PDF на email",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Можно оформить",
      title: "Для автомобиля с номерами ОАЭ",
      text:
        "Пограничное страхование может быть оформлено для автомобиля, зарегистрированного в ОАЭ, если он временно используется в Греции и соответствует условиям страховщика.",
    },
    {
      tone: "warning",
      label: "Нужно проверить",
      title: "Маршрут до Греции",
      text:
        "Страхование, действующее в Греции, не обязательно покрывает страны, через которые автомобиль следует из ОАЭ. Для каждого участка маршрута необходимо проверить отдельное страховое основание.",
    },
    {
      tone: "no",
      label: "Не покрывает",
      title: "Повреждение автомобиля владельца",
      text:
        "OC graniczne покрывает гражданскую ответственность перед третьими лицами. Оно не возмещает кражу, поломку, вандализм или повреждение самого застрахованного автомобиля.",
    },
  ],

  suitability: {
    eyebrow: "Применимость",
    title: "Когда подходит страховка ОАЭ → Греция",
    text:
      "Страница относится к автомобилям с регистрацией ОАЭ, которые временно въезжают в Грецию. Для транспортного средства, зарегистрированного в другой стране, применимость и документы нужно проверять отдельно.",
    yesTitle: "Полис может подойти",
    noTitle: "Полис не решает задачу",
    yesItems: [
      "автомобиль зарегистрирован в ОАЭ;",
      "Греция входит в планируемый маршрут;",
      "нет другого действующего полиса, признаваемого в Греции;",
      "имеется читаемый регистрационный документ автомобиля;",
      "полис оформляется до начала его использования;",
    ],
    noItems: [
      "автомобиль зарегистрирован в стране Европейской экономической зоны;",
      "необходимо застраховать ущерб собственному автомобилю;",
      "нужно покрытие только для Турции или другой страны вне территории полиса;",
      "требуется оформить страхование задним числом;",
      "регистрационные данные невозможно подтвердить документами;",
    ],
  },

  routeWarning: {
    eyebrow: "Маршрут в Грецию",
    title: "Проверьте способ въезда и транзитные страны",
    text:
      "В Грецию можно прибыть по сухопутному маршруту либо с использованием паромного сообщения. В зависимости от выбранного пути автомобиль может пересекать Турцию, Болгарию, Италию или другие страны. Страховой документ необходимо проверять отдельно для каждого государства маршрута.",
    cta: "Проверить маршрут",
  },

  coverage: {
    eyebrow: "Территория действия",
    title: "Действует ли OC graniczne в Греции",
    text:
      "Полис может использоваться в Греции, если Греция входит в указанную в документе территорию действия и поездка происходит в пределах установленного срока страхования. Окончательным подтверждением покрытия является выданный страховой документ.",
    listLabel: "Страны, которые могут входить в покрытие",
    countries: [
      "Греция",
      "Австрия",
      "Бельгия",
      "Болгария",
      "Кипр",
      "Чехия",
      "Германия",
      "Дания",
      "Испания",
      "Эстония",
      "Франция",
      "Финляндия",
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
    warningTitle: "Транзит может потребовать отдельного полиса",
    warningText:
      "Если Турция, Сербия, Северная Македония, Черногория, Босния и Герцеговина, Албания, Косово или другая страна маршрута не указана в страховом документе, рассчитывать на действие полиса в ней нельзя.",
    warningNote:
      "Для такой части поездки может потребоваться местное пограничное страхование или иной документ, признаваемый соответствующим государством.",
  },

  documents: {
    eyebrow: "Документы",
    title: "Что нужно для оформления страховки",
    text:
      "Сведения об автомобиле проверяются по регистрационному документу ОАЭ. Если часть информации указана только на арабском языке, регистрационный номер, VIN, марка, модель и данные владельца должны позволять однозначно идентифицировать автомобиль.",
    vehicleTitle: "Документы автомобиля",
    policyholderTitle: "Данные страхователя",
    vehicleItems: [
      "регистрационный документ автомобиля;",
      "регистрационный номер ОАЭ;",
      "VIN или номер кузова;",
      "марка и модель;",
      "тип транспортного средства;",
      "год выпуска;",
      "страна регистрации — ОАЭ;",
    ],
    policyholderItems: [
      "паспорт или другой документ, удостоверяющий личность;",
      "имя и фамилия латиницей;",
      "email для получения PDF;",
      "номер телефона или мессенджер;",
      "дата въезда или начала использования автомобиля;",
      "необходимый срок страхования;",
      "предполагаемый маршрут в Грецию;",
    ],
  },

  price: {
    eyebrow: "Стоимость",
    title: "Сколько стоит страховка для поездки в Грецию",
    text:
      "Стоимость рассчитывается с учётом категории автомобиля, срока действия полиса и тарифа страховщика. Окончательная цена и возможность оформления подтверждаются после проверки регистрационного документа.",
    factors: [
      "категория транспортного средства;",
      "продолжительность страхования;",
      "дата начала действия полиса;",
      "страна регистрации автомобиля;",
      "корректность и читаемость документов;",
    ],
  },

  timing: {
    eyebrow: "Срок оформления",
    title: "Когда отправлять заявку",
    text:
      "Заявку рекомендуется отправить за 1–2 рабочих дня до въезда в Грецию или до начала действия необходимого покрытия. Дополнительное время может понадобиться для проверки документа ОАЭ и латинского написания данных.",
    notice:
      "Страхование не оформляется задним числом. На момент использования автомобиля в Греции срок действия полиса уже должен начаться.",
  },

  steps: {
    eyebrow: "Порядок оформления",
    title: "Как получить полис для поездки в Грецию",
    items: [
      {
        title: "Укажите направление",
        text:
          "Выберите ОАЭ как страну регистрации автомобиля и Грецию как страну назначения.",
      },
      {
        title: "Сообщите маршрут",
        text:
          "Укажите страны транзита и предполагаемый способ въезда в Грецию.",
      },
      {
        title: "Загрузите документы",
        text:
          "Приложите регистрационный документ автомобиля и данные страхователя.",
      },
      {
        title: "Дождитесь проверки",
        text:
          "Мы проверим VIN, регистрационный номер, категорию автомобиля и возможность оформления.",
      },
      {
        title: "Оплатите и получите полис",
        text:
          "После подтверждения и оплаты готовый страховой документ будет отправлен на email в формате PDF.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Перед поездкой",
    title: "Что проверить перед въездом в Грецию",
    text:
      "Сверьте сведения в полисе с регистрационным документом автомобиля. При наличии ошибки использовать документ до её исправления не следует.",
    items: [
      "регистрационный номер автомобиля;",
      "VIN или номер кузова;",
      "страна регистрации — ОАЭ;",
      "марка и модель;",
      "категория транспортного средства;",
      "дата начала действия;",
      "дата окончания действия;",
      "наличие Греции в территории покрытия;",
      "данные страхователя;",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Вопросы о страховке ОАЭ → Греция",
    items: [
      {
        q: "Можно ли оформить страховку для автомобиля из ОАЭ для поездки в Грецию?",
        a:
          "Да. Возможность оформления пограничного страхования для автомобиля с регистрацией ОАЭ определяется после проверки документов, категории транспортного средства и планируемого маршрута.",
      },
      {
        q: "Действует ли OC graniczne в Греции?",
        a:
          "Да, если Греция включена в территорию действия, указанную в выданном страховом документе, а срок действия полиса уже начался.",
      },
      {
        q: "Покрывает ли полис весь маршрут от ОАЭ до Греции?",
        a:
          "Не обязательно. Полис, действующий в Греции и странах Европейской экономической зоны, не следует считать автоматически действующим во всех транзитных государствах.",
      },
      {
        q: "Нужна ли отдельная страховка для Турции?",
        a:
          "Если Турция не указана в страховом документе как территория действия, для проезда по её территории потребуется другой признаваемый страховой документ.",
      },
      {
        q: "Можно ли въехать в Грецию через Болгарию с одним полисом?",
        a:
          "Это возможно, если и Болгария, и Греция входят в территорию действия конкретного полиса. Покрытие нужно проверять непосредственно по выданному документу.",
      },
      {
        q: "Действует ли страховка при прибытии в Грецию на пароме?",
        a:
          "Способ прибытия сам по себе не заменяет страхование. Для движения после выгрузки автомобиля в Греции полис должен действовать на территории Греции.",
      },
      {
        q: "Какие документы нужны для оформления?",
        a:
          "Нужны регистрационный документ автомобиля, регистрационный номер, VIN, марка и модель, категория транспортного средства, а также данные страхователя.",
      },
      {
        q: "Можно ли получить полис в электронном виде?",
        a:
          "После проверки данных, оплаты и выпуска страховой документ направляется на указанный email в формате PDF.",
      },
      {
        q: "Покрывает ли полис ремонт автомобиля из ОАЭ?",
        a:
          "Нет. OC graniczne страхует ответственность перед третьими лицами и не является страхованием КАСКО.",
      },
    ],
  },

  carousel: {
    title: "Страхование по маршрутам",
    cardTitle: "Страховка для авто из ОАЭ в Греции",
    cardText:
      "Страхование гражданской ответственности для автомобиля с номерами ОАЭ при временной поездке в Грецию.",
    cta: "Открыть страницу",
  },

  finalCta: {
    eyebrow: "Оформление",
    title: "Отправьте заявку на страховку для поездки в Грецию",
    text:
      "Подготовьте регистрационный документ автомобиля, укажите дату начала страхования и сообщите маршрут. После проверки данных вы получите расчёт и инструкции по оплате.",
    button: "Отправить заявку",
  },
};

const ar: UaeOcDictionary = {
  seo: {
    title: "تأمين سيارة مسجّلة في الإمارات داخل اليونان — إصدار الوثيقة عبر الإنترنت",
    description:
      "تأمين سيارة تحمل لوحات إماراتية للسفر إلى اليونان. التحقق من نطاق التغطية وخط الرحلة والمستندات، وحساب التكلفة، واستلام الوثيقة بصيغة PDF.",
  },

  breadcrumbTitle: "تأمين سيارة مسجّلة في الإمارات داخل اليونان",

  hero: {
    eyebrow: "الإمارات → اليونان",
    title: "تأمين سيارة مسجّلة في الإمارات عند السفر إلى اليونان",
    lead:
      "لاستخدام سيارة مسجّلة في دولة الإمارات العربية المتحدة داخل اليونان، يجب أن تكون مشمولة بتأمين ساري للمسؤولية المدنية تجاه الغير. وإذا لم تكن وثيقة التأمين الحالية معترفًا بها في اليونان، فقد تحتاج السيارة إلى تأمين حدودي (OC graniczne).",
    noticeLabel: "تنبيه مهم:",
    notice:
      "قبل السفر، يجب التحقق ليس فقط من سريان الوثيقة في اليونان، بل أيضًا من وجود تغطية تأمينية على امتداد خط الرحلة بالكامل. ولا يجوز افتراض أن الوثيقة السارية في دول المنطقة الاقتصادية الأوروبية تغطي تلقائيًا تركيا أو غيرها من دول العبور.",
    primaryCta: "إصدار التأمين",
    secondaryCta: "التحقق من المستندات",
    cardLabel: "بيانات الرحلة",
    facts: [
      {
        label: "بلد التسجيل",
        value: "الإمارات",
      },
      {
        label: "بلد الوجهة",
        value: "اليونان",
      },
      {
        label: "نوع التأمين",
        value: "التأمين الحدودي",
      },
      {
        label: "طريقة الاستلام",
        value: "PDF عبر البريد الإلكتروني",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "يمكن الإصدار",
      title: "للسيارات التي تحمل لوحات إماراتية",
      text:
        "يمكن إصدار تأمين حدودي لسيارة مسجّلة في الإمارات إذا كانت تُستخدم مؤقتًا في اليونان وتستوفي شروط شركة التأمين.",
    },
    {
      tone: "warning",
      label: "يجب التحقق",
      title: "خط الرحلة إلى اليونان",
      text:
        "لا يعني سريان التأمين في اليونان بالضرورة أنه يغطي الدول التي تعبرها السيارة في طريقها من الإمارات. ويجب التحقق من الأساس التأميني لكل جزء من الرحلة على حدة.",
    },
    {
      tone: "no",
      label: "غير مشمول",
      title: "الأضرار التي تلحق بسيارة المالك",
      text:
        "يغطي التأمين الحدودي المسؤولية المدنية تجاه الغير، ولا يعوّض عن سرقة السيارة أو أعطالها أو أعمال التخريب أو الأضرار التي تلحق بالمركبة المؤمن عليها نفسها.",
    },
  ],

  suitability: {
    eyebrow: "مدى الملاءمة",
    title: "متى يكون تأمين الإمارات → اليونان مناسبًا؟",
    text:
      "تخص هذه الصفحة السيارات المسجّلة في الإمارات والتي تدخل اليونان بصورة مؤقتة. أما المركبات المسجّلة في دول أخرى، فيجب التحقق من مدى انطباق الشروط والمستندات المطلوبة عليها بصورة منفصلة.",
    yesTitle: "قد تكون هذه الوثيقة مناسبة",
    noTitle: "هذه الوثيقة لا تحقق الغرض المطلوب",
    yesItems: [
      "السيارة مسجّلة في الإمارات؛",
      "اليونان ضمن خط الرحلة المخطط؛",
      "لا توجد وثيقة تأمين أخرى سارية ومعترف بها في اليونان؛",
      "تتوفر وثيقة تسجيل واضحة ومقروءة للسيارة؛",
      "تُصدر الوثيقة قبل بدء استخدام السيارة؛",
    ],
    noItems: [
      "السيارة مسجّلة في إحدى دول المنطقة الاقتصادية الأوروبية؛",
      "تحتاج إلى تغطية الأضرار التي تلحق بسيارتك؛",
      "تحتاج إلى تغطية لتركيا وحدها أو لدولة أخرى تقع خارج النطاق الجغرافي للوثيقة؛",
      "تطلب إصدار التأمين بأثر رجعي؛",
      "يتعذر إثبات بيانات التسجيل بالمستندات؛",
    ],
  },

  routeWarning: {
    eyebrow: "خط الرحلة إلى اليونان",
    title: "تحقّق من طريقة الدخول ودول العبور",
    text:
      "يمكن الوصول إلى اليونان برًا أو باستخدام العبارات البحرية. وبحسب المسار المختار، قد تمر السيارة عبر تركيا أو بلغاريا أو إيطاليا أو دول أخرى. لذلك يجب التحقق من صلاحية وثيقة التأمين لكل دولة على خط الرحلة بصورة منفصلة.",
    cta: "التحقق من خط الرحلة",
  },

  coverage: {
    eyebrow: "نطاق التغطية الجغرافي",
    title: "هل يسري التأمين الحدودي في اليونان؟",
    text:
      "يمكن استخدام الوثيقة في اليونان إذا كانت اليونان مدرجة ضمن النطاق الجغرافي المبين فيها، وكانت الرحلة تتم خلال مدة التأمين المحددة. وتبقى وثيقة التأمين الصادرة هي المرجع النهائي لإثبات التغطية.",
    listLabel: "الدول التي قد تكون مشمولة بالتغطية",
    countries: [
      "اليونان",
      "النمسا",
      "بلجيكا",
      "بلغاريا",
      "قبرص",
      "التشيك",
      "ألمانيا",
      "الدنمارك",
      "إسبانيا",
      "إستونيا",
      "فرنسا",
      "فنلندا",
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
    warningTitle: "قد يتطلب العبور وثيقة تأمين منفصلة",
    warningText:
      "إذا لم تكن تركيا أو صربيا أو مقدونيا الشمالية أو الجبل الأسود أو البوسنة والهرسك أو ألبانيا أو كوسوفو أو أي دولة أخرى على خط الرحلة مدرجة في وثيقة التأمين، فلا يجوز الاعتماد على سريان الوثيقة فيها.",
    warningNote:
      "قد يتطلب هذا الجزء من الرحلة تأمينًا حدوديًا محليًا أو وثيقة أخرى معترفًا بها من الدولة المعنية.",
  },

  documents: {
    eyebrow: "المستندات",
    title: "المستندات المطلوبة لإصدار التأمين",
    text:
      "تُراجع بيانات السيارة استنادًا إلى وثيقة التسجيل الإماراتية. وإذا كانت بعض المعلومات واردة باللغة العربية فقط، فيجب أن يتيح رقم التسجيل ورقم الهيكل VIN والعلامة التجارية والطراز وبيانات المالك تحديد السيارة بصورة واضحة لا لبس فيها.",
    vehicleTitle: "مستندات السيارة",
    policyholderTitle: "بيانات طالب التأمين",
    vehicleItems: [
      "وثيقة تسجيل السيارة؛",
      "رقم التسجيل الإماراتي؛",
      "رقم الهيكل VIN أو رقم الشاسيه؛",
      "العلامة التجارية والطراز؛",
      "نوع المركبة؛",
      "سنة الصنع؛",
      "بلد التسجيل — الإمارات؛",
    ],
    policyholderItems: [
      "جواز السفر أو وثيقة أخرى لإثبات الهوية؛",
      "الاسم الأول واسم العائلة بالأحرف اللاتينية؛",
      "البريد الإلكتروني لاستلام ملف PDF؛",
      "رقم الهاتف أو وسيلة التواصل عبر تطبيقات المراسلة؛",
      "تاريخ الدخول أو بدء استخدام السيارة؛",
      "مدة التأمين المطلوبة؛",
      "خط الرحلة المتوقع إلى اليونان؛",
    ],
  },

  price: {
    eyebrow: "التكلفة",
    title: "كم تبلغ تكلفة التأمين للسفر إلى اليونان؟",
    text:
      "تُحسب التكلفة وفقًا لفئة السيارة ومدة سريان الوثيقة وتعرفة شركة التأمين. ولا تُؤكد التكلفة النهائية وإمكانية الإصدار إلا بعد مراجعة وثيقة التسجيل.",
    factors: [
      "فئة المركبة؛",
      "مدة التأمين؛",
      "تاريخ بدء سريان الوثيقة؛",
      "بلد تسجيل السيارة؛",
      "صحة المستندات ووضوحها؛",
    ],
  },

  timing: {
    eyebrow: "مدة الإصدار",
    title: "متى ينبغي إرسال الطلب؟",
    text:
      "يُنصح بإرسال الطلب قبل دخول اليونان أو قبل بدء التغطية المطلوبة بيوم أو يومي عمل. وقد يلزم وقت إضافي لمراجعة الوثيقة الإماراتية والتحقق من كتابة البيانات بالأحرف اللاتينية.",
    notice:
      "لا يمكن إصدار التأمين بأثر رجعي. ويجب أن تكون مدة سريان الوثيقة قد بدأت بالفعل عند استخدام السيارة في اليونان.",
  },

  steps: {
    eyebrow: "إجراءات الإصدار",
    title: "كيفية الحصول على وثيقة للسفر إلى اليونان",
    items: [
      {
        title: "حدّد الوجهة",
        text:
          "اختر الإمارات باعتبارها بلد تسجيل السيارة، واليونان باعتبارها بلد الوجهة.",
      },
      {
        title: "أرسل خط الرحلة",
        text:
          "اذكر دول العبور والطريقة المتوقعة لدخول اليونان.",
      },
      {
        title: "ارفع المستندات",
        text:
          "أرفق وثيقة تسجيل السيارة وبيانات طالب التأمين.",
      },
      {
        title: "انتظر نتيجة المراجعة",
        text:
          "سنتحقق من رقم الهيكل VIN ورقم التسجيل وفئة السيارة وإمكانية إصدار الوثيقة.",
      },
      {
        title: "ادفع واستلم الوثيقة",
        text:
          "بعد التأكيد والدفع، ستُرسل وثيقة التأمين النهائية إلى بريدك الإلكتروني بصيغة PDF.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "قبل السفر",
    title: "ما الذي ينبغي التحقق منه قبل دخول اليونان؟",
    text:
      "قارن البيانات الواردة في الوثيقة بوثيقة تسجيل السيارة. وإذا وُجد أي خطأ، فلا ينبغي استخدام الوثيقة قبل تصحيحه.",
    items: [
      "رقم تسجيل السيارة؛",
      "رقم الهيكل VIN أو رقم الشاسيه؛",
      "بلد التسجيل — الإمارات؛",
      "العلامة التجارية والطراز؛",
      "فئة المركبة؛",
      "تاريخ بدء السريان؛",
      "تاريخ انتهاء السريان؛",
      "إدراج اليونان ضمن نطاق التغطية؛",
      "بيانات طالب التأمين؛",
    ],
  },

  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة شائعة حول تأمين الإمارات → اليونان",
    items: [
      {
        q: "هل يمكن إصدار تأمين لسيارة مسجّلة في الإمارات للسفر إلى اليونان؟",
        a:
          "نعم. تُحدد إمكانية إصدار التأمين الحدودي لسيارة مسجّلة في الإمارات بعد مراجعة المستندات وفئة المركبة وخط الرحلة المخطط.",
      },
      {
        q: "هل يسري التأمين الحدودي في اليونان؟",
        a:
          "نعم، إذا كانت اليونان مدرجة ضمن النطاق الجغرافي المبين في وثيقة التأمين الصادرة، وكانت مدة سريان الوثيقة قد بدأت بالفعل.",
      },
      {
        q: "هل تغطي الوثيقة كامل الطريق من الإمارات إلى اليونان؟",
        a:
          "ليس بالضرورة. لا يجوز افتراض أن الوثيقة السارية في اليونان ودول المنطقة الاقتصادية الأوروبية تسري تلقائيًا في جميع دول العبور.",
      },
      {
        q: "هل أحتاج إلى تأمين منفصل لتركيا؟",
        a:
          "إذا لم تكن تركيا مدرجة في وثيقة التأمين ضمن نطاق التغطية، فستحتاج إلى وثيقة تأمين أخرى معترف بها للمرور عبر أراضيها.",
      },
      {
        q: "هل يمكن دخول اليونان عبر بلغاريا بوثيقة واحدة؟",
        a:
          "نعم، إذا كانت بلغاريا واليونان كلتاهما مدرجتين ضمن النطاق الجغرافي للوثيقة المحددة. ويجب التحقق من ذلك مباشرة في الوثيقة الصادرة.",
      },
      {
        q: "هل يسري التأمين عند الوصول إلى اليونان بالعبّارة؟",
        a:
          "لا تُغني طريقة الوصول بحد ذاتها عن التأمين. وبعد إنزال السيارة من العبّارة، يجب أن تكون الوثيقة سارية داخل اليونان.",
      },
      {
        q: "ما المستندات المطلوبة للإصدار؟",
        a:
          "تحتاج إلى وثيقة تسجيل السيارة ورقم التسجيل ورقم الهيكل VIN والعلامة التجارية والطراز وفئة المركبة، بالإضافة إلى بيانات طالب التأمين.",
      },
      {
        q: "هل يمكن استلام الوثيقة إلكترونيًا؟",
        a:
          "بعد مراجعة البيانات والدفع وإصدار الوثيقة، تُرسل إلى البريد الإلكتروني المحدد بصيغة PDF.",
      },
      {
        q: "هل تغطي الوثيقة إصلاح السيارة المسجّلة في الإمارات؟",
        a:
          "لا. يغطي التأمين الحدودي المسؤولية تجاه الغير، ولا يُعد تأمينًا شاملًا على السيارة.",
      },
    ],
  },

  carousel: {
    title: "التأمين بحسب خط الرحلة",
    cardTitle: "تأمين سيارة مسجّلة في الإمارات داخل اليونان",
    cardText:
      "تأمين المسؤولية المدنية تجاه الغير لسيارة تحمل لوحات إماراتية أثناء رحلة مؤقتة إلى اليونان.",
    cta: "فتح الصفحة",
  },

  finalCta: {
    eyebrow: "إصدار التأمين",
    title: "أرسل طلب تأمين لرحلتك إلى اليونان",
    text:
      "جهّز وثيقة تسجيل السيارة، وحدد تاريخ بدء التأمين، وأرسل خط الرحلة. وبعد مراجعة البيانات، ستتلقى عرض السعر وتعليمات الدفع.",
    button: "إرسال الطلب",
  },
};

const en: UaeOcDictionary = {
  seo: {
    title: "Car Insurance for UAE Vehicles in Greece — Apply Online",
    description:
      "Insurance for a UAE-registered vehicle traveling to Greece. Coverage area, route, and document review, price calculation, and delivery of the policy as a PDF.",
  },

  breadcrumbTitle: "Insurance for UAE Vehicles in Greece",

  hero: {
    eyebrow: "UAE → Greece",
    title: "Insurance for a UAE-Registered Vehicle Traveling to Greece",
    lead:
      "A vehicle registered in the United Arab Emirates must have valid third-party liability insurance to be driven in Greece. If the existing insurance document is not recognized in Greece, the vehicle may require border insurance (OC graniczne).",
    noticeLabel: "Important:",
    notice:
      "Before traveling, you should verify not only that the policy is valid in Greece, but also that insurance coverage is in place for the entire route. A policy issued for European Economic Area countries should not be assumed to be automatically valid in Turkey or other transit countries.",
    primaryCta: "Get Insurance",
    secondaryCta: "Check Documents",
    cardLabel: "Trip Details",
    facts: [
      {
        label: "Country of registration",
        value: "UAE",
      },
      {
        label: "Destination country",
        value: "Greece",
      },
      {
        label: "Insurance type",
        value: "Border insurance",
      },
      {
        label: "Delivery",
        value: "PDF by email",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Eligible",
      title: "For Vehicles with UAE Plates",
      text:
        "Border insurance may be issued for a vehicle registered in the UAE if it is being used temporarily in Greece and meets the insurer’s requirements.",
    },
    {
      tone: "warning",
      label: "Must Be Checked",
      title: "Route to Greece",
      text:
        "Insurance that is valid in Greece may not cover the countries the vehicle passes through on its way from the UAE. The insurance requirements for each part of the route must be checked separately.",
    },
    {
      tone: "no",
      label: "Not Covered",
      title: "Damage to the Owner’s Vehicle",
      text:
        "Border insurance covers third-party liability. It does not cover theft, mechanical breakdown, vandalism, or damage to the insured vehicle itself.",
    },
  ],

  suitability: {
    eyebrow: "Eligibility",
    title: "When UAE → Greece Insurance Is Suitable",
    text:
      "This page applies to UAE-registered vehicles entering Greece temporarily. For a vehicle registered in another country, eligibility and document requirements must be checked separately.",
    yesTitle: "This Policy May Be Suitable",
    noTitle: "This Policy Does Not Meet Your Needs",
    yesItems: [
      "the vehicle is registered in the UAE;",
      "Greece is included in the planned route;",
      "there is no other valid policy recognized in Greece;",
      "a clear and legible vehicle registration document is available;",
      "the policy is issued before the vehicle is first used;",
    ],
    noItems: [
      "the vehicle is registered in a European Economic Area country;",
      "you need coverage for damage to your own vehicle;",
      "you only need coverage for Turkey or another country outside the policy’s territorial scope;",
      "you need the insurance to be issued retroactively;",
      "the registration details cannot be verified from official documents;",
    ],
  },

  routeWarning: {
    eyebrow: "Route to Greece",
    title: "Check the Entry Route and Transit Countries",
    text:
      "Greece can be reached overland or by ferry. Depending on the route, the vehicle may pass through Turkey, Bulgaria, Italy, or other countries. The insurance document must be checked separately for every country along the route.",
    cta: "Check Your Route",
  },

  coverage: {
    eyebrow: "Territorial Coverage",
    title: "Is Border Insurance Valid in Greece?",
    text:
      "The policy may be used in Greece if Greece is included in the territorial coverage stated in the document and the trip takes place within the policy period. The issued insurance document is the final confirmation of coverage.",
    listLabel: "Countries That May Be Included in the Coverage",
    countries: [
      "Greece",
      "Austria",
      "Belgium",
      "Bulgaria",
      "Cyprus",
      "Czechia",
      "Germany",
      "Denmark",
      "Spain",
      "Estonia",
      "France",
      "Finland",
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
    warningTitle: "Transit May Require a Separate Policy",
    warningText:
      "If Turkey, Serbia, North Macedonia, Montenegro, Bosnia and Herzegovina, Albania, Kosovo, or another country on the route is not listed in the insurance document, you should not assume that the policy is valid there.",
    warningNote:
      "That part of the journey may require local border insurance or another document recognized by the relevant country.",
  },

  documents: {
    eyebrow: "Documents",
    title: "Documents Required to Arrange the Insurance",
    text:
      "Vehicle details are verified using the UAE registration document. If some information appears only in Arabic, the registration number, VIN, make, model, and owner details must still allow the vehicle to be identified clearly and unambiguously.",
    vehicleTitle: "Vehicle Documents",
    policyholderTitle: "Policyholder Details",
    vehicleItems: [
      "vehicle registration document;",
      "UAE registration number;",
      "VIN or chassis number;",
      "make and model;",
      "vehicle type;",
      "year of manufacture;",
      "country of registration — UAE;",
    ],
    policyholderItems: [
      "passport or another identity document;",
      "first and last name in Latin characters;",
      "email address for receiving the PDF;",
      "telephone number or messenger contact;",
      "date of entry or the date the vehicle will first be used;",
      "required insurance period;",
      "planned route to Greece;",
    ],
  },

  price: {
    eyebrow: "Price",
    title: "How Much Does Insurance for Greece Cost?",
    text:
      "The price is calculated based on the vehicle category, policy term, and the insurer’s rates. The final price and eligibility for issuance are confirmed after the registration document has been reviewed.",
    factors: [
      "vehicle category;",
      "insurance period;",
      "policy start date;",
      "country of vehicle registration;",
      "accuracy and legibility of the documents;",
    ],
  },

  timing: {
    eyebrow: "Processing Time",
    title: "When to Submit the Application",
    text:
      "We recommend submitting the application 1–2 business days before entering Greece or before the required coverage must begin. Additional time may be needed to review the UAE document and verify the Latin-character spelling of the details.",
    notice:
      "Insurance cannot be issued retroactively. The policy must already be in force when the vehicle is used in Greece.",
  },

  steps: {
    eyebrow: "Application Process",
    title: "How to Get a Policy for Your Trip to Greece",
    items: [
      {
        title: "Specify the Destination",
        text:
          "Select the UAE as the country of vehicle registration and Greece as the destination country.",
      },
      {
        title: "Provide Your Route",
        text:
          "List the transit countries and the expected method of entry into Greece.",
      },
      {
        title: "Upload the Documents",
        text:
          "Attach the vehicle registration document and the policyholder’s details.",
      },
      {
        title: "Wait for Review",
        text:
          "We will verify the VIN, registration number, vehicle category, and eligibility for issuance.",
      },
      {
        title: "Pay and Receive the Policy",
        text:
          "After confirmation and payment, the completed insurance document will be sent to your email address as a PDF.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Before the Trip",
    title: "What to Check Before Entering Greece",
    text:
      "Compare the details in the policy with the vehicle registration document. If there is an error, the document should not be used until it has been corrected.",
    items: [
      "vehicle registration number;",
      "VIN or chassis number;",
      "country of registration — UAE;",
      "make and model;",
      "vehicle category;",
      "policy start date;",
      "policy end date;",
      "Greece included in the territorial coverage;",
      "policyholder details;",
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions About UAE → Greece Insurance",
    items: [
      {
        q: "Can insurance be issued for a UAE-registered vehicle traveling to Greece?",
        a:
          "Yes. Eligibility for border insurance for a UAE-registered vehicle is determined after the documents, vehicle category, and planned route have been reviewed.",
      },
      {
        q: "Is border insurance valid in Greece?",
        a:
          "Yes, provided Greece is included in the territorial coverage stated in the issued insurance document and the policy period has already begun.",
      },
      {
        q: "Does the policy cover the entire route from the UAE to Greece?",
        a:
          "Not necessarily. A policy valid in Greece and European Economic Area countries should not be assumed to be automatically valid in every transit country.",
      },
      {
        q: "Is separate insurance required for Turkey?",
        a:
          "If Turkey is not listed in the insurance document as part of the territorial coverage, another recognized insurance document will be required to drive through Turkey.",
      },
      {
        q: "Can I enter Greece through Bulgaria with one policy?",
        a:
          "This may be possible if both Bulgaria and Greece are included in the territorial coverage of the specific policy. Coverage must be checked directly in the issued document.",
      },
      {
        q: "Is the insurance valid if the vehicle arrives in Greece by ferry?",
        a:
          "The method of arrival does not replace the insurance requirement. Once the vehicle is unloaded in Greece, the policy must be valid in Greece.",
      },
      {
        q: "What documents are required?",
        a:
          "You will need the vehicle registration document, registration number, VIN, make and model, vehicle category, and the policyholder’s details.",
      },
      {
        q: "Can the policy be delivered electronically?",
        a:
          "After the details have been reviewed, payment has been made, and the policy has been issued, the insurance document will be sent to the specified email address as a PDF.",
      },
      {
        q: "Does the policy cover repairs to the UAE-registered vehicle?",
        a:
          "No. Border insurance covers third-party liability and is not comprehensive vehicle insurance.",
      },
    ],
  },

  carousel: {
    title: "Insurance by Route",
    cardTitle: "Insurance for UAE Vehicles in Greece",
    cardText:
      "Third-party liability insurance for a UAE-registered vehicle during a temporary trip to Greece.",
    cta: "View Page",
  },

  finalCta: {
    eyebrow: "Apply for Insurance",
    title: "Submit an Insurance Application for Your Trip to Greece",
    text:
      "Prepare the vehicle registration document, specify the requested insurance start date, and provide your route. After the details have been reviewed, you will receive a quote and payment instructions.",
    button: "Submit Application",
  },
};

const dictionaries: Partial<Record<Lang, UaeOcDictionary>> = {
  ru, ar, en
};

export function getUaeGreeceOcDictionary(
  lang: Lang,
): UaeOcDictionary {
  return dictionaries[lang] ?? en;
}