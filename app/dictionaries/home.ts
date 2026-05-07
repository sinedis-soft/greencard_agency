// app/dictionaries/home.ts
import type { Lang } from "@/app/dictionaries/header";

export type VerifyCode = "PL" | "LV" | "LT";

export interface HomeDictionary {
  hero: {
    kicker: string;
    title: string;
    lead: string;
    meta: [string, string, string];
    ctaCalc: string;
    ctaBuy: string;
  };

  calc: {
    title: string;
    badge: string;
    desc: string;
    termLabel: string;
    vehicleLabel: string;
    termOptions: Array<{ value: "30" | "60" | "90" | "180" | "365"; label: string }>;
    vehicleOptions: Array<{ value: "car" | "van" | "truck" | "trailer" | "special"; label: string }>;
    button: string;
    note: string;
  };

  process: {
    title: string;
    desc: string;
    steps: Array<{ title: string; text: string }>; // 4 шага
  };

  why: {
    title: string;
    desc: string;
    items: Array<{ title: string; text: string }>;
  };

  form: {
    title: string;
    desc: string;
  };

  faq: {
    title: string;
    desc: string;
    items: Array<{ q: string; a: string }>;
  };

  verify: {
    title: string;
    lead: string;
    items: Array<{
      code: VerifyCode;
      country: string;
      org: string;
      desc: string;
      cta: string;
      href: string;
    }>;
  };
}

export const homeDictionary: Record<Lang, HomeDictionary> = {
  ru: {
    hero: {
      kicker: "Онлайн-оформление",
      title: "Договор пограничного страхования (OC graniczne) — быстро и без лишних шагов",
      lead:
        "Рассчитайте стоимость, заполните заявку и получите PDF-полис. Для авто из стран зарегистрированных за пределами ЕС — полис легко проверить по базе страхования Республики Польша (UFG).",
      meta: ["PDF-полис после оформления", "Поддержка в мессенджерах", "Понятные условия"],
      ctaCalc: "Рассчитать стоимость",
      ctaBuy: "Оформить полис",
    },

    calc: {
      title: "Калькулятор стоимости",
      badge: "~ 1 минута",
      desc: "простой тарифный калькулятор",
      termLabel: "Срок",
      vehicleLabel: "Тип ТС",
      termOptions: [
        { value: "30", label: "30 дней" },
        { value: "60", label: "60 дней" },
        { value: "90", label: "90 дней" },
        { value: "180", label: "180 дней" },
        { value: "365", label: "364 дня" },
      ],
      vehicleOptions: [
        { value: "car", label: "Легковые" },
        { value: "van", label: "Автобусы" },
        { value: "truck", label: "Грузовые" },
        { value: "trailer", label: "Прицепы" },
        { value: "special", label: "Спецтехника" },
      ],
      button: "Рассчитать",
      note: "note",
    },

    process: {
      title: "Как это работает",
      desc: "Пошагово: расчёт → данные → оплата → полис.",
      steps: [
        { title: "Рассчитайте", text: "Выберите тип транспортного средства и срок страхования." },
        { title: "Заполните данные", text: "Адрес регистрации, госномер, VIN и контакты." },
        { title: "Оплатите", text: "После подготовки полиса мы отправим Вам реквизиты на оплату." },
        { title: "Получите PDF-полис", text: "Сразу после получения нами подтверждения оплаты." },
      ],
    },

    
    why: {
      title: "Почему выбирают нас",
      desc: "Фокус на скорости, понятности и корректности оформления.",
      items: [
        { title: "Быстро", text: "Минимум шагов и ясная структура." },
        { title: "Понятно", text: "Объясняем различия продуктов простым языком." },
        { title: "Практично", text: "Ориентируемся на официальные проверки и требования." },
        { title: "Поддержка", text: "Помогаем с вопросами по оформлению и проверке." },
      ],
    },

    form: {
      title: "Форма заявки",
      desc: "Заполните данные — мы подготовим полис и пришлем данные для оплаты.",
    },

    faq: {
      title: "FAQ",
      desc: "Короткие ответы на частые вопросы.",
      items: [
        { q: "Сколько времени занимает оформление?", a: "Обычно 10–20 минут при наличии всех данных. Но общая рекомендация - оформляйте полис за день - два до необходимого начала действия покрытия" },
        { q: "Можно ли оплатить картой?", a: "На данном этапе доступен только SWIFT, SEPA и P2P переводы, оплата BLIKом,после подготовки полиса вы оплачиваете и получаете PDF." },
        { q: "Это то же самое, что «зелёная карта»?", a: "Нет. Это разные продукты и разные правила." },
        { q: "Что это за страховка?", a: "Это обязательное страхование ответственности владельцев или пользователей механических транспортных средств, действующее на территории Польши и ЕС." },
        {
          q: "Что покрывает страховка?",
          a: `Покрытие включает:
            • Вред жизни или здоровью пострадавших;
            • Имущественный вред третьим лицам.
            
            Минимальные гарантированные суммы:
            •  29 876 400 PLN — телесные повреждения;
            •  6 021 600 PLN — имущественный вред.`
        },
        {
          q: "Что не покрывает страховка?",
          a: `•  велосипеды и немеханические ТС;
              •  ущерб владельцу автомобиля;
              •  ущерб окружающей среде.`
        },
        {
          q: "В каких случаях возможен регресс?",
          a: `Страховая вправе взыскать выплаченную сумму, если водитель:
            • действовал умышленно;
            • был пьян или под наркотиками;
            • не имел прав;
            • скрылся с места ДТП;
            • использовал угнанный автомобиль.`
        },
        {
          q: "Когда начинается и заканчивается полис?",
          a: `Начало: дата выдачи полиса.

              Срок действия: 30–364 дня.

              Прекращение:
              • окончание срока;
              • угон или списание автомобиля;
              • снятие с учёта.`
        },
      ],
    },

    verify: {
      title: "Проверка действительности полиса",
      lead:
        "Если вы хотите убедиться, что ваш полис действительно активен, воспользуйтесь официальными базами страховых бюро. Ниже — ссылки на сервисы для Польши, Латвии и Литвы.",
      items: [
        {
          code: "PL",
          country: "Польша",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Проверка действительности полиса OC по номеру регистрации или VIN в официальной базе UFG.",
          cta: "Перейти на сайт UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Латвия",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Проверка обязательной страховки OCTA для транспортных средств, зарегистрированных в Латвии.",
          cta: "Проверить через LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Сервис проверки действительности полиса обязательного страхования гражданской ответственности в Литве.",
          cta: "Проверить через CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
  },
  pl: {
    hero: {
      kicker: "Zawarcie online",
      title:
        "Ubezpieczenie graniczne (OC graniczne) — szybko i bez zbędnych formalności",
      lead:
        "Oblicz składkę, wypełnij wniosek i otrzymaj polisę PDF. Dla pojazdów zarejestrowanych poza UE — polisę można łatwo zweryfikować w bazie ubezpieczeniowej Polski (UFG).",
      meta: [
        "Polisa PDF po zawarciu umowy",
        "Wsparcie w komunikatorach",
        "Przejrzyste warunki",
      ],
      ctaCalc: "Oblicz składkę",
      ctaBuy: "Zawrzyj polisę",
    },

    calc: {
      title: "Kalkulator składki",
      badge: "~ 1 minuta",
      desc: "prosty kalkulator taryfowy",
      termLabel: "Okres",
      vehicleLabel: "Typ pojazdu",
      termOptions: [
        { value: "30", label: "30 dni" },
        { value: "60", label: "60 dni" },
        { value: "90", label: "90 dni" },
        { value: "180", label: "180 dni" },
        { value: "365", label: "364 dni" },
      ],
      vehicleOptions: [
        { value: "car", label: "Samochody osobowe" },
        { value: "van", label: "Autobusy" },
        { value: "truck", label: "Pojazdy ciężarowe" },
        { value: "trailer", label: "Przyczepy" },
        { value: "special", label: "Pojazdy specjalne" },
      ],
      button: "Oblicz",
      note: "note",
    },

    process: {
      title: "Jak to działa",
      desc: "Krok po kroku: kalkulacja → dane → płatność → polisa.",
      steps: [
        {
          title: "Oblicz składkę",
          text:
            "Wybierz typ pojazdu oraz okres ubezpieczenia.",
        },
        {
          title: "Wprowadź dane",
          text:
            "Adres rejestracji, numer rejestracyjny, VIN oraz dane kontaktowe.",
        },
        {
          title: "Dokonaj płatności",
          text:
            "Po przygotowaniu polisy prześlemy Państwu dane do płatności.",
        },
        {
          title: "Odbierz polisę PDF",
          text:
            "Natychmiast po otrzymaniu potwierdzenia płatności.",
        },
      ],
    },

    why: {
      title: "Dlaczego klienci wybierają nas",
      desc:
        "Stawiamy na szybkość, przejrzystość i poprawność zawarcia ubezpieczenia.",
      items: [
        {
          title: "Szybko",
          text:
            "Minimum formalności i przejrzysty proces.",
        },
        {
          title: "Przejrzyście",
          text:
            "Wyjaśniamy różnice między produktami prostym i zrozumiałym językiem.",
        },
        {
          title: "Praktycznie",
          text:
            "Uwzględniamy oficjalne wymagania oraz procedury weryfikacyjne.",
        },
        {
          title: "Wsparcie",
          text:
            "Pomagamy w kwestiach związanych z zawarciem i weryfikacją polisy.",
        },
      ],
    },

    form: {
      title: "Formularz wniosku",
      desc:
        "Wypełnij dane — przygotujemy polisę i prześlemy informacje do płatności.",
    },

    faq: {
      title: "FAQ",
      desc: "Krótkie odpowiedzi na najczęściej zadawane pytania.",
      items: [
        {
          q: "Ile trwa zawarcie polisy?",
          a:
            "Zazwyczaj od 10 do 20 minut, jeśli wszystkie dane są dostępne. Zalecamy jednak zawarcie polisy 1–2 dni przed planowaną datą rozpoczęcia ochrony.",
        },
        {
          q: "Czy można zapłacić kartą?",
          a:
            "Obecnie dostępne są wyłącznie przelewy SWIFT, SEPA, P2P oraz płatności BLIK. Po przygotowaniu polisy dokonują Państwo płatności i otrzymują polisę PDF.",
        },
        {
          q: "Czy to jest to samo co Zielona Karta?",
          a:
            "Nie. Są to różne produkty ubezpieczeniowe i obowiązują dla nich odmienne zasady.",
        },
        {
          q: "Co to za ubezpieczenie?",
          a:
            "Jest to obowiązkowe ubezpieczenie odpowiedzialności cywilnej posiadaczy lub użytkowników pojazdów mechanicznych obowiązujące na terytorium Polski i Unii Europejskiej.",
        },
        {
          q: "Co obejmuje ubezpieczenie?",
          a: `Zakres ochrony obejmuje:
              • szkody na życiu lub zdrowiu osób poszkodowanych;
              • szkody majątkowe wyrządzone osobom trzecim.
              
              Minimalne sumy gwarancyjne:
              • 29 876 400 PLN — szkody osobowe;
              • 6 021 600 PLN — szkody majątkowe.`,
        },
        {
          q: "Czego ubezpieczenie nie obejmuje?",
          a: `• rowerów i pojazdów niemechanicznych;
              • szkód właściciela pojazdu;
              • szkód w środowisku naturalnym.`,
        },
        {
          q: "W jakich przypadkach możliwy jest regres ubezpieczeniowy?",
          a: `Zakład ubezpieczeń ma prawo dochodzić zwrotu wypłaconego odszkodowania, jeżeli kierowca:
              • działał umyślnie;
              • prowadził pojazd pod wpływem alkoholu lub środków odurzających;
              • nie posiadał uprawnień do kierowania pojazdem;
              • zbiegł z miejsca zdarzenia;
              • korzystał z pojazdu pochodzącego z kradzieży.`,
        },
        {
          q: "Kiedy rozpoczyna się i kończy ochrona?",
          a: `Początek ochrony: data wystawienia polisy.

              Okres obowiązywania: od 30 do 364 dni.

              Wygaśnięcie ochrony:
              • upływ okresu ubezpieczenia;
              • kradzież lub wyrejestrowanie pojazdu;
              • wycofanie pojazdu z ruchu.`,
        },
      ],
    },

    verify: {
      title: "Weryfikacja ważności polisy",
      lead:
        "Jeżeli chcą Państwo upewnić się, że polisa jest aktywna, można skorzystać z oficjalnych baz biur ubezpieczycieli komunikacyjnych. Poniżej znajdują się odnośniki do serwisów dla Polski, Łotwy i Litwy.",
      items: [
        {
          code: "PL",
          country: "Polska",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc:
            "Weryfikacja ważności polisy OC na podstawie numeru rejestracyjnego lub VIN w oficjalnej bazie UFG.",
          cta: "Przejdź do serwisu UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Łotwa",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc:
            "Weryfikacja obowiązkowego ubezpieczenia OCTA dla pojazdów zarejestrowanych na Łotwie.",
          cta: "Sprawdź w LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litwa",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "Serwis do sprawdzania ważności obowiązkowego ubezpieczenia odpowiedzialności cywilnej na Litwie.",
          cta: "Sprawdź w CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  en: {
    hero: {
      kicker: "Online Issuance",
      title:
        "Border Insurance Agreement (OC graniczne) — Fast and Straightforward",
      lead:
        "Calculate the premium, complete the application, and receive your PDF policy. For vehicles registered outside the EU, the policy can be easily verified through the insurance database of the Republic of Poland (UFG).",
      meta: [
        "PDF policy after issuance",
        "Messenger support",
        "Clear and transparent terms",
      ],
      ctaCalc: "Calculate Premium",
      ctaBuy: "Purchase Policy",
    },

    calc: {
      title: "Premium Calculator",
      badge: "~ 1 minute",
      desc: "Simple premium calculator",
      termLabel: "Period",
      vehicleLabel: "Vehicle Type",
      termOptions: [
        { value: "30", label: "30 days" },
        { value: "60", label: "60 days" },
        { value: "90", label: "90 days" },
        { value: "180", label: "180 days" },
        { value: "365", label: "364 days" },
      ],
      vehicleOptions: [
        { value: "car", label: "Passenger Cars" },
        { value: "van", label: "Buses" },
        { value: "truck", label: "Trucks" },
        { value: "trailer", label: "Trailers" },
        { value: "special", label: "Special Equipment" },
      ],
      button: "Calculate",
      note: "note",
    },

    process: {
      title: "How It Works",
      desc: "Step by step: calculation → details → payment → policy.",
      steps: [
        {
          title: "Calculate",
          text:
            "Select the vehicle type and insurance period.",
        },
        {
          title: "Provide Details",
          text:
            "Registration address, registration number, VIN, and contact details.",
        },
        {
          title: "Make Payment",
          text:
            "Once the policy is prepared, we will send you the payment details.",
        },
        {
          title: "Receive PDF Policy",
          text:
            "Immediately after we receive confirmation of payment.",
        },
      ],
    },

    why: {
      title: "Why Clients Choose Us",
      desc:
        "Focused on speed, clarity, and accurate policy issuance.",
      items: [
        {
          title: "Fast",
          text:
            "Minimum steps and a clear process structure.",
        },
        {
          title: "Clear",
          text:
            "We explain product differences in straightforward language.",
        },
        {
          title: "Practical",
          text:
            "We focus on official verification requirements and compliance standards.",
        },
        {
          title: "Support",
          text:
            "We assist with policy issuance and verification questions.",
        },
      ],
    },

    form: {
      title: "Application Form",
      desc:
        "Provide your details — we will prepare the policy and send payment instructions.",
    },

    faq: {
      title: "FAQ",
      desc: "Short answers to common questions.",
      items: [
        {
          q: "How long does the issuance process take?",
          a:
            "Usually 10–20 minutes, provided all required information is available. However, we generally recommend arranging the policy one or two days before the required start date of coverage.",
        },
        {
          q: "Can I pay by card?",
          a:
            "At this stage, only SWIFT, SEPA, P2P transfers, and BLIK payments are available. Once the policy is prepared, you complete the payment and receive the PDF policy.",
        },
        {
          q: "Is this the same as a Green Card?",
          a:
            "No. These are different insurance products governed by different rules.",
        },
        {
          q: "What type of insurance is this?",
          a:
            "This is compulsory motor third-party liability insurance valid within Poland and the European Union.",
        },
        {
          q: "What does the insurance cover?",
          a: `Coverage includes:
              • Bodily injury or death of third parties;
              • Property damage caused to third parties.
              
              Minimum guaranteed sums:
              • PLN 29,876,400 — bodily injury claims;
              • PLN 6,021,600 — property damage claims.`,
        },
        {
          q: "What is not covered by the insurance?",
          a: `• Bicycles and non-mechanical vehicles;
                • Damage suffered by the vehicle owner;
                • Environmental damage.`,
        },
        {
          q: "In which cases may the insurer exercise a right of recourse?",
          a: `The insurer may recover paid compensation if the driver:
              • acted intentionally;
              • was under the influence of alcohol or drugs;
              • did not hold a valid driving licence;
              • fled the scene of the accident;
              • used a stolen vehicle.`,
        },
        {
          q: "When does the policy start and end?",
          a: `Start date: the date of policy issuance.

                Insurance period: 30–364 days.

                Termination:
                • expiry of the insurance period;
                • theft or disposal of the vehicle;
                • vehicle deregistration.`,
        },
      ],
    },

    verify: {
      title: "Policy Validity Verification",
      lead:
        "If you wish to verify that your policy is active, you may use the official insurance bureau databases listed below. The following links provide access to verification services for Poland, Latvia, and Lithuania.",
      items: [
        {
          code: "PL",
          country: "Poland",
          org: "UFG — Insurance Guarantee Fund",
          desc:
            "Verification of OC policy validity by registration number or VIN through the official UFG database.",
          cta: "Visit UFG Website",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Latvia",
          org: "LTAB — Latvian Motor Insurers’ Bureau",
          desc:
            "Verification of compulsory OCTA insurance for vehicles registered in Latvia.",
          cta: "Verify via LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lithuania",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "Service for verifying the validity of compulsory motor third-party liability insurance in Lithuania.",
          cta: "Verify via CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  be: {
    hero: {
      kicker: "Анлайн-афармленне",
      title:
        "Дагавор памежнага страхавання (OC graniczne) — хутка і без лішніх крокаў",
      lead:
        "Разлічыце кошт, запоўніце заяўку і атрымайце PDF-поліс. Для аўтамабіляў з краін, зарэгістраваных па-за межамі ЕС, поліс лёгка праверыць праз страхавую базу Рэспублікі Польшча (UFG).",
      meta: [
        "PDF-поліс пасля афармлення",
        "Падтрымка ў месенджарах",
        "Зразумелыя ўмовы",
      ],
      ctaCalc: "Разлічыць кошт",
      ctaBuy: "Аформіць поліс",
    },

    calc: {
      title: "Калькулятар кошту",
      badge: "~ 1 хвіліна",
      desc: "просты тарыфны калькулятар",
      termLabel: "Тэрмін",
      vehicleLabel: "Тып ТС",
      termOptions: [
        { value: "30", label: "30 дзён" },
        { value: "60", label: "60 дзён" },
        { value: "90", label: "90 дзён" },
        { value: "180", label: "180 дзён" },
        { value: "365", label: "364 дні" },
      ],
      vehicleOptions: [
        { value: "car", label: "Легкавыя" },
        { value: "van", label: "Аўтобусы" },
        { value: "truck", label: "Грузавыя" },
        { value: "trailer", label: "Прычэпы" },
        { value: "special", label: "Спецтэхніка" },
      ],
      button: "Разлічыць",
      note: "note",
    },

    process: {
      title: "Як гэта працуе",
      desc: "Пакрокава: разлік → даныя → аплата → поліс.",
      steps: [
        {
          title: "Разлічыце",
          text:
            "Выберыце тып транспартнага сродку і тэрмін страхавання.",
        },
        {
          title: "Запоўніце даныя",
          text:
            "Адрас рэгістрацыі, дзяржаўны нумар, VIN і кантактныя даныя.",
        },
        {
          title: "Аплаціце",
          text:
            "Пасля падрыхтоўкі поліса мы накіруем вам рэквізіты для аплаты.",
        },
        {
          title: "Атрымайце PDF-поліс",
          text:
            "Адразу пасля атрымання намі пацвярджэння аплаты.",
        },
      ],
    },

    why: {
      title: "Чаму выбіраюць нас",
      desc:
        "Фокус на хуткасці, зразумеласці і карэктнасці афармлення.",
      items: [
        {
          title: "Хутка",
          text: "Мінімум крокаў і зразумелая структура.",
        },
        {
          title: "Зразумела",
          text:
            "Тлумачым адрозненні страхавых прадуктаў простай мовай.",
        },
        {
          title: "Практычна",
          text:
            "Арыентуемся на афіцыйныя праверкі і патрабаванні.",
        },
        {
          title: "Падтрымка",
          text:
            "Дапамагаем з пытаннямі па афармленні і праверцы.",
        },
      ],
    },

    form: {
      title: "Форма заяўкі",
      desc:
        "Запоўніце даныя — мы падрыхтуем поліс і накіруем інфармацыю для аплаты.",
    },

    faq: {
      title: "FAQ",
      desc: "Кароткія адказы на частыя пытанні.",
      items: [
        {
          q: "Колькі часу займае афармленне?",
          a:
            "Звычайна 10–20 хвілін пры наяўнасці ўсіх неабходных даных. Аднак агульная рэкамендацыя — афармляць поліс за адзін-два дні да неабходнай даты пачатку страхавога пакрыцця.",
        },
        {
          q: "Ці можна аплаціць карткай?",
          a:
            "На дадзеным этапе даступныя толькі SWIFT, SEPA і P2P-пераводы, а таксама аплата праз BLIK. Пасля падрыхтоўкі поліса вы аплачваеце і атрымліваеце PDF.",
        },
        {
          q: "Гэта тое ж самае, што «зялёная карта»?",
          a:
            "Не. Гэта розныя страхавыя прадукты і розныя правілы.",
        },
        {
          q: "Што гэта за страхаванне?",
          a:
            "Гэта абавязковае страхаванне грамадзянскай адказнасці ўладальнікаў або карыстальнікаў механічных транспартных сродкаў, якое дзейнічае на тэрыторыі Польшчы і ЕС.",
        },
        {
          q: "Што пакрывае страхаванне?",
          a: `Пакрыццё ўключае:
              • шкоду жыццю або здароўю пацярпелых;
              • маёмасную шкоду трэцім асобам.

              Мінімальныя гарантаваныя сумы:
              • 29 876 400 PLN — цялесныя пашкоджанні;
              • 6 021 600 PLN — маёмасная шкода.`,
        },
        {
          q: "Што не пакрываецца страхаваннем?",
          a: `• веласіпеды і немеханічныя ТС;
              • шкода ўладальніку аўтамабіля;
              • шкода навакольнаму асяроддзю.`,
        },
        {
          q: "У якіх выпадках магчымы рэгрэс?",
          a: `Страхавая кампанія мае права спагнаць выплачаную суму, калі кіроўца:
              • дзейнічаў наўмысна;
              • знаходзіўся ў стане алкагольнага або наркатычнага ап’янення;
              • не меў права кіравання;
              • пакінуў месца ДТЗ;
              • выкарыстоўваў угнаны аўтамабіль.`,
        },
        {
          q: "Калі пачынаецца і заканчваецца дзеянне поліса?",
          a: `Пачатак: дата выдачы поліса.

              Тэрмін дзеяння: 30–364 дні.

              Спыненне дзеяння:
              • заканчэнне тэрміну;
              • угон або спісанне аўтамабіля;
              • зняцце з уліку.`,
        },
      ],
    },

    verify: {
      title: "Праверка сапраўднасці поліса",
      lead:
        "Калі вы хочаце пераканацца, што ваш поліс сапраўды актыўны, скарыстайцеся афіцыйнымі базамі страхавых бюро. Ніжэй — спасылкі на сэрвісы для Польшчы, Латвіі і Літвы.",
      items: [
        {
          code: "PL",
          country: "Польшча",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc:
            "Праверка сапраўднасці поліса OC па дзяржаўным нумары або VIN у афіцыйнай базе UFG.",
          cta: "Перайсці на сайт UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Латвія",
          org:
            "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc:
            "Праверка абавязковага страхавання OCTA для транспартных сродкаў, зарэгістраваных у Латвіі.",
          cta: "Праверыць праз LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Літва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "Сэрвіс праверкі сапраўднасці поліса абавязковага страхавання грамадзянскай адказнасці ў Літве.",
          cta: "Праверыць праз CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  uz: {
    hero: {
      kicker: "Onlayn rasmiylashtirish",
      title:
        "Chegara sug‘urtasi shartnomasi (OC graniczne) — tez va ortiqcha bosqichlarsiz",
      lead:
        "Narxni hisoblang, arizani to‘ldiring va PDF-polisni oling. YI hududidan tashqarida ro‘yxatdan o‘tgan avtomobillar uchun polisni Polsha Respublikasining sug‘urta bazasi (UFG) orqali oson tekshirish mumkin.",
      meta: [
        "Rasmiylashtirishdan so‘ng PDF-polis",
        "Messengerlar orqali qo‘llab-quvvatlash",
        "Tushunarli shartlar",
      ],
      ctaCalc: "Narxni hisoblash",
      ctaBuy: "Polis rasmiylashtirish",
    },

    calc: {
      title: "Narx kalkulyatori",
      badge: "~ 1 daqiqa",
      desc: "oddiy tarif kalkulyatori",
      termLabel: "Muddat",
      vehicleLabel: "Transport vositasi turi",

      termOptions: [
        { value: "30", label: "30 kun" },
        { value: "60", label: "60 kun" },
        { value: "90", label: "90 kun" },
        { value: "180", label: "180 kun" },
        { value: "365", label: "364 kun" },
      ],

      vehicleOptions: [
        { value: "car", label: "Yengil avtomobillar" },
        { value: "van", label: "Avtobuslar" },
        { value: "truck", label: "Yuk avtomobillari" },
        { value: "trailer", label: "Tirkamalar" },
        { value: "special", label: "Maxsus texnika" },
      ],

      button: "Hisoblash",
      note: "note",
    },

    process: {
      title: "Bu qanday ishlaydi",
      desc:
        "Bosqichma-bosqich: hisoblash → ma’lumotlar → to‘lov → polis.",

      steps: [
        {
          title: "Hisoblang",
          text:
            "Transport vositasi turi va sug‘urta muddatini tanlang.",
        },
        {
          title: "Ma’lumotlarni to‘ldiring",
          text:
            "Ro‘yxatdan o‘tgan manzil, davlat raqami, VIN va aloqa ma’lumotlari.",
        },
        {
          title: "To‘lovni amalga oshiring",
          text:
            "Polis tayyorlangandan so‘ng sizga to‘lov rekvizitlarini yuboramiz.",
        },
        {
          title: "PDF-polisni oling",
          text:
            "To‘lov tasdiqlanganidan so‘ng darhol yuboriladi.",
        },
      ],
    },

    why: {
      title: "Nima uchun bizni tanlashadi",
      desc:
        "Tezlik, tushunarlilik va to‘g‘ri rasmiylashtirishga e’tibor qaratamiz.",

      items: [
        {
          title: "Tez",
          text:
            "Minimal bosqichlar va aniq jarayon.",
        },
        {
          title: "Tushunarli",
          text:
            "Sug‘urta mahsulotlari o‘rtasidagi farqlarni oddiy tilda tushuntiramiz.",
        },
        {
          title: "Amaliy",
          text:
            "Rasmiy tekshiruvlar va talablarni hisobga olamiz.",
        },
        {
          title: "Qo‘llab-quvvatlash",
          text:
            "Rasmiylashtirish va tekshirish bo‘yicha yordam beramiz.",
        },
      ],
    },

    form: {
      title: "Ariza shakli",
      desc:
        "Ma’lumotlarni to‘ldiring — biz polisni tayyorlaymiz va to‘lov uchun ma’lumotlarni yuboramiz.",
    },

    faq: {
      title: "FAQ",
      desc: "Ko‘p beriladigan savollarga qisqa javoblar.",

      items: [
        {
          q: "Rasmiylashtirish qancha vaqt oladi?",
          a:
            "Barcha ma’lumotlar mavjud bo‘lsa, odatda 10–20 daqiqa davom etadi. Biroq umumiy tavsiya — polisni kerakli amal qilish sanasidan 1–2 kun oldin rasmiylashtirish.",
        },
        {
          q: "Karta orqali to‘lash mumkinmi?",
          a:
            "Hozirgi bosqichda faqat SWIFT, SEPA va P2P o‘tkazmalari hamda BLIK orqali to‘lov mavjud. Polis tayyorlangandan so‘ng to‘lovni amalga oshirasiz va PDF hujjatini olasiz.",
        },
        {
          q: "Bu «Green Card» bilan bir xilmi?",
          a:
            "Yo‘q. Bu turli sug‘urta mahsulotlari va turli qoidalardir.",
        },
        {
          q: "Bu qanday sug‘urta turi?",
          a:
            "Bu Polsha va YI hududida amal qiluvchi mexanik transport vositalari egalari yoki foydalanuvchilarining fuqarolik javobgarligini majburiy sug‘urtalashdir.",
        },
        {
          q: "Sug‘urta nimani qoplaydi?",
          a: `Qamrov quyidagilarni o‘z ichiga oladi:
              • jabrlanganlarning hayoti yoki sog‘lig‘iga yetkazilgan zarar;
              • uchinchi shaxslarga yetkazilgan mulkiy zarar.

              Minimal kafolat summalari:
              • 29 876 400 PLN — tan jarohatlari;
              • 6 021 600 PLN — mulkiy zarar.`,
        },
        {
          q: "Sug‘urta nimani qoplamaydi?",
          a: `• velosipedlar va mexanik bo‘lmagan transport vositalari;
              • avtomobil egasiga yetkazilgan zarar;
              • atrof-muhitga yetkazilgan zarar.`,
        },
        {
          q: "Qaysi hollarda regress talabi qo‘llanilishi mumkin?",
          a: `Sug‘urta kompaniyasi quyidagi hollarda to‘langan summani undirib olish huquqiga ega:
              • haydovchi qasddan harakat qilgan bo‘lsa;
              • mast yoki giyohvand moddalar ta’sirida bo‘lsa;
              • haydovchilik guvohnomasi bo‘lmasa;
              • YTH joyidan yashiringan bo‘lsa;
              • o‘g‘irlangan avtomobildan foydalangan bo‘lsa.`,
        },
        {
          q: "Polis qachon boshlanadi va tugaydi?",
          a: `Boshlanishi: polis berilgan sana.

              Amal qilish muddati: 30–364 kun.

              Amal qilishining tugashi:
              • muddat tugashi;
              • avtomobil o‘g‘irlanishi yoki utilizatsiya qilinishi;
              • hisobdan chiqarilishi.`,
        },
      ],
    },

    verify: {
      title: "Polisning amal qilishini tekshirish",
      lead:
        "Agar polisingiz haqiqatan ham faol ekanligini tekshirmoqchi bo‘lsangiz, sug‘urta byurolarining rasmiy bazalaridan foydalaning. Quyida Polsha, Latviya va Litva uchun xizmat havolalari keltirilgan.",

      items: [
        {
          code: "PL",
          country: "Polsha",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc:
            "Rasmiy UFG bazasida davlat raqami yoki VIN orqali OC polisi amal qilishini tekshirish.",
          cta: "UFG saytiga o‘tish",
          href: "https://www.ufg.pl/",
        },

        {
          code: "LV",
          country: "Latviya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc:
            "Latviyada ro‘yxatdan o‘tgan transport vositalari uchun majburiy OCTA sug‘urtasini tekshirish.",
          cta: "LTAB orqali tekshirish",
          href: "https://www.ltab.lv/",
        },

        {
          code: "LT",
          country: "Litva",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "Litvada fuqarolik javobgarligini majburiy sug‘urtalash polisi amal qilishini tekshirish xizmati.",
          cta: "CAB orqali tekshirish",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  ka: {
    hero: {
      kicker: "ონლაინ გაფორმება",
      title:
        "სასაზღვრო დაზღვევის ხელშეკრულება (OC graniczne) — სწრაფად და ზედმეტი ნაბიჯების გარეშე",
      lead:
        "გამოთვალეთ ღირებულება, შეავსეთ განაცხადი და მიიღეთ PDF-პოლისი. ევროკავშირის ფარგლებს გარეთ რეგისტრირებული ავტომობილებისთვის — პოლისის გადამოწმება მარტივად შესაძლებელია პოლონეთის რესპუბლიკის სადაზღვევო ბაზაში (UFG).",
      meta: [
        "PDF-პოლისი გაფორმების შემდეგ",
        "მხარდაჭერა მესენჯერებში",
        "გასაგები პირობები",
      ],
      ctaCalc: "ღირებულების გამოთვლა",
      ctaBuy: "პოლისის გაფორმება",
    },

    calc: {
      title: "ღირებულების კალკულატორი",
      badge: "~ 1 წუთი",
      desc: "მარტივი სატარიფო კალკულატორი",
      termLabel: "ვადა",
      vehicleLabel: "სატრანსპორტო საშუალების ტიპი",
      termOptions: [
        { value: "30", label: "30 დღე" },
        { value: "60", label: "60 დღე" },
        { value: "90", label: "90 დღე" },
        { value: "180", label: "180 დღე" },
        { value: "365", label: "364 დღე" },
      ],
      vehicleOptions: [
        { value: "car", label: "მსუბუქი ავტომობილები" },
        { value: "van", label: "ავტობუსები" },
        { value: "truck", label: "სატვირთო ავტომობილები" },
        { value: "trailer", label: "მისაბმელები" },
        { value: "special", label: "სპეცტექნიკა" },
      ],
      button: "გამოთვლა",
      note: "note",
    },

    process: {
      title: "როგორ მუშაობს",
      desc: "ეტაპობრივად: გამოთვლა → მონაცემები → გადახდა → პოლისი.",
      steps: [
        {
          title: "გამოთვალეთ",
          text:
            "აირჩიეთ სატრანსპორტო საშუალების ტიპი და დაზღვევის ვადა.",
        },
        {
          title: "შეავსეთ მონაცემები",
          text:
            "რეგისტრაციის მისამართი, სახელმწიფო ნომერი, VIN-კოდი და საკონტაქტო ინფორმაცია.",
        },
        {
          title: "გადაიხადეთ",
          text:
            "პოლისის მომზადების შემდეგ გამოგიგზავნით გადახდის რეკვიზიტებს.",
        },
        {
          title: "მიიღეთ PDF-პოლისი",
          text:
            "ჩვენ მიერ გადახდის დადასტურების მიღებისთანავე.",
        },
      ],
    },

    why: {
      title: "რატომ გვირჩევენ",
      desc:
        "ფოკუსირებული ვართ სისწრაფეზე, გამჭვირვალობასა და სწორი გაფორმების პროცესზე.",
      items: [
        {
          title: "სწრაფად",
          text: "მინიმალური ნაბიჯები და მკაფიო პროცესი.",
        },
        {
          title: "გასაგებად",
          text:
            "მარტივი ენით განვმარტავთ სადაზღვევო პროდუქტებს შორის განსხვავებებს.",
        },
        {
          title: "პრაქტიკულად",
          text:
            "ვხელმძღვანელობთ ოფიციალური მოთხოვნებითა და შემოწმების წესებით.",
        },
        {
          title: "მხარდაჭერა",
          text:
            "გეხმარებით გაფორმებასა და პოლისის გადამოწმებასთან დაკავშირებულ საკითხებში.",
        },
      ],
    },

    form: {
      title: "განაცხადის ფორმა",
      desc:
        "შეავსეთ მონაცემები — მოვამზადებთ პოლისს და გამოგიგზავნით გადახდის ინფორმაციას.",
    },

    faq: {
      title: "FAQ",
      desc: "მოკლე პასუხები ხშირად დასმულ კითხვებზე.",
      items: [
        {
          q: "რამდენ დროს მოითხოვს გაფორმება?",
          a:
            "როგორც წესი, 10–20 წუთი ყველა საჭირო მონაცემის არსებობის შემთხვევაში. თუმცა, ზოგადი რეკომენდაციაა, პოლისი გააფორმოთ დაფარვის დაწყებამდე 1–2 დღით ადრე.",
        },
        {
          q: "შესაძლებელია თუ არა ბარათით გადახდა?",
          a:
            "ამ ეტაპზე ხელმისაწვდომია მხოლოდ SWIFT, SEPA და P2P გადარიცხვები, ასევე BLIK-ით გადახდა. პოლისის მომზადების შემდეგ ახორციელებთ გადახდას და იღებთ PDF-დოკუმენტს.",
        },
        {
          q: "ეს იგივეა, რაც „მწვანე ბარათი“?",
          a:
            "არა. ეს განსხვავებული სადაზღვევო პროდუქტებია და მათზე განსხვავებული წესები ვრცელდება.",
        },
        {
          q: "რა ტიპის დაზღვევაა ეს?",
          a:
            "ეს არის მექანიკური სატრანსპორტო საშუალებების მფლობელთა ან მომხმარებელთა სავალდებულო სამოქალაქო პასუხისმგებლობის დაზღვევა, რომელიც მოქმედებს პოლონეთისა და ევროკავშირის ტერიტორიაზე.",
        },
        {
          q: "რას ფარავს დაზღვევა?",
          a: `დაფარვა მოიცავს:
              • დაზარალებულის სიცოცხლის ან ჯანმრთელობის დაზიანებას;
              • მესამე პირების ქონებრივ ზიანს.

              მინიმალური საგარანტიო ლიმიტები:
              • 29 876 400 PLN — სხეულის დაზიანება;
              • 6 021 600 PLN — ქონებრივი ზიანი.`,
        },
        {
          q: "რას არ ფარავს დაზღვევა?",
          a: `• ველოსიპედებსა და არამექანიკურ სატრანსპორტო საშუალებებს;
              • ავტომობილის მფლობელის ზიანს;
              • გარემოსთვის მიყენებულ ზიანს.`,
        },
        {
          q: "რა შემთხვევებშია შესაძლებელი რეგრესი?",
          a: `სადაზღვევო კომპანიას უფლება აქვს უკან მოითხოვოს გადახდილი თანხა, თუ მძღოლი:
              • განზრახ მოქმედებდა;
              • იმყოფებოდა ალკოჰოლის ან ნარკოტიკული ნივთიერებების ზემოქმედების ქვეშ;
              • არ ფლობდა მართვის უფლებას;
              • მიიმალა შემთხვევის ადგილიდან;
              • იყენებდა მოპარულ ავტომობილს.`,
        },
        {
          q: "როდის იწყება და სრულდება პოლისის მოქმედება?",
          a: `დაწყება: პოლისის გაცემის თარიღიდან.

              მოქმედების ვადა: 30–364 დღე.

              შეწყვეტა:
              • ვადის ამოწურვა;
              • ავტომობილის მოპარვა ან ჩამოწერა;
              • რეგისტრაციიდან მოხსნა.`,
        },
      ],
    },

    verify: {
      title: "პოლისის მოქმედების შემოწმება",
      lead:
        "თუ გსურთ დარწმუნდეთ, რომ თქვენი პოლისი ნამდვილად აქტიურია, გამოიყენეთ სადაზღვევო ბიუროების ოფიციალური ბაზები. ქვემოთ მოცემულია პოლონეთის, ლატვიისა და ლიტვის სერვისების ბმულები.",
      items: [
        {
          code: "PL",
          country: "პოლონეთი",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc:
            "OC პოლისის მოქმედების შემოწმება სახელმწიფო ნომრით ან VIN-კოდით UFG-ის ოფიციალურ ბაზაში.",
          cta: "გადასვლა UFG-ის ვებგვერდზე",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "ლატვია",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc:
            "ლატვიაში რეგისტრირებული სატრანსპორტო საშუალებების OCTA დაზღვევის შემოწმება.",
          cta: "შემოწმება LTAB-ის მეშვეობით",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "ლიტვა",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "ლიტვაში სამოქალაქო პასუხისმგებლობის სავალდებულო დაზღვევის პოლისის მოქმედების შემოწმების სერვისი.",
          cta: "შემოწმება CAB-ის მეშვეობით",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  kk: {
    hero: {
      kicker: "Онлайн рәсімдеу",
      title:
        "Шекаралық сақтандыру шарты (OC graniczne) — жылдам және артық қадамдарсыз",
      lead:
        "Құнын есептеңіз, өтінімді толтырыңыз және PDF-полис алыңыз. ЕО аумағынан тыс тіркелген көліктер үшін полисті Польша Республикасының сақтандыру базасы (UFG) арқылы оңай тексеруге болады.",
      meta: [
        "Рәсімдеуден кейін PDF-полис",
        "Мессенджерлер арқылы қолдау",
        "Түсінікті шарттар",
      ],
      ctaCalc: "Құнын есептеу",
      ctaBuy: "Полисті рәсімдеу",
    },

    calc: {
      title: "Құн калькуляторы",
      badge: "~ 1 минут",
      desc: "қарапайым тарифтік калькулятор",
      termLabel: "Мерзімі",
      vehicleLabel: "Көлік құралының түрі",
      termOptions: [
        { value: "30", label: "30 күн" },
        { value: "60", label: "60 күн" },
        { value: "90", label: "90 күн" },
        { value: "180", label: "180 күн" },
        { value: "365", label: "364 күн" },
      ],
      vehicleOptions: [
        { value: "car", label: "Жеңіл автомобильдер" },
        { value: "van", label: "Автобустар" },
        { value: "truck", label: "Жүк көліктері" },
        { value: "trailer", label: "Тіркемелер" },
        { value: "special", label: "Арнайы техника" },
      ],
      button: "Есептеу",
      note: "note",
    },

    process: {
      title: "Бұл қалай жұмыс істейді",
      desc: "Қадам бойынша: есептеу → деректер → төлем → полис.",
      steps: [
        {
          title: "Есептеңіз",
          text:
            "Көлік құралының түрін және сақтандыру мерзімін таңдаңыз.",
        },
        {
          title: "Деректерді толтырыңыз",
          text:
            "Тіркеу мекенжайы, мемлекеттік нөмір, VIN және байланыс деректері.",
        },
        {
          title: "Төлем жасаңыз",
          text:
            "Полис дайындалғаннан кейін біз сізге төлем деректемелерін жібереміз.",
        },
        {
          title: "PDF-полис алыңыз",
          text:
            "Төлемнің расталуын алғаннан кейін бірден.",
        },
      ],
    },

    why: {
      title: "Неліктен бізді таңдайды",
      desc:
        "Негізгі басымдықтар — жылдамдық, түсініктілік және рәсімдеудің дұрыстығы.",
      items: [
        {
          title: "Жылдам",
          text: "Минималды қадамдар және түсінікті құрылым.",
        },
        {
          title: "Түсінікті",
          text:
            "Сақтандыру өнімдерінің айырмашылықтарын қарапайым тілмен түсіндіреміз.",
        },
        {
          title: "Практикалық",
          text:
            "Ресми тексерулер мен талаптарға сүйенеміз.",
        },
        {
          title: "Қолдау",
          text:
            "Рәсімдеу және тексеру бойынша сұрақтарға көмектесеміз.",
        },
      ],
    },

    form: {
      title: "Өтінім нысаны",
      desc:
        "Деректерді толтырыңыз — біз полисті дайындап, төлем деректерін жібереміз.",
    },

    faq: {
      title: "FAQ",
      desc: "Жиі қойылатын сұрақтарға қысқаша жауаптар.",
      items: [
        {
          q: "Рәсімдеу қанша уақыт алады?",
          a:
            "Барлық деректер болған жағдайда әдетте 10–20 минут. Дегенмен жалпы ұсыныс — полисті сақтандыру жабыны басталғанға дейін 1–2 күн бұрын рәсімдеу.",
        },
        {
          q: "Картамен төлеуге бола ма?",
          a:
            "Қазіргі уақытта тек SWIFT, SEPA және P2P аударымдары, сондай-ақ BLIK арқылы төлем қолжетімді. Полис дайындалғаннан кейін төлем жасап, PDF аласыз.",
        },
        {
          q: "Бұл «Жасыл карта» сақтандыруымен бірдей ме?",
          a:
            "Жоқ. Бұл — әртүрлі сақтандыру өнімдері және әртүрлі ережелер.",
        },
        {
          q: "Бұл қандай сақтандыру?",
          a:
            "Бұл Польша мен ЕО аумағында әрекет ететін механикалық көлік құралдары иелерінің немесе пайдаланушыларының азаматтық-құқықтық жауапкершілігін міндетті сақтандыру.",
        },
        {
          q: "Сақтандыру нені қамтиды?",
          a: `Қамтуға мыналар кіреді:
              • Зардап шеккен тұлғалардың өмірі мен денсаулығына келтірілген зиян;
              • Үшінші тұлғалардың мүлкіне келтірілген зиян.
              
              Ең төменгі кепілдендірілген сомалар:
              • 29 876 400 PLN — денсаулыққа келтірілген зиян;
              • 6 021 600 PLN — мүліктік зиян.`,
        },
        {
          q: "Сақтандыру нені қамтымайды?",
          a: `• велосипедтер мен механикалық емес көлік құралдары;
              • автомобиль иесіне келтірілген зиян;
              • қоршаған ортаға келтірілген зиян.`,
        },
        {
          q: "Қандай жағдайларда регресс мүмкін?",
          a: `Сақтандыру компаниясы төленген соманы өндіріп алуға құқылы, егер жүргізуші:
              • қасақана әрекет еткен болса;
              • мас күйінде немесе есірткі әсерінде болса;
              • жүргізуші куәлігі болмаса;
              • жол-көлік оқиғасы орнынан кетіп қалса;
              • ұрланған көлікті пайдаланған болса.`,
        },
        {
          q: "Полис қашан басталып, қашан аяқталады?",
          a: `Басталуы: полистің берілген күні.

              Қолданылу мерзімі: 30–364 күн.

              Тоқтатылуы:
              • мерзімнің аяқталуы;
              • көліктің ұрлануы немесе есептен шығарылуы;
              • тіркеуден шығарылуы.`,
        },
      ],
    },

    verify: {
      title: "Полистің жарамдылығын тексеру",
      lead:
        "Егер полистің шынымен белсенді екеніне көз жеткізгіңіз келсе, сақтандыру бюроларының ресми базаларын пайдаланыңыз. Төменде Польша, Латвия және Литваға арналған сервистер сілтемелері берілген.",
      items: [
        {
          code: "PL",
          country: "Польша",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc:
            "UFG ресми базасында мемлекеттік нөмір немесе VIN арқылы OC полисінің жарамдылығын тексеру.",
          cta: "UFG сайтына өту",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Латвия",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc:
            "Латвияда тіркелген көлік құралдары үшін міндетті OCTA сақтандыруын тексеру.",
          cta: "LTAB арқылы тексеру",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "Литвадағы міндетті азаматтық-құқықтық жауапкершілік сақтандыру полисінің жарамдылығын тексеру сервисі.",
          cta: "CAB арқылы тексеру",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  tr: {
    hero: {
      kicker: "Online Düzenleme",
      title:
        "Sınır Sigortası Sözleşmesi (OC graniczne) — hızlı ve gereksiz işlemler olmadan",
      lead:
        "Ücreti hesaplayın, başvuruyu doldurun ve PDF poliçenizi alın. AB dışında kayıtlı araçlar için poliçe, Polonya Cumhuriyeti sigorta veri tabanı (UFG) üzerinden kolayca doğrulanabilir.",
      meta: [
        "Düzenleme sonrası PDF poliçe",
        "Mesajlaşma uygulamalarında destek",
        "Anlaşılır şartlar",
      ],
      ctaCalc: "Fiyatı Hesapla",
      ctaBuy: "Poliçe Düzenle",
    },

    calc: {
      title: "Fiyat Hesaplayıcısı",
      badge: "~ 1 dakika",
      desc: "basit tarife hesaplayıcısı",
      termLabel: "Süre",
      vehicleLabel: "Araç Türü",
      termOptions: [
        { value: "30", label: "30 gün" },
        { value: "60", label: "60 gün" },
        { value: "90", label: "90 gün" },
        { value: "180", label: "180 gün" },
        { value: "365", label: "364 gün" },
      ],
      vehicleOptions: [
        { value: "car", label: "Binek Araçlar" },
        { value: "van", label: "Otobüsler" },
        { value: "truck", label: "Kamyonlar" },
        { value: "trailer", label: "Römorklar" },
        { value: "special", label: "Özel Amaçlı Araçlar" },
      ],
      button: "Hesapla",
      note: "note",
    },

    process: {
      title: "Nasıl Çalışır",
      desc: "Adım adım: hesaplama → bilgiler → ödeme → poliçe.",
      steps: [
        {
          title: "Hesaplayın",
          text:
            "Araç türünü ve sigorta süresini seçin.",
        },
        {
          title: "Bilgileri Doldurun",
          text:
            "Kayıt adresi, plaka numarası, VIN ve iletişim bilgileri.",
        },
        {
          title: "Ödeme Yapın",
          text:
            "Poliçe hazırlandıktan sonra ödeme bilgilerini size göndereceğiz.",
        },
        {
          title: "PDF Poliçenizi Alın",
          text:
            "Ödeme onayı tarafımıza ulaştıktan hemen sonra.",
        },
      ],
    },

    why: {
      title: "Neden Bizi Tercih Ediyorlar",
      desc:
        "Hız, anlaşılabilirlik ve doğru düzenleme süreçlerine odaklanıyoruz.",
      items: [
        {
          title: "Hızlı",
          text: "Minimum adım ve net süreç yapısı.",
        },
        {
          title: "Anlaşılır",
          text:
            "Ürünler arasındaki farkları sade bir dille açıklıyoruz.",
        },
        {
          title: "Pratik",
          text:
            "Resmî kontrolleri ve gereklilikleri dikkate alıyoruz.",
        },
        {
          title: "Destek",
          text:
            "Düzenleme ve doğrulama süreçleriyle ilgili sorularda yardımcı oluyoruz.",
        },
      ],
    },

    form: {
      title: "Başvuru Formu",
      desc:
        "Bilgilerinizi doldurun — poliçeyi hazırlayalım ve ödeme bilgilerini size gönderelim.",
    },

    faq: {
      title: "SSS",
      desc: "Sık sorulan sorulara kısa yanıtlar.",
      items: [
        {
          q: "Poliçe düzenleme ne kadar sürer?",
          a:
            "Tüm bilgiler mevcutsa genellikle 10–20 dakika sürer. Ancak genel tavsiye, poliçeyi ihtiyaç duyulan başlangıç tarihinden 1–2 gün önce düzenlemenizdir.",
        },
        {
          q: "Kart ile ödeme yapılabilir mi?",
          a:
            "Şu anda yalnızca SWIFT, SEPA, P2P transferleri ve BLIK ödemeleri kabul edilmektedir. Poliçe hazırlandıktan sonra ödeme yapar ve PDF poliçenizi alırsınız.",
        },
        {
          q: "Bu, “Yeşil Kart” ile aynı şey mi?",
          a:
            "Hayır. Bunlar farklı ürünlerdir ve farklı kurallara tabidir.",
        },
        {
          q: "Bu nasıl bir sigortadır?",
          a:
            "Bu, Polonya ve AB sınırları içinde geçerli olan motorlu araç sahipleri veya kullanıcıları için zorunlu mali sorumluluk sigortasıdır.",
        },
        {
          q: "Sigorta neleri kapsar?",
          a: `Teminat kapsamı şunları içerir:
              • Yaralanma veya ölüm nedeniyle oluşan zararlar;
              • Üçüncü kişilere ait maddi zararlar.
              
              Asgari teminat limitleri:
              • 29 876 400 PLN — bedensel zararlar;
              • 6 021 600 PLN — maddi zararlar.`,
        },
        {
          q: "Sigorta neleri kapsamaz?",
          a: `• Bisikletler ve motorlu olmayan araçlar;
              • Araç sahibinin kendi zararları;
              • Çevresel zararlar.`,
        },
        {
          q: "Hangi durumlarda rücu uygulanabilir?",
          a: `Sigorta şirketi aşağıdaki durumlarda ödediği tazminatı sürücüden geri talep edebilir:
              • Kasten hareket etmişse;
              • Alkol veya uyuşturucu etkisi altındaysa;
              • Geçerli sürücü belgesi yoksa;
              • Kaza yerini terk etmişse;
              • Çalıntı araç kullanmışsa.`,
        },
        {
          q: "Poliçe ne zaman başlar ve sona erer?",
          a: `Başlangıç: poliçenin düzenlenme tarihi.

              Geçerlilik süresi: 30–364 gün.

              Sona erme halleri:
              • Sürenin dolması;
              • Aracın çalınması veya trafikten çekilmesi;
              • Trafik kaydının silinmesi.`,
        },
      ],
    },

    verify: {
      title: "Poliçe Geçerliliğinin Kontrolü",
      lead:
        "Poliçenizin gerçekten aktif olduğundan emin olmak istiyorsanız, resmî sigorta bürolarının veri tabanlarını kullanabilirsiniz. Aşağıda Polonya, Letonya ve Litvanya için bağlantılar yer almaktadır.",
      items: [
        {
          code: "PL",
          country: "Polonya",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc:
            "UFG resmî veri tabanında plaka numarası veya VIN üzerinden OC poliçesi geçerlilik kontrolü.",
          cta: "UFG Web Sitesine Git",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letonya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc:
            "Letonya’da kayıtlı araçlar için zorunlu OCTA sigortasının doğrulanması.",
          cta: "LTAB Üzerinden Kontrol Et",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litvanya",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "Litvanya’daki zorunlu motorlu taşıt sorumluluk sigortası poliçesinin geçerliliğini kontrol etme hizmeti.",
          cta: "CAB Üzerinden Kontrol Et",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  fa: {
    hero: {
      kicker: "صدور آنلاین",
      title:
        "قرارداد بیمه مرزی (OC graniczne) — سریع و بدون مراحل اضافی",
      lead:
        "هزینه را محاسبه کنید، فرم درخواست را تکمیل نمایید و بیمه‌نامه PDF دریافت کنید. برای خودروهای ثبت‌شده خارج از اتحادیه اروپا، اعتبار بیمه‌نامه به‌راحتی از طریق پایگاه بیمه جمهوری لهستان (UFG) قابل بررسی است.",
      meta: [
        "دریافت بیمه‌نامه PDF پس از صدور",
        "پشتیبانی در پیام‌رسان‌ها",
        "شرایط شفاف و قابل‌فهم",
      ],
      ctaCalc: "محاسبه هزینه",
      ctaBuy: "صدور بیمه‌نامه",
    },

    calc: {
      title: "محاسبه‌گر هزینه",
      badge: "~ ۱ دقیقه",
      desc: "محاسبه‌گر ساده تعرفه",
      termLabel: "مدت اعتبار",
      vehicleLabel: "نوع وسیله نقلیه",
      termOptions: [
        { value: "30", label: "۳۰ روز" },
        { value: "60", label: "۶۰ روز" },
        { value: "90", label: "۹۰ روز" },
        { value: "180", label: "۱۸۰ روز" },
        { value: "365", label: "۳۶۴ روز" },
      ],
      vehicleOptions: [
        { value: "car", label: "خودروهای سواری" },
        { value: "van", label: "اتوبوس‌ها" },
        { value: "truck", label: "وسایل نقلیه باری" },
        { value: "trailer", label: "تریلرها" },
        { value: "special", label: "ماشین‌آلات ویژه" },
      ],
      button: "محاسبه",
      note: "یادداشت",
    },

    process: {
      title: "نحوه انجام کار",
      desc:
        "مرحله‌به‌مرحله: محاسبه هزینه → ثبت اطلاعات → پرداخت → دریافت بیمه‌نامه.",
      steps: [
        {
          title: "محاسبه کنید",
          text:
            "نوع وسیله نقلیه و مدت اعتبار بیمه را انتخاب کنید.",
        },
        {
          title: "اطلاعات را تکمیل کنید",
          text:
            "نشانی ثبت، شماره پلاک، VIN و اطلاعات تماس را وارد نمایید.",
        },
        {
          title: "پرداخت کنید",
          text:
            "پس از آماده‌سازی بیمه‌نامه، اطلاعات پرداخت برای شما ارسال خواهد شد.",
        },
        {
          title: "بیمه‌نامه PDF را دریافت کنید",
          text:
            "بلافاصله پس از دریافت تأییدیه پرداخت توسط ما.",
        },
      ],
    },

    why: {
      title: "چرا ما را انتخاب می‌کنند",
      desc:
        "تمرکز ما بر سرعت، شفافیت و صحت صدور بیمه‌نامه است.",
      items: [
        {
          title: "سریع",
          text:
            "حداقل مراحل با ساختاری روشن و قابل‌فهم.",
        },
        {
          title: "شفاف",
          text:
            "تفاوت محصولات بیمه‌ای را با زبانی ساده توضیح می‌دهیم.",
        },
        {
          title: "کاربردی",
          text:
            "بر اساس الزامات رسمی و معیارهای بررسی فعالیت می‌کنیم.",
        },
        {
          title: "پشتیبانی",
          text:
            "در روند صدور و بررسی بیمه‌نامه به شما کمک می‌کنیم.",
        },
      ],
    },

    form: {
      title: "فرم درخواست",
      desc:
        "اطلاعات را تکمیل کنید — بیمه‌نامه را آماده کرده و اطلاعات پرداخت را ارسال خواهیم کرد.",
    },

    faq: {
      title: "پرسش‌های متداول",
      desc: "پاسخ‌های کوتاه به پرسش‌های رایج.",
      items: [
        {
          q: "صدور بیمه‌نامه چقدر زمان می‌برد؟",
          a:
            "در صورت آماده بودن تمامی اطلاعات، معمولاً بین ۱۰ تا ۲۰ دقیقه زمان لازم است. با این حال، توصیه می‌شود بیمه‌نامه را یک تا دو روز پیش از تاریخ شروع پوشش بیمه تهیه کنید.",
        },
        {
          q: "آیا امکان پرداخت با کارت بانکی وجود دارد؟",
          a:
            "در حال حاضر فقط انتقال‌های SWIFT، SEPA، P2P و پرداخت از طریق BLIK در دسترس است. پس از آماده‌سازی بیمه‌نامه، پرداخت انجام شده و فایل PDF دریافت می‌شود.",
        },
        {
          q: "آیا این همان «گرین کارت» است؟",
          a:
            "خیر. این‌ها محصولات متفاوت با مقررات متفاوت هستند.",
        },
        {
          q: "این بیمه چیست؟",
          a:
            "این بیمه اجباری مسئولیت مدنی دارندگان یا استفاده‌کنندگان وسایل نقلیه موتوری است که در قلمرو لهستان و اتحادیه اروپا معتبر می‌باشد.",
        },
        {
          q: "بیمه چه مواردی را پوشش می‌دهد؟",
          a: `پوشش بیمه شامل موارد زیر است:
              • خسارت جانی یا صدمات بدنی اشخاص زیان‌دیده؛
              • خسارت مالی واردشده به اشخاص ثالث.

              حداقل مبالغ تضمین‌شده:
              • 29 876 400 PLN — خسارات جانی و بدنی؛
              • 6 021 600 PLN — خسارات مالی.`,
        },
        {
          q: "چه مواردی تحت پوشش نیست؟",
          a: `• دوچرخه‌ها و وسایل نقلیه غیرموتوری؛
              • خسارت واردشده به مالک خودرو؛
              • خسارت‌های زیست‌محیطی.`,
        },
        {
          q: "در چه مواردی امکان رجوع بیمه‌گر وجود دارد؟",
          a: `شرکت بیمه می‌تواند مبلغ پرداخت‌شده را بازیافت کند اگر راننده:
              • عمداً اقدام کرده باشد؛
              • تحت تأثیر الکل یا مواد مخدر بوده باشد؛
              • فاقد گواهینامه معتبر بوده باشد؛
              • محل حادثه را ترک کرده باشد؛
              • از خودروی سرقتی استفاده کرده باشد.`,
        },
        {
          q: "بیمه‌نامه چه زمانی آغاز و پایان می‌یابد؟",
          a: `شروع: تاریخ صدور بیمه‌نامه.

              مدت اعتبار: از ۳۰ تا ۳۶۴ روز.

              خاتمه:
              • پایان مدت اعتبار؛
              • سرقت یا اسقاط خودرو؛
              • خروج خودرو از ثبت.`,
        },
      ],
    },

    verify: {
      title: "بررسی اعتبار بیمه‌نامه",
      lead:
        "اگر می‌خواهید از فعال بودن بیمه‌نامه خود اطمینان حاصل کنید، از پایگاه‌های رسمی دفاتر بیمه استفاده نمایید. در ادامه، لینک سرویس‌های رسمی لهستان، لتونی و لیتوانی ارائه شده است.",
      items: [
        {
          code: "PL",
          country: "لهستان",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc:
            "بررسی اعتبار بیمه مسئولیت مدنی (OC) بر اساس شماره ثبت یا VIN در پایگاه رسمی UFG.",
          cta: "ورود به وب‌سایت UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "لتونی",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc:
            "بررسی بیمه اجباری OCTA برای وسایل نقلیه ثبت‌شده در لتونی.",
          cta: "بررسی از طریق LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "لیتوانی",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "سرویس بررسی اعتبار بیمه اجباری مسئولیت مدنی در لیتوانی.",
          cta: "بررسی از طریق CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  hy: {
    hero: {
      kicker: "Առցանց ձևակերպում",
      title:
        "Սահմանային ապահովագրության պայմանագիր (OC graniczne) — արագ և առանց ավելորդ քայլերի",
      lead:
        "Հաշվարկեք արժեքը, լրացրեք հայտը և ստացեք PDF պոլիս։ ԵՄ-ից դուրս գրանցված ավտոմեքենաների համար պոլիսը հեշտությամբ կարելի է ստուգել Լեհաստանի Հանրապետության ապահովագրական բազայում (UFG)։",
      meta: [
        "PDF պոլիս ձևակերպումից հետո",
        "Աջակցություն մեսենջերներում",
        "Հասկանալի պայմաններ",
      ],
      ctaCalc: "Հաշվարկել արժեքը",
      ctaBuy: "Ձևակերպել պոլիս",
    },

    calc: {
      title: "Արժեքի հաշվիչ",
      badge: "~ 1 րոպե",
      desc: "պարզ սակագնային հաշվիչ",
      termLabel: "Ժամկետ",
      vehicleLabel: "Տրանսպորտային միջոցի տեսակ",
      termOptions: [
        { value: "30", label: "30 օր" },
        { value: "60", label: "60 օր" },
        { value: "90", label: "90 օր" },
        { value: "180", label: "180 օր" },
        { value: "365", label: "364 օր" },
      ],
      vehicleOptions: [
        { value: "car", label: "Թեթև մարդատար" },
        { value: "van", label: "Ավտոբուսներ" },
        { value: "truck", label: "Բեռնատարներ" },
        { value: "trailer", label: "Կցորդներ" },
        { value: "special", label: "Հատուկ տեխնիկա" },
      ],
      button: "Հաշվել",
      note: "նշում",
    },

    process: {
      title: "Ինչպես է դա աշխատում",
      desc: "Քայլ առ քայլ՝ հաշվարկ → տվյալներ → վճարում → պոլիս։",
      steps: [
        {
          title: "Հաշվարկեք",
          text:
            "Ընտրեք տրանսպորտային միջոցի տեսակը և ապահովագրության ժամկետը։",
        },
        {
          title: "Լրացրեք տվյալները",
          text:
            "Գրանցման հասցե, պետհամարանիշ, VIN և կոնտակտային տվյալներ։",
        },
        {
          title: "Վճարեք",
          text:
            "Պոլիսի պատրաստումից հետո մենք ձեզ կուղարկենք վճարման տվյալները։",
        },
        {
          title: "Ստացեք PDF պոլիս",
          text:
            "Մեր կողմից վճարման հաստատումը ստանալուց անմիջապես հետո։",
        },
      ],
    },

    why: {
      title: "Ինչու են ընտրում մեզ",
      desc:
        "Կենտրոնացած ենք արագության, հստակության և ճիշտ ձևակերպման վրա։",
      items: [
        {
          title: "Արագ",
          text: "Նվազագույն քայլեր և հստակ կառուցվածք։",
        },
        {
          title: "Հասկանալի",
          text:
            "Պարզ լեզվով բացատրում ենք ապահովագրական պրոդուկտների տարբերությունները։",
        },
        {
          title: "Գործնական",
          text:
            "Կողմնորոշվում ենք պաշտոնական ստուգումների և պահանջների հիման վրա։",
        },
        {
          title: "Աջակցություն",
          text:
            "Օգնում ենք ձևակերպման և ստուգման հետ կապված հարցերում։",
        },
      ],
    },

    form: {
      title: "Հայտի ձև",
      desc:
        "Լրացրեք տվյալները — մենք կպատրաստենք պոլիսը և կուղարկենք վճարման տվյալները։",
    },

    faq: {
      title: "FAQ",
      desc: "Կարճ պատասխաններ հաճախ տրվող հարցերին։",
      items: [
        {
          q: "Որքա՞ն ժամանակ է տևում ձևակերպումը։",
          a:
            "Սովորաբար 10–20 րոպե՝ բոլոր անհրաժեշտ տվյալների առկայության դեպքում։ Սակայն ընդհանուր խորհուրդն է՝ պոլիսը ձևակերպել ծածկույթի մեկնարկից 1–2 օր առաջ։",
        },
        {
          q: "Հնարավո՞ր է վճարել քարտով։",
          a:
            "Այս պահին հասանելի են միայն SWIFT, SEPA և P2P փոխանցումները, ինչպես նաև BLIK վճարումները։ Պոլիսի պատրաստումից հետո դուք կատարում եք վճարումը և ստանում PDF պոլիսը։",
        },
        {
          q: "Սա նույնն է, ինչ «Green Card»-ը՞։",
          a:
            "Ոչ։ Սրանք տարբեր ապահովագրական պրոդուկտներ են և ենթակա են տարբեր կանոնների։",
        },
        {
          q: "Ի՞նչ ապահովագրություն է սա։",
          a:
            "Սա մեխանիկական տրանսպորտային միջոցների սեփականատերերի կամ օգտագործողների պարտադիր քաղաքացիական պատասխանատվության ապահովագրություն է, որը գործում է Լեհաստանի և ԵՄ տարածքում։",
        },
        {
          q: "Ի՞նչ է ծածկում ապահովագրությունը։",
          a: `Ծածկույթը ներառում է․
              • Տուժածների կյանքի կամ առողջության վնաս;
              • Երրորդ անձանց գույքային վնաս։

              Նվազագույն երաշխավորված գումարները՝
              • 29 876 400 PLN — մարմնական վնասվածքներ;
              • 6 021 600 PLN — գույքային վնաս։`,
        },
        {
          q: "Ի՞նչ չի ծածկում ապահովագրությունը։",
          a: `• հեծանիվներ և ոչ մեխանիկական տրանսպորտային միջոցներ;
                • ավտոմեքենայի սեփականատիրոջ վնասները;
                • շրջակա միջավայրին հասցված վնասը։`,
        },
        {
          q: "Ո՞ր դեպքերում է հնարավոր ռեգրեսը։",
          a: `Ապահովագրական ընկերությունը կարող է պահանջել վճարված գումարի վերադարձը, եթե վարորդը՝
              • գործել է դիտավորությամբ;
              • գտնվել է ալկոհոլի կամ թմրանյութերի ազդեցության տակ;
              • չի ունեցել վարորդական իրավունք;
              • հեռացել է պատահարի վայրից;
              • օգտագործել է գողացված ավտոմեքենա։`,
        },
        {
          q: "Ե՞րբ է սկսվում և ավարտվում պոլիսի գործողությունը։",
          a: `Սկիզբ՝ պոլիսի թողարկման ամսաթիվը։

                Գործողության ժամկետ՝ 30–364 օր։

                Դադարեցում՝
                • ժամկետի ավարտ;
                • ավտոմեքենայի գողություն կամ շահագործումից հանում;
                • հաշվառումից հանում։`,
        },
      ],
    },

    verify: {
      title: "Պոլիսի վավերականության ստուգում",
      lead:
        "Եթե ցանկանում եք համոզվել, որ ձեր պոլիսը իսկապես ակտիվ է, օգտվեք ապահովագրական բյուրոների պաշտոնական բազաներից։ Ստորև ներկայացված են Լեհաստանի, Լատվիայի և Լիտվայի ծառայությունների հղումները։",
      items: [
        {
          code: "PL",
          country: "Լեհաստան",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc:
            "OC պոլիսի վավերականության ստուգում պետական համարով կամ VIN-ով UFG-ի պաշտոնական բազայում։",
          cta: "Անցնել UFG կայք",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Լատվիա",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc:
            "Լատվիայում գրանցված տրանսպորտային միջոցների պարտադիր OCTA ապահովագրության ստուգում։",
          cta: "Ստուգել LTAB-ի միջոցով",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Լիտվա",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc:
            "Լիտվայում պարտադիր քաղաքացիական պատասխանատվության ապահովագրության պոլիսի վավերականության ստուգման ծառայություն։",
          cta: "Ստուգել CAB-ի միջոցով",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
};

// Утилита: если переводы ещё не готовы, берём RU.
export function getHomeDictionary(lang: Lang): HomeDictionary {
  const d = homeDictionary[lang];
  return d ? d : homeDictionary.ru;
}