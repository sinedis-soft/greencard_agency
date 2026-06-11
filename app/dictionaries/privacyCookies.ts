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

const ckb: CookiesPolicyDictionary = {
  pageTitle: "سیاسەتی بەکارهێنانی فایلەکانی Cookie",

  sections: [
    {
      title: "Green Card Agency (یەکێتی ئەورووپا / پۆڵەندا)",
    },

    {
      title: "1. Cookie چییە و بۆچی بەکاردەهێندرێت",
      paragraphs: [
        "فایلەکانی Cookie فایلێکی دەقی بچوکن کە لەسەر ئامێری بەکارهێنەر پاشەکەوت دەکرێن کاتێک ماڵپەڕەکە سەردەکات. ئەمانە یارمەتیدەدەن بۆ:",
        "",
        "• دڵنیابوون لە کاری دروستی ماڵپەڕ،",
        "• بیرخستنەوەی هەڵبژاردەکانی بەکارهێنەر (بۆ نموونە زمان)،",
        "• شیکردنەوەی بەکارهێنانی ماڵپەڕ،",
        "• لە حاڵەتی هەبوونی ڕەزامەندی — پیشاندانی ڕیکلامی پەیوەندیدار.",
        "",
        "بەکارهێنانی Cookie بەپێی GDPR و ePrivacy Directive ڕێکخراوە.",
        "",
        "لە یەکەم سەردانی ماڵپەڕ، بەکارهێنەر بانەرێک دەبینێت و دەتوانێت:",
        "",
        "• هەموو Cookie ـەکان قبووڵ بکات،",
        "• Cookie ـە ناپێویستەکان ڕەت بکاتەوە،",
        "• هاوپۆلەکان ڕێکبخات.",
        "",
        "ڕەزامەندی دەتوانرێت لە هەر کاتێکدا لە ڕێگەی «ڕێکخستنەکانی Cookie» گەڕێندرێتەوە.",
      ],
    },

    {
      title: "2. هاوپۆلەکانی Cookie",
    },

    {
      title: "2.1 Cookie ـە بە تەواوی پێویستەکان (Essential)",
      paragraphs: [
        "ئەم Cookie ـانە پێویستیان بە ڕەزامەندی نییە، چونکە کاری ماڵپەڕەکە دابین دەکەن.",
        "",
        "نموونەکان:",
      ],

      tables: [
        {
          headers: ["ناو", "ماوەی هەڵگرتن", "مەبەست"],
          rows: [
            [
              "cookie_consent",
              "تا 12 مانگ",
              "بیرخستنەوەی هەڵبژاردنی بەکارهێنەر",
            ],
            [
              "NEXT_LOCALE / lang",
              "تا 12 مانگ",
              "پاراستنی زمانی هەڵبژێردراو",
            ],
            [
              "session / security",
              "دانیشتن / تا 12 مانگ",
              "ئاسایش و کاری فۆڕمەکان",
            ],
          ],
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "ناچالاککردنیان بەبێ تێکدانی کاری ماڵپەڕەکە ئەستەمە.",
      ],
    },

    {
      title: "2.2 Cookie ـە ئامارییەکان (Statistics) — تەنها بە ڕەزامەندی",
      paragraphs: [
        "بۆ شیکردنەوەی ڕەفتاری بەکارهێنەران و باشترکردنی ماڵپەڕ بەکاردەهێندرێن.",
        "",
        "Google Analytics 4",
        "",
        "Cookie ـە بەکارهاتووەکان:",
        "",
        "• _ga — ناسێنەری بەکارهێنەر (تا 2 ساڵ)",
        "• _ga_* — دۆخی دانیشتن",
        "",
        "تایبەتمەندییەکان:",
        "",
        "• نەناساندنی IP چالاک کراوە",
        "• داتا بۆ ناسینەوەی ڕاستەوخۆی کەس بەکارناهێندرێت",
        "• دەکرێت داتا بۆ دەرەوەی یەکێتی ئەورووپا بگوازرێتەوە (بە بەکارهێنانی SCC)",
        "",
        "گرنگ: بەبێ ڕەزامەندی بەکارهێنەر، Google Analytics بار ناکرێت.",
      ],
    },

    {
      title: "2.3 Cookie ـە مارکێتینگییەکان (Marketing) — تەنها بە ڕەزامەندی",
      paragraphs: [
        "بۆ ڕیکلامی کەسی‌کراو و هەڵسەنگاندنی کاریگەری کامپەینەکان بەکاردەهێندرێن.",
        "",
        "لە یەکێتی ئەورووپا پێشنیار دەکرێت ئەمانە بەکاربهێنرێن:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "مەبەست:",
        "",
        "• شوێنکەوتنی سەرچاوەکانی هاتوچۆ",
        "• ڕیتارگێتینگ",
        "• هەڵسەنگاندنی گۆڕانکارییەکان (Conversions)",
        "",
        "ماوەی هەڵگرتن لەلایەن دابینکەرەکانەوە دیاری دەکرێت (بە گشتی 13–24 مانگ).",
      ],
    },

    {
      title: "2.4 Cookie ـە کارکردییەکان (Functional)",
      paragraphs: [
        "یارمەتیدەدەن بۆ باشترکردنی ئەزموونی بەکارهێنەر:",
        "",
        "• پاراستنی هەڵبژاردەکان،",
        "• تاقیکردنەوەی A/B،",
        "• لوکالایزەکردنی ڕووکار.",
      ],
    },

    {
      title: "3. بەڕێوەبردنی Cookie",
      paragraphs: [
        "بەکارهێنەر دەتوانێت:",
        "",
        "• ڕێکخستنەکان لە ڕێگەی «ڕێکخستنەکانی Cookie» بگۆڕێت،",
        "• Cookie ـەکان لە ڕێکخستنەکانی وێبگەڕ بسڕێتەوە،",
        "• مامەڵەکردنی داتا سنووردار بکات.",
        "",
        "بەستەرەکانی بەڕێوەبردنی ڕیکلام:",
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
        "ڕەتکردنەوەی Cookie دەکرێت هەندێک لە کاراییەکانی ماڵپەڕ سنووردار بکات.",
      ],
    },

    {
      title: "4. بنەمای یاسایی مامەڵەکردنی داتا",
      tables: [
        {
          headers: ["هاوپۆل", "بنەما"],
          rows: [
            [
              "پێویستەکان",
              "بەرژەوەندی یاسایی (دابینکردنی کاری ماڵپەڕ)",
            ],
            [
              "ئامارییەکان",
              "ڕەزامەندی بەکارهێنەر",
            ],
            [
              "مارکێتینگ",
              "ڕەزامەندی بەکارهێنەر",
            ],
          ],
        },
      ],

      paragraphs: [
        "ڕەزامەندی:",
        "",
        "• بە ئازادی دراوە،",
        "• دیاریکراوە،",
        "• بە ئاگاداری تەواوەوە دراوە،",
        "• دەتوانرێت لە هەر کاتێکدا گەڕێندرێتەوە.",
      ],
    },

    {
      title: "5. گواستنەوەی داتا بۆ لایەنی سێیەم",
      paragraphs: [
        "داتا دەکرێت بگوازرێتەوە بۆ:",
        "",
        "• دابینکەرانی شیکاری (Google)،",
        "• پلاتفۆڕمە ڕیکلامییەکان (Meta، Google)،",
        "• بەڵێندەرانی IT.",
        "",
        "گواستنەوەی داتا بۆ دەرەوەی یەکێتی ئەورووپا بەپێی داواکارییەکانی GDPR و SCC ئەنجام دەدرێت.",
      ],
    },

    {
      title: "6. ماوەی هەڵگرتن",
      paragraphs: [
        "Cookie ـەکان بەم شێوەیە هەڵدەگیرێن:",
        "",
        "• Cookie ـە دانیشتنییەکان — تا داخستنی وێبگەڕ،",
        "• Cookie ـە هەمیشەییەکان — تا 24 مانگ (یان تا کاتی سڕینەوەیان لەلایەن بەکارهێنەرەوە).",
      ],
    },

    {
      title: "7. مافەکانی بەکارهێنەر",
      paragraphs: [
        "بەپێی GDPR، بەکارهێنەر مافی ئەمانەی هەیە:",
        "",
        "• دەستگەیشتن بە داتا،",
        "• ڕاستکردنەوە،",
        "• سڕینەوە،",
        "• سنووردارکردنی مامەڵەکردن،",
        "• گواستنەوەی داتا،",
        "• گەڕاندنەوەی ڕەزامەندی.",
        "",
        "سکاڵا دەتوانرێت پێشکەش بکرێت بۆ",
        "Latvian Data State Inspectorate.",
      ],
    },

    {
      title: "8. گۆڕانکاری لە سیاسەتەکەدا",
      paragraphs: [
        "ئەم سیاسەتە دەکرێت نوێ بکرێتەوە. نوێترین وەشان هەمیشە لە ماڵپەڕ بڵاو دەکرێتەوە.",
      ],
    },
  ],
};
const kmr: CookiesPolicyDictionary = {
  pageTitle: "Polîtîkaya Bikaranîna Pelên Cookie",

  sections: [
    {
      title: "Green Card Agency (Yekîtiya Ewropayê / Polonya)",
    },

    {
      title: "1. Cookie çi ne û ji bo çi têne bikaranîn",
      paragraphs: [
        "Pelên cookie pelên nivîsê yên biçûk in ku dema serdana malperê li ser amûra bikarhêner têne tomar kirin. Ew rê didin ku:",
        "",
        "• xebata rast a malperê were peydakirin,",
        "• mîhengên bikarhêner werin bîranîn (mînak: ziman),",
        "• bikaranîna malperê were analîzkirin,",
        "• heke pejirandin hebe, reklamanên têkildar werin nîşandan.",
        "",
        "Bikaranîna cookieyan bi GDPR û ePrivacy Directive tê rêvebirin.",
        "",
        "Di serdana yekem a malperê de, bikarhêner bannerek dibîne û dikare:",
        "",
        "• hemû cookieyan qebûl bike,",
        "• cookieyên ne pêwîst red bike,",
        "• kategoriyan mîheng bike.",
        "",
        "Pejirandin dikare her dem bi rêya «Mîhengên Cookieyan» were paşvekişandin.",
      ],
    },

    {
      title: "2. Kategoriyên Cookieyan",
    },

    {
      title: "2.1 Cookieyên Bi Tevayî Pêwîst (Essential)",
      paragraphs: [
        "Ev cookie ne hewce ne ku pejirandinê bistînin, ji ber ku xebata malperê peyda dikin.",
        "",
        "Mînak:",
      ],

      tables: [
        {
          headers: ["Nav", "Dema Tomarkirinê", "Armanc"],
          rows: [
            ["cookie_consent", "heta 12 mehan", "Hilbijartina bikarhêner tê bîranîn"],
            ["NEXT_LOCALE / lang", "heta 12 mehan", "Ziman diparêze"],
            ["session / security", "session / heta 12 mehan", "Ewlehî û xebata forman"],
          ],
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "Bêyî xebata malperê têk biçe, ne gengaz e ku ev cookie werin neçalakkirin.",
      ],
    },

    {
      title: "2.2 Cookieyên Analîtîkî (Statistics) — tenê bi pejirandinê",
      paragraphs: [
        "Ji bo analîzkirina tevgera bikarhêneran û baştirkirina malperê têne bikaranîn.",
        "",
        "Google Analytics 4",
        "",
        "Cookieyên ku têne bikaranîn:",
        "",
        "• _ga — nasnameya bikarhêner (heta 2 salan)",
        "• _ga_* — rewşa sessionê",
        "",
        "Taybetmendî:",
        "",
        "• anonîmkirina IP çalak e",
        "• dane ji bo nasandina rasterast nayên bikaranîn",
        "• gengaz e dane li derveyî Yekîtiya Ewropayê werin veguhestin (bi SCC)",
        "",
        "Girîng: bêyî pejirandina bikarhêner Google Analytics nayê barkirin.",
      ],
    },

    {
      title: "2.3 Cookieyên Reklamê (Marketing) — tenê bi pejirandinê",
      paragraphs: [
        "Ji bo reklama kesane û nirxandina bandora kampanyayan têne bikaranîn.",
        "",
        "Di Yekîtiya Ewropayê de bi gelemperî ev têne bikaranîn:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Armanc:",
        "",
        "• şopandina çavkaniyên trafîkê",
        "• retargeting",
        "• nirxandina conversionan",
        "",
        "Dema tomarkirinê ji aliyê peydakera xizmetê ve tê diyarkirin (bi gelemperî 13–24 meh).",
      ],
    },

    {
      title: "2.4 Cookieyên Fonksiyonel (Functional)",
      paragraphs: [
        "Ew alîkariyê dikin ku ezmûna bikarhênerê baştir bibe:",
        "",
        "• parastina tercîhan,",
        "• testên A/B,",
        "• lokalîzekirina navrûyê.",
      ],
    },

    {
      title: "3. Rêvebirina Cookieyan",
      paragraphs: [
        "Bikarhêner dikare:",
        "",
        "• mîhengan bi rêya «Mîhengên Cookieyan» biguherîne,",
        "• cookieyan di mîhengên gerokê de jê bibe,",
        "• pêvajokirina daneyan sînordar bike.",
        "",
        "Girêdanên rêvebirina reklamê:",
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
        "Redkirina cookieyan dikare hin fonksiyonên malperê sînordar bike.",
      ],
    },

    {
      title: "4. Bingehên Qanûnî yên Pêvajokirinê",

      tables: [
        {
          headers: ["Kategori", "Bingeh"],
          rows: [
            ["Pêwîst", "Berjewendiya qanûnî (xebata malperê)"],
            ["Analîtîkî", "Pejirandina bikarhêner"],
            ["Marketing", "Pejirandina bikarhêner"],
          ],
        },
      ],

      paragraphs: [
        "Pejirandin:",
        "",
        "• bi azadî hatiye dayîn,",
        "• taybet e,",
        "• bi agahdarî hatiye dayîn,",
        "• her dem dikare were paşvekişandin.",
      ],
    },

    {
      title: "5. Veguhastina Daneyan ji Kesên Sêyem Re",
      paragraphs: [
        "Dane dikarin ji van re werin veguhestin:",
        "",
        "• peydakera xizmetên analîtîkî (Google),",
        "• platformên reklamê (Meta, Google),",
        "• peymankarên IT.",
        "",
        "Veguhastina daneyan li derveyî Yekîtiya Ewropayê li gorî daxwazên GDPR (SCC) tê kirin.",
      ],
    },

    {
      title: "6. Dema Tomarkirinê",
      paragraphs: [
        "Cookie têne parastin:",
        "",
        "• cookieyên sessionê — heta girtina gerokê,",
        "• cookieyên domdar — heta 24 mehan (an heta jêbirina wan ji aliyê bikarhêner ve).",
      ],
    },

    {
      title: "7. Mafên Bikarhêner",
      paragraphs: [
        "Li gorî GDPR, bikarhêner maf heye:",
        "",
        "• gihîştina daneyan,",
        "• rastkirina daneyan,",
        "• jêbirina daneyan,",
        "• sînordarkirina pêvajokirinê,",
        "• veguhastina daneyan,",
        "• paşvekişandina pejirandinê.",
        "",
        "Şikayet dikare ji bo",
        "Latvian Data State Inspectorate",
        "were pêşkêşkirin.",
      ],
    },

    {
      title: "8. Guhertinên Polîtîkayê",
      paragraphs: [
        "Ev polîtîka dikare were nûvekirin. Guhertoya herî nû li ser malperê tê weşandin.",
      ],
    },
  ],
};
const ar: CookiesPolicyDictionary = {
  pageTitle: "سياسة استخدام ملفات تعريف الارتباط (Cookies)",

  sections: [
    {
      title: "Green Card Agency (الاتحاد الأوروبي / بولندا)",
    },

    {
      title: "1. ما هي ملفات تعريف الارتباط ولماذا تُستخدم؟",
      paragraphs: [
        "ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة يتم حفظها على جهاز المستخدم عند زيارة الموقع الإلكتروني. وهي تتيح:",
        "",
        "• ضمان التشغيل السليم للموقع الإلكتروني،",
        "• تذكر تفضيلات المستخدم (مثل اللغة)،",
        "• تحليل كيفية استخدام الموقع،",
        "• عرض إعلانات ملائمة عند الحصول على موافقة المستخدم.",
        "",
        "يخضع استخدام ملفات تعريف الارتباط لأحكام اللائحة العامة لحماية البيانات (GDPR) وتوجيه الخصوصية والاتصالات الإلكترونية (ePrivacy Directive).",
        "",
        "عند زيارة الموقع لأول مرة، يظهر للمستخدم إشعار ملفات تعريف الارتباط ويمكنه:",
        "",
        "• قبول جميع ملفات تعريف الارتباط،",
        "• رفض الملفات غير الضرورية،",
        "• تخصيص فئات ملفات تعريف الارتباط.",
        "",
        "يمكن سحب الموافقة في أي وقت من خلال «إعدادات ملفات تعريف الارتباط».",
      ],
    },

    {
      title: "2. فئات ملفات تعريف الارتباط",
    },

    {
      title: "2.1 ملفات تعريف الارتباط الضرورية (Essential)",
      paragraphs: [
        "لا تتطلب هذه الملفات موافقة المستخدم لأنها ضرورية لتشغيل الموقع الإلكتروني.",
        "",
        "أمثلة:",
      ],

      tables: [
        {
          headers: ["الاسم", "مدة التخزين", "الغرض"],
          rows: [
            [
              "cookie_consent",
              "حتى 12 شهرًا",
              "تذكر اختيار المستخدم بشأن ملفات تعريف الارتباط",
            ],
            [
              "NEXT_LOCALE / lang",
              "حتى 12 شهرًا",
              "حفظ لغة المستخدم",
            ],
            [
              "session / security",
              "مدة الجلسة / حتى 12 شهرًا",
              "الأمان وتشغيل النماذج",
            ],
          ],
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "لا يمكن تعطيل هذه الملفات دون التأثير على وظائف الموقع الأساسية.",
      ],
    },

    {
      title: "2.2 ملفات التحليل والإحصاءات (Statistics) — بموافقة المستخدم فقط",
      paragraphs: [
        "تُستخدم لتحليل سلوك المستخدمين وتحسين الموقع الإلكتروني.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "ملفات تعريف الارتباط المستخدمة:",
        "",
        "• _ga — معرف المستخدم (حتى سنتين)",
        "• _ga_* — معلومات حالة الجلسة",
        "",
        "الخصائص:",
        "",
        "• تفعيل إخفاء عنوان IP",
        "• لا تُستخدم البيانات للتعرف المباشر على المستخدم",
        "• قد يتم نقل البيانات خارج الاتحاد الأوروبي وفق البنود التعاقدية القياسية (SCC)",
        "",
        "مهم: لا يتم تحميل Google Analytics دون موافقة المستخدم.",
      ],
    },

    {
      title: "2.3 ملفات التسويق (Marketing) — بموافقة المستخدم فقط",
      paragraphs: [
        "تُستخدم للإعلانات المخصصة وقياس فعالية الحملات التسويقية.",
        "",
        "في الاتحاد الأوروبي يُوصى عادة باستخدام:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "الأغراض:",
        "",
        "• تتبع مصادر الزيارات",
        "• إعادة الاستهداف (Retargeting)",
        "• قياس التحويلات",
        "",
        "يتم تحديد مدة التخزين من قبل مزودي الخدمة (عادةً من 13 إلى 24 شهرًا).",
      ],
    },

    {
      title: "2.4 ملفات الوظائف الإضافية (Functional)",
      paragraphs: [
        "تساعد على تحسين تجربة المستخدم، مثل:",
        "",
        "• حفظ التفضيلات،",
        "• إجراء اختبارات A/B،",
        "• تخصيص الواجهة بحسب اللغة أو المنطقة.",
      ],
    },

    {
      title: "3. إدارة ملفات تعريف الارتباط",
      paragraphs: [
        "يمكن للمستخدم:",
        "",
        "• تعديل الإعدادات من خلال «إعدادات ملفات تعريف الارتباط»،",
        "• حذف ملفات تعريف الارتباط من خلال إعدادات المتصفح،",
        "• تقييد معالجة البيانات.",
        "",
        "روابط إدارة الإعلانات:",
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
        "قد يؤدي رفض ملفات تعريف الارتباط إلى تقليل بعض وظائف الموقع الإلكتروني.",
      ],
    },

    {
      title: "4. الأساس القانوني للمعالجة",
      tables: [
        {
          headers: ["الفئة", "الأساس القانوني"],
          rows: [
            [
              "الملفات الضرورية",
              "المصلحة المشروعة (ضمان تشغيل الموقع)",
            ],
            [
              "الملفات التحليلية",
              "موافقة المستخدم",
            ],
            [
              "الملفات التسويقية",
              "موافقة المستخدم",
            ],
          ],
        },
      ],

      paragraphs: [
        "يجب أن تكون الموافقة:",
        "",
        "• حرة الاختيار،",
        "• محددة بوضوح،",
        "• مبنية على معلومات كافية،",
        "• قابلة للسحب في أي وقت.",
      ],
    },

    {
      title: "5. نقل البيانات إلى أطراف ثالثة",
      paragraphs: [
        "قد يتم نقل البيانات إلى:",
        "",
        "• مزودي خدمات التحليل (Google)،",
        "• منصات الإعلان (Meta وGoogle)،",
        "• مزودي خدمات تقنية المعلومات.",
        "",
        "يتم نقل البيانات خارج الاتحاد الأوروبي وفقًا لمتطلبات اللائحة العامة لحماية البيانات (GDPR) والبنود التعاقدية القياسية (SCC).",
      ],
    },

    {
      title: "6. مدة الاحتفاظ",
      paragraphs: [
        "يتم الاحتفاظ بملفات تعريف الارتباط كما يلي:",
        "",
        "• ملفات الجلسة: حتى إغلاق المتصفح،",
        "• الملفات الدائمة: حتى 24 شهرًا أو حتى حذفها من قبل المستخدم.",
      ],
    },

    {
      title: "7. حقوق المستخدم",
      paragraphs: [
        "وفقًا للائحة العامة لحماية البيانات (GDPR)، يحق للمستخدم:",
        "",
        "• الوصول إلى بياناته الشخصية،",
        "• تصحيح البيانات،",
        "• حذف البيانات،",
        "• تقييد المعالجة،",
        "• نقل البيانات،",
        "• سحب الموافقة في أي وقت.",
        "",
        "كما يمكن تقديم شكوى إلى:",
        "هيئة حماية البيانات الحكومية في لاتفيا (Latvian Data State Inspectorate).",
      ],
    },

    {
      title: "8. التعديلات على السياسة",
      paragraphs: [
        "يجوز تحديث هذه السياسة من وقت لآخر. ويتم نشر النسخة الحالية دائمًا على الموقع الإلكتروني.",
      ],
    },
  ],
};

const uk: CookiesPolicyDictionary = {
  pageTitle: "Політика використання файлів cookie",
  sections: [
    {
      title: "Green card agency (ЄС / Польща)",
    },
    {
      title: "1. Що таке файли cookie та для чого вони використовуються",
      paragraphs: [
        "Файли cookie — це невеликі текстові файли, які зберігаються на пристрої користувача під час відвідування сайту. Вони дозволяють:",
        "",
        "• забезпечувати коректну роботу сайту,",
        "• запам’ятовувати налаштування користувача (наприклад, мову),",
        "• аналізувати використання сайту,",
        "• за наявності згоди — показувати релевантну рекламу.",
        "",
        "Використання файлів cookie регулюється GDPR та Директивою ePrivacy.",
        "",
        "Під час першого відвідування сайту користувач бачить банер і може:",
        "",
        "• прийняти всі файли cookie,",
        "• відхилити необов’язкові,",
        "• налаштувати категорії.",
        "",
        "Згоду можна відкликати в будь-який момент через розділ «Налаштування cookie».",
      ],
    },
    {
      title: "2. Категорії файлів cookie",
    },
    {
      title: "2.1 Суворо необхідні (Essential)",
      paragraphs: [
        "Ці файли cookie не потребують згоди, оскільки забезпечують функціонування сайту.",
        "",
        "Приклади:",
      ],
      tables: [
        {
          headers: ["Назва", "Строк зберігання", "Призначення"],
          rows: [
            ["cookie_consent", "до 12 місяців", "Запам’ятовує вибір користувача"],
            ["NEXT_LOCALE / lang", "до 12 місяців", "Зберігає вибрану мову"],
            ["session / security", "сесія / до 12 місяців", "Безпека та робота форм"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: ["Вимкнення неможливе без порушення роботи сайту."],
    },
    {
      title: "2.2 Аналітичні (Statistics) — лише за згодою",
      paragraphs: [
        "Використовуються для аналізу поведінки користувачів та покращення сайту.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Використовувані файли cookie:",
        "",
        "• _ga — ідентифікатор користувача (до 2 років)",
        "• _ga_* — стан сесії",
        "",
        "Особливості:",
        "",
        "• анонімізація IP-адреси увімкнена",
        "• дані не використовуються для прямої ідентифікації",
        "• можлива передача даних за межі ЄС (із застосуванням стандартних договірних положень SCC)",
        "",
        "Важливо: без згоди користувача Google Analytics не завантажується.",
      ],
    },
    {
      title: "2.3 Маркетингові (Marketing) — лише за згодою",
      paragraphs: [
        "Використовуються для персоналізованої реклами та оцінки ефективності рекламних кампаній.",
        "",
        "У ЄС рекомендується використовувати:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Призначення:",
        "",
        "• відстеження джерел трафіку",
        "• ретаргетинг",
        "• оцінка конверсій",
        "",
        "Строк зберігання визначається провайдерами (зазвичай до 13–24 місяців).",
      ],
    },
    {
      title: "2.4 Функціональні (Functional)",
      paragraphs: [
        "Дозволяють покращити користувацький досвід:",
        "",
        "• збереження налаштувань користувача,",
        "• A/B-тестування,",
        "• локалізація інтерфейсу.",
      ],
    },
    {
      title: "3. Керування файлами cookie",
      paragraphs: [
        "Користувач може:",
        "",
        "• змінити налаштування через розділ «Налаштування cookie»,",
        "• видалити файли cookie через налаштування браузера,",
        "• обмежити обробку даних.",
        "",
        "Посилання для керування рекламою:",
      ],
      links: [
        { label: "Google:", text: "https://adssettings.google.com", href: "https://adssettings.google.com" },
        { label: "Meta:", text: "https://www.facebook.com/adpreferences", href: "https://www.facebook.com/adpreferences" },
      ],
    },
    {
      title: "",
      paragraphs: ["Відмова від файлів cookie може обмежити функціональність сайту."],
    },
    {
      title: "4. Правові підстави обробки",
      tables: [
        {
          headers: ["Категорія", "Підстава"],
          rows: [
            ["Необхідні", "Законний інтерес (забезпечення роботи сайту)"],
            ["Аналітичні", "Згода користувача"],
            ["Маркетингові", "Згода користувача"],
          ],
        },
      ],
      paragraphs: [
        "Згода:",
        "",
        "• надається добровільно,",
        "• є конкретною,",
        "• є поінформованою,",
        "• може бути відкликана в будь-який момент.",
      ],
    },
    {
      title: "5. Передача даних третім особам",
      paragraphs: [
        "Дані можуть передаватися:",
        "",
        "• постачальникам аналітичних сервісів (Google),",
        "• рекламним платформам (Meta, Google),",
        "• ІТ-підрядникам.",
        "",
        "Передача за межі ЄС здійснюється з дотриманням вимог GDPR (SCC).",
      ],
    },
    {
      title: "6. Строк зберігання",
      paragraphs: [
        "Файли cookie зберігаються:",
        "",
        "• сесійні — до закриття браузера,",
        "• постійні — до 24 місяців (або до видалення користувачем).",
      ],
    },
    {
      title: "7. Права користувача",
      paragraphs: [
        "Відповідно до GDPR користувач має право:",
        "",
        "• на доступ до даних,",
        "• на виправлення даних,",
        "• на видалення даних,",
        "• на обмеження обробки,",
        "• на перенесення даних,",
        "• на відкликання згоди.",
        "",
        "Скаргу можна подати до",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Зміни до політики",
      paragraphs: ["Політика може оновлюватися. Актуальна версія публікується на сайті."],
    },
  ],
};

const he: CookiesPolicyDictionary = {
  pageTitle: "מדיניות השימוש בקובצי Cookie",
  sections: [
    {
      title: "Green Card Agency (האיחוד האירופי / פולין)",
    },
    {
      title: "1. מה הם קובצי Cookie ולשם מה הם משמשים",
      paragraphs: [
        "קובצי Cookie הם קבצי טקסט קטנים הנשמרים במכשיר המשתמש בעת ביקור באתר. הם מאפשרים:",
        "",
        "• להבטיח את פעילותו התקינה של האתר;",
        "• לזכור העדפות משתמש (למשל שפה);",
        "• לנתח את השימוש באתר;",
        "• בכפוף להסכמה – להציג פרסום רלוונטי.",
        "",
        "השימוש בקובצי Cookie מוסדר על ידי ה-GDPR ועל ידי ePrivacy Directive.",
        "",
        "בעת הביקור הראשון באתר, המשתמש רואה הודעת Cookie ויכול:",
        "",
        "• לאשר את כל קובצי ה-Cookie;",
        "• לדחות קובצי Cookie שאינם הכרחיים;",
        "• להגדיר קטגוריות באופן פרטני.",
        "",
        "ניתן לבטל את ההסכמה בכל עת באמצעות «הגדרות Cookie».",
      ],
    },
    {
      title: "2. קטגוריות של קובצי Cookie",
    },
    {
      title: "2.1 קובצי Cookie הכרחיים (Essential)",
      paragraphs: [
        "קובצי Cookie אלה אינם דורשים הסכמה, שכן הם נחוצים לתפקודו התקין של האתר.",
        "",
        "דוגמאות:",
      ],
      tables: [
        {
          headers: ["שם", "תקופת שמירה", "מטרה"],
          rows: [
            ["cookie_consent", "עד 12 חודשים", "שמירת בחירת המשתמש"],
            ["NEXT_LOCALE / lang", "עד 12 חודשים", "שמירת שפת הממשק"],
            ["session / security", "משך ההפעלה / עד 12 חודשים", "אבטחה ותפקוד טפסים"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: ["לא ניתן להשביתם מבלי לפגוע בתפקוד האתר."],
    },
    {
      title: "2.2 קובצי Cookie אנליטיים (Statistics) — בכפוף להסכמה בלבד",
      paragraphs: [
        "משמשים לניתוח התנהגות המשתמשים ולשיפור האתר.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "קובצי Cookie בשימוש:",
        "",
        "• _ga — מזהה משתמש (עד שנתיים)",
        "• _ga_* — מצב ההפעלה",
        "",
        "מאפיינים:",
        "",
        "• אנונימיזציה של כתובת IP מופעלת",
        "• הנתונים אינם משמשים לזיהוי ישיר של המשתמש",
        "• ייתכן שהנתונים יועברו מחוץ לאיחוד האירופי (בכפוף ל-Standard Contractual Clauses – SCC)",
        "",
        "חשוב: ללא הסכמת המשתמש, Google Analytics לא ייטען.",
      ],
    },
    {
      title: "2.3 קובצי Cookie שיווקיים (Marketing) — בכפוף להסכמה בלבד",
      paragraphs: [
        "משמשים להצגת פרסום מותאם אישית ולהערכת אפקטיביות של קמפיינים.",
        "",
        "באיחוד האירופי מומלץ להשתמש ב:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "מטרות:",
        "",
        "• מעקב אחר מקורות תנועה",
        "• רימרקטינג (Retargeting)",
        "• מדידת המרות",
        "",
        "תקופת השמירה נקבעת על ידי הספקים (בדרך כלל עד 13–24 חודשים).",
      ],
    },
    {
      title: "2.4 קובצי Cookie פונקציונליים (Functional)",
      paragraphs: [
        "מאפשרים לשפר את חוויית המשתמש:",
        "",
        "• שמירת העדפות;",
        "• בדיקות A/B;",
        "• התאמת הממשק לשפה ולמיקום.",
      ],
    },
    {
      title: "3. ניהול קובצי Cookie",
      paragraphs: [
        "המשתמש יכול:",
        "",
        "• לשנות את ההגדרות באמצעות «הגדרות Cookie»;",
        "• למחוק קובצי Cookie דרך הגדרות הדפדפן;",
        "• להגביל את עיבוד הנתונים.",
        "",
        "קישורים לניהול פרסום מותאם:",
      ],
      links: [
        {
          label: "Google:",
          text: "https://adssettings.google.com",
          href: "https://adssettings.google.com"
        },
        {
          label: "Meta:",
          text: "https://www.facebook.com/adpreferences",
          href: "https://www.facebook.com/adpreferences"
        },
      ],
    },
    {
      title: "",
      paragraphs: ["דחיית קובצי Cookie עשויה להגביל חלק מהפונקציות באתר."],
    },
    {
      title: "4. הבסיס המשפטי לעיבוד הנתונים",
      tables: [
        {
          headers: ["קטגוריה", "בסיס משפטי"],
          rows: [
            ["הכרחיים", "אינטרס לגיטימי (הבטחת פעילות האתר)"],
            ["אנליטיים", "הסכמת המשתמש"],
            ["שיווקיים", "הסכמת המשתמש"],
          ],
        },
      ],
      paragraphs: [
        "ההסכמה היא:",
        "",
        "• חופשית;",
        "• ספציפית;",
        "• מדעת;",
        "• ניתנת לביטול בכל עת.",
      ],
    },
    {
      title: "5. העברת נתונים לצדדים שלישיים",
      paragraphs: [
        "הנתונים עשויים להיות מועברים ל:",
        "",
        "• ספקי שירותי אנליטיקה (Google);",
        "• פלטפורמות פרסום (Meta, Google);",
        "• ספקי שירותי IT.",
        "",
        "העברת נתונים מחוץ לאיחוד האירופי מתבצעת בהתאם לדרישות ה-GDPR באמצעות SCC.",
      ],
    },
    {
      title: "6. תקופת שמירת הנתונים",
      paragraphs: [
        "קובצי Cookie נשמרים:",
        "",
        "• קובצי Session – עד לסגירת הדפדפן;",
        "• קובצי Cookie קבועים – עד 24 חודשים (או עד למחיקתם על ידי המשתמש).",
      ],
    },
    {
      title: "7. זכויות המשתמש",
      paragraphs: [
        "בהתאם ל-GDPR, למשתמש הזכות:",
        "",
        "• לקבל גישה לנתוניו;",
        "• לתקן נתונים;",
        "• למחוק נתונים;",
        "• להגביל את עיבוד הנתונים;",
        "• לנייד את הנתונים;",
        "• לבטל את הסכמתו.",
        "",
        "ניתן להגיש תלונה ל-",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. שינויים במדיניות",
      paragraphs: [
        "מדיניות זו עשויה להתעדכן מעת לעת. הגרסה העדכנית ביותר תפורסם באתר."
      ],
    },
  ],
};
const AZ: CookiesPolicyDictionary = {
  pageTitle: "Cookie fayllarından istifadə siyasəti",

  sections: [
    {
      title: "Green Card Agency (Aİ / Polşa)",
    },

    {
      title: "1. Cookie faylları nədir və nə üçün istifadə olunur",
      paragraphs: [
        "Cookie faylları istifadəçi saytı ziyarət etdikdə onun cihazında saxlanılan kiçik mətn fayllarıdır. Onlar aşağıdakılara imkan verir:",
        "",
        "• saytın düzgün işləməsini təmin etmək,",
        "• istifadəçi ayarlarını yadda saxlamaq (məsələn, dili),",
        "• saytın istifadəsini təhlil etmək,",
        "• razılıq olduqda istifadəçiyə uyğun reklam göstərmək.",
        "",
        "Cookie fayllarının istifadəsi GDPR və ePrivacy Directive ilə tənzimlənir.",
        "",
        "Sayta ilk giriş zamanı istifadəçi banner görür və aşağıdakı seçimlərə malik olur:",
        "",
        "• bütün cookie fayllarını qəbul etmək,",
        "• qeyri-zəruri cookie fayllarını rədd etmək,",
        "• kateqoriyaları fərdi qaydada tənzimləmək.",
        "",
        "Razılıq istənilən vaxt «Cookie ayarları» bölməsi vasitəsilə geri götürülə bilər.",
      ],
    },

    {
      title: "2. Cookie kateqoriyaları",
    },

    {
      title: "2.1 Məcburi (Essential)",
      paragraphs: [
        "Bu cookie faylları saytın fəaliyyətini təmin etdiyinə görə istifadəçi razılığı tələb etmir.",
        "",
        "Nümunələr:",
      ],
      tables: [
        {
          headers: ["Adı", "Saxlanma müddəti", "Təyinatı"],
          rows: [
            ["cookie_consent", "12 aya qədər", "İstifadəçinin seçimini yadda saxlayır"],
            ["NEXT_LOCALE / lang", "12 aya qədər", "Dil seçimini saxlayır"],
            ["session / security", "sessiya / 12 aya qədər", "Təhlükəsizlik və formaların işləməsi"],
          ],
        },
      ],
    },

    {
      title: "",
      paragraphs: [
        "Bu cookie fayllarını söndürmək saytın düzgün işləməsinə mane ola bilər.",
      ],
    },

    {
      title: "2.2 Analitik (Statistics) — yalnız razılıq əsasında",
      paragraphs: [
        "İstifadəçilərin davranışını təhlil etmək və saytı təkmilləşdirmək üçün istifadə olunur.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "İstifadə olunan cookie faylları:",
        "",
        "• _ga — istifadəçi identifikatoru (2 ilə qədər)",
        "• _ga_* — sessiya vəziyyəti",
        "",
        "Xüsusiyyətlər:",
        "",
        "• IP anonimləşdirilməsi aktivdir",
        "• məlumatlar birbaşa identifikasiya üçün istifadə edilmir",
        "• məlumatların Aİ hüdudlarından kənara ötürülməsi mümkündür (standart müqavilə müddəaları — SCC tətbiq edilməklə)",
        "",
        "Vacib: istifadəçinin razılığı olmadan Google Analytics yüklənmir.",
      ],
    },

    {
      title: "2.3 Marketinq (Marketing) — yalnız razılıq əsasında",
      paragraphs: [
        "Fərdiləşdirilmiş reklam və reklam kampaniyalarının effektivliyinin qiymətləndirilməsi üçün istifadə olunur.",
        "",
        "Aİ-də istifadə olunması tövsiyə edilir:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Təyinatı:",
        "",
        "• trafik mənbələrinin izlənməsi",
        "• retarqetinq",
        "• konversiyaların ölçülməsi",
        "",
        "Saxlanma müddəti xidmət təminatçıları tərəfindən müəyyən edilir (adətən 13–24 aya qədər).",
      ],
    },

    {
      title: "2.4 Funksional (Functional)",
      paragraphs: [
        "İstifadəçi təcrübəsini yaxşılaşdırmağa kömək edir:",
        "",
        "• seçimlərin yadda saxlanılması,",
        "• A/B testləri,",
        "• interfeysin lokallaşdırılması.",
      ],
    },

    {
      title: "3. Cookie fayllarının idarə olunması",
      paragraphs: [
        "İstifadəçi aşağıdakı imkanlara malikdir:",
        "",
        "• «Cookie ayarları» vasitəsilə seçimləri dəyişmək,",
        "• brauzer ayarları vasitəsilə cookie fayllarını silmək,",
        "• məlumatların emalını məhdudlaşdırmaq.",
        "",
        "Reklam ayarlarının idarə olunması üçün keçidlər:",
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
        "Cookie fayllarından imtina edilməsi saytın bəzi funksiyalarını məhdudlaşdıra bilər.",
      ],
    },

    {
      title: "4. Məlumatların emalının hüquqi əsasları",
      tables: [
        {
          headers: ["Kateqoriya", "Hüquqi əsas"],
          rows: [
            ["Məcburi", "Qanuni maraq (saytın fəaliyyətinin təmin edilməsi)"],
            ["Analitik", "İstifadəçinin razılığı"],
            ["Marketinq", "İstifadəçinin razılığı"],
          ],
        },
      ],
      paragraphs: [
        "Razılıq:",
        "",
        "• sərbəst verilir,",
        "• konkret olur,",
        "• məlumatlandırılmış şəkildə verilir,",
        "• istənilən vaxt geri götürülə bilər.",
      ],
    },

    {
      title: "5. Məlumatların üçüncü şəxslərə ötürülməsi",
      paragraphs: [
        "Məlumatlar aşağıdakılara ötürülə bilər:",
        "",
        "• analitika xidmətləri təminatçılarına (Google),",
        "• reklam platformalarına (Meta, Google),",
        "• İT podratçılarına.",
        "",
        "Aİ hüdudlarından kənara ötürülmə GDPR tələblərinə uyğun olaraq (SCC mexanizmi tətbiq edilməklə) həyata keçirilir.",
      ],
    },

    {
      title: "6. Saxlanma müddəti",
      paragraphs: [
        "Cookie faylları aşağıdakı müddətlərdə saxlanılır:",
        "",
        "• sessiya cookie faylları — brauzer bağlanana qədər,",
        "• daimi cookie faylları — 24 aya qədər (və ya istifadəçi tərəfindən silinənədək).",
      ],
    },

    {
      title: "7. İstifadəçinin hüquqları",
      paragraphs: [
        "GDPR-ə uyğun olaraq istifadəçi aşağıdakı hüquqlara malikdir:",
        "",
        "• məlumatlara çıxış əldə etmək,",
        "• məlumatların düzəldilməsini tələb etmək,",
        "• məlumatların silinməsini tələb etmək,",
        "• emalın məhdudlaşdırılmasını tələb etmək,",
        "• məlumatların daşınmasını tələb etmək,",
        "• verilmiş razılığı geri götürmək.",
        "",
        "Şikayət aşağıdakı quruma təqdim edilə bilər:",
        "Latvian Data State Inspectorate.",
      ],
    },

    {
      title: "8. Siyasətdə dəyişikliklər",
      paragraphs: [
        "Bu siyasət yenilənə bilər. Aktual versiya saytda dərc olunur.",
      ],
    },
  ],
};
const RO: CookiesPolicyDictionary = {
  pageTitle: "Politica privind utilizarea fișierelor cookie",
  sections: [
    {
      title: "Green Card Agency (UE / Polonia)",
    },
    {
      title: "1. Ce sunt fișierele cookie și pentru ce sunt utilizate",
      paragraphs: [
        "Fișierele cookie sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul utilizatorului atunci când acesta vizitează site-ul. Acestea permit:",
        "",
        "• funcționarea corectă a site-ului,",
        "• memorarea preferințelor utilizatorului (de exemplu, limba),",
        "• analizarea modului de utilizare a site-ului,",
        "• afișarea de publicitate relevantă, dacă utilizatorul și-a dat consimțământul.",
        "",
        "Utilizarea fișierelor cookie este reglementată de GDPR și de Directiva ePrivacy.",
        "",
        "La prima vizită pe site, utilizatorul vede un banner și poate:",
        "",
        "• accepta toate cookie-urile,",
        "• respinge cookie-urile neesențiale,",
        "• configura categoriile de cookie-uri.",
        "",
        "Consimțământul poate fi retras în orice moment prin intermediul opțiunii „Setări cookie”.",
      ],
    },
    {
      title: "2. Categorii de cookie-uri",
    },
    {
      title: "2.1 Strict necesare (Essential)",
      paragraphs: [
        "Aceste cookie-uri nu necesită consimțământ, deoarece sunt necesare pentru funcționarea site-ului.",
        "",
        "Exemple:",
      ],
      tables: [
        {
          headers: ["Denumire", "Perioadă de stocare", "Scop"],
          rows: [
            ["cookie_consent", "până la 12 luni", "Memorează alegerea utilizatorului"],
            ["NEXT_LOCALE / lang", "până la 12 luni", "Salvează limba selectată"],
            ["session / security", "sesiune / până la 12 luni", "Securitate și funcționarea formularelor"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: ["Dezactivarea acestora nu este posibilă fără afectarea funcționării site-ului."],
    },
    {
      title: "2.2 Analitice (Statistics) — numai cu consimțământ",
      paragraphs: [
        "Sunt utilizate pentru analizarea comportamentului utilizatorilor și îmbunătățirea site-ului.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Cookie-uri utilizate:",
        "",
        "• _ga — identificator al utilizatorului (până la 2 ani)",
        "• _ga_* — informații privind sesiunea",
        "",
        "Caracteristici:",
        "",
        "• anonimizarea adresei IP este activată",
        "• datele nu sunt utilizate pentru identificarea directă a persoanelor",
        "• este posibil transferul datelor în afara UE (cu aplicarea Clauzelor Contractuale Standard — SCC)",
        "",
        "Important: fără consimțământul utilizatorului, Google Analytics nu este încărcat.",
      ],
    },
    {
      title: "2.3 Marketing (Marketing) — numai cu consimțământ",
      paragraphs: [
        "Sunt utilizate pentru publicitate personalizată și evaluarea eficienței campaniilor.",
        "",
        "În UE se recomandă utilizarea:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Scop:",
        "",
        "• urmărirea surselor de trafic",
        "• remarketing",
        "• măsurarea conversiilor",
        "",
        "Perioada de stocare este stabilită de furnizori (de regulă între 13 și 24 de luni).",
      ],
    },
    {
      title: "2.4 Funcționale (Functional)",
      paragraphs: [
        "Permit îmbunătățirea experienței utilizatorului:",
        "",
        "• salvarea preferințelor,",
        "• testare A/B,",
        "• localizarea interfeței.",
      ],
    },
    {
      title: "3. Gestionarea cookie-urilor",
      paragraphs: [
        "Utilizatorul poate:",
        "",
        "• modifica setările prin opțiunea „Setări cookie”,",
        "• șterge cookie-urile din setările browserului,",
        "• limita prelucrarea datelor.",
        "",
        "Linkuri pentru gestionarea preferințelor de publicitate:",
      ],
      links: [
        { label: "Google:", text: "https://adssettings.google.com", href: "https://adssettings.google.com" },
        { label: "Meta:", text: "https://www.facebook.com/adpreferences", href: "https://www.facebook.com/adpreferences" },
      ],
    },
    {
      title: "",
      paragraphs: ["Refuzul utilizării cookie-urilor poate limita funcționalitatea site-ului."],
    },
    {
      title: "4. Temeiul juridic al prelucrării",
      tables: [
        {
          headers: ["Categorie", "Temei juridic"],
          rows: [
            ["Necesare", "Interes legitim (asigurarea funcționării site-ului)"],
            ["Analitice", "Consimțământul utilizatorului"],
            ["Marketing", "Consimțământul utilizatorului"],
          ],
        },
      ],
      paragraphs: [
        "Consimțământul este:",
        "",
        "• acordat în mod liber,",
        "• specific,",
        "• informat,",
        "• poate fi retras în orice moment.",
      ],
    },
    {
      title: "5. Transferul datelor către terți",
      paragraphs: [
        "Datele pot fi transmise către:",
        "",
        "• furnizori de servicii analitice (Google),",
        "• platforme de publicitate (Meta, Google),",
        "• furnizori de servicii IT.",
        "",
        "Transferul în afara UE se realizează în conformitate cu cerințele GDPR (SCC).",
      ],
    },
    {
      title: "6. Perioada de stocare",
      paragraphs: [
        "Cookie-urile sunt stocate:",
        "",
        "• cookie-uri de sesiune — până la închiderea browserului,",
        "• cookie-uri persistente — până la 24 de luni (sau până la ștergerea lor de către utilizator).",
      ],
    },
    {
      title: "7. Drepturile utilizatorului",
      paragraphs: [
        "În conformitate cu GDPR, utilizatorul are dreptul:",
        "",
        "• de acces la date,",
        "• de rectificare,",
        "• de ștergere,",
        "• de restricționare a prelucrării,",
        "• la portabilitatea datelor,",
        "• de retragere a consimțământului.",
        "",
        "O plângere poate fi depusă la",
        "Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).",
      ],
    },
    {
      title: "8. Modificări ale politicii",
      paragraphs: [
        "Această politică poate fi actualizată. Versiunea actuală este publicată pe site.",
      ],
    },
  ],
};

const SR: CookiesPolicyDictionary = {
  pageTitle: "Politika korišćenja kolačića",
  sections: [
    {
      title: "Green card agency (EU / Poljska)",
    },
    {
      title: "1. Šta su kolačići i zašto se koriste",
      paragraphs: [
        "Kolačići (cookie) su male tekstualne datoteke koje se čuvaju na uređaju korisnika prilikom posete sajtu. Oni omogućavaju:",
        "",
        "• pravilno funkcionisanje sajta,",
        "• pamćenje korisničkih podešavanja (na primer jezika),",
        "• analizu korišćenja sajta,",
        "• prikazivanje relevantnih oglasa uz prethodnu saglasnost korisnika.",
        "",
        "Korišćenje kolačića regulisano je GDPR-om i Direktivom o privatnosti i elektronskim komunikacijama (ePrivacy Directive).",
        "",
        "Prilikom prve posete sajtu korisnik vidi obaveštenje i može da:",
        "",
        "• prihvati sve kolačiće,",
        "• odbije neobavezne kolačiće,",
        "• podesi pojedinačne kategorije.",
        "",
        "Saglasnost se može povući u bilo kom trenutku putem opcije „Podešavanja kolačića“.",
      ],
    },
    {
      title: "2. Kategorije kolačića",
    },
    {
      title: "2.1 Strogo neophodni (Essential)",
      paragraphs: [
        "Ovi kolačići ne zahtevaju saglasnost jer obezbeđuju funkcionisanje sajta.",
        "",
        "Primeri:",
      ],
      tables: [
        {
          headers: ["Naziv", "Period čuvanja", "Svrha"],
          rows: [
            ["cookie_consent", "do 12 meseci", "Pamti izbor korisnika"],
            ["NEXT_LOCALE / lang", "do 12 meseci", "Čuva izabrani jezik"],
            ["session / security", "sesija / do 12 meseci", "Bezbednost i rad obrazaca"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: ["Onemogućavanje ovih kolačića nije moguće bez narušavanja funkcionalnosti sajta."],
    },
    {
      title: "2.2 Analitički (Statistics) — samo uz saglasnost",
      paragraphs: [
        "Koriste se za analizu ponašanja korisnika i unapređenje sajta.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Korišćeni kolačići:",
        "",
        "• _ga — identifikator korisnika (do 2 godine)",
        "• _ga_* — stanje sesije",
        "",
        "Karakteristike:",
        "",
        "• anonimización IP adrese je omogućena",
        "• podaci se ne koriste za direktnu identifikaciju korisnika",
        "• podaci mogu biti preneti van EU (uz primenu standardnih ugovornih klauzula — SCC)",
        "",
        "Važno: bez saglasnosti korisnika Google Analytics se ne učitava.",
      ],
    },
    {
      title: "2.3 Marketinški (Marketing) — samo uz saglasnost",
      paragraphs: [
        "Koriste se za personalizovano oglašavanje i merenje efikasnosti marketinških kampanja.",
        "",
        "U EU se preporučuje korišćenje:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Namena:",
        "",
        "• praćenje izvora saobraćaja",
        "• remarketing",
        "• merenje konverzija",
        "",
        "Period čuvanja određuju pružaoci usluga (obično do 13–24 meseca).",
      ],
    },
    {
      title: "2.4 Funkcionalni (Functional)",
      paragraphs: [
        "Omogućavaju bolje korisničko iskustvo:",
        "",
        "• čuvanje korisničkih preferencija,",
        "• A/B testiranje,",
        "• lokalizaciju interfejsa.",
      ],
    },
    {
      title: "3. Upravljanje kolačićima",
      paragraphs: [
        "Korisnik može da:",
        "",
        "• promeni podešavanja putem opcije „Podešavanja kolačića“,",
        "• obriše kolačiće kroz podešavanja pregledača,",
        "• ograniči obradu podataka.",
        "",
        "Linkovi za upravljanje oglašavanjem:",
      ],
      links: [
        { label: "Google:", text: "https://adssettings.google.com", href: "https://adssettings.google.com" },
        { label: "Meta:", text: "https://www.facebook.com/adpreferences", href: "https://www.facebook.com/adpreferences" },
      ],
    },
    {
      title: "",
      paragraphs: ["Odbijanje kolačića može ograničiti funkcionalnost sajta."],
    },
    {
      title: "4. Pravni osnov za obradu podataka",
      tables: [
        {
          headers: ["Kategorija", "Pravni osnov"],
          rows: [
            ["Neophodni", "Legitimni interes (obezbeđivanje rada sajta)"],
            ["Analitički", "Saglasnost korisnika"],
            ["Marketinški", "Saglasnost korisnika"],
          ],
        },
      ],
      paragraphs: [
        "Saglasnost je:",
        "",
        "• data dobrovoljno,",
        "• konkretna,",
        "• informisana,",
        "• može biti povučena u bilo kom trenutku.",
      ],
    },
    {
      title: "5. Prenos podataka trećim licima",
      paragraphs: [
        "Podaci mogu biti prosleđeni:",
        "",
        "• pružaocima analitičkih usluga (Google),",
        "• oglašivačkim platformama (Meta, Google),",
        "• IT izvođačima i partnerima.",
        "",
        "Prenos podataka van EU vrši se u skladu sa zahtevima GDPR-a (SCC).",
      ],
    },
    {
      title: "6. Period čuvanja",
      paragraphs: [
        "Kolačići se čuvaju:",
        "",
        "• sesijski — do zatvaranja pregledača,",
        "• trajni — do 24 meseca (ili do njihovog brisanja od strane korisnika).",
      ],
    },
    {
      title: "7. Prava korisnika",
      paragraphs: [
        "U skladu sa GDPR-om korisnik ima pravo:",
        "",
        "• na pristup podacima,",
        "• na ispravku podataka,",
        "• na brisanje podataka,",
        "• na ograničenje obrade,",
        "• na prenosivost podataka,",
        "• na povlačenje saglasnosti.",
        "",
        "Pritužba se može podneti instituciji",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Izmene politike",
      paragraphs: ["Ova politika može biti ažurirana. Važeća verzija objavljuje se na sajtu."],
    },
  ],
};

const SQ: CookiesPolicyDictionary = {
  pageTitle: "Politika e përdorimit të cookie-ve",
  sections: [
    {
      title: "Green Card Agency (BE / Poloni)",
    },
    {
      title: "1. Çfarë janë cookie-t dhe për çfarë përdoren",
      paragraphs: [
        "Cookie-t janë skedarë të vegjël tekstualë që ruhen në pajisjen e përdoruesit gjatë vizitës në faqen e internetit. Ato mundësojnë:",
        "",
        "• funksionimin korrekt të faqes së internetit,",
        "• ruajtjen e preferencave të përdoruesit (p.sh. gjuhën),",
        "• analizimin e përdorimit të faqes,",
        "• në rast se është dhënë pëlqimi — shfaqjen e reklamave relevante.",
        "",
        "Përdorimi i cookie-ve rregullohet nga GDPR dhe Direktiva e Privatësisë Elektronike (ePrivacy Directive).",
        "",
        "Gjatë vizitës së parë në faqe, përdoruesi sheh një baner dhe mund të:",
        "",
        "• pranojë të gjitha cookie-t,",
        "• refuzojë cookie-t jo të domosdoshme,",
        "• konfigurojë kategoritë.",
        "",
        "Pëlqimi mund të tërhiqet në çdo kohë përmes seksionit «Cilësimet e cookie-ve».",
      ],
    },
    {
      title: "2. Kategoritë e cookie-ve",
    },
    {
      title: "2.1 Cookie-t rreptësisht të nevojshme (Essential)",
      paragraphs: [
        "Këto cookie nuk kërkojnë pëlqim, pasi sigurojnë funksionimin e faqes së internetit.",
        "",
        "Shembuj:",
      ],
      tables: [
        {
          headers: ["Emërtimi", "Afati i ruajtjes", "Qëllimi"],
          rows: [
            ["cookie_consent", "deri në 12 muaj", "Ruajnë zgjedhjen e përdoruesit"],
            ["NEXT_LOCALE / lang", "deri në 12 muaj", "Ruajnë gjuhën"],
            ["session / security", "sesion / deri në 12 muaj", "Siguria dhe funksionimi i formularëve"],
          ],
        },
      ],
    },
    {
      title: "",
      paragraphs: ["Çaktivizimi i tyre nuk është i mundur pa ndikuar në funksionimin e faqes."],
    },
    {
      title: "2.2 Cookie-t analitike (Statistics) — vetëm me pëlqim",
      paragraphs: [
        "Përdoren për analizimin e sjelljes së përdoruesve dhe përmirësimin e faqes së internetit.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Cookie-t e përdorura:",
        "",
        "• _ga — identifikues i përdoruesit (deri në 2 vjet)",
        "• _ga_* — gjendja e sesionit",
        "",
        "Veçori:",
        "",
        "• anonimizimi i IP-së është aktivizuar",
        "• të dhënat nuk përdoren për identifikim të drejtpërdrejtë",
        "• të dhënat mund të transferohen jashtë BE-së (duke përdorur Klauzolat Standarde Kontraktuale — SCC)",
        "",
        "E rëndësishme: pa pëlqimin e përdoruesit, Google Analytics nuk ngarkohet.",
      ],
    },
    {
      title: "2.3 Cookie-t marketingu (Marketing) — vetëm me pëlqim",
      paragraphs: [
        "Përdoren për reklamim të personalizuar dhe për vlerësimin e efektivitetit të fushatave.",
        "",
        "Në BE rekomandohet përdorimi i:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Qëllimi:",
        "",
        "• gjurmimi i burimeve të trafikut",
        "• retargetimi",
        "• matja e konvertimeve",
        "",
        "Afati i ruajtjes përcaktohet nga ofruesit e shërbimeve (zakonisht deri në 13–24 muaj).",
      ],
    },
    {
      title: "2.4 Cookie-t funksionale (Functional)",
      paragraphs: [
        "Mundësojnë përmirësimin e përvojës së përdoruesit:",
        "",
        "• ruajtjen e preferencave,",
        "• testimin A/B,",
        "• lokalizimin e ndërfaqes.",
      ],
    },
    {
      title: "3. Menaxhimi i cookie-ve",
      paragraphs: [
        "Përdoruesi mund të:",
        "",
        "• ndryshojë cilësimet përmes seksionit «Cilësimet e cookie-ve»,",
        "• fshijë cookie-t përmes cilësimeve të shfletuesit,",
        "• kufizojë përpunimin e të dhënave.",
        "",
        "Lidhje për menaxhimin e reklamave:",
      ],
      links: [
        { label: "Google:", text: "https://adssettings.google.com", href: "https://adssettings.google.com" },
        { label: "Meta:", text: "https://www.facebook.com/adpreferences", href: "https://www.facebook.com/adpreferences" },
      ],
    },
    {
      title: "",
      paragraphs: ["Refuzimi i cookie-ve mund të kufizojë funksionalitetin e faqes së internetit."],
    },
    {
      title: "4. Bazat ligjore të përpunimit",
      tables: [
        {
          headers: ["Kategoria", "Baza ligjore"],
          rows: [
            ["Cookie të nevojshme", "Interes legjitim (sigurimi i funksionimit të faqes)"],
            ["Cookie analitike", "Pëlqimi i përdoruesit"],
            ["Cookie marketingu", "Pëlqimi i përdoruesit"],
          ],
        },
      ],
      paragraphs: [
        "Pëlqimi është:",
        "",
        "• dhënë lirisht,",
        "• specifik,",
        "• i informuar,",
        "• mund të tërhiqet në çdo kohë.",
      ],
    },
    {
      title: "5. Transferimi i të dhënave te palët e treta",
      paragraphs: [
        "Të dhënat mund të transferohen te:",
        "",
        "• ofruesit e shërbimeve analitike (Google),",
        "• platformat reklamuese (Meta, Google),",
        "• kontraktorët IT.",
        "",
        "Transferimi jashtë BE-së kryhet në përputhje me kërkesat e GDPR (SCC).",
      ],
    },
    {
      title: "6. Afati i ruajtjes",
      paragraphs: [
        "Cookie-t ruhen:",
        "",
        "• cookie-t e sesionit — deri në mbylljen e shfletuesit,",
        "• cookie-t e përhershme — deri në 24 muaj (ose deri në fshirjen e tyre nga përdoruesi).",
      ],
    },
    {
      title: "7. Të drejtat e përdoruesit",
      paragraphs: [
        "Në përputhje me GDPR, përdoruesi ka të drejtë:",
        "",
        "• të ketë qasje në të dhënat e tij,",
        "• të kërkojë korrigjimin e tyre,",
        "• të kërkojë fshirjen e tyre,",
        "• të kufizojë përpunimin,",
        "• të kërkojë bartjen e të dhënave,",
        "• të tërheqë pëlqimin.",
        "",
        "Ankesa mund të paraqitet pranë",
        "Latvian Data State Inspectorate.",
      ],
    },
    {
      title: "8. Ndryshimet në politikë",
      paragraphs: [
        "Kjo politikë mund të përditësohet. Versioni aktual publikohet në faqen e internetit."
      ],
    },
  ],
};

const MN: CookiesPolicyDictionary = {
  pageTitle: "Cookie файл ашиглах бодлого",

  sections: [
    {
      title: "Green Card Agency (ЕХ / Польш)",
    },

    {
      title: "1. Cookie гэж юу вэ, юунд ашиглагддаг вэ",
      paragraphs: [
        "Cookie файл нь вэбсайт зочлох үед хэрэглэгчийн төхөөрөмжид хадгалагддаг жижиг текст файл юм. Эдгээр нь дараах боломжийг олгодог:",
        "",
        "• вэбсайтын хэвийн ажиллагааг хангах,",
        "• хэрэглэгчийн тохиргоог хадгалах (жишээлбэл, хэлний сонголт),",
        "• вэбсайтын ашиглалтад дүн шинжилгээ хийх,",
        "• зөвшөөрөл өгсөн тохиолдолд холбогдох зар сурталчилгаа үзүүлэх.",
        "",
        "Cookie файлын ашиглалтыг GDPR болон ePrivacy Directive зохицуулдаг.",
        "",
        "Вэбсайтад анх удаа зочлох үед хэрэглэгч баннер харж дараах сонголтуудыг хийх боломжтой:",
        "",
        "• бүх cookie-г зөвшөөрөх,",
        "• шаардлагагүй cookie-г татгалзах,",
        "• ангилал тус бүрийг тохируулах.",
        "",
        "Зөвшөөрлөө хүссэн үедээ «Cookie тохиргоо»-гоор дамжуулан буцаан татаж болно.",
      ],
    },

    {
      title: "2. Cookie-ийн ангиллууд",
    },

    {
      title: "2.1 Зайлшгүй шаардлагатай (Essential)",
      paragraphs: [
        "Эдгээр cookie нь вэбсайтын ажиллагааг хангадаг тул хэрэглэгчийн зөвшөөрөл шаарддаггүй.",
        "",
        "Жишээ:",
      ],
      tables: [
        {
          headers: ["Нэр", "Хадгалах хугацаа", "Зориулалт"],
          rows: [
            ["cookie_consent", "12 сар хүртэл", "Хэрэглэгчийн сонголтыг хадгална"],
            ["NEXT_LOCALE / lang", "12 сар хүртэл", "Хэлийг хадгална"],
            ["session / security", "сессийн хугацаа / 12 сар хүртэл", "Аюулгүй байдал болон маягтын ажиллагаа"],
          ],
        },
      ],
    },

    {
      title: "",
      paragraphs: ["Эдгээрийг идэвхгүй болговол вэбсайт хэвийн ажиллахгүй байж болно."],
    },

    {
      title: "2.2 Аналитикийн (Statistics) — зөвхөн зөвшөөрөлтэйгээр",
      paragraphs: [
        "Хэрэглэгчийн зан төлөвийг шинжлэх болон вэбсайтыг сайжруулах зорилгоор ашиглагддаг.",
        "",
        "Google Analytics 4",
        "",
        "Google Analytics",
        "",
        "Ашиглагдах cookie:",
        "",
        "• _ga — хэрэглэгчийн таних тэмдэг (2 жил хүртэл)",
        "• _ga_* — сессийн төлөв",
        "",
        "Онцлог:",
        "",
        "• IP хаягийг нэргүйжүүлэх тохиргоо идэвхтэй",
        "• өгөгдлийг шууд танихад ашигладаггүй",
        "• өгөгдөл ЕХ-ноос гадуур дамжуулагдаж болох бөгөөд стандарт гэрээний заалт (SCC) хэрэглэнэ",
        "",
        "Чухал: хэрэглэгчийн зөвшөөрөлгүйгээр Google Analytics ачаалагдахгүй.",
      ],
    },

    {
      title: "2.3 Маркетингийн (Marketing) — зөвхөн зөвшөөрөлтэйгээр",
      paragraphs: [
        "Хувьчилсан сурталчилгаа үзүүлэх болон кампанит ажлын үр нөлөөг үнэлэхэд ашиглагдана.",
        "",
        "ЕХ-д дараах үйлчилгээг ашиглахыг зөвлөдөг:",
        "",
        "• Google Ads",
        "• Meta Pixel",
        "",
        "Зориулалт:",
        "",
        "• урсгалын эх үүсвэрийг хянах",
        "• ретаргетинг хийх",
        "• хөрвөлтийн үзүүлэлтийг хэмжих",
        "",
        "Хадгалах хугацааг үйлчилгээ үзүүлэгчид тогтоодог (ихэвчлэн 13–24 сар хүртэл).",
      ],
    },

    {
      title: "2.4 Функциональ (Functional)",
      paragraphs: [
        "Хэрэглэгчийн туршлагыг сайжруулахад ашиглагдана:",
        "",
        "• тохиргоо хадгалах,",
        "• A/B тест хийх,",
        "• интерфэйсийг нутагшуулах.",
      ],
    },

    {
      title: "3. Cookie удирдах",
      paragraphs: [
        "Хэрэглэгч дараах боломжтой:",
        "",
        "• «Cookie тохиргоо»-гоор дамжуулан тохиргоогоо өөрчлөх,",
        "• хөтчийн тохиргоогоор cookie устгах,",
        "• өгөгдөл боловсруулахыг хязгаарлах.",
        "",
        "Сурталчилгааны тохиргоог удирдах холбоосууд:",
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
      paragraphs: ["Cookie ашиглахаас татгалзвал вэбсайтын зарим функц хязгаарлагдаж болзошгүй."],
    },

    {
      title: "4. Өгөгдөл боловсруулах эрх зүйн үндэслэл",
      tables: [
        {
          headers: ["Ангилал", "Үндэслэл"],
          rows: [
            ["Зайлшгүй шаардлагатай", "Хууль ёсны ашиг сонирхол (вэбсайтын ажиллагааг хангах)"],
            ["Аналитикийн", "Хэрэглэгчийн зөвшөөрөл"],
            ["Маркетингийн", "Хэрэглэгчийн зөвшөөрөл"],
          ],
        },
      ],
      paragraphs: [
        "Зөвшөөрөл нь:",
        "",
        "• сайн дурын үндсэн дээр өгөгдсөн,",
        "• тодорхой,",
        "• мэдээлэлтэйгээр өгөгдсөн,",
        "• хүссэн үедээ цуцлагдах боломжтой байна.",
      ],
    },

    {
      title: "5. Өгөгдлийг гуравдагч этгээдэд дамжуулах",
      paragraphs: [
        "Өгөгдөл дараах этгээдэд дамжуулагдаж болно:",
        "",
        "• аналитикийн үйлчилгээ үзүүлэгчид (Google),",
        "• зар сурталчилгааны платформууд (Meta, Google),",
        "• мэдээллийн технологийн гэрээт гүйцэтгэгчид.",
        "",
        "ЕХ-ноос гадуур дамжуулалт нь GDPR-ийн шаардлагын дагуу (SCC ашиглан) хийгддэг.",
      ],
    },

    {
      title: "6. Хадгалах хугацаа",
      paragraphs: [
        "Cookie файлууд дараах хугацаагаар хадгалагдана:",
        "",
        "• сессийн cookie — хөтөч хаагдах хүртэл,",
        "• байнгын cookie — 24 сар хүртэл (эсвэл хэрэглэгч устгах хүртэл).",
      ],
    },

    {
      title: "7. Хэрэглэгчийн эрх",
      paragraphs: [
        "GDPR-ийн дагуу хэрэглэгч дараах эрхтэй:",
        "",
        "• өгөгдөлдөө хандах,",
        "• засвар оруулах,",
        "• устгуулах,",
        "• боловсруулалтыг хязгаарлуулах,",
        "• өгөгдөл шилжүүлэх,",
        "• зөвшөөрлөө буцаан татах.",
        "",
        "Гомдлыг",
        "Latvian Data State Inspectorate-д гаргаж болно.",
      ],
    },

    {
      title: "8. Бодлогод оруулах өөрчлөлт",
      paragraphs: [
        "Энэхүү бодлогыг шинэчилж болно. Хамгийн сүүлийн хувилбарыг вэбсайтад нийтэлнэ.",
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
  ckb,
  kmr,
  ar,
  uk,
  az: AZ,
  he,
  ro: RO,
  sr: SR,
  sq: SQ,
  mn: MN,
};

export function getCookiesPolicyDictionary(lang: Lang): CookiesPolicyDictionary {
  return dictionaries[lang];
}