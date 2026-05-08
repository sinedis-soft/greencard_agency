import type { Lang } from "@/app/dictionaries/header";

export type SeoRouteKey =
  | "home"
  | "about"
  | "contacts"
  | "productInfo"
  | "rules"
  | "privacy"
  | "cookiePolicy";

type RouteSeo = {
  title: string;
  description: string;
};

type SeoDictionary = Record<SeoRouteKey, RouteSeo>;

export const seoDictionary: Record<Lang, SeoDictionary> = {
  ru: {
    home: {
      title: "Border insurance для грузоперевозчиков и физических лиц",
      description:
        "Трансграничная MTPL-страховка для международных перевозок: Green Card, border insurance, Зеленая карта в Евросоюз, OC graniczna.",
    },
    about: {
      title: "О нас — страховое агентство с лицензией",
      description:
        "Польское страховое агентство для путешествующих: оформление пограничного страхования в страны Европейской экономической зоны.",
    },
    contacts: {
      title: "Контакты — оформить border insurance",
      description:
        "Свяжитесь с агентом по пограничному страхованию для путешествующих по маршрутам EU и non-EU.",
    },
    productInfo: {
      title:
        "Продукт и покрытие — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Условия и покрытие трансграничной страховки: Green Card, border insurance, маршруты EU transit и соседние страны.",
    },
    rules: {
      title: "Правила оказания услуг",
      description:
        "Правила оформления и использования border insurance и Green Card для поездок через границы.",
    },
    privacy: {
      title: "Политика конфиденциальности",
      description:
        "Как обрабатываются персональные данные клиентов при оформлении международной MTPL-страховки.",
    },
    cookiePolicy: {
      title: "Политика cookies",
      description:
        "Информация о cookie-файлах и аналитике на сайте оформления трансграничной страховки.",
    },
  },

  pl: {
    home: {
      title: "Border insurance dla przewoźników i klientów indywidualnych",
      description:
        "Transgraniczne ubezpieczenie MTPL dla transportu międzynarodowego: Zielona Karta, border insurance, Zielona Karta do Unii Europejskiej, OC graniczne.",
    },
    about: {
      title: "O nas — licencjonowana agencja ubezpieczeniowa",
      description:
        "Polska agencja ubezpieczeniowa dla podróżujących: zawieranie ubezpieczeń granicznych dla krajów Europejskiego Obszaru Gospodarczego.",
    },
    contacts: {
      title: "Kontakt — zawarcie border insurance",
      description:
        "Skontaktuj się z agentem ubezpieczeniowym w sprawie ubezpieczenia granicznego dla podróży na trasach UE i poza UE.",
    },
    productInfo: {
      title:
        "Produkt i zakres ochrony — Zielona Karta / MTPL cross-border / OC graniczne",
      description:
        "Warunki oraz zakres ochrony ubezpieczenia transgranicznego: Zielona Karta, border insurance, trasy tranzytowe UE oraz kraje sąsiednie.",
    },
    rules: {
      title: "Regulamin świadczenia usług",
      description:
        "Zasady zawierania i korzystania z border insurance oraz Zielonej Karty podczas podróży międzynarodowych.",
    },
    privacy: {
      title: "Polityka prywatności",
      description:
        "Informacje o przetwarzaniu danych osobowych klientów przy zawieraniu międzynarodowego ubezpieczenia MTPL.",
    },
    cookiePolicy: {
      title: "Polityka cookies",
      description:
        "Informacje o plikach cookies i narzędziach analitycznych na stronie dotyczącej ubezpieczeń transgranicznych.",
    },
  },

  en: {
    home: {
      title: "Border Insurance for Hauliers and Private Individuals",
      description:
        "Cross-border MTPL insurance for international transport: Green Card, border insurance, Green Card for the European Union, OC graniczna.",
    },
    about: {
      title: "About Us — Licensed Insurance Agency",
      description:
        "Polish insurance agency for travellers and transport operators: arranging border insurance for travel within the European Economic Area.",
    },
    contacts: {
      title: "Contacts — Arrange Border Insurance",
      description:
        "Contact an insurance agent regarding border insurance for travel across EU and non-EU routes.",
    },
    productInfo: {
      title:
        "Product and Coverage — Green Card / Cross-Border MTPL / OC graniczna",
      description:
        "Terms and coverage of cross-border insurance: Green Card, border insurance, EU transit routes, and neighbouring countries.",
    },
    rules: {
      title: "Terms of Service",
      description:
        "Rules and conditions for arranging and using border insurance and Green Card coverage for cross-border travel.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "How clients’ personal data is processed when arranging international MTPL insurance.",
    },
    cookiePolicy: {
      title: "Cookie Policy",
      description:
        "Information about cookies and website analytics used on the cross-border insurance platform.",
    },
  },

  be: {
    home: {
      title: "Border insurance для грузаперавозчыкаў і фізічных асоб",
      description:
        "Трансгранічнае MTPL-страхаванне для міжнародных перавозак: Green Card, border insurance, Зялёная карта ў Еўрапейскі саюз, OC graniczna.",
    },
    about: {
      title: "Пра нас — страхавое агенцтва з ліцэнзіяй",
      description:
        "Польскае страхавое агенцтва для падарожнікаў: афармленне памежнага страхавання для паездак у краіны Еўрапейскай эканамічнай зоны.",
    },
    contacts: {
      title: "Кантакты — афармленне border insurance",
      description:
        "Звяжыцеся са страхавым агентам па пытаннях памежнага страхавання для паездак па маршрутах EU і non-EU.",
    },
    productInfo: {
      title:
        "Прадукт і страхавое пакрыццё — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Умовы і страхавое пакрыццё трансгранічнага страхавання: Green Card, border insurance, маршруты EU transit і суседнія краіны.",
    },
    rules: {
      title: "Правілы аказання паслуг",
      description:
        "Правілы афармлення і выкарыстання border insurance і Green Card для паездак праз межы.",
    },
    privacy: {
      title: "Палітыка канфідэнцыяльнасці",
      description:
        "Як апрацоўваюцца персанальныя даныя кліентаў пры афармленні міжнароднага MTPL-страхавання.",
    },
    cookiePolicy: {
      title: "Палітыка cookies",
      description:
        "Інфармацыя пра cookie-файлы і аналітыку на сайце афармлення трансгранічнага страхавання.",
    },
  },

  uz: {
    home: {
      title: "Yuk tashuvchilar va jismoniy shaxslar uchun border insurance",
      description:
        "Xalqaro tashuvlar uchun transchegaraviy MTPL sug‘urtasi: Green Card, border insurance, Yevropa Ittifoqiga Green Card, OC graniczna.",
    },
    about: {
      title: "Biz haqimizda — litsenziyaga ega sug‘urta agentligi",
      description:
        "Sayohatchilar uchun Polsha sug‘urta agentligi: Yevropa iqtisodiy hududi mamlakatlariga chegara sug‘urtasini rasmiylashtirish.",
    },
    contacts: {
      title: "Kontaktlar — border insurance rasmiylashtirish",
      description:
        "EU va non-EU yo‘nalishlari bo‘ylab sayohat qiluvchilar uchun chegara sug‘urtasi bo‘yicha agent bilan bog‘laning.",
    },
    productInfo: {
      title:
        "Mahsulot va qamrov — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Transchegaraviy sug‘urta shartlari va qamrovi: Green Card, border insurance, EU transit yo‘nalishlari va qo‘shni davlatlar.",
    },
    rules: {
      title: "Xizmat ko‘rsatish qoidalari",
      description:
        "Chegaralarni kesib o‘tish uchun border insurance va Green Card rasmiylashtirish hamda foydalanish qoidalari.",
    },
    privacy: {
      title: "Maxfiylik siyosati",
      description:
        "Xalqaro MTPL sug‘urtasini rasmiylashtirishda mijozlarning shaxsiy ma’lumotlari qanday qayta ishlanishi haqida.",
    },
    cookiePolicy: {
      title: "Cookie siyosati",
      description:
        "Transchegaraviy sug‘urta rasmiylashtirish saytida cookie-fayllar va analitika haqida ma’lumot.",
    },
  },

  ka: {
    home: {
      title:
        "Border insurance ტვირთგადამზიდავებისა და ფიზიკური პირებისთვის",
      description:
        "საერთაშორისო MTPL დაზღვევა საერთაშორისო გადაზიდვებისთვის: Green Card, border insurance, მწვანე ბარათი ევროკავშირის ქვეყნებისთვის, OC graniczna.",
    },
    about: {
      title: "ჩვენ შესახებ — ლიცენზირებული სადაზღვევო სააგენტო",
      description:
        "პოლონური სადაზღვევო სააგენტო მოგზაურებისთვის: სასაზღვრო დაზღვევის გაფორმება ევროპის ეკონომიკური ზონის ქვეყნებისთვის.",
    },
    contacts: {
      title: "კონტაქტები — border insurance-ის გაფორმება",
      description:
        "დაუკავშირდით სასაზღვრო დაზღვევის აგენტს EU და non-EU მარშრუტებზე მოგზაურობისთვის.",
    },
    productInfo: {
      title:
        "პროდუქტი და სადაზღვევო დაფარვა — Green Card / MTPL cross-border / OC graniczna",
      description:
        "საერთაშორისო სასაზღვრო დაზღვევის პირობები და დაფარვა: Green Card, border insurance, EU transit მარშრუტები და მეზობელი ქვეყნები.",
    },
    rules: {
      title: "მომსახურების წესები",
      description:
        "Border insurance-ისა და Green Card-ის გაფორმებისა და გამოყენების წესები საზღვრის გადაკვეთისთვის.",
    },
    privacy: {
      title: "კონფიდენციალურობის პოლიტიკა",
      description:
        "როგორ მუშავდება კლიენტების პერსონალური მონაცემები საერთაშორისო MTPL დაზღვევის გაფორმებისას.",
    },
    cookiePolicy: {
      title: "Cookie-ფაილების პოლიტიკა",
      description:
        "ინფორმაცია cookie-ფაილებისა და ანალიტიკის გამოყენების შესახებ სასაზღვრო დაზღვევის ვებგვერდზე.",
    },
  },

  kk: {
    home: {
      title:
        "Жүк тасымалдаушылар мен жеке тұлғаларға арналған border insurance",
      description:
        "Халықаралық тасымалдарға арналған трансшекаралық MTPL-сақтандыру: Green Card, border insurance, Еуроодаққа арналған Green Card, OC graniczna.",
    },
    about: {
      title: "Біз туралы — лицензиясы бар сақтандыру агенттігі",
      description:
        "Саяхаттаушыларға арналған поляк сақтандыру агенттігі: Еуропалық экономикалық аймақ елдеріне арналған шекаралық сақтандыруды рәсімдеу.",
    },
    contacts: {
      title: "Байланыс — border insurance рәсімдеу",
      description:
        "EU және non-EU бағыттары бойынша саяхаттайтындарға арналған шекаралық сақтандыру агентімен байланысыңыз.",
    },
    productInfo: {
      title:
        "Өнім және сақтандыру жабыны — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Трансшекаралық сақтандыру шарттары мен қамтуы: Green Card, border insurance, EU transit бағыттары және көршілес елдер.",
    },
    rules: {
      title: "Қызмет көрсету қағидалары",
      description:
        "Шекаралық border insurance және Green Card сақтандыруын рәсімдеу мен пайдалану қағидалары.",
    },
    privacy: {
      title: "Құпиялылық саясаты",
      description:
        "Халықаралық MTPL-сақтандыруды рәсімдеу кезінде клиенттердің дербес деректері қалай өңделетіні туралы ақпарат.",
    },
    cookiePolicy: {
      title: "Cookie саясаты",
      description:
        "Трансшекаралық сақтандыруды рәсімдеу сайтының cookie файлдары мен аналитикасы туралы ақпарат.",
    },
  },

  tr: {
    home: {
      title: "Yük taşımacıları ve bireyler için border insurance",
      description:
        "Uluslararası taşımacılık için sınır ötesi MTPL sigortası: Green Card, border insurance, Avrupa Birliği için Yeşil Kart, OC graniczna.",
    },
    about: {
      title: "Hakkımızda — lisanslı sigorta acentesi",
      description:
        "Seyahat eden kişiler için faaliyet gösteren Polonya sigorta acentesi: Avrupa Ekonomik Alanı ülkeleri için sınır sigortası düzenlenmesi.",
    },
    contacts: {
      title: "İletişim — border insurance düzenleme",
      description:
        "AB ve AB dışı güzergâhlarda seyahat edenler için sınır sigortası konusunda sigorta acentesi ile iletişime geçin.",
    },
    productInfo: {
      title:
        "Ürün ve teminat — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Sınır ötesi sigortanın şartları ve teminat kapsamı: Green Card, border insurance, AB transit güzergâhları ve komşu ülkeler.",
    },
    rules: {
      title: "Hizmet sunum kuralları",
      description:
        "Border insurance ve Green Card sigortasının sınır geçişleri için düzenlenmesi ve kullanımıyla ilgili kurallar.",
    },
    privacy: {
      title: "Gizlilik Politikası",
      description:
        "Uluslararası MTPL sigortası düzenlenirken müşteri kişisel verilerinin nasıl işlendiğine ilişkin bilgiler.",
    },
    cookiePolicy: {
      title: "Çerez Politikası",
      description:
        "Sınır ötesi sigorta düzenleme sitesindeki çerezler ve analiz araçları hakkında bilgiler.",
    },
  },

  fa: {
    home: {
      title: "بیمه مرزی برای شرکت‌های حمل‌ونقل و اشخاص حقیقی",
      description:
        "بیمه مسئولیت مدنی فرامرزی (MTPL) برای حمل‌ونقل بین‌المللی: گرین کارت، بیمه مرزی، گرین کارت برای اتحادیه اروپا و OC graniczna.",
    },
    about: {
      title: "درباره ما — آژانس بیمه دارای مجوز",
      description:
        "آژانس بیمه لهستانی برای مسافران: صدور بیمه مرزی جهت ورود و تردد در کشورهای منطقه اقتصادی اروپا.",
    },
    contacts: {
      title: "اطلاعات تماس — صدور بیمه مرزی",
      description:
        "برای دریافت بیمه مرزی ویژه سفر در مسیرهای اتحادیه اروپا و کشورهای خارج از اتحادیه اروپا با نماینده بیمه تماس بگیرید.",
    },
    productInfo: {
      title:
        "محصول و پوشش بیمه‌ای — Green Card / MTPL cross-border / OC graniczna",
      description:
        "شرایط و پوشش بیمه فرامرزی: گرین کارت، بیمه مرزی، مسیرهای ترانزیتی اتحادیه اروپا و کشورهای همسایه.",
    },
    rules: {
      title: "مقررات ارائه خدمات",
      description:
        "قوانین مربوط به صدور و استفاده از بیمه مرزی و گرین کارت برای ترددهای بین‌المللی.",
    },
    privacy: {
      title: "سیاست حفظ حریم خصوصی",
      description:
        "نحوه پردازش داده‌های شخصی مشتریان هنگام صدور بیمه بین‌المللی مسئولیت مدنی (MTPL).",
    },
    cookiePolicy: {
      title: "سیاست کوکی‌ها",
      description:
        "اطلاعات مربوط به فایل‌های کوکی و ابزارهای تحلیلی در وب‌سایت صدور بیمه فرامرزی.",
    },
  },

  hy: {
    home: {
      title: "Border insurance բեռնափոխադրողների և ֆիզիկական անձանց համար",
      description:
        "Միջսահմանային MTPL ապահովագրություն միջազգային փոխադրումների համար՝ Green Card, border insurance, Եվրոպական միության համար նախատեսված Green Card, OC graniczna։",
    },
    about: {
      title: "Մեր մասին — լիցենզավորված ապահովագրական գործակալություն",
      description:
        "Լեհական ապահովագրական գործակալություն ճանապարհորդողների համար՝ Եվրոպական տնտեսական գոտու երկրներ սահմանային ապահովագրության ձևակերպմամբ։",
    },
    contacts: {
      title: "Կոնտակտներ — border insurance-ի ձևակերպում",
      description:
        "Կապ հաստատեք սահմանային ապահովագրության գործակալի հետ՝ EU և non-EU երթուղիներով ճանապարհորդությունների համար։",
    },
    productInfo: {
      title:
        "Ապրանք և ապահովագրական ծածկույթ — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Միջսահմանային ապահովագրության պայմաններն ու ծածկույթը՝ Green Card, border insurance, EU transit երթուղիներ և հարևան երկրներ։",
    },
    rules: {
      title: "Ծառայությունների մատուցման կանոններ",
      description:
        "Border insurance և Green Card ապահովագրության ձևակերպման և օգտագործման կանոններ սահմանային ճանապարհորդությունների համար։",
    },
    privacy: {
      title: "Գաղտնիության քաղաքականություն",
      description:
        "Ինչպես են մշակվում հաճախորդների անձնական տվյալները միջազգային MTPL ապահովագրության ձևակերպման ընթացքում։",
    },
    cookiePolicy: {
      title: "Cookie-ների քաղաքականություն",
      description:
        "Տեղեկատվություն cookie ֆայլերի և վերլուծական գործիքների մասին՝ միջսահմանային ապահովագրության ձևակերպման կայքում։",
    },
  },
};

export function getSeoDictionary(lang: Lang): SeoDictionary {
  return seoDictionary[lang];
}