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

const COOKIE_DICTIONARY: Record<Lang, CookieDictionary> = { ru: RU, en: EN, pl: PL, be: BE, uz: UZ, ka: KA, kk:KK, tr:TR, fa: FA, hy: HY };

export function getCookieDictionary(lang: Lang): CookieDictionary {
  return COOKIE_DICTIONARY[lang] ?? COOKIE_DICTIONARY.ru;
}
