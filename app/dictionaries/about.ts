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
};

export function getAboutDictionary(lang: Lang): AboutDictionary {
  return aboutDictionary[lang] ?? RU;
}
