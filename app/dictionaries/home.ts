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
      title: "Договор пограничного страхования ( OC graniczne) — быстро и без лишних шагов",
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
        "OC graniczne — szybko i bez zbędnych formalności",
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

  ckb: {
    hero: {
      kicker: "وەرگرتنی ئۆنلاین",
      title: "بیمەی سنووری (OC Graniczne) — خێرا و بەبێ هەنگاوی زیادە",
      lead:
        "نرخ هەژمار بکە، داواکارییەکە پڕبکەرەوە و بیمەنامەی PDF وەربگرە. بۆ ئۆتۆمبێلە تۆمارکراوەکان لە دەرەوەی یەکێتی ئەورووپا، بیمەنامەکە بە ئاسانی لە بنکەی زانیاری بیمەی کۆماری پۆڵەندا (UFG) دەپشکنرێت.",
      meta: [
        "بیمەنامەی PDF دوای تەواوبوونی وەرگرتن",
        "پشتگیری لە ڕێگەی مێسنجەرەکان",
        "مەرجە ڕوون و تێگەیشتراوەکان",
      ],
      ctaCalc: "هەژمارکردنی نرخ",
      ctaBuy: "وەرگرتنی بیمەنامە",
    },

    calc: {
      title: "ژمێرکاری نرخ",
      badge: "~ 1 خولەک",
      desc: "ژمێرکارێکی سادەی نرخ",
      termLabel: "ماوە",
      vehicleLabel: "جۆری ئامراز",
      termOptions: [
        { value: "30", label: "30 ڕۆژ" },
        { value: "60", label: "60 ڕۆژ" },
        { value: "90", label: "90 ڕۆژ" },
        { value: "180", label: "180 ڕۆژ" },
        { value: "365", label: "364 ڕۆژ" },
      ],
      vehicleOptions: [
        { value: "car", label: "ئۆتۆمبێلی سواری" },
        { value: "van", label: "پاس" },
        { value: "truck", label: "بارهەڵگر" },
        { value: "trailer", label: "پاشکۆ" },
        { value: "special", label: "ئامرازە تایبەتەکان" },
      ],
      button: "هەژمارکردن",
      note: "note",
    },

    process: {
      title: "چۆن کار دەکات",
      desc: "هەنگاو بە هەنگاو: هەژمارکردن → زانیاری → پارەدان → بیمەنامە.",
      steps: [
        {
          title: "هەژمار بکە",
          text: "جۆری ئامراز و ماوەی بیمە هەڵبژێرە.",
        },
        {
          title: "زانیارییەکان پڕبکەرەوە",
          text: "ناونیشانی تۆمارکردن، ژمارەی تابلۆ، VIN و زانیارییەکانی پەیوەندی.",
        },
        {
          title: "پارە بدە",
          text: "دوای ئامادەکردنی بیمەنامە، زانیارییەکانی پارەدان بۆت دەنێرین.",
        },
        {
          title: "بیمەنامەی PDF وەربگرە",
          text: "هەرکات پشتڕاستکردنەوەی پارەدان وەرگرین.",
        },
      ],
    },

    why: {
      title: "بۆچی ئێمە هەڵدەبژێرن",
      desc: "سەرنجمان لەسەر خێرایی، ڕوونی و دروستی وەرگرتنە.",
      items: [
        {
          title: "خێرا",
          text: "کەمترین هەنگاو و ڕێکخستنێکی ڕوون.",
        },
        {
          title: "تێگەیشتراو",
          text: "جیاوازییەکانی بەرهەمەکان بە زمانی سادە ڕوون دەکەینەوە.",
        },
        {
          title: "کارامە",
          text: "پشت بە پشکنینە فەرمییەکان و داواکارییە یاسایییەکان دەبەستین.",
        },
        {
          title: "پشتگیری",
          text: "لە پرسیارەکانی وەرگرتن و پشکنینی بیمەنامەدا یارمەتیت دەدەین.",
        },
      ],
    },

    form: {
      title: "فۆڕمی داواکاری",
      desc: "زانیارییەکان پڕبکەرەوە — بیمەنامەکەت ئامادە دەکەین و زانیارییەکانی پارەدان بۆت دەنێرین.",
    },

    faq: {
      title: "پرسیارە باوەکان",
      desc: "وەڵامی کورتی پرسیارە دووبارەبووەکان.",
      items: [
        {
          q: "وەرگرتن چەند کات دەخایەنێت؟",
          a: "بە گشتی 10–20 خولەک ئەگەر هەموو زانیارییەکان ئامادە بن. بەڵام پێشنیار دەکەین بیمەنامەکە 1–2 ڕۆژ پێش دەستپێکردنی پاراستن وەربگرن.",
        },
        {
          q: "ئایا دەتوانم بە کارت پارە بدەم؟",
          a: "ئێستا تەنها SWIFT، SEPA، P2P و پارەدانی BLIK بەردەستن. دوای ئامادەکردنی بیمەنامە، پارە دەدەن و PDF وەردەگرن.",
        },
        {
          q: "ئایا ئەمە هەمان «گرین کارت»ە؟",
          a: "نەخێر. ئەمانە دوو بەرهەمی جیاوازن و یاساکانیان جیاوازن.",
        },
        {
          q: "ئەم بیمەیە چییە؟",
          a: "ئەمە بیمەیەکی زۆرەکی بەرپرسیاری شارستانییە بۆ خاوەن یان بەکارهێنەری ئامرازە گواستنەوەکان، کە لە پۆڵەندا و وڵاتانی یەکێتی ئەورووپا کارا دەبێت.",
        },
        {
          q: "بیمەکە چی دەگرێتەوە؟",
          a: `پاراستنەکە ئەمانە دەگرێتەوە:
  • زیانی ژیان یان تەندروستی قوربانییەکان؛
  • زیانی ماڵی بە کەسانی سێیەم.

  کەمترین بڕی پاراستنی دڵنیایی:
  • 29 876 400 PLN بۆ زیانی جەستەیی؛
  • 6 021 600 PLN بۆ زیانی ماڵی.`,
        },
        {
          q: "بیمەکە چی ناگرێتەوە؟",
          a: `• پاسکیل و ئامرازە نەمیکانیکییەکان؛
  • زیان بە خاوەنی ئۆتۆمبێل؛
  • زیان بە ژینگە.`,
        },
        {
          q: "لە چ حاڵەتێکدا مافی گەڕاندنەوەی پارە (Regress) هەیە؟",
          a: `کۆمپانیای بیمە دەتوانێت بڕی پارەی دراو گەڕێنێتەوە ئەگەر شۆفێر:
  • بە ئەنقەست کاریکردبێت؛
  • سەرخۆش یان ژێر کاریگەری ماددەی هۆشبەر بووبێت؛
  • مۆڵەتی لێخوڕینی نەبووبێت؛
  • لە شوێنی ڕووداو ڕاکردبێت؛
  • ئۆتۆمبێلێکی دزراوی بەکارهێنابێت.`,
        },
        {
          q: "بیمەنامەکە کەی دەست پێدەکات و کەی کۆتایی دێت؟",
          a: `دەستپێک:
  بەرواری دەرکردنی بیمەنامە.

  ماوەی کارایی:
  30 تا 364 ڕۆژ.

  کۆتایی هاتن:
  • تەواوبوونی ماوە؛
  • دزران یان لەکارخستنی ئۆتۆمبێل؛
  • سڕینەوەی تۆمارکردن.`,
        },
      ],
    },

    verify: {
      title: "پشکنینی دروستی بیمەنامە",
      lead:
        "ئەگەر دەتەوێت دڵنیابیت لەوەی بیمەنامەکەت چالاکە، دەتوانیت سوود لە بنکە فەرمییەکانی بیمە وەربگریت. لە خوارەوە بەستەرەکانی پۆڵەندا، لاتویا و لیتوانیا هەن.",
      items: [
        {
          code: "PL",
          country: "پۆڵەندا",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "پشکنینی دروستی بیمەی OC بە ژمارەی تۆمارکردن یان VIN لە بنکەی فەرمی UFG.",
          cta: "چوونە ماڵپەڕی UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "لاتویا",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "پشکنینی بیمەی زۆرەکی OCTA بۆ ئامرازە تۆمارکراوەکانی لاتویا.",
          cta: "پشکنین لە ڕێگەی LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "لیتوانیا",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "خزمەتگوزاری پشکنینی دروستی بیمەی بەرپرسیاری شارستانیی زۆرەکی لە لیتوانیا.",
          cta: "پشکنین لە ڕێگەی CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  kmr: {
    hero: {
      kicker: "Derxistina serhêl",
      title: "Peymana sîgorteya sînorî (OC Graniczne) — bi lez û bê gavên zêde",
      lead:
        "Mesrefê hesab bikin, daxwazê dagirin û polîçeya PDF bistînin. Ji bo wesayîtên ku li derveyî Yekîtiya Ewropayê hatine qeydkirin, polîçe bi hêsanî di databasa fermî ya sîgorteyê ya Polonyayê (UFG) de tê kontrolkirin.",
      meta: [
        "Polîçeya PDF piştî derxistinê",
        "Piştgiriya di messengeran de",
        "Mercên zelal û hêsan"
      ],
      ctaCalc: "Mesrefê hesab bike",
      ctaBuy: "Polîçe derxe",
    },

    calc: {
      title: "Hesabkera Mesrefê",
      badge: "~ 1 deqîqe",
      desc: "hesabkerek hêsan a tarîfeyan",
      termLabel: "Dem",
      vehicleLabel: "Cureya wesayîtê",
      termOptions: [
        { value: "30", label: "30 roj" },
        { value: "60", label: "60 roj" },
        { value: "90", label: "90 roj" },
        { value: "180", label: "180 roj" },
        { value: "365", label: "364 roj" },
      ],
      vehicleOptions: [
        { value: "car", label: "Otomobîl" },
        { value: "van", label: "Otobûs" },
        { value: "truck", label: "Kamyon" },
        { value: "trailer", label: "Rimork" },
        { value: "special", label: "Makîneyên taybet" },
      ],
      button: "Hesab bike",
      note: "not",
    },

    process: {
      title: "Çawa dixebite",
      desc: "Bi gav bi gav: hesabkirin → agahdarî → dravdan → polîçe.",
      steps: [
        {
          title: "Hesab bikin",
          text: "Cureya wesayîtê û dema sîgorteyê hilbijêrin.",
        },
        {
          title: "Agahdariyan dagirin",
          text: "Navnîşana qeydkirinê, plaka, VIN û agahdariyên têkilî.",
        },
        {
          title: "Drav bidin",
          text: "Piştî amadekirina polîçeyê em agahdariyên dravdanê ji we re dişînin.",
        },
        {
          title: "Polîçeya PDF bistînin",
          text: "Yekser piştî ku em pejirandina dravdanê bistînin.",
        },
      ],
    },

    why: {
      title: "Çima me hilbijêrin",
      desc: "Armanca me lez, zelalî û rastiya derxistinê ye.",
      items: [
        {
          title: "Lez",
          text: "Kêmtirîn gav û pêkhatineke zelal.",
        },
        {
          title: "Hêsan tê fêmkirin",
          text: "Cudahiya berheman bi zimanek sade şîrove dikin.",
        },
        {
          title: "Pratîk",
          text: "Em li gorî kontrol û daxwazên fermî tevdigerin.",
        },
        {
          title: "Piştgirî",
          text: "Di pirsên derbarê derxistin û kontrolkirinê de alîkariyê dikin.",
        },
      ],
    },

    form: {
      title: "Forma daxwazê",
      desc: "Agahdariyan dagirin — em ê polîçeyê amade bikin û agahdariyên dravdanê ji we re bişînin.",
    },

    faq: {
      title: "FAQ",
      desc: "Bersivên kurt ji bo pirsên herî gelemperî.",
      items: [
        {
          q: "Derxistina polîçeyê çiqas dem digire?",
          a: "Bi gelemperî 10–20 deqîqe digire heke hemû agahdarî amade bin. Lê em pêşniyar dikin ku polîçeyê 1–2 roj berî destpêka pêdivî ya parastinê derxînin.",
        },
        {
          q: "Ma ez dikarim bi kartê drav bidim?",
          a: "Niha tenê veguhastinên SWIFT, SEPA, P2P û dravdana BLIK hene. Piştî amadekirina polîçeyê, hûn drav didin û polîçeya PDF distînin.",
        },
        {
          q: "Ev heman tişt e ku 'Green Card'?",
          a: "Na. Ev du berhemên cuda ne û rêzikên wan jî cuda ne.",
        },
        {
          q: "Ev çi cure sîgorteyek e?",
          a: "Ev sîgorteya mecbûrî ya berpirsiyariya xwedan an bikarhênerên wesayîtên motorî ye ku li Polonya û Yekîtiya Ewropayê derbasdar e.",
        },
        {
          q: "Sîgorte çi diparêze?",
          a: `Parastin evan dihewîne:
  • Ziyana jiyanê an tenduristiya kesên zarar dîtî;
  • Ziyana milkî ya kesên sêyem.

  Meblağên herî kêm yên garantîkirî:
  • 29 876 400 PLN — ji bo birînên laşî;
  • 6 021 600 PLN — ji bo ziyana milkî.`,
        },
        {
          q: "Sîgorte çi naxweşe?",
          a: `• Bisîklet û wesayîtên bêmotor;
  • Ziyana xwediyê wesayîtê;
  • Ziyana jîngehê.`,
        },
        {
          q: "Di kîjan rewşan de regres gengaz e?",
          a: `Şirketa sîgorteyê dikare drava dayî vegerîne heke ajokar:
  • Bi qestî hereket kiriye;
  • Serxweş an di bin bandora narkotîkan de bûye;
  • Mafê ajotinê tune bûye;
  • Ji cihê qezayê reviye;
  • Wesayîteke dizî bikar aniye.`,
        },
        {
          q: "Polîçe kengê dest pê dike û kengê diqede?",
          a: `Destpêk: roja derxistina polîçeyê.

  Demjimêra derbasdariyê: 30–364 roj.

  Dawî:
  • Bi qedandina demê;
  • Bi dizîn an derxistina wesayîtê ji karanînê;
  • Bi rakirina qeydkirinê.`,
        },
      ],
    },

    verify: {
      title: "Kontrolkirina derbasdariya polîçeyê",
      lead:
        "Heke hûn dixwazin piştrast bibin ku polîçeya we çalak e, databasa fermî ya buroyên sîgorteyê bikar bînin. Li jêr girêdanên Polonya, Letonya û Lîtvanyayê hene.",
      items: [
        {
          code: "PL",
          country: "Polonya",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Kontrolkirina derbasdariya polîçeya OC bi plaka an VIN di databasa fermî ya UFG de.",
          cta: "Biçe malpera UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letonya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Kontrolkirina sîgorteya mecbûrî ya OCTA ji bo wesayîtên ku li Letonyayê hatine qeydkirin.",
          cta: "Bi LTAB kontrol bike",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lîtvanya",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Xizmeta kontrolkirina derbasdariya sîgorteya mecbûrî ya berpirsiyariya sivîl li Lîtvanyayê.",
          cta: "Bi CAB kontrol bike",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  ar: {
    hero: {
      kicker: "إصدار التأمين عبر الإنترنت",
      title: "تأمين الحدود (OC Graniczne) — بسرعة ودون إجراءات معقدة",
      lead:
        "احسب التكلفة، أرسل الطلب، واحصل على وثيقة التأمين بصيغة PDF. بالنسبة للمركبات المسجلة خارج الاتحاد الأوروبي، يمكن التحقق من الوثيقة بسهولة عبر قاعدة بيانات التأمين البولندية (UFG).",
      meta: [
        "وثيقة PDF بعد الإصدار",
        "دعم عبر تطبيقات المراسلة",
        "شروط واضحة ومفهومة",
      ],
      ctaCalc: "احسب التكلفة",
      ctaBuy: "إصدار الوثيقة",
    },

    calc: {
      title: "حاسبة التكلفة",
      badge: "~ دقيقة واحدة",
      desc: "حاسبة تعرفة بسيطة",
      termLabel: "المدة",
      vehicleLabel: "نوع المركبة",
      termOptions: [
        { value: "30", label: "30 يومًا" },
        { value: "60", label: "60 يومًا" },
        { value: "90", label: "90 يومًا" },
        { value: "180", label: "180 يومًا" },
        { value: "365", label: "364 يومًا" },
      ],
      vehicleOptions: [
        { value: "car", label: "سيارات ركاب" },
        { value: "van", label: "حافلات" },
        { value: "truck", label: "شاحنات" },
        { value: "trailer", label: "مقطورات" },
        { value: "special", label: "مركبات خاصة" },
      ],
      button: "احسب",
      note: "note",
    },

    process: {
      title: "كيف يتم الإصدار",
      desc: "الخطوات: الحساب → البيانات → الدفع → الوثيقة.",
      steps: [
        {
          title: "احسب التكلفة",
          text: "اختر نوع المركبة ومدة التأمين.",
        },
        {
          title: "أدخل البيانات",
          text: "عنوان التسجيل، رقم اللوحة، رقم VIN وبيانات التواصل.",
        },
        {
          title: "ادفع",
          text: "بعد إعداد الوثيقة سنرسل لك بيانات الدفع.",
        },
        {
          title: "استلم وثيقة PDF",
          text: "فور استلامنا لتأكيد الدفع.",
        },
      ],
    },

    why: {
      title: "لماذا يختارنا العملاء",
      desc: "نركز على السرعة والوضوح وصحة الإصدار.",
      items: [
        {
          title: "سريع",
          text: "أقل عدد ممكن من الخطوات مع عملية واضحة.",
        },
        {
          title: "واضح",
          text: "نشرح الفروقات بين المنتجات التأمينية بلغة بسيطة.",
        },
        {
          title: "عملي",
          text: "نعتمد على المتطلبات الرسمية وإجراءات التحقق المعتمدة.",
        },
        {
          title: "الدعم",
          text: "نساعد في جميع الاستفسارات المتعلقة بالإصدار والتحقق.",
        },
      ],
    },

    form: {
      title: "نموذج الطلب",
      desc: "املأ البيانات وسنقوم بإعداد الوثيقة وإرسال معلومات الدفع.",
    },

    faq: {
      title: "الأسئلة الشائعة",
      desc: "إجابات مختصرة على أكثر الأسئلة شيوعًا.",
      items: [
        {
          q: "كم يستغرق إصدار الوثيقة؟",
          a: "عادةً من 10 إلى 20 دقيقة عند توفر جميع البيانات. ومع ذلك، نوصي بإصدار الوثيقة قبل يوم أو يومين من تاريخ بدء التغطية المطلوب.",
        },
        {
          q: "هل يمكن الدفع بالبطاقة؟",
          a: "في الوقت الحالي تتوفر فقط تحويلات SWIFT وSEPA وP2P بالإضافة إلى الدفع عبر BLIK. بعد إعداد الوثيقة تقوم بالدفع ثم تستلم نسخة PDF.",
        },
        {
          q: "هل هذا هو نفسه نظام البطاقة الخضراء؟",
          a: "لا. هذه منتجات مختلفة وتخضع لقواعد مختلفة.",
        },
        {
          q: "ما نوع هذا التأمين؟",
          a: "هو تأمين إلزامي للمسؤولية المدنية لمالكي أو مستخدمي المركبات الآلية، ساري المفعول في بولندا ودول الاتحاد الأوروبي.",
        },
        {
          q: "ماذا يغطي التأمين؟",
          a: `تشمل التغطية:
  • الأضرار الجسدية أو الصحية التي تلحق بالمتضررين؛
  • الأضرار المادية التي تصيب الغير.

  الحدود الدنيا المضمونة للتغطية:
  • 29,876,400 زلوتي بولندي للأضرار الجسدية؛
  • 6,021,600 زلوتي بولندي للأضرار المادية.`,
        },
        {
          q: "ما الذي لا يغطيه التأمين؟",
          a: `• الدراجات الهوائية والمركبات غير الآلية؛
  • الأضرار التي تلحق بمالك المركبة؛
  • الأضرار البيئية.`,
        },
        {
          q: "في أي حالات يحق لشركة التأمين الرجوع على السائق؟",
          a: `يحق لشركة التأمين المطالبة باسترداد المبالغ المدفوعة إذا كان السائق:
  • قد تسبب بالحادث عمدًا؛
  • تحت تأثير الكحول أو المخدرات؛
  • يقود دون رخصة؛
  • فرّ من مكان الحادث؛
  • استخدم مركبة مسروقة.`,
        },
        {
          q: "متى يبدأ وينتهي سريان الوثيقة؟",
          a: `بداية التغطية: تاريخ إصدار الوثيقة.

  مدة التغطية: من 30 إلى 364 يومًا.

  تنتهي الوثيقة في الحالات التالية:
  • انتهاء مدة التأمين؛
  • سرقة المركبة أو شطبها؛
  • إلغاء تسجيل المركبة.`,
        },
      ],
    },

    verify: {
      title: "التحقق من صلاحية الوثيقة",
      lead:
        "إذا كنت ترغب في التأكد من أن وثيقة التأمين الخاصة بك فعالة بالفعل، يمكنك استخدام قواعد البيانات الرسمية لمكاتب التأمين. فيما يلي روابط خدمات التحقق في بولندا ولاتفيا وليتوانيا.",
      items: [
        {
          code: "PL",
          country: "بولندا",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "التحقق من صلاحية تأمين OC باستخدام رقم التسجيل أو رقم VIN عبر قاعدة بيانات UFG الرسمية.",
          cta: "الانتقال إلى موقع UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "لاتفيا",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "التحقق من تأمين OCTA الإلزامي للمركبات المسجلة في لاتفيا.",
          cta: "التحقق عبر LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "ليتوانيا",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "خدمة التحقق من صلاحية وثيقة التأمين الإلزامي للمسؤولية المدنية في ليتوانيا.",
          cta: "التحقق عبر CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },
  uk: {
    hero: {
      kicker: "Онлайн-оформлення",
      title: "Договір прикордонного страхування (OC graniczne) — швидко та без зайвих кроків",
      lead:
        "Розрахуйте вартість, заповніть заявку та отримайте PDF-поліс. Для автомобілів із країн, зареєстрованих за межами ЄС, поліс можна легко перевірити в базі страхування Республіки Польща (UFG).",
      meta: ["PDF-поліс після оформлення", "Підтримка в месенджерах", "Зрозумілі умови"],
      ctaCalc: "Розрахувати вартість",
      ctaBuy: "Оформити поліс",
    },

    calc: {
      title: "Калькулятор вартості",
      badge: "~ 1 хвилина",
      desc: "простий тарифний калькулятор",
      termLabel: "Строк",
      vehicleLabel: "Тип ТЗ",
      termOptions: [
        { value: "30", label: "30 днів" },
        { value: "60", label: "60 днів" },
        { value: "90", label: "90 днів" },
        { value: "180", label: "180 днів" },
        { value: "365", label: "364 дні" },
      ],
      vehicleOptions: [
        { value: "car", label: "Легкові автомобілі" },
        { value: "van", label: "Автобуси" },
        { value: "truck", label: "Вантажні автомобілі" },
        { value: "trailer", label: "Причепи" },
        { value: "special", label: "Спецтехніка" },
      ],
      button: "Розрахувати",
      note: "note",
    },

    process: {
      title: "Як це працює",
      desc: "Покроково: розрахунок → дані → оплата → поліс.",
      steps: [
        {
          title: "Розрахуйте",
          text: "Оберіть тип транспортного засобу та строк страхування."
        },
        {
          title: "Заповніть дані",
          text: "Адреса реєстрації, державний номер, VIN та контактні дані."
        },
        {
          title: "Оплатіть",
          text: "Після підготовки поліса ми надішлемо вам реквізити для оплати."
        },
        {
          title: "Отримайте PDF-поліс",
          text: "Одразу після отримання нами підтвердження оплати."
        },
      ],
    },

    why: {
      title: "Чому обирають нас",
      desc: "Фокус на швидкості, зрозумілості та правильності оформлення.",
      items: [
        {
          title: "Швидко",
          text: "Мінімум кроків і зрозуміла структура."
        },
        {
          title: "Зрозуміло",
          text: "Пояснюємо відмінності між страховими продуктами простою мовою."
        },
        {
          title: "Практично",
          text: "Орієнтуємося на офіційні перевірки та чинні вимоги."
        },
        {
          title: "Підтримка",
          text: "Допомагаємо з питаннями щодо оформлення та перевірки."
        },
      ],
    },

    form: {
      title: "Форма заявки",
      desc: "Заповніть дані — ми підготуємо поліс і надішлемо реквізити для оплати.",
    },

    faq: {
      title: "FAQ",
      desc: "Короткі відповіді на поширені запитання.",
      items: [
        {
          q: "Скільки часу займає оформлення?",
          a: "Зазвичай 10–20 хвилин за наявності всіх необхідних даних. Однак загальна рекомендація — оформлювати поліс за один-два дні до потрібної дати початку дії страхового покриття."
        },
        {
          q: "Чи можна оплатити карткою?",
          a: "Наразі доступні лише SWIFT, SEPA та P2P-перекази, а також оплата через BLIK. Після підготовки поліса ви здійснюєте оплату та отримуєте PDF-документ."
        },
        {
          q: "Це те саме, що «Зелена картка»?",
          a: "Ні. Це різні страхові продукти та різні правила."
        },
        {
          q: "Що це за страховка?",
          a: "Це обов’язкове страхування цивільної відповідальності власників або користувачів механічних транспортних засобів, яке діє на території Польщі та країн ЄС."
        },
        {
          q: "Що покриває страховка?",
          a: `Покриття включає:
            • Шкоду життю або здоров’ю потерпілих;
            • Майнову шкоду, завдану третім особам.

            Мінімальні гарантовані страхові суми:
            • 29 876 400 PLN — тілесні ушкодження;
            • 6 021 600 PLN — майнова шкода.`
        },
        {
          q: "Що не покриває страховка?",
          a: `• велосипеди та немеханічні транспортні засоби;
              • шкоду власнику автомобіля;
              • шкоду навколишньому середовищу.`
        },
        {
          q: "У яких випадках можливий регрес?",
          a: `Страхова компанія має право стягнути виплачену суму, якщо водій:
            • діяв умисно;
            • перебував у стані алкогольного або наркотичного сп’яніння;
            • не мав права керування;
            • залишив місце ДТП;
            • використовував викрадений автомобіль.`
        },
        {
          q: "Коли починає діяти та коли закінчується поліс?",
          a: `Початок дії: дата видачі поліса.

              Строк дії: 30–364 дні.

              Припинення дії:
              • закінчення строку;
              • викрадення або списання автомобіля;
              • зняття з реєстрації.`
        },
      ],
    },

    verify: {
      title: "Перевірка чинності поліса",
      lead:
        "Якщо ви хочете переконатися, що ваш поліс дійсно активний, скористайтеся офіційними базами страхових бюро. Нижче наведено посилання на сервіси для Польщі, Латвії та Литви.",
      items: [
        {
          code: "PL",
          country: "Польща",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Перевірка чинності поліса OC за державним номером або VIN в офіційній базі UFG.",
          cta: "Перейти на сайт UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Латвія",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Перевірка обов’язкового страхування OCTA для транспортних засобів, зареєстрованих у Латвії.",
          cta: "Перевірити через LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Сервіс перевірки чинності поліса обов’язкового страхування цивільної відповідальності в Литві.",
          cta: "Перевірити через CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },


  he: {
    hero: {
      kicker: "הנפקה מקוונת",
      title: "ביטוח גבול (OC Graniczne) — במהירות וללא שלבים מיותרים",
      lead:
        "חשבו את העלות, מלאו את הבקשה וקבלו פוליסה בפורמט PDF. מיועד לרכבים הרשומים במדינות מחוץ לאיחוד האירופי — ניתן לאמת את הפוליסה בקלות במאגר הביטוח הרשמי של פולין (UFG).",
      meta: ["פוליסת PDF לאחר ההנפקה", "תמיכה במסנג'רים", "תנאים ברורים"],
      ctaCalc: "חשב עלות",
      ctaBuy: "הנפקת פוליסה",
    },

    calc: {
      title: "מחשבון עלות",
      badge: "~ דקה אחת",
      desc: "מחשבון תעריפים פשוט",
      termLabel: "תקופה",
      vehicleLabel: "סוג רכב",
      termOptions: [
        { value: "30", label: "30 ימים" },
        { value: "60", label: "60 ימים" },
        { value: "90", label: "90 ימים" },
        { value: "180", label: "180 ימים" },
        { value: "365", label: "364 ימים" },
      ],
      vehicleOptions: [
        { value: "car", label: "רכב פרטי" },
        { value: "van", label: "אוטובוסים" },
        { value: "truck", label: "משאיות" },
        { value: "trailer", label: "נגררים" },
        { value: "special", label: "ציוד הנדסי וכלים מיוחדים" },
      ],
      button: "חשב",
      note: "note",
    },

    process: {
      title: "איך זה עובד",
      desc: "שלב אחר שלב: חישוב → פרטים → תשלום → פוליסה.",
      steps: [
        {
          title: "חשב את העלות",
          text: "בחר את סוג הרכב ואת תקופת הביטוח."
        },
        {
          title: "מלא את הפרטים",
          text: "כתובת רישום, מספר רישוי, VIN ופרטי קשר."
        },
        {
          title: "בצע תשלום",
          text: "לאחר הכנת הפוליסה נשלח אליך את פרטי התשלום."
        },
        {
          title: "קבל פוליסת PDF",
          text: "מיד לאחר קבלת אישור התשלום אצלנו."
        },
      ],
    },

    why: {
      title: "למה בוחרים בנו",
      desc: "דגש על מהירות, בהירות ודיוק בהנפקה.",
      items: [
        {
          title: "מהיר",
          text: "מינימום שלבים ותהליך ברור."
        },
        {
          title: "ברור",
          text: "אנו מסבירים את ההבדלים בין המוצרים בשפה פשוטה."
        },
        {
          title: "מעשי",
          text: "אנו פועלים בהתאם לבדיקות ולדרישות הרשמיות."
        },
        {
          title: "תמיכה",
          text: "מסייעים בכל שאלה לגבי ההנפקה ואימות הפוליסה."
        },
      ],
    },

    form: {
      title: "טופס בקשה",
      desc: "מלאו את הפרטים — אנו נכין את הפוליסה ונשלח לכם את פרטי התשלום.",
    },

    faq: {
      title: "שאלות נפוצות",
      desc: "תשובות קצרות לשאלות נפוצות.",
      items: [
        {
          q: "כמה זמן לוקח להנפיק את הפוליסה?",
          a: "בדרך כלל 10–20 דקות כאשר כל המידע הנדרש זמין. עם זאת, מומלץ להנפיק את הפוליסה יום או יומיים לפני מועד תחילת הכיסוי המבוקש."
        },
        {
          q: "האם ניתן לשלם בכרטיס אשראי?",
          a: "בשלב זה זמינים רק העברות SWIFT, SEPA ו-P2P וכן תשלום באמצעות BLIK. לאחר הכנת הפוליסה תבצעו את התשלום ותקבלו את קובץ ה-PDF."
        },
        {
          q: "האם זה אותו דבר כמו 'גרין קארד'?",
          a: "לא. מדובר במוצרים שונים עם כללים שונים."
        },
        {
          q: "איזה סוג ביטוח זה?",
          a: "זהו ביטוח חובה לאחריות צד שלישי לבעלי או משתמשי כלי רכב מנועיים, התקף בפולין ובמדינות האיחוד האירופי."
        },
        {
          q: "מה מכסה הביטוח?",
          a: `הכיסוי כולל:
            • נזקי גוף או פגיעה בבריאות של נפגעים;
            • נזק לרכוש של צדדים שלישיים.

            סכומי הכיסוי המינימליים:
            • 29,876,400 PLN — נזקי גוף;
            • 6,021,600 PLN — נזקי רכוש.`
        },
        {
          q: "מה הביטוח אינו מכסה?",
          a: `• אופניים וכלי רכב שאינם ממונעים;
              • נזק לבעל הרכב;
              • נזק לסביבה.`
        },
        {
          q: "באילו מקרים ייתכן שיבוב (רגרס)?",
          a: `חברת הביטוח רשאית לדרוש החזר מהנהג אם:
            • פעל במכוון;
            • היה תחת השפעת אלכוהול או סמים;
            • נהג ללא רישיון תקף;
            • נמלט מזירת התאונה;
            • השתמש ברכב גנוב.`
        },
        {
          q: "מתי הפוליסה מתחילה ומסתיימת?",
          a: `תחילת הכיסוי: תאריך הנפקת הפוליסה.

              תקופת הביטוח: 30–364 ימים.

              סיום הכיסוי:
              • בתום תקופת הביטוח;
              • במקרה של גניבה או גריטת הרכב;
              • במקרה של ביטול רישום הרכב.`
        },
      ],
    },

    verify: {
      title: "בדיקת תוקף הפוליסה",
      lead:
        "אם ברצונכם לוודא שהפוליסה שלכם פעילה, ניתן להשתמש במאגרי המידע הרשמיים של לשכות הביטוח. להלן קישורים לשירותי האימות בפולין, לטביה וליטא.",
      items: [
        {
          code: "PL",
          country: "פולין",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "בדיקת תוקף ביטוח OC לפי מספר רישוי או VIN במאגר הרשמי של UFG.",
          cta: "מעבר לאתר UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "לטביה",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "בדיקת ביטוח החובה OCTA לכלי רכב הרשומים בלטביה.",
          cta: "בדיקה דרך LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "ליטא",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "שירות לבדיקת תוקף ביטוח החובה לאחריות צד שלישי בליטא.",
          cta: "בדיקה דרך CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },


  az: {
    hero: {
      kicker: "Onlayn rəsmiləşdirmə",
      title: "Sərhəd sığortası müqaviləsi (OC graniczne) — sürətli və əlavə mərhələlər olmadan",
      lead:
        "Qiyməti hesablayın, müraciəti doldurun və PDF polisi əldə edin. Aİ hüdudlarından kənarda qeydiyyatdan keçmiş nəqliyyat vasitələri üçün polis Polşa Respublikasının sığorta bazasında (UFG) asanlıqla yoxlanıla bilər.",
      meta: ["Rəsmiləşdirmədən sonra PDF polis", "Mesencerlərdə dəstək", "Aydın şərtlər"],
      ctaCalc: "Qiyməti hesabla",
      ctaBuy: "Polisi rəsmiləşdir",
    },

    calc: {
      title: "Qiymət kalkulyatoru",
      badge: "~ 1 dəqiqə",
      desc: "sadə tarif kalkulyatoru",
      termLabel: "Müddət",
      vehicleLabel: "Nəqliyyat vasitəsinin növü",
      termOptions: [
        { value: "30", label: "30 gün" },
        { value: "60", label: "60 gün" },
        { value: "90", label: "90 gün" },
        { value: "180", label: "180 gün" },
        { value: "365", label: "364 gün" },
      ],
      vehicleOptions: [
        { value: "car", label: "Minik avtomobilləri" },
        { value: "van", label: "Avtobuslar" },
        { value: "truck", label: "Yük avtomobilləri" },
        { value: "trailer", label: "Qoşqular" },
        { value: "special", label: "Xüsusi texnika" },
      ],
      button: "Hesabla",
      note: "note",
    },

    process: {
      title: "Bu necə işləyir",
      desc: "Addım-addım: hesablama → məlumatlar → ödəniş → polis.",
      steps: [
        {
          title: "Hesablayın",
          text: "Nəqliyyat vasitəsinin növünü və sığorta müddətini seçin.",
        },
        {
          title: "Məlumatları doldurun",
          text: "Qeydiyyat ünvanı, dövlət nömrə nişanı, VIN və əlaqə məlumatları.",
        },
        {
          title: "Ödəniş edin",
          text: "Polis hazırlandıqdan sonra ödəniş rekvizitlərini sizə göndərəcəyik.",
        },
        {
          title: "PDF polisi əldə edin",
          text: "Ödəniş təsdiqini aldıqdan dərhal sonra.",
        },
      ],
    },

    why: {
      title: "Niyə bizi seçirlər",
      desc: "Sürətə, aydınlığa və düzgün rəsmiləşdirməyə fokuslanırıq.",
      items: [
        {
          title: "Sürətli",
          text: "Minimum addım və aydın proses.",
        },
        {
          title: "Aydın",
          text: "Məhsullar arasındakı fərqləri sadə dillə izah edirik.",
        },
        {
          title: "Praktik",
          text: "Rəsmi yoxlamalara və tələblərə əsaslanırıq.",
        },
        {
          title: "Dəstək",
          text: "Rəsmiləşdirmə və yoxlama ilə bağlı suallarda kömək edirik.",
        },
      ],
    },

    form: {
      title: "Müraciət forması",
      desc: "Məlumatları doldurun — polisi hazırlayacaq və ödəniş məlumatlarını sizə göndərəcəyik.",
    },

    faq: {
      title: "Tez-tez verilən suallar",
      desc: "Ən çox verilən suallara qısa cavablar.",
      items: [
        {
          q: "Rəsmiləşdirmə nə qədər vaxt aparır?",
          a: "Bütün məlumatlar təqdim edildikdə adətən 10–20 dəqiqə çəkir. Lakin ümumi tövsiyə odur ki, polisi qüvvəyə minmə tarixindən 1–2 gün əvvəl rəsmiləşdirəsiniz.",
        },
        {
          q: "Kartla ödəniş etmək mümkündürmü?",
          a: "Hazırda yalnız SWIFT, SEPA və P2P köçürmələri, həmçinin BLIK ödənişi mümkündür. Polis hazırlandıqdan sonra ödəniş edir və PDF sənədini əldə edirsiniz.",
        },
        {
          q: "Bu, «Yaşıl Kart» ilə eynidirmi?",
          a: "Xeyr. Bunlar fərqli məhsullar və fərqli qaydalardır.",
        },
        {
          q: "Bu hansı sığortadır?",
          a: "Bu, Polşa və Aİ ərazisində qüvvədə olan nəqliyyat vasitəsi sahiblərinin və ya istifadəçilərinin mülki məsuliyyətinin məcburi sığortasıdır.",
        },
        {
          q: "Sığorta nələri əhatə edir?",
          a: `Əhatə dairəsinə daxildir:
              • Zərərçəkənlərin həyatına və sağlamlığına vurulan zərər;
              • Üçüncü şəxslərin əmlakına vurulan zərər.

              Minimum təminat məbləğləri:
              • 29 876 400 PLN — bədən xəsarətləri üzrə;
              • 6 021 600 PLN — əmlak zərəri üzrə.`,
        },
        {
          q: "Sığorta nələri əhatə etmir?",
          a: `• velosipedlər və mexaniki olmayan nəqliyyat vasitələri;
              • avtomobil sahibinə vurulan zərər;
              • ətraf mühitə vurulan zərər.`,
        },
        {
          q: "Hansı hallarda reqres tələbi irəli sürülə bilər?",
          a: `Sürücü:
              • qəsdən hərəkət etdikdə;
              • spirtli içki və ya narkotik təsiri altında olduqda;
              • sürücülük hüququ olmadıqda;
              • hadisə yerindən qaçdıqda;
              • oğurlanmış avtomobildən istifadə etdikdə,
              sığortaçı ödənilmiş məbləği geri tələb edə bilər.`,
        },
        {
          q: "Polis nə vaxt başlayır və nə vaxt başa çatır?",
          a: `Başlanğıc: polisin verildiyi tarix.

              Müddət: 30–364 gün.

              Xitam:
              • müddətin başa çatması;
              • avtomobilin oğurlanması və ya silinməsi;
              • qeydiyyatdan çıxarılması.`,
        },
      ],
    },

    verify: {
      title: "Polisin etibarlılığının yoxlanılması",
      lead:
        "Polisinizin həqiqətən qüvvədə olduğuna əmin olmaq istəyirsinizsə, rəsmi sığorta bürolarının məlumat bazalarından istifadə edin. Aşağıda Polşa, Latviya və Litva üzrə yoxlama xidmətlərinə keçidlər təqdim olunub.",
      items: [
        {
          code: "PL",
          country: "Polşa",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG-nin rəsmi bazasında dövlət qeydiyyat nömrəsi və ya VIN üzrə OC polisinin etibarlılığının yoxlanılması.",
          cta: "UFG saytına keç",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Latviya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Latviyada qeydiyyatdan keçmiş nəqliyyat vasitələri üçün məcburi OCTA sığortasının yoxlanılması.",
          cta: "LTAB vasitəsilə yoxla",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litva",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Litvada məcburi mülki məsuliyyət sığortası polisinin etibarlılığını yoxlama xidməti.",
          cta: "CAB vasitəsilə yoxla",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },

  ro: {
    hero: {
      kicker: "Emitere online",
      title: "Asigurare de frontieră (OC graniczne) — rapid și fără pași inutili",
      lead:
        "Calculați costul, completați cererea și primiți polița în format PDF. Pentru vehiculele înmatriculate în afara UE, polița poate fi verificată cu ușurință în baza de date a asigurărilor din Polonia (UFG).",
      meta: ["Poliță PDF după emitere", "Asistență prin mesagerie", "Condiții clare"],
      ctaCalc: "Calculează costul",
      ctaBuy: "Solicită polița",
    },

    calc: {
      title: "Calculator de cost",
      badge: "~ 1 minut",
      desc: "calculator tarifar simplu",
      termLabel: "Perioadă",
      vehicleLabel: "Tipul vehiculului",
      termOptions: [
        { value: "30", label: "30 de zile" },
        { value: "60", label: "60 de zile" },
        { value: "90", label: "90 de zile" },
        { value: "180", label: "180 de zile" },
        { value: "365", label: "364 de zile" },
      ],
      vehicleOptions: [
        { value: "car", label: "Autoturisme" },
        { value: "van", label: "Autobuze" },
        { value: "truck", label: "Camioane" },
        { value: "trailer", label: "Remorci" },
        { value: "special", label: "Vehicule speciale" },
      ],
      button: "Calculează",
      note: "note",
    },

    process: {
      title: "Cum funcționează",
      desc: "Pas cu pas: calcul → date → plată → poliță.",
      steps: [
        {
          title: "Calculează",
          text: "Selectați tipul vehiculului și perioada de asigurare.",
        },
        {
          title: "Completați datele",
          text: "Adresa de înmatriculare, numărul de înmatriculare, VIN-ul și datele de contact.",
        },
        {
          title: "Achitați",
          text: "După pregătirea poliței, vă vom trimite detaliile pentru plată.",
        },
        {
          title: "Primiți polița PDF",
          text: "Imediat după primirea confirmării plății.",
        },
      ],
    },

    why: {
      title: "De ce ne aleg clienții",
      desc: "Accent pe rapiditate, claritate și emitere corectă.",
      items: [
        {
          title: "Rapid",
          text: "Număr minim de pași și structură clară.",
        },
        {
          title: "Clar",
          text: "Explicăm diferențele dintre produse într-un limbaj simplu.",
        },
        {
          title: "Practic",
          text: "Ne orientăm după verificările și cerințele oficiale.",
        },
        {
          title: "Asistență",
          text: "Vă ajutăm cu întrebările privind emiterea și verificarea poliței.",
        },
      ],
    },

    form: {
      title: "Formular de solicitare",
      desc: "Completați datele — vom pregăti polița și vă vom trimite detaliile pentru plată.",
    },

    faq: {
      title: "FAQ",
      desc: "Răspunsuri scurte la cele mai frecvente întrebări.",
      items: [
        {
          q: "Cât timp durează emiterea?",
          a: "De regulă, 10–20 de minute dacă toate datele necesare sunt disponibile. Totuși, recomandăm emiterea poliței cu una-două zile înainte de data la care aveți nevoie de începerea acoperirii.",
        },
        {
          q: "Se poate plăti cu cardul?",
          a: "În prezent sunt disponibile doar transferurile SWIFT, SEPA și P2P, precum și plata prin BLIK. După pregătirea poliței, efectuați plata și primiți documentul PDF.",
        },
        {
          q: "Este aceeași asigurare ca «Cartea Verde»?",
          a: "Nu. Sunt produse diferite și se aplică reguli diferite.",
        },
        {
          q: "Ce tip de asigurare este aceasta?",
          a: "Este asigurarea obligatorie de răspundere civilă pentru proprietarii sau utilizatorii vehiculelor cu motor, valabilă pe teritoriul Poloniei și al Uniunii Europene.",
        },
        {
          q: "Ce acoperă asigurarea?",
          a: `Acoperirea include:
              • Vătămarea vieții sau sănătății persoanelor prejudiciate;
              • Daune materiale cauzate terților.

              Sume minime garantate:
              • 29 876 400 PLN — vătămări corporale;
              • 6 021 600 PLN — daune materiale.`,
        },
        {
          q: "Ce nu acoperă asigurarea?",
          a: `• bicicletele și vehiculele fără motor;
              • daunele suferite de proprietarul vehiculului;
              • daunele aduse mediului înconjurător.`,
        },
        {
          q: "În ce situații este posibil regresul?",
          a: `Asigurătorul are dreptul să recupereze suma plătită dacă șoferul:
              • a acționat intenționat;
              • se afla sub influența alcoolului sau a drogurilor;
              • nu deținea permis de conducere;
              • a părăsit locul accidentului;
              • utiliza un vehicul furat.`,
        },
        {
          q: "Când începe și când încetează polița?",
          a: `Început: data emiterii poliței.

              Perioada de valabilitate: 30–364 de zile.

              Încetare:
              • expirarea perioadei de valabilitate;
              • furtul sau casarea vehiculului;
              • radierea din circulație.`,
        },
      ],
    },

    verify: {
      title: "Verificarea valabilității poliței",
      lead:
        "Dacă doriți să verificați dacă polița dumneavoastră este activă, utilizați bazele de date oficiale ale birourilor de asigurări. Mai jos găsiți linkuri către serviciile din Polonia, Letonia și Lituania.",
      items: [
        {
          code: "PL",
          country: "Polonia",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Verificarea valabilității poliței OC după numărul de înmatriculare sau VIN în baza oficială UFG.",
          cta: "Accesați site-ul UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letonia",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Verificarea asigurării obligatorii OCTA pentru vehiculele înmatriculate în Letonia.",
          cta: "Verifică prin LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lituania",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Serviciu de verificare a valabilității poliței de asigurare obligatorie de răspundere civilă auto în Lituania.",
          cta: "Verifică prin CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },

  sr: {
    hero: {
      kicker: "Online ugovaranje",
      title: "Polisa graničnog osiguranja (OC graniczne) — brzo i bez suvišnih koraka",
      lead:
        "Izračunajte cenu, popunite zahtev i preuzmite PDF polisu. Za vozila registrovana van EU — polisu je moguće jednostavno proveriti u bazi osiguranja Republike Poljske (UFG).",
      meta: ["PDF polisa nakon izdavanja", "Podrška putem mesindžera", "Jasni uslovi"],
      ctaCalc: "Izračunaj cenu",
      ctaBuy: "Ugovori polisu",
    },

    calc: {
      title: "Kalkulator cene",
      badge: "~ 1 minut",
      desc: "jednostavan kalkulator tarifa",
      termLabel: "Period",
      vehicleLabel: "Vrsta vozila",
      termOptions: [
        { value: "30", label: "30 dana" },
        { value: "60", label: "60 dana" },
        { value: "90", label: "90 dana" },
        { value: "180", label: "180 dana" },
        { value: "365", label: "364 dana" },
      ],
      vehicleOptions: [
        { value: "car", label: "Putnička vozila" },
        { value: "van", label: "Autobusi" },
        { value: "truck", label: "Teretna vozila" },
        { value: "trailer", label: "Prikolice" },
        { value: "special", label: "Specijalna vozila" },
      ],
      button: "Izračunaj",
      note: "note",
    },

    process: {
      title: "Kako funkcioniše",
      desc: "Korak po korak: obračun → podaci → plaćanje → polisa.",
      steps: [
        { title: "Izračunajte cenu", text: "Izaberite vrstu vozila i period osiguranja." },
        { title: "Popunite podatke", text: "Adresa registracije, registarski broj, VIN i kontakt podaci." },
        { title: "Izvršite uplatu", text: "Nakon pripreme polise poslaćemo vam podatke za plaćanje." },
        { title: "Preuzmite PDF polisu", text: "Odmah nakon što primimo potvrdu o uplati." },
      ],
    },

    why: {
      title: "Zašto nas klijenti biraju",
      desc: "Fokusirani smo na brzinu, jasnoću i tačnost ugovaranja.",
      items: [
        { title: "Brzo", text: "Minimalan broj koraka i jasna struktura procesa." },
        { title: "Jasno", text: "Objašnjavamo razlike između proizvoda jednostavnim jezikom." },
        { title: "Praktično", text: "Oslanjamo se na zvanične provere i važeće zahteve." },
        { title: "Podrška", text: "Pomažemo u vezi sa ugovaranjem i proverom polise." },
      ],
    },

    form: {
      title: "Obrazac zahteva",
      desc: "Popunite podatke — pripremićemo polisu i poslati vam podatke za uplatu.",
    },

    faq: {
      title: "FAQ",
      desc: "Kratki odgovori na najčešća pitanja.",
      items: [
        {
          q: "Koliko traje izdavanje polise?",
          a: "Obično 10–20 minuta ako su svi podaci dostupni. Ipak, preporučujemo da polisu ugovorite jedan do dva dana pre početka osiguravajućeg pokrića."
        },
        {
          q: "Da li je moguće platiti karticom?",
          a: "Trenutno su dostupni samo SWIFT, SEPA i P2P transferi, kao i BLIK plaćanja. Nakon pripreme polise izvršavate uplatu i dobijate PDF dokument."
        },
        {
          q: "Da li je ovo isto što i „zelena karta”?",
          a: "Ne. To su različiti proizvodi i podležu različitim pravilima."
        },
        {
          q: "Koja je ovo vrsta osiguranja?",
          a: "To je obavezno osiguranje od odgovornosti vlasnika ili korisnika motornih vozila koje važi na teritoriji Poljske i Evropske unije."
        },
        {
          q: "Šta pokriva osiguranje?",
          a: `Pokriće obuhvata:
              • Štetu nastalu usled smrti ili povrede trećih lica;
              • Materijalnu štetu pričinjenu trećim licima.

              Minimalne garantovane sume:
              • 29 876 400 PLN — telesne povrede;
              • 6 021 600 PLN — materijalna šteta.`
        },
        {
          q: "Šta osiguranje ne pokriva?",
          a: `• bicikle i nemotorna vozila;
              • štetu vlasniku vozila;
              • štetu životnoj sredini.`
        },
        {
          q: "U kojim slučajevima je moguć regres?",
          a: `Osiguravač ima pravo da zahteva povraćaj isplaćenog iznosa ako je vozač:
              • postupao namerno;
              • bio pod dejstvom alkohola ili narkotika;
              • upravljao bez važeće vozačke dozvole;
              • napustio mesto saobraćajne nezgode;
              • koristio ukradeno vozilo.`
        },
        {
          q: "Kada polisa počinje i prestaje da važi?",
          a: `Početak važenja: datum izdavanja polise.

              Period važenja: 30–364 dana.

              Prestanak važenja:
              • istekom perioda osiguranja;
              • krađom ili rashodovanjem vozila;
              • odjavom vozila iz registra.`
        },
      ],
    },

    verify: {
      title: "Provera važenja polise",
      lead:
        "Ako želite da proverite da li je vaša polisa aktivna, koristite zvanične baze podataka osiguravajućih biroa. U nastavku se nalaze linkovi za Poljsku, Letoniju i Litvaniju.",
      items: [
        {
          code: "PL",
          country: "Poljska",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Provera važenja OC polise prema registarskom broju ili VIN-u u zvaničnoj bazi UFG.",
          cta: "Posetite UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letonija",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Provera obaveznog OCTA osiguranja za vozila registrovana u Letoniji.",
          cta: "Proveri putem LTAB-a",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litvanija",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Servis za proveru važenja polise obaveznog osiguranja od građanske odgovornosti u Litvaniji.",
          cta: "Proveri putem CAB-a",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },

  sq: {
    hero: {
      kicker: "Aplikim online",
      title: "Kontrata e sigurimit kufitar (OC graniczne) — shpejt dhe pa hapa të panevojshëm",
      lead:
        "Llogaritni koston, plotësoni aplikimin dhe merrni policën në format PDF. Për automjetet e regjistruara jashtë BE-së, polica mund të verifikohet lehtësisht në bazën e të dhënave të sigurimeve të Republikës së Polonisë (UFG).",
      meta: [
        "Policë PDF pas lëshimit",
        "Mbështetje në mesazherë",
        "Kushte të qarta"
      ],
      ctaCalc: "Llogarit koston",
      ctaBuy: "Apliko për policën",
    },

    calc: {
      title: "Llogaritësi i kostos",
      badge: "~ 1 minutë",
      desc: "llogaritës i thjeshtë tarifash",
      termLabel: "Afati",
      vehicleLabel: "Lloji i automjetit",
      termOptions: [
        { value: "30", label: "30 ditë" },
        { value: "60", label: "60 ditë" },
        { value: "90", label: "90 ditë" },
        { value: "180", label: "180 ditë" },
        { value: "365", label: "364 ditë" },
      ],
      vehicleOptions: [
        { value: "car", label: "Automjete pasagjerësh" },
        { value: "van", label: "Autobusë" },
        { value: "truck", label: "Automjete të mallrave" },
        { value: "trailer", label: "Rimorkio" },
        { value: "special", label: "Mjete speciale" },
      ],
      button: "Llogarit",
      note: "note",
    },

    process: {
      title: "Si funksionon",
      desc: "Hap pas hapi: llogaritja → të dhënat → pagesa → polica.",
      steps: [
        {
          title: "Llogaritni",
          text: "Zgjidhni llojin e automjetit dhe periudhën e sigurimit."
        },
        {
          title: "Plotësoni të dhënat",
          text: "Adresa e regjistrimit, targa, VIN dhe kontaktet."
        },
        {
          title: "Kryeni pagesën",
          text: "Pasi të përgatitet polica, do t'ju dërgojmë të dhënat për pagesë."
        },
        {
          title: "Merrni policën PDF",
          text: "Menjëherë pasi të marrim konfirmimin e pagesës."
        },
      ],
    },

    why: {
      title: "Pse na zgjedhin klientët",
      desc: "Fokus te shpejtësia, qartësia dhe korrektësia e lëshimit të policës.",
      items: [
        {
          title: "Shpejt",
          text: "Minimum hapash dhe strukturë e qartë."
        },
        {
          title: "E kuptueshme",
          text: "Shpjegojmë dallimet mes produkteve me gjuhë të thjeshtë."
        },
        {
          title: "Praktike",
          text: "Mbështetemi në kontrollet dhe kërkesat zyrtare."
        },
        {
          title: "Mbështetje",
          text: "Ndihmojmë me pyetjet lidhur me aplikimin dhe verifikimin."
        },
      ],
    },

    form: {
      title: "Formulari i aplikimit",
      desc: "Plotësoni të dhënat — ne do të përgatisim policën dhe do t'ju dërgojmë të dhënat për pagesë.",
    },

    faq: {
      title: "FAQ",
      desc: "Përgjigje të shkurtra për pyetjet më të shpeshta.",
      items: [
        {
          q: "Sa kohë zgjat lëshimi i policës?",
          a: "Zakonisht 10–20 minuta nëse disponohen të gjitha të dhënat. Megjithatë, rekomandojmë që polica të porositet 1–2 ditë përpara datës së nevojshme të fillimit të mbulimit."
        },
        {
          q: "A mund të paguaj me kartë?",
          a: "Aktualisht janë të disponueshme vetëm transfertat SWIFT, SEPA dhe P2P, si dhe pagesat me BLIK. Pas përgatitjes së policës, ju kryeni pagesën dhe merrni policën PDF."
        },
        {
          q: "A është kjo e njëjtë me 'Green Card'?",
          a: "Jo. Këto janë produkte të ndryshme dhe zbatohen rregulla të ndryshme."
        },
        {
          q: "Çfarë është ky sigurim?",
          a: "Ky është sigurimi i detyrueshëm i përgjegjësisë civile për pronarët ose përdoruesit e automjeteve motorike, i vlefshëm në Poloni dhe në Bashkimin Evropian."
        },
        {
          q: "Çfarë mbulon sigurimi?",
          a: `Mbulimi përfshin:
              • Dëmtime të jetës ose shëndetit të personave të dëmtuar;
              • Dëme materiale ndaj palëve të treta.

              Shumat minimale të garantuara:
              • 29 876 400 PLN — dëmtime trupore;
              • 6 021 600 PLN — dëme materiale.`
        },
        {
          q: "Çfarë nuk mbulon sigurimi?",
          a: `• biçikletat dhe mjetet jo-motorike;
              • dëmet ndaj pronarit të automjetit;
              • dëmet ndaj mjedisit.`
        },
        {
          q: "Në cilat raste është i mundur regresi?",
          a: `Siguruesi ka të drejtë të kërkojë rimbursimin e shumës së paguar nëse drejtuesi:
              • ka vepruar me dashje;
              • ka qenë nën ndikimin e alkoolit ose drogës;
              • nuk ka pasur leje drejtimi;
              • është larguar nga vendi i aksidentit;
              • ka përdorur një automjet të vjedhur.`
        },
        {
          q: "Kur fillon dhe kur përfundon polica?",
          a: `Fillimi: data e lëshimit të policës.

              Kohëzgjatja: 30–364 ditë.

              Përfundimi:
              • skadimi i afatit;
              • vjedhja ose çregjistrimi i automjetit;
              • heqja nga regjistri.`
        },
      ],
    },

    verify: {
      title: "Verifikimi i vlefshmërisë së policës",
      lead:
        "Nëse dëshironi të siguroheni që polica juaj është aktive, përdorni bazat zyrtare të të dhënave të byrove të sigurimeve. Më poshtë gjeni lidhjet për Poloninë, Letoninë dhe Lituaninë.",
      items: [
        {
          code: "PL",
          country: "Poloni",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Verifikimi i vlefshmërisë së policës OC sipas numrit të regjistrimit ose VIN në bazën zyrtare të UFG.",
          cta: "Shko në faqen e UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letoni",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Verifikimi i sigurimit të detyrueshëm OCTA për automjetet e regjistruara në Letoni.",
          cta: "Verifiko përmes LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lituani",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Shërbim për verifikimin e vlefshmërisë së policës së detyrueshme të përgjegjësisë civile në Lituani.",
          cta: "Verifiko përmes CAB",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },

  mn: {
    hero: {
      kicker: "Онлайнаар бүрдүүлэх",
      title: "Хилийн даатгалын гэрээ (OC graniczne) — хурдан, илүүц алхамгүй",
      lead:
        "Үнийг тооцоолж, хүсэлтээ бөглөөд PDF полисоо аваарай. ЕХ-ноос гадуур бүртгэлтэй тээврийн хэрэгсэлд зориулсан энэхүү полисыг Польш Улсын даатгалын сангийн (UFG) мэдээллийн сангаар хялбархан шалгах боломжтой.",
      meta: ["Бүрдүүлсний дараа PDF полис", "Мессенжерээр дэмжлэг", "Ойлгомжтой нөхцөл"],
      ctaCalc: "Үнийг тооцоолох",
      ctaBuy: "Полис бүрдүүлэх",
    },

    calc: {
      title: "Үнийн тооцоолуур",
      badge: "~ 1 минут",
      desc: "энгийн тарифын тооцоолуур",
      termLabel: "Хугацаа",
      vehicleLabel: "Тээврийн хэрэгслийн төрөл",
      termOptions: [
        { value: "30", label: "30 хоног" },
        { value: "60", label: "60 хоног" },
        { value: "90", label: "90 хоног" },
        { value: "180", label: "180 хоног" },
        { value: "365", label: "364 хоног" },
      ],
      vehicleOptions: [
        { value: "car", label: "Суудлын автомашин" },
        { value: "van", label: "Автобус" },
        { value: "truck", label: "Ачааны автомашин" },
        { value: "trailer", label: "Чиргүүл" },
        { value: "special", label: "Тусгай зориулалтын техник" },
      ],
      button: "Тооцоолох",
      note: "note",
    },

    process: {
      title: "Хэрхэн ажилладаг вэ",
      desc: "Алхам алхмаар: тооцоолол → мэдээлэл → төлбөр → полис.",
      steps: [
        {
          title: "Тооцоолох",
          text: "Тээврийн хэрэгслийн төрөл болон даатгалын хугацааг сонгоно уу.",
        },
        {
          title: "Мэдээллээ бөглөх",
          text: "Бүртгэлийн хаяг, улсын дугаар, VIN болон холбоо барих мэдээлэл.",
        },
        {
          title: "Төлбөр төлөх",
          text: "Полисыг бэлтгэсний дараа бид төлбөрийн мэдээллийг танд илгээнэ.",
        },
        {
          title: "PDF полис авах",
          text: "Төлбөр баталгаажсаны дараа шууд илгээнэ.",
        },
      ],
    },

    why: {
      title: "Яагаад биднийг сонгодог вэ",
      desc: "Хурд, ойлгомжтой байдал, зөв бүрдүүлэлтэд төвлөрдөг.",
      items: [
        {
          title: "Хурдан",
          text: "Хамгийн бага алхам, ойлгомжтой бүтэц.",
        },
        {
          title: "Ойлгомжтой",
          text: "Даатгалын бүтээгдэхүүний ялгааг энгийн хэлээр тайлбарладаг.",
        },
        {
          title: "Практик",
          text: "Албан ёсны шалгалт болон шаардлагад нийцүүлэн ажилладаг.",
        },
        {
          title: "Дэмжлэг",
          text: "Бүрдүүлэлт болон шалгалттай холбоотой асуултад тусалдаг.",
        },
      ],
    },

    form: {
      title: "Хүсэлтийн маягт",
      desc: "Мэдээллээ бөглөнө үү — бид полисыг бэлтгэж, төлбөрийн мэдээллийг илгээнэ.",
    },

    faq: {
      title: "FAQ",
      desc: "Түгээмэл асуултын товч хариултууд.",
      items: [
        {
          q: "Бүрдүүлэлт хэр хугацаа шаарддаг вэ?",
          a: "Ихэнх тохиолдолд бүх мэдээлэл бүрэн бол 10–20 минут шаарддаг. Гэхдээ даатгалыг хүчин төгөлдөр болох өдрөөс 1–2 хоногийн өмнө бүрдүүлэхийг зөвлөж байна.",
        },
        {
          q: "Банкны картаар төлөх боломжтой юу?",
          a: "Одоогоор зөвхөн SWIFT, SEPA, P2P шилжүүлэг болон BLIK төлбөр хүлээн авч байна. Полисыг бэлтгэсний дараа та төлбөрөө хийж, PDF хувилбараа авна.",
        },
        {
          q: "Энэ нь «Ногоон карт» мөн үү?",
          a: "Үгүй. Эдгээр нь өөр өөр бүтээгдэхүүн бөгөөд өөр журамтай.",
        },
        {
          q: "Энэ ямар төрлийн даатгал вэ?",
          a: "Энэ нь Польш болон Европын Холбооны нутаг дэвсгэрт хүчинтэй, механик тээврийн хэрэгслийн өмчлөгч болон ашиглагчийн иргэний хариуцлагын заавал даатгал юм.",
        },
        {
          q: "Даатгал юуг хамардаг вэ?",
          a: `Хамрах хүрээ:

  • Хохирогчийн амь нас, эрүүл мэндэд учирсан хохирол;
  • Гуравдагч этгээдийн эд хөрөнгийн хохирол.

  Хамгийн бага баталгаат нөхөн төлбөрийн хэмжээ:

  • 29 876 400 PLN — бие махбодын гэмтэл;
  • 6 021 600 PLN — эд хөрөнгийн хохирол.`,
        },
        {
          q: "Даатгал юуг хамардаггүй вэ?",
          a: `• Унадаг дугуй болон механик бус тээврийн хэрэгсэл;
  • Автомашины эзэмшигчид учирсан хохирол;
  • Байгаль орчинд учирсан хохирол.`,
        },
        {
          q: "Ямар тохиолдолд даатгагч нөхөн төлбөрөө буцаан нэхэмжилж болох вэ?",
          a: `Даатгалын компани дараах тохиолдолд төлсөн нөхөн төлбөрөө буцаан нэхэмжлэх эрхтэй:

  • Санаатай үйлдэл гаргасан;
  • Согтууруулах ундаа эсвэл мансууруулах бодисын нөлөөнд байсан;
  • Жолоодох эрхгүй байсан;
  • Зам тээврийн ослын газраас зугтсан;
  • Хулгайлагдсан автомашин ашигласан.`,
        },
        {
          q: "Полис хэзээ эхэлж, хэзээ дуусдаг вэ?",
          a: `Эхлэх хугацаа: полис олгосон өдөр.

  Хүчинтэй хугацаа: 30–364 хоног.

  Хүчин төгөлдөр байдал дуусах нөхцөл:

  • Хугацаа дуусах;
  • Автомашин хулгайлагдах эсвэл ашиглалтаас гарах;
  • Бүртгэлээс хасагдах.`,
        },
      ],
    },

    verify: {
      title: "Полисын хүчинтэй эсэхийг шалгах",
      lead:
        "Хэрэв та өөрийн полис үнэхээр хүчинтэй эсэхийг шалгахыг хүсвэл даатгалын товчоодын албан ёсны мэдээллийн санг ашиглана уу. Доорх холбоосууд нь Польш, Латви, Литвийн шалгах үйлчилгээнд хөтөлнө.",
      items: [
        {
          code: "PL",
          country: "Польш",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG-ийн албан ёсны мэдээллийн санд улсын дугаар эсвэл VIN кодоор OC даатгалын хүчинтэй байдлыг шалгах боломжтой.",
          cta: "UFG вэбсайт руу орох",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Латви",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Латвид бүртгэлтэй тээврийн хэрэгслийн OCTA заавал даатгалын хүчинтэй байдлыг шалгах үйлчилгээ.",
          cta: "LTAB-аар шалгах",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Литвад хүчинтэй иргэний хариуцлагын заавал даатгалын полисыг шалгах үйлчилгээ.",
          cta: "CAB-аар шалгах",
          href: "https://www.cab.lt/",
        },
      ],
    },
  },

};

// Утилита: если переводы ещё не готовы, берём RU.
export function getHomeDictionary(lang: Lang): HomeDictionary {
  const d = homeDictionary[lang];
  return d ? d : homeDictionary.en;
}