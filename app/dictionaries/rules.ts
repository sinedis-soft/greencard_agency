import type { Lang } from "@/app/dictionaries/header";

export type RulesDictionary = {
  pageTitle: string;
  subtitle: string;
  updatedAt: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
};

const ru: RulesDictionary = {
  pageTitle: "РЕГЛАМЕНТ",
  subtitle:
    "оказания электронных услуг и заключения договоров страхования на расстоянии через SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Определения",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS является страховым агентом, действующим от имени нескольких страховых компаний на основании предоставленных полномочий.",
        "Пользователь — физическое или юридическое лицо, использующее сервис SINEDIS или Contact Center.",
        "Сервис — интернет-платформа SINEDIS, доступная через сайты https://sinedis.pl и https://greencard.agency.",
        "Contact Center — телефонный сервис SINEDIS: +48 573581333.",
        "Консультант — сотрудник SINEDIS, выполняющий агентские действия.",
        "Услуги — электронные услуги, включая подготовку к заключению договора страхования, дистанционное заключение договоров и оплату страховой премии.",
        "Страховщик — страховая компания, от имени которой SINEDIS осуществляет агентскую деятельность.",
        "Страхователь — пользователь, заключающий договор страхования.",
        "Полис — документ, подтверждающий заключение договора страхования.",
        "OWU — общие условия страхования, предоставляемые пользователю до заключения договора.",
        "Политика конфиденциальности — правила обработки персональных данных и использования сервиса.",
      ],
    },

    {
      title: "§ 2. Общие положения",
      paragraphs: [
        "Настоящий Регламент определяет порядок оказания услуг электронным способом и заключения договоров страхования на расстоянии через SINEDIS.",
        "Регламент размещается бесплатно и доступен для скачивания, сохранения и печати.",
        "Пользователь обязан ознакомиться с Регламентом до начала использования услуг.",
        "Использование сервиса означает согласие пользователя с условиями Регламента, включая обработку персональных данных.",
        "К отношениям сторон применяются положения законодательства Польши, включая нормы о дистанционных услугах, страховом посредничестве, защите персональных данных и правах потребителей.",
        "SINEDIS действует как страховой агент, зарегистрированный в реестре KNF.",
        "Проверить регистрацию агента можно через реестр KNF: https://rpu.knf.gov.pl.",
        "Комиссионное вознаграждение SINEDIS включено в страховую премию и не создаёт для клиента дополнительных расходов.",
      ],
    },

    {
      title: "§ 3. Заключение и прекращение договора об оказании электронных услуг",
      paragraphs: [
        "Начало использования сервиса означает заключение договора об оказании электронных услуг без подписания отдельного документа.",
        "Для Contact Center началом оказания услуг считается начало разговора с консультантом.",
        "Пользователь может прекратить использование услуг в любое время.",
        "Договор об оказании электронных услуг прекращается автоматически после выхода пользователя из сервиса или завершения разговора с консультантом.",
      ],
    },

    {
      title: "§ 4. Общие правила оказания услуг",
      paragraphs: [
        "Сервис предназначен для получения информации о страховых продуктах, расчёта предложений, заключения договоров страхования и доступа к документам.",
        "Онлайн-сервис работает круглосуточно, Contact Center — по установленному графику.",
        "Пользователь обязан предоставлять достоверные, полные и актуальные данные.",
        "Пользователь несёт ответственность за последствия передачи ложной или неполной информации.",
        "SINEDIS вправе проверять предоставленные данные.",
        "В работе сервиса возможны технические перерывы, связанные с обслуживанием, обновлениями или резервным копированием.",
        "SINEDIS вправе временно ограничить доступ к сервису в случае угроз безопасности или нарушений Регламента.",
        "Запрещается передавать через сервис незаконный, вредоносный или оскорбительный контент.",
        "Использование сервиса является бесплатным, за исключением обязанности оплаты страховой премии по заключённым договорам.",
      ],
    },

    {
      title: "§ 5. Заключение договора страхования и оплата страховой премии",
      paragraphs: [
        "Пользователь самостоятельно выбирает страховой продукт, объём покрытия и страховую сумму.",
        "Перед заключением договора пользователь получает информацию о страховщике, стоимости страхования, условиях оплаты, сроках, праве отказа и порядке подачи жалоб.",
        "Условием заключения договора является корректное указание данных и принятие условий страхования.",
        "Пользователь обязан иметь законные основания для передачи данных третьих лиц.",
        "Договор страхования считается заключённым после выбора опции покупки и оплаты страховой премии.",
        "Оплата может производиться банковской картой или электронным переводом через TPAY.",
        "После заключения договора пользователь получает электронный полис.",
        "Пользователь вправе отказаться от договора страхования в течение 30 дней, если иное не предусмотрено законодательством или характером страхового продукта.",
        "Для краткосрочных страховых договоров право отказа может быть ограничено.",
      ],
    },

    {
      title: "§ 6. Политика конфиденциальности",
      paragraphs: [
        "SINEDIS уделяет особое внимание защите персональных данных пользователей.",
        "Администраторами данных могут выступать страховые компании и SINEDIS в зависимости от характера обработки.",
        "Предоставление персональных данных является добровольным, но необходимо для подготовки предложения и заключения договора страхования.",
        "Данные обрабатываются в соответствии с GDPR и законодательством Польши.",
        "Системные журналы и IP-адреса могут использоваться в технических и статистических целях.",
        "Сервис использует HTTPS и иные меры безопасности для защиты передаваемых данных.",
        "Телефонные разговоры с Contact Center могут записываться.",
        "Подробная политика cookie доступна на сайте SINEDIS.",
      ],
    },

    {
      title: "§ 7. Порядок рассмотрения жалоб",
      paragraphs: [
        "Пользователь вправе подать жалобу письменно, устно или в электронной форме.",
        "Жалобы могут направляться через форму на сайте или на e-mail: reklamacje@sinedis.pl.",
        "Жалоба должна содержать идентификационные данные пользователя, описание ситуации и требования.",
        "SINEDIS рассматривает жалобу в течение 30 дней, а в сложных случаях — не позднее 60 дней.",
        "Ответ предоставляется преимущественно в письменной форме.",
        "Пользователь вправе обратиться в финансовый омбудсмен, суд арбитража KNF или суд общей юрисдикции.",
      ],
    },

    {
      title: "§ 8. Вступление в силу и изменение Регламента",
      paragraphs: [
        "Регламент вступил в силу 21 ноября 2023 года.",
        "SINEDIS вправе изменять Регламент в любое время.",
        "Новая редакция Регламента публикуется на сайте и может направляться пользователям по e-mail.",
      ],
    },

    {
      title: "§ 9. Заключительные положения",
      paragraphs: [
        "К Регламенту и услугам SINEDIS применяется право Республики Польша.",
        "Споры рассматриваются судами общей юрисдикции либо иными предусмотренными законом способами урегулирования.",
        "Взаимодействие с пользователями может осуществляться на польском, белорусском или русском языке.",
        "Материалы сервиса защищены законодательством об авторском праве.",
      ],
    },

    {
      title: "Официальные данные",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Телефон Contact Center: +48 573581333",
        "",
        "Сайты:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const pl: RulesDictionary = {
  pageTitle: "REGULAMIN",
  subtitle:
    "świadczenia usług drogą elektroniczną oraz zawierania umów ubezpieczenia na odległość za pośrednictwem SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Definicje",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS jest agentem ubezpieczeniowym działającym w imieniu kilku zakładów ubezpieczeń na podstawie udzielonych pełnomocnictw.",
        "Użytkownik — osoba fizyczna lub prawna korzystająca z serwisu SINEDIS lub Contact Center.",
        "Serwis — platforma internetowa SINEDIS dostępna pod adresami https://sinedis.pl oraz https://greencard.agency.",
        "Contact Center — telefoniczny serwis SINEDIS: +48 573581333.",
        "Konsultant — pracownik SINEDIS wykonujący czynności agencyjne.",
        "Usługi — usługi świadczone drogą elektroniczną, obejmujące przygotowanie do zawarcia umowy ubezpieczenia, zawieranie umów na odległość oraz opłacanie składki ubezpieczeniowej.",
        "Ubezpieczyciel — zakład ubezpieczeń, w imieniu którego SINEDIS wykonuje czynności agencyjne.",
        "Ubezpieczający — użytkownik zawierający umowę ubezpieczenia.",
        "Polisa — dokument potwierdzający zawarcie umowy ubezpieczenia.",
        "OWU — ogólne warunki ubezpieczenia udostępniane użytkownikowi przed zawarciem umowy.",
        "Polityka prywatności — zasady przetwarzania danych osobowych oraz korzystania z serwisu.",
      ],
    },

    {
      title: "§ 2. Postanowienia ogólne",
      paragraphs: [
        "Niniejszy Regulamin określa zasady świadczenia usług drogą elektroniczną oraz zawierania umów ubezpieczenia na odległość za pośrednictwem SINEDIS.",
        "Regulamin udostępniany jest nieodpłatnie i może zostać pobrany, zapisany oraz wydrukowany.",
        "Użytkownik zobowiązany jest zapoznać się z Regulaminem przed rozpoczęciem korzystania z usług.",
        "Korzystanie z serwisu oznacza akceptację warunków Regulaminu, w tym zasad przetwarzania danych osobowych.",
        "Do relacji pomiędzy stronami stosuje się przepisy prawa polskiego, w szczególności dotyczące usług świadczonych na odległość, pośrednictwa ubezpieczeniowego, ochrony danych osobowych oraz praw konsumenta.",
        "SINEDIS działa jako agent ubezpieczeniowy wpisany do rejestru KNF.",
        "Wpis agenta można zweryfikować w rejestrze KNF: https://rpu.knf.gov.pl.",
        "Wynagrodzenie prowizyjne SINEDIS jest uwzględnione w składce ubezpieczeniowej i nie powoduje dodatkowych kosztów po stronie klienta.",
      ],
    },

    {
      title:
        "§ 3. Zawarcie i rozwiązanie umowy o świadczenie usług elektronicznych",
      paragraphs: [
        "Rozpoczęcie korzystania z serwisu oznacza zawarcie umowy o świadczenie usług drogą elektroniczną bez konieczności podpisywania odrębnego dokumentu.",
        "W przypadku Contact Center rozpoczęcie świadczenia usług następuje z chwilą rozpoczęcia rozmowy z konsultantem.",
        "Użytkownik może w każdej chwili zaprzestać korzystania z usług.",
        "Umowa o świadczenie usług drogą elektroniczną wygasa automatycznie po opuszczeniu serwisu przez użytkownika lub zakończeniu rozmowy z konsultantem.",
      ],
    },

    {
      title: "§ 4. Ogólne zasady świadczenia usług",
      paragraphs: [
        "Serwis przeznaczony jest do uzyskiwania informacji o produktach ubezpieczeniowych, kalkulacji ofert, zawierania umów ubezpieczenia oraz dostępu do dokumentów.",
        "Serwis internetowy działa całodobowo, natomiast Contact Center funkcjonuje zgodnie z ustalonym harmonogramem.",
        "Użytkownik zobowiązany jest podawać dane prawdziwe, kompletne i aktualne.",
        "Użytkownik ponosi odpowiedzialność za skutki przekazania danych nieprawdziwych lub niekompletnych.",
        "SINEDIS ma prawo weryfikować przekazane dane.",
        "W działaniu serwisu mogą występować przerwy techniczne związane z konserwacją, aktualizacjami lub wykonywaniem kopii zapasowych.",
        "SINEDIS może czasowo ograniczyć dostęp do serwisu w przypadku zagrożeń bezpieczeństwa lub naruszenia Regulaminu.",
        "Zabronione jest przekazywanie za pośrednictwem serwisu treści niezgodnych z prawem, szkodliwych lub obraźliwych.",
        "Korzystanie z serwisu jest bezpłatne, z wyjątkiem obowiązku opłacenia składki wynikającej z zawartej umowy ubezpieczenia.",
      ],
    },

    {
      title:
        "§ 5. Zawarcie umowy ubezpieczenia i opłata składki",
      paragraphs: [
        "Użytkownik samodzielnie wybiera produkt ubezpieczeniowy, zakres ochrony oraz sumę ubezpieczenia.",
        "Przed zawarciem umowy użytkownik otrzymuje informacje o ubezpieczycielu, kosztach ubezpieczenia, warunkach płatności, terminach, prawie odstąpienia oraz sposobie składania reklamacji.",
        "Warunkiem zawarcia umowy jest prawidłowe podanie danych oraz akceptacja warunków ubezpieczenia.",
        "Użytkownik zobowiązany jest posiadać podstawę prawną do przekazywania danych osób trzecich.",
        "Umowa ubezpieczenia zostaje zawarta po wyborze opcji zakupu oraz opłaceniu składki ubezpieczeniowej.",
        "Płatność może być realizowana kartą płatniczą lub przelewem elektronicznym za pośrednictwem TPAY.",
        "Po zawarciu umowy użytkownik otrzymuje polisę elektroniczną.",
        "Użytkownik ma prawo odstąpić od umowy ubezpieczenia w terminie 30 dni, chyba że przepisy prawa lub charakter produktu ubezpieczeniowego stanowią inaczej.",
        "W przypadku krótkoterminowych umów ubezpieczenia prawo odstąpienia może być ograniczone.",
      ],
    },

    {
      title: "§ 6. Polityka prywatności",
      paragraphs: [
        "SINEDIS przykłada szczególną wagę do ochrony danych osobowych użytkowników.",
        "Administratorami danych mogą być zakłady ubezpieczeń oraz SINEDIS — w zależności od charakteru przetwarzania.",
        "Podanie danych osobowych jest dobrowolne, jednak niezbędne do przygotowania oferty oraz zawarcia umowy ubezpieczenia.",
        "Dane przetwarzane są zgodnie z RODO oraz przepisami prawa polskiego.",
        "Logi systemowe oraz adresy IP mogą być wykorzystywane w celach technicznych i statystycznych.",
        "Serwis wykorzystuje HTTPS oraz inne środki bezpieczeństwa służące ochronie przesyłanych danych.",
        "Rozmowy telefoniczne z Contact Center mogą być nagrywane.",
        "Szczegółowa polityka plików cookie dostępna jest na stronie internetowej SINEDIS.",
      ],
    },

    {
      title: "§ 7. Procedura reklamacyjna",
      paragraphs: [
        "Użytkownik ma prawo złożyć reklamację w formie pisemnej, ustnej lub elektronicznej.",
        "Reklamacje mogą być składane za pośrednictwem formularza na stronie internetowej lub na adres e-mail: reklamacje@sinedis.pl.",
        "Reklamacja powinna zawierać dane identyfikacyjne użytkownika, opis sytuacji oraz żądanie.",
        "SINEDIS rozpatruje reklamację w terminie 30 dni, a w szczególnie skomplikowanych przypadkach — nie później niż w terminie 60 dni.",
        "Odpowiedź udzielana jest przede wszystkim w formie pisemnej.",
        "Użytkownik ma prawo zwrócić się do Rzecznika Finansowego, Sądu Polubownego przy KNF lub sądu powszechnego.",
      ],
    },

    {
      title: "§ 8. Wejście w życie i zmiany Regulaminu",
      paragraphs: [
        "Regulamin wszedł w życie dnia 21 listopada 2023 roku.",
        "SINEDIS ma prawo zmieniać Regulamin w dowolnym czasie.",
        "Nowa wersja Regulaminu publikowana jest na stronie internetowej i może zostać przesłana użytkownikom drogą e-mailową.",
      ],
    },

    {
      title: "§ 9. Postanowienia końcowe",
      paragraphs: [
        "Do Regulaminu oraz usług SINEDIS stosuje się prawo Rzeczypospolitej Polskiej.",
        "Spory rozstrzygane są przez sądy powszechne lub w inny sposób przewidziany przepisami prawa.",
        "Komunikacja z użytkownikami może odbywać się w języku polskim, białoruskim lub rosyjskim.",
        "Materiały serwisu podlegają ochronie na podstawie przepisów prawa autorskiego.",
      ],
    },

    {
      title: "Dane oficjalne",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Telefon Contact Center: +48 573581333",
        "",
        "Strony internetowe:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const en: RulesDictionary = {
  pageTitle: "TERMS AND CONDITIONS",
  subtitle:
    "for the provision of electronic services and conclusion of distance insurance agreements through SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Definitions",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warsaw, Poland, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS is an insurance agent acting on behalf of multiple insurance undertakings under granted powers of attorney.",
        "User — an individual or legal entity using the SINEDIS service or Contact Center.",
        "Service — the SINEDIS online platform available via https://sinedis.pl and https://greencard.agency.",
        "Contact Center — the SINEDIS telephone service: +48 573581333.",
        "Consultant — a SINEDIS employee performing insurance agency activities.",
        "Services — electronic services including preparation for the conclusion of insurance agreements, remote conclusion of agreements, and payment of insurance premiums.",
        "Insurer — the insurance undertaking on whose behalf SINEDIS performs agency activities.",
        "Policyholder — the user concluding an insurance agreement.",
        "Policy — a document confirming the conclusion of an insurance agreement.",
        "General Terms and Conditions of Insurance (GTCI) — insurance conditions provided to the user before conclusion of the agreement.",
        "Privacy Policy — rules governing the processing of personal data and use of the service.",
      ],
    },

    {
      title: "§ 2. General Provisions",
      paragraphs: [
        "These Terms and Conditions define the rules for the provision of electronic services and conclusion of distance insurance agreements through SINEDIS.",
        "The Terms and Conditions are provided free of charge and are available for download, storage, and printing.",
        "The user is required to review the Terms and Conditions before using the services.",
        "Use of the service constitutes acceptance of these Terms and Conditions, including consent to the processing of personal data.",
        "The relationship between the parties is governed by Polish law, including regulations concerning distance services, insurance distribution, personal data protection, and consumer rights.",
        "SINEDIS acts as an insurance agent registered in the KNF register.",
        "The agent’s registration may be verified via the KNF register: https://rpu.knf.gov.pl.",
        "The commission remuneration of SINEDIS is included in the insurance premium and does not create additional costs for the client.",
      ],
    },

    {
      title:
        "§ 3. Conclusion and Termination of the Electronic Services Agreement",
      paragraphs: [
        "Commencement of service use constitutes conclusion of an agreement for the provision of electronic services without the need to sign a separate document.",
        "For the Contact Center, the provision of services begins upon commencement of the conversation with the consultant.",
        "The user may discontinue the use of services at any time.",
        "The agreement for electronic services terminates automatically once the user leaves the service or the conversation with the consultant ends.",
      ],
    },

    {
      title: "§ 4. General Rules for the Provision of Services",
      paragraphs: [
        "The service is intended for obtaining information about insurance products, calculating quotations, concluding insurance agreements, and accessing documents.",
        "The online service operates 24/7, while the Contact Center operates according to its working schedule.",
        "The user is required to provide accurate, complete, and up-to-date information.",
        "The user is responsible for the consequences of providing false or incomplete information.",
        "SINEDIS has the right to verify the information provided.",
        "Technical interruptions related to maintenance, updates, or backups may occur.",
        "SINEDIS may temporarily restrict access to the service in the event of security threats or violations of these Terms and Conditions.",
        "Transmission of unlawful, harmful, or offensive content through the service is prohibited.",
        "Use of the service is free of charge, except for the obligation to pay insurance premiums under concluded insurance agreements.",
      ],
    },

    {
      title:
        "§ 5. Conclusion of Insurance Agreements and Payment of Premiums",
      paragraphs: [
        "The user independently selects the insurance product, scope of coverage, and insured sum.",
        "Before concluding the agreement, the user receives information regarding the insurer, insurance cost, payment conditions, deadlines, withdrawal rights, and complaint procedures.",
        "A condition for concluding the agreement is the correct provision of data and acceptance of the insurance conditions.",
        "The user must have legal grounds for providing personal data of third parties.",
        "The insurance agreement is deemed concluded after selecting the purchase option and paying the insurance premium.",
        "Payment may be made by bank card or electronic transfer through TPAY.",
        "After conclusion of the agreement, the user receives an electronic insurance policy.",
        "The user has the right to withdraw from the insurance agreement within 30 days unless otherwise provided by law or by the nature of the insurance product.",
        "For short-term insurance agreements, the right of withdrawal may be limited.",
      ],
    },

    {
      title: "§ 6. Privacy Policy",
      paragraphs: [
        "SINEDIS pays particular attention to the protection of users’ personal data.",
        "Depending on the nature of processing, the data controllers may be insurance undertakings and/or SINEDIS.",
        "Providing personal data is voluntary but necessary for preparing quotations and concluding insurance agreements.",
        "Data is processed in accordance with GDPR and Polish legislation.",
        "System logs and IP addresses may be used for technical and statistical purposes.",
        "The service uses HTTPS and other security measures to protect transmitted data.",
        "Telephone conversations with the Contact Center may be recorded.",
        "Detailed cookie policy information is available on the SINEDIS website.",
      ],
    },

    {
      title: "§ 7. Complaint Handling Procedure",
      paragraphs: [
        "The user may submit complaints in writing, orally, or electronically.",
        "Complaints may be submitted through the website form or by e-mail to: reklamacje@sinedis.pl.",
        "The complaint should include identification details of the user, a description of the situation, and the request.",
        "SINEDIS reviews complaints within 30 days and, in complex cases, no later than 60 days.",
        "Responses are provided primarily in written form.",
        "The user has the right to обратиться to the financial ombudsman, the KNF arbitration court, or a court of general jurisdiction.",
      ],
    },

    {
      title: "§ 8. Entry into Force and Amendments",
      paragraphs: [
        "These Terms and Conditions entered into force on 21 November 2023.",
        "SINEDIS may amend these Terms and Conditions at any time.",
        "The updated version of the Terms and Conditions is published on the website and may also be sent to users by e-mail.",
      ],
    },

    {
      title: "§ 9. Final Provisions",
      paragraphs: [
        "The laws of the Republic of Poland apply to these Terms and Conditions and the services provided by SINEDIS.",
        "Disputes are resolved by courts of general jurisdiction or by other dispute resolution methods provided by law.",
        "Communication with users may be conducted in Polish, Belarusian, or Russian.",
        "Service materials are protected by copyright law.",
      ],
    },

    {
      title: "Official Information",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warsaw, Poland",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Contact Center phone: +48 573581333",
        "",
        "Websites:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const be: RulesDictionary = {
  pageTitle: "РЭГЛАМЕНТ",
  subtitle:
    "аказання электронных паслуг і заключэння дагавораў страхавання на адлегласці праз SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Вызначэнні",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS з'яўляецца страхавым агентам, які дзейнічае ад імя некалькіх страхавых кампаній на падставе прадастаўленых паўнамоцтваў.",
        "Карыстальнік — фізічная або юрыдычная асоба, якая выкарыстоўвае сэрвіс SINEDIS або Contact Center.",
        "Сэрвіс — інтэрнэт-платформа SINEDIS, даступная праз сайты https://sinedis.pl і https://greencard.agency.",
        "Contact Center — тэлефонны сэрвіс SINEDIS: +48 573581333.",
        "Кансультант — супрацоўнік SINEDIS, які выконвае агентскія дзеянні.",
        "Паслугі — электронныя паслугі, уключаючы падрыхтоўку да заключэння дагавора страхавання, дыстанцыйнае заключэнне дагавораў і аплату страхавой прэміі.",
        "Страхоўшчык — страхавая кампанія, ад імя якой SINEDIS ажыццяўляе агентскую дзейнасць.",
        "Страхавальнік — карыстальнік, які заключае дагавор страхавання.",
        "Поліс — дакумент, які пацвярджае заключэнне дагавора страхавання.",
        "OWU — агульныя ўмовы страхавання, якія прадастаўляюцца карыстальніку да заключэння дагавора.",
        "Палітыка канфідэнцыяльнасці — правілы апрацоўкі персанальных даных і выкарыстання сэрвісу.",
      ],
    },

    {
      title: "§ 2. Агульныя палажэнні",
      paragraphs: [
        "Дадзены Рэгламент вызначае парадак аказання паслуг электронным спосабам і заключэння дагавораў страхавання на адлегласці праз SINEDIS.",
        "Рэгламент размяшчаецца бясплатна і даступны для загрузкі, захавання і друку.",
        "Карыстальнік абавязаны азнаёміцца з Рэгламентам да пачатку выкарыстання паслуг.",
        "Выкарыстанне сэрвісу азначае згоду карыстальніка з умовамі Рэгламенту, уключаючы апрацоўку персанальных даных.",
        "Да адносін бакоў прымяняюцца нормы заканадаўства Польшчы, уключаючы нормы аб дыстанцыйных паслугах, страхавым пасярэдніцтве, абароне персанальных даных і правах спажыўцоў.",
        "SINEDIS дзейнічае як страхавы агент, зарэгістраваны ў рэестры KNF.",
        "Праверыць рэгістрацыю агента можна праз рэестр KNF: https://rpu.knf.gov.pl.",
        "Камісійнае ўзнагароджанне SINEDIS уключана ў страхавую прэмію і не стварае для кліента дадатковых выдаткаў.",
      ],
    },

    {
      title:
        "§ 3. Заключэнне і спыненне дагавора аб аказанні электронных паслуг",
      paragraphs: [
        "Пачатак выкарыстання сэрвісу азначае заключэнне дагавора аб аказанні электронных паслуг без падпісання асобнага дакумента.",
        "Для Contact Center пачаткам аказання паслуг лічыцца пачатак размовы з кансультантам.",
        "Карыстальнік можа спыніць выкарыстанне паслуг у любы момант.",
        "Дагавор аб аказанні электронных паслуг спыняецца аўтаматычна пасля выхаду карыстальніка з сэрвісу або завяршэння размовы з кансультантам.",
      ],
    },

    {
      title: "§ 4. Агульныя правілы аказання паслуг",
      paragraphs: [
        "Сэрвіс прызначаны для атрымання інфармацыі аб страхавых прадуктах, разліку прапаноў, заключэння дагавораў страхавання і доступу да дакументаў.",
        "Анлайн-сэрвіс працуе кругласутачна, Contact Center — па ўстаноўленым графіку.",
        "Карыстальнік абавязаны прадастаўляць дакладныя, поўныя і актуальныя даныя.",
        "Карыстальнік нясе адказнасць за наступствы перадачы ілжывай або няпоўнай інфармацыі.",
        "SINEDIS мае права правяраць прадастаўленыя даныя.",
        "У працы сэрвісу магчымыя тэхнічныя перапынкі, звязаныя з абслугоўваннем, абнаўленнямі або рэзервовым капіраваннем.",
        "SINEDIS мае права часова абмежаваць доступ да сэрвісу ў выпадку пагроз бяспецы або парушэнняў Рэгламенту.",
        "Забараняецца перадаваць праз сэрвіс незаконны, шкоднасны або абразлівы кантэнт.",
        "Выкарыстанне сэрвісу з'яўляецца бясплатным, за выключэннем абавязку аплаты страхавой прэміі па заключаных дагаворах.",
      ],
    },

    {
      title:
        "§ 5. Заключэнне дагавора страхавання і аплата страхавой прэміі",
      paragraphs: [
        "Карыстальнік самастойна выбірае страхавы прадукт, аб'ём пакрыцця і страхавую суму.",
        "Да заключэння дагавора карыстальнік атрымлівае інфармацыю аб страхоўшчыку, кошце страхавання, умовах аплаты, тэрмінах, праве адмовы і парадку падачы скаргаў.",
        "Умовай заключэння дагавора з'яўляецца карэктнае ўказанне даных і прыняцце ўмоў страхавання.",
        "Карыстальнік абавязаны мець законныя падставы для перадачы даных трэціх асоб.",
        "Дагавор страхавання лічыцца заключаным пасля выбару опцыі пакупкі і аплаты страхавой прэміі.",
        "Аплата можа ажыццяўляцца банкаўскай карткай або электронным пераводам праз TPAY.",
        "Пасля заключэння дагавора карыстальнік атрымлівае электронны поліс.",
        "Карыстальнік мае права адмовіцца ад дагавора страхавання на працягу 30 дзён, калі іншае не прадугледжана заканадаўствам або характарам страхавога прадукту.",
        "Для кароткатэрміновых страхавых дагавораў права адмовы можа быць абмежавана.",
      ],
    },

    {
      title: "§ 6. Палітыка канфідэнцыяльнасці",
      paragraphs: [
        "SINEDIS надае асаблівую ўвагу абароне персанальных даных карыстальнікаў.",
        "Адміністратарамі даных могуць выступаць страхавыя кампаніі і SINEDIS у залежнасці ад характару апрацоўкі.",
        "Прадастаўленне персанальных даных з'яўляецца добраахвотным, але неабходным для падрыхтоўкі прапановы і заключэння дагавора страхавання.",
        "Даныя апрацоўваюцца ў адпаведнасці з GDPR і заканадаўствам Польшчы.",
        "Сістэмныя журналы і IP-адрасы могуць выкарыстоўвацца ў тэхнічных і статыстычных мэтах.",
        "Сэрвіс выкарыстоўвае HTTPS і іншыя меры бяспекі для абароны перадаваемых даных.",
        "Тэлефонныя размовы з Contact Center могуць запісвацца.",
        "Падрабязная палітыка cookie даступная на сайце SINEDIS.",
      ],
    },

    {
      title: "§ 7. Парадак разгляду скаргаў",
      paragraphs: [
        "Карыстальнік мае права падаць скаргу ў пісьмовай, вуснай або электроннай форме.",
        "Скаргі могуць накіроўвацца праз форму на сайце або на e-mail: reklamacje@sinedis.pl.",
        "Скарга павінна ўтрымліваць ідэнтыфікацыйныя даныя карыстальніка, апісанне сітуацыі і патрабаванні.",
        "SINEDIS разглядае скаргу на працягу 30 дзён, а ў складаных выпадках — не пазней за 60 дзён.",
        "Адказ прадастаўляецца пераважна ў пісьмовай форме.",
        "Карыстальнік мае права звярнуцца да фінансавага амбудсмена, арбітражнага суда KNF або суда агульнай юрысдыкцыі.",
      ],
    },

    {
      title:
        "§ 8. Уступленне ў сілу і змяненне Рэгламенту",
      paragraphs: [
        "Рэгламент уступіў у сілу 21 лістапада 2023 года.",
        "SINEDIS мае права змяняць Рэгламент у любы час.",
        "Новая рэдакцыя Рэгламенту публікуецца на сайце і можа накіроўвацца карыстальнікам па e-mail.",
      ],
    },

    {
      title: "§ 9. Заключныя палажэнні",
      paragraphs: [
        "Да Рэгламенту і паслуг SINEDIS прымяняецца права Рэспублікі Польшча.",
        "Спрэчкі разглядаюцца судамі агульнай юрысдыкцыі або іншымі прадугледжанымі законам спосабамі ўрэгулявання.",
        "Узаемадзеянне з карыстальнікамі можа ажыццяўляцца на польскай, беларускай або рускай мовах.",
        "Матэрыялы сэрвісу абаронены заканадаўствам аб аўтарскім праве.",
      ],
    },

    {
      title: "Афіцыйныя даныя",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Тэлефон Contact Center: +48 573581333",
        "",
        "Сайты:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const uz: RulesDictionary = {
  pageTitle: "REGLAMENT",

  subtitle:
    "SINEDIS Sp. z o.o. orqali elektron xizmatlar ko‘rsatish va masofadan sug‘urta shartnomalarini tuzish tartibi",

  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Ta’riflar",

      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS berilgan vakolatlar asosida bir nechta sug‘urta kompaniyalari nomidan faoliyat yurituvchi sug‘urta agentidir.",
        "Foydalanuvchi — SINEDIS servisi yoki Contact Center xizmatidan foydalanuvchi jismoniy yoki yuridik shaxs.",
        "Servis — https://sinedis.pl va https://greencard.agency saytlarida mavjud bo‘lgan SINEDIS internet-platformasi.",
        "Contact Center — SINEDIS telefon xizmati: +48 573581333.",
        "Konsultant — agentlik faoliyatini amalga oshiruvchi SINEDIS xodimi.",
        "Xizmatlar — sug‘urta shartnomasini tuzishga tayyorgarlik, masofadan sug‘urta shartnomalarini tuzish va sug‘urta mukofotini to‘lashni o‘z ichiga olgan elektron xizmatlar.",
        "Sug‘urtalovchi — SINEDIS agentlik faoliyatini amalga oshirayotgan sug‘urta kompaniyasi.",
        "Sug‘urta qildiruvchi — sug‘urta shartnomasini tuzayotgan foydalanuvchi.",
        "Polis — sug‘urta shartnomasi tuzilganligini tasdiqlovchi hujjat.",
        "OWU — foydalanuvchiga shartnoma tuzilishidan oldin taqdim etiladigan umumiy sug‘urta shartlari.",
        "Maxfiylik siyosati — shaxsiy ma’lumotlarni qayta ishlash va servisdan foydalanish qoidalari.",
      ],
    },

    {
      title: "§ 2. Umumiy qoidalar",

      paragraphs: [
        "Mazkur Reglament SINEDIS orqali elektron xizmatlar ko‘rsatish va masofadan sug‘urta shartnomalarini tuzish tartibini belgilaydi.",
        "Reglament bepul joylashtiriladi va yuklab olish, saqlash hamda chop etish uchun ochiqdir.",
        "Foydalanuvchi xizmatlardan foydalanishni boshlashdan oldin Reglament bilan tanishishi shart.",
        "Servisdan foydalanish foydalanuvchining Reglament shartlariga, shu jumladan shaxsiy ma’lumotlarni qayta ishlashga roziligini anglatadi.",
        "Tomonlar munosabatlariga Polsha qonunchiligi, jumladan masofaviy xizmatlar, sug‘urta vositachiligi, shaxsiy ma’lumotlarni himoya qilish va iste’molchilar huquqlari to‘g‘risidagi normalar qo‘llaniladi.",
        "SINEDIS KNF reyestrida ro‘yxatdan o‘tgan sug‘urta agenti sifatida faoliyat yuritadi.",
        "Agent ro‘yxatdan o‘tganligini KNF reyestri orqali tekshirish mumkin: https://rpu.knf.gov.pl.",
        "SINEDIS’ning komission mukofoti sug‘urta mukofotiga kiritilgan bo‘lib, mijoz uchun qo‘shimcha xarajatlarni keltirib chiqarmaydi.",
      ],
    },

    {
      title:
        "§ 3. Elektron xizmatlar ko‘rsatish shartnomasini tuzish va bekor qilish",

      paragraphs: [
        "Servisdan foydalanishni boshlash alohida hujjat imzolamasdan elektron xizmatlar ko‘rsatish shartnomasi tuzilganligini anglatadi.",
        "Contact Center uchun xizmat ko‘rsatish boshlanishi konsultant bilan suhbat boshlangan payt hisoblanadi.",
        "Foydalanuvchi istalgan vaqtda xizmatlardan foydalanishni to‘xtatishi mumkin.",
        "Elektron xizmatlar ko‘rsatish shartnomasi foydalanuvchi servisdan chiqqanidan yoki konsultant bilan suhbat tugaganidan so‘ng avtomatik ravishda bekor qilinadi.",
      ],
    },

    {
      title:
        "§ 4. Xizmatlar ko‘rsatishning umumiy qoidalari",

      paragraphs: [
        "Servis sug‘urta mahsulotlari haqida ma’lumot olish, takliflarni hisoblash, sug‘urta shartnomalarini tuzish va hujjatlarga kirish uchun mo‘ljallangan.",
        "Onlayn servis sutka davomida ishlaydi, Contact Center esa belgilangan jadval asosida faoliyat yuritadi.",
        "Foydalanuvchi ishonchli, to‘liq va dolzarb ma’lumotlarni taqdim etishi shart.",
        "Foydalanuvchi noto‘g‘ri yoki to‘liq bo‘lmagan ma’lumotlarni taqdim etish oqibatlari uchun javobgar hisoblanadi.",
        "SINEDIS taqdim etilgan ma’lumotlarni tekshirish ҳуқуқига ega.",
        "Servis faoliyatida texnik xizmat ko‘rsatish, yangilanishlar yoki zaxira nusxalash bilan bog‘liq texnik uzilishlar bo‘lishi mumkin.",
        "SINEDIS xavfsizlikka tahdid yoki Reglament buzilgan hollarda servisga kirishni vaqtincha cheklash ҳуқуқига ega.",
        "Servis orqali noqonuniy, zararli yoki haqoratli kontentni yuborish taqiqlanadi.",
        "Servisdan foydalanish bepul hisoblanadi, tuzilgan shartnomalar bo‘yicha sug‘urta mukofotini to‘lash majburiyati bundan mustasno.",
      ],
    },

    {
      title:
        "§ 5. Sug‘urta shartnomasini tuzish va sug‘urta mukofotini to‘lash",

      paragraphs: [
        "Foydalanuvchi sug‘urta mahsuloti, qoplama hajmi va sug‘urta summasini mustaqil ravishda tanlaydi.",
        "Shartnoma tuzilishidan oldin foydalanuvchiga sug‘urtalovchi, sug‘urta qiymati, to‘lov shartlari, muddatlar, bekor qilish ҳуқуқи va shikoyat yuborish tartibi haqida ma’lumot beriladi.",
        "Shartnoma tuzilishining sharti ma’lumotlarni to‘g‘ri ko‘rsatish va sug‘urta shartlarini qabul qilish hisoblanadi.",
        "Foydalanuvchi uchinchi shaxslar ma’lumotlarini uzatish uchun qonuniy asosga ega bo‘lishi shart.",
        "Sug‘urta shartnomasi xarid qilish opsiyasi tanlanib, sug‘urta mukofoti to‘langanidan so‘ng tuzilgan hisoblanadi.",
        "To‘lov bank kartasi yoki TPAY orqali elektron o‘tkazma yordamida amalga oshirilishi mumkin.",
        "Shartnoma tuzilgandan so‘ng foydalanuvchi elektron polisni oladi.",
        "Agar qonunchilik yoki sug‘urta mahsulotining xususiyati boshqacha nazarda tutmagan bo‘lsa, foydalanuvchi sug‘urta shartnomasidan 30 kun ichida voz kechish ҳуқуқига ega.",
        "Qisqa muddatli sug‘urta shartnomalari uchun voz kechish ҳуқуқи cheklanishi mumkin.",
      ],
    },

    {
      title: "§ 6. Maxfiylik siyosati",

      paragraphs: [
        "SINEDIS foydalanuvchilarning shaxsiy ma’lumotlarini himoya qilishga alohida e’tibor qaratadi.",
        "Qayta ishlash xususiyatiga qarab ma’lumotlar administratori sifatida sug‘urta kompaniyalari va SINEDIS ishtirok etishi mumkin.",
        "Shaxsiy ma’lumotlarni taqdim etish ixtiyoriy hisoblanadi, biroq sug‘urta taklifini tayyorlash va shartnoma tuzish uchun zarurdir.",
        "Ma’lumotlar GDPR va Polsha qonunchiligiga muvofiq qayta ishlanadi.",
        "Tizim jurnallari va IP-manzillar texnik hamda statistik maqsadlarda ishlatilishi mumkin.",
        "Servis uzatilayotgan ma’lumotlarni himoya qilish uchun HTTPS va boshqa xavfsizlik choralaridan foydalanadi.",
        "Contact Center bilan telefon suhbatlari yozib olinishi mumkin.",
        "Cookie-fayllar siyosatining batafsil tavsifi SINEDIS saytida mavjud.",
      ],
    },

    {
      title: "§ 7. Shikoyatlarni ko‘rib chiqish tartibi",

      paragraphs: [
        "Foydalanuvchi shikoyatni yozma, og‘zaki yoki elektron shaklda yuborish ҳуқуқига ega.",
        "Shikoyatlar sayt formasi yoki reklamacje@sinedis.pl elektron pochta manzili orqali yuborilishi mumkin.",
        "Shikoyatda foydalanuvchining identifikatsion ma’lumotlari, vaziyat tavsifi va talablar ko‘rsatilishi kerak.",
        "SINEDIS shikoyatni 30 kun ichida, murakkab hollarda esa 60 kundan kechiktirmay ko‘rib chiqadi.",
        "Javob asosan yozma shaklda taqdim etiladi.",
        "Foydalanuvchi moliyaviy ombudsman, KNF arbitraj sudi yoki umumiy yurisdiksiya sudiga murojaat qilish ҳуқуқига ega.",
      ],
    },

    {
      title:
        "§ 8. Reglamentning kuchga kirishi va o‘zgartirilishi",

      paragraphs: [
        "Reglament 2023-yil 21-noyabrda kuchga kirgan.",
        "SINEDIS istalgan vaqtda Reglamentni o‘zgartirish ҳуқуқига ega.",
        "Reglamentning yangi tahriri saytda e’lon qilinadi va foydalanuvchilarga elektron pochta orqali yuborilishi mumkin.",
      ],
    },

    {
      title: "§ 9. Yakuniy qoidalar",

      paragraphs: [
        "Reglament va SINEDIS xizmatlariga Polsha Respublikasi qonunchiligi qo‘llaniladi.",
        "Nizolar umumiy yurisdiksiya sudlari yoki qonunda nazarda tutilgan boshqa tartiblar orqali ko‘rib chiqiladi.",
        "Foydalanuvchilar bilan aloqa polyak, belarus yoki rus tillarida amalga oshirilishi mumkin.",
        "Servis materiallari mualliflik huquqi to‘g‘risidagi qonunchilik bilan himoyalangan.",
      ],
    },

    {
      title: "Rasmiy ma’lumotlar",

      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Contact Center telefoni: +48 573581333",
        "",
        "Saytlar:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const ka: RulesDictionary = {
  pageTitle: "რეგლამენტი",
  subtitle:
    "ელექტრონული მომსახურების გაწევისა და დაზღვევის ხელშეკრულებების დისტანციურად გაფორმების შესახებ SINEDIS Sp. z o.o.-ს მეშვეობით",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. განმარტებები",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS წარმოადგენს სადაზღვევო აგენტს, რომელიც მოქმედებს რამდენიმე სადაზღვევო კომპანიის სახელით მინიჭებული უფლებამოსილების საფუძველზე.",
        "მომხმარებელი — ფიზიკური ან იურიდიული პირი, რომელიც იყენებს SINEDIS-ის სერვისს ან Contact Center-ს.",
        "სერვისი — SINEDIS-ის ინტერნეტ-პლატფორმა, რომელიც ხელმისაწვდომია ვებგვერდებზე https://sinedis.pl და https://greencard.agency.",
        "Contact Center — SINEDIS-ის სატელეფონო სერვისი: +48 573581333.",
        "კონსულტანტი — SINEDIS-ის თანამშრომელი, რომელიც ახორციელებს სააგენტო საქმიანობას.",
        "მომსახურებები — ელექტრონული მომსახურებები, მათ შორის დაზღვევის ხელშეკრულების გაფორმებისთვის მომზადება, დისტანციური გაფორმება და სადაზღვევო პრემიის გადახდა.",
        "მზღვეველი — სადაზღვევო კომპანია, რომლის სახელითაც SINEDIS ახორციელებს სააგენტო საქმიანობას.",
        "დამზღვევი — მომხმარებელი, რომელიც აფორმებს დაზღვევის ხელშეკრულებას.",
        "პოლისი — დოკუმენტი, რომელიც ადასტურებს დაზღვევის ხელშეკრულების გაფორმებას.",
        "OWU — დაზღვევის ზოგადი პირობები, რომლებიც მომხმარებელს მიეწოდება ხელშეკრულების გაფორმებამდე.",
        "კონფიდენციალურობის პოლიტიკა — პერსონალური მონაცემების დამუშავებისა და სერვისის გამოყენების წესები.",
      ],
    },

    {
      title: "§ 2. ზოგადი დებულებები",
      paragraphs: [
        "წინამდებარე რეგლამენტი განსაზღვრავს ელექტრონული მომსახურებების გაწევისა და დაზღვევის ხელშეკრულებების დისტანციურად გაფორმების წესს SINEDIS-ის მეშვეობით.",
        "რეგლამენტი განთავსებულია უფასოდ და ხელმისაწვდომია ჩამოტვირთვის, შენახვისა და დაბეჭდვისთვის.",
        "მომხმარებელი ვალდებულია გაეცნოს რეგლამენტს მომსახურებების გამოყენებამდე.",
        "სერვისის გამოყენება ნიშნავს მომხმარებლის თანხმობას რეგლამენტის პირობებზე, მათ შორის პერსონალური მონაცემების დამუშავებაზე.",
        "მხარეთა ურთიერთობებზე ვრცელდება პოლონეთის რესპუბლიკის კანონმდებლობა, მათ შორის დისტანციური მომსახურებების, სადაზღვევო შუამავლობის, პერსონალური მონაცემების დაცვისა და მომხმარებელთა უფლებების ნორმები.",
        "SINEDIS მოქმედებს როგორც KNF-ის რეესტრში რეგისტრირებული სადაზღვევო აგენტი.",
        "აგენტის რეგისტრაციის გადამოწმება შესაძლებელია KNF-ის რეესტრში: https://rpu.knf.gov.pl.",
        "SINEDIS-ის საკომისიო ანაზღაურება შედის სადაზღვევო პრემიაში და მომხმარებლისთვის დამატებით ხარჯს არ წარმოადგენს.",
      ],
    },

    {
      title: "§ 3. ელექტრონული მომსახურების ხელშეკრულების დადება და შეწყვეტა",
      paragraphs: [
        "სერვისის გამოყენების დაწყება ნიშნავს ელექტრონული მომსახურების გაწევის ხელშეკრულების დადებას ცალკე დოკუმენტის ხელმოწერის გარეშე.",
        "Contact Center-ის შემთხვევაში მომსახურების დაწყებად ითვლება კონსულტანტთან საუბრის დაწყება.",
        "მომხმარებელს შეუძლია ნებისმიერ დროს შეწყვიტოს მომსახურებების გამოყენება.",
        "ელექტრონული მომსახურების ხელშეკრულება ავტომატურად წყდება მომხმარებლის მიერ სერვისიდან გასვლის ან კონსულტანტთან საუბრის დასრულების შემდეგ.",
      ],
    },

    {
      title: "§ 4. მომსახურების გაწევის ზოგადი წესები",
      paragraphs: [
        "სერვისი განკუთვნილია სადაზღვევო პროდუქტების შესახებ ინფორმაციის მისაღებად, შეთავაზებების გასაანგარიშებლად, დაზღვევის ხელშეკრულებების გასაფორმებლად და დოკუმენტებზე წვდომისთვის.",
        "ონლაინ-სერვისი მუშაობს 24/7 რეჟიმში, ხოლო Contact Center — დადგენილი გრაფიკის მიხედვით.",
        "მომხმარებელი ვალდებულია მიაწოდოს სანდო, სრული და აქტუალური მონაცემები.",
        "მომხმარებელი პასუხისმგებელია ცრუ ან არასრული ინფორმაციის გადაცემის შედეგებზე.",
        "SINEDIS უფლებამოსილია გადაამოწმოს წარმოდგენილი მონაცემები.",
        "სერვისის მუშაობაში შესაძლებელია ტექნიკური შეფერხებები, რომლებიც დაკავშირებულია მომსახურებასთან, განახლებებთან ან სარეზერვო კოპირებასთან.",
        "SINEDIS უფლებამოსილია დროებით შეზღუდოს სერვისზე წვდომა უსაფრთხოების საფრთხის ან რეგლამენტის დარღვევის შემთხვევაში.",
        "აკრძალულია სერვისის მეშვეობით უკანონო, მავნე ან შეურაცხმყოფელი შინაარსის გადაცემა.",
        "სერვისის გამოყენება უფასოა, გარდა გაფორმებული ხელშეკრულებების მიხედვით სადაზღვევო პრემიის გადახდის ვალდებულებისა.",
      ],
    },

    {
      title: "§ 5. დაზღვევის ხელშეკრულების გაფორმება და სადაზღვევო პრემიის გადახდა",
      paragraphs: [
        "მომხმარებელი დამოუკიდებლად ირჩევს სადაზღვევო პროდუქტს, დაფარვის მოცულობას და სადაზღვევო თანხას.",
        "ხელშეკრულების გაფორმებამდე მომხმარებელი იღებს ინფორმაციას მზღვეველის, დაზღვევის ღირებულების, გადახდის პირობების, ვადების, უარის თქმის უფლებისა და საჩივრის წარდგენის წესის შესახებ.",
        "ხელშეკრულების გაფორმების აუცილებელი პირობაა მონაცემების სწორად მითითება და დაზღვევის პირობების მიღება.",
        "მომხმარებელი ვალდებულია ჰქონდეს მესამე პირების მონაცემების გადაცემის კანონიერი საფუძველი.",
        "დაზღვევის ხელშეკრულება დადებულად ითვლება შეძენის ოპციის არჩევისა და სადაზღვევო პრემიის გადახდის შემდეგ.",
        "გადახდა შესაძლებელია საბანკო ბარათით ან ელექტრონული გადარიცხვით TPAY-ის მეშვეობით.",
        "ხელშეკრულების გაფორმების შემდეგ მომხმარებელი იღებს ელექტრონულ პოლისს.",
        "მომხმარებელს უფლება აქვს უარი თქვას დაზღვევის ხელშეკრულებაზე 30 დღის განმავლობაში, თუ კანონმდებლობით ან სადაზღვევო პროდუქტის ხასიათით სხვა რამ არ არის გათვალისწინებული.",
        "მოკლევადიანი დაზღვევის ხელშეკრულებებისთვის უარის თქმის უფლება შეიძლება შეზღუდული იყოს.",
      ],
    },

    {
      title: "§ 6. კონფიდენციალურობის პოლიტიკა",
      paragraphs: [
        "SINEDIS განსაკუთრებულ ყურადღებას უთმობს მომხმარებელთა პერსონალური მონაცემების დაცვას.",
        "მონაცემთა ადმინისტრატორები შეიძლება იყვნენ როგორც სადაზღვევო კომპანიები, ასევე SINEDIS, დამუშავების ხასიათიდან გამომდინარე.",
        "პერსონალური მონაცემების მიწოდება ნებაყოფლობითია, თუმცა აუცილებელია შეთავაზების მომზადებისა და დაზღვევის ხელშეკრულების გაფორმებისთვის.",
        "მონაცემები მუშავდება GDPR-ისა და პოლონეთის კანონმდებლობის შესაბამისად.",
        "სისტემური ჟურნალები და IP-მისამართები შეიძლება გამოყენებულ იქნას ტექნიკური და სტატისტიკური მიზნებისთვის.",
        "სერვისი იყენებს HTTPS-ს და უსაფრთხოების სხვა ზომებს გადაცემული მონაცემების დასაცავად.",
        "Contact Center-თან სატელეფონო საუბრები შეიძლება ჩაიწეროს.",
        "Cookie-ფაილების დეტალური პოლიტიკა ხელმისაწვდომია SINEDIS-ის ვებგვერდზე.",
      ],
    },

    {
      title: "§ 7. საჩივრების განხილვის წესი",
      paragraphs: [
        "მომხმარებელს უფლება აქვს წარადგინოს საჩივარი წერილობით, ზეპირად ან ელექტრონული ფორმით.",
        "საჩივრები შეიძლება გაიგზავნოს ვებგვერდის ფორმის მეშვეობით ან e-mail-ზე: reklamacje@sinedis.pl.",
        "საჩივარი უნდა შეიცავდეს მომხმარებლის საიდენტიფიკაციო მონაცემებს, სიტუაციის აღწერასა და მოთხოვნას.",
        "SINEDIS საჩივარს განიხილავს 30 დღის განმავლობაში, ხოლო რთულ შემთხვევებში — არაუგვიანეს 60 დღისა.",
        "პასუხი ძირითადად გაიცემა წერილობითი ფორმით.",
        "მომხმარებელს უფლება აქვს მიმართოს ფინანსურ ომბუდსმენს, KNF-ის საარბიტრაჟო სასამართლოს ან საერთო იურისდიქციის სასამართლოს.",
      ],
    },

    {
      title: "§ 8. რეგლამენტის ძალაში შესვლა და ცვლილება",
      paragraphs: [
        "რეგლამენტი ძალაში შევიდა 2023 წლის 21 ნოემბერს.",
        "SINEDIS უფლებამოსილია ნებისმიერ დროს შეცვალოს რეგლამენტი.",
        "რეგლამენტის ახალი რედაქცია ქვეყნდება ვებგვერდზე და შეიძლება მომხმარებლებს გაეგზავნოთ e-mail-ით.",
      ],
    },

    {
      title: "§ 9. დასკვნითი დებულებები",
      paragraphs: [
        "რეგლამენტსა და SINEDIS-ის მომსახურებებზე ვრცელდება პოლონეთის რესპუბლიკის სამართალი.",
        "დავები განიხილება საერთო იურისდიქციის სასამართლოებში ან კანონით გათვალისწინებული დავის გადაწყვეტის სხვა ფორმებით.",
        "მომხმარებლებთან კომუნიკაცია შეიძლება განხორციელდეს პოლონურ, ბელორუსულ ან რუსულ ენაზე.",
        "სერვისის მასალები დაცულია საავტორო უფლებების შესახებ კანონმდებლობით.",
      ],
    },

    {
      title: "ოფიციალური მონაცემები",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Contact Center-ის ტელეფონი: +48 573581333",
        "",
        "ვებგვერდები:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const kk: RulesDictionary = {
  pageTitle: "РЕГЛАМЕНТ",
  subtitle:
    "SINEDIS Sp. z o.o. арқылы электрондық қызметтер көрсету және қашықтан сақтандыру шарттарын жасасу тәртібі",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Анықтамалар",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS берілген өкілеттіктер негізінде бірнеше сақтандыру компаниясының атынан әрекет ететін сақтандыру агенті болып табылады.",
        "Пайдаланушы — SINEDIS сервисін немесе Contact Center қызметін пайдаланатын жеке немесе заңды тұлға.",
        "Сервис — https://sinedis.pl және https://greencard.agency сайттары арқылы қолжетімді SINEDIS интернет-платформасы.",
        "Contact Center — SINEDIS телефон қызметі: +48 573581333.",
        "Кеңесші — агенттік әрекеттерді орындайтын SINEDIS қызметкері.",
        "Қызметтер — сақтандыру шартын жасасуға дайындықты, шарттарды қашықтан жасауды және сақтандыру сыйлықақысын төлеуді қоса алғанда электрондық қызметтер.",
        "Сақтандырушы — SINEDIS агенттік қызметті жүзеге асыратын сақтандыру компаниясы.",
        "Сақтанушы — сақтандыру шартын жасасатын пайдаланушы.",
        "Полис — сақтандыру шартының жасалғанын растайтын құжат.",
        "OWU — пайдаланушыға шарт жасалғанға дейін ұсынылатын сақтандырудың жалпы шарттары.",
        "Құпиялылық саясаты — дербес деректерді өңдеу және сервисті пайдалану қағидалары.",
      ],
    },

    {
      title: "§ 2. Жалпы ережелер",
      paragraphs: [
        "Осы Регламент SINEDIS арқылы электрондық тәсілмен қызмет көрсету және қашықтан сақтандыру шарттарын жасасу тәртібін айқындайды.",
        "Регламент тегін орналастырылады және жүктеу, сақтау және басып шығару үшін қолжетімді.",
        "Пайдаланушы қызметтерді пайдалануды бастамас бұрын Регламентпен танысуға міндетті.",
        "Сервисті пайдалану пайдаланушының Регламент шарттарымен, оның ішінде дербес деректерді өңдеумен келісетінін білдіреді.",
        "Тараптардың қатынастарына Польша заңнамасының, соның ішінде қашықтан қызмет көрсету, сақтандыру делдалдығы, дербес деректерді қорғау және тұтынушылар құқықтары туралы нормалары қолданылады.",
        "SINEDIS KNF тізілімінде тіркелген сақтандыру агенті ретінде әрекет етеді.",
        "Агенттің тіркелуін KNF тізілімі арқылы тексеруге болады: https://rpu.knf.gov.pl.",
        "SINEDIS комиссиялық сыйақысы сақтандыру сыйлықақысына енгізілген және клиент үшін қосымша шығындар туғызбайды.",
      ],
    },

    {
      title:
        "§ 3. Электрондық қызметтер көрсету туралы шартты жасасу және тоқтату",
      paragraphs: [
        "Сервисті пайдалануды бастау жеке құжатқа қол қоймай-ақ электрондық қызметтер көрсету туралы шарттың жасалғанын білдіреді.",
        "Contact Center үшін қызмет көрсетудің басталуы кеңесшімен әңгіменің басталу сәті болып саналады.",
        "Пайдаланушы кез келген уақытта қызметтерді пайдалануды тоқтата алады.",
        "Электрондық қызметтер көрсету туралы шарт пайдаланушы сервистен шыққаннан кейін немесе кеңесшімен сөйлесу аяқталған соң автоматты түрде тоқтатылады.",
      ],
    },

    {
      title: "§ 4. Қызмет көрсету қағидалары",
      paragraphs: [
        "Сервис сақтандыру өнімдері туралы ақпарат алу, ұсыныстарды есептеу, сақтандыру шарттарын жасасу және құжаттарға қол жеткізу үшін арналған.",
        "Онлайн сервис тәулік бойы жұмыс істейді, Contact Center — белгіленген кесте бойынша.",
        "Пайдаланушы шынайы, толық және өзекті деректер ұсынуға міндетті.",
        "Пайдаланушы жалған немесе толық емес ақпарат ұсынудың салдары үшін жауапты болады.",
        "SINEDIS ұсынылған деректерді тексеруге құқылы.",
        "Сервис жұмысында техникалық қызмет көрсетуге, жаңартуларға немесе резервтік көшіруге байланысты техникалық үзілістер болуы мүмкін.",
        "SINEDIS қауіпсіздікке қатер төнген немесе Регламент бұзылған жағдайда сервиске қолжетімділікті уақытша шектеуге құқылы.",
        "Сервис арқылы заңсыз, зиянды немесе қорлайтын контентті жіберуге тыйым салынады.",
        "Сервисті пайдалану тегін болып табылады, жасалған шарттар бойынша сақтандыру сыйлықақысын төлеу міндеттемесінен басқа.",
      ],
    },

    {
      title:
        "§ 5. Сақтандыру шартын жасасу және сақтандыру сыйлықақысын төлеу",
      paragraphs: [
        "Пайдаланушы сақтандыру өнімін, сақтандыру жабыны көлемін және сақтандыру сомасын өз бетінше таңдайды.",
        "Шарт жасалғанға дейін пайдаланушы сақтандырушы, сақтандыру құны, төлем шарттары, мерзімдер, бас тарту құқығы және шағым беру тәртібі туралы ақпарат алады.",
        "Шарт жасасудың шарты — деректерді дұрыс көрсету және сақтандыру шарттарын қабылдау.",
        "Пайдаланушы үшінші тұлғалардың деректерін беруге заңды негіздерінің болуына міндетті.",
        "Сақтандыру шарты сатып алу опциясын таңдап, сақтандыру сыйлықақысы төленгеннен кейін жасалған болып есептеледі.",
        "Төлем банк картасы немесе TPAY арқылы электрондық аударым арқылы жүзеге асырылуы мүмкін.",
        "Шарт жасалғаннан кейін пайдаланушы электрондық полис алады.",
        "Егер заңнамада немесе сақтандыру өнімінің сипатында өзгеше көзделмесе, пайдаланушы 30 күн ішінде сақтандыру шартынан бас тартуға құқылы.",
        "Қысқа мерзімді сақтандыру шарттары үшін бас тарту құқығы шектелуі мүмкін.",
      ],
    },

    {
      title: "§ 6. Құпиялылық саясаты",
      paragraphs: [
        "SINEDIS пайдаланушылардың дербес деректерін қорғауға ерекше назар аударады.",
        "Деректер әкімшілері өңдеу сипатына байланысты сақтандыру компаниялары және SINEDIS болуы мүмкін.",
        "Дербес деректерді ұсыну ерікті, бірақ ұсынысты дайындау және сақтандыру шартын жасасу үшін қажет.",
        "Деректер GDPR және Польша заңнамасына сәйкес өңделеді.",
        "Жүйелік журналдар мен IP мекенжайлары техникалық және статистикалық мақсаттарда пайдаланылуы мүмкін.",
        "Сервис берілетін деректерді қорғау үшін HTTPS және басқа қауіпсіздік шараларын пайдаланады.",
        "Contact Center-пен телефон сөйлесулері жазылуы мүмкін.",
        "Cookie файлдары саясаты SINEDIS сайтында қолжетімді.",
      ],
    },

    {
      title: "§ 7. Шағымдарды қарау тәртібі",
      paragraphs: [
        "Пайдаланушы шағымды жазбаша, ауызша немесе электрондық түрде беруге құқылы.",
        "Шағымдар сайттағы форма арқылы немесе reklamacje@sinedis.pl e-mail мекенжайына жіберілуі мүмкін.",
        "Шағымда пайдаланушының сәйкестендіру деректері, жағдай сипаттамасы және талаптар болуы тиіс.",
        "SINEDIS шағымды 30 күн ішінде, ал күрделі жағдайларда — 60 күннен кешіктірмей қарайды.",
        "Жауап негізінен жазбаша түрде ұсынылады.",
        "Пайдаланушы қаржылық омбудсменге, KNF арбитраждық сотына немесе жалпы юрисдикция сотына жүгінуге құқылы.",
      ],
    },

    {
      title: "§ 8. Регламенттің күшіне енуі және өзгертілуі",
      paragraphs: [
        "Регламент 2023 жылғы 21 қарашадан бастап күшіне енді.",
        "SINEDIS Регламентті кез келген уақытта өзгертуге құқылы.",
        "Регламенттің жаңа редакциясы сайтта жарияланады және пайдаланушыларға e-mail арқылы жіберілуі мүмкін.",
      ],
    },

    {
      title: "§ 9. Қорытынды ережелер",
      paragraphs: [
        "Регламентке және SINEDIS қызметтеріне Польша Республикасының құқығы қолданылады.",
        "Даулар жалпы юрисдикция соттарында немесе заңда көзделген өзге де тәсілдермен қаралады.",
        "Пайдаланушылармен өзара іс-қимыл поляк, беларусь немесе орыс тілдерінде жүзеге асырылуы мүмкін.",
        "Сервис материалдары авторлық құқық туралы заңнамамен қорғалған.",
      ],
    },

    {
      title: "Ресми деректер",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Contact Center телефоны: +48 573581333",
        "",
        "Сайттар:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const tr: RulesDictionary = {
  pageTitle: "YÖNETMELİK",
  subtitle:
    "SINEDIS Sp. z o.o. aracılığıyla elektronik hizmetlerin sunulması ve uzaktan sigorta sözleşmesi kurulmasına ilişkin",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Tanımlar",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polonya, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-posta: info@sinedis.pl.",
        "SINEDIS, verilen yetkilere dayanarak birden fazla sigorta şirketi adına faaliyet gösteren bir sigorta acentesidir.",
        "Kullanıcı — SINEDIS hizmetini veya Contact Center hizmetini kullanan gerçek veya tüzel kişi.",
        "Hizmet — https://sinedis.pl ve https://greencard.agency internet siteleri üzerinden erişilebilen SINEDIS çevrim içi platformu.",
        "Contact Center — SINEDIS telefon hizmeti: +48 573581333.",
        "Danışman — acentelik faaliyetlerini gerçekleştiren SINEDIS çalışanı.",
        "Hizmetler — sigorta sözleşmesinin hazırlanması, uzaktan sigorta sözleşmesi kurulması ve sigorta primi ödemesi dahil elektronik hizmetler.",
        "Sigortacı — SINEDIS’in acentelik faaliyetini yürüttüğü sigorta şirketi.",
        "Sigorta Ettiren — sigorta sözleşmesini yapan kullanıcı.",
        "Poliçe — sigorta sözleşmesinin kurulduğunu doğrulayan belge.",
        "OWU — sözleşme kurulmadan önce kullanıcıya sunulan genel sigorta şartları.",
        "Gizlilik Politikası — kişisel verilerin işlenmesi ve hizmet kullanımına ilişkin kurallar.",
      ],
    },

    {
      title: "§ 2. Genel Hükümler",
      paragraphs: [
        "Bu Yönetmelik, SINEDIS aracılığıyla elektronik hizmet sunumu ve uzaktan sigorta sözleşmesi kurulma usullerini belirler.",
        "Yönetmelik ücretsiz olarak yayımlanır ve indirilebilir, kaydedilebilir ve yazdırılabilir durumdadır.",
        "Kullanıcı, hizmetleri kullanmaya başlamadan önce Yönetmeliği okumakla yükümlüdür.",
        "Hizmetin kullanılması, kullanıcının Yönetmelik hükümlerini ve kişisel verilerin işlenmesini kabul ettiği anlamına gelir.",
        "Taraflar arasındaki ilişkilere, uzaktan hizmetler, sigorta aracılığı, kişisel verilerin korunması ve tüketici haklarına ilişkin Polonya mevzuatı uygulanır.",
        "SINEDIS, KNF siciline kayıtlı bir sigorta acentesi olarak faaliyet göstermektedir.",
        "Acentenin kaydı KNF sicili üzerinden doğrulanabilir: https://rpu.knf.gov.pl.",
        "SINEDIS’in komisyon ücreti sigorta primine dahildir ve müşteri açısından ek bir maliyet oluşturmaz.",
      ],
    },

    {
      title: "§ 3. Elektronik Hizmet Sözleşmesinin Kurulması ve Sona Ermesi",
      paragraphs: [
        "Hizmetin kullanılmaya başlanması, ayrı bir belge imzalanmaksızın elektronik hizmet sözleşmesinin kurulması anlamına gelir.",
        "Contact Center için hizmetin başlangıcı, danışman ile görüşmenin başlamasıdır.",
        "Kullanıcı, hizmet kullanımını istediği zaman sonlandırabilir.",
        "Elektronik hizmet sözleşmesi, kullanıcının hizmetten çıkması veya danışmanla görüşmenin sona ermesiyle otomatik olarak sona erer.",
      ],
    },

    {
      title: "§ 4. Hizmet Sunumuna İlişkin Genel Kurallar",
      paragraphs: [
        "Hizmet; sigorta ürünleri hakkında bilgi edinmek, teklif hesaplamak, sigorta sözleşmesi yapmak ve belgelere erişmek amacıyla tasarlanmıştır.",
        "Çevrim içi hizmet 7/24 çalışır, Contact Center ise belirlenen çalışma saatleri içinde hizmet verir.",
        "Kullanıcı doğru, eksiksiz ve güncel bilgi vermekle yükümlüdür.",
        "Yanlış veya eksik bilgi verilmesinin sonuçlarından kullanıcı sorumludur.",
        "SINEDIS, verilen bilgileri doğrulama hakkına sahiptir.",
        "Bakım, güncelleme veya yedekleme işlemleri nedeniyle hizmette teknik kesintiler yaşanabilir.",
        "SINEDIS, güvenlik tehdidi veya Yönetmelik ihlali durumunda hizmet erişimini geçici olarak kısıtlama hakkına sahiptir.",
        "Hizmet üzerinden yasa dışı, zararlı veya saldırgan içerik paylaşılması yasaktır.",
        "Hizmetin kullanımı ücretsizdir; ancak yapılan sigorta sözleşmelerine ilişkin sigorta priminin ödenmesi zorunludur.",
      ],
    },

    {
      title: "§ 5. Sigorta Sözleşmesinin Kurulması ve Sigorta Priminin Ödenmesi",
      paragraphs: [
        "Kullanıcı, sigorta ürününü, teminat kapsamını ve sigorta bedelini bağımsız olarak seçer.",
        "Sözleşme kurulmadan önce kullanıcıya sigortacı, sigorta bedeli, ödeme koşulları, süreler, cayma hakkı ve şikâyet prosedürleri hakkında bilgi verilir.",
        "Sözleşmenin kurulabilmesi için bilgilerin doğru şekilde girilmesi ve sigorta şartlarının kabul edilmesi gerekir.",
        "Kullanıcı, üçüncü kişilere ait verilerin paylaşılması için gerekli hukuki yetkiye sahip olmak zorundadır.",
        "Sigorta sözleşmesi, satın alma seçeneğinin seçilmesi ve sigorta priminin ödenmesiyle kurulmuş sayılır.",
        "Ödeme banka kartı veya TPAY üzerinden elektronik transfer yoluyla yapılabilir.",
        "Sözleşme kurulduktan sonra kullanıcıya elektronik poliçe gönderilir.",
        "Mevzuatta veya sigorta ürününün niteliğinde aksi belirtilmedikçe kullanıcı, sigorta sözleşmesinden 30 gün içinde cayma hakkına sahiptir.",
        "Kısa süreli sigorta sözleşmelerinde cayma hakkı sınırlı olabilir.",
      ],
    },

    {
      title: "§ 6. Gizlilik Politikası",
      paragraphs: [
        "SINEDIS, kullanıcıların kişisel verilerinin korunmasına özel önem vermektedir.",
        "Veri sorumluları, veri işleme niteliğine bağlı olarak sigorta şirketleri veya SINEDIS olabilir.",
        "Kişisel verilerin sağlanması gönüllüdür; ancak teklif hazırlanması ve sigorta sözleşmesinin kurulması için gereklidir.",
        "Veriler, GDPR ve Polonya mevzuatına uygun şekilde işlenmektedir.",
        "Sistem kayıtları ve IP adresleri teknik ve istatistiksel amaçlarla kullanılabilir.",
        "Hizmet, iletilen verilerin korunması amacıyla HTTPS ve diğer güvenlik önlemlerini kullanmaktadır.",
        "Contact Center ile yapılan telefon görüşmeleri kayıt altına alınabilir.",
        "Detaylı çerez politikası SINEDIS internet sitesinde bulunmaktadır.",
      ],
    },

    {
      title: "§ 7. Şikâyetlerin İncelenme Prosedürü",
      paragraphs: [
        "Kullanıcı şikâyetini yazılı, sözlü veya elektronik ortamda iletebilir.",
        "Şikâyetler internet sitesi formu veya reklamacje@sinedis.pl e-posta adresi üzerinden gönderilebilir.",
        "Şikâyet; kullanıcının kimlik bilgilerini, olay açıklamasını ve talebini içermelidir.",
        "SINEDIS şikâyeti 30 gün içinde, karmaşık durumlarda ise en geç 60 gün içinde değerlendirir.",
        "Yanıt öncelikli olarak yazılı şekilde verilir.",
        "Kullanıcı, finansal ombudsmana, KNF tahkim mahkemesine veya genel yetkili mahkemelere başvurma hakkına sahiptir.",
      ],
    },

    {
      title: "§ 8. Yönetmeliğin Yürürlüğe Girmesi ve Değiştirilmesi",
      paragraphs: [
        "Yönetmelik 21 Kasım 2023 tarihinde yürürlüğe girmiştir.",
        "SINEDIS, Yönetmeliği istediği zaman değiştirme hakkına sahiptir.",
        "Yönetmeliğin yeni versiyonu internet sitesinde yayımlanır ve kullanıcılara e-posta yoluyla gönderilebilir.",
      ],
    },

    {
      title: "§ 9. Son Hükümler",
      paragraphs: [
        "Yönetmelik ve SINEDIS hizmetleri için Polonya Cumhuriyeti hukuku uygulanır.",
        "Uyuşmazlıklar genel yetkili mahkemelerde veya mevzuatta öngörülen diğer çözüm yolları ile çözülür.",
        "Kullanıcılarla iletişim Lehçe, Belarusça veya Rusça dillerinde gerçekleştirilebilir.",
        "Hizmette yer alan materyaller telif hakkı mevzuatı ile korunmaktadır.",
      ],
    },

    {
      title: "Resmî Bilgiler",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polonya",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-posta: info@sinedis.pl",
        "Contact Center Telefonu: +48 573581333",
        "",
        "Web siteleri:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const fa: RulesDictionary = {
  pageTitle: "مقررات",
  subtitle:
    "ارائه خدمات الکترونیکی و انعقاد قراردادهای بیمه از راه دور از طریق SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. تعاریف",
      paragraphs: [
        "SINEDIS — شرکت SINEDIS Spółka z ograniczoną odpowiedzialnością، به نشانی ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska، KRS: 0000999636، NIP: 5242953841، REGON: 52350998300000، ایمیل: info@sinedis.pl.",
        "SINEDIS به‌عنوان نماینده بیمه و بر اساس اختیارات اعطاشده از سوی چندین شرکت بیمه فعالیت می‌کند.",
        "کاربر — شخص حقیقی یا حقوقی که از سرویس SINEDIS یا Contact Center استفاده می‌کند.",
        "سرویس — پلتفرم اینترنتی SINEDIS که از طریق وب‌سایت‌های https://sinedis.pl و https://greencard.agency در دسترس است.",
        "Contact Center — مرکز تماس تلفنی SINEDIS: +48573581333.",
        "مشاور — کارمند SINEDIS که فعالیت‌های نمایندگی بیمه را انجام می‌دهد.",
        "خدمات — خدمات الکترونیکی شامل آماده‌سازی برای انعقاد قرارداد بیمه، انعقاد از راه دور قراردادها و پرداخت حق بیمه.",
        "بیمه‌گر — شرکت بیمه‌ای که SINEDIS از طرف آن فعالیت نمایندگی انجام می‌دهد.",
        "بیمه‌گذار — کاربری که قرارداد بیمه منعقد می‌کند.",
        "بیمه‌نامه — سندی که انعقاد قرارداد بیمه را تأیید می‌کند.",
        "OWU — شرایط عمومی بیمه که پیش از انعقاد قرارداد در اختیار کاربر قرار می‌گیرد.",
        "سیاست حفظ حریم خصوصی — مقررات مربوط به پردازش داده‌های شخصی و استفاده از سرویس.",
      ],
    },

    {
      title: "§ 2. مقررات عمومی",
      paragraphs: [
        "این مقررات نحوه ارائه خدمات الکترونیکی و انعقاد قراردادهای بیمه از راه دور از طریق SINEDIS را تعیین می‌کند.",
        "مقررات به‌صورت رایگان منتشر شده و قابل دانلود، ذخیره و چاپ است.",
        "کاربر موظف است پیش از استفاده از خدمات، این مقررات را مطالعه کند.",
        "استفاده از سرویس به معنای پذیرش شرایط این مقررات، از جمله پردازش داده‌های شخصی، است.",
        "روابط طرفین تابع قوانین جمهوری لهستان، از جمله مقررات خدمات از راه دور، واسطه‌گری بیمه، حفاظت از داده‌های شخصی و حقوق مصرف‌کننده است.",
        "SINEDIS به‌عنوان نماینده بیمه ثبت‌شده در فهرست KNF فعالیت می‌کند.",
        "ثبت نماینده از طریق فهرست KNF در نشانی https://rpu.knf.gov.pl قابل بررسی است.",
        "کمیسیون SINEDIS در حق بیمه لحاظ شده و هزینه اضافی برای مشتری ایجاد نمی‌کند.",
      ],
    },

    {
      title: "§ 3. انعقاد و خاتمه قرارداد ارائه خدمات الکترونیکی",
      paragraphs: [
        "شروع استفاده از سرویس به معنای انعقاد قرارداد ارائه خدمات الکترونیکی بدون امضای سند جداگانه است.",
        "در مورد Contact Center، آغاز مکالمه با مشاور به منزله شروع ارائه خدمات محسوب می‌شود.",
        "کاربر می‌تواند در هر زمان استفاده از خدمات را متوقف کند.",
        "قرارداد ارائه خدمات الکترونیکی پس از خروج کاربر از سرویس یا پایان مکالمه با مشاور به‌صورت خودکار خاتمه می‌یابد.",
      ],
    },

    {
      title: "§ 4. قواعد عمومی ارائه خدمات",
      paragraphs: [
        "سرویس برای دریافت اطلاعات درباره محصولات بیمه‌ای، محاسبه پیشنهادها، انعقاد قراردادهای بیمه و دسترسی به اسناد طراحی شده است.",
        "سرویس آنلاین به‌صورت ۲۴ ساعته فعال است و Contact Center مطابق برنامه تعیین‌شده فعالیت می‌کند.",
        "کاربر موظف است اطلاعات صحیح، کامل و به‌روز ارائه دهد.",
        "کاربر مسئول پیامدهای ارائه اطلاعات نادرست یا ناقص خواهد بود.",
        "SINEDIS حق بررسی اطلاعات ارائه‌شده را دارد.",
        "ممکن است وقفه‌های فنی مرتبط با نگهداری، به‌روزرسانی یا تهیه نسخه پشتیبان رخ دهد.",
        "SINEDIS می‌تواند در صورت تهدیدات امنیتی یا نقض مقررات، دسترسی به سرویس را موقتاً محدود کند.",
        "ارسال محتوای غیرقانونی، مخرب یا توهین‌آمیز از طریق سرویس ممنوع است.",
        "استفاده از سرویس رایگان است، به‌جز تعهد پرداخت حق بیمه قراردادهای منعقدشده.",
      ],
    },

    {
      title: "§ 5. انعقاد قرارداد بیمه و پرداخت حق بیمه",
      paragraphs: [
        "کاربر به‌طور مستقل محصول بیمه‌ای، محدوده پوشش و مبلغ بیمه را انتخاب می‌کند.",
        "پیش از انعقاد قرارداد، کاربر اطلاعات مربوط به بیمه‌گر، هزینه بیمه، شرایط پرداخت، مهلت‌ها، حق انصراف و نحوه ثبت شکایت را دریافت می‌کند.",
        "انعقاد قرارداد منوط به ارائه صحیح اطلاعات و پذیرش شرایط بیمه است.",
        "کاربر موظف است برای انتقال داده‌های اشخاص ثالث، مبنای قانونی داشته باشد.",
        "قرارداد بیمه پس از انتخاب گزینه خرید و پرداخت حق بیمه منعقدشده تلقی می‌شود.",
        "پرداخت می‌تواند از طریق کارت بانکی یا انتقال الکترونیکی از طریق TPAY انجام شود.",
        "پس از انعقاد قرارداد، بیمه‌نامه الکترونیکی برای کاربر صادر می‌شود.",
        "کاربر حق دارد ظرف ۳۰ روز از قرارداد بیمه انصراف دهد، مگر در مواردی که قوانین یا ماهیت محصول بیمه‌ای خلاف آن را پیش‌بینی کرده باشند.",
        "در قراردادهای کوتاه‌مدت بیمه، حق انصراف ممکن است محدود شود.",
      ],
    },

    {
      title: "§ 6. سیاست حفظ حریم خصوصی",
      paragraphs: [
        "SINEDIS توجه ویژه‌ای به حفاظت از داده‌های شخصی کاربران دارد.",
        "بسته به نوع پردازش، شرکت‌های بیمه و SINEDIS ممکن است مسئول پردازش داده‌ها باشند.",
        "ارائه داده‌های شخصی داوطلبانه است، اما برای تهیه پیشنهاد و انعقاد قرارداد بیمه ضروری می‌باشد.",
        "داده‌ها مطابق با GDPR و قوانین جمهوری لهستان پردازش می‌شوند.",
        "گزارش‌های سیستمی و آدرس‌های IP ممکن است برای اهداف فنی و آماری استفاده شوند.",
        "سرویس از HTTPS و سایر تدابیر امنیتی برای حفاظت از داده‌های منتقل‌شده استفاده می‌کند.",
        "مکالمات تلفنی با Contact Center ممکن است ضبط شوند.",
        "سیاست تفصیلی cookie در وب‌سایت SINEDIS در دسترس است.",
      ],
    },

    {
      title: "§ 7. نحوه رسیدگی به شکایات",
      paragraphs: [
        "کاربر حق دارد شکایت خود را به‌صورت کتبی، شفاهی یا الکترونیکی ثبت کند.",
        "شکایات می‌توانند از طریق فرم موجود در وب‌سایت یا ایمیل reklamacje@sinedis.pl ارسال شوند.",
        "شکایت باید شامل اطلاعات شناسایی کاربر، شرح وضعیت و خواسته‌ها باشد.",
        "SINEDIS شکایات را ظرف ۳۰ روز و در موارد پیچیده حداکثر ظرف ۶۰ روز بررسی می‌کند.",
        "پاسخ عمدتاً به‌صورت کتبی ارائه می‌شود.",
        "کاربر می‌تواند به омбудсмен مالی، دادگاه داوری KNF یا دادگاه عمومی مراجعه کند.",
      ],
    },

    {
      title: "§ 8. لازم‌الاجرا شدن و تغییر مقررات",
      paragraphs: [
        "این مقررات در تاریخ 21 نوامبر 2023 لازم‌الاجرا شده است.",
        "SINEDIS حق دارد در هر زمان مقررات را تغییر دهد.",
        "نسخه جدید مقررات در وب‌سایت منتشر شده و ممکن است از طریق ایمیل برای کاربران ارسال شود.",
      ],
    },

    {
      title: "§ 9. مقررات نهایی",
      paragraphs: [
        "این مقررات و خدمات SINEDIS تابع قوانین جمهوری لهستان هستند.",
        "اختلافات در دادگاه‌های عمومی یا سایر روش‌های حل‌وفصل پیش‌بینی‌شده در قانون رسیدگی می‌شوند.",
        "ارتباط با کاربران ممکن است به زبان‌های لهستانی، بلاروسی یا روسی انجام شود.",
        "مطالب سرویس تحت حمایت قوانین حق مؤلف قرار دارند.",
      ],
    },

    {
      title: "اطلاعات رسمی",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "تلفن Contact Center: +48573581333",
        "",
        "وب‌سایت‌ها:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const hy: RulesDictionary = {
  pageTitle: "ԿԱՆՈՆԱԴՐՈՒԹՅՈՒՆ",
  subtitle:
    "էլեկտրոնային ծառայությունների մատուցման և ապահովագրության պայմանագրերի հեռավար կնքման վերաբերյալ՝ SINEDIS Sp. z o.o.-ի միջոցով",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Սահմանումներ",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl։",
        "SINEDIS-ը հանդիսանում է ապահովագրական գործակալ, որը գործում է մի քանի ապահովագրական ընկերությունների անունից՝ տրամադրված լիազորությունների հիման վրա։",
        "Օգտատեր — ֆիզիկական կամ իրավաբանական անձ, որն օգտագործում է SINEDIS ծառայությունը կամ Contact Center-ը։",
        "Ծառայություն — SINEDIS ինտերնետային հարթակը, որը հասանելի է https://sinedis.pl և https://greencard.agency կայքերի միջոցով։",
        "Contact Center — SINEDIS-ի հեռախոսային ծառայությունը՝ +48 573581333",
        "Խորհրդատու — SINEDIS-ի աշխատակից, որը կատարում է գործակալական գործողություններ։",
        "Ծառայություններ — էլեկտրոնային ծառայություններ, ներառյալ ապահովագրության պայմանագրի կնքման նախապատրաստումը, պայմանագրերի հեռավար կնքումը և ապահովագրավճարի վճարումը։",
        "Ապահովագրող — ապահովագրական ընկերություն, որի անունից SINEDIS-ը իրականացնում է գործակալական գործունեություն։",
        "Ապահովադիր — օգտատեր, որը կնքում է ապահովագրության պայմանագիր։",
        "Պոլիս — փաստաթուղթ, որը հաստատում է ապահովագրության պայմանագրի կնքումը։",
        "OWU — ապահովագրության ընդհանուր պայմաններ, որոնք տրամադրվում են օգտատիրոջը մինչև պայմանագրի կնքումը։",
        "Գաղտնիության քաղաքականություն — անձնական տվյալների մշակման և ծառայության օգտագործման կանոններ։",
      ],
    },

    {
      title: "§ 2. Ընդհանուր դրույթներ",
      paragraphs: [
        "Սույն Կանոնադրությունը սահմանում է SINEDIS-ի միջոցով էլեկտրոնային եղանակով ծառայությունների մատուցման և ապահովագրության պայմանագրերի հեռավար կնքման կարգը։",
        "Կանոնադրությունը հրապարակվում է անվճար և հասանելի է ներբեռնման, պահպանման և տպման համար։",
        "Օգտատերը պարտավոր է ծանոթանալ Կանոնադրությանը մինչև ծառայությունների օգտագործումը։",
        "Ծառայության օգտագործումը նշանակում է օգտատիրոջ համաձայնությունը Կանոնադրության պայմաններին, ներառյալ անձնական տվյալների մշակումը։",
        "Կողմերի հարաբերությունների նկատմամբ կիրառվում են Լեհաստանի օրենսդրության դրույթները, ներառյալ հեռավար ծառայությունների, ապահովագրական միջնորդության, անձնական տվյալների պաշտպանության և սպառողների իրավունքների վերաբերյալ նորմերը։",
        "SINEDIS-ը գործում է որպես KNF ռեեստրում գրանցված ապահովագրական գործակալ։",
        "Գործակալի գրանցումը կարելի է ստուգել KNF ռեեստրում՝ https://rpu.knf.gov.pl։",
        "SINEDIS-ի միջնորդավճարը ներառված է ապահովագրավճարի մեջ և հաճախորդի համար լրացուցիչ ծախսեր չի առաջացնում։",
      ],
    },

    {
      title:
        "§ 3. Էլեկտրոնային ծառայությունների մատուցման պայմանագրի կնքում և դադարեցում",
      paragraphs: [
        "Ծառայության օգտագործման սկիզբը նշանակում է էլեկտրոնային ծառայությունների մատուցման պայմանագրի կնքում՝ առանց առանձին փաստաթուղթ ստորագրելու։",
        "Contact Center-ի համար ծառայությունների մատուցման սկիզբ է համարվում խորհրդատուի հետ զրույցի մեկնարկը։",
        "Օգտատերը կարող է ցանկացած պահի դադարեցնել ծառայությունների օգտագործումը։",
        "Էլեկտրոնային ծառայությունների մատուցման պայմանագիրը ավտոմատ դադարեցվում է ծառայությունից դուրս գալուց կամ խորհրդատուի հետ զրույցի ավարտից հետո։",
      ],
    },

    {
      title: "§ 4. Ծառայությունների մատուցման ընդհանուր կանոններ",
      paragraphs: [
        "Ծառայությունը նախատեսված է ապահովագրական պրոդուկտների վերաբերյալ տեղեկատվություն ստանալու, առաջարկների հաշվարկման, ապահովագրության պայմանագրերի կնքման և փաստաթղթերի հասանելիության համար։",
        "Առցանց ծառայությունը գործում է շուրջօրյա, իսկ Contact Center-ը՝ սահմանված ժամանակացույցով։",
        "Օգտատերը պարտավոր է տրամադրել հավաստի, ամբողջական և արդիական տվյալներ։",
        "Օգտատերը պատասխանատվություն է կրում կեղծ կամ ոչ ամբողջական տեղեկատվության տրամադրման հետևանքների համար։",
        "SINEDIS-ը իրավունք ունի ստուգել տրամադրված տվյալները։",
        "Ծառայության աշխատանքում հնարավոր են տեխնիկական ընդմիջումներ՝ կապված սպասարկման, թարմացումների կամ պահուստային պատճենավորման հետ։",
        "SINEDIS-ը իրավունք ունի ժամանակավորապես սահմանափակել ծառայության հասանելիությունը անվտանգության սպառնալիքների կամ Կանոնադրության խախտումների դեպքում։",
        "Արգելվում է ծառայության միջոցով փոխանցել անօրինական, վնասակար կամ վիրավորական բովանդակություն։",
        "Ծառայության օգտագործումն անվճար է, բացառությամբ կնքված պայմանագրերով ապահովագրավճարի վճարման պարտականության։",
      ],
    },

    {
      title:
        "§ 5. Ապահովագրության պայմանագրի կնքում և ապահովագրավճարի վճարում",
      paragraphs: [
        "Օգտատերը ինքնուրույն ընտրում է ապահովագրական պրոդուկտը, ծածկույթի ծավալը և ապահովագրական գումարը։",
        "Մինչ պայմանագրի կնքումը օգտատերը ստանում է տեղեկատվություն ապահովագրողի, ապահովագրության արժեքի, վճարման պայմանների, ժամկետների, հրաժարվելու իրավունքի և բողոքների ներկայացման կարգի մասին։",
        "Պայմանագրի կնքման պայման է տվյալների ճիշտ նշումը և ապահովագրության պայմանների ընդունումը։",
        "Օգտատերը պարտավոր է ունենալ երրորդ անձանց տվյալները փոխանցելու օրինական հիմքեր։",
        "Ապահովագրության պայմանագիրը համարվում է կնքված գնում կատարելու տարբերակի ընտրությունից և ապահովագրավճարի վճարումից հետո։",
        "Վճարումը կարող է իրականացվել բանկային քարտով կամ էլեկտրոնային փոխանցմամբ TPAY համակարգի միջոցով։",
        "Պայմանագրի կնքումից հետո օգտատերը ստանում է էլեկտրոնային պոլիս։",
        "Օգտատերն իրավունք ունի հրաժարվել ապահովագրության պայմանագրից 30 օրվա ընթացքում, եթե այլ բան նախատեսված չէ օրենսդրությամբ կամ ապահովագրական պրոդուկտի բնույթով։",
        "Կարճաժամկետ ապահովագրական պայմանագրերի համար հրաժարվելու իրավունքը կարող է սահմանափակվել։",
      ],
    },

    {
      title: "§ 6. Գաղտնիության քաղաքականություն",
      paragraphs: [
        "SINEDIS-ը հատուկ ուշադրություն է դարձնում օգտատերերի անձնական տվյալների պաշտպանությանը։",
        "Տվյալների ադմինիստրատորներ կարող են հանդիսանալ ապահովագրական ընկերությունները և SINEDIS-ը՝ կախված մշակման բնույթից։",
        "Անձնական տվյալների տրամադրումը կամավոր է, սակայն անհրաժեշտ է առաջարկի պատրաստման և ապահովագրության պայմանագրի կնքման համար։",
        "Տվյալները մշակվում են GDPR-ի և Լեհաստանի օրենսդրության համաձայն։",
        "Համակարգային մատյանները և IP հասցեները կարող են օգտագործվել տեխնիկական և վիճակագրական նպատակներով։",
        "Ծառայությունը օգտագործում է HTTPS և անվտանգության այլ միջոցներ՝ փոխանցվող տվյալների պաշտպանության համար։",
        "Contact Center-ի հետ հեռախոսային խոսակցությունները կարող են ձայնագրվել։",
        "Cookie քաղաքականության մանրամասն տեղեկատվությունը հասանելի է SINEDIS կայքում։",
      ],
    },

    {
      title: "§ 7. Բողոքների քննության կարգ",
      paragraphs: [
        "Օգտատերն իրավունք ունի բողոք ներկայացնել գրավոր, բանավոր կամ էլեկտրոնային ձևով։",
        "Բողոքները կարող են ուղարկվել կայքի ձևի միջոցով կամ e-mail հասցեին՝ reklamacje@sinedis.pl։",
        "Բողոքը պետք է պարունակի օգտատիրոջ նույնականացման տվյալները, իրավիճակի նկարագրությունը և պահանջները։",
        "SINEDIS-ը բողոքը քննում է 30 օրվա ընթացքում, իսկ բարդ դեպքերում՝ ոչ ուշ, քան 60 օրվա ընթացքում։",
        "Պատասխանը տրամադրվում է հիմնականում գրավոր ձևով։",
        "Օգտատերն իրավունք ունի դիմել ֆինանսական օմբուդսմենին, KNF արբիտրաժային դատարանին կամ ընդհանուր իրավասության դատարանին։",
      ],
    },

    {
      title:
        "§ 8. Կանոնադրության ուժի մեջ մտնելը և փոփոխությունները",
      paragraphs: [
        "Կանոնադրությունն ուժի մեջ է մտել 2023 թվականի նոյեմբերի 21-ին։",
        "SINEDIS-ը իրավունք ունի ցանկացած ժամանակ փոփոխել Կանոնադրությունը։",
        "Կանոնադրության նոր խմբագրությունը հրապարակվում է կայքում և կարող է ուղարկվել օգտատերերին e-mail-ով։",
      ],
    },

    {
      title: "§ 9. Եզրափակիչ դրույթներ",
      paragraphs: [
        "Կանոնադրության և SINEDIS ծառայությունների նկատմամբ կիրառվում է Լեհաստանի Հանրապետության իրավունքը։",
        "Վեճերը քննվում են ընդհանուր իրավասության դատարաններում կամ օրենքով նախատեսված այլ կարգով։",
        "Օգտատերերի հետ հաղորդակցությունը կարող է իրականացվել լեհերեն, բելառուսերեն կամ ռուսերեն լեզուներով։",
        "Ծառայության նյութերը պաշտպանված են հեղինակային իրավունքի մասին օրենսդրությամբ։",
      ],
    },

    {
      title: "Պաշտոնական տվյալներ",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Contact Center հեռախոս՝ +48 573581333",
        "",
        "Կայքեր՝",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const ckb: RulesDictionary = {
  pageTitle: "ڕێنمایی",
  subtitle:
    "بۆ پێشکەشکردنی خزمەتگوزارییە ئەلیکترۆنییەکان و بەستنی گرێبەستی بیمە بە شێوەی دوورەوە لە ڕێگەی SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. پێناسەکان",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością، ul. H. Dobrzańskiego Hubala 22D، 01-473 Warszawa، Polska، KRS: 0000999636، NIP: 5242953841، REGON: 52350998300000، ئیمەیڵ: info@sinedis.pl.",
        "SINEDIS وەکیلی بیمەیە و لە ناوی چەند کۆمپانیای بیمەوە، بەپێی دەسەڵاتە پێدراوەکان، کار دەکات.",
        "بەکارهێنەر — کەسی ئاسایی یان کەسی یاساییە کە خزمەتگوزارییەکانی SINEDIS یان Contact Center بەکاردەهێنێت.",
        "خزمەتگوزاری — پلاتفۆڕمی ئینتەرنێتی SINEDISە کە لە ڕێگەی ماڵپەڕەکانی https://sinedis.pl و https://greencard.agency بەردەستە.",
        "Contact Center — خزمەتگوزاری تەلەفۆنی SINEDIS: +48573581333.",
        "ڕاوێژکار — کارمەندی SINEDISە کە کردارەکانی وەکایەتی بیمە ئەنجام دەدات.",
        "خزمەتگوزارییەکان — خزمەتگوزارییە ئەلیکترۆنییەکان، لەوانە ئامادەکاری بۆ بەستنی گرێبەستی بیمە، بەستنی گرێبەست بە شێوەی دوورەوە و پارەدانی پارەی بیمە.",
        "بیمەکەر — کۆمپانیای بیمەیە کە SINEDIS لە ناوی ئەوەوە چالاکی وەکایەتی بیمە ئەنجام دەدات.",
        "بیمەگرتوو — بەکارهێنەرە کە گرێبەستی بیمە دەبەستێت.",
        "بیمەنامە — بەڵگەنامەیەکە کە بەستنی گرێبەستی بیمە پشتڕاست دەکاتەوە.",
        "OWU — مەرجە گشتییەکانی بیمە، کە پێش بەستنی گرێبەست پێشکەش بە بەکارهێنەر دەکرێن.",
        "سیاسەتی پاراستنی نهێنی — ڕێساکانی مامەڵەکردن لەگەڵ داتای کەسی و بەکارهێنانی خزمەتگوزارییەکە.",
      ],
    },

    {
      title: "§ 2. بڕگە گشتییەکان",
      paragraphs: [
        "ئەم ڕێنماییە شێوازی پێشکەشکردنی خزمەتگوزارییەکان بە شێوەی ئەلیکترۆنی و بەستنی گرێبەستەکانی بیمە بە شێوەی دوورەوە لە ڕێگەی SINEDIS دیاری دەکات.",
        "ڕێنماییەکە بە خۆڕایی بڵاو دەکرێتەوە و بۆ دابەزاندن، پاشەکەوتکردن و چاپکردن بەردەستە.",
        "بەکارهێنەر پێویستە پێش دەستپێکردنی بەکارهێنانی خزمەتگوزارییەکان خۆی بە ڕێنماییەکە ئاشنا بکات.",
        "بەکارهێنانی خزمەتگوزارییەکە واتە ڕەزامەندی بەکارهێنەر بە مەرجەکانی ڕێنماییەکە، لەوانەش مامەڵەکردن لەگەڵ داتای کەسی.",
        "پەیوەندی نێوان لایەنەکان بەپێی یاسای پۆڵەندا ڕێکدەخرێت، لەوانە ڕێساکانی خزمەتگوزاری دوورەوە، ناوەندایەتی بیمە، پاراستنی داتای کەسی و مافەکانی بەکارهێنەر.",
        "SINEDIS وەک وەکیلی بیمەی تۆمارکراو لە تۆماری KNF کار دەکات.",
        "دەتوانرێت تۆماربوونی وەکیل لە ڕێگەی تۆماری KNF بپشکنرێت: https://rpu.knf.gov.pl.",
        "کۆمسیۆنی SINEDIS لە ناو پارەی بیمەدا هەژمار کراوە و خەرجیی زیادە بۆ کڕیار دروست ناکات.",
      ],
    },

    {
      title: "§ 3. بەستن و کۆتاییهێنان بە گرێبەستی پێشکەشکردنی خزمەتگوزارییە ئەلیکترۆنییەکان",
      paragraphs: [
        "دەستپێکردنی بەکارهێنانی خزمەتگوزارییەکە واتە بەستنی گرێبەستی پێشکەشکردنی خزمەتگوزارییە ئەلیکترۆنییەکان بەبێ واژۆکردنی بەڵگەنامەیەکی جیاواز.",
        "بۆ Contact Center، دەستپێکردنی خزمەتگوزاری لە کاتی دەستپێکردنی گفتوگۆ لەگەڵ ڕاوێژکارەوە هەژمار دەکرێت.",
        "بەکارهێنەر دەتوانێت لە هەر کاتێکدا بەکارهێنانی خزمەتگوزارییەکان بوەستێنێت.",
        "گرێبەستی پێشکەشکردنی خزمەتگوزارییە ئەلیکترۆنییەکان بە شێوەی ئۆتۆماتیکی دوای دەرچوونی بەکارهێنەر لە خزمەتگوزارییەکە یان تەواوبوونی گفتوگۆ لەگەڵ ڕاوێژکار کۆتایی دێت.",
      ],
    },

    {
      title: "§ 4. ڕێساکانی گشتی پێشکەشکردنی خزمەتگوزارییەکان",
      paragraphs: [
        "خزمەتگوزارییەکە بۆ وەرگرتنی زانیاری دەربارەی بەرهەمەکانی بیمە، هەژمارکردنی پێشنیارەکان، بەستنی گرێبەستەکانی بیمە و دەستگەیشتن بە بەڵگەنامەکان دانراوە.",
        "خزمەتگوزاری ئۆنلاین بە درێژایی شەو و ڕۆژ کار دەکات، Contact Center بە پێی کاتی دیاریکراو کار دەکات.",
        "بەکارهێنەر پێویستە زانیاریی ڕاست، تەواو و نوێ پێشکەش بکات.",
        "بەکارهێنەر بەرپرسیارە لە ئەنجامەکانی پێشکەشکردنی زانیاریی نادروست یان ناتەواو.",
        "SINEDIS مافی پشکنینی زانیارییە پێشکەشکراوەکان هەیە.",
        "لە کاری خزمەتگوزارییەکەدا دەکرێت پچڕانی تەکنیکی هەبێت کە پەیوەندی بە چاکسازی، نوێکردنەوە یان پاشەکەوتکردنی داتاوە هەبێت.",
        "SINEDIS مافی هەیە لە حاڵەتی هەڕەشەی ئاسایش یان پێشێلکردنی ڕێنماییەکەدا، دەستگەیشتن بە خزمەتگوزارییەکە بە شێوەی کاتی سنووردار بکات.",
        "ناردنی ناوەڕۆکی نایاسایی، زیانگەیەن یان سووکایەتیئامێز لە ڕێگەی خزمەتگوزارییەکەوە قەدەغەیە.",
        "بەکارهێنانی خزمەتگوزارییەکە خۆڕاییە، جگە لە ئەرکی پارەدانی پارەی بیمە بەپێی گرێبەستە بەستراوەکان.",
      ],
    },

    {
      title: "§ 5. بەستنی گرێبەستی بیمە و پارەدانی پارەی بیمە",
      paragraphs: [
        "بەکارهێنەر بە شێوەی سەربەخۆ بەرهەمی بیمە، ڕادەی پاراستن و بڕی بیمە هەڵدەبژێرێت.",
        "پێش بەستنی گرێبەست، بەکارهێنەر زانیاری دەربارەی بیمەکەر، نرخی بیمە، مەرجەکانی پارەدان، ماوەکان، مافی پاشگەزبوونەوە و شێوازی پێشکەشکردنی سکاڵا وەردەگرێت.",
        "مەرجی بەستنی گرێبەست، دیاریکردنی دروستی زانیارییەکان و قبووڵکردنی مەرجەکانی بیمەیە.",
        "بەکارهێنەر پێویستە بنەمای یاسایی هەبێت بۆ گواستنەوەی داتای کەسانی سێیەم.",
        "گرێبەستی بیمە بە بەستراو هەژمار دەکرێت دوای هەڵبژاردنی هەڵبژاردەی کڕین و پارەدانی پارەی بیمە.",
        "پارەدان دەتوانرێت بە کارتی بانکی یان گواستنەوەی ئەلیکترۆنی لە ڕێگەی TPAY ئەنجام بدرێت.",
        "دوای بەستنی گرێبەست، بەکارهێنەر بیمەنامەی ئەلیکترۆنی وەردەگرێت.",
        "بەکارهێنەر مافی هەیە لە ماوەی 30 ڕۆژدا لە گرێبەستی بیمە پاشگەز ببێتەوە، ئەگەر یاسا یان سروشتی بەرهەمی بیمە بە جۆرێکی تر دیاری نەکردبێت.",
        "بۆ گرێبەستەکانی بیمەی کورتخایەن، مافی پاشگەزبوونەوە دەکرێت سنووردار بکرێت.",
      ],
    },

    {
      title: "§ 6. سیاسەتی پاراستنی نهێنی",
      paragraphs: [
        "SINEDIS گرنگییەکی تایبەت بە پاراستنی داتای کەسیی بەکارهێنەران دەدات.",
        "بەپێی سروشتی مامەڵەکردن لەگەڵ داتا، بەڕێوەبەرانی داتا دەتوانن کۆمپانیاکانی بیمە و SINEDIS بن.",
        "پێشکەشکردنی داتای کەسی خۆبەخشانەیە، بەڵام بۆ ئامادەکردنی پێشنیار و بەستنی گرێبەستی بیمە پێویستە.",
        "داتا بەپێی GDPR و یاسای پۆڵەندا مامەڵەی پێوە دەکرێت.",
        "تۆمارە سیستەمییەکان و ناونیشانی IP دەتوانن بۆ مەبەستی تەکنیکی و ئاماری بەکاربهێنرێن.",
        "خزمەتگوزارییەکە HTTPS و ڕێکارەکانی تری ئاسایش بەکاردەهێنێت بۆ پاراستنی داتای نێردراو.",
        "گفتوگۆ تەلەفۆنییەکان لەگەڵ Contact Center دەکرێت تۆمار بکرێن.",
        "سیاسەتی وردی کوکی لە ماڵپەڕی SINEDIS بەردەستە.",
      ],
    },

    {
      title: "§ 7. شێوازی مامەڵەکردن لەگەڵ سکاڵاکان",
      paragraphs: [
        "بەکارهێنەر مافی هەیە سکاڵا بە شێوەی نووسراو، زارەکی یان ئەلیکترۆنی پێشکەش بکات.",
        "سکاڵاکان دەتوانرێت لە ڕێگەی فۆڕمی ماڵپەڕ یان ئیمەیڵی reklamacje@sinedis.pl بنێردرێن.",
        "سکاڵاکە پێویستە زانیاریی ناساندنی بەکارهێنەر، وەسفی بارودۆخ و داواکارییەکان لەخۆ بگرێت.",
        "SINEDIS سکاڵاکە لە ماوەی 30 ڕۆژدا پشکنین دەکات، و لە حاڵەتە ئاڵۆزەکاندا — نەدواتر لە 60 ڕۆژ.",
        "وەڵام بە شێوەی سەرەکی بە فۆڕمی نووسراو پێشکەش دەکرێت.",
        "بەکارهێنەر مافی هەیە پەیوەندی بە ئۆمبۆدسمانی دارایی، دادگای ناوبژیوانی KNF یان دادگای گشتی بکات.",
      ],
    },

    {
      title: "§ 8. چوونە بواری جێبەجێکردن و گۆڕینی ڕێنماییەکە",
      paragraphs: [
        "ڕێنماییەکە لە 21ی تشرینی دووەمی 2023 چووەتە بواری جێبەجێکردن.",
        "SINEDIS مافی هەیە لە هەر کاتێکدا ڕێنماییەکە بگۆڕێت.",
        "وەشانی نوێی ڕێنماییەکە لە ماڵپەڕەکە بڵاو دەکرێتەوە و دەتوانرێت بە ئیمەیڵیش بۆ بەکارهێنەران بنێردرێت.",
      ],
    },

    {
      title: "§ 9. بڕگە کۆتاییەکان",
      paragraphs: [
        "یاسای کۆماری پۆڵەندا بۆ ڕێنماییەکە و خزمەتگوزارییەکانی SINEDIS جێبەجێ دەبێت.",
        "ناکۆکییەکان لەلایەن دادگاکانی گشتی یان بە شێوازەکانی تری چارەسەرکردنی ناکۆکی کە یاسا دیاری کردووە، پشکنین دەکرێن.",
        "پەیوەندیکردن لەگەڵ بەکارهێنەران دەتوانێت بە زمانی پۆڵەندی، بێلارووسی یان ڕووسی ئەنجام بدرێت.",
        "ماتریاڵەکانی خزمەتگوزارییەکە بە یاسای مافی دانەر پارێزراون.",
      ],
    },

    {
      title: "زانیارییە فەرمییەکان",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "ئیمەیڵ: info@sinedis.pl",
        "تەلەفۆنی Contact Center: +48573581333",
        "",
        "ماڵپەڕەکان:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
  
};
const kmr: RulesDictionary = {
  pageTitle: "RÊZIKNAME",
  subtitle:
    "ji bo pêşkêşkirina xizmetên elektronîkî û girêdana peymanên sîgorteyê ji dûr ve bi rêya SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Danasîn",

      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polonya, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS ajanek sîgorteyê ye ku li ser navê çend şirketên sîgorteyê, li gorî desthilatên ku ji wî re hatine dayîn, tevdigere.",
        "Bikarhêner — kesek ferdî an jî kesek qanûnî ye ku xizmeta SINEDIS an Contact Center bikar tîne.",
        "Xizmet — platforma înternetê ya SINEDIS e ku bi rêya malperên https://sinedis.pl û https://greencard.agency tê gihîştin.",
        "Contact Center — xizmeta telefonî ya SINEDIS: +48 573581333.",
        "Şêwirmend — karmendek SINEDIS e ku karên ajanî pêk tîne.",
        "Xizmet — xizmetên elektronîkî ne ku amadekirina peymana sîgorteyê, girêdana peymanan ji dûr ve û dravdana primê sîgorteyê dihewînin.",
        "Şirketa sîgorteyê — şirketa sîgorteyê ye ku SINEDIS li ser navê wê çalakiya ajanî pêk tîne.",
        "Sîgortegir — bikarhênerê ku peymana sîgorteyê girêdide.",
        "Polîçe — belgeya ku girêdana peymana sîgorteyê piştrast dike.",
        "OWU — Mercên Giştî yên Sîgorteyê ne ku berî girêdana peymanê ji bikarhêner re têne pêşkêşkirin.",
        "Polîtîkaya nepeniyê — rêzikên pêvajokirina daneyên kesane û bikaranîna xizmetê.",
      ],
    },

    {
      title: "§ 2. Hikmên Giştî",

      paragraphs: [
        "Ev Rêzikname rêbaza pêşkêşkirina xizmetan bi awayê elektronîkî û girêdana peymanên sîgorteyê ji dûr ve bi rêya SINEDIS diyar dike.",
        "Rêzikname bê pere tê belavkirin û ji bo daxistin, tomar kirin û çapkirinê berdest e.",
        "Bikarhêner divê berî destpêkirina bikaranîna xizmetan bi Rêziknameyê re nas be.",
        "Bikaranîna xizmetê pejirandina şertên Rêziknameyê ji aliyê bikarhêner ve tê maneyê, di nav de jî pêvajokirina daneyên kesane.",
        "Li ser têkiliyên navbera aliyan de qanûnên Polonyayê têne sepandin, di nav de jî rêzikên xizmetên ji dûr ve, navbeynkarîya sîgorteyê, parastina daneyên kesane û mafên xerîdaran.",
        "SINEDIS wekî ajanek sîgorteyê ku di qeyda KNF de hatiye tomar kirin tevdigere.",
        "Qeydkirina ajanê dikare bi rêya qeyda KNF were kontrolkirin: https://rpu.knf.gov.pl.",
        "Komîsyona SINEDIS di nav primê sîgorteyê de cih digire û ji bo xerîdar mesrefên zêde çênake.",
      ],
    },

    {
      title: "§ 3. Girêdan û Dawîkirina Peymana Xizmetên Elektronîkî",

      paragraphs: [
        "Destpêkirina bikaranîna xizmetê tê maneya girêdana peymana xizmetên elektronîkî bêyî îmzekirina belgeyek cuda.",
        "Ji bo Contact Center, destpêka pêşkêşkirina xizmetê destpêka axaftina bi şêwirmend re tê hesibandin.",
        "Bikarhêner dikare her dem bikaranîna xizmetan rawestîne.",
        "Peymana xizmetên elektronîkî piştî derketina bikarhêner ji xizmetê an dawîbûna axaftina bi şêwirmend re bi awayekî otomatîkî diqede.",
      ],
    },

    {
      title: "§ 4. Rêzikên Giştî yên Pêşkêşkirina Xizmetan",

      paragraphs: [
        "Xizmet ji bo wergirtina agahdariyên derbarê berhemên sîgorteyê, hesabkirina pêşniyaran, girêdana peymanên sîgorteyê û gihîştina belgeyan hatiye amadekirin.",
        "Xizmeta serhêl 24 demjimêran dixebite, Contact Center li gorî dema xebatê ya diyarkirî kar dike.",
        "Bikarhêner mecbûr e daneyên rast, temam û nûjen pêşkêş bike.",
        "Bikarhêner berpirsiyar e ji bo encamên şandina agahdariyên şaş an netemam.",
        "SINEDIS mafê kontrolkirina daneyên pêşkêşkirî heye.",
        "Di xebata xizmetê de qutbûnên teknîkî dikarin çêbibin ku bi xizmetkirin, nûvekirin an kopiyên parastinê ve girêdayî ne.",
        "SINEDIS dikare di rewşa metirsiyên ewlehiyê an binpêkirina Rêziknameyê de gihîştina xizmetê bi awayekî demkî sînordar bike.",
        "Şandina naveroka neqanûnî, zirardar an heqaretkar bi rêya xizmetê qedexe ye.",
        "Bikaranîna xizmetê belaş e, ji bilî mecbûriya dravdana primê sîgorteyê ya peymanên ku hatine girêdan.",
      ],
    },

    {
      title: "§ 5. Girêdana Peymana Sîgorteyê û Dravdana Primê Sîgorteyê",

      paragraphs: [
        "Bikarhêner bi serê xwe berhema sîgorteyê, asta parastinê û meblağa sîgorteyê hilbijêre.",
        "Berî girêdana peymanê, bikarhêner agahdarî derbarê şirketa sîgorteyê, mesrefa sîgorteyê, şertên dravdanê, demjimêran, mafê vekişînê û rêbaza şikayetkirinê werdigire.",
        "Merca girêdana peymanê pêşkêşkirina rast a daneyan û pejirandina şertên sîgorteyê ye.",
        "Bikarhêner mecbûr e bingehên qanûnî hebe ji bo şandina daneyên kesên sêyem.",
        "Peymana sîgorteyê piştî hilbijartina vebijarka kirînê û dravdana primê sîgorteyê hatiye girêdan tê hesibandin.",
        "Dravdan dikare bi karta bankeyê an veguhastina elektronîkî ya TPAY were kirin.",
        "Piştî girêdana peymanê, bikarhêner polîçeyek elektronîkî werdigire.",
        "Bikarhêner maf heye ku di nav 30 rojan de ji peymana sîgorteyê vekişe, heke qanûn an taybetmendiya berhema sîgorteyê şertê din diyar nekibe.",
        "Ji bo peymanên sîgorteyê yên kurtdem, mafê vekişînê dikare were sînordarkirin.",
      ],
    },
    {
      title: "§ 6. Polîtîkaya Nepeniyê",

      paragraphs: [
        "SINEDIS baldarîyek taybet dide parastina daneyên kesane yên bikarhêneran.",
        "Li gorî cûreya pêvajokirinê, rêvebirên danean dikarin hem şirketên sîgorteyê û hem jî SINEDIS bin.",
        "Pêşkêşkirina daneyên kesane dilxwazî ye, lê ji bo amadekirina pêşniyarê û girêdana peymana sîgorteyê pêwîst e.",
        "Dane li gorî GDPR û qanûnên Polonyayê têne pêvajokirin.",
        "Tomarên sîstemê û navnîşanên IP dikarin ji bo armancên teknîkî û statîstîkî werin bikaranîn.",
        "Xizmet ji bo parastina daneyên ku têne veguhestin HTTPS û tedbîrên din ên ewlehiyê bikar tîne.",
        "Axaftinên telefonî bi Contact Center re dikarin werin tomar kirin.",
        "Polîtîkaya cookieyan a berfireh li ser malpera SINEDIS berdest e.",
      ],
    },

    {
      title: "§ 7. Rêbaza Nirxandina Şikayetan",

      paragraphs: [
        "Bikarhêner maf heye ku şikayetê bi nivîs, devkî an elektronîkî pêşkêş bike.",
        "Şikayet dikarin bi forma li ser malperê an bi e-mail: reklamacje@sinedis.pl werin şandin.",
        "Şikayet divê agahdariyên nasnameyê yên bikarhêner, ravekirina rewşê û daxwazên wî dihewîne.",
        "SINEDIS di nav 30 rojan de şikayetê dinirxîne, û di rewşên tevlihev de ne derengtir ji 60 rojan.",
        "Bersiv bi awayekî sereke bi nivîs tê pêşkêşkirin.",
        "Bikarhêner maf heye ku serî li Ombudsmanê Aborî, Dadgeha Tahkîmê ya KNF an dadgeha giştî bide.",
      ],
    },

    {
      title: "§ 8. Ketina Meriyetê û Guhertina Rêziknameyê",

      paragraphs: [
        "Ev Rêzikname di 21ê Mijdara 2023-an de kete meriyetê.",
        "SINEDIS maf heye ku her dem Rêziknameyê biguherîne.",
        "Guhertoya nû ya Rêziknameyê li ser malperê tê weşandin û dikare bi e-mail ji bikarhêneran re jî were şandin.",
      ],
    },

    {
      title: "§ 9. Hikmên Dawî",

      paragraphs: [
        "Li ser vê Rêziknameyê û xizmetên SINEDIS qanûnên Komara Polonyayê têne sepandin.",
        "Nakokî li dadgehên giştî an bi rêbazên din ên çareserkirinê yên ku qanûn destnîşan dike tên nirxandin.",
        "Têkilî bi bikarhêneran re dikare bi zimanê polonî, belarusî an rûsî were kirin.",
        "Materyalên xizmetê bi qanûnên mafên nivîskarî têne parastin.",
      ],
    },

    {
      title: "Agahdariyên Fermî",

      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polonya",
        "",

        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",

        "E-mail: info@sinedis.pl",
        "Telefona Contact Center: +48 573581333",
        "",

        "Malper:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const ar: RulesDictionary = {
  pageTitle: "اللائحة",
  subtitle:
    "لتقديم الخدمات الإلكترونية وإبرام عقود التأمين عن بُعد عبر SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. التعاريف",
      paragraphs: [
        "SINEDIS — شركة SINEDIS Spółka z ograniczoną odpowiedzialnością، العنوان: ul. H. Dobrzańskiego Hubala 22D، 01-473 Warszawa، بولندا، KRS: 0000999636، NIP: 5242953841، REGON: 52350998300000، البريد الإلكتروني: info@sinedis.pl.",
        "تعمل SINEDIS كوكيل تأمين نيابةً عن عدة شركات تأمين بموجب الصلاحيات الممنوحة لها.",
        "المستخدم — شخص طبيعي أو اعتباري يستخدم خدمة SINEDIS أو مركز الاتصال.",
        "الخدمة — منصة SINEDIS الإلكترونية المتاحة عبر موقعي https://sinedis.pl و https://greencard.agency.",
        "مركز الاتصال (Contact Center) — خدمة الهاتف الخاصة بـ SINEDIS على الرقم: +48573581333.",
        "المستشار — موظف لدى SINEDIS يقوم بأعمال الوساطة التأمينية.",
        "الخدمات — الخدمات الإلكترونية، بما في ذلك التحضير لإبرام عقد التأمين، وإبرام العقود عن بُعد، وسداد أقساط التأمين.",
        "شركة التأمين — شركة التأمين التي تمارس SINEDIS النشاط التأميني بالنيابة عنها.",
        "حامل الوثيقة — المستخدم الذي يبرم عقد التأمين.",
        "وثيقة التأمين — المستند الذي يثبت إبرام عقد التأمين.",
        "OWU — الشروط العامة للتأمين التي تُقدَّم للمستخدم قبل إبرام العقد.",
        "سياسة الخصوصية — القواعد المنظمة لمعالجة البيانات الشخصية واستخدام الخدمة.",
      ],
    },

    {
      title: "§ 2. الأحكام العامة",
      paragraphs: [
        "تحدد هذه اللائحة قواعد تقديم الخدمات الإلكترونية وإبرام عقود التأمين عن بُعد عبر SINEDIS.",
        "تُتاح هذه اللائحة مجانًا ويمكن تنزيلها وحفظها وطباعتها.",
        "يلتزم المستخدم بالاطلاع على هذه اللائحة قبل البدء في استخدام الخدمات.",
        "يُعد استخدام الخدمة موافقةً من المستخدم على أحكام هذه اللائحة، بما في ذلك معالجة البيانات الشخصية.",
        "تخضع العلاقة بين الأطراف لأحكام القانون البولندي، بما في ذلك القواعد المتعلقة بالخدمات المقدمة عن بُعد، والوساطة التأمينية، وحماية البيانات الشخصية، وحقوق المستهلك.",
        "تعمل SINEDIS كوكيل تأمين مسجل في سجل هيئة الرقابة المالية البولندية (KNF).",
        "يمكن التحقق من تسجيل الوكيل عبر سجل KNF على الرابط: https://rpu.knf.gov.pl.",
        "تُدرج عمولة SINEDIS ضمن قسط التأمين ولا تترتب عليها أي تكاليف إضافية بالنسبة للعميل.",
      ],
    },

    {
      title: "§ 3. إبرام وإنهاء عقد تقديم الخدمات الإلكترونية",
      paragraphs: [
        "يُعد بدء استخدام الخدمة إبرامًا لعقد تقديم الخدمات الإلكترونية دون الحاجة إلى توقيع مستند منفصل.",
        "بالنسبة لمركز الاتصال، يُعتبر بدء المحادثة مع المستشار بداية تقديم الخدمة.",
        "يجوز للمستخدم التوقف عن استخدام الخدمات في أي وقت.",
        "ينتهي عقد تقديم الخدمات الإلكترونية تلقائيًا عند مغادرة المستخدم للخدمة أو عند انتهاء المحادثة مع المستشار.",
      ],
    },

    {
      title: "§ 4. القواعد العامة لتقديم الخدمات",
      paragraphs: [
        "تهدف الخدمة إلى توفير معلومات حول المنتجات التأمينية، وحساب العروض التأمينية، وإبرام عقود التأمين، والوصول إلى المستندات ذات الصلة.",
        "تعمل الخدمة الإلكترونية على مدار الساعة، بينما يعمل مركز الاتصال وفقًا لساعات العمل المحددة.",
        "يلتزم المستخدم بتقديم بيانات صحيحة وكاملة ومحدثة.",
        "يتحمل المستخدم المسؤولية عن النتائج المترتبة على تقديم بيانات غير صحيحة أو غير مكتملة.",
        "يحق لـ SINEDIS التحقق من البيانات المقدمة.",
        "قد تتخلل عمل الخدمة فترات توقف فنية لأغراض الصيانة أو التحديث أو النسخ الاحتياطي.",
        "يحق لـ SINEDIS تقييد الوصول إلى الخدمة مؤقتًا في حال وجود تهديدات أمنية أو انتهاك لأحكام هذه اللائحة.",
        "يُحظر إرسال أي محتوى غير قانوني أو ضار أو مسيء عبر الخدمة.",
        "استخدام الخدمة مجاني، باستثناء الالتزام بسداد أقساط التأمين المترتبة على العقود المبرمة.",
      ],
    },

    {
      title: "§ 5. إبرام عقد التأمين وسداد قسط التأمين",
      paragraphs: [
        "يقوم المستخدم باختيار المنتج التأميني ونطاق التغطية ومبلغ التأمين بشكل مستقل.",
        "قبل إبرام العقد، يحصل المستخدم على معلومات تتعلق بشركة التأمين، وتكلفة التأمين، وشروط الدفع، والمدة، وحق الانسحاب، وآلية تقديم الشكاوى.",
        "يشترط لإبرام العقد إدخال البيانات بشكل صحيح وقبول شروط التأمين.",
        "يلتزم المستخدم بامتلاك أساس قانوني يسمح له بتقديم بيانات الأشخاص الآخرين.",
        "يُعتبر عقد التأمين مبرمًا بعد اختيار خيار الشراء وسداد قسط التأمين.",
        "يمكن سداد القسط بواسطة بطاقة مصرفية أو تحويل إلكتروني عبر نظام TPAY.",
        "بعد إبرام العقد، يحصل المستخدم على وثيقة تأمين إلكترونية.",
        "يحق للمستخدم الانسحاب من عقد التأمين خلال 30 يومًا ما لم ينص القانون أو طبيعة المنتج التأميني على خلاف ذلك.",
        "بالنسبة لعقود التأمين قصيرة الأجل، قد يكون حق الانسحاب محدودًا.",
      ],
    },
    {
      title: "§ 6. سياسة الخصوصية",
      paragraphs: [
        "تولي SINEDIS اهتمامًا خاصًا بحماية البيانات الشخصية للمستخدمين.",
        "قد تكون شركات التأمين وSINEDIS جهاتٍ مسؤولة عن معالجة البيانات بحسب طبيعة المعالجة.",
        "يُعد تقديم البيانات الشخصية أمرًا اختياريًا، ولكنه ضروري لإعداد العرض التأميني وإبرام عقد التأمين.",
        "تتم معالجة البيانات وفقًا للائحة العامة لحماية البيانات (GDPR) والتشريعات البولندية المعمول بها.",
        "يجوز استخدام سجلات النظام وعناوين IP لأغراض تقنية وإحصائية.",
        "تستخدم الخدمة بروتوكول HTTPS وغيرها من التدابير الأمنية لحماية البيانات المنقولة.",
        "قد يتم تسجيل المكالمات الهاتفية مع مركز الاتصال (Contact Center).",
        "تتوفر سياسة ملفات تعريف الارتباط (Cookies) التفصيلية على موقع SINEDIS.",
      ],
    },

    {
      title: "§ 7. إجراءات معالجة الشكاوى",
      paragraphs: [
        "يحق للمستخدم تقديم شكوى كتابيًا أو شفهيًا أو إلكترونيًا.",
        "يمكن إرسال الشكاوى عبر النموذج المتاح على الموقع الإلكتروني أو عبر البريد الإلكتروني: reklamacje@sinedis.pl.",
        "يجب أن تتضمن الشكوى بيانات تعريف المستخدم ووصفًا للحالة والمتطلبات المطلوبة.",
        "تقوم SINEDIS بدراسة الشكوى خلال 30 يومًا، وفي الحالات المعقدة خلال مدة لا تتجاوز 60 يومًا.",
        "يتم تقديم الرد في المقام الأول بشكل كتابي.",
        "يحق للمستخدم اللجوء إلى أمين المظالم المالي أو محكمة التحكيم التابعة لهيئة KNF أو إلى المحاكم المختصة.",
      ],
    },

    {
      title: "§ 8. سريان اللائحة وتعديلها",
      paragraphs: [
        "دخلت هذه اللائحة حيز التنفيذ في 21 نوفمبر 2023.",
        "يحق لـ SINEDIS تعديل هذه اللائحة في أي وقت.",
        "يتم نشر النسخة الجديدة من اللائحة على الموقع الإلكتروني، ويجوز إرسالها إلى المستخدمين عبر البريد الإلكتروني.",
      ],
    },

    {
      title: "§ 9. الأحكام الختامية",
      paragraphs: [
        "تخضع هذه اللائحة والخدمات المقدمة من SINEDIS لقوانين جمهورية بولندا.",
        "تُفصل النزاعات من قبل المحاكم المختصة أو من خلال وسائل التسوية الأخرى المنصوص عليها قانونًا.",
        "يمكن أن يتم التواصل مع المستخدمين باللغة البولندية أو البيلاروسية أو الروسية.",
        "جميع المواد المنشورة ضمن الخدمة محمية بموجب قوانين حقوق النشر والتأليف.",
      ],
    },

    {
      title: "البيانات الرسمية",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "البريد الإلكتروني: info@sinedis.pl",
        "هاتف مركز الاتصال: +48573581333",
        "",
        "المواقع الإلكترونية:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};

const uk: RulesDictionary = {
  pageTitle: "РЕГЛАМЕНТ",
  subtitle:
    "надання електронних послуг та укладення договорів страхування дистанційно через SINEDIS Sp. z o.o.",
  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Визначення",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS є страховим агентом, який діє від імені кількох страхових компаній на підставі наданих повноважень.",
        "Користувач — фізична або юридична особа, яка користується сервісом SINEDIS або Contact Center.",
        "Сервіс — інтернет-платформа SINEDIS, доступна через сайти https://sinedis.pl та https://greencard.agency.",
        "Contact Center — телефонний сервіс SINEDIS: +48 573581333.",
        "Консультант — працівник SINEDIS, який здійснює агентську діяльність.",
        "Послуги — електронні послуги, включаючи підготовку до укладення договору страхування, дистанційне укладення договорів та оплату страхової премії.",
        "Страховик — страхова компанія, від імені якої SINEDIS здійснює агентську діяльність.",
        "Страхувальник — користувач, який укладає договір страхування.",
        "Поліс — документ, що підтверджує укладення договору страхування.",
        "OWU — загальні умови страхування, які надаються користувачеві до укладення договору.",
        "Політика конфіденційності — правила обробки персональних даних і використання сервісу.",
      ],
    },

    {
      title: "§ 2. Загальні положення",
      paragraphs: [
        "Цей Регламент визначає порядок надання послуг в електронній формі та укладення договорів страхування дистанційно через SINEDIS.",
        "Регламент розміщується безкоштовно та доступний для завантаження, збереження і друку.",
        "Користувач зобов’язаний ознайомитися з Регламентом до початку використання послуг.",
        "Використання сервісу означає згоду користувача з умовами Регламенту, включаючи обробку персональних даних.",
        "До правовідносин сторін застосовуються положення законодавства Польщі, включаючи норми щодо дистанційних послуг, страхового посередництва, захисту персональних даних та прав споживачів.",
        "SINEDIS діє як страховий агент, зареєстрований у реєстрі KNF.",
        "Перевірити реєстрацію агента можна через реєстр KNF: https://rpu.knf.gov.pl.",
        "Комісійна винагорода SINEDIS включена до страхової премії та не створює для клієнта додаткових витрат.",
      ],
    },

    {
      title: "§ 3. Укладення та припинення договору про надання електронних послуг",
      paragraphs: [
        "Початок використання сервісу означає укладення договору про надання електронних послуг без підписання окремого документа.",
        "Для Contact Center початком надання послуг вважається початок розмови з консультантом.",
        "Користувач може припинити користування послугами в будь-який час.",
        "Договір про надання електронних послуг припиняється автоматично після виходу користувача із сервісу або завершення розмови з консультантом.",
      ],
    },

    {
      title: "§ 4. Загальні правила надання послуг",
      paragraphs: [
        "Сервіс призначений для отримання інформації про страхові продукти, розрахунку пропозицій, укладення договорів страхування та доступу до документів.",
        "Онлайн-сервіс працює цілодобово, Contact Center — відповідно до встановленого графіка.",
        "Користувач зобов’язаний надавати достовірні, повні та актуальні дані.",
        "Користувач несе відповідальність за наслідки надання неправдивої або неповної інформації.",
        "SINEDIS має право перевіряти надані дані.",
        "У роботі сервісу можливі технічні перерви, пов’язані з обслуговуванням, оновленнями або резервним копіюванням.",
        "SINEDIS має право тимчасово обмежити доступ до сервісу у разі загроз безпеці або порушення положень Регламенту.",
        "Забороняється передавати через сервіс незаконний, шкідливий або образливий контент.",
        "Користування сервісом є безкоштовним, за винятком обов’язку сплати страхової премії за укладеними договорами.",
      ],
    },
    {
      title: "§ 5. Укладення договору страхування та сплата страхової премії",
      paragraphs: [
        "Користувач самостійно обирає страховий продукт, обсяг страхового покриття та страхову суму.",
        "Перед укладенням договору користувач отримує інформацію про страховика, вартість страхування, умови оплати, строки, право на відмову від договору та порядок подання скарг.",
        "Умовою укладення договору є коректне зазначення даних та прийняття умов страхування.",
        "Користувач зобов’язаний мати законні підстави для передачі персональних даних третіх осіб.",
        "Договір страхування вважається укладеним після вибору опції придбання та сплати страхової премії.",
        "Оплата може здійснюватися банківською карткою або електронним переказом через TPAY.",
        "Після укладення договору користувач отримує електронний страховий поліс.",
        "Користувач має право відмовитися від договору страхування протягом 30 днів, якщо інше не передбачено законодавством або характером страхового продукту.",
        "Для короткострокових договорів страхування право на відмову може бути обмежене.",
      ],
    },

    {
      title: "§ 6. Політика конфіденційності",
      paragraphs: [
        "SINEDIS приділяє особливу увагу захисту персональних даних користувачів.",
        "Адміністраторами персональних даних можуть бути страхові компанії та SINEDIS залежно від характеру обробки.",
        "Надання персональних даних є добровільним, але необхідним для підготовки пропозиції та укладення договору страхування.",
        "Дані обробляються відповідно до GDPR та законодавства Польщі.",
        "Системні журнали та IP-адреси можуть використовуватися для технічних і статистичних цілей.",
        "Сервіс використовує HTTPS та інші заходи безпеки для захисту переданих даних.",
        "Телефонні розмови з Contact Center можуть записуватися.",
        "Детальна політика щодо файлів cookie доступна на сайті SINEDIS.",
      ],
    },

    {
      title: "§ 7. Порядок розгляду скарг",
      paragraphs: [
        "Користувач має право подати скаргу в письмовій, усній або електронній формі.",
        "Скарги можуть надсилатися через форму на сайті або на e-mail: reklamacje@sinedis.pl.",
        "Скарга повинна містити ідентифікаційні дані користувача, опис ситуації та вимоги заявника.",
        "SINEDIS розглядає скаргу протягом 30 днів, а в складних випадках — не пізніше ніж протягом 60 днів.",
        "Відповідь надається переважно у письмовій формі.",
        "Користувач має право звернутися до фінансового омбудсмена, арбітражного суду KNF або суду загальної юрисдикції.",
      ],
    },

    {
      title: "§ 8. Набрання чинності та зміни Регламенту",
      paragraphs: [
        "Регламент набрав чинності 21 листопада 2023 року.",
        "SINEDIS має право змінювати Регламент у будь-який час.",
        "Нова редакція Регламенту публікується на сайті та може надсилатися користувачам електронною поштою.",
      ],
    },

    {
      title: "§ 9. Прикінцеві положення",
      paragraphs: [
        "До Регламенту та послуг SINEDIS застосовується право Республіки Польща.",
        "Спори розглядаються судами загальної юрисдикції або іншими передбаченими законом способами врегулювання.",
        "Взаємодія з користувачами може здійснюватися польською, білоруською або російською мовами.",
        "Матеріали сервісу захищені законодавством про авторське право.",
      ],
    },

    {
      title: "Офіційні дані",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Телефон Contact Center: +48 573581333",
        "",
        "Сайти:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],
};
const he: RulesDictionary = {

  pageTitle: "תקנון",

  subtitle:
    "למתן שירותים אלקטרוניים ולכריתת חוזי ביטוח מרחוק באמצעות SINEDIS Sp. z o.o.",

  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. הגדרות",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS היא סוכנות ביטוח הפועלת מטעמן של מספר חברות ביטוח מכוח ייפויי כוח והרשאות מתאימים.",
        "משתמש — אדם פרטי או תאגיד המשתמש בשירותי SINEDIS או במוקד השירות הטלפוני.",
        "השירות — פלטפורמת האינטרנט של SINEDIS הזמינה בכתובות https://sinedis.pl ו-https://greencard.agency.",
        "מוקד השירות (Contact Center) — השירות הטלפוני של SINEDIS: +48 573581333.",
        "יועץ — עובד SINEDIS המבצע פעולות תיווך ביטוחי.",
        "שירותים — שירותים אלקטרוניים, לרבות הכנה לכריתת חוזה ביטוח, כריתת חוזי ביטוח מרחוק ותשלום פרמיית ביטוח.",
        "מבטח — חברת הביטוח שבשמה SINEDIS פועלת כסוכן ביטוח.",
        "מבוטח / בעל פוליסה — משתמש המתקשר בחוזה ביטוח.",
        "פוליסה — מסמך המאשר את כריתת חוזה הביטוח.",
        "OWU — תנאי הביטוח הכלליים הנמסרים למשתמש לפני כריתת החוזה.",
        "מדיניות פרטיות — כללי עיבוד הנתונים האישיים והשימוש בשירות.",
      ],
    },

    {
      title: "§ 2. הוראות כלליות",
      paragraphs: [
        "תקנון זה מסדיר את אופן מתן השירותים האלקטרוניים ואת הליך כריתת חוזי הביטוח מרחוק באמצעות SINEDIS.",
        "התקנון מפורסם ללא תשלום וזמין להורדה, שמירה והדפסה.",
        "על המשתמש לעיין בתקנון לפני תחילת השימוש בשירותים.",
        "השימוש בשירות מהווה הסכמה של המשתמש לתנאי התקנון, לרבות לעיבוד הנתונים האישיים.",
        "על היחסים בין הצדדים יחול הדין הפולני, לרבות הוראות הנוגעות לשירותים מרחוק, תיווך ביטוחי, הגנת מידע אישי וזכויות צרכנים.",
        "SINEDIS פועלת כסוכן ביטוח הרשום במרשם KNF.",
        "ניתן לאמת את רישום הסוכן במרשם KNF בכתובת: https://rpu.knf.gov.pl.",
        "עמלת התיווך של SINEDIS כלולה בפרמיית הביטוח ואינה יוצרת עלויות נוספות ללקוח.",
      ],
    },

    {
      title: "§ 3. כריתה וסיום של הסכם למתן שירותים אלקטרוניים",
      paragraphs: [
        "תחילת השימוש בשירות מהווה כריתת הסכם למתן שירותים אלקטרוניים ללא צורך בחתימה על מסמך נפרד.",
        "במוקד השירות, תחילת מתן השירותים נחשבת למועד תחילת השיחה עם היועץ.",
        "המשתמש רשאי להפסיק את השימוש בשירותים בכל עת.",
        "ההסכם למתן שירותים אלקטרוניים מסתיים אוטומטית עם יציאת המשתמש מהשירות או עם סיום השיחה עם היועץ.",
      ],
    },

    {
      title: "§ 4. כללים כלליים למתן השירותים",
      paragraphs: [
        "השירות מיועד לקבלת מידע על מוצרי ביטוח, חישוב הצעות ביטוח, כריתת חוזי ביטוח וגישה למסמכים.",
        "השירות המקוון פועל 24 שעות ביממה, בעוד שמוקד השירות פועל בהתאם לשעות הפעילות שנקבעו.",
        "המשתמש מחויב למסור נתונים נכונים, מלאים ומעודכנים.",
        "המשתמש נושא באחריות להשלכות של מסירת מידע שגוי או חלקי.",
        "ל-SINEDIS הזכות לאמת את הנתונים שנמסרו.",
        "ייתכנו הפסקות טכניות בשירות עקב תחזוקה, עדכונים או גיבויים.",
        "ל-SINEDIS הזכות להגביל זמנית את הגישה לשירות במקרה של סיכון אבטחתי או הפרת הוראות התקנון.",
        "אסור להעביר באמצעות השירות תכנים בלתי חוקיים, מזיקים או פוגעניים.",
        "השימוש בשירות הוא ללא תשלום, למעט החובה לשלם את פרמיית הביטוח בגין חוזי ביטוח שנכרתו.",
      ],
    },
    {
      title: "§ 5. כריתת חוזה ביטוח ותשלום פרמיית הביטוח",
      paragraphs: [
        "המשתמש בוחר באופן עצמאי את מוצר הביטוח, היקף הכיסוי וסכום הביטוח.",
        "לפני כריתת החוזה, המשתמש מקבל מידע על המבטח, עלות הביטוח, תנאי התשלום, המועדים, זכות הביטול והליך הגשת תלונות.",
        "תנאי לכריתת החוזה הוא מסירת נתונים נכונים וקבלת תנאי הביטוח.",
        "המשתמש מחויב להחזיק בבסיס משפטי מתאים למסירת נתונים של צדדים שלישיים.",
        "חוזה הביטוח נחשב ככרות לאחר בחירת אפשרות הרכישה ותשלום פרמיית הביטוח.",
        "התשלום יכול להתבצע באמצעות כרטיס בנקאי או העברה אלקטרונית דרך TPAY.",
        "לאחר כריתת החוזה, המשתמש מקבל פוליסה אלקטרונית.",
        "המשתמש רשאי לבטל את חוזה הביטוח בתוך 30 ימים, אלא אם הדין או אופי מוצר הביטוח קובעים אחרת.",
        "ביטוחים לתקופה קצרה עשויים להיות כפופים להגבלות בנוגע לזכות הביטול.",
      ],
    },

    {
      title: "§ 6. מדיניות פרטיות",
      paragraphs: [
        "SINEDIS מקדישה תשומת לב מיוחדת להגנה על הנתונים האישיים של המשתמשים.",
        "מנהלי הנתונים עשויים להיות חברות הביטוח ו-SINEDIS, בהתאם לאופי העיבוד.",
        "מסירת נתונים אישיים היא וולונטרית, אך נדרשת לצורך הכנת הצעת ביטוח וכריתת חוזה ביטוח.",
        "הנתונים מעובדים בהתאם ל-GDPR ולחקיקה הפולנית.",
        "יומני מערכת וכתובות IP עשויים לשמש למטרות טכניות וסטטיסטיות.",
        "השירות משתמש ב-HTTPS ובאמצעי אבטחה נוספים להגנה על הנתונים המועברים.",
        "שיחות טלפון עם מוקד השירות עשויות להיות מוקלטות.",
        "מדיניות Cookies מפורטת זמינה באתר של SINEDIS.",
      ],
    },

    {
      title: "§ 7. הליך טיפול בתלונות",
      paragraphs: [
        "המשתמש רשאי להגיש תלונה בכתב, בעל פה או באמצעים אלקטרוניים.",
        "ניתן לשלוח תלונות באמצעות הטופס באתר או לכתובת הדוא״ל: reklamacje@sinedis.pl.",
        "על התלונה לכלול את פרטי הזיהוי של המשתמש, תיאור המקרה והדרישות המבוקשות.",
        "SINEDIS תטפל בתלונה בתוך 30 ימים, ובמקרים מורכבים — לא יאוחר מ-60 ימים.",
        "המענה יינתן בעיקר בכתב.",
        "המשתמש רשאי לפנות לנציב הפיננסי, לבית הדין לבוררות של KNF או לבית משפט מוסמך.",
      ],
    },

    {
      title: "§ 8. כניסת התקנון לתוקף ושינויים בו",
      paragraphs: [
        "תקנון זה נכנס לתוקף ביום 21 בנובמבר 2023.",
        "ל-SINEDIS הזכות לשנות את התקנון בכל עת.",
        "הגרסה החדשה של התקנון תפורסם באתר ויכולה להישלח למשתמשים באמצעות דוא״ל.",
      ],
    },

    {
      title: "§ 9. הוראות סופיות",
      paragraphs: [
        "על התקנון ועל השירותים של SINEDIS חל דינה של רפובליקת פולין.",
        "מחלוקות יוכרעו על ידי בתי המשפט המוסמכים או בדרכים אחרות ליישוב סכסוכים המותרות על פי דין.",
        "התקשורת עם המשתמשים עשויה להתבצע בשפה הפולנית, הבלארוסית או הרוסית.",
        "תכני השירות מוגנים על פי דיני זכויות יוצרים.",
      ],
    },

    {
      title: "פרטים רשמיים",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "טלפון מוקד השירות: +48 573581333",
        "",
        "אתרי אינטרנט:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],

};

const az: RulesDictionary = {

  pageTitle: "REQLAMENT",

  subtitle:
    "SINEDIS Sp. z o.o. vasitəsilə məsafədən elektron xidmətlərin göstərilməsi və sığorta müqavilələrinin bağlanması qaydaları",

  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Təriflər",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS verilmiş səlahiyyətlər əsasında bir neçə sığorta şirkətinin adından fəaliyyət göstərən sığorta agentidir.",
        "İstifadəçi — SINEDIS xidmətindən və ya Contact Center-dən istifadə edən fiziki və ya hüquqi şəxs.",
        "Xidmət — https://sinedis.pl və https://greencard.agency internet saytları vasitəsilə əlçatan olan SINEDIS onlayn platforması.",
        "Contact Center — SINEDIS-in telefon xidməti: +48 573581333.",
        "Məsləhətçi — agent funksiyalarını yerinə yetirən SINEDIS əməkdaşı.",
        "Xidmətlər — sığorta müqaviləsinin bağlanmasına hazırlıq, məsafədən sığorta müqavilələrinin bağlanması və sığorta haqqının ödənilməsi daxil olmaqla elektron xidmətlər.",
        "Sığortaçı — SINEDIS-in agent fəaliyyəti həyata keçirdiyi sığorta şirkəti.",
        "Sığortalı — sığorta müqaviləsi bağlayan istifadəçi.",
        "Polis — sığorta müqaviləsinin bağlandığını təsdiq edən sənəd.",
        "OWU — müqavilə bağlanmazdan əvvəl istifadəçiyə təqdim edilən ümumi sığorta şərtləri.",
        "Məxfilik siyasəti — şəxsi məlumatların emalı və xidmətdən istifadə qaydaları.",
      ],
    },

    {
      title: "§ 2. Ümumi müddəalar",
      paragraphs: [
        "Bu Reqlament SINEDIS vasitəsilə elektron xidmətlərin göstərilməsi və məsafədən sığorta müqavilələrinin bağlanması qaydasını müəyyən edir.",
        "Reqlament ödənişsiz şəkildə yerləşdirilir və yükləmə, saxlanma və çap üçün əlçatandır.",
        "İstifadəçi xidmətlərdən istifadə etməyə başlamazdan əvvəl Reqlamentlə tanış olmalıdır.",
        "Xidmətdən istifadə istifadəçinin şəxsi məlumatların emalı da daxil olmaqla Reqlamentin şərtləri ilə razılaşması deməkdir.",
        "Tərəflər arasındakı münasibətlərə Polşa qanunvericiliyinin müddəaları, o cümlədən məsafədən göstərilən xidmətlər, sığorta vasitəçiliyi, şəxsi məlumatların qorunması və istehlakçı hüquqları ilə bağlı normalar tətbiq edilir.",
        "SINEDIS KNF reyestrində qeydiyyatdan keçmiş sığorta agenti kimi fəaliyyət göstərir.",
        "Agentin qeydiyyatını KNF reyestri vasitəsilə yoxlamaq olar: https://rpu.knf.gov.pl.",
        "SINEDIS-in komissiya mükafatı sığorta haqqına daxildir və müştəri üçün əlavə xərc yaratmır.",
      ],
    },

    {
      title: "§ 3. Elektron xidmətlərin göstərilməsi müqaviləsinin bağlanması və xitamı",
      paragraphs: [
        "Xidmətdən istifadəyə başlanılması ayrıca sənəd imzalanmadan elektron xidmətlərin göstərilməsi müqaviləsinin bağlanması hesab olunur.",
        "Contact Center üçün xidmətin göstərilməsinin başlanğıcı məsləhətçi ilə danışığın başlanması hesab edilir.",
        "İstifadəçi istənilən vaxt xidmətlərdən istifadəni dayandıra bilər.",
        "Elektron xidmətlərin göstərilməsi müqaviləsi istifadəçi xidmətdən çıxdıqda və ya məsləhətçi ilə danışıq başa çatdıqda avtomatik olaraq qüvvədən düşür.",
      ],
    },

    {
      title: "§ 4. Xidmətlərin göstərilməsinin ümumi qaydaları",
      paragraphs: [
        "Xidmət sığorta məhsulları haqqında məlumat əldə etmək, təkliflərin hesablanması, sığorta müqavilələrinin bağlanması və sənədlərə çıxış üçün nəzərdə tutulmuşdur.",
        "Onlayn xidmət sutkanın 24 saatı fəaliyyət göstərir, Contact Center isə müəyyən olunmuş iş qrafiki üzrə işləyir.",
        "İstifadəçi düzgün, tam və aktual məlumat təqdim etməyə borcludur.",
        "İstifadəçi yalan və ya natamam məlumat təqdim edilməsinin nəticələrinə görə məsuliyyət daşıyır.",
        "SINEDIS təqdim olunan məlumatları yoxlamaq hüququna malikdir.",
        "Xidmətin fəaliyyətində texniki xidmət, yenilənmə və ya ehtiyat nüsxələrin yaradılması ilə əlaqədar texniki fasilələr mümkündür.",
        "SINEDIS təhlükəsizlik təhdidləri və ya Reqlamentin pozulması hallarında xidmətə çıxışı müvəqqəti məhdudlaşdırmaq hüququna malikdir.",
        "Xidmət vasitəsilə qanunsuz, zərərli və ya təhqiredici məzmunun ötürülməsi qadağandır.",
        "Bağlanmış müqavilələr üzrə sığorta haqqının ödənilməsi öhdəliyi istisna olmaqla, xidmətdən istifadə ödənişsizdir.",
      ],
    },
    {
      title: "§ 5. Sığorta müqaviləsinin bağlanması və sığorta haqqının ödənilməsi",
      paragraphs: [
        "İstifadəçi sığorta məhsulunu, sığorta təminatının həcmini və sığorta məbləğini müstəqil şəkildə seçir.",
        "Müqavilə bağlanmazdan əvvəl istifadəçi sığortaçı, sığortanın dəyəri, ödəniş şərtləri, müddətlər, imtina hüququ və şikayətlərin təqdim edilməsi qaydası barədə məlumat alır.",
        "Müqavilənin bağlanması üçün məlumatların düzgün göstərilməsi və sığorta şərtlərinin qəbul edilməsi zəruridir.",
        "İstifadəçi üçüncü şəxslərin məlumatlarını təqdim etmək üçün qanuni əsaslara malik olmalıdır.",
        "Sığorta müqaviləsi alış seçimi təsdiqləndikdən və sığorta haqqı ödənildikdən sonra bağlanmış hesab olunur.",
        "Ödəniş TPAY vasitəsilə bank kartı və ya elektron köçürmə ilə həyata keçirilə bilər.",
        "Müqavilə bağlandıqdan sonra istifadəçi elektron sığorta polisini əldə edir.",
        "Əgər qanunvericilikdə və ya sığorta məhsulunun xüsusiyyətlərində başqa hal nəzərdə tutulmayıbsa, istifadəçi 30 gün ərzində sığorta müqaviləsindən imtina etmək hüququna malikdir.",
        "Qısamüddətli sığorta müqavilələri üçün imtina hüququ məhdudlaşdırıla bilər.",
      ],
    },

    {
      title: "§ 6. Məxfilik siyasəti",
      paragraphs: [
        "SINEDIS istifadəçilərin şəxsi məlumatlarının qorunmasına xüsusi diqqət yetirir.",
        "Emalın xarakterindən asılı olaraq məlumatların inzibatçıları sığorta şirkətləri və ya SINEDIS ola bilər.",
        "Şəxsi məlumatların təqdim edilməsi könüllüdür, lakin sığorta təklifinin hazırlanması və müqavilənin bağlanması üçün zəruridir.",
        "Məlumatlar GDPR və Polşa qanunvericiliyinə uyğun olaraq emal edilir.",
        "Sistem jurnalları və IP ünvanları texniki və statistik məqsədlərlə istifadə oluna bilər.",
        "Xidmət ötürülən məlumatların qorunması üçün HTTPS və digər təhlükəsizlik tədbirlərindən istifadə edir.",
        "Contact Center ilə telefon danışıqları qeydə alına bilər.",
        "Cookie faylları siyasətinin ətraflı mətni SINEDIS saytında mövcuddur.",
      ],
    },

    {
      title: "§ 7. Şikayətlərə baxılması qaydası",
      paragraphs: [
        "İstifadəçi şikayəti yazılı, şifahi və ya elektron formada təqdim etmək hüququna malikdir.",
        "Şikayətlər sayt üzərindəki forma vasitəsilə və ya reklamacje@sinedis.pl elektron poçt ünvanına göndərilə bilər.",
        "Şikayətdə istifadəçinin identifikasiya məlumatları, vəziyyətin təsviri və tələblər göstərilməlidir.",
        "SINEDIS şikayətə 30 gün ərzində, mürəkkəb hallarda isə ən geci 60 gün müddətində baxır.",
        "Cavab əsasən yazılı formada təqdim edilir.",
        "İstifadəçi maliyyə ombudsmanına, KNF arbitraj məhkəməsinə və ya ümumi yurisdiksiya məhkəməsinə müraciət etmək hüququna malikdir.",
      ],
    },

    {
      title: "§ 8. Reqlamentin qüvvəyə minməsi və dəyişdirilməsi",
      paragraphs: [
        "Bu Reqlament 21 noyabr 2023-cü il tarixindən qüvvəyə minmişdir.",
        "SINEDIS istənilən vaxt Reqlamentə dəyişiklik etmək hüququna malikdir.",
        "Reqlamentin yeni redaksiyası saytda dərc olunur və istifadəçilərə elektron poçt vasitəsilə göndərilə bilər.",
      ],
    },

    {
      title: "§ 9. Yekun müddəalar",
      paragraphs: [
        "Bu Reqlamentə və SINEDIS tərəfindən göstərilən xidmətlərə Polşa Respublikasının hüququ tətbiq olunur.",
        "Mübahisələr ümumi yurisdiksiya məhkəmələri və ya qanunla nəzərdə tutulmuş digər həll üsulları vasitəsilə baxılır.",
        "İstifadəçilərlə ünsiyyət polyak, belarus və ya rus dillərində həyata keçirilə bilər.",
        "Xidmətin materialları müəllif hüquqları haqqında qanunvericiliklə qorunur.",
      ],
    },

    {
      title: "Rəsmi məlumatlar",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Contact Center telefonu: +48 573581333",
        "",
        "Veb-saytlar:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],

};
const ro: RulesDictionary = {

  pageTitle: "REGULAMENT",

  subtitle:
    "privind furnizarea serviciilor electronice și încheierea contractelor de asigurare la distanță prin intermediul SINEDIS Sp. z o.o.",

  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Definiții",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS este un agent de asigurare care acționează în numele mai multor societăți de asigurare în baza împuternicirilor acordate.",
        "Utilizator — persoană fizică sau juridică care utilizează serviciul SINEDIS sau Contact Center-ul.",
        "Serviciu — platforma online SINEDIS, disponibilă prin intermediul site-urilor https://sinedis.pl și https://greencard.agency.",
        "Contact Center — serviciul telefonic SINEDIS: +48 573581333.",
        "Consultant — angajat al SINEDIS care desfășoară activități de intermediere în asigurări.",
        "Servicii — servicii electronice, inclusiv pregătirea pentru încheierea contractului de asigurare, încheierea contractelor la distanță și plata primei de asigurare.",
        "Asigurător — societatea de asigurare în numele căreia SINEDIS desfășoară activitate de intermediere.",
        "Contractant al asigurării — utilizatorul care încheie contractul de asigurare.",
        "Poliță — documentul care confirmă încheierea contractului de asigurare.",
        "OWU — condițiile generale de asigurare puse la dispoziția utilizatorului înainte de încheierea contractului.",
        "Politica de confidențialitate — regulile privind prelucrarea datelor cu caracter personal și utilizarea serviciului.",
      ],
    },

    {
      title: "§ 2. Dispoziții generale",
      paragraphs: [
        "Prezentul Regulament stabilește regulile de furnizare a serviciilor pe cale electronică și de încheiere a contractelor de asigurare la distanță prin intermediul SINEDIS.",
        "Regulamentul este pus la dispoziție gratuit și poate fi descărcat, salvat și tipărit.",
        "Utilizatorul este obligat să se familiarizeze cu Regulamentul înainte de utilizarea serviciilor.",
        "Utilizarea serviciului constituie acceptarea de către utilizator a prevederilor Regulamentului, inclusiv a regulilor privind prelucrarea datelor cu caracter personal.",
        "Relațiile dintre părți sunt reglementate de legislația poloneză, inclusiv normele privind serviciile la distanță, intermedierea în asigurări, protecția datelor cu caracter personal și drepturile consumatorilor.",
        "SINEDIS acționează ca agent de asigurare înregistrat în registrul KNF.",
        "Înregistrarea agentului poate fi verificată în registrul KNF: https://rpu.knf.gov.pl.",
        "Comisionul primit de SINEDIS este inclus în prima de asigurare și nu generează costuri suplimentare pentru client.",
      ],
    },

    {
      title: "§ 3. Încheierea și încetarea contractului de furnizare a serviciilor electronice",
      paragraphs: [
        "Începerea utilizării serviciului reprezintă încheierea contractului de furnizare a serviciilor electronice fără semnarea unui document separat.",
        "În cazul Contact Center-ului, furnizarea serviciului începe odată cu inițierea conversației cu consultantul.",
        "Utilizatorul poate înceta utilizarea serviciilor în orice moment.",
        "Contractul de furnizare a serviciilor electronice încetează automat după părăsirea serviciului de către utilizator sau după încheierea conversației cu consultantul.",
      ],
    },

    {
      title: "§ 4. Reguli generale privind furnizarea serviciilor",
      paragraphs: [
        "Serviciul este destinat obținerii de informații despre produsele de asigurare, calculării ofertelor, încheierii contractelor de asigurare și accesării documentelor.",
        "Serviciul online funcționează non-stop, iar Contact Center-ul funcționează conform programului stabilit.",
        "Utilizatorul este obligat să furnizeze date corecte, complete și actualizate.",
        "Utilizatorul este responsabil pentru consecințele furnizării de informații false sau incomplete.",
        "SINEDIS are dreptul să verifice datele furnizate.",
        "În funcționarea serviciului pot apărea întreruperi tehnice legate de mentenanță, actualizări sau realizarea copiilor de siguranță.",
        "SINEDIS are dreptul să limiteze temporar accesul la serviciu în cazul unor amenințări la adresa securității sau al încălcării prevederilor Regulamentului.",
        "Este interzisă transmiterea prin intermediul serviciului a oricărui conținut ilegal, dăunător sau ofensator.",
        "Utilizarea serviciului este gratuită, cu excepția obligației de plată a primei de asigurare pentru contractele încheiate.",
      ],
    },
    {
      title: "§ 5. Încheierea contractului de asigurare și plata primei de asigurare",
      paragraphs: [
        "Utilizatorul selectează în mod independent produsul de asigurare, nivelul de acoperire și suma asigurată.",
        "Înainte de încheierea contractului, utilizatorul primește informații privind asigurătorul, costul asigurării, condițiile de plată, termenele aplicabile, dreptul de retragere și procedura de depunere a reclamațiilor.",
        "Încheierea contractului este condiționată de furnizarea corectă a datelor și de acceptarea condițiilor de asigurare.",
        "Utilizatorul este obligat să dețină temeiul legal pentru transmiterea datelor cu caracter personal ale terților.",
        "Contractul de asigurare se consideră încheiat după selectarea opțiunii de cumpărare și achitarea primei de asigurare.",
        "Plata poate fi efectuată cu cardul bancar sau prin transfer electronic prin intermediul TPAY.",
        "După încheierea contractului, utilizatorul primește polița în format electronic.",
        "Utilizatorul are dreptul să se retragă din contractul de asigurare în termen de 30 de zile, cu excepția situațiilor în care legislația sau natura produsului de asigurare prevede altfel.",
        "În cazul contractelor de asigurare pe termen scurt, dreptul de retragere poate fi limitat.",
      ],
    },

    {
      title: "§ 6. Politica de confidențialitate",
      paragraphs: [
        "SINEDIS acordă o atenție deosebită protecției datelor cu caracter personal ale utilizatorilor.",
        "Operatorii datelor pot fi societățile de asigurare și SINEDIS, în funcție de natura prelucrării.",
        "Furnizarea datelor cu caracter personal este voluntară, însă este necesară pentru pregătirea unei oferte și pentru încheierea contractului de asigurare.",
        "Datele sunt prelucrate în conformitate cu GDPR și legislația Republicii Polonia.",
        "Jurnalele de sistem și adresele IP pot fi utilizate în scopuri tehnice și statistice.",
        "Serviciul utilizează protocolul HTTPS și alte măsuri de securitate pentru protejarea datelor transmise.",
        "Convorbirile telefonice cu Contact Center-ul pot fi înregistrate.",
        "Politica detaliată privind cookie-urile este disponibilă pe site-ul SINEDIS.",
      ],
    },

    {
      title: "§ 7. Procedura de soluționare a reclamațiilor",
      paragraphs: [
        "Utilizatorul are dreptul să depună o reclamație în formă scrisă, verbală sau electronică.",
        "Reclamațiile pot fi transmise prin formularul disponibil pe site sau la adresa de e-mail: reklamacje@sinedis.pl.",
        "Reclamația trebuie să conțină datele de identificare ale utilizatorului, descrierea situației și solicitările acestuia.",
        "SINEDIS examinează reclamația în termen de 30 de zile, iar în cazuri complexe — cel târziu în termen de 60 de zile.",
        "Răspunsul este furnizat, de regulă, în formă scrisă.",
        "Utilizatorul are dreptul să se adreseze Ombudsmanului Financiar, Curții de Arbitraj a KNF sau instanței de drept comun competente.",
      ],
    },

    {
      title: "§ 8. Intrarea în vigoare și modificarea Regulamentului",
      paragraphs: [
        "Prezentul Regulament a intrat în vigoare la 21 noiembrie 2023.",
        "SINEDIS are dreptul să modifice Regulamentul în orice moment.",
        "Noua versiune a Regulamentului este publicată pe site și poate fi transmisă utilizatorilor prin e-mail.",
      ],
    },

    {
      title: "§ 9. Dispoziții finale",
      paragraphs: [
        "Prezentul Regulament și serviciile furnizate de SINEDIS sunt guvernate de legislația Republicii Polonia.",
        "Litigiile sunt soluționate de instanțele de drept comun sau prin alte modalități de soluționare prevăzute de lege.",
        "Comunicarea cu utilizatorii poate avea loc în limba polonă, belarusă sau rusă.",
        "Materialele disponibile în cadrul serviciului sunt protejate de legislația privind drepturile de autor.",
      ],
    },

    {
      title: "Date oficiale",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Telefon Contact Center: +48 573581333",
        "",
        "Site-uri:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],

};
const sr: RulesDictionary = {

  pageTitle: "PRAVILNIK",

  subtitle:
    "o pružanju elektronskih usluga i zaključenju ugovora o osiguranju na daljinu putem društva SINEDIS Sp. z o.o.",

  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Definicije",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Poljska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS je agent osiguranja koji deluje u ime više osiguravajućih društava na osnovu datih ovlašćenja.",
        "Korisnik — fizičko ili pravno lice koje koristi servis SINEDIS ili Contact Center.",
        "Servis — internet platforma SINEDIS dostupna putem sajtova https://sinedis.pl i https://greencard.agency.",
        "Contact Center — telefonski servis društva SINEDIS: +48 573581333.",
        "Konsultant — zaposleni u društvu SINEDIS koji obavlja poslove zastupanja u osiguranju.",
        "Usluge — elektronske usluge, uključujući pripremu za zaključenje ugovora o osiguranju, zaključenje ugovora na daljinu i plaćanje premije osiguranja.",
        "Osiguravač — osiguravajuće društvo u čije ime SINEDIS obavlja poslove zastupanja u osiguranju.",
        "Ugovarač osiguranja — korisnik koji zaključuje ugovor o osiguranju.",
        "Polisa — dokument koji potvrđuje zaključenje ugovora o osiguranju.",
        "OWU — opšti uslovi osiguranja koji se korisniku dostavljaju pre zaključenja ugovora.",
        "Politika privatnosti — pravila obrade ličnih podataka i korišćenja servisa.",
      ],
    },

    {
      title: "§ 2. Opšte odredbe",
      paragraphs: [
        "Ovim Pravilnikom uređuju se pravila pružanja usluga elektronskim putem i zaključenja ugovora o osiguranju na daljinu putem društva SINEDIS.",
        "Pravilnik je dostupan besplatno i može se preuzeti, sačuvati i odštampati.",
        "Korisnik je dužan da se upozna sa sadržajem Pravilnika pre početka korišćenja usluga.",
        "Korišćenje servisa predstavlja prihvatanje odredaba ovog Pravilnika, uključujući obradu ličnih podataka.",
        "Na odnose između strana primenjuje se zakonodavstvo Republike Poljske, uključujući propise o pružanju usluga na daljinu, posredovanju u osiguranju, zaštiti ličnih podataka i pravima potrošača.",
        "SINEDIS posluje kao agent osiguranja upisan u registar KNF.",
        "Registracija agenta može se proveriti putem registra KNF: https://rpu.knf.gov.pl.",
        "Provizijska naknada društva SINEDIS uključena je u premiju osiguranja i ne predstavlja dodatni trošak za klijenta.",
      ],
    },

    {
      title: "§ 3. Zaključenje i prestanak ugovora o pružanju elektronskih usluga",
      paragraphs: [
        "Početak korišćenja servisa smatra se zaključenjem ugovora o pružanju elektronskih usluga bez potrebe za potpisivanjem posebnog dokumenta.",
        "Kod Contact Center usluge, početkom pružanja usluge smatra se početak razgovora sa konsultantom.",
        "Korisnik može prestati da koristi usluge u bilo kom trenutku.",
        "Ugovor o pružanju elektronskih usluga automatski prestaje nakon što korisnik napusti servis ili po završetku razgovora sa konsultantom.",
      ],
    },

    {
      title: "§ 4. Opšta pravila pružanja usluga",
      paragraphs: [
        "Servis je namenjen pružanju informacija o proizvodima osiguranja, izračunavanju ponuda, zaključenju ugovora o osiguranju i pristupu dokumentaciji.",
        "Online servis dostupan je 24 časa dnevno, dok Contact Center radi prema utvrđenom radnom vremenu.",
        "Korisnik je dužan da dostavlja tačne, potpune i ažurne podatke.",
        "Korisnik snosi odgovornost za posledice dostavljanja netačnih ili nepotpunih informacija.",
        "SINEDIS ima pravo da proverava dostavljene podatke.",
        "U radu servisa mogu nastati tehnički prekidi povezani sa održavanjem sistema, ažuriranjima ili izradom rezervnih kopija.",
        "SINEDIS ima pravo da privremeno ograniči pristup servisu u slučaju bezbednosnih pretnji ili kršenja odredaba Pravilnika.",
        "Zabranjeno je slanje ili objavljivanje putem servisa nezakonitog, štetnog ili uvredljivog sadržaja.",
        "Korišćenje servisa je besplatno, osim obaveze plaćanja premije osiguranja po zaključenim ugovorima.",
      ],
    },
    {
      title: "§ 5. Zaključenje ugovora o osiguranju i plaćanje premije osiguranja",
      paragraphs: [
        "Korisnik samostalno bira proizvod osiguranja, obim pokrića i osiguranu sumu.",
        "Pre zaključenja ugovora korisnik dobija informacije o osiguravaču, ceni osiguranja, uslovima plaćanja, rokovima, pravu na odustanak i načinu podnošenja pritužbi.",
        "Uslov za zaključenje ugovora jeste tačno unošenje podataka i prihvatanje uslova osiguranja.",
        "Korisnik je dužan da poseduje zakonski osnov za dostavljanje podataka trećih lica.",
        "Ugovor o osiguranju smatra se zaključenim nakon izbora opcije kupovine i plaćanja premije osiguranja.",
        "Plaćanje se može izvršiti bankovnom karticom ili elektronskim transferom putem sistema TPAY.",
        "Nakon zaključenja ugovora korisnik dobija elektronsku polisu.",
        "Korisnik ima pravo da odustane od ugovora o osiguranju u roku od 30 dana, osim ako zakonom ili prirodom proizvoda osiguranja nije drugačije određeno.",
        "Kod kratkoročnih ugovora o osiguranju pravo na odustanak može biti ograničeno.",
      ],
    },

    {
      title: "§ 6. Politika privatnosti",
      paragraphs: [
        "SINEDIS posvećuje posebnu pažnju zaštiti ličnih podataka korisnika.",
        "Rukovaoci podacima mogu biti osiguravajuća društva i SINEDIS, u zavisnosti od prirode obrade podataka.",
        "Dostavljanje ličnih podataka je dobrovoljno, ali neophodno za pripremu ponude i zaključenje ugovora o osiguranju.",
        "Podaci se obrađuju u skladu sa GDPR-om i zakonodavstvom Republike Poljske.",
        "Sistemski dnevnici i IP adrese mogu se koristiti u tehničke i statističke svrhe.",
        "Servis koristi HTTPS i druge bezbednosne mere radi zaštite prenetih podataka.",
        "Telefonski razgovori sa Contact Center službom mogu biti snimani.",
        "Detaljna politika kolačića dostupna je na internet stranici društva SINEDIS.",
      ],
    },

    {
      title: "§ 7. Postupak rešavanja pritužbi",
      paragraphs: [
        "Korisnik ima pravo da podnese pritužbu u pisanom, usmenom ili elektronskom obliku.",
        "Pritužbe se mogu podneti putem obrasca na sajtu ili slanjem na e-mail adresu: reklamacje@sinedis.pl.",
        "Pritužba treba da sadrži identifikacione podatke korisnika, opis situacije i zahtev podnosioca.",
        "SINEDIS razmatra pritužbu u roku od 30 dana, a u složenijim slučajevima najkasnije u roku od 60 dana.",
        "Odgovor se dostavlja prvenstveno u pisanom obliku.",
        "Korisnik ima pravo da se obrati finansijskom ombudsmanu, arbitražnom sudu KNF-a ili nadležnom sudu opšte nadležnosti.",
      ],
    },

    {
      title: "§ 8. Stupanje na snagu i izmene Pravilnika",
      paragraphs: [
        "Ovaj Pravilnik stupio je na snagu 21. novembra 2023. godine.",
        "SINEDIS ima pravo da izmeni Pravilnik u bilo kom trenutku.",
        "Nova verzija Pravilnika objavljuje se na sajtu i može biti poslata korisnicima putem e-maila.",
      ],
    },

    {
      title: "§ 9. Završne odredbe",
      paragraphs: [
        "Na ovaj Pravilnik i usluge društva SINEDIS primenjuje se pravo Republike Poljske.",
        "Sporovi se rešavaju pred sudovima opšte nadležnosti ili na druge načine predviđene zakonom.",
        "Komunikacija sa korisnicima može se odvijati na poljskom, beloruskom ili ruskom jeziku.",
        "Materijali dostupni putem servisa zaštićeni su propisima o autorskom pravu.",
      ],
    },

    {
      title: "Zvanični podaci",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Poljska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Telefon Contact Center: +48 573581333",
        "",
        "Sajtovi:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],

};
const sq: RulesDictionary = {

  pageTitle: "RREGULLORE",

  subtitle:
    "për ofrimin e shërbimeve elektronike dhe lidhjen e kontratave të sigurimit në distancë përmes SINEDIS Sp. z o.o.",

  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Përkufizimet",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Poloni, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS është një agjent sigurimesh që vepron në emër të disa shoqërive të sigurimeve mbi bazën e autorizimeve të dhëna.",
        "Përdoruesi — person fizik ose juridik që përdor shërbimin SINEDIS ose Contact Center.",
        "Shërbimi — platforma online e SINEDIS, e disponueshme përmes faqeve https://sinedis.pl dhe https://greencard.agency.",
        "Contact Center — shërbimi telefonik i SINEDIS: +48 573581333.",
        "Konsulenti — punonjës i SINEDIS që kryen veprime agjentore.",
        "Shërbimet — shërbime elektronike, përfshirë përgatitjen për lidhjen e kontratës së sigurimit, lidhjen e kontratave në distancë dhe pagesën e primit të sigurimit.",
        "Siguruesi — shoqëria e sigurimeve në emër të së cilës SINEDIS ushtron veprimtari agjentore.",
        "I siguruari (Policëmbajtësi) — përdoruesi që lidh kontratën e sigurimit.",
        "Polica — dokumenti që konfirmon lidhjen e kontratës së sigurimit.",
        "OWU — kushtet e përgjithshme të sigurimit, të vëna në dispozicion të përdoruesit para lidhjes së kontratës.",
        "Politika e privatësisë — rregullat për përpunimin e të dhënave personale dhe përdorimin e shërbimit.",
      ],
    },

    {
      title: "§ 2. Dispozita të përgjithshme",
      paragraphs: [
        "Kjo Rregullore përcakton rregullat për ofrimin e shërbimeve në rrugë elektronike dhe lidhjen e kontratave të sigurimit në distancë përmes SINEDIS.",
        "Rregullorja publikohet pa pagesë dhe është e disponueshme për shkarkim, ruajtje dhe printim.",
        "Përdoruesi është i detyruar të njihet me Rregulloren para fillimit të përdorimit të shërbimeve.",
        "Përdorimi i shërbimit nënkupton pranimin nga përdoruesi të kushteve të kësaj Rregulloreje, përfshirë përpunimin e të dhënave personale.",
        "Marrëdhëniet ndërmjet palëve rregullohen nga legjislacioni polak, përfshirë dispozitat mbi shërbimet në distancë, ndërmjetësimin në sigurime, mbrojtjen e të dhënave personale dhe të drejtat e konsumatorit.",
        "SINEDIS vepron si agjent sigurimesh i regjistruar në regjistrin e KNF.",
        "Regjistrimi i agjentit mund të verifikohet përmes regjistrit të KNF: https://rpu.knf.gov.pl.",
        "Komisioni i SINEDIS është i përfshirë në primin e sigurimit dhe nuk krijon kosto shtesë për klientin.",
      ],
    },

    {
      title: "§ 3. Lidhja dhe përfundimi i kontratës për ofrimin e shërbimeve elektronike",
      paragraphs: [
        "Fillimi i përdorimit të shërbimit nënkupton lidhjen e një kontrate për ofrimin e shërbimeve elektronike pa nënshkrimin e një dokumenti të veçantë.",
        "Për Contact Center, fillimi i ofrimit të shërbimit konsiderohet fillimi i bisedës me konsulentin.",
        "Përdoruesi mund të ndërpresë përdorimin e shërbimeve në çdo kohë.",
        "Kontrata për ofrimin e shërbimeve elektronike përfundon automatikisht pas largimit të përdoruesit nga shërbimi ose pas përfundimit të bisedës me konsulentin.",
      ],
    },

    {
      title: "§ 4. Rregullat e përgjithshme për ofrimin e shërbimeve",
      paragraphs: [
        "Shërbimi është i destinuar për marrjen e informacionit mbi produktet e sigurimit, llogaritjen e ofertave, lidhjen e kontratave të sigurimit dhe aksesin në dokumente.",
        "Shërbimi online funksionon 24 orë në ditë, ndërsa Contact Center sipas orarit të përcaktuar.",
        "Përdoruesi është i detyruar të japë të dhëna të sakta, të plota dhe të përditësuara.",
        "Përdoruesi mban përgjegjësi për pasojat e dhënies së informacionit të rremë ose të paplotë.",
        "SINEDIS ka të drejtë të verifikojë të dhënat e paraqitura.",
        "Në funksionimin e shërbimit mund të ketë ndërprerje teknike të lidhura me mirëmbajtjen, përditësimet ose kopjet rezervë.",
        "SINEDIS ka të drejtë të kufizojë përkohësisht aksesin në shërbim në rast të kërcënimeve ndaj sigurisë ose shkeljeve të kësaj Rregulloreje.",
        "Ndalohet transmetimi përmes shërbimit i përmbajtjeve të paligjshme, të dëmshme ose fyese.",
        "Përdorimi i shërbimit është pa pagesë, me përjashtim të detyrimit për të paguar primin e sigurimit sipas kontratave të lidhura.",
      ],
    },
    {
      title: "§ 5. Lidhja e kontratës së sigurimit dhe pagesa e primit të sigurimit",
      paragraphs: [
        "Përdoruesi zgjedh në mënyrë të pavarur produktin e sigurimit, nivelin e mbulimit dhe shumën e sigurimit.",
        "Përpara lidhjes së kontratës, përdoruesi merr informacion mbi siguruesin, koston e sigurimit, kushtet e pagesës, afatet, të drejtën e tërheqjes dhe procedurën e paraqitjes së ankesave.",
        "Kusht për lidhjen e kontratës është dhënia e saktë e të dhënave dhe pranimi i kushteve të sigurimit.",
        "Përdoruesi është i detyruar të ketë bazë ligjore për transmetimin e të dhënave personale të palëve të treta.",
        "Kontrata e sigurimit konsiderohet e lidhur pas zgjedhjes së opsionit të blerjes dhe pagesës së primit të sigurimit.",
        "Pagesa mund të kryhet me kartë bankare ose me transfertë elektronike përmes TPAY.",
        "Pas lidhjes së kontratës, përdoruesi merr policën elektronike.",
        "Përdoruesi ka të drejtë të tërhiqet nga kontrata e sigurimit brenda 30 ditëve, përveç rasteve kur legjislacioni ose natyra e produktit të sigurimit parashikon ndryshe.",
        "Për kontratat afatshkurtra të sigurimit, e drejta e tërheqjes mund të jetë e kufizuar.",
      ],
    },

    {
      title: "§ 6. Politika e privatësisë",
      paragraphs: [
        "SINEDIS i kushton vëmendje të veçantë mbrojtjes së të dhënave personale të përdoruesve.",
        "Administratorë të të dhënave mund të jenë shoqëritë e sigurimeve dhe SINEDIS, në varësi të natyrës së përpunimit.",
        "Dhënia e të dhënave personale është vullnetare, por e nevojshme për përgatitjen e ofertës dhe lidhjen e kontratës së sigurimit.",
        "Të dhënat përpunohen në përputhje me GDPR dhe legjislacionin e Polonisë.",
        "Regjistrat e sistemit dhe adresat IP mund të përdoren për qëllime teknike dhe statistikore.",
        "Shërbimi përdor HTTPS dhe masa të tjera sigurie për mbrojtjen e të dhënave të transmetuara.",
        "Bisedat telefonike me Contact Center mund të regjistrohen.",
        "Politika e detajuar e cookie-ve është e disponueshme në faqen e internetit të SINEDIS.",
      ],
    },

    {
      title: "§ 7. Procedura e shqyrtimit të ankesave",
      paragraphs: [
        "Përdoruesi ka të drejtë të paraqesë ankesë me shkrim, verbalisht ose në formë elektronike.",
        "Ankesat mund të dërgohen përmes formularit në faqe ose në adresën e e-mailit: reklamacje@sinedis.pl.",
        "Ankesa duhet të përmbajë të dhënat identifikuese të përdoruesit, përshkrimin e situatës dhe kërkesën e tij.",
        "SINEDIS e shqyrton ankesën brenda 30 ditëve, ndërsa në raste të ndërlikuara jo më vonë se 60 ditë.",
        "Përgjigjja jepet kryesisht në formë të shkruar.",
        "Përdoruesi ka të drejtë t'i drejtohet Ombudsmanit Financiar, Gjykatës së Arbitrazhit pranë KNF ose gjykatës së juridiksionit të përgjithshëm.",
      ],
    },

    {
      title: "§ 8. Hyrja në fuqi dhe ndryshimi i Rregullores",
      paragraphs: [
        "Kjo Rregullore ka hyrë në fuqi më 21 nëntor 2023.",
        "SINEDIS ka të drejtë të ndryshojë Rregulloren në çdo kohë.",
        "Versioni i ri i Rregullores publikohet në faqen e internetit dhe mund t'u dërgohet përdoruesve me e-mail.",
      ],
    },

    {
      title: "§ 9. Dispozita përfundimtare",
      paragraphs: [
        "Për këtë Rregullore dhe për shërbimet e SINEDIS zbatohet e drejta e Republikës së Polonisë.",
        "Mosmarrëveshjet shqyrtohen nga gjykatat e juridiksionit të përgjithshëm ose përmes mënyrave të tjera të zgjidhjes së mosmarrëveshjeve të parashikuara nga ligji.",
        "Komunikimi me përdoruesit mund të zhvillohet në gjuhën polake, bjelloruse ose ruse.",
        "Materialet e shërbimit mbrohen nga legjislacioni për të drejtën e autorit.",
      ],
    },

    {
      title: "Të dhënat zyrtare",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Poloni",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Telefoni i Contact Center: +48 573581333",
        "",
        "Faqet e internetit:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],

};
const mn: RulesDictionary = {

  pageTitle: "ЖУРАМ",

  subtitle:
    "SINEDIS Sp. z o.o.-оор дамжуулан цахим үйлчилгээ үзүүлэх болон зайнаас даатгалын гэрээ байгуулах журам",

  updatedAt: "15.03.2024",

  sections: [
    {
      title: "§ 1. Тодорхойлолтууд",
      paragraphs: [
        "SINEDIS — SINEDIS Spółka z ograniczoną odpowiedzialnością, ul. H. Dobrzańskiego Hubala 22D, 01-473 Warszawa, Polska, KRS: 0000999636, NIP: 5242953841, REGON: 52350998300000, e-mail: info@sinedis.pl.",
        "SINEDIS нь олгогдсон итгэмжлэлийн үндсэн дээр хэд хэдэн даатгалын компанийн нэрийн өмнөөс үйл ажиллагаа явуулдаг даатгалын төлөөлөгч юм.",
        "Хэрэглэгч — SINEDIS үйлчилгээ эсвэл Contact Center-ийг ашиглаж буй хувь хүн эсвэл хуулийн этгээд.",
        "Үйлчилгээ — https://sinedis.pl болон https://greencard.agency вэбсайтаар дамжуулан ашиглах боломжтой SINEDIS-ийн интернет платформ.",
        "Contact Center — SINEDIS-ийн утасны үйлчилгээ: +48 573581333.",
        "Зөвлөх — төлөөлөгчийн үйл ажиллагаа хэрэгжүүлдэг SINEDIS-ийн ажилтан.",
        "Үйлчилгээ — даатгалын гэрээ байгуулах бэлтгэл, зайнаас гэрээ байгуулах болон даатгалын шимтгэл төлөх зэрэг цахим үйлчилгээнүүд.",
        "Даатгагч — SINEDIS төлөөлөгчийн үйл ажиллагаа явуулж буй даатгалын компани.",
        "Даатгуулагч — даатгалын гэрээ байгуулж буй хэрэглэгч.",
        "Полис — даатгалын гэрээ байгуулсныг баталгаажуулах баримт бичиг.",
        "OWU — даатгалын ерөнхий нөхцөл бөгөөд гэрээ байгуулахаас өмнө хэрэглэгчид танилцуулна.",
        "Нууцлалын бодлого — хувийн мэдээлэл боловсруулах болон үйлчилгээг ашиглах журам.",
      ],
    },

    {
      title: "§ 2. Ерөнхий заалтууд",
      paragraphs: [
        "Энэхүү Журам нь SINEDIS-ээр дамжуулан цахим үйлчилгээ үзүүлэх болон зайнаас даатгалын гэрээ байгуулах журмыг тодорхойлно.",
        "Журам нь үнэ төлбөргүй нийтлэгдэж, татаж авах, хадгалах болон хэвлэх боломжтой.",
        "Хэрэглэгч үйлчилгээ ашиглахаасаа өмнө Журамтай танилцах үүрэгтэй.",
        "Үйлчилгээг ашиглах нь хэрэглэгч энэхүү Журмын нөхцөл, түүний дотор хувийн мэдээлэл боловсруулахтай холбоотой нөхцөлийг зөвшөөрсөнд тооцогдоно.",
        "Талуудын харилцаанд Польш Улсын хууль тогтоомж, түүний дотор зайнаас үйлчилгээ үзүүлэх, даатгалын зуучлал, хувийн мэдээлэл хамгаалах болон хэрэглэгчийн эрхийн тухай хууль тогтоомж үйлчилнэ.",
        "SINEDIS нь KNF-ийн бүртгэлд бүртгэлтэй даатгалын төлөөлөгчөөр үйл ажиллагаа явуулдаг.",
        "Төлөөлөгчийн бүртгэлийг KNF-ийн бүртгэлээс шалгах боломжтой: https://rpu.knf.gov.pl.",
        "SINEDIS-ийн комиссын урамшуулал нь даатгалын шимтгэлд багтсан байдаг бөгөөд хэрэглэгчид нэмэлт зардал үүсгэдэггүй.",
      ],
    },

    {
      title: "§ 3. Цахим үйлчилгээ үзүүлэх гэрээ байгуулах болон дуусгавар болгох",
      paragraphs: [
        "Үйлчилгээг ашиглаж эхэлснээр тусдаа баримт бичигт гарын үсэг зурахгүйгээр цахим үйлчилгээ үзүүлэх гэрээ байгуулагдсан гэж үзнэ.",
        "Contact Center-ийн хувьд үйлчилгээ үзүүлж эхлэх мөч нь зөвлөхтэй хийсэн яриа эхэлсэн үе байна.",
        "Хэрэглэгч хүссэн үедээ үйлчилгээг ашиглахаа зогсоож болно.",
        "Цахим үйлчилгээ үзүүлэх гэрээ нь хэрэглэгч үйлчилгээнээс гарсан эсвэл зөвлөхтэй хийсэн яриа дууссан үед автоматаар дуусгавар болно.",
      ],
    },

    {
      title: "§ 4. Үйлчилгээ үзүүлэх ерөнхий журам",
      paragraphs: [
        "Үйлчилгээ нь даатгалын бүтээгдэхүүний талаар мэдээлэл авах, санал тооцоолох, даатгалын гэрээ байгуулах болон баримт бичигт хандахад зориулагдсан.",
        "Онлайн үйлчилгээ нь 24 цагийн турш ажиллах бөгөөд Contact Center нь тогтоосон цагийн хуваарийн дагуу ажиллана.",
        "Хэрэглэгч үнэн зөв, бүрэн бөгөөд шинэчилсэн мэдээлэл өгөх үүрэгтэй.",
        "Худал эсвэл бүрэн бус мэдээлэл өгсний үр дагаврыг хэрэглэгч өөрөө хариуцна.",
        "SINEDIS нь өгсөн мэдээллийг шалгах эрхтэй.",
        "Үйлчилгээний ажиллагаанд засвар үйлчилгээ, шинэчлэл эсвэл нөөц хуулбар хийхтэй холбоотой техникийн завсарлага гарч болно.",
        "Аюулгүй байдалд заналхийлэл үүссэн эсвэл Журмыг зөрчсөн тохиолдолд SINEDIS нь үйлчилгээнд хандах эрхийг түр хугацаагаар хязгаарлах эрхтэй.",
        "Үйлчилгээгээр дамжуулан хууль бус, хортой эсвэл доромжилсон агуулга дамжуулахыг хориглоно.",
        "Үйлчилгээг ашиглах нь үнэ төлбөргүй бөгөөд зөвхөн байгуулсан даатгалын гэрээний дагуу даатгалын шимтгэл төлөх үүрэг хэвээр үлдэнэ.",
      ],
    },
    {
      title: "§ 5. Даатгалын гэрээ байгуулах болон даатгалын шимтгэл төлөх",
      paragraphs: [
        "Хэрэглэгч даатгалын бүтээгдэхүүн, хамгаалалтын хүрээ болон даатгалын дүнг өөрөө сонгоно.",
        "Гэрээ байгуулахаас өмнө хэрэглэгч даатгагч, даатгалын үнэ, төлбөрийн нөхцөл, хугацаа, гэрээнээс татгалзах эрх болон гомдол гаргах журмын талаар мэдээлэл авна.",
        "Гэрээ байгуулахын тулд мэдээллийг зөв оруулах болон даатгалын нөхцөлийг хүлээн зөвшөөрсөн байх шаардлагатай.",
        "Хэрэглэгч гуравдагч этгээдийн мэдээллийг дамжуулах хууль ёсны үндэслэлтэй байх үүрэгтэй.",
        "Даатгалын бүтээгдэхүүнийг худалдан авах сонголтыг хийж, даатгалын шимтгэлийг төлсний дараа даатгалын гэрээг байгуулсанд тооцно.",
        "Төлбөрийг банкны карт эсвэл TPAY системээр дамжуулсан цахим шилжүүлгээр хийж болно.",
        "Гэрээ байгуулагдсаны дараа хэрэглэгч цахим полис хүлээн авна.",
        "Хууль тогтоомж эсвэл тухайн даатгалын бүтээгдэхүүний онцлогоор өөрөөр заагаагүй бол хэрэглэгч даатгалын гэрээнээс 30 хоногийн дотор татгалзах эрхтэй.",
        "Богино хугацааны даатгалын гэрээний хувьд татгалзах эрх хязгаарлагдаж болно.",
      ],
    },

    {
      title: "§ 6. Нууцлалын бодлого",
      paragraphs: [
        "SINEDIS нь хэрэглэгчдийн хувийн мэдээллийг хамгаалахад онцгой анхаарал хандуулдаг.",
        "Өгөгдөл боловсруулах шинж чанараас хамааран өгөгдлийн администратор нь даатгалын компани эсвэл SINEDIS байж болно.",
        "Хувийн мэдээлэл өгөх нь сайн дурын үндсэн дээр хийгддэг боловч даатгалын санал бэлтгэх болон гэрээ байгуулахад шаардлагатай.",
        "Өгөгдлийг GDPR болон Польш Улсын хууль тогтоомжийн дагуу боловсруулдаг.",
        "Системийн бүртгэл болон IP хаягийг техникийн болон статистикийн зорилгоор ашиглаж болно.",
        "Үйлчилгээ нь дамжуулж буй мэдээллийг хамгаалах зорилгоор HTTPS болон бусад аюулгүй байдлын арга хэмжээг ашигладаг.",
        "Contact Center-тэй хийсэн утасны яриаг бичиж авч болно.",
        "Cookie ашиглах дэлгэрэнгүй бодлого нь SINEDIS-ийн вэбсайтад байрладаг.",
      ],
    },

    {
      title: "§ 7. Гомдол шийдвэрлэх журам",
      paragraphs: [
        "Хэрэглэгч гомдлоо бичгээр, амаар эсвэл цахим хэлбэрээр гаргах эрхтэй.",
        "Гомдлыг вэбсайт дээрх маягтаар эсвэл reklamacje@sinedis.pl цахим шуудангийн хаягаар илгээж болно.",
        "Гомдолд хэрэглэгчийг таних мэдээлэл, нөхцөл байдлын тайлбар болон шаардлагыг тусгасан байх ёстой.",
        "SINEDIS нь гомдлыг 30 хоногийн дотор, төвөгтэй тохиолдолд 60 хоногоос хэтрүүлэхгүйгээр шийдвэрлэнэ.",
        "Хариуг ихэвчлэн бичгээр өгдөг.",
        "Хэрэглэгч санхүүгийн омбудсмен, KNF-ийн арбитрын шүүх эсвэл ердийн шүүхэд хандах эрхтэй.",
      ],
    },

    {
      title: "§ 8. Журам хүчин төгөлдөр болох болон өөрчлөх",
      paragraphs: [
        "Энэхүү Журам 2023 оны 11 дүгээр сарын 21-ний өдөр хүчин төгөлдөр болсон.",
        "SINEDIS нь Журамд хүссэн үедээ өөрчлөлт оруулах эрхтэй.",
        "Журмын шинэчилсэн хувилбарыг вэбсайтад нийтлэх бөгөөд шаардлагатай тохиолдолд хэрэглэгчдэд цахим шуудангаар илгээж болно.",
      ],
    },

    {
      title: "§ 9. Эцсийн заалтууд",
      paragraphs: [
        "Энэхүү Журам болон SINEDIS-ийн үйлчилгээнд Бүгд Найрамдах Польш Улсын хууль тогтоомж үйлчилнэ.",
        "Маргааныг ердийн шүүхээр эсвэл хуульд заасан бусад журмаар шийдвэрлэнэ.",
        "Хэрэглэгчтэй харилцах ажиллагааг польш, беларусь эсвэл орос хэлээр явуулж болно.",
        "Үйлчилгээний материалууд нь зохиогчийн эрхийн тухай хууль тогтоомжоор хамгаалагдсан.",
      ],
    },

    {
      title: "Албан ёсны мэдээлэл",
      paragraphs: [
        "SINEDIS Spółka z ograniczoną odpowiedzialnością",
        "ul. H. Dobrzańskiego Hubala 22D",
        "01-473 Warszawa, Polska",
        "",
        "KRS: 0000999636",
        "NIP: 5242953841",
        "REGON: 52350998300000",
        "",
        "E-mail: info@sinedis.pl",
        "Contact Center утас: +48 573581333",
        "",
        "Вэбсайтууд:",
        "https://sinedis.pl",
        "https://greencard.agency",
      ],
    },
  ],

};

const dictionaries: Record<Lang, RulesDictionary> = {
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
  az,
  he,
  ro,
  sr,
  sq,
  mn,
};

export function getRulesDictionary(lang: Lang): RulesDictionary {
  return dictionaries[lang];
}
