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

  insuranceGuide?: {
    directAnswer: string;
    fit: { title: string; items: string[]; links: Array<{ href: string; label: string }> };
    notFit: { title: string; items: string[] };
    service: { title: string; text: string; items: string[] };
    documents: { title: string; text: string; items: string[]; link: { href: string; label: string } };
    price: { title: string; text: string; items: string[] };
    timing: { title: string; text: string };
    notCovered: { title: string; text: string; link: { href: string; label: string } };
    checkPolicy: { title: string; text: string; items: string[]; link: { href: string; label: string } };
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

  businessHours: {
    openLabel: string;
    closedLabel: string;

    openDetails: string;

    closingSoonHoursMinutes: string;
    closingSoonHours: string;
    closingSoonMinutes: string;
    closingSoonExtra: string;

    closedBeforeOpeningToday: string;
    closedUntilTomorrow: string;
    closedUntilMonday: string;
    closedExtra: string;

    timezoneNote: string;
  };

}

export const homeDictionary: Record<Lang, HomeDictionary> = {
  ru: {
    hero: {
      kicker: "Онлайн-оформление",
      title: "OC graniczne онлайн для автомобиля, зарегистрированного за пределами ЕЭЗ",
      lead:
        "Мы помогаем дистанционно оформить договор трансграничного страхования для въезда в Польшу, ЕС и другие страны, указанные в полисе.",
      meta: ["Для авто вне ЕЭЗ", "PDF-полис после проверки", "Покрытие только по списку стран"],
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
      desc: "Пошагово: расчёт → данные → ручная проверка → оплата → PDF-полис.",
      steps: [
        { title: "Рассчитайте", text: "Выберите тип транспортного средства и доступный срок: 30, 60, 90, 180 или 364 дня." },
        { title: "Заполните данные", text: "Укажите страхователя, страну регистрации, госномер, VIN, параметры ТС и контакты." },
        { title: "Дождитесь проверки", text: "Мы сверим документы, маршрут и возможность оформления OC graniczne для выбранных условий." },
        { title: "Получите PDF-полис", text: "После подтверждения и оплаты полис отправляется на email, указанный в заявке." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne подходит для автомобиля, зарегистрированного за пределами Европейской экономической зоны, если водитель въезжает в Польшу или другую страну действия полиса без действующей Green Card. Полис не подходит для автомобилей, зарегистрированных в странах ЕЭЗ. Перед поездкой нужно проверить, что нужные страны указаны в полисе как покрываемые.",
      fit: {
        title: "Кому подходит OC graniczne",
        items: [
          "автомобиль зарегистрирован за пределами ЕЭЗ;",
          "нет действующей Green Card, признаваемой на маршруте;",
          "поездка проходит через Польшу или страны, указанные в полисе;",
          "страхователем может быть физическое или юридическое лицо;",
          "доступны легковые авто, грузовые, автобусы, прицепы, мотоциклы и спецтехника.",
        ],
        links: [
          { href: "/rules", label: "Правила оформления" },
          { href: "/product-info", label: "Документы о продукте" },
        ],
      },
      notFit: {
        title: "⚠️ Кому этот полис не подходит",
        items: [
          "авто зарегистрировано в Польше, Литве, Латвии, Германии или другой стране ЕЭЗ;",
          "нужна защита собственного автомобиля — это не КАСКО;",
          "маршрут проходит по странам, не указанным в полисе;",
          "нужно оформить полис задним числом;",
          "для поездки в Турцию, Сербию или другие страны вне списка покрытия нужен другой продукт, если эти страны не указаны в документе.",
        ],
      },
      service: {
        title: "Кто оформляет полис",
        text: "Сервис greencard.agency помогает дистанционно оформить договор пограничного страхования OC graniczne. Заявка принимается онлайн, данные и документы проверяются вручную, после подготовки и оплаты клиент получает PDF-полис на email.",
        items: [
          "принимаем заявку онлайн;",
          "проверяем документы и данные автомобиля;",
          "уточняем, подходит ли OC graniczne под страну регистрации и маршрут;",
          "готовим полис и отправляем PDF на email;",
          "помогаем проверить, какие страны указаны в покрытии.",
        ],
      },
      documents: {
        title: "Какие данные и документы нужны",
        text: "Документы лучше подготовить до заполнения формы: без читаемого свидетельства о регистрации невозможно корректно проверить номер, VIN, страну регистрации и параметры автомобиля.",
        items: [
          "свидетельство о регистрации ТС / техпаспорт;",
          "паспорт или ID страхователя;",
          "номерной знак и VIN;",
          "марка, модель, год выпуска;",
          "страна регистрации автомобиля и тип ТС;",
          "объём и мощность двигателя;",
          "дата начала и срок страхования;",
          "email и телефон для связи;",
          "комментарий, если маршрут нестандартный или нужен точный период покрытия в промежутке 30–364 дня.",
        ],
        link: { href: "/product-info", label: "Открыть информацию о продукте" },
      },
      price: {
        title: "Сколько стоит OC graniczne",
        text: "Стоимость зависит от типа транспортного средства и срока страхования. В калькуляторе указана ориентировочная цена для выбранных параметров. Окончательная возможность оформления и стоимость подтверждаются после проверки данных автомобиля и документов.",
        items: [
          "доступные сроки: 30, 60, 90, 180 или 364 дня;",
          "тариф зависит от категории ТС;",
          "цена подтверждается до оплаты;",
          "если данных недостаточно, менеджер уточнит их до выпуска полиса.",
        ],
      },
      timing: {
        title: "Срок оформления и ручная проверка",
        text: "Если все данные и документы корректны, оформление может занять около 10–20 минут в рабочее время. Если требуется ручная проверка, согласование или исправление данных, оформление займёт больше времени. Лучше подать заявку за 1–2 рабочих дня до начала поездки. Полис не оформляется задним числом.",
      },
      notCovered: {
        title: "Где OC graniczne не действует",
        text: "Полис не действует в странах, которые не указаны в документе как покрываемые. Например, если в полисе не указана Турция, Сербия, Черногория, Северная Македония, Босния и Герцеговина или другая страна маршрута, использовать этот полис для такой части поездки нельзя. Перед оплатой и перед выездом проверьте перечень стран покрытия в документе.",
        link: { href: "#coverage", label: "Посмотреть страны покрытия" },
      },
      checkPolicy: {
        title: "Что проверить в полисе перед поездкой",
        text: "Не используйте полис, если в нём есть ошибка. Данные в PDF должны совпадать с регистрационным документом автомобиля и заявленными условиями поездки.",
        items: [
          "номерной знак;",
          "VIN;",
          "страна регистрации;",
          "марка и модель;",
          "дата начала и окончания;",
          "тип ТС;",
          "страны покрытия;",
          "данные страхователя.",
        ],
        link: { href: "#verify", label: "Проверить полис" },
      },
    },

    why: {
      title: "Что делает сервис",
      desc: "Конкретные действия в процессе оформления OC graniczne.",
      items: [
        { title: "Принимаем заявку онлайн", text: "Данные страхователя и автомобиля передаются через форму без визита в офис." },
        { title: "Проверяем документы", text: "Сверяем VIN, номерной знак, страну регистрации, тип ТС и срок страхования." },
        { title: "Уточняем применимость", text: "Проверяем, подходит ли OC graniczne под страну регистрации и маршрут." },
        { title: "Отправляем PDF", text: "После подготовки и оплаты отправляем полис на email и помогаем проверить покрытие." },
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
        { q: "Можно ли оформить OC graniczne онлайн?", a: "Да. Заявку можно отправить онлайн. Данные проверяются вручную, после подготовки, подтверждения и оплаты PDF-полис направляется на email." },
        { q: "Кому подходит этот полис?", a: "Полис подходит для автомобиля, зарегистрированного за пределами ЕЭЗ, если поездка проходит через Польшу или другую страну, указанную в полисе, и нет действующей Green Card." },
        { q: "Подходит ли OC graniczne для автомобиля из Польши или другой страны ЕЭЗ?", a: "Нет. Для автомобилей, зарегистрированных в Польше, Литве, Латвии, Германии и других странах ЕЭЗ, этот продукт не подходит." },
        { q: "В каких странах действует полис?", a: "Полис действует только в странах, указанных в документе как покрываемые. Перед поездкой проверьте, что все страны маршрута включены в покрытие." },
        { q: "Действует ли полис в Турции или Сербии?", a: "Нет, если Турция или Сербия не указаны в документе как покрываемые страны. Для таких стран может понадобиться местное пограничное страхование или другой продукт." },
        { q: "Можно ли оформить полис в день поездки?", a: "Иногда это возможно, если все данные и документы корректны. Если требуется ручная проверка, согласование или исправление данных, оформление займёт больше времени. Лучше подать заявку за 1–2 рабочих дня до поездки." },
        { q: "Можно ли оформить OC graniczne задним числом?", a: "Нет. Полис не оформляется задним числом. Дата начала действия указывается при оформлении, а использовать полис можно только в пределах срока действия, указанного в документе." },
        { q: "Какие документы нужны?", a: "Нужны свидетельство о регистрации ТС / техпаспорт, паспорт или ID страхователя, номерной знак, VIN, марка, модель, год выпуска, страна регистрации, тип ТС, дата начала и срок страхования, email и телефон." },
        { q: "Что указано в сертификате?", a: "В документе указываются данные автомобиля, срок действия, страна регистрации, тип ТС, данные страхователя и перечень стран покрытия." },
        { q: "Что делать, если в полисе ошибка?", a: "Не используйте полис с ошибочными данными. Свяжитесь с нами до поездки, чтобы проверить возможность исправления. Некоторые ошибки могут требовать переоформления." },
        { q: "Получу ли я полис в PDF?", a: "Да. После проверки данных, подготовки полиса и оплаты PDF-документ отправляется на email, указанный в заявке." },
        { q: "Можно ли оплатить картой?", a: "На данном этапе доступны SWIFT, SEPA и P2P-переводы, а также оплата BLIK. После подготовки полиса вы получаете данные для оплаты." },
        { q: "Это то же самое, что «зелёная карта»?", a: "Нет. OC graniczne и Green Card — разные продукты с разными правилами оформления, применимости и территорией действия." },
        { q: "Что это за страховка?", a: "Это обязательное страхование гражданской ответственности владельца или пользователя механического транспортного средства, действующее только в странах, указанных в полисе." },
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

              Доступные сроки: 30, 60, 90, 180 или 364 дня.

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
    businessHours: {
      openLabel: "Сейчас открыто",
      closedLabel: "Сейчас закрыто",

      openDetails: "работаем до {time} по вашему времени",

      closingSoonHoursMinutes:
        "до конца рабочего дня осталось {hours} ч {minutes} мин",
      closingSoonHours: "до конца рабочего дня осталось {hours} ч",
      closingSoonMinutes: "до конца рабочего дня осталось {minutes} мин",
      closingSoonExtra:
        "Вы можете отправить заявку сейчас. Если потребуется ручная проверка, мы обработаем её до закрытия или в следующий рабочий день.",

      closedBeforeOpeningToday:
        "откроемся сегодня в {time} по вашему времени",
      closedUntilTomorrow:
        "откроемся завтра в {time} по вашему времени",
      closedUntilMonday:
        "откроемся в понедельник в {time} по вашему времени",
      closedExtra:
        "Вы можете отправить заявку сейчас — мы обработаем её в рабочее время.",

      timezoneNote:
        "Время показано по часовому поясу вашего устройства: {timezone}.",
    },
  },
  pl: {
    hero: {
      kicker: "Zakup ",
      title: "OC graniczne dla pojazdu zarejestrowanego poza EOG",
      lead:
        "Pomagamy zdalnie zawrzeć umowę ubezpieczenia granicznego na wjazd do Polski, UE oraz innych krajów wskazanych w polisie.",
      meta: ["Dla pojazdów spoza EOG", "Polisa PDF po weryfikacji", "Ochrona tylko w krajach z listy"],
      ctaCalc: "Oblicz koszt",
      ctaBuy: "Kup polisę",
    },

    calc: {
      title: "Kalkulator kosztu",
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
        { value: "truck", label: "Samochody ciężarowe" },
        { value: "trailer", label: "Przyczepy" },
        { value: "special", label: "Pojazdy specjalne" },
      ],
      button: "Oblicz",
      note: "note",
    },

    process: {
      title: "Jak to działa",
      desc: "Krok po kroku: kalkulacja → dane → ręczna weryfikacja → płatność → polisa PDF.",
      steps: [
        { title: "Oblicz koszt", text: "Wybierz typ pojazdu oraz dostępny okres: 30, 60, 90, 180 lub 364 dni." },
        { title: "Uzupełnij dane", text: "Podaj dane ubezpieczającego, kraj rejestracji, numer rejestracyjny, VIN, parametry pojazdu oraz dane kontaktowe." },
        { title: "Poczekaj na weryfikację", text: "Sprawdzimy dokumenty, trasę oraz możliwość zawarcia OC graniczne dla wybranych warunków." },
        { title: "Odbierz polisę PDF", text: "Po potwierdzeniu i opłaceniu polisa zostanie wysłana na adres email wskazany we wniosku." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne jest przeznaczone dla pojazdu zarejestrowanego poza Europejskim Obszarem Gospodarczym, jeżeli kierowca wjeżdża do Polski lub innego kraju objętego zakresem polisy bez ważnej Green Card. Polisa nie jest przeznaczona dla pojazdów zarejestrowanych w krajach EOG. Przed wyjazdem należy sprawdzić, czy wymagane kraje są wskazane w polisie jako objęte ochroną.",
      fit: {
        title: "Dla kogo jest OC graniczne",
        items: [
          "pojazd jest zarejestrowany poza EOG;",
          "brak ważnej Green Card uznawanej na danej trasie;",
          "podróż przebiega przez Polskę lub kraje wskazane w polisie;",
          "ubezpieczającym może być osoba fizyczna albo osoba prawna;",
          "dostępne są samochody osobowe, ciężarowe, autobusy, przyczepy, motocykle i pojazdy specjalne.",
        ],
        links: [
          { href: "/rules", label: "Zasady zawarcia polisy" },
          { href: "/product-info", label: "Dokumenty dotyczące produktu" },
        ],
      },
      notFit: {
        title: "⚠️ Dla kogo ta polisa nie jest odpowiednia",
        items: [
          "w dniu wystawienia polisy pojazd nie znajduje się na terytorium Rzeczypospolitej Polskiej.",
          "pojazd jest zarejestrowany w Polsce, Litwie, Łotwie, Niemczech lub innym kraju EOG;",
          "potrzebna jest ochrona własnego pojazdu — to nie jest AC;",
          "trasa przebiega przez kraje niewskazane w polisie;",
          "trzeba zawrzeć polisę z datą wsteczną;",
          "na podróż do Turcji, Serbii lub innych krajów spoza listy ochrony potrzebny jest inny produkt, jeżeli kraje te nie są wskazane w dokumencie.",
        ],
      },
      service: {
        title: "Kto zawiera polisę",
        text: "Serwis greencard.agency pomaga zdalnie zawrzeć umowę ubezpieczenia granicznego OC graniczne. Wniosek przyjmowany jest online, dane i dokumenty są sprawdzane ręcznie, a po przygotowaniu polisy i opłaceniu składki klient musi odebrać polisę w naszym biurze.",
        items: [
          "przyjmujemy wniosek online;",
          "sprawdzamy dokumenty i dane pojazdu;",
          "weryfikujemy, czy OC graniczne odpowiada krajowi rejestracji i trasie;",
          "przygotowujemy polisę i wysyłamy PDF na email;",
          "pomagamy sprawdzić, jakie kraje są wskazane w zakresie ochrony.",
        ],
      },
      documents: {
        title: "Jakie dane i dokumenty są potrzebne",
        text: "Dokumenty najlepiej przygotować przed wypełnieniem formularza: bez czytelnego dowodu rejestracyjnego nie można prawidłowo sprawdzić numeru rejestracyjnego, VIN, kraju rejestracji oraz parametrów pojazdu.",
        items: [
          "dowód rejestracyjny pojazdu / dokument techniczny;",
          "paszport lub dokument tożsamości ubezpieczającego;",
          "numer rejestracyjny i VIN;",
          "marka, model, rok produkcji;",
          "kraj rejestracji pojazdu i typ pojazdu;",
          "pojemność i moc silnika;",
          "data rozpoczęcia i okres ubezpieczenia;",
          "email i telefon do kontaktu;",
          "komentarz, jeżeli trasa jest niestandardowa albo potrzebny jest dokładny okres ochrony w przedziale 30–364 dni.",
        ],
        link: { href: "/product-info", label: "Otwórz informacje o produkcie" },
      },
      price: {
        title: "Ile kosztuje OC graniczne",
        text: "Koszt zależy od typu pojazdu i okresu ubezpieczenia. W kalkulatorze podana jest orientacyjna cena dla wybranych parametrów. Ostateczna możliwość zawarcia polisy oraz koszt są potwierdzane po sprawdzeniu danych pojazdu i dokumentów.",
        items: [
          "dostępne okresy: 30, 60, 90, 180 lub 364 dni;",
          "taryfa zależy od kategorii pojazdu;",
          "cena jest potwierdzana przed płatnością;",
          "jeżeli dane są niewystarczające, menedżer doprecyzuje je przed wystawieniem polisy.",
        ],
      },
      timing: {
        title: "Czas zawarcia polisy i ręczna weryfikacja",
        text: "Jeżeli wszystkie dane i dokumenty są prawidłowe, zawarcie polisy może zająć około 10–20 minut w godzinach pracy. Jeżeli wymagana jest ręczna weryfikacja, uzgodnienie albo poprawienie danych, proces potrwa dłużej. Najlepiej złożyć wniosek 1–2 dni robocze przed rozpoczęciem podróży. Polisy nie można zawrzeć z datą wsteczną.",
      },
      notCovered: {
        title: "Gdzie OC graniczne nie działa",
        text: "Polisa nie działa w krajach, które nie są wskazane w dokumencie jako objęte ochroną. Na przykład, jeżeli w polisie nie wskazano Turcji, Serbii, Czarnogóry, Macedonii Północnej, Bośni i Hercegowiny albo innego kraju na trasie, nie można używać tej polisy na takiej części podróży. Przed płatnością i przed wyjazdem sprawdź listę krajów objętych ochroną w dokumencie.",
        link: { href: "#coverage", label: "Zobacz kraje objęte ochroną" },
      },
      checkPolicy: {
        title: "Co sprawdzić w polisie przed podróżą",
        text: "Nie używaj polisy, jeżeli zawiera błąd. Dane w PDF muszą być zgodne z dokumentem rejestracyjnym pojazdu oraz zgłoszonymi warunkami podróży.",
        items: [
          "numer rejestracyjny;",
          "VIN;",
          "kraj rejestracji;",
          "marka i model;",
          "data rozpoczęcia i zakończenia;",
          "typ pojazdu;",
          "kraje objęte ochroną;",
          "dane ubezpieczającego.",
        ],
        link: { href: "#verify", label: "Sprawdź polisę" },
      },
    },

    why: {
      title: "Co robi serwis",
      desc: "Konkretne działania w procesie zawierania OC graniczne.",
      items: [
        { title: "Przyjmujemy wniosek online", text: "Dane ubezpieczającego i pojazdu są przekazywane przez formularz bez wizyty w biurze." },
        { title: "Sprawdzamy dokumenty", text: "Weryfikujemy VIN, numer rejestracyjny, kraj rejestracji, typ pojazdu i okres ubezpieczenia." },
        { title: "Weryfikujemy zastosowanie", text: "Sprawdzamy, czy OC graniczne odpowiada krajowi rejestracji i trasie." },
        { title: "Przygotujemy polise", text: "Po przygotowaniu polisy i opłaceniu składki klient musi odebrać polisę w naszym biurze." },
      ],
    },

    form: {
      title: "Formularz wniosku",
      desc: "Uzupełnij dane — przygotujemy polisę i prześlemy dane do płatności.",
    },

    faq: {
      title: "FAQ",
      desc: "Krótkie odpowiedzi na najczęstsze pytania.",
      items: [
        { q: "Czy można zawrzeć OC graniczne online?", a: "Nie. Wniosek można wysłać online. Dane są sprawdzane ręcznie, a po przygotowaniu, potwierdzeniu i opłaceniu klient musi odebrać polisę w naszym biurze." },
        { q: "Dla kogo jest ta polisa?", a: "Polisa jest przeznaczona dla pojazdu zarejestrowanego poza EOG, jeżeli podróż przebiega przez Polskę lub inny kraj wskazany w polisie i nie ma ważnej Green Card." },
        { q: "Czy OC graniczne nadaje się dla pojazdu z Polski lub innego kraju EOG?", a: "Nie. Dla pojazdów zarejestrowanych w Polsce, Litwie, Łotwie, Niemczech i innych krajach EOG ten produkt nie jest odpowiedni." },
        { q: "W jakich krajach działa polisa?", a: "Polisa działa wyłącznie w krajach wskazanych w dokumencie jako objęte ochroną. Przed podróżą sprawdź, czy wszystkie kraje na trasie są objęte ochroną." },
        { q: "Czy polisa działa w Turcji lub Serbii?", a: "Nie, jeżeli Turcja lub Serbia nie są wskazane w dokumencie jako kraje objęte ochroną. W przypadku takich krajów może być potrzebne lokalne ubezpieczenie graniczne albo inny produkt." },
        { q: "Czy można zawrzeć polisę w dniu podróży?", a: "Czasami jest to możliwe, jeżeli wszystkie dane i dokumenty są prawidłowe. Jeżeli wymagana jest ręczna weryfikacja, uzgodnienie albo poprawienie danych, proces potrwa dłużej. Najlepiej złożyć wniosek 1–2 dni robocze przed podróżą." },
        { q: "Czy można zawrzeć OC graniczne z datą wsteczną?", a: "Nie. Polisy nie można zawrzeć z datą wsteczną. Data rozpoczęcia ochrony jest wskazywana przy zawarciu polisy, a korzystać z polisy można tylko w okresie ważności wskazanym w dokumencie." },
        { q: "Jakie dokumenty są potrzebne?", a: "Potrzebne są dowód rejestracyjny pojazdu / dokument techniczny, paszport lub dokument tożsamości ubezpieczającego, numer rejestracyjny, VIN, marka, model, rok produkcji, kraj rejestracji, typ pojazdu, data rozpoczęcia i okres ubezpieczenia, email i telefon." },
        { q: "Co jest wskazane w certyfikacie?", a: "W dokumencie wskazane są dane pojazdu, okres ważności, kraj rejestracji, typ pojazdu, dane ubezpieczającego oraz lista krajów objętych ochroną." },
        { q: "Co zrobić, jeżeli w polisie jest błąd?", a: "Nie używaj polisy z błędnymi danymi. Skontaktuj się z nami przed podróżą, aby sprawdzić możliwość poprawienia danych. Niektóre błędy mogą wymagać ponownego wystawienia polisy." },
        { q: "Czy otrzymam polisę w PDF?", a: "Tak. Po sprawdzeniu danych, przygotowaniu polisy i opłaceniu dokument PDF zostanie wysłany na adres email wskazany we wniosku." },
        { q: "Czy można zapłacić kartą?", a: "Na tym etapie dostępne są przelewy SWIFT, SEPA i P2P, a także płatność BLIK. Po przygotowaniu polisy otrzymasz dane do płatności." },
        { q: "Czy to jest to samo co „zielona karta”?", a: "Nie. OC graniczne i Green Card to różne produkty z różnymi zasadami zawierania, zastosowania i terytorium działania." },
        { q: "Co to za ubezpieczenie?", a: "Jest to obowiązkowe ubezpieczenie odpowiedzialności cywilnej właściciela lub użytkownika pojazdu mechanicznego, działające wyłącznie w krajach wskazanych w polisie." },
        {
          q: "Co obejmuje ubezpieczenie?",
          a: `Ochrona obejmuje:
            • Szkody na osobie dotyczące życia lub zdrowia poszkodowanych;
            • Szkody majątkowe wyrządzone osobom trzecim.
            
            Minimalne sumy gwarancyjne:
            •  29 876 400 PLN — szkody osobowe;
            •  6 021 600 PLN — szkody majątkowe.`
        },
        {
          q: "Czego nie obejmuje ubezpieczenie?",
          a: `•  rowerów i pojazdów niemechanicznych;
              •  szkód właściciela pojazdu;
              •  szkód w środowisku.`
        },
        {
          q: "W jakich przypadkach możliwy jest regres?",
          a: `Ubezpieczyciel może dochodzić zwrotu wypłaconej kwoty, jeżeli kierowca:
            • działał umyślnie;
            • był pod wpływem alkoholu lub narkotyków;
            • nie posiadał uprawnień do kierowania;
            • zbiegł z miejsca wypadku;
            • używał skradzionego pojazdu.`
        },
        {
          q: "Kiedy polisa się rozpoczyna i kończy?",
          a: `Początek: data wystawienia polisy.

              Dostępne okresy: 30, 60, 90, 180 lub 364 dni.

              Zakończenie:
              • upływ okresu;
              • kradzież lub kasacja pojazdu;
              • wyrejestrowanie.`
        },
      ],
    },

    verify: {
      title: "Sprawdzenie ważności polisy",
      lead:
        "Jeżeli chcesz upewnić się, że Twoja polisa jest rzeczywiście aktywna, skorzystaj z oficjalnych baz biur ubezpieczeniowych. Poniżej znajdują się linki do serwisów dla Polski, Łotwy i Litwy.",
      items: [
        {
          code: "PL",
          country: "Polska",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Sprawdzenie ważności polisy OC po numerze rejestracyjnym lub VIN w oficjalnej bazie UFG.",
          cta: "Przejdź na stronę UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Łotwa",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Sprawdzenie obowiązkowego ubezpieczenia OCTA dla pojazdów zarejestrowanych na Łotwie.",
          cta: "Sprawdź przez LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litwa",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Serwis sprawdzania ważności polisy obowiązkowego ubezpieczenia odpowiedzialności cywilnej na Litwie.",
          cta: "Sprawdź przez CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Teraz otwarte",
      closedLabel: "Teraz zamknięte",

      openDetails: "pracujemy do {time} według Twojego czasu",

      closingSoonHoursMinutes:
        "do końca dnia roboczego pozostało {hours} godz. {minutes} min",
      closingSoonHours: "do końca dnia roboczego pozostało {hours} godz.",
      closingSoonMinutes: "do końca dnia roboczego pozostało {minutes} min",
      closingSoonExtra:
        "Możesz wysłać wniosek teraz. Jeżeli będzie potrzebna ręczna weryfikacja, obsłużymy go przed zamknięciem albo w następnym dniu roboczym.",

      closedBeforeOpeningToday:
        "otworzymy dzisiaj o {time} według Twojego czasu",
      closedUntilTomorrow:
        "otworzymy jutro o {time} według Twojego czasu",
      closedUntilMonday:
        "otworzymy w poniedziałek o {time} według Twojego czasu",
      closedExtra:
        "Możesz wysłać wniosek teraz — obsłużymy go w godzinach pracy.",

      timezoneNote:
        "Czas jest pokazany zgodnie ze strefą czasową Twojego urządzenia: {timezone}.",
    },
  },
  en: {
    hero: {
      kicker: "Online purchase",
      title: "OC graniczne online for a vehicle registered outside the EEA",
      lead:
        "We help you remotely arrange a border insurance agreement for entry into Poland, the EU, and other countries listed in the policy.",
      meta: ["For vehicles outside the EEA", "PDF policy after verification", "Coverage only in listed countries"],
      ctaCalc: "Calculate cost",
      ctaBuy: "Buy policy",
    },

    calc: {
      title: "Cost calculator",
      badge: "~ 1 minute",
      desc: "simple tariff calculator",
      termLabel: "Term",
      vehicleLabel: "Vehicle type",
      termOptions: [
        { value: "30", label: "30 days" },
        { value: "60", label: "60 days" },
        { value: "90", label: "90 days" },
        { value: "180", label: "180 days" },
        { value: "365", label: "364 days" },
      ],
      vehicleOptions: [
        { value: "car", label: "Passenger cars" },
        { value: "van", label: "Buses" },
        { value: "truck", label: "Trucks" },
        { value: "trailer", label: "Trailers" },
        { value: "special", label: "Special-purpose vehicles" },
      ],
      button: "Calculate",
      note: "note",
    },

    process: {
      title: "How it works",
      desc: "Step by step: calculation → details → manual verification → payment → PDF policy.",
      steps: [
        { title: "Calculate", text: "Select the vehicle type and an available term: 30, 60, 90, 180, or 364 days." },
        { title: "Fill in the details", text: "Enter the policyholder, country of registration, license plate number, VIN, vehicle specifications, and contact details." },
        { title: "Wait for verification", text: "We will check the documents, route, and whether OC graniczne can be issued for the selected conditions." },
        { title: "Receive your PDF policy", text: "After confirmation and payment, the policy is sent to the email address specified in the application." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne is suitable for a vehicle registered outside the European Economic Area if the driver is entering Poland or another country covered by the policy without a valid Green Card. The policy is not suitable for vehicles registered in EEA countries. Before traveling, you must check that the required countries are listed in the policy as covered.",
      fit: {
        title: "Who OC graniczne is for",
        items: [
          "the vehicle is registered outside the EEA;",
          "there is no valid Green Card recognized along the route;",
          "the trip goes through Poland or countries listed in the policy;",
          "the policyholder may be an individual or a legal entity;",
          "passenger cars, trucks, buses, trailers, motorcycles, and special-purpose vehicles are available.",
        ],
        links: [
          { href: "/rules", label: "Issuing rules" },
          { href: "/product-info", label: "Product documents" },
        ],
      },
      notFit: {
        title: "⚠️ Who this policy is not for",
        items: [
          "the vehicle is registered in Poland, Lithuania, Latvia, Germany, or another EEA country;",
          "you need protection for your own vehicle — this is not comprehensive insurance;",
          "the route passes through countries not listed in the policy;",
          "you need to issue the policy retroactively;",
          "for travel to Turkey, Serbia, or other countries outside the coverage list, another product is required if those countries are not listed in the document.",
        ],
      },
      service: {
        title: "Who issues the policy",
        text: "The greencard.agency service helps arrange a border insurance agreement, OC graniczne, remotely. The application is accepted online, data and documents are checked manually, and after preparation and payment the client receives a PDF policy by email.",
        items: [
          "we accept the application online;",
          "we check the vehicle documents and data;",
          "we confirm whether OC graniczne is suitable for the country of registration and route;",
          "we prepare the policy and send the PDF by email;",
          "we help check which countries are listed in the coverage.",
        ],
      },
      documents: {
        title: "What data and documents are required",
        text: "It is better to prepare the documents before filling out the form: without a readable registration certificate, it is impossible to correctly verify the license plate number, VIN, country of registration, and vehicle specifications.",
        items: [
          "vehicle registration certificate / technical passport;",
          "policyholder’s passport or ID;",
          "license plate number and VIN;",
          "make, model, year of manufacture;",
          "country of vehicle registration and vehicle type;",
          "engine displacement and power;",
          "insurance start date and term;",
          "email and phone number for contact;",
          "a comment if the route is non-standard or an exact coverage period is needed within the 30–364 day range.",
        ],
        link: { href: "/product-info", label: "Open product information" },
      },
      price: {
        title: "How much OC graniczne costs",
        text: "The cost depends on the type of vehicle and the insurance term. The calculator shows an estimated price for the selected parameters. Final eligibility and cost are confirmed after checking the vehicle data and documents.",
        items: [
          "available terms: 30, 60, 90, 180, or 364 days;",
          "the tariff depends on the vehicle category;",
          "the price is confirmed before payment;",
          "if the data is insufficient, a manager will clarify it before the policy is issued.",
        ],
      },
      timing: {
        title: "Issuing time and manual verification",
        text: "If all data and documents are correct, issuing may take about 10–20 minutes during business hours. If manual verification, approval, or correction of data is required, issuing will take longer. It is better to submit the application 1–2 business days before the start of the trip. The policy cannot be issued retroactively.",
      },
      notCovered: {
        title: "Where OC graniczne is not valid",
        text: "The policy is not valid in countries that are not listed in the document as covered. For example, if Turkey, Serbia, Montenegro, North Macedonia, Bosnia and Herzegovina, or another country on the route is not listed in the policy, this policy cannot be used for that part of the trip. Before payment and before departure, check the list of covered countries in the document.",
        link: { href: "#coverage", label: "View covered countries" },
      },
      checkPolicy: {
        title: "What to check in the policy before traveling",
        text: "Do not use the policy if it contains an error. The data in the PDF must match the vehicle registration document and the declared travel conditions.",
        items: [
          "license plate number;",
          "VIN;",
          "country of registration;",
          "make and model;",
          "start and end date;",
          "vehicle type;",
          "covered countries;",
          "policyholder data.",
        ],
        link: { href: "#verify", label: "Check policy" },
      },
    },

    why: {
      title: "What the service does",
      desc: "Specific actions in the OC graniczne issuing process.",
      items: [
        { title: "We accept the application online", text: "The policyholder and vehicle data are submitted through the form without a visit to the office." },
        { title: "We check the documents", text: "We verify the VIN, license plate number, country of registration, vehicle type, and insurance term." },
        { title: "We confirm applicability", text: "We check whether OC graniczne is suitable for the country of registration and route." },
        { title: "We send the PDF", text: "After preparation and payment, we send the policy by email and help verify the coverage." },
      ],
    },

    form: {
      title: "Application form",
      desc: "Fill in the details — we will prepare the policy and send you the payment details.",
    },

    faq: {
      title: "FAQ",
      desc: "Short answers to common questions.",
      items: [
        { q: "Can OC graniczne be issued online?", a: "Yes. The application can be submitted online. The data is checked manually, and after preparation, confirmation, and payment, the PDF policy is sent by email." },
        { q: "Who is this policy for?", a: "The policy is suitable for a vehicle registered outside the EEA if the trip goes through Poland or another country listed in the policy and there is no valid Green Card." },
        { q: "Is OC graniczne suitable for a vehicle from Poland or another EEA country?", a: "No. This product is not suitable for vehicles registered in Poland, Lithuania, Latvia, Germany, or other EEA countries." },
        { q: "In which countries is the policy valid?", a: "The policy is valid only in the countries listed in the document as covered. Before traveling, check that all countries on the route are included in the coverage." },
        { q: "Is the policy valid in Turkey or Serbia?", a: "No, unless Turkey or Serbia is listed in the document as a covered country. For such countries, local border insurance or another product may be required." },
        { q: "Can the policy be issued on the day of travel?", a: "Sometimes this is possible if all data and documents are correct. If manual verification, approval, or correction of data is required, issuing will take longer. It is better to submit the application 1–2 business days before the trip." },
        { q: "Can OC graniczne be issued retroactively?", a: "No. The policy cannot be issued retroactively. The start date is specified when the policy is issued, and the policy can be used only within the validity period stated in the document." },
        { q: "What documents are required?", a: "A vehicle registration certificate / technical passport, the policyholder’s passport or ID, license plate number, VIN, make, model, year of manufacture, country of registration, vehicle type, insurance start date and term, email, and phone number are required." },
        { q: "What is listed in the certificate?", a: "The document lists the vehicle data, validity period, country of registration, vehicle type, policyholder data, and the list of covered countries." },
        { q: "What should I do if there is an error in the policy?", a: "Do not use a policy with incorrect data. Contact us before traveling to check whether correction is possible. Some errors may require the policy to be reissued." },
        { q: "Will I receive the policy as a PDF?", a: "Yes. After data verification, policy preparation, and payment, the PDF document is sent to the email address specified in the application." },
        { q: "Can I pay by card?", a: "At this stage, SWIFT, SEPA, and P2P transfers are available, as well as BLIK payment. After the policy is prepared, you receive the payment details." },
        { q: "Is this the same as a “Green Card”?", a: "No. OC graniczne and Green Card are different products with different issuing rules, applicability, and territorial coverage." },
        { q: "What kind of insurance is this?", a: "This is mandatory third-party liability insurance for the owner or user of a motor vehicle, valid only in the countries listed in the policy." },
        {
          q: "What does the insurance cover?",
          a: `Coverage includes:
            • Bodily injury or harm to the life or health of injured parties;
            • Property damage to third parties.
            
            Minimum guaranteed sums:
            •  29 876 400 PLN — bodily injury;
            •  6 021 600 PLN — property damage.`
        },
        {
          q: "What does the insurance not cover?",
          a: `•  bicycles and non-motorized vehicles;
              •  damage suffered by the vehicle owner;
              •  environmental damage.`
        },
        {
          q: "When can recourse apply?",
          a: `The insurer may recover the amount paid if the driver:
            • acted intentionally;
            • was drunk or under the influence of drugs;
            • did not have a valid driver’s license;
            • fled the scene of the accident;
            • used a stolen vehicle.`
        },
        {
          q: "When does the policy start and end?",
          a: `Start: the policy issue date.

              Available terms: 30, 60, 90, 180, or 364 days.

              Termination:
              • expiration of the term;
              • theft or total loss of the vehicle;
              • deregistration.`
        },
      ],
    },

    verify: {
      title: "Policy validity check",
      lead:
        "If you want to make sure your policy is actually active, use the official insurance bureau databases. Below are links to services for Poland, Latvia, and Lithuania.",
      items: [
        {
          code: "PL",
          country: "Poland",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Check the validity of an OC policy by registration number or VIN in the official UFG database.",
          cta: "Go to the UFG website",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Latvia",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Check mandatory OCTA insurance for vehicles registered in Latvia.",
          cta: "Check through LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lithuania",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Service for checking the validity of a mandatory third-party liability insurance policy in Lithuania.",
          cta: "Check through CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Open now",
      closedLabel: "Closed now",

      openDetails: "we work until {time} in your local time",

      closingSoonHoursMinutes:
        "the business day ends in {hours} hr {minutes} min",
      closingSoonHours: "the business day ends in {hours} hr",
      closingSoonMinutes: "the business day ends in {minutes} min",
      closingSoonExtra:
        "You can submit your application now. If manual verification is required, we will process it before closing or on the next business day.",

      closedBeforeOpeningToday:
        "we open today at {time} in your local time",
      closedUntilTomorrow:
        "we open tomorrow at {time} in your local time",
      closedUntilMonday:
        "we open on Monday at {time} in your local time",
      closedExtra:
        "You can submit your application now — we will process it during business hours.",

      timezoneNote:
        "Time is shown according to your device time zone: {timezone}.",
    },
  },
  be: {
    hero: {
      kicker: "Анлайн-афармленне",
      title: "OC graniczne анлайн для аўтамабіля, зарэгістраванага па-за межамі ЕЭЗ",
      lead:
        "Мы дапамагаем дыстанцыйна аформіць дагавор памежнага страхавання для ўезду ў Польшчу, ЕС і іншыя краіны, указаныя ў полісе.",
      meta: ["Для аўто па-за ЕЭЗ", "PDF-поліс пасля праверкі", "Пакрыццё толькі паводле спісу краін"],
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
      desc: "Пакрокава: разлік → дадзеныя → ручная праверка → аплата → PDF-поліс.",
      steps: [
        { title: "Разлічыце", text: "Выберыце тып транспартнага сродку і даступны тэрмін: 30, 60, 90, 180 або 364 дні." },
        { title: "Запоўніце дадзеныя", text: "Укажыце страхавальніка, краіну рэгістрацыі, дзяржнумар, VIN, параметры ТС і кантакты." },
        { title: "Дачакайцеся праверкі", text: "Мы зверым дакументы, маршрут і магчымасць афармлення OC graniczne для выбраных умоў." },
        { title: "Атрымайце PDF-поліс", text: "Пасля пацвярджэння і аплаты поліс адпраўляецца на email, указаны ў заяўцы." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne падыходзіць для аўтамабіля, зарэгістраванага па-за межамі Еўрапейскай эканамічнай зоны, калі кіроўца ўязджае ў Польшчу або іншую краіну дзеяння поліса без дзейнай Green Card. Поліс не падыходзіць для аўтамабіляў, зарэгістраваных у краінах ЕЭЗ. Перад паездкай трэба праверыць, што патрэбныя краіны ўказаны ў полісе як пакрываемыя.",
      fit: {
        title: "Каму падыходзіць OC graniczne",
        items: [
          "аўтамабіль зарэгістраваны па-за межамі ЕЭЗ;",
          "няма дзейнай Green Card, якая прызнаецца на маршруце;",
          "паездка праходзіць праз Польшчу або краіны, указаныя ў полісе;",
          "страхавальнікам можа быць фізічная або юрыдычная асоба;",
          "даступныя легкавыя аўто, грузавыя, аўтобусы, прычэпы, матацыклы і спецтэхніка.",
        ],
        links: [
          { href: "/rules", label: "Правілы афармлення" },
          { href: "/product-info", label: "Дакументы аб прадукце" },
        ],
      },
      notFit: {
        title: "⚠️ Каму гэты поліс не падыходзіць",
        items: [
          "аўто зарэгістравана ў Польшчы, Літве, Латвіі, Германіі або іншай краіне ЕЭЗ;",
          "патрэбна абарона ўласнага аўтамабіля — гэта не КАСКО;",
          "маршрут праходзіць па краінах, не ўказаных у полісе;",
          "трэба аформіць поліс заднім чыслом;",
          "для паездкі ў Турцыю, Сербію або іншыя краіны па-за спісам пакрыцця патрэбны іншы прадукт, калі гэтыя краіны не ўказаны ў дакуменце.",
        ],
      },
      service: {
        title: "Хто афармляе поліс",
        text: "Сэрвіс greencard.agency дапамагае дыстанцыйна аформіць дагавор памежнага страхавання OC graniczne. Заяўка прымаецца анлайн, дадзеныя і дакументы правяраюцца ўручную, пасля падрыхтоўкі і аплаты кліент атрымлівае PDF-поліс на email.",
        items: [
          "прымаем заяўку анлайн;",
          "правяраем дакументы і дадзеныя аўтамабіля;",
          "удакладняем, ці падыходзіць OC graniczne пад краіну рэгістрацыі і маршрут;",
          "рыхтуем поліс і адпраўляем PDF на email;",
          "дапамагаем праверыць, якія краіны ўказаны ў пакрыцці.",
        ],
      },
      documents: {
        title: "Якія дадзеныя і дакументы патрэбны",
        text: "Дакументы лепш падрыхтаваць да запаўнення формы: без чытэльнага пасведчання аб рэгістрацыі немагчыма карэктна праверыць нумар, VIN, краіну рэгістрацыі і параметры аўтамабіля.",
        items: [
          "пасведчанне аб рэгістрацыі ТС / тэхпашпарт;",
          "пашпарт або ID страхавальніка;",
          "нумарны знак і VIN;",
          "марка, мадэль, год выпуску;",
          "краіна рэгістрацыі аўтамабіля і тып ТС;",
          "аб’ём і магутнасць рухавіка;",
          "дата пачатку і тэрмін страхавання;",
          "email і тэлефон для сувязі;",
          "каментарый, калі маршрут нестандартны або патрэбны дакладны перыяд пакрыцця ў прамежку 30–364 дні.",
        ],
        link: { href: "/product-info", label: "Адкрыць інфармацыю аб прадукце" },
      },
      price: {
        title: "Колькі каштуе OC graniczne",
        text: "Кошт залежыць ад тыпу транспартнага сродку і тэрміну страхавання. У калькулятары ўказана арыенціровачная цана для выбраных параметраў. Канчатковая магчымасць афармлення і кошт пацвярджаюцца пасля праверкі дадзеных аўтамабіля і дакументаў.",
        items: [
          "даступныя тэрміны: 30, 60, 90, 180 або 364 дні;",
          "тарыф залежыць ад катэгорыі ТС;",
          "цана пацвярджаецца да аплаты;",
          "калі дадзеных недастаткова, менеджар удакладніць іх да выпуску поліса.",
        ],
      },
      timing: {
        title: "Тэрмін афармлення і ручная праверка",
        text: "Калі ўсе дадзеныя і дакументы карэктныя, афармленне можа заняць каля 10–20 хвілін у працоўны час. Калі патрабуецца ручная праверка, узгадненне або выпраўленне дадзеных, афармленне зойме больш часу. Лепш падаць заяўку за 1–2 працоўныя дні да пачатку паездкі. Поліс не афармляецца заднім чыслом.",
      },
      notCovered: {
        title: "Дзе OC graniczne не дзейнічае",
        text: "Поліс не дзейнічае ў краінах, якія не ўказаны ў дакуменце як пакрываемыя. Напрыклад, калі ў полісе не ўказана Турцыя, Сербія, Чарнагорыя, Паўночная Македонія, Боснія і Герцагавіна або іншая краіна маршруту, выкарыстоўваць гэты поліс для такой часткі паездкі нельга. Перад аплатай і перад выездам праверце пералік краін пакрыцця ў дакуменце.",
        link: { href: "#coverage", label: "Паглядзець краіны пакрыцця" },
      },
      checkPolicy: {
        title: "Што праверыць у полісе перад паездкай",
        text: "Не выкарыстоўвайце поліс, калі ў ім ёсць памылка. Дадзеныя ў PDF павінны супадаць з рэгістрацыйным дакументам аўтамабіля і заяўленымі ўмовамі паездкі.",
        items: [
          "нумарны знак;",
          "VIN;",
          "краіна рэгістрацыі;",
          "марка і мадэль;",
          "дата пачатку і заканчэння;",
          "тып ТС;",
          "краіны пакрыцця;",
          "дадзеныя страхавальніка.",
        ],
        link: { href: "#verify", label: "Праверыць поліс" },
      },
    },

    why: {
      title: "Што робіць сэрвіс",
      desc: "Канкрэтныя дзеянні ў працэсе афармлення OC graniczne.",
      items: [
        { title: "Прымаем заяўку анлайн", text: "Дадзеныя страхавальніка і аўтамабіля перадаюцца праз форму без візіту ў офіс." },
        { title: "Правяраем дакументы", text: "Звяраем VIN, нумарны знак, краіну рэгістрацыі, тып ТС і тэрмін страхавання." },
        { title: "Удакладняем прымянімасць", text: "Правяраем, ці падыходзіць OC graniczne пад краіну рэгістрацыі і маршрут." },
        { title: "Адпраўляем PDF", text: "Пасля падрыхтоўкі і аплаты адпраўляем поліс на email і дапамагаем праверыць пакрыццё." },
      ],
    },

    form: {
      title: "Форма заяўкі",
      desc: "Запоўніце дадзеныя — мы падрыхтуем поліс і дашлём дадзеныя для аплаты.",
    },

    faq: {
      title: "FAQ",
      desc: "Кароткія адказы на частыя пытанні.",
      items: [
        { q: "Ці можна аформіць OC graniczne анлайн?", a: "Так. Заяўку можна адправіць анлайн. Дадзеныя правяраюцца ўручную, пасля падрыхтоўкі, пацвярджэння і аплаты PDF-поліс накіроўваецца на email." },
        { q: "Каму падыходзіць гэты поліс?", a: "Поліс падыходзіць для аўтамабіля, зарэгістраванага па-за межамі ЕЭЗ, калі паездка праходзіць праз Польшчу або іншую краіну, указаную ў полісе, і няма дзейнай Green Card." },
        { q: "Ці падыходзіць OC graniczne для аўтамабіля з Польшчы або іншай краіны ЕЭЗ?", a: "Не. Для аўтамабіляў, зарэгістраваных у Польшчы, Літве, Латвіі, Германіі і іншых краінах ЕЭЗ, гэты прадукт не падыходзіць." },
        { q: "У якіх краінах дзейнічае поліс?", a: "Поліс дзейнічае толькі ў краінах, указаных у дакуменце як пакрываемыя. Перад паездкай праверце, што ўсе краіны маршруту ўключаны ў пакрыццё." },
        { q: "Ці дзейнічае поліс у Турцыі або Сербіі?", a: "Не, калі Турцыя або Сербія не ўказаны ў дакуменце як пакрываемыя краіны. Для такіх краін можа спатрэбіцца мясцовае памежнае страхаванне або іншы прадукт." },
        { q: "Ці можна аформіць поліс у дзень паездкі?", a: "Часам гэта магчыма, калі ўсе дадзеныя і дакументы карэктныя. Калі патрабуецца ручная праверка, узгадненне або выпраўленне дадзеных, афармленне зойме больш часу. Лепш падаць заяўку за 1–2 працоўныя дні да паездкі." },
        { q: "Ці можна аформіць OC graniczne заднім чыслом?", a: "Не. Поліс не афармляецца заднім чыслом. Дата пачатку дзеяння ўказваецца пры афармленні, а выкарыстоўваць поліс можна толькі ў межах тэрміну дзеяння, указанага ў дакуменце." },
        { q: "Якія дакументы патрэбны?", a: "Патрэбны пасведчанне аб рэгістрацыі ТС / тэхпашпарт, пашпарт або ID страхавальніка, нумарны знак, VIN, марка, мадэль, год выпуску, краіна рэгістрацыі, тып ТС, дата пачатку і тэрмін страхавання, email і тэлефон." },
        { q: "Што ўказана ў сертыфікаце?", a: "У дакуменце ўказваюцца дадзеныя аўтамабіля, тэрмін дзеяння, краіна рэгістрацыі, тып ТС, дадзеныя страхавальніка і пералік краін пакрыцця." },
        { q: "Што рабіць, калі ў полісе памылка?", a: "Не выкарыстоўвайце поліс з памылковымі дадзенымі. Звяжыцеся з намі да паездкі, каб праверыць магчымасць выпраўлення. Некаторыя памылкі могуць патрабаваць пераафармлення." },
        { q: "Ці атрымаю я поліс у PDF?", a: "Так. Пасля праверкі дадзеных, падрыхтоўкі поліса і аплаты PDF-дакумент адпраўляецца на email, указаны ў заяўцы." },
        { q: "Ці можна аплаціць картай?", a: "На гэтым этапе даступныя SWIFT, SEPA і P2P-пераводы, а таксама аплата BLIK. Пасля падрыхтоўкі поліса вы атрымліваеце дадзеныя для аплаты." },
        { q: "Гэта тое самае, што «зялёная карта»?", a: "Не. OC graniczne і Green Card — розныя прадукты з рознымі правіламі афармлення, прымянімасці і тэрыторыяй дзеяння." },
        { q: "Што гэта за страхоўка?", a: "Гэта абавязковае страхаванне грамадзянскай адказнасці ўладальніка або карыстальніка механічнага транспартнага сродку, якое дзейнічае толькі ў краінах, указаных у полісе." },
        {
          q: "Што пакрывае страхоўка?",
          a: `Пакрыццё ўключае:
            • Шкоду жыццю або здароўю пацярпелых;
            • Маёмасную шкоду трэцім асобам.
            
            Мінімальныя гарантаваныя сумы:
            •  29 876 400 PLN — цялесныя пашкоджанні;
            •  6 021 600 PLN — маёмасная шкода.`
        },
        {
          q: "Што не пакрывае страхоўка?",
          a: `•  веласіпеды і немеханічныя ТС;
              •  шкоду ўладальніку аўтамабіля;
              •  шкоду навакольнаму асяроддзю.`
        },
        {
          q: "У якіх выпадках магчымы рэгрэс?",
          a: `Страхавая кампанія мае права спагнаць выплачаную суму, калі кіроўца:
            • дзейнічаў наўмысна;
            • быў п’яны або пад уздзеяннем наркотыкаў;
            • не меў правоў;
            • схаваўся з месца ДТЗ;
            • выкарыстоўваў скрадзены аўтамабіль.`
        },
        {
          q: "Калі пачынаецца і заканчваецца поліс?",
          a: `Пачатак: дата выдачы поліса.

              Даступныя тэрміны: 30, 60, 90, 180 або 364 дні.

              Спыненне:
              • заканчэнне тэрміну;
              • угон або спісанне аўтамабіля;
              • зняцце з уліку.`
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
          desc: "Праверка сапраўднасці поліса OC па рэгістрацыйным нумары або VIN у афіцыйнай базе UFG.",
          cta: "Перайсці на сайт UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Латвія",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Праверка абавязковай страхоўкі OCTA для транспартных сродкаў, зарэгістраваных у Латвіі.",
          cta: "Праверыць праз LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Літва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Сэрвіс праверкі сапраўднасці поліса абавязковага страхавання грамадзянскай адказнасці ў Літве.",
          cta: "Праверыць праз CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Зараз адкрыта",
      closedLabel: "Зараз закрыта",

      openDetails: "працуем да {time} па вашым часе",

      closingSoonHoursMinutes:
        "да канца працоўнага дня засталося {hours} г {minutes} хв",
      closingSoonHours: "да канца працоўнага дня засталося {hours} г",
      closingSoonMinutes: "да канца працоўнага дня засталося {minutes} хв",
      closingSoonExtra:
        "Вы можаце адправіць заяўку зараз. Калі спатрэбіцца ручная праверка, мы апрацуем яе да закрыцця або ў наступны працоўны дзень.",

      closedBeforeOpeningToday:
        "адкрыемся сёння ў {time} па вашым часе",
      closedUntilTomorrow:
        "адкрыемся заўтра ў {time} па вашым часе",
      closedUntilMonday:
        "адкрыемся ў панядзелак у {time} па вашым часе",
      closedExtra:
        "Вы можаце адправіць заяўку зараз — мы апрацуем яе ў працоўны час.",

      timezoneNote:
        "Час паказаны паводле часавага пояса вашай прылады: {timezone}.",
    },
  },
  uz: {
    hero: {
      kicker: "Onlayn rasmiylashtirish",
      title: "EIH hududidan tashqarida ro‘yxatdan o‘tgan avtomobil uchun OC graniczne onlayn",
      lead:
        "Biz Polsha, YI va polisda ko‘rsatilgan boshqa mamlakatlarga kirish uchun transchegaraviy sug‘urta shartnomasini masofadan rasmiylashtirishga yordam beramiz.",
      meta: ["EIHdan tashqaridagi avtomobillar uchun", "Tekshiruvdan keyin PDF-polis", "Qoplama faqat mamlakatlar ro‘yxati bo‘yicha"],
      ctaCalc: "Narxni hisoblash",
      ctaBuy: "Polisni rasmiylashtirish",
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
      desc: "Bosqichma-bosqich: hisoblash → ma’lumotlar → qo‘lda tekshirish → to‘lov → PDF-polis.",
      steps: [
        { title: "Hisoblang", text: "Transport vositasi turini va mavjud muddatni tanlang: 30, 60, 90, 180 yoki 364 kun." },
        { title: "Ma’lumotlarni to‘ldiring", text: "Sug‘urta qildiruvchi, ro‘yxatdan o‘tgan mamlakat, davlat raqami, VIN, transport vositasi parametrlari va aloqa ma’lumotlarini kiriting." },
        { title: "Tekshiruvni kuting", text: "Biz hujjatlar, yo‘nalish va tanlangan shartlar bo‘yicha OC graniczne rasmiylashtirish imkoniyatini tekshiramiz." },
        { title: "PDF-polisni oling", text: "Tasdiqlash va to‘lovdan so‘ng polis arizada ko‘rsatilgan email manziliga yuboriladi." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne Yevropa iqtisodiy hududidan tashqarida ro‘yxatdan o‘tgan avtomobil uchun mos keladi, agar haydovchi amaldagi Green Card bo‘lmagan holda Polshaga yoki polis amal qiladigan boshqa mamlakatga kirayotgan bo‘lsa. Polis EIH mamlakatlarida ro‘yxatdan o‘tgan avtomobillar uchun mos emas. Safardan oldin kerakli mamlakatlar polisda qoplama hududi sifatida ko‘rsatilganini tekshirish kerak.",
      fit: {
        title: "OC graniczne kimlar uchun mos",
        items: [
          "avtomobil EIH hududidan tashqarida ro‘yxatdan o‘tgan;",
          "yo‘nalishda tan olinadigan amaldagi Green Card yo‘q;",
          "safar Polsha yoki polisda ko‘rsatilgan mamlakatlar orqali o‘tadi;",
          "sug‘urta qildiruvchi jismoniy yoki yuridik shaxs bo‘lishi mumkin;",
          "yengil avtomobillar, yuk avtomobillari, avtobuslar, tirkamalar, mototsikllar va maxsus texnika mavjud.",
        ],
        links: [
          { href: "/rules", label: "Rasmiylashtirish qoidalari" },
          { href: "/product-info", label: "Mahsulot bo‘yicha hujjatlar" },
        ],
      },
      notFit: {
        title: "⚠️ Bu polis kimlar uchun mos emas",
        items: [
          "avtomobil Polsha, Litva, Latviya, Germaniya yoki boshqa EIH mamlakatida ro‘yxatdan o‘tgan;",
          "o‘z avtomobilingizni himoya qilish kerak — bu KASKO emas;",
          "yo‘nalish polisda ko‘rsatilmagan mamlakatlar orqali o‘tadi;",
          "polisni orqaga sana bilan rasmiylashtirish kerak;",
          "Turkiya, Serbiya yoki qoplama ro‘yxatidan tashqaridagi boshqa mamlakatlarga safar uchun, agar bu mamlakatlar hujjatda ko‘rsatilmagan bo‘lsa, boshqa mahsulot kerak bo‘ladi.",
        ],
      },
      service: {
        title: "Polisni kim rasmiylashtiradi",
        text: "greencard.agency servisi OC graniczne chegara sug‘urtasi shartnomasini masofadan rasmiylashtirishga yordam beradi. Ariza onlayn qabul qilinadi, ma’lumotlar va hujjatlar qo‘lda tekshiriladi, polis tayyorlanib to‘lov amalga oshirilgandan so‘ng mijoz PDF-polisni email orqali oladi.",
        items: [
          "arizani onlayn qabul qilamiz;",
          "avtomobil hujjatlari va ma’lumotlarini tekshiramiz;",
          "OC graniczne ro‘yxatdan o‘tgan mamlakat va yo‘nalishga mos kelishini aniqlaymiz;",
          "polisni tayyorlaymiz va PDF faylni email orqali yuboramiz;",
          "qaysi mamlakatlar qoplamaga kiritilganini tekshirishga yordam beramiz.",
        ],
      },
      documents: {
        title: "Qanday ma’lumotlar va hujjatlar kerak",
        text: "Hujjatlarni formani to‘ldirishdan oldin tayyorlab qo‘ygan ma’qul: o‘qilishi aniq bo‘lgan ro‘yxatdan o‘tganlik guvohnomasisiz raqam, VIN, ro‘yxatdan o‘tgan mamlakat va avtomobil parametrlarini to‘g‘ri tekshirib bo‘lmaydi.",
        items: [
          "transport vositasining ro‘yxatdan o‘tganlik guvohnomasi / texnik pasport;",
          "sug‘urta qildiruvchining pasporti yoki ID hujjati;",
          "davlat raqami va VIN;",
          "marka, model, ishlab chiqarilgan yili;",
          "avtomobil ro‘yxatdan o‘tgan mamlakat va transport vositasi turi;",
          "dvigatel hajmi va quvvati;",
          "sug‘urta boshlanish sanasi va muddati;",
          "aloqa uchun email va telefon;",
          "agar yo‘nalish nostandart bo‘lsa yoki 30–364 kun oralig‘ida aniq qoplama davri kerak bo‘lsa, izoh.",
        ],
        link: { href: "/product-info", label: "Mahsulot haqidagi ma’lumotni ochish" },
      },
      price: {
        title: "OC graniczne qancha turadi",
        text: "Narx transport vositasi turi va sug‘urta muddatiga bog‘liq. Kalkulyatorda tanlangan parametrlar uchun taxminiy narx ko‘rsatiladi. Rasmiylashtirishning yakuniy imkoniyati va narx avtomobil ma’lumotlari hamda hujjatlar tekshirilgandan keyin tasdiqlanadi.",
        items: [
          "mavjud muddatlar: 30, 60, 90, 180 yoki 364 kun;",
          "tarif transport vositasi toifasiga bog‘liq;",
          "narx to‘lovdan oldin tasdiqlanadi;",
          "agar ma’lumotlar yetarli bo‘lmasa, menejer polis chiqarilishidan oldin ularni aniqlashtiradi.",
        ],
      },
      timing: {
        title: "Rasmiylashtirish muddati va qo‘lda tekshirish",
        text: "Agar barcha ma’lumotlar va hujjatlar to‘g‘ri bo‘lsa, rasmiylashtirish ish vaqtida taxminan 10–20 daqiqa olishi mumkin. Agar qo‘lda tekshirish, kelishish yoki ma’lumotlarni tuzatish talab qilinsa, rasmiylashtirish ko‘proq vaqt oladi. Arizani safar boshlanishidan 1–2 ish kuni oldin yuborgan ma’qul. Polis orqaga sana bilan rasmiylashtirilmaydi.",
      },
      notCovered: {
        title: "OC graniczne qayerda amal qilmaydi",
        text: "Polis hujjatda qoplama hududi sifatida ko‘rsatilmagan mamlakatlarda amal qilmaydi. Masalan, agar polisda Turkiya, Serbiya, Chernogoriya, Shimoliy Makedoniya, Bosniya va Gersegovina yoki yo‘nalishdagi boshqa mamlakat ko‘rsatilmagan bo‘lsa, safarning bunday qismi uchun ushbu polisdan foydalanib bo‘lmaydi. To‘lovdan oldin va yo‘lga chiqishdan oldin hujjatdagi qoplama mamlakatlari ro‘yxatini tekshiring.",
        link: { href: "#coverage", label: "Qoplama mamlakatlarini ko‘rish" },
      },
      checkPolicy: {
        title: "Safardan oldin polisda nimani tekshirish kerak",
        text: "Agar polisda xato bo‘lsa, undan foydalanmang. PDFdagi ma’lumotlar avtomobilning ro‘yxatga olish hujjati va safar bo‘yicha ko‘rsatilgan shartlarga mos kelishi kerak.",
        items: [
          "davlat raqami;",
          "VIN;",
          "ro‘yxatdan o‘tgan mamlakat;",
          "marka va model;",
          "boshlanish va tugash sanasi;",
          "transport vositasi turi;",
          "qoplama mamlakatlari;",
          "sug‘urta qildiruvchi ma’lumotlari.",
        ],
        link: { href: "#verify", label: "Polisni tekshirish" },
      },
    },

    why: {
      title: "Servis nima qiladi",
      desc: "OC graniczne rasmiylashtirish jarayonidagi aniq harakatlar.",
      items: [
        { title: "Arizani onlayn qabul qilamiz", text: "Sug‘urta qildiruvchi va avtomobil ma’lumotlari ofisga kelmasdan forma orqali yuboriladi." },
        { title: "Hujjatlarni tekshiramiz", text: "VIN, davlat raqami, ro‘yxatdan o‘tgan mamlakat, transport vositasi turi va sug‘urta muddatini solishtirib tekshiramiz." },
        { title: "Qo‘llanishini aniqlaymiz", text: "OC graniczne ro‘yxatdan o‘tgan mamlakat va yo‘nalishga mos kelishini tekshiramiz." },
        { title: "PDF yuboramiz", text: "Tayyorlash va to‘lovdan so‘ng polisni email orqali yuboramiz va qoplamani tekshirishga yordam beramiz." },
      ],
    },

    form: {
      title: "Ariza formasi",
      desc: "Ma’lumotlarni to‘ldiring — biz polisni tayyorlaymiz va to‘lov uchun ma’lumotlarni yuboramiz.",
    },

    faq: {
      title: "FAQ",
      desc: "Tez-tez beriladigan savollarga qisqa javoblar.",
      items: [
        { q: "OC graniczne ni onlayn rasmiylashtirish mumkinmi?", a: "Ha. Arizani onlayn yuborish mumkin. Ma’lumotlar qo‘lda tekshiriladi, tayyorlash, tasdiqlash va to‘lovdan so‘ng PDF-polis emailga yuboriladi." },
        { q: "Bu polis kimlar uchun mos?", a: "Polis EIH hududidan tashqarida ro‘yxatdan o‘tgan avtomobil uchun mos keladi, agar safar Polsha yoki polisda ko‘rsatilgan boshqa mamlakat orqali o‘tsa va amaldagi Green Card bo‘lmasa." },
        { q: "OC graniczne Polsha yoki boshqa EIH mamlakatidagi avtomobil uchun mos keladimi?", a: "Yo‘q. Polsha, Litva, Latviya, Germaniya va boshqa EIH mamlakatlarida ro‘yxatdan o‘tgan avtomobillar uchun bu mahsulot mos emas." },
        { q: "Polis qaysi mamlakatlarda amal qiladi?", a: "Polis faqat hujjatda qoplama hududi sifatida ko‘rsatilgan mamlakatlarda amal qiladi. Safardan oldin yo‘nalishdagi barcha mamlakatlar qoplamaga kiritilganini tekshiring." },
        { q: "Polis Turkiya yoki Serbiyada amal qiladimi?", a: "Yo‘q, agar Turkiya yoki Serbiya hujjatda qoplama mamlakatlari sifatida ko‘rsatilmagan bo‘lsa. Bunday mamlakatlar uchun mahalliy chegara sug‘urtasi yoki boshqa mahsulot kerak bo‘lishi mumkin." },
        { q: "Polisni safar kuni rasmiylashtirish mumkinmi?", a: "Ba’zan bu mumkin, agar barcha ma’lumotlar va hujjatlar to‘g‘ri bo‘lsa. Agar qo‘lda tekshirish, kelishish yoki ma’lumotlarni tuzatish talab qilinsa, rasmiylashtirish ko‘proq vaqt oladi. Arizani safardan 1–2 ish kuni oldin yuborgan ma’qul." },
        { q: "OC graniczne ni orqaga sana bilan rasmiylashtirish mumkinmi?", a: "Yo‘q. Polis orqaga sana bilan rasmiylashtirilmaydi. Amal qilish boshlanish sanasi rasmiylashtirish vaqtida ko‘rsatiladi, polisdan esa faqat hujjatda ko‘rsatilgan amal qilish muddati doirasida foydalanish mumkin." },
        { q: "Qanday hujjatlar kerak?", a: "Transport vositasining ro‘yxatdan o‘tganlik guvohnomasi / texnik pasport, sug‘urta qildiruvchining pasporti yoki ID hujjati, davlat raqami, VIN, marka, model, ishlab chiqarilgan yili, ro‘yxatdan o‘tgan mamlakat, transport vositasi turi, sug‘urta boshlanish sanasi va muddati, email va telefon kerak." },
        { q: "Sertifikatda nima ko‘rsatiladi?", a: "Hujjatda avtomobil ma’lumotlari, amal qilish muddati, ro‘yxatdan o‘tgan mamlakat, transport vositasi turi, sug‘urta qildiruvchi ma’lumotlari va qoplama mamlakatlari ro‘yxati ko‘rsatiladi." },
        { q: "Polisda xato bo‘lsa nima qilish kerak?", a: "Noto‘g‘ri ma’lumotlar bor polisdan foydalanmang. Tuzatish imkoniyatini tekshirish uchun safardan oldin biz bilan bog‘laning. Ayrim xatolar polisni qayta rasmiylashtirishni talab qilishi mumkin." },
        { q: "Polisni PDF formatida olamanmi?", a: "Ha. Ma’lumotlar tekshirilgandan, polis tayyorlanganidan va to‘lovdan so‘ng PDF-hujjat arizada ko‘rsatilgan email manziliga yuboriladi." },
        { q: "Karta bilan to‘lash mumkinmi?", a: "Hozirgi bosqichda SWIFT, SEPA va P2P o‘tkazmalari, shuningdek BLIK orqali to‘lov mavjud. Polis tayyorlangandan so‘ng siz to‘lov uchun ma’lumotlarni olasiz." },
        { q: "Bu «yashil karta» bilan bir xilmi?", a: "Yo‘q. OC graniczne va Green Card — rasmiylashtirish qoidalari, qo‘llanishi va amal qilish hududi turlicha bo‘lgan alohida mahsulotlar." },
        { q: "Bu qanday sug‘urta?", a: "Bu mexanik transport vositasi egasi yoki foydalanuvchisining fuqarolik javobgarligini majburiy sug‘urta qilish bo‘lib, faqat polisda ko‘rsatilgan mamlakatlarda amal qiladi." },
        {
          q: "Sug‘urta nimani qoplaydi?",
          a: `Qoplama quyidagilarni o‘z ichiga oladi:
            • Jabrlanganlarning hayoti yoki sog‘lig‘iga yetkazilgan zarar;
            • Uchinchi shaxslarga yetkazilgan mulkiy zarar.
            
            Minimal kafolatlangan summalar:
            •  29 876 400 PLN — tan jarohatlari;
            •  6 021 600 PLN — mulkiy zarar.`
        },
        {
          q: "Sug‘urta nimani qoplamaydi?",
          a: `•  velosipedlar va mexanik bo‘lmagan transport vositalari;
              •  avtomobil egasiga yetkazilgan zarar;
              •  atrof-muhitga yetkazilgan zarar.`
        },
        {
          q: "Qaysi hollarda regress bo‘lishi mumkin?",
          a: `Sug‘urta kompaniyasi to‘langan summani undirishga haqli, agar haydovchi:
            • qasddan harakat qilgan bo‘lsa;
            • mast yoki giyohvand moddalar ta’sirida bo‘lgan bo‘lsa;
            • haydovchilik huquqiga ega bo‘lmagan bo‘lsa;
            • YTH joyidan qochib ketgan bo‘lsa;
            • o‘g‘irlangan avtomobildan foydalangan bo‘lsa.`
        },
        {
          q: "Polis qachon boshlanadi va qachon tugaydi?",
          a: `Boshlanishi: polis berilgan sana.

              Mavjud muddatlar: 30, 60, 90, 180 yoki 364 kun.

              Tugashi:
              • muddat tugashi;
              • avtomobil o‘g‘irlanishi yoki hisobdan chiqarilishi;
              • ro‘yxatdan chiqarilishi.`
        },
      ],
    },

    verify: {
      title: "Polisning haqiqiyligini tekshirish",
      lead:
        "Agar polisingiz haqiqatan ham faol ekaniga ishonch hosil qilmoqchi bo‘lsangiz, sug‘urta byurolarining rasmiy bazalaridan foydalaning. Quyida Polsha, Latviya va Litva uchun servislar havolalari keltirilgan.",
      items: [
        {
          code: "PL",
          country: "Polsha",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG rasmiy bazasida ro‘yxatdan o‘tish raqami yoki VIN bo‘yicha OC polisining haqiqiyligini tekshirish.",
          cta: "UFG saytiga o‘tish",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Latviya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Latviyada ro‘yxatdan o‘tgan transport vositalari uchun majburiy OCTA sug‘urtasini tekshirish.",
          cta: "LTAB orqali tekshirish",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litva",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Litvada majburiy fuqarolik javobgarligi sug‘urtasi polisining haqiqiyligini tekshirish servisi.",
          cta: "CAB orqali tekshirish",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Hozir ochiq",
      closedLabel: "Hozir yopiq",

      openDetails: "sizning vaqtingiz bo‘yicha {time} gacha ishlaymiz",

      closingSoonHoursMinutes:
        "ish kuni tugashiga {hours} soat {minutes} daqiqa qoldi",
      closingSoonHours: "ish kuni tugashiga {hours} soat qoldi",
      closingSoonMinutes: "ish kuni tugashiga {minutes} daqiqa qoldi",
      closingSoonExtra:
        "Arizani hozir yuborishingiz mumkin. Agar qo‘lda tekshirish kerak bo‘lsa, uni yopilishdan oldin yoki keyingi ish kuni ko‘rib chiqamiz.",

      closedBeforeOpeningToday:
        "bugun sizning vaqtingiz bo‘yicha {time} da ochilamiz",
      closedUntilTomorrow:
        "ertaga sizning vaqtingiz bo‘yicha {time} da ochilamiz",
      closedUntilMonday:
        "dushanba kuni sizning vaqtingiz bo‘yicha {time} da ochilamiz",
      closedExtra:
        "Arizani hozir yuborishingiz mumkin — uni ish vaqtida ko‘rib chiqamiz.",

      timezoneNote:
        "Vaqt qurilmangizning vaqt zonasiga muvofiq ko‘rsatilgan: {timezone}.",
    },
  },
  ka: {
    hero: {
      kicker: "ონლაინ გაფორმება",
      title: "OC graniczne ონლაინ ევროპის ეკონომიკური ზონის ფარგლებს გარეთ რეგისტრირებული ავტომობილისთვის",
      lead:
        "ჩვენ გეხმარებით დისტანციურად გააფორმოთ საზღვრისპირა დაზღვევის ხელშეკრულება პოლონეთში, ევროკავშირში და პოლისში მითითებულ სხვა ქვეყნებში შესასვლელად.",
      meta: ["ევროპის ეკონომიკური ზონის გარეთ რეგისტრირებული ავტომობილებისთვის", "PDF-პოლისი შემოწმების შემდეგ", "დაფარვა მხოლოდ ქვეყნების ჩამონათვალის მიხედვით"],
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
      title: "როგორ მუშაობს ეს",
      desc: "ეტაპობრივად: გამოთვლა → მონაცემები → ხელით შემოწმება → გადახდა → PDF-პოლისი.",
      steps: [
        { title: "გამოთვალეთ", text: "აირჩიეთ სატრანსპორტო საშუალების ტიპი და ხელმისაწვდომი ვადა: 30, 60, 90, 180 ან 364 დღე." },
        { title: "შეავსეთ მონაცემები", text: "მიუთითეთ დამზღვევი, რეგისტრაციის ქვეყანა, სახელმწიფო ნომერი, VIN, სატრანსპორტო საშუალების პარამეტრები და საკონტაქტო მონაცემები." },
        { title: "დაელოდეთ შემოწმებას", text: "ჩვენ შევამოწმებთ დოკუმენტებს, მარშრუტს და არჩეული პირობებისთვის OC graniczne-ის გაფორმების შესაძლებლობას." },
        { title: "მიიღეთ PDF-პოლისი", text: "დადასტურებისა და გადახდის შემდეგ პოლისი იგზავნება განაცხადში მითითებულ email-ზე." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne განკუთვნილია ევროპის ეკონომიკური ზონის ფარგლებს გარეთ რეგისტრირებული ავტომობილისთვის, თუ მძღოლი შედის პოლონეთში ან პოლისის მოქმედების სხვა ქვეყანაში მოქმედი Green Card-ის გარეშე. პოლისი არ არის განკუთვნილი ევროპის ეკონომიკური ზონის ქვეყნებში რეგისტრირებული ავტომობილებისთვის. გამგზავრებამდე უნდა შეამოწმოთ, რომ საჭირო ქვეყნები პოლისში მითითებულია როგორც დაფარული.",
      fit: {
        title: "ვისთვის არის შესაფერისი OC graniczne",
        items: [
          "ავტომობილი რეგისტრირებულია ევროპის ეკონომიკური ზონის ფარგლებს გარეთ;",
          "არ არსებობს მარშრუტზე აღიარებული მოქმედი Green Card;",
          "მგზავრობა გადის პოლონეთზე ან პოლისში მითითებულ ქვეყნებზე;",
          "დამზღვევი შეიძლება იყოს ფიზიკური ან იურიდიული პირი;",
          "ხელმისაწვდომია მსუბუქი ავტომობილები, სატვირთოები, ავტობუსები, მისაბმელები, მოტოციკლები და სპეცტექნიკა.",
        ],
        links: [
          { href: "/rules", label: "გაფორმების წესები" },
          { href: "/product-info", label: "პროდუქტის დოკუმენტები" },
        ],
      },
      notFit: {
        title: "⚠️ ვისთვის არ არის შესაფერისი ეს პოლისი",
        items: [
          "ავტომობილი რეგისტრირებულია პოლონეთში, ლიტვაში, ლატვიაში, გერმანიაში ან ევროპის ეკონომიკური ზონის სხვა ქვეყანაში;",
          "საჭიროა საკუთარი ავტომობილის დაცვა — ეს არ არის კასკო;",
          "მარშრუტი გადის ქვეყნებზე, რომლებიც პოლისში არ არის მითითებული;",
          "საჭიროა პოლისის უკანა თარიღით გაფორმება;",
          "თურქეთში, სერბეთში ან დაფარვის სიის გარეთ მდებარე სხვა ქვეყნებში მგზავრობისთვის საჭიროა სხვა პროდუქტი, თუ ეს ქვეყნები დოკუმენტში არ არის მითითებული.",
        ],
      },
      service: {
        title: "ვინ აფორმებს პოლისს",
        text: "greencard.agency-ის სერვისი გეხმარებათ დისტანციურად გააფორმოთ საზღვრისპირა დაზღვევის ხელშეკრულება OC graniczne. განაცხადი მიიღება ონლაინ, მონაცემები და დოკუმენტები მოწმდება ხელით, ხოლო მომზადებისა და გადახდის შემდეგ კლიენტი იღებს PDF-პოლისს email-ზე.",
        items: [
          "ვიღებთ განაცხადს ონლაინ;",
          "ვამოწმებთ ავტომობილის დოკუმენტებსა და მონაცემებს;",
          "ვაზუსტებთ, შეესაბამება თუ არა OC graniczne რეგისტრაციის ქვეყანას და მარშრუტს;",
          "ვამზადებთ პოლისს და PDF-ს ვაგზავნით email-ზე;",
          "გეხმარებით შეამოწმოთ, რომელი ქვეყნებია მითითებული დაფარვაში.",
        ],
      },
      documents: {
        title: "რა მონაცემები და დოკუმენტებია საჭირო",
        text: "დოკუმენტები უმჯობესია მოამზადოთ ფორმის შევსებამდე: წაკითხვადი რეგისტრაციის მოწმობის გარეშე შეუძლებელია ნომრის, VIN-ის, რეგისტრაციის ქვეყნისა და ავტომობილის პარამეტრების სწორად შემოწმება.",
        items: [
          "სატრანსპორტო საშუალების რეგისტრაციის მოწმობა / ტექნიკური პასპორტი;",
          "დამზღვევის პასპორტი ან ID;",
          "სახელმწიფო ნომერი და VIN;",
          "მარკა, მოდელი, გამოშვების წელი;",
          "ავტომობილის რეგისტრაციის ქვეყანა და სატრანსპორტო საშუალების ტიპი;",
          "ძრავის მოცულობა და სიმძლავრე;",
          "დაზღვევის დაწყების თარიღი და ვადა;",
          "email და ტელეფონი საკონტაქტოდ;",
          "კომენტარი, თუ მარშრუტი არასტანდარტულია ან საჭიროა დაფარვის ზუსტი პერიოდი 30–364 დღის შუალედში.",
        ],
        link: { href: "/product-info", label: "პროდუქტის შესახებ ინფორმაციის გახსნა" },
      },
      price: {
        title: "რა ღირს OC graniczne",
        text: "ღირებულება დამოკიდებულია სატრანსპორტო საშუალების ტიპსა და დაზღვევის ვადაზე. კალკულატორში მითითებულია არჩეული პარამეტრების საორიენტაციო ფასი. გაფორმების საბოლოო შესაძლებლობა და ღირებულება დასტურდება ავტომობილის მონაცემებისა და დოკუმენტების შემოწმების შემდეგ.",
        items: [
          "ხელმისაწვდომი ვადები: 30, 60, 90, 180 ან 364 დღე;",
          "ტარიფი დამოკიდებულია სატრანსპორტო საშუალების კატეგორიაზე;",
          "ფასი დასტურდება გადახდამდე;",
          "თუ მონაცემები არასაკმარისია, მენეჯერი მათ დააზუსტებს პოლისის გაცემამდე.",
        ],
      },
      timing: {
        title: "გაფორმების ვადა და ხელით შემოწმება",
        text: "თუ ყველა მონაცემი და დოკუმენტი სწორია, გაფორმებას სამუშაო საათებში შეიძლება დაახლოებით 10–20 წუთი დასჭირდეს. თუ საჭიროა ხელით შემოწმება, შეთანხმება ან მონაცემების გასწორება, გაფორმებას მეტი დრო დასჭირდება. უმჯობესია განაცხადი შეიტანოთ მგზავრობის დაწყებამდე 1–2 სამუშაო დღით ადრე. პოლისი უკანა თარიღით არ ფორმდება.",
      },
      notCovered: {
        title: "სად არ მოქმედებს OC graniczne",
        text: "პოლისი არ მოქმედებს იმ ქვეყნებში, რომლებიც დოკუმენტში არ არის მითითებული როგორც დაფარული. მაგალითად, თუ პოლისში არ არის მითითებული თურქეთი, სერბეთი, მონტენეგრო, ჩრდილოეთი მაკედონია, ბოსნია და ჰერცეგოვინა ან მარშრუტის სხვა ქვეყანა, ამ პოლისის გამოყენება მგზავრობის ასეთი ნაწილისთვის არ შეიძლება. გადახდამდე და გამგზავრებამდე შეამოწმეთ დოკუმენტში დაფარული ქვეყნების ჩამონათვალი.",
        link: { href: "#coverage", label: "დაფარული ქვეყნების ნახვა" },
      },
      checkPolicy: {
        title: "რა უნდა შეამოწმოთ პოლისში გამგზავრებამდე",
        text: "არ გამოიყენოთ პოლისი, თუ მასში შეცდომაა. PDF-ში არსებული მონაცემები უნდა ემთხვეოდეს ავტომობილის რეგისტრაციის დოკუმენტს და მგზავრობის განაცხადში მითითებულ პირობებს.",
        items: [
          "სახელმწიფო ნომერი;",
          "VIN;",
          "რეგისტრაციის ქვეყანა;",
          "მარკა და მოდელი;",
          "დაწყებისა და დასრულების თარიღი;",
          "სატრანსპორტო საშუალების ტიპი;",
          "დაფარული ქვეყნები;",
          "დამზღვევის მონაცემები.",
        ],
        link: { href: "#verify", label: "პოლისის შემოწმება" },
      },
    },

    why: {
      title: "რას აკეთებს სერვისი",
      desc: "კონკრეტული მოქმედებები OC graniczne-ის გაფორმების პროცესში.",
      items: [
        { title: "ვიღებთ განაცხადს ონლაინ", text: "დამზღვევისა და ავტომობილის მონაცემები ფორმის საშუალებით იგზავნება ოფისში ვიზიტის გარეშე." },
        { title: "ვამოწმებთ დოკუმენტებს", text: "ვადარებთ VIN-ს, სახელმწიფო ნომერს, რეგისტრაციის ქვეყანას, სატრანსპორტო საშუალების ტიპსა და დაზღვევის ვადას." },
        { title: "ვაზუსტებთ გამოყენებადობას", text: "ვამოწმებთ, შეესაბამება თუ არა OC graniczne რეგისტრაციის ქვეყანას და მარშრუტს." },
        { title: "ვაგზავნით PDF-ს", text: "მომზადებისა და გადახდის შემდეგ პოლისს ვაგზავნით email-ზე და გეხმარებით დაფარვის შემოწმებაში." },
      ],
    },

    form: {
      title: "განაცხადის ფორმა",
      desc: "შეავსეთ მონაცემები — ჩვენ მოვამზადებთ პოლისს და გამოგიგზავნით გადახდის მონაცემებს.",
    },

    faq: {
      title: "FAQ",
      desc: "მოკლე პასუხები ხშირად დასმულ კითხვებზე.",
      items: [
        { q: "შესაძლებელია თუ არა OC graniczne-ის ონლაინ გაფორმება?", a: "დიახ. განაცხადის გაგზავნა შესაძლებელია ონლაინ. მონაცემები მოწმდება ხელით, ხოლო მომზადების, დადასტურებისა და გადახდის შემდეგ PDF-პოლისი იგზავნება email-ზე." },
        { q: "ვისთვის არის ეს პოლისი შესაფერისი?", a: "პოლისი შესაფერისია ევროპის ეკონომიკური ზონის ფარგლებს გარეთ რეგისტრირებული ავტომობილისთვის, თუ მგზავრობა გადის პოლონეთზე ან პოლისში მითითებულ სხვა ქვეყანაზე და არ არსებობს მოქმედი Green Card." },
        { q: "არის თუ არა OC graniczne შესაფერისი პოლონეთიდან ან ევროპის ეკონომიკური ზონის სხვა ქვეყნიდან რეგისტრირებული ავტომობილისთვის?", a: "არა. პოლონეთში, ლიტვაში, ლატვიაში, გერმანიაში და ევროპის ეკონომიკური ზონის სხვა ქვეყნებში რეგისტრირებული ავტომობილებისთვის ეს პროდუქტი არ არის შესაფერისი." },
        { q: "რომელ ქვეყნებში მოქმედებს პოლისი?", a: "პოლისი მოქმედებს მხოლოდ იმ ქვეყნებში, რომლებიც დოკუმენტში მითითებულია როგორც დაფარული. გამგზავრებამდე შეამოწმეთ, რომ მარშრუტის ყველა ქვეყანა შედის დაფარვაში." },
        { q: "მოქმედებს თუ არა პოლისი თურქეთში ან სერბეთში?", a: "არა, თუ თურქეთი ან სერბეთი დოკუმენტში არ არის მითითებული როგორც დაფარული ქვეყნები. ასეთი ქვეყნებისთვის შეიძლება საჭირო გახდეს ადგილობრივი საზღვრისპირა დაზღვევა ან სხვა პროდუქტი." },
        { q: "შესაძლებელია თუ არა პოლისის გაფორმება მგზავრობის დღეს?", a: "ზოგჯერ ეს შესაძლებელია, თუ ყველა მონაცემი და დოკუმენტი სწორია. თუ საჭიროა ხელით შემოწმება, შეთანხმება ან მონაცემების გასწორება, გაფორმებას მეტი დრო დასჭირდება. უმჯობესია განაცხადი შეიტანოთ მგზავრობამდე 1–2 სამუშაო დღით ადრე." },
        { q: "შესაძლებელია თუ არა OC graniczne-ის უკანა თარიღით გაფორმება?", a: "არა. პოლისი უკანა თარიღით არ ფორმდება. მოქმედების დაწყების თარიღი მიეთითება გაფორმებისას, ხოლო პოლისის გამოყენება შესაძლებელია მხოლოდ დოკუმენტში მითითებული მოქმედების ვადის ფარგლებში." },
        { q: "რა დოკუმენტებია საჭირო?", a: "საჭიროა სატრანსპორტო საშუალების რეგისტრაციის მოწმობა / ტექნიკური პასპორტი, დამზღვევის პასპორტი ან ID, სახელმწიფო ნომერი, VIN, მარკა, მოდელი, გამოშვების წელი, რეგისტრაციის ქვეყანა, სატრანსპორტო საშუალების ტიპი, დაზღვევის დაწყების თარიღი და ვადა, email და ტელეფონი." },
        { q: "რა არის მითითებული სერტიფიკატში?", a: "დოკუმენტში მითითებულია ავტომობილის მონაცემები, მოქმედების ვადა, რეგისტრაციის ქვეყანა, სატრანსპორტო საშუალების ტიპი, დამზღვევის მონაცემები და დაფარული ქვეყნების ჩამონათვალი." },
        { q: "რა უნდა გავაკეთო, თუ პოლისში შეცდომაა?", a: "არ გამოიყენოთ პოლისი არასწორი მონაცემებით. დაგვიკავშირდით მგზავრობამდე, რათა შევამოწმოთ გასწორების შესაძლებლობა. ზოგიერთი შეცდომა შეიძლება საჭიროებდეს ხელახალ გაფორმებას." },
        { q: "მივიღებ თუ არა პოლისს PDF ფორმატში?", a: "დიახ. მონაცემების შემოწმების, პოლისის მომზადებისა და გადახდის შემდეგ PDF-დოკუმენტი იგზავნება განაცხადში მითითებულ email-ზე." },
        { q: "შესაძლებელია თუ არა ბარათით გადახდა?", a: "ამ ეტაპზე ხელმისაწვდომია SWIFT, SEPA და P2P გადარიცხვები, ასევე BLIK გადახდა. პოლისის მომზადების შემდეგ მიიღებთ გადახდის მონაცემებს." },
        { q: "ეს იგივეა, რაც „მწვანე ბარათი“?", a: "არა. OC graniczne და Green Card სხვადასხვა პროდუქტებია, განსხვავებული გაფორმების წესებით, გამოყენებადობითა და მოქმედების ტერიტორიით." },
        { q: "რა ტიპის დაზღვევაა ეს?", a: "ეს არის მექანიკური სატრანსპორტო საშუალების მფლობელის ან მომხმარებლის სამოქალაქო პასუხისმგებლობის სავალდებულო დაზღვევა, რომელიც მოქმედებს მხოლოდ პოლისში მითითებულ ქვეყნებში." },
        {
          q: "რას ფარავს დაზღვევა?",
          a: `დაფარვა მოიცავს:
            • დაზარალებულთა სიცოცხლის ან ჯანმრთელობისთვის მიყენებულ ზიანს;
            • მესამე პირებისთვის მიყენებულ ქონებრივ ზიანს.
            
            მინიმალური გარანტირებული თანხები:
            •  29 876 400 PLN — სხეულის დაზიანება;
            •  6 021 600 PLN — ქონებრივი ზიანი.`
        },
        {
          q: "რას არ ფარავს დაზღვევა?",
          a: `•  ველოსიპედებს და არამექანიკურ სატრანსპორტო საშუალებებს;
              •  ავტომობილის მფლობელისთვის მიყენებულ ზიანს;
              •  გარემოსთვის მიყენებულ ზიანს.`
        },
        {
          q: "რა შემთხვევებშია შესაძლებელი რეგრესი?",
          a: `სადაზღვევო კომპანიას უფლება აქვს დაიბრუნოს გადახდილი თანხა, თუ მძღოლი:
            • მოქმედებდა განზრახ;
            • იყო ნასვამი ან ნარკოტიკების ზემოქმედების ქვეშ;
            • არ ჰქონდა მართვის უფლება;
            • მიიმალა ავტოსაგზაო შემთხვევის ადგილიდან;
            • იყენებდა მოპარულ ავტომობილს.`
        },
        {
          q: "როდის იწყება და მთავრდება პოლისი?",
          a: `დასაწყისი: პოლისის გაცემის თარიღი.

              ხელმისაწვდომი ვადები: 30, 60, 90, 180 ან 364 დღე.

              შეწყვეტა:
              • ვადის დასრულება;
              • ავტომობილის გატაცება ან ჩამოწერა;
              • რეგისტრაციიდან მოხსნა.`
        },
      ],
    },

    verify: {
      title: "პოლისის ნამდვილობის შემოწმება",
      lead:
        "თუ გსურთ დარწმუნდეთ, რომ თქვენი პოლისი ნამდვილად აქტიურია, გამოიყენეთ სადაზღვევო ბიუროების ოფიციალური ბაზები. ქვემოთ მოცემულია ბმულები პოლონეთის, ლატვიისა და ლიტვის სერვისებზე.",
      items: [
        {
          code: "PL",
          country: "პოლონეთი",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "OC პოლისის ნამდვილობის შემოწმება რეგისტრაციის ნომრით ან VIN-ით UFG-ის ოფიციალურ ბაზაში.",
          cta: "UFG-ის საიტზე გადასვლა",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "ლატვია",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "ლატვიაში რეგისტრირებული სატრანსპორტო საშუალებებისთვის სავალდებულო OCTA დაზღვევის შემოწმება.",
          cta: "შემოწმება LTAB-ის მეშვეობით",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "ლიტვა",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "ლიტვაში სამოქალაქო პასუხისმგებლობის სავალდებულო დაზღვევის პოლისის ნამდვილობის შემოწმების სერვისი.",
          cta: "შემოწმება CAB-ის მეშვეობით",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "ახლა ღიაა",
      closedLabel: "ახლა დახურულია",

      openDetails: "ვმუშაობთ {time}-მდე თქვენი დროით",

      closingSoonHoursMinutes:
        "სამუშაო დღის დასრულებამდე დარჩა {hours} სთ {minutes} წთ",
      closingSoonHours: "სამუშაო დღის დასრულებამდე დარჩა {hours} სთ",
      closingSoonMinutes: "სამუშაო დღის დასრულებამდე დარჩა {minutes} წთ",
      closingSoonExtra:
        "შეგიძლიათ განაცხადი ახლავე გაგზავნოთ. თუ საჭირო იქნება ხელით შემოწმება, მას დავამუშავებთ დახურვამდე ან მომდევნო სამუშაო დღეს.",

      closedBeforeOpeningToday:
        "დღეს გავიხსნებით {time}-ზე თქვენი დროით",
      closedUntilTomorrow:
        "ხვალ გავიხსნებით {time}-ზე თქვენი დროით",
      closedUntilMonday:
        "ორშაბათს გავიხსნებით {time}-ზე თქვენი დროით",
      closedExtra:
        "შეგიძლიათ განაცხადი ახლავე გაგზავნოთ — მას სამუშაო საათებში დავამუშავებთ.",

      timezoneNote:
        "დრო ნაჩვენებია თქვენი მოწყობილობის დროის სარტყლის მიხედვით: {timezone}.",
    },
  },
  kk: {
    hero: {
      kicker: "Онлайн рәсімдеу",
      title: "ЕЭА аумағынан тыс жерде тіркелген автокөлікке арналған OC graniczne онлайн",
      lead:
        "Біз Польшаға, ЕО-ға және полисте көрсетілген басқа елдерге кіру үшін трансшекаралық сақтандыру шартын қашықтан рәсімдеуге көмектесеміз.",
      meta: ["ЕЭА-дан тыс автокөліктер үшін", "Тексеруден кейін PDF-полис", "Қамту тек елдер тізімі бойынша"],
      ctaCalc: "Құнын есептеу",
      ctaBuy: "Полисті рәсімдеу",
    },

    calc: {
      title: "Құн калькуляторы",
      badge: "~ 1 минут",
      desc: "қарапайым тарифтік калькулятор",
      termLabel: "Мерзім",
      vehicleLabel: "КҚ түрі",
      termOptions: [
        { value: "30", label: "30 күн" },
        { value: "60", label: "60 күн" },
        { value: "90", label: "90 күн" },
        { value: "180", label: "180 күн" },
        { value: "365", label: "364 күн" },
      ],
      vehicleOptions: [
        { value: "car", label: "Жеңіл автокөліктер" },
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
      desc: "Қадам бойынша: есептеу → деректер → қолмен тексеру → төлем → PDF-полис.",
      steps: [
        { title: "Есептеңіз", text: "Көлік құралының түрін және қолжетімді мерзімді таңдаңыз: 30, 60, 90, 180 немесе 364 күн." },
        { title: "Деректерді толтырыңыз", text: "Сақтанушыны, тіркеу елін, мемлекеттік нөмірді, VIN, КҚ параметрлерін және байланыс деректерін көрсетіңіз." },
        { title: "Тексеруді күтіңіз", text: "Біз құжаттарды, бағытты және таңдалған шарттар бойынша OC graniczne рәсімдеу мүмкіндігін тексереміз." },
        { title: "PDF-полисті алыңыз", text: "Расталғаннан және төлем жасалғаннан кейін полис өтінімде көрсетілген email мекенжайына жіберіледі." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne Еуропалық экономикалық аймақтан тыс жерде тіркелген автокөлікке жарайды, егер жүргізуші Польшаға немесе полис қолданылатын басқа елге қолданыстағы Green Card жоқ кезде кірсе. Полис ЕЭА елдерінде тіркелген автокөліктерге жарамайды. Сапар алдында қажетті елдердің полисте қамтылатын елдер ретінде көрсетілгенін тексеру керек.",
      fit: {
        title: "OC graniczne кімдерге жарайды",
        items: [
          "автокөлік ЕЭА аумағынан тыс жерде тіркелген;",
          "бағытта танылатын қолданыстағы Green Card жоқ;",
          "сапар Польша арқылы немесе полисте көрсетілген елдер арқылы өтеді;",
          "сақтанушы жеке немесе заңды тұлға болуы мүмкін;",
          "жеңіл автокөліктер, жүк көліктері, автобустар, тіркемелер, мотоциклдер және арнайы техника қолжетімді.",
        ],
        links: [
          { href: "/rules", label: "Рәсімдеу ережелері" },
          { href: "/product-info", label: "Өнім туралы құжаттар" },
        ],
      },
      notFit: {
        title: "⚠️ Бұл полис кімдерге жарамайды",
        items: [
          "автокөлік Польшада, Литвада, Латвияда, Германияда немесе басқа ЕЭА елінде тіркелген;",
          "өз автокөлігіңізді қорғау қажет — бұл КАСКО емес;",
          "бағыт полисте көрсетілмеген елдер арқылы өтеді;",
          "полисті өткен күнмен рәсімдеу қажет;",
          "Түркияға, Сербияға немесе қамту тізімінен тыс басқа елдерге сапар үшін, егер бұл елдер құжатта көрсетілмесе, басқа өнім қажет болады.",
        ],
      },
      service: {
        title: "Полисті кім рәсімдейді",
        text: "greencard.agency сервисі OC graniczne шекаралық сақтандыру шартын қашықтан рәсімдеуге көмектеседі. Өтінім онлайн қабылданады, деректер мен құжаттар қолмен тексеріледі, ал дайындалғаннан және төлем жасалғаннан кейін клиент PDF-полисті email арқылы алады.",
        items: [
          "өтінімді онлайн қабылдаймыз;",
          "автокөліктің құжаттары мен деректерін тексереміз;",
          "OC graniczne тіркеу елі мен бағытқа сәйкес келетінін нақтылаймыз;",
          "полисті дайындап, PDF файлын email арқылы жібереміз;",
          "қамтуда қандай елдер көрсетілгенін тексеруге көмектесеміз.",
        ],
      },
      documents: {
        title: "Қандай деректер мен құжаттар қажет",
        text: "Құжаттарды форманы толтырмас бұрын дайындаған дұрыс: оқылатын тіркеу куәлігінсіз нөмірді, VIN-ді, тіркеу елін және автокөлік параметрлерін дұрыс тексеру мүмкін емес.",
        items: [
          "КҚ тіркеу куәлігі / техникалық паспорт;",
          "сақтанушының паспорты немесе ID құжаты;",
          "мемлекеттік нөмір және VIN;",
          "маркасы, моделі, шығарылған жылы;",
          "автокөліктің тіркеу елі және КҚ түрі;",
          "қозғалтқыш көлемі мен қуаты;",
          "сақтандырудың басталу күні және мерзімі;",
          "байланыс үшін email және телефон;",
          "егер бағыт стандартты емес болса немесе 30–364 күн аралығында нақты қамту кезеңі қажет болса, түсініктеме.",
        ],
        link: { href: "/product-info", label: "Өнім туралы ақпаратты ашу" },
      },
      price: {
        title: "OC graniczne қанша тұрады",
        text: "Құны көлік құралының түрі мен сақтандыру мерзіміне байланысты. Калькуляторда таңдалған параметрлер бойынша болжамды баға көрсетіледі. Рәсімдеудің түпкілікті мүмкіндігі мен құны автокөлік деректері мен құжаттары тексерілгеннен кейін расталады.",
        items: [
          "қолжетімді мерзімдер: 30, 60, 90, 180 немесе 364 күн;",
          "тариф КҚ санатына байланысты;",
          "баға төлемге дейін расталады;",
          "деректер жеткіліксіз болса, менеджер полис шығарылғанға дейін оларды нақтылайды.",
        ],
      },
      timing: {
        title: "Рәсімдеу мерзімі және қолмен тексеру",
        text: "Егер барлық деректер мен құжаттар дұрыс болса, рәсімдеу жұмыс уақытында шамамен 10–20 минут алуы мүмкін. Егер қолмен тексеру, келісу немесе деректерді түзету қажет болса, рәсімдеу көбірек уақыт алады. Өтінімді сапар басталғанға дейін 1–2 жұмыс күні бұрын берген дұрыс. Полис өткен күнмен рәсімделмейді.",
      },
      notCovered: {
        title: "OC graniczne қай жерде қолданылмайды",
        text: "Полис құжатта қамтылатын елдер ретінде көрсетілмеген елдерде қолданылмайды. Мысалы, егер полисте Түркия, Сербия, Черногория, Солтүстік Македония, Босния және Герцеговина немесе бағыттағы басқа ел көрсетілмесе, сапардың мұндай бөлігі үшін бұл полисті пайдалануға болмайды. Төлем жасамас бұрын және жолға шығар алдында құжаттағы қамту елдерінің тізімін тексеріңіз.",
        link: { href: "#coverage", label: "Қамту елдерін қарау" },
      },
      checkPolicy: {
        title: "Сапар алдында полисте нені тексеру керек",
        text: "Егер полисте қате болса, оны пайдаланбаңыз. PDF ішіндегі деректер автокөліктің тіркеу құжатымен және мәлімделген сапар шарттарымен сәйкес келуі керек.",
        items: [
          "мемлекеттік нөмір;",
          "VIN;",
          "тіркеу елі;",
          "маркасы және моделі;",
          "басталу және аяқталу күні;",
          "КҚ түрі;",
          "қамту елдері;",
          "сақтанушының деректері.",
        ],
        link: { href: "#verify", label: "Полисті тексеру" },
      },
    },

    why: {
      title: "Сервис не істейді",
      desc: "OC graniczne рәсімдеу процесіндегі нақты әрекеттер.",
      items: [
        { title: "Өтінімді онлайн қабылдаймыз", text: "Сақтанушы мен автокөлік деректері кеңсеге келмей-ақ форма арқылы жіберіледі." },
        { title: "Құжаттарды тексереміз", text: "VIN, мемлекеттік нөмір, тіркеу елі, КҚ түрі және сақтандыру мерзімін салыстырып тексереміз." },
        { title: "Қолданылуын нақтылаймыз", text: "OC graniczne тіркеу елі мен бағытқа сәйкес келетінін тексереміз." },
        { title: "PDF жібереміз", text: "Дайындап, төлем жасалғаннан кейін полисті email арқылы жібереміз және қамтуды тексеруге көмектесеміз." },
      ],
    },

    form: {
      title: "Өтінім формасы",
      desc: "Деректерді толтырыңыз — біз полисті дайындап, төлем деректерін жібереміз.",
    },

    faq: {
      title: "FAQ",
      desc: "Жиі қойылатын сұрақтарға қысқа жауаптар.",
      items: [
        { q: "OC graniczne онлайн рәсімдеуге бола ма?", a: "Иә. Өтінімді онлайн жіберуге болады. Деректер қолмен тексеріледі, дайындалғаннан, расталғаннан және төлем жасалғаннан кейін PDF-полис email арқылы жіберіледі." },
        { q: "Бұл полис кімдерге жарайды?", a: "Полис ЕЭА аумағынан тыс жерде тіркелген автокөлікке жарайды, егер сапар Польша немесе полисте көрсетілген басқа ел арқылы өтсе және қолданыстағы Green Card болмаса." },
        { q: "OC graniczne Польшадағы немесе басқа ЕЭА еліндегі автокөлікке жарай ма?", a: "Жоқ. Польшада, Литвада, Латвияда, Германияда және басқа ЕЭА елдерінде тіркелген автокөліктер үшін бұл өнім жарамайды." },
        { q: "Полис қай елдерде қолданылады?", a: "Полис тек құжатта қамтылатын елдер ретінде көрсетілген елдерде қолданылады. Сапар алдында бағыттағы барлық елдер қамтуға енгізілгенін тексеріңіз." },
        { q: "Полис Түркияда немесе Сербияда қолданыла ма?", a: "Жоқ, егер Түркия немесе Сербия құжатта қамтылатын елдер ретінде көрсетілмесе. Мұндай елдер үшін жергілікті шекаралық сақтандыру немесе басқа өнім қажет болуы мүмкін." },
        { q: "Полисті сапар күні рәсімдеуге бола ма?", a: "Кейде бұл мүмкін, егер барлық деректер мен құжаттар дұрыс болса. Егер қолмен тексеру, келісу немесе деректерді түзету қажет болса, рәсімдеу көбірек уақыт алады. Өтінімді сапарға дейін 1–2 жұмыс күні бұрын берген дұрыс." },
        { q: "OC graniczne өткен күнмен рәсімдеуге бола ма?", a: "Жоқ. Полис өткен күнмен рәсімделмейді. Қолданылу басталу күні рәсімдеу кезінде көрсетіледі, ал полисті тек құжатта көрсетілген қолданылу мерзімі шегінде пайдалануға болады." },
        { q: "Қандай құжаттар қажет?", a: "КҚ тіркеу куәлігі / техникалық паспорт, сақтанушының паспорты немесе ID құжаты, мемлекеттік нөмір, VIN, маркасы, моделі, шығарылған жылы, тіркеу елі, КҚ түрі, сақтандырудың басталу күні мен мерзімі, email және телефон қажет." },
        { q: "Сертификатта не көрсетіледі?", a: "Құжатта автокөлік деректері, қолданылу мерзімі, тіркеу елі, КҚ түрі, сақтанушы деректері және қамту елдерінің тізімі көрсетіледі." },
        { q: "Полисте қате болса не істеу керек?", a: "Қате деректері бар полисті пайдаланбаңыз. Түзету мүмкіндігін тексеру үшін сапар алдында бізбен байланысыңыз. Кейбір қателер қайта рәсімдеуді талап етуі мүмкін." },
        { q: "Полисті PDF түрінде аламын ба?", a: "Иә. Деректер тексеріліп, полис дайындалып, төлем жасалғаннан кейін PDF-құжат өтінімде көрсетілген email мекенжайына жіберіледі." },
        { q: "Картамен төлеуге бола ма?", a: "Қазіргі кезеңде SWIFT, SEPA және P2P аударымдары, сондай-ақ BLIK төлемі қолжетімді. Полис дайындалғаннан кейін сіз төлем деректерін аласыз." },
        { q: "Бұл «жасыл карта» сияқты ма?", a: "Жоқ. OC graniczne және Green Card — рәсімдеу ережелері, қолданылуы және аумақтық қамтуы әртүрлі бөлек өнімдер." },
        { q: "Бұл қандай сақтандыру?", a: "Бұл механикалық көлік құралы иесінің немесе пайдаланушысының азаматтық-құқықтық жауапкершілігін міндетті сақтандыру, ол тек полисте көрсетілген елдерде қолданылады." },
        {
          q: "Сақтандыру нені қамтиды?",
          a: `Қамту мыналарды қамтиды:
            • Зардап шеккендердің өміріне немесе денсаулығына келтірілген зиян;
            • Үшінші тұлғаларға келтірілген мүліктік зиян.
            
            Ең төменгі кепілдендірілген сомалар:
            •  29 876 400 PLN — дене жарақаттары;
            •  6 021 600 PLN — мүліктік зиян.`
        },
        {
          q: "Сақтандыру нені қамтымайды?",
          a: `•  велосипедтер мен механикалық емес КҚ;
              •  автокөлік иесіне келтірілген зиян;
              •  қоршаған ортаға келтірілген зиян.`
        },
        {
          q: "Қандай жағдайларда регресс болуы мүмкін?",
          a: `Сақтандыру компаниясы төленген соманы өндіріп алуға құқылы, егер жүргізуші:
            • қасақана әрекет етсе;
            • мас күйде немесе есірткі әсерінде болса;
            • жүргізу құқығы болмаса;
            • ЖКО орнынан кетіп қалса;
            • ұрланған автокөлікті пайдаланса.`
        },
        {
          q: "Полис қашан басталады және қашан аяқталады?",
          a: `Басталуы: полис берілген күн.

              Қолжетімді мерзімдер: 30, 60, 90, 180 немесе 364 күн.

              Тоқтатылуы:
              • мерзімнің аяқталуы;
              • автокөліктің ұрлануы немесе есептен шығарылуы;
              • тіркеуден шығарылуы.`
        },
      ],
    },

    verify: {
      title: "Полистің жарамдылығын тексеру",
      lead:
        "Егер полисіңіздің шынымен белсенді екеніне көз жеткізгіңіз келсе, сақтандыру бюроларының ресми дерекқорларын пайдаланыңыз. Төменде Польша, Латвия және Литва сервистеріне сілтемелер берілген.",
      items: [
        {
          code: "PL",
          country: "Польша",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG ресми дерекқорында тіркеу нөмірі немесе VIN бойынша OC полисінің жарамдылығын тексеру.",
          cta: "UFG сайтына өту",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Латвия",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Латвияда тіркелген көлік құралдары үшін міндетті OCTA сақтандыруын тексеру.",
          cta: "LTAB арқылы тексеру",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Литвада азаматтық-құқықтық жауапкершілікті міндетті сақтандыру полисінің жарамдылығын тексеру сервисі.",
          cta: "CAB арқылы тексеру",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Қазір ашық",
      closedLabel: "Қазір жабық",

      openDetails: "сіздің уақытыңыз бойынша {time} дейін жұмыс істейміз",

      closingSoonHoursMinutes:
        "жұмыс күнінің аяқталуына {hours} сағ {minutes} мин қалды",
      closingSoonHours: "жұмыс күнінің аяқталуына {hours} сағ қалды",
      closingSoonMinutes: "жұмыс күнінің аяқталуына {minutes} мин қалды",
      closingSoonExtra:
        "Өтінімді қазір жібере аласыз. Егер қолмен тексеру қажет болса, біз оны жабылғанға дейін немесе келесі жұмыс күні өңдейміз.",

      closedBeforeOpeningToday:
        "бүгін сіздің уақытыңыз бойынша {time} ашыламыз",
      closedUntilTomorrow:
        "ертең сіздің уақытыңыз бойынша {time} ашыламыз",
      closedUntilMonday:
        "дүйсенбі күні сіздің уақытыңыз бойынша {time} ашыламыз",
      closedExtra:
        "Өтінімді қазір жібере аласыз — біз оны жұмыс уақытында өңдейміз.",

      timezoneNote:
        "Уақыт құрылғыңыздың уақыт белдеуіне сәйкес көрсетілген: {timezone}.",
    },
  },
  tr: {
    hero: {
      kicker: "Online düzenleme",
      title: "AEA dışında kayıtlı bir araç için OC graniczne online",
      lead:
        "Polonya’ya, AB’ye ve poliçede belirtilen diğer ülkelere giriş için sınır ötesi sigorta sözleşmesini uzaktan düzenlemenize yardımcı oluyoruz.",
      meta: ["AEA dışındaki araçlar için", "Kontrolden sonra PDF poliçe", "Teminat yalnızca ülke listesine göre"],
      ctaCalc: "Ücreti hesapla",
      ctaBuy: "Poliçeyi düzenle",
    },

    calc: {
      title: "Ücret hesaplayıcı",
      badge: "~ 1 dakika",
      desc: "basit tarife hesaplayıcı",
      termLabel: "Süre",
      vehicleLabel: "Araç türü",
      termOptions: [
        { value: "30", label: "30 gün" },
        { value: "60", label: "60 gün" },
        { value: "90", label: "90 gün" },
        { value: "180", label: "180 gün" },
        { value: "365", label: "364 gün" },
      ],
      vehicleOptions: [
        { value: "car", label: "Binek araçlar" },
        { value: "van", label: "Otobüsler" },
        { value: "truck", label: "Kamyonlar" },
        { value: "trailer", label: "Römorklar" },
        { value: "special", label: "Özel amaçlı araçlar" },
      ],
      button: "Hesapla",
      note: "note",
    },

    process: {
      title: "Nasıl çalışır",
      desc: "Adım adım: hesaplama → bilgiler → manuel kontrol → ödeme → PDF poliçe.",
      steps: [
        { title: "Hesaplayın", text: "Araç türünü ve mevcut süreyi seçin: 30, 60, 90, 180 veya 364 gün." },
        { title: "Bilgileri doldurun", text: "Sigorta ettireni, kayıt ülkesini, plaka numarasını, VIN’i, araç özelliklerini ve iletişim bilgilerini belirtin." },
        { title: "Kontrolü bekleyin", text: "Belgeleri, güzergâhı ve seçilen koşullar için OC graniczne düzenleme imkânını kontrol edeceğiz." },
        { title: "PDF poliçeyi alın", text: "Onay ve ödeme sonrasında poliçe, başvuruda belirtilen email adresine gönderilir." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne, sürücünün geçerli bir Green Card olmadan Polonya’ya veya poliçenin geçerli olduğu başka bir ülkeye girmesi halinde, Avrupa Ekonomik Alanı dışında kayıtlı araçlar için uygundur. Poliçe, AEA ülkelerinde kayıtlı araçlar için uygun değildir. Yolculuktan önce gerekli ülkelerin poliçede teminat kapsamındaki ülkeler olarak belirtildiğini kontrol etmek gerekir.",
      fit: {
        title: "OC graniczne kimler için uygundur",
        items: [
          "araç AEA dışında kayıtlıdır;",
          "güzergâhta kabul edilen geçerli bir Green Card yoktur;",
          "yolculuk Polonya’dan veya poliçede belirtilen ülkelerden geçmektedir;",
          "sigorta ettiren gerçek kişi veya tüzel kişi olabilir;",
          "binek araçlar, kamyonlar, otobüsler, römorklar, motosikletler ve özel amaçlı araçlar için düzenlenebilir.",
        ],
        links: [
          { href: "/rules", label: "Düzenleme kuralları" },
          { href: "/product-info", label: "Ürün belgeleri" },
        ],
      },
      notFit: {
        title: "⚠️ Bu poliçe kimler için uygun değildir",
        items: [
          "araç Polonya, Litvanya, Letonya, Almanya veya başka bir AEA ülkesinde kayıtlıdır;",
          "kendi aracınız için koruma gereklidir — bu kasko değildir;",
          "güzergâh poliçede belirtilmeyen ülkelerden geçmektedir;",
          "poliçeyi geriye dönük tarihle düzenlemek gerekir;",
          "Türkiye, Sırbistan veya teminat listesi dışındaki diğer ülkelere seyahat için, bu ülkeler belgede belirtilmemişse başka bir ürün gerekir.",
        ],
      },
      service: {
        title: "Poliçeyi kim düzenler",
        text: "greencard.agency servisi, OC graniczne sınır sigortası sözleşmesini uzaktan düzenlemeye yardımcı olur. Başvuru online alınır, bilgiler ve belgeler manuel olarak kontrol edilir; hazırlık ve ödeme sonrasında müşteri PDF poliçeyi email yoluyla alır.",
        items: [
          "başvuruyu online alıyoruz;",
          "araç belgelerini ve bilgilerini kontrol ediyoruz;",
          "OC graniczne’nin kayıt ülkesine ve güzergâha uygun olup olmadığını netleştiriyoruz;",
          "poliçeyi hazırlıyor ve PDF’i email ile gönderiyoruz;",
          "teminatta hangi ülkelerin belirtildiğini kontrol etmenize yardımcı oluyoruz.",
        ],
      },
      documents: {
        title: "Hangi bilgiler ve belgeler gereklidir",
        text: "Belgeleri formu doldurmadan önce hazırlamak daha iyidir: okunabilir bir tescil belgesi olmadan plaka numarasını, VIN’i, kayıt ülkesini ve araç özelliklerini doğru şekilde kontrol etmek mümkün değildir.",
        items: [
          "araç tescil belgesi / teknik pasaport;",
          "sigorta ettirenin pasaportu veya kimlik belgesi;",
          "plaka numarası ve VIN;",
          "marka, model, üretim yılı;",
          "aracın kayıt ülkesi ve araç türü;",
          "motor hacmi ve gücü;",
          "sigorta başlangıç tarihi ve süresi;",
          "iletişim için email ve telefon;",
          "güzergâh standart dışıysa veya 30–364 gün aralığında kesin bir teminat dönemi gerekiyorsa yorum.",
        ],
        link: { href: "/product-info", label: "Ürün bilgilerini aç" },
      },
      price: {
        title: "OC graniczne ne kadar tutar",
        text: "Ücret, aracın türüne ve sigorta süresine bağlıdır. Hesaplayıcıda seçilen parametreler için yaklaşık fiyat gösterilir. Düzenleme imkânı ve nihai ücret, araç bilgileri ve belgeler kontrol edildikten sonra onaylanır.",
        items: [
          "mevcut süreler: 30, 60, 90, 180 veya 364 gün;",
          "tarife araç kategorisine bağlıdır;",
          "fiyat ödemeden önce onaylanır;",
          "bilgiler yetersizse, poliçe düzenlenmeden önce yönetici bunları netleştirir.",
        ],
      },
      timing: {
        title: "Düzenleme süresi ve manuel kontrol",
        text: "Tüm bilgiler ve belgeler doğruysa, düzenleme çalışma saatleri içinde yaklaşık 10–20 dakika sürebilir. Manuel kontrol, onay veya bilgi düzeltmesi gerekiyorsa düzenleme daha uzun sürer. Başvuruyu yolculuk başlamadan 1–2 iş günü önce yapmak daha iyidir. Poliçe geriye dönük tarihle düzenlenmez.",
      },
      notCovered: {
        title: "OC graniczne nerede geçerli değildir",
        text: "Poliçe, belgede teminat kapsamındaki ülkeler olarak belirtilmeyen ülkelerde geçerli değildir. Örneğin poliçede Türkiye, Sırbistan, Karadağ, Kuzey Makedonya, Bosna-Hersek veya güzergâhtaki başka bir ülke belirtilmemişse, yolculuğun bu bölümü için bu poliçe kullanılamaz. Ödemeden önce ve yola çıkmadan önce belgedeki teminat ülkeleri listesini kontrol edin.",
        link: { href: "#coverage", label: "Teminat ülkelerini görüntüle" },
      },
      checkPolicy: {
        title: "Yolculuktan önce poliçede neleri kontrol etmelisiniz",
        text: "Poliçede hata varsa poliçeyi kullanmayın. PDF’teki bilgiler, aracın tescil belgesi ve beyan edilen yolculuk koşullarıyla aynı olmalıdır.",
        items: [
          "plaka numarası;",
          "VIN;",
          "kayıt ülkesi;",
          "marka ve model;",
          "başlangıç ve bitiş tarihi;",
          "araç türü;",
          "teminat ülkeleri;",
          "sigorta ettiren bilgileri.",
        ],
        link: { href: "#verify", label: "Poliçeyi kontrol et" },
      },
    },

    why: {
      title: "Servis ne yapar",
      desc: "OC graniczne düzenleme sürecindeki somut işlemler.",
      items: [
        { title: "Başvuruyu online alıyoruz", text: "Sigorta ettiren ve araç bilgileri, ofise gelmeden form üzerinden iletilir." },
        { title: "Belgeleri kontrol ediyoruz", text: "VIN’i, plaka numarasını, kayıt ülkesini, araç türünü ve sigorta süresini karşılaştırıp kontrol ediyoruz." },
        { title: "Uygunluğu netleştiriyoruz", text: "OC graniczne’nin kayıt ülkesine ve güzergâha uygun olup olmadığını kontrol ediyoruz." },
        { title: "PDF gönderiyoruz", text: "Hazırlık ve ödeme sonrasında poliçeyi email ile gönderiyor ve teminatı kontrol etmenize yardımcı oluyoruz." },
      ],
    },

    form: {
      title: "Başvuru formu",
      desc: "Bilgileri doldurun — poliçeyi hazırlayıp ödeme bilgilerini göndereceğiz.",
    },

    faq: {
      title: "FAQ",
      desc: "Sık sorulan sorulara kısa cevaplar.",
      items: [
        { q: "OC graniczne online düzenlenebilir mi?", a: "Evet. Başvuru online gönderilebilir. Bilgiler manuel olarak kontrol edilir; hazırlık, onay ve ödeme sonrasında PDF poliçe email ile gönderilir." },
        { q: "Bu poliçe kimler için uygundur?", a: "Poliçe, yolculuk Polonya’dan veya poliçede belirtilen başka bir ülkeden geçiyorsa ve geçerli bir Green Card yoksa, AEA dışında kayıtlı araçlar için uygundur." },
        { q: "OC graniczne Polonya veya başka bir AEA ülkesinden bir araç için uygun mudur?", a: "Hayır. Polonya, Litvanya, Letonya, Almanya ve diğer AEA ülkelerinde kayıtlı araçlar için bu ürün uygun değildir." },
        { q: "Poliçe hangi ülkelerde geçerlidir?", a: "Poliçe yalnızca belgede teminat kapsamında belirtilen ülkelerde geçerlidir. Yolculuktan önce güzergâhtaki tüm ülkelerin teminata dahil edildiğini kontrol edin." },
        { q: "Poliçe Türkiye veya Sırbistan’da geçerli midir?", a: "Hayır, Türkiye veya Sırbistan belgede teminat kapsamındaki ülkeler olarak belirtilmemişse geçerli değildir. Bu ülkeler için yerel sınır sigortası veya başka bir ürün gerekebilir." },
        { q: "Poliçe yolculuk günü düzenlenebilir mi?", a: "Tüm bilgiler ve belgeler doğruysa bu bazen mümkündür. Manuel kontrol, onay veya bilgi düzeltmesi gerekiyorsa düzenleme daha uzun sürer. Başvuruyu yolculuktan 1–2 iş günü önce yapmak daha iyidir." },
        { q: "OC graniczne geriye dönük tarihle düzenlenebilir mi?", a: "Hayır. Poliçe geriye dönük tarihle düzenlenmez. Başlangıç tarihi düzenleme sırasında belirtilir ve poliçe yalnızca belgede belirtilen geçerlilik süresi içinde kullanılabilir." },
        { q: "Hangi belgeler gereklidir?", a: "Araç tescil belgesi / teknik pasaport, sigorta ettirenin pasaportu veya kimlik belgesi, plaka numarası, VIN, marka, model, üretim yılı, kayıt ülkesi, araç türü, sigorta başlangıç tarihi ve süresi, email ve telefon gereklidir." },
        { q: "Sertifikada ne belirtilir?", a: "Belgelerde araç bilgileri, geçerlilik süresi, kayıt ülkesi, araç türü, sigorta ettiren bilgileri ve teminat ülkeleri listesi belirtilir." },
        { q: "Poliçede hata varsa ne yapılmalı?", a: "Hatalı bilgiler içeren poliçeyi kullanmayın. Düzeltme imkânını kontrol etmek için yolculuktan önce bizimle iletişime geçin. Bazı hatalar poliçenin yeniden düzenlenmesini gerektirebilir." },
        { q: "Poliçeyi PDF olarak alacak mıyım?", a: "Evet. Bilgiler kontrol edildikten, poliçe hazırlandıktan ve ödeme yapıldıktan sonra PDF belge başvuruda belirtilen email adresine gönderilir." },
        { q: "Kartla ödeme yapılabilir mi?", a: "Bu aşamada SWIFT, SEPA ve P2P transferleri ile BLIK ödemesi mevcuttur. Poliçe hazırlandıktan sonra ödeme bilgilerini alırsınız." },
        { q: "Bu “yeşil kart” ile aynı şey mi?", a: "Hayır. OC graniczne ve Green Card; düzenleme kuralları, uygulanabilirlik ve geçerlilik bölgesi farklı olan ayrı ürünlerdir." },
        { q: "Bu ne tür bir sigortadır?", a: "Bu, motorlu taşıt sahibinin veya kullanıcısının zorunlu üçüncü şahıs sorumluluk sigortasıdır ve yalnızca poliçede belirtilen ülkelerde geçerlidir." },
        {
          q: "Sigorta neleri kapsar?",
          a: `Teminat şunları kapsar:
            • Mağdurların yaşamına veya sağlığına verilen zarar;
            • Üçüncü kişilere verilen maddi zarar.
            
            Asgari garanti tutarları:
            •  29 876 400 PLN — bedensel zararlar;
            •  6 021 600 PLN — maddi zarar.`
        },
        {
          q: "Sigorta neleri kapsamaz?",
          a: `•  bisikletler ve motorlu olmayan araçlar;
              •  araç sahibinin uğradığı zarar;
              •  çevreye verilen zarar.`
        },
        {
          q: "Hangi durumlarda rücu mümkündür?",
          a: `Sigorta şirketi, ödenen tutarı geri talep etme hakkına sahiptir; eğer sürücü:
            • kasıtlı hareket ettiyse;
            • alkollü veya uyuşturucu etkisi altındaysa;
            • sürücü belgesine sahip değilse;
            • kaza yerinden kaçtıysa;
            • çalıntı bir araç kullandıysa.`
        },
        {
          q: "Poliçe ne zaman başlar ve sona erer?",
          a: `Başlangıç: poliçenin düzenlenme tarihi.

              Mevcut süreler: 30, 60, 90, 180 veya 364 gün.

              Sona erme:
              • sürenin dolması;
              • aracın çalınması veya trafikten düşürülmesi;
              • kaydın silinmesi.`
        },
      ],
    },

    verify: {
      title: "Poliçe geçerliliğini kontrol etme",
      lead:
        "Poliçenizin gerçekten aktif olduğundan emin olmak istiyorsanız, sigorta bürolarının resmi veri tabanlarını kullanın. Aşağıda Polonya, Letonya ve Litvanya servislerine bağlantılar yer almaktadır.",
      items: [
        {
          code: "PL",
          country: "Polonya",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG resmi veri tabanında plaka numarası veya VIN ile OC poliçesinin geçerliliğini kontrol etme.",
          cta: "UFG sitesine git",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letonya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Letonya’da kayıtlı araçlar için zorunlu OCTA sigortasını kontrol etme.",
          cta: "LTAB üzerinden kontrol et",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litvanya",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Litvanya’da zorunlu üçüncü şahıs sorumluluk sigortası poliçesinin geçerliliğini kontrol etme servisi.",
          cta: "CAB üzerinden kontrol et",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Şu anda açık",
      closedLabel: "Şu anda kapalı",

      openDetails: "yerel saatinize göre {time}’a kadar çalışıyoruz",

      closingSoonHoursMinutes:
        "iş gününün bitmesine {hours} sa {minutes} dk kaldı",
      closingSoonHours: "iş gününün bitmesine {hours} sa kaldı",
      closingSoonMinutes: "iş gününün bitmesine {minutes} dk kaldı",
      closingSoonExtra:
        "Başvurunuzu şimdi gönderebilirsiniz. Manuel kontrol gerekirse, kapanıştan önce veya bir sonraki iş gününde işleme alacağız.",

      closedBeforeOpeningToday:
        "bugün yerel saatinize göre {time}’da açılacağız",
      closedUntilTomorrow:
        "yarın yerel saatinize göre {time}’da açılacağız",
      closedUntilMonday:
        "pazartesi günü yerel saatinize göre {time}’da açılacağız",
      closedExtra:
        "Başvurunuzu şimdi gönderebilirsiniz — çalışma saatleri içinde işleme alacağız.",

      timezoneNote:
        "Saat, cihazınızın saat dilimine göre gösterilmektedir: {timezone}.",
    },
  },
  fa: {
    hero: {
      kicker: "صدور آنلاین",
      title: "OC graniczne آنلاین برای خودروی ثبت‌شده خارج از منطقه اقتصادی اروپا",
      lead:
        "ما به شما کمک می‌کنیم قرارداد بیمه مرزی را برای ورود به لهستان، اتحادیه اروپا و سایر کشورهایی که در بیمه‌نامه ذکر شده‌اند، از راه دور تنظیم کنید.",
      meta: ["برای خودروهای خارج از منطقه اقتصادی اروپا", "بیمه‌نامه PDF پس از بررسی", "پوشش فقط بر اساس فهرست کشورها"],
      ctaCalc: "محاسبه هزینه",
      ctaBuy: "صدور بیمه‌نامه",
    },

    calc: {
      title: "محاسبه‌گر هزینه",
      badge: "~ ۱ دقیقه",
      desc: "محاسبه‌گر ساده تعرفه",
      termLabel: "مدت",
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
        { value: "truck", label: "کامیون‌ها" },
        { value: "trailer", label: "تریلرها" },
        { value: "special", label: "ماشین‌آلات ویژه" },
      ],
      button: "محاسبه",
      note: "note",
    },

    process: {
      title: "این فرایند چگونه انجام می‌شود",
      desc: "مرحله به مرحله: محاسبه → اطلاعات → بررسی دستی → پرداخت → بیمه‌نامه PDF.",
      steps: [
        { title: "محاسبه کنید", text: "نوع وسیله نقلیه و مدت قابل انتخاب را تعیین کنید: ۳۰، ۶۰، ۹۰، ۱۸۰ یا ۳۶۴ روز." },
        { title: "اطلاعات را تکمیل کنید", text: "بیمه‌گذار، کشور ثبت، شماره پلاک، VIN، مشخصات وسیله نقلیه و اطلاعات تماس را وارد کنید." },
        { title: "منتظر بررسی بمانید", text: "ما مدارک، مسیر و امکان صدور OC graniczne را برای شرایط انتخاب‌شده بررسی می‌کنیم." },
        { title: "بیمه‌نامه PDF را دریافت کنید", text: "پس از تأیید و پرداخت، بیمه‌نامه به ایمیلی که در درخواست وارد شده ارسال می‌شود." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne برای خودرویی مناسب است که خارج از منطقه اقتصادی اروپا ثبت شده باشد، در صورتی که راننده بدون Green Card معتبر وارد لهستان یا کشور دیگری شود که بیمه‌نامه در آن اعتبار دارد. این بیمه‌نامه برای خودروهای ثبت‌شده در کشورهای منطقه اقتصادی اروپا مناسب نیست. پیش از سفر باید بررسی کنید که کشورهای موردنیاز در بیمه‌نامه به‌عنوان کشورهای تحت پوشش ذکر شده باشند.",
      fit: {
        title: "OC graniczne برای چه کسانی مناسب است",
        items: [
          "خودرو خارج از منطقه اقتصادی اروپا ثبت شده است؛",
          "Green Card معتبری که در مسیر پذیرفته شود وجود ندارد؛",
          "سفر از لهستان یا کشورهای ذکرشده در بیمه‌نامه عبور می‌کند؛",
          "بیمه‌گذار می‌تواند شخص حقیقی یا شخص حقوقی باشد؛",
          "خودروهای سواری، کامیون‌ها، اتوبوس‌ها، تریلرها، موتورسیکلت‌ها و ماشین‌آلات ویژه قابل پذیرش هستند.",
        ],
        links: [
          { href: "/rules", label: "قوانین صدور" },
          { href: "/product-info", label: "مدارک مربوط به محصول" },
        ],
      },
      notFit: {
        title: "⚠️ این بیمه‌نامه برای چه کسانی مناسب نیست",
        items: [
          "خودرو در لهستان، لیتوانی، لتونی، آلمان یا کشور دیگری از منطقه اقتصادی اروپا ثبت شده است؛",
          "نیاز به پوشش برای خود خودرو دارید — این بیمه کاسکو نیست؛",
          "مسیر از کشورهایی عبور می‌کند که در بیمه‌نامه ذکر نشده‌اند؛",
          "نیاز به صدور بیمه‌نامه با تاریخ گذشته دارید؛",
          "برای سفر به ترکیه، صربستان یا سایر کشورهای خارج از فهرست پوشش، اگر این کشورها در سند ذکر نشده باشند، محصول دیگری لازم است.",
        ],
      },
      service: {
        title: "چه کسی بیمه‌نامه را صادر می‌کند",
        text: "سرویس greencard.agency به شما کمک می‌کند قرارداد بیمه مرزی OC graniczne را از راه دور تنظیم کنید. درخواست به‌صورت آنلاین پذیرفته می‌شود، اطلاعات و مدارک به‌صورت دستی بررسی می‌شوند و پس از آماده‌سازی و پرداخت، مشتری بیمه‌نامه PDF را از طریق email دریافت می‌کند.",
        items: [
          "درخواست را آنلاین دریافت می‌کنیم؛",
          "مدارک و اطلاعات خودرو را بررسی می‌کنیم؛",
          "بررسی می‌کنیم که آیا OC graniczne با کشور ثبت و مسیر سفر سازگار است یا نه؛",
          "بیمه‌نامه را آماده می‌کنیم و PDF را به email ارسال می‌کنیم؛",
          "کمک می‌کنیم بررسی کنید چه کشورهایی در پوشش ذکر شده‌اند.",
        ],
      },
      documents: {
        title: "چه اطلاعات و مدارکی لازم است",
        text: "بهتر است مدارک را پیش از تکمیل فرم آماده کنید: بدون گواهی ثبت خوانا، بررسی صحیح شماره پلاک، VIN، کشور ثبت و مشخصات خودرو ممکن نیست.",
        items: [
          "گواهی ثبت وسیله نقلیه / گذرنامه فنی؛",
          "گذرنامه یا ID بیمه‌گذار؛",
          "شماره پلاک و VIN؛",
          "برند، مدل، سال ساخت؛",
          "کشور ثبت خودرو و نوع وسیله نقلیه؛",
          "حجم و قدرت موتور؛",
          "تاریخ شروع و مدت بیمه؛",
          "email و شماره تلفن برای تماس؛",
          "توضیح، اگر مسیر غیرمعمول است یا دوره دقیق پوشش در بازه ۳۰–۳۶۴ روز لازم است.",
        ],
        link: { href: "/product-info", label: "باز کردن اطلاعات محصول" },
      },
      price: {
        title: "OC graniczne چقدر هزینه دارد",
        text: "هزینه به نوع وسیله نقلیه و مدت بیمه بستگی دارد. در محاسبه‌گر، قیمت تقریبی برای پارامترهای انتخاب‌شده نشان داده می‌شود. امکان نهایی صدور و هزینه پس از بررسی اطلاعات خودرو و مدارک تأیید می‌شود.",
        items: [
          "مدت‌های قابل انتخاب: ۳۰، ۶۰، ۹۰، ۱۸۰ یا ۳۶۴ روز؛",
          "تعرفه به دسته‌بندی وسیله نقلیه بستگی دارد؛",
          "قیمت پیش از پرداخت تأیید می‌شود؛",
          "اگر اطلاعات کافی نباشد، مدیر پیش از صدور بیمه‌نامه آن‌ها را уточیح خواهد کرد.",
        ],
      },
      timing: {
        title: "مدت زمان صدور و بررسی دستی",
        text: "اگر همه اطلاعات و مدارک درست باشد، صدور در ساعات کاری می‌تواند حدود ۱۰–۲۰ دقیقه طول بکشد. اگر بررسی دستی، هماهنگی یا اصلاح اطلاعات لازم باشد، صدور زمان بیشتری می‌برد. بهتر است درخواست را ۱–۲ روز کاری پیش از شروع سفر ارسال کنید. بیمه‌نامه با تاریخ گذشته صادر نمی‌شود.",
      },
      notCovered: {
        title: "OC graniczne در کجا اعتبار ندارد",
        text: "بیمه‌نامه در کشورهایی که در سند به‌عنوان کشورهای تحت پوشش ذکر نشده‌اند اعتبار ندارد. برای مثال، اگر در بیمه‌نامه ترکیه، صربستان، مونته‌نگرو، مقدونیه شمالی، بوسنی و هرزگوین یا کشور دیگری در مسیر ذکر نشده باشد، نمی‌توان از این بیمه‌نامه برای آن بخش از سفر استفاده کرد. پیش از پرداخت و پیش از حرکت، فهرست کشورهای تحت پوشش را در سند بررسی کنید.",
        link: { href: "#coverage", label: "مشاهده کشورهای تحت پوشش" },
      },
      checkPolicy: {
        title: "پیش از سفر چه مواردی را در بیمه‌نامه بررسی کنید",
        text: "اگر در بیمه‌نامه خطایی وجود دارد، از آن استفاده نکنید. اطلاعات در PDF باید با سند ثبت خودرو و شرایط اعلام‌شده سفر مطابقت داشته باشد.",
        items: [
          "شماره پلاک؛",
          "VIN؛",
          "کشور ثبت؛",
          "برند و مدل؛",
          "تاریخ شروع و پایان؛",
          "نوع وسیله نقلیه؛",
          "کشورهای تحت پوشش؛",
          "اطلاعات بیمه‌گذار.",
        ],
        link: { href: "#verify", label: "بررسی بیمه‌نامه" },
      },
    },

    why: {
      title: "این سرویس چه کاری انجام می‌دهد",
      desc: "اقدامات مشخص در فرایند صدور OC graniczne.",
      items: [
        { title: "درخواست را آنلاین دریافت می‌کنیم", text: "اطلاعات بیمه‌گذار و خودرو از طریق فرم ارسال می‌شود، بدون نیاز به مراجعه به دفتر." },
        { title: "مدارک را بررسی می‌کنیم", text: "VIN، شماره پلاک، کشور ثبت، نوع وسیله نقلیه و مدت بیمه را تطبیق می‌دهیم." },
        { title: "قابل‌اعمال بودن را بررسی می‌کنیم", text: "بررسی می‌کنیم که آیا OC graniczne با کشور ثبت و مسیر سفر سازگار است یا نه." },
        { title: "PDF را ارسال می‌کنیم", text: "پس از آماده‌سازی و پرداخت، بیمه‌نامه را به email ارسال می‌کنیم و در بررسی پوشش کمک می‌کنیم." },
      ],
    },

    form: {
      title: "فرم درخواست",
      desc: "اطلاعات را تکمیل کنید — ما بیمه‌نامه را آماده می‌کنیم و اطلاعات پرداخت را ارسال می‌کنیم.",
    },

    faq: {
      title: "FAQ",
      desc: "پاسخ‌های کوتاه به پرسش‌های رایج.",
      items: [
        { q: "آیا می‌توان OC graniczne را آنلاین صادر کرد؟", a: "بله. درخواست را می‌توان آنلاین ارسال کرد. اطلاعات به‌صورت دستی بررسی می‌شود و پس از آماده‌سازی، تأیید و پرداخت، بیمه‌نامه PDF به email ارسال می‌شود." },
        { q: "این بیمه‌نامه برای چه کسانی مناسب است؟", a: "این بیمه‌نامه برای خودرویی مناسب است که خارج از منطقه اقتصادی اروپا ثبت شده باشد، اگر سفر از لهستان یا کشور دیگری که در بیمه‌نامه ذکر شده عبور کند و Green Card معتبر وجود نداشته باشد." },
        { q: "آیا OC graniczne برای خودرویی از لهستان یا کشور دیگری در منطقه اقتصادی اروپا مناسب است؟", a: "خیر. برای خودروهای ثبت‌شده در لهستان، لیتوانی، لتونی، آلمان و سایر کشورهای منطقه اقتصادی اروپا، این محصول مناسب نیست." },
        { q: "بیمه‌نامه در چه کشورهایی اعتبار دارد؟", a: "بیمه‌نامه فقط در کشورهایی اعتبار دارد که در سند به‌عنوان کشورهای تحت پوشش ذکر شده‌اند. پیش از سفر بررسی کنید که همه کشورهای مسیر در پوشش قرار داشته باشند." },
        { q: "آیا بیمه‌نامه در ترکیه یا صربستان اعتبار دارد؟", a: "خیر، اگر ترکیه یا صربستان در سند به‌عنوان کشورهای تحت پوشش ذکر نشده باشند. برای چنین کشورهایی ممکن است بیمه مرزی محلی یا محصول دیگری لازم باشد." },
        { q: "آیا می‌توان بیمه‌نامه را در روز سفر صادر کرد؟", a: "گاهی این امکان وجود دارد، اگر همه اطلاعات و مدارک درست باشد. اگر بررسی دستی، هماهنگی یا اصلاح اطلاعات لازم باشد، صدور زمان بیشتری می‌برد. بهتر است درخواست را ۱–۲ روز کاری پیش از سفر ارسال کنید." },
        { q: "آیا می‌توان OC graniczne را با تاریخ گذشته صادر کرد؟", a: "خیر. بیمه‌نامه با تاریخ گذشته صادر نمی‌شود. تاریخ شروع اعتبار هنگام صدور مشخص می‌شود و بیمه‌نامه فقط در بازه اعتبار ذکرشده در سند قابل استفاده است." },
        { q: "چه مدارکی لازم است؟", a: "گواهی ثبت وسیله نقلیه / گذرنامه فنی، گذرنامه یا ID بیمه‌گذار، شماره پلاک، VIN، برند، مدل، سال ساخت، کشور ثبت، نوع وسیله نقلیه، تاریخ شروع و مدت بیمه، email و تلفن لازم است." },
        { q: "در گواهی چه چیزی ذکر می‌شود؟", a: "در سند، اطلاعات خودرو، مدت اعتبار، کشور ثبت، نوع وسیله نقلیه، اطلاعات بیمه‌گذار و فهرست کشورهای تحت پوشش ذکر می‌شود." },
        { q: "اگر در بیمه‌نامه خطا وجود داشته باشد چه باید کرد؟", a: "از بیمه‌نامه‌ای که اطلاعات اشتباه دارد استفاده نکنید. پیش از سفر با ما تماس بگیرید تا امکان اصلاح بررسی شود. برخی خطاها ممکن است نیاز به صدور مجدد داشته باشند." },
        { q: "آیا بیمه‌نامه را به‌صورت PDF دریافت می‌کنم؟", a: "بله. پس از بررسی اطلاعات، آماده‌سازی بیمه‌نامه و پرداخت، سند PDF به email ذکرشده در درخواست ارسال می‌شود." },
        { q: "آیا می‌توان با کارت پرداخت کرد؟", a: "در این مرحله، انتقال‌های SWIFT، SEPA و P2P و همچنین پرداخت BLIK در دسترس است. پس از آماده شدن بیمه‌نامه، اطلاعات پرداخت را دریافت می‌کنید." },
        { q: "آیا این همان «کارت سبز» است؟", a: "خیر. OC graniczne و Green Card دو محصول متفاوت با قوانین صدور، کاربرد و قلمرو اعتبار متفاوت هستند." },
        { q: "این چه نوع بیمه‌ای است؟", a: "این بیمه اجباری مسئولیت مدنی مالک یا استفاده‌کننده از وسیله نقلیه موتوری است که فقط در کشورهایی که در بیمه‌نامه ذکر شده‌اند اعتبار دارد." },
        {
          q: "بیمه چه مواردی را پوشش می‌دهد؟",
          a: `پوشش شامل موارد زیر است:
            • خسارت به جان یا سلامت زیان‌دیدگان؛
            • خسارت مالی واردشده به اشخاص ثالث.
            
            حداقل مبالغ تضمین‌شده:
            •  29 876 400 PLN — صدمات بدنی؛
            •  6 021 600 PLN — خسارت مالی.`
        },
        {
          q: "بیمه چه مواردی را پوشش نمی‌دهد؟",
          a: `•  دوچرخه‌ها و وسایل نقلیه غیرموتوری؛
              •  خسارت واردشده به مالک خودرو؛
              •  خسارت به محیط زیست.`
        },
        {
          q: "در چه مواردی امکان رجوع وجود دارد؟",
          a: `شرکت بیمه حق دارد مبلغ پرداخت‌شده را مطالبه کند، اگر راننده:
            • عمداً اقدام کرده باشد؛
            • مست یا تحت تأثیر مواد مخدر بوده باشد؛
            • گواهینامه معتبر نداشته باشد؛
            • از محل تصادف فرار کرده باشد؛
            • از خودروی سرقتی استفاده کرده باشد.`
        },
        {
          q: "بیمه‌نامه چه زمانی شروع و چه زمانی پایان می‌یابد؟",
          a: `شروع: تاریخ صدور بیمه‌نامه.

              مدت‌های قابل انتخاب: ۳۰، ۶۰، ۹۰، ۱۸۰ یا ۳۶۴ روز.

              پایان:
              • پایان مدت؛
              • سرقت یا اسقاط خودرو؛
              • خارج شدن از ثبت.`
        },
      ],
    },

    verify: {
      title: "بررسی اعتبار بیمه‌نامه",
      lead:
        "اگر می‌خواهید مطمئن شوید که بیمه‌نامه شما واقعاً فعال است، از پایگاه‌های رسمی دفاتر بیمه استفاده کنید. در ادامه لینک سرویس‌های لهستان، لتونی و لیتوانی آمده است.",
      items: [
        {
          code: "PL",
          country: "لهستان",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "بررسی اعتبار بیمه‌نامه OC با شماره ثبت یا VIN در پایگاه رسمی UFG.",
          cta: "رفتن به وب‌سایت UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "لتونی",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "بررسی بیمه اجباری OCTA برای وسایل نقلیه ثبت‌شده در لتونی.",
          cta: "بررسی از طریق LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "لیتوانی",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "سرویس بررسی اعتبار بیمه‌نامه اجباری مسئولیت مدنی در لیتوانی.",
          cta: "بررسی از طریق CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "اکنون باز است",
      closedLabel: "اکنون بسته است",

      openDetails: "تا ساعت {time} به وقت محلی شما کار می‌کنیم",

      closingSoonHoursMinutes:
        "تا پایان روز کاری {hours} ساعت و {minutes} دقیقه باقی مانده است",
      closingSoonHours: "تا پایان روز کاری {hours} ساعت باقی مانده است",
      closingSoonMinutes: "تا پایان روز کاری {minutes} دقیقه باقی مانده است",
      closingSoonExtra:
        "می‌توانید همین حالا درخواست خود را ارسال کنید. اگر بررسی دستی لازم باشد، آن را پیش از بسته شدن یا در روز کاری بعد پردازش می‌کنیم.",

      closedBeforeOpeningToday:
        "امروز در ساعت {time} به وقت محلی شما باز می‌کنیم",
      closedUntilTomorrow:
        "فردا در ساعت {time} به وقت محلی شما باز می‌کنیم",
      closedUntilMonday:
        "دوشنبه در ساعت {time} به وقت محلی شما باز می‌کنیم",
      closedExtra:
        "می‌توانید همین حالا درخواست خود را ارسال کنید — آن را در ساعات کاری پردازش می‌کنیم.",

      timezoneNote:
        "زمان بر اساس منطقه زمانی دستگاه شما نمایش داده شده است: {timezone}.",
    },
  },
  hy: {
    hero: {
      kicker: "Առցանց ձևակերպում",
      title: "OC graniczne առցանց՝ ԵՏԳ-ից դուրս գրանցված ավտոմեքենայի համար",
      lead:
        "Մենք օգնում ենք հեռակա կարգով ձևակերպել սահմանային ապահովագրության պայմանագիր՝ Լեհաստան, ԵՄ և պոլիսում նշված այլ երկրներ մուտք գործելու համար։",
      meta: ["ԵՏԳ-ից դուրս գտնվող ավտոմեքենաների համար", "PDF-պոլիս՝ ստուգումից հետո", "Ծածկույթը միայն երկրների ցանկի համաձայն"],
      ctaCalc: "Հաշվարկել արժեքը",
      ctaBuy: "Ձևակերպել պոլիսը",
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
        { value: "car", label: "Մարդատար ավտոմեքենաներ" },
        { value: "van", label: "Ավտոբուսներ" },
        { value: "truck", label: "Բեռնատարներ" },
        { value: "trailer", label: "Կցորդներ" },
        { value: "special", label: "Հատուկ տեխնիկա" },
      ],
      button: "Հաշվարկել",
      note: "note",
    },

    process: {
      title: "Ինչպես է դա աշխատում",
      desc: "Քայլ առ քայլ՝ հաշվարկ → տվյալներ → ձեռքով ստուգում → վճարում → PDF-պոլիս։",
      steps: [
        { title: "Հաշվարկեք", text: "Ընտրեք տրանսպորտային միջոցի տեսակը և հասանելի ժամկետը՝ 30, 60, 90, 180 կամ 364 օր։" },
        { title: "Լրացրեք տվյալները", text: "Նշեք ապահովադրին, գրանցման երկիրը, պետհամարանիշը, VIN-ը, տրանսպորտային միջոցի պարամետրերը և կոնտակտային տվյալները։" },
        { title: "Սպասեք ստուգմանը", text: "Մենք կստուգենք փաստաթղթերը, երթուղին և ընտրված պայմաններով OC graniczne ձևակերպելու հնարավորությունը։" },
        { title: "Ստացեք PDF-պոլիսը", text: "Հաստատումից և վճարումից հետո պոլիսն ուղարկվում է հայտում նշված email հասցեին։" },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne-ը հարմար է Եվրոպական տնտեսական գոտուց դուրս գրանցված ավտոմեքենայի համար, եթե վարորդը մուտք է գործում Լեհաստան կամ պոլիսի գործողության այլ երկիր՝ առանց գործող Green Card-ի։ Պոլիսը հարմար չէ ԵՏԳ երկրներում գրանցված ավտոմեքենաների համար։ Ճանապարհորդությունից առաջ պետք է ստուգել, որ անհրաժեշտ երկրները պոլիսում նշված են որպես ծածկվող։",
      fit: {
        title: "Ում է հարմար OC graniczne-ը",
        items: [
          "ավտոմեքենան գրանցված է ԵՏԳ-ից դուրս;",
          "երթուղում ճանաչվող գործող Green Card չկա;",
          "ուղևորությունն անցնում է Լեհաստանի կամ պոլիսում նշված երկրների միջով;",
          "ապահովադիր կարող է լինել ֆիզիկական կամ իրավաբանական անձ;",
          "հասանելի են մարդատար ավտոմեքենաներ, բեռնատարներ, ավտոբուսներ, կցորդներ, մոտոցիկլներ և հատուկ տեխնիկա։",
        ],
        links: [
          { href: "/rules", label: "Ձևակերպման կանոններ" },
          { href: "/product-info", label: "Ապրանքի փաստաթղթեր" },
        ],
      },
      notFit: {
        title: "⚠️ Ում համար այս պոլիսը հարմար չէ",
        items: [
          "ավտոմեքենան գրանցված է Լեհաստանում, Լիտվայում, Լատվիայում, Գերմանիայում կամ ԵՏԳ այլ երկրում;",
          "անհրաժեշտ է սեփական ավտոմեքենայի պաշտպանություն — սա ԿԱՍԿՈ չէ;",
          "երթուղին անցնում է այն երկրներով, որոնք նշված չեն պոլիսում;",
          "անհրաժեշտ է պոլիսը ձևակերպել հետին ամսաթվով;",
          "Թուրքիա, Սերբիա կամ ծածկույթի ցանկից դուրս այլ երկրներ մեկնելու համար անհրաժեշտ է այլ ապրանք, եթե այդ երկրները նշված չեն փաստաթղթում։",
        ],
      },
      service: {
        title: "Ով է ձևակերպում պոլիսը",
        text: "greencard.agency ծառայությունն օգնում է հեռակա կարգով ձևակերպել OC graniczne սահմանային ապահովագրության պայմանագիր։ Հայտն ընդունվում է առցանց, տվյալներն ու փաստաթղթերը ստուգվում են ձեռքով, իսկ պատրաստումից և վճարումից հետո հաճախորդը ստանում է PDF-պոլիսը email-ով։",
        items: [
          "ընդունում ենք հայտը առցանց;",
          "ստուգում ենք ավտոմեքենայի փաստաթղթերն ու տվյալները;",
          "ճշտում ենք՝ արդյոք OC graniczne-ը համապատասխանում է գրանցման երկրին և երթուղուն;",
          "պատրաստում ենք պոլիսը և PDF-ն ուղարկում email-ով;",
          "օգնում ենք ստուգել, թե որ երկրներն են նշված ծածկույթում։",
        ],
      },
      documents: {
        title: "Ինչ տվյալներ և փաստաթղթեր են անհրաժեշտ",
        text: "Փաստաթղթերը ավելի լավ է պատրաստել մինչև ձևը լրացնելը․ առանց ընթեռնելի գրանցման վկայականի հնարավոր չէ ճիշտ ստուգել համարանիշը, VIN-ը, գրանցման երկիրը և ավտոմեքենայի պարամետրերը։",
        items: [
          "տրանսպորտային միջոցի գրանցման վկայական / տեխնիկական անձնագիր;",
          "ապահովադրի անձնագիր կամ ID;",
          "համարանիշ և VIN;",
          "մակնիշ, մոդել, արտադրության տարի;",
          "ավտոմեքենայի գրանցման երկիր և տրանսպորտային միջոցի տեսակ;",
          "շարժիչի ծավալ և հզորություն;",
          "ապահովագրության մեկնարկի ամսաթիվ և ժամկետ;",
          "email և հեռախոս՝ կապի համար;",
          "մեկնաբանություն, եթե երթուղին ոչ ստանդարտ է կամ անհրաժեշտ է ծածկույթի ճշգրիտ ժամանակահատված 30–364 օրվա միջակայքում։",
        ],
        link: { href: "/product-info", label: "Բացել ապրանքի մասին տեղեկատվությունը" },
      },
      price: {
        title: "Որքան արժե OC graniczne-ը",
        text: "Արժեքը կախված է տրանսպորտային միջոցի տեսակից և ապահովագրության ժամկետից։ Հաշվիչում նշված է ընտրված պարամետրերի մոտավոր գինը։ Ձևակերպման վերջնական հնարավորությունը և արժեքը հաստատվում են ավտոմեքենայի տվյալներն ու փաստաթղթերը ստուգելուց հետո։",
        items: [
          "հասանելի ժամկետներ՝ 30, 60, 90, 180 կամ 364 օր;",
          "սակագինը կախված է տրանսպորտային միջոցի կատեգորիայից;",
          "գինը հաստատվում է մինչև վճարումը;",
          "եթե տվյալները բավարար չեն, մենեջերը դրանք կճշտի մինչև պոլիսի թողարկումը։",
        ],
      },
      timing: {
        title: "Ձևակերպման ժամկետ և ձեռքով ստուգում",
        text: "Եթե բոլոր տվյալներն ու փաստաթղթերը ճիշտ են, ձևակերպումը կարող է տևել մոտ 10–20 րոպե աշխատանքային ժամերին։ Եթե պահանջվում է ձեռքով ստուգում, համաձայնեցում կամ տվյալների ուղղում, ձևակերպումը ավելի երկար կտևի։ Ավելի լավ է հայտը ներկայացնել ուղևորության մեկնարկից 1–2 աշխատանքային օր առաջ։ Պոլիսը հետին ամսաթվով չի ձևակերպվում։",
      },
      notCovered: {
        title: "Որտեղ OC graniczne-ը չի գործում",
        text: "Պոլիսը չի գործում այն երկրներում, որոնք փաստաթղթում նշված չեն որպես ծածկվող։ Օրինակ՝ եթե պոլիսում նշված չեն Թուրքիան, Սերբիան, Չեռնոգորիան, Հյուսիսային Մակեդոնիան, Բոսնիա և Հերցեգովինան կամ երթուղու այլ երկիր, այդ պոլիսը չի կարելի օգտագործել ուղևորության այդ հատվածի համար։ Վճարումից առաջ և մեկնելուց առաջ ստուգեք փաստաթղթում նշված ծածկույթի երկրների ցանկը։",
        link: { href: "#coverage", label: "Տեսնել ծածկույթի երկրները" },
      },
      checkPolicy: {
        title: "Ինչ ստուգել պոլիսում մինչև ճանապարհորդությունը",
        text: "Մի օգտագործեք պոլիսը, եթե դրանում սխալ կա։ PDF-ում նշված տվյալները պետք է համընկնեն ավտոմեքենայի գրանցման փաստաթղթի և հայտարարված ուղևորության պայմանների հետ։",
        items: [
          "համարանիշ;",
          "VIN;",
          "գրանցման երկիր;",
          "մակնիշ և մոդել;",
          "սկսման և ավարտի ամսաթիվ;",
          "տրանսպորտային միջոցի տեսակ;",
          "ծածկույթի երկրներ;",
          "ապահովադրի տվյալներ։",
        ],
        link: { href: "#verify", label: "Ստուգել պոլիսը" },
      },
    },

    why: {
      title: "Ինչ է անում ծառայությունը",
      desc: "Կոնկրետ գործողություններ OC graniczne-ի ձևակերպման գործընթացում։",
      items: [
        { title: "Ընդունում ենք հայտը առցանց", text: "Ապահովադրի և ավտոմեքենայի տվյալները փոխանցվում են ձևի միջոցով՝ առանց գրասենյակ այցելելու։" },
        { title: "Ստուգում ենք փաստաթղթերը", text: "Համեմատում ենք VIN-ը, համարանիշը, գրանցման երկիրը, տրանսպորտային միջոցի տեսակը և ապահովագրության ժամկետը։" },
        { title: "Ճշտում ենք կիրառելիությունը", text: "Ստուգում ենք՝ արդյոք OC graniczne-ը համապատասխանում է գրանցման երկրին և երթուղուն։" },
        { title: "Ուղարկում ենք PDF", text: "Պատրաստումից և վճարումից հետո պոլիսն ուղարկում ենք email-ով և օգնում ենք ստուգել ծածկույթը։" },
      ],
    },

    form: {
      title: "Հայտի ձև",
      desc: "Լրացրեք տվյալները — մենք կպատրաստենք պոլիսը և կուղարկենք վճարման տվյալները։",
    },

    faq: {
      title: "FAQ",
      desc: "Կարճ պատասխաններ հաճախ տրվող հարցերին։",
      items: [
        { q: "Հնարավո՞ր է OC graniczne-ը ձևակերպել առցանց։", a: "Այո։ Հայտը կարելի է ուղարկել առցանց։ Տվյալները ստուգվում են ձեռքով, իսկ պատրաստումից, հաստատումից և վճարումից հետո PDF-պոլիսն ուղարկվում է email-ով։" },
        { q: "Ում է հարմար այս պոլիսը։", a: "Պոլիսը հարմար է ԵՏԳ-ից դուրս գրանցված ավտոմեքենայի համար, եթե ուղևորությունն անցնում է Լեհաստանի կամ պոլիսում նշված այլ երկրի միջով, և գործող Green Card չկա։" },
        { q: "OC graniczne-ը հարմար է՞ Լեհաստանից կամ ԵՏԳ այլ երկրից ավտոմեքենայի համար։", a: "Ոչ։ Լեհաստանում, Լիտվայում, Լատվիայում, Գերմանիայում և ԵՏԳ այլ երկրներում գրանցված ավտոմեքենաների համար այս ապրանքը հարմար չէ։" },
        { q: "Որ երկրներում է գործում պոլիսը։", a: "Պոլիսը գործում է միայն այն երկրներում, որոնք փաստաթղթում նշված են որպես ծածկվող։ Ճանապարհորդությունից առաջ ստուգեք, որ երթուղու բոլոր երկրները ներառված են ծածկույթում։" },
        { q: "Պոլիսը գործում է՞ Թուրքիայում կամ Սերբիայում։", a: "Ոչ, եթե Թուրքիան կամ Սերբիան փաստաթղթում նշված չեն որպես ծածկվող երկրներ։ Այդ երկրների համար կարող է անհրաժեշտ լինել տեղական սահմանային ապահովագրություն կամ այլ ապրանք։" },
        { q: "Հնարավո՞ր է պոլիսը ձևակերպել ուղևորության օրը։", a: "Երբեմն դա հնարավոր է, եթե բոլոր տվյալներն ու փաստաթղթերը ճիշտ են։ Եթե պահանջվում է ձեռքով ստուգում, համաձայնեցում կամ տվյալների ուղղում, ձևակերպումը ավելի երկար կտևի։ Ավելի լավ է հայտը ներկայացնել ուղևորությունից 1–2 աշխատանքային օր առաջ։" },
        { q: "Հնարավո՞ր է OC graniczne-ը ձևակերպել հետին ամսաթվով։", a: "Ոչ։ Պոլիսը հետին ամսաթվով չի ձևակերպվում։ Գործողության մեկնարկի ամսաթիվը նշվում է ձևակերպման ժամանակ, իսկ պոլիսը կարելի է օգտագործել միայն փաստաթղթում նշված գործողության ժամկետի սահմաններում։" },
        { q: "Ինչ փաստաթղթեր են անհրաժեշտ։", a: "Անհրաժեշտ են տրանսպորտային միջոցի գրանցման վկայական / տեխնիկական անձնագիր, ապահովադրի անձնագիր կամ ID, համարանիշ, VIN, մակնիշ, մոդել, արտադրության տարի, գրանցման երկիր, տրանսպորտային միջոցի տեսակ, ապահովագրության մեկնարկի ամսաթիվ և ժամկետ, email և հեռախոս։" },
        { q: "Ինչ է նշված վկայականում։", a: "Փաստաթղթում նշվում են ավտոմեքենայի տվյալները, գործողության ժամկետը, գրանցման երկիրը, տրանսպորտային միջոցի տեսակը, ապահովադրի տվյալները և ծածկույթի երկրների ցանկը։" },
        { q: "Ինչ անել, եթե պոլիսում սխալ կա։", a: "Մի օգտագործեք սխալ տվյալներով պոլիսը։ Կապվեք մեզ հետ մինչև ուղևորությունը՝ ստուգելու ուղղման հնարավորությունը։ Որոշ սխալներ կարող են պահանջել վերաձևակերպում։" },
        { q: "Կստանա՞մ պոլիսը PDF-ով։", a: "Այո։ Տվյալների ստուգումից, պոլիսի պատրաստումից և վճարումից հետո PDF-փաստաթուղթն ուղարկվում է հայտում նշված email հասցեին։" },
        { q: "Հնարավո՞ր է վճարել քարտով։", a: "Այս փուլում հասանելի են SWIFT, SEPA և P2P փոխանցումներ, ինչպես նաև BLIK վճարում։ Պոլիսը պատրաստելուց հետո դուք ստանում եք վճարման տվյալները։" },
        { q: "Սա նույնն է, ինչ «կանաչ քարտը»։", a: "Ոչ։ OC graniczne-ը և Green Card-ը տարբեր ապրանքներ են՝ տարբեր ձևակերպման կանոններով, կիրառելիությամբ և գործողության տարածքով։" },
        { q: "Ինչ ապահովագրություն է սա։", a: "Սա մեխանիկական տրանսպորտային միջոցի սեփականատիրոջ կամ օգտագործողի քաղաքացիական պատասխանատվության պարտադիր ապահովագրություն է, որը գործում է միայն պոլիսում նշված երկրներում։" },
        {
          q: "Ինչ է ծածկում ապահովագրությունը։",
          a: `Ծածկույթը ներառում է՝
            • Տուժածների կյանքին կամ առողջությանը պատճառված վնաս;
            • Երրորդ անձանց գույքային վնաս։
            
            Նվազագույն երաշխավորված գումարներ՝
            •  29 876 400 PLN — մարմնական վնասվածքներ;
            •  6 021 600 PLN — գույքային վնաս։`
        },
        {
          q: "Ինչը չի ծածկում ապահովագրությունը։",
          a: `•  հեծանիվներ և ոչ մեխանիկական տրանսպորտային միջոցներ;
              •  ավտոմեքենայի սեփականատիրոջ վնասը;
              •  շրջակա միջավայրին պատճառված վնասը։`
        },
        {
          q: "Որ դեպքերում է հնարավոր ռեգրեսը։",
          a: `Ապահովագրական ընկերությունն իրավունք ունի պահանջել վճարված գումարի վերադարձ, եթե վարորդը՝
            • գործել է դիտավորությամբ;
            • եղել է հարբած կամ թմրանյութերի ազդեցության տակ;
            • չի ունեցել վարորդական իրավունք;
            • հեռացել է ՃՏՊ վայրից;
            • օգտագործել է գողացված ավտոմեքենա։`
        },
        {
          q: "Երբ է սկսվում և ավարտվում պոլիսը։",
          a: `Սկիզբը՝ պոլիսի թողարկման ամսաթիվը։

              Հասանելի ժամկետներ՝ 30, 60, 90, 180 կամ 364 օր։

              Դադարեցում՝
              • ժամկետի ավարտ;
              • ավտոմեքենայի գողություն կամ դուրսգրում;
              • հաշվառումից հանում։`
        },
      ],
    },

    verify: {
      title: "Պոլիսի վավերականության ստուգում",
      lead:
        "Եթե ցանկանում եք համոզվել, որ ձեր պոլիսն իսկապես ակտիվ է, օգտվեք ապահովագրական բյուրոների պաշտոնական բազաներից։ Ստորև ներկայացված են Լեհաստանի, Լատվիայի և Լիտվայի ծառայությունների հղումները։",
      items: [
        {
          code: "PL",
          country: "Լեհաստան",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "OC պոլիսի վավերականության ստուգում գրանցման համարով կամ VIN-ով UFG-ի պաշտոնական բազայում։",
          cta: "Անցնել UFG կայք",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Լատվիա",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Լատվիայում գրանցված տրանսպորտային միջոցների պարտադիր OCTA ապահովագրության ստուգում։",
          cta: "Ստուգել LTAB-ի միջոցով",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Լիտվա",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Լիտվայում քաղաքացիական պատասխանատվության պարտադիր ապահովագրության պոլիսի վավերականության ստուգման ծառայություն։",
          cta: "Ստուգել CAB-ի միջոցով",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Այժմ բաց է",
      closedLabel: "Այժմ փակ է",

      openDetails: "աշխատում ենք մինչև {time}՝ ձեր ժամանակով",

      closingSoonHoursMinutes:
        "աշխատանքային օրվա ավարտին մնացել է {hours} ժ {minutes} ր",
      closingSoonHours: "աշխատանքային օրվա ավարտին մնացել է {hours} ժ",
      closingSoonMinutes: "աշխատանքային օրվա ավարտին մնացել է {minutes} ր",
      closingSoonExtra:
        "Դուք կարող եք հայտը ուղարկել հիմա։ Եթե պահանջվի ձեռքով ստուգում, մենք այն կմշակենք մինչև փակվելը կամ հաջորդ աշխատանքային օրը։",

      closedBeforeOpeningToday:
        "այսօր կբացվենք {time}-ին՝ ձեր ժամանակով",
      closedUntilTomorrow:
        "վաղը կբացվենք {time}-ին՝ ձեր ժամանակով",
      closedUntilMonday:
        "երկուշաբթի կբացվենք {time}-ին՝ ձեր ժամանակով",
      closedExtra:
        "Դուք կարող եք հայտը ուղարկել հիմա — մենք այն կմշակենք աշխատանքային ժամերին։",

      timezoneNote:
        "Ժամը ցուցադրված է ձեր սարքի ժամային գոտու համաձայն՝ {timezone}։",
    },
  },
  ckb: {
    hero: {
      kicker: "دەرکردنی ئۆنلاین",
      title: "OC graniczne ئۆنلاین بۆ ئۆتۆمبێلێک کە لە دەرەوەی ناوچەی ئابووریی ئەورووپا تۆمارکراوە",
      lead:
        "ئێمە یارمەتیتان دەدەین بەدوورەوە گرێبەستی بیمەی سنووری بۆ چوونە ناو پۆڵەندا، یەکێتیی ئەورووپا و وڵاتانی دیکەی دیاریکراو لە پۆلیسدا ڕێکبخەن.",
      meta: ["بۆ ئۆتۆمبێلەکانی دەرەوەی ناوچەی ئابووریی ئەورووپا", "پۆلیسی PDF دوای پشکنین", "داپۆشین تەنها بەپێی لیستی وڵاتان"],
      ctaCalc: "حسابکردنی نرخ",
      ctaBuy: "دەرکردنی پۆلیس",
    },

    calc: {
      title: "ژمێرەری نرخ",
      badge: "~ ١ خولەک",
      desc: "ژمێرەری سادەی تعرفە",
      termLabel: "ماوە",
      vehicleLabel: "جۆری ئامرازی گواستنەوە",
      termOptions: [
        { value: "30", label: "٣٠ ڕۆژ" },
        { value: "60", label: "٦٠ ڕۆژ" },
        { value: "90", label: "٩٠ ڕۆژ" },
        { value: "180", label: "١٨٠ ڕۆژ" },
        { value: "365", label: "٣٦٤ ڕۆژ" },
      ],
      vehicleOptions: [
        { value: "car", label: "ئۆتۆمبێلی کەسی" },
        { value: "van", label: "پاسەکان" },
        { value: "truck", label: "بارەهەڵگرەکان" },
        { value: "trailer", label: "تریلەکان" },
        { value: "special", label: "ئامێری تایبەتمەند" },
      ],
      button: "حسابکردن",
      note: "note",
    },

    process: {
      title: "چۆن کار دەکات",
      desc: "بە هەنگاو: حسابکردن → زانیاری → پشکنینی دەستی → پارەدان → پۆلیسی PDF.",
      steps: [
        { title: "حساب بکەن", text: "جۆری ئامرازی گواستنەوە و ماوەی بەردەست هەڵبژێرن: ٣٠، ٦٠، ٩٠، ١٨٠ یان ٣٦٤ ڕۆژ." },
        { title: "زانیارییەکان پڕ بکەن", text: "بیمەکەر، وڵاتی تۆمارکردن، ژمارەی تابلۆ، VIN، تایبەتمەندییەکانی ئامرازی گواستنەوە و زانیارییەکانی پەیوەندی دیاری بکەن." },
        { title: "چاوەڕێی پشکنین بکەن", text: "ئێمە بەڵگەنامەکان، ڕێڕەو و ئەگەری دەرکردنی OC graniczne بۆ ئەو مەرجانەی هەڵبژێردراون پشکنین دەکەین." },
        { title: "پۆلیسی PDF وەربگرن", text: "دوای پشتڕاستکردنەوە و پارەدان، پۆلیس بۆ ئەو email ـەی لە داواکارییەکەدا دیاریکراوە دەنێردرێت." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne گونجاوە بۆ ئۆتۆمبێلێک کە لە دەرەوەی ناوچەی ئابووریی ئەورووپا تۆمارکراوە، ئەگەر شۆفێر بەبێ Green Card ـی کارا بچێتە ناو پۆڵەندا یان وڵاتێکی دیکەی کاریگەری پۆلیس. ئەم پۆلیسە بۆ ئۆتۆمبێلە تۆمارکراوەکان لە وڵاتانی ناوچەی ئابووریی ئەورووپا گونجاو نییە. پێش گەشت دەبێت بپشکنن کە وڵاتانی پێویست لە پۆلیسدا وەک وڵاتانی داپۆشراو دیاریکراون.",
      fit: {
        title: "OC graniczne بۆ کێ گونجاوە",
        items: [
          "ئۆتۆمبێل لە دەرەوەی ناوچەی ئابووریی ئەورووپا تۆمارکراوە؛",
          "Green Card ـی کارای قبوڵکراو لەسەر ڕێڕەوەکە بوونی نییە؛",
          "گەشتەکە بە پۆڵەندا یان وڵاتانی دیاریکراو لە پۆلیسدا تێدەپەڕێت؛",
          "بیمەکەر دەتوانێت کەسێکی سروشتی یان کەسێکی یاسایی بێت؛",
          "ئۆتۆمبێلی کەسی، بارەهەڵگر، پاس، تریلە، ماتۆرسکیل و ئامێری تایبەتمەند بەردەستن.",
        ],
        links: [
          { href: "/rules", label: "یاساکانی دەرکردن" },
          { href: "/product-info", label: "بەڵگەنامەکانی بەرهەم" },
        ],
      },
      notFit: {
        title: "⚠️ ئەم پۆلیسە بۆ کێ گونجاو نییە",
        items: [
          "ئۆتۆمبێل لە پۆڵەندا، لیتوانیا، لاتفیا، ئەڵمانیا یان وڵاتێکی دیکەی ناوچەی ئابووریی ئەورووپا تۆمارکراوە؛",
          "پێویستتان بە پاراستنی ئۆتۆمبێلی خۆتانە — ئەمە کاسکۆ نییە؛",
          "ڕێڕەوەکە بە وڵاتاندا تێدەپەڕێت کە لە پۆلیسدا دیارینەکراون؛",
          "پێویستە پۆلیس بە ڕێکەوتی ڕابردوو دەربکرێت؛",
          "بۆ گەشت بۆ تورکیا، سربیا یان وڵاتانی دیکەی دەرەوەی لیستی داپۆشین، ئەگەر ئەو وڵاتانە لە بەڵگەنامەکەدا دیارینەکرابن، بەرهەمێکی دیکە پێویستە.",
        ],
      },
      service: {
        title: "کێ پۆلیسەکە دەردەکات",
        text: "خزمەتگوزاری greencard.agency یارمەتیدەرە بۆ دەرکردنی گرێبەستی بیمەی سنووری OC graniczne بەدوورەوە. داواکاری بە شێوەی ئۆنلاین وەردەگیرێت، زانیاری و بەڵگەنامەکان بە دەستی پشکنین دەکرێن، دوای ئامادەکردن و پارەدان، کڕیار پۆلیسی PDF لەسەر email وەردەگرێت.",
        items: [
          "داواکاری بە ئۆنلاین وەردەگرین؛",
          "بەڵگەنامە و زانیارییەکانی ئۆتۆمبێل پشکنین دەکەین؛",
          "ڕوون دەکەینەوە کە ئایا OC graniczne بۆ وڵاتی تۆمارکردن و ڕێڕەو گونجاوە یان نا؛",
          "پۆلیس ئامادە دەکەین و PDF بۆ email دەنێرین؛",
          "یارمەتی دەدەین بپشکنن کام وڵاتان لە داپۆشیندا دیاریکراون.",
        ],
      },
      documents: {
        title: "کام زانیاری و بەڵگەنامە پێویستن",
        text: "باشترە بەڵگەنامەکان پێش پڕکردنەوەی فۆرمەکە ئامادە بکرێن: بەبێ بڕوانامەی تۆمارکردنی خوێندراوە، ناتوانرێت ژمارە، VIN، وڵاتی تۆمارکردن و تایبەتمەندییەکانی ئۆتۆمبێل بە دروستی پشکنین بکرێن.",
        items: [
          "بڕوانامەی تۆمارکردنی ئامرازی گواستنەوە / پاسپۆرتی تەکنیکی؛",
          "پاسپۆرت یان ID ـی بیمەکەر؛",
          "ژمارەی تابلۆ و VIN؛",
          "مارکە، مۆدێل، ساڵی بەرهەمهێنان؛",
          "وڵاتی تۆمارکردنی ئۆتۆمبێل و جۆری ئامرازی گواستنەوە؛",
          "قەبارە و هێزی بزوێنەر؛",
          "ڕێکەوتی دەستپێک و ماوەی بیمە؛",
          "email و تەلەفۆن بۆ پەیوەندی؛",
          "کۆمێنت، ئەگەر ڕێڕەوەکە نائاساییە یان ماوەی وردی داپۆشین لە نێوان ٣٠–٣٦٤ ڕۆژدا پێویستە.",
        ],
        link: { href: "/product-info", label: "کردنەوەی زانیارییەکانی بەرهەم" },
      },
      price: {
        title: "OC graniczne چەند تێدەچێت",
        text: "نرخەکە بە جۆری ئامرازی گواستنەوە و ماوەی بیمەوە گرێدراوە. لە ژمێرەرەکەدا نرخی نزیکەیی بۆ پارامیتەرە هەڵبژێردراوەکان پیشان دەدرێت. ئەگەری کۆتایی دەرکردن و نرخ دوای پشکنینی زانیارییەکانی ئۆتۆمبێل و بەڵگەنامەکان پشتڕاست دەکرێنەوە.",
        items: [
          "ماوەکانی بەردەست: ٣٠، ٦٠، ٩٠، ١٨٠ یان ٣٦٤ ڕۆژ؛",
          "تعرفە بە پۆلی ئامرازی گواستنەوەوە گرێدراوە؛",
          "نرخ پێش پارەدان پشتڕاست دەکرێتەوە؛",
          "ئەگەر زانیارییەکان بەس نەبن، بەڕێوەبەر پێش دەرکردنی پۆلیس وردەکارییەکان ڕوون دەکاتەوە.",
        ],
      },
      timing: {
        title: "ماوەی دەرکردن و پشکنینی دەستی",
        text: "ئەگەر هەموو زانیاری و بەڵگەنامەکان دروست بن، دەرکردن لە کاتی کاردا دەکرێت نزیکەی ١٠–٢٠ خولەک بخایەنێت. ئەگەر پشکنینی دەستی، ڕێککەوتن یان ڕاستکردنەوەی زانیاری پێویست بێت، دەرکردن زیاتر دەخایەنێت. باشترە داواکاری ١–٢ ڕۆژی کاری پێش دەستپێکی گەشت بنێردرێت. پۆلیس بە ڕێکەوتی ڕابردوو دەرناکرێت.",
      },
      notCovered: {
        title: "OC graniczne لە کوێ کاریگەر نییە",
        text: "پۆلیس لەو وڵاتانە کاریگەر نییە کە لە بەڵگەنامەکەدا وەک داپۆشراو دیارینەکراون. بۆ نموونە، ئەگەر لە پۆلیسدا تورکیا، سربیا، مۆنتینیگرۆ، مەکدۆنیای باکوور، بۆسنیا و هێرزەگۆڤینا یان وڵاتێکی دیکەی ڕێڕەوەکە دیارینەکرابێت، ناتوانرێت ئەم پۆلیسە بۆ ئەو بەشی گەشتەکە بەکاربهێنرێت. پێش پارەدان و پێش ڕۆیشتن، لیستی وڵاتانی داپۆشراو لە بەڵگەنامەکەدا بپشکنن.",
        link: { href: "#coverage", label: "بینینی وڵاتانی داپۆشراو" },
      },
      checkPolicy: {
        title: "پێش گەشت چی لە پۆلیسدا بپشکنرێت",
        text: "ئەگەر هەڵەیەک لە پۆلیسدا هەبێت، بەکاری مەهێنن. زانیارییەکانی ناو PDF دەبێت لەگەڵ بەڵگەنامەی تۆمارکردنی ئۆتۆمبێل و مەرجە ڕاگەیەندراوەکانی گەشتدا یەک بگرن.",
        items: [
          "ژمارەی تابلۆ؛",
          "VIN؛",
          "وڵاتی تۆمارکردن؛",
          "مارکە و مۆدێل؛",
          "ڕێکەوتی دەستپێک و کۆتایی؛",
          "جۆری ئامرازی گواستنەوە؛",
          "وڵاتانی داپۆشراو؛",
          "زانیارییەکانی بیمەکەر.",
        ],
        link: { href: "#verify", label: "پشکنینی پۆلیس" },
      },
    },

    why: {
      title: "خزمەتگوزارییەکە چی دەکات",
      desc: "کردارە دیاریکراوەکان لە پرۆسەی دەرکردنی OC graniczne.",
      items: [
        { title: "داواکاری بە ئۆنلاین وەردەگرین", text: "زانیارییەکانی بیمەکەر و ئۆتۆمبێل لە ڕێگەی فۆرمەکەوە دەنێردرێن بەبێ سەردانی ئۆفیس." },
        { title: "بەڵگەنامەکان پشکنین دەکەین", text: "VIN، ژمارەی تابلۆ، وڵاتی تۆمارکردن، جۆری ئامرازی گواستنەوە و ماوەی بیمە دەگۆنجێنین و پشکنین دەکەین." },
        { title: "گونجاوی ڕوون دەکەینەوە", text: "دەبینین ئایا OC graniczne بۆ وڵاتی تۆمارکردن و ڕێڕەو گونجاوە یان نا." },
        { title: "PDF دەنێرین", text: "دوای ئامادەکردن و پارەدان، پۆلیس بۆ email دەنێرین و یارمەتی دەدەین داپۆشین بپشکنن." },
      ],
    },

    form: {
      title: "فۆرمی داواکاری",
      desc: "زانیارییەکان پڕ بکەن — ئێمە پۆلیس ئامادە دەکەین و زانیارییەکانی پارەدان دەنێرین.",
    },

    faq: {
      title: "FAQ",
      desc: "وەڵامی کورت بۆ پرسیارە باوەکان.",
      items: [
        { q: "دەتوانرێت OC graniczne بە ئۆنلاین دەربکرێت؟", a: "بەڵێ. داواکاری دەتوانرێت بە ئۆنلاین بنێردرێت. زانیارییەکان بە دەستی پشکنین دەکرێن، دوای ئامادەکردن، پشتڕاستکردنەوە و پارەدان، پۆلیسی PDF بۆ email دەنێردرێت." },
        { q: "ئەم پۆلیسە بۆ کێ گونجاوە؟", a: "پۆلیس بۆ ئۆتۆمبێلێک گونجاوە کە لە دەرەوەی ناوچەی ئابووریی ئەورووپا تۆمارکراوە، ئەگەر گەشتەکە بە پۆڵەندا یان وڵاتێکی دیکەی دیاریکراو لە پۆلیسدا تێدەپەڕێت و Green Card ـی کارا بوونی نییە." },
        { q: "ئایا OC graniczne بۆ ئۆتۆمبێلێکی پۆڵەندا یان وڵاتێکی دیکەی ناوچەی ئابووریی ئەورووپا گونجاوە؟", a: "نەخێر. بۆ ئۆتۆمبێلەکانی تۆمارکراو لە پۆڵەندا، لیتوانیا، لاتفیا، ئەڵمانیا و وڵاتانی دیکەی ناوچەی ئابووریی ئەورووپا، ئەم بەرهەمە گونجاو نییە." },
        { q: "پۆلیس لە کام وڵاتان کاریگەرە؟", a: "پۆلیس تەنها لەو وڵاتانە کاریگەرە کە لە بەڵگەنامەکەدا وەک داپۆشراو دیاریکراون. پێش گەشت بپشکنن کە هەموو وڵاتانی ڕێڕەو لە داپۆشیندا هەن." },
        { q: "ئایا پۆلیس لە تورکیا یان سربیا کاریگەرە؟", a: "نەخێر، ئەگەر تورکیا یان سربیا لە بەڵگەنامەکەدا وەک وڵاتانی داپۆشراو دیارینەکرابن. بۆ ئەو وڵاتانە دەکرێت بیمەی سنووری ناوخۆیی یان بەرهەمێکی دیکە پێویست بێت." },
        { q: "دەتوانرێت پۆلیس لە ڕۆژی گەشتدا دەربکرێت؟", a: "هەندێک جار ئەمە دەکرێت، ئەگەر هەموو زانیاری و بەڵگەنامەکان دروست بن. ئەگەر پشکنینی دەستی، ڕێککەوتن یان ڕاستکردنەوەی زانیاری پێویست بێت، دەرکردن زیاتر دەخایەنێت. باشترە داواکاری ١–٢ ڕۆژی کاری پێش گەشت بنێردرێت." },
        { q: "دەتوانرێت OC graniczne بە ڕێکەوتی ڕابردوو دەربکرێت؟", a: "نەخێر. پۆلیس بە ڕێکەوتی ڕابردوو دەرناکرێت. ڕێکەوتی دەستپێکی کاریگەری لە کاتی دەرکردندا دیاری دەکرێت، و پۆلیس تەنها لە ماوەی کاریگەرییەکەی کە لە بەڵگەنامەکەدا دیاریکراوە دەتوانرێت بەکاربهێنرێت." },
        { q: "کام بەڵگەنامەکان پێویستن؟", a: "بڕوانامەی تۆمارکردنی ئامرازی گواستنەوە / پاسپۆرتی تەکنیکی، پاسپۆرت یان ID ـی بیمەکەر، ژمارەی تابلۆ، VIN، مارکە، مۆدێل، ساڵی بەرهەمهێنان، وڵاتی تۆمارکردن، جۆری ئامرازی گواستنەوە، ڕێکەوتی دەستپێک و ماوەی بیمە، email و تەلەفۆن پێویستن." },
        { q: "لە بڕوانامەکەدا چی دیاریکراوە؟", a: "لە بەڵگەنامەکەدا زانیارییەکانی ئۆتۆمبێل، ماوەی کاریگەری، وڵاتی تۆمارکردن، جۆری ئامرازی گواستنەوە، زانیارییەکانی بیمەکەر و لیستی وڵاتانی داپۆشراو دیاری دەکرێن." },
        { q: "ئەگەر لە پۆلیسدا هەڵە هەبێت چی بکرێت؟", a: "پۆلیسێک کە زانیاریی هەڵەی تێدایە بەکارمەهێنن. پێش گەشت پەیوەندیمان پێوە بکەن بۆ پشکنینی ئەگەری ڕاستکردنەوە. هەندێک هەڵە دەکرێت پێویستی بە دەرکردنەوەی پۆلیس هەبێت." },
        { q: "ئایا پۆلیس بە PDF وەردەگرم؟", a: "بەڵێ. دوای پشکنینی زانیاری، ئامادەکردنی پۆلیس و پارەدان، بەڵگەنامەی PDF بۆ ئەو email ـەی لە داواکارییەکەدا دیاریکراوە دەنێردرێت." },
        { q: "دەتوانرێت بە کارت پارە بدرێت؟", a: "لە ئێستادا گواستنەوەکانی SWIFT، SEPA و P2P، هەروەها پارەدانی BLIK بەردەستن. دوای ئامادەکردنی پۆلیس، زانیارییەکانی پارەدان وەردەگرن." },
        { q: "ئەمە هەمان شتە کە «کارتە سەوز»ە؟", a: "نەخێر. OC graniczne و Green Card دوو بەرهەمی جیاوازن بە یاساکانی دەرکردن، گونجاوی و ناوچەی کاریگەری جیاواز." },
        { q: "ئەمە چ جۆرە بیمەیە؟", a: "ئەمە بیمەی ناچاری بەرپرسیاری مەدەنی خاوەن یان بەکارهێنەری ئامرازی گواستنەوەی میکانیکییە، کە تەنها لە وڵاتانی دیاریکراو لە پۆلیسدا کاریگەرە." },
        {
          q: "بیمەکە چی داپۆشێت؟",
          a: `داپۆشین ئەمانە دەگرێتەوە:
            • زیان بە ژیان یان تەندروستی زیانلێکەوتووان؛
            • زیانی ماددی بۆ کەسانی سێیەم.
            
            کەمترین بڕی گەرەنتیکراو:
            •  29 876 400 PLN — زیانی جەستەیی؛
            •  6 021 600 PLN — زیانی ماددی.`
        },
        {
          q: "بیمەکە چی داپۆش ناکات؟",
          a: `•  پاسکیل و ئامرازی گواستنەوەی نامیکانیکی؛
              •  زیانی خاوەنی ئۆتۆمبێل؛
              •  زیانی ژینگە.`
        },
        {
          q: "لە کام حاڵەتاندا ڕوجوع دەکرێت؟",
          a: `کۆمپانیای بیمە مافی هەیە بڕی پارەی دراو بگێڕێتەوە، ئەگەر شۆفێر:
            • بە مەبەست کاریکردبێت؛
            • سەرخۆش بووبێت یان لە ژێر کاریگەری ماددەی هۆشبەردا بووبێت؛
            • مۆڵەتی شۆفێری نەبووبێت؛
            • لە شوێنی ڕووداوی هاتووچۆ ڕایکردبێت؛
            • ئۆتۆمبێلی دزراو بەکارهێنابێت.`
        },
        {
          q: "پۆلیس کەی دەست پێدەکات و کەی کۆتایی دێت؟",
          a: `دەستپێک: ڕێکەوتی دەرکردنی پۆلیس.

              ماوەکانی بەردەست: ٣٠، ٦٠، ٩٠، ١٨٠ یان ٣٦٤ ڕۆژ.

              کۆتایی:
              • تەواوبوونی ماوە؛
              • دزینی ئۆتۆمبێل یان لەکارخستن/سڕینەوەی؛
              • لابردن لە تۆمار.`
        },
      ],
    },

    verify: {
      title: "پشکنینی کاریگەری پۆلیس",
      lead:
        "ئەگەر دەتانەوێت دڵنیا بن کە پۆلیسەکەتان بەڕاستی چالاکە، بنکە فەرمییەکانی مەکتەبەکانی بیمە بەکاربهێنن. لە خوارەوە بەستەرەکانی خزمەتگوزارییەکان بۆ پۆڵەندا، لاتفیا و لیتوانیا هەن.",
      items: [
        {
          code: "PL",
          country: "پۆڵەندا",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "پشکنینی کاریگەری پۆلیسی OC بە ژمارەی تۆمارکردن یان VIN لە بنکەی فەرمی UFG.",
          cta: "چوون بۆ ماڵپەڕی UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "لاتفیا",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "پشکنینی بیمەی ناچاری OCTA بۆ ئامرازەکانی گواستنەوەی تۆمارکراو لە لاتفیا.",
          cta: "پشکنین لە ڕێگەی LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "لیتوانیا",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "خزمەتگوزاری پشکنینی کاریگەری پۆلیسی بیمەی ناچاری بەرپرسیاری مەدەنی لە لیتوانیا.",
          cta: "پشکنین لە ڕێگەی CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "ئێستا کراوەیە",
      closedLabel: "ئێستا داخراوە",

      openDetails: "بەپێی کاتی ئێوە تا {time} کار دەکەین",

      closingSoonHoursMinutes:
        "تا کۆتایی ڕۆژی کاری {hours} کاتژمێر و {minutes} خولەک ماوە",
      closingSoonHours: "تا کۆتایی ڕۆژی کاری {hours} کاتژمێر ماوە",
      closingSoonMinutes: "تا کۆتایی ڕۆژی کاری {minutes} خولەک ماوە",
      closingSoonExtra:
        "دەتوانن ئێستا داواکاری بنێرن. ئەگەر پشکنینی دەستی پێویست بێت، پێش داخستن یان لە ڕۆژی کاری داهاتوودا چارەسەری دەکەین.",

      closedBeforeOpeningToday:
        "ئەمڕۆ لە {time} بەپێی کاتی ئێوە دەکرێینەوە",
      closedUntilTomorrow:
        "سبەی لە {time} بەپێی کاتی ئێوە دەکرێینەوە",
      closedUntilMonday:
        "ڕۆژی دووشەممە لە {time} بەپێی کاتی ئێوە دەکرێینەوە",
      closedExtra:
        "دەتوانن ئێستا داواکاری بنێرن — لە کاتی کاردا چارەسەری دەکەین.",

      timezoneNote:
        "کات بەپێی ناوچەی کاتی ئامێرەکەتان پیشان دەدرێت: {timezone}.",
    },
  },
  kmr: {
    hero: {
      kicker: "Serhêl amadekirin",
      title: "OC graniczne serhêl ji bo otomobîla ku li derveyî EEA hatî tomar kirin",
      lead:
        "Em alîkariyê dikin ku hûn peymana sîgorteya derbasbûna sînorî ji bo ketina Polonya, YE û welatên din ên di polîsê de hatine destnîşan kirin, ji dûr ve amade bikin.",
      meta: ["Ji bo otomobîlên derveyî EEA", "Polîsa PDF piştî kontrolê", "Parastin tenê li gorî lîsteya welatan"],
      ctaCalc: "Nirxê hesab bike",
      ctaBuy: "Polîsê amade bike",
    },

    calc: {
      title: "Hesabkera nirxê",
      badge: "~ 1 xulek",
      desc: "hesabkera tarîfeyê ya sade",
      termLabel: "Dem",
      vehicleLabel: "Cureyê wesayîtê",
      termOptions: [
        { value: "30", label: "30 roj" },
        { value: "60", label: "60 roj" },
        { value: "90", label: "90 roj" },
        { value: "180", label: "180 roj" },
        { value: "365", label: "364 roj" },
      ],
      vehicleOptions: [
        { value: "car", label: "Otomobîlên kesane" },
        { value: "van", label: "Otobûs" },
        { value: "truck", label: "Kamyon" },
        { value: "trailer", label: "Trailer" },
        { value: "special", label: "Makîneyên taybet" },
      ],
      button: "Hesab bike",
      note: "note",
    },

    process: {
      title: "Ev çawa dixebite",
      desc: "Gav bi gav: hesab → dane → kontrola destan → dayîn → polîsa PDF.",
      steps: [
        { title: "Hesab bikin", text: "Cureyê wesayîtê û dema berdest hilbijêrin: 30, 60, 90, 180 an 364 roj." },
        { title: "Daneyan tije bikin", text: "Sîgortekar, welatê tomarkirinê, jimareya plaka, VIN, taybetmendiyên wesayîtê û agahiyên têkiliyê binivîsin." },
        { title: "Li benda kontrolê bimînin", text: "Em belge, rê û îmkana amadekirina OC graniczne ji bo şertên hilbijartî kontrol dikin." },
        { title: "Polîsa PDF bistînin", text: "Piştî pejirandin û dayînê, polîs ji bo email-a ku di daxwaznameyê de hatî destnîşan kirin tê şandin." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne ji bo otomobîla ku li derveyî Qada Aborî ya Ewropayê hatî tomar kirin guncav e, heke ajokar bêyî Green Card-a derbasdar bikeve Polonya an welatekî din ê ku polîs lê derbasdar e. Ev polîs ji bo otomobîlên ku li welatên EEA hatine tomar kirin guncav nîne. Berî rêwîtiyê divê were kontrol kirin ku welatên pêwîst di polîsê de wekî welatên di parastinê de hatine destnîşan kirin.",
      fit: {
        title: "OC graniczne ji bo kê guncav e",
        items: [
          "otomobîl li derveyî EEA hatî tomar kirin;",
          "Green Card-a derbasdar a ku li ser rê tê qebûlkirin tune ye;",
          "rêwîtî ji Polonya an ji welatên di polîsê de hatine destnîşan kirin derbas dibe;",
          "sîgortekar dikare kesekî fîzîkî an kesekî hiqûqî be;",
          "otomobîlên kesane, kamyon, otobûs, trailer, motorsîklet û makîneyên taybet berdest in.",
        ],
        links: [
          { href: "/rules", label: "Rêgezên amadekirinê" },
          { href: "/product-info", label: "Belgeyên derbarê hilberê de" },
        ],
      },
      notFit: {
        title: "⚠️ Ev polîs ji bo kê guncav nîne",
        items: [
          "otomobîl li Polonya, Lîtvanya, Letonya, Almanya an welatekî din ê EEA hatî tomar kirin;",
          "parastina otomobîla xwe pêwîst e — ev KASKO nîne;",
          "rê ji welatên ku di polîsê de nehatine destnîşan kirin derbas dibe;",
          "pêwîst e polîs bi dîrokeke paşve were amadekirin;",
          "ji bo rêwîtiya Tirkiye, Sirbistan an welatên din ên derveyî lîsteya parastinê, heke ew welat di belgeyê de nehatibin destnîşan kirin, hilberekî din pêwîst e.",
        ],
      },
      service: {
        title: "Kî polîsê amade dike",
        text: "Xizmeta greencard.agency alîkariyê dike ku peymana sîgorteya sînorî OC graniczne ji dûr ve were amadekirin. Daxwazname serhêl tê qebûlkirin, dane û belge bi destan têne kontrol kirin, û piştî amadekirin û dayînê xerîdar polîsa PDF bi emailê distîne.",
        items: [
          "daxwaznameyê serhêl qebûl dikin;",
          "belge û daneyên otomobîlê kontrol dikin;",
          "zelal dikin ka OC graniczne ji bo welatê tomarkirinê û rêyê guncav e an na;",
          "polîsê amade dikin û PDF bi emailê dişînin;",
          "alîkarî dikin ku hûn kontrol bikin kîjan welat di parastinê de hatine destnîşan kirin.",
        ],
      },
      documents: {
        title: "Kîjan dane û belge pêwîst in",
        text: "Çêtir e belge berî tije kirina formê werin amade kirin: bêyî belgeya tomarkirinê ya xwendinbar, ne gengaz e ku jimare, VIN, welatê tomarkirinê û taybetmendiyên otomobîlê rast werin kontrol kirin.",
        items: [
          "belgeya tomarkirina wesayîtê / pasaporta teknîkî;",
          "pasaport an ID ya sîgortekar;",
          "jimareya plaka û VIN;",
          "marka, model, sala çêkirinê;",
          "welatê tomarkirina otomobîlê û cureyê wesayîtê;",
          "qebare û hêza motorê;",
          "dîroka destpêkê û dema sîgorteyê;",
          "email û telefon ji bo têkiliyê;",
          "şirove, heke rê ne standard be an di navbera 30–364 rojan de heyama rast a parastinê pêwîst be.",
        ],
        link: { href: "/product-info", label: "Agahiyên derbarê hilberê de vekin" },
      },
      price: {
        title: "OC graniczne çiqas e",
        text: "Nirx girêdayî cureyê wesayîtê û dema sîgorteyê ye. Di hesabkerê de nirxa texmînî ji bo parametreyên hilbijartî hatiye nîşandan. Îmkana dawî ya amadekirinê û nirx piştî kontrolkirina daneyên otomobîlê û belgeyan têne pejirandin.",
        items: [
          "demên berdest: 30, 60, 90, 180 an 364 roj;",
          "tarîfe girêdayî kategorîya wesayîtê ye;",
          "nirx berî dayînê tê pejirandin;",
          "heke dane têr nebin, rêveber dê berî derxistina polîsê wan zelal bike.",
        ],
      },
      timing: {
        title: "Dema amadekirinê û kontrola destan",
        text: "Heke hemû dane û belge rast bin, amadekirin dikare di demên kar de nêzîkî 10–20 xulekan bigire. Heke kontrola destan, hevpeymanî an sererastkirina daneyan pêwîst be, amadekirin dê demeke dirêjtir bigire. Çêtir e daxwazname 1–2 rojên kar berî destpêka rêwîtiyê were şandin. Polîs bi dîroka paşve nayê amadekirin.",
      },
      notCovered: {
        title: "OC graniczne li ku derbasdar nîne",
        text: "Polîs li welatên ku di belgeyê de wekî welatên di parastinê de nehatine destnîşan kirin derbasdar nîne. Mînak, heke di polîsê de Tirkiye, Sirbistan, Montenegro, Makedonyaya Bakur, Bosna û Herzegovina an welatekî din ê rêyê nehatibe destnîşan kirin, ev polîs ji bo wê beşa rêwîtiyê nayê bikaranîn. Berî dayînê û berî derketinê lîsteya welatên parastinê di belgeyê de kontrol bikin.",
        link: { href: "#coverage", label: "Welatên parastinê bibînin" },
      },
      checkPolicy: {
        title: "Berî rêwîtiyê di polîsê de divê çi were kontrol kirin",
        text: "Heke di polîsê de xeletî hebe, wê bi kar neynin. Daneyên di PDF de divê bi belgeya tomarkirina otomobîlê û şertên rêwîtiyê yên ragihandî re yek bin.",
        items: [
          "jimareya plaka;",
          "VIN;",
          "welatê tomarkirinê;",
          "marka û model;",
          "dîroka destpêk û dawî;",
          "cureyê wesayîtê;",
          "welatên parastinê;",
          "daneyên sîgortekar.",
        ],
        link: { href: "#verify", label: "Polîsê kontrol bike" },
      },
    },

    why: {
      title: "Xizmet çi dike",
      desc: "Çalakiyên taybet di pêvajoya amadekirina OC graniczne de.",
      items: [
        { title: "Daxwaznameyê serhêl qebûl dikin", text: "Daneyên sîgortekar û otomobîlê bi rêya formê tên şandin, bêyî serdana ofîsê." },
        { title: "Belgeyan kontrol dikin", text: "VIN, jimareya plaka, welatê tomarkirinê, cureyê wesayîtê û dema sîgorteyê berhev dikin û kontrol dikin." },
        { title: "Guncavbûnê zelal dikin", text: "Kontrol dikin ka OC graniczne ji bo welatê tomarkirinê û rêyê guncav e an na." },
        { title: "PDF dişînin", text: "Piştî amadekirin û dayînê polîsê bi emailê dişînin û di kontrolkirina parastinê de alîkarî dikin." },
      ],
    },

    form: {
      title: "Forma daxwaznameyê",
      desc: "Daneyan tije bikin — em polîsê amade dikin û daneyên dayînê ji we re dişînin.",
    },

    faq: {
      title: "FAQ",
      desc: "Bersivên kurt ji bo pirsên gelemperî.",
      items: [
        { q: "Ma dikare OC graniczne serhêl were amadekirin?", a: "Erê. Daxwazname dikare serhêl were şandin. Dane bi destan têne kontrol kirin, û piştî amadekirin, pejirandin û dayînê polîsa PDF bi emailê tê şandin." },
        { q: "Ev polîs ji bo kê guncav e?", a: "Ev polîs ji bo otomobîla ku li derveyî EEA hatî tomar kirin guncav e, heke rêwîtî ji Polonya an welatekî din ê di polîsê de hatî destnîşan kirin derbas bibe û Green Card-a derbasdar tune be." },
        { q: "Ma OC graniczne ji bo otomobîlekê ji Polonya an welatekî din ê EEA guncav e?", a: "Na. Ji bo otomobîlên ku li Polonya, Lîtvanya, Letonya, Almanya û welatên din ên EEA hatine tomar kirin, ev hilber guncav nîne." },
        { q: "Polîs li kîjan welatan derbasdar e?", a: "Polîs tenê li welatên ku di belgeyê de wekî parastî hatine destnîşan kirin derbasdar e. Berî rêwîtiyê kontrol bikin ku hemû welatên rêyê di parastinê de hene." },
        { q: "Ma polîs li Tirkiye an Sirbistanê derbasdar e?", a: "Na, heke Tirkiye an Sirbistan di belgeyê de wekî welatên parastî nehatibin destnîşan kirin. Ji bo wan welatan dibe ku sîgorteya sînorî ya herêmî an hilberekî din pêwîst be." },
        { q: "Ma dikare polîs di roja rêwîtiyê de were amadekirin?", a: "Carinan ev gengaz e, heke hemû dane û belge rast bin. Heke kontrola destan, hevpeymanî an sererastkirina daneyan pêwîst be, amadekirin dê demeke dirêjtir bigire. Çêtir e daxwazname 1–2 rojên kar berî rêwîtiyê were şandin." },
        { q: "Ma dikare OC graniczne bi dîroka paşve were amadekirin?", a: "Na. Polîs bi dîroka paşve nayê amadekirin. Dîroka destpêka derbasbûnê di dema amadekirinê de tê destnîşan kirin, û polîs tenê di nav maweyê ku di belgeyê de hatiye destnîşan kirin de dikare were bikaranîn." },
        { q: "Kîjan belge pêwîst in?", a: "Belgeya tomarkirina wesayîtê / pasaporta teknîkî, pasaport an ID ya sîgortekar, jimareya plaka, VIN, marka, model, sala çêkirinê, welatê tomarkirinê, cureyê wesayîtê, dîroka destpêk û dema sîgorteyê, email û telefon pêwîst in." },
        { q: "Di sertîfîkayê de çi hatiye nîşandan?", a: "Di belgeyê de daneyên otomobîlê, dema derbasbûnê, welatê tomarkirinê, cureyê wesayîtê, daneyên sîgortekar û lîsteya welatên parastinê têne nîşandan." },
        { q: "Heke di polîsê de xeletî hebe çi bikin?", a: "Polîsa bi daneyên xelet bi kar neynin. Berî rêwîtiyê bi me re têkilî daynin da ku îmkana sererastkirinê were kontrol kirin. Hin xeletî dikarin amadekirina nû hewce bikin." },
        { q: "Ma ez polîsê wekî PDF distînim?", a: "Erê. Piştî kontrolkirina daneyan, amadekirina polîsê û dayînê, belgeya PDF ji bo email-a ku di daxwaznameyê de hatî destnîşan kirin tê şandin." },
        { q: "Ma dikare bi kartê were dayîn?", a: "Di vê qonaxê de veguheztinên SWIFT, SEPA û P2P, herwiha dayîna BLIK berdest in. Piştî amadekirina polîsê hûn daneyên dayînê distînin." },
        { q: "Ma ev heman tişt e wekî «karta kesk»?", a: "Na. OC graniczne û Green Card du hilberên cuda ne, bi rêgezên amadekirinê, guncavbûn û herêma derbasbûnê ya cuda." },
        { q: "Ev çi cure sîgorte ye?", a: "Ev sîgorteya mecbûrî ya berpirsiyariya medenî ya xwedî an bikarhênerê wesayîta motorî ye, ku tenê li welatên di polîsê de hatine destnîşan kirin derbasdar e." },
        {
          q: "Sîgorte çi diparêze?",
          a: `Parastin van tiştan digire nav xwe:
            • Zirara li jiyan an tenduristiya kesên zirar dîtî;
            • Zirara malî ya li kesên sêyemîn.
            
            Kêmtirîn mîqdarên garantîkirî:
            •  29 876 400 PLN — birînên bedenî;
            •  6 021 600 PLN — zirara malî.`
        },
        {
          q: "Sîgorte çi naparêze?",
          a: `•  bisiklêt û wesayîtên nemotorî;
              •  zirara xwediyê otomobîlê;
              •  zirara li jîngehê.`
        },
        {
          q: "Di kîjan rewşan de regres gengaz e?",
          a: `Şirketa sîgorteyê maf heye pereyê dayî vegerîne, heke ajokar:
            • bi qesd tevgeriyabe;
            • serxweş bûbe an di bin bandora narkotîkan de bûbe;
            • mafê ajotinê nebûbe;
            • ji cihê qezaya trafîkê reviyabe;
            • otomobîla dizî bikar anîbe.`
        },
        {
          q: "Polîs kengî dest pê dike û kengî bi dawî dibe?",
          a: `Destpêk: dîroka derxistina polîsê.

              Demên berdest: 30, 60, 90, 180 an 364 roj.

              Rawestandina polîsê:
              • qediya maweyê;
              • dizîna otomobîlê an ji kar derxistinê;
              • derxistin ji tomarê.`
        },
      ],
    },

    verify: {
      title: "Kontrolkirina derbasdariya polîsê",
      lead:
        "Heke hûn dixwazin piştrast bibin ku polîsa we bi rastî çalak e, bingehên fermî yên nivîsgehên sîgorteyê bi kar bînin. Li jêr girêdanên xizmetên Polonya, Letonya û Lîtvanya hene.",
      items: [
        {
          code: "PL",
          country: "Polonya",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Kontrolkirina derbasdariya polîsa OC bi jimareya tomarê an VIN di bingeha fermî ya UFG de.",
          cta: "Herin ser malpera UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letonya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Kontrolkirina sîgorteya mecbûrî OCTA ji bo wesayîtên li Letonya hatine tomar kirin.",
          cta: "Bi LTAB kontrol bike",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lîtvanya",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Xizmeta kontrolkirina derbasdariya polîsa sîgorteya mecbûrî ya berpirsiyariya medenî li Lîtvanya.",
          cta: "Bi CAB kontrol bike",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Niha vekirî ye",
      closedLabel: "Niha girtî ye",

      openDetails: "em heta {time} li gorî dema we dixebitin",

      closingSoonHoursMinutes:
        "heta dawîya roja kar {hours} saet û {minutes} xulek mane",
      closingSoonHours: "heta dawîya roja kar {hours} saet mane",
      closingSoonMinutes: "heta dawîya roja kar {minutes} xulek mane",
      closingSoonExtra:
        "Hûn dikarin niha daxwaznameyê bişînin. Heke kontrola destan pêwîst be, em wê berî girtinê an roja kar a din pêk tînin.",

      closedBeforeOpeningToday:
        "em îro di {time} de li gorî dema we vedibin",
      closedUntilTomorrow:
        "em sibê di {time} de li gorî dema we vedibin",
      closedUntilMonday:
        "em roja duşemê di {time} de li gorî dema we vedibin",
      closedExtra:
        "Hûn dikarin niha daxwaznameyê bişînin — em wê di demên kar de pêk tînin.",

      timezoneNote:
        "Dem li gorî herêma demê ya amûra we tê nîşandan: {timezone}.",
    },
  },
  ar: {
    hero: {
      kicker: "إصدار عبر الإنترنت",
      title: "OC graniczne عبر الإنترنت لسيارة مسجّلة خارج المنطقة الاقتصادية الأوروبية",
      lead:
        "نساعدك على إبرام عقد تأمين عابر للحدود عن بُعد للدخول إلى بولندا والاتحاد الأوروبي والدول الأخرى المذكورة في الوثيقة.",
      meta: ["للسيارات خارج المنطقة الاقتصادية الأوروبية", "وثيقة PDF بعد التحقق", "التغطية فقط وفق قائمة الدول"],
      ctaCalc: "احسب التكلفة",
      ctaBuy: "إصدار الوثيقة",
    },

    calc: {
      title: "حاسبة التكلفة",
      badge: "~ دقيقة واحدة",
      desc: "حاسبة تعريفة بسيطة",
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
        { value: "car", label: "سيارات ركوب" },
        { value: "van", label: "حافلات" },
        { value: "truck", label: "شاحنات" },
        { value: "trailer", label: "مقطورات" },
        { value: "special", label: "آليات خاصة" },
      ],
      button: "احسب",
      note: "note",
    },

    process: {
      title: "كيف يعمل ذلك",
      desc: "خطوة بخطوة: حساب → بيانات → تحقق يدوي → دفع → وثيقة PDF.",
      steps: [
        { title: "احسب", text: "اختر نوع المركبة والمدة المتاحة: 30 أو 60 أو 90 أو 180 أو 364 يومًا." },
        { title: "املأ البيانات", text: "اذكر حامل الوثيقة، وبلد التسجيل، ورقم اللوحة، وVIN، ومواصفات المركبة وبيانات الاتصال." },
        { title: "انتظر التحقق", text: "سنراجع المستندات والمسار وإمكانية إصدار OC graniczne وفق الشروط المختارة." },
        { title: "استلم وثيقة PDF", text: "بعد التأكيد والدفع، تُرسل الوثيقة إلى عنوان email المذكور في الطلب." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "يناسب OC graniczne السيارة المسجّلة خارج المنطقة الاقتصادية الأوروبية إذا كان السائق يدخل بولندا أو دولة أخرى يسري فيها مفعول الوثيقة من دون Green Card سارية. لا تناسب هذه الوثيقة السيارات المسجّلة في دول المنطقة الاقتصادية الأوروبية. قبل السفر يجب التحقق من أن الدول المطلوبة مذكورة في الوثيقة بوصفها مشمولة بالتغطية.",
      fit: {
        title: "لمن يناسب OC graniczne",
        items: [
          "السيارة مسجّلة خارج المنطقة الاقتصادية الأوروبية؛",
          "لا توجد Green Card سارية ومعترف بها على المسار؛",
          "تمر الرحلة عبر بولندا أو الدول المذكورة في الوثيقة؛",
          "يمكن أن يكون حامل الوثيقة شخصًا طبيعيًا أو شخصًا اعتباريًا؛",
          "تتوفر سيارات الركوب، والشاحنات، والحافلات، والمقطورات، والدراجات النارية، والآليات الخاصة.",
        ],
        links: [
          { href: "/rules", label: "قواعد الإصدار" },
          { href: "/product-info", label: "مستندات المنتج" },
        ],
      },
      notFit: {
        title: "⚠️ لمن لا تناسب هذه الوثيقة",
        items: [
          "السيارة مسجّلة في بولندا أو ليتوانيا أو لاتفيا أو ألمانيا أو دولة أخرى من دول المنطقة الاقتصادية الأوروبية؛",
          "تحتاج إلى حماية سيارتك نفسها — هذا ليس تأمين كاسكو؛",
          "يمر المسار عبر دول غير مذكورة في الوثيقة؛",
          "تحتاج إلى إصدار الوثيقة بتاريخ سابق؛",
          "للسفر إلى تركيا أو صربيا أو دول أخرى خارج قائمة التغطية، يلزم منتج آخر إذا لم تكن هذه الدول مذكورة في المستند.",
        ],
      },
      service: {
        title: "من يصدر الوثيقة",
        text: "يساعدك موقع greencard.agency على إبرام عقد تأمين حدودي OC graniczne عن بُعد. يُقبل الطلب عبر الإنترنت، وتُراجع البيانات والمستندات يدويًا، وبعد الإعداد والدفع يتلقى العميل وثيقة PDF على email.",
        items: [
          "نستقبل الطلب عبر الإنترنت؛",
          "نراجع مستندات السيارة وبياناتها؛",
          "نوضح ما إذا كان OC graniczne مناسبًا لبلد التسجيل والمسار؛",
          "نُعد الوثيقة ونرسل ملف PDF إلى email؛",
          "نساعد على التحقق من الدول المذكورة في التغطية.",
        ],
      },
      documents: {
        title: "ما البيانات والمستندات المطلوبة",
        text: "من الأفضل إعداد المستندات قبل تعبئة النموذج: فمن دون شهادة تسجيل مقروءة لا يمكن التحقق بدقة من الرقم وVIN وبلد التسجيل ومواصفات السيارة.",
        items: [
          "شهادة تسجيل المركبة / جواز فني؛",
          "جواز سفر أو ID لحامل الوثيقة؛",
          "رقم اللوحة وVIN؛",
          "العلامة التجارية، والطراز، وسنة الصنع؛",
          "بلد تسجيل السيارة ونوع المركبة؛",
          "سعة المحرك وقوته؛",
          "تاريخ بدء التأمين ومدته؛",
          "email ورقم هاتف للتواصل؛",
          "تعليق إذا كان المسار غير معتاد أو إذا كانت هناك حاجة إلى فترة تغطية دقيقة ضمن المدة من 30 إلى 364 يومًا.",
        ],
        link: { href: "/product-info", label: "فتح معلومات المنتج" },
      },
      price: {
        title: "كم تبلغ تكلفة OC graniczne",
        text: "تعتمد التكلفة على نوع المركبة ومدة التأمين. تعرض الحاسبة سعرًا تقديريًا للمعايير المختارة. تُؤكد إمكانية الإصدار النهائية والتكلفة بعد مراجعة بيانات السيارة والمستندات.",
        items: [
          "المدد المتاحة: 30 أو 60 أو 90 أو 180 أو 364 يومًا؛",
          "تعتمد التعريفة على فئة المركبة؛",
          "يُؤكد السعر قبل الدفع؛",
          "إذا كانت البيانات غير كافية، فسيوضحها المدير قبل إصدار الوثيقة.",
        ],
      },
      timing: {
        title: "مدة الإصدار والتحقق اليدوي",
        text: "إذا كانت جميع البيانات والمستندات صحيحة، فقد يستغرق الإصدار نحو 10–20 دقيقة خلال ساعات العمل. وإذا تطلب الأمر تحققًا يدويًا أو موافقة أو تصحيحًا للبيانات، فسيستغرق الإصدار وقتًا أطول. من الأفضل تقديم الطلب قبل بدء الرحلة بيوم أو يومي عمل. لا تُصدر الوثيقة بتاريخ سابق.",
      },
      notCovered: {
        title: "أين لا يسري OC graniczne",
        text: "لا تسري الوثيقة في الدول غير المذكورة في المستند بوصفها مشمولة بالتغطية. فعلى سبيل المثال، إذا لم تكن تركيا أو صربيا أو الجبل الأسود أو مقدونيا الشمالية أو البوسنة والهرسك أو دولة أخرى ضمن المسار مذكورة في الوثيقة، فلا يجوز استخدام هذه الوثيقة لذلك الجزء من الرحلة. قبل الدفع وقبل المغادرة، تحقق من قائمة دول التغطية في المستند.",
        link: { href: "#coverage", label: "عرض دول التغطية" },
      },
      checkPolicy: {
        title: "ما الذي يجب التحقق منه في الوثيقة قبل السفر",
        text: "لا تستخدم الوثيقة إذا كان فيها خطأ. يجب أن تتطابق البيانات في ملف PDF مع مستند تسجيل السيارة وشروط الرحلة المعلنة.",
        items: [
          "رقم اللوحة؛",
          "VIN؛",
          "بلد التسجيل؛",
          "العلامة التجارية والطراز؛",
          "تاريخ البداية والنهاية؛",
          "نوع المركبة؛",
          "دول التغطية؛",
          "بيانات حامل الوثيقة.",
        ],
        link: { href: "#verify", label: "التحقق من الوثيقة" },
      },
    },

    why: {
      title: "ما الذي تقدمه الخدمة",
      desc: "إجراءات محددة ضمن عملية إصدار OC graniczne.",
      items: [
        { title: "نستقبل الطلب عبر الإنترنت", text: "تُرسل بيانات حامل الوثيقة والسيارة عبر النموذج من دون زيارة المكتب." },
        { title: "نراجع المستندات", text: "نطابق VIN ورقم اللوحة وبلد التسجيل ونوع المركبة ومدة التأمين." },
        { title: "نوضح مدى الانطباق", text: "نتحقق مما إذا كان OC graniczne مناسبًا لبلد التسجيل والمسار." },
        { title: "نرسل PDF", text: "بعد الإعداد والدفع، نرسل الوثيقة إلى email ونساعد على التحقق من التغطية." },
      ],
    },

    form: {
      title: "نموذج الطلب",
      desc: "املأ البيانات — سنُعد الوثيقة ونرسل بيانات الدفع.",
    },

    faq: {
      title: "FAQ",
      desc: "إجابات قصيرة عن الأسئلة الشائعة.",
      items: [
        { q: "هل يمكن إصدار OC graniczne عبر الإنترنت؟", a: "نعم. يمكن إرسال الطلب عبر الإنترنت. تُراجع البيانات يدويًا، وبعد الإعداد والتأكيد والدفع تُرسل وثيقة PDF إلى email." },
        { q: "لمن تناسب هذه الوثيقة؟", a: "تناسب الوثيقة السيارة المسجّلة خارج المنطقة الاقتصادية الأوروبية إذا كانت الرحلة تمر عبر بولندا أو دولة أخرى مذكورة في الوثيقة، ولا توجد Green Card سارية." },
        { q: "هل يناسب OC graniczne سيارة من بولندا أو من دولة أخرى ضمن المنطقة الاقتصادية الأوروبية؟", a: "لا. هذا المنتج لا يناسب السيارات المسجّلة في بولندا أو ليتوانيا أو لاتفيا أو ألمانيا أو غيرها من دول المنطقة الاقتصادية الأوروبية." },
        { q: "في أي دول تسري الوثيقة؟", a: "تسري الوثيقة فقط في الدول المذكورة في المستند بوصفها مشمولة بالتغطية. قبل السفر، تحقق من أن جميع دول المسار مشمولة بالتغطية." },
        { q: "هل تسري الوثيقة في تركيا أو صربيا؟", a: "لا، إذا لم تكن تركيا أو صربيا مذكورتين في المستند بوصفهما من الدول المشمولة بالتغطية. وقد يلزم لهذه الدول تأمين حدودي محلي أو منتج آخر." },
        { q: "هل يمكن إصدار الوثيقة في يوم السفر؟", a: "قد يكون ذلك ممكنًا أحيانًا إذا كانت جميع البيانات والمستندات صحيحة. وإذا تطلب الأمر تحققًا يدويًا أو موافقة أو تصحيحًا للبيانات، فسيستغرق الإصدار وقتًا أطول. من الأفضل تقديم الطلب قبل الرحلة بيوم أو يومي عمل." },
        { q: "هل يمكن إصدار OC graniczne بتاريخ سابق؟", a: "لا. لا تُصدر الوثيقة بتاريخ سابق. يُحدد تاريخ بدء السريان عند الإصدار، ولا يمكن استخدام الوثيقة إلا ضمن مدة السريان المذكورة في المستند." },
        { q: "ما المستندات المطلوبة؟", a: "مطلوب شهادة تسجيل المركبة / الجواز الفني، وجواز سفر أو ID لحامل الوثيقة، ورقم اللوحة، وVIN، والعلامة التجارية، والطراز، وسنة الصنع، وبلد التسجيل، ونوع المركبة، وتاريخ بدء التأمين ومدته، وemail ورقم الهاتف." },
        { q: "ما المذكور في الشهادة؟", a: "يُذكر في المستند بيانات السيارة، ومدة السريان، وبلد التسجيل، ونوع المركبة، وبيانات حامل الوثيقة، وقائمة دول التغطية." },
        { q: "ماذا أفعل إذا كان في الوثيقة خطأ؟", a: "لا تستخدم وثيقة تحتوي على بيانات خاطئة. تواصل معنا قبل السفر للتحقق من إمكانية التصحيح. قد تتطلب بعض الأخطاء إعادة الإصدار." },
        { q: "هل سأحصل على الوثيقة بصيغة PDF؟", a: "نعم. بعد التحقق من البيانات وإعداد الوثيقة والدفع، يُرسل مستند PDF إلى email المذكور في الطلب." },
        { q: "هل يمكن الدفع بالبطاقة؟", a: "في هذه المرحلة تتوفر تحويلات SWIFT وSEPA وP2P، وكذلك الدفع عبر BLIK. بعد إعداد الوثيقة تحصل على بيانات الدفع." },
        { q: "هل هذا هو نفسه «البطاقة الخضراء»؟", a: "لا. OC graniczne وGreen Card منتجان مختلفان، ولهما قواعد إصدار وانطباق ونطاق إقليمي مختلف." },
        { q: "ما نوع هذا التأمين؟", a: "هذا تأمين إلزامي للمسؤولية المدنية لمالك أو مستخدم مركبة ميكانيكية، ولا يسري إلا في الدول المذكورة في الوثيقة." },
        {
          q: "ماذا يغطي التأمين؟",
          a: `تشمل التغطية:
            • الضرر اللاحق بحياة أو صحة المتضررين؛
            • الضرر المادي اللاحق بالغير.
            
            الحدود الدنيا للمبالغ المضمونة:
            •  29 876 400 PLN — إصابات بدنية؛
            •  6 021 600 PLN — أضرار مادية.`
        },
        {
          q: "ما الذي لا يغطيه التأمين؟",
          a: `•  الدراجات والمركبات غير الميكانيكية؛
              •  الضرر اللاحق بمالك السيارة؛
              •  الضرر اللاحق بالبيئة.`
        },
        {
          q: "في أي الحالات يمكن الرجوع على السائق؟",
          a: `يحق لشركة التأمين استرداد المبلغ المدفوع إذا كان السائق:
            • قد تصرف عمدًا؛
            • في حالة سُكر أو تحت تأثير المخدرات؛
            • لا يملك رخصة قيادة؛
            • فرّ من موقع الحادث؛
            • استخدم سيارة مسروقة.`
        },
        {
          q: "متى تبدأ الوثيقة ومتى تنتهي؟",
          a: `البداية: تاريخ إصدار الوثيقة.

              المدد المتاحة: 30 أو 60 أو 90 أو 180 أو 364 يومًا.

              الانتهاء:
              • انتهاء المدة؛
              • سرقة السيارة أو شطبها؛
              • إلغاء التسجيل.`
        },
      ],
    },

    verify: {
      title: "التحقق من صلاحية الوثيقة",
      lead:
        "إذا أردت التأكد من أن وثيقتك نشطة فعلًا، فاستخدم قواعد البيانات الرسمية لمكاتب التأمين. فيما يلي روابط لخدمات بولندا ولاتفيا وليتوانيا.",
      items: [
        {
          code: "PL",
          country: "بولندا",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "التحقق من صلاحية وثيقة OC برقم التسجيل أو VIN في قاعدة UFG الرسمية.",
          cta: "الانتقال إلى موقع UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "لاتفيا",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "التحقق من تأمين OCTA الإلزامي للمركبات المسجّلة في لاتفيا.",
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
    businessHours: {
      openLabel: "مفتوح الآن",
      closedLabel: "مغلق الآن",

      openDetails: "نعمل حتى {time} بحسب وقتك المحلي",

      closingSoonHoursMinutes:
        "ينتهي يوم العمل بعد {hours} ساعة و{minutes} دقيقة",
      closingSoonHours: "ينتهي يوم العمل بعد {hours} ساعة",
      closingSoonMinutes: "ينتهي يوم العمل بعد {minutes} دقيقة",
      closingSoonExtra:
        "يمكنك إرسال الطلب الآن. إذا تطلب الأمر تحققًا يدويًا، فسنعالجه قبل الإغلاق أو في يوم العمل التالي.",

      closedBeforeOpeningToday:
        "نفتح اليوم في {time} بحسب وقتك المحلي",
      closedUntilTomorrow:
        "نفتح غدًا في {time} بحسب وقتك المحلي",
      closedUntilMonday:
        "نفتح يوم الاثنين في {time} بحسب وقتك المحلي",
      closedExtra:
        "يمكنك إرسال الطلب الآن — سنعالجه خلال ساعات العمل.",

      timezoneNote:
        "يُعرض الوقت وفق المنطقة الزمنية لجهازك: {timezone}.",
    },
  },
  uk: {
    hero: {
      kicker: "Онлайн-оформлення",
      title: "OC graniczne онлайн для автомобіля, зареєстрованого за межами ЄЕЗ",
      lead:
        "Ми допомагаємо дистанційно оформити договір транскордонного страхування для в’їзду до Польщі, ЄС та інших країн, зазначених у полісі.",
      meta: ["Для авто поза ЄЕЗ", "PDF-поліс після перевірки", "Покриття лише за списком країн"],
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
        { value: "car", label: "Легкові" },
        { value: "van", label: "Автобуси" },
        { value: "truck", label: "Вантажні" },
        { value: "trailer", label: "Причепи" },
        { value: "special", label: "Спецтехніка" },
      ],
      button: "Розрахувати",
      note: "note",
    },

    process: {
      title: "Як це працює",
      desc: "Покроково: розрахунок → дані → ручна перевірка → оплата → PDF-поліс.",
      steps: [
        { title: "Розрахуйте", text: "Оберіть тип транспортного засобу та доступний строк: 30, 60, 90, 180 або 364 дні." },
        { title: "Заповніть дані", text: "Вкажіть страхувальника, країну реєстрації, державний номер, VIN, параметри ТЗ та контакти." },
        { title: "Дочекайтеся перевірки", text: "Ми звіримо документи, маршрут і можливість оформлення OC graniczne для вибраних умов." },
        { title: "Отримайте PDF-поліс", text: "Після підтвердження та оплати поліс надсилається на email, зазначений у заявці." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne підходить для автомобіля, зареєстрованого за межами Європейської економічної зони, якщо водій в’їжджає до Польщі або іншої країни дії поліса без чинної Green Card. Поліс не підходить для автомобілів, зареєстрованих у країнах ЄЕЗ. Перед поїздкою потрібно перевірити, що потрібні країни зазначені в полісі як покриті.",
      fit: {
        title: "Кому підходить OC graniczne",
        items: [
          "автомобіль зареєстрований за межами ЄЕЗ;",
          "немає чинної Green Card, яка визнається на маршруті;",
          "поїздка проходить через Польщу або країни, зазначені в полісі;",
          "страхувальником може бути фізична або юридична особа;",
          "доступні легкові авто, вантажні, автобуси, причепи, мотоцикли та спецтехніка.",
        ],
        links: [
          { href: "/rules", label: "Правила оформлення" },
          { href: "/product-info", label: "Документи про продукт" },
        ],
      },
      notFit: {
        title: "⚠️ Кому цей поліс не підходить",
        items: [
          "авто зареєстроване в Польщі, Литві, Латвії, Німеччині або іншій країні ЄЕЗ;",
          "потрібен захист власного автомобіля — це не КАСКО;",
          "маршрут проходить країнами, не зазначеними в полісі;",
          "потрібно оформити поліс заднім числом;",
          "для поїздки до Туреччини, Сербії або інших країн поза списком покриття потрібен інший продукт, якщо ці країни не зазначені в документі.",
        ],
      },
      service: {
        title: "Хто оформлює поліс",
        text: "Сервіс greencard.agency допомагає дистанційно оформити договір прикордонного страхування OC graniczne. Заявка приймається онлайн, дані та документи перевіряються вручну, після підготовки й оплати клієнт отримує PDF-поліс на email.",
        items: [
          "приймаємо заявку онлайн;",
          "перевіряємо документи та дані автомобіля;",
          "уточнюємо, чи підходить OC graniczne під країну реєстрації та маршрут;",
          "готуємо поліс і надсилаємо PDF на email;",
          "допомагаємо перевірити, які країни зазначені в покритті.",
        ],
      },
      documents: {
        title: "Які дані та документи потрібні",
        text: "Документи краще підготувати до заповнення форми: без читабельного свідоцтва про реєстрацію неможливо коректно перевірити номер, VIN, країну реєстрації та параметри автомобіля.",
        items: [
          "свідоцтво про реєстрацію ТЗ / техпаспорт;",
          "паспорт або ID страхувальника;",
          "номерний знак і VIN;",
          "марка, модель, рік випуску;",
          "країна реєстрації автомобіля та тип ТЗ;",
          "об’єм і потужність двигуна;",
          "дата початку та строк страхування;",
          "email і телефон для зв’язку;",
          "коментар, якщо маршрут нестандартний або потрібен точний період покриття в проміжку 30–364 дні.",
        ],
        link: { href: "/product-info", label: "Відкрити інформацію про продукт" },
      },
      price: {
        title: "Скільки коштує OC graniczne",
        text: "Вартість залежить від типу транспортного засобу та строку страхування. У калькуляторі вказана орієнтовна ціна для вибраних параметрів. Остаточна можливість оформлення та вартість підтверджуються після перевірки даних автомобіля й документів.",
        items: [
          "доступні строки: 30, 60, 90, 180 або 364 дні;",
          "тариф залежить від категорії ТЗ;",
          "ціна підтверджується до оплати;",
          "якщо даних недостатньо, менеджер уточнить їх до випуску поліса.",
        ],
      },
      timing: {
        title: "Строк оформлення та ручна перевірка",
        text: "Якщо всі дані й документи коректні, оформлення може зайняти близько 10–20 хвилин у робочий час. Якщо потрібна ручна перевірка, погодження або виправлення даних, оформлення займе більше часу. Краще подати заявку за 1–2 робочі дні до початку поїздки. Поліс не оформлюється заднім числом.",
      },
      notCovered: {
        title: "Де OC graniczne не діє",
        text: "Поліс не діє в країнах, які не зазначені в документі як покриті. Наприклад, якщо в полісі не зазначена Туреччина, Сербія, Чорногорія, Північна Македонія, Боснія і Герцеговина або інша країна маршруту, використовувати цей поліс для такої частини поїздки не можна. Перед оплатою та перед виїздом перевірте перелік країн покриття в документі.",
        link: { href: "#coverage", label: "Переглянути країни покриття" },
      },
      checkPolicy: {
        title: "Що перевірити в полісі перед поїздкою",
        text: "Не використовуйте поліс, якщо в ньому є помилка. Дані в PDF мають збігатися з реєстраційним документом автомобіля та заявленими умовами поїздки.",
        items: [
          "номерний знак;",
          "VIN;",
          "країна реєстрації;",
          "марка і модель;",
          "дата початку та закінчення;",
          "тип ТЗ;",
          "країни покриття;",
          "дані страхувальника.",
        ],
        link: { href: "#verify", label: "Перевірити поліс" },
      },
    },

    why: {
      title: "Що робить сервіс",
      desc: "Конкретні дії в процесі оформлення OC graniczne.",
      items: [
        { title: "Приймаємо заявку онлайн", text: "Дані страхувальника та автомобіля передаються через форму без візиту до офісу." },
        { title: "Перевіряємо документи", text: "Звіряємо VIN, номерний знак, країну реєстрації, тип ТЗ і строк страхування." },
        { title: "Уточнюємо застосовність", text: "Перевіряємо, чи підходить OC graniczne під країну реєстрації та маршрут." },
        { title: "Надсилаємо PDF", text: "Після підготовки та оплати надсилаємо поліс на email і допомагаємо перевірити покриття." },
      ],
    },

    form: {
      title: "Форма заявки",
      desc: "Заповніть дані — ми підготуємо поліс і надішлемо дані для оплати.",
    },

    faq: {
      title: "FAQ",
      desc: "Короткі відповіді на часті запитання.",
      items: [
        { q: "Чи можна оформити OC graniczne онлайн?", a: "Так. Заявку можна надіслати онлайн. Дані перевіряються вручну, після підготовки, підтвердження та оплати PDF-поліс надсилається на email." },
        { q: "Кому підходить цей поліс?", a: "Поліс підходить для автомобіля, зареєстрованого за межами ЄЕЗ, якщо поїздка проходить через Польщу або іншу країну, зазначену в полісі, і немає чинної Green Card." },
        { q: "Чи підходить OC graniczne для автомобіля з Польщі або іншої країни ЄЕЗ?", a: "Ні. Для автомобілів, зареєстрованих у Польщі, Литві, Латвії, Німеччині та інших країнах ЄЕЗ, цей продукт не підходить." },
        { q: "У яких країнах діє поліс?", a: "Поліс діє лише в країнах, зазначених у документі як покриті. Перед поїздкою перевірте, що всі країни маршруту включені до покриття." },
        { q: "Чи діє поліс у Туреччині або Сербії?", a: "Ні, якщо Туреччина або Сербія не зазначені в документі як покриті країни. Для таких країн може знадобитися місцеве прикордонне страхування або інший продукт." },
        { q: "Чи можна оформити поліс у день поїздки?", a: "Іноді це можливо, якщо всі дані й документи коректні. Якщо потрібна ручна перевірка, погодження або виправлення даних, оформлення займе більше часу. Краще подати заявку за 1–2 робочі дні до поїздки." },
        { q: "Чи можна оформити OC graniczne заднім числом?", a: "Ні. Поліс не оформлюється заднім числом. Дата початку дії вказується під час оформлення, а використовувати поліс можна лише в межах строку дії, зазначеного в документі." },
        { q: "Які документи потрібні?", a: "Потрібні свідоцтво про реєстрацію ТЗ / техпаспорт, паспорт або ID страхувальника, номерний знак, VIN, марка, модель, рік випуску, країна реєстрації, тип ТЗ, дата початку та строк страхування, email і телефон." },
        { q: "Що зазначено в сертифікаті?", a: "У документі зазначаються дані автомобіля, строк дії, країна реєстрації, тип ТЗ, дані страхувальника та перелік країн покриття." },
        { q: "Що робити, якщо в полісі помилка?", a: "Не використовуйте поліс з помилковими даними. Зв’яжіться з нами до поїздки, щоб перевірити можливість виправлення. Деякі помилки можуть вимагати переоформлення." },
        { q: "Чи отримаю я поліс у PDF?", a: "Так. Після перевірки даних, підготовки поліса та оплати PDF-документ надсилається на email, зазначений у заявці." },
        { q: "Чи можна оплатити карткою?", a: "На цьому етапі доступні SWIFT, SEPA та P2P-перекази, а також оплата BLIK. Після підготовки поліса ви отримуєте дані для оплати." },
        { q: "Це те саме, що «зелена карта»?", a: "Ні. OC graniczne і Green Card — різні продукти з різними правилами оформлення, застосовністю та територією дії." },
        { q: "Що це за страхування?", a: "Це обов’язкове страхування цивільної відповідальності власника або користувача механічного транспортного засобу, що діє лише в країнах, зазначених у полісі." },
        {
          q: "Що покриває страхування?",
          a: `Покриття включає:
            • Шкоду життю або здоров’ю потерпілих;
            • Майнову шкоду третім особам.
            
            Мінімальні гарантовані суми:
            •  29 876 400 PLN — тілесні ушкодження;
            •  6 021 600 PLN — майнова шкода.`
        },
        {
          q: "Що не покриває страхування?",
          a: `•  велосипеди та немеханічні ТЗ;
              •  шкоду власнику автомобіля;
              •  шкоду довкіллю.`
        },
        {
          q: "У яких випадках можливий регрес?",
          a: `Страхова має право стягнути виплачену суму, якщо водій:
            • діяв умисно;
            • був п’яний або під дією наркотиків;
            • не мав прав;
            • зник з місця ДТП;
            • використовував викрадений автомобіль.`
        },
        {
          q: "Коли починається і закінчується поліс?",
          a: `Початок: дата видачі поліса.

              Доступні строки: 30, 60, 90, 180 або 364 дні.

              Припинення:
              • закінчення строку;
              • викрадення або списання автомобіля;
              • зняття з обліку.`
        },
      ],
    },

    verify: {
      title: "Перевірка дійсності поліса",
      lead:
        "Якщо ви хочете переконатися, що ваш поліс справді активний, скористайтеся офіційними базами страхових бюро. Нижче — посилання на сервіси для Польщі, Латвії та Литви.",
      items: [
        {
          code: "PL",
          country: "Польща",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Перевірка дійсності поліса OC за номером реєстрації або VIN в офіційній базі UFG.",
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
          desc: "Сервіс перевірки дійсності поліса обов’язкового страхування цивільної відповідальності в Литві.",
          cta: "Перевірити через CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Зараз відкрито",
      closedLabel: "Зараз зачинено",

      openDetails: "працюємо до {time} за вашим часом",

      closingSoonHoursMinutes:
        "до кінця робочого дня залишилося {hours} год {minutes} хв",
      closingSoonHours: "до кінця робочого дня залишилося {hours} год",
      closingSoonMinutes: "до кінця робочого дня залишилося {minutes} хв",
      closingSoonExtra:
        "Ви можете надіслати заявку зараз. Якщо потрібна ручна перевірка, ми опрацюємо її до закриття або наступного робочого дня.",

      closedBeforeOpeningToday:
        "відкриємося сьогодні о {time} за вашим часом",
      closedUntilTomorrow:
        "відкриємося завтра о {time} за вашим часом",
      closedUntilMonday:
        "відкриємося в понеділок о {time} за вашим часом",
      closedExtra:
        "Ви можете надіслати заявку зараз — ми опрацюємо її в робочий час.",

      timezoneNote:
        "Час показано за часовим поясом вашого пристрою: {timezone}.",
    },
  },
  he: {
    hero: {
      kicker: "הנפקה אונליין",
      title: "OC graniczne אונליין לרכב הרשום מחוץ לאזור הכלכלי האירופי",
      lead:
        "אנו מסייעים להסדיר מרחוק חוזה ביטוח חוצה־גבולות לכניסה לפולין, לאיחוד האירופי ולמדינות אחרות המצוינות בפוליסה.",
      meta: ["לרכב מחוץ לאזור הכלכלי האירופי", "פוליסת PDF לאחר בדיקה", "כיסוי רק לפי רשימת המדינות"],
      ctaCalc: "חשב עלות",
      ctaBuy: "הנפק פוליסה",
    },

    calc: {
      title: "מחשבון עלות",
      badge: "~ דקה אחת",
      desc: "מחשבון תעריף פשוט",
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
        { value: "car", label: "רכבים פרטיים" },
        { value: "van", label: "אוטובוסים" },
        { value: "truck", label: "משאיות" },
        { value: "trailer", label: "נגררים" },
        { value: "special", label: "ציוד מיוחד" },
      ],
      button: "חשב",
      note: "note",
    },

    process: {
      title: "איך זה עובד",
      desc: "שלב אחר שלב: חישוב → נתונים → בדיקה ידנית → תשלום → פוליסת PDF.",
      steps: [
        { title: "חשבו", text: "בחרו את סוג כלי הרכב ואת התקופה הזמינה: 30, 60, 90, 180 או 364 ימים." },
        { title: "מלאו את הנתונים", text: "ציינו את בעל הפוליסה, מדינת הרישום, מספר הרישוי, VIN, פרטי הרכב ופרטי הקשר." },
        { title: "המתינו לבדיקה", text: "נבדוק את המסמכים, המסלול ואת האפשרות להנפיק OC graniczne בתנאים שנבחרו." },
        { title: "קבלו פוליסת PDF", text: "לאחר אישור ותשלום, הפוליסה נשלחת לכתובת email שצוינה בבקשה." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne מתאים לרכב הרשום מחוץ לאזור הכלכלי האירופי, אם הנהג נכנס לפולין או למדינה אחרת שבה הפוליסה תקפה ללא Green Card תקפה. הפוליסה אינה מתאימה לרכבים הרשומים במדינות האזור הכלכלי האירופי. לפני הנסיעה יש לבדוק שהמדינות הנדרשות מצוינות בפוליסה כמדינות מכוסות.",
      fit: {
        title: "למי מתאים OC graniczne",
        items: [
          "הרכב רשום מחוץ לאזור הכלכלי האירופי;",
          "אין Green Card תקפה המוכרת במסלול;",
          "הנסיעה עוברת דרך פולין או דרך מדינות המצוינות בפוליסה;",
          "בעל הפוליסה יכול להיות אדם פרטי או ישות משפטית;",
          "זמינים רכבים פרטיים, משאיות, אוטובוסים, נגררים, אופנועים וציוד מיוחד.",
        ],
        links: [
          { href: "/rules", label: "כללי הנפקה" },
          { href: "/product-info", label: "מסמכי המוצר" },
        ],
      },
      notFit: {
        title: "⚠️ למי הפוליסה הזו אינה מתאימה",
        items: [
          "הרכב רשום בפולין, בליטא, בלטביה, בגרמניה או במדינה אחרת באזור הכלכלי האירופי;",
          "נדרש כיסוי לרכב עצמו — זו אינה פוליסת קסקו;",
          "המסלול עובר במדינות שאינן מצוינות בפוליסה;",
          "נדרש להנפיק את הפוליסה בדיעבד;",
          "לנסיעה לטורקיה, לסרביה או למדינות אחרות מחוץ לרשימת הכיסוי נדרש מוצר אחר, אם מדינות אלו אינן מצוינות במסמך.",
        ],
      },
      service: {
        title: "מי מנפיק את הפוליסה",
        text: "שירות greencard.agency מסייע להסדיר מרחוק חוזה ביטוח גבול OC graniczne. הבקשה מתקבלת אונליין, הנתונים והמסמכים נבדקים ידנית, ולאחר ההכנה והתשלום הלקוח מקבל פוליסת PDF ל-email.",
        items: [
          "מקבלים את הבקשה אונליין;",
          "בודקים את מסמכי הרכב ונתוניו;",
          "מוודאים אם OC graniczne מתאים למדינת הרישום ולמסלול;",
          "מכינים את הפוליסה ושולחים את ה-PDF ל-email;",
          "מסייעים לבדוק אילו מדינות מצוינות בכיסוי.",
        ],
      },
      documents: {
        title: "אילו נתונים ומסמכים נדרשים",
        text: "מומלץ להכין את המסמכים לפני מילוי הטופס: ללא תעודת רישום קריאה לא ניתן לבדוק כראוי את המספר, ה-VIN, מדינת הרישום ופרטי הרכב.",
        items: [
          "תעודת רישום רכב / רישיון רכב;",
          "דרכון או ID של בעל הפוליסה;",
          "מספר רישוי ו-VIN;",
          "יצרן, דגם, שנת ייצור;",
          "מדינת רישום הרכב וסוג הרכב;",
          "נפח והספק מנוע;",
          "תאריך תחילה ותקופת הביטוח;",
          "email וטלפון ליצירת קשר;",
          "הערה, אם המסלול אינו סטנדרטי או אם נדרשת תקופת כיסוי מדויקת בטווח של 30–364 ימים.",
        ],
        link: { href: "/product-info", label: "פתח מידע על המוצר" },
      },
      price: {
        title: "כמה עולה OC graniczne",
        text: "העלות תלויה בסוג כלי הרכב ובתקופת הביטוח. במחשבון מוצג מחיר משוער לפרמטרים שנבחרו. האפשרות הסופית להנפקה והעלות מאושרות לאחר בדיקת נתוני הרכב והמסמכים.",
        items: [
          "תקופות זמינות: 30, 60, 90, 180 או 364 ימים;",
          "התעריף תלוי בקטגוריית הרכב;",
          "המחיר מאושר לפני התשלום;",
          "אם הנתונים אינם מספיקים, מנהל יברר אותם לפני הנפקת הפוליסה.",
        ],
      },
      timing: {
        title: "זמן הנפקה ובדיקה ידנית",
        text: "אם כל הנתונים והמסמכים תקינים, ההנפקה עשויה להימשך כ-10–20 דקות בשעות העבודה. אם נדרשת בדיקה ידנית, אישור או תיקון נתונים, ההנפקה תימשך זמן רב יותר. מומלץ להגיש את הבקשה 1–2 ימי עבודה לפני תחילת הנסיעה. לא ניתן להנפיק פוליסה בדיעבד.",
      },
      notCovered: {
        title: "היכן OC graniczne אינו תקף",
        text: "הפוליסה אינה תקפה במדינות שאינן מצוינות במסמך כמדינות מכוסות. לדוגמה, אם בפוליסה לא מצוינות טורקיה, סרביה, מונטנגרו, צפון מקדוניה, בוסניה והרצגובינה או מדינה אחרת במסלול, אין להשתמש בפוליסה זו עבור אותו חלק של הנסיעה. לפני התשלום ולפני היציאה, בדקו את רשימת מדינות הכיסוי במסמך.",
        link: { href: "#coverage", label: "צפה במדינות הכיסוי" },
      },
      checkPolicy: {
        title: "מה לבדוק בפוליסה לפני הנסיעה",
        text: "אל תשתמשו בפוליסה אם יש בה שגיאה. הנתונים ב-PDF חייבים להתאים למסמך רישום הרכב ולתנאי הנסיעה שהוצהרו.",
        items: [
          "מספר רישוי;",
          "VIN;",
          "מדינת רישום;",
          "יצרן ודגם;",
          "תאריך התחלה וסיום;",
          "סוג רכב;",
          "מדינות כיסוי;",
          "נתוני בעל הפוליסה.",
        ],
        link: { href: "#verify", label: "בדוק פוליסה" },
      },
    },

    why: {
      title: "מה השירות עושה",
      desc: "פעולות ספציפיות בתהליך הנפקת OC graniczne.",
      items: [
        { title: "מקבלים בקשה אונליין", text: "נתוני בעל הפוליסה והרכב מועברים דרך הטופס ללא ביקור במשרד." },
        { title: "בודקים מסמכים", text: "משווים את ה-VIN, מספר הרישוי, מדינת הרישום, סוג הרכב ותקופת הביטוח." },
        { title: "מוודאים התאמה", text: "בודקים אם OC graniczne מתאים למדינת הרישום ולמסלול." },
        { title: "שולחים PDF", text: "לאחר הכנה ותשלום, שולחים את הפוליסה ל-email ומסייעים לבדוק את הכיסוי." },
      ],
    },

    form: {
      title: "טופס בקשה",
      desc: "מלאו את הנתונים — נכין את הפוליסה ונשלח את פרטי התשלום.",
    },

    faq: {
      title: "FAQ",
      desc: "תשובות קצרות לשאלות נפוצות.",
      items: [
        { q: "האם ניתן להנפיק OC graniczne אונליין?", a: "כן. ניתן לשלוח את הבקשה אונליין. הנתונים נבדקים ידנית, ולאחר ההכנה, האישור והתשלום פוליסת PDF נשלחת ל-email." },
        { q: "למי הפוליסה הזו מתאימה?", a: "הפוליסה מתאימה לרכב הרשום מחוץ לאזור הכלכלי האירופי, אם הנסיעה עוברת דרך פולין או מדינה אחרת המצוינת בפוליסה, ואין Green Card תקפה." },
        { q: "האם OC graniczne מתאים לרכב מפולין או ממדינה אחרת באזור הכלכלי האירופי?", a: "לא. מוצר זה אינו מתאים לרכבים הרשומים בפולין, בליטא, בלטביה, בגרמניה ובמדינות אחרות באזור הכלכלי האירופי." },
        { q: "באילו מדינות הפוליסה תקפה?", a: "הפוליסה תקפה רק במדינות המצוינות במסמך כמדינות מכוסות. לפני הנסיעה בדקו שכל מדינות המסלול כלולות בכיסוי." },
        { q: "האם הפוליסה תקפה בטורקיה או בסרביה?", a: "לא, אם טורקיה או סרביה אינן מצוינות במסמך כמדינות מכוסות. למדינות כאלה ייתכן שיידרש ביטוח גבול מקומי או מוצר אחר." },
        { q: "האם ניתן להנפיק פוליסה ביום הנסיעה?", a: "לעיתים הדבר אפשרי, אם כל הנתונים והמסמכים תקינים. אם נדרשת בדיקה ידנית, אישור או תיקון נתונים, ההנפקה תימשך זמן רב יותר. מומלץ להגיש את הבקשה 1–2 ימי עבודה לפני הנסיעה." },
        { q: "האם ניתן להנפיק OC graniczne בדיעבד?", a: "לא. לא ניתן להנפיק את הפוליסה בדיעבד. תאריך תחילת התוקף מצוין בעת ההנפקה, וניתן להשתמש בפוליסה רק במסגרת תקופת התוקף המצוינת במסמך." },
        { q: "אילו מסמכים נדרשים?", a: "נדרשים תעודת רישום רכב / רישיון רכב, דרכון או ID של בעל הפוליסה, מספר רישוי, VIN, יצרן, דגם, שנת ייצור, מדינת רישום, סוג רכב, תאריך תחילה ותקופת הביטוח, email וטלפון." },
        { q: "מה מצוין בתעודה?", a: "במסמך מצוינים נתוני הרכב, תקופת התוקף, מדינת הרישום, סוג הרכב, נתוני בעל הפוליסה ורשימת מדינות הכיסוי." },
        { q: "מה לעשות אם יש שגיאה בפוליסה?", a: "אל תשתמשו בפוליסה עם נתונים שגויים. צרו איתנו קשר לפני הנסיעה כדי לבדוק אפשרות תיקון. חלק מהשגיאות עשויות לחייב הנפקה מחדש." },
        { q: "האם אקבל את הפוליסה ב-PDF?", a: "כן. לאחר בדיקת הנתונים, הכנת הפוליסה והתשלום, מסמך PDF נשלח לכתובת email שצוינה בבקשה." },
        { q: "האם ניתן לשלם בכרטיס?", a: "בשלב זה זמינות העברות SWIFT, SEPA ו-P2P, וכן תשלום BLIK. לאחר הכנת הפוליסה תקבלו את פרטי התשלום." },
        { q: "האם זה אותו דבר כמו «כרטיס ירוק»?", a: "לא. OC graniczne ו-Green Card הם מוצרים שונים, עם כללי הנפקה, תחולה וטריטוריית תוקף שונים." },
        { q: "איזה סוג ביטוח זה?", a: "זהו ביטוח חובה לאחריות אזרחית של בעלים או משתמש של כלי רכב מנועי, התקף רק במדינות המצוינות בפוליסה." },
        {
          q: "מה הביטוח מכסה?",
          a: `הכיסוי כולל:
            • נזק לחיים או לבריאות של נפגעים;
            • נזק רכוש לצדדים שלישיים.
            
            סכומי מינימום מובטחים:
            •  29 876 400 PLN — נזקי גוף;
            •  6 021 600 PLN — נזק רכוש.`
        },
        {
          q: "מה הביטוח אינו מכסה?",
          a: `•  אופניים וכלי רכב שאינם מנועיים;
              •  נזק לבעל הרכב;
              •  נזק לסביבה.`
        },
        {
          q: "באילו מקרים ייתכן שיבוב?",
          a: `חברת הביטוח רשאית לתבוע בחזרה את הסכום ששולם, אם הנהג:
            • פעל בכוונה;
            • היה שיכור או תחת השפעת סמים;
            • לא היה בעל רישיון נהיגה;
            • נמלט מזירת התאונה;
            • השתמש ברכב גנוב.`
        },
        {
          q: "מתי הפוליסה מתחילה ומסתיימת?",
          a: `תחילה: תאריך הנפקת הפוליסה.

              תקופות זמינות: 30, 60, 90, 180 או 364 ימים.

              סיום:
              • תום התקופה;
              • גניבת הרכב או גריעתו;
              • ביטול הרישום.`
        },
      ],
    },

    verify: {
      title: "בדיקת תוקף הפוליסה",
      lead:
        "אם ברצונכם לוודא שהפוליסה שלכם אכן פעילה, השתמשו במאגרי המידע הרשמיים של לשכות הביטוח. להלן קישורים לשירותים עבור פולין, לטביה וליטא.",
      items: [
        {
          code: "PL",
          country: "פולין",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "בדיקת תוקף פוליסת OC לפי מספר רישום או VIN במאגר הרשמי של UFG.",
          cta: "עבור לאתר UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "לטביה",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "בדיקת ביטוח חובה OCTA לכלי רכב הרשומים בלטביה.",
          cta: "בדוק דרך LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "ליטא",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "שירות לבדיקת תוקף פוליסת ביטוח חובה לאחריות אזרחית בליטא.",
          cta: "בדוק דרך CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "פתוח עכשיו",
      closedLabel: "סגור עכשיו",

      openDetails: "אנחנו עובדים עד {time} לפי הזמן המקומי שלך",

      closingSoonHoursMinutes:
        "יום העבודה מסתיים בעוד {hours} שעות ו-{minutes} דקות",
      closingSoonHours: "יום העבודה מסתיים בעוד {hours} שעות",
      closingSoonMinutes: "יום העבודה מסתיים בעוד {minutes} דקות",
      closingSoonExtra:
        "אפשר לשלוח את הבקשה עכשיו. אם תידרש בדיקה ידנית, נטפל בה לפני הסגירה או ביום העבודה הבא.",

      closedBeforeOpeningToday:
        "נפתח היום ב-{time} לפי הזמן המקומי שלך",
      closedUntilTomorrow:
        "נפתח מחר ב-{time} לפי הזמן המקומי שלך",
      closedUntilMonday:
        "נפתח ביום שני ב-{time} לפי הזמן המקומי שלך",
      closedExtra:
        "אפשר לשלוח את הבקשה עכשיו — נטפל בה בשעות העבודה.",

      timezoneNote:
        "הזמן מוצג לפי אזור הזמן של המכשיר שלך: {timezone}.",
    },
  },
  az: {
    hero: {
      kicker: "Onlayn rəsmiləşdirmə",
      title: "AİZ hüdudlarından kənarda qeydiyyatdan keçmiş avtomobil üçün OC graniczne onlayn",
      lead:
        "Biz Polşaya, Aİ-yə və polisdə göstərilən digər ölkələrə giriş üçün transsərhəd sığorta müqaviləsini məsafədən rəsmiləşdirməyə kömək edirik.",
      meta: ["AİZ-dən kənar avtomobillər üçün", "Yoxlamadan sonra PDF-polis", "Əhatə yalnız ölkələr siyahısı üzrə"],
      ctaCalc: "Dəyəri hesablayın",
      ctaBuy: "Polisi rəsmiləşdirin",
    },

    calc: {
      title: "Dəyər kalkulyatoru",
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
      desc: "Addım-addım: hesablama → məlumatlar → əl ilə yoxlama → ödəniş → PDF-polis.",
      steps: [
        { title: "Hesablayın", text: "Nəqliyyat vasitəsinin növünü və mövcud müddəti seçin: 30, 60, 90, 180 və ya 364 gün." },
        { title: "Məlumatları doldurun", text: "Sığortalını, qeydiyyat ölkəsini, dövlət nömrə nişanını, VIN-i, nəqliyyat vasitəsinin parametrlərini və əlaqə məlumatlarını göstərin." },
        { title: "Yoxlamanı gözləyin", text: "Biz sənədləri, marşrutu və seçilmiş şərtlər üzrə OC graniczne rəsmiləşdirilməsi imkanını yoxlayacağıq." },
        { title: "PDF-polisi alın", text: "Təsdiqdən və ödənişdən sonra polis ərizədə göstərilən email ünvanına göndərilir." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne Avropa İqtisadi Zonasından kənarda qeydiyyatdan keçmiş avtomobil üçün uyğundur, əgər sürücü qüvvədə olan Green Card olmadan Polşaya və ya polisin qüvvədə olduğu digər ölkəyə daxil olursa. Polis AİZ ölkələrində qeydiyyatdan keçmiş avtomobillər üçün uyğun deyil. Səfərdən əvvəl lazımi ölkələrin polisdə əhatə olunan ölkələr kimi göstərildiyini yoxlamaq lazımdır.",
      fit: {
        title: "OC graniczne kimlər üçün uyğundur",
        items: [
          "avtomobil AİZ hüdudlarından kənarda qeydiyyatdan keçib;",
          "marşrutda tanınan qüvvədə olan Green Card yoxdur;",
          "səfər Polşa və ya polisdə göstərilən ölkələrdən keçir;",
          "sığortalı fiziki və ya hüquqi şəxs ola bilər;",
          "minik avtomobilləri, yük avtomobilləri, avtobuslar, qoşqular, motosikletlər və xüsusi texnika mövcuddur.",
        ],
        links: [
          { href: "/rules", label: "Rəsmiləşdirmə qaydaları" },
          { href: "/product-info", label: "Məhsul üzrə sənədlər" },
        ],
      },
      notFit: {
        title: "⚠️ Bu polis kimlər üçün uyğun deyil",
        items: [
          "avtomobil Polşada, Litvada, Latviyada, Almaniyada və ya başqa AİZ ölkəsində qeydiyyatdan keçib;",
          "öz avtomobilinizin qorunması lazımdır — bu KASKO deyil;",
          "marşrut polisdə göstərilməyən ölkələrdən keçir;",
          "polisi keçmiş tarixlə rəsmiləşdirmək lazımdır;",
          "Türkiyəyə, Serbiyaya və ya əhatə siyahısından kənar digər ölkələrə səfər üçün, əgər bu ölkələr sənəddə göstərilməyibsə, başqa məhsul lazımdır.",
        ],
      },
      service: {
        title: "Polisi kim rəsmiləşdirir",
        text: "greencard.agency xidməti OC graniczne sərhəd sığortası müqaviləsini məsafədən rəsmiləşdirməyə kömək edir. Ərizə onlayn qəbul olunur, məlumatlar və sənədlər əl ilə yoxlanılır, hazırlanma və ödənişdən sonra müştəri PDF-polisi email vasitəsilə alır.",
        items: [
          "ərizəni onlayn qəbul edirik;",
          "avtomobilin sənədlərini və məlumatlarını yoxlayırıq;",
          "OC graniczne-nin qeydiyyat ölkəsinə və marşruta uyğun olub-olmadığını dəqiqləşdiririk;",
          "polisi hazırlayırıq və PDF-i email-ə göndəririk;",
          "əhatədə hansı ölkələrin göstərildiyini yoxlamağa kömək edirik.",
        ],
      },
      documents: {
        title: "Hansı məlumatlar və sənədlər lazımdır",
        text: "Sənədləri formanın doldurulmasından əvvəl hazırlamaq daha yaxşıdır: oxunaqlı qeydiyyat şəhadətnaməsi olmadan nömrəni, VIN-i, qeydiyyat ölkəsini və avtomobilin parametrlərini düzgün yoxlamaq mümkün deyil.",
        items: [
          "nəqliyyat vasitəsinin qeydiyyat şəhadətnaməsi / texniki pasport;",
          "sığortalının pasportu və ya ID-si;",
          "dövlət nömrə nişanı və VIN;",
          "marka, model, buraxılış ili;",
          "avtomobilin qeydiyyat ölkəsi və nəqliyyat vasitəsinin növü;",
          "mühərrikin həcmi və gücü;",
          "sığortanın başlanma tarixi və müddəti;",
          "əlaqə üçün email və telefon;",
          "marşrut standart deyilsə və ya 30–364 gün aralığında dəqiq əhatə dövrü lazımdırsa, şərh.",
        ],
        link: { href: "/product-info", label: "Məhsul haqqında məlumatı açın" },
      },
      price: {
        title: "OC graniczne nə qədərdir",
        text: "Dəyər nəqliyyat vasitəsinin növündən və sığorta müddətindən asılıdır. Kalkulyatorda seçilmiş parametrlər üçün təxmini qiymət göstərilir. Rəsmiləşdirmənin yekun imkanı və dəyəri avtomobil məlumatları və sənədlər yoxlandıqdan sonra təsdiqlənir.",
        items: [
          "mövcud müddətlər: 30, 60, 90, 180 və ya 364 gün;",
          "tarif nəqliyyat vasitəsinin kateqoriyasından asılıdır;",
          "qiymət ödənişdən əvvəl təsdiqlənir;",
          "məlumatlar kifayət deyilsə, menecer polis buraxılmazdan əvvəl onları dəqiqləşdirəcək.",
        ],
      },
      timing: {
        title: "Rəsmiləşdirmə müddəti və əl ilə yoxlama",
        text: "Əgər bütün məlumatlar və sənədlər düzgündürsə, rəsmiləşdirmə iş vaxtı təxminən 10–20 dəqiqə çəkə bilər. Əl ilə yoxlama, razılaşdırma və ya məlumatların düzəldilməsi tələb olunarsa, rəsmiləşdirmə daha çox vaxt aparacaq. Ərizəni səfərin başlanmasına 1–2 iş günü qalmış təqdim etmək daha yaxşıdır. Polis keçmiş tarixlə rəsmiləşdirilmir.",
      },
      notCovered: {
        title: "OC graniczne harada qüvvədə deyil",
        text: "Polis sənəddə əhatə olunan ölkələr kimi göstərilməyən ölkələrdə qüvvədə deyil. Məsələn, polisdə Türkiyə, Serbiya, Monteneqro, Şimali Makedoniya, Bosniya və Herseqovina və ya marşrutun başqa ölkəsi göstərilməyibsə, bu polisi səfərin həmin hissəsi üçün istifadə etmək olmaz. Ödənişdən əvvəl və yola çıxmazdan əvvəl sənəddəki əhatə ölkələrinin siyahısını yoxlayın.",
        link: { href: "#coverage", label: "Əhatə ölkələrinə baxın" },
      },
      checkPolicy: {
        title: "Səfərdən əvvəl polisdə nəyi yoxlamaq lazımdır",
        text: "Polisdə səhv varsa, ondan istifadə etməyin. PDF-dəki məlumatlar avtomobilin qeydiyyat sənədi və bəyan edilmiş səfər şərtləri ilə üst-üstə düşməlidir.",
        items: [
          "dövlət nömrə nişanı;",
          "VIN;",
          "qeydiyyat ölkəsi;",
          "marka və model;",
          "başlanma və bitmə tarixi;",
          "nəqliyyat vasitəsinin növü;",
          "əhatə ölkələri;",
          "sığortalının məlumatları.",
        ],
        link: { href: "#verify", label: "Polisi yoxlayın" },
      },
    },

    why: {
      title: "Xidmət nə edir",
      desc: "OC graniczne rəsmiləşdirmə prosesində konkret addımlar.",
      items: [
        { title: "Ərizəni onlayn qəbul edirik", text: "Sığortalının və avtomobilin məlumatları ofisə gəlmədən forma vasitəsilə ötürülür." },
        { title: "Sənədləri yoxlayırıq", text: "VIN-i, dövlət nömrə nişanını, qeydiyyat ölkəsini, nəqliyyat vasitəsinin növünü və sığorta müddətini tutuşdurub yoxlayırıq." },
        { title: "Uyğunluğu dəqiqləşdiririk", text: "OC graniczne-nin qeydiyyat ölkəsinə və marşruta uyğun olub-olmadığını yoxlayırıq." },
        { title: "PDF göndəririk", text: "Hazırlıq və ödənişdən sonra polisi email-ə göndəririk və əhatəni yoxlamağa kömək edirik." },
      ],
    },

    form: {
      title: "Ərizə forması",
      desc: "Məlumatları doldurun — biz polisi hazırlayacaq və ödəniş məlumatlarını göndərəcəyik.",
    },

    faq: {
      title: "FAQ",
      desc: "Tez-tez verilən suallara qısa cavablar.",
      items: [
        { q: "OC graniczne onlayn rəsmiləşdirilə bilərmi?", a: "Bəli. Ərizəni onlayn göndərmək olar. Məlumatlar əl ilə yoxlanılır, hazırlanma, təsdiq və ödənişdən sonra PDF-polis email-ə göndərilir." },
        { q: "Bu polis kimlər üçün uyğundur?", a: "Polis AİZ hüdudlarından kənarda qeydiyyatdan keçmiş avtomobil üçün uyğundur, əgər səfər Polşa və ya polisdə göstərilən başqa ölkə üzərindən keçirsə və qüvvədə olan Green Card yoxdursa." },
        { q: "OC graniczne Polşadan və ya digər AİZ ölkəsindən olan avtomobil üçün uyğundurmu?", a: "Xeyr. Polşada, Litvada, Latviyada, Almaniyada və digər AİZ ölkələrində qeydiyyatdan keçmiş avtomobillər üçün bu məhsul uyğun deyil." },
        { q: "Polis hansı ölkələrdə qüvvədədir?", a: "Polis yalnız sənəddə əhatə olunan ölkələr kimi göstərilən ölkələrdə qüvvədədir. Səfərdən əvvəl marşrutdakı bütün ölkələrin əhatəyə daxil olduğunu yoxlayın." },
        { q: "Polis Türkiyədə və ya Serbiyada qüvvədədirmi?", a: "Xeyr, əgər Türkiyə və ya Serbiya sənəddə əhatə olunan ölkələr kimi göstərilməyibsə. Belə ölkələr üçün yerli sərhəd sığortası və ya başqa məhsul lazım ola bilər." },
        { q: "Polisi səfər günü rəsmiləşdirmək olarmı?", a: "Bəzən bu mümkündür, əgər bütün məlumatlar və sənədlər düzgündürsə. Əl ilə yoxlama, razılaşdırma və ya məlumatların düzəldilməsi tələb olunarsa, rəsmiləşdirmə daha çox vaxt aparacaq. Ərizəni səfərdən 1–2 iş günü əvvəl təqdim etmək daha yaxşıdır." },
        { q: "OC graniczne keçmiş tarixlə rəsmiləşdirilə bilərmi?", a: "Xeyr. Polis keçmiş tarixlə rəsmiləşdirilmir. Qüvvəyə minmə tarixi rəsmiləşdirmə zamanı göstərilir və polisdən yalnız sənəddə göstərilən qüvvədə olma müddəti daxilində istifadə etmək olar." },
        { q: "Hansı sənədlər lazımdır?", a: "Nəqliyyat vasitəsinin qeydiyyat şəhadətnaməsi / texniki pasport, sığortalının pasportu və ya ID-si, dövlət nömrə nişanı, VIN, marka, model, buraxılış ili, qeydiyyat ölkəsi, nəqliyyat vasitəsinin növü, sığortanın başlanma tarixi və müddəti, email və telefon lazımdır." },
        { q: "Sertifikatda nə göstərilir?", a: "Sənəddə avtomobilin məlumatları, qüvvədə olma müddəti, qeydiyyat ölkəsi, nəqliyyat vasitəsinin növü, sığortalının məlumatları və əhatə ölkələrinin siyahısı göstərilir." },
        { q: "Polisdə səhv olarsa nə etmək lazımdır?", a: "Səhv məlumatları olan polisdən istifadə etməyin. Düzəliş imkanını yoxlamaq üçün səfərdən əvvəl bizimlə əlaqə saxlayın. Bəzi səhvlər yenidən rəsmiləşdirmə tələb edə bilər." },
        { q: "Polisi PDF formatında alacağam?", a: "Bəli. Məlumatların yoxlanmasından, polisin hazırlanmasından və ödənişdən sonra PDF-sənəd ərizədə göstərilən email ünvanına göndərilir." },
        { q: "Kartla ödəmək olarmı?", a: "Bu mərhələdə SWIFT, SEPA və P2P köçürmələri, həmçinin BLIK ödənişi mövcuddur. Polis hazırlandıqdan sonra ödəniş məlumatlarını alırsınız." },
        { q: "Bu «yaşıl kart» ilə eynidir?", a: "Xeyr. OC graniczne və Green Card — rəsmiləşdirmə qaydaları, tətbiq sahəsi və qüvvədə olma ərazisi fərqli olan ayrı məhsullardır." },
        { q: "Bu hansı sığortadır?", a: "Bu, mexaniki nəqliyyat vasitəsinin sahibi və ya istifadəçisinin mülki məsuliyyətinin icbari sığortasıdır və yalnız polisdə göstərilən ölkələrdə qüvvədədir." },
        {
          q: "Sığorta nəyi əhatə edir?",
          a: `Əhatəyə daxildir:
            • Zərərçəkənlərin həyatına və ya sağlamlığına vurulan zərər;
            • Üçüncü şəxslərə vurulan əmlak zərəri.
            
            Minimum zəmanətli məbləğlər:
            •  29 876 400 PLN — bədən xəsarətləri;
            •  6 021 600 PLN — əmlak zərəri.`
        },
        {
          q: "Sığorta nəyi əhatə etmir?",
          a: `•  velosipedlər və mexaniki olmayan nəqliyyat vasitələri;
              •  avtomobil sahibinə vurulan zərər;
              •  ətraf mühitə vurulan zərər.`
        },
        {
          q: "Hansı hallarda reqres mümkündür?",
          a: `Sığorta şirkəti ödənilmiş məbləği geri tələb etmək hüququna malikdir, əgər sürücü:
            • qəsdən hərəkət edibsə;
            • sərxoş və ya narkotik təsiri altında olubsa;
            • sürücülük hüququ olmayıbsa;
            • YNH yerindən qaçıbsa;
            • oğurlanmış avtomobildən istifadə edibsə.`
        },
        {
          q: "Polis nə vaxt başlayır və nə vaxt başa çatır?",
          a: `Başlanğıc: polisin verilmə tarixi.

              Mövcud müddətlər: 30, 60, 90, 180 və ya 364 gün.

              Xitam:
              • müddətin bitməsi;
              • avtomobilin oğurlanması və ya silinməsi;
              • qeydiyyatdan çıxarılması.`
        },
      ],
    },

    verify: {
      title: "Polisin etibarlılığının yoxlanması",
      lead:
        "Polisinizin həqiqətən aktiv olduğuna əmin olmaq istəyirsinizsə, sığorta bürolarının rəsmi bazalarından istifadə edin. Aşağıda Polşa, Latviya və Litva üçün xidmətlərə keçidlər var.",
      items: [
        {
          code: "PL",
          country: "Polşa",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG rəsmi bazasında qeydiyyat nömrəsi və ya VIN üzrə OC polisinin etibarlılığının yoxlanması.",
          cta: "UFG saytına keçin",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Latviya",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Latviyada qeydiyyatdan keçmiş nəqliyyat vasitələri üçün icbari OCTA sığortasının yoxlanması.",
          cta: "LTAB vasitəsilə yoxlayın",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litva",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Litvada mülki məsuliyyətin icbari sığortası polisinin etibarlılığını yoxlama xidməti.",
          cta: "CAB vasitəsilə yoxlayın",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Hazırda açıqdır",
      closedLabel: "Hazırda bağlıdır",

      openDetails: "sizin yerli vaxtınızla {time}-dək işləyirik",

      closingSoonHoursMinutes:
        "iş gününün bitməsinə {hours} saat {minutes} dəqiqə qalıb",
      closingSoonHours: "iş gününün bitməsinə {hours} saat qalıb",
      closingSoonMinutes: "iş gününün bitməsinə {minutes} dəqiqə qalıb",
      closingSoonExtra:
        "Ərizəni indi göndərə bilərsiniz. Əl ilə yoxlama tələb olunarsa, onu bağlanmadan əvvəl və ya növbəti iş günü emal edəcəyik.",

      closedBeforeOpeningToday:
        "bu gün sizin yerli vaxtınızla {time}-da açılacağıq",
      closedUntilTomorrow:
        "sabah sizin yerli vaxtınızla {time}-da açılacağıq",
      closedUntilMonday:
        "bazar ertəsi sizin yerli vaxtınızla {time}-da açılacağıq",
      closedExtra:
        "Ərizəni indi göndərə bilərsiniz — biz onu iş vaxtında emal edəcəyik.",

      timezoneNote:
        "Vaxt cihazınızın saat qurşağına uyğun göstərilir: {timezone}.",
    },
  },
  ro: {
    hero: {
      kicker: "Emitere online",
      title: "OC graniczne online pentru un automobil înmatriculat în afara SEE",
      lead:
        "Vă ajutăm să încheiați la distanță un contract de asigurare transfrontalieră pentru intrarea în Polonia, UE și alte țări indicate în poliță.",
      meta: ["Pentru auto din afara SEE", "Poliță PDF după verificare", "Acoperire doar conform listei de țări"],
      ctaCalc: "Calculați costul",
      ctaBuy: "Emiteți polița",
    },

    calc: {
      title: "Calculator de cost",
      badge: "~ 1 minut",
      desc: "calculator tarifar simplu",
      termLabel: "Termen",
      vehicleLabel: "Tip vehicul",
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
        { value: "special", label: "Utilaje speciale" },
      ],
      button: "Calculați",
      note: "note",
    },

    process: {
      title: "Cum funcționează",
      desc: "Pas cu pas: calcul → date → verificare manuală → plată → poliță PDF.",
      steps: [
        { title: "Calculați", text: "Alegeți tipul vehiculului și termenul disponibil: 30, 60, 90, 180 sau 364 de zile." },
        { title: "Completați datele", text: "Indicați asiguratul, țara de înmatriculare, numărul de înmatriculare, VIN, parametrii vehiculului și datele de contact." },
        { title: "Așteptați verificarea", text: "Vom verifica documentele, traseul și posibilitatea emiterii OC graniczne pentru condițiile alese." },
        { title: "Primiți polița PDF", text: "După confirmare și plată, polița este trimisă la email-ul indicat în cerere." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne este potrivită pentru un automobil înmatriculat în afara Spațiului Economic European, dacă șoferul intră în Polonia sau într-o altă țară în care polița este valabilă fără o Green Card valabilă. Polița nu este potrivită pentru automobilele înmatriculate în țările SEE. Înainte de călătorie trebuie să verificați că țările necesare sunt indicate în poliță ca fiind acoperite.",
      fit: {
        title: "Pentru cine este potrivită OC graniczne",
        items: [
          "automobilul este înmatriculat în afara SEE;",
          "nu există o Green Card valabilă, recunoscută pe traseu;",
          "călătoria trece prin Polonia sau prin țările indicate în poliță;",
          "asiguratul poate fi persoană fizică sau persoană juridică;",
          "sunt disponibile autoturisme, camioane, autobuze, remorci, motociclete și utilaje speciale.",
        ],
        links: [
          { href: "/rules", label: "Reguli de emitere" },
          { href: "/product-info", label: "Documente despre produs" },
        ],
      },
      notFit: {
        title: "⚠️ Pentru cine această poliță nu este potrivită",
        items: [
          "automobilul este înmatriculat în Polonia, Lituania, Letonia, Germania sau altă țară SEE;",
          "este necesară protecția propriului automobil — aceasta nu este CASCO;",
          "traseul trece prin țări care nu sunt indicate în poliță;",
          "este necesară emiterea poliței cu dată retroactivă;",
          "pentru o călătorie în Turcia, Serbia sau alte țări din afara listei de acoperire este necesar un alt produs, dacă aceste țări nu sunt indicate în document.",
        ],
      },
      service: {
        title: "Cine emite polița",
        text: "Serviciul greencard.agency ajută la încheierea la distanță a unui contract de asigurare de frontieră OC graniczne. Cererea este primită online, datele și documentele sunt verificate manual, iar după pregătire și plată clientul primește polița PDF la email.",
        items: [
          "primim cererea online;",
          "verificăm documentele și datele automobilului;",
          "clarificăm dacă OC graniczne este potrivită pentru țara de înmatriculare și traseu;",
          "pregătim polița și trimitem PDF-ul la email;",
          "ajutăm la verificarea țărilor indicate în acoperire.",
        ],
      },
      documents: {
        title: "Ce date și documente sunt necesare",
        text: "Documentele este mai bine să fie pregătite înainte de completarea formularului: fără un certificat de înmatriculare lizibil nu este posibilă verificarea corectă a numărului, VIN-ului, țării de înmatriculare și parametrilor automobilului.",
        items: [
          "certificat de înmatriculare al vehiculului / talon;",
          "pașaportul sau ID-ul asiguratului;",
          "numărul de înmatriculare și VIN;",
          "marca, modelul, anul fabricației;",
          "țara de înmatriculare a automobilului și tipul vehiculului;",
          "capacitatea și puterea motorului;",
          "data de început și termenul asigurării;",
          "email și telefon pentru contact;",
          "comentariu, dacă traseul este nestandard sau este necesară o perioadă exactă de acoperire în intervalul 30–364 de zile.",
        ],
        link: { href: "/product-info", label: "Deschideți informațiile despre produs" },
      },
      price: {
        title: "Cât costă OC graniczne",
        text: "Costul depinde de tipul vehiculului și de termenul asigurării. În calculator este indicat un preț orientativ pentru parametrii aleși. Posibilitatea finală de emitere și costul sunt confirmate după verificarea datelor automobilului și a documentelor.",
        items: [
          "termene disponibile: 30, 60, 90, 180 sau 364 de zile;",
          "tariful depinde de categoria vehiculului;",
          "prețul este confirmat înainte de plată;",
          "dacă datele nu sunt suficiente, managerul le va clarifica înainte de emiterea poliței.",
        ],
      },
      timing: {
        title: "Termenul de emitere și verificarea manuală",
        text: "Dacă toate datele și documentele sunt corecte, emiterea poate dura aproximativ 10–20 de minute în timpul programului de lucru. Dacă este necesară o verificare manuală, aprobare sau corectarea datelor, emiterea va dura mai mult. Este mai bine să depuneți cererea cu 1–2 zile lucrătoare înainte de începerea călătoriei. Polița nu se emite cu dată retroactivă.",
      },
      notCovered: {
        title: "Unde OC graniczne nu este valabilă",
        text: "Polița nu este valabilă în țările care nu sunt indicate în document ca fiind acoperite. De exemplu, dacă în poliță nu este indicată Turcia, Serbia, Muntenegru, Macedonia de Nord, Bosnia și Herțegovina sau o altă țară de pe traseu, această poliță nu poate fi folosită pentru acea parte a călătoriei. Înainte de plată și înainte de plecare, verificați lista țărilor de acoperire în document.",
        link: { href: "#coverage", label: "Vedeți țările de acoperire" },
      },
      checkPolicy: {
        title: "Ce trebuie verificat în poliță înainte de călătorie",
        text: "Nu utilizați polița dacă există o eroare în ea. Datele din PDF trebuie să coincidă cu documentul de înmatriculare al automobilului și cu condițiile declarate ale călătoriei.",
        items: [
          "numărul de înmatriculare;",
          "VIN;",
          "țara de înmatriculare;",
          "marca și modelul;",
          "data de început și de sfârșit;",
          "tipul vehiculului;",
          "țările de acoperire;",
          "datele asiguratului.",
        ],
        link: { href: "#verify", label: "Verificați polița" },
      },
    },

    why: {
      title: "Ce face serviciul",
      desc: "Acțiuni concrete în procesul de emitere OC graniczne.",
      items: [
        { title: "Primim cererea online", text: "Datele asiguratului și ale automobilului sunt transmise prin formular, fără vizită la birou." },
        { title: "Verificăm documentele", text: "Comparăm VIN-ul, numărul de înmatriculare, țara de înmatriculare, tipul vehiculului și termenul asigurării." },
        { title: "Clarificăm aplicabilitatea", text: "Verificăm dacă OC graniczne este potrivită pentru țara de înmatriculare și traseu." },
        { title: "Trimitem PDF-ul", text: "După pregătire și plată, trimitem polița la email și ajutăm la verificarea acoperirii." },
      ],
    },

    form: {
      title: "Formular de cerere",
      desc: "Completați datele — vom pregăti polița și vom trimite datele pentru plată.",
    },

    faq: {
      title: "FAQ",
      desc: "Răspunsuri scurte la întrebări frecvente.",
      items: [
        { q: "Se poate emite OC graniczne online?", a: "Da. Cererea poate fi trimisă online. Datele sunt verificate manual, iar după pregătire, confirmare și plată polița PDF este trimisă la email." },
        { q: "Pentru cine este potrivită această poliță?", a: "Polița este potrivită pentru un automobil înmatriculat în afara SEE, dacă călătoria trece prin Polonia sau altă țară indicată în poliță și nu există o Green Card valabilă." },
        { q: "Este OC graniczne potrivită pentru un automobil din Polonia sau din altă țară SEE?", a: "Nu. Pentru automobilele înmatriculate în Polonia, Lituania, Letonia, Germania și alte țări SEE, acest produs nu este potrivit." },
        { q: "În ce țări este valabilă polița?", a: "Polița este valabilă doar în țările indicate în document ca fiind acoperite. Înainte de călătorie, verificați că toate țările de pe traseu sunt incluse în acoperire." },
        { q: "Este polița valabilă în Turcia sau Serbia?", a: "Nu, dacă Turcia sau Serbia nu sunt indicate în document ca țări acoperite. Pentru astfel de țări poate fi necesară o asigurare locală de frontieră sau un alt produs." },
        { q: "Se poate emite polița în ziua călătoriei?", a: "Uneori este posibil, dacă toate datele și documentele sunt corecte. Dacă este necesară o verificare manuală, aprobare sau corectarea datelor, emiterea va dura mai mult. Este mai bine să depuneți cererea cu 1–2 zile lucrătoare înainte de călătorie." },
        { q: "Se poate emite OC graniczne cu dată retroactivă?", a: "Nu. Polița nu se emite cu dată retroactivă. Data de început a valabilității este indicată la emitere, iar polița poate fi utilizată doar în cadrul termenului de valabilitate indicat în document." },
        { q: "Ce documente sunt necesare?", a: "Sunt necesare certificatul de înmatriculare al vehiculului / talonul, pașaportul sau ID-ul asiguratului, numărul de înmatriculare, VIN, marca, modelul, anul fabricației, țara de înmatriculare, tipul vehiculului, data de început și termenul asigurării, email și telefon." },
        { q: "Ce este indicat în certificat?", a: "În document sunt indicate datele automobilului, termenul de valabilitate, țara de înmatriculare, tipul vehiculului, datele asiguratului și lista țărilor de acoperire." },
        { q: "Ce trebuie făcut dacă există o eroare în poliță?", a: "Nu utilizați polița cu date eronate. Contactați-ne înainte de călătorie pentru a verifica posibilitatea corectării. Unele erori pot necesita reemiterea poliței." },
        { q: "Voi primi polița în PDF?", a: "Da. După verificarea datelor, pregătirea poliței și plată, documentul PDF este trimis la email-ul indicat în cerere." },
        { q: "Se poate plăti cu cardul?", a: "În această etapă sunt disponibile transferuri SWIFT, SEPA și P2P, precum și plata BLIK. După pregătirea poliței veți primi datele pentru plată." },
        { q: "Este același lucru cu „cartea verde”?", a: "Nu. OC graniczne și Green Card sunt produse diferite, cu reguli diferite de emitere, aplicabilitate și teritoriu de valabilitate." },
        { q: "Ce fel de asigurare este aceasta?", a: "Aceasta este asigurarea obligatorie de răspundere civilă a proprietarului sau utilizatorului unui vehicul mecanic, valabilă doar în țările indicate în poliță." },
        {
          q: "Ce acoperă asigurarea?",
          a: `Acoperirea include:
            • Daune aduse vieții sau sănătății persoanelor vătămate;
            • Daune materiale cauzate terților.
            
            Sume minime garantate:
            •  29 876 400 PLN — vătămări corporale;
            •  6 021 600 PLN — daune materiale.`
        },
        {
          q: "Ce nu acoperă asigurarea?",
          a: `•  bicicletele și vehiculele nemecanice;
              •  daunele suferite de proprietarul automobilului;
              •  daunele aduse mediului.`
        },
        {
          q: "În ce cazuri este posibil regresul?",
          a: `Asigurătorul are dreptul să recupereze suma plătită dacă șoferul:
            • a acționat intenționat;
            • era beat sau sub influența drogurilor;
            • nu avea dreptul de a conduce;
            • a fugit de la locul accidentului;
            • a folosit un automobil furat.`
        },
        {
          q: "Când începe și când se încheie polița?",
          a: `Început: data emiterii poliței.

              Termene disponibile: 30, 60, 90, 180 sau 364 de zile.

              Încetare:
              • expirarea termenului;
              • furtul sau casarea automobilului;
              • radierea din evidență.`
        },
      ],
    },

    verify: {
      title: "Verificarea valabilității poliței",
      lead:
        "Dacă doriți să vă asigurați că polița dvs. este într-adevăr activă, utilizați bazele oficiale ale birourilor de asigurări. Mai jos sunt linkuri către servicii pentru Polonia, Letonia și Lituania.",
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
          cta: "Verificați prin LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lituania",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Serviciu de verificare a valabilității poliței de asigurare obligatorie de răspundere civilă în Lituania.",
          cta: "Verificați prin CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Deschis acum",
      closedLabel: "Închis acum",

      openDetails: "lucrăm până la {time}, ora dvs. locală",

      closingSoonHoursMinutes:
        "până la sfârșitul zilei de lucru au mai rămas {hours} h {minutes} min",
      closingSoonHours: "până la sfârșitul zilei de lucru au mai rămas {hours} h",
      closingSoonMinutes: "până la sfârșitul zilei de lucru au mai rămas {minutes} min",
      closingSoonExtra:
        "Puteți trimite cererea acum. Dacă este necesară o verificare manuală, o vom procesa înainte de închidere sau în următoarea zi lucrătoare.",

      closedBeforeOpeningToday:
        "deschidem astăzi la {time}, ora dvs. locală",
      closedUntilTomorrow:
        "deschidem mâine la {time}, ora dvs. locală",
      closedUntilMonday:
        "deschidem luni la {time}, ora dvs. locală",
      closedExtra:
        "Puteți trimite cererea acum — o vom procesa în timpul programului de lucru.",

      timezoneNote:
        "Ora este afișată conform fusului orar al dispozitivului dvs.: {timezone}.",
    },
  },
  sr: {
    hero: {
      kicker: "Online izdavanje",
      title: "OC graniczne online za automobil registrovan van EEP",
      lead:
        "Pomažemo vam da na daljinu zaključite ugovor o prekograničnom osiguranju za ulazak u Poljsku, EU i druge zemlje navedene u polisi.",
      meta: ["Za vozila van EEP", "PDF polisa nakon provere", "Pokriće samo prema spisku zemalja"],
      ctaCalc: "Izračunajte cenu",
      ctaBuy: "Izdajte polisu",
    },

    calc: {
      title: "Kalkulator cene",
      badge: "~ 1 minut",
      desc: "jednostavan tarifni kalkulator",
      termLabel: "Rok",
      vehicleLabel: "Tip vozila",
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
        { value: "special", label: "Specijalna mehanizacija" },
      ],
      button: "Izračunaj",
      note: "note",
    },

    process: {
      title: "Kako funkcioniše",
      desc: "Korak po korak: obračun → podaci → ručna provera → plaćanje → PDF polisa.",
      steps: [
        { title: "Izračunajte", text: "Izaberite tip prevoznog sredstva i dostupan rok: 30, 60, 90, 180 ili 364 dana." },
        { title: "Popunite podatke", text: "Navedite ugovarača osiguranja, zemlju registracije, registarski broj, VIN, parametre vozila i kontakt podatke." },
        { title: "Sačekajte proveru", text: "Proverićemo dokumente, rutu i mogućnost izdavanja OC graniczne za izabrane uslove." },
        { title: "Primite PDF polisu", text: "Nakon potvrde i plaćanja, polisa se šalje na email naveden u prijavi." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne je pogodno za automobil registrovan van Evropskog ekonomskog prostora ako vozač ulazi u Poljsku ili drugu zemlju važenja polise bez važeće Green Card. Polisa nije pogodna za automobile registrovane u zemljama EEP. Pre putovanja treba proveriti da li su potrebne zemlje u polisi navedene kao pokrivene.",
      fit: {
        title: "Kome odgovara OC graniczne",
        items: [
          "automobil je registrovan van EEP;",
          "ne postoji važeća Green Card koja se priznaje na ruti;",
          "putovanje prolazi kroz Poljsku ili zemlje navedene u polisi;",
          "ugovarač osiguranja može biti fizičko ili pravno lice;",
          "dostupna su putnička vozila, teretna vozila, autobusi, prikolice, motocikli i specijalna mehanizacija.",
        ],
        links: [
          { href: "/rules", label: "Pravila izdavanja" },
          { href: "/product-info", label: "Dokumenti o proizvodu" },
        ],
      },
      notFit: {
        title: "⚠️ Kome ova polisa ne odgovara",
        items: [
          "vozilo je registrovano u Poljskoj, Litvaniji, Letoniji, Nemačkoj ili drugoj zemlji EEP;",
          "potrebna je zaštita sopstvenog automobila — ovo nije KASKO;",
          "ruta prolazi kroz zemlje koje nisu navedene u polisi;",
          "potrebno je izdati polisu retroaktivno;",
          "za putovanje u Tursku, Srbiju ili druge zemlje van liste pokrića potreban je drugi proizvod ako te zemlje nisu navedene u dokumentu.",
        ],
      },
      service: {
        title: "Ko izdaje polisu",
        text: "Servis greencard.agency pomaže da se na daljinu zaključi ugovor o graničnom osiguranju OC graniczne. Prijava se prima online, podaci i dokumenti se proveravaju ručno, a nakon pripreme i plaćanja klijent dobija PDF polisu na email.",
        items: [
          "primamo prijavu online;",
          "proveravamo dokumente i podatke o automobilu;",
          "utvrđujemo da li OC graniczne odgovara zemlji registracije i ruti;",
          "pripremamo polisu i šaljemo PDF na email;",
          "pomažemo da proverite koje su zemlje navedene u pokriću.",
        ],
      },
      documents: {
        title: "Koji podaci i dokumenti su potrebni",
        text: "Dokumente je bolje pripremiti pre popunjavanja obrasca: bez čitljive saobraćajne dozvole nije moguće pravilno proveriti broj, VIN, zemlju registracije i parametre automobila.",
        items: [
          "saobraćajna dozvola / tehnički pasoš;",
          "pasoš ili ID ugovarača osiguranja;",
          "registarska oznaka i VIN;",
          "marka, model, godina proizvodnje;",
          "zemlja registracije automobila i tip vozila;",
          "zapremina i snaga motora;",
          "datum početka i rok osiguranja;",
          "email i telefon za kontakt;",
          "komentar ako je ruta nestandardna ili je potreban tačan period pokrića u rasponu od 30–364 dana.",
        ],
        link: { href: "/product-info", label: "Otvori informacije o proizvodu" },
      },
      price: {
        title: "Koliko košta OC graniczne",
        text: "Cena zavisi od tipa prevoznog sredstva i roka osiguranja. U kalkulatoru je navedena okvirna cena za izabrane parametre. Konačna mogućnost izdavanja i cena potvrđuju se nakon provere podataka o automobilu i dokumenata.",
        items: [
          "dostupni rokovi: 30, 60, 90, 180 ili 364 dana;",
          "tarifa zavisi od kategorije vozila;",
          "cena se potvrđuje pre plaćanja;",
          "ako podaci nisu dovoljni, menadžer će ih razjasniti pre izdavanja polise.",
        ],
      },
      timing: {
        title: "Rok izdavanja i ručna provera",
        text: "Ako su svi podaci i dokumenti ispravni, izdavanje može trajati oko 10–20 minuta u radno vreme. Ako je potrebna ručna provera, odobrenje ili ispravka podataka, izdavanje će trajati duže. Najbolje je podneti prijavu 1–2 radna dana pre početka putovanja. Polisa se ne izdaje retroaktivno.",
      },
      notCovered: {
        title: "Gde OC graniczne ne važi",
        text: "Polisa ne važi u zemljama koje u dokumentu nisu navedene kao pokrivene. Na primer, ako u polisi nisu navedene Turska, Srbija, Crna Gora, Severna Makedonija, Bosna i Hercegovina ili druga zemlja rute, ovu polisu nije moguće koristiti za taj deo putovanja. Pre plaćanja i pre polaska proverite spisak zemalja pokrića u dokumentu.",
        link: { href: "#coverage", label: "Pogledajte zemlje pokrića" },
      },
      checkPolicy: {
        title: "Šta proveriti u polisi pre putovanja",
        text: "Ne koristite polisu ako u njoj postoji greška. Podaci u PDF-u moraju se poklapati sa registracionim dokumentom automobila i prijavljenim uslovima putovanja.",
        items: [
          "registarski broj;",
          "VIN;",
          "zemlja registracije;",
          "marka i model;",
          "datum početka i završetka;",
          "tip vozila;",
          "zemlje pokrića;",
          "podaci ugovarača osiguranja.",
        ],
        link: { href: "#verify", label: "Proveri polisu" },
      },
    },

    why: {
      title: "Šta servis radi",
      desc: "Konkretne radnje u procesu izdavanja OC graniczne.",
      items: [
        { title: "Primamo prijavu online", text: "Podaci ugovarača osiguranja i automobila šalju se putem obrasca, bez posete kancelariji." },
        { title: "Proveravamo dokumente", text: "Upoređujemo VIN, registarski broj, zemlju registracije, tip vozila i rok osiguranja." },
        { title: "Utvrđujemo primenljivost", text: "Proveravamo da li OC graniczne odgovara zemlji registracije i ruti." },
        { title: "Šaljemo PDF", text: "Nakon pripreme i plaćanja šaljemo polisu na email i pomažemo da proverite pokriće." },
      ],
    },

    form: {
      title: "Obrazac prijave",
      desc: "Popunite podatke — pripremićemo polisu i poslati podatke za plaćanje.",
    },

    faq: {
      title: "FAQ",
      desc: "Kratki odgovori na česta pitanja.",
      items: [
        { q: "Može li se OC graniczne izdati online?", a: "Da. Prijava se može poslati online. Podaci se proveravaju ručno, a nakon pripreme, potvrde i plaćanja PDF polisa se šalje na email." },
        { q: "Kome odgovara ova polisa?", a: "Polisa odgovara automobilu registrovanom van EEP, ako putovanje prolazi kroz Poljsku ili drugu zemlju navedenu u polisi i nema važeće Green Card." },
        { q: "Da li je OC graniczne pogodno za automobil iz Poljske ili druge zemlje EEP?", a: "Ne. Za automobile registrovane u Poljskoj, Litvaniji, Letoniji, Nemačkoj i drugim zemljama EEP, ovaj proizvod nije pogodan." },
        { q: "U kojim zemljama polisa važi?", a: "Polisa važi samo u zemljama koje su u dokumentu navedene kao pokrivene. Pre putovanja proverite da li su sve zemlje rute uključene u pokriće." },
        { q: "Da li polisa važi u Turskoj ili Srbiji?", a: "Ne, ako Turska ili Srbija nisu u dokumentu navedene kao pokrivene zemlje. Za takve zemlje može biti potrebno lokalno granično osiguranje ili drugi proizvod." },
        { q: "Može li se polisa izdati na dan putovanja?", a: "Ponekad je to moguće ako su svi podaci i dokumenti ispravni. Ako je potrebna ručna provera, odobrenje ili ispravka podataka, izdavanje će trajati duže. Najbolje je podneti prijavu 1–2 radna dana pre putovanja." },
        { q: "Može li se OC graniczne izdati retroaktivno?", a: "Ne. Polisa se ne izdaje retroaktivno. Datum početka važenja navodi se pri izdavanju, a polisa se može koristiti samo u okviru roka važenja navedenog u dokumentu." },
        { q: "Koji dokumenti su potrebni?", a: "Potrebni su saobraćajna dozvola / tehnički pasoš, pasoš ili ID ugovarača osiguranja, registarski broj, VIN, marka, model, godina proizvodnje, zemlja registracije, tip vozila, datum početka i rok osiguranja, email i telefon." },
        { q: "Šta je navedeno u sertifikatu?", a: "U dokumentu se navode podaci o automobilu, rok važenja, zemlja registracije, tip vozila, podaci ugovarača osiguranja i spisak zemalja pokrića." },
        { q: "Šta uraditi ako u polisi postoji greška?", a: "Ne koristite polisu sa pogrešnim podacima. Kontaktirajte nas pre putovanja da proverimo mogućnost ispravke. Neke greške mogu zahtevati ponovno izdavanje." },
        { q: "Da li ću dobiti polisu u PDF-u?", a: "Da. Nakon provere podataka, pripreme polise i plaćanja, PDF dokument se šalje na email naveden u prijavi." },
        { q: "Može li se platiti karticom?", a: "U ovoj fazi dostupni su SWIFT, SEPA i P2P transferi, kao i plaćanje BLIK. Nakon pripreme polise dobijate podatke za plaćanje." },
        { q: "Da li je to isto što i „zelena karta”?", a: "Ne. OC graniczne i Green Card su različiti proizvodi sa različitim pravilima izdavanja, primenljivosti i teritorijom važenja." },
        { q: "Kakvo je ovo osiguranje?", a: "Ovo je obavezno osiguranje građanske odgovornosti vlasnika ili korisnika motornog vozila, koje važi samo u zemljama navedenim u polisi." },
        {
          q: "Šta osiguranje pokriva?",
          a: `Pokriće uključuje:
            • Štetu po život ili zdravlje oštećenih lica;
            • Imovinsku štetu trećim licima.
            
            Minimalni garantovani iznosi:
            •  29 876 400 PLN — telesne povrede;
            •  6 021 600 PLN — imovinska šteta.`
        },
        {
          q: "Šta osiguranje ne pokriva?",
          a: `•  bicikle i nemotorna vozila;
              •  štetu vlasniku automobila;
              •  štetu životnoj sredini.`
        },
        {
          q: "U kojim slučajevima je moguć regres?",
          a: `Osiguravajuće društvo ima pravo da potražuje isplaćeni iznos ako je vozač:
            • postupao namerno;
            • bio pijan ili pod uticajem droga;
            • nije imao pravo upravljanja;
            • pobegao sa mesta saobraćajne nezgode;
            • koristio ukradeni automobil.`
        },
        {
          q: "Kada polisa počinje i završava se?",
          a: `Početak: datum izdavanja polise.

              Dostupni rokovi: 30, 60, 90, 180 ili 364 dana.

              Prestanak:
              • istek roka;
              • krađa ili otpis automobila;
              • odjava iz evidencije.`
        },
      ],
    },

    verify: {
      title: "Provera važenja polise",
      lead:
        "Ako želite da se uverite da je vaša polisa zaista aktivna, koristite zvanične baze osiguravajućih biroa. U nastavku su linkovi ka servisima za Poljsku, Letoniju i Litvaniju.",
      items: [
        {
          code: "PL",
          country: "Poljska",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Provera važenja OC polise po registarskom broju ili VIN-u u zvaničnoj bazi UFG.",
          cta: "Pređite na sajt UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letonija",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Provera obaveznog OCTA osiguranja za vozila registrovana u Letoniji.",
          cta: "Proverite preko LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Litvanija",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Servis za proveru važenja polise obaveznog osiguranja građanske odgovornosti u Litvaniji.",
          cta: "Proverite preko CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Trenutno otvoreno",
      closedLabel: "Trenutno zatvoreno",

      openDetails: "radimo do {time} po vašem vremenu",

      closingSoonHoursMinutes:
        "do kraja radnog dana preostalo je {hours} h {minutes} min",
      closingSoonHours: "do kraja radnog dana preostalo je {hours} h",
      closingSoonMinutes: "do kraja radnog dana preostalo je {minutes} min",
      closingSoonExtra:
        "Možete poslati prijavu sada. Ako bude potrebna ručna provera, obradićemo je pre zatvaranja ili sledećeg radnog dana.",

      closedBeforeOpeningToday:
        "otvaramo se danas u {time} po vašem vremenu",
      closedUntilTomorrow:
        "otvaramo se sutra u {time} po vašem vremenu",
      closedUntilMonday:
        "otvaramo se u ponedeljak u {time} po vašem vremenu",
      closedExtra:
        "Možete poslati prijavu sada — obradićemo je u radno vreme.",

      timezoneNote:
        "Vreme je prikazano prema vremenskoj zoni vašeg uređaja: {timezone}.",
    },
  },
  sq: {
    hero: {
      kicker: "Lëshim online",
      title: "OC graniczne online për automjet të regjistruar jashtë ZEE-së",
      lead:
        "Ju ndihmojmë ta lidhni nga distanca kontratën e sigurimit ndërkufitar për hyrje në Poloni, BE dhe në shtetet e tjera të shënuara në policë.",
      meta: ["Për automjete jashtë ZEE-së", "Policë PDF pas verifikimit", "Mbulim vetëm sipas listës së shteteve"],
      ctaCalc: "Llogaritni çmimin",
      ctaBuy: "Lëshoni policën",
    },

    calc: {
      title: "Kalkulatori i çmimit",
      badge: "~ 1 minutë",
      desc: "kalkulator i thjeshtë tarifor",
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
        { value: "car", label: "Vetura" },
        { value: "van", label: "Autobusë" },
        { value: "truck", label: "Kamionë" },
        { value: "trailer", label: "Rimorkio" },
        { value: "special", label: "Makineri speciale" },
      ],
      button: "Llogarit",
      note: "note",
    },

    process: {
      title: "Si funksionon",
      desc: "Hap pas hapi: llogaritja → të dhënat → kontroll manual → pagesa → polica PDF.",
      steps: [
        { title: "Llogaritni", text: "Zgjidhni llojin e mjetit transportues dhe afatin e disponueshëm: 30, 60, 90, 180 ose 364 ditë." },
        { title: "Plotësoni të dhënat", text: "Shënoni mbajtësin e sigurimit, shtetin e regjistrimit, targën, VIN, parametrat e automjetit dhe kontaktet." },
        { title: "Prisni verifikimin", text: "Ne do t’i kontrollojmë dokumentet, itinerarin dhe mundësinë e lëshimit të OC graniczne për kushtet e zgjedhura." },
        { title: "Merrni policën PDF", text: "Pas konfirmimit dhe pagesës, polica dërgohet në email-in e shënuar në aplikim." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne është e përshtatshme për automjet të regjistruar jashtë Zonës Ekonomike Evropiane, nëse shoferi hyn në Poloni ose në një shtet tjetër ku polica vlen pa Green Card të vlefshme. Polica nuk është e përshtatshme për automjete të regjistruara në shtetet e ZEE-së. Para udhëtimit duhet të kontrolloni që shtetet e nevojshme janë të shënuara në policë si të mbuluara.",
      fit: {
        title: "Për kë është e përshtatshme OC graniczne",
        items: [
          "automjeti është i regjistruar jashtë ZEE-së;",
          "nuk ka Green Card të vlefshme që njihet në itinerar;",
          "udhëtimi kalon nëpër Poloni ose nëpër shtetet e shënuara në policë;",
          "mbajtësi i sigurimit mund të jetë person fizik ose juridik;",
          "janë të disponueshme veturat, kamionët, autobusët, rimorkiot, motoçikletat dhe makineritë speciale.",
        ],
        links: [
          { href: "/rules", label: "Rregullat e lëshimit" },
          { href: "/product-info", label: "Dokumentet e produktit" },
        ],
      },
      notFit: {
        title: "⚠️ Për kë nuk është e përshtatshme kjo policë",
        items: [
          "automjeti është i regjistruar në Poloni, Lituani, Letoni, Gjermani ose në një shtet tjetër të ZEE-së;",
          "ju duhet mbrojtje për vetë automjetin tuaj — kjo nuk është KASKO;",
          "itinerari kalon nëpër shtete që nuk janë të shënuara në policë;",
          "ju duhet ta lëshoni policën me datë të kaluar;",
          "për udhëtim në Turqi, Serbi ose në shtete të tjera jashtë listës së mbulimit nevojitet produkt tjetër, nëse këto shtete nuk janë të shënuara në dokument.",
        ],
      },
      service: {
        title: "Kush e lëshon policën",
        text: "Shërbimi greencard.agency ndihmon në lidhjen nga distanca të kontratës së sigurimit kufitar OC graniczne. Aplikimi pranohet online, të dhënat dhe dokumentet kontrollohen manualisht, ndërsa pas përgatitjes dhe pagesës klienti e merr policën PDF në email.",
        items: [
          "e pranojmë aplikimin online;",
          "i kontrollojmë dokumentet dhe të dhënat e automjetit;",
          "sqarojmë nëse OC graniczne i përshtatet shtetit të regjistrimit dhe itinerarit;",
          "e përgatisim policën dhe e dërgojmë PDF-in në email;",
          "ju ndihmojmë të kontrolloni cilat shtete janë të shënuara në mbulim.",
        ],
      },
      documents: {
        title: "Cilat të dhëna dhe dokumente duhen",
        text: "Dokumentet është më mirë të përgatiten para plotësimit të formularit: pa një certifikatë regjistrimi të lexueshme nuk mund të kontrollohen saktë numri, VIN, shteti i regjistrimit dhe parametrat e automjetit.",
        items: [
          "certifikata e regjistrimit të automjetit / leja e qarkullimit;",
          "pasaporta ose ID e mbajtësit të sigurimit;",
          "targa dhe VIN;",
          "marka, modeli, viti i prodhimit;",
          "shteti i regjistrimit të automjetit dhe lloji i automjetit;",
          "vëllimi dhe fuqia e motorit;",
          "data e fillimit dhe afati i sigurimit;",
          "email dhe telefon për kontakt;",
          "koment, nëse itinerari nuk është standard ose nëse nevojitet periudhë e saktë mbulimi brenda intervalit 30–364 ditë.",
        ],
        link: { href: "/product-info", label: "Hapni informacionin për produktin" },
      },
      price: {
        title: "Sa kushton OC graniczne",
        text: "Çmimi varet nga lloji i mjetit transportues dhe afati i sigurimit. Në kalkulator jepet çmimi orientues për parametrat e zgjedhur. Mundësia përfundimtare e lëshimit dhe çmimi konfirmohen pas kontrollit të të dhënave të automjetit dhe dokumenteve.",
        items: [
          "afatet e disponueshme: 30, 60, 90, 180 ose 364 ditë;",
          "tarifa varet nga kategoria e automjetit;",
          "çmimi konfirmohet para pagesës;",
          "nëse të dhënat nuk mjaftojnë, menaxheri do t’i sqarojë ato para lëshimit të policës.",
        ],
      },
      timing: {
        title: "Afati i lëshimit dhe kontrolli manual",
        text: "Nëse të gjitha të dhënat dhe dokumentet janë të sakta, lëshimi mund të zgjasë rreth 10–20 minuta gjatë orarit të punës. Nëse kërkohet kontroll manual, miratim ose korrigjim i të dhënave, lëshimi do të zgjasë më shumë. Është më mirë ta dorëzoni aplikimin 1–2 ditë pune para fillimit të udhëtimit. Polica nuk lëshohet me datë të kaluar.",
      },
      notCovered: {
        title: "Ku nuk vlen OC graniczne",
        text: "Polica nuk vlen në shtetet që nuk janë të shënuara në dokument si të mbuluara. Për shembull, nëse në policë nuk janë shënuar Turqia, Serbia, Mali i Zi, Maqedonia e Veriut, Bosnja dhe Hercegovina ose ndonjë shtet tjetër i itinerarit, kjo policë nuk mund të përdoret për atë pjesë të udhëtimit. Para pagesës dhe para nisjes kontrolloni listën e shteteve të mbuluara në dokument.",
        link: { href: "#coverage", label: "Shikoni shtetet e mbulimit" },
      },
      checkPolicy: {
        title: "Çfarë të kontrolloni në policë para udhëtimit",
        text: "Mos e përdorni policën nëse ka gabim. Të dhënat në PDF duhet të përputhen me dokumentin e regjistrimit të automjetit dhe me kushtet e deklaruara të udhëtimit.",
        items: [
          "targa;",
          "VIN;",
          "shteti i regjistrimit;",
          "marka dhe modeli;",
          "data e fillimit dhe përfundimit;",
          "lloji i automjetit;",
          "shtetet e mbulimit;",
          "të dhënat e mbajtësit të sigurimit.",
        ],
        link: { href: "#verify", label: "Kontrolloni policën" },
      },
    },

    why: {
      title: "Çfarë bën shërbimi",
      desc: "Veprimet konkrete në procesin e lëshimit të OC graniczne.",
      items: [
        { title: "E pranojmë aplikimin online", text: "Të dhënat e mbajtësit të sigurimit dhe të automjetit dërgohen përmes formularit pa vizitë në zyrë." },
        { title: "I kontrollojmë dokumentet", text: "I krahasojmë VIN, targën, shtetin e regjistrimit, llojin e automjetit dhe afatin e sigurimit." },
        { title: "E sqarojmë zbatueshmërinë", text: "Kontrollojmë nëse OC graniczne i përshtatet shtetit të regjistrimit dhe itinerarit." },
        { title: "Dërgojmë PDF", text: "Pas përgatitjes dhe pagesës, e dërgojmë policën në email dhe ndihmojmë në kontrollimin e mbulimit." },
      ],
    },

    form: {
      title: "Formulari i aplikimit",
      desc: "Plotësoni të dhënat — ne do ta përgatisim policën dhe do t’ju dërgojmë të dhënat për pagesë.",
    },

    faq: {
      title: "FAQ",
      desc: "Përgjigje të shkurtra për pyetjet e shpeshta.",
      items: [
        { q: "A mund të lëshohet OC graniczne online?", a: "Po. Aplikimi mund të dërgohet online. Të dhënat kontrollohen manualisht, dhe pas përgatitjes, konfirmimit dhe pagesës polica PDF dërgohet në email." },
        { q: "Për kë është e përshtatshme kjo policë?", a: "Polica është e përshtatshme për automjet të regjistruar jashtë ZEE-së, nëse udhëtimi kalon nëpër Poloni ose nëpër një shtet tjetër të shënuar në policë dhe nuk ka Green Card të vlefshme." },
        { q: "A është OC graniczne e përshtatshme për automjet nga Polonia ose ndonjë shtet tjetër i ZEE-së?", a: "Jo. Për automjetet e regjistruara në Poloni, Lituani, Letoni, Gjermani dhe në shtete të tjera të ZEE-së, ky produkt nuk është i përshtatshëm." },
        { q: "Në cilat shtete vlen polica?", a: "Polica vlen vetëm në shtetet e shënuara në dokument si të mbuluara. Para udhëtimit kontrolloni që të gjitha shtetet e itinerarit janë të përfshira në mbulim." },
        { q: "A vlen polica në Turqi ose Serbi?", a: "Jo, nëse Turqia ose Serbia nuk janë të shënuara në dokument si shtete të mbuluara. Për këto shtete mund të nevojitet sigurim kufitar lokal ose produkt tjetër." },
        { q: "A mund të lëshohet polica në ditën e udhëtimit?", a: "Ndonjëherë kjo është e mundur, nëse të gjitha të dhënat dhe dokumentet janë të sakta. Nëse kërkohet kontroll manual, miratim ose korrigjim i të dhënave, lëshimi do të zgjasë më shumë. Është më mirë ta dorëzoni aplikimin 1–2 ditë pune para udhëtimit." },
        { q: "A mund të lëshohet OC graniczne me datë të kaluar?", a: "Jo. Polica nuk lëshohet me datë të kaluar. Data e fillimit të vlefshmërisë shënohet gjatë lëshimit, ndërsa polica mund të përdoret vetëm brenda afatit të vlefshmërisë të shënuar në dokument." },
        { q: "Cilat dokumente nevojiten?", a: "Nevojiten certifikata e regjistrimit të automjetit / leja e qarkullimit, pasaporta ose ID e mbajtësit të sigurimit, targa, VIN, marka, modeli, viti i prodhimit, shteti i regjistrimit, lloji i automjetit, data e fillimit dhe afati i sigurimit, email dhe telefon." },
        { q: "Çfarë shënohet në certifikatë?", a: "Në dokument shënohen të dhënat e automjetit, afati i vlefshmërisë, shteti i regjistrimit, lloji i automjetit, të dhënat e mbajtësit të sigurimit dhe lista e shteteve të mbulimit." },
        { q: "Çfarë duhet bërë nëse ka gabim në policë?", a: "Mos e përdorni policën me të dhëna të gabuara. Kontaktoni me ne para udhëtimit për të kontrolluar mundësinë e korrigjimit. Disa gabime mund të kërkojnë rilëshim." },
        { q: "A do ta marr policën në PDF?", a: "Po. Pas kontrollit të të dhënave, përgatitjes së policës dhe pagesës, dokumenti PDF dërgohet në email-in e shënuar në aplikim." },
        { q: "A mund të paguhet me kartelë?", a: "Në këtë fazë janë të disponueshme transfertat SWIFT, SEPA dhe P2P, si dhe pagesa BLIK. Pas përgatitjes së policës i merrni të dhënat për pagesë." },
        { q: "A është kjo e njëjta gjë si «karta e gjelbër»?", a: "Jo. OC graniczne dhe Green Card janë produkte të ndryshme, me rregulla të ndryshme lëshimi, zbatueshmërie dhe territori vlefshmërie." },
        { q: "Çfarë sigurimi është ky?", a: "Ky është sigurim i detyrueshëm i përgjegjësisë civile të pronarit ose përdoruesit të një mjeti motorik, që vlen vetëm në shtetet e shënuara në policë." },
        {
          q: "Çfarë mbulon sigurimi?",
          a: `Mbulimi përfshin:
            • Dëm ndaj jetës ose shëndetit të personave të dëmtuar;
            • Dëm pasuror ndaj palëve të treta.
            
            Shumat minimale të garantuara:
            •  29 876 400 PLN — lëndime trupore;
            •  6 021 600 PLN — dëm pasuror.`
        },
        {
          q: "Çfarë nuk mbulon sigurimi?",
          a: `•  biçikletat dhe mjetet jo-motorike;
              •  dëmin ndaj pronarit të automjetit;
              •  dëmin ndaj mjedisit.`
        },
        {
          q: "Në cilat raste është i mundur regresi?",
          a: `Kompania e sigurimit ka të drejtë ta kërkojë shumën e paguar, nëse shoferi:
            • ka vepruar me dashje;
            • ka qenë i dehur ose nën ndikimin e narkotikëve;
            • nuk ka pasur të drejtë drejtimi;
            • është larguar nga vendi i aksidentit;
            • ka përdorur automjet të vjedhur.`
        },
        {
          q: "Kur fillon dhe kur përfundon polica?",
          a: `Fillimi: data e lëshimit të policës.

              Afatet e disponueshme: 30, 60, 90, 180 ose 364 ditë.

              Përfundimi:
              • skadimi i afatit;
              • vjedhja ose çregjistrimi për skrap i automjetit;
              • çregjistrimi nga evidenca.`
        },
      ],
    },

    verify: {
      title: "Kontrollimi i vlefshmërisë së policës",
      lead:
        "Nëse doni të siguroheni që polica juaj është vërtet aktive, përdorni bazat zyrtare të byrove të sigurimit. Më poshtë janë lidhjet për shërbimet për Poloninë, Letoninë dhe Lituaninë.",
      items: [
        {
          code: "PL",
          country: "Polonia",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "Kontrollimi i vlefshmërisë së policës OC sipas numrit të regjistrimit ose VIN në bazën zyrtare UFG.",
          cta: "Shko në faqen UFG",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Letonia",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Kontrollimi i sigurimit të detyrueshëm OCTA për automjetet e regjistruara në Letoni.",
          cta: "Kontrollo përmes LTAB",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Lituania",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Shërbim për kontrollimin e vlefshmërisë së policës së sigurimit të detyrueshëm të përgjegjësisë civile në Lituani.",
          cta: "Kontrollo përmes CAB",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Hapur tani",
      closedLabel: "Mbyllur tani",

      openDetails: "punojmë deri në {time} sipas kohës suaj lokale",

      closingSoonHoursMinutes:
        "deri në fund të ditës së punës kanë mbetur {hours} orë {minutes} min",
      closingSoonHours: "deri në fund të ditës së punës kanë mbetur {hours} orë",
      closingSoonMinutes: "deri në fund të ditës së punës kanë mbetur {minutes} min",
      closingSoonExtra:
        "Mund ta dërgoni aplikimin tani. Nëse kërkohet kontroll manual, do ta përpunojmë para mbylljes ose ditën tjetër të punës.",

      closedBeforeOpeningToday:
        "hapemi sot në {time} sipas kohës suaj lokale",
      closedUntilTomorrow:
        "hapemi nesër në {time} sipas kohës suaj lokale",
      closedUntilMonday:
        "hapemi të hënën në {time} sipas kohës suaj lokale",
      closedExtra:
        "Mund ta dërgoni aplikimin tani — do ta përpunojmë gjatë orarit të punës.",

      timezoneNote:
        "Koha shfaqet sipas zonës kohore të pajisjes suaj: {timezone}.",
    },
  },
  mn: {
    hero: {
      kicker: "Онлайн бүртгэл",
      title: "ЕЭЗ-ээс гадуур бүртгэлтэй автомашинд зориулсан OC graniczne онлайн",
      lead:
        "Бид Польш, ЕХ болон полист заасан бусад улс руу нэвтрэхэд шаардлагатай хил дамнасан даатгалын гэрээг зайнаас оформить хийхэд тусалдаг.",
      meta: ["ЕЭЗ-ээс гадуурх авто машинд", "Шалгалтын дараах PDF-полис", "Хамрах хүрээ зөвхөн улсын жагсаалтын дагуу"],
      ctaCalc: "Үнийг тооцоолох",
      ctaBuy: "Полис оформить хийх",
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
        { value: "special", label: "Тусгай техник" },
      ],
      button: "Тооцоолох",
      note: "note",
    },

    process: {
      title: "Энэ хэрхэн ажилладаг вэ",
      desc: "Алхам алхмаар: тооцоо → мэдээлэл → гар шалгалт → төлбөр → PDF-полис.",
      steps: [
        { title: "Тооцоолно уу", text: "Тээврийн хэрэгслийн төрөл болон боломжит хугацааг сонгоно уу: 30, 60, 90, 180 эсвэл 364 хоног." },
        { title: "Мэдээллээ бөглөнө үү", text: "Даатгуулагч, бүртгэлийн улс, улсын дугаар, VIN, тээврийн хэрэгслийн үзүүлэлтүүд болон холбоо барих мэдээллийг оруулна уу." },
        { title: "Шалгалтыг хүлээнэ үү", text: "Бид баримт бичиг, маршрут болон сонгосон нөхцөлөөр OC graniczne оформить хийх боломжийг шалгана." },
        { title: "PDF-полисоо авна уу", text: "Баталгаажуулалт болон төлбөрийн дараа полисыг хүсэлтэд заасан email хаяг руу илгээнэ." },
      ],
    },

    insuranceGuide: {
      directAnswer:
        "OC graniczne нь Европын эдийн засгийн бүсээс гадуур бүртгэлтэй автомашинд тохиромжтой бөгөөд жолооч хүчинтэй Green Card-гүйгээр Польш эсвэл полис хүчинтэй өөр улс руу нэвтрэх үед хэрэглэгдэнэ. Энэ полис ЕЭЗ-ийн орнуудад бүртгэлтэй автомашинд тохирохгүй. Аяллын өмнө шаардлагатай улсууд полист хамрагдах улс гэж заагдсан эсэхийг шалгах хэрэгтэй.",
      fit: {
        title: "OC graniczne хэнд тохирох вэ",
        items: [
          "автомашин ЕЭЗ-ээс гадуур бүртгэлтэй;",
          "маршрут дээр хүлээн зөвшөөрөгдөх хүчинтэй Green Card байхгүй;",
          "аялал Польш эсвэл полист заасан улсуудаар дамжин өнгөрнө;",
          "даатгуулагч нь хувь хүн эсвэл хуулийн этгээд байж болно;",
          "суудлын авто, ачааны авто, автобус, чиргүүл, мотоцикл болон тусгай техник боломжтой.",
        ],
        links: [
          { href: "/rules", label: "Оформить хийх журам" },
          { href: "/product-info", label: "Бүтээгдэхүүний баримт бичиг" },
        ],
      },
      notFit: {
        title: "⚠️ Энэ полис хэнд тохирохгүй вэ",
        items: [
          "авто машин Польш, Литва, Латви, Герман эсвэл ЕЭЗ-ийн өөр улсад бүртгэлтэй;",
          "өөрийн автомашины хамгаалалт хэрэгтэй — энэ нь КАСКО биш;",
          "маршрут полист заагаагүй улсуудаар дамжина;",
          "полисыг өнгөрсөн огноогоор оформить хийх шаардлагатай;",
          "Турк, Серби эсвэл хамрах хүрээний жагсаалтаас гадуурх бусад улс руу явахад, хэрэв тэдгээр улс баримт бичигт заагдаагүй бол өөр бүтээгдэхүүн шаардлагатай.",
        ],
      },
      service: {
        title: "Полисыг хэн оформить хийдэг вэ",
        text: "greencard.agency үйлчилгээ нь OC graniczne хил орчмын даатгалын гэрээг зайнаас оформить хийхэд тусалдаг. Хүсэлтийг онлайн хүлээн авч, мэдээлэл болон баримт бичгийг гараар шалгана. Бэлтгэл болон төлбөрийн дараа үйлчлүүлэгч PDF-полисыг email-ээр авна.",
        items: [
          "хүсэлтийг онлайн хүлээн авна;",
          "автомашины баримт бичиг болон мэдээллийг шалгана;",
          "OC graniczne нь бүртгэлийн улс болон маршрутад тохирох эсэхийг тодруулна;",
          "полисыг бэлтгэж, PDF-ийг email рүү илгээнэ;",
          "хамрах хүрээнд ямар улсууд заагдсан эсэхийг шалгахад тусална.",
        ],
      },
      documents: {
        title: "Ямар мэдээлэл, баримт бичиг хэрэгтэй вэ",
        text: "Форм бөглөхөөс өмнө баримт бичгийг бэлтгэх нь дээр: уншигдахуйц бүртгэлийн гэрчилгээгүйгээр дугаар, VIN, бүртгэлийн улс болон автомашины үзүүлэлтүүдийг зөв шалгах боломжгүй.",
        items: [
          "тээврийн хэрэгслийн бүртгэлийн гэрчилгээ / техникийн паспорт;",
          "даатгуулагчийн паспорт эсвэл ID;",
          "улсын дугаар болон VIN;",
          "марк, загвар, үйлдвэрлэсэн он;",
          "автомашины бүртгэлийн улс болон тээврийн хэрэгслийн төрөл;",
          "хөдөлгүүрийн багтаамж ба хүчин чадал;",
          "даатгал эхлэх огноо болон хугацаа;",
          "холбоо барих email болон утас;",
          "маршрут стандарт бус бол эсвэл 30–364 хоногийн хооронд хамрах хүрээний тодорхой хугацаа хэрэгтэй бол тайлбар.",
        ],
        link: { href: "/product-info", label: "Бүтээгдэхүүний мэдээллийг нээх" },
      },
      price: {
        title: "OC graniczne хэдэн төгрөгийн үнэтэй вэ",
        text: "Үнэ нь тээврийн хэрэгслийн төрөл болон даатгалын хугацаанаас хамаарна. Тооцоолуурт сонгосон үзүүлэлтүүдийн ойролцоох үнэ харагдана. Оформить хийх эцсийн боломж болон үнийг автомашины мэдээлэл, баримт бичгийг шалгасны дараа баталгаажуулна.",
        items: [
          "боломжит хугацаа: 30, 60, 90, 180 эсвэл 364 хоног;",
          "тариф нь тээврийн хэрэгслийн ангиллаас хамаарна;",
          "үнийг төлбөрөөс өмнө баталгаажуулна;",
          "мэдээлэл хангалтгүй бол менежер полис гаргахаас өмнө тодруулна.",
        ],
      },
      timing: {
        title: "Оформить хийх хугацаа ба гар шалгалт",
        text: "Бүх мэдээлэл болон баримт бичиг зөв байвал ажлын цагаар оформить хийхэд ойролцоогоор 10–20 минут шаардагдаж болно. Хэрэв гар шалгалт, зөвшөөрөл эсвэл мэдээлэл засах шаардлагатай бол илүү их хугацаа орно. Аялал эхлэхээс 1–2 ажлын өдрийн өмнө хүсэлтээ өгөх нь дээр. Полисыг өнгөрсөн огноогоор оформить хийхгүй.",
      },
      notCovered: {
        title: "OC graniczne хаана үйлчлэхгүй вэ",
        text: "Полис нь баримт бичигт хамрагдах улс гэж заагаагүй улсад үйлчлэхгүй. Жишээлбэл, полист Турк, Серби, Монтенегро, Хойд Македон, Босни ба Херцеговина эсвэл маршрутын өөр улс заагдаагүй бол энэ полисыг аяллын тухайн хэсэгт ашиглах боломжгүй. Төлбөр хийхээс өмнө болон явахаасаа өмнө баримт бичиг дэх хамрах улсын жагсаалтыг шалгана уу.",
        link: { href: "#coverage", label: "Хамрах улсуудыг харах" },
      },
      checkPolicy: {
        title: "Аяллын өмнө полист юуг шалгах вэ",
        text: "Полист алдаа байвал ашиглахгүй. PDF доторх мэдээлэл нь автомашины бүртгэлийн баримт бичиг болон мэдүүлсэн аяллын нөхцөлтэй тохирч байх ёстой.",
        items: [
          "улсын дугаар;",
          "VIN;",
          "бүртгэлийн улс;",
          "марк ба загвар;",
          "эхлэх болон дуусах огноо;",
          "тээврийн хэрэгслийн төрөл;",
          "хамрах улсууд;",
          "даатгуулагчийн мэдээлэл.",
        ],
        link: { href: "#verify", label: "Полис шалгах" },
      },
    },

    why: {
      title: "Үйлчилгээ юу хийдэг вэ",
      desc: "OC graniczne оформить хийх явц дахь тодорхой үйлдлүүд.",
      items: [
        { title: "Хүсэлтийг онлайн хүлээн авна", text: "Даатгуулагч болон автомашины мэдээллийг оффист ирэхгүйгээр формоор дамжуулан илгээнэ." },
        { title: "Баримт бичгийг шалгана", text: "VIN, улсын дугаар, бүртгэлийн улс, тээврийн хэрэгслийн төрөл болон даатгалын хугацааг тулган шалгана." },
        { title: "Хэрэглэх боломжийг тодруулна", text: "OC graniczne нь бүртгэлийн улс болон маршрутад тохирох эсэхийг шалгана." },
        { title: "PDF илгээнэ", text: "Бэлтгэл болон төлбөрийн дараа полисыг email рүү илгээж, хамрах хүрээг шалгахад тусална." },
      ],
    },

    form: {
      title: "Хүсэлтийн маягт",
      desc: "Мэдээллээ бөглөнө үү — бид полисыг бэлтгэж, төлбөрийн мэдээллийг илгээнэ.",
    },

    faq: {
      title: "FAQ",
      desc: "Түгээмэл асуултад өгөх богино хариултууд.",
      items: [
        { q: "OC graniczne-г онлайн оформить хийж болох уу?", a: "Тийм. Хүсэлтийг онлайн илгээж болно. Мэдээллийг гараар шалгаж, бэлтгэл, баталгаажуулалт болон төлбөрийн дараа PDF-полисыг email рүү илгээнэ." },
        { q: "Энэ полис хэнд тохирох вэ?", a: "Полис нь ЕЭЗ-ээс гадуур бүртгэлтэй автомашинд тохиромжтой бөгөөд аялал Польш эсвэл полист заасан өөр улсаар дамжин өнгөрөх, мөн хүчинтэй Green Card байхгүй үед хэрэглэгдэнэ." },
        { q: "OC graniczne нь Польш эсвэл ЕЭЗ-ийн өөр улсын автомашинд тохирох уу?", a: "Үгүй. Польш, Литва, Латви, Герман болон ЕЭЗ-ийн бусад улсад бүртгэлтэй автомашинд энэ бүтээгдэхүүн тохирохгүй." },
        { q: "Полис ямар улсуудад үйлчлэх вэ?", a: "Полис зөвхөн баримт бичигт хамрагдах улс гэж заасан улсад үйлчилнэ. Аяллын өмнө маршрутын бүх улс хамрах хүрээнд багтсан эсэхийг шалгана уу." },
        { q: "Полис Турк эсвэл Сербид үйлчлэх үү?", a: "Үгүй, хэрэв Турк эсвэл Серби баримт бичигт хамрагдах улс гэж заагдаагүй бол. Ийм улсад орон нутгийн хил орчмын даатгал эсвэл өөр бүтээгдэхүүн шаардлагатай байж болно." },
        { q: "Полисыг аяллын өдөр оформить хийж болох уу?", a: "Бүх мэдээлэл болон баримт бичиг зөв байвал заримдаа боломжтой. Хэрэв гар шалгалт, зөвшөөрөл эсвэл мэдээлэл засах шаардлагатай бол илүү их хугацаа орно. Аяллаас 1–2 ажлын өдрийн өмнө хүсэлтээ өгөх нь дээр." },
        { q: "OC graniczne-г өнгөрсөн огноогоор оформить хийж болох уу?", a: "Үгүй. Полисыг өнгөрсөн огноогоор оформить хийхгүй. Үйлчлэх эхлэх огноог оформление хийх үед зааж, полисыг зөвхөн баримт бичигт заасан хүчинтэй хугацаанд ашиглаж болно." },
        { q: "Ямар баримт бичиг хэрэгтэй вэ?", a: "Тээврийн хэрэгслийн бүртгэлийн гэрчилгээ / техникийн паспорт, даатгуулагчийн паспорт эсвэл ID, улсын дугаар, VIN, марк, загвар, үйлдвэрлэсэн он, бүртгэлийн улс, тээврийн хэрэгслийн төрөл, даатгал эхлэх огноо ба хугацаа, email болон утас хэрэгтэй." },
        { q: "Гэрчилгээнд юу заагддаг вэ?", a: "Баримт бичигт автомашины мэдээлэл, хүчинтэй хугацаа, бүртгэлийн улс, тээврийн хэрэгслийн төрөл, даатгуулагчийн мэдээлэл болон хамрах улсуудын жагсаалт заагдана." },
        { q: "Полист алдаа байвал яах вэ?", a: "Алдаатай мэдээлэлтэй полисыг ашиглахгүй. Засах боломжийг шалгуулахын тулд аяллын өмнө бидэнтэй холбогдоно уу. Зарим алдаа полисыг дахин оформить хийхийг шаардаж болно." },
        { q: "Би полисыг PDF хэлбэрээр авах уу?", a: "Тийм. Мэдээлэл шалгах, полис бэлтгэх болон төлбөр хийсний дараа PDF баримт бичгийг хүсэлтэд заасан email рүү илгээнэ." },
        { q: "Картаар төлж болох уу?", a: "Энэ шатанд SWIFT, SEPA болон P2P шилжүүлэг, мөн BLIK төлбөр боломжтой. Полис бэлтгэсний дараа та төлбөрийн мэдээллийг авна." },
        { q: "Энэ «ногоон карт»-тай адил уу?", a: "Үгүй. OC graniczne болон Green Card нь оформление хийх журам, хэрэглэх нөхцөл болон үйлчлэх нутаг дэвсгэрээрээ ялгаатай бүтээгдэхүүнүүд юм." },
        { q: "Энэ ямар даатгал вэ?", a: "Энэ нь механик тээврийн хэрэгслийн эзэмшигч эсвэл хэрэглэгчийн иргэний хариуцлагын заавал даатгал бөгөөд зөвхөн полист заасан улсуудад үйлчилнэ." },
        {
          q: "Даатгал юуг хамардаг вэ?",
          a: `Хамрах хүрээнд:
            • Хохирогчдын амь нас эсвэл эрүүл мэндэд учирсан хохирол;
            • Гуравдагч этгээдэд учирсан эд хөрөнгийн хохирол.
            
            Баталгаат доод хэмжээ:
            •  29 876 400 PLN — бие махбодын гэмтэл;
            •  6 021 600 PLN — эд хөрөнгийн хохирол.`
        },
        {
          q: "Даатгал юуг хамрахгүй вэ?",
          a: `•  унадаг дугуй болон механик бус тээврийн хэрэгсэл;
              •  автомашины эзэмшигчид учирсан хохирол;
              •  байгаль орчинд учирсан хохирол.`
        },
        {
          q: "Ямар тохиолдолд регресс боломжтой вэ?",
          a: `Даатгалын компани төлсөн дүнг буцаан нэхэмжлэх эрхтэй, хэрэв жолооч:
            • санаатай үйлдэл хийсэн;
            • согтуу эсвэл мансууруулах бодисын нөлөөнд байсан;
            • жолоодох эрхгүй байсан;
            • зам тээврийн ослын газраас зугтсан;
            • хулгайлагдсан автомашин ашигласан.`
        },
        {
          q: "Полис хэзээ эхэлж, хэзээ дуусах вэ?",
          a: `Эхлэл: полис олгосон огноо.

              Боломжит хугацаа: 30, 60, 90, 180 эсвэл 364 хоног.

              Дуусгавар болох:
              • хугацаа дуусах;
              • автомашин хулгайлагдах эсвэл актлагдах;
              • бүртгэлээс хасагдах.`
        },
      ],
    },

    verify: {
      title: "Полисын хүчинтэй байдлыг шалгах",
      lead:
        "Хэрэв таны полис үнэхээр идэвхтэй эсэхийг шалгахыг хүсвэл даатгалын бюроны албан ёсны мэдээллийн санг ашиглана уу. Доор Польш, Латви болон Литвийн үйлчилгээний холбоосууд байна.",
      items: [
        {
          code: "PL",
          country: "Польш",
          org: "UFG — Ubezpieczeniowy Fundusz Gwarancyjny",
          desc: "UFG-ийн албан ёсны мэдээллийн санд бүртгэлийн дугаар эсвэл VIN-ээр OC полисын хүчинтэй байдлыг шалгах.",
          cta: "UFG сайт руу шилжих",
          href: "https://www.ufg.pl/",
        },
        {
          code: "LV",
          country: "Латви",
          org: "LTAB — Latvijas Transportlīdzekļu apdrošinātāju birojs",
          desc: "Латвид бүртгэлтэй тээврийн хэрэгслийн заавал OCTA даатгалыг шалгах.",
          cta: "LTAB-ээр шалгах",
          href: "https://www.ltab.lv/",
        },
        {
          code: "LT",
          country: "Литва",
          org: "CAB — Motor Insurers’ Bureau of Lithuania",
          desc: "Литвад иргэний хариуцлагын заавал даатгалын полисын хүчинтэй байдлыг шалгах үйлчилгээ.",
          cta: "CAB-ээр шалгах",
          href: "https://www.cab.lt/",
        },
        
        
      ],
    },
    businessHours: {
      openLabel: "Одоо нээлттэй",
      closedLabel: "Одоо хаалттай",

      openDetails: "таны орон нутгийн цагаар {time} хүртэл ажиллана",

      closingSoonHoursMinutes:
        "ажлын өдөр дуусахад {hours} цаг {minutes} минут үлдлээ",
      closingSoonHours: "ажлын өдөр дуусахад {hours} цаг үлдлээ",
      closingSoonMinutes: "ажлын өдөр дуусахад {minutes} минут үлдлээ",
      closingSoonExtra:
        "Та хүсэлтээ одоо илгээж болно. Хэрэв гар шалгалт шаардлагатай бол бид хаахаас өмнө эсвэл дараагийн ажлын өдөр боловсруулна.",

      closedBeforeOpeningToday:
        "өнөөдөр таны орон нутгийн цагаар {time}-д нээнэ",
      closedUntilTomorrow:
        "маргааш таны орон нутгийн цагаар {time}-д нээнэ",
      closedUntilMonday:
        "даваа гарагт таны орон нутгийн цагаар {time}-д нээнэ",
      closedExtra:
        "Та хүсэлтээ одоо илгээж болно — бид ажлын цагаар боловсруулна.",

      timezoneNote:
        "Цагийг таны төхөөрөмжийн цагийн бүсээр харуулж байна: {timezone}.",
    },
  },
 };

// Утилита: если переводы ещё не готовы, берём RU.
export function getHomeDictionary(lang: Lang): HomeDictionary {
  const d = homeDictionary[lang];
  return d ? d : homeDictionary.en;
}