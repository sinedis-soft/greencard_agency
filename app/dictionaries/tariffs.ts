import type { Lang } from "@/app/dictionaries/header";

export interface TariffsDictionary {
  title: string;
  desc: string;
  badges: [string, string, string];
  order: string;
  tableTitle: string;
  term: string;
  price: string;
  note: string;
}

const en: TariffsDictionary = {
  title: "Policy prices by vehicle type",
  desc: "Choose a vehicle category and insurance term. The final price is confirmed before payment after document review.",
  badges: ["Valid in countries listed in the policy", "Manual document check", "PDF policy by email"],
  order: "Order",
  tableTitle: "Tariff summary",
  term: "Term",
  price: "Price",
  note: "Prices are shown in PLN according to the current tariff table. Availability depends on vehicle data and documents.",
};

export const tariffsDictionary: Record<Lang, TariffsDictionary> = {
  ru: {
    title: "Стоимость полиса по типу ТС",
    desc: "Выберите категорию транспортного средства и срок страхования. Окончательная стоимость подтверждается до оплаты после проверки документов.",
    badges: ["Действует в странах, указанных в полисе", "Ручная проверка документов", "PDF-полис на email"],
    order: "Оформить",
    tableTitle: "Сводная таблица тарифов",
    term: "Срок",
    price: "Стоимость",
    note: "Цены указаны в PLN по текущей тарифной таблице. Возможность оформления зависит от данных ТС и документов.",
  },
  en,
  pl: {
    title: "Cena polisy według typu pojazdu",
    desc: "Wybierz kategorię pojazdu i okres ubezpieczenia. Ostateczna cena jest potwierdzana przed płatnością po sprawdzeniu dokumentów.",
    badges: ["Obowiązuje w krajach wskazanych w polisie", "Ręczna weryfikacja dokumentów", "Polisa PDF na email"],
    order: "Zamów",
    tableTitle: "Podsumowanie taryf",
    term: "Okres",
    price: "Cena",
    note: "Ceny podano w PLN zgodnie z aktualną tabelą taryf. Dostępność zależy od danych pojazdu i dokumentów.",
  },
  be: {
    title: "Кошт поліса паводле тыпу ТС",
    desc: "Выберыце катэгорыю транспартнага сродку і тэрмін страхавання. Канчатковы кошт пацвярджаецца да аплаты пасля праверкі дакументаў.",
    badges: ["Дзейнічае ў краінах, указаных у полісе", "Ручная праверка дакументаў", "PDF-поліс на email"],
    order: "Аформіць",
    tableTitle: "Зводная табліца тарыфаў",
    term: "Тэрмін",
    price: "Кошт",
    note: "Цэны пазначаны ў PLN паводле актуальнай тарыфнай табліцы. Магчымасць афармлення залежыць ад даных ТС і дакументаў.",
  },
  uk: {
    title: "Вартість поліса за типом ТЗ",
    desc: "Оберіть категорію транспортного засобу та строк страхування. Остаточна вартість підтверджується до оплати після перевірки документів.",
    badges: ["Діє в країнах, зазначених у полісі", "Ручна перевірка документів", "PDF-поліс на email"],
    order: "Оформити",
    tableTitle: "Зведена таблиця тарифів",
    term: "Строк",
    price: "Вартість",
    note: "Ціни вказані в PLN за актуальною тарифною таблицею. Можливість оформлення залежить від даних ТЗ і документів.",
  },
  kk: en, uz: en, az: en, tr: en, ka: en, hy: en, fa: en, ckb: en, kmr: en, ar: en, he: en, ro: en, sr: en, sq: en, mn: en,
};

export function getTariffsDictionary(lang: Lang): TariffsDictionary {
  return tariffsDictionary[lang] || tariffsDictionary.en;
}
