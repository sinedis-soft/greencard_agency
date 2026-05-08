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
  statusError: "Ошибка при отправке заявки. Попробуйте позже.",
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
    startDate: "Дата начала",
    period: "Срок",

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
        { value: "KZ", label: "Казахстан" },
        { value: "UA", label: "Украина" },
        { value: "GE", label: "Грузия" },
        { value: "UZ", label: "Узбекистан" },
        { value: "KG", label: "Кыргызстан" },
        { value: "MD", label: "Молдова" },
        { value: "TR", label: "Турция" },
        { value: "RU", label: "Россия" },
        { value: "MN", label: "Монголия" },
        { value: "AZ", label: "Азербайджан" },
        { value: "AR", label: "Армения" },
        { value: "BY", label: "Беларусь" },
        { value: "OTHER", label: "Другая" },
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
    "Wystąpił błąd podczas wysyłania wniosku. Prosimy spróbować ponownie później.",
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
    startDate: "Data rozpoczęcia ochrony",
    period: "Okres",

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
        { value: "KZ", label: "Kazachstan" },
        { value: "UA", label: "Ukraina" },
        { value: "GE", label: "Gruzja" },
        { value: "UZ", label: "Uzbekistan" },
        { value: "KG", label: "Kirgistan" },
        { value: "MD", label: "Mołdawia" },
        { value: "TR", label: "Turcja" },
        { value: "RU", label: "Rosja" },
        { value: "MN", label: "Mongolia" },
        { value: "AZ", label: "Azerbejdżan" },
        { value: "AR", label: "Armenia" },
        { value: "BY", label: "Białoruś" },
        { value: "OTHER", label: "Inny" },
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
    "An error occurred while submitting the application. Please try again later.",
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
    startDate: "Start Date",
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
        { value: "KZ", label: "Kazakhstan" },
        { value: "UA", label: "Ukraine" },
        { value: "GE", label: "Georgia" },
        { value: "UZ", label: "Uzbekistan" },
        { value: "KG", label: "Kyrgyzstan" },
        { value: "MD", label: "Moldova" },
        { value: "TR", label: "Turkey" },
        { value: "RU", label: "Russia" },
        { value: "MN", label: "Mongolia" },
        { value: "AZ", label: "Azerbaijan" },
        { value: "AR", label: "Armenia" },
        { value: "BY", label: "Belarus" },
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
    "Памылка пры адпраўцы заяўкі. Паспрабуйце пазней.",
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
    startDate: "Дата пачатку",
    period: "Тэрмін",

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
        { value: "KZ", label: "Казахстан" },
        { value: "UA", label: "Украіна" },
        { value: "GE", label: "Грузія" },
        { value: "UZ", label: "Узбекістан" },
        { value: "KG", label: "Кыргызстан" },
        { value: "MD", label: "Малдова" },
        { value: "TR", label: "Турцыя" },
        { value: "RU", label: "Расія" },
        { value: "MN", label: "Манголія" },
        { value: "AZ", label: "Азербайджан" },
        { value: "AR", label: "Арменія" },
        { value: "BY", label: "Беларусь" },
        { value: "OTHER", label: "Іншая" },
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
    "Arizani yuborishda xatolik yuz berdi. Keyinroq qayta urinib ko‘ring.",

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

    startDate:
      "Boshlanish sanasi",

    period:
      "Muddat",

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
        { value: "KZ", label: "Qozog‘iston" },
        { value: "UA", label: "Ukraina" },
        { value: "GE", label: "Gruziya" },
        { value: "UZ", label: "O‘zbekiston" },
        { value: "KG", label: "Qirg‘iziston" },
        { value: "MD", label: "Moldova" },
        { value: "TR", label: "Turkiya" },
        { value: "RU", label: "Rossiya" },
        { value: "MN", label: "Mo‘g‘uliston" },
        { value: "AZ", label: "Ozarbayjon" },
        { value: "AR", label: "Armaniston" },
        { value: "BY", label: "Belarus" },
        { value: "OTHER", label: "Boshqa" },
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
    "განაცხადის გაგზავნისას დაფიქსირდა შეცდომა. სცადეთ მოგვიანებით.",
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
    startDate: "დაწყების თარიღი",
    period: "ვადა",

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
        { value: "KZ", label: "ყაზახეთი" },
        { value: "UA", label: "უკრაინა" },
        { value: "GE", label: "საქართველო" },
        { value: "UZ", label: "უზბეკეთი" },
        { value: "KG", label: "ყირგიზეთი" },
        { value: "MD", label: "მოლდოვა" },
        { value: "TR", label: "თურქეთი" },
        { value: "RU", label: "რუსეთი" },
        { value: "MN", label: "მონღოლეთი" },
        { value: "AZ", label: "აზერბაიჯანი" },
        { value: "AR", label: "სომხეთი" },
        { value: "BY", label: "ბელარუსი" },
        { value: "OTHER", label: "სხვა" },
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
    "Өтінімді жіберу кезінде қате орын алды. Кейінірек қайталап көріңіз.",
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
    startDate: "Басталу күні",
    period: "Мерзімі",

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
        { value: "KZ", label: "Қазақстан" },
        { value: "UA", label: "Украина" },
        { value: "GE", label: "Грузия" },
        { value: "UZ", label: "Өзбекстан" },
        { value: "KG", label: "Қырғызстан" },
        { value: "MD", label: "Молдова" },
        { value: "TR", label: "Түркия" },
        { value: "RU", label: "Ресей" },
        { value: "MN", label: "Моңғолия" },
        { value: "AZ", label: "Әзербайжан" },
        { value: "AR", label: "Армения" },
        { value: "BY", label: "Беларусь" },
        { value: "OTHER", label: "Басқа" },
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
    "Başvuru gönderilirken hata oluştu. Lütfen daha sonra tekrar deneyin.",
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
    startDate: "Başlangıç Tarihi",
    period: "Süre",

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
        { value: "KZ", label: "Kazakistan" },
        { value: "UA", label: "Ukrayna" },
        { value: "GE", label: "Gürcistan" },
        { value: "UZ", label: "Özbekistan" },
        { value: "KG", label: "Kırgızistan" },
        { value: "MD", label: "Moldova" },
        { value: "TR", label: "Türkiye" },
        { value: "RU", label: "Rusya" },
        { value: "MN", label: "Moğolistan" },
        { value: "AZ", label: "Azerbaycan" },
        { value: "AR", label: "Ermenistan" },
        { value: "BY", label: "Belarus" },
        { value: "OTHER", label: "Diğer" },
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
  statusError: "خطا در ارسال درخواست. لطفاً بعداً دوباره تلاش کنید.",
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
    startDate: "تاریخ شروع",
    period: "مدت اعتبار",

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
        { value: "KZ", label: "قزاقستان" },
        { value: "UA", label: "اوکراین" },
        { value: "GE", label: "گرجستان" },
        { value: "UZ", label: "ازبکستان" },
        { value: "KG", label: "قرقیزستان" },
        { value: "MD", label: "مولداوی" },
        { value: "TR", label: "ترکیه" },
        { value: "RU", label: "روسیه" },
        { value: "MN", label: "مغولستان" },
        { value: "AZ", label: "آذربایجان" },
        { value: "AR", label: "ارمنستان" },
        { value: "BY", label: "بلاروس" },
        { value: "OTHER", label: "سایر" },
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
    "Հայտի ուղարկման ընթացքում տեղի է ունեցել սխալ։ Խնդրում ենք փորձել ավելի ուշ։",
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
    startDate: "Սկսման ամսաթիվ",
    period: "Ժամկետ",

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
        { value: "KZ", label: "Ղազախստան" },
        { value: "UA", label: "Ուկրաինա" },
        { value: "GE", label: "Վրաստան" },
        { value: "UZ", label: "Ուզբեկստան" },
        { value: "KG", label: "Ղրղզստան" },
        { value: "MD", label: "Մոլդովա" },
        { value: "TR", label: "Թուրքիա" },
        { value: "RU", label: "Ռուսաստան" },
        { value: "MN", label: "Մոնղոլիա" },
        { value: "AZ", label: "Ադրբեջան" },
        { value: "AR", label: "Հայաստան" },
        { value: "BY", label: "Բելառուս" },
        { value: "OTHER", label: "Այլ" },
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
};

export function getLeadFormDictionary(lang: Lang): LeadFormDictionary {
  return dictionaries[lang] ?? en;
}