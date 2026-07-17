import { getExpert, type SupportedExpertLocale } from "@/app/experts/experts";

export type ExpertPageDictionary = {
  seo: { title: string; description: string };
  breadcrumb: string;
  labels: {
    home: string;
    relatedProfiles: string;
    lastUpdated: string;
    contentRole: string;
    specializations: string;
    competence: string;
    editorialPolicy: string;
    contactLink: string;
  };
  professionalRoles: string[];
  shortDescription: string;
  biography: string[];
  specializations: string[];
  contentRole: string;
  relatedProfiles: Record<"dionis" | "deda", { label: string; ariaLabel: string }>;
  editorialPolicy: Array<{ title: string; paragraphs?: string[]; items?: string[]; ordered?: string[] }>;
};

const expert = getExpert("sergey-anatska");

const ru: ExpertPageDictionary = {
  seo: {
    title: "Анацко Сергей — эксперт по страхованию и редакционная политика | SINEDIS",
    description: "Анацко Сергей подготавливает и проверяет страховые материалы SINEDIS, специализируется на корпоративном страховании и описывает редакционную политику сайта.",
  },
  breadcrumb: "Эксперт и редакционная политика",
  labels: { home: "Главная", relatedProfiles: "Связанные профессиональные профили", lastUpdated: "Последнее содержательное обновление", contentRole: "Роль в материалах сайта", specializations: "Области специализации", competence: "Компетенция", editorialPolicy: "Редакционная политика", contactLink: "страницу контактов" },
  professionalRoles: ["Член правления страхового агента SINEDIS", "Действующий консультант, OFWCA WARTA", "COO / CCO", "Технический специалист", "Заместитель директора"],
  shortDescription: "Специалист по страховым и операционным процессам SINEDIS, совмещающий управленческую, коммерческую и техническую экспертизу.",
  biography: ["Заместитель директора с опытом управления продажами, операционной деятельностью и развитием бизнеса в Беларуси, Польше, России, Казахстане и Грузии.", "Руководит коммерческими и операционными процессами, разрабатывает стратегии продаж, выстраивает и оптимизирует бизнес-процессы, внедряет CRM и IT-решения, включая Bitrix24 и API-интеграции.", "Практикующий специалист в корпоративном страховании: страхование гражданской ответственности грузоперевозчиков, пограничное страхование, добровольное медицинское страхование и перестрахование.", "Работает с экспедиторами и транспортными компаниями, сопровождает сложные страховые случаи, включая урегулирование убытков, анализ исключений, франшиз и страховых рисков.", "Имеет опыт управления международной партнёрской сетью, лицензирования страховой деятельности и соблюдения требований по защите персональных данных.", "Объединяет управленческую, коммерческую и техническую экспертизу с фокусом на эффективности, прозрачности условий и защите интересов клиента."],
  specializations: ["Корпоративное страхование", "Страхование ответственности грузоперевозчиков", "Пограничное страхование", "Добровольное медицинское страхование", "Перестрахование", "Урегулирование убытков", "Анализ исключений, франшиз и страховых рисков", "Страхование транспортных и экспедиторских компаний", "Оптимизация страховых бизнес-процессов", "Bitrix24 и API-интеграции", "Защита персональных данных", "Международное развитие страховых проектов"],
  contentRole: "Подготовил и проверил",
  relatedProfiles: { dionis: { label: "Профиль на сайте DIONIS Insurance Broker", ariaLabel: "Открыть связанный профессиональный профиль на сайте DIONIS Insurance Broker" }, deda: { label: "Профиль на сайте DEDA Insurance Broker", ariaLabel: "Открыть связанный профессиональный профиль на сайте DEDA Insurance Broker" } },
  editorialPolicy: [
    { title: "Кто готовит материалы", paragraphs: [`Страховые и маршрутные материалы сайта подготавливает и проверяет ${expert.localizedNames.ru}.`] },
    { title: "Принципы подготовки", paragraphs: ["Материалы основываются на условиях конкретного страхового продукта, документах страховщика, применимом законодательстве, официальных реестрах, практическом опыте обработки страховых заявок, а также проверке маршрута, страны регистрации и типа транспортного средства."] },
    { title: "Что проверяется", items: ["вид страхования", "территория действия", "маршрут", "страна регистрации автомобиля", "сроки страхования", "перечень документов", "ограничения", "порядок оплаты", "порядок получения полиса", "применимость продукта к конкретной ситуации"] },
    { title: "Приоритет источников", ordered: ["нормативные акты и государственные реестры", "официальные документы страховщика", "официальные отраслевые организации", "внутренняя практика обработки заявок", "экспертная оценка, если точные измеренные данные отсутствуют"] },
    { title: "Экспертные оценки", paragraphs: ["В материалах разделяются проверяемые факты, официальные условия продукта, практические наблюдения и экспертные оценки.", "Если показатель не основан на автоматизированном учёте или независимом исследовании, он должен быть прямо обозначен как экспертная оценка."] },
    { title: "Исправление ошибок", paragraphs: ["Пользователь может сообщить об ошибке через существующую страницу контактов сайта. Сообщение проверяется, подтверждённая ошибка исправляется, а дата последнего обновления изменяется после фактического пересмотра содержания. Юридически значимые изменения требуют повторной проверки источников."] },
    { title: "Обновление материалов", paragraphs: ["Дата обновления меняется не автоматически при сборке сайта, а после фактической содержательной проверки материала."] },
  ],
};

const pl: ExpertPageDictionary = {
  seo: { title: "Sergey Anatska — ekspert ubezpieczeniowy i polityka redakcyjna | SINEDIS", description: "Sergey Anatska przygotowuje i sprawdza materiały ubezpieczeniowe SINEDIS, zajmuje się ubezpieczeniami korporacyjnymi oraz opisuje politykę redakcyjną serwisu." },
  breadcrumb: "Ekspert i polityka redakcyjna",
  labels: { home: "Strona główna", relatedProfiles: "Powiązane profile zawodowe", lastUpdated: "Ostatnia merytoryczna aktualizacja", contentRole: "Rola w materiałach serwisu", specializations: "Obszary specjalizacji", competence: "Kompetencje", editorialPolicy: "Polityka redakcyjna", contactLink: "stronę kontaktową" },
  professionalRoles: ["Członek zarządu agenta ubezpieczeniowego SINEDIS", "Aktywny konsultant, OFWCA WARTA", "COO / CCO", "Specjalista techniczny", "Zastępca dyrektora"],
  shortDescription: "Specjalista ds. procesów ubezpieczeniowych i operacyjnych SINEDIS, łączący doświadczenie zarządcze, handlowe i techniczne.",
  biography: ["Zastępca dyrektora z doświadczeniem w zarządzaniu sprzedażą, operacjami i rozwojem biznesu w Białorusi, Polsce, Rosji, Kazachstanie i Gruzji.", "Kieruje procesami handlowymi i operacyjnymi, opracowuje strategie sprzedaży, buduje i optymalizuje procesy biznesowe oraz wdraża rozwiązania CRM i IT, w tym Bitrix24 i integracje API.", "Praktykujący specjalista w ubezpieczeniach korporacyjnych: odpowiedzialność cywilna przewoźników drogowych, ubezpieczenia graniczne, dobrowolne ubezpieczenia medyczne i reasekuracja.", "Współpracuje ze spedytorami i firmami transportowymi, wspiera obsługę złożonych spraw ubezpieczeniowych, w tym likwidację szkód, analizę wyłączeń, franszyz i ryzyk ubezpieczeniowych.", "Ma doświadczenie w zarządzaniu międzynarodową siecią partnerską, licencjonowaniu działalności ubezpieczeniowej oraz spełnianiu wymogów ochrony danych osobowych.", "Łączy kompetencje zarządcze, handlowe i techniczne, koncentrując się na efektywności, przejrzystości warunków i ochronie interesów klienta."],
  specializations: ["Ubezpieczenia korporacyjne", "Ubezpieczenie odpowiedzialności przewoźników drogowych", "Ubezpieczenie graniczne", "Dobrowolne ubezpieczenia medyczne", "Reasekuracja", "Likwidacja szkód", "Analiza wyłączeń, franszyz i ryzyk ubezpieczeniowych", "Ubezpieczenia firm transportowych i spedycyjnych", "Optymalizacja ubezpieczeniowych procesów biznesowych", "Bitrix24 i integracje API", "Ochrona danych osobowych", "Międzynarodowy rozwój projektów ubezpieczeniowych"],
  contentRole: "Przygotował i sprawdził",
  relatedProfiles: { dionis: { label: "Profil na stronie DIONIS Insurance Broker", ariaLabel: "Otwórz powiązany profil zawodowy na stronie DIONIS Insurance Broker" }, deda: { label: "Profil na stronie DEDA Insurance Broker", ariaLabel: "Otwórz powiązany profil zawodowy na stronie DEDA Insurance Broker" } },
  editorialPolicy: [
    { title: "Kto przygotowuje materiały", paragraphs: [`Materiały ubezpieczeniowe i trasowe serwisu przygotowuje i sprawdza ${expert.localizedNames.pl}.`] },
    { title: "Zasady przygotowania", paragraphs: ["Materiały opierają się na warunkach konkretnego produktu ubezpieczeniowego, dokumentach ubezpieczyciela, mających zastosowanie przepisach, oficjalnych rejestrach, praktycznym doświadczeniu w obsłudze wniosków oraz weryfikacji trasy, kraju rejestracji i typu pojazdu."] },
    { title: "Co jest sprawdzane", items: ["rodzaj ubezpieczenia", "terytorium obowiązywania", "trasa", "kraj rejestracji pojazdu", "okres ubezpieczenia", "lista dokumentów", "ograniczenia", "sposób płatności", "sposób otrzymania polisy", "zastosowanie produktu do konkretnej sytuacji"] },
    { title: "Priorytet źródeł", ordered: ["akty prawne i rejestry państwowe", "oficjalne dokumenty ubezpieczyciela", "oficjalne organizacje branżowe", "wewnętrzna praktyka obsługi wniosków", "ocena ekspercka, jeżeli nie ma dokładnych danych pomiarowych"] },
    { title: "Oceny eksperckie", paragraphs: ["W materiałach oddzielamy sprawdzalne fakty, oficjalne warunki produktu, obserwacje praktyczne i oceny eksperckie.", "Jeżeli wskaźnik nie wynika z automatycznej ewidencji ani niezależnego badania, musi być wprost oznaczony jako ocena ekspercka."] },
    { title: "Korekta błędów", paragraphs: ["Użytkownik może zgłosić błąd przez istniejącą stronę kontaktową serwisu. Zgłoszenie jest sprawdzane, potwierdzony błąd jest poprawiany, a data ostatniej aktualizacji zmienia się po rzeczywistej rewizji treści. Zmiany istotne prawnie wymagają ponownej weryfikacji źródeł."] },
    { title: "Aktualizacja materiałów", paragraphs: ["Data aktualizacji nie zmienia się automatycznie podczas budowania strony, lecz po faktycznej merytorycznej weryfikacji materiału."] },
  ],
};

const en: ExpertPageDictionary = {
  seo: { title: "Anatska Sergey — Insurance Expert and Editorial Policy | SINEDIS", description: "Anatska Sergey prepares and reviews SINEDIS insurance content, focuses on corporate insurance and explains the website editorial policy." },
  breadcrumb: "Expert and editorial policy",
  labels: { home: "Home", relatedProfiles: "Related professional profiles", lastUpdated: "Last substantive update", contentRole: "Role in website materials", specializations: "Areas of specialization", competence: "Competence", editorialPolicy: "Editorial policy", contactLink: "contacts page" },
  professionalRoles: ["Board member of insurance agent SINEDIS", "Active consultant, OFWCA WARTA", "COO / CCO", "Technical specialist", "Deputy Director"],
  shortDescription: "A specialist in SINEDIS insurance and operational processes, combining management, commercial and technical expertise.",
  biography: ["Deputy Director with experience in sales management, operations and business development in Belarus, Poland, Russia, Kazakhstan and Georgia.", "Oversees commercial and operational processes, develops sales strategies, builds and optimizes business processes, and implements CRM and IT solutions, including Bitrix24 and API integrations.", "Practising specialist in corporate insurance: carrier liability insurance, border insurance, voluntary medical insurance and reinsurance.", "Works with freight forwarders and transport companies, supports complex insurance cases, including claims handling, analysis of exclusions, deductibles and insurance risks.", "Has experience managing an international partner network, licensing insurance activity and meeting personal data protection requirements.", "Combines management, commercial and technical expertise with a focus on efficiency, transparent terms and protection of the client’s interests."],
  specializations: ["Corporate insurance", "Carrier liability insurance", "Border insurance", "Voluntary medical insurance", "Reinsurance", "Claims handling", "Analysis of exclusions, deductibles and insurance risks", "Insurance for transport and freight forwarding companies", "Optimization of insurance business processes", "Bitrix24 and API integrations", "Personal data protection", "International development of insurance projects"],
  contentRole: "Prepared and reviewed",
  relatedProfiles: { dionis: { label: "Profile on the DIONIS Insurance Broker website", ariaLabel: "Open related professional profile on the DIONIS Insurance Broker website" }, deda: { label: "Profile on the DEDA Insurance Broker website", ariaLabel: "Open related professional profile on the DEDA Insurance Broker website" } },
  editorialPolicy: [
    { title: "Who prepares materials", paragraphs: [`Insurance and route materials on the website are prepared and reviewed by ${expert.localizedNames.en}.`] },
    { title: "Preparation principles", paragraphs: ["Materials are based on the terms of the specific insurance product, insurer documents, applicable legislation, official registers, practical experience in processing insurance applications, and checks of the route, vehicle registration country and vehicle type."] },
    { title: "What is checked", items: ["type of insurance", "territory of cover", "route", "vehicle registration country", "insurance period", "document list", "restrictions", "payment procedure", "policy delivery procedure", "applicability of the product to the specific situation"] },
    { title: "Source priority", ordered: ["legal acts and state registers", "official insurer documents", "official industry organizations", "internal application handling practice", "expert assessment where precise measured data is not available"] },
    { title: "Expert assessments", paragraphs: ["Materials distinguish between verifiable facts, official product terms, practical observations and expert assessments.", "If an indicator is not based on automated records or independent research, it must be clearly marked as an expert assessment."] },
    { title: "Error correction", paragraphs: ["A user may report an error through the existing contacts page. The report is checked, a confirmed error is corrected, and the last update date changes after the content has actually been reviewed. Legally significant changes require renewed source verification."] },
    { title: "Updating materials", paragraphs: ["The update date is not changed automatically during a site build; it changes after an actual substantive review of the material."] },
  ],
};

const be: ExpertPageDictionary = {
  seo: { title: "Анацка Сяргей — эксперт па страхаванні і рэдакцыйная палітыка | SINEDIS", description: "Анацка Сяргей рыхтуе і правярае страхавыя матэрыялы SINEDIS, спецыялізуецца на карпаратыўным страхаванні і апісвае рэдакцыйную палітыку сайта." },
  breadcrumb: "Эксперт і рэдакцыйная палітыка",
  labels: { home: "Галоўная", relatedProfiles: "Звязаныя прафесійныя профілі", lastUpdated: "Апошняе змястоўнае абнаўленне", contentRole: "Роля ў матэрыялах сайта", specializations: "Сферы спецыялізацыі", competence: "Кампетэнцыя", editorialPolicy: "Рэдакцыйная палітыка", contactLink: "старонку кантактаў" },
  professionalRoles: ["Член праўлення страхавога агента SINEDIS", "Дзейны кансультант, OFWCA WARTA", "COO / CCO", "Тэхнічны спецыяліст", "Намеснік дырэктара"],
  shortDescription: "Спецыяліст па страхавых і аперацыйных працэсах SINEDIS, які спалучае кіраўнічую, камерцыйную і тэхнічную экспертызу.",
  biography: ["Намеснік дырэктара з досведам кіравання продажамі, аперацыйнай дзейнасцю і развіццём бізнесу ў Беларусі, Польшчы, Расіі, Казахстане і Грузіі.", "Кіруе камерцыйнымі і аперацыйнымі працэсамі, распрацоўвае стратэгіі продажаў, выбудоўвае і аптымізуе бізнес-працэсы, укараняе CRM і IT-рашэнні, у тым ліку Bitrix24 і API-інтэграцыі.", "Практыкуючы спецыяліст у карпаратыўным страхаванні: страхаванне грамадзянскай адказнасці грузаперавозчыкаў, памежнае страхаванне, добраахвотнае медыцынскае страхаванне і перастрахаванне.", "Працуе з экспедытарамі і транспартнымі кампаніямі, суправаджае складаныя страхавыя выпадкі, уключаючы ўрэгуляванне страт, аналіз выключэнняў, франшыз і страхавых рызык.", "Мае досвед кіравання міжнароднай партнёрскай сеткай, ліцэнзавання страхавой дзейнасці і выканання патрабаванняў па абароне персанальных даных.", "Спалучае кіраўнічую, камерцыйную і тэхнічную экспертызу з фокусам на эфектыўнасці, празрыстасці ўмоў і абароне інтарэсаў кліента."],
  specializations: ["Карпаратыўнае страхаванне", "Страхаванне адказнасці грузаперавозчыкаў", "Памежнае страхаванне", "Добраахвотнае медыцынскае страхаванне", "Перастрахаванне", "Урэгуляванне страт", "Аналіз выключэнняў, франшыз і страхавых рызык", "Страхаванне транспартных і экспедытарскіх кампаній", "Аптымізацыя страхавых бізнес-працэсаў", "Bitrix24 і API-інтэграцыі", "Абарона персанальных даных", "Міжнароднае развіццё страхавых праектаў"],
  contentRole: "Падрыхтаваў і праверыў",
  relatedProfiles: { dionis: { label: "Профіль на сайце DIONIS Insurance Broker", ariaLabel: "Адкрыць звязаны прафесійны профіль на сайце DIONIS Insurance Broker" }, deda: { label: "Профіль на сайце DEDA Insurance Broker", ariaLabel: "Адкрыць звязаны прафесійны профіль на сайце DEDA Insurance Broker" } },
  editorialPolicy: [
    { title: "Хто рыхтуе матэрыялы", paragraphs: [`Страхавыя і маршрутныя матэрыялы сайта рыхтуе і правярае ${expert.localizedNames.be}.`] },
    { title: "Прынцыпы падрыхтоўкі", paragraphs: ["Матэрыялы грунтуюцца на ўмовах канкрэтнага страхавога прадукту, дакументах страхоўшчыка, прымянімым заканадаўстве, афіцыйных рэестрах, практычным досведзе апрацоўкі страхавых заявак, а таксама праверцы маршруту, краіны рэгістрацыі і тыпу транспартнага сродку."] },
    { title: "Што правяраецца", items: ["від страхавання", "тэрыторыя дзеяння", "маршрут", "краіна рэгістрацыі аўтамабіля", "тэрміны страхавання", "пералік дакументаў", "абмежаванні", "парадак аплаты", "парадак атрымання поліса", "прымянімасць прадукту да канкрэтнай сітуацыі"] },
    { title: "Прыярытэт крыніц", ordered: ["нарматыўныя акты і дзяржаўныя рэестры", "афіцыйныя дакументы страхоўшчыка", "афіцыйныя галіновыя арганізацыі", "унутраная практыка апрацоўкі заявак", "экспертная ацэнка, калі дакладныя вымераныя даныя адсутнічаюць"] },
    { title: "Экспертныя ацэнкі", paragraphs: ["У матэрыялах раздзяляюцца правяральныя факты, афіцыйныя ўмовы прадукту, практычныя назіранні і экспертныя ацэнкі.", "Калі паказчык не заснаваны на аўтаматызаваным уліку або незалежным даследаванні, ён павінен быць прама пазначаны як экспертная ацэнка."] },
    { title: "Выпраўленне памылак", paragraphs: ["Карыстальнік можа паведаміць пра памылку праз існуючую старонку кантактаў сайта. Паведамленне правяраецца, пацверджаная памылка выпраўляецца, а дата апошняга абнаўлення змяняецца пасля фактычнага перагляду зместу. Юрыдычна значныя змены патрабуюць паўторнай праверкі крыніц."] },
    { title: "Абнаўленне матэрыялаў", paragraphs: ["Дата абнаўлення змяняецца не аўтаматычна пры зборцы сайта, а пасля фактычнай змястоўнай праверкі матэрыялу."] },
  ],
};

export const sergeyAnatskaExpertDictionaries = { ru, pl, en, be } as const satisfies Record<SupportedExpertLocale, ExpertPageDictionary>;

export function getSergeyAnatskaExpertDictionary(lang: SupportedExpertLocale): ExpertPageDictionary {
  return sergeyAnatskaExpertDictionaries[lang];
}
