import type { Lang } from "@/app/dictionaries/header";

export type CookieCategoryKey = "necessary" | "functional" | "marketing";

export type CookieCategory = {
  key: CookieCategoryKey;
  title: string;
  description: string;
  locked?: boolean;
};

export type CookieDictionary = {
  manageBtn: string;
  modalTitle: string;
  modalText: string;
  categoriesTitle: string;
  categories: CookieCategory[];
  policyText: string;
  policyLabel: string;
  policyHref: string;
  saveBtn: string;
  acceptAllBtn: string;
  rejectAllBtn: string;
  closeAria: string;
};

const RU: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Настройки cookie",
  modalText: "Выберите, какие cookie можно использовать. Необходимые — всегда включены.",
  categoriesTitle: "Категории",
  categories: [
    { key: "necessary", title: "Необходимые", description: "Нужны для работы сайта и безопасности. Отключить нельзя.", locked: true },
    { key: "functional", title: "Функциональные", description: "Запоминают настройки интерфейса и помогают корректной работе отдельных функций." },
    { key: "marketing", title: "Аналитические", description: "Помогают через анонимную статистику улучшать удобство использования сайта, совершенствовать продукты и услуги." },
  ],
  policyText: "Подробнее — в",
  policyLabel: "политике cookie",
  policyHref: "/cookiepolicy",
  saveBtn: "Сохранить",
  acceptAllBtn: "Принять все",
  rejectAllBtn: "Отклонить необязательные",
  closeAria: "Закрыть",
};

const PL: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Ustawienia plików cookie",
  modalText:
    "Wybierz, które pliki cookie mogą być używane. Niezbędne pliki cookie są zawsze aktywne.",
  categoriesTitle: "Kategorie",
  categories: [
    {
      key: "necessary",
      title: "Niezbędne",
      description:
        "Są wymagane do prawidłowego działania strony oraz zapewnienia bezpieczeństwa. Nie można ich wyłączyć.",
      locked: true,
    },
    {
      key: "functional",
      title: "Funkcjonalne",
      description:
        "Zapamiętują ustawienia interfejsu i wspierają prawidłowe działanie wybranych funkcji.",
    },
    {
      key: "marketing",
      title: "Analityczne",
      description:
        "Pomagają ulepszać wygodę korzystania ze strony oraz rozwijać produkty i usługi na podstawie anonimowych danych statystycznych.",
    },
  ],
  policyText: "Więcej informacji znajduje się w",
  policyLabel: "polityce cookie",
  policyHref: "/cookiepolicy",
  saveBtn: "Zapisz",
  acceptAllBtn: "Akceptuj wszystkie",
  rejectAllBtn: "Odrzuć opcjonalne",
  closeAria: "Zamknij",
};

const EN: CookieDictionary = {
  manageBtn: "Cookies",
  modalTitle: "Cookie Settings",
  modalText:
    "Select which cookies may be used. Necessary cookies are always enabled.",
  categoriesTitle: "Categories",
  categories: [
    {
      key: "necessary",
      title: "Necessary",
      description:
        "Required for website functionality and security. These cookies cannot be disabled.",
      locked: true,
    },
    {
      key: "functional",
      title: "Functional",
      description:
        "Remember interface preferences and support the proper operation of certain website features.",
    },
    {
      key: "marketing",
      title: "Analytics",
      description:
        "Help improve website usability, products, and services through anonymous statistical analysis.",
    },
  ],
  policyText: "For more information, see the",
  policyLabel: "Cookie Policy",
  policyHref: "/cookiepolicy",
  saveBtn: "Save",
  acceptAllBtn: "Accept All",
  rejectAllBtn: "Reject Optional Cookies",
  closeAria: "Close",
};

const BE: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Налады cookie",
  modalText:
    "Выберыце, якія cookie-файлы можна выкарыстоўваць. Неабходныя — заўсёды ўключаныя.",
  categoriesTitle: "Катэгорыі",
  categories: [
    {
      key: "necessary",
      title: "Неабходныя",
      description:
        "Патрэбныя для працы сайта і забеспячэння бяспекі. Адключыць немагчыма.",
      locked: true,
    },
    {
      key: "functional",
      title: "Функцыянальныя",
      description:
        "Запамінаюць налады інтэрфейсу і дапамагаюць карэктнай працы асобных функцый.",
    },
    {
      key: "marketing",
      title: "Аналітычныя",
      description:
        "Дапамагаюць праз ананімную статыстыку паляпшаць зручнасць выкарыстання сайта, удасканальваць прадукты і паслугі.",
    },
  ],
  policyText: "Падрабязней — у",
  policyLabel: "палітыцы cookie",
  policyHref: "/cookiepolicy",
  saveBtn: "Захаваць",
  acceptAllBtn: "Прыняць усе",
  rejectAllBtn: "Адхіліць неабавязковыя",
  closeAria: "Закрыць",
};

const UZ: CookieDictionary = {
  manageBtn: "Cookie",

  modalTitle: "Cookie sozlamalari",

  modalText:
    "Qaysi cookie-fayllardan foydalanishga ruxsat berilishini tanlang. Zarur cookie-fayllar har doim yoqilgan bo‘ladi.",

  categoriesTitle: "Kategoriyalar",

  categories: [
    {
      key: "necessary",
      title: "Zarur",
      description:
        "Saytning ishlashi va xavfsizligi uchun kerak. O‘chirib bo‘lmaydi.",
      locked: true,
    },
    {
      key: "functional",
      title: "Funktsional",
      description:
        "Interfeys sozlamalarini eslab qoladi va ayrim funksiyalarning to‘g‘ri ishlashiga yordam beradi.",
    },
    {
      key: "marketing",
      title: "Analitik",
      description:
        "Anonim statistika orqali sayt qulayligini yaxshilash, mahsulot va xizmatlarni takomillashtirishga yordam beradi.",
    },
  ],

  policyText: "Batafsil ma’lumot —",

  policyLabel: "cookie siyosatida",

  policyHref: "/cookiepolicy",

  saveBtn: "Saqlash",

  acceptAllBtn: "Barchasini qabul qilish",

  rejectAllBtn: "Majburiy bo‘lmaganlarini rad etish",

  closeAria: "Yopish",
};

const KA: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cookie-ფაილების პარამეტრები",
  modalText:
    "აირჩიეთ, რომელი cookie-ფაილების გამოყენებაა დაშვებული. აუცილებელი cookie-ფაილები ყოველთვის ჩართულია.",
  categoriesTitle: "კატეგორიები",
  categories: [
    {
      key: "necessary",
      title: "აუცილებელი",
      description:
        "საჭიროა ვებგვერდის ფუნქციონირებისა და უსაფრთხოების უზრუნველსაყოფად. მათი გამორთვა შეუძლებელია.",
      locked: true,
    },
    {
      key: "functional",
      title: "ფუნქციური",
      description:
        "იმახსოვრებს ინტერფეისის პარამეტრებს და უზრუნველყოფს ცალკეული ფუნქციების სწორ მუშაობას.",
    },
    {
      key: "marketing",
      title: "ანალიტიკური",
      description:
        "ანონიმური სტატისტიკის მეშვეობით გვეხმარება ვებგვერდის გამოყენების კომფორტის, პროდუქტებისა და მომსახურებების გაუმჯობესებაში.",
    },
  ],
  policyText: "დეტალური ინფორმაცია —",
  policyLabel: "cookie-ფაილების პოლიტიკაში",
  policyHref: "/cookiepolicy",
  saveBtn: "შენახვა",
  acceptAllBtn: "ყველას მიღება",
  rejectAllBtn: "არასავალდებულოების უარყოფა",
  closeAria: "დახურვა",
};

const KK: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cookie баптаулары",
  modalText:
    "Қандай cookie файлдарын пайдалануға рұқсат берілетінін таңдаңыз. Міндетті cookie файлдары әрдайым қосулы болады.",
  categoriesTitle: "Санаттар",
  categories: [
    {
      key: "necessary",
      title: "Міндетті",
      description:
        "Сайттың жұмысы мен қауіпсіздігі үшін қажет. Өшіру мүмкін емес.",
      locked: true,
    },
    {
      key: "functional",
      title: "Функционалдық",
      description:
        "Интерфейс баптауларын сақтайды және жекелеген функциялардың дұрыс жұмыс істеуіне көмектеседі.",
    },
    {
      key: "marketing",
      title: "Талдамалық",
      description:
        "Анонимді статистика арқылы сайтты пайдалану ыңғайлылығын жақсартуға, өнімдер мен қызметтерді жетілдіруге көмектеседі.",
    },
  ],
  policyText: "Толығырақ —",
  policyLabel: "cookie саясаты",
  policyHref: "/cookiepolicy",
  saveBtn: "Сақтау",
  acceptAllBtn: "Барлығын қабылдау",
  rejectAllBtn: "Міндетті емес файлдарды қабылдамау",
  closeAria: "Жабу",
};

const TR: CookieDictionary = {
  manageBtn: "Çerezler",
  modalTitle: "Çerez Ayarları",
  modalText:
    "Hangi çerezlerin kullanılabileceğini seçin. Zorunlu çerezler her zaman etkin durumdadır.",
  categoriesTitle: "Kategoriler",
  categories: [
    {
      key: "necessary",
      title: "Zorunlu",
      description:
        "Web sitesinin çalışması ve güvenliği için gereklidir. Devre dışı bırakılamaz.",
      locked: true,
    },
    {
      key: "functional",
      title: "İşlevsel",
      description:
        "Arayüz ayarlarını hatırlar ve belirli işlevlerin düzgün çalışmasına yardımcı olur.",
    },
    {
      key: "marketing",
      title: "Analitik",
      description:
        "Anonim istatistikler aracılığıyla site kullanım kolaylığını, ürünleri ve hizmetleri geliştirmeye yardımcı olur.",
    },
  ],
  policyText: "Daha fazla bilgi için",
  policyLabel: "Çerez Politikası",
  policyHref: "/cookiepolicy",
  saveBtn: "Kaydet",
  acceptAllBtn: "Tümünü Kabul Et",
  rejectAllBtn: "Zorunlu Olmayanları Reddet",
  closeAria: "Kapat",
};

const FA: CookieDictionary = {
  manageBtn: "کوکی‌ها",
  modalTitle: "تنظیمات کوکی",
  modalText:
    "انتخاب کنید کدام کوکی‌ها مجاز به استفاده باشند. کوکی‌های ضروری همیشه فعال هستند.",
  categoriesTitle: "دسته‌بندی‌ها",
  categories: [
    {
      key: "necessary",
      title: "ضروری",
      description:
        "برای عملکرد صحیح وب‌سایت و حفظ امنیت لازم هستند. غیرفعال‌سازی آن‌ها امکان‌پذیر نیست.",
      locked: true,
    },
    {
      key: "functional",
      title: "عملکردی",
      description:
        "تنظیمات رابط کاربری را ذخیره می‌کنند و به عملکرد صحیح برخی قابلیت‌ها کمک می‌کنند.",
    },
    {
      key: "marketing",
      title: "تحلیلی",
      description:
        "از طریق آمار ناشناس به بهبود سهولت استفاده از وب‌سایت و توسعه خدمات و محصولات کمک می‌کنند.",
    },
  ],
  policyText: "اطلاعات بیشتر در",
  policyLabel: "سیاست کوکی‌ها",
  policyHref: "/cookiepolicy",
  saveBtn: "ذخیره",
  acceptAllBtn: "پذیرفتن همه",
  rejectAllBtn: "رد کوکی‌های غیرضروری",
  closeAria: "بستن",
};

const HY: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cookie-ների կարգավորումներ",
  modalText:
    "Ընտրեք, թե որ cookie-ները կարող են օգտագործվել։ Անհրաժեշտ cookie-ները միշտ ակտիվ են։",
  categoriesTitle: "Կատեգորիաներ",
  categories: [
    {
      key: "necessary",
      title: "Անհրաժեշտ",
      description:
        "Անհրաժեշտ են կայքի աշխատանքի և անվտանգության ապահովման համար։ Անջատել հնարավոր չէ։",
      locked: true,
    },
    {
      key: "functional",
      title: "Ֆունկցիոնալ",
      description:
        "Հիշում են ինտերֆեյսի կարգավորումները և աջակցում առանձին գործառույթների ճիշտ աշխատանքին։",
    },
    {
      key: "marketing",
      title: "Վերլուծական",
      description:
        "Օգնում են անանուն վիճակագրության միջոցով բարելավել կայքի օգտագործման հարմարավետությունը, կատարելագործել արտադրանքներն ու ծառայությունները։",
    },
  ],
  policyText: "Ավելին՝",
  policyLabel: "cookie-ների քաղաքականությունում",
  policyHref: "/cookiepolicy",
  saveBtn: "Պահպանել",
  acceptAllBtn: "Ընդունել բոլորը",
  rejectAllBtn: "Մերժել ոչ պարտադիրները",
  closeAria: "Փակել",
};


const CKB: CookieDictionary = {
  manageBtn: "Cookie",

  modalTitle: "ڕێکخستنەکانی Cookie",

  modalText:
    "هەڵبژێرە کام جۆرە Cookie ـانە دەتوانرێن بەکاربهێنرێن. Cookie ـە پێویستەکان هەمیشە چالاکن.",

  categoriesTitle: "هاوپۆلەکان",

  categories: [
    {
      key: "necessary",
      title: "پێویستەکان",
      description:
        "بۆ کاری دروستی ماڵپەڕ و ئاسایش پێویستن. ناچالاککردنیان ناگونجێت.",
      locked: true,
    },
    {
      key: "functional",
      title: "کارکردییەکان",
      description:
        "ڕێکخستنەکانی ڕووکار پاراستن دەکەن و یارمەتیدەدەن هەندێک کارکرد بە دروستی کار بکات.",
    },
    {
      key: "marketing",
      title: "ئامارییەکان",
      description:
        "بە بەکارهێنانی ئاماری نەناسراو یارمەتیدەدەن ماڵپەڕەکە ئاسانتر بکرێت، بەرهەم و خزمەتگوزارییەکان باشتر بکرێن.",
    },
  ],

  policyText: "زانیاری زیاتر — لە",

  policyLabel: "سیاسەتی Cookie",

  policyHref: "/cookiepolicy",

  saveBtn: "پاشەکەوتکردن",

  acceptAllBtn: "قبووڵکردنی هەموو",

  rejectAllBtn: "ڕەتکردنەوەی ناپێویستەکان",

  closeAria: "داخستن",
};

const KMR: CookieDictionary = {
  manageBtn: "Cookie",

  modalTitle: "Mîhengên Cookieyan",

  modalText:
    "Hilbijêrin ka kîjan cookie dikarin werin bikaranîn. Cookieyên pêwîst her tim çalak in.",

  categoriesTitle: "Kategorî",

  categories: [
    {
      key: "necessary",
      title: "Pêwîst",
      description:
        "Ji bo xebata malperê û ewlehiyê pêwîst in. Nayên neçalakkirin.",
      locked: true,
    },
    {
      key: "functional",
      title: "Fonksiyonel",
      description:
        "Mîhengên navrûyê têne bîranîn û ji bo xebata rast a hin fonksiyonan alîkariyê dikin.",
    },
    {
      key: "marketing",
      title: "Analîtîkî",
      description:
        "Bi rêya statîstîkên anonîm alîkariyê dikin ku karanîna malperê, berhem û xizmetan were baştir kirin.",
    },
  ],

  policyText: "Agahdariyên zêdetir — di",

  policyLabel: "polîtîkaya cookieyan de",

  policyHref: "/cookiepolicy",

  saveBtn: "Tomar bike",

  acceptAllBtn: "Hemûyan qebûl bike",

  rejectAllBtn: "Yên ne pêwîst red bike",

  closeAria: "Bigire",
};
const AR: CookieDictionary = {
  manageBtn: "ملفات تعريف الارتباط",
  modalTitle: "إعدادات ملفات تعريف الارتباط",
  modalText:
    "اختر أنواع ملفات تعريف الارتباط التي تسمح باستخدامها. الملفات الضرورية مفعلة دائمًا.",
  categoriesTitle: "الفئات",

  categories: [
    {
      key: "necessary",
      title: "الملفات الضرورية",
      description:
        "ضرورية لتشغيل الموقع وضمان الأمان. لا يمكن تعطيلها.",
      locked: true,
    },
    {
      key: "functional",
      title: "الملفات الوظيفية",
      description:
        "تتذكر إعدادات الواجهة وتساعد على عمل بعض الوظائف بشكل صحيح.",
    },
    {
      key: "marketing",
      title: "الملفات التحليلية",
      description:
        "تساعد من خلال الإحصاءات المجهولة في تحسين سهولة استخدام الموقع وتطوير المنتجات والخدمات.",
    },
  ],

  policyText: "للمزيد من المعلومات، يرجى الاطلاع على",
  policyLabel: "سياسة ملفات تعريف الارتباط",
  policyHref: "/cookiepolicy",

  saveBtn: "حفظ",
  acceptAllBtn: "قبول الكل",
  rejectAllBtn: "رفض الملفات غير الضرورية",

  closeAria: "إغلاق",
};

const UK: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Налаштування cookie",
  modalText: "Оберіть, які файли cookie можуть використовуватися. Необхідні файли cookie завжди ввімкнені.",
  categoriesTitle: "Категорії",
  categories: [
    {
      key: "necessary",
      title: "Необхідні",
      description: "Потрібні для роботи сайту та забезпечення безпеки. Вимкнути їх неможливо.",
      locked: true
    },
    {
      key: "functional",
      title: "Функціональні",
      description: "Запам’ятовують налаштування інтерфейсу та забезпечують коректну роботу окремих функцій."
    },
    {
      key: "marketing",
      title: "Аналітичні",
      description: "Допомагають за допомогою анонімної статистики покращувати зручність користування сайтом, удосконалювати продукти та послуги."
    },
  ],
  policyText: "Докладніше — у",
  policyLabel: "політиці використання файлів cookie",
  policyHref: "/cookiepolicy",
  saveBtn: "Зберегти",
  acceptAllBtn: "Прийняти всі",
  rejectAllBtn: "Відхилити необов’язкові",
  closeAria: "Закрити",
};

const HE: CookieDictionary = {
  manageBtn: "Cookies",
  modalTitle: "הגדרות Cookies",
  modalText: "בחרו אילו Cookies ניתן להשתמש בהם. Cookies הכרחיים תמיד פעילים.",
  categoriesTitle: "קטגוריות",
  categories: [
    {
      key: "necessary",
      title: "הכרחיים",
      description: "נדרשים להפעלת האתר ולשמירה על אבטחתו. לא ניתן להשבית אותם.",
      locked: true
    },
    {
      key: "functional",
      title: "פונקציונליים",
      description: "שומרים את הגדרות הממשק ומסייעים לפעולה תקינה של פונקציות שונות באתר."
    },
    {
      key: "marketing",
      title: "אנליטיים",
      description: "מסייעים באמצעות נתונים סטטיסטיים אנונימיים לשפר את חוויית השימוש באתר ולפתח מוצרים ושירותים."
    },
  ],
  policyText: "למידע נוסף ראו את",
  policyLabel: "מדיניות ה-Cookies",
  policyHref: "/cookiepolicy",
  saveBtn: "שמור",
  acceptAllBtn: "אשר הכל",
  rejectAllBtn: "דחה את כל ה-Cookies שאינם הכרחיים",
  closeAria: "סגור",
};

const AZ: CookieDictionary = {
  manageBtn: "Cookie",

  modalTitle: "Cookie ayarları",
  modalText:
    "Hansı cookie fayllarının istifadə olunacağını seçin. Zəruri cookie faylları həmişə aktivdir.",

  categoriesTitle: "Kateqoriyalar",

  categories: [
    {
      key: "necessary",
      title: "Zəruri",
      description:
        "Saytın fəaliyyəti və təhlükəsizliyi üçün tələb olunur. Söndürülə bilməz.",
      locked: true,
    },
    {
      key: "functional",
      title: "Funksional",
      description:
        "İnterfeys ayarlarını yadda saxlayır və ayrı-ayrı funksiyaların düzgün işləməsinə kömək edir.",
    },
    {
      key: "marketing",
      title: "Analitik",
      description:
        "Anonim statistika vasitəsilə saytın istifadəsinin rahatlığını artırmağa, məhsul və xidmətləri təkmilləşdirməyə kömək edir.",
    },
  ],

  policyText: "Ətraflı məlumat —",
  policyLabel: "cookie siyasətində",
  policyHref: "/cookiepolicy",

  saveBtn: "Yadda saxla",
  acceptAllBtn: "Hamısını qəbul et",
  rejectAllBtn: "Qeyri-zəruri faylları rədd et",

  closeAria: "Bağla",
};

const RO: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Setări cookie",
  modalText: "Selectați ce tipuri de cookie-uri pot fi utilizate. Cookie-urile necesare sunt întotdeauna active.",
  categoriesTitle: "Categorii",
  categories: [
    {
      key: "necessary",
      title: "Necesare",
      description:
        "Sunt necesare pentru funcționarea site-ului și pentru securitate. Nu pot fi dezactivate.",
      locked: true,
    },
    {
      key: "functional",
      title: "Funcționale",
      description:
        "Memorează preferințele interfeței și contribuie la funcționarea corectă a anumitor funcționalități.",
    },
    {
      key: "marketing",
      title: "Analitice",
      description:
        "Ajută, prin statistici anonime, la îmbunătățirea experienței de utilizare a site-ului și la dezvoltarea produselor și serviciilor.",
    },
  ],
  policyText: "Mai multe informații în",
  policyLabel: "politica privind cookie-urile",
  policyHref: "/cookiepolicy",
  saveBtn: "Salvează",
  acceptAllBtn: "Acceptă toate",
  rejectAllBtn: "Respinge opționalele",
  closeAria: "Închide",
};

const SR: CookieDictionary = {
  manageBtn: "Kolačići",
  modalTitle: "Podešavanja kolačića",
  modalText: "Izaberite koje kolačiće dozvoljavate. Neophodni kolačići su uvek uključeni.",
  categoriesTitle: "Kategorije",
  categories: [
    {
      key: "necessary",
      title: "Neophodni",
      description: "Potrebni su za rad sajta i bezbednost. Nije ih moguće isključiti.",
      locked: true
    },
    {
      key: "functional",
      title: "Funkcionalni",
      description: "Pamte podešavanja interfejsa i pomažu pravilnom funkcionisanju pojedinih funkcija."
    },
    {
      key: "marketing",
      title: "Analitički",
      description: "Pomažu da se putem anonimne statistike unapredi korisničko iskustvo na sajtu, kao i razvoj proizvoda i usluga."
    },
  ],
  policyText: "Više informacija u",
  policyLabel: "politici kolačića",
  policyHref: "/cookiepolicy",
  saveBtn: "Sačuvaj",
  acceptAllBtn: "Prihvati sve",
  rejectAllBtn: "Odbij neobavezne",
  closeAria: "Zatvori",
};

const SQ: CookieDictionary = {
  manageBtn: "Cookie",
  modalTitle: "Cilësimet e cookie-ve",
  modalText: "Zgjidhni cilat cookie mund të përdoren. Cookie-t e nevojshme janë gjithmonë të aktivizuara.",
  categoriesTitle: "Kategoritë",
  categories: [
    {
      key: "necessary",
      title: "Të nevojshme",
      description: "Janë të domosdoshme për funksionimin e faqes dhe sigurinë. Nuk mund të çaktivizohen.",
      locked: true
    },
    {
      key: "functional",
      title: "Funksionale",
      description: "Ruajnë preferencat e ndërfaqes dhe ndihmojnë në funksionimin korrekt të veçorive të caktuara."
    },
    {
      key: "marketing",
      title: "Analitike",
      description: "Ndihmojnë, përmes statistikave anonime, në përmirësimin e përdorshmërisë së faqes, zhvillimin e produkteve dhe shërbimeve."
    },
  ],
  policyText: "Më shumë informacion në",
  policyLabel: "politikën e cookie-ve",
  policyHref: "/cookiepolicy",
  saveBtn: "Ruaj",
  acceptAllBtn: "Prano të gjitha",
  rejectAllBtn: "Refuzo cookie-t jo të domosdoshme",
  closeAria: "Mbyll",
};

const MN: CookieDictionary = {
  manageBtn: "Cookie",

  modalTitle: "Cookie тохиргоо",

  modalText:
    "Ямар cookie файлуудыг ашиглахыг зөвшөөрөхөө сонгоно уу. Шаардлагатай cookie файлууд үргэлж идэвхтэй байна.",

  categoriesTitle: "Ангиллууд",

  categories: [
    {
      key: "necessary",
      title: "Шаардлагатай",
      description:
        "Вебсайтын хэвийн ажиллагаа болон аюулгүй байдалд шаардлагатай. Унтраах боломжгүй.",
      locked: true,
    },
    {
      key: "functional",
      title: "Функциональ",
      description:
        "Интерфейсийн тохиргоог хадгалж, зарим функцуудыг зөв ажиллуулахад тусалдаг.",
    },
    {
      key: "marketing",
      title: "Аналитик",
      description:
        "Нэргүй статистикийн мэдээллээр дамжуулан вебсайтын хэрэглээний тав тухыг сайжруулах, бүтээгдэхүүн болон үйлчилгээг хөгжүүлэхэд тусалдаг.",
    },
  ],

  policyText: "Дэлгэрэнгүй мэдээллийг",
  policyLabel: "cookie бодлогоос",
  policyHref: "/cookiepolicy",

  saveBtn: "Хадгалах",
  acceptAllBtn: "Бүгдийг зөвшөөрөх",
  rejectAllBtn: "Шаардлагагүйг татгалзах",

  closeAria: "Хаах",
};



const COOKIE_DICTIONARY: Record<Lang, CookieDictionary> = {
  ru: RU,
  en: EN,
  pl: PL,
  be: BE,
  uk: UK,

  uz: UZ,
  kk: KK,
  az: AZ,
  tr: TR,
  ka: KA,
  hy: HY,

  fa: FA,
  ckb: CKB,
  kmr: KMR,
  ar: AR,
  he: HE,

  ro: RO,
  sr: SR,
  sq: SQ,
  mn: MN,
};

export function getCookieDictionary(lang: Lang): CookieDictionary {
  return COOKIE_DICTIONARY[lang] ?? COOKIE_DICTIONARY.ru;
}
