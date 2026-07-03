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
    legend: "Контактные данные (заполнять латинскими буквами)",
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
    title: "Стоимость по заявке:",
    hint: "Стоимость указана из расчета, что тип транспортного средства выбран правильно. Окончательная стоимость будет предоставлена в письме с данными на оплату после проверки всех данных и согласования со страховой.",
  },
};

const pl: LeadFormDictionary = {
  title: "Wniosek o zakup polisy",
  intro: "Wypełnij dane. Przygotujemy polisę i wyślemy dane do płatności.",

  notSelected: "Nie wybrano",
  submit: "Wyślij wniosek",

  fileForbidden: "jest niedozwolony (archiwum, plik audio lub wideo).",

  statusSending: "Wysyłanie…",
  statusError: "Błąd podczas wysyłania wniosku. Spróbuj później. (Lub spróbuj załączyć inny plik dowodu rejestracyjnego)",
  statusSuccess: "Wniosek został wysłany. Skontaktujemy się z Tobą.",

  contact: {
    legend: "Dane kontaktowe (wypełniać alfabetem łacińskim)",
    firstName: "Imię",
    lastName: "Nazwisko",
    phone: "Telefon (z numerem kierunkowym kraju)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Dane ubezpieczającego (osoba fizyczna)",
    birthDate: "Data urodzenia",
    addressTitle: "Adres zameldowania",
    addressPlaceholder: "KOD POCZTOWY, kraj, miasto, ulica, dom, mieszkanie (jeśli dotyczy)",
    addressHelp: "Podaj adres w jednej linii.",
    persPass: "Seria i numer paszportu bez spacji",
  },

  policy: {
    legend: "Dane do kalkulacji i wystawienia polisy",
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
    docsHint: "Możesz załączyć kilka plików.",

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
        { value: "Hybrid", label: "hybryda" },
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
    contacts: "Kontakt",
    vehicleData: "Dane pojazdu",
    next: "Dalej",
    back: "Wstecz",
  },
  terms: {
    textBefore: "Akceptuję",
    linkText: "warunki wystawienia polisy i ogólne warunki ubezpieczenia",
    textAfter: ".",
  },
  estimate: {
    title: "Koszt według wniosku:",
    hint: "Cena została podana przy założeniu, że typ pojazdu został wybrany prawidłowo. Ostateczny koszt zostanie przesłany w wiadomości z danymi do płatności po sprawdzeniu wszystkich danych i uzgodnieniu z ubezpieczycielem.",
  },
};

const en: LeadFormDictionary = {
  title: "Policy purchase application",
  intro: "Fill in the details. We will prepare the policy and send you the payment details.",

  notSelected: "Not selected",
  submit: "Submit application",

  fileForbidden: "is not allowed (archive, audio or video file).",

  statusSending: "Sending…",
  statusError: "Error while submitting the application. Please try again later. (Or try attaching a different vehicle registration document file)",
  statusSuccess: "The application has been submitted. We will contact you.",

  contact: {
    legend: "Contact details (fill in using Latin letters)",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone number (with country code)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Policyholder details (individual)",
    birthDate: "Date of birth",
    addressTitle: "Registered address",
    addressPlaceholder: "POSTCODE, country, city, street, house number, apartment number (if any)",
    addressHelp: "Enter the address in one line.",
    persPass: "Passport series and number without spaces",
  },

  policy: {
    legend: "Details for calculation and policy issuance",
    countryFrom: "Vehicle registration country",
    vehicleType: "Vehicle type",
    startDate: "Insurance start date",
    period: "Insurance period",

    vehiclePlate: "Registration number",
    vehicleBrend: "Vehicle make and model",
    vehicleYear: "Vehicle year of manufacture",
    engineType: "Fuel type",
    vehicleEngineCapacity: "Engine capacity, cm³",
    vehicleVin: "VIN number",
    vehiclePower: "Engine power",
    powerUnit: "Power unit",
    docsLabel: "Vehicle registration document (photo or PDF)",
    docsHint: "You can attach several files.",

    addVehicle: "Add vehicle",
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
        { value: "car", label: "Passenger car" },
        { value: "truck", label: "Truck" },
        { value: "bus", label: "Bus" },
        { value: "moto", label: "Motorcycle" },
        { value: "trailer", label: "Trailer" },
        { value: "special", label: "Special-purpose vehicle" },
      ],
      periods: [
        { value: "30", label: "30 days" },
        { value: "60", label: "60 days" },
        { value: "90", label: "90 days" },
        { value: "180", label: "6 months" },
        { value: "365", label: "12 months" },
      ],
      engineTypes: [
        { value: "petrol", label: "petrol" },
        { value: "diesel", label: "diesel" },
        { value: "Gas", label: "gas" },
        { value: "Gasoline", label: "gas / petrol" },
        { value: "electric", label: "electric" },
        { value: "Hybrid", label: "hybrid" },
      ],
      powerUnits: [
        { value: "ph", label: "horsepower" },
        { value: "kw", label: "kilowatts" },
      ],
    },
  },
    steps: {
    step1: "Step 1",
    step2: "Step 2",
    contacts: "Contacts",
    vehicleData: "Vehicle details",
    next: "Next",
    back: "Back",
  },
  terms: {
    textBefore: "I accept",
    linkText: "the policy issuance terms and insurance rules",
    textAfter: ".",
  },
  estimate: {
    title: "Application-based cost:",
    hint: "The cost is shown on the assumption that the vehicle type has been selected correctly. The final cost will be provided in the email with payment details after all data has been checked and agreed with the insurance company.",
  },
};

const be: LeadFormDictionary = {
  title: "Заяўка на куплю поліса",
  intro: "Запоўніце даныя. Мы падрыхтуем поліс і дашлём рэквізіты для аплаты.",

  notSelected: "Не выбрана",
  submit: "Адправіць заяўку",

  fileForbidden: "недапушчальны (архіў, аўдыя або відэа).",

  statusSending: "Адпраўка…",
  statusError: "Памылка пры адпраўцы заяўкі. Паспрабуйце пазней. (Або паспрабуйце далучыць іншы файл тэхпашпарта)",
  statusSuccess: "Заяўка адпраўлена. Мы звяжамся з вамі.",

  contact: {
    legend: "Кантактныя даныя (запаўняць лацінскімі літарамі)",
    firstName: "Імя",
    lastName: "Прозвішча",
    phone: "Тэлефон (з кодам краіны)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Даныя страхавальніка (фізічная асоба)",
    birthDate: "Дата нараджэння",
    addressTitle: "Адрас рэгістрацыі",
    addressPlaceholder: "ІНДЭКС, краіна, горад, вуліца, дом, кватэра (калі ёсць)",
    addressHelp: "Укажыце адрас адным радком.",
    persPass: "Серыя і нумар пашпарта без прабелаў",
  },

  policy: {
    legend: "Даныя для разліку і афармлення",
    countryFrom: "Краіна рэгістрацыі аўто",
    vehicleType: "Тып ТС",
    startDate: "Дата пачатку дзеяння страхоўкі",
    period: "Тэрмін страхавання",

    vehiclePlate: "Дзяржнумар",
    vehicleBrend: "Марка і мадэль ТС",
    vehicleYear: "Год выпуску ТС",
    engineType: "Тып паліва",
    vehicleEngineCapacity: "Аб’ём рухавіка, см³",
    vehicleVin: "VIN нумар",
    vehiclePower: "Магутнасць рухавіка",
    powerUnit: "Адзінка вымярэння магутнасці",
    docsLabel: "Тэхпашпарт (фота або PDF)",
    docsHint: "Можна далучыць некалькі файлаў.",

    addVehicle: "Дадаць ТС",
    removeVehicle: "Выдаліць",
    vehicleBlockTitle: "Транспартны сродак",
    comment: "Каментарый (неабавязкова)",

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
        { value: "car", label: "Легкавы аўтамабіль" },
        { value: "truck", label: "Грузавы аўтамабіль" },
        { value: "bus", label: "Аўтобус" },
        { value: "moto", label: "Матацыкл" },
        { value: "trailer", label: "Прычэп" },
        { value: "special", label: "Спецтэхніка" },
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
        { value: "Gasoline", label: "газ / бензін" },
        { value: "electric", label: "электра" },
        { value: "Hybrid", label: "гібрыд" },
      ],
      powerUnits: [
        { value: "ph", label: "конскія сілы" },
        { value: "kw", label: "кілаваты" },
      ],
    },
  },
    steps: {
    step1: "Крок 1",
    step2: "Крок 2",
    contacts: "Кантакты",
    vehicleData: "Даныя аўто",
    next: "Далей",
    back: "Назад",
  },
  terms: {
    textBefore: "Я прымаю",
    linkText: "умовы афармлення і правілы страхавання",
    textAfter: ".",
  },
  estimate: {
    title: "Кошт па заяўцы:",
    hint: "Кошт указаны з разліку, што тып транспартнага сродку выбраны правільна. Канчатковы кошт будзе прадастаўлены ў лісце з данымі для аплаты пасля праверкі ўсіх даных і ўзгаднення са страхавой кампаніяй.",
  },
};

const uz: LeadFormDictionary = {
  title: "Polis sotib olish uchun ariza",
  intro: "Ma’lumotlarni to‘ldiring. Biz polisni tayyorlaymiz va to‘lov uchun rekvizitlarni yuboramiz.",

  notSelected: "Tanlanmagan",
  submit: "Arizani yuborish",

  fileForbidden: "ruxsat etilmaydi (arxiv, audio yoki video fayl).",

  statusSending: "Yuborilmoqda…",
  statusError: "Arizani yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring. (Yoki texpasportning boshqa faylini biriktirib ko‘ring)",
  statusSuccess: "Ariza yuborildi. Biz siz bilan bog‘lanamiz.",

  contact: {
    legend: "Aloqa ma’lumotlari (lotin harflarida to‘ldiring)",
    firstName: "Ism",
    lastName: "Familiya",
    phone: "Telefon (mamlakat kodi bilan)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Sug‘urta qildiruvchi ma’lumotlari (jismoniy shaxs)",
    birthDate: "Tug‘ilgan sana",
    addressTitle: "Ro‘yxatdan o‘tgan manzil",
    addressPlaceholder: "INDEKS, mamlakat, shahar, ko‘cha, uy, xonadon (agar bo‘lsa)",
    addressHelp: "Manzilni bitta qatorda kiriting.",
    persPass: "Pasport seriyasi va raqami, bo‘sh joylarsiz",
  },

  policy: {
    legend: "Hisob-kitob va rasmiylashtirish uchun ma’lumotlar",
    countryFrom: "Avtomobil ro‘yxatdan o‘tgan mamlakat",
    vehicleType: "Transport vositasi turi",
    startDate: "Sug‘urta amal qilishining boshlanish sanasi",
    period: "Sug‘urta muddati",

    vehiclePlate: "Davlat raqami",
    vehicleBrend: "Transport vositasining markasi va modeli",
    vehicleYear: "Transport vositasi ishlab chiqarilgan yil",
    engineType: "Yoqilg‘i turi",
    vehicleEngineCapacity: "Dvigatel hajmi, sm³",
    vehicleVin: "VIN raqami",
    vehiclePower: "Dvigatel quvvati",
    powerUnit: "Quvvat o‘lchov birligi",
    docsLabel: "Texpasport (foto yoki PDF)",
    docsHint: "Bir nechta fayl biriktirish mumkin.",

    addVehicle: "Transport vositasini qo‘shish",
    removeVehicle: "O‘chirish",
    vehicleBlockTitle: "Transport vositasi",
    comment: "Izoh (ixtiyoriy)",

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
    step1: "1-qadam",
    step2: "2-qadam",
    contacts: "Aloqa ma’lumotlari",
    vehicleData: "Avtomobil ma’lumotlari",
    next: "Keyingi",
    back: "Orqaga",
  },
  terms: {
    textBefore: "Men",
    linkText: "polisni rasmiylashtirish shartlari va sug‘urta qoidalarini",
    textAfter: " qabul qilaman.",
  },
  estimate: {
    title: "Ariza bo‘yicha narx:",
    hint: "Narx transport vositasi turi to‘g‘ri tanlangan degan hisob-kitob asosida ko‘rsatilgan. Yakuniy narx barcha ma’lumotlar tekshirilgandan va sug‘urta kompaniyasi bilan kelishilgandan so‘ng, to‘lov ma’lumotlari ko‘rsatilgan xatda yuboriladi.",
  },
};

const ka: LeadFormDictionary = {
  title: "განაცხადი პოლისის შესაძენად",
  intro: "შეავსეთ მონაცემები. ჩვენ მოვამზადებთ პოლისს და გამოგიგზავნით გადახდის რეკვიზიტებს.",

  notSelected: "არ არის არჩეული",
  submit: "განაცხადის გაგზავნა",

  fileForbidden: "დაუშვებელია (არქივი, აუდიო ან ვიდეო).",

  statusSending: "იგზავნება…",
  statusError: "განაცხადის გაგზავნისას მოხდა შეცდომა. სცადეთ მოგვიანებით. (ან სცადეთ ტექპასპორტის სხვა ფაილის მიმაგრება)",
  statusSuccess: "განაცხადი გაგზავნილია. ჩვენ დაგიკავშირდებით.",

  contact: {
    legend: "საკონტაქტო მონაცემები (შეავსეთ ლათინური ასოებით)",
    firstName: "სახელი",
    lastName: "გვარი",
    phone: "ტელეფონი (ქვეყნის კოდით)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "დამზღვევის მონაცემები (ფიზიკური პირი)",
    birthDate: "დაბადების თარიღი",
    addressTitle: "რეგისტრაციის მისამართი",
    addressPlaceholder: "ინდექსი, ქვეყანა, ქალაქი, ქუჩა, სახლი, ბინა (თუ არის)",
    addressHelp: "მიუთითეთ მისამართი ერთ ხაზად.",
    persPass: "პასპორტის სერია და ნომერი, გამოტოვებების გარეშე",
  },

  policy: {
    legend: "მონაცემები გამოთვლისა და გაფორმებისთვის",
    countryFrom: "ავტომობილის რეგისტრაციის ქვეყანა",
    vehicleType: "სატრანსპორტო საშუალების ტიპი",
    startDate: "დაზღვევის მოქმედების დაწყების თარიღი",
    period: "დაზღვევის ვადა",

    vehiclePlate: "სახელმწიფო ნომერი",
    vehicleBrend: "სატრანსპორტო საშუალების მარკა და მოდელი",
    vehicleYear: "სატრანსპორტო საშუალების გამოშვების წელი",
    engineType: "საწვავის ტიპი",
    vehicleEngineCapacity: "ძრავის მოცულობა, სმ³",
    vehicleVin: "VIN ნომერი",
    vehiclePower: "ძრავის სიმძლავრე",
    powerUnit: "სიმძლავრის საზომი ერთეული",
    docsLabel: "ტექპასპორტი (ფოტო ან PDF)",
    docsHint: "შეგიძლიათ რამდენიმე ფაილის მიმაგრება.",

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
    next: "შემდეგი",
    back: "უკან",
  },
  terms: {
    textBefore: "ვეთანხმები",
    linkText: "გაფორმების პირობებსა და დაზღვევის წესებს",
    textAfter: ".",
  },
  estimate: {
    title: "ღირებულება განაცხადის მიხედვით:",
    hint: "ღირებულება მითითებულია იმ დაშვებით, რომ სატრანსპორტო საშუალების ტიპი სწორად არის არჩეული. საბოლოო ღირებულება გამოგეგზავნებათ გადახდის მონაცემებთან ერთად წერილში, ყველა მონაცემის შემოწმებისა და სადაზღვევო კომპანიასთან შეთანხმების შემდეგ.",
  },
};

const kk: LeadFormDictionary = {
  title: "Полис сатып алуға өтінім",
  intro: "Деректерді толтырыңыз. Біз полисті дайындап, төлем реквизиттерін жібереміз.",

  notSelected: "Таңдалмаған",
  submit: "Өтінімді жіберу",

  fileForbidden: "рұқсат етілмейді (архив, аудио немесе видео).",

  statusSending: "Жіберілуде…",
  statusError: "Өтінімді жіберу кезінде қате пайда болды. Кейінірек қайталап көріңіз. (Немесе техпаспорттың басқа файлын тіркеп көріңіз)",
  statusSuccess: "Өтінім жіберілді. Біз сізбен байланысамыз.",

  contact: {
    legend: "Байланыс деректері (латын әріптерімен толтырыңыз)",
    firstName: "Аты",
    lastName: "Тегі",
    phone: "Телефон (ел кодымен)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Сақтанушының деректері (жеке тұлға)",
    birthDate: "Туған күні",
    addressTitle: "Тіркелген мекенжайы",
    addressPlaceholder: "ИНДЕКС, ел, қала, көше, үй, пәтер (бар болса)",
    addressHelp: "Мекенжайды бір жолмен көрсетіңіз.",
    persPass: "Паспорт сериясы мен нөмірі, бос орынсыз",
  },

  policy: {
    legend: "Есептеу және рәсімдеу үшін деректер",
    countryFrom: "Автокөлік тіркелген ел",
    vehicleType: "Көлік құралының түрі",
    startDate: "Сақтандырудың басталу күні",
    period: "Сақтандыру мерзімі",

    vehiclePlate: "Мемлекеттік нөмір",
    vehicleBrend: "Көлік құралының маркасы мен моделі",
    vehicleYear: "Көлік құралының шығарылған жылы",
    engineType: "Жанармай түрі",
    vehicleEngineCapacity: "Қозғалтқыш көлемі, см³",
    vehicleVin: "VIN нөмірі",
    vehiclePower: "Қозғалтқыш қуаты",
    powerUnit: "Қуат өлшем бірлігі",
    docsLabel: "Техпаспорт (фото немесе PDF)",
    docsHint: "Бірнеше файл тіркеуге болады.",

    addVehicle: "Көлік құралын қосу",
    removeVehicle: "Жою",
    vehicleBlockTitle: "Көлік құралы",
    comment: "Пікір (міндетті емес)",

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
        { value: "car", label: "Жеңіл автокөлік" },
        { value: "truck", label: "Жүк автокөлігі" },
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
    vehicleData: "Автокөлік деректері",
    next: "Әрі қарай",
    back: "Артқа",
  },
  terms: {
    textBefore: "Мен",
    linkText: "рәсімдеу шарттары мен сақтандыру қағидаларын",
    textAfter: " қабылдаймын.",
  },
  estimate: {
    title: "Өтінім бойынша құны:",
    hint: "Құны көлік құралының түрі дұрыс таңдалған деген есеппен көрсетілген. Соңғы құн барлық деректер тексеріліп, сақтандыру компаниясымен келісілгеннен кейін төлем деректері көрсетілген хатта беріледі.",
  },
};

const tr: LeadFormDictionary = {
  title: "Poliçe satın alma başvurusu",
  intro: "Bilgileri doldurun. Poliçeyi hazırlayıp ödeme bilgilerini size göndereceğiz.",

  notSelected: "Seçilmedi",
  submit: "Başvuruyu gönder",

  fileForbidden: "izin verilmeyen bir dosya türüdür (arşiv, ses veya video).",

  statusSending: "Gönderiliyor…",
  statusError: "Başvuru gönderilirken hata oluştu. Lütfen daha sonra tekrar deneyin. (Veya araç ruhsatının başka bir dosyasını eklemeyi deneyin)",
  statusSuccess: "Başvuru gönderildi. Sizinle iletişime geçeceğiz.",

  contact: {
    legend: "İletişim bilgileri (Latin harfleriyle doldurun)",
    firstName: "Ad",
    lastName: "Soyad",
    phone: "Telefon (ülke koduyla)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Sigorta ettiren bilgileri (gerçek kişi)",
    birthDate: "Doğum tarihi",
    addressTitle: "Kayıtlı adres",
    addressPlaceholder: "POSTA KODU, ülke, şehir, sokak, bina, daire (varsa)",
    addressHelp: "Adresi tek satır halinde girin.",
    persPass: "Pasaport serisi ve numarası, boşluksuz",
  },

  policy: {
    legend: "Hesaplama ve düzenleme için bilgiler",
    countryFrom: "Aracın kayıtlı olduğu ülke",
    vehicleType: "Araç tipi",
    startDate: "Sigortanın başlangıç tarihi",
    period: "Sigorta süresi",

    vehiclePlate: "Plaka numarası",
    vehicleBrend: "Aracın markası ve modeli",
    vehicleYear: "Aracın üretim yılı",
    engineType: "Yakıt türü",
    vehicleEngineCapacity: "Motor hacmi, cm³",
    vehicleVin: "VIN numarası",
    vehiclePower: "Motor gücü",
    powerUnit: "Güç ölçü birimi",
    docsLabel: "Araç ruhsatı (fotoğraf veya PDF)",
    docsHint: "Birden fazla dosya ekleyebilirsiniz.",

    addVehicle: "Araç ekle",
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
        { value: "car", label: "Binek otomobil" },
        { value: "truck", label: "Kamyon" },
        { value: "bus", label: "Otobüs" },
        { value: "moto", label: "Motosiklet" },
        { value: "trailer", label: "Römork" },
        { value: "special", label: "Özel amaçlı araç" },
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
        { value: "electric", label: "elektrik" },
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
    vehicleData: "Araç bilgileri",
    next: "İleri",
    back: "Geri",
  },
  terms: {
    textBefore: "Kabul ediyorum:",
    linkText: "poliçe düzenleme şartları ve sigorta kuralları",
    textAfter: ".",
  },
  estimate: {
    title: "Başvuruya göre maliyet:",
    hint: "Maliyet, araç tipinin doğru seçildiği varsayımıyla gösterilmiştir. Nihai maliyet, tüm bilgiler kontrol edildikten ve sigorta şirketiyle mutabakat sağlandıktan sonra ödeme bilgilerini içeren e-postada bildirilecektir.",
  },
};

const fa: LeadFormDictionary = {
  title: "درخواست خرید بیمه‌نامه",
  intro: "اطلاعات را تکمیل کنید. ما بیمه‌نامه را آماده کرده و اطلاعات پرداخت را برای شما ارسال می‌کنیم.",

  notSelected: "انتخاب نشده",
  submit: "ارسال درخواست",

  fileForbidden: "مجاز نیست (فایل فشرده، صوتی یا ویدئویی).",

  statusSending: "در حال ارسال…",
  statusError: "در ارسال درخواست خطایی رخ داد. لطفاً بعداً دوباره تلاش کنید. (یا فایل دیگری از کارت خودرو را پیوست کنید)",
  statusSuccess: "درخواست ارسال شد. با شما تماس خواهیم گرفت.",

  contact: {
    legend: "اطلاعات تماس (با حروف لاتین تکمیل شود)",
    firstName: "نام",
    lastName: "نام خانوادگی",
    phone: "تلفن (با کد کشور)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "اطلاعات بیمه‌گذار (شخص حقیقی)",
    birthDate: "تاریخ تولد",
    addressTitle: "آدرس ثبت‌شده",
    addressPlaceholder: "کد پستی، کشور، شهر، خیابان، پلاک، واحد (در صورت وجود)",
    addressHelp: "آدرس را در یک خط وارد کنید.",
    persPass: "سری و شماره گذرنامه بدون فاصله",
  },

  policy: {
    legend: "اطلاعات لازم برای محاسبه و صدور",
    countryFrom: "کشور ثبت خودرو",
    vehicleType: "نوع وسیله نقلیه",
    startDate: "تاریخ شروع اعتبار بیمه",
    period: "مدت بیمه",

    vehiclePlate: "شماره پلاک",
    vehicleBrend: "برند و مدل وسیله نقلیه",
    vehicleYear: "سال ساخت وسیله نقلیه",
    engineType: "نوع سوخت",
    vehicleEngineCapacity: "حجم موتور، cm³",
    vehicleVin: "شماره VIN",
    vehiclePower: "قدرت موتور",
    powerUnit: "واحد اندازه‌گیری قدرت",
    docsLabel: "کارت خودرو (عکس یا PDF)",
    docsHint: "می‌توانید چند فایل پیوست کنید.",

    addVehicle: "افزودن وسیله نقلیه",
    removeVehicle: "حذف",
    vehicleBlockTitle: "وسیله نقلیه",
    comment: "توضیح (اختیاری)",

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
        { value: "truck", label: "خودروی باری" },
        { value: "bus", label: "اتوبوس" },
        { value: "moto", label: "موتورسیکلت" },
        { value: "trailer", label: "تریلر" },
        { value: "special", label: "ماشین‌آلات ویژه" },
      ],
      periods: [
        { value: "30", label: "30 روز" },
        { value: "60", label: "60 روز" },
        { value: "90", label: "90 روز" },
        { value: "180", label: "6 ماه" },
        { value: "365", label: "12 ماه" },
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
    step1: "مرحله 1",
    step2: "مرحله 2",
    contacts: "اطلاعات تماس",
    vehicleData: "اطلاعات خودرو",
    next: "بعدی",
    back: "بازگشت",
  },
  terms: {
    textBefore: "می‌پذیرم",
    linkText: "شرایط صدور بیمه‌نامه و مقررات بیمه",
    textAfter: ".",
  },
  estimate: {
    title: "هزینه بر اساس درخواست:",
    hint: "هزینه با این فرض نمایش داده شده است که نوع وسیله نقلیه به‌درستی انتخاب شده باشد. هزینه نهایی پس از بررسی همه اطلاعات و هماهنگی با شرکت بیمه، در ایمیل حاوی اطلاعات پرداخت اعلام خواهد شد.",
  },
};

const hy: LeadFormDictionary = {
  title: "Ապահովագրական պոլիս գնելու հայտ",
  intro: "Լրացրեք տվյալները։ Մենք կպատրաստենք պոլիսը և կուղարկենք վճարման ռեկվիզիտները։",

  notSelected: "Ընտրված չէ",
  submit: "Ուղարկել հայտը",

  fileForbidden: "թույլատրելի չէ (արխիվ, աուդիո կամ վիդեո ֆայլ).",

  statusSending: "Ուղարկվում է…",
  statusError: "Հայտը ուղարկելիս սխալ է տեղի ունեցել։ Փորձեք ավելի ուշ։ (Կամ փորձեք կցել տեխանձնագրի այլ ֆայլ)",
  statusSuccess: "Հայտն ուղարկվել է։ Մենք կկապվենք ձեզ հետ։",

  contact: {
    legend: "Կոնտակտային տվյալներ (լրացնել լատինատառ)",
    firstName: "Անուն",
    lastName: "Ազգանուն",
    phone: "Հեռախոս (երկրի կոդով)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Ապահովադրի տվյալներ (ֆիզիկական անձ)",
    birthDate: "Ծննդյան ամսաթիվ",
    addressTitle: "Գրանցման հասցե",
    addressPlaceholder: "ՓՈՍՏԱՅԻՆ ԻՆԴԵՔՍ, երկիր, քաղաք, փողոց, տուն, բնակարան (եթե կա)",
    addressHelp: "Նշեք հասցեն մեկ տողով։",
    persPass: "Անձնագրի սերիան և համարը՝ առանց բացատների",
  },

  policy: {
    legend: "Տվյալներ հաշվարկի և ձևակերպման համար",
    countryFrom: "Ավտոմեքենայի գրանցման երկիր",
    vehicleType: "Տրանսպորտային միջոցի տեսակ",
    startDate: "Ապահովագրության գործողության մեկնարկի ամսաթիվ",
    period: "Ապահովագրության ժամկետ",

    vehiclePlate: "Պետհամարանիշ",
    vehicleBrend: "Տրանսպորտային միջոցի մակնիշը և մոդելը",
    vehicleYear: "Տրանսպորտային միջոցի արտադրության տարեթիվ",
    engineType: "Վառելիքի տեսակ",
    vehicleEngineCapacity: "Շարժիչի ծավալը, սմ³",
    vehicleVin: "VIN համար",
    vehiclePower: "Շարժիչի հզորություն",
    powerUnit: "Հզորության չափման միավոր",
    docsLabel: "Տեխանձնագիր (լուսանկար կամ PDF)",
    docsHint: "Կարելի է կցել մի քանի ֆայլ։",

    addVehicle: "Ավելացնել տրանսպորտային միջոց",
    removeVehicle: "Ջնջել",
    vehicleBlockTitle: "Տրանսպորտային միջոց",
    comment: "Մեկնաբանություն (ըստ ցանկության)",

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
        { value: "car", label: "Մարդատար ավտոմեքենա" },
        { value: "truck", label: "Բեռնատար ավտոմեքենա" },
        { value: "bus", label: "Ավտոբուս" },
        { value: "moto", label: "Մոտոցիկլ" },
        { value: "trailer", label: "Կցորդ" },
        { value: "special", label: "Հատուկ տեխնիկա" },
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
        { value: "ph", label: "ձիաուժ" },
        { value: "kw", label: "կիլովատ" },
      ],
    },
  },
    steps: {
    step1: "Քայլ 1",
    step2: "Քայլ 2",
    contacts: "Կոնտակտներ",
    vehicleData: "Ավտոմեքենայի տվյալներ",
    next: "Հաջորդը",
    back: "Հետ",
  },
  terms: {
    textBefore: "Ես ընդունում եմ",
    linkText: "ձևակերպման պայմանները և ապահովագրության կանոնները",
    textAfter: ".",
  },
  estimate: {
    title: "Արժեքը ըստ հայտի՝",
    hint: "Արժեքը նշված է այն հաշվարկով, որ տրանսպորտային միջոցի տեսակը ճիշտ է ընտրված։ Վերջնական արժեքը կտրամադրվի վճարման տվյալներով նամակում՝ բոլոր տվյալների ստուգումից և ապահովագրական ընկերության հետ համաձայնեցումից հետո։",
  },
};

const ckb: LeadFormDictionary = {
  title: "داواکاری بۆ کڕینی پۆلیسە",
  intro: "زانیارییەکان پڕ بکەرەوە. ئێمە پۆلیسەکە ئامادە دەکەین و زانیارییەکانی پارەدان بۆت دەنێرین.",

  notSelected: "هەڵنەبژێردراوە",
  submit: "ناردنی داواکاری",

  fileForbidden: "ڕێگەپێدراو نییە (ئەرشیف، دەنگ یان ڤیدیۆ).",

  statusSending: "دەنێردرێت…",
  statusError: "هەڵەیەک لە کاتی ناردنی داواکارییەکە ڕوویدا. تکایە دواتر هەوڵ بدەرەوە. (یان هەوڵ بدە فایلێکی تری تێکپاسپۆرتی ئۆتۆمبێل هاوپێچ بکەیت)",
  statusSuccess: "داواکارییەکە نێردرا. پەیوەندیت پێوە دەکەین.",

  contact: {
    legend: "زانیارییەکانی پەیوەندی (بە پیتی لاتینی پڕ بکرێتەوە)",
    firstName: "ناو",
    lastName: "ناوی بنەماڵە",
    phone: "تەلەفۆن (لەگەڵ کۆدی وڵات)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "زانیارییەکانی بیمەکراو / خاوەنی پۆلیسە (کەسی سروشتی)",
    birthDate: "بەرواری لەدایکبوون",
    addressTitle: "ناونیشانی تۆمارکراو",
    addressPlaceholder: "کۆدی پۆستە، وڵات، شار، شەقام، خانوو، شوقە (ئەگەر هەبێت)",
    addressHelp: "ناونیشانەکە لە یەک دێڕدا بنووسە.",
    persPass: "زنجیرە و ژمارەی پاسپۆرت بەبێ بۆشایی",
  },

  policy: {
    legend: "زانیاری بۆ حسابکردن و دەرکردنی پۆلیسە",
    countryFrom: "وڵاتی تۆمارکردنی ئۆتۆمبێل",
    vehicleType: "جۆری ئامرازی گواستنەوە",
    startDate: "بەرواری دەستپێکردنی کاریگەری بیمە",
    period: "ماوەی بیمە",

    vehiclePlate: "ژمارەی تابلۆ",
    vehicleBrend: "مارکە و مۆدێلی ئامرازی گواستنەوە",
    vehicleYear: "ساڵی دروستکردنی ئامرازی گواستنەوە",
    engineType: "جۆری سووتەمەنی",
    vehicleEngineCapacity: "قەبارەی بزوێنەر، cm³",
    vehicleVin: "ژمارەی VIN",
    vehiclePower: "هێزی بزوێنەر",
    powerUnit: "یەکەی پێوانەکردنی هێز",
    docsLabel: "تێکپاسپۆرت (وێنە یان PDF)",
    docsHint: "دەتوانیت چەند فایلێک هاوپێچ بکەیت.",

    addVehicle: "زیادکردنی ئامرازی گواستنەوە",
    removeVehicle: "سڕینەوە",
    vehicleBlockTitle: "ئامرازی گواستنەوە",
    comment: "تێبینی (ئارەزوومەندانە)",

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
        { value: "truck", label: "ئۆتۆمبێلی بار" },
        { value: "bus", label: "پاس" },
        { value: "moto", label: "ماتۆرسکیل" },
        { value: "trailer", label: "دوایەک / ترێلەر" },
        { value: "special", label: "ئامێری تایبەت" },
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
        { value: "electric", label: "کارەبایی" },
        { value: "Hybrid", label: "هایبرێد" },
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
    contacts: "پەیوەندییەکان",
    vehicleData: "زانیارییەکانی ئۆتۆمبێل",
    next: "دواتر",
    back: "گەڕانەوە",
  },
  terms: {
    textBefore: "من قبووڵ دەکەم",
    linkText: "مەرجەکانی دەرکردنی پۆلیسە و یاساکانی بیمە",
    textAfter: ".",
  },
  estimate: {
    title: "تێچوو بەپێی داواکاری:",
    hint: "تێچووەکە بەو گریمانەیە پیشان دراوە کە جۆری ئامرازی گواستنەوە بە دروستی هەڵبژێردراوە. تێچووی کۆتایی لە نامەیەکدا لەگەڵ زانیارییەکانی پارەدان دەدرێت، دوای پشکنینی هەموو زانیارییەکان و ڕێککەوتن لەگەڵ کۆمپانیای بیمە.",
  },
};

const kmr: LeadFormDictionary = {
  title: "Daxwaza kirîna polîçeyê",
  intro: "Agahiyan dagirin. Em ê polîçeyê amade bikin û agahiyên dayînê ji we re bişînin.",

  notSelected: "Nehatiye hilbijartin",
  submit: "Daxwazê bişîne",

  fileForbidden: "destûr nayê dayîn (arşîv, deng an vîdeo).",

  statusSending: "Tê şandin…",
  statusError: "Di şandina daxwazê de çewtî çêbû. Ji kerema xwe paşê dîsa biceribînin. (An jî hewl bidin pelê din ê belgeya qeyda wesayîtê lê zêde bikin)",
  statusSuccess: "Daxwaz hate şandin. Em ê bi we re têkilî daynin.",

  contact: {
    legend: "Agahiyên têkiliyê (bi tîpên latînî dagirin)",
    firstName: "Nav",
    lastName: "Paşnav",
    phone: "Telefon (bi koda welatê re)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Agahiyên xwediyê sîgorteyê (kesê fizîkî)",
    birthDate: "Dîroka jidayikbûnê",
    addressTitle: "Navnîşana qeydkirî",
    addressPlaceholder: "KODA POSTEYÊ, welat, bajar, kolan, xanî, apartman (heke hebe)",
    addressHelp: "Navnîşanê di yek rêzê de binivîsin.",
    persPass: "Rêz û hejmara pasaportê bê valahî",
  },

  policy: {
    legend: "Agahî ji bo hesabkirinê û derxistina polîçeyê",
    countryFrom: "Welatê qeydkirina wesayîtê",
    vehicleType: "Cureyê wesayîtê",
    startDate: "Dîroka destpêka derbasbûna sîgorteyê",
    period: "Maweya sîgorteyê",

    vehiclePlate: "Hejmara qeydê",
    vehicleBrend: "Marka û modela wesayîtê",
    vehicleYear: "Sala çêkirina wesayîtê",
    engineType: "Cureyê sotemeniyê",
    vehicleEngineCapacity: "Mezinahiya motorê, cm³",
    vehicleVin: "Hejmara VIN",
    vehiclePower: "Hêza motorê",
    powerUnit: "Yekeya pîvandina hêzê",
    docsLabel: "Belgeya qeyda wesayîtê (wêne an PDF)",
    docsHint: "Hûn dikarin çend pelan lê zêde bikin.",

    addVehicle: "Wesayît zêde bike",
    removeVehicle: "Jê bibe",
    vehicleBlockTitle: "Wesayît",
    comment: "Şîrove (ne mecbûrî)",

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
        { value: "car", label: "Otomobîla sivik" },
        { value: "truck", label: "Kamyon" },
        { value: "bus", label: "Otobûs" },
        { value: "moto", label: "Motorsîklet" },
        { value: "trailer", label: "Treyler" },
        { value: "special", label: "Teknîka taybet" },
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
    vehicleData: "Agahiyên wesayîtê",
    next: "Pêş",
    back: "Paş",
  },
  terms: {
    textBefore: "Ez dipejirînim",
    linkText: "mercên derxistina polîçeyê û rêgezên sîgorteyê",
    textAfter: ".",
  },
  estimate: {
    title: "Nirx li gorî daxwazê:",
    hint: "Nirx bi vê texmînê hatiye nîşandan ku cureyê wesayîtê rast hatiye hilbijartin. Nirxa dawî piştî kontrolkirina hemû agahiyan û lihevhatina bi şirketa sîgorteyê re, di nameya ku agahiyên dayînê tê de ne de dê bê dayîn.",
  },
};

const ar: LeadFormDictionary = {
  title: "طلب شراء وثيقة التأمين",
  intro: "يرجى تعبئة البيانات. سنقوم بإعداد الوثيقة وإرسال بيانات الدفع إليك.",

  notSelected: "لم يتم الاختيار",
  submit: "إرسال الطلب",

  fileForbidden: "غير مسموح به (أرشيف أو ملف صوتي أو فيديو).",

  statusSending: "جارٍ الإرسال…",
  statusError: "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة لاحقًا. (أو جرّب إرفاق ملف آخر لرخصة المركبة)",
  statusSuccess: "تم إرسال الطلب. سنتواصل معك.",

  contact: {
    legend: "بيانات الاتصال (تُملأ بالأحرف اللاتينية)",
    firstName: "الاسم",
    lastName: "اسم العائلة",
    phone: "الهاتف (مع رمز الدولة)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "بيانات طالب التأمين (شخص طبيعي)",
    birthDate: "تاريخ الميلاد",
    addressTitle: "عنوان التسجيل",
    addressPlaceholder: "الرمز البريدي، الدولة، المدينة، الشارع، رقم المنزل، الشقة (إن وجدت)",
    addressHelp: "يرجى إدخال العنوان في سطر واحد.",
    persPass: "سلسلة ورقم جواز السفر دون مسافات",
  },

  policy: {
    legend: "البيانات اللازمة للحساب والإصدار",
    countryFrom: "دولة تسجيل المركبة",
    vehicleType: "نوع المركبة",
    startDate: "تاريخ بدء سريان التأمين",
    period: "مدة التأمين",

    vehiclePlate: "رقم التسجيل",
    vehicleBrend: "ماركة المركبة وطرازها",
    vehicleYear: "سنة صنع المركبة",
    engineType: "نوع الوقود",
    vehicleEngineCapacity: "سعة المحرك، cm³",
    vehicleVin: "رقم VIN",
    vehiclePower: "قدرة المحرك",
    powerUnit: "وحدة قياس القدرة",
    docsLabel: "رخصة المركبة (صورة أو PDF)",
    docsHint: "يمكن إرفاق عدة ملفات.",

    addVehicle: "إضافة مركبة",
    removeVehicle: "حذف",
    vehicleBlockTitle: "المركبة",
    comment: "تعليق (اختياري)",

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
        { value: "special", label: "معدة خاصة" },
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
        { value: "ph", label: "حصان ميكانيكي" },
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
    back: "رجوع",
  },
  terms: {
    textBefore: "أوافق على",
    linkText: "شروط إصدار الوثيقة وقواعد التأمين",
    textAfter: ".",
  },
  estimate: {
    title: "التكلفة حسب الطلب:",
    hint: "تم عرض التكلفة على أساس أن نوع المركبة قد تم اختياره بشكل صحيح. سيتم إرسال التكلفة النهائية في رسالة تحتوي على بيانات الدفع بعد التحقق من جميع البيانات والتنسيق مع شركة التأمين.",
  },
};

const uk: LeadFormDictionary = {
  title: "Заявка на купівлю поліса",
  intro: "Заповніть дані. Ми підготуємо поліс і надішлемо реквізити для оплати.",

  notSelected: "Не вибрано",
  submit: "Надіслати заявку",

  fileForbidden: "недопустимий (архів, аудіо або відео).",

  statusSending: "Надсилання…",
  statusError: "Помилка під час надсилання заявки. Спробуйте пізніше. (Або спробуйте прикріпити інший файл техпаспорта)",
  statusSuccess: "Заявку надіслано. Ми зв’яжемося з вами.",

  contact: {
    legend: "Контактні дані (заповнювати латинськими літерами)",
    firstName: "Ім’я",
    lastName: "Прізвище",
    phone: "Телефон (з кодом країни)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Дані страхувальника (фізична особа)",
    birthDate: "Дата народження",
    addressTitle: "Адреса реєстрації",
    addressPlaceholder: "ІНДЕКС, країна, місто, вулиця, будинок, квартира (якщо є)",
    addressHelp: "Вкажіть адресу одним рядком.",
    persPass: "Серія та номер паспорта без пробілів",
  },

  policy: {
    legend: "Дані для розрахунку та оформлення",
    countryFrom: "Країна реєстрації авто",
    vehicleType: "Тип ТЗ",
    startDate: "Дата початку дії страховки",
    period: "Строк страхування",

    vehiclePlate: "Держномер",
    vehicleBrend: "Марка і модель ТЗ",
    vehicleYear: "Рік випуску ТЗ",
    engineType: "Тип пального",
    vehicleEngineCapacity: "Об’єм двигуна, см³",
    vehicleVin: "VIN номер",
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
        { value: "car", label: "Легкове авто" },
        { value: "truck", label: "Вантажне авто" },
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
    vehicleData: "Дані авто",
    next: "Далі",
    back: "Назад",
  },
  terms: {
    textBefore: "Я приймаю",
    linkText: "умови оформлення та правила страхування",
    textAfter: ".",
  },
  estimate: {
    title: "Вартість за заявкою:",
    hint: "Вартість зазначена з розрахунку, що тип транспортного засобу вибрано правильно. Остаточна вартість буде надана в листі з даними для оплати після перевірки всіх даних і погодження зі страховою компанією.",
  },
};

const he: LeadFormDictionary = {
  title: "בקשה לרכישת פוליסת ביטוח",
  intro: "מלאו את הפרטים. נכין את הפוליסה ונשלח אליכם את פרטי התשלום.",

  notSelected: "לא נבחר",
  submit: "שליחת הבקשה",

  fileForbidden: "אינו מותר (ארכיון, קובץ שמע או וידאו).",

  statusSending: "שולח…",
  statusError: "אירעה שגיאה בעת שליחת הבקשה. נסו שוב מאוחר יותר. (או נסו לצרף קובץ אחר של רישיון הרכב)",
  statusSuccess: "הבקשה נשלחה. ניצור איתכם קשר.",

  contact: {
    legend: "פרטי קשר (יש למלא באותיות לטיניות)",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    phone: "טלפון (כולל קידומת מדינה)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "פרטי בעל הפוליסה (אדם פרטי)",
    birthDate: "תאריך לידה",
    addressTitle: "כתובת רשומה",
    addressPlaceholder: "מיקוד, מדינה, עיר, רחוב, מספר בית, דירה (אם יש)",
    addressHelp: "יש להזין את הכתובת בשורה אחת.",
    persPass: "סדרה ומספר דרכון ללא רווחים",
  },

  policy: {
    legend: "נתונים לחישוב ולהנפקה",
    countryFrom: "מדינת רישום הרכב",
    vehicleType: "סוג הרכב",
    startDate: "תאריך תחילת תוקף הביטוח",
    period: "תקופת הביטוח",

    vehiclePlate: "מספר רישוי",
    vehicleBrend: "יצרן ודגם הרכב",
    vehicleYear: "שנת ייצור הרכב",
    engineType: "סוג דלק",
    vehicleEngineCapacity: "נפח מנוע, cm³",
    vehicleVin: "מספר VIN",
    vehiclePower: "הספק מנוע",
    powerUnit: "יחידת מדידת הספק",
    docsLabel: "רישיון רכב (תמונה או PDF)",
    docsHint: "ניתן לצרף מספר קבצים.",

    addVehicle: "הוספת רכב",
    removeVehicle: "מחיקה",
    vehicleBlockTitle: "רכב",
    comment: "הערה (אופציונלי)",

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
        { value: "car", label: "רכב פרטי" },
        { value: "truck", label: "משאית" },
        { value: "bus", label: "אוטובוס" },
        { value: "moto", label: "אופנוע" },
        { value: "trailer", label: "נגרר" },
        { value: "special", label: "ציוד מיוחד" },
      ],
      periods: [
        { value: "30", label: "30 יום" },
        { value: "60", label: "60 יום" },
        { value: "90", label: "90 יום" },
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
    textBefore: "אני מקבל/ת את",
    linkText: "תנאי ההנפקה וכללי הביטוח",
    textAfter: ".",
  },
  estimate: {
    title: "עלות לפי הבקשה:",
    hint: "העלות מוצגת בהנחה שסוג הרכב נבחר נכון. העלות הסופית תימסר בהודעה עם פרטי התשלום לאחר בדיקת כל הנתונים ואישורם מול חברת הביטוח.",
  },
};

const az: LeadFormDictionary = {
  title: "Polis almaq üçün müraciət",
  intro: "Məlumatları doldurun. Biz polisi hazırlayacaq və ödəniş rekvizitlərini sizə göndərəcəyik.",

  notSelected: "Seçilməyib",
  submit: "Müraciəti göndər",

  fileForbidden: "icazə verilmir (arxiv, audio və ya video fayl).",

  statusSending: "Göndərilir…",
  statusError: "Müraciət göndərilərkən xəta baş verdi. Zəhmət olmasa, daha sonra yenidən cəhd edin. (Və ya texniki pasportun başqa faylını əlavə etməyə çalışın)",
  statusSuccess: "Müraciət göndərildi. Biz sizinlə əlaqə saxlayacağıq.",

  contact: {
    legend: "Əlaqə məlumatları (latın hərfləri ilə doldurun)",
    firstName: "Ad",
    lastName: "Soyad",
    phone: "Telefon (ölkə kodu ilə)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Sığorta etdirənin məlumatları (fiziki şəxs)",
    birthDate: "Doğum tarixi",
    addressTitle: "Qeydiyyat ünvanı",
    addressPlaceholder: "POÇT İNDEKSİ, ölkə, şəhər, küçə, ev, mənzil (əgər varsa)",
    addressHelp: "Ünvanı bir sətirdə göstərin.",
    persPass: "Pasportun seriyası və nömrəsi, boşluqsuz",
  },

  policy: {
    legend: "Hesablama və rəsmiləşdirmə üçün məlumatlar",
    countryFrom: "Avtomobilin qeydiyyatda olduğu ölkə",
    vehicleType: "Nəqliyyat vasitəsinin növü",
    startDate: "Sığortanın qüvvəyə minmə tarixi",
    period: "Sığorta müddəti",

    vehiclePlate: "Dövlət qeydiyyat nişanı",
    vehicleBrend: "Nəqliyyat vasitəsinin markası və modeli",
    vehicleYear: "Nəqliyyat vasitəsinin istehsal ili",
    engineType: "Yanacaq növü",
    vehicleEngineCapacity: "Mühərrikin həcmi, sm³",
    vehicleVin: "VIN nömrəsi",
    vehiclePower: "Mühərrikin gücü",
    powerUnit: "Gücün ölçü vahidi",
    docsLabel: "Texniki pasport (foto və ya PDF)",
    docsHint: "Bir neçə fayl əlavə etmək mümkündür.",

    addVehicle: "Nəqliyyat vasitəsi əlavə et",
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
        { value: "OTHER", label: "Other" },
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
    vehicleData: "Avtomobil məlumatları",
    next: "İrəli",
    back: "Geri",
  },
  terms: {
    textBefore: "Mən",
    linkText: "rəsmiləşdirmə şərtlərini və sığorta qaydalarını",
    textAfter: " qəbul edirəm.",
  },
  estimate: {
    title: "Müraciət üzrə qiymət:",
    hint: "Qiymət nəqliyyat vasitəsinin növünün düzgün seçildiyi hesabı ilə göstərilib. Yekun qiymət bütün məlumatlar yoxlanıldıqdan və sığorta şirkəti ilə razılaşdırıldıqdan sonra ödəniş məlumatları olan məktubda təqdim ediləcək.",
  },
};

const ro: LeadFormDictionary = {
  title: "Cerere pentru achiziționarea poliței",
  intro: "Completați datele. Vom pregăti polița și vă vom trimite detaliile pentru plată.",

  notSelected: "Nu este selectat",
  submit: "Trimite cererea",

  fileForbidden: "nu este permis (arhivă, fișier audio sau video).",

  statusSending: "Se trimite…",
  statusError: "A apărut o eroare la trimiterea cererii. Încercați din nou mai târziu. (Sau încercați să atașați un alt fișier al certificatului de înmatriculare)",
  statusSuccess: "Cererea a fost trimisă. Vă vom contacta.",

  contact: {
    legend: "Date de contact (se completează cu litere latine)",
    firstName: "Prenume",
    lastName: "Nume",
    phone: "Telefon (cu codul țării)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Datele contractantului asigurării (persoană fizică)",
    birthDate: "Data nașterii",
    addressTitle: "Adresa de înregistrare",
    addressPlaceholder: "COD POȘTAL, țară, oraș, stradă, număr, apartament (dacă există)",
    addressHelp: "Introduceți adresa pe un singur rând.",
    persPass: "Seria și numărul pașaportului fără spații",
  },

  policy: {
    legend: "Date pentru calcul și emitere",
    countryFrom: "Țara de înmatriculare a vehiculului",
    vehicleType: "Tipul vehiculului",
    startDate: "Data de începere a asigurării",
    period: "Perioada de asigurare",

    vehiclePlate: "Număr de înmatriculare",
    vehicleBrend: "Marca și modelul vehiculului",
    vehicleYear: "Anul de fabricație al vehiculului",
    engineType: "Tipul combustibilului",
    vehicleEngineCapacity: "Capacitatea cilindrică, cm³",
    vehicleVin: "Număr VIN",
    vehiclePower: "Puterea motorului",
    powerUnit: "Unitatea de măsură a puterii",
    docsLabel: "Certificat de înmatriculare (foto sau PDF)",
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
        { value: "truck", label: "Autocamion" },
        { value: "bus", label: "Autobuz" },
        { value: "moto", label: "Motocicletă" },
        { value: "trailer", label: "Remorcă" },
        { value: "special", label: "Utilaj special" },
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
        { value: "diesel", label: "diesel" },
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
    contacts: "Contacte",
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
    title: "Cost conform cererii:",
    hint: "Costul este indicat presupunând că tipul vehiculului a fost selectat corect. Costul final va fi transmis în e-mailul cu datele de plată, după verificarea tuturor datelor și confirmarea cu societatea de asigurare.",
  },
};

const sr: LeadFormDictionary = {
  title: "Zahtev za kupovinu polise",
  intro: "Popunite podatke. Pripremićemo polisu i poslati vam podatke za plaćanje.",

  notSelected: "Nije izabrano",
  submit: "Pošalji zahtev",

  fileForbidden: "nije dozvoljen (arhiva, audio ili video fajl).",

  statusSending: "Slanje…",
  statusError: "Došlo je do greške prilikom slanja zahteva. Pokušajte kasnije. (Ili pokušajte da priložite drugi fajl saobraćajne dozvole)",
  statusSuccess: "Zahtev je poslat. Kontaktiraćemo vas.",

  contact: {
    legend: "Kontakt podaci (popunjava se latinicom)",
    firstName: "Ime",
    lastName: "Prezime",
    phone: "Telefon (sa pozivnim brojem zemlje)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Podaci ugovarača osiguranja (fizičko lice)",
    birthDate: "Datum rođenja",
    addressTitle: "Adresa registracije",
    addressPlaceholder: "POŠTANSKI BROJ, zemlja, grad, ulica, broj kuće, stan (ako postoji)",
    addressHelp: "Unesite adresu u jednom redu.",
    persPass: "Serija i broj pasoša bez razmaka",
  },

  policy: {
    legend: "Podaci za obračun i izdavanje",
    countryFrom: "Zemlja registracije vozila",
    vehicleType: "Tip vozila",
    startDate: "Datum početka važenja osiguranja",
    period: "Period osiguranja",

    vehiclePlate: "Registarska oznaka",
    vehicleBrend: "Marka i model vozila",
    vehicleYear: "Godina proizvodnje vozila",
    engineType: "Vrsta goriva",
    vehicleEngineCapacity: "Zapremina motora, cm³",
    vehicleVin: "VIN broj",
    vehiclePower: "Snaga motora",
    powerUnit: "Jedinica mere snage",
    docsLabel: "Saobraćajna dozvola (fotografija ili PDF)",
    docsHint: "Možete priložiti više fajlova.",

    addVehicle: "Dodaj vozilo",
    removeVehicle: "Obriši",
    vehicleBlockTitle: "Vozilo",
    comment: "Komentar (opciono)",

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
        { value: "car", label: "Putnički automobil" },
        { value: "truck", label: "Teretno vozilo" },
        { value: "bus", label: "Autobus" },
        { value: "moto", label: "Motocikl" },
        { value: "trailer", label: "Prikolica" },
        { value: "special", label: "Specijalna mehanizacija" },
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
    contacts: "Kontakt podaci",
    vehicleData: "Podaci o vozilu",
    next: "Dalje",
    back: "Nazad",
  },
  terms: {
    textBefore: "Prihvatam",
    linkText: "uslove izdavanja i pravila osiguranja",
    textAfter: ".",
  },
  estimate: {
    title: "Cena prema zahtevu:",
    hint: "Cena je prikazana pod pretpostavkom da je tip vozila pravilno izabran. Konačna cena biće dostavljena u e-mailu sa podacima za plaćanje nakon provere svih podataka i usaglašavanja sa osiguravajućom kompanijom.",
  },
};

const sq: LeadFormDictionary = {
  title: "Kërkesë për blerjen e policës",
  intro: "Plotësoni të dhënat. Ne do ta përgatisim policën dhe do t’ju dërgojmë të dhënat për pagesë.",

  notSelected: "Nuk është zgjedhur",
  submit: "Dërgo kërkesën",

  fileForbidden: "nuk lejohet (arkiv, audio ose video).",

  statusSending: "Duke u dërguar…",
  statusError: "Ndodhi një gabim gjatë dërgimit të kërkesës. Provoni përsëri më vonë. (Ose provoni të bashkëngjitni një skedar tjetër të lejes së qarkullimit)",
  statusSuccess: "Kërkesa u dërgua. Ne do t’ju kontaktojmë.",

  contact: {
    legend: "Të dhënat e kontaktit (plotësohen me shkronja latine)",
    firstName: "Emri",
    lastName: "Mbiemri",
    phone: "Telefoni (me kodin e shtetit)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Të dhënat e kontraktuesit të sigurimit (person fizik)",
    birthDate: "Data e lindjes",
    addressTitle: "Adresa e regjistrimit",
    addressPlaceholder: "KODI POSTAR, shteti, qyteti, rruga, shtëpia, banesa (nëse ka)",
    addressHelp: "Shënoni adresën në një rresht.",
    persPass: "Seria dhe numri i pasaportës pa hapësira",
  },

  policy: {
    legend: "Të dhënat për llogaritje dhe lëshim",
    countryFrom: "Shteti i regjistrimit të automjetit",
    vehicleType: "Lloji i automjetit",
    startDate: "Data e fillimit të sigurimit",
    period: "Periudha e sigurimit",

    vehiclePlate: "Targa",
    vehicleBrend: "Marka dhe modeli i automjetit",
    vehicleYear: "Viti i prodhimit të automjetit",
    engineType: "Lloji i karburantit",
    vehicleEngineCapacity: "Vëllimi i motorit, cm³",
    vehicleVin: "Numri VIN",
    vehiclePower: "Fuqia e motorit",
    powerUnit: "Njësia matëse e fuqisë",
    docsLabel: "Leja e qarkullimit (foto ose PDF)",
    docsHint: "Mund të bashkëngjitni disa skedarë.",

    addVehicle: "Shto automjet",
    removeVehicle: "Fshij",
    vehicleBlockTitle: "Automjeti",
    comment: "Koment (opsional)",

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
        { value: "car", label: "Vetura" },
        { value: "truck", label: "Kamion" },
        { value: "bus", label: "Autobus" },
        { value: "moto", label: "Motoçikletë" },
        { value: "trailer", label: "Rimorkio" },
        { value: "special", label: "Makineri speciale" },
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
        { value: "diesel", label: "dizel" },
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
    linkText: "kushtet e lëshimit dhe rregullat e sigurimit",
    textAfter: ".",
  },
  estimate: {
    title: "Kostoja sipas kërkesës:",
    hint: "Kostoja është dhënë duke supozuar se lloji i automjetit është zgjedhur saktë. Kostoja përfundimtare do të jepet në e-mailin me të dhënat për pagesë, pas kontrollimit të të gjitha të dhënave dhe konfirmimit me kompaninë e sigurimit.",
  },
};

const mn: LeadFormDictionary = {
  title: "Даатгалын полис худалдан авах хүсэлт",
  intro: "Мэдээллээ бөглөнө үү. Бид полисыг бэлтгээд төлбөрийн реквизитийг танд илгээнэ.",

  notSelected: "Сонгоогүй",
  submit: "Хүсэлт илгээх",

  fileForbidden: "зөвшөөрөгдөхгүй (архив, аудио эсвэл видео файл).",

  statusSending: "Илгээж байна…",
  statusError: "Хүсэлт илгээх үед алдаа гарлаа. Дараа дахин оролдоно уу. (Эсвэл тээврийн хэрэгслийн гэрчилгээний өөр файл хавсаргаж үзнэ үү)",
  statusSuccess: "Хүсэлт илгээгдлээ. Бид тантай холбогдоно.",

  contact: {
    legend: "Холбоо барих мэдээлэл (латин үсгээр бөглөнө)",
    firstName: "Нэр",
    lastName: "Овог",
    phone: "Утас (улсын кодтой)",
    email: "E-mail",
  },

  policyholder: {
    individualTitle: "Даатгуулагчийн мэдээлэл (хувь хүн)",
    birthDate: "Төрсөн огноо",
    addressTitle: "Бүртгэлтэй хаяг",
    addressPlaceholder: "ШУУДАНГИЙН КОД, улс, хот, гудамж, байр/байшин, тоот (байгаа бол)",
    addressHelp: "Хаягаа нэг мөрөнд бичнэ үү.",
    persPass: "Паспортын сери ба дугаар, зайгүй",
  },

  policy: {
    legend: "Тооцоолол болон бүрдүүлэлтэд шаардлагатай мэдээлэл",
    countryFrom: "Автомашин бүртгэгдсэн улс",
    vehicleType: "Тээврийн хэрэгслийн төрөл",
    startDate: "Даатгал эхлэх огноо",
    period: "Даатгалын хугацаа",

    vehiclePlate: "Улсын дугаар",
    vehicleBrend: "Тээврийн хэрэгслийн марк ба модель",
    vehicleYear: "Тээврийн хэрэгслийн үйлдвэрлэсэн он",
    engineType: "Түлшний төрөл",
    vehicleEngineCapacity: "Хөдөлгүүрийн багтаамж, см³",
    vehicleVin: "VIN дугаар",
    vehiclePower: "Хөдөлгүүрийн хүчин чадал",
    powerUnit: "Хүчин чадлын хэмжих нэгж",
    docsLabel: "Тээврийн хэрэгслийн гэрчилгээ (зураг эсвэл PDF)",
    docsHint: "Хэд хэдэн файл хавсаргаж болно.",

    addVehicle: "Тээврийн хэрэгсэл нэмэх",
    removeVehicle: "Устгах",
    vehicleBlockTitle: "Тээврийн хэрэгсэл",
    comment: "Тайлбар (заавал биш)",

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
        { value: "car", label: "Суудлын автомашин" },
        { value: "truck", label: "Ачааны автомашин" },
        { value: "bus", label: "Автобус" },
        { value: "moto", label: "Мотоцикл" },
        { value: "trailer", label: "Чиргүүл" },
        { value: "special", label: "Тусгай техник" },
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
        { value: "Hybrid", label: "хайбрид" },
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
    vehicleData: "Автомашины мэдээлэл",
    next: "Дараах",
    back: "Буцах",
  },
  terms: {
    textBefore: "Би",
    linkText: "полис оформлох нөхцөл болон даатгалын дүрмийг",
    textAfter: " зөвшөөрч байна.",
  },
  estimate: {
    title: "Хүсэлтийн дагуух үнэ:",
    hint: "Үнийг тээврийн хэрэгслийн төрлийг зөв сонгосон гэсэн тооцоонд үндэслэн харуулсан. Эцсийн үнийг бүх мэдээллийг шалгаж, даатгалын компанитай зөвшилцсөний дараа төлбөрийн мэдээлэл бүхий имэйлээр илгээнэ.",
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