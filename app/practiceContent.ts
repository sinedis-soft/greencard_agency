import type { ExpertId, SupportedExpertLocale } from "@/app/experts/experts";

export type CaseStudyLocale = SupportedExpertLocale;
export type CaseStudyId = "belarus-poland-border-insurance" | "georgia-romania-ferry";
export type PracticeRoutePath = "/route/belarus/poland" | "/route/georgia/romania";

type CaseStudyContent = {
  title: string;
  situation: string;
  solution: string;
  result: string;
  disclaimer: string;
};

export type CaseStudy = {
  id: CaseStudyId;
  route: PracticeRoutePath;
  product: "OC graniczne";
  verifiedBy: ExpertId;
  published: boolean;
  content: Record<CaseStudyLocale, CaseStudyContent>;
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: "belarus-poland-border-insurance",
    route: "/route/belarus/poland",
    product: "OC graniczne",
    verifiedBy: "sergey-anatska",
    published: true,
    content: {
      ru: {
        title: "Страхование для въезда из Беларуси в Польшу",
        situation: "Водителю автомобиля с белорусскими регистрационными номерами требовалось действующее страхование для поездки в Польшу. В конкретной ситуации рассчитывать на покупку полиса с польской стороны границы было нельзя.",
        solution: "Клиент заранее передал необходимые данные, после чего SINEDIS проверил применимость продукта и оформил пограничное страхование.",
        result: "Клиент получил страховой документ до въезда и смог продолжить поездку по территории Польши.",
        disclaimer: "Наличие полиса не гарантирует пересечение государственной границы. Решение о допуске принимают компетентные государственные органы, а применимость страхования проверяется отдельно для конкретного автомобиля и маршрута.",
      },
      pl: {
        title: "Ubezpieczenie na wjazd z Białorusi do Polski",
        situation: "Kierowca samochodu z białoruskimi numerami rejestracyjnymi potrzebował ważnego ubezpieczenia na podróż do Polski. W tej konkretnej sytuacji nie można było zakładać zakupu polisy po polskiej stronie granicy.",
        solution: "Klient przekazał wcześniej niezbędne dane, a SINEDIS sprawdził możliwość zastosowania produktu i wystawił ubezpieczenie graniczne.",
        result: "Klient otrzymał dokument ubezpieczenia przed wjazdem i mógł kontynuować podróż po terytorium Polski.",
        disclaimer: "Posiadanie polisy nie zapewnia przekroczenia granicy państwowej. Decyzję o dopuszczeniu podejmują właściwe organy państwowe, a możliwość zastosowania ubezpieczenia jest sprawdzana osobno dla konkretnego pojazdu i trasy.",
      },
      en: {
        title: "Insurance for entry from Belarus to Poland",
        situation: "The driver of a vehicle with Belarusian registration plates needed valid insurance for a trip to Poland. In this specific situation, relying on buying the policy on the Polish side of the border was not possible.",
        solution: "The client provided the necessary data in advance, after which SINEDIS checked whether the product could be applied and issued border insurance.",
        result: "The client received the insurance document before entry and was able to continue the trip within Poland.",
        disclaimer: "Having an insurance document does not ensure crossing a state border. Admission decisions are made by competent public authorities, and insurance applicability is checked separately for the specific vehicle and route.",
      },
      be: {
        title: "Страхаванне для ўезду з Беларусі ў Польшчу",
        situation: "Кіроўцу аўтамабіля з беларускімі рэгістрацыйнымі нумарамі патрабавалася дзейнае страхаванне для паездкі ў Польшчу. У гэтай канкрэтнай сітуацыі разлічваць на куплю поліса з польскага боку мяжы было нельга.",
        solution: "Кліент загадзя перадаў неабходныя даныя, пасля чаго SINEDIS праверыў прымянімасць прадукту і аформіў памежнае страхаванне.",
        result: "Кліент атрымаў страхавы дакумент да ўезду і змог працягнуць паездку па тэрыторыі Польшчы.",
        disclaimer: "Наяўнасць поліса не гарантуе перасячэнне дзяржаўнай мяжы. Рашэнне аб допуску прымаюць кампетэнтныя дзяржаўныя органы, а прымянімасць страхавання правяраецца асобна для канкрэтнага аўтамабіля і маршруту.",
      },
    },
  },
  {
    id: "georgia-romania-ferry",
    route: "/route/georgia/romania",
    product: "OC graniczne",
    verifiedBy: "sergey-anatska",
    published: true,
    content: {
      ru: {
        title: "Страхование перед ночной выгрузкой парома в Румынии",
        situation: "Автомобиль перевозился паромом из Грузии в Румынию через Чёрное море. Выгрузка планировалась ночью, поэтому покупка страхования после прибытия могла быть затруднена.",
        solution: "До прибытия SINEDIS проверил маршрут, данные автомобиля и возможность применения пограничного страхования, после чего был оформлен полис OC graniczne.",
        result: "После выгрузки у клиента уже был действующий страховой документ, и он смог продолжить поездку по территории Румынии.",
        disclaimer: "Применимость пограничного страхования зависит от страны регистрации автомобиля, маршрута, даты начала, вида транспортного средства и условий конкретного продукта. Каждый случай требует отдельной проверки.",
      },
      pl: {
        title: "Ubezpieczenie przed nocnym rozładunkiem promu w Rumunii",
        situation: "Samochód był przewożony promem z Gruzji do Rumunii przez Morze Czarne. Rozładunek planowano w nocy, dlatego zakup ubezpieczenia po przybyciu mógł być utrudniony.",
        solution: "Przed przybyciem SINEDIS sprawdził trasę, dane pojazdu i możliwość zastosowania ubezpieczenia granicznego, po czym wystawiono polisę OC graniczne.",
        result: "Po rozładunku klient miał już ważny dokument ubezpieczenia i mógł kontynuować podróż po terytorium Rumunii.",
        disclaimer: "Możliwość zastosowania ubezpieczenia granicznego zależy od kraju rejestracji pojazdu, trasy, daty rozpoczęcia, rodzaju pojazdu i warunków konkretnego produktu. Każdy przypadek wymaga osobnej weryfikacji.",
      },
      en: {
        title: "Insurance before a night ferry unloading in Romania",
        situation: "The vehicle was transported by ferry from Georgia to Romania across the Black Sea. Unloading was planned at night, so buying insurance after arrival could have been difficult.",
        solution: "Before arrival, SINEDIS checked the route, vehicle data and whether border insurance could be applied, then an OC graniczne policy was issued.",
        result: "After unloading, the client already had a valid insurance document and was able to continue the trip within Romania.",
        disclaimer: "The applicability of border insurance depends on the vehicle registration country, route, start date, vehicle type and terms of the specific product. Each case requires a separate check.",
      },
      be: {
        title: "Страхаванне перад начной выгрузкай парома ў Румыніі",
        situation: "Аўтамабіль перавозіўся паромам з Грузіі ў Румынію праз Чорнае мора. Выгрузка планавалася ноччу, таму купля страхавання пасля прыбыцця магла быць ускладненай.",
        solution: "Да прыбыцця SINEDIS праверыў маршрут, даныя аўтамабіля і магчымасць прымянення памежнага страхавання, пасля чаго быў аформлены поліс OC graniczne.",
        result: "Пасля выгрузкі ў кліента ўжо быў дзейны страхавы дакумент, і ён змог працягнуць паездку па тэрыторыі Румыніі.",
        disclaimer: "Прымянімасць памежнага страхавання залежыць ад краіны рэгістрацыі аўтамабіля, маршруту, даты пачатку, віду транспартнага сродку і ўмоў канкрэтнага прадукту. Кожны выпадак патрабуе асобнай праверкі.",
      },
    },
  },
] as const;

export type EvidenceLevel = "verified-aggregate" | "expert-estimate";
export type PracticeMetricLocaleContent = Record<CaseStudyLocale, { label: string; text: string; disclaimer: string }>;

type Period = { from: string; to: string; label: Record<CaseStudyLocale, string> };
type ExpertMetric = { id: "application-check-time" | "policy-issue-time" | "correction-frequency" | "border-insurance-practice"; evidenceLevel: "expert-estimate"; sourceExpertId: ExpertId; value: number; unit: "minutes" | "correction-per-issues" | "years"; content: PracticeMetricLocaleContent };
type AggregateMetric = { id: "policies-2026-01" | "policies-2026-02" | "policies-2026-05" | "policies-2026-06" | "policies-2026-07-01-17"; evidenceLevel: "verified-aggregate"; period: Period; issuedPolicies: number; cancelledPolicies: number; activeAfterCancellation: number; source: Record<CaseStudyLocale, string> };
export type PracticeMetric = ExpertMetric | AggregateMetric;

const estimateDisclaimer = {
  ru: "Это практическая экспертная оценка, а не гарантированный срок. Фактическое время зависит от полноты документов, сложности маршрута, необходимости дополнительной проверки и доступности системы страховщика.",
  pl: "To praktyczna ocena ekspercka, a nie zapewniony termin. Rzeczywisty czas zależy od kompletności dokumentów, złożoności trasy, potrzeby dodatkowej weryfikacji i dostępności systemu ubezpieczyciela.",
  en: "This is a practical expert estimate, not an assured timeframe. Actual time depends on document completeness, route complexity, the need for additional checks and insurer-system availability.",
  be: "Гэта практычная экспертная ацэнка, а не гарантаваны тэрмін. Фактычны час залежыць ад паўнаты дакументаў, складанасці маршруту, неабходнасці дадатковай праверкі і даступнасці сістэмы страхоўшчыка.",
} as const;

export const PRACTICE_METRICS: readonly PracticeMetric[] = [
  { id: "application-check-time", evidenceLevel: "expert-estimate", sourceExpertId: "sergey-anatska", value: 6, unit: "minutes", content: { ru: { label: "Экспертная оценка", text: "По экспертной оценке Сергея Анацко, первичная проверка полной заявки обычно занимает около 6 минут.", disclaimer: estimateDisclaimer.ru }, pl: { label: "Ocena ekspercka", text: "Według oceny eksperckiej Sergeya Anatski wstępna weryfikacja kompletnego wniosku zwykle zajmuje około 6 minut.", disclaimer: estimateDisclaimer.pl }, en: { label: "Expert estimate", text: "According to Anatska Sergey’s expert estimate, the initial check of a complete application usually takes about 6 minutes.", disclaimer: estimateDisclaimer.en }, be: { label: "Экспертная ацэнка", text: "Паводле экспертнай ацэнкі Сяргея Анацкі, першасная праверка поўнай заяўкі звычайна займае каля 6 хвілін.", disclaimer: estimateDisclaimer.be } } },
  { id: "policy-issue-time", evidenceLevel: "expert-estimate", sourceExpertId: "sergey-anatska", value: 4, unit: "minutes", content: { ru: { label: "Экспертная оценка", text: "После получения и проверки подтверждения оплаты техническая выписка полиса обычно занимает около 4 минут.", disclaimer: estimateDisclaimer.ru }, pl: { label: "Ocena ekspercka", text: "Po otrzymaniu i sprawdzeniu potwierdzenia płatności techniczne wystawienie polisy zwykle zajmuje około 4 minut.", disclaimer: estimateDisclaimer.pl }, en: { label: "Expert estimate", text: "After receiving and checking payment confirmation, the technical issuance of the policy usually takes about 4 minutes.", disclaimer: estimateDisclaimer.en }, be: { label: "Экспертная ацэнка", text: "Пасля атрымання і праверкі пацвярджэння аплаты тэхнічная выпіска поліса звычайна займае каля 4 хвілін.", disclaimer: estimateDisclaimer.be } } },
  { id: "correction-frequency", evidenceLevel: "expert-estimate", sourceExpertId: "sergey-anatska", value: 1, unit: "correction-per-issues", content: { ru: { label: "Экспертная оценка", text: "По экспертной оценке Сергея Анацко, необходимость исправления данных возникает примерно в одном случае на тысячу оформлений.", disclaimer: "Показатель основан на практическом наблюдении, а не на независимом аудите или автоматизированном статистическом учёте." }, pl: { label: "Ocena ekspercka", text: "Według oceny eksperckiej Sergeya Anatski potrzeba poprawienia danych pojawia się mniej więcej w jednym przypadku na tysiąc wystawień.", disclaimer: "Wskaźnik opiera się na praktycznej obserwacji, a nie na niezależnym audycie ani zautomatyzowanej ewidencji statystycznej." }, en: { label: "Expert estimate", text: "According to Anatska Sergey’s expert estimate, the need to correct data arises in roughly one case per thousand issuances.", disclaimer: "The indicator is based on practical observation, not an independent audit or automated statistical tracking." }, be: { label: "Экспертная ацэнка", text: "Паводле экспертнай ацэнкі Сяргея Анацкі, неабходнасць выпраўлення даных узнікае прыкладна ў адным выпадку на тысячу афармленняў.", disclaimer: "Паказчык заснаваны на практычным назіранні, а не на незалежным аўдыце або аўтаматызаваным статыстычным уліку." } } },
  { id: "border-insurance-practice", evidenceLevel: "expert-estimate", sourceExpertId: "sergey-anatska", value: 3, unit: "years", content: { ru: { label: "Практический опыт", text: "Более 3 лет практической работы с пограничным страхованием.", disclaimer: "Этот срок не используется для расчёта количества полисов, клиентов, оборота или доли рынка." }, pl: { label: "Doświadczenie praktyczne", text: "Ponad 3 lata praktycznej pracy z ubezpieczeniem granicznym.", disclaimer: "Ten okres nie jest używany do obliczania liczby polis, klientów, obrotu ani udziału w rynku." }, en: { label: "Practical experience", text: "More than 3 years of practical work with border insurance.", disclaimer: "This period is not used to calculate policy counts, client counts, turnover or market share." }, be: { label: "Практычны досвед", text: "Больш за 3 гады практычнай працы з памежным страхаваннем.", disclaimer: "Гэты тэрмін не выкарыстоўваецца для разліку колькасці полісаў, кліентаў, абароту або долі рынку." } } },
  { id: "policies-2026-01", evidenceLevel: "verified-aggregate", period: { from: "2026-01-01", to: "2026-01-31", label: { ru: "Январь 2026", pl: "Styczeń 2026", en: "January 2026", be: "Студзень 2026" } }, issuedPolicies: 17, cancelledPolicies: 0, activeAfterCancellation: 17, source: { ru: "Вручную подтверждённый агрегат за отдельный период 2026 года.", pl: "Ręcznie potwierdzony agregat za oddzielny okres 2026 roku.", en: "Manually confirmed aggregate for a separate period in 2026.", be: "Уручную пацверджаны агрэгат за асобны перыяд 2026 года." } },
  { id: "policies-2026-02", evidenceLevel: "verified-aggregate", period: { from: "2026-02-01", to: "2026-02-28", label: { ru: "Февраль 2026", pl: "Luty 2026", en: "February 2026", be: "Люты 2026" } }, issuedPolicies: 22, cancelledPolicies: 0, activeAfterCancellation: 22, source: { ru: "Вручную подтверждённый агрегат за отдельный период 2026 года.", pl: "Ręcznie potwierdzony agregat za oddzielny okres 2026 roku.", en: "Manually confirmed aggregate for a separate period in 2026.", be: "Уручную пацверджаны агрэгат за асобны перыяд 2026 года." } },
  { id: "policies-2026-05", evidenceLevel: "verified-aggregate", period: { from: "2026-05-01", to: "2026-05-31", label: { ru: "Май 2026", pl: "Maj 2026", en: "May 2026", be: "Май 2026" } }, issuedPolicies: 35, cancelledPolicies: 0, activeAfterCancellation: 35, source: { ru: "Вручную подтверждённый агрегат за отдельный период 2026 года.", pl: "Ręcznie potwierdzony agregat za oddzielny okres 2026 roku.", en: "Manually confirmed aggregate for a separate period in 2026.", be: "Уручную пацверджаны агрэгат за асобны перыяд 2026 года." } },
  { id: "policies-2026-06", evidenceLevel: "verified-aggregate", period: { from: "2026-06-01", to: "2026-06-30", label: { ru: "Июнь 2026", pl: "Czerwiec 2026", en: "June 2026", be: "Чэрвень 2026" } }, issuedPolicies: 73, cancelledPolicies: 2, activeAfterCancellation: 71, source: { ru: "Вручную подтверждённый агрегат за отдельный период 2026 года.", pl: "Ręcznie potwierdzony agregat za oddzielny okres 2026 roku.", en: "Manually confirmed aggregate for a separate period in 2026.", be: "Уручную пацверджаны агрэгат за асобны перыяд 2026 года." } },
  { id: "policies-2026-07-01-17", evidenceLevel: "verified-aggregate", period: { from: "2026-07-01", to: "2026-07-17", label: { ru: "1–17 июля 2026", pl: "1–17 lipca 2026", en: "July 1–17, 2026", be: "1–17 ліпеня 2026" } }, issuedPolicies: 56, cancelledPolicies: 1, activeAfterCancellation: 55, source: { ru: "Вручную подтверждённый агрегат за отдельный период 2026 года.", pl: "Ręcznie potwierdzony agregat za oddzielny okres 2026 roku.", en: "Manually confirmed aggregate for a separate period in 2026.", be: "Уручную пацверджаны агрэгат за асобны перыяд 2026 года." } },
] as const;

export const practiceUi = {
  ru: { casesTitle: "Реальные примеры из практики", situation: "Ситуация", solution: "Решение", result: "Результат", disclaimer: "Важное ограничение", verifiedBy: "Содержание подтвердил", profile: "Профиль эксперта", aggregatesTitle: "Подтверждённые показатели за отдельные периоды 2026 года", estimatesTitle: "Экспертные оценки", issued: "Выписанные полисы", cancelled: "Аннулированные полисы", active: "Действующие после исключения аннулированных", warnings: ["Опубликованные сроки являются экспертной оценкой и не гарантируются для каждой заявки.", "Фактическое время зависит от полноты документов, маршрута, необходимости дополнительной проверки и доступности системы страховщика.", "Примеры из практики описывают конкретные ситуации и не гарантируют аналогичный результат в другом случае.", "Наличие страхового документа не гарантирует пересечение государственной границы или решение государственных органов.", "Статистика за отдельные периоды не должна использоваться для прогноза будущего количества оформлений."] },
  pl: { casesTitle: "Rzeczywiste przykłady z praktyki", situation: "Sytuacja", solution: "Rozwiązanie", result: "Rezultat", disclaimer: "Ważne ograniczenie", verifiedBy: "Treść potwierdził", profile: "Profil eksperta", aggregatesTitle: "Potwierdzone wskaźniki za oddzielne okresy 2026 roku", estimatesTitle: "Oceny eksperckie", issued: "Wystawione polisy", cancelled: "Anulowane polisy", active: "Aktywne po odjęciu anulowanych", warnings: ["Opublikowane czasy są oceną ekspercką i nie są zapewnione dla każdego wniosku.", "Rzeczywisty czas zależy od kompletności dokumentów, trasy, potrzeby dodatkowej weryfikacji i dostępności systemu ubezpieczyciela.", "Przykłady z praktyki opisują konkretne sytuacje i nie zapewniają takiego samego wyniku w innym przypadku.", "Posiadanie dokumentu ubezpieczenia nie zapewnia przekroczenia granicy państwowej ani decyzji organów państwowych.", "Statystyki za oddzielne okresy nie powinny być używane do prognozowania przyszłej liczby wystawień."] },
  en: { casesTitle: "Real practice examples", situation: "Situation", solution: "Solution", result: "Result", disclaimer: "Important limitation", verifiedBy: "Content confirmed by", profile: "Expert profile", aggregatesTitle: "Confirmed indicators for separate periods of 2026", estimatesTitle: "Expert estimates", issued: "Issued policies", cancelled: "Cancelled policies", active: "Active after excluding cancellations", warnings: ["Published timeframes are expert estimates and are not assured for every application.", "Actual time depends on document completeness, route, the need for additional checks and insurer-system availability.", "Practice examples describe specific situations and do not ensure the same result in another case.", "Having an insurance document does not ensure crossing a state border or a decision by public authorities.", "Statistics for separate periods should not be used to forecast future issuance volumes."] },
  be: { casesTitle: "Рэальныя прыклады з практыкі", situation: "Сітуацыя", solution: "Рашэнне", result: "Вынік", disclaimer: "Важнае абмежаванне", verifiedBy: "Змест пацвердзіў", profile: "Профіль эксперта", aggregatesTitle: "Пацверджаныя паказчыкі за асобныя перыяды 2026 года", estimatesTitle: "Экспертныя ацэнкі", issued: "Выпісаныя полісы", cancelled: "Анмуляваныя полісы", active: "Дзейныя пасля выключэння ануляваных", warnings: ["Апублікаваныя тэрміны з’яўляюцца экспертнай ацэнкай і не гарантуюцца для кожнай заяўкі.", "Фактычны час залежыць ад паўнаты дакументаў, маршруту, неабходнасці дадатковай праверкі і даступнасці сістэмы страхоўшчыка.", "Прыклады з практыкі апісваюць канкрэтныя сітуацыі і не гарантуюць аналагічны вынік у іншым выпадку.", "Наяўнасць страхавога дакумента не гарантуе перасячэнне дзяржаўнай мяжы або рашэнне дзяржаўных органаў.", "Статыстыка за асобныя перыяды не павінна выкарыстоўвацца для прагнозу будучай колькасці афармленняў."] },
} as const satisfies Record<CaseStudyLocale, { casesTitle: string; situation: string; solution: string; result: string; disclaimer: string; verifiedBy: string; profile: string; aggregatesTitle: string; estimatesTitle: string; issued: string; cancelled: string; active: string; warnings: readonly string[] }>;

export function getPublishedCaseStudies(ids: readonly CaseStudyId[]) {
  return ids.map((id) => CASE_STUDIES.find((item) => item.id === id && item.published)).filter((item): item is CaseStudy => Boolean(item));
}
