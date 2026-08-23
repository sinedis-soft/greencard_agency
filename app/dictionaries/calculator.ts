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
          { value: "30", label: "30 дней" },
          { value: "60", label: "60 дней" },
          { value: "90", label: "90 дней" },
          { value: "180", label: "180 дней" },
          { value: "365", label: "364 дня" },
        ],
      },
    },

    button: "Оформить по расчёту",
    resultTitle: "Ориентировочная стоимость",
    resultHint: " ",
    note: " ",
  },

  pl: {
    title: "Kalkulator składki",
    badge: "~ 1 minuta",
    intro: "Wybierz okres ubezpieczenia i rodzaj pojazdu.",

    fields: {
      vehicle: {
        label: "Rodzaj pojazdu",
        options: [
          { value: "car", label: "Samochody osobowe" },
          { value: "moto", label: "Motocykle" },
          { value: "van", label: "Autobusy" },
          { value: "truck", label: "Samochody ciężarowe" },
          { value: "trailer", label: "Przyczepy" },
          { value: "special", label: "Pojazdy specjalne" },
        ],
      },
      term: {
        label: "Okres ubezpieczenia",
        options: [
          { value: "30", label: "30 dni" },
          { value: "60", label: "60 dni" },
          { value: "90", label: "90 dni" },
          { value: "180", label: "180 dni" },
          { value: "365", label: "364 dni" },
        ],
      },
    },

    button: "Kup polisę według kalkulacji",
    resultTitle: "Orientacyjna cena",
    resultHint: " ",
    note: " ",
  },



  en: {
    title: "Price Calculator",
    badge: "~ 1 minute",
    intro: "Select the insurance term and vehicle type.",

    fields: {
      vehicle: {
        label: "Vehicle type",
        options: [
          { value: "car", label: "Passenger cars" },
          { value: "moto", label: "Motorcycles" },
          { value: "van", label: "Buses" },
          { value: "truck", label: "Trucks" },
          { value: "trailer", label: "Trailers" },
          { value: "special", label: "Special-purpose vehicles" },
        ],
      },
      term: {
        label: "Insurance term",
        options: [
          { value: "30", label: "30 days" },
          { value: "60", label: "60 days" },
          { value: "90", label: "90 days" },
          { value: "180", label: "180 days" },
          { value: "365", label: "364 days" },
        ],
      },
    },

    button: "Proceed with this quote",
    resultTitle: "Estimated price",
    resultHint: " ",
    note: " ",
  },
  be: {
    title: "Калькулятар кошту",
    badge: "~ 1 хвіліна",
    intro: "Выберыце тэрмін страхавання і тып транспартнага сродку.",

    fields: {
      vehicle: {
        label: "Тып транспартнага сродку",
        options: [
          { value: "car", label: "Легкавыя аўтамабілі" },
          { value: "moto", label: "Матацыклы" },
          { value: "van", label: "Аўтобусы" },
          { value: "truck", label: "Грузавыя аўтамабілі" },
          { value: "trailer", label: "Прычэпы" },
          { value: "special", label: "Спецтэхніка" },
        ],
      },
      term: {
        label: "Тэрмін страхавання",
        options: [
          { value: "30", label: "30 дзён" },
          { value: "60", label: "60 дзён" },
          { value: "90", label: "90 дзён" },
          { value: "180", label: "180 дзён" },
          { value: "365", label: "364 дні" },
        ],
      },
    },

    button: "Аформіць паводле разліку",
    resultTitle: "Арыенціровачны кошт",
    resultHint: " ",
    note: " ",
  },
  uz: {
    title: "Narx kalkulyatori",
    badge: "~ 1 daqiqa",
    intro: "Sug‘urta muddatini va transport vositasi turini tanlang.",

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
          { value: "30", label: "30 kun" },
          { value: "60", label: "60 kun" },
          { value: "90", label: "90 kun" },
          { value: "180", label: "180 kun" },
          { value: "365", label: "364 kun" },
        ],
      },
    },

    button: "Hisob-kitob bo‘yicha rasmiylashtirish",
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
          { value: "special", label: "სპეციალური ტექნიკა" },
        ],
      },
      term: {
        label: "დაზღვევის ვადა",
        options: [
          { value: "30", label: "30 დღე" },
          { value: "60", label: "60 დღე" },
          { value: "90", label: "90 დღე" },
          { value: "180", label: "180 დღე" },
          { value: "365", label: "364 დღე" },
        ],
      },
    },

    button: "გაფორმება გაანგარიშების მიხედვით",
    resultTitle: "სავარაუდო ღირებულება",
    resultHint: " ",
    note: " ",
  },

  kk: {
    title: "Құн калькуляторы",
    badge: "~ 1 минут",
    intro: "Сақтандыру мерзімін және көлік құралының түрін таңдаңыз.",

    fields: {
      vehicle: {
        label: "Көлік құралының түрі",
        options: [
          { value: "car", label: "Жеңіл автомобильдер" },
          { value: "moto", label: "Мотоциклдер" },
          { value: "van", label: "Автобустар" },
          { value: "truck", label: "Жүк автомобильдері" },
          { value: "trailer", label: "Тіркемелер" },
          { value: "special", label: "Арнайы техника" },
        ],
      },
      term: {
        label: "Сақтандыру мерзімі",
        options: [
          { value: "30", label: "30 күн" },
          { value: "60", label: "60 күн" },
          { value: "90", label: "90 күн" },
          { value: "180", label: "180 күн" },
          { value: "365", label: "364 күн" },
        ],
      },
    },

    button: "Есеп бойынша рәсімдеу",
    resultTitle: "Болжамды құны",
    resultHint: " ",
    note: " ",
  },

  tr: {
    title: "Fiyat hesaplayıcı",
    badge: "~ 1 dakika",
    intro: "Sigorta süresini ve araç türünü seçin.",

    fields: {
      vehicle: {
        label: "Araç türü",
        options: [
          { value: "car", label: "Binek otomobiller" },
          { value: "moto", label: "Motosikletler" },
          { value: "van", label: "Otobüsler" },
          { value: "truck", label: "Kamyonlar" },
          { value: "trailer", label: "Römorklar" },
          { value: "special", label: "Özel amaçlı araçlar" },
        ],
      },
      term: {
        label: "Sigorta süresi",
        options: [
          { value: "30", label: "30 gün" },
          { value: "60", label: "60 gün" },
          { value: "90", label: "90 gün" },
          { value: "180", label: "180 gün" },
          { value: "365", label: "364 gün" },
        ],
      },
    },

    button: "Hesaplamaya göre poliçe düzenle",
    resultTitle: "Tahmini fiyat",
    resultHint: " ",
    note: " ",
  },

  fa: {
    title: "محاسبه‌گر هزینه",
    badge: "~ ۱ دقیقه",
    intro: "مدت بیمه و نوع وسیله نقلیه را انتخاب کنید.",

    fields: {
      vehicle: {
        label: "نوع وسیله نقلیه",
        options: [
          { value: "car", label: "خودروهای سواری" },
          { value: "moto", label: "موتورسیکلت‌ها" },
          { value: "van", label: "اتوبوس‌ها" },
          { value: "truck", label: "کامیون‌ها" },
          { value: "trailer", label: "تریلرها" },
          { value: "special", label: "وسایل نقلیه ویژه" },
        ],
      },
      term: {
        label: "مدت بیمه",
        options: [
          { value: "30", label: "۳۰ روز" },
          { value: "60", label: "۶۰ روز" },
          { value: "90", label: "۹۰ روز" },
          { value: "180", label: "۱۸۰ روز" },
          { value: "365", label: "۳۶۴ روز" },
        ],
      },
    },

    button: "صدور بیمه‌نامه بر اساس محاسبه",
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
          { value: "car", label: "Մարդատար ավտոմեքենաներ" },
          { value: "moto", label: "Մոտոցիկլներ" },
          { value: "van", label: "Ավտոբուսներ" },
          { value: "truck", label: "Բեռնատար ավտոմեքենաներ" },
          { value: "trailer", label: "Կցորդներ" },
          { value: "special", label: "Հատուկ տեխնիկա" },
        ],
      },
      term: {
        label: "Ապահովագրության ժամկետ",
        options: [
          { value: "30", label: "30 օր" },
          { value: "60", label: "60 օր" },
          { value: "90", label: "90 օր" },
          { value: "180", label: "180 օր" },
          { value: "365", label: "364 օր" },
        ],
      },
    },

    button: "Ձևակերպել ըստ հաշվարկի",
    resultTitle: "Մոտավոր արժեք",
    resultHint: " ",
    note: " ",
  },
  ckb: {
    title: "ژمێرەری نرخ",
    badge: "~ ١ خولەک",
    intro: "ماوەی بیمە و جۆری ئۆتۆمبێل هەڵبژێرە.",

    fields: {
      vehicle: {
        label: "جۆری ئۆتۆمبێل",
        options: [
          { value: "car", label: "ئۆتۆمبێلی سواری" },
          { value: "moto", label: "ماتۆڕسکیل" },
          { value: "van", label: "پاس" },
          { value: "truck", label: "ئۆتۆمبێلی باربەر" },
          { value: "trailer", label: "تریلە و پاشکێش" },
          { value: "special", label: "ئامێری تایبەت" },
        ],
      },
      term: {
        label: "ماوەی بیمە",
        options: [
          { value: "30", label: "٣٠ ڕۆژ" },
          { value: "60", label: "٦٠ ڕۆژ" },
          { value: "90", label: "٩٠ ڕۆژ" },
          { value: "180", label: "١٨٠ ڕۆژ" },
          { value: "365", label: "٣٦٤ ڕۆژ" },
        ],
      },
    },

    button: "بەپێی هەژمارکردن بیمەنامە دەر بکە",
    resultTitle: "نرخی خەمڵێنراو",
    resultHint: " ",
    note: " ",
  }, 
  kmr: {
    title: "Hesabkera bihayê",
    badge: "~ 1 deqîqe",
    intro: "Demê sigorteyê û cureyê wesayîtê hilbijêrin.",

    fields: {
      vehicle: {
        label: "Cureyê wesayîtê",
        options: [
          { value: "car", label: "Otomobîlên rêwiyan" },
          { value: "moto", label: "Motosîklet" },
          { value: "van", label: "Otobês" },
          { value: "truck", label: "Kamyon" },
          { value: "trailer", label: "Treyler" },
          { value: "special", label: "Wesayîtên taybet" },
        ],
      },
      term: {
        label: "Demê sigorteyê",
        options: [
          { value: "30", label: "30 roj" },
          { value: "60", label: "60 roj" },
          { value: "90", label: "90 roj" },
          { value: "180", label: "180 roj" },
          { value: "365", label: "364 roj" },
        ],
      },
    },

    button: "Li gorî hesabê polîçeyê derxînin",
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
          { value: "car", label: "سيارات الركوب" },
          { value: "moto", label: "الدراجات النارية" },
          { value: "van", label: "الحافلات" },
          { value: "truck", label: "الشاحنات" },
          { value: "trailer", label: "المقطورات" },
          { value: "special", label: "المركبات والمعدات الخاصة" },
        ],
      },
      term: {
        label: "مدة التأمين",
        options: [
          { value: "30", label: "30 يومًا" },
          { value: "60", label: "60 يومًا" },
          { value: "90", label: "90 يومًا" },
          { value: "180", label: "180 يومًا" },
          { value: "365", label: "364 يومًا" },
        ],
      },
    },

    button: "إصدار الوثيقة وفقًا للحساب",
    resultTitle: "التكلفة التقديرية",
    resultHint: " ",
    note: " ",
  },
  he: {
    title: "מחשבון עלות",
    badge: "~ דקה אחת",
    intro: "בחרו את תקופת הביטוח ואת סוג הרכב.",

    fields: {
      vehicle: {
        label: "סוג הרכב",
        options: [
          { value: "car", label: "מכוניות נוסעים" },
          { value: "moto", label: "אופנועים" },
          { value: "van", label: "אוטובוסים" },
          { value: "truck", label: "משאיות" },
          { value: "trailer", label: "נגררים" },
          { value: "special", label: "כלי רכב וציוד ייעודי" },
        ],
      },
      term: {
        label: "תקופת הביטוח",
        options: [
          { value: "30", label: "30 ימים" },
          { value: "60", label: "60 ימים" },
          { value: "90", label: "90 ימים" },
          { value: "180", label: "180 ימים" },
          { value: "365", label: "364 ימים" },
        ],
      },
    },

    button: "הפקת הפוליסה לפי החישוב",
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
        label: "Тип транспортного засобу",
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
          { value: "30", label: "30 днів" },
          { value: "60", label: "60 днів" },
          { value: "90", label: "90 днів" },
          { value: "180", label: "180 днів" },
          { value: "365", label: "364 дні" },
        ],
      },
    },

    button: "Оформити за розрахунком",
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
          { value: "30", label: "30 gün" },
          { value: "60", label: "60 gün" },
          { value: "90", label: "90 gün" },
          { value: "180", label: "180 gün" },
          { value: "365", label: "364 gün" },
        ],
      },
    },

    button: "Hesablamaya əsasən rəsmiləşdir",
    resultTitle: "Təxmini qiymət",
    resultHint: " ",
    note: " ",
  },
  ro: {
    title: "Calculator de preț",
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
          { value: "special", label: "Vehicule și utilaje speciale" },
        ],
      },
      term: {
        label: "Perioada de asigurare",
        options: [
          { value: "30", label: "30 de zile" },
          { value: "60", label: "60 de zile" },
          { value: "90", label: "90 de zile" },
          { value: "180", label: "180 de zile" },
          { value: "365", label: "364 de zile" },
        ],
      },
    },

    button: "Încheie polița conform calculului",
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
          { value: "car", label: "Putnički automobili" },
          { value: "moto", label: "Motocikli" },
          { value: "van", label: "Autobusi" },
          { value: "truck", label: "Teretna vozila" },
          { value: "trailer", label: "Prikolice" },
          { value: "special", label: "Specijalna vozila i mehanizacija" },
        ],
      },
      term: {
        label: "Period osiguranja",
        options: [
          { value: "30", label: "30 dana" },
          { value: "60", label: "60 dana" },
          { value: "90", label: "90 dana" },
          { value: "180", label: "180 dana" },
          { value: "365", label: "364 dana" },
        ],
      },
    },

    button: "Zaključi polisu prema obračunu",
    resultTitle: "Okvirna cena",
    resultHint: " ",
    note: " ",
  },
  sq: {
    title: "Kalkulatori i çmimit",
    badge: "~ 1 minutë",
    intro: "Zgjidhni periudhën e sigurimit dhe llojin e mjetit.",

    fields: {
      vehicle: {
        label: "Lloji i mjetit",
        options: [
          { value: "car", label: "Automjete pasagjerësh" },
          { value: "moto", label: "Motoçikleta" },
          { value: "van", label: "Autobusë" },
          { value: "truck", label: "Automjete të rënda" },
          { value: "trailer", label: "Rimorkio" },
          { value: "special", label: "Mjete dhe pajisje speciale" },
        ],
      },
      term: {
        label: "Periudha e sigurimit",
        options: [
          { value: "30", label: "30 ditë" },
          { value: "60", label: "60 ditë" },
          { value: "90", label: "90 ditë" },
          { value: "180", label: "180 ditë" },
          { value: "365", label: "364 ditë" },
        ],
      },
    },

    button: "Lësho policën sipas përllogaritjes",
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
          { value: "30", label: "30 хоног" },
          { value: "60", label: "60 хоног" },
          { value: "90", label: "90 хоног" },
          { value: "180", label: "180 хоног" },
          { value: "365", label: "364 хоног" },
        ],
      },
    },

    button: "Тооцооллын дагуу даатгал авах",
    resultTitle: "Тооцоолсон үнэ",
    resultHint: " ",
    note: " ",
  },
}

export function getCalculatorDictionary(lang: Lang): CalculatorDictionary {
  return calculatorDictionary[lang] ? calculatorDictionary[lang] : calculatorDictionary.ru;
}