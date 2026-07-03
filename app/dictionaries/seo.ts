import type { Lang } from "@/app/dictionaries/header";
import { getGeorgiaRomaniaOcDictionary } from "@/app/dictionaries/seo-landings/georgiaRomaniaOc";
import { getBelarusPolandOcDictionary } from "@/app/dictionaries/seo-landings/belarusPolandOc";
import { belarusLithuaniaOcDictionary } from "@/app/dictionaries/seo-landings/belarusLithuaniaOc";
import { getUaeOcDictionary } from "@/app/dictionaries/seo-landings/uaeOc";

export type SeoRouteKey =
  | "home"
  | "about"
  | "contacts"
  | "productInfo"
  | "rules"
  | "privacy"
  | "cookiePolicy"
  | "georgiaRomaniaOc"
  | "belarusPolandOc"
  | "belarusLithuaniaOc"
  | "uaeOc";

type RouteSeo = {
  title: string;
  description: string;
};

type SeoDictionaryBase = Record<Exclude<SeoRouteKey, "georgiaRomaniaOc" | "belarusPolandOc" | "belarusLithuaniaOc" | "uaeOc">, RouteSeo>;

type SeoDictionary = SeoDictionaryBase & { georgiaRomaniaOc: RouteSeo; belarusPolandOc: RouteSeo; belarusLithuaniaOc: RouteSeo; uaeOc: RouteSeo; };

export const seoDictionary: Record<Lang, SeoDictionaryBase> = {
  ru: {
    home: {
      title: "OC graniczne онлайн для авто вне ЕЭЗ | Пограничная страховка",
      description:
        "OC graniczne для авто вне ЕЭЗ: страны покрытия, сроки, документы, стоимость и PDF-полис после проверки и оплаты.",
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
      title: "Ubezpieczenie graniczne (OC graniczne) online | SINEDIS.",
      description:
        "Zawrzyj ubezpieczenie graniczne na wjazd do Polski i UE: kalkulacja, wniosek, płatność i polisa PDF.",
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
      title: "Border insurance (OC graniczne) online | SINEDIS.",
      description:
        "Arrange border insurance for entry to Poland and the EU: calculation, application, payment and PDF policy.",
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
      title: "Памежная страхоўка (OC graniczne) онлайн | SINEDIS.",
      description:
        "Аформіце памежную страхоўку для ўезду ў Польшчу і ЕС: разлік, заяўка, аплата і PDF-поліс.",
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
      title: "Chegara sug‘urtasi (OC graniczne) onlayn | SINEDIS.",
      description:
        "Polsha va YIga kirish uchun chegara sug‘urtasini rasmiylashtiring: hisob-kitob, ariza, to‘lov va PDF-polis.",
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
      title: "სასაზღვრო დაზღვევა (OC graniczne) ონლაინ | SINEDIS.",
      description:
        "გააფორმეთ სასაზღვრო დაზღვევა პოლონეთსა და ევროკავშირში შესასვლელად: კალკულაცია, განაცხადი, გადახდა და PDF პოლისი.",
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
      title: "Шекаралық сақтандыру (OC graniczne) онлайн | SINEDIS.",
      description:
        "Польша мен ЕО-ға кіру үшін шекаралық сақтандыруды рәсімдеңіз: есептеу, өтінім, төлем және PDF-полис.",
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
      title: "Sınır sigortası (OC graniczne) online | SINEDIS.",
      description:
        "Polonya ve AB’ye giriş için sınır sigortası düzenleyin: hesaplama, başvuru, ödeme ve PDF poliçe.",
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
      title: "بیمه مرزی (OC graniczne) آنلاین | SINEDIS.",
      description:
        "برای ورود به لهستان و اتحادیه اروپا بیمه مرزی تهیه کنید: محاسبه، درخواست، پرداخت و بیمه‌نامه PDF.",
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
      title: "Սահմանային ապահովագրություն (OC graniczne) առցանց | SINEDIS.",
      description:
        "Ձևակերպեք սահմանային ապահովագրություն Լեհաստան և ԵՄ մուտքի համար՝ հաշվարկ, հայտ, վճարում և PDF պոլիս։",
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
  ckb: {
    home: {
      title: "بیمەی سنووری (OC graniczne) ئۆنلاین | SINEDIS.",
      description:
        "بۆ چوونە ناو پۆڵەندا و یەکێتیی ئەوروپا بیمەی سنووری بکە: ژماردن، داواکاری، پارەدان و پۆلیسی PDF.",
    },

    about: {
      title: "دەربارەی ئێمە — ئاجانسێکی بیمەیی مۆڵەتپێدراو",
      description:
        "ئاجانسی بیمەی پۆڵەندی بۆ گەشتیاران: وەرگرتنی بیمەی سنووری بۆ وڵاتانی ناوچەی ئابووری ئەورووپا.",
    },

    contacts: {
      title: "پەیوەندییەکان — وەرگرتنی بیمەی سنووری",
      description:
        "پەیوەندی بە وەکیلی بیمەی سنووری بکە بۆ گەشت بە ڕێگاکانی EU و non-EU.",
    },

    productInfo: {
      title:
        "بەرهەم و پاراستن — Green Card / MTPLی سنووری / OC Graniczne",
      description:
        "مەرجەکان و ڕادەی پاراستنی بیمەی سنووری: گرین کارت، بیمەی سنووری، ڕێگاکانی ترانزیتی EU و وڵاتانی هاوسێ.",
    },

    rules: {
      title: "یاسا و مەرجەکانی خزمەتگوزاری",
      description:
        "یاسا و ڕێنماییەکانی وەرگرتن و بەکارهێنانی بیمەی سنووری و گرین کارت بۆ گەشتە نێودەوڵەتییەکان.",
    },

    privacy: {
      title: "سیاسەتی پاراستنی نهێنی",
      description:
        "زانیاری دەربارەی چۆنیەتی مامەڵەکردن لەگەڵ داتای کەسیی کڕیاران لە کاتی وەرگرتنی بیمەی MTPLی نێودەوڵەتی.",
    },

    cookiePolicy: {
      title: "سیاسەتی کوکی",
      description:
        "زانیاری دەربارەی فایلەکانی کوکی و ئامرازەکانی شیکاری لە ماڵپەڕی وەرگرتنی بیمەی سنووری.",
    },
  },
  kmr: {
    home: {
      title: "Sîgorteya sînorî (OC graniczne) online | SINEDIS.",
      description:
        "Ji bo ketina Polonya û YE sîgorteya sînorî çêkin: hesab, daxwaz, dayîn û polîçeya PDF.",
    },
    about: {
      title: "Derbarê me de — ajansa sîgorteyê ya bi lîsans",
      description:
        "Ajansa sîgorteyê ya Polonyayê ji bo rêwîtiyê: derxistina sîgorteya sînorî ji bo welatên Herêma Aborî ya Ewropayê.",
    },
    contacts: {
      title: "Têkilî — derxistina border insurance",
      description:
        "Bi ajanê sîgorteya sînorî re têkilî daynin ji bo rêwîtiyên li ser rêyên EU û non-EU.",
    },
    productInfo: {
      title:
        "Berhem û parastin — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Merc û parastina sîgorteya transsînorî: Green Card, border insurance, rêyên transit ên EU û welatên cîran.",
    },
    rules: {
      title: "Rêzikên pêşkêşkirina xizmetan",
      description:
        "Rêzikên derxistin û bikaranîna border insurance û Green Card ji bo rêwîtiyên bi ser sînoran re.",
    },
    privacy: {
      title: "Polîtîkaya nepeniyê",
      description:
        "Çawa agahdariyên kesane yên xerîdaran dema derxistina sîgorteya MTPL ya navneteweyî têne pêvajokirin.",
    },
    cookiePolicy: {
      title: "Polîtîkaya cookies",
      description:
        "Agahdarî derbarê pelên cookie û analîtîkê li ser malpera derxistina sîgorteya transsînorî.",
    },
  },
  ar: {
    home: {
      title: "تأمين حدودي (OC graniczne) عبر الإنترنت | SINEDIS.",
      description:
        "استخرج التأمين الحدودي للدخول إلى بولندا والاتحاد الأوروبي: حساب السعر، الطلب، الدفع ووثيقة PDF.",
    },

    about: {
      title: "من نحن — وكالة تأمين مرخصة",
      description:
        "وكالة تأمين بولندية للمسافرين، متخصصة في إصدار تأمين الحدود للدخول إلى دول المنطقة الاقتصادية الأوروبية.",
    },

    contacts: {
      title: "اتصل بنا — إصدار تأمين الحدود",
      description:
        "تواصل مع وكيل تأمين الحدود للمسافرين على الطرق بين دول الاتحاد الأوروبي والدول الأخرى.",
    },

    productInfo: {
      title:
        "المنتج والتغطية — البطاقة الخضراء / MTPL عابر للحدود / OC Graniczna",
      description:
        "شروط ونطاق تغطية التأمين العابر للحدود، بما في ذلك البطاقة الخضراء وتأمين الحدود لرحلات العبور داخل الاتحاد الأوروبي والدول المجاورة.",
    },

    rules: {
      title: "شروط وأحكام تقديم الخدمات",
      description:
        "القواعد المنظمة لإصدار واستخدام تأمين الحدود والبطاقة الخضراء أثناء السفر عبر الحدود الدولية.",
    },

    privacy: {
      title: "سياسة الخصوصية",
      description:
        "كيفية معالجة البيانات الشخصية للعملاء عند إصدار تأمين MTPL الدولي.",
    },

    cookiePolicy: {
      title: "سياسة ملفات تعريف الارتباط",
      description:
        "معلومات حول ملفات تعريف الارتباط وأدوات التحليل المستخدمة على موقع إصدار التأمين العابر للحدود.",
    },
  },


  uk: {
    home: {
      title: "Прикордонне страхування (OC graniczne) онлайн | SINEDIS.",
      description:
        "Оформіть прикордонне страхування для в’їзду до Польщі та ЄС: розрахунок, заявка, оплата і PDF-поліс.",
    },
    about: {
      title: "Про нас — ліцензоване страхове агентство",
      description:
        "Польське страхове агентство для подорожуючих: оформлення прикордонного страхування для поїздок до країн Європейського економічного простору.",
    },
    contacts: {
      title: "Контакти — оформити прикордонне страхування",
      description:
        "Зв’яжіться зі страховим агентом для оформлення прикордонного страхування під час подорожей маршрутами між країнами ЄС та за його межами.",
    },
    productInfo: {
      title:
        "Страховий продукт і покриття — Green Card / MTPL cross-border / OC graniczne",
      description:
        "Умови та страхове покриття транскордонного страхування: Green Card, border insurance, маршрути транзиту через країни ЄС та сусідні держави.",
    },
    rules: {
      title: "Правила надання послуг",
      description:
        "Правила оформлення та використання прикордонного страхування і Green Card для міжнародних поїздок.",
    },
    privacy: {
      title: "Політика конфіденційності",
      description:
        "Як обробляються персональні дані клієнтів під час оформлення міжнародного страхування цивільної відповідальності власників транспортних засобів.",
    },
    cookiePolicy: {
      title: "Політика використання файлів cookie",
      description:
        "Інформація про файли cookie та аналітику на сайті оформлення транскордонного страхування.",
    },
  },

  he: {
    home: {
      title: "ביטוח גבול (OC graniczne) אונליין | SINEDIS.",
      description:
        "הנפיקו ביטוח גבול לכניסה לפולין ולאיחוד האירופי: חישוב, בקשה, תשלום ופוליסה ב-PDF.",
    },
    about: {
      title: "אודותינו — סוכנות ביטוח בעלת רישיון",
      description:
        "סוכנות ביטוח פולנית לנוסעים ולנהגים, המתמחה בהנפקת ביטוח גבול למדינות המרחב הכלכלי האירופי.",
    },
    contacts: {
      title: "יצירת קשר — הנפקת ביטוח גבול",
      description:
        "צרו קשר עם סוכן ביטוח גבול לקבלת כיסוי לנסיעות בין מדינות האיחוד האירופי ומדינות מחוץ לאיחוד.",
    },
    productInfo: {
      title:
        "מידע על המוצר והכיסוי — Green Card / MTPL Cross-Border / OC Graniczne",
      description:
        "תנאי הביטוח והכיסוי לביטוח חוצה גבולות: Green Card, ביטוח גבול, מסלולי מעבר באיחוד האירופי ומדינות שכנות.",
    },
    rules: {
      title: "תנאי השירות",
      description:
        "כללי ההנפקה והשימוש בביטוח גבול וב-Green Card לנסיעות בין מדינות.",
    },
    privacy: {
      title: "מדיניות פרטיות",
      description:
        "אופן עיבוד הנתונים האישיים של לקוחות בעת הנפקת ביטוח MTPL בינלאומי.",
    },
    cookiePolicy: {
      title: "מדיניות Cookies",
      description:
        "מידע על קובצי Cookie וכלי אנליטיקה באתר להנפקת ביטוח חוצה גבולות.",
    },
  },

  az: {
    home: {
      title: "Sərhəd sığortası (OC graniczne) onlayn | SINEDIS.",
      description:
        "Polşa və Aİ-yə giriş üçün sərhəd sığortasını rəsmiləşdirin: hesablama, müraciət, ödəniş və PDF polis.",
    },
    about: {
      title: "Haqqımızda — lisenziyalı sığorta agentliyi",
      description:
        "Səyahət edənlər üçün Polşa sığorta agentliyi: Avropa İqtisadi Məkanına daxil olan ölkələr üçün sərhəd sığortasının rəsmiləşdirilməsi.",
    },
    contacts: {
      title: "Əlaqə — border insurance rəsmiləşdirilməsi",
      description:
        "Aİ və Aİ-yə daxil olmayan ölkələr üzrə marşrutlarla səyahət edənlər üçün sərhəd sığortası agenti ilə əlaqə saxlayın.",
    },
    productInfo: {
      title:
        "Məhsul və sığorta təminatı — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Transsərhəd sığortanın şərtləri və təminatı: Green Card, border insurance, Aİ tranzit marşrutları və qonşu ölkələr.",
    },
    rules: {
      title: "Xidmətlərin göstərilməsi qaydaları",
      description:
        "Sərhəd sığortası və Green Card polisinin rəsmiləşdirilməsi və istifadəsi qaydaları.",
    },
    privacy: {
      title: "Məxfilik siyasəti",
      description:
        "Beynəlxalq MTPL sığortasının rəsmiləşdirilməsi zamanı müştərilərin şəxsi məlumatlarının emalı qaydası.",
    },
    cookiePolicy: {
      title: "Cookie siyasəti",
      description:
        "Transsərhəd sığortanın rəsmiləşdirilməsi saytında istifadə olunan cookie faylları və analitika haqqında məlumat.",
    },
  },

  ro: {
    home: {
      title: "Asigurare de frontieră (OC graniczne) online | SINEDIS.",
      description:
        "Încheiați asigurare de frontieră pentru intrarea în Polonia și UE: calcul, cerere, plată și poliță PDF.",
    },
    about: {
      title: "Despre noi — agenție de asigurări autorizată",
      description:
        "Agenție de asigurări din Polonia pentru călători: emiterea asigurărilor de frontieră pentru țările din Spațiul Economic European.",
    },
    contacts: {
      title: "Contacte — solicită asigurare de frontieră",
      description:
        "Contactați un agent de asigurări de frontieră pentru călătorii pe rute între țări din UE și din afara UE.",
    },
    productInfo: {
      title:
        "Produs și acoperire — Carte Verde / MTPL transfrontalieră / OC graniczne",
      description:
        "Condiții și acoperire pentru asigurarea transfrontalieră: Carte Verde, asigurare de frontieră, tranzit în UE și țările învecinate.",
    },
    rules: {
      title: "Termeni și condiții de utilizare",
      description:
        "Reguli privind emiterea și utilizarea asigurării de frontieră și a poliței Carte Verde pentru călătorii internaționale.",
    },
    privacy: {
      title: "Politica de confidențialitate",
      description:
        "Modul în care sunt prelucrate datele cu caracter personal ale clienților la emiterea asigurării internaționale MTPL.",
    },
    cookiePolicy: {
      title: "Politica privind fișierele cookie",
      description:
        "Informații despre utilizarea fișierelor cookie și a instrumentelor de analiză pe site-ul de emitere a asigurărilor transfrontaliere.",
    },
  },

  sr: {
    home: {
      title: "Granično osiguranje (OC graniczne) online | SINEDIS.",
      description:
        "Ugovorite granično osiguranje za ulazak u Poljsku i EU: obračun, zahtev, plaćanje i PDF polisa.",
    },
    about: {
      title: "O nama — licencirana agencija za osiguranje",
      description:
        "Poljska agencija za osiguranje namenjena putnicima: ugovaranje graničnog osiguranja za zemlje Evropskog ekonomskog prostora.",
    },
    contacts: {
      title: "Kontakti — ugovaranje graničnog osiguranja",
      description:
        "Kontaktirajte agenta za granično osiguranje za putovanja na relacijama između država EU i zemalja van EU.",
    },
    productInfo: {
      title:
        "Proizvod i osiguravajuće pokriće — Zelena karta / prekogranično MTPL osiguranje / OC graniczne",
      description:
        "Uslovi i pokriće prekograničnog osiguranja: Zelena karta, granično osiguranje, tranzitne rute kroz EU i susedne države.",
    },
    rules: {
      title: "Pravila pružanja usluga",
      description:
        "Pravila ugovaranja i korišćenja graničnog osiguranja i Zelene karte za međunarodna putovanja.",
    },
    privacy: {
      title: "Politika privatnosti",
      description:
        "Način obrade ličnih podataka klijenata prilikom ugovaranja međunarodnog MTPL osiguranja.",
    },
    cookiePolicy: {
      title: "Politika kolačića",
      description:
        "Informacije o kolačićima i analitičkim alatima na sajtu za ugovaranje prekograničnog osiguranja.",
    },
  },

  sq: {
    home: {
      title: "Sigurim kufitar (OC graniczne) online | SINEDIS.",
      description:
        "Pajisuni me sigurim kufitar për hyrje në Poloni dhe BE: përllogaritje, aplikim, pagesë dhe policë PDF.",
    },
    about: {
      title: "Rreth nesh — agjenci sigurimesh e licencuar",
      description:
        "Agjenci polake sigurimesh për udhëtarët: lëshimi i sigurimit kufitar për vendet e Zonës Ekonomike Evropiane.",
    },
    contacts: {
      title: "Kontaktet — aplikoni për border insurance",
      description:
        "Kontaktoni një agjent të sigurimit kufitar për udhëtime në itinerare brenda dhe jashtë BE-së.",
    },
    productInfo: {
      title:
        "Produkti dhe mbulimi — Green Card / MTPL ndërkufitar / OC graniczne",
      description:
        "Kushtet dhe mbulimi i sigurimit ndërkufitar: Green Card, border insurance, itinerare tranziti në BE dhe vendet fqinje.",
    },
    rules: {
      title: "Rregullat e ofrimit të shërbimeve",
      description:
        "Rregullat për lëshimin dhe përdorimin e border insurance dhe Green Card për udhëtime ndërkufitare.",
    },
    privacy: {
      title: "Politika e privatësisë",
      description:
        "Si përpunohen të dhënat personale të klientëve gjatë lëshimit të sigurimit ndërkombëtar MTPL.",
    },
    cookiePolicy: {
      title: "Politika e cookies",
      description:
        "Informacion mbi skedarët cookie dhe analitikën në faqen e internetit për lëshimin e sigurimit ndërkufitar.",
    },
  },

  mn: {
    home: {
      title: "Хилийн даатгал (OC graniczne) онлайн | SINEDIS.",
      description:
        "Польш болон ЕХ-нд нэвтрэх хилийн даатгалыг бүрдүүлнэ үү: тооцоо, хүсэлт, төлбөр болон PDF полис.",
    },
    about: {
      title: "Бидний тухай — тусгай зөвшөөрөлтэй даатгалын агентлаг",
      description:
        "Аялагчдад зориулсан Польшийн даатгалын агентлаг: Европын эдийн засгийн бүсийн орнуудад зориулсан хилийн даатгалын бүрдүүлэлт.",
    },
    contacts: {
      title: "Холбоо барих — border insurance бүрдүүлэх",
      description:
        "ЕХ болон ЕХ-ны бус чиглэлээр зорчигчдод зориулсан хилийн даатгалын зөвлөхтэй холбогдоорой.",
    },
    productInfo: {
      title:
        "Бүтээгдэхүүн ба хамрах хүрээ — Green Card / MTPL cross-border / OC graniczna",
      description:
        "Хил дамнасан даатгалын нөхцөл ба хамгаалалт: Green Card, border insurance, ЕХ-ны транзит маршрут болон хөрш орнууд.",
    },
    rules: {
      title: "Үйлчилгээ үзүүлэх журам",
      description:
        "Хил дамнасан даатгал болон Green Card-ыг хилээр зорчих үед бүрдүүлэх, ашиглах журам.",
    },
    privacy: {
      title: "Нууцлалын бодлого",
      description:
        "Олон улсын MTPL даатгал бүрдүүлэх үед харилцагчийн хувийн мэдээллийг хэрхэн боловсруулдаг тухай.",
    },
    cookiePolicy: {
      title: "Cookie файлын бодлого",
      description:
        "Хил дамнасан даатгалын вебсайт дээр ашиглагдах cookie файл болон аналитикийн талаарх мэдээлэл.",
    },
  },

};



export function getSeoDictionary(lang: Lang): SeoDictionary {
  const base = seoDictionary[lang];
  const georgiaLandingSeo = getGeorgiaRomaniaOcDictionary(lang).seo;
  const belarusLandingSeo = getBelarusPolandOcDictionary(lang).seo;
  const belarusLithuaniaLandingSeo = belarusLithuaniaOcDictionary[lang].seo;
  const uaeOcLandingSeo = getUaeOcDictionary(lang).seo;

  return {
    ...base,
    georgiaRomaniaOc: {
      title: georgiaLandingSeo.title,
      description: georgiaLandingSeo.description,
    },
    belarusPolandOc: {
      title: belarusLandingSeo.title,
      description: belarusLandingSeo.description,
    },
    belarusLithuaniaOc: {
      title: belarusLithuaniaLandingSeo.title,
      description: belarusLithuaniaLandingSeo.description,
    },
    uaeOc: {
      title: uaeOcLandingSeo.title,
      description: uaeOcLandingSeo.description,
    },
  };
}