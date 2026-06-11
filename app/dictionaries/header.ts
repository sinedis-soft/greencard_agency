// app/dictionaries/header.ts

export const LOCALES = [
  "ru",
  "en",
  "pl",

  "be",
  "uk",

  "kk",
  "uz",
  "az",

  "tr",
  "ka",
  "hy",

  "fa",
  "ckb",
  "kmr",
  "ar",
  "he",

  "ro",
  "sr",
  "sq",

  "mn",
] as const;



export type Lang = (typeof LOCALES)[number];

export const LOCALE_META: Record<Lang, { nativeName: string; region: "Europe" | "Asia" }> = {

  pl: { nativeName: "Polski", region: "Europe" },

  en: { nativeName: "English", region: "Europe" },

  be: { nativeName: "Беларуская", region: "Europe" },
  ru: { nativeName: "Русский", region: "Europe" },
  uk: { nativeName: "Українська", region: "Europe" },

  ro: { nativeName: "Română", region: "Europe" },

  sr: { nativeName: "Српски", region: "Europe" },
  sq: { nativeName: "Shqip", region: "Europe" },

  kk: { nativeName: "Қазақша", region: "Asia" },
  uz: { nativeName: "O‘zbek", region: "Asia" },
  az: { nativeName: "Azərbaycan", region: "Asia" },

  tr: { nativeName: "Türkçe", region: "Asia" },

  hy: { nativeName: "Հայերեն", region: "Asia" },
  ka: { nativeName: "ქართული", region: "Asia" },

  fa: { nativeName: "فارسی", region: "Asia" },

  ckb: { nativeName: "کوردیی ناوەندی", region: "Asia" },
  kmr: { nativeName: "Kurmancî", region: "Asia" },

  ar: { nativeName: "العربية", region: "Asia" },

  he: { nativeName: "עברית", region: "Asia" },

  mn: { nativeName: "Монгол", region: "Asia" },

};

export interface HeaderDictionary {
  brandTitle: string;
  brandSub: string;

  topContacts: string;
  topLangLabel: string;

  nav: {
    main: string;
    about: string;
    contacts: string;
  };

  ctaCalc: string;
  ctaBuy: string;
  menu: string;
  languageDialogTitle: string;
  languageDialogClose: string;
}

export const headerDictionary: Record<Lang, HeaderDictionary> = {
  ru: {
    brandTitle: "Green card agency",
    brandSub: "Страхование для частных лиц",
    topContacts: "Контакты",
    topLangLabel: "Язык",
    nav: { main: "Главная", about: "О нас", contacts: "Контакты" },
    ctaCalc: "Калькулятор",
    ctaBuy: "Купить полис",
    menu: "Меню",
    languageDialogTitle: "Выберите язык",
    languageDialogClose: "Закрыть",
  },

  en: {
    brandTitle: "Green card agency",
    brandSub: "Insurance for individuals",
    topContacts: "Contacts",
    topLangLabel: "Language",
    nav: { main: "Home", about: "About", contacts: "Contacts" },
    ctaCalc: "Calculator",
    ctaBuy: "Buy policy",
    menu: "Menu",
    languageDialogTitle: "Choose language",
    languageDialogClose: "Close",
  },

  pl: {
    brandTitle: "Green card agency",
    brandSub: "Ubezpieczenia dla klientów indywidualnych",
    topContacts: "Kontakt",
    topLangLabel: "Język",
    nav: { main: "Strona główna", about: "O nas", contacts: "Kontakt" },
    ctaCalc: "Kalkulator",
    ctaBuy: "Kup polisę",
    menu: "Menu",
    languageDialogTitle: "Wybierz język",
    languageDialogClose: "Zamknij",
  },

  be: {
    brandTitle: "Green card agency",
    brandSub: "Страхаванне для фізічных асоб",
    topContacts: "Кантакты",
    topLangLabel: "Мова",
    nav: { main: "Галоўная", about: "Пра нас", contacts: "Кантакты" },
    ctaCalc: "Калькулятар",
    ctaBuy: "Купіць поліс",
    menu: "Меню",
    languageDialogTitle: "Выберыце мову",
    languageDialogClose: "Закрыць",
  },

  uk: {
    brandTitle: "Green card agency",
    brandSub: "Страхування для фізичних осіб",
    topContacts: "Контакти",
    topLangLabel: "Мова",
    nav: { main: "Головна", about: "Про нас", contacts: "Контакти" },
    ctaCalc: "Калькулятор",
    ctaBuy: "Купити поліс",
    menu: "Меню",
    languageDialogTitle: "Виберіть мову",
    languageDialogClose: "Закрити",
  },

  kk: {
    brandTitle: "Green Card агенттігі",
    brandSub: "Жеке тұлғаларға арналған сақтандыру",
    topContacts: "Байланыстар",
    topLangLabel: "Тіл",
    nav: { main: "Басты бет", about: "Біз туралы", contacts: "Байланыс" },
    ctaCalc: "Калькулятор",
    ctaBuy: "Полисті сатып алу",
    menu: "Мәзір",
    languageDialogTitle: "Тілді таңдаңыз",
    languageDialogClose: "Жабу",
  },

  uz: {
    brandTitle: "Green Card agentligi",
    brandSub: "Jismoniy shaxslar uchun sug‘urta",
    topContacts: "Kontaktlar",
    topLangLabel: "Til",
    nav: { main: "Bosh sahifa", about: "Biz haqimizda", contacts: "Kontaktlar" },
    ctaCalc: "Kalkulyator",
    ctaBuy: "Polis sotib olish",
    menu: "Menyu",
    languageDialogTitle: "Tilni tanlang",
    languageDialogClose: "Yopish",
  },

  az: {
    brandTitle: "Green Card agentliyi",
    brandSub: "Fiziki şəxslər üçün sığorta",
    topContacts: "Əlaqə",
    topLangLabel: "Dil",
    nav: { main: "Ana səhifə", about: "Haqqımızda", contacts: "Əlaqə" },
    ctaCalc: "Kalkulyator",
    ctaBuy: "Polis almaq",
    menu: "Menyu",
    languageDialogTitle: "Dili seçin",
    languageDialogClose: "Bağla",
  },

  tr: {
    brandTitle: "Yeşil Kart Acentesi",
    brandSub: "Bireysel sigorta çözümleri",
    topContacts: "İletişim",
    topLangLabel: "Dil",
    nav: { main: "Ana Sayfa", about: "Hakkımızda", contacts: "İletişim" },
    ctaCalc: "Hesaplayıcı",
    ctaBuy: "Poliçe Satın Al",
    menu: "Menü",
    languageDialogTitle: "Dil Seçin",
    languageDialogClose: "Kapat",
  },

  ka: {
    brandTitle: "Green card agency",
    brandSub: "დაზღვევა ფიზიკური პირებისთვის",
    topContacts: "კონტაქტები",
    topLangLabel: "ენა",
    nav: { main: "მთავარი", about: "ჩვენ შესახებ", contacts: "კონტაქტები" },
    ctaCalc: "კალკულატორი",
    ctaBuy: "პოლისის შეძენა",
    menu: "მენიუ",
    languageDialogTitle: "აირჩიეთ ენა",
    languageDialogClose: "დახურვა",
  },

  hy: {
    brandTitle: "Green card agency",
    brandSub: "Ապահովագրություն ֆիզիկական անձանց համար",
    topContacts: "Կոնտակտներ",
    topLangLabel: "Լեզու",
    nav: { main: "Գլխավոր", about: "Մեր մասին", contacts: "Կոնտակտներ" },
    ctaCalc: "Հաշվիչ",
    ctaBuy: "Գնել պոլիս",
    menu: "Մենյու",
    languageDialogTitle: "Ընտրեք լեզուն",
    languageDialogClose: "Փակել",
  },

  fa: {
    brandTitle: "آژانس گرین کارت",
    brandSub: "بیمه برای اشخاص حقیقی",
    topContacts: "اطلاعات تماس",
    topLangLabel: "زبان",
    nav: { main: "صفحه اصلی", about: "درباره ما", contacts: "تماس با ما" },
    ctaCalc: "محاسبه‌گر",
    ctaBuy: "خرید بیمه‌نامه",
    menu: "منو",
    languageDialogTitle: "انتخاب زبان",
    languageDialogClose: "بستن",
  },

  ckb: {
    brandTitle: "ئاجانسی گرین کارت",
    brandSub: "بیمە بۆ کەسانی ئاسایی",
    topContacts: "پەیوەندییەکان",
    topLangLabel: "زمان",
    nav: { main: "سەرەکی", about: "دەربارەی ئێمە", contacts: "پەیوەندی" },
    ctaCalc: "ژمێرکار",
    ctaBuy: "کڕینی بیمەنامە",
    menu: "مێنیو",
    languageDialogTitle: "زمان هەڵبژێرە",
    languageDialogClose: "داخستن",
  },

  kmr: {
    brandTitle: "Green Card Agency",
    brandSub: "Sîgorteya ji bo kesên ferdî",
    topContacts: "Têkilî",
    topLangLabel: "Ziman",
    nav: { main: "Rûpela sereke", about: "Derbarê me", contacts: "Têkilî" },
    ctaCalc: "Hesabker",
    ctaBuy: "Polîçeyê bikire",
    menu: "Menu",
    languageDialogTitle: "Zimanê xwe hilbijêre",
    languageDialogClose: "Bigire",
  },

  ar: {
    brandTitle: "وكالة البطاقة الخضراء",
    brandSub: "التأمين للأفراد",
    topContacts: "اتصل بنا",
    topLangLabel: "اللغة",
    nav: { main: "الرئيسية", about: "من نحن", contacts: "اتصل بنا" },
    ctaCalc: "الحاسبة",
    ctaBuy: "شراء وثيقة التأمين",
    menu: "القائمة",
    languageDialogTitle: "اختر اللغة",
    languageDialogClose: "إغلاق",
  },

  he: {
    brandTitle: "Green card agency",
    brandSub: "ביטוח ליחידים",
    topContacts: "יצירת קשר",
    topLangLabel: "שפה",
    nav: { main: "דף הבית", about: "אודותינו", contacts: "יצירת קשר" },
    ctaCalc: "מחשבון",
    ctaBuy: "קניית פוליסה",
    menu: "תפריט",
    languageDialogTitle: "בחר שפה",
    languageDialogClose: "סגור",
  },

  ro: {
    brandTitle: "Green card agency",
    brandSub: "Asigurări pentru persoane fizice",
    topContacts: "Contact",
    topLangLabel: "Limbă",
    nav: { main: "Acasă", about: "Despre noi", contacts: "Contact" },
    ctaCalc: "Calculator",
    ctaBuy: "Cumpără polița",
    menu: "Meniu",
    languageDialogTitle: "Alege limba",
    languageDialogClose: "Închide",
  },

  sr: {
    brandTitle: "Green card agency",
    brandSub: "Осигурање за физичка лица",
    topContacts: "Контакт",
    topLangLabel: "Језик",
    nav: { main: "Почетна", about: "О нама", contacts: "Контакт" },
    ctaCalc: "Калкулатор",
    ctaBuy: "Купи полису",
    menu: "Мени",
    languageDialogTitle: "Изаберите језик",
    languageDialogClose: "Затвори",
  },

  sq: {
    brandTitle: "Green card agency",
    brandSub: "Sigurim për individë",
    topContacts: "Kontakt",
    topLangLabel: "Gjuha",
    nav: { main: "Kryefaqja", about: "Rreth nesh", contacts: "Kontakt" },
    ctaCalc: "Kalkulator",
    ctaBuy: "Bli policën",
    menu: "Menu",
    languageDialogTitle: "Zgjidhni gjuhën",
    languageDialogClose: "Mbyll",
  },

  mn: {
    brandTitle: "Green card agency",
    brandSub: "Хувь хүмүүст зориулсан даатгал",
    topContacts: "Холбоо барих",
    topLangLabel: "Хэл",
    nav: { main: "Нүүр хуудас", about: "Бидний тухай", contacts: "Холбоо барих" },
    ctaCalc: "Тооцоолуур",
    ctaBuy: "Полис худалдаж авах",
    menu: "Цэс",
    languageDialogTitle: "Хэл сонгох",
    languageDialogClose: "Хаах",
  },
};