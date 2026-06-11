import type { Lang } from "@/app/dictionaries/header";

export interface AboutDictionary {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  cards: Array<{ title: string; text: string }>;
  company: {
    title: string;
    lines: string[];
    note: string;
  };
  contact: {
    title: string;
    desc: string;
  };
}

const RU: AboutDictionary = {
  seo: {
    title: "О нас — SINEDIS",
    description:
      "Информация о страховом агенте, правовой основе деятельности, страховой компании и порядке подачи жалоб.",
  },

  hero: {
    title:
      "Страховой агент SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "Работаем в соответствии с законодательством о страховом посредничестве и предоставляем клиентам обязательную информацию до заключения договора страхования.",
  },

  cards: [
    {
      title: "Кто мы и чем полезны",
      text:
        "Помогаем оформить страхование для международных перевозок и поездок, консультируем по условиям страхования и требованиям для въезда в различные страны.",
    },
    {
      title: "Правовая основа деятельности",
      text:
        "Работаем как зарегистрированный страховой агент в Польше и раскрываем обязательную информацию в соответствии с законодательством о дистрибуции страхования.",
    },
    {
      title: "Прозрачные условия",
      text:
        "До оформления обсуждаем территорию действия, срок страхования, ограничения, исключения и порядок урегулирования убытков.",
    },
    {
      title: "Процесс оформления",
      text:
        "Получение данных → проверка информации → согласование условий → оплата → выпуск полиса и передача документов клиенту.",
    },
  ],

  company: {
    title: "Информация о страховом посреднике SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "В соответствии со статьёй 22 Закона Польши от 15 декабря 2017 года о дистрибуции страхования предоставляем следующую информацию:",

      "",
      "Данные страхового агента",
      "Компания: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Адрес агента: 01-473 Варшава, ul. Dobrzańskiego Hubala 22D",
      "Номер в реестре страховых агентов: 11257162/A",
      "NIP: 5242953841",

      "",
      "Реестр страховых агентов ведётся Комиссией финансового надзора Польши (KNF).",
      "Проверить регистрацию можно на сайте KNF, выбрав тип субъекта «Agent» и указав номер регистрации либо название агентства.",

      "",
      "Область деятельности",
      "SINEDIS SP. Z O.O. осуществляет агентскую деятельность по дистрибуции страхования в рамках Раздела II «Иные личные и имущественные виды страхования» согласно приложению к закону о страховой и перестраховочной деятельности.",

      "",
      "Страховая компания",
      "Агент действует от имени:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Адрес: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Горячая линия и телефон для уведомления об убытках: +48 502 308 308 (стоимость звонка зависит от тарифа оператора).",

      "",
      "Полномочия агента",
      "Полномочия агента подтверждаются отдельным документом.",
      "Объём полномочий можно проверить также через реестр KNF, выбрав агента и раздел «Pełnomocnictwa».",

      "",
      "Вознаграждение агента",
      "В связи с заключением договора страхования агент получает комиссионное вознаграждение, включённое в страховую премию.",
      "Агент также может получать иные финансовые либо нефинансовые преимущества, связанные с деятельностью по дистрибуции страхования и участием в программах, предназначенных для страховых агентов.",

      "",
      "Информация о капитальных связях",
      "Агент не владеет акциями либо долями TUiR „WARTA” S.A., дающими не менее 10% голосов.",
      "TUiR „WARTA” S.A. также не владеет долями либо акциями SINEDIS SP. Z O.O., дающими не менее 10% голосов.",

      "",
      "Жалобы, связанные со страховой защитой",
      "Жалобы, касающиеся страховой защиты, могут быть направлены в WARTA следующими способами:",

      "",
      "1. В письменной форме на бумажном носителе:",
      "по адресу: skrytka pocztowa 1020, 00-950 Warszawa либо лично в любом подразделении WARTA, обслуживающем клиентов.",

      "",
      "2. В электронной форме:",
      "на электронный адрес доставки AE:PL-12869-16149-GHRES-21 либо через форму на сайте www.warta.pl/reklamacje.",

      "",
      "3. Устно:",
      "по телефону +48 502 308 308 либо под протокол в подразделениях WARTA.",

      "",
      "Срок рассмотрения жалобы",
      "WARTA рассматривает жалобу в течение 30 дней с момента получения и предоставляет ответ письменно либо в электронной форме — в зависимости от способа подачи жалобы.",
      "В особо сложных случаях срок может быть продлён до 60 дней, о чём заявитель уведомляется заранее.",

      "",
      "Жалобы, не связанные со страховой защитой",
      "Если претензия не касается непосредственно страховой защиты, клиент может обратиться напрямую к агенту:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Адрес агента: 01-473 Варшава, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Если вам требуется страхование или дополнительная информация, свяжитесь с нами — мы уточним условия страхования, перечень документов и дальнейший порядок оформления.",
  },

  contact: {
    title: "Свяжитесь с нами",
    desc:
      "Ответим на вопросы по страхованию, условиям оформления и необходимым документам.",
  },
};

const PL: AboutDictionary = {
  seo: {
    title: "O nas — SINEDIS",
    description:
      "Informacje o agencie ubezpieczeniowym, podstawach prawnych działalności, zakładzie ubezpieczeń oraz procedurze składania reklamacji.",
  },

  hero: {
    title:
      "Agent ubezpieczeniowy SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "Działamy zgodnie z przepisami dotyczącymi dystrybucji ubezpieczeń i przekazujemy klientom wymagane informacje przed zawarciem umowy ubezpieczenia.",
  },

  cards: [
    {
      title: "Kim jesteśmy i jak pomagamy",
      text:
        "Pomagamy w zawarciu ubezpieczeń dla transportu międzynarodowego oraz podróży zagranicznych, doradzamy w zakresie warunków ubezpieczenia i wymagań dotyczących wjazdu do różnych krajów.",
    },
    {
      title: "Podstawa prawna działalności",
      text:
        "Działamy jako zarejestrowany agent ubezpieczeniowy w Polsce i przekazujemy wymagane informacje zgodnie z przepisami dotyczącymi dystrybucji ubezpieczeń.",
    },
    {
      title: "Przejrzyste warunki",
      text:
        "Przed zawarciem umowy omawiamy zakres terytorialny ochrony, okres ubezpieczenia, ograniczenia, wyłączenia odpowiedzialności oraz procedurę likwidacji szkód.",
    },
    {
      title: "Proces zawarcia umowy",
      text:
        "Przekazanie danych → weryfikacja informacji → uzgodnienie warunków → opłacenie składki → wystawienie polisy i przekazanie dokumentów klientowi.",
    },
  ],

  company: {
    title:
      "Informacje o pośredniku ubezpieczeniowym SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "Zgodnie z art. 22 ustawy z dnia 15 grudnia 2017 r. o dystrybucji ubezpieczeń przekazujemy następujące informacje:",

      "",
      "Dane agenta ubezpieczeniowego",
      "Firma: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Adres agenta: 01-473 Warszawa, ul. Dobrzańskiego Hubala 22D",
      "Numer wpisu do rejestru agentów ubezpieczeniowych: 11257162/A",
      "NIP: 5242953841",

      "",
      "Rejestr agentów ubezpieczeniowych prowadzony jest przez Komisję Nadzoru Finansowego (KNF).",
      "Weryfikacji wpisu można dokonać na stronie internetowej KNF, wybierając typ podmiotu „Agent” oraz podając numer wpisu lub nazwę agencji.",

      "",
      "Zakres działalności",
      "SINEDIS SP. Z O.O. prowadzi działalność agencyjną w zakresie dystrybucji ubezpieczeń w Dziale II „Pozostałe ubezpieczenia osobowe oraz ubezpieczenia majątkowe”, zgodnie z załącznikiem do ustawy o działalności ubezpieczeniowej i reasekuracyjnej.",

      "",
      "Zakład ubezpieczeń",
      "Agent działa w imieniu:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Adres: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Infolinia oraz numer do zgłaszania szkód: +48 502 308 308 (koszt połączenia zgodny z taryfą operatora).",

      "",
      "Pełnomocnictwo agenta",
      "Umocowanie agenta potwierdzone jest odrębnym dokumentem.",
      "Zakres pełnomocnictwa można również sprawdzić w rejestrze KNF po wybraniu agenta oraz sekcji „Pełnomocnictwa”.",

      "",
      "Wynagrodzenie agenta",
      "W związku z zawarciem umowy ubezpieczenia agent otrzymuje wynagrodzenie prowizyjne uwzględnione w składce ubezpieczeniowej.",
      "Agent może również otrzymywać inne korzyści finansowe lub niefinansowe związane z wykonywaniem czynności dystrybucyjnych oraz uczestnictwem w programach przeznaczonych dla agentów ubezpieczeniowych.",

      "",
      "Informacja o powiązaniach kapitałowych",
      "Agent nie posiada akcji ani udziałów TUiR „WARTA” S.A., dających co najmniej 10% głosów.",
      "TUiR „WARTA” S.A. również nie posiada udziałów ani akcji SINEDIS SP. Z O.O., dających co najmniej 10% głosów.",

      "",
      "Reklamacje dotyczące ochrony ubezpieczeniowej",
      "Reklamacje dotyczące ochrony ubezpieczeniowej mogą być składane do WARTA w następujący sposób:",

      "",
      "1. W formie pisemnej:",
      "na adres: skrytka pocztowa 1020, 00-950 Warszawa lub osobiście w każdej placówce WARTA obsługującej klientów.",

      "",
      "2. W formie elektronicznej:",
      "na adres do doręczeń elektronicznych AE:PL-12869-16149-GHRES-21 lub za pośrednictwem formularza dostępnego na stronie www.warta.pl/reklamacje.",

      "",
      "3. Ustnie:",
      "telefonicznie pod numerem +48 502 308 308 lub do protokołu w placówkach WARTA.",

      "",
      "Termin rozpatrzenia reklamacji",
      "WARTA rozpatruje reklamację w terminie 30 dni od dnia jej otrzymania i udziela odpowiedzi w formie pisemnej lub elektronicznej — zgodnie ze sposobem złożenia reklamacji.",
      "W szczególnie skomplikowanych przypadkach termin ten może zostać przedłużony do 60 dni, o czym osoba składająca reklamację zostanie wcześniej poinformowana.",

      "",
      "Reklamacje niezwiązane z ochroną ubezpieczeniową",
      "Jeżeli reklamacja nie dotyczy bezpośrednio ochrony ubezpieczeniowej, klient może skontaktować się bezpośrednio z agentem:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Adres agenta: 01-473 Warszawa, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Jeżeli potrzebują Państwo ubezpieczenia lub dodatkowych informacji, prosimy o kontakt — wyjaśnimy warunki ubezpieczenia, wymagane dokumenty oraz dalszy proces zawarcia umowy.",
  },

  contact: {
    title: "Skontaktuj się z nami",
    desc:
      "Odpowiemy na pytania dotyczące ubezpieczenia, warunków zawarcia umowy oraz wymaganych dokumentów.",
  },
};

const EN: AboutDictionary = {
  seo: {
    title: "About Us — SINEDIS",
    description:
      "Information about the insurance agent, legal basis of operations, insurance undertaking, and complaints handling procedure.",
  },

  hero: {
    title:
      "Insurance Agent SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "We operate in accordance with insurance distribution regulations and provide clients with all mandatory pre-contractual information prior to concluding an insurance agreement.",
  },

  cards: [
    {
      title: "Who We Are and How We Can Help",
      text:
        "We assist clients with arranging insurance for international transport and travel, and provide guidance on insurance terms and entry requirements applicable in different countries.",
    },
    {
      title: "Legal Basis of Operations",
      text:
        "We operate as a registered insurance agent in Poland and disclose mandatory information in accordance with insurance distribution legislation.",
    },
    {
      title: "Transparent Terms",
      text:
        "Before policy issuance, we discuss the territorial scope, insurance period, limitations, exclusions, and claims handling procedures.",
    },
    {
      title: "Issuance Process",
      text:
        "Data collection → information verification → agreement of terms → payment → policy issuance and delivery of documents to the client.",
    },
  ],

  company: {
    title:
      "Information about the Insurance Intermediary SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "Pursuant to Article 22 of the Polish Act of 15 December 2017 on Insurance Distribution, we provide the following information:",

      "",
      "Insurance Agent Details",
      "Company name: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Registered address: ul. Dobrzańskiego Hubala 22D, 01-473 Warsaw, Poland",
      "Insurance Agent Register Number: 11257162/A",
      "Tax Identification Number (NIP): 5242953841",

      "",
      "The register of insurance agents is maintained by the Polish Financial Supervision Authority (KNF).",
      "Registration can be verified on the KNF website by selecting the entity type “Agent” and entering either the registration number or the agency name.",

      "",
      "Scope of Activity",
      "SINEDIS SP. Z O.O. conducts insurance distribution activities within Section II “Other Personal and Property Insurance Classes” in accordance with the appendix to the Act on Insurance and Reinsurance Activity.",

      "",
      "Insurance Undertaking",
      "The agent acts on behalf of:",
      "Towarzystwo Ubezpieczeń i Reasekuracji “WARTA” S.A.",
      "Address: rondo Ignacego Daszyńskiego 1, 00-843 Warsaw, Poland",
      "Claims notification hotline: +48 502 308 308 (call charges depend on the operator’s tariff).",

      "",
      "Authority of the Agent",
      "The agent’s authority is confirmed by a separate power of attorney document.",
      "The scope of authority may also be verified through the KNF register by selecting the agent and the “Pełnomocnictwa” section.",

      "",
      "Agent Remuneration",
      "In connection with the conclusion of an insurance agreement, the agent receives commission-based remuneration included in the insurance premium.",
      "The agent may also receive other financial or non-financial benefits related to insurance distribution activities and participation in programmes intended for insurance agents.",

      "",
      "Information on Capital Links",
      "The agent does not hold shares or stocks in TUiR “WARTA” S.A. representing at least 10% of voting rights.",
      "Likewise, TUiR “WARTA” S.A. does not hold shares or stocks in SINEDIS SP. Z O.O. representing at least 10% of voting rights.",

      "",
      "Complaints Related to Insurance Coverage",
      "Complaints concerning insurance coverage may be submitted to WARTA using the following methods:",

      "",
      "1. In writing on paper:",
      "by mail to: skrytka pocztowa 1020, 00-950 Warsaw, Poland, or in person at any WARTA customer service office.",

      "",
      "2. In electronic form:",
      "to the electronic delivery address AE:PL-12869-16149-GHRES-21 or via the form available at www.warta.pl/reklamacje.",

      "",
      "3. Orally:",
      "by telephone at +48 502 308 308 or verbally for the record at WARTA offices.",

      "",
      "Complaint Handling Period",
      "WARTA reviews complaints within 30 days from the date of receipt and provides a response in writing or electronically, depending on the method used to submit the complaint.",
      "In particularly complex cases, the deadline may be extended to 60 days, of which the complainant will be informed in advance.",

      "",
      "Complaints Not Related to Insurance Coverage",
      "If a complaint does not directly concern insurance coverage, the client may contact the agent directly:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Registered address: ul. Dobrzańskiego Hubala 22D, 01-473 Warsaw, Poland",
    ],

    note:
      "If you require insurance coverage or additional information, please contact us — we will clarify the insurance terms, required documentation, and further steps of the application process.",
  },

  contact: {
    title: "Contact Us",
    desc:
      "We will answer your questions regarding insurance coverage, application terms, and required documentation.",
  },
};

const BE: AboutDictionary = {
  seo: {
    title: "Пра нас — SINEDIS",
    description:
      "Інфармацыя аб страхавым агенце, прававых асновах дзейнасці, страхавой кампаніі і парадку падачы скаргаў.",
  },

  hero: {
    title:
      "Страхавы агент SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "Працуюем у адпаведнасці з заканадаўствам аб страхавым пасярэдніцтве і прадастаўляем кліентам абавязковую інфармацыю да заключэння дагавора страхавання.",
  },

  cards: [
    {
      title: "Хто мы і чым можам быць карысныя",
      text:
        "Дапамагаем аформіць страхаванне для міжнародных перавозак і паездак, кансультуем па ўмовах страхавання і патрабаваннях для ўезду ў розныя краіны.",
    },
    {
      title: "Прававая аснова дзейнасці",
      text:
        "Працуюць як зарэгістраваны страхавы агент у Польшчы і раскрываем абавязковую інфармацыю ў адпаведнасці з заканадаўствам аб дыстрыбуцыі страхавання.",
    },
    {
      title: "Празрыстыя ўмовы",
      text:
        "Да афармлення абмяркоўваем тэрыторыю дзеяння, тэрмін страхавання, абмежаванні, выключэнні і парадак урэгулявання страхавых выпадкаў.",
    },
    {
      title: "Працэс афармлення",
      text:
        "Атрыманне даных → праверка інфармацыі → узгадненне ўмоў → аплата → выпуск поліса і перадача дакументаў кліенту.",
    },
  ],

  company: {
    title:
      "Інфармацыя аб страхавым пасярэдніку SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "У адпаведнасці з артыкулам 22 Закона Польшчы ад 15 снежня 2017 года аб дыстрыбуцыі страхавання прадастаўляем наступную інфармацыю:",

      "",
      "Даныя страхавога агента",
      "Кампанія: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Адрас агента: 01-473 Варшава, ul. Dobrzańskiego Hubala 22D",
      "Нумар у рэестры страхавых агентаў: 11257162/A",
      "NIP: 5242953841",

      "",
      "Рэестр страхавых агентаў вядзецца Камісіяй фінансавага нагляду Польшчы (KNF).",
      "Праверыць рэгістрацыю можна на сайце KNF, выбраўшы тып суб’екта «Agent» і ўказаўшы нумар рэгістрацыі або назву агенцтва.",

      "",
      "Сфера дзейнасці",
      "SINEDIS SP. Z O.O. ажыццяўляе агентскую дзейнасць па дыстрыбуцыі страхавання ў рамках Раздзела II «Іншыя асабістыя і маёмасныя віды страхавання» згодна з дадаткам да закона аб страхавой і перастрахавальнай дзейнасці.",

      "",
      "Страхавая кампанія",
      "Агент дзейнічае ад імя:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Адрас: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Гарачая лінія і тэлефон для паведамлення аб страхавых выпадках: +48 502 308 308 (кошт званка залежыць ад тарыфу аператара).",

      "",
      "Паўнамоцтвы агента",
      "Паўнамоцтвы агента пацвярджаюцца асобным дакументам.",
      "Аб’ём паўнамоцтваў можна таксама праверыць праз рэестр KNF, выбраўшы агента і раздзел «Pełnomocnictwa».",

      "",
      "Узнагароджанне агента",
      "У сувязі з заключэннем дагавора страхавання агент атрымлівае камісійнае ўзнагароджанне, уключанае ў страхавую прэмію.",
      "Агент таксама можа атрымліваць іншыя фінансавыя або нефінансавыя выгоды, звязаныя з дзейнасцю па дыстрыбуцыі страхавання і ўдзелам у праграмах, прызначаных для страхавых агентаў.",

      "",
      "Інфармацыя аб капітальных сувязях",
      "Агент не валодае акцыямі або долямі TUiR „WARTA” S.A., якія даюць не менш за 10% галасоў.",
      "TUiR „WARTA” S.A. таксама не валодае долямі або акцыямі SINEDIS SP. Z O.O., якія даюць не менш за 10% галасоў.",

      "",
      "Скаргі, звязаныя са страхавой абаронай",
      "Скаргі, якія датычацца страхавой абароны, могуць быць накіраваны ў WARTA наступнымі спосабамі:",

      "",
      "1. У пісьмовай форме на папяровым носьбіце:",
      "па адрасе: skrytka pocztowa 1020, 00-950 Warszawa або асабіста ў любым падраздзяленні WARTA, якое абслугоўвае кліентаў.",

      "",
      "2. У электроннай форме:",
      "на электронны адрас дастаўкі AE:PL-12869-16149-GHRES-21 або праз форму на сайце www.warta.pl/reklamacje.",

      "",
      "3. Вусна:",
      "па тэлефоне +48 502 308 308 або пад пратакол у падраздзяленнях WARTA.",

      "",
      "Тэрмін разгляду скаргі",
      "WARTA разглядае скаргу на працягу 30 дзён з моманту атрымання і прадастаўляе адказ у пісьмовай або электроннай форме — у залежнасці ад спосабу падачы скаргі.",
      "У асабліва складаных выпадках тэрмін можа быць прадоўжаны да 60 дзён, пра што заяўнік паведамляецца загадзя.",

      "",
      "Скаргі, не звязаныя са страхавой абаронай",
      "Калі прэтэнзія не датычыцца непасрэдна страхавой абароны, кліент можа звярнуцца непасрэдна да агента:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Адрас агента: 01-473 Варшава, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Калі вам патрабуецца страхаванне або дадатковая інфармацыя, звяжыцеся з намі — мы ўдакладнім умовы страхавання, пералік дакументаў і далейшы парадак афармлення.",
  },

  contact: {
    title: "Звяжыцеся з намі",
    desc:
      "Адкажам на пытанні па страхаванні, умовах афармлення і неабходных дакументах.",
  },
};

const UZ: AboutDictionary = {
  seo: {
    title: "Biz haqimizda — SINEDIS",
    description:
      "Sug‘urta agenti, faoliyatning huquqiy asoslari, sug‘urta kompaniyasi va shikoyat yuborish tartibi haqida ma’lumot.",
  },

  hero: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ sug‘urta agenti",
    subtitle:
      "Sug‘urta vositachiligi to‘g‘risidagi qonunchilikka muvofiq faoliyat yuritamiz hamda sug‘urta shartnomasi tuzilishidan oldin mijozlarga majburiy ma’lumotlarni taqdim etamiz.",
  },

  cards: [
    {
      title: "Biz kimmiz va qanday yordam beramiz",
      text:
        "Xalqaro yuk tashuvlari va safarlar uchun sug‘urtani rasmiylashtirishda yordam beramiz, sug‘urta shartlari hamda turli davlatlarga kirish talablari bo‘yicha maslahat beramiz.",
    },
    {
      title: "Faoliyatning huquqiy asosi",
      text:
        "Polshada ro‘yxatdan o‘tgan sug‘urta agenti sifatida faoliyat yuritamiz va sug‘urta distribyutsiyasi to‘g‘risidagi qonunchilikka muvofiq majburiy ma’lumotlarni oshkor qilamiz.",
    },
    {
      title: "Shaffof shartlar",
      text:
        "Rasmiylashtirishdan oldin amal qilish hududi, sug‘urta muddati, cheklovlar, istisnolar va zararlarni tartibga solish tartibini muhokama qilamiz.",
    },
    {
      title: "Rasmiylashtirish jarayoni",
      text:
        "Ma’lumotlarni olish → ma’lumotlarni tekshirish → shartlarni kelishish → to‘lov → polisni rasmiylashtirish va hujjatlarni mijozga topshirish.",
    },
  ],

  company: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ sug‘urta vositachisi haqida ma’lumot",

    lines: [
      "Polshaning 2017-yil 15-dekabrdagi Sug‘urta distribyutsiyasi to‘g‘risidagi qonunining 22-moddasiga muvofiq quyidagi ma’lumotlarni taqdim etamiz:",

      "",
      "Sug‘urta agenti ma’lumotlari",
      "Kompaniya: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Agent manzili: 01-473 Varshava, ul. Dobrzańskiego Hubala 22D",
      "Sug‘urta agentlari reyestridagi raqam: 11257162/A",
      "NIP: 5242953841",

      "",
      "Sug‘urta agentlari reyestri Polsha Moliyaviy nazorat komissiyasi (KNF) tomonidan yuritiladi.",
      "Ro‘yxatdan o‘tganligini KNF saytida subyekt turi sifatida «Agent»ni tanlab hamda ro‘yxat raqami yoki agentlik nomini kiritib tekshirish mumkin.",

      "",
      "Faoliyat sohasi",
      "SINEDIS SP. Z O.O. sug‘urta va qayta sug‘urta faoliyati to‘g‘risidagi qonunga ilovaga muvofiq II-bo‘lim «Boshqa shaxsiy va mulkiy sug‘urta turlari» doirasida sug‘urta distribyutsiyasi bo‘yicha agentlik faoliyatini amalga oshiradi.",

      "",
      "Sug‘urta kompaniyasi",
      "Agent quyidagi kompaniya nomidan faoliyat yuritadi:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Manzil: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Call-markaz va zararlar haqida xabar berish telefoni: +48 502 308 308 (qo‘ng‘iroq narxi operator tarifiga bog‘liq).",

      "",
      "Agent vakolatlari",
      "Agent vakolatlari alohida hujjat bilan tasdiqlanadi.",
      "Vakolatlar hajmini KNF reyestrida agentni va «Pełnomocnictwa» bo‘limini tanlash orqali ham tekshirish mumkin.",

      "",
      "Agentning mukofoti",
      "Sug‘urta shartnomasi tuzilishi munosabati bilan agent sug‘urta mukofotiga kiritilgan komission mukofot oladi.",
      "Agent sug‘urta distribyutsiyasi faoliyati hamda sug‘urta agentlari uchun mo‘ljallangan dasturlarda ishtirok etish bilan bog‘liq boshqa moliyaviy yoki nomoliyaviy manfaatlarni ham olishi mumkin.",

      "",
      "Kapital aloqalari haqida ma’lumot",
      "Agent TUiR „WARTA” S.A. kompaniyasining kamida 10% ovoz berish huquqini beruvchi aksiyalari yoki ulushlariga ega emas.",
      "TUiR „WARTA” S.A. ham SINEDIS SP. Z O.O. kompaniyasining kamida 10% ovoz berish huquqini beruvchi ulushlari yoki aksiyalariga ega emas.",

      "",
      "Sug‘urta himoyasi bilan bog‘liq shikoyatlar",
      "Sug‘urta himoyasiga oid shikoyatlar WARTA kompaniyasiga quyidagi usullarda yuborilishi mumkin:",

      "",
      "1. Qog‘oz shaklida yozma ravishda:",
      "manzil bo‘yicha: skrytka pocztowa 1020, 00-950 Warszawa yoki mijozlarga xizmat ko‘rsatuvchi istalgan WARTA bo‘limiga shaxsan topshirish orqali.",

      "",
      "2. Elektron shaklda:",
      "AE:PL-12869-16149-GHRES-21 elektron yetkazib berish manziliga yoki www.warta.pl/reklamacje saytidagi forma orqali.",

      "",
      "3. Og‘zaki shaklda:",
      "+48 502 308 308 telefoni orqali yoki WARTA bo‘limlarida bayonnoma asosida.",

      "",
      "Shikoyatni ko‘rib chiqish muddati",
      "WARTA shikoyatni qabul qilingan kundan boshlab 30 kun ichida ko‘rib chiqadi va javobni yozma yoki elektron shaklda — shikoyat yuborilgan usulga qarab taqdim etadi.",
      "Alohida murakkab hollarda muddat 60 kungacha uzaytirilishi mumkin, bu haqda murojaat qiluvchi oldindan xabardor qilinadi.",

      "",
      "Sug‘urta himoyasi bilan bog‘liq bo‘lmagan shikoyatlar",
      "Agar e’tiroz bevosita sug‘urta himoyasiga taalluqli bo‘lmasa, mijoz to‘g‘ridan-to‘g‘ri agentga murojaat qilishi mumkin:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Agent manzili: 01-473 Varshava, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Agar sizga sug‘urta yoki qo‘shimcha ma’lumot kerak bo‘lsa, biz bilan bog‘laning — sug‘urta shartlari, hujjatlar ro‘yxati va keyingi rasmiylashtirish tartibini aniqlashtirib beramiz.",
  },

  contact: {
    title: "Biz bilan bog‘laning",
    desc:
      "Sug‘urta, rasmiylashtirish shartlari va zarur hujjatlar bo‘yicha savollaringizga javob beramiz.",
  },
};

const KA: AboutDictionary = {
  seo: {
    title: "ჩვენ შესახებ — SINEDIS",
    description:
      "ინფორმაცია სადაზღვევო აგენტის, საქმიანობის სამართლებრივი საფუძვლის, სადაზღვევო კომპანიისა და საჩივრების წარდგენის წესის შესახებ.",
  },

  hero: {
    title:
      "სადაზღვევო აგენტი SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "ვმუშაობთ სადაზღვევო შუამავლობის შესახებ კანონმდებლობის შესაბამისად და დაზღვევის ხელშეკრულების გაფორმებამდე კლიენტებს ვაწვდით სავალდებულო ინფორმაციას.",
  },

  cards: [
    {
      title: "ვინ ვართ და როგორ შეგვიძლია დახმარება",
      text:
        "ვახორციელებთ საერთაშორისო გადაზიდვებისა და მოგზაურობებისთვის დაზღვევის ორგანიზებას, ვუწევთ კონსულტაციას დაზღვევის პირობებისა და სხვადასხვა ქვეყანაში შესვლის მოთხოვნების შესახებ.",
    },
    {
      title: "საქმიანობის სამართლებრივი საფუძველი",
      text:
        "ვმოქმედებთ როგორც პოლონეთში რეგისტრირებული სადაზღვევო აგენტი და ვასაჯაროებთ სავალდებულო ინფორმაციას დაზღვევის დისტრიბუციის შესახებ კანონმდებლობის შესაბამისად.",
    },
    {
      title: "გამჭვირვალე პირობები",
      text:
        "ხელშეკრულების გაფორმებამდე განვიხილავთ მოქმედების ტერიტორიას, დაზღვევის ვადას, შეზღუდვებს, გამონაკლისებსა და ზარალის დარეგულირების პროცედურას.",
    },
    {
      title: "გაფორმების პროცესი",
      text:
        "მონაცემების მიღება → ინფორმაციის გადამოწმება → პირობების შეთანხმება → გადახდა → პოლისის გაცემა და დოკუმენტების კლიენტისთვის გადაცემა.",
    },
  ],

  company: {
    title:
      "ინფორმაცია სადაზღვევო შუამავალ SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ-ის შესახებ",

    lines: [
      "პოლონეთის 2017 წლის 15 დეკემბრის „დაზღვევის დისტრიბუციის შესახებ“ კანონის 22-ე მუხლის შესაბამისად, წარმოგიდგენთ შემდეგ ინფორმაციას:",

      "",
      "სადაზღვევო აგენტის მონაცემები",
      "კომპანია: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "აგენტის მისამართი: 01-473 ვარშავა, ul. Dobrzańskiego Hubala 22D",
      "სადაზღვევო აგენტების რეესტრის ნომერი: 11257162/A",
      "NIP: 5242953841",

      "",
      "სადაზღვევო აგენტების რეესტრს აწარმოებს პოლონეთის ფინანსური ზედამხედველობის კომისია (KNF).",
      "რეგისტრაციის გადამოწმება შესაძლებელია KNF-ის ვებგვერდზე, სუბიექტის ტიპად „Agent“-ის არჩევით და რეგისტრაციის ნომრის ან სააგენტოს სახელწოდების მითითებით.",

      "",
      "საქმიანობის სფერო",
      "SINEDIS SP. Z O.O. ახორციელებს სადაზღვევო დისტრიბუციის სააგენტო საქმიანობას II განყოფილების — „პირადი და ქონებრივი დაზღვევის სხვა სახეები“ — ფარგლებში, დაზღვევისა და გადაზღვევის საქმიანობის შესახებ კანონის დანართის შესაბამისად.",

      "",
      "სადაზღვევო კომპანია",
      "აგენტი მოქმედებს შემდეგი კომპანიის სახელით:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "მისამართი: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "ცხელი ხაზი და ზარალის შეტყობინების ტელეფონი: +48 502 308 308 (ზარის ღირებულება დამოკიდებულია ოპერატორის ტარიფზე).",

      "",
      "აგენტის უფლებამოსილება",
      "აგენტის უფლებამოსილება დადასტურებულია ცალკე დოკუმენტით.",
      "უფლებამოსილების მოცულობის გადამოწმება ასევე შესაძლებელია KNF-ის რეესტრში აგენტის და განყოფილების „Pełnomocnictwa“ არჩევით.",

      "",
      "აგენტის ანაზღაურება",
      "დაზღვევის ხელშეკრულების გაფორმებასთან დაკავშირებით აგენტი იღებს საკომისიო ანაზღაურებას, რომელიც შედის სადაზღვევო პრემიის შემადგენლობაში.",
      "აგენტი ასევე შეიძლება იღებდეს სხვა ფინანსურ ან არაფინანსურ სარგებელს, რომელიც დაკავშირებულია სადაზღვევო დისტრიბუციის საქმიანობასთან და სადაზღვევო აგენტებისთვის განკუთვნილ პროგრამებში მონაწილეობასთან.",

      "",
      "ინფორმაცია კაპიტალურ კავშირებზე",
      "აგენტი არ ფლობს TUiR „WARTA” S.A.-ის აქციებს ან წილებს, რომლებიც ხმების არანაკლებ 10%-ს იძლევა.",
      "TUiR „WARTA” S.A. ასევე არ ფლობს SINEDIS SP. Z O.O.-ის აქციებს ან წილებს, რომლებიც ხმების არანაკლებ 10%-ს იძლევა.",

      "",
      "საჩივრები, რომლებიც დაკავშირებულია სადაზღვევო დაცვასთან",
      "სადაზღვევო დაცვასთან დაკავშირებული საჩივრების გაგზავნა WARTA-ში შესაძლებელია შემდეგი გზებით:",

      "",
      "1. წერილობით, ქაღალდის მატარებელზე:",
      "მისამართზე: skrytka pocztowa 1020, 00-950 Warszawa ან პირადად WARTA-ს ნებისმიერ კლიენტთა მომსახურების განყოფილებაში.",

      "",
      "2. ელექტრონული ფორმით:",
      "ელექტრონული მიწოდების მისამართზე AE:PL-12869-16149-GHRES-21 ან ფორმის მეშვეობით ვებგვერდზე www.warta.pl/reklamacje.",

      "",
      "3. ზეპირად:",
      "ტელეფონით +48 502 308 308 ან WARTA-ს განყოფილებებში ოქმის შედგენით.",

      "",
      "საჩივრის განხილვის ვადა",
      "WARTA საჩივარს განიხილავს მიღებიდან 30 დღის განმავლობაში და პასუხს გასცემს წერილობით ან ელექტრონული ფორმით — საჩივრის წარდგენის ფორმის შესაბამისად.",
      "განსაკუთრებით რთულ შემთხვევებში ვადა შეიძლება გაგრძელდეს 60 დღემდე, რის შესახებაც განმცხადებელი წინასწარ მიიღებს შეტყობინებას.",

      "",
      "საჩივრები, რომლებიც არ უკავშირდება სადაზღვევო დაცვას",
      "თუ პრეტენზია უშუალოდ არ ეხება სადაზღვევო დაცვას, კლიენტს შეუძლია პირდაპირ მიმართოს აგენტს:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "აგენტის მისამართი: 01-473 ვარშავა, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "თუ გჭირდებათ დაზღვევა ან დამატებითი ინფორმაცია, დაგვიკავშირდით — დაგიზუსტებთ დაზღვევის პირობებს, საჭირო დოკუმენტების ჩამონათვალსა და გაფორმების შემდგომ პროცედურას.",
  },

  contact: {
    title: "დაგვიკავშირდით",
    desc:
      "გიპასუხებთ კითხვებზე დაზღვევის, გაფორმების პირობებისა და საჭირო დოკუმენტების შესახებ.",
  },
};

const KK: AboutDictionary = {
  seo: {
    title: "Біз туралы — SINEDIS",
    description:
      "Сақтандыру агенті, қызметтің құқықтық негіздері, сақтандыру компаниясы және шағым беру тәртібі туралы ақпарат.",
  },

  hero: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ сақтандыру агенті",
    subtitle:
      "Сақтандыру делдалдығы туралы заңнамаға сәйкес жұмыс істейміз және сақтандыру шартын жасасқанға дейін клиенттерге міндетті ақпаратты ұсынамыз.",
  },

  cards: [
    {
      title: "Біз кімбіз және қандай көмек көрсетеміз",
      text:
        "Халықаралық тасымалдар мен сапарларға арналған сақтандыруды рәсімдеуге көмектесеміз, сақтандыру талаптары және әртүрлі елдерге кіру шарттары бойынша кеңес береміз.",
    },
    {
      title: "Қызметтің құқықтық негіздері",
      text:
        "Польшада тіркелген сақтандыру агенті ретінде жұмыс істейміз және сақтандыру дистрибуциясы туралы заңнамаға сәйкес міндетті ақпаратты ашып көрсетеміз.",
    },
    {
      title: "Ашық және түсінікті шарттар",
      text:
        "Рәсімдеуге дейін сақтандыру аумағын, қолданылу мерзімін, шектеулерді, ерекшеліктерді және залалды реттеу тәртібін талқылаймыз.",
    },
    {
      title: "Рәсімдеу процесі",
      text:
        "Деректерді алу → ақпаратты тексеру → шарттарды келісу → төлем жасау → полисті шығару және құжаттарды клиентке тапсыру.",
    },
  ],

  company: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ сақтандыру делдалы туралы ақпарат",

    lines: [
      "Польшаның 2017 жылғы 15 желтоқсандағы «Сақтандыру дистрибуциясы туралы» Заңының 22-бабына сәйкес келесі ақпаратты ұсынамыз:",

      "",
      "Сақтандыру агенті туралы мәліметтер",
      "Компания: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Агенттің мекенжайы: 01-473 Варшава, ul. Dobrzańskiego Hubala 22D",
      "Сақтандыру агенттері тізіліміндегі нөмірі: 11257162/A",
      "NIP: 5242953841",

      "",
      "Сақтандыру агенттерінің тізілімін Польша Қаржылық қадағалау комиссиясы (KNF) жүргізеді.",
      "Тіркеуді KNF сайтында субъект түрі ретінде «Agent» таңдап, тіркеу нөмірін немесе агенттік атауын көрсету арқылы тексеруге болады.",

      "",
      "Қызмет саласы",
      "SINEDIS SP. Z O.O. сақтандыру және қайта сақтандыру қызметі туралы заңға қосымшаға сәйкес II бөлім «Өзге жеке және мүліктік сақтандыру түрлері» шеңберінде сақтандыру дистрибуциясы бойынша агенттік қызметті жүзеге асырады.",

      "",
      "Сақтандыру компаниясы",
      "Агент келесі компанияның атынан әрекет етеді:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Мекенжайы: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Залал туралы хабарлау және байланыс орталығының телефоны: +48 502 308 308 (қоңырау құны оператор тарифіне байланысты).",

      "",
      "Агенттің өкілеттіктері",
      "Агенттің өкілеттіктері жеке құжатпен расталады.",
      "Өкілеттік көлемін KNF тізілімінен агентті және «Pełnomocnictwa» бөлімін таңдау арқылы да тексеруге болады.",

      "",
      "Агенттің сыйақысы",
      "Сақтандыру шартын жасасуға байланысты агент сақтандыру сыйлықақысына енгізілген комиссиялық сыйақы алады.",
      "Сондай-ақ агент сақтандыру дистрибуциясы қызметіне және сақтандыру агенттеріне арналған бағдарламаларға қатысуына байланысты өзге қаржылық немесе қаржылық емес артықшылықтар алуы мүмкін.",

      "",
      "Капиталдық байланыстар туралы ақпарат",
      "Агент TUiR „WARTA” S.A. компаниясының кемінде 10% дауыс беруге құқық беретін акцияларына немесе үлестеріне иелік етпейді.",
      "Сол сияқты TUiR „WARTA” S.A. да SINEDIS SP. Z O.O. компаниясының кемінде 10% дауыс беруге құқық беретін акцияларына немесе үлестеріне иелік етпейді.",

      "",
      "Сақтандыру қорғауына қатысты шағымдар",
      "Сақтандыру қорғауына қатысты шағымдарды WARTA компаниясына келесі тәсілдермен жолдауға болады:",

      "",
      "1. Қағаз түріндегі жазбаша нысанда:",
      "мекенжай бойынша: skrytka pocztowa 1020, 00-950 Warszawa немесе клиенттерге қызмет көрсететін WARTA бөлімшелерінің кез келгеніне жеке тапсыру арқылы.",

      "",
      "2. Электрондық нысанда:",
      "AE:PL-12869-16149-GHRES-21 электрондық жеткізу мекенжайына немесе www.warta.pl/reklamacje сайтындағы форма арқылы.",

      "",
      "3. Ауызша түрде:",
      "+48 502 308 308 телефоны арқылы немесе WARTA бөлімшелерінде хаттама жасау арқылы.",

      "",
      "Шағымды қарау мерзімі",
      "WARTA шағымды алған күннен бастап 30 күн ішінде қарайды және жауапты жазбаша немесе электрондық түрде — шағым беру тәсіліне байланысты ұсынады.",
      "Ерекше күрделі жағдайларда мерзім 60 күнге дейін ұзартылуы мүмкін, бұл туралы өтініш беруші алдын ала хабардар етіледі.",

      "",
      "Сақтандыру қорғауына қатысы жоқ шағымдар",
      "Егер шағым сақтандыру қорғауына тікелей қатысты болмаса, клиент агентке тікелей жүгіне алады:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Агенттің мекенжайы: 01-473 Варшава, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Егер сізге сақтандыру немесе қосымша ақпарат қажет болса, бізбен хабарласыңыз — сақтандыру шарттарын, қажетті құжаттар тізімін және рәсімдеудің келесі кезеңдерін нақтылап береміз.",
  },

  contact: {
    title: "Бізбен байланысыңыз",
    desc:
      "Сақтандыру, рәсімдеу шарттары және қажетті құжаттар бойынша сұрақтарға жауап береміз.",
  },
};

const TR: AboutDictionary = {
  seo: {
    title: "Hakkımızda — SINEDIS",
    description:
      "Sigorta acentesi, faaliyetlerin hukuki dayanağı, sigorta şirketi ve şikâyet başvuru prosedürü hakkında bilgiler.",
  },

  hero: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ Sigorta Acentesi",
    subtitle:
      "Sigorta aracılığı mevzuatına uygun şekilde faaliyet göstermekte ve sigorta sözleşmesi kurulmadan önce müşterilere gerekli bilgileri sunmaktayız.",
  },

  cards: [
    {
      title: "Biz Kimiz ve Nasıl Yardımcı Oluyoruz",
      text:
        "Uluslararası taşımacılık ve seyahatler için sigorta düzenlenmesine yardımcı oluyor, sigorta şartları ve farklı ülkelere giriş gereklilikleri konusunda danışmanlık sağlıyoruz.",
    },
    {
      title: "Faaliyetlerin Hukuki Dayanağı",
      text:
        "Polonya’da kayıtlı bir sigorta acentesi olarak faaliyet göstermekte ve sigorta dağıtım mevzuatına uygun şekilde zorunlu bilgileri açıklamaktayız.",
    },
    {
      title: "Şeffaf Şartlar",
      text:
        "Sigorta düzenlenmeden önce teminat bölgesi, sigorta süresi, sınırlamalar, istisnalar ve hasar süreçleri hakkında bilgi verilmektedir.",
    },
    {
      title: "Düzenleme Süreci",
      text:
        "Bilgilerin alınması → verilerin kontrolü → şartların onaylanması → ödeme → poliçenin düzenlenmesi ve belgelerin müşteriye teslim edilmesi.",
    },
  ],

  company: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ Sigorta Aracısı Hakkında Bilgi",

    lines: [
      "15 Aralık 2017 tarihli Polonya Sigorta Dağıtımı Kanunu’nun 22. maddesi uyarınca aşağıdaki bilgileri sunmaktayız:",

      "",
      "Sigorta Acentesine İlişkin Bilgiler",
      "Şirket: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Acentenin adresi: 01-473 Varşova, ul. Dobrzańskiego Hubala 22D",
      "Sigorta acenteleri sicil numarası: 11257162/A",
      "NIP: 5242953841",

      "",
      "Sigorta acenteleri sicili, Polonya Finansal Denetim Kurumu (KNF) tarafından tutulmaktadır.",
      "Kayıt durumu, KNF internet sitesinde “Agent” kuruluş türü seçilerek ve kayıt numarası veya acente adı girilerek doğrulanabilir.",

      "",
      "Faaliyet Alanı",
      "SINEDIS SP. Z O.O., sigorta ve reasürans faaliyetlerine ilişkin kanunun ekinde yer alan II. Bölüm “Diğer şahıs ve mal sigortaları” kapsamında sigorta dağıtım acenteliği faaliyetinde bulunmaktadır.",

      "",
      "Sigorta Şirketi",
      "Acente aşağıdaki şirket adına hareket etmektedir:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Adres: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Hasar ihbar hattı ve çağrı merkezi: +48 502 308 308 (arama ücreti operatör tarifesine bağlıdır).",

      "",
      "Acentenin Yetkileri",
      "Acentenin yetkileri ayrı bir belge ile teyit edilmektedir.",
      "Yetki kapsamı ayrıca KNF sicilinde, ilgili acente ve “Pełnomocnictwa” bölümü seçilerek kontrol edilebilir.",

      "",
      "Acentenin Ücretlendirilmesi",
      "Sigorta sözleşmesinin kurulmasıyla bağlantılı olarak acente, sigorta primine dahil edilen komisyon almaktadır.",
      "Acente ayrıca sigorta dağıtım faaliyetleri ve sigorta acentelerine yönelik programlara katılım kapsamında başka mali veya mali olmayan menfaatler de elde edebilir.",

      "",
      "Sermaye Bağlantılarına İlişkin Bilgi",
      "Acente, TUiR „WARTA” S.A. şirketinde oy haklarının en az %10’unu sağlayan hisse veya paylara sahip değildir.",
      "TUiR „WARTA” S.A. da SINEDIS SP. Z O.O. şirketinde oy haklarının en az %10’unu sağlayan hisse veya paylara sahip değildir.",

      "",
      "Sigorta Teminatı ile İlgili Şikâyetler",
      "Sigorta teminatına ilişkin şikâyetler aşağıdaki yöntemlerle WARTA’ya iletilebilir:",

      "",
      "1. Yazılı olarak, fiziki ortamda:",
      "Adres: skrytka pocztowa 1020, 00-950 Warszawa veya müşteri hizmeti veren herhangi bir WARTA şubesine şahsen teslim edilerek.",

      "",
      "2. Elektronik ortamda:",
      "AE:PL-12869-16149-GHRES-21 elektronik teslimat adresine veya www.warta.pl/reklamacje internet sitesindeki form aracılığıyla.",

      "",
      "3. Sözlü olarak:",
      "+48 502 308 308 numaralı telefon üzerinden veya WARTA şubelerinde tutanak altına alınmak suretiyle.",

      "",
      "Şikâyetin İncelenme Süresi",
      "WARTA, şikâyeti alındığı tarihten itibaren 30 gün içinde değerlendirir ve başvurunun iletilme şekline bağlı olarak yazılı veya elektronik ortamda cevap verir.",
      "Özellikle karmaşık durumlarda bu süre 60 güne kadar uzatılabilir ve başvuru sahibi önceden bilgilendirilir.",

      "",
      "Sigorta Teminatı ile İlgili Olmayan Şikâyetler",
      "Şikâyet doğrudan sigorta teminatı ile ilgili değilse, müşteri doğrudan acenteye başvurabilir:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Acentenin adresi: 01-473 Varşova, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Sigorta yaptırmak veya ek bilgi almak isterseniz bizimle iletişime geçin — sigorta şartlarını, gerekli belgeleri ve sonraki işlem sürecini açıklayalım.",
  },

  contact: {
    title: "Bizimle İletişime Geçin",
    desc:
      "Sigorta, düzenleme koşulları ve gerekli belgeler hakkındaki sorularınızı yanıtlayacağız.",
  },
};

const FA: AboutDictionary = {
  seo: {
    title: "درباره ما — SINEDIS",
    description:
      "اطلاعات مربوط به نماینده بیمه، مبانی حقوقی فعالیت، شرکت بیمه و نحوه ثبت و رسیدگی به شکایات.",
  },

  hero: {
    title:
      "نماینده بیمه SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "ما مطابق با قوانین مربوط به توزیع بیمه فعالیت می‌کنیم و پیش از انعقاد قرارداد بیمه، اطلاعات الزامی را در اختیار مشتریان قرار می‌دهیم.",
  },

  cards: [
    {
      title: "ما که هستیم و چگونه کمک می‌کنیم",
      text:
        "در اخذ بیمه برای حمل‌ونقل بین‌المللی و سفرهای خارجی کمک می‌کنیم و درباره شرایط بیمه و الزامات ورود به کشورهای مختلف مشاوره ارائه می‌دهیم.",
    },
    {
      title: "مبنای حقوقی فعالیت",
      text:
        "ما به‌عنوان نماینده رسمی بیمه در لهستان فعالیت می‌کنیم و اطلاعات الزامی را مطابق با قوانین توزیع بیمه افشا می‌کنیم.",
    },
    {
      title: "شرایط شفاف",
      text:
        "پیش از صدور بیمه‌نامه، محدوده جغرافیایی پوشش، مدت اعتبار بیمه، محدودیت‌ها، استثنائات و روند رسیدگی به خسارت را بررسی و توضیح می‌دهیم.",
    },
    {
      title: "فرآیند صدور بیمه‌نامه",
      text:
        "دریافت اطلاعات ← بررسی داده‌ها ← توافق بر شرایط ← پرداخت ← صدور بیمه‌نامه و تحویل مدارک به مشتری.",
    },
  ],

  company: {
    title:
      "اطلاعات مربوط به واسطه بیمه SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "مطابق ماده ۲۲ قانون لهستان مورخ ۱۵ دسامبر ۲۰۱۷ درباره توزیع بیمه، اطلاعات زیر ارائه می‌شود:",

      "",
      "اطلاعات نماینده بیمه",
      "شرکت: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "نشانی نماینده: 01-473 Warsaw, ul. Dobrzańskiego Hubala 22D",
      "شماره ثبت در فهرست نمایندگان بیمه: 11257162/A",
      "NIP: 5242953841",

      "",
      "فهرست نمایندگان بیمه توسط کمیسیون نظارت مالی لهستان (KNF) نگهداری می‌شود.",
      "ثبت شرکت را می‌توان از طریق وب‌سایت KNF با انتخاب نوع نهاد «Agent» و وارد کردن شماره ثبت یا نام شرکت بررسی کرد.",

      "",
      "حوزه فعالیت",
      "شرکت SINEDIS SP. Z O.O. در چارچوب بخش II «سایر انواع بیمه‌های اشخاص و اموال» مطابق پیوست قانون فعالیت‌های بیمه و بیمه اتکایی، خدمات توزیع بیمه ارائه می‌دهد.",

      "",
      "شرکت بیمه",
      "نماینده از طرف شرکت زیر فعالیت می‌کند:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "نشانی: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "شماره تماس و خط ویژه اعلام خسارت: +48 502 308 308 (هزینه تماس مطابق تعرفه اپراتور محاسبه می‌شود).",

      "",
      "اختیارات نماینده",
      "اختیارات نماینده با سند جداگانه تأیید شده است.",
      "دامنه اختیارات همچنین از طریق فهرست KNF و بخش «Pełnomocnictwa» قابل بررسی است.",

      "",
      "حق‌الزحمه نماینده",
      "نماینده در ارتباط با انعقاد قرارداد بیمه، کمیسیون دریافت می‌کند که در حق بیمه لحاظ شده است.",
      "نماینده همچنین ممکن است مزایای مالی یا غیرمالی دیگری مرتبط با فعالیت توزیع بیمه و مشارکت در برنامه‌های ویژه نمایندگان بیمه دریافت کند.",

      "",
      "اطلاعات مربوط به وابستگی سرمایه‌ای",
      "نماینده مالک سهام یا سهم‌الشرکه در TUiR „WARTA” S.A. که حداقل ۱۰٪ حق رأی ایجاد کند، نیست.",
      "همچنین TUiR „WARTA” S.A. مالک سهام یا سهم‌الشرکه در SINEDIS SP. Z O.O. که حداقل ۱۰٪ حق رأی ایجاد کند، نیست.",

      "",
      "شکایات مرتبط با پوشش بیمه‌ای",
      "شکایات مربوط به پوشش بیمه‌ای را می‌توان از روش‌های زیر به WARTA ارسال کرد:",

      "",
      "1. به‌صورت کتبی روی نسخه کاغذی:",
      "به نشانی: skrytka pocztowa 1020, 00-950 Warszawa یا حضوری در هر یک از شعب WARTA که به مشتریان خدمات ارائه می‌دهند.",

      "",
      "2. به‌صورت الکترونیکی:",
      "از طریق نشانی الکترونیکی AE:PL-12869-16149-GHRES-21 یا فرم موجود در وب‌سایت www.warta.pl/reklamacje.",

      "",
      "3. به‌صورت شفاهی:",
      "از طریق شماره +48 502 308 308 یا ثبت صورتجلسه در شعب WARTA.",

      "",
      "مهلت رسیدگی به شکایت",
      "WARTA شکایت را ظرف مدت ۳۰ روز از تاریخ دریافت بررسی کرده و پاسخ را به‌صورت کتبی یا الکترونیکی، متناسب با روش ثبت شکایت، ارائه می‌کند.",
      "در موارد پیچیده، این مهلت ممکن است تا ۶۰ روز تمدید شود که در این صورت، متقاضی پیشاپیش مطلع خواهد شد.",

      "",
      "شکایات غیرمرتبط با پوشش بیمه‌ای",
      "در صورتی که شکایت مستقیماً مربوط به پوشش بیمه‌ای نباشد، مشتری می‌تواند مستقیماً با نماینده تماس بگیرد:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "نشانی نماینده: 01-473 Warsaw, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "در صورتی که به بیمه یا اطلاعات تکمیلی نیاز دارید، با ما تماس بگیرید — شرایط بیمه، فهرست مدارک موردنیاز و مراحل بعدی صدور بیمه‌نامه را توضیح خواهیم داد.",
  },

  contact: {
    title: "تماس با ما",
    desc:
      "به سؤالات شما درباره بیمه، شرایط صدور و مدارک موردنیاز پاسخ خواهیم داد.",
  },
};

const HY: AboutDictionary = {
  seo: {
    title: "Մեր մասին — SINEDIS",
    description:
      "Տեղեկատվություն ապահովագրական գործակալի, գործունեության իրավական հիմքերի, ապահովագրական ընկերության և բողոքների ներկայացման կարգի վերաբերյալ։",
  },

  hero: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ ապահովագրական գործակալ",
    subtitle:
      "Գործում ենք ապահովագրական միջնորդության մասին օրենսդրությանը համապատասխան և մինչև ապահովագրության պայմանագրի կնքումը հաճախորդներին տրամադրում ենք պարտադիր տեղեկատվություն։",
  },

  cards: [
    {
      title: "Ով ենք մենք և ինչով ենք օգտակար",
      text:
        "Օգնում ենք ձևակերպել ապահովագրություն միջազգային փոխադրումների և ուղևորությունների համար, տրամադրում ենք խորհրդատվություն ապահովագրության պայմանների և տարբեր երկրներ մուտքի պահանջների վերաբերյալ։",
    },
    {
      title: "Գործունեության իրավական հիմքը",
      text:
        "Գործում ենք որպես Լեհաստանում գրանցված ապահովագրական գործակալ և բացահայտում ենք պարտադիր տեղեկատվությունը՝ ապահովագրության բաշխման մասին օրենսդրությանը համապատասխան։",
    },
    {
      title: "Թափանցիկ պայմաններ",
      text:
        "Մինչ ձևակերպումը քննարկում ենք ապահովագրության տարածքային գործողությունը, ժամկետը, սահմանափակումները, բացառությունները և վնասների կարգավորման ընթացակարգը։",
    },
    {
      title: "Ձևակերպման գործընթացը",
      text:
        "Տվյալների ստացում → տեղեկատվության ստուգում → պայմանների համաձայնեցում → վճարում → ապահովագրական պոլիսի թողարկում և փաստաթղթերի փոխանցում հաճախորդին։",
    },
  ],

  company: {
    title:
      "Տեղեկատվություն SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ ապահովագրական միջնորդի վերաբերյալ",

    lines: [
      "Լեհաստանի 2017 թվականի դեկտեմբերի 15-ի «Ապահովագրության բաշխման մասին» օրենքի 22-րդ հոդվածի համաձայն տրամադրում ենք հետևյալ տեղեկատվությունը․",

      "",
      "Ապահովագրական գործակալի տվյալներ",
      "Ընկերություն՝ SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Գործակալի հասցե՝ 01-473 Վարշավա, ul. Dobrzańskiego Hubala 22D",
      "Ապահովագրական գործակալների ռեեստրում համարը՝ 11257162/A",
      "NIP՝ 5242953841",

      "",
      "Ապահովագրական գործակալների ռեեստրը վարում է Լեհաստանի Ֆինանսական վերահսկողության հանձնաժողովը (KNF)։",
      "Գրանցումը կարելի է ստուգել KNF-ի կայքում՝ ընտրելով «Agent» սուբյեկտի տեսակը և նշելով գրանցման համարը կամ գործակալության անվանումը։",

      "",
      "Գործունեության ոլորտը",
      "SINEDIS SP. Z O.O.-ն իրականացնում է ապահովագրական բաշխման գործակալական գործունեություն II բաժնի՝ «Այլ անձնական և գույքային ապահովագրության տեսակներ» շրջանակում՝ ապահովագրական և վերաապահովագրական գործունեության մասին օրենքի հավելվածի համաձայն։",

      "",
      "Ապահովագրական ընկերություն",
      "Գործակալը գործում է հետևյալ ընկերության անունից․",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Հասցե՝ rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Թեժ գիծ և վնասների մասին ծանուցման հեռախոսահամար՝ +48 502 308 308 (զանգի արժեքը կախված է օպերատորի սակագնից)։",

      "",
      "Գործակալի լիազորությունները",
      "Գործակալի լիազորությունները հաստատվում են առանձին փաստաթղթով։",
      "Լիազորությունների ծավալը կարելի է ստուգել նաև KNF-ի ռեեստրում՝ ընտրելով գործակալին և «Pełnomocnictwa» բաժինը։",

      "",
      "Գործակալի վարձատրությունը",
      "Ապահովագրության պայմանագրի կնքման հետ կապված գործակալը ստանում է միջնորդավճար, որը ներառված է ապահովագրական պրեմիայի մեջ։",
      "Գործակալը կարող է ստանալ նաև այլ ֆինանսական կամ ոչ ֆինանսական առավելություններ՝ կապված ապահովագրության բաշխման գործունեության և ապահովագրական գործակալների համար նախատեսված ծրագրերին մասնակցության հետ։",

      "",
      "Տեղեկատվություն կապիտալային կապերի մասին",
      "Գործակալը չի տիրապետում TUiR „WARTA” S.A.-ի բաժնետոմսերի կամ բաժնեմասերի, որոնք ապահովում են առնվազն 10% ձայնի իրավունք։",
      "TUiR „WARTA” S.A.-ն նույնպես չի տիրապետում SINEDIS SP. Z O.O.-ի բաժնեմասերի կամ բաժնետոմսերի, որոնք ապահովում են առնվազն 10% ձայնի իրավունք։",

      "",
      "Բողոքներ՝ կապված ապահովագրական պաշտպանության հետ",
      "Ապահովագրական պաշտպանության վերաբերյալ բողոքները կարող են ներկայացվել WARTA-ին հետևյալ եղանակներով․",

      "",
      "1. Գրավոր՝ թղթային տարբերակով․",
      "հասցեով՝ skrytka pocztowa 1020, 00-950 Warszawa կամ անձամբ WARTA-ի հաճախորդների սպասարկման ցանկացած մասնաճյուղում։",

      "",
      "2. Էլեկտրոնային ձևով․",
      "AE:PL-12869-16149-GHRES-21 էլեկտրոնային առաքման հասցեով կամ www.warta.pl/reklamacje կայքի ձևի միջոցով։",

      "",
      "3. Բանավոր․",
      "հեռախոսով՝ +48 502 308 308 կամ արձանագրությամբ WARTA-ի մասնաճյուղերում։",

      "",
      "Բողոքի քննության ժամկետը",
      "WARTA-ն բողոքը քննում է ստացման պահից 30 օրվա ընթացքում և պատասխանը տրամադրում է գրավոր կամ էլեկտրոնային ձևով՝ կախված բողոքի ներկայացման եղանակից։",
      "Առանձնապես բարդ դեպքերում ժամկետը կարող է երկարաձգվել մինչև 60 օր, որի մասին դիմողը նախապես ծանուցվում է։",

      "",
      "Բողոքներ, որոնք կապված չեն ապահովագրական պաշտպանության հետ",
      "Եթե պահանջը անմիջականորեն կապված չէ ապահովագրական պաշտպանության հետ, հաճախորդը կարող է անմիջապես դիմել գործակալին․",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Գործակալի հասցե՝ 01-473 Վարշավա, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Եթե ձեզ անհրաժեշտ է ապահովագրություն կամ լրացուցիչ տեղեկատվություն, կապ հաստատեք մեզ հետ — մենք կհստակեցնենք ապահովագրության պայմանները, անհրաժեշտ փաստաթղթերի ցանկը և ձևակերպման հետագա ընթացակարգը։",
  },

  contact: {
    title: "Կապվեք մեզ հետ",
    desc:
      "Կպատասխանենք ապահովագրության, ձևակերպման պայմանների և անհրաժեշտ փաստաթղթերի վերաբերյալ հարցերին։",
  },
};
  
const CKB: AboutDictionary = {
  seo: {
    title: "دەربارەی ئێمە — SINEDIS",
    description:
      "زانیاری دەربارەی وەکیلی بیمە، بنەمای یاسایی چالاکی، کۆمپانیای بیمە و شێوازی پێشکەشکردنی سکاڵا.",
  },

  hero: {
    title:
      "وەکیلی بیمە SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "لەگەڵ یاساکانی ناوەندایەتی بیمەدا کار دەکەین و پێش بەستنی گرێبەستی بیمە هەموو زانیارییە پێویستەکان بە کڕیار پێشکەش دەکەین.",
  },

  cards: [
    {
      title: "کێین و چۆن سوودبەخشین",
      text:
        "یارمەتیدەدەین بۆ وەرگرتنی بیمەی گواستنەوە نێودەوڵەتییەکان و گەشتەکان، هەروەها ڕاوێژکاری سەبارەت بە مەرجەکانی بیمە و داواکارییەکانی چوونە ناو وڵاتە جیاوازەکان پێشکەش دەکەین.",
    },
    {
      title: "بنەمای یاسایی چالاکی",
      text:
        "وەک وەکیلی تۆمارکراوی بیمە لە پۆڵەندا کار دەکەین و زانیارییە پێویستە یاسایییەکان بە پێی یاسای دابەشکردنی بیمە ئاشکرا دەکەین.",
    },
    {
      title: "مەرجە ڕوون و ئاشکراکان",
      text:
        "پێش وەرگرتنی بیمە، ناوچەی کارایی، ماوەی بیمە، سنووردارییەکان، دەرچوونەکان و شێوازی چارەسەری زیانەکان باس دەکەین.",
    },
    {
      title: "پرۆسەی وەرگرتنی بیمە",
      text:
        "وەرگرتنی زانیاری → پشکنینی زانیاری → ڕێککەوتن لەسەر مەرجەکان → پارەدان → دەرکردنی بیمەنامە و گەیاندنی بەڵگەنامەکان بە کڕیار.",
    },
  ],

  company: {
    title:
      "زانیاری دەربارەی ناوبژیوانی بیمە SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "بەپێی ماددەی 22 لە یاسای پۆڵەندا سەبارەت بە دابەشکردنی بیمە، کە لە 15ی کانوونی یەکەمی 2017 دەرچووە، ئەم زانیارییانە پێشکەش دەکەین:",

      "",
      "زانیاری وەکیلی بیمە",
      "کۆمپانیا: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "ناونیشانی وەکیل: 01-473 Warszawa, ul. Dobrzańskiego Hubala 22D",
      "ژمارەی تۆمارکردن لە تۆماری وەکیلان: 11257162/A",
      "NIP: 5242953841",

      "",
      "تۆماری وەکیلانی بیمە لەلایەن دەستەی چاودێری دارایی پۆڵەندا (KNF) بەڕێوە دەبرێت.",
      "دەتوانرێت تۆماربوونەکە لە ماڵپەڕی KNF بپشکنرێت بە هەڵبژاردنی جۆری سوبجێکت «Agent» و دانانی ژمارەی تۆمارکردن یان ناوی ئاجانس.",

      "",
      "بوارەکانی چالاکی",
      "SINEDIS SP. Z O.O. چالاکی وەکایەتی بیمە ئەنجام دەدات لە چوارچێوەی بەشی دووەم «جۆرەکانی تری بیمەی کەسی و سامانی» بەپێی پاشکۆی یاسای بیمە و دووبارە بیمەکردن.",

      "",
      "کۆمپانیای بیمە",
      "وەکیل لە ناوی ئەم کۆمپانیایەدا کار دەکات:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "ناونیشان: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "هێڵی گەرم و ژمارەی ڕاگەیاندنی زیان: +48 502 308 308 (نرخی پەیوەندی بە پێی تێرفی ئۆپێراتۆرە).",

      "",
      "دەسەڵاتەکانی وەکیل",
      "دەسەڵاتەکانی وەکیل بە بەڵگەنامەیەکی جیاواز پشتڕاست کراونەتەوە.",
      "هەروەها دەتوانرێت سنووری دەسەڵاتەکان لە تۆماری KNF بپشکنرێت بە هەڵبژاردنی وەکیل و بەشی «Pełnomocnictwa».",

      "",
      "پاداشتی وەکیل",
      "لە پەیوەندی بە بەستنەوەی گرێبەستی بیمە، وەکیل کرێی کۆمسیۆن وەردەگرێت کە لە ناو پارەی بیمەدا هەژمار کراوە.",
      "هەروەها وەکیل دەتوانێت سوودە دارایی یان نادارایییەکانی تر وەربگرێت کە پەیوەندییان بە چالاکی دابەشکردنی بیمە و بەشداریکردن لە بەرنامە تایبەتەکانی وەکیلانی بیمە هەیە.",

      "",
      "زانیاری سەبارەت بە پەیوەندییە سەرمایەدارییەکان",
      "وەکیل هیچ پشک یان بەشێکی TUiR „WARTA” S.A. نییە کە لانیکەم 10٪ مافی دەنگدانی پێ ببەخشێت.",
      "هەروەها TUiR „WARTA” S.A. هیچ پشک یان بەشێکی SINEDIS SP. Z O.O. نییە کە لانیکەم 10٪ مافی دەنگدانی پێ ببەخشێت.",

      "",
      "سکاڵاکان پەیوەندیدار بە پاراستنی بیمەیی",
      "سکاڵاکان کە پەیوەندییان بە پاراستنی بیمەییەوە هەیە دەتوانرێت بەم شێوازانە بۆ WARTA بنێردرێن:",

      "",
      "1. بە شێوەی نووسراو لەسەر کاغەز:",
      "بۆ ناونیشانی: skrytka pocztowa 1020, 00-950 Warszawa یان بە شێوەی کەسی لە هەر ناوەندێکی WARTA.",

      "",
      "2. بە شێوەی ئەلیکترۆنی:",
      "بۆ ناونیشانی ئەلیکترۆنی AE:PL-12869-16149-GHRES-21 یان لە ڕێگەی فۆڕمی ماڵپەڕی www.warta.pl/reklamacje.",

      "",
      "3. بە شێوەی زارەکی:",
      "لە ڕێگەی تەلەفۆنی +48 502 308 308 یان بە تۆمارکردن لە ناوەندەکانی WARTA.",

      "",
      "ماوەی پشکنینی سکاڵا",
      "WARTA سکاڵاکە لە ماوەی 30 ڕۆژ لە ڕێکەوتی وەرگرتنی پشکنین دەکات و وەڵام بە شێوەی نووسراو یان ئەلیکترۆنی دەدات.",
      "لە حاڵەتە ئاڵۆزەکاندا ئەم ماوەیە دەتوانرێت بگاتە 60 ڕۆژ و داواکار پێشوەخت ئاگادار دەکرێتەوە.",

      "",
      "سکاڵاکان کە پەیوەندییان بە پاراستنی بیمەییەوە نییە",
      "ئەگەر سکاڵاکە ڕاستەوخۆ پەیوەندی بە پاراستنی بیمەییەوە نەبێت، کڕیار دەتوانێت ڕاستەوخۆ پەیوەندی بە وەکیلەوە بکات:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "ناونیشانی وەکیل: 01-473 Warszawa, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "ئەگەر پێویستت بە بیمە یان زانیاری زیاتر هەبێت، پەیوەندیمان پێوە بکە. مەرجەکانی بیمە، بەڵگەنامە پێویستەکان و هەنگاوەکانی داهاتووت بۆ ڕوون دەکەینەوە.",
  },

  contact: {
    title: "پەیوەندیمان پێوە بکە",
    desc:
      "وەڵامی پرسیارەکانت دەدەینەوە سەبارەت بە بیمە، مەرجەکانی وەرگرتن و بەڵگەنامە پێویستەکان.",
  },
};

const KMR: AboutDictionary = {
  seo: {
    title: "Derbarê me de — SINEDIS",
    description:
      "Agahdariyên derbarê ajanê sîgorteyê, bingehê qanûnî yê çalakiyê, şirketa sîgorteyê û rêbaza şikayetkirinê.",
  },

  hero: {
    title:
      "Ajanê Sîgorteyê SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "Em li gorî qanûnên navbeynkarîya sîgorteyê dixebitin û berî girêbesta sîgorteyê hemû agahdariyên pêwîst ji bo xerîdaran peyda dikin.",
  },

  cards: [
    {
      title: "Em kî ne û çawa dikarin alîkariyê bikin",
      text:
        "Em di amadekirina sîgorteyê ji bo veguhastin û rêwîtiyên navneteweyî de alîkariyê dikin, û di şert û mercên sîgorteyê û daxwazên ketina welatan de şîretan didin.",
    },
    {
      title: "Bingehê qanûnî yê çalakiyê",
      text:
        "Em wekî ajanek sîgorteyê ya fermî li Polonyayê qeydkirî ne û li gorî qanûnên belavkirina sîgorteyê hemû agahdariyên mecbûrî eşkere dikin.",
    },
    {
      title: "Mercên zelal û vekirî",
      text:
        "Berî derxistina polîçeyê em herêmê berfirehiya sîgorteyê, demjimêr, sînorkirin, derxistin û rêbaza çareserkirina ziraran bi hev re vedibêjin.",
    },
    {
      title: "Pêvajoya derxistina polîçeyê",
      text:
        "Wergirtina agahdariyan → kontrolkirina agahdariyan → lihevkirina şertan → dravdan → derxistina polîçeyê û şandina belgeyan ji xerîdar re.",
    },
  ],

  company: {
    title:
      "Agahdariyên derbarê navbeynkarê sîgorteyê SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "Li gorî xala 22 ya Qanûna Polonyayê ya 15ê Kanûna Pêşîn 2017 derbarê belavkirina sîgorteyê de, em van agahdariyan pêşkêş dikin:",

      "",
      "Agahdariyên ajanê sîgorteyê",
      "Şirket: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Navnîşana ajanê: 01-473 Warszawa, ul. Dobrzańskiego Hubala 22D",
      "Hejmara qeyda ajanên sîgorteyê: 11257162/A",
      "NIP: 5242953841",

      "",
      "Qeyda ajanên sîgorteyê ji aliyê Komîsyona Çavdêriya Aborî ya Polonyayê (KNF) ve tê rêvebirin.",
      "Qeydkirin dikare li ser malpera KNF were kontrolkirin, bi hilbijartina cureya kesane 'Agent' û têketina hejmara qeydkirinê an navê ajanê.",

      "",
      "Qada çalakiyê",
      "SINEDIS SP. Z O.O. di navbera beşa II ya 'Cureyên din ên sîgorteya kesane û milkî' de li gorî pêveka qanûna sîgorte û dûbare-sîgortekirinê çalakiya ajanî pêk tîne.",

      "",
      "Şirketa sîgorteyê",
      "Ajan li ser navê vê şirketê tevdigere:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Navnîşan: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Xeta alîkariyê û hejmara ragihandina ziyanê: +48 502 308 308 (mesrefa telefonê li gorî tarîfeya operatorê ye).",

      "",
      "Desthilatên ajanê",
      "Desthilatên ajanê bi belgeyek taybet têne piştrastkirin.",
      "Mezinahiya desthilatan jî dikare bi rêya qeyda KNF were kontrolkirin, bi hilbijartina ajanê û beşa 'Pełnomocnictwa'.",

      "",
      "Xelata ajanê",
      "Ji ber girêdana peymana sîgorteyê, ajan komîsyonek wergire ku di nav primê sîgorteyê de cih digire.",
      "Ajan dikare her weha feydeyên din ên darayî an nedarayî bistîne ku bi çalakiya belavkirina sîgorteyê û beşdarbûna di bernameyên taybet ji bo ajanên sîgorteyê re têkildar in.",

      "",
      "Agahdariya derbarê girêdanên sermayeyî de",
      "Ajan xwedî par an hîssedarî di TUiR „WARTA” S.A. de nîne ku kêmî zêdeyî 10% dengan bidin.",
      "Her weha TUiR „WARTA” S.A. jî xwedî par an hîssedarî di SINEDIS SP. Z O.O. de nîne ku kêmî zêdeyî 10% dengan bidin.",

      "",
      "Şikayetên têkildarî parastina sîgorteyê",
      "Şikayetên têkildarî parastina sîgorteyê dikarin bi van rêyan ji WARTA re werin şandin:",

      "",
      "1. Bi awayê nivîskî li ser kaxezê:",
      "bi navnîşana: skrytka pocztowa 1020, 00-950 Warszawa an jî bi kesane li her şaxeya WARTA ya ku xerîdaran xizmet dike.",

      "",
      "2. Bi awayê elektronîkî:",
      "li navnîşana elektronîkî ya AE:PL-12869-16149-GHRES-21 an jî bi forma li ser malpera www.warta.pl/reklamacje.",

      "",
      "3. Bi awayê devkî:",
      "bi telefonê +48 502 308 308 an jî bi qeydandina protokolê li şaxeyên WARTA.",

      "",
      "Dema nirxandina şikayetê",
      "WARTA di nav 30 rojan de ji roja wergirtina şikayetê bersivê dide û bersivê bi nivîs an elektronîkî, li gorî awayê şandinê, pêşkêş dike.",
      "Di rewşên taybetî yên tevlihevtir de ev dem dikare heta 60 rojan were dirêjkirin, û daxwazkar dê berê bê agahdarkirin.",

      "",
      "Şikayetên ku bi parastina sîgorteyê re têkildar nînin",
      "Heke daxwaz an gilî rasterast bi parastina sîgorteyê re têkildar nebe, xerîdar dikare rasterast bi ajanê re têkilî dayne:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Navnîşana ajanê: 01-473 Warszawa, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Heke hûn hewcedarê sîgorteyê ne an jî agahdariyên zêdetir dixwazin, bi me re têkilî daynin — em ê şertên sîgorteyê, belgeyên pêwîst û pêvajoya pêşerojê ji we re rave bikin.",
  },

  contact: {
    title: "Bi me re têkilî daynin",
    desc:
      "Em ê bersiva pirsên we yên derbarê sîgorteyê, şertên derxistinê û belgeyên pêwîst bidin.",
  },
};

const AR: AboutDictionary = {
  seo: {
    title: "من نحن — SINEDIS",
    description:
      "معلومات عن وكيل التأمين، والأساس القانوني لنشاطه، وشركة التأمين، وآلية تقديم الشكاوى.",
  },

  hero: {
    title:
      "وكيل التأمين SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "نعمل وفقًا لتشريعات الوساطة التأمينية ونوفر للعملاء جميع المعلومات الإلزامية قبل إبرام عقد التأمين.",
  },

  cards: [
    {
      title: "من نحن وكيف نساعدك",
      text:
        "نساعد في ترتيب التأمين للرحلات والنقل الدولي، ونقدم الاستشارات حول شروط التأمين ومتطلبات الدخول إلى مختلف الدول.",
    },
    {
      title: "الأساس القانوني لنشاطنا",
      text:
        "نعمل كوكيل تأمين مسجل في بولندا ونفصح عن المعلومات الإلزامية وفقًا لقوانين توزيع منتجات التأمين.",
    },
    {
      title: "شروط واضحة وشفافة",
      text:
        "قبل إصدار الوثيقة نوضح نطاق التغطية، مدة التأمين، القيود والاستثناءات، وآلية تسوية المطالبات.",
    },
    {
      title: "آلية الإصدار",
      text:
        "استلام البيانات ← التحقق من المعلومات ← الاتفاق على الشروط ← الدفع ← إصدار الوثيقة وتسليم المستندات للعميل.",
    },
  ],

  company: {
    title:
      "معلومات عن وسيط التأمين SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "وفقًا للمادة 22 من قانون توزيع التأمين البولندي الصادر في 15 ديسمبر 2017، نقدم المعلومات التالية:",

      "",
      "بيانات وكيل التأمين",
      "اسم الشركة: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "عنوان الوكيل: 01-473 وارسو، ul. Dobrzańskiego Hubala 22D",
      "رقم التسجيل في سجل وكلاء التأمين: 11257162/A",
      "NIP: 5242953841",

      "",
      "يتم الاحتفاظ بسجل وكلاء التأمين من قبل هيئة الرقابة المالية البولندية (KNF).",
      "يمكن التحقق من التسجيل عبر موقع KNF باختيار نوع الجهة «Agent» وإدخال رقم التسجيل أو اسم الوكالة.",

      "",
      "نطاق النشاط",
      "تمارس SINEDIS SP. Z O.O. نشاطها كوكيل لتوزيع التأمين ضمن القسم الثاني «أنواع التأمينات الشخصية والممتلكات الأخرى» وفقًا للملحق الخاص بقانون التأمين وإعادة التأمين.",

      "",
      "شركة التأمين",
      "يتصرف الوكيل نيابة عن:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "العنوان: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "الخط الساخن ورقم الإبلاغ عن المطالبات: +48 502 308 308 (تعتمد تكلفة المكالمة على تعرفة مشغل الاتصالات).",

      "",
      "صلاحيات الوكيل",
      "تُثبت صلاحيات الوكيل بموجب وثيقة تفويض مستقلة.",
      "كما يمكن التحقق من نطاق الصلاحيات عبر سجل KNF من خلال اختيار الوكيل ثم قسم «Pełnomocnictwa».",

      "",
      "أجر الوكيل",
      "عند إبرام عقد التأمين يحصل الوكيل على عمولة مدرجة ضمن قسط التأمين.",
      "كما قد يحصل الوكيل على مزايا مالية أو غير مالية أخرى مرتبطة بنشاط توزيع التأمين والمشاركة في البرامج المخصصة لوكلاء التأمين.",

      "",
      "معلومات حول الروابط الرأسمالية",
      "لا يمتلك الوكيل أسهمًا أو حصصًا في TUiR „WARTA” S.A. تمنحه ما لا يقل عن 10٪ من حقوق التصويت.",
      "كما أن TUiR „WARTA” S.A. لا تمتلك حصصًا أو أسهمًا في SINEDIS SP. Z O.O. تمنحها ما لا يقل عن 10٪ من حقوق التصويت.",

      "",
      "الشكاوى المتعلقة بالتغطية التأمينية",
      "يمكن تقديم الشكاوى المتعلقة بالتغطية التأمينية إلى WARTA بالطرق التالية:",

      "",
      "1. كتابيًا على ورق:",
      "على العنوان: skrytka pocztowa 1020, 00-950 Warszawa أو شخصيًا في أي فرع من فروع WARTA المخصصة لخدمة العملاء.",

      "",
      "2. إلكترونيًا:",
      "إلى عنوان التسليم الإلكتروني AE:PL-12869-16149-GHRES-21 أو عبر النموذج المتاح على الموقع www.warta.pl/reklamacje.",

      "",
      "3. شفهيًا:",
      "عبر الهاتف +48 502 308 308 أو بتسجيل محضر في أحد فروع WARTA.",

      "",
      "مدة معالجة الشكوى",
      "تقوم WARTA بدراسة الشكوى خلال 30 يومًا من تاريخ استلامها، وتقدم الرد كتابيًا أو إلكترونيًا وفقًا لطريقة تقديم الشكوى.",
      "وفي الحالات المعقدة بشكل خاص، قد تمتد المدة إلى 60 يومًا مع إشعار مقدم الشكوى مسبقًا.",

      "",
      "الشكاوى غير المتعلقة بالتغطية التأمينية",
      "إذا كانت الشكوى لا تتعلق مباشرة بالتغطية التأمينية، يمكن للعميل التواصل مباشرة مع الوكيل:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "عنوان الوكيل: 01-473 وارسو، ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "إذا كنت بحاجة إلى تأمين أو ترغب في الحصول على معلومات إضافية، فتواصل معنا وسنوضح لك شروط التأمين والمستندات المطلوبة وخطوات الإصدار.",
  },

  contact: {
    title: "تواصل معنا",
    desc:
      "سنجيب عن استفساراتك المتعلقة بالتأمين وشروط الإصدار والمستندات المطلوبة.",
  },
};

const HE: AboutDictionary = {
  seo: {
    title: "אודותינו — SINEDIS",
    description:
      "מידע על סוכן הביטוח, הבסיס המשפטי לפעילותו, חברת הביטוח והליך הגשת תלונות.",
  },

  hero: {
    title:
      "סוכן הביטוח SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "אנו פועלים בהתאם לחקיקה המסדירה תיווך והפצת ביטוח ומספקים ללקוחות את כל המידע המחויב על פי דין לפני כריתת חוזה ביטוח.",
  },

  cards: [
    {
      title: "מי אנחנו וכיצד אנו יכולים לסייע",
      text:
        "אנו מסייעים בהסדרת ביטוח לנסיעות ולהובלות בינלאומיות, ומעניקים ייעוץ בנוגע לתנאי הביטוח ולדרישות הכניסה למדינות שונות.",
    },
    {
      title: "הבסיס המשפטי לפעילותנו",
      text:
        "אנו פועלים כסוכן ביטוח רשום בפולין ומגלים את כל המידע המחויב בהתאם לחקיקה המסדירה את הפצת מוצרי הביטוח.",
    },
    {
      title: "תנאים שקופים וברורים",
      text:
        "לפני הנפקת הפוליסה אנו דנים באזור הכיסוי, תקופת הביטוח, מגבלות, חריגים והליך יישוב תביעות.",
    },
    {
      title: "תהליך ההנפקה",
      text:
        "קבלת הנתונים → בדיקת המידע → תיאום התנאים → תשלום → הנפקת הפוליסה ומסירת המסמכים ללקוח.",
    },
  ],

  company: {
    title: "מידע על מתווך הביטוח SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "בהתאם לסעיף 22 לחוק הפולני מיום 15 בדצמבר 2017 בנושא הפצת ביטוח, אנו מוסרים את המידע הבא:",

      "",
      "פרטי סוכן הביטוח",
      "חברה: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "כתובת הסוכן: 01-473 Warszawa, ul. Dobrzańskiego Hubala 22D",
      "מספר רישום במרשם סוכני הביטוח: 11257162/A",
      "NIP: 5242953841",

      "",
      "מרשם סוכני הביטוח מנוהל על ידי רשות הפיקוח הפיננסי של פולין (KNF).",
      "ניתן לאמת את הרישום באתר KNF באמצעות בחירת סוג הישות «Agent» והזנת מספר הרישום או שם הסוכנות.",

      "",
      "תחום הפעילות",
      "SINEDIS SP. Z O.O. עוסקת בהפצת ביטוח כסוכן ביטוח במסגרת ענף II — «ביטוחי רכוש וביטוחים אישיים אחרים», בהתאם לנספח לחוק הביטוח וביטוח המשנה.",

      "",
      "חברת הביטוח",
      "הסוכן פועל בשם:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "כתובת: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "מוקד שירות ומספר טלפון לדיווח על תביעות: +48 502 308 308 (עלות השיחה בהתאם לתעריף המפעיל).",

      "",
      "סמכויות הסוכן",
      "סמכויות הסוכן מאושרות במסמך הרשאה נפרד.",
      "ניתן לבדוק את היקף הסמכויות גם באמצעות מרשם KNF, תחת פרטי הסוכן ובקטגוריה «Pełnomocnictwa».",

      "",
      "תגמול הסוכן",
      "בקשר לכריתת חוזה הביטוח, הסוכן מקבל עמלה הכלולה בפרמיית הביטוח.",
      "הסוכן עשוי לקבל גם הטבות פיננסיות או שאינן פיננסיות אחרות, הקשורות לפעילות הפצת הביטוח ולהשתתפות בתוכניות המיועדות לסוכני ביטוח.",

      "",
      "מידע על קשרי הון",
      "הסוכן אינו מחזיק במניות או בזכויות בעלות ב-TUiR „WARTA” S.A. המקנות לפחות 10% מזכויות ההצבעה.",
      "כמו כן, TUiR „WARTA” S.A. אינה מחזיקה במניות או בזכויות בעלות ב-SINEDIS SP. Z O.O. המקנות לפחות 10% מזכויות ההצבעה.",

      "",
      "תלונות הנוגעות לכיסוי הביטוחי",
      "ניתן להגיש תלונות הקשורות לכיסוי הביטוחי אל WARTA באחת מהדרכים הבאות:",

      "",
      "1. בכתב על גבי מסמך נייר:",
      "לכתובת: skrytka pocztowa 1020, 00-950 Warszawa, או באופן אישי בכל סניף של WARTA המעניק שירות ללקוחות.",

      "",
      "2. באמצעים אלקטרוניים:",
      "לכתובת המסירה האלקטרונית AE:PL-12869-16149-GHRES-21 או באמצעות הטופס באתר www.warta.pl/reklamacje.",

      "",
      "3. בעל פה:",
      "בטלפון +48 502 308 308 או באמצעות רישום פרוטוקול בסניפי WARTA.",

      "",
      "מועד הטיפול בתלונה",
      "WARTA תבחן את התלונה בתוך 30 ימים ממועד קבלתה ותמסור מענה בכתב או באמצעים אלקטרוניים, בהתאם לאופן הגשת התלונה.",
      "במקרים מורכבים במיוחד ניתן להאריך את התקופה עד ל-60 ימים, והפונה יקבל הודעה על כך מראש.",

      "",
      "תלונות שאינן קשורות לכיסוי הביטוחי",
      "אם הפנייה אינה נוגעת ישירות לכיסוי הביטוחי, הלקוח רשאי לפנות ישירות לסוכן:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "כתובת הסוכן: 01-473 Warszawa, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "אם אתם זקוקים לביטוח או למידע נוסף, צרו עמנו קשר — נשמח להבהיר את תנאי הביטוח, רשימת המסמכים הנדרשים ואת שלבי ההנפקה הבאים.",
  },

  contact: {
    title: "צרו קשר",
    desc:
      "נשיב על שאלות בנוגע לביטוח, לתנאי ההנפקה ולמסמכים הנדרשים.",
  },
};

const UK: AboutDictionary = {
  seo: {
    title: "Про нас — SINEDIS",
    description:
      "Інформація про страхового агента, правові підстави діяльності, страхову компанію та порядок подання скарг.",
  },

  hero: {
    title:
      "Страховий агент SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "Працюємо відповідно до законодавства про страхове посередництво та надаємо клієнтам обов’язкову інформацію до укладення договору страхування.",
  },

  cards: [
    {
      title: "Хто ми та чим корисні",
      text:
        "Допомагаємо оформити страхування для міжнародних перевезень і поїздок, консультуємо щодо умов страхування та вимог для в’їзду до різних країн.",
    },
    {
      title: "Правова основа діяльності",
      text:
        "Працюємо як зареєстрований страховий агент у Польщі та розкриваємо обов’язкову інформацію відповідно до законодавства про дистрибуцію страхування.",
    },
    {
      title: "Прозорі умови",
      text:
        "До оформлення обговорюємо територію дії, строк страхування, обмеження, винятки та порядок врегулювання збитків.",
    },
    {
      title: "Процес оформлення",
      text:
        "Отримання даних → перевірка інформації → погодження умов → оплата → оформлення поліса та передача документів клієнту.",
    },
  ],

  company: {
    title: "Інформація про страхового посередника SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "Відповідно до статті 22 Закону Польщі від 15 грудня 2017 року про дистрибуцію страхування надаємо таку інформацію:",

      "",
      "Дані страхового агента",
      "Компанія: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Адреса агента: 01-473 Варшава, ul. Dobrzańskiego Hubala 22D",
      "Номер у реєстрі страхових агентів: 11257162/A",
      "NIP: 5242953841",

      "",
      "Реєстр страхових агентів ведеться Комісією фінансового нагляду Польщі (KNF).",
      "Перевірити реєстрацію можна на сайті KNF, обравши тип суб’єкта «Agent» та вказавши номер реєстрації або назву агентства.",

      "",
      "Сфера діяльності",
      "SINEDIS SP. Z O.O. здійснює агентську діяльність з дистрибуції страхування в межах Розділу II «Інші особисті та майнові види страхування» відповідно до додатка до закону про страхову та перестрахову діяльність.",

      "",
      "Страхова компанія",
      "Агент діє від імені:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Адреса: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Гаряча лінія та телефон для повідомлення про збитки: +48 502 308 308 (вартість дзвінка залежить від тарифу оператора).",

      "",
      "Повноваження агента",
      "Повноваження агента підтверджуються окремим документом.",
      "Обсяг повноважень також можна перевірити через реєстр KNF, обравши агента та розділ «Pełnomocnictwa».",

      "",
      "Винагорода агента",
      "У зв’язку з укладенням договору страхування агент отримує комісійну винагороду, включену до страхової премії.",
      "Агент також може отримувати інші фінансові або нефінансові вигоди, пов’язані з діяльністю з дистрибуції страхування та участю в програмах, призначених для страхових агентів.",

      "",
      "Інформація про капітальні зв’язки",
      "Агент не володіє акціями або частками TUiR „WARTA” S.A., що надають щонайменше 10% голосів.",
      "TUiR „WARTA” S.A. також не володіє частками або акціями SINEDIS SP. Z O.O., що надають щонайменше 10% голосів.",

      "",
      "Скарги, пов’язані зі страховим захистом",
      "Скарги, що стосуються страхового захисту, можуть бути подані до WARTA такими способами:",

      "",
      "1. У письмовій формі на паперовому носії:",
      "за адресою: skrytka pocztowa 1020, 00-950 Warszawa або особисто в будь-якому підрозділі WARTA, що обслуговує клієнтів.",

      "",
      "2. В електронній формі:",
      "на електронну адресу доставки AE:PL-12869-16149-GHRES-21 або через форму на сайті www.warta.pl/reklamacje.",

      "",
      "3. Усно:",
      "за телефоном +48 502 308 308 або під протокол у підрозділах WARTA.",

      "",
      "Строк розгляду скарги",
      "WARTA розглядає скаргу протягом 30 днів з моменту її отримання та надає відповідь у письмовій або електронній формі — залежно від способу подання скарги.",
      "В особливо складних випадках строк може бути продовжений до 60 днів, про що заявника повідомляють заздалегідь.",

      "",
      "Скарги, не пов’язані зі страховим захистом",
      "Якщо претензія не стосується безпосередньо страхового захисту, клієнт може звернутися безпосередньо до агента:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Адреса агента: 01-473 Варшава, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Якщо вам потрібне страхування або додаткова інформація, зв’яжіться з нами — ми уточнимо умови страхування, перелік документів і подальший порядок оформлення.",
  },

  contact: {
    title: "Зв’яжіться з нами",
    desc:
      "Відповімо на запитання щодо страхування, умов оформлення та необхідних документів.",
  },
};

const AZ: AboutDictionary = {
  seo: {
    title: "Haqqımızda — SINEDIS",
    description:
      "Sığorta agenti, fəaliyyətin hüquqi əsasları, sığorta şirkəti və şikayətlərin təqdim edilməsi qaydası haqqında məlumat.",
  },

  hero: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ sığorta agenti",
    subtitle:
      "Sığorta vasitəçiliyi haqqında qanunvericiliyə uyğun fəaliyyət göstərir və sığorta müqaviləsi bağlanmazdan əvvəl müştərilərə məcburi məlumatları təqdim edirik.",
  },

  cards: [
    {
      title: "Biz kimik və necə faydalı ola bilərik",
      text:
        "Beynəlxalq daşımalar və səfərlər üçün sığortanın rəsmiləşdirilməsinə kömək edir, sığorta şərtləri və müxtəlif ölkələrə giriş tələbləri üzrə məsləhətlər veririk.",
    },
    {
      title: "Fəaliyyətin hüquqi əsası",
      text:
        "Polşada qeydiyyatdan keçmiş sığorta agenti kimi fəaliyyət göstərir və sığorta məhsullarının paylanması haqqında qanunvericiliyə uyğun olaraq məcburi məlumatları açıqlayırıq.",
    },
    {
      title: "Şəffaf şərtlər",
      text:
        "Sığorta rəsmiləşdirilməzdən əvvəl əhatə dairəsini, sığorta müddətini, məhdudiyyətləri, istisnaları və zərərlərin tənzimlənməsi qaydasını müzakirə edirik.",
    },
    {
      title: "Rəsmiləşdirmə prosesi",
      text:
        "Məlumatların qəbulu → məlumatların yoxlanılması → şərtlərin razılaşdırılması → ödəniş → sığorta polisinin rəsmiləşdirilməsi və sənədlərin müştəriyə təqdim edilməsi.",
    },
  ],

  company: {
    title: "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ sığorta vasitəçisi haqqında məlumat",

    lines: [
      "Polşanın 15 dekabr 2017-ci il tarixli Sığorta Məhsullarının Paylanması haqqında Qanununun 22-ci maddəsinə uyğun olaraq aşağıdakı məlumatları təqdim edirik:",

      "",
      "Sığorta agenti haqqında məlumat",
      "Şirkət: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Agentin ünvanı: 01-473 Varşava, ul. Dobrzańskiego Hubala 22D",
      "Sığorta agentləri reyestrində qeydiyyat nömrəsi: 11257162/A",
      "NIP: 5242953841",

      "",
      "Sığorta agentləri reyestri Polşa Maliyyə Nəzarəti Komissiyası (KNF) tərəfindən aparılır.",
      "Qeydiyyatı KNF-in internet saytında subyekt növü kimi «Agent» seçilərək və qeydiyyat nömrəsi və ya agentliyin adı göstərilərək yoxlamaq mümkündür.",

      "",
      "Fəaliyyət sahəsi",
      "SINEDIS SP. Z O.O. sığorta və təkrarsığorta fəaliyyəti haqqında qanuna əlavəyə uyğun olaraq II Bölmə «Digər şəxsi və əmlak sığortası növləri» çərçivəsində sığorta məhsullarının paylanması üzrə agent fəaliyyəti həyata keçirir.",

      "",
      "Sığorta şirkəti",
      "Agent aşağıdakı şirkətin adından fəaliyyət göstərir:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Ünvan: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Qaynar xətt və zərər hadisələri barədə məlumat vermək üçün telefon: +48 502 308 308 (zəngin dəyəri operatorun tarifindən asılıdır).",

      "",
      "Agentin səlahiyyətləri",
      "Agentin səlahiyyətləri ayrıca sənədlə təsdiqlənir.",
      "Səlahiyyətlərin həcmini KNF reyestrində agent seçilərək və «Pełnomocnictwa» bölməsi açılaraq da yoxlamaq mümkündür.",

      "",
      "Agentin mükafatı",
      "Sığorta müqaviləsinin bağlanması ilə əlaqədar agent sığorta haqqına daxil edilmiş komissiya mükafatı alır.",
      "Agent həmçinin sığorta məhsullarının paylanması fəaliyyəti və sığorta agentləri üçün nəzərdə tutulmuş proqramlarda iştirakı ilə əlaqədar digər maliyyə və ya qeyri-maliyyə üstünlükləri də əldə edə bilər.",

      "",
      "Kapital əlaqələri haqqında məlumat",
      "Agent TUiR „WARTA” S.A.-nın səslərin ən azı 10%-ni təmin edən səhmlərinə və ya paylarına malik deyil.",
      "TUiR „WARTA” S.A. da öz növbəsində səslərin ən azı 10%-ni təmin edən SINEDIS SP. Z O.O.-nun paylarına və ya səhmlərinə malik deyil.",

      "",
      "Sığorta təminatı ilə bağlı şikayətlər",
      "Sığorta təminatı ilə bağlı şikayətlər aşağıdakı üsullarla WARTA-ya təqdim edilə bilər:",

      "",
      "1. Kağız daşıyıcıda yazılı formada:",
      "ünvanına: skrytka pocztowa 1020, 00-950 Warszawa və ya müştərilərə xidmət göstərən istənilən WARTA bölməsində şəxsən.",

      "",
      "2. Elektron formada:",
      "AE:PL-12869-16149-GHRES-21 elektron çatdırılma ünvanına və ya www.warta.pl/reklamacje saytındakı forma vasitəsilə.",

      "",
      "3. Şifahi qaydada:",
      "+48 502 308 308 nömrəsi ilə telefon vasitəsilə və ya WARTA bölmələrində protokolla.",

      "",
      "Şikayətə baxılma müddəti",
      "WARTA şikayətə daxil olduğu tarixdən etibarən 30 gün ərzində baxır və şikayətin təqdim edilmə üsulundan asılı olaraq yazılı və ya elektron formada cavab verir.",
      "Xüsusilə mürəkkəb hallarda bu müddət 60 günə qədər uzadıla bilər və bu barədə müraciət edən şəxs əvvəlcədən məlumatlandırılır.",

      "",
      "Sığorta təminatı ilə bağlı olmayan şikayətlər",
      "Əgər müraciət birbaşa sığorta təminatına aid deyilsə, müştəri birbaşa agentə müraciət edə bilər:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Agentin ünvanı: 01-473 Varşava, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Əgər sizə sığorta və ya əlavə məlumat lazımdırsa, bizimlə əlaqə saxlayın — sığorta şərtlərini, tələb olunan sənədlərin siyahısını və rəsmiləşdirmənin növbəti mərhələlərini dəqiqləşdirəcəyik.",
  },

  contact: {
    title: "Bizimlə əlaqə saxlayın",
    desc:
      "Sığorta, rəsmiləşdirmə şərtləri və tələb olunan sənədlərlə bağlı suallarınızı cavablandıracağıq.",
  },
};

const RO: AboutDictionary = {
  seo: {
    title: "Despre noi — SINEDIS",
    description:
      "Informații despre agentul de asigurare, temeiul juridic al activității, societatea de asigurare și procedura de depunere a reclamațiilor.",
  },

  hero: {
    title:
      "Agentul de asigurare SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "Activăm în conformitate cu legislația privind distribuția de asigurări și furnizăm clienților informațiile obligatorii înainte de încheierea contractului de asigurare.",
  },

  cards: [
    {
      title: "Cine suntem și cu ce vă putem ajuta",
      text:
        "Vă ajutăm să încheiați asigurări pentru transporturi internaționale și călătorii, oferim consultanță privind condițiile de asigurare și cerințele de intrare în diferite țări.",
    },
    {
      title: "Temeiul juridic al activității",
      text:
        "Activăm ca agent de asigurare înregistrat în Polonia și publicăm informațiile obligatorii în conformitate cu legislația privind distribuția de asigurări.",
    },
    {
      title: "Condiții transparente",
      text:
        "Înainte de încheierea poliței discutăm aria de acoperire, perioada de asigurare, limitările, excluderile și procedura de soluționare a daunelor.",
    },
    {
      title: "Procesul de emitere",
      text:
        "Colectarea datelor → verificarea informațiilor → agrearea condițiilor → plata → emiterea poliței și transmiterea documentelor către client.",
    },
  ],

  company: {
    title: "Informații despre intermediarul de asigurări SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "În conformitate cu articolul 22 din Legea Poloniei din 15 decembrie 2017 privind distribuția de asigurări, furnizăm următoarele informații:",

      "",
      "Datele agentului de asigurare",
      "Compania: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Adresa agentului: 01-473 Varșovia, ul. Dobrzańskiego Hubala 22D",
      "Numărul din registrul agenților de asigurare: 11257162/A",
      "NIP: 5242953841",

      "",
      "Registrul agenților de asigurare este administrat de Autoritatea de Supraveghere Financiară din Polonia (KNF).",
      "Înregistrarea poate fi verificată pe site-ul KNF selectând tipul de entitate „Agent” și indicând numărul de înregistrare sau denumirea agenției.",

      "",
      "Domeniul de activitate",
      "SINEDIS SP. Z O.O. desfășoară activitate de agent de asigurare în domeniul distribuției de asigurări în cadrul Secțiunii II „Alte tipuri de asigurări de persoane și de bunuri”, conform anexei la legea privind activitatea de asigurare și reasigurare.",

      "",
      "Societatea de asigurare",
      "Agentul acționează în numele:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Adresă: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Linie telefonică de asistență și număr pentru notificarea daunelor: +48 502 308 308 (costul apelului depinde de tariful operatorului).",

      "",
      "Împuternicirile agentului",
      "Împuternicirile agentului sunt confirmate printr-un document separat.",
      "Domeniul împuternicirilor poate fi verificat și în registrul KNF, selectând agentul și secțiunea „Pełnomocnictwa”.",

      "",
      "Remunerația agentului",
      "În legătură cu încheierea contractului de asigurare, agentul primește un comision inclus în prima de asigurare.",
      "Agentul poate primi, de asemenea, alte beneficii financiare sau nefinanciare legate de activitatea de distribuție a asigurărilor și de participarea la programe destinate agenților de asigurare.",

      "",
      "Informații privind legăturile de capital",
      "Agentul nu deține acțiuni sau participații în TUiR „WARTA” S.A. care să confere cel puțin 10% din drepturile de vot.",
      "De asemenea, TUiR „WARTA” S.A. nu deține participații sau acțiuni în SINEDIS SP. Z O.O. care să confere cel puțin 10% din drepturile de vot.",

      "",
      "Reclamații privind protecția de asigurare",
      "Reclamațiile referitoare la protecția de asigurare pot fi transmise către WARTA prin următoarele modalități:",

      "",
      "1. În formă scrisă, pe suport de hârtie:",
      "la adresa: skrytka pocztowa 1020, 00-950 Warszawa sau personal în orice unitate WARTA care deservește clienți.",

      "",
      "2. În formă electronică:",
      "la adresa electronică pentru comunicări AE:PL-12869-16149-GHRES-21 sau prin formularul disponibil pe site-ul www.warta.pl/reklamacje.",

      "",
      "3. Verbal:",
      "la numărul de telefon +48 502 308 308 sau prin consemnare în proces-verbal în unitățile WARTA.",

      "",
      "Termenul de soluționare a reclamației",
      "WARTA soluționează reclamația în termen de 30 de zile de la data primirii și transmite răspunsul în formă scrisă sau electronică, în funcție de modalitatea de depunere a reclamației.",
      "În cazuri deosebit de complexe, termenul poate fi prelungit până la 60 de zile, solicitantul fiind informat în prealabil despre acest lucru.",

      "",
      "Reclamații care nu sunt legate de protecția de asigurare",
      "Dacă reclamația nu privește în mod direct protecția de asigurare, clientul se poate adresa direct agentului:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Adresa agentului: 01-473 Varșovia, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Dacă aveți nevoie de asigurare sau de informații suplimentare, contactați-ne — vă vom explica condițiile de asigurare, lista documentelor necesare și etapele ulterioare ale procedurii de emitere.",
  },

  contact: {
    title: "Contactați-ne",
    desc:
      "Vă vom răspunde la întrebările privind asigurarea, condițiile de emitere și documentele necesare.",
  },
};

const SR: AboutDictionary = {
  seo: {
    title: "O nama — SINEDIS",
    description:
      "Informacije o agentu osiguranja, pravnom osnovu poslovanja, osiguravajućem društvu i postupku podnošenja pritužbi.",
  },

  hero: {
    title:
      "Agent osiguranja SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "Poslujemo u skladu sa propisima o posredovanju u osiguranju i pružamo klijentima obavezne informacije pre zaključenja ugovora o osiguranju.",
  },

  cards: [
    {
      title: "Ko smo i kako možemo pomoći",
      text:
        "Pomažemo pri ugovaranju osiguranja za međunarodni transport i putovanja, pružamo savete o uslovima osiguranja i zahtevima za ulazak u različite zemlje.",
    },
    {
      title: "Pravni osnov poslovanja",
      text:
        "Poslujemo kao registrovani agent osiguranja u Poljskoj i objavljujemo obavezne informacije u skladu sa propisima o distribuciji osiguranja.",
    },
    {
      title: "Transparentni uslovi",
      text:
        "Pre zaključenja ugovora razgovaramo o teritorijalnom važenju, periodu osiguranja, ograničenjima, isključenjima i postupku rešavanja odštetnih zahteva.",
    },
    {
      title: "Postupak ugovaranja",
      text:
        "Prikupljanje podataka → provera informacija → usaglašavanje uslova → plaćanje → izdavanje polise i dostavljanje dokumentacije klijentu.",
    },
  ],

  company: {
    title: "Informacije o posredniku u osiguranju SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "U skladu sa članom 22 Zakona Republike Poljske od 15. decembra 2017. godine o distribuciji osiguranja pružamo sledeće informacije:",

      "",
      "Podaci o agentu osiguranja",
      "Naziv društva: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Adresa agenta: 01-473 Varšava, ul. Dobrzańskiego Hubala 22D",
      "Broj u registru agenata osiguranja: 11257162/A",
      "NIP: 5242953841",

      "",
      "Registar agenata osiguranja vodi Komisija za finansijski nadzor Poljske (KNF).",
      "Registraciju je moguće proveriti na internet stranici KNF-a izborom vrste subjekta „Agent” i unosom registracionog broja ili naziva agencije.",

      "",
      "Oblast delatnosti",
      "SINEDIS SP. Z O.O. obavlja agentsku delatnost distribucije osiguranja u okviru Odeljka II „Ostale vrste ličnih i imovinskih osiguranja”, u skladu sa prilogom zakona o delatnosti osiguranja i reosiguranja.",

      "",
      "Osiguravajuće društvo",
      "Agent postupa u ime:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Adresa: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Kontakt centar i telefon za prijavu štete: +48 502 308 308 (cena poziva zavisi od tarife operatera).",

      "",
      "Ovlašćenja agenta",
      "Ovlašćenja agenta potvrđena su posebnim dokumentom.",
      "Obim ovlašćenja može se proveriti i putem registra KNF-a izborom agenta i odeljka „Pełnomocnictwa”.",

      "",
      "Naknada agenta",
      "U vezi sa zaključenjem ugovora o osiguranju agent ostvaruje provizijsku naknadu koja je uključena u premiju osiguranja.",
      "Agent može ostvarivati i druge finansijske ili nefinansijske pogodnosti povezane sa delatnošću distribucije osiguranja i učešćem u programima namenjenim agentima osiguranja.",

      "",
      "Informacije o vlasničkim vezama",
      "Agent ne poseduje akcije ili udela u TUiR „WARTA” S.A. koji obezbeđuju najmanje 10% glasačkih prava.",
      "TUiR „WARTA” S.A. takođe ne poseduje udela ili akcije u SINEDIS SP. Z O.O. koji obezbeđuju najmanje 10% glasačkih prava.",

      "",
      "Pritužbe povezane sa osiguravajućim pokrićem",
      "Pritužbe koje se odnose na osiguravajuće pokriće mogu se podneti društvu WARTA na sledeće načine:",

      "",
      "1. U pisanoj formi na papiru:",
      "na adresu: skrytka pocztowa 1020, 00-950 Warszawa ili lično u bilo kojoj poslovnici WARTA koja pruža usluge klijentima.",

      "",
      "2. U elektronskoj formi:",
      "na elektronsku adresu za dostavu AE:PL-12869-16149-GHRES-21 ili putem obrasca na internet stranici www.warta.pl/reklamacje.",

      "",
      "3. Usmeno:",
      "pozivom na broj +48 502 308 308 ili davanjem izjave na zapisnik u poslovnicama WARTA.",

      "",
      "Rok za razmatranje pritužbe",
      "WARTA razmatra pritužbu u roku od 30 dana od dana prijema i dostavlja odgovor u pisanoj ili elektronskoj formi, u zavisnosti od načina podnošenja pritužbe.",
      "U posebno složenim slučajevima rok može biti produžen do 60 dana, o čemu se podnosilac blagovremeno obaveštava.",

      "",
      "Pritužbe koje nisu povezane sa osiguravajućim pokrićem",
      "Ako se pritužba ne odnosi neposredno na osiguravajuće pokriće, klijent se može obratiti direktno agentu:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Adresa agenta: 01-473 Varšava, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Ako vam je potrebno osiguranje ili dodatne informacije, kontaktirajte nas — pružićemo informacije o uslovima osiguranja, potrebnoj dokumentaciji i daljem postupku ugovaranja.",
  },

  contact: {
    title: "Kontaktirajte nas",
    desc:
      "Odgovorićemo na pitanja o osiguranju, uslovima ugovaranja i potrebnoj dokumentaciji.",
  },
};

const SQ: AboutDictionary = {
  seo: {
    title: "Rreth nesh — SINEDIS",
    description:
      "Informacion mbi agjentin e sigurimeve, bazën ligjore të veprimtarisë, shoqërinë e sigurimeve dhe procedurën e paraqitjes së ankesave.",
  },

  hero: {
    title:
      "Agjenti i sigurimeve SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    subtitle:
      "Veprojmë në përputhje me legjislacionin për ndërmjetësimin në sigurime dhe u ofrojmë klientëve informacionin e detyrueshëm përpara lidhjes së kontratës së sigurimit.",
  },

  cards: [
    {
      title: "Kush jemi dhe si ju ndihmojmë",
      text:
        "Ndihmojmë në sigurimin për transportet dhe udhëtimet ndërkombëtare, ofrojmë këshillim mbi kushtet e sigurimit dhe kërkesat për hyrje në vende të ndryshme.",
    },
    {
      title: "Baza ligjore e veprimtarisë",
      text:
        "Veprojmë si agjent sigurimesh i regjistruar në Poloni dhe publikojmë informacionin e detyrueshëm në përputhje me legjislacionin për shpërndarjen e sigurimeve.",
    },
    {
      title: "Kushte transparente",
      text:
        "Para lëshimit të policës diskutojmë territorin e vlefshmërisë, periudhën e sigurimit, kufizimet, përjashtimet dhe procedurën e trajtimit të dëmeve.",
    },
    {
      title: "Procesi i lëshimit të policës",
      text:
        "Marrja e të dhënave → verifikimi i informacionit → dakordësimi i kushteve → pagesa → lëshimi i policës dhe dorëzimi i dokumenteve klientit.",
    },
  ],

  company: {
    title:
      "Informacion mbi ndërmjetësin e sigurimeve SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",

    lines: [
      "Në përputhje me nenin 22 të Ligjit të Polonisë të datës 15 dhjetor 2017 për shpërndarjen e sigurimeve, ofrojmë informacionin e mëposhtëm:",

      "",
      "Të dhënat e agjentit të sigurimeve",
      "Shoqëria: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Adresa e agjentit: 01-473 Varshavë, ul. Dobrzańskiego Hubala 22D",
      "Numri në regjistrin e agjentëve të sigurimeve: 11257162/A",
      "NIP: 5242953841",

      "",
      "Regjistri i agjentëve të sigurimeve administrohet nga Komisioni Polak i Mbikëqyrjes Financiare (KNF).",
      "Regjistrimi mund të verifikohet në faqen e internetit të KNF duke zgjedhur llojin e subjektit «Agent» dhe duke vendosur numrin e regjistrimit ose emrin e agjencisë.",

      "",
      "Fusha e veprimtarisë",
      "SINEDIS SP. Z O.O. ushtron veprimtari agjentore në shpërndarjen e sigurimeve në kuadër të Seksionit II «Sigurime të tjera personale dhe pasurore», sipas shtojcës së ligjit për veprimtarinë e sigurimit dhe risigurimit.",

      "",
      "Shoqëria e sigurimeve",
      "Agjenti vepron në emër të:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Adresa: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Linja telefonike dhe numri për njoftimin e dëmeve: +48 502 308 308 (kostoja e telefonatës varet nga tarifa e operatorit).",

      "",
      "Autorizimet e agjentit",
      "Autorizimet e agjentit konfirmohen me një dokument të veçantë.",
      "Fusha e autorizimeve mund të verifikohet gjithashtu në regjistrin e KNF duke zgjedhur agjentin dhe seksionin «Pełnomocnictwa».",

      "",
      "Shpërblimi i agjentit",
      "Në lidhje me lidhjen e kontratës së sigurimit, agjenti merr një komision të përfshirë në primin e sigurimit.",
      "Agjenti mund të përfitojë gjithashtu avantazhe të tjera financiare ose jofinanciare që lidhen me veprimtarinë e shpërndarjes së sigurimeve dhe pjesëmarrjen në programe të destinuara për agjentët e sigurimeve.",

      "",
      "Informacion mbi lidhjet kapitale",
      "Agjenti nuk zotëron aksione ose pjesëmarrje në kapitalin e TUiR „WARTA” S.A. që japin të paktën 10% të të drejtave të votës.",
      "Gjithashtu, TUiR „WARTA” S.A. nuk zotëron pjesëmarrje ose aksione në SINEDIS SP. Z O.O. që japin të paktën 10% të të drejtave të votës.",

      "",
      "Ankesat që lidhen me mbulimin e sigurimit",
      "Ankesat që kanë të bëjnë me mbulimin e sigurimit mund t’i drejtohen WARTA-s në mënyrat e mëposhtme:",

      "",
      "1. Me shkrim në letër:",
      "në adresën: skrytka pocztowa 1020, 00-950 Warszawa ose personalisht në çdo njësi të WARTA-s që ofron shërbim për klientët.",

      "",
      "2. Në formë elektronike:",
      "në adresën elektronike të dorëzimit AE:PL-12869-16149-GHRES-21 ose përmes formularit në faqen www.warta.pl/reklamacje.",

      "",
      "3. Verbalisht:",
      "në numrin +48 502 308 308 ose me procesverbal në njësitë e WARTA-s.",

      "",
      "Afati i shqyrtimit të ankesës",
      "WARTA e shqyrton ankesën brenda 30 ditëve nga data e marrjes së saj dhe jep përgjigje me shkrim ose në formë elektronike, në varësi të mënyrës së paraqitjes së ankesës.",
      "Në raste veçanërisht komplekse, afati mund të zgjatet deri në 60 ditë, për çka aplikuesi njoftohet paraprakisht.",

      "",
      "Ankesat që nuk lidhen me mbulimin e sigurimit",
      "Nëse pretendimi nuk ka të bëjë drejtpërdrejt me mbulimin e sigurimit, klienti mund t’i drejtohet drejtpërdrejt agjentit:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Adresa e agjentit: 01-473 Varshavë, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Nëse keni nevojë për sigurim ose informacion shtesë, kontaktoni me ne — do t’ju sqarojmë kushtet e sigurimit, listën e dokumenteve dhe procedurën e mëtejshme të aplikimit.",
  },

  contact: {
    title: "Na kontaktoni",
    desc:
      "Do t’u përgjigjemi pyetjeve tuaja lidhur me sigurimin, kushtet e aplikimit dhe dokumentet e nevojshme.",
  },
};

const MN: AboutDictionary = {
  seo: {
    title: "Бидний тухай — SINEDIS",
    description:
      "Даатгалын төлөөлөгч, үйл ажиллагааны эрх зүйн үндэс, даатгалын компани болон гомдол гаргах журмын талаарх мэдээлэл.",
  },

  hero: {
    title:
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ даатгалын төлөөлөгч",
    subtitle:
      "Бид даатгалын зуучлалын тухай хууль тогтоомжийн дагуу үйл ажиллагаа явуулж, даатгалын гэрээ байгуулахаас өмнө харилцагчдад заавал өгөх мэдээллийг хүргэдэг.",
  },

  cards: [
    {
      title: "Бид хэн бэ, ямар ашиг тустай вэ",
      text:
        "Олон улсын тээвэр болон аялалд зориулсан даатгалын бүтээгдэхүүн бүрдүүлэхэд тусалж, даатгалын нөхцөл болон янз бүрийн улс оронд нэвтрэх шаардлагын талаар зөвлөгөө өгдөг.",
    },
    {
      title: "Үйл ажиллагааны эрх зүйн үндэс",
      text:
        "Бид Польш улсад бүртгэлтэй даатгалын төлөөлөгчийн хувиар ажиллаж, даатгал түгээх тухай хууль тогтоомжийн дагуу заавал ил тод болгох мэдээллийг танилцуулдаг.",
    },
    {
      title: "Ил тод нөхцөл",
      text:
        "Даатгал бүрдүүлэхээс өмнө үйлчлэх газар нутаг, даатгалын хугацаа, хязгаарлалт, хамрахгүй тохиолдол болон хохирол барагдуулах журмыг дэлгэрэнгүй тайлбарладаг.",
    },
    {
      title: "Даатгал бүрдүүлэх үйл явц",
      text:
        "Мэдээлэл хүлээн авах → мэдээллийг шалгах → нөхцөлийг тохиролцох → төлбөр төлөх → даатгалын гэрчилгээ гаргаж, баримт бичгийг харилцагчид хүргэх.",
    },
  ],

  company: {
    title: "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ даатгалын зуучлагчийн мэдээлэл",

    lines: [
      "Польш Улсын Даатгалын түгээлтийн тухай 2017 оны 12 дугаар сарын 15-ны өдрийн хуулийн 22 дугаар зүйлд заасны дагуу дараах мэдээллийг хүргэж байна:",

      "",
      "Даатгалын төлөөлөгчийн мэдээлэл",
      "Компани: SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Төлөөлөгчийн хаяг: 01-473 Варшав, ul. Dobrzańskiego Hubala 22D",
      "Даатгалын төлөөлөгчдийн бүртгэлийн дугаар: 11257162/A",
      "NIP: 5242953841",

      "",
      "Даатгалын төлөөлөгчдийн бүртгэлийг Польшийн Санхүүгийн хяналтын комисс (KNF) хөтөлдөг.",
      "Бүртгэлийг шалгахын тулд KNF-ийн вэбсайтад орж, субъектын төрлөөс «Agent»-ийг сонгон бүртгэлийн дугаар эсвэл агентлагийн нэрийг оруулна.",

      "",
      "Үйл ажиллагааны хүрээ",
      "SINEDIS SP. Z O.O. нь Даатгал ба давхар даатгалын үйл ажиллагааны тухай хуулийн хавсралтад заасан II бүлэг «Хувийн болон эд хөрөнгийн бусад төрлийн даатгал»-ын хүрээнд даатгал түгээх төлөөлөгчийн үйл ажиллагаа эрхэлдэг.",

      "",
      "Даатгалын компани",
      "Төлөөлөгч дараах байгууллагын нэрийн өмнөөс үйл ажиллагаа явуулдаг:",
      "Towarzystwo Ubezpieczeń i Reasekuracji „WARTA” S.A.",
      "Хаяг: rondo Ignacego Daszyńskiego 1, 00-843 Warszawa",
      "Хохирлын талаар мэдэгдэх болон лавлах утас: +48 502 308 308 (дуудлагын төлбөр нь операторын тарифаас хамаарна).",

      "",
      "Төлөөлөгчийн эрх хэмжээ",
      "Төлөөлөгчийн эрх хэмжээг тусдаа баримт бичгээр баталгаажуулдаг.",
      "Эрх хэмжээний хамрах хүрээг KNF-ийн бүртгэлээс төлөөлөгчийг сонгон «Pełnomocnictwa» хэсгээс мөн шалгаж болно.",

      "",
      "Төлөөлөгчийн урамшуулал",
      "Даатгалын гэрээ байгуулагдсантай холбоотойгоор төлөөлөгч даатгалын шимтгэлд багтсан комиссын урамшуулал авдаг.",
      "Мөн төлөөлөгч даатгал түгээх үйл ажиллагаа болон даатгалын төлөөлөгчдөд зориулсан хөтөлбөрүүдэд оролцсонтой холбоотой бусад санхүүгийн болон санхүүгийн бус давуу талуудыг авч болно.",

      "",
      "Хувь эзэмшлийн холбоотой мэдээлэл",
      "Төлөөлөгч нь TUiR „WARTA” S.A.-ийн саналын эрхийн 10-аас доошгүй хувийг олгох хувьцаа эсвэл эзэмшлийг эзэмшдэггүй.",
      "Мөн TUiR „WARTA” S.A. нь SINEDIS SP. Z O.O.-ийн саналын эрхийн 10-аас доошгүй хувийг олгох хувьцаа эсвэл эзэмшлийг эзэмшдэггүй.",

      "",
      "Даатгалын хамгаалалттай холбоотой гомдол",
      "Даатгалын хамгаалалттай холбоотой гомдлыг WARTA-д дараах аргаар хүргүүлж болно:",

      "",
      "1. Цаасан хэлбэрээр бичгээр:",
      "хаяг: skrytka pocztowa 1020, 00-950 Warszawa, эсвэл харилцагч үйлчилдэг WARTA-ийн аль ч салбарт биечлэн.",

      "",
      "2. Цахим хэлбэрээр:",
      "AE:PL-12869-16149-GHRES-21 цахим хүргэлтийн хаягаар эсвэл www.warta.pl/reklamacje вэбсайт дахь маягтаар дамжуулан.",

      "",
      "3. Аман хэлбэрээр:",
      "+48 502 308 308 утсаар эсвэл WARTA-ийн салбаруудад тэмдэглэл үйлдүүлэн.",

      "",
      "Гомдол шийдвэрлэх хугацаа",
      "WARTA нь гомдлыг хүлээн авснаас хойш 30 хоногийн дотор шийдвэрлэж, гаргасан хэлбэрээс хамааран бичгээр эсвэл цахим хэлбэрээр хариу өгнө.",
      "Онцгой төвөгтэй тохиолдолд хугацааг 60 хоног хүртэл сунгаж болох бөгөөд энэ талаар өргөдөл гаргагчид урьдчилан мэдэгдэнэ.",

      "",
      "Даатгалын хамгаалалттай холбоогүй гомдол",
      "Хэрэв гомдол нь даатгалын хамгаалалттай шууд холбоогүй бол харилцагч дараах төлөөлөгчид шууд хандаж болно:",

      "",
      "SINEDIS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
      "Төлөөлөгчийн хаяг: 01-473 Варшав, ul. Dobrzańskiego Hubala 22D",
    ],

    note:
      "Хэрэв танд даатгал хэрэгтэй эсвэл нэмэлт мэдээлэл шаардлагатай бол бидэнтэй холбогдоно уу — бид даатгалын нөхцөл, шаардлагатай баримт бичгийн жагсаалт болон цаашдын бүрдүүлэлтийн журмыг тодруулж өгнө.",
  },

  contact: {
    title: "Бидэнтэй холбогдоорой",
    desc:
      "Даатгал, бүрдүүлэлтийн нөхцөл болон шаардлагатай баримт бичгийн талаархи асуултад хариулна.",
  },
};

export const aboutDictionary: Record<Lang, AboutDictionary> = {
  ru: RU,
  pl: PL,
  en: EN,
  be: BE,
  uz: UZ,
  ka: KA,
  kk: KK,
  tr: TR,
  fa: FA,
  hy: HY,
  ckb: CKB,
  kmr: KMR,
  ar: AR,

  uk: UK,
  az: AZ,
  he: HE,
  ro: RO,
  sr: SR,
  sq: SQ,
  mn: MN,
};

export function getAboutDictionary(lang: Lang): AboutDictionary {
  return aboutDictionary[lang] ?? RU;
}
