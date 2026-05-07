// app/dictionaries/header.ts

export const LOCALES = ["ru", "pl", "en", "be", "uz", "ka", "kk", "tr", "fa","hy"] as const;



export type Lang = (typeof LOCALES)[number];

export const LOCALE_META: Record<Lang, { nativeName: string; region: "Europe" | "Asia" }> = {
  pl: { nativeName: "Polski", region: "Europe" },
  en: { nativeName: "English", region: "Europe" },
  be: { nativeName: "Беларуская", region: "Europe" },
  ru: { nativeName: "Русский", region: "Europe" },
  kk: { nativeName: "Қазақша", region: "Asia" },
  uz: { nativeName: "O‘zbek", region: "Asia" },
  tr: { nativeName: "Türkçe", region: "Asia" },
  hy: { nativeName: "Հայերեն", region: "Asia" },
  ka: { nativeName: "ქართული", region: "Asia" },
  fa: { nativeName: "فارسی", region: "Asia" },
  
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
    nav: {
      main: "Главная",
      about: "О нас",
      contacts: "Контакты",
    },
    ctaCalc: "Калькулятор",
    ctaBuy: "Купить полис",
    menu: "Меню",
    languageDialogTitle: "Выберите язык",
    languageDialogClose: "Закрыть",

  },

  pl: {
    brandTitle: "Green card agency",
    brandSub: "Ubezpieczenia dla klientów indywidualnych",
    topContacts: "Kontakt",
    topLangLabel: "Język",
    nav: {
      main: "Strona główna",
      about: "O nas",
      contacts: "Kontakt",
    },
    ctaCalc: "Kalkulator",
    ctaBuy: "Kup polisę",
    menu: "Menu",
    languageDialogTitle: "Wybierz język",
    languageDialogClose: "Zamknij",
  },

  en: {
    brandTitle: "Green card agency",
    brandSub: "Insurance for individuals",
    topContacts: "Contacts",
    topLangLabel: "Language",
    nav: {
      main: "Home",
      about: "About",
      contacts: "Contacts",
    },
    ctaCalc: "Calculator",
    ctaBuy: "Buy policy",
    menu: "Menu",
    languageDialogTitle: "Choose language",
    languageDialogClose: "Close",
  },

  be: {
    brandTitle: "Green card agency",
    brandSub: "Страхаванне для фізічных асоб",
    topContacts: "Кантакты",
    topLangLabel: "Мова",
    nav: {
      main: "Галоўная",
      about: "Пра нас",
      contacts: "Кантакты",
    },
    ctaCalc: "Калькулятар",
    ctaBuy: "Купіць поліс",
    menu: "Меню",
    languageDialogTitle: "Выберыце мову",
    languageDialogClose: "Закрыць",
  },

  uz: {
    brandTitle: "Green Card agentligi",
    brandSub: "Jismoniy shaxslar uchun sug‘urta",
    topContacts: "Kontaktlar",
    topLangLabel: "Til",
    nav: {
      main: "Bosh sahifa",
      about: "Biz haqimizda",
      contacts: "Kontaktlar",
    },
    ctaCalc: "Kalkulyator",
    ctaBuy: "Polis sotib olish",
    menu: "Menyu",
    languageDialogTitle: "Tilni tanlang",
    languageDialogClose: "Yopish",
  },
  ka: {
    brandTitle: "Green card agency",
    brandSub: "დაზღვევა ფიზიკური პირებისთვის",
    topContacts: "კონტაქტები",
    topLangLabel: "ენა",
    nav: {
      main: "მთავარი",
      about: "ჩვენ შესახებ",
      contacts: "კონტაქტები",
    },
    ctaCalc: "კალკულატორი",
    ctaBuy: "პოლისის შეძენა",
    menu: "მენიუ",
    languageDialogTitle: "აირჩიეთ ენა",
    languageDialogClose: "დახურვა",
  },
  kk: {
    brandTitle: "Green Card агенттігі",
    brandSub: "Жеке тұлғаларға арналған сақтандыру",
    topContacts: "Байланыстар",
    topLangLabel: "Тіл",
    nav: {
      main: "Басты бет",
      about: "Біз туралы",
      contacts: "Байланыс",
    },
    ctaCalc: "Калькулятор",
    ctaBuy: "Полисті сатып алу",
    menu: "Мәзір",
    languageDialogTitle: "Тілді таңдаңыз",
    languageDialogClose: "Жабу",
  },
  tr: {
    brandTitle: "Yeşil Kart Acentesi",
    brandSub: "Bireysel sigorta çözümleri",
    topContacts: "İletişim",
    topLangLabel: "Dil",
    nav: {
      main: "Ana Sayfa",
      about: "Hakkımızda",
      contacts: "İletişim",
    },
    ctaCalc: "Hesaplayıcı",
    ctaBuy: "Poliçe Satın Al",
    menu: "Menü",
    languageDialogTitle: "Dil Seçin",
    languageDialogClose: "Kapat",
  },
  fa: {
    brandTitle: "آژانس گرین کارت",
    brandSub: "بیمه برای اشخاص حقیقی",
    topContacts: "اطلاعات تماس",
    topLangLabel: "زبان",
    nav: {
      main: "صفحه اصلی",
      about: "درباره ما",
      contacts: "تماس با ما",
    },
    ctaCalc: "محاسبه‌گر",
    ctaBuy: "خرید بیمه‌نامه",
    menu: "منو",
    languageDialogTitle: "انتخاب زبان",
    languageDialogClose: "بستن",
  },
  hy: {
    brandTitle: "Green card agency",
    brandSub: "Ապահովագրություն ֆիզիկական անձանց համար",
    topContacts: "Կոնտակտներ",
    topLangLabel: "Լեզու",
    nav: {
      main: "Գլխավոր",
      about: "Մեր մասին",
      contacts: "Կոնտակտներ",
    },
    ctaCalc: "Հաշվիչ",
    ctaBuy: "Գնել պոլիս",
    menu: "Մենյու",
    languageDialogTitle: "Ընտրեք լեզուն",
    languageDialogClose: "Փակել",
  },
};