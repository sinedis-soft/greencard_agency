// app/dictionaries/calculator.ts
import type { Lang } from "@/app/dictionaries/header";

export type Vehicle = "car" | "van" | "moto" | "truck" | "trailer" | "special";
export type Term = "30" | "60" | "90" | "180" | "365";

export interface CalculatorDictionary {
  title: string;
  badge: string;

  intro: string;

  fields: {
    vehicle: { label: string; options: Array<{ value: Vehicle; label: string }> };
    term: { label: string; options: Array<{ value: Term; label: string }> };
  };

  button: string;
  resultTitle: string;
  resultHint: string;
  note: string;
  buyButton: string;
}

export const calculatorDictionary: Record<Lang, CalculatorDictionary> = {
  ru: {
    title: "Калькулятор стоимости",
    badge: "~ 1 минута",
    intro: "Выберите срок страхования и тип ТС.",

    fields: {
      vehicle: {
        label: "Тип ТС",
        options: [
          { value: "car", label: "Легковые" },
          { value: "moto", label: "Мотоциклы" },
          { value: "van", label: "Автобусы" },
          { value: "truck", label: "Грузовые" },
          { value: "trailer", label: "Прицепы" },
          { value: "special", label: "Спецтехника" },
        ],
      },
      term: {
        label: "Срок страхования",
        options: [
          { value: "30", label: "1 месяц" },
          { value: "60", label: "2 месяца" },
          { value: "90", label: "3 месяца" },
          { value: "180", label: "6 месяцев" },
          { value: "365", label: "12 месяцев" },
        ],
      },
    },

    button: "Рассчитать",
    buyButton: "Купить полис",
    resultTitle: "Ориентировочная стоимость",
    resultHint: " ",
    note: " ",
  },

  pl: {
    title: "Kalkulator składki",
    badge: "~ 1 minuta",
    intro: "Wybierz okres ubezpieczenia oraz typ pojazdu.",

    fields: {
      vehicle: {
        label: "Typ pojazdu",
        options: [
          { value: "car", label: "Samochody osobowe" },
          { value: "moto", label: "Motocykle" },
          { value: "van", label: "Autobusy" },
          { value: "truck", label: "Pojazdy ciężarowe" },
          { value: "trailer", label: "Przyczepy" },
          { value: "special", label: "Pojazdy specjalne" },
        ],
      },
      term: {
        label: "Okres ubezpieczenia",
        options: [
          { value: "30", label: "1 miesiąc" },
          { value: "60", label: "2 miesiące" },
          { value: "90", label: "3 miesiące" },
          { value: "180", label: "6 miesięcy" },
          { value: "365", label: "12 miesięcy" },
        ],
      },
    },

    button: "Oblicz",
    buyButton: "Kup polisę",
    resultTitle: "Orientacyjna składka",
    resultHint: " ",
    note: " ",
  },



  en: {
    title: "Premium Calculator",
    badge: "~ 1 minute",
    intro: "Select the insurance period and vehicle type.",

    fields: {
      vehicle: {
        label: "Vehicle Type",
        options: [
          { value: "car", label: "Passenger Cars" },
          { value: "moto", label: "Motorcycles" },
          { value: "van", label: "Buses" },
          { value: "truck", label: "Trucks" },
          { value: "trailer", label: "Trailers" },
          { value: "special", label: "Special Equipment" },
        ],
      },
      term: {
        label: "Insurance Period",
        options: [
          { value: "30", label: "1 month" },
          { value: "60", label: "2 months" },
          { value: "90", label: "3 months" },
          { value: "180", label: "6 months" },
          { value: "365", label: "12 months" },
        ],
      },
    },

    button: "Calculate",
    buyButton: "Buy policy",
    resultTitle: "Estimated Premium",
    resultHint: " ",
    note: " ",
  },
  be: {
    title: "Калькулятар кошту",
    badge: "~ 1 хвіліна",
    intro: "Выберыце тэрмін страхавання і тып транспартнага сродку.",

    fields: {
      vehicle: {
        label: "Тып ТС",
        options: [
          { value: "car", label: "Легкавыя" },
          { value: "moto", label: "Матацыклы" },
          { value: "van", label: "Аўтобусы" },
          { value: "truck", label: "Грузавыя" },
          { value: "trailer", label: "Прычэпы" },
          { value: "special", label: "Спецтэхніка" },
        ],
      },
      term: {
        label: "Тэрмін страхавання",
        options: [
          { value: "30", label: "1 месяц" },
          { value: "60", label: "2 месяцы" },
          { value: "90", label: "3 месяцы" },
          { value: "180", label: "6 месяцаў" },
          { value: "365", label: "12 месяцаў" },
        ],
      },
    },

    button: "Разлічыць",
    resultTitle: "Арыенціровачны кошт",
    resultHint: " ",
    note: " ",
  },
  uz: {
    title: "Narx kalkulyatori",
    badge: "~ 1 daqiqa",
    intro: "Sug‘urta muddati va transport vositasi turini tanlang.",

    fields: {
      vehicle: {
        label: "Transport vositasi turi",
        options: [
          { value: "car", label: "Yengil avtomobillar" },
          { value: "moto", label: "Mototsikllar" },
          { value: "van", label: "Avtobuslar" },
          { value: "truck", label: "Yuk avtomobillari" },
          { value: "trailer", label: "Tirkamalar" },
          { value: "special", label: "Maxsus texnika" },
        ],
      },
      term: {
        label: "Sug‘urta muddati",
        options: [
          { value: "30", label: "1 oy" },
          { value: "60", label: "2 oy" },
          { value: "90", label: "3 oy" },
          { value: "180", label: "6 oy" },
          { value: "365", label: "12 oy" },
        ],
      },
    },

    button: "Hisoblash",
    resultTitle: "Taxminiy narx",
    resultHint: " ",
    note: " ",
  },

  ka: {
    title: "ღირებულების კალკულატორი",
    badge: "~ 1 წუთი",
    intro: "აირჩიეთ დაზღვევის ვადა და სატრანსპორტო საშუალების ტიპი.",

    fields: {
      vehicle: {
        label: "სატრანსპორტო საშუალების ტიპი",
        options: [
          { value: "car", label: "მსუბუქი ავტომობილები" },
          { value: "moto", label: "მოტოციკლები" },
          { value: "van", label: "ავტობუსები" },
          { value: "truck", label: "სატვირთო ავტომობილები" },
          { value: "trailer", label: "მისაბმელები" },
          { value: "special", label: "სპეცტექნიკა" },
        ],
      },
      term: {
        label: "დაზღვევის ვადა",
        options: [
          { value: "30", label: "1 თვე" },
          { value: "60", label: "2 თვე" },
          { value: "90", label: "3 თვე" },
          { value: "180", label: "6 თვე" },
          { value: "365", label: "12 თვე" },
        ],
      },
    },

    button: "გამოთვლა",
    resultTitle: "საორიენტაციო ღირებულება",
    resultHint: " ",
    note: " ",
  },

  kk: {
    title: "Құн калькуляторы",
    badge: "~ 1 минут",
    intro: "Сақтандыру мерзімі мен көлік құралының түрін таңдаңыз.",

    fields: {
      vehicle: {
        label: "Көлік құралының түрі",
        options: [
          { value: "car", label: "Жеңіл автомобильдер" },
          { value: "moto", label: "Мотоциклдер" },
          { value: "van", label: "Автобустар" },
          { value: "truck", label: "Жүк көліктері" },
          { value: "trailer", label: "Тіркемелер" },
          { value: "special", label: "Арнайы техника" },
        ],
      },
      term: {
        label: "Сақтандыру мерзімі",
        options: [
          { value: "30", label: "1 ай" },
          { value: "60", label: "2 ай" },
          { value: "90", label: "3 ай" },
          { value: "180", label: "6 ай" },
          { value: "365", label: "12 ай" },
        ],
      },
    },

    button: "Есептеу",
    resultTitle: "Болжамды құны",
    resultHint: " ",
    note: " ",
  },

  tr: {
    title: "Fiyat Hesaplayıcısı",
    badge: "~ 1 dakika",
    intro: "Sigorta süresini ve araç türünü seçin.",

    fields: {
      vehicle: {
        label: "Araç Türü",
        options: [
          { value: "car", label: "Binek Araçlar" },
          { value: "moto", label: "Motosikletler" },
          { value: "van", label: "Otobüsler" },
          { value: "truck", label: "Kamyonlar" },
          { value: "trailer", label: "Römorklar" },
          { value: "special", label: "Özel Amaçlı Araçlar" },
        ],
      },
      term: {
        label: "Sigorta Süresi",
        options: [
          { value: "30", label: "1 ay" },
          { value: "60", label: "2 ay" },
          { value: "90", label: "3 ay" },
          { value: "180", label: "6 ay" },
          { value: "365", label: "12 ay" },
        ],
      },
    },

    button: "Hesapla",
    resultTitle: "Tahmini Maliyet",
    resultHint: " ",
    note: " ",
  },

  fa: {
    title: "محاسبه‌گر هزینه بیمه",
    badge: "~ ۱ دقیقه",
    intro: "مدت بیمه و نوع وسیله نقلیه را انتخاب کنید.",

    fields: {
      vehicle: {
        label: "نوع وسیله نقلیه",
        options: [
          { value: "car", label: "خودروهای سواری" },
          { value: "moto", label: "موتورسیکلت‌ها" },
          { value: "van", label: "اتوبوس‌ها" },
          { value: "truck", label: "وسایل نقلیه باری" },
          { value: "trailer", label: "تریلرها" },
          { value: "special", label: "ماشین‌آلات ویژه" },
        ],
      },
      term: {
        label: "مدت اعتبار بیمه",
        options: [
          { value: "30", label: "۱ ماه" },
          { value: "60", label: "۲ ماه" },
          { value: "90", label: "۳ ماه" },
          { value: "180", label: "۶ ماه" },
          { value: "365", label: "۱۲ ماه" },
        ],
      },
    },

    button: "محاسبه",
    resultTitle: "هزینه تقریبی",
    resultHint: " ",
    note: " ",
  },

  hy: {
    title: "Արժեքի հաշվիչ",
    badge: "~ 1 րոպե",
    intro: "Ընտրեք ապահովագրության ժամկետը և տրանսպորտային միջոցի տեսակը։",

    fields: {
      vehicle: {
        label: "Տրանսպորտային միջոցի տեսակ",
        options: [
          { value: "car", label: "Թեթև մարդատար ավտոմեքենաներ" },
          { value: "moto", label: "Մոտոցիկլետներ" },
          { value: "van", label: "Ավտոբուսներ" },
          { value: "truck", label: "Բեռնատարներ" },
          { value: "trailer", label: "Կցորդներ" },
          { value: "special", label: "Հատուկ տեխնիկա" },
        ],
      },
      term: {
        label: "Ապահովագրության ժամկետ",
        options: [
          { value: "30", label: "1 ամիս" },
          { value: "60", label: "2 ամիս" },
          { value: "90", label: "3 ամիս" },
          { value: "180", label: "6 ամիս" },
          { value: "365", label: "12 ամիս" },
        ],
      },
    },

    button: "Հաշվել",
    resultTitle: "Մոտավոր արժեք",
    resultHint: " ",
    note: " ",
  },
  ckb: {
    title: "ژمێرکاری نرخ",
    badge: "~ 1 خولەک",
    intro: "ماوەی بیمە و جۆری ئامرازەکە هەڵبژێرە.",

    fields: {
      vehicle: {
        label: "جۆری ئامراز",
        options: [
          { value: "car", label: "ئۆتۆمبێلی سواری" },
          { value: "moto", label: "ماتۆڕ" },
          { value: "van", label: "پاس" },
          { value: "truck", label: "بارهەڵگر" },
          { value: "trailer", label: "پاشکۆ" },
          { value: "special", label: "ئامرازە تایبەتەکان" },
        ],
      },
      term: {
        label: "ماوەی بیمە",
        options: [
          { value: "30", label: "1 مانگ" },
          { value: "60", label: "2 مانگ" },
          { value: "90", label: "3 مانگ" },
          { value: "180", label: "6 مانگ" },
          { value: "365", label: "12 مانگ" },
        ],
      },
    },

    button: "هەژمارکردنی نرخ",
    resultTitle: "نرخی خەمڵێندراو",
    resultHint: " ",
    note: " ",
  },  
  kmr: {
    title: "Hesabkera Bihayê",
    badge: "~ 1 deqîqe",
    intro: "Demjimêra sîgorteyê û cureya wesayîtê hilbijêrin.",

    fields: {
      vehicle: {
        label: "Cureya wesayîtê",
        options: [
          { value: "car", label: "Otomobîl" },
          { value: "moto", label: "Motorsîklet" },
          { value: "van", label: "Otobûs" },
          { value: "truck", label: "Kamyon" },
          { value: "trailer", label: "Rimork" },
          { value: "special", label: "Makîneyên taybet" },
        ],
      },
      term: {
        label: "Dema sîgorteyê",
        options: [
          { value: "30", label: "1 meh" },
          { value: "60", label: "2 meh" },
          { value: "90", label: "3 meh" },
          { value: "180", label: "6 meh" },
          { value: "365", label: "12 meh" },
        ],
      },
    },

    button: "Hesab bike",
    resultTitle: "Bihayê texmînî",
    resultHint: " ",
    note: " ",
  },
  ar: {
    title: "حاسبة التكلفة",
    badge: "~ دقيقة واحدة",
    intro: "اختر مدة التأمين ونوع المركبة.",

    fields: {
      vehicle: {
        label: "نوع المركبة",
        options: [
          { value: "car", label: "سيارات ركاب" },
          { value: "moto", label: "دراجات نارية" },
          { value: "van", label: "حافلات" },
          { value: "truck", label: "شاحنات" },
          { value: "trailer", label: "مقطورات" },
          { value: "special", label: "مركبات خاصة" },
        ],
      },
      term: {
        label: "مدة التأمين",
        options: [
          { value: "30", label: "شهر واحد" },
          { value: "60", label: "شهران" },
          { value: "90", label: "3 أشهر" },
          { value: "180", label: "6 أشهر" },
          { value: "365", label: "12 شهرًا" },
        ],
      },
    },

    button: "احسب",
    resultTitle: "التكلفة التقديرية",
    resultHint: " ",
    note: " ",
  },
  he: {
    title: "מחשבון עלות הביטוח",
    badge: "~ דקה אחת",
    intro: "בחרו את תקופת הביטוח ואת סוג הרכב.",

    fields: {
      vehicle: {
        label: "סוג הרכב",
        options: [
          { value: "car", label: "רכב פרטי" },
          { value: "moto", label: "אופנועים" },
          { value: "van", label: "אוטובוסים" },
          { value: "truck", label: "משאיות" },
          { value: "trailer", label: "נגררים" },
          { value: "special", label: "ציוד הנדסי וכלים מיוחדים" },
        ],
      },
      term: {
        label: "תקופת הביטוח",
        options: [
          { value: "30", label: "חודש אחד" },
          { value: "60", label: "חודשיים" },
          { value: "90", label: "3 חודשים" },
          { value: "180", label: "6 חודשים" },
          { value: "365", label: "12 חודשים" },
        ],
      },
    },

    button: "חשב עלות",
    resultTitle: "עלות משוערת",
    resultHint: " ",
    note: " ",
  },
  uk: {
    title: "Калькулятор вартості",
    badge: "~ 1 хвилина",
    intro: "Оберіть строк страхування та тип транспортного засобу.",

    fields: {
      vehicle: {
        label: "Тип ТЗ",
        options: [
          { value: "car", label: "Легкові автомобілі" },
          { value: "moto", label: "Мотоцикли" },
          { value: "van", label: "Автобуси" },
          { value: "truck", label: "Вантажні автомобілі" },
          { value: "trailer", label: "Причепи" },
          { value: "special", label: "Спецтехніка" },
        ],
      },
      term: {
        label: "Строк страхування",
        options: [
          { value: "30", label: "1 місяць" },
          { value: "60", label: "2 місяці" },
          { value: "90", label: "3 місяці" },
          { value: "180", label: "6 місяців" },
          { value: "365", label: "12 місяців" },
        ],
      },
    },

    button: "Розрахувати",
    resultTitle: "Орієнтовна вартість",
    resultHint: " ",
    note: " ",
  },
  az: {
    title: "Qiymət kalkulyatoru",
    badge: "~ 1 dəqiqə",
    intro: "Sığorta müddətini və nəqliyyat vasitəsinin növünü seçin.",

    fields: {
      vehicle: {
        label: "Nəqliyyat vasitəsinin növü",
        options: [
          { value: "car", label: "Minik avtomobilləri" },
          { value: "moto", label: "Motosikletlər" },
          { value: "van", label: "Avtobuslar" },
          { value: "truck", label: "Yük avtomobilləri" },
          { value: "trailer", label: "Qoşqular" },
          { value: "special", label: "Xüsusi texnika" },
        ],
      },
      term: {
        label: "Sığorta müddəti",
        options: [
          { value: "30", label: "1 ay" },
          { value: "60", label: "2 ay" },
          { value: "90", label: "3 ay" },
          { value: "180", label: "6 ay" },
          { value: "365", label: "12 ay" },
        ],
      },
    },

    button: "Hesabla",
    resultTitle: "Təxmini qiymət",
    resultHint: " ",
    note: " ",
  },
  ro: {
    title: "Calculator de cost",
    badge: "~ 1 minut",
    intro: "Selectați perioada de asigurare și tipul vehiculului.",

    fields: {
      vehicle: {
        label: "Tipul vehiculului",
        options: [
          { value: "car", label: "Autoturisme" },
          { value: "moto", label: "Motociclete" },
          { value: "van", label: "Autobuze" },
          { value: "truck", label: "Camioane" },
          { value: "trailer", label: "Remorci" },
          { value: "special", label: "Vehicule speciale" },
        ],
      },
      term: {
        label: "Perioada de asigurare",
        options: [
          { value: "30", label: "1 lună" },
          { value: "60", label: "2 luni" },
          { value: "90", label: "3 luni" },
          { value: "180", label: "6 luni" },
          { value: "365", label: "12 luni" },
        ],
      },
    },

    button: "Calculează",
    resultTitle: "Cost estimativ",
    resultHint: " ",
    note: " ",
  },
  sr: {
    title: "Kalkulator cene",
    badge: "~ 1 minut",
    intro: "Izaberite period osiguranja i vrstu vozila.",

    fields: {
      vehicle: {
        label: "Vrsta vozila",
        options: [
          { value: "car", label: "Putnička vozila" },
          { value: "moto", label: "Motocikli" },
          { value: "van", label: "Autobusi" },
          { value: "truck", label: "Teretna vozila" },
          { value: "trailer", label: "Prikolice" },
          { value: "special", label: "Specijalna vozila" },
        ],
      },
      term: {
        label: "Period osiguranja",
        options: [
          { value: "30", label: "1 mesec" },
          { value: "60", label: "2 meseca" },
          { value: "90", label: "3 meseca" },
          { value: "180", label: "6 meseci" },
          { value: "365", label: "12 meseci" },
        ],
      },
    },

    button: "Izračunaj",
    resultTitle: "Okvirna cena",
    resultHint: " ",
    note: " ",
  },
  sq: {
    title: "Llogaritësi i kostos",
    badge: "~ 1 minutë",
    intro: "Zgjidhni periudhën e sigurimit dhe llojin e mjetit.",

    fields: {
      vehicle: {
        label: "Lloji i mjetit",
        options: [
          { value: "car", label: "Automjete pasagjerësh" },
          { value: "moto", label: "Motocikleta" },
          { value: "van", label: "Autobusë" },
          { value: "truck", label: "Automjete të mallrave" },
          { value: "trailer", label: "Rimorkio" },
          { value: "special", label: "Mjete speciale" },
        ],
      },
      term: {
        label: "Periudha e sigurimit",
        options: [
          { value: "30", label: "1 muaj" },
          { value: "60", label: "2 muaj" },
          { value: "90", label: "3 muaj" },
          { value: "180", label: "6 muaj" },
          { value: "365", label: "12 muaj" },
        ],
      },
    },

    button: "Llogarit",
    resultTitle: "Kosto e përafërt",
    resultHint: " ",
    note: " ",
  },
  mn: {
    title: "Үнийн тооцоолуур",
    badge: "~ 1 минут",
    intro: "Даатгалын хугацаа болон тээврийн хэрэгслийн төрлийг сонгоно уу.",

    fields: {
      vehicle: {
        label: "Тээврийн хэрэгслийн төрөл",
        options: [
          { value: "car", label: "Суудлын автомашин" },
          { value: "moto", label: "Мотоцикл" },
          { value: "van", label: "Автобус" },
          { value: "truck", label: "Ачааны автомашин" },
          { value: "trailer", label: "Чиргүүл" },
          { value: "special", label: "Тусгай зориулалтын техник" },
        ],
      },
      term: {
        label: "Даатгалын хугацаа",
        options: [
          { value: "30", label: "1 сар" },
          { value: "60", label: "2 сар" },
          { value: "90", label: "3 сар" },
          { value: "180", label: "6 сар" },
          { value: "365", label: "12 сар" },
        ],
      },
    },

    button: "Тооцоолох",
    resultTitle: "Урьдчилсан үнэ",
    resultHint: " ",
    note: " ",
  },
}

export function getCalculatorDictionary(lang: Lang): CalculatorDictionary {
  return calculatorDictionary[lang] ? calculatorDictionary[lang] : calculatorDictionary.ru;
}