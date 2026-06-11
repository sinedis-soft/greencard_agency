// app/dictionaries/leadForm.ts
import type { Lang } from "@/app/dictionaries/header";

export type LeadFormDictionary = {
  title: string;
  intro: string;

  notSelected: string;
  submit: string;

  fileForbidden: string;

  statusSending: string;
  statusError: string;
  statusSuccess: string;

  contact: {
    legend: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };

  policyholder: {
    individualTitle: string;
    birthDate: string;
    addressTitle: string;
    addressPlaceholder: string;
    addressHelp: string;
    persPass: string;
  };

  policy: {
    legend: string;
    countryFrom: string;
    vehicleType: string;
    engineType: string;
    vehicleVin: string;
    vehicleEngineCapacity: string;
    vehiclePower: string;
    powerUnit: string;
    startDate: string;
    period: string;

    vehiclePlate: string;
    vehicleBrend: string;
    vehicleYear: string;
    docsLabel: string;
    docsHint: string;

    addVehicle: string;
    removeVehicle: string;
    vehicleBlockTitle: string;
    comment: string;

    options: {
      countriesFrom: Array<{ value: string; label: string }>;
      vehicleTypes: Array<{ value: string; label: string }>;
      periods: Array<{ value: string; label: string }>;
      engineTypes: Array<{ value: string; label: string }>;
      powerUnits: Array<{ value: string; label: string }>;
    };
  };
    steps: {
    step1: string;
    step2: string;
    contacts: string;
    vehicleData: string;
    next: string;
    back: string;
  };
    terms: {
    textBefore: string;
    linkText: string;
    textAfter: string;
  };
  estimate: {
    title: string;
    hint: string;
  };
};

const ru: LeadFormDictionary = {
  title: "Заявка на покупку полиса",
  intro: "Заполните данные. Мы подготовим полис и пришлём реквизиты на оплату.",

  notSelected: "Не выбрано",
  submit: "Отправить заявку",

  fileForbidden: "недопустим (архив, аудио или видео).",

  statusSending: "Отправка…",
  statusError: "Ошибка при отправке заявки. Попробуйте позже. (Или попробуйте вложить другой файл техпаспорта)",
  statusSuccess: "Заявка отправлена. Мы свяжемся с вами.",

  contact: {
    legend: "Контактные данные",
    firstName: "Имя",
    lastName: "Фамилия",
    phone: "Телефон (с кодом страны)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Данные страхователя (физическое лицо)",
    birthDate: "Дата рождения",
    addressTitle: "Адрес регистрации",
    addressPlaceholder: "ИНДЕКС, Страна, город, улица, дом, квартира (если есть)",
    addressHelp: "Укажите адрес одной строкой.",
    persPass: "Серия и номер паспорта без пробелов",
  },

  policy: {
    legend: "Данные для расчёта и оформления",
    countryFrom: "Страна регистрации авто",
    vehicleType: "Тип ТС",
    startDate: "Дата начала действия страховки",
    period: "Срок страхования",

    vehiclePlate: "Госномер",
    vehicleBrend: "Марка и модель ТС",
    vehicleYear: "Год выпуска ТС",
    engineType: "Тип топлива",
    vehicleEngineCapacity: "Объем двигателя, см. куб.",
    vehicleVin: "VIN номер",
    vehiclePower: "Мощность двигателя",
    powerUnit: "Единица измерения мощности",
    docsLabel: "Техпаспорт (фото или PDF)",
    docsHint: "Можно прикрепить несколько файлов.",

    addVehicle: "Добавить ТС",
    removeVehicle: "Удалить",
    vehicleBlockTitle: "Транспортное средство",
    comment: "Коментарий (опционально)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],
      vehicleTypes: [
        { value: "car", label: "Легковое авто" },
        { value: "truck", label: "Грузовое авто" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Прицеп" },
        { value: "special", label: "Спецтехника" },
      ],
      periods: [
        { value: "30", label: "30 дней" },
        { value: "60", label: "60 дней" },
        { value: "90", label: "90 дней" },
        { value: "180", label: "6 месяцев" },
        { value: "365", label: "12 месяцев" },
      ],
      engineTypes: [
        { value: "petrol", label: "бензин" },
        { value: "diesel", label: "дизель" },
        { value: "Gas", label: "газ" },
        { value: "Gasoline", label: "газ / бензин" },
        { value: "electric", label: "электро" },
        { value: "Hybrid", label: "гибрид" },
      ],
      powerUnits: [
        { value: "ph", label: "лошадиные силы" },
        { value: "kw", label: "килоВаты" },
      ],
    },
  },
    steps: {
    step1: "Шаг 1",
    step2: "Шаг 2",
    contacts: "Контакты",
    vehicleData: "Данные авто",
    next: "Далее",
    back: "Назад",
  },
  terms: {
    textBefore: "Я принимаю",
    linkText: "условия оформления и правила страхования",
    textAfter: ".",
  },
  estimate: {
    title: "Ориентировочная стоимость по заявке:",
    hint: "Окончательная стоимость будет предоставлена в письме с данными на оплату (в инвойсе) после проверки всех данных и согласования со страховой.",
  },
};

const pl: LeadFormDictionary = {
  title: "Wniosek o zawarcie polisy",
  intro:
    "Wypełnij dane. Przygotujemy polisę i prześlemy dane do płatności.",

  notSelected: "Nie wybrano",
  submit: "Wyślij wniosek",

  fileForbidden:
    "niedozwolony format pliku (archiwum, audio lub wideo).",

  statusSending: "Wysyłanie…",
  statusError:
    "Błąd podczas wysyłania wniosku. Spróbuj ponownie później. (Lub spróbuj załączyć inny plik dowodu rejestracyjnego pojazdu)",
  statusSuccess:
    "Wniosek został wysłany. Skontaktujemy się z Państwem.",

  contact: {
    legend: "Dane kontaktowe",
    firstName: "Imię",
    lastName: "Nazwisko",
    phone: "Telefon (z numerem kierunkowym kraju)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle:
      "Dane ubezpieczającego (osoba fizyczna)",
    birthDate: "Data urodzenia",
    addressTitle: "Adres rejestracji",
    addressPlaceholder:
      "KOD POCZTOWY, kraj, miasto, ulica, numer domu, numer mieszkania (jeśli dotyczy)",
    addressHelp: "Proszę podać adres w jednym wierszu.",
    persPass: "Seria i numer paszportu bez spacji",
  },

  policy: {
    legend: "Dane do kalkulacji i zawarcia polisy",
    countryFrom: "Kraj rejestracji pojazdu",
    vehicleType: "Typ pojazdu",
    startDate: "Data rozpoczęcia ochrony ubezpieczeniowej",
    period: "Okres ubezpieczenia",

    vehiclePlate: "Numer rejestracyjny",
    vehicleBrend: "Marka i model pojazdu",
    vehicleYear: "Rok produkcji pojazdu",
    engineType: "Rodzaj paliwa",
    vehicleEngineCapacity: "Pojemność silnika, cm³",
    vehicleVin: "Numer VIN",
    vehiclePower: "Moc silnika",
    powerUnit: "Jednostka mocy",
    docsLabel: "Dowód rejestracyjny (zdjęcie lub PDF)",
    docsHint: "Można załączyć kilka plików.",

    addVehicle: "Dodaj pojazd",
    removeVehicle: "Usuń",
    vehicleBlockTitle: "Pojazd",
    comment: "Komentarz (opcjonalnie)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "Samochód osobowy" },
        { value: "truck", label: "Samochód ciężarowy" },
        { value: "bus", label: "Autobus" },
        { value: "moto", label: "Motocykl" },
        { value: "trailer", label: "Przyczepa" },
        { value: "special", label: "Pojazd specjalny" },
      ],

      periods: [
        { value: "30", label: "30 dni" },
        { value: "60", label: "60 dni" },
        { value: "90", label: "90 dni" },
        { value: "180", label: "6 miesięcy" },
        { value: "365", label: "12 miesięcy" },
      ],

      engineTypes: [
        { value: "petrol", label: "benzyna" },
        { value: "diesel", label: "diesel" },
        { value: "Gas", label: "gaz" },
        { value: "Gasoline", label: "gaz / benzyna" },
        { value: "electric", label: "elektryczny" },
        { value: "Hybrid", label: "hybrydowy" },
      ],

      powerUnits: [
        { value: "ph", label: "konie mechaniczne" },
        { value: "kw", label: "kilowaty" },
      ],
    },
  },

  steps: {
    step1: "Krok 1",
    step2: "Krok 2",
    contacts: "Dane kontaktowe",
    vehicleData: "Dane pojazdu",
    next: "Dalej",
    back: "Wstecz",
  },

  terms: {
    textBefore: "Akceptuję",
    linkText:
      "warunki zawarcia umowy oraz zasady ubezpieczenia",
    textAfter: ".",
  },

  estimate: {
    title: "Orientacyjna składka dla wniosku:",
    hint:
      "Ostateczna składka zostanie podana w wiadomości zawierającej dane do płatności (fakturze/proformie) po weryfikacji wszystkich danych oraz uzgodnieniu warunków z zakładem ubezpieczeń.",
  },
};

const en: LeadFormDictionary = {
  title: "Policy Purchase Application",
  intro:
    "Provide the required information. We will prepare the policy and send payment instructions.",

  notSelected: "Not selected",
  submit: "Submit Application",

  fileForbidden: "is not allowed (archive, audio, or video files).",

  statusSending: "Sending…",
  statusError:
    "Error submitting the application. Please try again later. (Or try attaching a different vehicle registration document file)",
  statusSuccess:
    "Your application has been submitted. We will contact you shortly.",

  contact: {
    legend: "Contact Details",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone Number (including country code)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Policyholder Information (Individual)",
    birthDate: "Date of Birth",
    addressTitle: "Registered Address",
    addressPlaceholder:
      "POSTAL CODE, Country, city, street, building, apartment (if applicable)",
    addressHelp: "Please enter the address in a single line.",
    persPass: "Passport series and number without spaces",
  },

  policy: {
    legend: "Information for Quotation and Policy Issuance",
    countryFrom: "Vehicle Registration Country",
    vehicleType: "Vehicle Type",
    startDate: "Insurance Start Date",
    period: "Insurance Period", 

    vehiclePlate: "Registration Number",
    vehicleBrend: "Vehicle Make and Model",
    vehicleYear: "Vehicle Year of Manufacture",
    engineType: "Fuel Type",
    vehicleEngineCapacity: "Engine Capacity, cc",
    vehicleVin: "VIN Number",
    vehiclePower: "Engine Power",
    powerUnit: "Power Unit",
    docsLabel: "Vehicle Registration Certificate (photo or PDF)",
    docsHint: "You may attach multiple files.",

    addVehicle: "Add Vehicle",
    removeVehicle: "Remove",
    vehicleBlockTitle: "Vehicle",
    comment: "Comment (optional)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "Passenger Car" },
        { value: "truck", label: "Truck" },
        { value: "bus", label: "Bus" },
        { value: "moto", label: "Motorcycle" },
        { value: "trailer", label: "Trailer" },
        { value: "special", label: "Special Equipment" },
      ],

      periods: [
        { value: "30", label: "30 days" },
        { value: "60", label: "60 days" },
        { value: "90", label: "90 days" },
        { value: "180", label: "6 months" },
        { value: "365", label: "12 months" },
      ],

      engineTypes: [
        { value: "petrol", label: "Petrol" },
        { value: "diesel", label: "Diesel" },
        { value: "Gas", label: "Gas" },
        { value: "Gasoline", label: "Gas / Petrol" },
        { value: "electric", label: "Electric" },
        { value: "Hybrid", label: "Hybrid" },
      ],

      powerUnits: [
        { value: "ph", label: "Horsepower" },
        { value: "kw", label: "Kilowatts" },
      ],
    },
  },

  steps: {
    step1: "Step 1",
    step2: "Step 2",
    contacts: "Contact Details",
    vehicleData: "Vehicle Information",
    next: "Next",
    back: "Back",
  },

  terms: {
    textBefore: "I accept the",
    linkText: "terms of issuance and insurance conditions",
    textAfter: ".",
  },

  estimate: {
    title: "Estimated Premium for the Application:",
    hint:
      "The final premium will be provided in the payment notice (invoice) after verification of all information and confirmation by the insurer.",
  },
};

const be: LeadFormDictionary = {
  title: "Заяўка на набыццё поліса",
  intro:
    "Запоўніце даныя. Мы падрыхтуем поліс і накіруем рэквізіты для аплаты.",

  notSelected: "Не выбрана",
  submit: "Адправіць заяўку",

  fileForbidden: "недапушчальны (архіў, аўдыя або відэа).",

  statusSending: "Адпраўка…",
  statusError:
    "Памылка пры адпраўцы заяўкі. Паспрабуйце пазней. (Або паспрабуйце далучыць іншы файл тэхпашпарта)",
  statusSuccess:
    "Заяўка адпраўлена. Мы звяжамся з вамі.",

  contact: {
    legend: "Кантактныя даныя",
    firstName: "Імя",
    lastName: "Прозвішча",
    phone: "Тэлефон (з кодам краіны)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle:
      "Даныя страхавальніка (фізічная асоба)",
    birthDate: "Дата нараджэння",
    addressTitle: "Адрас рэгістрацыі",
    addressPlaceholder:
      "ІНДЭКС, Краіна, горад, вуліца, дом, кватэра (калі ёсць)",
    addressHelp:
      "Укажыце адрас адным радком.",
    persPass:
      "Серыя і нумар пашпарта без прабелаў",
  },

  policy: {
    legend:
      "Даныя для разліку і афармлення",
    countryFrom:
      "Краіна рэгістрацыі аўтамабіля",
    vehicleType: "Тып ТС",
    startDate: "Дата пачатку дзеяння страхавання",
    period: "Тэрмін страхавання",

    vehiclePlate: "Дзяржаўны нумар",
    vehicleBrend: "Марка і мадэль ТС",
    vehicleYear: "Год выпуску ТС",
    engineType: "Тып паліва",
    vehicleEngineCapacity:
      "Аб’ём рухавіка, куб. см",
    vehicleVin: "VIN-нумар",
    vehiclePower:
      "Магутнасць рухавіка",
    powerUnit:
      "Адзінка вымярэння магутнасці",
    docsLabel:
      "Тэхпашпарт (фота або PDF)",
    docsHint:
      "Можна далучыць некалькі файлаў.",

    addVehicle: "Дадаць ТС",
    removeVehicle: "Выдаліць",
    vehicleBlockTitle:
      "Транспартны сродак",
    comment:
      "Каментарый (неабавязкова)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        {
          value: "car",
          label: "Легкавы аўтамабіль",
        },
        {
          value: "truck",
          label: "Грузавы аўтамабіль",
        },
        {
          value: "bus",
          label: "Аўтобус",
        },
        {
          value: "moto",
          label: "Матацыкл",
        },
        {
          value: "trailer",
          label: "Прычэп",
        },
        {
          value: "special",
          label: "Спецтэхніка",
        },
      ],

      periods: [
        { value: "30", label: "30 дзён" },
        { value: "60", label: "60 дзён" },
        { value: "90", label: "90 дзён" },
        { value: "180", label: "6 месяцаў" },
        { value: "365", label: "12 месяцаў" },
      ],

      engineTypes: [
        { value: "petrol", label: "бензін" },
        { value: "diesel", label: "дызель" },
        { value: "Gas", label: "газ" },
        {
          value: "Gasoline",
          label: "газ / бензін",
        },
        {
          value: "electric",
          label: "электра",
        },
        { value: "Hybrid", label: "гібрыд" },
      ],

      powerUnits: [
        {
          value: "ph",
          label: "конскія сілы",
        },
        {
          value: "kw",
          label: "кілаваты",
        },
      ],
    },
  },

  steps: {
    step1: "Крок 1",
    step2: "Крок 2",
    contacts: "Кантакты",
    vehicleData:
      "Даныя аўтамабіля",
    next: "Далей",
    back: "Назад",
  },

  terms: {
    textBefore: "Я прымаю",
    linkText:
      "ўмовы афармлення і правілы страхавання",
    textAfter: ".",
  },

  estimate: {
    title:
      "Арыенціровачны кошт па заяўцы:",
    hint:
      "Канчатковы кошт будзе пазначаны ў лісце з данымі для аплаты (інвойсе) пасля праверкі ўсіх даных і ўзгаднення са страхавой кампаніяй.",
  },
};

const uz: LeadFormDictionary = {
  title: "Polis sotib olish uchun ariza",
  intro:
    "Ma’lumotlarni to‘ldiring. Biz polisni tayyorlaymiz va to‘lov rekvizitlarini yuboramiz.",

  notSelected: "Tanlanmagan",
  submit: "Arizani yuborish",

  fileForbidden:
    "ruxsat etilmaydi (arxiv, audio yoki video fayl).",

  statusSending: "Yuborilmoqda…",

  statusError:
    "Arizani yuborishda xatolik yuz berdi. Keyinroq qayta urinib ko‘ring. (Yoki texpasportning boshqa faylini biriktirib ko‘ring)",

  statusSuccess:
    "Ariza yuborildi. Tez orada siz bilan bog‘lanamiz.",

  contact: {
    legend: "Kontakt ma’lumotlari",
    firstName: "Ism",
    lastName: "Familiya",
    phone: "Telefon (mamlakat kodi bilan)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle:
      "Sug‘urta qildiruvchi ma’lumotlari (jismoniy shaxs)",

    birthDate: "Tug‘ilgan sana",

    addressTitle: "Ro‘yxatdan o‘tgan manzil",

    addressPlaceholder:
      "POCHTA INDEKSI, mamlakat, shahar, ko‘cha, uy, kvartira (agar mavjud bo‘lsa)",

    addressHelp:
      "Manzilni bitta qatorda kiriting.",

    persPass:
      "Pasport seriyasi va raqami bo‘sh joysiz",
  },

  policy: {
    legend:
      "Hisoblash va rasmiylashtirish uchun ma’lumotlar",

    countryFrom:
      "Avtomobil ro‘yxatdan o‘tgan mamlakat",

    vehicleType:
      "Transport vositasi turi",

    startDate: "Sug‘urta amal qilishining boshlanish sanasi",
    period: "Sug‘urta muddati",

    vehiclePlate:
      "Davlat raqami",

    engineType:
      "Yoqilg‘i turi",
    
    vehicleBrend: "Transport vositasining markasi va modeli",
    vehicleYear: "Transport vositasi ishlab chiqarilgan yil",

    vehicleEngineCapacity:
      "Dvigatel hajmi, kub sm",

    vehicleVin:
      "VIN raqami",

    vehiclePower:
      "Dvigatel quvvati",

    powerUnit:
      "Quvvat o‘lchov birligi",

    docsLabel:
      "Texnik pasport (foto yoki PDF)",

    docsHint:
      "Bir nechta faylni biriktirish mumkin.",

    addVehicle:
      "Transport vositasini qo‘shish",

    removeVehicle:
      "O‘chirish",

    vehicleBlockTitle:
      "Transport vositasi",

    comment:
      "Izoh (ixtiyoriy)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "Yengil avtomobil" },
        { value: "truck", label: "Yuk avtomobili" },
        { value: "bus", label: "Avtobus" },
        { value: "moto", label: "Mototsikl" },
        { value: "trailer", label: "Tirkama" },
        { value: "special", label: "Maxsus texnika" },
      ],

      periods: [
        { value: "30", label: "30 kun" },
        { value: "60", label: "60 kun" },
        { value: "90", label: "90 kun" },
        { value: "180", label: "6 oy" },
        { value: "365", label: "12 oy" },
      ],

      engineTypes: [
        { value: "petrol", label: "benzin" },
        { value: "diesel", label: "dizel" },
        { value: "Gas", label: "gaz" },
        { value: "Gasoline", label: "gaz / benzin" },
        { value: "electric", label: "elektr" },
        { value: "Hybrid", label: "gibrid" },
      ],

      powerUnits: [
        { value: "ph", label: "ot kuchi" },
        { value: "kw", label: "kilovatt" },
      ],
    },
  },

  steps: {
    step1: "1-bosqich",
    step2: "2-bosqich",
    contacts: "Kontaktlar",
    vehicleData: "Avtomobil ma’lumotlari",
    next: "Keyingi",
    back: "Orqaga",
  },

  terms: {
    textBefore: "Men",

    linkText:
      "rasmiylashtirish shartlari va sug‘urta qoidalarini",

    textAfter:
      "qabul qilaman.",
  },

  estimate: {
    title:
      "Ariza bo‘yicha taxminiy narx:",

    hint:
      "Yakuniy narx barcha ma’lumotlar tekshirilgandan va sug‘urta kompaniyasi bilan kelishilgandan so‘ng to‘lov ma’lumotlari ko‘rsatilgan xatda (invoice) taqdim etiladi.",
  },
};

const ka: LeadFormDictionary = {
  title: "პოლისის შეძენის განაცხადი",
  intro:
    "შეავსეთ მონაცემები. ჩვენ მოვამზადებთ პოლისს და გამოგიგზავნით გადახდის რეკვიზიტებს.",

  notSelected: "არ არის არჩეული",
  submit: "განაცხადის გაგზავნა",

  fileForbidden: "დაუშვებელია (არქივი, აუდიო ან ვიდეო ფაილი).",

  statusSending: "იგზავნება…",
  statusError:
    "განაცხადის გაგზავნისას მოხდა შეცდომა. გთხოვთ, სცადოთ მოგვიანებით. (ან სცადეთ ტექნიკური პასპორტის სხვა ფაილის ატვირთვა)",
  statusSuccess:
    "განაცხადი წარმატებით გაიგზავნა. მალე დაგიკავშირდებით.",

  contact: {
    legend: "საკონტაქტო ინფორმაცია",
    firstName: "სახელი",
    lastName: "გვარი",
    phone: "ტელეფონი (ქვეყნის კოდით)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "დამზღვევის მონაცემები (ფიზიკური პირი)",
    birthDate: "დაბადების თარიღი",
    addressTitle: "რეგისტრაციის მისამართი",
    addressPlaceholder:
      "საფოსტო ინდექსი, ქვეყანა, ქალაქი, ქუჩა, სახლი, ბინა (არსებობის შემთხვევაში)",
    addressHelp: "მიუთითეთ მისამართი ერთ სტრიქონში.",
    persPass: "პასპორტის სერია და ნომერი გამოტოვებების გარეშე",
  },

  policy: {
    legend: "მონაცემები გაანგარიშებისა და გაფორმებისთვის",
    countryFrom: "ავტომობილის რეგისტრაციის ქვეყანა",
    vehicleType: "სატრანსპორტო საშუალების ტიპი",
    startDate: "დაზღვევის მოქმედების დაწყების თარიღი",
    period: "დაზღვევის ვადა",

    vehiclePlate: "სახელმწიფო ნომერი",
    vehicleBrend: "სატრანსპორტო საშუალების მარკა და მოდელი",
    vehicleYear: "სატრანსპორტო საშუალების გამოშვების წელი",
    engineType: "საწვავის ტიპი",
    vehicleEngineCapacity: "ძრავის მოცულობა, კუბ. სმ",
    vehicleVin: "VIN ნომერი",
    vehiclePower: "ძრავის სიმძლავრე",
    powerUnit: "სიმძლავრის საზომი ერთეული",
    docsLabel: "ტექპასპორტი (ფოტო ან PDF)",
    docsHint: "შესაძლებელია რამდენიმე ფაილის ატვირთვა.",

    addVehicle: "სატრანსპორტო საშუალების დამატება",
    removeVehicle: "წაშლა",
    vehicleBlockTitle: "სატრანსპორტო საშუალება",
    comment: "კომენტარი (არასავალდებულო)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "მსუბუქი ავტომობილი" },
        { value: "truck", label: "სატვირთო ავტომობილი" },
        { value: "bus", label: "ავტობუსი" },
        { value: "moto", label: "მოტოციკლი" },
        { value: "trailer", label: "მისაბმელი" },
        { value: "special", label: "სპეცტექნიკა" },
      ],

      periods: [
        { value: "30", label: "30 დღე" },
        { value: "60", label: "60 დღე" },
        { value: "90", label: "90 დღე" },
        { value: "180", label: "6 თვე" },
        { value: "365", label: "12 თვე" },
      ],

      engineTypes: [
        { value: "petrol", label: "ბენზინი" },
        { value: "diesel", label: "დიზელი" },
        { value: "Gas", label: "გაზი" },
        { value: "Gasoline", label: "გაზი / ბენზინი" },
        { value: "electric", label: "ელექტრო" },
        { value: "Hybrid", label: "ჰიბრიდი" },
      ],

      powerUnits: [
        { value: "ph", label: "ცხენის ძალა" },
        { value: "kw", label: "კილოვატი" },
      ],
    },
  },

  steps: {
    step1: "ნაბიჯი 1",
    step2: "ნაბიჯი 2",
    contacts: "კონტაქტები",
    vehicleData: "ავტომობილის მონაცემები",
    next: "შემდეგ",
    back: "უკან",
  },

  terms: {
    textBefore: "ვეთანხმები",
    linkText: "გაფორმების პირობებსა და დაზღვევის წესებს",
    textAfter: ".",
  },

  estimate: {
    title: "განაცხადის სავარაუდო ღირებულება:",
    hint:
      "საბოლოო ღირებულება მითითებული იქნება გადახდის მონაცემებთან ერთად გამოგზავნილ წერილში (ინვოისში), ყველა მონაცემის გადამოწმებისა და სადაზღვევო კომპანიასთან შეთანხმების შემდეგ.",
  },
};

const kk: LeadFormDictionary = {
  title: "Полисті сатып алуға өтінім",
  intro:
    "Деректерді толтырыңыз. Біз полисті дайындап, төлем деректемелерін жібереміз.",

  notSelected: "Таңдалмаған",
  submit: "Өтінімді жіберу",

  fileForbidden: "рұқсат етілмейді (архив, аудио немесе бейне файл).",

  statusSending: "Жіберілуде…",
  statusError:
    "Өтінімді жіберу кезінде қате орын алды. Кейінірек қайтадан көріңіз. (Немесе техпаспорттың басқа файлын тіркеп көріңіз)",
  statusSuccess:
    "Өтінім жіберілді. Жақын арада сізбен хабарласамыз.",

  contact: {
    legend: "Байланыс деректері",
    firstName: "Аты",
    lastName: "Тегі",
    phone: "Телефон (ел коды көрсетілген)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Сақтанушы туралы деректер (жеке тұлға)",
    birthDate: "Туған күні",
    addressTitle: "Тіркеу мекенжайы",
    addressPlaceholder:
      "ПОШТА ИНДЕКСІ, Ел, қала, көше, үй, пәтер (бар болса)",
    addressHelp: "Мекенжайды бір жолмен көрсетіңіз.",
    persPass: "Паспорттың сериясы мен нөмірі бос орынсыз",
  },

  policy: {
    legend: "Есептеу және рәсімдеу үшін деректер",
    countryFrom: "Көліктің тіркелген елі",
    vehicleType: "Көлік құралының түрі",
    startDate: "Сақтандырудың басталу күні",
    period: "Сақтандыру мерзімі",

    vehiclePlate: "Мемлекеттік нөмір",
    vehicleBrend: "Көлік құралының маркасы мен моделі",
    vehicleYear: "Көлік құралының шығарылған жылы",
    engineType: "Отын түрі",
    vehicleEngineCapacity: "Қозғалтқыш көлемі, см³",
    vehicleVin: "VIN нөмірі",
    vehiclePower: "Қозғалтқыш қуаты",
    powerUnit: "Қуат өлшем бірлігі",
    docsLabel: "Техпаспорт (фото немесе PDF)",
    docsHint: "Бірнеше файл тіркеуге болады.",

    addVehicle: "Көлік құралын қосу",
    removeVehicle: "Жою",
    vehicleBlockTitle: "Көлік құралы",
    comment: "Түсініктеме (міндетті емес)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "Жеңіл автомобиль" },
        { value: "truck", label: "Жүк көлігі" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Тіркеме" },
        { value: "special", label: "Арнайы техника" },
      ],

      periods: [
        { value: "30", label: "30 күн" },
        { value: "60", label: "60 күн" },
        { value: "90", label: "90 күн" },
        { value: "180", label: "6 ай" },
        { value: "365", label: "12 ай" },
      ],

      engineTypes: [
        { value: "petrol", label: "бензин" },
        { value: "diesel", label: "дизель" },
        { value: "Gas", label: "газ" },
        { value: "Gasoline", label: "газ / бензин" },
        { value: "electric", label: "электр" },
        { value: "Hybrid", label: "гибрид" },
      ],

      powerUnits: [
        { value: "ph", label: "ат күші" },
        { value: "kw", label: "киловатт" },
      ],
    },
  },

  steps: {
    step1: "1-қадам",
    step2: "2-қадам",
    contacts: "Байланыс деректері",
    vehicleData: "Көлік деректері",
    next: "Келесі",
    back: "Артқа",
  },

  terms: {
    textBefore: "Мен",
    linkText: "рәсімдеу шарттары мен сақтандыру ережелерін",
    textAfter: "қабылдаймын.",
  },

  estimate: {
    title: "Өтінім бойынша болжамды құны:",
    hint:
      "Қорытынды құн барлық деректер тексеріліп, сақтандыру компаниясымен келісілгеннен кейін төлем деректері көрсетілген хатта (инвойста) ұсынылады.",
  },
};

const tr: LeadFormDictionary = {
  title: "Poliçe Satın Alma Başvurusu",
  intro:
    "Bilgilerinizi doldurun. Poliçeyi hazırlayıp ödeme bilgilerini size göndereceğiz.",

  notSelected: "Seçilmedi",
  submit: "Başvuruyu Gönder",

  fileForbidden: "geçersizdir (arşiv, ses veya video dosyası).",

  statusSending: "Gönderiliyor…",
  statusError:
    "Başvuru gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin. (Veya ruhsatın farklı bir dosyasını eklemeyi deneyin)",
  statusSuccess:
    "Başvurunuz gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",

  contact: {
    legend: "İletişim Bilgileri",
    firstName: "Ad",
    lastName: "Soyad",
    phone: "Telefon (ülke kodu ile birlikte)",
    email: "E-posta",
  },

  policyholder: {
    individualTitle: "Sigorta Ettiren Bilgileri (Gerçek Kişi)",
    birthDate: "Doğum Tarihi",
    addressTitle: "Kayıtlı Adres",
    addressPlaceholder:
      "Posta Kodu, Ülke, Şehir, Sokak, Bina No, Daire (varsa)",
    addressHelp: "Adresi tek satır halinde girin.",
    persPass: "Pasaport seri ve numarası (boşluksuz)",
  },

  policy: {
    legend: "Hesaplama ve Düzenleme Bilgileri",
    countryFrom: "Aracın Kayıtlı Olduğu Ülke",
    vehicleType: "Araç Türü",
    startDate: "Sigorta Başlangıç Tarihi",
    period: "Sigorta Süresi",

    vehiclePlate: "Plaka Numarası",
    vehicleBrend: "Araç Markası ve Modeli",
    vehicleYear: "Araç Üretim Yılı",
    engineType: "Yakıt Türü",
    vehicleEngineCapacity: "Motor Hacmi (cm³)",
    vehicleVin: "VIN Numarası",
    vehiclePower: "Motor Gücü",
    powerUnit: "Güç Birimi",
    docsLabel: "Araç Ruhsatı (fotoğraf veya PDF)",
    docsHint: "Birden fazla dosya ekleyebilirsiniz.",

    addVehicle: "Araç Ekle",
    removeVehicle: "Sil",
    vehicleBlockTitle: "Araç",
    comment: "Yorum (isteğe bağlı)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],
      vehicleTypes: [
        { value: "car", label: "Binek Araç" },
        { value: "truck", label: "Kamyon" },
        { value: "bus", label: "Otobüs" },
        { value: "moto", label: "Motosiklet" },
        { value: "trailer", label: "Römork" },
        { value: "special", label: "Özel Amaçlı Araç" },
      ],
      periods: [
        { value: "30", label: "30 gün" },
        { value: "60", label: "60 gün" },
        { value: "90", label: "90 gün" },
        { value: "180", label: "6 ay" },
        { value: "365", label: "12 ay" },
      ],
      engineTypes: [
        { value: "petrol", label: "benzin" },
        { value: "diesel", label: "dizel" },
        { value: "Gas", label: "gaz" },
        { value: "Gasoline", label: "gaz / benzin" },
        { value: "electric", label: "elektrikli" },
        { value: "Hybrid", label: "hibrit" },
      ],
      powerUnits: [
        { value: "ph", label: "beygir gücü" },
        { value: "kw", label: "kilovat" },
      ],
    },
  },

  steps: {
    step1: "Adım 1",
    step2: "Adım 2",
    contacts: "İletişim",
    vehicleData: "Araç Bilgileri",
    next: "Devam",
    back: "Geri",
  },

  terms: {
    textBefore: "Kabul ediyorum:",
    linkText: "düzenleme şartları ve sigorta kuralları",
    textAfter: ".",
  },

  estimate: {
    title: "Başvuru İçin Tahmini Tutar:",
    hint:
      "Nihai tutar, tüm bilgiler kontrol edilip sigorta şirketi ile onaylandıktan sonra ödeme bilgilerini içeren e-postada (fatura/invoice) belirtilecektir.",
  },
};

const fa: LeadFormDictionary = {
  title: "درخواست خرید بیمه‌نامه",
  intro:
    "اطلاعات را تکمیل کنید. ما بیمه‌نامه را آماده کرده و اطلاعات پرداخت را برای شما ارسال خواهیم کرد.",

  notSelected: "انتخاب نشده",
  submit: "ارسال درخواست",

  fileForbidden: "مجاز نیست (فایل فشرده، صوتی یا ویدئویی).",

  statusSending: "در حال ارسال…",
  statusError: "خطا در ارسال درخواست. لطفاً بعداً دوباره تلاش کنید. (یا سعی کنید فایل دیگری از کارت خودرو را بارگذاری کنید)",
  statusSuccess: "درخواست ارسال شد. با شما تماس خواهیم گرفت.",

  contact: {
    legend: "اطلاعات تماس",
    firstName: "نام",
    lastName: "نام خانوادگی",
    phone: "شماره تلفن (همراه با کد کشور)",
    email: "ایمیل",
  },

  policyholder: {
    individualTitle: "اطلاعات بیمه‌گذار (شخص حقیقی)",
    birthDate: "تاریخ تولد",
    addressTitle: "نشانی ثبت",
    addressPlaceholder:
      "کد پستی، کشور، شهر، خیابان، پلاک، واحد (در صورت وجود)",
    addressHelp: "نشانی را در یک خط وارد کنید.",
    persPass: "سری و شماره گذرنامه بدون فاصله",
  },

  policy: {
    legend: "اطلاعات لازم برای محاسبه و صدور",
    countryFrom: "کشور ثبت وسیله نقلیه",
    vehicleType: "نوع وسیله نقلیه",
    startDate: "تاریخ شروع پوشش بیمه",
    period: "مدت اعتبار بیمه",

    vehiclePlate: "شماره پلاک",
    vehicleBrend: "برند و مدل وسیله نقلیه",
    vehicleYear: "سال ساخت وسیله نقلیه",
    engineType: "نوع سوخت",
    vehicleEngineCapacity: "حجم موتور (سانتی‌متر مکعب)",
    vehicleVin: "شماره VIN",
    vehiclePower: "قدرت موتور",
    powerUnit: "واحد اندازه‌گیری قدرت",
    docsLabel: "کارت خودرو / سند وسیله نقلیه (عکس یا PDF)",
    docsHint: "امکان بارگذاری چند فایل وجود دارد.",

    addVehicle: "افزودن وسیله نقلیه",
    removeVehicle: "حذف",
    vehicleBlockTitle: "وسیله نقلیه",
    comment: "توضیحات (اختیاری)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "خودروی سواری" },
        { value: "truck", label: "وسیله نقلیه باری" },
        { value: "bus", label: "اتوبوس" },
        { value: "moto", label: "موتورسیکلت" },
        { value: "trailer", label: "تریلر" },
        { value: "special", label: "ماشین‌آلات ویژه" },
      ],

      periods: [
        { value: "30", label: "۳۰ روز" },
        { value: "60", label: "۶۰ روز" },
        { value: "90", label: "۹۰ روز" },
        { value: "180", label: "۶ ماه" },
        { value: "365", label: "۱۲ ماه" },
      ],

      engineTypes: [
        { value: "petrol", label: "بنزین" },
        { value: "diesel", label: "دیزل" },
        { value: "Gas", label: "گاز" },
        { value: "Gasoline", label: "گاز / بنزین" },
        { value: "electric", label: "برقی" },
        { value: "Hybrid", label: "هیبریدی" },
      ],

      powerUnits: [
        { value: "ph", label: "اسب بخار" },
        { value: "kw", label: "کیلووات" },
      ],
    },
  },

  steps: {
    step1: "مرحله ۱",
    step2: "مرحله ۲",
    contacts: "اطلاعات تماس",
    vehicleData: "اطلاعات وسیله نقلیه",
    next: "ادامه",
    back: "بازگشت",
  },

  terms: {
    textBefore: "من",
    linkText: "شرایط صدور و مقررات بیمه",
    textAfter: "را می‌پذیرم.",
  },

  estimate: {
    title: "هزینه تقریبی درخواست:",
    hint:
      "هزینه نهایی پس از بررسی اطلاعات و تأیید شرکت بیمه، در نامه حاوی اطلاعات پرداخت (فاکتور) اعلام خواهد شد.",
  },
};

const hy: LeadFormDictionary = {
  title: "Պոլիսի գնման հայտ",
  intro:
    "Լրացրեք տվյալները։ Մենք կպատրաստենք պոլիսը և կուղարկենք վճարման տվյալները։",

  notSelected: "Ընտրված չէ",
  submit: "Ուղարկել հայտը",

  fileForbidden: "անթույլատրելի է (արխիվ, աուդիո կամ վիդեո ֆայլ):",

  statusSending: "Ուղարկվում է…",
  statusError:
    "Հայտի ուղարկման ընթացքում սխալ է տեղի ունեցել։ Խնդրում ենք փորձել ավելի ուշ։ (Կամ փորձեք կցել տեխնիկական անձնագրի այլ ֆայլ)",
  statusSuccess:
    "Հայտն ուղարկվել է։ Մենք կկապվենք ձեզ հետ։",

  contact: {
    legend: "Կոնտակտային տվյալներ",
    firstName: "Անուն",
    lastName: "Ազգանուն",
    phone: "Հեռախոս (երկրի կոդով)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle:
      "Ապահովադրի տվյալներ (ֆիզիկական անձ)",
    birthDate: "Ծննդյան ամսաթիվ",
    addressTitle: "Գրանցման հասցե",
    addressPlaceholder:
      "ԻՆԴԵՔՍ, երկիր, քաղաք, փողոց, տուն, բնակարան (եթե կա)",
    addressHelp:
      "Նշեք հասցեն մեկ տողով։",
    persPass:
      "Անձնագրի սերիան և համարը՝ առանց բացատների",
  },

  policy: {
    legend:
      "Հաշվարկի և ձևակերպման համար տվյալներ",
    countryFrom:
      "Ավտոմեքենայի գրանցման երկիր",
    vehicleType:
      "Տրանսպորտային միջոցի տեսակ",
    startDate: "Ապահովագրության գործողության մեկնարկի ամսաթիվ",
    period: "Ապահովագրության ժամկետ",

    vehiclePlate:
      "Պետհամարանիշ",
    vehicleBrend: "Տրանսպորտային միջոցի մակնիշ և մոդել",
    vehicleYear: "Տրանսպորտային միջոցի արտադրության տարեթիվ",
    engineType:
      "Վառելիքի տեսակ",
    vehicleEngineCapacity:
      "Շարժիչի ծավալը, խ. սմ",
    vehicleVin: "VIN համար",
    vehiclePower:
      "Շարժիչի հզորություն",
    powerUnit:
      "Հզորության չափման միավոր",
    docsLabel:
      "Տեխնիկական անձնագիր (լուսանկար կամ PDF)",
    docsHint:
      "Կարելի է կցել մի քանի ֆայլ։",

    addVehicle:
      "Ավելացնել տրանսպորտային միջոց",
    removeVehicle: "Հեռացնել",
    vehicleBlockTitle:
      "Տրանսպորտային միջոց",
    comment:
      "Մեկնաբանություն (ըստ ցանկության)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        {
          value: "car",
          label: "Թեթև մարդատար ավտոմեքենա",
        },
        {
          value: "truck",
          label: "Բեռնատար ավտոմեքենա",
        },
        {
          value: "bus",
          label: "Ավտոբուս",
        },
        {
          value: "moto",
          label: "Մոտոցիկլետ",
        },
        {
          value: "trailer",
          label: "Կցորդ",
        },
        {
          value: "special",
          label: "Հատուկ տեխնիկա",
        },
      ],

      periods: [
        { value: "30", label: "30 օր" },
        { value: "60", label: "60 օր" },
        { value: "90", label: "90 օր" },
        { value: "180", label: "6 ամիս" },
        { value: "365", label: "12 ամիս" },
      ],

      engineTypes: [
        { value: "petrol", label: "բենզին" },
        { value: "diesel", label: "դիզել" },
        { value: "Gas", label: "գազ" },
        { value: "Gasoline", label: "գազ / բենզին" },
        { value: "electric", label: "էլեկտրական" },
        { value: "Hybrid", label: "հիբրիդ" },
      ],

      powerUnits: [
        {
          value: "ph",
          label: "ձիաուժ",
        },
        {
          value: "kw",
          label: "կիլովատ",
        },
      ],
    },
  },

  steps: {
    step1: "Քայլ 1",
    step2: "Քայլ 2",
    contacts: "Կոնտակտներ",
    vehicleData:
      "Ավտոմեքենայի տվյալներ",
    next: "Հաջորդը",
    back: "Հետ",
  },

  terms: {
    textBefore: "Ես ընդունում եմ",
    linkText:
      "ձևակերպման պայմանները և ապահովագրության կանոնները",
    textAfter: "։",
  },

  estimate: {
    title:
      "Հայտի մոտավոր արժեքը՝",
    hint:
      "Վերջնական արժեքը կներկայացվի վճարման տվյալներով նամակում (invoice)՝ բոլոր տվյալների ստուգումից և ապահովագրական ընկերության հետ համաձայնեցումից հետո։",
  },
};

const ckb: LeadFormDictionary = {
  title: "داواکاری کڕینی بیمەنامە",
  intro:
    "زانیارییەکان پڕبکەرەوە. بیمەنامەکەت ئامادە دەکەین و زانیارییەکانی پارەدان بۆت دەنێرین.",

  notSelected: "هەڵنەبژێردراوە",
  submit: "ناردنی داواکاری",

  fileForbidden: "ڕێگەپێنەدراوە (ئەرشیف، فایلێکی دەنگی یان ڤیدیۆیی).",

  statusSending: "لە ناردندایە…",
  statusError:
    "هەڵەیەک لە ناردنی داواکارییەکە ڕوویدا. تکایە دواتر هەوڵ بدەرەوە. (یان فایلێکی تری تێکنیکی ئۆتۆمبێل باربکە).",
  statusSuccess:
    "داواکارییەکە نێردرا. بە زوویی پەیوەندیت پێوە دەکەین.",

  contact: {
    legend: "زانیارییەکانی پەیوەندی",
    firstName: "ناو",
    lastName: "ناوی خێزان",
    phone: "ژمارەی تەلەفۆن (لەگەڵ کۆدی وڵات)",
    email: "ئیمەیڵ",
  },

  policyholder: {
    individualTitle: "زانیارییەکانی بیمەگرتوو (کەسی ئاسایی)",
    birthDate: "بەرواری لەدایکبوون",
    addressTitle: "ناونیشانی تۆمارکراو",
    addressPlaceholder:
      "کۆدی پۆست، وڵات، شار، شەقام، ژمارەی خانوو، ژمارەی شوقە (ئەگەر هەبێت)",
    addressHelp: "ناونیشانەکە لە یەک ڕیزدا بنووسە.",
    persPass: "سری و ژمارەی پاسپۆرت بەبێ بۆشایی",
  },

  policy: {
    legend: "زانیاری بۆ هەژمارکردن و دەرکردنی بیمەنامە",
    countryFrom: "وڵاتی تۆمارکردنی ئۆتۆمبێل",
    vehicleType: "جۆری ئامراز",
    startDate: "بەرواری دەستپێکردنی بیمە",
    period: "ماوەی بیمە",

    vehiclePlate: "ژمارەی تابلۆ",
    vehicleBrend: "مارکە و مۆدێلی ئامراز",
    vehicleYear: "ساڵی بەرهەمهێنان",
    engineType: "جۆری سووتەمەنی",
    vehicleEngineCapacity: "قەبارەی مۆتۆر (سم³)",
    vehicleVin: "ژمارەی VIN",
    vehiclePower: "هێزی مۆتۆر",
    powerUnit: "یەکەی پێوانەی هێز",
    docsLabel: "تێکنیکی ئۆتۆمبێل (وێنە یان PDF)",
    docsHint: "دەتوانیت چەند فایلێک هاوپێچ بکەیت.",

    addVehicle: "زیادکردنی ئامراز",
    removeVehicle: "سڕینەوە",
    vehicleBlockTitle: "ئامرازی گواستنەوە",
    comment: "تێبینی (ئیختیاری)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "ئۆتۆمبێلی سواری" },
        { value: "truck", label: "ئۆتۆمبێلی بارهەڵگر" },
        { value: "bus", label: "پاس" },
        { value: "moto", label: "ماتۆڕ" },
        { value: "trailer", label: "پاشکۆ" },
        { value: "special", label: "ئامرازە تایبەتەکان" },
      ],

      periods: [
        { value: "30", label: "30 ڕۆژ" },
        { value: "60", label: "60 ڕۆژ" },
        { value: "90", label: "90 ڕۆژ" },
        { value: "180", label: "6 مانگ" },
        { value: "365", label: "12 مانگ" },
      ],

      engineTypes: [
        { value: "petrol", label: "بەنزین" },
        { value: "diesel", label: "دیزڵ" },
        { value: "Gas", label: "گاز" },
        { value: "Gasoline", label: "گاز / بەنزین" },
        { value: "electric", label: "کارەبا" },
        { value: "Hybrid", label: "هایبرید" },
      ],

      powerUnits: [
        { value: "ph", label: "هێزی ئەسپ" },
        { value: "kw", label: "کیلۆوات" },
      ],
    },
  },

  steps: {
    step1: "هەنگاوی 1",
    step2: "هەنگاوی 2",
    contacts: "پەیوەندی",
    vehicleData: "زانیارییەکانی ئۆتۆمبێل",
    next: "دواتر",
    back: "گەڕانەوە",
  },

  terms: {
    textBefore: "من ڕازی دەبم بە",
    linkText: "مەرجەکانی وەرگرتن و یاساکانی بیمە",
    textAfter: ".",
  },

  estimate: {
    title: "نرخی خەمڵێندراوی داواکاری:",
    hint:
      "نرخی کۆتایی لە پەیامی پارەدان (ئینڤۆیس)دا دوای پشکنینی هەموو زانیارییەکان و ڕێککەوتن لەگەڵ کۆمپانیای بیمە پێشکەش دەکرێت.",
  },
};
const kmr: LeadFormDictionary = {
  title: "Daxwaza Kirîna Polîçeyê",
  intro: "Agahdariyan dagirin. Em ê polîçeyê amade bikin û agahdariyên dravdanê ji we re bişînin.",

  notSelected: "Nehatiye hilbijartin",
  submit: "Daxwazê bişîne",

  fileForbidden: "nayê pejirandin (arşîv, deng an vîdeo).",

  statusSending: "Tê şandin…",
  statusError:
    "Di şandina daxwazê de çewtî çêbû. Ji kerema xwe paşê dîsa biceribînin. (An jî pelê teknîkî yê din bar bikin.)",
  statusSuccess: "Daxwaz hate şandin. Em ê bi we re têkilî daynin.",

  contact: {
    legend: "Agahdariyên têkiliyê",
    firstName: "Nav",
    lastName: "Paşnav",
    phone: "Telefon (bi koda welatê)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Agahdariyên sîgortegir (kesê ferdî)",
    birthDate: "Dîroka jidayikbûnê",
    addressTitle: "Navnîşana qeydkirinê",
    addressPlaceholder:
      "Koda posteyê, Welat, Bajar, Kolan, Hejmara xanî, Apartman (heke hebe)",
    addressHelp: "Navnîşanê di yek rêzê de binivîsin.",
    persPass: "Serî û hejmara pasaportê bê valahî",
  },

  policy: {
    legend: "Agahdariyên ji bo hesabkirin û derxistinê",
    countryFrom: "Welata qeydkirina wesayîtê",
    vehicleType: "Cureya wesayîtê",
    startDate: "Dîroka destpêka sîgorteyê",
    period: "Dema sîgorteyê",

    vehiclePlate: "Plaka",
    vehicleBrend: "Marke û modela wesayîtê",
    vehicleYear: "Sala çêkirinê",
    engineType: "Cureya sotemeniyê",
    vehicleEngineCapacity: "Hecma motorê, cm³",
    vehicleVin: "Hejmara VIN",
    vehiclePower: "Hêza motorê",
    powerUnit: "Yekeya pîvanê ya hêzê",
    docsLabel: "Teknîkpas (wêne an PDF)",
    docsHint: "Hûn dikarin çend pelan bar bikin.",

    addVehicle: "Wesayîtek zêde bike",
    removeVehicle: "Jê bibe",
    vehicleBlockTitle: "Wesayît",
    comment: "Şîrove (vebijarkî)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "Otomobîl" },
        { value: "truck", label: "Kamyon" },
        { value: "bus", label: "Otobûs" },
        { value: "moto", label: "Motorsîklet" },
        { value: "trailer", label: "Rimork" },
        { value: "special", label: "Makîneya taybet" },
      ],

      periods: [
        { value: "30", label: "30 roj" },
        { value: "60", label: "60 roj" },
        { value: "90", label: "90 roj" },
        { value: "180", label: "6 meh" },
        { value: "365", label: "12 meh" },
      ],

      engineTypes: [
        { value: "petrol", label: "benzîn" },
        { value: "diesel", label: "dîzel" },
        { value: "Gas", label: "gaz" },
        { value: "Gasoline", label: "gaz / benzîn" },
        { value: "electric", label: "elektrîk" },
        { value: "Hybrid", label: "hîbrîd" },
      ],

      powerUnits: [
        { value: "ph", label: "hêza hespê" },
        { value: "kw", label: "kîlowat" },
      ],
    },
  },

  steps: {
    step1: "Gav 1",
    step2: "Gav 2",
    contacts: "Têkilî",
    vehicleData: "Agahdariyên wesayîtê",
    next: "Pêşve",
    back: "Paşve",
  },

  terms: {
    textBefore: "Ez",
    linkText: "mercên derxistinê û rêzikên sîgorteyê",
    textAfter: " qebûl dikim.",
  },

  estimate: {
    title: "Mesrefa texmînî li gorî daxwazê:",
    hint:
      "Mesrefa dawî dê di nameya ku agahdariyên dravdanê (invoice) dihewîne de, piştî kontrolkirina hemû agahdariyan û pejirandina ji aliyê şirketa sîgorteyê ve, were ragihandin.",
  },
};
const ar: LeadFormDictionary = {
  title: "طلب شراء وثيقة التأمين",
  intro:
    "املأ البيانات المطلوبة. سنقوم بإعداد الوثيقة وإرسال بيانات الدفع إليك.",

  notSelected: "غير محدد",
  submit: "إرسال الطلب",

  fileForbidden: "غير مسموح به (ملف مضغوط أو ملف صوتي أو فيديو).",

  statusSending: "جارٍ الإرسال...",
  statusError:
    "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة لاحقًا. (أو جرّب إرفاق ملف آخر لرخصة المركبة)",
  statusSuccess: "تم إرسال الطلب. سنتواصل معك قريبًا.",

  contact: {
    legend: "بيانات الاتصال",
    firstName: "الاسم",
    lastName: "اسم العائلة",
    phone: "رقم الهاتف (مع رمز الدولة)",
    email: "البريد الإلكتروني",
  },

  policyholder: {
    individualTitle: "بيانات حامل الوثيقة (شخص طبيعي)",
    birthDate: "تاريخ الميلاد",
    addressTitle: "عنوان التسجيل",
    addressPlaceholder:
      "الرمز البريدي، الدولة، المدينة، الشارع، رقم المبنى، رقم الشقة (إن وجد)",
    addressHelp: "يرجى إدخال العنوان في سطر واحد.",
    persPass: "سلسلة ورقم جواز السفر بدون مسافات",
  },

  policy: {
    legend: "بيانات الحساب وإصدار الوثيقة",
    countryFrom: "بلد تسجيل المركبة",
    vehicleType: "نوع المركبة",
    startDate: "تاريخ بدء التأمين",
    period: "مدة التأمين",

    vehiclePlate: "رقم اللوحة",
    vehicleBrend: "ماركة وطراز المركبة",
    vehicleYear: "سنة الصنع",
    engineType: "نوع الوقود",
    vehicleEngineCapacity: "سعة المحرك (سم³)",
    vehicleVin: "رقم VIN",
    vehiclePower: "قدرة المحرك",
    powerUnit: "وحدة قياس القدرة",
    docsLabel: "رخصة المركبة (صورة أو PDF)",
    docsHint: "يمكنك إرفاق عدة ملفات.",

    addVehicle: "إضافة مركبة",
    removeVehicle: "حذف",
    vehicleBlockTitle: "المركبة",
    comment: "ملاحظة (اختياري)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],

      vehicleTypes: [
        { value: "car", label: "سيارة ركاب" },
        { value: "truck", label: "شاحنة" },
        { value: "bus", label: "حافلة" },
        { value: "moto", label: "دراجة نارية" },
        { value: "trailer", label: "مقطورة" },
        { value: "special", label: "مركبة خاصة" },
      ],

      periods: [
        { value: "30", label: "30 يومًا" },
        { value: "60", label: "60 يومًا" },
        { value: "90", label: "90 يومًا" },
        { value: "180", label: "6 أشهر" },
        { value: "365", label: "12 شهرًا" },
      ],

      engineTypes: [
        { value: "petrol", label: "بنزين" },
        { value: "diesel", label: "ديزل" },
        { value: "Gas", label: "غاز" },
        { value: "Gasoline", label: "غاز / بنزين" },
        { value: "electric", label: "كهربائي" },
        { value: "Hybrid", label: "هجين" },
      ],

      powerUnits: [
        { value: "ph", label: "حصان" },
        { value: "kw", label: "كيلوواط" },
      ],
    },
  },

  steps: {
    step1: "الخطوة 1",
    step2: "الخطوة 2",
    contacts: "بيانات الاتصال",
    vehicleData: "بيانات المركبة",
    next: "التالي",
    back: "السابق",
  },

  terms: {
    textBefore: "أوافق على",
    linkText: "شروط الإصدار وقواعد التأمين",
    textAfter: ".",
  },

  estimate: {
    title: "التكلفة التقديرية للطلب:",
    hint:
      "سيتم إرسال السعر النهائي في رسالة تحتوي على بيانات الدفع (الفاتورة) بعد التحقق من جميع البيانات والحصول على موافقة شركة التأمين.",
  },
};

const uk: LeadFormDictionary = {
  title: "Заявка на придбання поліса",
  intro: "Заповніть дані. Ми підготуємо поліс і надішлемо реквізити для оплати.",

  notSelected: "Не вибрано",
  submit: "Надіслати заявку",

  fileForbidden: "не допускається (архів, аудіо або відео).",

  statusSending: "Надсилання…",
  statusError: "Помилка під час надсилання заявки. Спробуйте пізніше. (Або спробуйте прикріпити інший файл техпаспорта)",
  statusSuccess: "Заявку надіслано. Ми зв’яжемося з вами.",

  contact: {
    legend: "Контактні дані",
    firstName: "Ім’я",
    lastName: "Прізвище",
    phone: "Телефон (з кодом країни)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Дані страхувальника (фізична особа)",
    birthDate: "Дата народження",
    addressTitle: "Адреса реєстрації",
    addressPlaceholder: "ІНДЕКС, Країна, місто, вулиця, будинок, квартира (за наявності)",
    addressHelp: "Вкажіть адресу одним рядком.",
    persPass: "Серія та номер паспорта без пробілів",
  },

  policy: {
    legend: "Дані для розрахунку та оформлення",
    countryFrom: "Країна реєстрації автомобіля",
    vehicleType: "Тип ТЗ",
    startDate: "Дата початку дії страхування",
    period: "Строк страхування",

    vehiclePlate: "Державний номер",
    vehicleBrend: "Марка та модель ТЗ",
    vehicleYear: "Рік випуску ТЗ",
    engineType: "Тип палива",
    vehicleEngineCapacity: "Об’єм двигуна, куб. см",
    vehicleVin: "VIN-номер",
    vehiclePower: "Потужність двигуна",
    powerUnit: "Одиниця вимірювання потужності",
    docsLabel: "Техпаспорт (фото або PDF)",
    docsHint: "Можна прикріпити кілька файлів.",

    addVehicle: "Додати ТЗ",
    removeVehicle: "Видалити",
    vehicleBlockTitle: "Транспортний засіб",
    comment: "Коментар (необов’язково)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],
      vehicleTypes: [
        { value: "car", label: "Легковий автомобіль" },
        { value: "truck", label: "Вантажний автомобіль" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Причіп" },
        { value: "special", label: "Спецтехніка" },
      ],
      periods: [
        { value: "30", label: "30 днів" },
        { value: "60", label: "60 днів" },
        { value: "90", label: "90 днів" },
        { value: "180", label: "6 місяців" },
        { value: "365", label: "12 місяців" },
      ],
      engineTypes: [
        { value: "petrol", label: "бензин" },
        { value: "diesel", label: "дизель" },
        { value: "Gas", label: "газ" },
        { value: "Gasoline", label: "газ / бензин" },
        { value: "electric", label: "електро" },
        { value: "Hybrid", label: "гібрид" },
      ],
      powerUnits: [
        { value: "ph", label: "кінські сили" },
        { value: "kw", label: "кіловати" },
      ],
    },
  },

  steps: {
    step1: "Крок 1",
    step2: "Крок 2",
    contacts: "Контакти",
    vehicleData: "Дані автомобіля",
    next: "Далі",
    back: "Назад",
  },

  terms: {
    textBefore: "Я приймаю",
    linkText: "умови оформлення та правила страхування",
    textAfter: ".",
  },

  estimate: {
    title: "Орієнтовна вартість за заявкою:",
    hint: "Остаточна вартість буде надана в листі з реквізитами для оплати (інвойсі) після перевірки всіх даних та погодження зі страховою компанією.",
  },
};

const he: LeadFormDictionary = {
  title: "בקשה לרכישת פוליסה",
  intro: "מלאו את הפרטים. אנו נכין את הפוליסה ונשלח לכם את פרטי התשלום.",

  notSelected: "לא נבחר",
  submit: "שליחת בקשה",

  fileForbidden: "אינו נתמך (קובץ ארכיון, אודיו או וידאו).",

  statusSending: "שולח...",
  statusError: "אירעה שגיאה בעת שליחת הבקשה. נסו שוב מאוחר יותר. (או נסו לצרף קובץ אחר של רישיון הרכב)",
  statusSuccess: "הבקשה נשלחה. ניצור עמכם קשר בהקדם.",

  contact: {
    legend: "פרטי קשר",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    phone: "טלפון (כולל קידומת מדינה)",
    email: "דואר אלקטרוני",
  },

  policyholder: {
    individualTitle: "פרטי בעל הפוליסה (אדם פרטי)",
    birthDate: "תאריך לידה",
    addressTitle: "כתובת רישום",
    addressPlaceholder: "מיקוד, מדינה, עיר, רחוב, מספר בית, דירה (אם קיימת)",
    addressHelp: "יש להזין את הכתובת בשורה אחת.",
    persPass: "סדרה ומספר דרכון ללא רווחים",
  },

  policy: {
    legend: "פרטים לצורך חישוב והנפקה",
    countryFrom: "מדינת רישום הרכב",
    vehicleType: "סוג הרכב",
    startDate: "תאריך תחילת הביטוח",
    period: "תקופת הביטוח",

    vehiclePlate: "מספר רישוי",
    vehicleBrend: "יצרן ודגם הרכב",
    vehicleYear: "שנת ייצור",
    engineType: "סוג דלק",
    vehicleEngineCapacity: "נפח מנוע (סמ״ק)",
    vehicleVin: "מספר VIN",
    vehiclePower: "הספק מנוע",
    powerUnit: "יחידת מידה להספק",
    docsLabel: "רישיון רכב (צילום או PDF)",
    docsHint: "ניתן לצרף מספר קבצים.",

    addVehicle: "הוסף רכב",
    removeVehicle: "הסר",
    vehicleBlockTitle: "רכב",
    comment: "הערה (אופציונלי)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "בלארוס" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "רוסיה" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "אחר" },
      ],
      vehicleTypes: [
        { value: "car", label: "רכב פרטי" },
        { value: "truck", label: "משאית" },
        { value: "bus", label: "אוטובוס" },
        { value: "moto", label: "אופנוע" },
        { value: "trailer", label: "נגרר" },
        { value: "special", label: "ציוד הנדסי וכלים מיוחדים" },
      ],
      periods: [
        { value: "30", label: "30 ימים" },
        { value: "60", label: "60 ימים" },
        { value: "90", label: "90 ימים" },
        { value: "180", label: "6 חודשים" },
        { value: "365", label: "12 חודשים" },
      ],
      engineTypes: [
        { value: "petrol", label: "בנזין" },
        { value: "diesel", label: "דיזל" },
        { value: "Gas", label: "גז" },
        { value: "Gasoline", label: "גז / בנזין" },
        { value: "electric", label: "חשמלי" },
        { value: "Hybrid", label: "היברידי" },
      ],
      powerUnits: [
        { value: "ph", label: "כוחות סוס" },
        { value: "kw", label: "קילוואט" },
      ],
    },
  },

  steps: {
    step1: "שלב 1",
    step2: "שלב 2",
    contacts: "פרטי קשר",
    vehicleData: "פרטי הרכב",
    next: "הבא",
    back: "חזרה",
  },

  terms: {
    textBefore: "אני מאשר/ת את",
    linkText: "תנאי ההנפקה וכללי הביטוח",
    textAfter: ".",
  },

  estimate: {
    title: "עלות משוערת לפי הבקשה:",
    hint: "המחיר הסופי יימסר במכתב עם פרטי התשלום (חשבונית) לאחר בדיקת כל הנתונים ותיאום מול חברת הביטוח.",
  },
};

const az: LeadFormDictionary = {
  title: "Polisin alınması üçün müraciət",
  intro: "Məlumatları doldurun. Biz polisi hazırlayacaq və ödəniş rekvizitlərini sizə göndərəcəyik.",

  notSelected: "Seçilməyib",
  submit: "Müraciəti göndər",

  fileForbidden: "icazə verilmir (arxiv, audio və ya video faylı).",

  statusSending: "Göndərilir…",
  statusError:
    "Müraciət göndərilərkən xəta baş verdi. Zəhmət olmasa, daha sonra yenidən cəhd edin. (Və ya texniki pasportun başqa faylını əlavə etməyə çalışın)",
  statusSuccess: "Müraciət göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.",

  contact: {
    legend: "Əlaqə məlumatları",
    firstName: "Ad",
    lastName: "Soyad",
    phone: "Telefon (ölkə kodu ilə)",
    email: "E-poçt",
  },

  policyholder: {
    individualTitle: "Sığortalının məlumatları (fiziki şəxs)",
    birthDate: "Doğum tarixi",
    addressTitle: "Qeydiyyat ünvanı",
    addressPlaceholder:
      "POÇT İNDEKSİ, Ölkə, şəhər, küçə, ev, mənzil (əgər varsa)",
    addressHelp: "Ünvanı bir sətirdə göstərin.",
    persPass: "Pasportun seriyası və nömrəsi boşluqsuz",
  },

  policy: {
    legend: "Hesablama və rəsmiləşdirmə üçün məlumatlar",
    countryFrom: "Nəqliyyat vasitəsinin qeydiyyat ölkəsi",
    vehicleType: "Nəqliyyat vasitəsinin növü",
    startDate: "Sığortanın qüvvəyə minmə tarixi",
    period: "Sığorta müddəti",

    vehiclePlate: "Dövlət nömrə nişanı",
    vehicleBrend: "NV-nin markası və modeli",
    vehicleYear: "İstehsal ili",
    engineType: "Yanacaq növü",
    vehicleEngineCapacity: "Mühərrikin həcmi, kub sm",
    vehicleVin: "VIN nömrəsi",
    vehiclePower: "Mühərrikin gücü",
    powerUnit: "Güc vahidi",
    docsLabel: "Texniki pasport (foto və ya PDF)",
    docsHint: "Bir neçə fayl əlavə etmək mümkündür.",

    addVehicle: "NV əlavə et",
    removeVehicle: "Sil",
    vehicleBlockTitle: "Nəqliyyat vasitəsi",
    comment: "Şərh (istəyə bağlı)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Digər" },
      ],
      vehicleTypes: [
        { value: "car", label: "Minik avtomobili" },
        { value: "truck", label: "Yük avtomobili" },
        { value: "bus", label: "Avtobus" },
        { value: "moto", label: "Motosiklet" },
        { value: "trailer", label: "Qoşqu" },
        { value: "special", label: "Xüsusi texnika" },
      ],
      periods: [
        { value: "30", label: "30 gün" },
        { value: "60", label: "60 gün" },
        { value: "90", label: "90 gün" },
        { value: "180", label: "6 ay" },
        { value: "365", label: "12 ay" },
      ],
      engineTypes: [
        { value: "petrol", label: "benzin" },
        { value: "diesel", label: "dizel" },
        { value: "Gas", label: "qaz" },
        { value: "Gasoline", label: "qaz / benzin" },
        { value: "electric", label: "elektrik" },
        { value: "Hybrid", label: "hibrid" },
      ],
      powerUnits: [
        { value: "ph", label: "at gücü" },
        { value: "kw", label: "kilovat" },
      ],
    },
  },

  steps: {
    step1: "Addım 1",
    step2: "Addım 2",
    contacts: "Əlaqə məlumatları",
    vehicleData: "Nəqliyyat vasitəsinin məlumatları",
    next: "Davam et",
    back: "Geri",
  },

  terms: {
    textBefore: "Mən",
    linkText: "rəsmiləşdirmə şərtlərini və sığorta qaydalarını",
    textAfter: " qəbul edirəm.",
  },

  estimate: {
    title: "Müraciət üzrə təxmini qiymət:",
    hint:
      "Yekun qiymət bütün məlumatlar yoxlanıldıqdan və sığorta şirkəti ilə razılaşdırıldıqdan sonra ödəniş məlumatları (invoys) olan məktubda təqdim ediləcək.",
  },
};

const ro: LeadFormDictionary = {
  title: "Cerere pentru achiziționarea poliței",
  intro: "Completați datele. Vom pregăti polița și vă vom trimite detaliile pentru plată.",

  notSelected: "Neselectat",
  submit: "Trimite cererea",

  fileForbidden: "nu este acceptat (arhivă, fișier audio sau video).",

  statusSending: "Se trimite…",
  statusError: "A apărut o eroare la trimiterea cererii. Încercați din nou mai târziu. (Sau încercați să atașați un alt fișier al certificatului de înmatriculare.)",
  statusSuccess: "Cererea a fost trimisă. Vă vom contacta în curând.",

  contact: {
    legend: "Date de contact",
    firstName: "Prenume",
    lastName: "Nume",
    phone: "Telefon (cu prefixul țării)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Datele asiguratului (persoană fizică)",
    birthDate: "Data nașterii",
    addressTitle: "Adresa de înregistrare",
    addressPlaceholder: "COD POȘTAL, Țara, orașul, strada, numărul, apartamentul (dacă există)",
    addressHelp: "Introduceți adresa pe un singur rând.",
    persPass: "Seria și numărul pașaportului fără spații",
  },

  policy: {
    legend: "Date pentru calcul și emitere",
    countryFrom: "Țara de înmatriculare a vehiculului",
    vehicleType: "Tipul vehiculului",
    startDate: "Data începerii asigurării",
    period: "Perioada de asigurare",

    vehiclePlate: "Număr de înmatriculare",
    vehicleBrend: "Marca și modelul vehiculului",
    vehicleYear: "Anul fabricației",
    engineType: "Tipul combustibilului",
    vehicleEngineCapacity: "Capacitatea cilindrică a motorului, cmc",
    vehicleVin: "Număr VIN",
    vehiclePower: "Puterea motorului",
    powerUnit: "Unitatea de măsură a puterii",
    docsLabel: "Certificat de înmatriculare (fotografie sau PDF)",
    docsHint: "Puteți atașa mai multe fișiere.",

    addVehicle: "Adaugă vehicul",
    removeVehicle: "Șterge",
    vehicleBlockTitle: "Vehicul",
    comment: "Comentariu (opțional)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],
      vehicleTypes: [
        { value: "car", label: "Autoturism" },
        { value: "truck", label: "Camion" },
        { value: "bus", label: "Autobuz" },
        { value: "moto", label: "Motocicletă" },
        { value: "trailer", label: "Remorcă" },
        { value: "special", label: "Vehicul special" },
      ],
      periods: [
        { value: "30", label: "30 de zile" },
        { value: "60", label: "60 de zile" },
        { value: "90", label: "90 de zile" },
        { value: "180", label: "6 luni" },
        { value: "365", label: "12 luni" },
      ],
      engineTypes: [
        { value: "petrol", label: "benzină" },
        { value: "diesel", label: "motorină" },
        { value: "Gas", label: "gaz" },
        { value: "Gasoline", label: "gaz / benzină" },
        { value: "electric", label: "electric" },
        { value: "Hybrid", label: "hibrid" },
      ],
      powerUnits: [
        { value: "ph", label: "cai putere" },
        { value: "kw", label: "kilowați" },
      ],
    },
  },

  steps: {
    step1: "Pasul 1",
    step2: "Pasul 2",
    contacts: "Date de contact",
    vehicleData: "Datele vehiculului",
    next: "Înainte",
    back: "Înapoi",
  },

  terms: {
    textBefore: "Accept",
    linkText: "condițiile de emitere și regulile de asigurare",
    textAfter: ".",
  },

  estimate: {
    title: "Cost estimativ al cererii:",
    hint: "Costul final va fi indicat în mesajul cu datele de plată (factura), după verificarea tuturor informațiilor și confirmarea acestora de către asigurător.",
  },
};

const sr: LeadFormDictionary = {
  title: "Zahtev za kupovinu polise",
  intro: "Popunite podatke. Pripremićemo polisu i poslati vam podatke za uplatu.",

  notSelected: "Nije izabrano",
  submit: "Pošalji zahtev",

  fileForbidden: "nije dozvoljen (arhiva, audio ili video datoteka).",

  statusSending: "Slanje…",
  statusError: "Greška prilikom slanja zahteva. Pokušajte ponovo kasnije. (Ili pokušajte da priložite drugu datoteku saobraćajne dozvole)",
  statusSuccess: "Zahtev je poslat. Kontaktiraćemo vas.",

  contact: {
    legend: "Kontakt podaci",
    firstName: "Ime",
    lastName: "Prezime",
    phone: "Telefon (sa pozivnim brojem države)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Podaci ugovarača osiguranja (fizičko lice)",
    birthDate: "Datum rođenja",
    addressTitle: "Adresa prebivališta",
    addressPlaceholder: "POŠTANSKI BROJ, država, grad, ulica, broj, stan (ako postoji)",
    addressHelp: "Unesite adresu u jednom redu.",
    persPass: "Serija i broj pasoša bez razmaka",
  },

  policy: {
    legend: "Podaci za obračun i izdavanje polise",
    countryFrom: "Država registracije vozila",
    vehicleType: "Vrsta vozila",
    startDate: "Datum početka važenja osiguranja",
    period: "Period osiguranja",

    vehiclePlate: "Registarska oznaka",
    vehicleBrend: "Marka i model vozila",
    vehicleYear: "Godina proizvodnje",
    engineType: "Vrsta goriva",
    vehicleEngineCapacity: "Zapremina motora, cm³",
    vehicleVin: "VIN broj",
    vehiclePower: "Snaga motora",
    powerUnit: "Jedinica mere snage",
    docsLabel: "Saobraćajna dozvola (fotografija ili PDF)",
    docsHint: "Možete priložiti više datoteka.",

    addVehicle: "Dodaj vozilo",
    removeVehicle: "Ukloni",
    vehicleBlockTitle: "Vozilo",
    comment: "Komentar (opciono)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Belarus" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Rusija" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Ukrajina" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Ostalo" },
      ],
      vehicleTypes: [
        { value: "car", label: "Putničko vozilo" },
        { value: "truck", label: "Teretno vozilo" },
        { value: "bus", label: "Autobus" },
        { value: "moto", label: "Motocikl" },
        { value: "trailer", label: "Prikolica" },
        { value: "special", label: "Specijalno vozilo" },
      ],
      periods: [
        { value: "30", label: "30 dana" },
        { value: "60", label: "60 dana" },
        { value: "90", label: "90 dana" },
        { value: "180", label: "6 meseci" },
        { value: "365", label: "12 meseci" },
      ],
      engineTypes: [
        { value: "petrol", label: "benzin" },
        { value: "diesel", label: "dizel" },
        { value: "Gas", label: "gas" },
        { value: "Gasoline", label: "gas / benzin" },
        { value: "electric", label: "električni pogon" },
        { value: "Hybrid", label: "hibrid" },
      ],
      powerUnits: [
        { value: "ph", label: "konjske snage" },
        { value: "kw", label: "kilovati" },
      ],
    },
  },

  steps: {
    step1: "Korak 1",
    step2: "Korak 2",
    contacts: "Kontakti",
    vehicleData: "Podaci o vozilu",
    next: "Dalje",
    back: "Nazad",
  },

  terms: {
    textBefore: "Prihvatam",
    linkText: "uslove ugovaranja i pravila osiguranja",
    textAfter: ".",
  },

  estimate: {
    title: "Okvirna cena prema zahtevu:",
    hint: "Konačna cena biće navedena u poruci sa podacima za uplatu (fakturi) nakon provere svih podataka i usaglašavanja sa osiguravajućim društvom.",
  },
};

const sq: LeadFormDictionary = {
  title: "Aplikim për blerjen e policës",
  intro: "Plotësoni të dhënat. Ne do të përgatisim policën dhe do t'ju dërgojmë të dhënat për pagesë.",

  notSelected: "Nuk është zgjedhur",
  submit: "Dërgo aplikimin",

  fileForbidden: "nuk lejohet (arkiv, audio ose video).",

  statusSending: "Duke u dërguar…",
  statusError: "Gabim gjatë dërgimit të aplikimit. Ju lutemi provoni më vonë. (Ose provoni të bashkëngjitni një skedar tjetër të certifikatës së regjistrimit të automjetit)",
  statusSuccess: "Aplikimi u dërgua. Do t'ju kontaktojmë.",

  contact: {
    legend: "Të dhënat e kontaktit",
    firstName: "Emri",
    lastName: "Mbiemri",
    phone: "Telefoni (me kodin e shtetit)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Të dhënat e të siguruarit (person fizik)",
    birthDate: "Data e lindjes",
    addressTitle: "Adresa e regjistrimit",
    addressPlaceholder: "KODI POSTAR, Shteti, qyteti, rruga, numri, apartamenti (nëse ka)",
    addressHelp: "Shkruani adresën në një rresht.",
    persPass: "Seria dhe numri i pasaportës pa hapësira",
  },

  policy: {
    legend: "Të dhënat për llogaritje dhe lëshimin e policës",
    countryFrom: "Shteti i regjistrimit të automjetit",
    vehicleType: "Lloji i automjetit",
    startDate: "Data e fillimit të sigurimit",
    period: "Periudha e sigurimit",

    vehiclePlate: "Targa",
    vehicleBrend: "Marka dhe modeli i automjetit",
    vehicleYear: "Viti i prodhimit",
    engineType: "Lloji i karburantit",
    vehicleEngineCapacity: "Kapaciteti i motorit, cm³",
    vehicleVin: "Numri VIN",
    vehiclePower: "Fuqia e motorit",
    powerUnit: "Njësia e matjes së fuqisë",
    docsLabel: "Certifikata e regjistrimit të automjetit (foto ose PDF)",
    docsHint: "Mund të bashkëngjitni disa skedarë.",

    addVehicle: "Shto automjet",
    removeVehicle: "Fshi",
    vehicleBlockTitle: "Automjet",
    comment: "Koment (opsionale)",

    options: {
      countriesFrom: [
        { value: "AE", label: "الإمارات العربية المتحدة" },
        { value: "AM", label: "Հայաստան" },
        { value: "AZ", label: "Azərbaycan" },
        { value: "BH", label: "البحرين" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "الجزائر" },
        { value: "EG", label: "مصر" },
        { value: "GB", label: "United Kingdom" },
        { value: "GE", label: "საქართველო" },
        { value: "IL", label: "ישראל" },
        { value: "IQ", label: "العراق" },
        { value: "IR", label: "ایران" },
        { value: "JO", label: "الأردن" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "الكويت" },
        { value: "KZ", label: "Қазақстан" },
        { value: "LB", label: "لبنان" },
        { value: "LY", label: "ليبيا" },
        { value: "MA", label: "المغرب" },
        { value: "MD", label: "Moldova" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "عُمان" },
        { value: "QA", label: "قطر" },
        { value: "RU", label: "Россия" },
        { value: "SA", label: "المملكة العربية السعودية" },
        { value: "SY", label: "سوريا" },
        { value: "TN", label: "تونس" },
        { value: "TR", label: "Türkiye" },
        { value: "UA", label: "Україна" },
        { value: "US", label: "United States" },
        { value: "UZ", label: "Oʻzbekiston" },
        { value: "YE", label: "اليمن" },
        { value: "OTHER", label: "Other" },
      ],
      vehicleTypes: [
        { value: "car", label: "Automjet pasagjerësh" },
        { value: "truck", label: "Automjet mallrash" },
        { value: "bus", label: "Autobus" },
        { value: "moto", label: "Motocikletë" },
        { value: "trailer", label: "Rimorkio" },
        { value: "special", label: "Mjet special" },
      ],
      periods: [
        { value: "30", label: "30 ditë" },
        { value: "60", label: "60 ditë" },
        { value: "90", label: "90 ditë" },
        { value: "180", label: "6 muaj" },
        { value: "365", label: "12 muaj" },
      ],
      engineTypes: [
        { value: "petrol", label: "benzinë" },
        { value: "diesel", label: "naftë" },
        { value: "Gas", label: "gaz" },
        { value: "Gasoline", label: "gaz / benzinë" },
        { value: "electric", label: "elektrik" },
        { value: "Hybrid", label: "hibrid" },
      ],
      powerUnits: [
        { value: "ph", label: "kuaj fuqi" },
        { value: "kw", label: "kilovat" },
      ],
    },
  },

  steps: {
    step1: "Hapi 1",
    step2: "Hapi 2",
    contacts: "Kontaktet",
    vehicleData: "Të dhënat e automjetit",
    next: "Vazhdo",
    back: "Kthehu",
  },

  terms: {
    textBefore: "Unë pranoj",
    linkText: "kushtet e aplikimit dhe rregullat e sigurimit",
    textAfter: ".",
  },

  estimate: {
    title: "Kostoja e përafërt sipas aplikimit:",
    hint: "Kostoja përfundimtare do të jepet në emailin me të dhënat e pagesës (faturën) pas verifikimit të të gjitha të dhënave dhe miratimit nga shoqëria e sigurimeve.",
  },
};

const mn: LeadFormDictionary = {
  title: "Полис худалдан авах хүсэлт",
  intro: "Мэдээллээ бөглөнө үү. Бид полисыг бэлтгэж, төлбөрийн мэдээллийг танд илгээнэ.",

  notSelected: "Сонгогдоогүй",
  submit: "Хүсэлт илгээх",

  fileForbidden: "зөвшөөрөгдөхгүй файл байна (архив, аудио эсвэл видео).",

  statusSending: "Илгээж байна…",
  statusError:
    "Хүсэлт илгээх үед алдаа гарлаа. Дараа дахин оролдоно уу. (Эсвэл тээврийн хэрэгслийн гэрчилгээний өөр файл хавсаргаж үзнэ үү)",
  statusSuccess: "Хүсэлт илгээгдлээ. Бид тантай холбогдох болно.",

  contact: {
    legend: "Холбоо барих мэдээлэл",
    firstName: "Нэр",
    lastName: "Овог",
    phone: "Утас (улсын кодтой)",
    email: "И-мэйл",
  },

  policyholder: {
    individualTitle: "Даатгуулагчийн мэдээлэл (хувь хүн)",
    birthDate: "Төрсөн огноо",
    addressTitle: "Бүртгэлийн хаяг",
    addressPlaceholder:
      "Шуудангийн индекс, улс, хот, гудамж, байрны дугаар, орон сууц (байгаа бол)",
    addressHelp: "Хаягаа нэг мөрөөр бичнэ үү.",
    persPass: "Паспортын сери, дугаарыг зайгүйгээр оруулна уу",
  },

  policy: {
    legend: "Тооцоолол болон бүрдүүлэлтэд шаардлагатай мэдээлэл",
    countryFrom: "Тээврийн хэрэгслийн бүртгэлтэй улс",
    vehicleType: "Тээврийн хэрэгслийн төрөл",
    startDate: "Даатгал хүчин төгөлдөр эхлэх огноо",
    period: "Даатгалын хугацаа",

    vehiclePlate: "Улсын дугаар",
    vehicleBrend: "Тээврийн хэрэгслийн марк, загвар",
    vehicleYear: "Үйлдвэрлэсэн он",
    engineType: "Түлшний төрөл",
    vehicleEngineCapacity: "Хөдөлгүүрийн багтаамж, см³",
    vehicleVin: "VIN дугаар",
    vehiclePower: "Хөдөлгүүрийн чадал",
    powerUnit: "Чадлын нэгж",
    docsLabel: "Тээврийн хэрэгслийн гэрчилгээ (зураг эсвэл PDF)",
    docsHint: "Нэгээс олон файл хавсаргаж болно.",

    addVehicle: "Тээврийн хэрэгсэл нэмэх",
    removeVehicle: "Устгах",
    vehicleBlockTitle: "Тээврийн хэрэгсэл",
    comment: "Тайлбар (заавал биш)",

    options: {
      countriesFrom: [
        { value: "AE", label: "Арабын Нэгдсэн Эмират Улс" },
        { value: "AM", label: "Армени" },
        { value: "AZ", label: "Азербайжан" },
        { value: "BH", label: "Бахрейн" },
        { value: "BY", label: "Беларусь" },
        { value: "DZ", label: "Алжир" },
        { value: "EG", label: "Египет" },
        { value: "GB", label: "Их Британи" },
        { value: "GE", label: "Гүрж" },
        { value: "IL", label: "Израиль" },
        { value: "IQ", label: "Ирак" },
        { value: "IR", label: "Иран" },
        { value: "JO", label: "Йордан" },
        { value: "KG", label: "Кыргызстан" },
        { value: "KW", label: "Кувейт" },
        { value: "KZ", label: "Казахстан" },
        { value: "LB", label: "Ливан" },
        { value: "LY", label: "Ливи" },
        { value: "MA", label: "Марокко" },
        { value: "MD", label: "Молдав" },
        { value: "MN", label: "Монгол Улс" },
        { value: "OM", label: "Оман" },
        { value: "QA", label: "Катар" },
        { value: "RU", label: "Орос" },
        { value: "SA", label: "Саудын Араб" },
        { value: "SY", label: "Сири" },
        { value: "TN", label: "Тунис" },
        { value: "TR", label: "Турк" },
        { value: "UA", label: "Украин" },
        { value: "US", label: "АНУ" },
        { value: "UZ", label: "Узбекистан" },
        { value: "YE", label: "Йемен" },
        { value: "OTHER", label: "Бусад" },
      ],
      vehicleTypes: [
        { value: "car", label: "Суудлын автомашин" },
        { value: "truck", label: "Ачааны автомашин" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Чиргүүл" },
        { value: "special", label: "Тусгай зориулалтын техник" },
      ],
      periods: [
        { value: "30", label: "30 хоног" },
        { value: "60", label: "60 хоног" },
        { value: "90", label: "90 хоног" },
        { value: "180", label: "6 сар" },
        { value: "365", label: "12 сар" },
      ],
      engineTypes: [
        { value: "petrol", label: "бензин" },
        { value: "diesel", label: "дизель" },
        { value: "Gas", label: "хий" },
        { value: "Gasoline", label: "хий / бензин" },
        { value: "electric", label: "цахилгаан" },
        { value: "Hybrid", label: "гибрид" },
      ],
      powerUnits: [
        { value: "ph", label: "морины хүч" },
        { value: "kw", label: "киловатт" },
      ],
    },
  },

  steps: {
    step1: "Алхам 1",
    step2: "Алхам 2",
    contacts: "Холбоо барих мэдээлэл",
    vehicleData: "Тээврийн хэрэгслийн мэдээлэл",
    next: "Дараах",
    back: "Буцах",
  },

  terms: {
    textBefore: "Би",
    linkText: "бүрдүүлэлтийн нөхцөл болон даатгалын дүрэмтэй",
    textAfter: " танилцаж, зөвшөөрч байна.",
  },

  estimate: {
    title: "Хүсэлтийн урьдчилсан үнэ:",
    hint:
      "Бүх мэдээллийг шалгаж, даатгалын компанитай тохиролцсоны дараа төлбөрийн мэдээлэл бүхий нэхэмжлэхэд эцсийн үнийг тусгана.",
  },
};


const dictionaries: Partial<Record<Lang, LeadFormDictionary>> = {
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

export function getLeadFormDictionary(lang: Lang): LeadFormDictionary {
  return dictionaries[lang] ?? en;
}