import type { Lang } from "@/app/dictionaries/header";
import type { UaeOcDictionary } from "@/app/dictionaries/seo-landings/uaeOc";

const ar: UaeOcDictionary = {
  seo: {
    title: "تأمين سيارة جزائرية في فرنسا | تأمين الحدود",
    description:
      "تأمين الحدود لسيارة مسجّلة في الجزائر عند السفر إلى فرنسا: التحقق من خط الرحلة والمستندات، حساب السعر وإرسال الوثيقة بصيغة PDF بعد الإصدار.",
  },

  breadcrumbTitle: "تأمين سيارة جزائرية في فرنسا",

  hero: {
    eyebrow: "الجزائر → فرنسا",
    title: "تأمين سيارة جزائرية عند السفر إلى فرنسا",
    lead:
      "إذا كانت سيارتك مسجّلة في الجزائر وتخطط لاستخدامها في فرنسا، فيجب أن تكون مشمولة بتأمين ساري للمسؤولية المدنية تجاه الغير ومعترف به في فرنسا. وعند عدم وجود تغطية مقبولة، يمكننا التحقق من إمكانية إصدار تأمين الحدود للسيارة قبل السفر.",
    noticeLabel: "تنبيه مهم:",
    notice:
      "تعتمد إمكانية الإصدار على مستندات السيارة، وميناء الوصول، وأول دولة دخول إلى أوروبا. أرسل خط الرحلة قبل الدفع، ولا تفترض أن الوثيقة يمكن إصدارها تلقائيًا عند الوصول إلى أي ميناء فرنسي.",
    primaryCta: "إرسال طلب التأمين",
    secondaryCta: "التحقق من المستندات",
    cardLabel: "بيانات خط الرحلة",
    facts: [
      {
        label: "بلد تسجيل السيارة",
        value: "الجزائر",
      },
      {
        label: "بلد الوجهة",
        value: "فرنسا",
      },
      {
        label: "نوع التأمين",
        value: "تأمين الحدود",
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
      label: "يمكن تقديم الطلب",
      title: "للسيارات التي تحمل لوحات جزائرية",
      text:
        "نراجع طلبات التأمين للسيارات المسجّلة في الجزائر والمتجهة إلى فرنسا. وتُؤكد إمكانية الإصدار بعد التحقق من وثيقة تسجيل السيارة ونوع المركبة وخط الرحلة. مهم! يجب ألا يتجاوز رقم لوحة تسجيل السيارة 8 خانات، ويجب ألا يحتوي على الحرف «Q».",
    },
    {
      tone: "warning",
      label: "تحقّق قبل السفر",
      title: "ميناء الوصول وأول دولة دخول",
      text:
        "اذكر ما إذا كان الوصول إلى مرسيليا أو سيت أو ميناء آخر، وحدد تاريخ الوصول وأي دولة أوروبية أخرى في خط الرحلة. فقد تؤثر هذه البيانات في إمكانية الإصدار ونطاق التغطية المطلوب.",
    },
    {
      tone: "no",
      label: "ليس تأمينًا شاملًا",
      title: "لا يغطي الأضرار التي تلحق بسيارتك",
      text:
        "يغطي تأمين الحدود مسؤولية مالك السيارة تجاه الغير عند وقوع حادث مشمول. ولا يعوّض عن سرقة السيارة أو أعطالها أو الأضرار التي تلحق بها.",
    },
  ],

  suitability: {
    eyebrow: "مدى الملاءمة",
    title: "متى قد يكون تأمين الجزائر → فرنسا مناسبًا؟",
    text:
      "تخص هذه الصفحة السيارات المسجّلة في الجزائر والمستخدمة مؤقتًا في فرنسا. ويُعرف هذا النوع من التغطية أيضًا بالفرنسية باسم assurance frontière. ولا تُؤكد إمكانية الإصدار إلا بعد مراجعة الحالة الفردية.",
    yesTitle: "قد تكون الوثيقة مناسبة",
    noTitle: "هذا الخيار غير مناسب",
    yesItems: [
      "السيارة مسجّلة في الجزائر وتحمل لوحات جزائرية؛",
      "فرنسا هي بلد الوصول أو إحدى دول خط الرحلة؛",
      "لا توجد وثيقة أخرى سارية ومعترف بها في فرنسا؛",
      "تتوفر وثيقة تسجيل واضحة ومقروءة للسيارة؛",
      "يمكن إصدار الوثيقة قبل بدء استخدام السيارة في فرنسا.",
    ],
    noItems: [
      "السيارة مسجّلة في إحدى دول المنطقة الاقتصادية الأوروبية؛",
      "لديك أصلًا وثيقة سارية تغطي فرنسا طوال مدة الرحلة؛",
      "تحتاج إلى تأمين ضد سرقة سيارتك أو الأضرار التي تلحق بها؛",
      "تطلب إصدار الوثيقة بأثر رجعي؛",
      "يتعذر تأكيد بيانات السيارة أو خط الرحلة بالمستندات.",
    ],
  },

  routeWarning: {
    eyebrow: "العبّارة إلى فرنسا",
    title: "تحقّق من التأمين قبل الوصول إلى الميناء الفرنسي",
    text:
      "إذا كنت تسافر بالعبّارة من الجزائر إلى مرسيليا أو سيت أو ميناء فرنسي آخر، فأرسل اسم ميناء الوصول وتاريخ الوصول قبل الدفع. لا تغطي الوثيقة الرحلة البحرية نفسها، ولا تحل محل التأمين المطلوب داخل الجزائر قبل الصعود إلى العبّارة أو أي متطلبات تفرضها شركة النقل.",
    cta: "إرسال خط الرحلة",
  },

  coverage: {
    eyebrow: "نطاق التغطية الجغرافي",
    title: "هل تسري الوثيقة في فرنسا ودول أوروبية أخرى؟",
    text:
      "تسري الوثيقة في فرنسا إذا كانت فرنسا مشمولة بالنطاق الجغرافي المبين في مستند التأمين، وكان تاريخ سريان الوثيقة قد بدأ. وإذا كنت ستواصل السفر بعد فرنسا، فيجب مقارنة جميع دول خط الرحلة بالقائمة الواردة في الوثيقة الصادرة.",
    listLabel: "وجهات أوروبية شائعة بعد الوصول إلى فرنسا",
    countries: [
      "فرنسا",
      "إسبانيا",
      "بلجيكا",
      "لوكسمبورغ",
      "ألمانيا",
      "هولندا",
      "إيطاليا",
      "سويسرا",
      "النمسا",
      "بولندا",
    ],
    warningTitle: "القائمة النهائية في الوثيقة هي المرجع",
    warningText:
      "وجود اسم دولة في خط رحلتك لا يعني أنها مشمولة تلقائيًا. يجب أن تكون كل دولة مغطاة وفقًا لنطاق الوثيقة، وقد يلزم تأمين منفصل للدول غير الواردة فيها.",
    warningNote:
      "الوثيقة المخصصة للاستخدام في فرنسا وأوروبا لا تستبدل التأمين المحلي المطلوب أثناء قيادة السيارة داخل الجزائر.",
  },

  documents: {
    eyebrow: "المستندات المطلوبة",
    title: "ما المطلوب لتأمين سيارة مسجّلة في الجزائر؟",
    text:
      "يجب أن تسمح وثيقة تسجيل السيارة بالتحقق بوضوح من رقم التسجيل ورقم الهيكل VIN والعلامة التجارية والطراز وبيانات المالك. وإذا كانت بعض البيانات مكتوبة بالعربية فقط، فقد نطلب توضيح كتابتها بالأحرف اللاتينية.",
    vehicleTitle: "بيانات السيارة",
    policyholderTitle: "بيانات طالب التأمين والرحلة",
    vehicleItems: [
      "صورة واضحة لوثيقة تسجيل السيارة أو البطاقة الرمادية؛",
      "رقم التسجيل الجزائري؛",
      "رقم الهيكل VIN أو رقم الشاسيه؛",
      "العلامة التجارية والطراز؛",
      "نوع المركبة وسنة الصنع؛",
      "اسم المالك كما يظهر في وثيقة التسجيل؛",
      "بلد التسجيل — الجزائر.",
    ],
    policyholderItems: [
      "جواز السفر أو وثيقة أخرى لإثبات الهوية؛",
      "الاسم الأول واسم العائلة بالأحرف اللاتينية؛",
      "البريد الإلكتروني ورقم الهاتف؛",
      "تاريخ بدء التأمين والمدة المطلوبة؛",
      "ميناء المغادرة وميناء الوصول؛",
      "تاريخ وصول العبّارة إلى فرنسا؛",
      "جميع دول خط الرحلة بعد الوصول.",
    ],
  },

  price: {
    eyebrow: "السعر والمدة",
    title: "كم تبلغ تكلفة تأمين سيارة جزائرية في فرنسا؟",
    text:
      "يبلغ السعر الحالي لوثيقة مدتها 30 يومًا لسيارة خاصة 157.50 زلوتي بولندي. وقد تتوفر مدد 30 أو 60 أو 90 أو 180 أو 364 يومًا. ويُؤكد السعر النهائي وإمكانية الإصدار بعد مراجعة فئة المركبة والمستندات وخط الرحلة.",
    factors: [
      "فئة المركبة؛",
      "مدة سريان الوثيقة؛",
      "تاريخ بدء التأمين؛",
      "نتيجة التحقق من المستندات وخط الرحلة.",
    ],
  },

  timing: {
    eyebrow: "موعد الإصدار",
    title: "متى يجب إرسال الطلب قبل السفر؟",
    text:
      "أرسل الطلب قبل موعد وصول العبّارة بيوم أو يومي عمل على الأقل. فالمراجعة تشمل وثيقة تسجيل السيارة وميناء الوصول وأول دولة دخول، وقد يلزم الحصول على موافقة إضافية من شركة التأمين خلال ساعات عملها.",
    notice:
      "لا يمكن إصدار الوثيقة بأثر رجعي. ويجب أن يبدأ سريان التأمين قبل بدء استخدام السيارة على الطرق في فرنسا.",
  },

  steps: {
    eyebrow: "خطوات تقديم الطلب",
    title: "كيفية طلب التأمين للرحلة من الجزائر إلى فرنسا",
    items: [
      {
        title: "حدّد خط الرحلة",
        text:
          "اذكر ميناء المغادرة في الجزائر، وميناء الوصول في فرنسا، وتاريخ الوصول والدول التي ستزورها بعد ذلك.",
      },
      {
        title: "أرسل مستندات السيارة",
        text:
          "أرفق صورة واضحة لوثيقة التسجيل وبيانات طالب التأمين.",
      },
      {
        title: "انتظر نتيجة التحقق",
        text:
          "نتحقق من رقم التسجيل ورقم الهيكل VIN وفئة المركبة وإمكانية الإصدار وفقًا لخط الرحلة.",
      },
      {
        title: "ادفع بعد التأكيد",
        text:
          "بعد تأكيد إمكانية الإصدار والسعر، ستتلقى تعليمات الدفع المتاحة.",
      },
      {
        title: "استلم الوثيقة بصيغة PDF",
        text:
          "بعد إصدار الوثيقة، نرسل ملف PDF إلى البريد الإلكتروني الذي أدخلته.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "قبل استخدام السيارة في فرنسا",
    title: "ما الذي يجب التحقق منه في الوثيقة الصادرة؟",
    text:
      "قارن بيانات الوثيقة بوثيقة تسجيل السيارة قبل السفر. وقد يؤدي الخطأ في رقم التسجيل أو رقم الهيكل أو مدة السريان إلى مشكلات عند التحقق من التأمين.",
    items: [
      "رقم التسجيل الجزائري؛",
      "رقم الهيكل VIN أو رقم الشاسيه؛",
      "بلد التسجيل — الجزائر؛",
      "العلامة التجارية والطراز وفئة المركبة؛",
      "اسم المؤمن له؛",
      "تاريخ ووقت بدء التغطية؛",
      "تاريخ انتهاء الوثيقة؛",
      "إدراج فرنسا وجميع دول الرحلة ضمن نطاق التغطية.",
    ],
  },

  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة شائعة حول تأمين الجزائر → فرنسا",
    items: [
      {
        q: "هل يمكن طلب تأمين لسيارة تحمل لوحات جزائرية عند السفر إلى فرنسا؟",
        a:
          "نعم، يمكن تقديم طلب للتحقق من إمكانية إصدار تأمين الحدود. ويعتمد القرار النهائي على وثيقة تسجيل السيارة وفئة المركبة وميناء الوصول وأول دولة دخول إلى أوروبا.",
      },
      {
        q: "هل تسري وثيقة تأمين الحدود في فرنسا؟",
        a:
          "تسري في فرنسا عندما تكون فرنسا مشمولة صراحة في النطاق الجغرافي للوثيقة، وتكون مدة التأمين قد بدأت. يجب دائمًا الرجوع إلى البيانات الواردة في الوثيقة الصادرة.",
      },
      {
        q: "هل يمكن استخدام الوثيقة عند الوصول إلى مرسيليا أو سيت؟",
        a:
          "يجب إرسال اسم الميناء وتاريخ الوصول قبل الدفع. ولا يمكن تأكيد إمكانية الإصدار لميناء معين إلا بعد التحقق من خط الرحلة ومتطلبات شركة التأمين.",
      },
      {
        q: "هل يجب إصدار التأمين قبل ركوب العبّارة؟",
        a:
          "يجب أن تكون لديك تغطية سارية قبل بدء استخدام السيارة على الطرق في فرنسا. لذلك ننصح بإتمام التحقق والإصدار قبل السفر، وعدم الاعتماد على إمكانية شراء الوثيقة فور الوصول إلى الميناء.",
      },
      {
        q: "هل تغطي الوثيقة كامل الطريق من الجزائر إلى فرنسا؟",
        a:
          "لا. لا تستبدل الوثيقة التأمين المطلوب داخل الجزائر، ولا تغطي الرحلة البحرية. ويبدأ نطاقها وفق التاريخ والدول المبينة في مستند التأمين.",
      },
      {
        q: "هل أحتاج إلى تأمين الحدود إذا كانت لدي بطاقة خضراء سارية؟",
        a:
          "إذا كانت لديك بطاقة خضراء أصلية وسارية تغطي فرنسا وجميع دول الرحلة طوال المدة المطلوبة، فقد لا تحتاج إلى وثيقة أخرى. تحقّق من رمز فرنسا والدول الأخرى ومن تواريخ السريان في البطاقة.",
      },
      {
        q: "هل تسري الوثيقة في دول أوروبية أخرى بعد فرنسا؟",
        a:
          "قد تسري في دول أوروبية أخرى إذا كانت تلك الدول مشمولة في النطاق الجغرافي للوثيقة. أرسل خط الرحلة الكامل وتحقق من القائمة النهائية في المستند الصادر.",
      },
      {
        q: "ما المستندات المطلوبة لسيارة مسجّلة في الجزائر؟",
        a:
          "نحتاج إلى وثيقة تسجيل واضحة تتضمن رقم التسجيل ورقم الهيكل VIN والعلامة التجارية والطراز وبيانات المالك، إضافة إلى بيانات طالب التأمين وتاريخ الوصول وخط الرحلة.",
      },
      {
        q: "هل يمكن استلام وثيقة التأمين عبر الإنترنت؟",
        a:
          "نعم. يُرسل الطلب والمستندات عبر الإنترنت، وبعد المراجعة والدفع والإصدار تُرسل الوثيقة النهائية بصيغة PDF إلى بريدك الإلكتروني.",
      },
      {
        q: "هل يغطي التأمين الأضرار التي تلحق بالسيارة الجزائرية نفسها؟",
        a:
          "لا. هذا تأمين للمسؤولية المدنية تجاه الغير، وليس تأمينًا شاملًا ضد السرقة أو الأعطال أو الأضرار التي تلحق بسيارتك.",
      },
    ],
  },

  carousel: {
    title: "التأمين بحسب خط الرحلة",
    cardTitle: "سيارة جزائرية متجهة إلى فرنسا",
    cardText:
      "معلومات تأمين الحدود لسيارة تحمل لوحات جزائرية عند الوصول إلى فرنسا واستخدامها داخل أوروبا.",
    cta: "عرض تفاصيل الرحلة",
  },

  finalCta: {
    eyebrow: "طلب التحقق والإصدار",
    title: "أرسل مستندات رحلتك من الجزائر إلى فرنسا",
    text:
      "أرسل وثيقة تسجيل السيارة، وميناء الوصول، وتاريخ وصول العبّارة، والدول التي ستزورها. وبعد المراجعة، ستتلقى تأكيد إمكانية الإصدار والسعر وتعليمات الدفع.",
    button: "إرسال الطلب",
  },
};

const ru: UaeOcDictionary = {
  seo: {
    title: "Страховка для автомобиля из Алжира во Франции | Пограничное страхование",
    description:
      "Пограничное страхование для автомобиля, зарегистрированного в Алжире, при поездке во Францию: проверка маршрута и документов, расчет стоимости и отправка полиса в PDF после оформления.",
  },

  breadcrumbTitle: "Страховка для автомобиля из Алжира во Франции",

  hero: {
    eyebrow: "Алжир → Франция",
    title: "Страховка для автомобиля из Алжира при поездке во Францию",
    lead:
      "Если автомобиль зарегистрирован в Алжире и вы планируете использовать его во Франции, у вас должна быть действующая страховка гражданской ответственности перед третьими лицами, признаваемая во Франции. Если подходящего страхового покрытия нет, мы можем проверить возможность оформления пограничного страхования автомобиля до поездки.",
    noticeLabel: "Важно:",
    notice:
      "Возможность оформления зависит от документов на автомобиль, порта прибытия и первой страны въезда в Европу. Отправьте маршрут до оплаты и не рассчитывайте, что полис можно будет автоматически оформить по прибытии в любой французский порт.",
    primaryCta: "Отправить заявку на страхование",
    secondaryCta: "Проверить документы",
    cardLabel: "Данные маршрута",
    facts: [
      {
        label: "Страна регистрации автомобиля",
        value: "Алжир",
      },
      {
        label: "Страна назначения",
        value: "Франция",
      },
      {
        label: "Вид страхования",
        value: "Пограничное страхование",
      },
      {
        label: "Формат полиса",
        value: "PDF по электронной почте",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Можно подать заявку",
      title: "Для автомобилей с алжирскими номерами",
      text:
        "Мы рассматриваем заявки на страхование автомобилей, зарегистрированных в Алжире и следующих во Францию. Возможность оформления подтверждается после проверки свидетельства о регистрации, типа транспортного средства и маршрута поездки. ВАЖНО! Регистрационная таблица автомобиля должна содержать не более 8 символов. В ней не должно быть буквы 'Q'",
    },
    {
      tone: "warning",
      label: "Проверьте до поездки",
      title: "Порт прибытия и первая страна въезда",
      text:
        "Укажите, прибываете ли вы в Марсель, Сет или другой порт, дату прибытия, а также все другие европейские страны по маршруту. Эти данные могут влиять на возможность оформления и необходимую территорию страхового покрытия.",
    },
    {
      tone: "no",
      label: "Это не каско",
      title: "Не покрывает ущерб вашему автомобилю",
      text:
        "Пограничное страхование покрывает гражданскую ответственность владельца автомобиля перед третьими лицами при страховом случае. Оно не возмещает ущерб от угона, поломок или повреждения самого автомобиля.",
    },
  ],

  suitability: {
    eyebrow: "Кому подходит",
    title: "В каких случаях может подойти страховка Алжир → Франция?",
    text:
      "Эта страница предназначена для автомобилей, зарегистрированных в Алжире и временно используемых во Франции. Во Франции такой вид страхования также называется assurance frontière. Возможность оформления подтверждается только после рассмотрения конкретной ситуации.",
    yesTitle: "Полис может подойти",
    noTitle: "Этот вариант не подходит",
    yesItems: [
      "автомобиль зарегистрирован в Алжире и имеет алжирские регистрационные номера;",
      "Франция является страной прибытия или одной из стран маршрута;",
      "у вас нет другой действующей страховки, признаваемой во Франции;",
      "имеется четкая и читаемая регистрационная документация на автомобиль;",
      "полис можно оформить до начала использования автомобиля во Франции.",
    ],
    noItems: [
      "автомобиль зарегистрирован в одной из стран Европейской экономической зоны;",
      "у вас уже есть действующий полис, покрывающий Францию на весь период поездки;",
      "вам нужна страховка от угона или повреждения собственного автомобиля;",
      "вы хотите оформить полис задним числом;",
      "данные автомобиля или маршрут невозможно подтвердить документами.",
    ],
  },

  routeWarning: {
    eyebrow: "Паром во Францию",
    title: "Проверьте страховку до прибытия во французский порт",
    text:
      "Если вы едете на пароме из Алжира в Марсель, Сет или другой французский порт, до оплаты сообщите название порта и дату прибытия. Полис не покрывает сам морской переход и не заменяет страховку, необходимую для движения по территории Алжира до посадки на паром, а также требования перевозчика.",
    cta: "Отправить маршрут",
  },

  coverage: {
    eyebrow: "Территория страхования",
    title: "Действует ли полис во Франции и других странах Европы?",
    text:
      "Полис действует во Франции, если Франция включена в территорию страхования, указанную в страховом документе, и срок действия полиса уже начался. Если после Франции вы планируете продолжить поездку, необходимо проверить все страны маршрута по списку, указанному в выданном полисе.",
    listLabel: "Популярные направления после прибытия во Францию",
    countries: [
      "Франция",
      "Испания",
      "Бельгия",
      "Люксембург",
      "Германия",
      "Нидерланды",
      "Италия",
      "Швейцария",
      "Австрия",
      "Польша",
    ],
    warningTitle: "Ориентируйтесь на окончательный список в полисе",
    warningText:
      "Наличие страны в вашем маршруте не означает, что она автоматически входит в страховое покрытие. Каждая страна должна входить в территорию действия полиса. Для стран, не указанных в нем, может потребоваться отдельная страховка.",
    warningNote:
      "Полис, предназначенный для использования во Франции и других странах Европы, не заменяет местную страховку, необходимую для движения на автомобиле по территории Алжира.",
  },

  documents: {
    eyebrow: "Необходимые документы",
    title: "Что нужно для страхования автомобиля, зарегистрированного в Алжире?",
    text:
      "По регистрационному документу должны четко определяться регистрационный номер автомобиля, VIN или номер кузова, марка, модель и данные владельца. Если часть информации указана только на арабском языке, мы можем попросить предоставить написание этих данных латиницей.",
    vehicleTitle: "Данные автомобиля",
    policyholderTitle: "Данные страхователя и поездки",
    vehicleItems: [
      "четкая фотография свидетельства о регистрации автомобиля или carte grise;",
      "алжирский регистрационный номер;",
      "VIN или номер шасси;",
      "марка и модель;",
      "тип транспортного средства и год выпуска;",
      "имя владельца в соответствии с регистрационным документом;",
      "страна регистрации — Алжир.",
    ],
    policyholderItems: [
      "паспорт или другой документ, удостоверяющий личность;",
      "имя и фамилия латиницей;",
      "адрес электронной почты и номер телефона;",
      "дата начала страхования и необходимый срок;",
      "порт отправления и порт прибытия;",
      "дата прибытия парома во Францию;",
      "все страны маршрута после прибытия.",
    ],
  },

  price: {
    eyebrow: "Стоимость и срок",
    title: "Сколько стоит страховка для автомобиля из Алжира во Франции?",
    text:
      "Текущая стоимость полиса на 30 дней для легкового автомобиля составляет 157,50 польского злотого. Также могут быть доступны сроки 30, 60, 90, 180 или 364 дня. Окончательная стоимость и возможность оформления подтверждаются после проверки категории транспортного средства, документов и маршрута.",
    factors: [
      "категория транспортного средства;",
      "срок действия полиса;",
      "дата начала страхования;",
      "результат проверки документов и маршрута.",
    ],
  },

  timing: {
    eyebrow: "Срок оформления",
    title: "Когда нужно отправить заявку перед поездкой?",
    text:
      "Отправьте заявку как минимум за один-два рабочих дня до прибытия парома. При проверке учитываются регистрационные документы автомобиля, порт прибытия и первая страна въезда. В некоторых случаях также может потребоваться дополнительное согласование со страховой компанией в ее рабочее время.",
    notice:
      "Полис нельзя оформить задним числом. Страховое покрытие должно начать действовать до того, как автомобиль начнет использоваться на дорогах Франции.",
  },

  steps: {
    eyebrow: "Порядок оформления",
    title: "Как оформить страховку для поездки из Алжира во Францию",
    items: [
      {
        title: "Укажите маршрут",
        text:
          "Сообщите порт отправления в Алжире, порт прибытия во Франции, дату прибытия и страны, которые планируете посетить далее.",
      },
      {
        title: "Отправьте документы на автомобиль",
        text:
          "Приложите четкую фотографию регистрационного документа и данные страхователя.",
      },
      {
        title: "Дождитесь результата проверки",
        text:
          "Мы проверим регистрационный номер, VIN, категорию транспортного средства и возможность оформления с учетом маршрута.",
      },
      {
        title: "Оплатите после подтверждения",
        text:
          "После подтверждения возможности оформления и стоимости вы получите доступные инструкции по оплате.",
      },
      {
        title: "Получите полис в PDF",
        text:
          "После оформления мы отправим PDF-файл полиса на указанный вами адрес электронной почты.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Перед поездкой по Франции",
    title: "Что проверить в оформленном полисе?",
    text:
      "Перед поездкой сравните данные в полисе с регистрационными документами автомобиля. Ошибка в регистрационном номере, VIN или сроке действия может привести к проблемам при проверке страховки.",
    items: [
      "алжирский регистрационный номер;",
      "VIN или номер шасси;",
      "страна регистрации — Алжир;",
      "марка, модель и категория транспортного средства;",
      "имя застрахованного лица;",
      "дата и время начала страхового покрытия;",
      "дата окончания действия полиса;",
      "наличие Франции и всех остальных стран маршрута в территории страхового покрытия.",
    ],
  },

  faq: {
    eyebrow: "Часто задаваемые вопросы",
    title: "Частые вопросы о страховке Алжир → Франция",
    items: [
      {
        q: "Можно ли оформить страховку для автомобиля с алжирскими номерами при поездке во Францию?",
        a:
          "Да, можно подать заявку на проверку возможности оформления пограничного страхования. Окончательное решение зависит от регистрационных документов автомобиля, категории транспортного средства, порта прибытия и первой страны въезда в Европу.",
      },
      {
        q: "Действует ли пограничное страхование во Франции?",
        a:
          "Да, если Франция прямо включена в территорию действия полиса и срок страхования уже начался. Всегда ориентируйтесь на данные, указанные в выданном страховом документе.",
      },
      {
        q: "Можно ли использовать полис при прибытии в Марсель или Сет?",
        a:
          "До оплаты необходимо сообщить название порта и дату прибытия. Возможность оформления для конкретного порта можно подтвердить только после проверки маршрута и требований страховой компании.",
      },
      {
        q: "Нужно ли оформить страховку до посадки на паром?",
        a:
          "К моменту начала движения автомобиля по дорогам Франции у вас уже должно быть действующее страховое покрытие. Поэтому рекомендуем завершить проверку и оформление до поездки и не рассчитывать на возможность купить полис сразу после прибытия в порт.",
      },
      {
        q: "Покрывает ли полис весь маршрут из Алжира во Францию?",
        a:
          "Нет. Полис не заменяет страховку, необходимую на территории Алжира, и не распространяется на морской переход. Его действие определяется датой начала страхования и странами, указанными в страховом документе.",
      },
      {
        q: "Нужно ли пограничное страхование, если у меня есть действующая Зеленая карта?",
        a:
          "Если у вас есть оригинальная действующая Зеленая карта, которая покрывает Францию и все остальные страны маршрута на весь необходимый период, дополнительный полис может не потребоваться. Проверьте обозначение Франции и других стран, а также даты действия Зеленой карты.",
      },
      {
        q: "Действует ли полис в других европейских странах после Франции?",
        a:
          "Он может действовать и в других странах Европы, если они включены в территорию страхования. Отправьте полный маршрут и проверьте окончательный список стран в выданном документе.",
      },
      {
        q: "Какие документы нужны для автомобиля, зарегистрированного в Алжире?",
        a:
          "Нужен четкий регистрационный документ, в котором указаны регистрационный номер, VIN, марка, модель и данные владельца, а также данные страхователя, дата прибытия и маршрут поездки.",
      },
      {
        q: "Можно ли получить страховой полис онлайн?",
        a:
          "Да. Заявка и документы отправляются онлайн. После проверки, оплаты и оформления готовый полис в формате PDF будет отправлен на вашу электронную почту.",
      },
      {
        q: "Покрывает ли страховка повреждение самого автомобиля из Алжира?",
        a:
          "Нет. Это страхование гражданской ответственности перед третьими лицами, а не каско. Оно не покрывает угон, поломки или повреждение вашего автомобиля.",
      },
    ],
  },

  carousel: {
    title: "Страхование по маршруту",
    cardTitle: "Автомобиль из Алжира во Францию",
    cardText:
      "Информация о пограничном страховании автомобиля с алжирскими номерами при прибытии во Францию и дальнейших поездках по Европе.",
    cta: "Посмотреть условия маршрута",
  },

  finalCta: {
    eyebrow: "Проверка и оформление",
    title: "Отправьте документы для поездки из Алжира во Францию",
    text:
      "Отправьте регистрационный документ автомобиля, порт прибытия, дату прибытия парома и страны, которые планируете посетить. После проверки вы получите подтверждение возможности оформления, стоимость и инструкции по оплате.",
    button: "Отправить заявку",
  },
};

const pl: UaeOcDictionary = {
  seo: {
    title: "Ubezpieczenie samochodu z Algierii we Francji | Ubezpieczenie graniczne",
    description:
      "Ubezpieczenie graniczne dla samochodu zarejestrowanego w Algierii na wyjazd do Francji: weryfikacja trasy i dokumentów, wyliczenie składki oraz przesłanie polisy w PDF po jej wystawieniu.",
  },

  breadcrumbTitle: "Ubezpieczenie samochodu z Algierii we Francji",

  hero: {
    eyebrow: "Algieria → Francja",
    title: "Ubezpieczenie samochodu z Algierii na wyjazd do Francji",
    lead:
      "Jeżeli samochód jest zarejestrowany w Algierii i planujesz korzystać z niego we Francji, musi być objęty ważnym ubezpieczeniem odpowiedzialności cywilnej wobec osób trzecich, uznawanym na terytorium Francji. Jeśli nie masz odpowiedniej ochrony ubezpieczeniowej, możemy przed podróżą sprawdzić możliwość zawarcia ubezpieczenia granicznego.",
    noticeLabel: "Ważne:",
    notice:
      "Możliwość wystawienia polisy zależy od dokumentów pojazdu, portu przybycia oraz pierwszego kraju wjazdu do Europy. Prześlij trasę przed dokonaniem płatności i nie zakładaj, że polisę będzie można automatycznie wystawić po przybyciu do dowolnego portu we Francji.",
    primaryCta: "Wyślij wniosek o ubezpieczenie",
    secondaryCta: "Sprawdź dokumenty",
    cardLabel: "Dane dotyczące trasy",
    facts: [
      {
        label: "Kraj rejestracji pojazdu",
        value: "Algieria",
      },
      {
        label: "Kraj docelowy",
        value: "Francja",
      },
      {
        label: "Rodzaj ubezpieczenia",
        value: "Ubezpieczenie graniczne",
      },
      {
        label: "Format polisy",
        value: "PDF wysyłany e-mailem",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Można złożyć wniosek",
      title: "Dla pojazdów z algierskimi tablicami rejestracyjnymi",
      text:
        "Rozpatrujemy wnioski dotyczące ubezpieczenia pojazdów zarejestrowanych w Algierii i podróżujących do Francji. Możliwość wystawienia polisy potwierdzamy po sprawdzeniu dowodu rejestracyjnego, rodzaju pojazdu oraz trasy podróży. WAŻNE! Numer rejestracyjny pojazdu może zawierać maksymalnie 8 znaków i nie może zawierać litery „Q”.",
    },
    {
      tone: "warning",
      label: "Sprawdź przed podróżą",
      title: "Port przybycia i pierwszy kraj wjazdu",
      text:
        "Podaj, czy przypływasz do Marsylii, Sète czy innego portu, datę przybycia oraz wszystkie pozostałe kraje europejskie znajdujące się na trasie. Informacje te mogą mieć wpływ na możliwość wystawienia polisy oraz wymagany zakres terytorialny ochrony.",
    },
    {
      tone: "no",
      label: "To nie jest autocasco",
      title: "Nie obejmuje szkód we własnym pojeździe",
      text:
        "Ubezpieczenie graniczne obejmuje odpowiedzialność cywilną właściciela pojazdu wobec osób trzecich w razie zdarzenia objętego ochroną. Nie pokrywa kradzieży, awarii ani uszkodzeń samego pojazdu.",
    },
  ],

  suitability: {
    eyebrow: "Dla kogo",
    title: "Kiedy ubezpieczenie na trasę Algieria → Francja może być odpowiednie?",
    text:
      "Ta strona dotyczy pojazdów zarejestrowanych w Algierii i czasowo użytkowanych we Francji. We Francji ten rodzaj ubezpieczenia określany jest również jako assurance frontière. Możliwość wystawienia polisy potwierdzamy dopiero po indywidualnej analizie danego przypadku.",
    yesTitle: "Polisa może być odpowiednia",
    noTitle: "Ten wariant nie będzie odpowiedni",
    yesItems: [
      "pojazd jest zarejestrowany w Algierii i posiada algierskie tablice rejestracyjne;",
      "Francja jest krajem przybycia lub jednym z krajów na trasie;",
      "nie masz innego ważnego ubezpieczenia uznawanego we Francji;",
      "posiadasz czytelne dokumenty rejestracyjne pojazdu;",
      "polisę można wystawić przed rozpoczęciem użytkowania pojazdu we Francji.",
    ],
    noItems: [
      "pojazd jest zarejestrowany w jednym z państw Europejskiego Obszaru Gospodarczego;",
      "masz już ważną polisę obejmującą Francję przez cały okres podróży;",
      "potrzebujesz ochrony na wypadek kradzieży lub uszkodzenia własnego pojazdu;",
      "chcesz wystawić polisę z datą wsteczną;",
      "danych pojazdu lub trasy nie można potwierdzić na podstawie dokumentów.",
    ],
  },

  routeWarning: {
    eyebrow: "Prom do Francji",
    title: "Sprawdź ubezpieczenie przed przybyciem do francuskiego portu",
    text:
      "Jeżeli podróżujesz promem z Algierii do Marsylii, Sète lub innego portu we Francji, przed dokonaniem płatności podaj nazwę portu i datę przybycia. Polisa nie obejmuje samej przeprawy morskiej i nie zastępuje ubezpieczenia wymaganego podczas jazdy po Algierii przed wjazdem na prom ani wymogów przewoźnika.",
    cta: "Wyślij trasę podróży",
  },

  coverage: {
    eyebrow: "Zakres terytorialny",
    title: "Czy polisa działa we Francji i w innych krajach Europy?",
    text:
      "Polisa obowiązuje we Francji, jeśli Francja znajduje się w zakresie terytorialnym wskazanym w dokumencie ubezpieczenia i okres ochrony już się rozpoczął. Jeśli po pobycie we Francji planujesz kontynuować podróż, należy porównać wszystkie kraje na trasie z listą wskazaną w wystawionej polisie.",
    listLabel: "Popularne kierunki po przybyciu do Francji",
    countries: [
      "Francja",
      "Hiszpania",
      "Belgia",
      "Luksemburg",
      "Niemcy",
      "Niderlandy",
      "Włochy",
      "Szwajcaria",
      "Austria",
      "Polska",
    ],
    warningTitle: "Decydująca jest ostateczna lista krajów w polisie",
    warningText:
      "Sam fakt, że dany kraj znajduje się na Twojej trasie, nie oznacza, że jest automatycznie objęty ochroną. Każde państwo musi znajdować się w zakresie terytorialnym polisy. Dla krajów niewymienionych w dokumencie może być wymagane odrębne ubezpieczenie.",
    warningNote:
      "Polisa przeznaczona do użytkowania pojazdu we Francji i innych krajach Europy nie zastępuje lokalnego ubezpieczenia wymaganego podczas jazdy po Algierii.",
  },

  documents: {
    eyebrow: "Wymagane dokumenty",
    title: "Co jest potrzebne do ubezpieczenia samochodu zarejestrowanego w Algierii?",
    text:
      "Na podstawie dokumentu rejestracyjnego musi być możliwe jednoznaczne odczytanie numeru rejestracyjnego, numeru VIN lub numeru podwozia, marki, modelu oraz danych właściciela. Jeśli część danych jest zapisana wyłącznie po arabsku, możemy poprosić o podanie ich zapisu alfabetem łacińskim.",
    vehicleTitle: "Dane pojazdu",
    policyholderTitle: "Dane ubezpieczającego i podróży",
    vehicleItems: [
      "wyraźne zdjęcie dowodu rejestracyjnego pojazdu lub carte grise;",
      "algierski numer rejestracyjny;",
      "numer VIN lub numer podwozia;",
      "marka i model;",
      "rodzaj pojazdu i rok produkcji;",
      "imię i nazwisko właściciela zgodnie z dokumentem rejestracyjnym;",
      "kraj rejestracji — Algieria.",
    ],
    policyholderItems: [
      "paszport lub inny dokument potwierdzający tożsamość;",
      "imię i nazwisko zapisane alfabetem łacińskim;",
      "adres e-mail i numer telefonu;",
      "data rozpoczęcia ubezpieczenia i wymagany okres ochrony;",
      "port wypłynięcia i port przybycia;",
      "data przybycia promu do Francji;",
      "wszystkie kraje na trasie po przybyciu.",
    ],
  },

  price: {
    eyebrow: "Cena i okres ubezpieczenia",
    title: "Ile kosztuje ubezpieczenie samochodu z Algierii we Francji?",
    text:
      "Aktualna cena polisy na 30 dni dla samochodu osobowego wynosi 157,50 PLN. Mogą być również dostępne okresy 30, 60, 90, 180 lub 364 dni. Ostateczna cena i możliwość wystawienia polisy są potwierdzane po weryfikacji kategorii pojazdu, dokumentów oraz trasy podróży.",
    factors: [
      "kategoria pojazdu;",
      "okres obowiązywania polisy;",
      "data rozpoczęcia ubezpieczenia;",
      "wynik weryfikacji dokumentów i trasy.",
    ],
  },

  timing: {
    eyebrow: "Termin wystawienia",
    title: "Kiedy należy wysłać wniosek przed podróżą?",
    text:
      "Wyślij wniosek co najmniej jeden–dwa dni robocze przed przybyciem promu. Weryfikacja obejmuje dokumenty rejestracyjne pojazdu, port przybycia oraz pierwszy kraj wjazdu. W niektórych przypadkach może być również konieczne dodatkowe zatwierdzenie przez zakład ubezpieczeń w godzinach jego pracy.",
    notice:
      "Polisy nie można wystawić z datą wsteczną. Ochrona ubezpieczeniowa musi rozpocząć się przed rozpoczęciem jazdy pojazdem po drogach we Francji.",
  },

  steps: {
    eyebrow: "Proces składania wniosku",
    title: "Jak zamówić ubezpieczenie na podróż z Algierii do Francji",
    items: [
      {
        title: "Podaj trasę podróży",
        text:
          "Wskaż port wypłynięcia w Algierii, port przybycia we Francji, datę przybycia oraz kraje, które planujesz odwiedzić później.",
      },
      {
        title: "Prześlij dokumenty pojazdu",
        text:
          "Załącz wyraźne zdjęcie dokumentu rejestracyjnego oraz dane ubezpieczającego.",
      },
      {
        title: "Poczekaj na wynik weryfikacji",
        text:
          "Sprawdzimy numer rejestracyjny, VIN, kategorię pojazdu oraz możliwość wystawienia polisy z uwzględnieniem trasy podróży.",
      },
      {
        title: "Zapłać po potwierdzeniu",
        text:
          "Po potwierdzeniu możliwości wystawienia polisy i jej ceny otrzymasz dostępne instrukcje dotyczące płatności.",
      },
      {
        title: "Odbierz polisę w PDF",
        text:
          "Po wystawieniu polisy prześlemy plik PDF na podany adres e-mail.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Przed rozpoczęciem jazdy we Francji",
    title: "Co należy sprawdzić w wystawionej polisie?",
    text:
      "Przed podróżą porównaj dane w polisie z dokumentami rejestracyjnymi pojazdu. Błąd w numerze rejestracyjnym, numerze VIN lub okresie obowiązywania może spowodować problemy podczas kontroli ubezpieczenia.",
    items: [
      "algierski numer rejestracyjny;",
      "numer VIN lub numer podwozia;",
      "kraj rejestracji — Algieria;",
      "marka, model i kategoria pojazdu;",
      "imię i nazwisko ubezpieczonego;",
      "data i godzina rozpoczęcia ochrony;",
      "data zakończenia obowiązywania polisy;",
      "uwzględnienie Francji i wszystkich pozostałych krajów podróży w zakresie terytorialnym ochrony.",
    ],
  },

  faq: {
    eyebrow: "Najczęściej zadawane pytania",
    title: "Najczęstsze pytania dotyczące ubezpieczenia Algieria → Francja",
    items: [
      {
        q: "Czy można ubezpieczyć samochód z algierskimi tablicami rejestracyjnymi na wyjazd do Francji?",
        a:
          "Tak, można złożyć wniosek o sprawdzenie możliwości wystawienia ubezpieczenia granicznego. Ostateczna decyzja zależy od dokumentów rejestracyjnych pojazdu, jego kategorii, portu przybycia oraz pierwszego kraju wjazdu do Europy.",
      },
      {
        q: "Czy ubezpieczenie graniczne obowiązuje we Francji?",
        a:
          "Tak, jeśli Francja jest wyraźnie objęta zakresem terytorialnym polisy i okres ubezpieczenia już się rozpoczął. Zawsze należy kierować się informacjami wskazanymi w wystawionym dokumencie ubezpieczenia.",
      },
      {
        q: "Czy można korzystać z polisy po przybyciu do Marsylii lub Sète?",
        a:
          "Przed dokonaniem płatności należy podać nazwę portu i datę przybycia. Możliwość wystawienia polisy dla konkretnego portu można potwierdzić dopiero po sprawdzeniu trasy oraz wymagań zakładu ubezpieczeń.",
      },
      {
        q: "Czy ubezpieczenie trzeba zawrzeć przed wejściem na prom?",
        a:
          "W chwili rozpoczęcia jazdy po drogach we Francji musisz już posiadać ważną ochronę ubezpieczeniową. Dlatego zalecamy zakończenie weryfikacji i wystawienia polisy przed podróżą i niepoleganie na możliwości zakupu ubezpieczenia bezpośrednio po przybyciu do portu.",
      },
      {
        q: "Czy polisa obejmuje całą trasę z Algierii do Francji?",
        a:
          "Nie. Polisa nie zastępuje ubezpieczenia wymaganego na terytorium Algierii i nie obejmuje przeprawy morskiej. Jej zakres jest określony przez datę rozpoczęcia ochrony oraz kraje wskazane w dokumencie ubezpieczenia.",
      },
      {
        q: "Czy potrzebuję ubezpieczenia granicznego, jeśli mam ważoną Zieloną Kartę?",
        a:
          "Jeżeli posiadasz oryginalną, ważną Zieloną Kartę obejmującą Francję oraz wszystkie pozostałe kraje na trasie przez cały wymagany okres, dodatkowa polisa może nie być potrzebna. Sprawdź oznaczenie Francji i pozostałych państw oraz okres ważności Zielonej Karty.",
      },
      {
        q: "Czy polisa obowiązuje również w innych krajach Europy po wyjeździe z Francji?",
        a:
          "Może obowiązywać również w innych krajach europejskich, jeśli są one objęte zakresem terytorialnym polisy. Prześlij pełną trasę i sprawdź ostateczną listę państw w wystawionym dokumencie.",
      },
      {
        q: "Jakie dokumenty są potrzebne dla samochodu zarejestrowanego w Algierii?",
        a:
          "Potrzebny jest czytelny dokument rejestracyjny zawierający numer rejestracyjny, VIN, markę, model i dane właściciela, a także dane ubezpieczającego, datę przybycia oraz trasę podróży.",
      },
      {
        q: "Czy polisę ubezpieczeniową można otrzymać online?",
        a:
          "Tak. Wniosek i dokumenty przesyła się online. Po weryfikacji, płatności i wystawieniu polisy gotowy dokument w formacie PDF zostanie wysłany na Twój adres e-mail.",
      },
      {
        q: "Czy ubezpieczenie obejmuje szkody w samym samochodzie z Algierii?",
        a:
          "Nie. Jest to ubezpieczenie odpowiedzialności cywilnej wobec osób trzecich, a nie autocasco. Nie obejmuje kradzieży, awarii ani uszkodzeń własnego pojazdu.",
      },
    ],
  },

  carousel: {
    title: "Ubezpieczenie według trasy",
    cardTitle: "Samochód z Algierii jadący do Francji",
    cardText:
      "Informacje o ubezpieczeniu granicznym dla samochodu z algierskimi tablicami rejestracyjnymi po przybyciu do Francji i podczas dalszych podróży po Europie.",
    cta: "Sprawdź szczegóły trasy",
  },

  finalCta: {
    eyebrow: "Weryfikacja i wystawienie polisy",
    title: "Prześlij dokumenty dotyczące podróży z Algierii do Francji",
    text:
      "Prześlij dokument rejestracyjny pojazdu, port przybycia, datę przybycia promu oraz kraje, które planujesz odwiedzić. Po weryfikacji otrzymasz potwierdzenie możliwości wystawienia polisy, cenę oraz instrukcje dotyczące płatności.",
    button: "Wyślij wniosek",
  },
};

const en: UaeOcDictionary = {
  seo: {
    title: "Insurance for an Algerian Car in France | Border Insurance",
    description:
      "Border insurance for a vehicle registered in Algeria and travelling to France: route and document verification, price calculation, and delivery of the policy as a PDF after issuance.",
  },

  breadcrumbTitle: "Insurance for an Algerian Car in France",

  hero: {
    eyebrow: "Algeria → France",
    title: "Insurance for an Algerian Car Travelling to France",
    lead:
      "If your vehicle is registered in Algeria and you plan to use it in France, you must have valid third-party liability insurance that is recognised in France. If you do not have suitable coverage, we can check whether border insurance can be arranged for your vehicle before your trip.",
    noticeLabel: "Important:",
    notice:
      "Eligibility depends on the vehicle documents, the port of arrival, and the first country of entry into Europe. Send us your route before making payment, and do not assume that a policy can automatically be issued upon arrival at any French port.",
    primaryCta: "Submit an Insurance Application",
    secondaryCta: "Check Documents",
    cardLabel: "Route Details",
    facts: [
      {
        label: "Vehicle registration country",
        value: "Algeria",
      },
      {
        label: "Destination country",
        value: "France",
      },
      {
        label: "Type of insurance",
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
      label: "Applications are accepted",
      title: "For vehicles with Algerian registration plates",
      text:
        "We review insurance applications for vehicles registered in Algeria and travelling to France. Eligibility is confirmed after we check the vehicle registration document, vehicle type, and travel route. IMPORTANT! The vehicle registration number must contain no more than 8 characters and must not include the letter 'Q'.",
    },
    {
      tone: "warning",
      label: "Check before travelling",
      title: "Port of arrival and first country of entry",
      text:
        "Tell us whether you are arriving in Marseille, Sète, or another port, provide the arrival date, and list any other European countries on your route. These details may affect both eligibility and the required territorial scope of cover.",
    },
    {
      tone: "no",
      label: "This is not comprehensive insurance",
      title: "It does not cover damage to your own vehicle",
      text:
        "Border insurance covers the vehicle owner's third-party liability in the event of a covered accident. It does not cover theft, breakdowns, or damage to the insured vehicle itself.",
    },
  ],

  suitability: {
    eyebrow: "Who it is for",
    title: "When can Algeria → France insurance be suitable?",
    text:
      "This page is intended for vehicles registered in Algeria and used temporarily in France. In France, this type of cover is also known as assurance frontière. Eligibility can only be confirmed after reviewing the individual case.",
    yesTitle: "The policy may be suitable",
    noTitle: "This option is not suitable",
    yesItems: [
      "the vehicle is registered in Algeria and has Algerian registration plates;",
      "France is the country of arrival or one of the countries on the route;",
      "you do not have another valid insurance policy recognised in France;",
      "clear and legible vehicle registration documents are available;",
      "the policy can be issued before the vehicle is first used in France.",
    ],
    noItems: [
      "the vehicle is registered in a country within the European Economic Area;",
      "you already have a valid policy covering France for the entire trip;",
      "you need cover for theft of or damage to your own vehicle;",
      "you want the policy to be issued retroactively;",
      "the vehicle details or travel route cannot be verified from the documents provided.",
    ],
  },

  routeWarning: {
    eyebrow: "Ferry to France",
    title: "Check your insurance before arriving at a French port",
    text:
      "If you are travelling by ferry from Algeria to Marseille, Sète, or another French port, send us the name of the arrival port and the arrival date before making payment. The policy does not cover the sea crossing itself and does not replace any insurance required while driving in Algeria before boarding the ferry or any requirements imposed by the carrier.",
    cta: "Send Your Route",
  },

  coverage: {
    eyebrow: "Territorial coverage",
    title: "Is the policy valid in France and other European countries?",
    text:
      "The policy is valid in France if France is included in the territorial scope stated in the insurance document and the policy period has already begun. If you plan to continue travelling after France, check every country on your route against the list shown in the issued policy.",
    listLabel: "Popular destinations after arriving in France",
    countries: [
      "France",
      "Spain",
      "Belgium",
      "Luxembourg",
      "Germany",
      "Netherlands",
      "Italy",
      "Switzerland",
      "Austria",
      "Poland",
    ],
    warningTitle: "The final list in the policy is decisive",
    warningText:
      "A country being part of your route does not mean it is automatically covered. Each country must be included within the territorial scope of the policy. Separate insurance may be required for countries not listed in the document.",
    warningNote:
      "A policy intended for use in France and other European countries does not replace the local insurance required while driving in Algeria.",
  },

  documents: {
    eyebrow: "Required documents",
    title: "What is required to insure a vehicle registered in Algeria?",
    text:
      "The vehicle registration document must clearly show the registration number, VIN or chassis number, make, model, and owner's details. If some information is written only in Arabic, we may ask you to provide the same details in Latin characters.",
    vehicleTitle: "Vehicle details",
    policyholderTitle: "Policyholder and trip details",
    vehicleItems: [
      "a clear photo of the vehicle registration document or carte grise;",
      "Algerian registration number;",
      "VIN or chassis number;",
      "make and model;",
      "vehicle type and year of manufacture;",
      "owner's name as shown in the registration document;",
      "country of registration — Algeria.",
    ],
    policyholderItems: [
      "passport or another identity document;",
      "first name and surname in Latin characters;",
      "email address and phone number;",
      "insurance start date and required duration;",
      "port of departure and port of arrival;",
      "date the ferry arrives in France;",
      "all countries on the route after arrival.",
    ],
  },

  price: {
    eyebrow: "Price and duration",
    title: "How much does insurance for an Algerian car in France cost?",
    text:
      "The current price for a 30-day policy for a passenger car is 157.50 Polish zloty. Periods of 30, 60, 90, 180, or 364 days may also be available. The final price and eligibility are confirmed after the vehicle category, documents, and route have been reviewed.",
    factors: [
      "vehicle category;",
      "policy duration;",
      "insurance start date;",
      "outcome of the document and route verification.",
    ],
  },

  timing: {
    eyebrow: "Issuance time",
    title: "When should you apply before travelling?",
    text:
      "Submit your application at least one to two business days before the ferry arrives. The review includes the vehicle registration documents, port of arrival, and first country of entry. In some cases, additional approval from the insurer may also be required during its business hours.",
    notice:
      "The policy cannot be issued retroactively. Insurance coverage must begin before the vehicle is first used on public roads in France.",
  },

  steps: {
    eyebrow: "Application process",
    title: "How to arrange insurance for a trip from Algeria to France",
    items: [
      {
        title: "Provide your route",
        text:
          "Tell us the departure port in Algeria, the arrival port in France, the arrival date, and the countries you plan to visit afterwards.",
      },
      {
        title: "Send the vehicle documents",
        text:
          "Attach a clear photo of the registration document together with the policyholder's details.",
      },
      {
        title: "Wait for the verification result",
        text:
          "We will check the registration number, VIN, vehicle category, and eligibility based on the planned route.",
      },
      {
        title: "Pay after confirmation",
        text:
          "Once eligibility and the price have been confirmed, you will receive the available payment instructions.",
      },
      {
        title: "Receive the policy as a PDF",
        text:
          "After the policy has been issued, we will send the PDF file to the email address you provided.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Before driving in France",
    title: "What should you check in the issued policy?",
    text:
      "Before travelling, compare the details in the policy with the vehicle registration documents. An error in the registration number, VIN, or policy period may cause problems when the insurance is checked.",
    items: [
      "Algerian registration number;",
      "VIN or chassis number;",
      "country of registration — Algeria;",
      "vehicle make, model, and category;",
      "name of the insured person;",
      "date and time when coverage begins;",
      "policy expiry date;",
      "confirmation that France and all other countries on the route are included in the territorial scope of cover.",
    ],
  },

  faq: {
    eyebrow: "Frequently asked questions",
    title: "Frequently Asked Questions About Algeria → France Insurance",
    items: [
      {
        q: "Can I arrange insurance for a vehicle with Algerian registration plates when travelling to France?",
        a:
          "Yes. You can submit an application to check whether border insurance can be issued. The final decision depends on the vehicle registration documents, vehicle category, port of arrival, and first country of entry into Europe.",
      },
      {
        q: "Is border insurance valid in France?",
        a:
          "Yes, provided that France is expressly included in the territorial scope of the policy and the insurance period has already begun. Always rely on the information stated in the issued insurance document.",
      },
      {
        q: "Can the policy be used when arriving in Marseille or Sète?",
        a:
          "You must provide the port name and arrival date before making payment. Eligibility for a specific port can only be confirmed after the route and the insurer's requirements have been checked.",
      },
      {
        q: "Do I need to arrange the insurance before boarding the ferry?",
        a:
          "You must have valid insurance coverage by the time you start driving on public roads in France. We therefore recommend completing the verification and issuance process before travelling rather than relying on being able to buy the policy immediately after arriving at the port.",
      },
      {
        q: "Does the policy cover the entire route from Algeria to France?",
        a:
          "No. The policy does not replace insurance required within Algeria and does not cover the sea crossing. Its scope is determined by the insurance start date and the countries listed in the insurance document.",
      },
      {
        q: "Do I need border insurance if I already have a valid Green Card?",
        a:
          "If you have an original, valid Green Card that covers France and all other countries on your route for the entire required period, you may not need an additional policy. Check that France and the other countries are included and verify the validity dates shown on the Green Card.",
      },
      {
        q: "Is the policy valid in other European countries after France?",
        a:
          "It may also be valid in other European countries if they are included in the policy's territorial scope. Send us your full route and check the final list of countries in the issued document.",
      },
      {
        q: "What documents are required for a vehicle registered in Algeria?",
        a:
          "We need a clear registration document showing the registration number, VIN, make, model, and owner's details, as well as the policyholder's details, arrival date, and travel route.",
      },
      {
        q: "Can I receive the insurance policy online?",
        a:
          "Yes. The application and documents are submitted online. After verification, payment, and issuance, the final policy will be sent to your email address as a PDF.",
      },
      {
        q: "Does the insurance cover damage to the Algerian vehicle itself?",
        a:
          "No. This is third-party liability insurance, not comprehensive cover. It does not cover theft, breakdowns, or damage to your own vehicle.",
      },
    ],
  },

  carousel: {
    title: "Insurance by Route",
    cardTitle: "Algerian Vehicle Travelling to France",
    cardText:
      "Information about border insurance for a vehicle with Algerian registration plates arriving in France and continuing to travel within Europe.",
    cta: "View Route Details",
  },

  finalCta: {
    eyebrow: "Verification and issuance",
    title: "Send the Documents for Your Trip from Algeria to France",
    text:
      "Send the vehicle registration document, port of arrival, ferry arrival date, and the countries you plan to visit. After verification, you will receive confirmation of eligibility, the price, and payment instructions.",
    button: "Submit Application",
  },
};

const be: UaeOcDictionary = {
  seo: {
    title: "Страхоўка для аўтамабіля з Алжыра ў Францыі | Пагранічнае страхаванне",
    description:
      "Пагранічнае страхаванне для аўтамабіля, зарэгістраванага ў Алжыры, пры паездцы ў Францыю: праверка маршруту і дакументаў, разлік кошту і адпраўка поліса ў PDF пасля афармлення.",
  },

  breadcrumbTitle: "Страхоўка для аўтамабіля з Алжыра ў Францыі",

  hero: {
    eyebrow: "Алжыр → Францыя",
    title: "Страхоўка для аўтамабіля з Алжыра пры паездцы ў Францыю",
    lead:
      "Калі аўтамабіль зарэгістраваны ў Алжыры і вы плануеце карыстацца ім у Францыі, у вас павінна быць дзейнае страхаванне грамадзянскай адказнасці перад трэцімі асобамі, якое прызнаецца ў Францыі. Калі адпаведнага страхавога пакрыцця няма, мы можам праверыць магчымасць афармлення пагранічнага страхавання аўтамабіля да паездкі.",
    noticeLabel: "Важна:",
    notice:
      "Магчымасць афармлення залежыць ад дакументаў на аўтамабіль, порта прыбыцця і першай краіны ўезду ў Еўропу. Дашліце маршрут да аплаты і не разлічвайце на тое, што поліс можна будзе аўтаматычна аформіць пасля прыбыцця ў любы французскі порт.",
    primaryCta: "Адправіць заяўку на страхаванне",
    secondaryCta: "Праверыць дакументы",
    cardLabel: "Даныя маршруту",
    facts: [
      {
        label: "Краіна рэгістрацыі аўтамабіля",
        value: "Алжыр",
      },
      {
        label: "Краіна прызначэння",
        value: "Францыя",
      },
      {
        label: "Від страхавання",
        value: "Пагранічнае страхаванне",
      },
      {
        label: "Фармат поліса",
        value: "PDF па электроннай пошце",
      },
    ],
  },

  answers: [
    {
      tone: "yes",
      label: "Можна падаць заяўку",
      title: "Для аўтамабіляў з алжырскімі нумарамі",
      text:
        "Мы разглядаем заяўкі на страхаванне аўтамабіляў, зарэгістраваных у Алжыры і якія накіроўваюцца ў Францыю. Магчымасць афармлення пацвярджаецца пасля праверкі пасведчання аб рэгістрацыі, тыпу транспартнага сродку і маршруту паездкі. ВАЖНА! Рэгістрацыйны нумар аўтамабіля павінен змяшчаць не больш за 8 сімвалаў і не павінен утрымліваць літару «Q».",
    },
    {
      tone: "warning",
      label: "Праверце да паездкі",
      title: "Порт прыбыцця і першая краіна ўезду",
      text:
        "Пазначце, ці прыбываеце вы ў Марсэль, Сэт або іншы порт, дату прыбыцця, а таксама ўсе іншыя еўрапейскія краіны па маршруце. Гэтыя даныя могуць уплываць на магчымасць афармлення і неабходную тэрыторыю страхавога пакрыцця.",
    },
    {
      tone: "no",
      label: "Гэта не каска",
      title: "Не пакрывае шкоду вашаму аўтамабілю",
      text:
        "Пагранічнае страхаванне пакрывае грамадзянскую адказнасць уладальніка аўтамабіля перад трэцімі асобамі пры страхавым выпадку. Яно не кампенсуе шкоду ад угону, паломак або пашкоджання самога аўтамабіля.",
    },
  ],

  suitability: {
    eyebrow: "Каму падыходзіць",
    title: "У якіх выпадках можа падысці страхоўка Алжыр → Францыя?",
    text:
      "Гэтая старонка прызначана для аўтамабіляў, зарэгістраваных у Алжыры і часова выкарыстоўваемых у Францыі. У Францыі такі від страхавання таксама называецца assurance frontière. Магчымасць афармлення пацвярджаецца толькі пасля разгляду канкрэтнай сітуацыі.",
    yesTitle: "Поліс можа падысці",
    noTitle: "Гэты варыянт не падыходзіць",
    yesItems: [
      "аўтамабіль зарэгістраваны ў Алжыры і мае алжырскія рэгістрацыйныя нумары;",
      "Францыя з'яўляецца краінай прыбыцця або адной з краін маршруту;",
      "у вас няма іншага дзейнага страхавання, якое прызнаецца ў Францыі;",
      "ёсць выразныя і чытэльныя рэгістрацыйныя дакументы на аўтамабіль;",
      "поліс можна аформіць да пачатку выкарыстання аўтамабіля ў Францыі.",
    ],
    noItems: [
      "аўтамабіль зарэгістраваны ў адной з краін Еўрапейскай эканамічнай прасторы;",
      "у вас ужо ёсць дзейны поліс, які пакрывае Францыю на ўвесь перыяд паездкі;",
      "вам патрэбна страхаванне ад угону або пашкоджання ўласнага аўтамабіля;",
      "вы хочаце аформіць поліс заднім чыслом;",
      "даныя аўтамабіля або маршрут немагчыма пацвердзіць дакументамі.",
    ],
  },

  routeWarning: {
    eyebrow: "Паром у Францыю",
    title: "Праверце страхоўку да прыбыцця ў французскі порт",
    text:
      "Калі вы едзеце на пароме з Алжыра ў Марсэль, Сэт або іншы французскі порт, да аплаты паведаміце назву порта і дату прыбыцця. Поліс не пакрывае сам марскі пераход і не замяняе страхаванне, неабходнае для руху па тэрыторыі Алжыра да пасадкі на паром, а таксама патрабаванні перавозчыка.",
    cta: "Адправіць маршрут",
  },

  coverage: {
    eyebrow: "Тэрыторыя страхавання",
    title: "Ці дзейнічае поліс у Францыі і іншых краінах Еўропы?",
    text:
      "Поліс дзейнічае ў Францыі, калі Францыя ўключана ў тэрыторыю страхавання, пазначаную ў страхавым дакуменце, і тэрмін дзеяння поліса ўжо пачаўся. Калі пасля Францыі вы плануеце працягнуць паездку, неабходна праверыць усе краіны маршруту па спісе, пазначаным у выдадзеным полісе.",
    listLabel: "Папулярныя напрамкі пасля прыбыцця ў Францыю",
    countries: [
      "Францыя",
      "Іспанія",
      "Бельгія",
      "Люксембург",
      "Германія",
      "Нідэрланды",
      "Італія",
      "Швейцарыя",
      "Аўстрыя",
      "Польшча",
    ],
    warningTitle: "Арыентуйцеся на канчатковы спіс у полісе",
    warningText:
      "Наяўнасць краіны ў вашым маршруце не азначае, што яна аўтаматычна ўваходзіць у страхавое пакрыццё. Кожная краіна павінна ўваходзіць у тэрыторыю дзеяння поліса. Для краін, не пазначаных у ім, можа спатрэбіцца асобная страхоўка.",
    warningNote:
      "Поліс, прызначаны для выкарыстання ў Францыі і іншых краінах Еўропы, не замяняе мясцовае страхаванне, неабходнае для руху на аўтамабілі па тэрыторыі Алжыра.",
  },

  documents: {
    eyebrow: "Неабходныя дакументы",
    title: "Што трэба для страхавання аўтамабіля, зарэгістраванага ў Алжыры?",
    text:
      "Па рэгістрацыйным дакуменце павінны дакладна вызначацца рэгістрацыйны нумар аўтамабіля, VIN або нумар шасі, марка, мадэль і даныя ўладальніка. Калі частка інфармацыі пазначана толькі па-арабску, мы можам папрасіць падаць напісанне гэтых даных лацінкай.",
    vehicleTitle: "Даныя аўтамабіля",
    policyholderTitle: "Даныя страхавальніка і паездкі",
    vehicleItems: [
      "выразная фатаграфія пасведчання аб рэгістрацыі аўтамабіля або carte grise;",
      "алжырскі рэгістрацыйны нумар;",
      "VIN або нумар шасі;",
      "марка і мадэль;",
      "тып транспартнага сродку і год выпуску;",
      "імя ўладальніка ў адпаведнасці з рэгістрацыйным дакументам;",
      "краіна рэгістрацыі — Алжыр.",
    ],
    policyholderItems: [
      "пашпарт або іншы дакумент, які пацвярджае асобу;",
      "імя і прозвішча лацінкай;",
      "адрас электроннай пошты і нумар тэлефона;",
      "дата пачатку страхавання і неабходны тэрмін;",
      "порт адпраўлення і порт прыбыцця;",
      "дата прыбыцця парома ў Францыю;",
      "усе краіны маршруту пасля прыбыцця.",
    ],
  },

  price: {
    eyebrow: "Кошт і тэрмін",
    title: "Колькі каштуе страхоўка для аўтамабіля з Алжыра ў Францыі?",
    text:
      "Бягучы кошт поліса на 30 дзён для легкавога аўтамабіля складае 157,50 польскага злотага. Таксама могуць быць даступныя тэрміны 30, 60, 90, 180 або 364 дні. Канчатковы кошт і магчымасць афармлення пацвярджаюцца пасля праверкі катэгорыі транспартнага сродку, дакументаў і маршруту.",
    factors: [
      "катэгорыя транспартнага сродку;",
      "тэрмін дзеяння поліса;",
      "дата пачатку страхавання;",
      "вынік праверкі дакументаў і маршруту.",
    ],
  },

  timing: {
    eyebrow: "Тэрмін афармлення",
    title: "Калі трэба адправіць заяўку перад паездкай?",
    text:
      "Адпраўце заяўку як мінімум за адзін-два працоўныя дні да прыбыцця парома. Пры праверцы ўлічваюцца рэгістрацыйныя дакументы аўтамабіля, порт прыбыцця і першая краіна ўезду. У некаторых выпадках таксама можа спатрэбіцца дадатковае ўзгадненне са страхавой кампаніяй у яе працоўны час.",
    notice:
      "Поліс нельга аформіць заднім чыслом. Страхавое пакрыццё павінна пачаць дзейнічаць да таго, як аўтамабіль пачнуць выкарыстоўваць на дарогах Францыі.",
  },

  steps: {
    eyebrow: "Парадак афармлення",
    title: "Як аформіць страхоўку для паездкі з Алжыра ў Францыю",
    items: [
      {
        title: "Пазначце маршрут",
        text:
          "Паведаміце порт адпраўлення ў Алжыры, порт прыбыцця ў Францыі, дату прыбыцця і краіны, якія плануеце наведаць далей.",
      },
      {
        title: "Адпраўце дакументы на аўтамабіль",
        text:
          "Далучыце выразную фатаграфію рэгістрацыйнага дакумента і даныя страхавальніка.",
      },
      {
        title: "Дачакайцеся выніку праверкі",
        text:
          "Мы праверым рэгістрацыйны нумар, VIN, катэгорыю транспартнага сродку і магчымасць афармлення з улікам маршруту.",
      },
      {
        title: "Аплаціце пасля пацвярджэння",
        text:
          "Пасля пацвярджэння магчымасці афармлення і кошту вы атрымаеце даступныя інструкцыі па аплаце.",
      },
      {
        title: "Атрымайце поліс у PDF",
        text:
          "Пасля афармлення мы адправім PDF-файл поліса на пазначаны вамі адрас электроннай пошты.",
      },
    ],
  },

  beforeTrip: {
    eyebrow: "Перад паездкай па Францыі",
    title: "Што праверыць у аформленым полісе?",
    text:
      "Перад паездкай параўнайце даныя ў полісе з рэгістрацыйнымі дакументамі аўтамабіля. Памылка ў рэгістрацыйным нумары, VIN або тэрміне дзеяння можа прывесці да праблем пры праверцы страхавання.",
    items: [
      "алжырскі рэгістрацыйны нумар;",
      "VIN або нумар шасі;",
      "краіна рэгістрацыі — Алжыр;",
      "марка, мадэль і катэгорыя транспартнага сродку;",
      "імя застрахаванай асобы;",
      "дата і час пачатку страхавога пакрыцця;",
      "дата заканчэння дзеяння поліса;",
      "наяўнасць Францыі і ўсіх астатніх краін маршруту ў тэрыторыі страхавога пакрыцця.",
    ],
  },

  faq: {
    eyebrow: "Частыя пытанні",
    title: "Частыя пытанні пра страхоўку Алжыр → Францыя",
    items: [
      {
        q: "Ці можна аформіць страхоўку для аўтамабіля з алжырскімі нумарамі пры паездцы ў Францыю?",
        a:
          "Так, можна падаць заяўку на праверку магчымасці афармлення пагранічнага страхавання. Канчатковае рашэнне залежыць ад рэгістрацыйных дакументаў аўтамабіля, катэгорыі транспартнага сродку, порта прыбыцця і першай краіны ўезду ў Еўропу.",
      },
      {
        q: "Ці дзейнічае пагранічнае страхаванне ў Францыі?",
        a:
          "Так, калі Францыя непасрэдна ўключана ў тэрыторыю дзеяння поліса і тэрмін страхавання ўжо пачаўся. Заўсёды арыентуйцеся на даныя, пазначаныя ў выдадзеным страхавым дакуменце.",
      },
      {
        q: "Ці можна выкарыстоўваць поліс пры прыбыцці ў Марсэль або Сэт?",
        a:
          "Да аплаты неабходна паведаміць назву порта і дату прыбыцця. Магчымасць афармлення для канкрэтнага порта можна пацвердзіць толькі пасля праверкі маршруту і патрабаванняў страхавой кампаніі.",
      },
      {
        q: "Ці трэба аформіць страхоўку да пасадкі на паром?",
        a:
          "Да моманту пачатку руху аўтамабіля па дарогах Францыі ў вас ужо павінна быць дзейнае страхавое пакрыццё. Таму рэкамендуем завяршыць праверку і афармленне да паездкі і не разлічваць на магчымасць купіць поліс адразу пасля прыбыцця ў порт.",
      },
      {
        q: "Ці пакрывае поліс увесь маршрут з Алжыра ў Францыю?",
        a:
          "Не. Поліс не замяняе страхаванне, неабходнае на тэрыторыі Алжыра, і не распаўсюджваецца на марскі пераход. Яго дзеянне вызначаецца датай пачатку страхавання і краінамі, пазначанымі ў страхавым дакуменце.",
      },
      {
        q: "Ці патрэбна пагранічнае страхаванне, калі ў мяне ёсць дзейная Зялёная карта?",
        a:
          "Калі ў вас ёсць арыгінальная дзейная Зялёная карта, якая пакрывае Францыю і ўсе астатнія краіны маршруту на ўвесь неабходны перыяд, дадатковы поліс можа не спатрэбіцца. Праверце абазначэнне Францыі і іншых краін, а таксама даты дзеяння Зялёнай карты.",
      },
      {
        q: "Ці дзейнічае поліс у іншых еўрапейскіх краінах пасля Францыі?",
        a:
          "Ён можа дзейнічаць і ў іншых краінах Еўропы, калі яны ўключаны ў тэрыторыю страхавання. Дашліце поўны маршрут і праверце канчатковы спіс краін у выдадзеным дакуменце.",
      },
      {
        q: "Якія дакументы патрэбны для аўтамабіля, зарэгістраванага ў Алжыры?",
        a:
          "Патрэбны выразны рэгістрацыйны дакумент, у якім пазначаны рэгістрацыйны нумар, VIN, марка, мадэль і даныя ўладальніка, а таксама даныя страхавальніка, дата прыбыцця і маршрут паездкі.",
      },
      {
        q: "Ці можна атрымаць страхавы поліс анлайн?",
        a:
          "Так. Заяўка і дакументы адпраўляюцца анлайн. Пасля праверкі, аплаты і афармлення гатовы поліс у фармаце PDF будзе адпраўлены на вашу электронную пошту.",
      },
      {
        q: "Ці пакрывае страхоўка пашкоджанне самога аўтамабіля з Алжыра?",
        a:
          "Не. Гэта страхаванне грамадзянскай адказнасці перад трэцімі асобамі, а не каска. Яно не пакрывае ўгон, паломкі або пашкоджанне вашага аўтамабіля.",
      },
    ],
  },

  carousel: {
    title: "Страхаванне па маршруце",
    cardTitle: "Аўтамабіль з Алжыра ў Францыю",
    cardText:
      "Інфармацыя пра пагранічнае страхаванне аўтамабіля з алжырскімі рэгістрацыйнымі нумарамі пры прыбыцці ў Францыю і далейшых паездках па Еўропе.",
    cta: "Паглядзець умовы маршруту",
  },

  finalCta: {
    eyebrow: "Праверка і афармленне",
    title: "Адпраўце дакументы для паездкі з Алжыра ў Францыю",
    text:
      "Адпраўце рэгістрацыйны дакумент аўтамабіля, порт прыбыцця, дату прыбыцця парома і краіны, якія плануеце наведаць. Пасля праверкі вы атрымаеце пацвярджэнне магчымасці афармлення, кошт і інструкцыі па аплаце.",
    button: "Адправіць заяўку",
  },
};

const dictionaries: Partial<Record<Lang, UaeOcDictionary>> = {
  ru,
  pl,
  en,
  be,
  uz: ru,
  ka: ru,
  kk: ru,
  tr: en,
  fa: ar,
  hy: ru,

  ar,
  he: ar,

  ckb: ar,
  kmr: en,

  az: ru,
  uk: ru,

  ro: en,
  sr: en,
  sq: en,
  mn: en,
};

export function getAlgeriaFranceOcDictionary(
  lang: Lang,
): UaeOcDictionary {
  return dictionaries[lang] ?? ar;
}