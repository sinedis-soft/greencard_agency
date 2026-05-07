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
        "Contact Center — телефонный сервис SINEDIS: +48 571203097.",
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
        "Телефон Contact Center: +48 571203097",
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
        "Contact Center — telefoniczny serwis SINEDIS: +48 571203097.",
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
        "Telefon Contact Center: +48 571203097",
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
        "Contact Center — the SINEDIS telephone service: +48 571203097.",
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
        "Contact Center phone: +48 571203097",
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
        "Contact Center — тэлефонны сэрвіс SINEDIS: +48 571203097.",
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
        "Тэлефон Contact Center: +48 571203097",
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
        "Contact Center — SINEDIS telefon xizmati: +48 571203097.",
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
        "Contact Center telefoni: +48 571203097",
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
        "Contact Center — SINEDIS-ის სატელეფონო სერვისი: +48 571203097.",
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
        "Contact Center-ის ტელეფონი: +48 571203097",
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
        "Contact Center — SINEDIS телефон қызметі: +48 571203097.",
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
        "Contact Center телефоны: +48 571203097",
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
        "Contact Center — SINEDIS telefon hizmeti: +48 571203097.",
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
        "Contact Center Telefonu: +48 571203097",
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
        "Contact Center — مرکز تماس تلفنی SINEDIS: +48 571203097.",
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
        "تلفن Contact Center: +48 571203097",
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
        "Contact Center — SINEDIS-ի հեռախոսային ծառայությունը՝ +48 571203097։",
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
        "Contact Center հեռախոս՝ +48 571203097",
        "",
        "Կայքեր՝",
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
};

export function getRulesDictionary(lang: Lang): RulesDictionary {
  return dictionaries[lang];
}
