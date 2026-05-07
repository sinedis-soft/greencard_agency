import type { Lang } from "@/app/dictionaries/header";

export type PolicyTable = {
  headers: string[];
  rows: string[][];
};

export type CookiesPolicyDictionary = {
  pageTitle: string;
  updatedLabel?: string;
  updatedAt?: string;
  sections: Array<{
    title: string;
    paragraphs?: string[];
    tables?: PolicyTable[];
    links?: Array<{ label: string; text: string; href: string }>;
  }>;
};

const ru: CookiesPolicyDictionary = {
  pageTitle: "Политика использования cookie-файлов",
  sections: [
    {
      title: "Green card agency (ЕС / Польша)",
    },
    {
      title: "1. Что такое cookie и для чего они используются",
      paragraphs: [
        "Cookie-файлы — это небольшие текстовые файлы, которые сохраняются на устройстве пользователя при посещении сайта. Они позволяют:",
        "",
        "• обеспечивать корректную работу сайта,",
        "• запоминать пользовательские настройки (например, язык),",
        "• анализировать использование сайта,",
        "• при наличии согласия — показывать релевантную рекламу.",
        "",
        "Использование cookie регулируется GDPR и ePrivacy Directive.",
        "",
        "При первом посещении сайта пользователь видит баннер и может:",
        "",
        "• принять все cookie,",
        "• отклонить необязательные,",
        "• настроить категории.",
        "",
        "Согласие можно отозвать в любой момент через «Настройки cookie».",
      ],
    },
    {
      title: "2. Категории cookie",
    },
    {
      title: "2.1 Строго необходимые (Essential)",
      paragraphs: [
        "Эти cookie не требуют согласия, так как обеспечивают функционирование сайта.",
        "",
        "Примеры:",
      ],
      tables: [
        {
          headers: ["Название", "Срок хранения", "Назначение"],
          rows: [
            ["cookie_consent", "до 12 месяцев", "Запоминает выбор пользователя"],
            ["NEXT_LOCALE / lang", "до 12 месяцев", "Сохраняет язык"],
            ["session / security", "сессия / до 12 месяцев", "Безопасность и работа форм"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: ["Отключение невозможно без нарушения работы сайта."],
    },
    {
      title: "2.2 Аналитические (Statistics) — только с согласия",
      paragraphs: [
        "Используются для анализа поведения пользователей и улучшения сайта.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Используемые cookie:",
        "",
        "• _ga — идентификатор пользователя (до 2 лет)",
        "• _ga_* — состояние сессии",
        "",
        "Особенности:",
        "",
        "• IP-анонимизация включена",
        "• данные не используются для прямой идентификации",
        "• возможна передача данных за пределы ЕС (с применением стандартных договорных положений SCC)",
        "",
        "Важно: без согласия пользователя GA не загружается.",
      ],
    },
    {
      title: "2.3 Маркетинговые (Marketing) — только с согласия",
      paragraphs: [
        "Используются для персонализированной рекламы и оценки эффективности кампаний.",
        "",
        "В ЕС рекомендуется использовать:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Назначение:",
        "",
        "• отслеживание источников трафика",
        "• ретаргетинг",
        "• оценка конверсий",
        "",
        "Срок хранения определяется провайдерами (обычно до 13–24 месяцев).",
      ],
    },
    {
      title: "2.4 Функциональные (Functional)",
      paragraphs: [
        "Позволяют улучшить пользовательский опыт:",
        "",
        "• сохранение предпочтений,",
        "• A/B тестирование,",
        "• локализация интерфейса.",
      ],
    },
    {
      title: "3. Управление cookie",
      paragraphs: [
        "Пользователь может:",
        "",
        "• изменить настройки через «Настройки cookie»,",
        "• удалить cookie через настройки браузера,",
        "• ограничить обработку данных.",
        "",
        "Ссылки на управление рекламой:",
      ],
      links: [
        { label: "Google:", text: "https://adssettings.google.com", href: "https://adssettings.google.com" },
        { label: "Meta:", text: "https://www.facebook.com/adpreferences", href: "https://www.facebook.com/adpreferences" },
      ],
    },
    {
      title: "",
      paragraphs: ["Отказ от cookie может ограничить функциональность сайта."],
    },
    {
      title: "4. Правовые основания обработки",
      tables: [
        {
          headers: ["Категория", "Основание"],
          rows: [
            ["Необходимые", "Законный интерес (обеспечение работы сайта)"],
            ["Аналитические", "Согласие пользователя"],
            ["Маркетинговые", "Согласие пользователя"],
          ],
        },
      ],
      paragraphs: [
        "Согласие:",
        "",
        "• свободно дано,",
        "• конкретно,",
        "• информировано,",
        "• может быть отозвано в любой момент.",
      ],
    },
    {
      title: "5. Передача данных третьим лицам",
      paragraphs: [
        "Данные могут передаваться:",
        "",
        "• поставщикам аналитики (Google),",
        "• рекламным платформам (Meta, Google),",
        "• IT-подрядчикам.",
        "",
        "Передача вне ЕС осуществляется с соблюдением требований GDPR (SCC).",
      ],
    },
    {
      title: "6. Срок хранения",
      paragraphs: [
        "Cookie хранятся:",
        "",
        "• сессионные — до закрытия браузера,",
        "• постоянные — до 24 месяцев (или до удаления пользователем).",
      ],
    },
    {
      title: "7. Права пользователя",
      paragraphs: [
        "В соответствии с GDPR пользователь имеет право:",
        "",
        "• на доступ к данным,",
        "• на исправление,",
        "• на удаление,",
        "• на ограничение обработки,",
        "• на переносимость,",
        "• на отзыв согласия.",
        "",
        "Жалоба может быть подана в",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Изменения политики",
      paragraphs: ["Политика может обновляться. Актуальная версия публикуется на сайте."],
    },
  ],
};

const pl: CookiesPolicyDictionary = {
  pageTitle: "Polityka plików cookie",
  sections: [
    {
      title: "Green card agency (UE / Polska)",
    },
    {
      title: "1. Czym są pliki cookie i do czego są wykorzystywane",
      paragraphs: [
        "Pliki cookie to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika podczas korzystania ze strony internetowej. Umożliwiają one:",
        "",
        "• zapewnienie prawidłowego działania strony,",
        "• zapamiętywanie ustawień użytkownika (np. języka),",
        "• analizę sposobu korzystania ze strony,",
        "• za zgodą użytkownika — wyświetlanie dopasowanych reklam.",
        "",
        "Wykorzystanie plików cookie regulowane jest przez RODO (GDPR) oraz dyrektywę ePrivacy.",
        "",
        "Podczas pierwszej wizyty na stronie użytkownik widzi baner cookie i może:",
        "",
        "• zaakceptować wszystkie pliki cookie,",
        "• odrzucić opcjonalne pliki cookie,",
        "• skonfigurować kategorie cookie.",
        "",
        "Zgodę można wycofać w dowolnym momencie za pomocą opcji „Ustawienia cookie”.",
      ],
    },
    {
      title: "2. Kategorie plików cookie",
    },
    {
      title: "2.1 Niezbędne (Essential)",
      paragraphs: [
        "Te pliki cookie nie wymagają zgody użytkownika, ponieważ są konieczne do prawidłowego funkcjonowania strony.",
        "",
        "Przykłady:",
      ],
      tables: [
        {
          headers: ["Nazwa", "Okres przechowywania", "Cel"],
          rows: [
            ["cookie_consent", "do 12 miesięcy", "Zapamiętuje wybór użytkownika"],
            ["NEXT_LOCALE / lang", "do 12 miesięcy", "Zapisuje wybrany język"],
            ["session / security", "sesja / do 12 miesięcy", "Bezpieczeństwo i działanie formularzy"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Wyłączenie tych plików cookie może spowodować nieprawidłowe działanie strony.",
      ],
    },
    {
      title: "2.2 Analityczne (Statistics) — wyłącznie za zgodą",
      paragraphs: [
        "Służą do analizy zachowań użytkowników oraz ulepszania strony internetowej.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Wykorzystywane pliki cookie:",
        "",
        "• _ga — identyfikator użytkownika (do 2 lat)",
        "• _ga_* — stan sesji",
        "",
        "Charakterystyka:",
        "",
        "• anonimizacja adresów IP jest aktywna,",
        "• dane nie są wykorzystywane do bezpośredniej identyfikacji użytkownika,",
        "• dane mogą być przekazywane poza UE z zastosowaniem standardowych klauzul umownych (SCC).",
        "",
        "Ważne: bez zgody użytkownika Google Analytics nie jest uruchamiany.",
      ],
    },
    {
      title: "2.3 Marketingowe (Marketing) — wyłącznie za zgodą",
      paragraphs: [
        "Służą do prowadzenia reklamy personalizowanej oraz oceny skuteczności kampanii reklamowych.",
        "",
        "Na terenie UE rekomendowane jest wykorzystywanie:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Cel wykorzystania:",
        "",
        "• śledzenie źródeł ruchu,",
        "• remarketing,",
        "• analiza konwersji.",
        "",
        "Okres przechowywania określany jest przez dostawców usług (zwykle od 13 do 24 miesięcy).",
      ],
    },
    {
      title: "2.4 Funkcjonalne (Functional)",
      paragraphs: [
        "Pozwalają poprawić komfort korzystania ze strony poprzez:",
        "",
        "• zapamiętywanie preferencji użytkownika,",
        "• testy A/B,",
        "• lokalizację interfejsu.",
      ],
    },
    {
      title: "3. Zarządzanie plikami cookie",
      paragraphs: [
        "Użytkownik może:",
        "",
        "• zmienić ustawienia poprzez „Ustawienia cookie”,",
        "• usunąć pliki cookie w ustawieniach przeglądarki,",
        "• ograniczyć przetwarzanie danych.",
        "",
        "Linki do ustawień reklam:",
      ],
      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Odrzucenie plików cookie może ograniczyć funkcjonalność strony internetowej.",
      ],
    },
    {
      title: "4. Podstawy prawne przetwarzania",
      tables: [
        {
          headers: ["Kategoria", "Podstawa prawna"],
          rows: [
            ["Niezbędne", "Prawnie uzasadniony interes (zapewnienie działania strony)"],
            ["Analityczne", "Zgoda użytkownika"],
            ["Marketingowe", "Zgoda użytkownika"],
          ],
        },
      ],
      paragraphs: [
        "Zgoda jest:",
        "",
        "• dobrowolna,",
        "• konkretna,",
        "• świadoma,",
        "• może zostać wycofana w dowolnym momencie.",
      ],
    },
    {
      title: "5. Przekazywanie danych osobom trzecim",
      paragraphs: [
        "Dane mogą być przekazywane:",
        "",
        "• dostawcom usług analitycznych (Google),",
        "• platformom reklamowym (Meta, Google),",
        "• dostawcom usług IT.",
        "",
        "Przekazywanie danych poza UE odbywa się zgodnie z wymogami RODO, w tym z wykorzystaniem standardowych klauzul umownych (SCC).",
      ],
    },
    {
      title: "6. Okres przechowywania",
      paragraphs: [
        "Pliki cookie przechowywane są:",
        "",
        "• sesyjne — do momentu zamknięcia przeglądarki,",
        "• trwałe — do 24 miesięcy lub do czasu ich usunięcia przez użytkownika.",
      ],
    },
    {
      title: "7. Prawa użytkownika",
      paragraphs: [
        "Zgodnie z RODO użytkownik ma prawo:",
        "",
        "• dostępu do danych,",
        "• sprostowania danych,",
        "• usunięcia danych,",
        "• ograniczenia przetwarzania,",
        "• przenoszenia danych,",
        "• wycofania zgody.",
        "",
        "Skarga może zostać złożona do:",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Zmiany polityki",
      paragraphs: [
        "Polityka może być okresowo aktualizowana. Aktualna wersja publikowana jest na stronie internetowej.",
      ],
    },
  ],
};

const en: CookiesPolicyDictionary = {
  pageTitle: "Cookie Policy",
  sections: [
    {
      title: "Green Card Agency (EU / Poland)",
    },
    {
      title: "1. What Cookies Are and Why They Are Used",
      paragraphs: [
        "Cookies are small text files stored on the user’s device when visiting a website. They allow us to:",
        "",
        "• ensure proper website functionality,",
        "• remember user preferences (for example, language settings),",
        "• analyse website usage,",
        "• where consent is provided — display relevant advertising.",
        "",
        "The use of cookies is regulated by the GDPR and the ePrivacy Directive.",
        "",
        "When visiting the website for the first time, the user is presented with a banner and may:",
        "",
        "• accept all cookies,",
        "• reject non-essential cookies,",
        "• configure cookie categories.",
        "",
        "Consent may be withdrawn at any time through the “Cookie Settings” section.",
      ],
    },
    {
      title: "2. Cookie Categories",
    },
    {
      title: "2.1 Strictly Necessary (Essential)",
      paragraphs: [
        "These cookies do not require consent because they are necessary for the operation of the website.",
        "",
        "Examples:",
      ],
      tables: [
        {
          headers: ["Name", "Retention Period", "Purpose"],
          rows: [
            ["cookie_consent", "up to 12 months", "Stores the user’s cookie preferences"],
            ["NEXT_LOCALE / lang", "up to 12 months", "Stores language settings"],
            ["session / security", "session / up to 12 months", "Security and form functionality"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Disabling these cookies may affect the proper operation of the website.",
      ],
    },
    {
      title: "2.2 Analytics (Statistics) — Only with Consent",
      paragraphs: [
        "These cookies are used to analyse user behaviour and improve the website.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Cookies used:",
        "",
        "• _ga — user identifier (up to 2 years)",
        "• _ga_* — session status",
        "",
        "Features:",
        "",
        "• IP anonymisation is enabled",
        "• data is not used for direct identification",
        "• data may be transferred outside the EU using Standard Contractual Clauses (SCC)",
        "",
        "Important: without user consent, Google Analytics is not loaded.",
      ],
    },
    {
      title: "2.3 Marketing Cookies — Only with Consent",
      paragraphs: [
        "These cookies are used for personalised advertising and measuring campaign effectiveness.",
        "",
        "Within the EU, the following services are commonly used:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Purpose:",
        "",
        "• tracking traffic sources",
        "• retargeting",
        "• measuring conversions",
        "",
        "Retention periods are determined by the providers (usually up to 13–24 months).",
      ],
    },
    {
      title: "2.4 Functional Cookies",
      paragraphs: [
        "These cookies improve the user experience by enabling:",
        "",
        "• saving preferences,",
        "• A/B testing,",
        "• interface localisation.",
      ],
    },
    {
      title: "3. Cookie Management",
      paragraphs: [
        "The user may:",
        "",
        "• modify settings through the “Cookie Settings” section,",
        "• delete cookies through browser settings,",
        "• restrict data processing.",
        "",
        "Advertising preference management links:",
      ],
      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Rejecting cookies may limit certain website functionalities.",
      ],
    },
    {
      title: "4. Legal Basis for Processing",
      tables: [
        {
          headers: ["Category", "Legal Basis"],
          rows: [
            ["Necessary", "Legitimate interest (website operation)"],
            ["Analytics", "User consent"],
            ["Marketing", "User consent"],
          ],
        },
      ],
      paragraphs: [
        "Consent is:",
        "",
        "• freely given,",
        "• specific,",
        "• informed,",
        "• revocable at any time.",
      ],
    },
    {
      title: "5. Transfer of Data to Third Parties",
      paragraphs: [
        "Data may be transferred to:",
        "",
        "• analytics providers (Google),",
        "• advertising platforms (Meta, Google),",
        "• IT service providers.",
        "",
        "Transfers outside the EU are carried out in compliance with GDPR requirements (SCC).",
      ],
    },
    {
      title: "6. Retention Period",
      paragraphs: [
        "Cookies are stored as follows:",
        "",
        "• session cookies — until the browser is closed,",
        "• persistent cookies — up to 24 months (or until deleted by the user).",
      ],
    },
    {
      title: "7. User Rights",
      paragraphs: [
        "In accordance with the GDPR, the user has the right to:",
        "",
        "• access personal data,",
        "• rectification,",
        "• erasure,",
        "• restriction of processing,",
        "• data portability,",
        "• withdraw consent.",
        "",
        "A complaint may be submitted to the",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Policy Updates",
      paragraphs: [
        "This Policy may be updated from time to time. The current version is published on the website.",
      ],
    },
  ],
};

const be: CookiesPolicyDictionary = {
  pageTitle: "Палітыка выкарыстання cookie-файлаў",
  sections: [
    {
      title: "Green card agency (ЕС / Польшча)",
    },
    {
      title:
        "1. Што такое cookie і для чаго яны выкарыстоўваюцца",
      paragraphs: [
        "Cookie-файлы — гэта невялікія тэкставыя файлы, якія захоўваюцца на прыладзе карыстальніка пры наведванні сайта. Яны дазваляюць:",
        "",
        "• забяспечваць карэктную працу сайта,",
        "• запамінаць налады карыстальніка (напрыклад, мову),",
        "• аналізаваць выкарыстанне сайта,",
        "• пры наяўнасці згоды — паказваць рэлевантную рэкламу.",
        "",
        "Выкарыстанне cookie рэгулюецца GDPR і ePrivacy Directive.",
        "",
        "Пры першым наведванні сайта карыстальнік бачыць банер і можа:",
        "",
        "• прыняць усе cookie,",
        "• адхіліць неабавязковыя,",
        "• наладзіць катэгорыі.",
        "",
        "Згоду можна адклікаць у любы момант праз «Налады cookie».",
      ],
    },
    {
      title: "2. Катэгорыі cookie",
    },
    {
      title:
        "2.1 Строга неабходныя (Essential)",
      paragraphs: [
        "Гэтыя cookie не патрабуюць згоды, паколькі забяспечваюць функцыянаванне сайта.",
        "",
        "Прыклады:",
      ],
      tables: [
        {
          headers: [
            "Назва",
            "Тэрмін захоўвання",
            "Прызначэнне",
          ],
          rows: [
            [
              "cookie_consent",
              "да 12 месяцаў",
              "Запамінае выбар карыстальніка",
            ],
            [
              "NEXT_LOCALE / lang",
              "да 12 месяцаў",
              "Захоўвае мову",
            ],
            [
              "session / security",
              "сесія / да 12 месяцаў",
              "Бяспека і праца формаў",
            ],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Адключэнне немагчыма без парушэння працы сайта.",
      ],
    },
    {
      title:
        "2.2 Аналітычныя (Statistics) — толькі са згоды",
      paragraphs: [
        "Выкарыстоўваюцца для аналізу паводзін карыстальнікаў і паляпшэння сайта.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Cookie, якія выкарыстоўваюцца:",
        "",
        "• _ga — ідэнтыфікатар карыстальніка (да 2 гадоў)",
        "• _ga_* — стан сесіі",
        "",
        "Асаблівасці:",
        "",
        "• ананімізацыя IP уключана",
        "• даныя не выкарыстоўваюцца для прамой ідэнтыфікацыі",
        "• магчыма перадача даных за межы ЕС (з выкарыстаннем стандартных дагаворных палажэнняў SCC)",
        "",
        "Важна: без згоды карыстальніка GA не загружаецца.",
      ],
    },
    {
      title:
        "2.3 Маркетынгавыя (Marketing) — толькі са згоды",
      paragraphs: [
        "Выкарыстоўваюцца для персаналізаванай рэкламы і ацэнкі эфектыўнасці кампаній.",
        "",
        "У ЕС рэкамендуецца выкарыстоўваць:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Прызначэнне:",
        "",
        "• адсочванне крыніц трафіку",
        "• рэтаргетынг",
        "• ацэнка канверсій",
        "",
        "Тэрмін захоўвання вызначаецца правайдарамі (звычайна да 13–24 месяцаў).",
      ],
    },
    {
      title:
        "2.4 Функцыянальныя (Functional)",
      paragraphs: [
        "Дазваляюць палепшыць карыстальніцкі досвед:",
        "",
        "• захаванне пераваг,",
        "• A/B-тэставанне,",
        "• лакалізацыя інтэрфейсу.",
      ],
    },
    {
      title: "3. Кіраванне cookie",
      paragraphs: [
        "Карыстальнік можа:",
        "",
        "• змяніць налады праз «Налады cookie»,",
        "• выдаліць cookie праз налады браўзера,",
        "• абмежаваць апрацоўку даных.",
        "",
        "Спасылкі на кіраванне рэкламай:",
      ],
      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Адмова ад cookie можа абмежаваць функцыянальнасць сайта.",
      ],
    },
    {
      title:
        "4. Прававыя падставы апрацоўкі",
      tables: [
        {
          headers: [
            "Катэгорыя",
            "Падстава",
          ],
          rows: [
            [
              "Неабходныя",
              "Законны інтарэс (забеспячэнне працы сайта)",
            ],
            [
              "Аналітычныя",
              "Згода карыстальніка",
            ],
            [
              "Маркетынгавыя",
              "Згода карыстальніка",
            ],
          ],
        },
      ],
      paragraphs: [
        "Згода:",
        "",
        "• дадзена свабодна,",
        "• канкрэтная,",
        "• інфармаваная,",
        "• можа быць адклікана ў любы момант.",
      ],
    },
    {
      title:
        "5. Перадача даных трэцім асобам",
      paragraphs: [
        "Даныя могуць перадавацца:",
        "",
        "• пастаўшчыкам аналітыкі (Google),",
        "• рэкламным платформам (Meta, Google),",
        "• IT-падрадчыкам.",
        "",
        "Перадача за межы ЕС ажыццяўляецца з выкананнем патрабаванняў GDPR (SCC).",
      ],
    },
    {
      title: "6. Тэрмін захоўвання",
      paragraphs: [
        "Cookie захоўваюцца:",
        "",
        "• сесійныя — да закрыцця браўзера,",
        "• пастаянныя — да 24 месяцаў (або да выдалення карыстальнікам).",
      ],
    },
    {
      title: "7. Правы карыстальніка",
      paragraphs: [
        "У адпаведнасці з GDPR карыстальнік мае права:",
        "",
        "• на доступ да даных,",
        "• на выпраўленне,",
        "• на выдаленне,",
        "• на абмежаванне апрацоўкі,",
        "• на пераноснасць,",
        "• на адкліканне згоды.",
        "",
        "Скарга можа быць пададзена ў",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Змены палітыкі",
      paragraphs: [
        "Палітыка можа абнаўляцца. Актуальная версія публікуецца на сайце.",
      ],
    },
  ],
};

const uz: CookiesPolicyDictionary = {
  pageTitle: "Cookie-fayllardan foydalanish siyosati",

  sections: [
    {
      title: "Green Card Agency (YI / Polsha)",
    },

    {
      title:
        "1. Cookie-fayllar nima va ular nima uchun ishlatiladi",

      paragraphs: [
        "Cookie-fayllar — foydalanuvchi saytga kirganida uning qurilmasida saqlanadigan kichik matnli fayllardir. Ular quyidagilarga imkon beradi:",
        "",
        "• saytning to‘g‘ri ishlashini ta’minlashga,",
        "• foydalanuvchi sozlamalarini (masalan, tilni) eslab qolishga,",
        "• sayt foydalanilishini tahlil qilishga,",
        "• foydalanuvchi roziligi mavjud bo‘lsa — mos reklamalarni ko‘rsatishga.",
        "",
        "Cookie-fayllardan foydalanish GDPR va ePrivacy Directive bilan tartibga solinadi.",
        "",
        "Saytga биринчи марта kirilganda foydalanuvchi banner ko‘radi va quyidagilardan birini tanlashi mumkin:",
        "",
        "• barcha cookie-fayllarni qabul qilish,",
        "• majburiy bo‘lmagan cookie-fayllarni rad etish,",
        "• kategoriyalarni sozlash.",
        "",
        "Rozilikni istalgan vaqtda «Cookie sozlamalari» orqali qaytarib olish mumkin.",
      ],
    },

    {
      title: "2. Cookie kategoriyalari",
    },

    {
      title:
        "2.1 Qat’iy zarur (Essential)",

      paragraphs: [
        "Ushbu cookie-fayllar sayt faoliyatini ta’minlagani sababli foydalanuvchi roziligini talab qilmaydi.",
        "",
        "Misollar:",
      ],

      tables: [
        {
          headers: [
            "Nomi",
            "Saqlash muddati",
            "Maqsadi",
          ],

          rows: [
            [
              "cookie_consent",
              "12 oygacha",
              "Foydalanuvchi tanlovini eslab qoladi",
            ],
            [
              "NEXT_LOCALE / lang",
              "12 oygacha",
              "Tilni saqlaydi",
            ],
            [
              "session / security",
              "sessiya / 12 oygacha",
              "Xavfsizlik va formalar ishlashi",
            ],
          ],
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "Ularni o‘chirib qo‘yish sayt faoliyatining buzilishiga olib kelishi mumkin.",
      ],
    },

    {
      title:
        "2.2 Analitik (Statistics) — faqat rozilik bilan",

      paragraphs: [
        "Foydalanuvchilar xatti-harakatlarini tahlil qilish va saytni yaxshilash uchun ishlatiladi.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Foydalaniladigan cookie-fayllar:",
        "",
        "• _ga — foydalanuvchi identifikatori (2 yilgacha)",
        "• _ga_* — sessiya holati",
        "",
        "Xususiyatlari:",
        "",
        "• IP-anonimlashtirish yoqilgan",
        "• ma’lumotlar to‘g‘ridan-to‘g‘ri identifikatsiya uchun ishlatilmaydi",
        "• ma’lumotlar YI hududidan tashqariga uzatilishi mumkin (SCC standart shartnomalari asosida)",
        "",
        "Muhim: foydalanuvchi roziligisiz Google Analytics yuklanmaydi.",
      ],
    },

    {
      title:
        "2.3 Marketing cookie-fayllari (Marketing) — faqat rozilik bilan",

      paragraphs: [
        "Shaxsiylashtirilgan reklama va reklama kampaniyalari samaradorligini baholash uchun ishlatiladi.",
        "",
        "YI hududida quyidagilardan foydalanish tavsiya etiladi:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Maqsadi:",
        "",
        "• trafik manbalarini kuzatish",
        "• retargeting",
        "• konversiyalarni baholash",
        "",
        "Saqlash muddati provayderlar tomonidan belgilanadi (odatda 13–24 oygacha).",
      ],
    },

    {
      title:
        "2.4 Funktsional cookie-fayllar (Functional)",

      paragraphs: [
        "Foydalanuvchi tajribasini yaxshilashga imkon beradi:",
        "",
        "• afzalliklarni saqlash,",
        "• A/B testlarni o‘tkazish,",
        "• interfeysni lokalizatsiya qilish.",
      ],
    },

    {
      title:
        "3. Cookie-fayllarni boshqarish",

      paragraphs: [
        "Foydalanuvchi quyidagilarni amalga oshirishi mumkin:",
        "",
        "• «Cookie sozlamalari» orqali sozlamalarni o‘zgartirish,",
        "• brauzer sozlamalari orqali cookie-fayllarni o‘chirish,",
        "• ma’lumotlarni qayta ishlashni cheklash.",
        "",
        "Reklamani boshqarish havolalari:",
      ],

      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },

        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "Cookie-fayllardan voz kechish sayt funksionalligining cheklanishiga olib kelishi mumkin.",
      ],
    },

    {
      title:
        "4. Qayta ishlashning huquqiy asoslari",

      tables: [
        {
          headers: [
            "Kategoriya",
            "Asos",
          ],

          rows: [
            [
              "Zarur",
              "Qonuniy manfaat (sayt faoliyatini ta’minlash)",
            ],
            [
              "Analitik",
              "Foydalanuvchi roziligi",
            ],
            [
              "Marketing",
              "Foydalanuvchi roziligi",
            ],
          ],
        },
      ],

      paragraphs: [
        "Rozilik:",
        "",
        "• erkin berilgan,",
        "• aniq,",
        "• xabardor qilingan,",
        "• istalgan vaqtda qaytarib olinishi mumkin.",
      ],
    },

    {
      title:
        "5. Ma’lumotlarni uchinchi shaxslarga uzatish",

      paragraphs: [
        "Ma’lumotlar quyidagilarga uzatilishi mumkin:",
        "",
        "• analitika xizmatlari provayderlariga (Google),",
        "• reklama platformalariga (Meta, Google),",
        "• IT pudratchilariga.",
        "",
        "YI hududidan tashqariga uzatish GDPR talablariga (SCC) rioya qilgan holda amalga oshiriladi.",
      ],
    },

    {
      title: "6. Saqlash muddati",

      paragraphs: [
        "Cookie-fayllar quyidagicha saqlanadi:",
        "",
        "• sessiyaviy — brauzer yopilgunga qadar,",
        "• doimiy — 24 oygacha (yoki foydalanuvchi o‘chirguncha).",
      ],
    },

    {
      title:
        "7. Foydalanuvchi huquqlari",

      paragraphs: [
        "GDPRga muvofiq foydalanuvchi quyidagi huquqlarga ega:",
        "",
        "• ma’lumotlarga kirish ҳуқуқи,",
        "• tuzatish ҳуқуқи,",
        "• o‘chirish ҳуқуқи,",
        "• qayta ishlashni cheklash ҳуқуқи,",
        "• ko‘chirish ҳуқуқи,",
        "• rozilikni qaytarib olish ҳуқуқи.",
        "",
        "Shikoyat quyidagi organga yuborilishi mumkin:",
        "Latvian Data State Inspectorate.",
      ],
    },

    {
      title:
        "8. Siyosatdagi o‘zgarishlar",

      paragraphs: [
        "Siyosat yangilanib turishi mumkin. Amaldagi versiya saytda e’lon qilinadi.",
      ],
    },
  ],
};

const ka: CookiesPolicyDictionary = {
  pageTitle: "Cookie-ფაილების გამოყენების პოლიტიკა",

  sections: [
    {
      title: "Green card agency (EU / პოლონეთი)",
    },

    {
      title: "1. რა არის cookie-ფაილები და რისთვის გამოიყენება",
      paragraphs: [
        "Cookie-ფაილები წარმოადგენს მცირე ტექსტურ ფაილებს, რომლებიც ინახება მომხმარებლის მოწყობილობაზე ვებგვერდის მონახულებისას. ისინი საშუალებას იძლევა:",
        "",
        "• ვებგვერდის სწორი ფუნქციონირების უზრუნველყოფა,",
        "• მომხმარებლის პარამეტრების დამახსოვრება (მაგალითად, ენა),",
        "• ვებგვერდის გამოყენების ანალიზი,",
        "• მომხმარებლის თანხმობის შემთხვევაში — შესაბამისი რეკლამის ჩვენება.",
        "",
        "Cookie-ფაილების გამოყენება რეგულირდება GDPR-ით და ePrivacy Directive-ით.",
        "",
        "ვებგვერდზე პირველი ვიზიტისას მომხმარებელი ხედავს ბანერს და შეუძლია:",
        "",
        "• ყველა cookie-ფაილის მიღება,",
        "• არასავალდებულო cookie-ფაილების უარყოფა,",
        "• კატეგორიების კონფიგურაცია.",
        "",
        "თანხმობის გაუქმება შესაძლებელია ნებისმიერ დროს „Cookie-ფაილების პარამეტრების“ მეშვეობით.",
      ],
    },

    {
      title: "2. Cookie-ფაილების კატეგორიები",
    },

    {
      title: "2.1 მკაცრად აუცილებელი (Essential)",
      paragraphs: [
        "ამ ტიპის cookie-ფაილები არ საჭიროებს თანხმობას, რადგან უზრუნველყოფს ვებგვერდის ფუნქციონირებას.",
        "",
        "მაგალითები:",
      ],

      tables: [
        {
          headers: ["დასახელება", "შენახვის ვადა", "დანიშნულება"],
          rows: [
            ["cookie_consent", "12 თვემდე", "მომხმარებლის არჩევანის დამახსოვრება"],
            ["NEXT_LOCALE / lang", "12 თვემდე", "ენის შენახვა"],
            ["session / security", "სესია / 12 თვემდე", "უსაფრთხოება და ფორმების მუშაობა"],
          ],
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "მათი გამორთვა შეუძლებელია ვებგვერდის მუშაობის დარღვევის გარეშე.",
      ],
    },

    {
      title: "2.2 ანალიტიკური (Statistics) — მხოლოდ თანხმობით",
      paragraphs: [
        "გამოიყენება მომხმარებელთა ქცევის ანალიზისა და ვებგვერდის გაუმჯობესებისთვის.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "გამოყენებული cookie-ფაილები:",
        "",
        "• _ga — მომხმარებლის იდენტიფიკატორი (2 წლამდე)",
        "• _ga_* — სესიის მდგომარეობა",
        "",
        "თავისებურებები:",
        "",
        "• IP-მისამართის ანონიმიზაცია ჩართულია",
        "• მონაცემები არ გამოიყენება პირდაპირი იდენტიფიკაციისთვის",
        "• შესაძლებელია მონაცემების ევროკავშირის ფარგლებს გარეთ გადაცემა (SCC სტანდარტული საკონტრაქტო დებულებების გამოყენებით)",
        "",
        "მნიშვნელოვანია: მომხმარებლის თანხმობის გარეშე Google Analytics არ იტვირთება.",
      ],
    },

    {
      title: "2.3 მარკეტინგული (Marketing) — მხოლოდ თანხმობით",
      paragraphs: [
        "გამოიყენება პერსონალიზებული რეკლამისა და კამპანიების ეფექტურობის შეფასებისთვის.",
        "",
        "ევროკავშირში რეკომენდებულია გამოყენება:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "დანიშნულება:",
        "",
        "• ტრაფიკის წყაროების მონიტორინგი",
        "• რეტარგეტინგი",
        "• კონვერსიების შეფასება",
        "",
        "შენახვის ვადას განსაზღვრავენ პროვაიდერები (ჩვეულებრივ 13–24 თვემდე).",
      ],
    },

    {
      title: "2.4 ფუნქციური (Functional)",
      paragraphs: [
        "უზრუნველყოფს მომხმარებლის გამოცდილების გაუმჯობესებას:",
        "",
        "• პარამეტრების შენახვა,",
        "• A/B ტესტირება,",
        "• ინტერფეისის ლოკალიზაცია.",
      ],
    },

    {
      title: "3. Cookie-ფაილების მართვა",
      paragraphs: [
        "მომხმარებელს შეუძლია:",
        "",
        "• შეცვალოს პარამეტრები „Cookie-ფაილების პარამეტრების“ მეშვეობით,",
        "• წაშალოს cookie-ფაილები ბრაუზერის პარამეტრებიდან,",
        "• შეზღუდოს მონაცემთა დამუშავება.",
        "",
        "რეკლამის მართვის ბმულები:",
      ],

      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "Cookie-ფაილებზე უარის თქმა შეიძლება ზღუდავდეს ვებგვერდის ფუნქციონალს.",
      ],
    },

    {
      title: "4. მონაცემთა დამუშავების სამართლებრივი საფუძვლები",

      tables: [
        {
          headers: ["კატეგორია", "საფუძველი"],
          rows: [
            ["აუცილებელი", "კანონიერი ინტერესი (ვებგვერდის ფუნქციონირების უზრუნველყოფა)"],
            ["ანალიტიკური", "მომხმარებლის თანხმობა"],
            ["მარკეტინგული", "მომხმარებლის თანხმობა"],
          ],
        },
      ],

      paragraphs: [
        "თანხმობა:",
        "",
        "• გაცემულია თავისუფლად,",
        "• კონკრეტულია,",
        "• ინფორმირებულია,",
        "• შესაძლებელია ნებისმიერ დროს გაუქმდეს.",
      ],
    },

    {
      title: "5. მონაცემთა გადაცემა მესამე პირებისთვის",
      paragraphs: [
        "მონაცემები შეიძლება გადაეცეს:",
        "",
        "• ანალიტიკის პროვაიდერებს (Google),",
        "• სარეკლამო პლატფორმებს (Meta, Google),",
        "• IT-კონტრაქტორებს.",
        "",
        "ევროკავშირის ფარგლებს გარეთ გადაცემა ხორციელდება GDPR-ის მოთხოვნების დაცვით (SCC).",
      ],
    },

    {
      title: "6. შენახვის ვადა",
      paragraphs: [
        "Cookie-ფაილები ინახება:",
        "",
        "• სესიური — ბრაუზერის დახურვამდე,",
        "• მუდმივი — 24 თვემდე (ან მომხმარებლის მიერ წაშლამდე).",
      ],
    },

    {
      title: "7. მომხმარებლის უფლებები",
      paragraphs: [
        "GDPR-ის შესაბამისად მომხმარებელს აქვს უფლება:",
        "",
        "• მიიღოს წვდომა მონაცემებზე,",
        "• მოითხოვოს გასწორება,",
        "• მოითხოვოს წაშლა,",
        "• შეზღუდოს დამუშავება,",
        "• ისარგებლოს მონაცემთა გადატანის უფლებით,",
        "• გაიწვიოს თანხმობა.",
        "",
        "საჩივრის წარდგენა შესაძლებელია",
        "Latvian Data State Inspectorate-ში.",
      ],
    },

    {
      title: "8. პოლიტიკის ცვლილებები",
      paragraphs: [
        "პოლიტიკა შეიძლება განახლდეს. აქტუალური ვერსია ქვეყნდება ვებგვერდზე.",
      ],
    },
  ],
};

const kk: CookiesPolicyDictionary = {
  pageTitle: "Cookie файлдарын пайдалану саясаты",
  sections: [
    {
      title: "Green card agency (ЕО / Польша)",
    },
    {
      title: "1. Cookie файлдары дегеніміз не және олар не үшін қолданылады",
      paragraphs: [
        "Cookie файлдары — бұл сайтқа кірген кезде пайдаланушы құрылғысында сақталатын шағын мәтіндік файлдар. Олар:",
        "",
        "• сайттың дұрыс жұмыс істеуін қамтамасыз етуге,",
        "• пайдаланушы баптауларын (мысалы, тілді) есте сақтауға,",
        "• сайтты пайдалану талдауын жүргізуге,",
        "• келісім болған жағдайда — пайдаланушыға сәйкес жарнаманы көрсетуге мүмкіндік береді.",
        "",
        "Cookie файлдарын пайдалану GDPR және ePrivacy Directive талаптарымен реттеледі.",
        "",
        "Сайтқа алғаш кірген кезде пайдаланушы баннерді көреді және келесі әрекеттердің бірін таңдай алады:",
        "",
        "• барлық cookie файлдарын қабылдау,",
        "• міндетті емес cookie файлдарын қабылдамау,",
        "• санаттарды баптау.",
        "",
        "Келісімді кез келген уақытта «Cookie баптаулары» арқылы қайтарып алуға болады.",
      ],
    },
    {
      title: "2. Cookie санаттары",
    },
    {
      title: "2.1 Қатаң қажетті (Essential)",
      paragraphs: [
        "Бұл cookie файлдары сайттың жұмысын қамтамасыз ететіндіктен пайдаланушы келісімін талап етпейді.",
        "",
        "Мысалдар:",
      ],
      tables: [
        {
          headers: ["Атауы", "Сақтау мерзімі", "Мақсаты"],
          rows: [
            [
              "cookie_consent",
              "12 айға дейін",
              "Пайдаланушы таңдауын есте сақтайды",
            ],
            [
              "NEXT_LOCALE / lang",
              "12 айға дейін",
              "Тілді сақтайды",
            ],
            [
              "session / security",
              "сессия / 12 айға дейін",
              "Қауіпсіздік және формалардың жұмысы",
            ],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Оларды өшіру сайт жұмысының бұзылуына әкелуі мүмкін.",
      ],
    },
    {
      title: "2.2 Талдамалық (Statistics) — тек келісіммен",
      paragraphs: [
        "Пайдаланушылардың әрекеттерін талдау және сайтты жақсарту үшін қолданылады.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Қолданылатын cookie файлдары:",
        "",
        "• _ga — пайдаланушы идентификаторы (2 жылға дейін)",
        "• _ga_* — сессия күйі",
        "",
        "Ерекшеліктері:",
        "",
        "• IP-анонимизация қосылған",
        "• деректер тікелей сәйкестендіру үшін пайдаланылмайды",
        "• деректердің ЕО аумағынан тыс берілуі мүмкін (SCC стандартты шарттық ережелерін қолдана отырып)",
        "",
        "Маңызды: пайдаланушы келісімінсіз Google Analytics жүктелмейді.",
      ],
    },
    {
      title: "2.3 Маркетингтік (Marketing) — тек келісіммен",
      paragraphs: [
        "Дербестендірілген жарнама және жарнамалық кампаниялардың тиімділігін бағалау үшін қолданылады.",
        "",
        "ЕО аумағында келесі сервистерді пайдалану ұсынылады:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Мақсаты:",
        "",
        "• трафик көздерін бақылау",
        "• ретаргетинг",
        "• конверсияларды бағалау",
        "",
        "Сақтау мерзімін провайдерлер белгілейді (әдетте 13–24 айға дейін).",
      ],
    },
    {
      title: "2.4 Функционалдық (Functional)",
      paragraphs: [
        "Пайдаланушы тәжірибесін жақсартуға мүмкіндік береді:",
        "",
        "• пайдаланушы баптауларын сақтау,",
        "• A/B тестілеу,",
        "• интерфейсті локализациялау.",
      ],
    },
    {
      title: "3. Cookie файлдарын басқару",
      paragraphs: [
        "Пайдаланушы:",
        "",
        "• «Cookie баптаулары» арқылы баптауларды өзгерте алады,",
        "• браузер баптаулары арқылы cookie файлдарын өшіре алады,",
        "• деректерді өңдеуді шектей алады.",
        "",
        "Жарнаманы басқару сілтемелері:",
      ],
      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Cookie файлдарынан бас тарту сайттың функционалдығын шектеуі мүмкін.",
      ],
    },
    {
      title: "4. Өңдеудің құқықтық негіздері",
      tables: [
        {
          headers: ["Санат", "Негіз"],
          rows: [
            [
              "Қажетті",
              "Заңды мүдде (сайт жұмысын қамтамасыз ету)",
            ],
            ["Талдамалық", "Пайдаланушының келісімі"],
            ["Маркетингтік", "Пайдаланушының келісімі"],
          ],
        },
      ],
      paragraphs: [
        "Келісім:",
        "",
        "• еркін беріледі,",
        "• нақты,",
        "• ақпараттандырылған,",
        "• кез келген уақытта кері қайтарылуы мүмкін.",
      ],
    },
    {
      title: "5. Деректерді үшінші тұлғаларға беру",
      paragraphs: [
        "Деректер келесі тұлғаларға берілуі мүмкін:",
        "",
        "• аналитика жеткізушілеріне (Google),",
        "• жарнамалық платформаларға (Meta, Google),",
        "• IT мердігерлеріне.",
        "",
        "ЕО аумағынан тыс беру GDPR талаптарына сәйкес (SCC) жүзеге асырылады.",
      ],
    },
    {
      title: "6. Сақтау мерзімі",
      paragraphs: [
        "Cookie файлдары:",
        "",
        "• сессиялық — браузер жабылғанға дейін,",
        "• тұрақты — 24 айға дейін (немесе пайдаланушы жойғанға дейін) сақталады.",
      ],
    },
    {
      title: "7. Пайдаланушы құқықтары",
      paragraphs: [
        "GDPR талаптарына сәйкес пайдаланушының келесі құқықтары бар:",
        "",
        "• деректерге қол жеткізу,",
        "• түзету,",
        "• жою,",
        "• өңдеуді шектеу,",
        "• деректерді тасымалдау,",
        "• келісімді қайтарып алу.",
        "",
        "Шағым келесі органға берілуі мүмкін:",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Саясатқа өзгерістер енгізу",
      paragraphs: [
        "Саясат жаңартылуы мүмкін. Өзекті нұсқасы сайтта жарияланады.",
      ],
    },
  ],
};

const tr: CookiesPolicyDictionary = {
  pageTitle: "Çerez Kullanım Politikası",
  sections: [
    {
      title: "Green Card Agency (AB / Polonya)",
    },
    {
      title: "1. Çerezler Nedir ve Hangi Amaçlarla Kullanılır",
      paragraphs: [
        "Çerezler, kullanıcı siteyi ziyaret ettiğinde cihazına kaydedilen küçük metin dosyalarıdır. Bu dosyalar aşağıdaki amaçlarla kullanılır:",
        "",
        "• sitenin düzgün çalışmasını sağlamak,",
        "• kullanıcı tercihlerini hatırlamak (örneğin dil seçimi),",
        "• site kullanımını analiz etmek,",
        "• kullanıcı onayı mevcutsa ilgili reklamları göstermek.",
        "",
        "Çerez kullanımı GDPR ve ePrivacy Directive hükümlerine tabidir.",
        "",
        "Kullanıcı siteyi ilk ziyaret ettiğinde bir bildirim görür ve şu seçeneklere sahiptir:",
        "",
        "• tüm çerezleri kabul etmek,",
        "• zorunlu olmayan çerezleri reddetmek,",
        "• çerez kategorilerini yapılandırmak.",
        "",
        "Verilen onay, “Çerez Ayarları” üzerinden her zaman geri çekilebilir.",
      ],
    },
    {
      title: "2. Çerez Kategorileri",
    },
    {
      title: "2.1 Kesinlikle Gerekli (Essential)",
      paragraphs: [
        "Bu çerezler sitenin çalışmasını sağladığı için kullanıcı onayı gerektirmez.",
        "",
        "Örnekler:",
      ],
      tables: [
        {
          headers: ["Ad", "Saklama Süresi", "Amaç"],
          rows: [
            ["cookie_consent", "12 aya kadar", "Kullanıcının seçimini hatırlar"],
            ["NEXT_LOCALE / lang", "12 aya kadar", "Dil ayarını kaydeder"],
            ["session / security", "oturum / 12 aya kadar", "Güvenlik ve form işleyişi"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Bu çerezlerin devre dışı bırakılması, sitenin düzgün çalışmasını engelleyebilir.",
      ],
    },
    {
      title: "2.2 Analitik (Statistics) — yalnızca kullanıcı onayı ile",
      paragraphs: [
        "Kullanıcı davranışlarını analiz etmek ve siteyi geliştirmek amacıyla kullanılır.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Kullanılan çerezler:",
        "",
        "• _ga — kullanıcı tanımlayıcısı (2 yıla kadar)",
        "• _ga_* — oturum durumu",
        "",
        "Özellikler:",
        "",
        "• IP anonimleştirme etkinleştirilmiştir",
        "• veriler doğrudan kimlik tespiti amacıyla kullanılmaz",
        "• veriler AB dışına aktarılabilir (Standart Sözleşme Maddeleri — SCC kapsamında)",
        "",
        "Önemli: Kullanıcının onayı olmadan Google Analytics yüklenmez.",
      ],
    },
    {
      title: "2.3 Pazarlama (Marketing) — yalnızca kullanıcı onayı ile",
      paragraphs: [
        "Kişiselleştirilmiş reklam ve kampanya performans ölçümü amacıyla kullanılır.",
        "",
        "AB içerisinde önerilen araçlar:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Amaçlar:",
        "",
        "• trafik kaynaklarının izlenmesi",
        "• yeniden hedefleme (retargeting)",
        "• dönüşüm analizleri",
        "",
        "Saklama süresi hizmet sağlayıcılar tarafından belirlenir (genellikle 13–24 ay).",
      ],
    },
    {
      title: "2.4 İşlevsel (Functional)",
      paragraphs: [
        "Kullanıcı deneyimini geliştirmeye yardımcı olur:",
        "",
        "• tercihlerin kaydedilmesi,",
        "• A/B testleri,",
        "• arayüz yerelleştirmesi.",
      ],
    },
    {
      title: "3. Çerez Yönetimi",
      paragraphs: [
        "Kullanıcı aşağıdaki işlemleri yapabilir:",
        "",
        "• “Çerez Ayarları” üzerinden tercihlerini değiştirmek,",
        "• tarayıcı ayarlarından çerezleri silmek,",
        "• veri işlenmesini sınırlandırmak.",
        "",
        "Reklam tercihlerini yönetmek için bağlantılar:",
      ],
      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "Çerezlerin reddedilmesi, sitenin bazı işlevlerinin sınırlanmasına neden olabilir.",
      ],
    },
    {
      title: "4. Veri İşlemenin Hukuki Dayanakları",
      tables: [
        {
          headers: ["Kategori", "Dayanak"],
          rows: [
            ["Zorunlu", "Meşru menfaat (sitenin çalışmasının sağlanması)"],
            ["Analitik", "Kullanıcı onayı"],
            ["Pazarlama", "Kullanıcı onayı"],
          ],
        },
      ],
      paragraphs: [
        "Onay:",
        "",
        "• özgür iradeyle verilmiş olmalıdır,",
        "• belirli bir amaca yönelik olmalıdır,",
        "• bilgilendirilmiş şekilde verilmelidir,",
        "• her zaman geri çekilebilir olmalıdır.",
      ],
    },
    {
      title: "5. Verilerin Üçüncü Taraflara Aktarılması",
      paragraphs: [
        "Veriler aşağıdaki taraflara aktarılabilir:",
        "",
        "• analiz hizmet sağlayıcıları (Google),",
        "• reklam platformları (Meta, Google),",
        "• BT hizmet sağlayıcıları.",
        "",
        "AB dışına veri aktarımı, GDPR gerekliliklerine ve SCC mekanizmalarına uygun şekilde gerçekleştirilir.",
      ],
    },
    {
      title: "6. Saklama Süresi",
      paragraphs: [
        "Çerezler şu sürelerle saklanır:",
        "",
        "• oturum çerezleri — tarayıcı kapanana kadar,",
        "• kalıcı çerezler — 24 aya kadar (veya kullanıcı tarafından silinene kadar).",
      ],
    },
    {
      title: "7. Kullanıcının Hakları",
      paragraphs: [
        "GDPR kapsamında kullanıcı aşağıdaki haklara sahiptir:",
        "",
        "• verilere erişim hakkı,",
        "• düzeltme hakkı,",
        "• silme hakkı,",
        "• işlemeyi sınırlandırma hakkı,",
        "• veri taşınabilirliği hakkı,",
        "• verilen onayı geri çekme hakkı.",
        "",
        "Şikâyetler şu kuruma yapılabilir:",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Politika Değişiklikleri",
      paragraphs: [
        "Bu politika güncellenebilir. Güncel sürüm internet sitesinde yayımlanır.",
      ],
    },
  ],
};

const fa: CookiesPolicyDictionary = {
  pageTitle: "سیاست استفاده از فایل‌های cookie",
  sections: [
    {
      title: "Green card agency (اتحادیه اروپا / لهستان)",
    },
    {
      title: "1. فایل‌های cookie چیستند و برای چه استفاده می‌شوند",
      paragraphs: [
        "فایل‌های cookie، فایل‌های متنی کوچکی هستند که هنگام بازدید از وب‌سایت روی دستگاه کاربر ذخیره می‌شوند. این فایل‌ها امکان موارد زیر را فراهم می‌کنند:",
        "",
        "• تضمین عملکرد صحیح وب‌سایت،",
        "• ذخیره تنظیمات کاربر (برای مثال زبان)،",
        "• تحلیل نحوه استفاده از وب‌سایت،",
        "• در صورت وجود رضایت کاربر — نمایش تبلیغات مرتبط.",
        "",
        "استفاده از cookie تحت مقررات GDPR و دستورالعمل ePrivacy قرار دارد.",
        "",
        "هنگام اولین بازدید از وب‌سایت، کاربر یک بنر مشاهده می‌کند و می‌تواند:",
        "",
        "• همه cookieها را بپذیرد،",
        "• cookieهای غیرضروری را رد کند،",
        "• دسته‌بندی‌ها را تنظیم نماید.",
        "",
        "رضایت را می‌توان در هر زمان از طریق بخش «تنظیمات cookie» لغو کرد.",
      ],
    },
    {
      title: "2. دسته‌بندی‌های cookie",
    },
    {
      title: "2.1 ضروری و کاملاً لازم (Essential)",
      paragraphs: [
        "این cookieها برای عملکرد وب‌سایت ضروری هستند و به رضایت کاربر نیاز ندارند.",
        "",
        "نمونه‌ها:",
      ],
      tables: [
        {
          headers: ["نام", "مدت نگهداری", "هدف استفاده"],
          rows: [
            ["cookie_consent", "تا 12 ماه", "ذخیره انتخاب کاربر"],
            ["NEXT_LOCALE / lang", "تا 12 ماه", "ذخیره زبان"],
            ["session / security", "جلسه / تا 12 ماه", "امنیت و عملکرد فرم‌ها"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "غیرفعال‌سازی این cookieها بدون اختلال در عملکرد وب‌سایت امکان‌پذیر نیست.",
      ],
    },
    {
      title: "2.2 تحلیلی (Statistics) — فقط با رضایت کاربر",
      paragraphs: [
        "این cookieها برای تحلیل رفتار کاربران و بهبود عملکرد وب‌سایت استفاده می‌شوند.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "cookieهای مورد استفاده:",
        "",
        "• _ga — شناسه کاربر (تا 2 سال)",
        "• _ga_* — وضعیت نشست",
        "",
        "ویژگی‌ها:",
        "",
        "• ناشناس‌سازی IP فعال است",
        "• داده‌ها برای شناسایی مستقیم افراد استفاده نمی‌شوند",
        "• ممکن است داده‌ها به خارج از اتحادیه اروپا منتقل شوند (با استفاده از SCC)",
        "",
        "مهم: بدون رضایت کاربر، Google Analytics بارگذاری نمی‌شود.",
      ],
    },
    {
      title: "2.3 بازاریابی (Marketing) — فقط با رضایت کاربر",
      paragraphs: [
        "این cookieها برای تبلیغات شخصی‌سازی‌شده و ارزیابی اثربخشی کمپین‌ها استفاده می‌شوند.",
        "",
        "در اتحادیه اروپا معمولاً از موارد زیر استفاده می‌شود:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "اهداف استفاده:",
        "",
        "• ردیابی منابع ترافیک",
        "• بازاریابی مجدد (Retargeting)",
        "• ارزیابی نرخ تبدیل",
        "",
        "مدت نگهداری توسط ارائه‌دهندگان خدمات تعیین می‌شود (معمولاً بین 13 تا 24 ماه).",
      ],
    },
    {
      title: "2.4 عملکردی (Functional)",
      paragraphs: [
        "این cookieها تجربه کاربری را بهبود می‌بخشند:",
        "",
        "• ذخیره ترجیحات کاربر،",
        "• انجام تست‌های A/B،",
        "• بومی‌سازی رابط کاربری.",
      ],
    },
    {
      title: "3. مدیریت cookie",
      paragraphs: [
        "کاربر می‌تواند:",
        "",
        "• تنظیمات را از طریق بخش «تنظیمات cookie» تغییر دهد،",
        "• cookieها را از طریق تنظیمات مرورگر حذف کند،",
        "• پردازش داده‌ها را محدود نماید.",
        "",
        "لینک‌های مدیریت تبلیغات:",
      ],
      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },
    {
      title: "",
      paragraphs: [
        "رد کردن cookieها ممکن است بخشی از عملکرد وب‌سایت را محدود کند.",
      ],
    },
    {
      title: "4. مبانی قانونی پردازش",
      tables: [
        {
          headers: ["دسته‌بندی", "مبنای قانونی"],
          rows: [
            ["ضروری", "منافع مشروع (تضمین عملکرد وب‌سایت)"],
            ["تحلیلی", "رضایت کاربر"],
            ["بازاریابی", "رضایت کاربر"],
          ],
        },
      ],
      paragraphs: [
        "رضایت باید:",
        "",
        "• آزادانه ارائه شود،",
        "• مشخص و معین باشد،",
        "• آگاهانه باشد،",
        "• در هر زمان قابل لغو باشد.",
      ],
    },
    {
      title: "5. انتقال داده‌ها به اشخاص ثالث",
      paragraphs: [
        "داده‌ها ممکن است به موارد زیر منتقل شوند:",
        "",
        "• ارائه‌دهندگان خدمات تحلیلی (Google)،",
        "• پلتفرم‌های تبلیغاتی (Meta، Google)،",
        "• پیمانکاران IT.",
        "",
        "انتقال داده‌ها خارج از اتحادیه اروپا مطابق با الزامات GDPR و SCC انجام می‌شود.",
      ],
    },
    {
      title: "6. مدت نگهداری",
      paragraphs: [
        "cookieها به شکل زیر ذخیره می‌شوند:",
        "",
        "• cookieهای جلسه‌ای — تا زمان بستن مرورگر،",
        "• cookieهای دائمی — تا 24 ماه (یا تا زمان حذف توسط کاربر).",
      ],
    },
    {
      title: "7. حقوق کاربر",
      paragraphs: [
        "مطابق GDPR، کاربر حق دارد:",
        "",
        "• به داده‌های خود دسترسی داشته باشد،",
        "• آن‌ها را اصلاح کند،",
        "• حذف داده‌ها را درخواست کند،",
        "• پردازش را محدود کند،",
        "• داده‌ها را منتقل کند،",
        "• رضایت خود را پس بگیرد.",
        "",
        "شکایت می‌تواند نزد",
        "Latvian Data State Inspectorate",
        "ثبت شود.",
      ],
    },
    {
      title: "8. تغییرات سیاست",
      paragraphs: [
        "این سیاست ممکن است به‌روزرسانی شود. نسخه فعلی همواره در وب‌سایت منتشر می‌شود.",
      ],
    },
  ],
};

const hy: CookiesPolicyDictionary = {
  pageTitle: "Cookie ֆայլերի օգտագործման քաղաքականություն",

  sections: [
    {
      title: "Green card agency (ԵՄ / Լեհաստան)",
    },

    {
      title: "1. Ինչ են cookie ֆայլերը և ինչ նպատակով են օգտագործվում",
      paragraphs: [
        "Cookie ֆայլերը փոքր տեքստային ֆայլեր են, որոնք պահպանվում են օգտատիրոջ սարքում կայք այցելելիս։ Դրանք թույլ են տալիս՝",
        "",
        "• ապահովել կայքի ճիշտ աշխատանքը,",
        "• հիշել օգտատիրոջ կարգավորումները (օրինակ՝ լեզուն),",
        "• վերլուծել կայքի օգտագործումը,",
        "• համաձայնության առկայության դեպքում ցուցադրել համապատասխան գովազդ։",
        "",
        "Cookie ֆայլերի օգտագործումը կարգավորվում է GDPR-ով և ePrivacy Directive-ով։",
        "",
        "Կայք առաջին այցելության ժամանակ օգտատերը տեսնում է banner և կարող է՝",
        "",
        "• ընդունել բոլոր cookie ֆայլերը,",
        "• մերժել ոչ պարտադիր cookie ֆայլերը,",
        "• կարգավորել կատեգորիաները։",
        "",
        "Համաձայնությունը կարելի է ցանկացած պահի հետ կանչել «Cookie կարգավորումներ» բաժնի միջոցով։",
      ],
    },

    {
      title: "2. Cookie ֆայլերի կատեգորիաներ",
    },

    {
      title: "2.1 Խիստ անհրաժեշտ (Essential)",
      paragraphs: [
        "Այս cookie ֆայլերը համաձայնություն չեն պահանջում, քանի որ ապահովում են կայքի աշխատանքը։",
        "",
        "Օրինակներ՝",
      ],

      tables: [
        {
          headers: ["Անվանում", "Պահպանման ժամկետ", "Նպատակ"],
          rows: [
            [
              "cookie_consent",
              "մինչև 12 ամիս",
              "Հիշում է օգտատիրոջ ընտրությունը",
            ],
            [
              "NEXT_LOCALE / lang",
              "մինչև 12 ամիս",
              "Պահպանում է լեզվի կարգավորումը",
            ],
            [
              "session / security",
              "սեսիա / մինչև 12 ամիս",
              "Անվտանգություն և ձևերի աշխատանք",
            ],
          ],
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "Անջատումը հնարավոր չէ՝ առանց կայքի աշխատանքի խափանման։",
      ],
    },

    {
      title:
        "2.2 Վերլուծական (Statistics) — միայն համաձայնությամբ",
      paragraphs: [
        "Օգտագործվում են օգտատերերի վարքագծի վերլուծության և կայքի բարելավման համար։",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Օգտագործվող cookie ֆայլերը՝",
        "",
        "• _ga — օգտատիրոջ նույնացուցիչ (մինչև 2 տարի)",
        "• _ga_* — սեսիայի վիճակ",
        "",
        "Առանձնահատկություններ՝",
        "",
        "• IP անանունացումը միացված է",
        "• տվյալները չեն օգտագործվում անմիջական նույնականացման համար",
        "• հնարավոր է տվյալների փոխանցում ԵՄ սահմաններից դուրս (SCC ստանդարտ պայմանագրային դրույթների կիրառմամբ)",
        "",
        "Կարևոր է՝ առանց օգտատիրոջ համաձայնության Google Analytics-ը չի բեռնվում։",
      ],
    },

    {
      title:
        "2.3 Մարքեթինգային (Marketing) — միայն համաձայնությամբ",
      paragraphs: [
        "Օգտագործվում են անհատականացված գովազդի և արշավների արդյունավետության գնահատման համար։",
        "",
        "ԵՄ-ում խորհուրդ է տրվում օգտագործել՝",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Նպատակներ՝",
        "",
        "• տրաֆիկի աղբյուրների հետևում",
        "• ռեմարքեթինգ",
        "• կոնվերսիաների գնահատում",
        "",
        "Պահպանման ժամկետը սահմանվում է ծառայություն մատուցողների կողմից (սովորաբար մինչև 13–24 ամիս)։",
      ],
    },

    {
      title: "2.4 Ֆունկցիոնալ (Functional)",
      paragraphs: [
        "Թույլ են տալիս բարելավել օգտատիրոջ փորձը՝",
        "",
        "• նախընտրությունների պահպանում,",
        "• A/B թեստավորում,",
        "• ինտերֆեյսի տեղայնացում։",
      ],
    },

    {
      title: "3. Cookie ֆայլերի կառավարում",
      paragraphs: [
        "Օգտատերը կարող է՝",
        "",
        "• փոխել կարգավորումները «Cookie կարգավորումներ» բաժնի միջոցով,",
        "• ջնջել cookie ֆայլերը բրաուզերի կարգավորումներով,",
        "• սահմանափակել տվյալների մշակումը։",
        "",
        "Գովազդի կառավարման հղումներ՝",
      ],

      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com",
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences",
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "Cookie ֆայլերից հրաժարվելը կարող է սահմանափակել կայքի ֆունկցիոնալությունը։",
      ],
    },

    {
      title: "4. Մշակման իրավական հիմքերը",

      tables: [
        {
          headers: ["Կատեգորիա", "Հիմք"],
          rows: [
            [
              "Անհրաժեշտ",
              "Օրինական շահ (կայքի աշխատանքի ապահովում)",
            ],
            [
              "Վերլուծական",
              "Օգտատիրոջ համաձայնություն",
            ],
            [
              "Մարքեթինգային",
              "Օգտատիրոջ համաձայնություն",
            ],
          ],
        },
      ],

      paragraphs: [
        "Համաձայնությունը՝",
        "",
        "• տրված է ազատ կամքով,",
        "• կոնկրետ է,",
        "• տեղեկացված է,",
        "• կարող է ցանկացած պահի հետ կանչվել։",
      ],
    },

    {
      title: "5. Տվյալների փոխանցում երրորդ անձանց",
      paragraphs: [
        "Տվյալները կարող են փոխանցվել՝",
        "",
        "• վերլուծական ծառայություններ մատուցողներին (Google),",
        "• գովազդային հարթակներին (Meta, Google),",
        "• IT կապալառուներին։",
        "",
        "Տվյալների փոխանցումը ԵՄ սահմաններից դուրս իրականացվում է GDPR պահանջների պահպանմամբ (SCC)։",
      ],
    },

    {
      title: "6. Պահպանման ժամկետ",
      paragraphs: [
        "Cookie ֆայլերը պահպանվում են՝",
        "",
        "• սեսիոն — մինչև բրաուզերի փակումը,",
        "• մշտական — մինչև 24 ամիս (կամ մինչև օգտատիրոջ կողմից ջնջումը)։",
      ],
    },

    {
      title: "7. Օգտատիրոջ իրավունքները",
      paragraphs: [
        "GDPR-ի համաձայն օգտատերն իրավունք ունի՝",
        "",
        "• ստանալ հասանելիություն տվյալներին,",
        "• ուղղել տվյալները,",
        "• պահանջել ջնջում,",
        "• սահմանափակել մշակումը,",
        "• պահանջել տվյալների փոխանցելիություն,",
        "• հետ կանչել համաձայնությունը։",
        "",
        "Բողոքը կարող է ներկայացվել",
        "Latvian Data State Inspectorate մարմնին։",
      ],
    },

    {
      title: "8. Քաղաքականության փոփոխություններ",
      paragraphs: [
        "Քաղաքականությունը կարող է թարմացվել։ Արդիական տարբերակը հրապարակվում է կայքում։",
      ],
    },
  ],
};

const dictionaries: Record<Lang, CookiesPolicyDictionary> = {
  ru,
  pl,
  en,
  be,
  uz,
  ka,
  kk,
  tr,
  fa,
  hy,
};

export function getCookiesPolicyDictionary(lang: Lang): CookiesPolicyDictionary {
  return dictionaries[lang];
}