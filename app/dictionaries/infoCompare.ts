// app/dictionaries/infoCompare.ts
import type { Lang } from "@/app/dictionaries/header";

export interface InfoCompareDictionary {
  kicker: string;
  title: string;

  leftBlocks: Array<{
    strong: string;
    text: string;
  }>;

  rightTitle: string;

  rows: Array<{
    title: string;
    text: string;
  }>;

  note: string;
}

export const infoCompareDictionary: Record<Lang, InfoCompareDictionary> = {
  ru: {
    kicker: "ТЕРМИНЫ",
    title: "Договор пограничного страхования (OC graniczne) ≠ Зелёная карта",

    leftBlocks: [
      {
        strong: "Договор пограничного страхования (OC graniczne)",
        text:
          "— это полис гражданской ответственности, который оформляется при въезде в ЕС в отношении транспортных средств, зарегистрированных  в странах не входящих в Европейское экономическое пространство, если у вас нет действующей «Зелёной карты». Полис действует ограниченный срок и только в указанных странах.",
      },
      {
        strong: "Зелёная карта",
        text:
          "— международный полис ОС, который вы оформляете в стране регистрации автомобиля до выезда и используете в странах — участниках системы «Зелёная карта».",
      },
    ],

    rightTitle: "Что нужно именно вам?",

    rows: [
      {
        title: "Зелёная карта",
        text:
          "У вас есть возможность оформить полис Зеленой карты дома, и страна въезда принимает «Зелёную карту».",
      },
      {
        title: "Договор трансграничного страхования",
        text:
          "Вы въезжаете в ЕС без действующей «Зелёной карты», а автомобиль зарегистрирован вне Европейского экономического пространства.",
      },
      {
        title: "Наш сервис",
        text:
          "Мы помогаем дистанционно оформить Договор трансграничного страхования для въезда, например, в Польшу и другие страны ЕС.",
      },
    ],

    note:
      "Если сомневаетесь, что вам нужно — укажите маршрут и страну регистрации в заявке. Мы подскажем, подойдёт ли «Зелёная карта» или потребуется пограничное страхование.",
  },
  pl: {
    kicker: "TERMINOLOGIA",
    title:
      "Ubezpieczenie graniczne (OC graniczne) ≠ Zielona Karta",

    leftBlocks: [
      {
        strong: "Ubezpieczenie graniczne (OC graniczne)",
        text:
          "— to polisa odpowiedzialności cywilnej zawierana przy wjeździe do UE dla pojazdów zarejestrowanych w państwach nienależących do Europejskiego Obszaru Gospodarczego, jeżeli kierowca nie posiada ważnej Zielonej Karty. Polisa obowiązuje przez ograniczony okres i wyłącznie w określonych krajach.",
      },
      {
        strong: "Zielona Karta",
        text:
          "— międzynarodowy certyfikat ubezpieczenia OC, który zawiera się w kraju rejestracji pojazdu przed wyjazdem i wykorzystuje w państwach należących do systemu Zielonej Karty.",
      },
    ],

    rightTitle: "Którego rozwiązania potrzebujesz?",

    rows: [
      {
        title: "Zielona Karta",
        text:
          "Masz możliwość zawarcia Zielonej Karty w kraju rejestracji pojazdu, a kraj docelowy akceptuje system Zielonej Karty.",
      },
      {
        title: "Ubezpieczenie graniczne",
        text:
          "Wjeżdżasz do UE bez ważnej Zielonej Karty, a pojazd jest zarejestrowany poza Europejskim Obszarem Gospodarczym.",
      },
      {
        title: "Nasz serwis",
        text:
          "Pomagamy zdalnie zawrzeć ubezpieczenie graniczne umożliwiające wjazd między innymi do Polski i innych krajów UE.",
      },
    ],

    note:
      "Jeżeli nie masz pewności, którego rozwiązania potrzebujesz — podaj trasę oraz kraj rejestracji pojazdu we wniosku. Pomożemy ustalić, czy wystarczy Zielona Karta, czy wymagane będzie ubezpieczenie graniczne.",
  },
  en: {
    kicker: "TERMS",
    title:
      "Border Insurance Agreement (OC graniczne) ≠ Green Card",

    leftBlocks: [
      {
        strong: "Border Insurance Agreement (OC graniczne)",
        text:
          "— is a motor third-party liability insurance policy issued upon entry into the EU for vehicles registered in countries outside the European Economic Area, if you do not have a valid Green Card. The policy is valid for a limited period and only in the countries specified in the policy.",
      },
      {
        strong: "Green Card",
        text:
          "— is an international motor liability insurance policy arranged in the country where the vehicle is registered before departure and used in countries participating in the Green Card System.",
      },
    ],

    rightTitle: "Which Option Do You Need?",

    rows: [
      {
        title: "Green Card",
        text:
          "You are able to arrange a Green Card policy in your home country, and the country of entry accepts Green Card coverage.",
      },
      {
        title: "Border Insurance Agreement",
        text:
          "You are entering the EU without a valid Green Card, and the vehicle is registered outside the European Economic Area.",
      },
      {
        title: "Our Service",
        text:
          "We assist with the remote arrangement of Border Insurance Agreements for entry into Poland and other EU countries.",
      },
    ],

    note:
      "If you are unsure which type of insurance you need, specify your route and the vehicle registration country in the application form. We will advise whether a Green Card is sufficient or whether border insurance is required.",
  },
  be: {
    kicker: "ТЭРМІНЫ",
    title:
      "Дагавор памежнага страхавання (OC graniczne) ≠ Зялёная карта",

    leftBlocks: [
      {
        strong:
          "Дагавор памежнага страхавання (OC graniczne)",
        text:
          "— гэта поліс грамадзянскай адказнасці, які афармляецца пры ўездзе ў ЕС у дачыненні да транспартных сродкаў, зарэгістраваных у краінах, што не ўваходзяць у Еўрапейскую эканамічную прастору, калі ў вас няма дзейнай «Зялёнай карты». Поліс дзейнічае абмежаваны тэрмін і толькі ў пазначаных краінах.",
      },
      {
        strong: "Зялёная карта",
        text:
          "— міжнародны поліс страхавання грамадзянскай адказнасці, які афармляецца ў краіне рэгістрацыі аўтамабіля да выезду і выкарыстоўваецца ў краінах — удзельніцах сістэмы «Зялёная карта».",
      },
    ],

    rightTitle: "Што патрэбна менавіта вам?",

    rows: [
      {
        title: "Зялёная карта",
        text:
          "У вас ёсць магчымасць аформіць поліс «Зялёная карта» ў сваёй краіне, і краіна ўезду прымае «Зялёную карту».",
      },
      {
        title:
          "Дагавор трансгранічнага страхавання",
        text:
          "Вы ўязджаеце ў ЕС без дзейнай «Зялёнай карты», а аўтамабіль зарэгістраваны па-за межамі Еўрапейскай эканамічнай прасторы.",
      },
      {
        title: "Наш сэрвіс",
        text:
          "Мы дапамагаем дыстанцыйна аформіць Дагавор трансгранічнага страхавання для ўезду, напрыклад, у Польшчу і іншыя краіны ЕС.",
      },
    ],

    note:
      "Калі вы сумняваецеся, што менавіта вам патрэбна — укажыце маршрут і краіну рэгістрацыі ў заяўцы. Мы падкажам, ці падыдзе «Зялёная карта», або спатрэбіцца памежнае страхаванне.",
  },
  uz: {
    kicker: "ATAMALAR",

    title:
      "Chegara sug‘urtasi shartnomasi (OC graniczne) ≠ Green Card",

    leftBlocks: [
      {
        strong:
          "Chegara sug‘urtasi shartnomasi (OC graniczne)",

        text:
          "— bu fuqarolik javobgarligi sug‘urta polisi bo‘lib, Yevropa iqtisodiy hududiga kirmaydigan davlatlarda ro‘yxatdan o‘tgan transport vositalari uchun, agar sizda amal qiluvchi «Green Card» bo‘lmasa, YI hududiga kirishda rasmiylashtiriladi. Polis cheklangan muddat davomida va faqat ko‘rsatilgan davlatlarda amal qiladi.",
      },

      {
        strong: "Green Card",

        text:
          "— bu xalqaro fuqarolik javobgarligi sug‘urta polisi bo‘lib, u avtomobil ro‘yxatdan o‘tgan mamlakatda safardan oldin rasmiylashtiriladi va «Green Card» tizimi ishtirokchisi bo‘lgan davlatlarda qo‘llaniladi.",
      },
    ],

    rightTitle: "Sizga aynan nima kerak?",

    rows: [
      {
        title: "Green Card",

        text:
          "Sizda Green Card polisini o‘z mamlakatingizda rasmiylashtirish imkoniyati mavjud va kirish davlati «Green Card»ni qabul qiladi.",
      },

      {
        title:
          "Transchegaraviy sug‘urta shartnomasi",

        text:
          "Siz YI hududiga amal qiluvchi «Green Card»siz kiryapsiz va avtomobil Yevropa iqtisodiy hududidan tashqarida ro‘yxatdan o‘tgan.",
      },

      {
        title: "Bizning xizmat",

        text:
          "Biz Polsha va boshqa YI davlatlariga kirish uchun transchegaraviy sug‘urta shartnomasini masofadan turib rasmiylashtirishga yordam beramiz.",
      },
    ],

    note:
      "Agar sizga qaysi sug‘urta kerakligiga ishonchingiz komil bo‘lmasa — arizada marshrut va avtomobil ro‘yxatdan o‘tgan davlatni ko‘rsating. Biz «Green Card» mos keladimi yoki chegara sug‘urtasi kerak bo‘ladimi, tushuntirib beramiz.",
  },
  ka: {
    kicker: "ტერმინები",
    title:
      "სასაზღვრო დაზღვევის ხელშეკრულება (OC graniczne) ≠ მწვანე ბარათი",

    leftBlocks: [
      {
        strong: "სასაზღვრო დაზღვევის ხელშეკრულება (OC graniczne)",
        text:
          "— ეს არის სამოქალაქო პასუხისმგებლობის პოლისი, რომელიც ფორმდება ევროკავშირში შესვლისას იმ სატრანსპორტო საშუალებებისთვის, რომლებიც რეგისტრირებულია ევროპის ეკონომიკური სივრცის გარეთ მდებარე ქვეყნებში, თუ თქვენ არ გაქვთ მოქმედი „მწვანე ბარათი“. პოლისი მოქმედებს შეზღუდული ვადით და მხოლოდ მითითებულ ქვეყნებში.",
      },
      {
        strong: "მწვანე ბარათი",
        text:
          "— საერთაშორისო სამოქალაქო პასუხისმგებლობის პოლისი, რომელიც ფორმდება ავტომობილის რეგისტრაციის ქვეყანაში გამგზავრებამდე და გამოიყენება „მწვანე ბარათის“ სისტემის წევრ ქვეყნებში.",
      },
    ],

    rightTitle: "რომელი პროდუქტი გჭირდებათ?",

    rows: [
      {
        title: "მწვანე ბარათი",
        text:
          "თქვენ შეგიძლიათ პოლისი წინასწარ გააფორმოთ საკუთარ ქვეყანაში და შესვლის ქვეყანა იღებს „მწვანე ბარათს“.",
      },
      {
        title: "სასაზღვრო დაზღვევის ხელშეკრულება",
        text:
          "თქვენ შედიხართ ევროკავშირში მოქმედი „მწვანე ბარათის“ გარეშე, ხოლო ავტომობილი რეგისტრირებულია ევროპის ეკონომიკური სივრცის ფარგლებს გარეთ.",
      },
      {
        title: "ჩვენი სერვისი",
        text:
          "ჩვენ დისტანციურად გეხმარებით სასაზღვრო დაზღვევის ხელშეკრულების გაფორმებაში პოლონეთსა და ევროკავშირის სხვა ქვეყნებში შესასვლელად.",
      },
    ],

    note:
      "თუ არ ხართ დარწმუნებული, რომელი პროდუქტი გჭირდებათ — განაცხადში მიუთითეთ მარშრუტი და ავტომობილის რეგისტრაციის ქვეყანა. ჩვენ გეტყვით, გამოგადგებათ თუ არა „მწვანე ბარათი“ ან დაგჭირდებათ სასაზღვრო დაზღვევა.",
  },
  kk: {
    kicker: "ТЕРМИНДЕР",
    title:
      "Шекаралық сақтандыру шарты (OC graniczne) ≠ Жасыл карта",

    leftBlocks: [
      {
        strong: "Шекаралық сақтандыру шарты (OC graniczne)",
        text:
          "— бұл Еуропалық экономикалық аймаққа кірмейтін елдерде тіркелген көлік құралдары үшін ЕО аумағына кіру кезінде рәсімделетін азаматтық-құқықтық жауапкершілікті сақтандыру полисі, егер сізде жарамды «Жасыл карта» болмаса. Полис шектеулі мерзімге және тек көрсетілген елдерде әрекет етеді.",
      },
      {
        strong: "Жасыл карта",
        text:
          "— бұл халықаралық азаматтық жауапкершілік сақтандыру полисі, ол көлік тіркелген елде шетелге шығар алдында рәсімделеді және «Жасыл карта» жүйесіне қатысушы елдерде пайдаланылады.",
      },
    ],

    rightTitle: "Сізге нақты қайсысы қажет?",

    rows: [
      {
        title: "Жасыл карта",
        text:
          "Сізде «Жасыл карта» полисін өз еліңізде рәсімдеу мүмкіндігі бар және кіру елі бұл полисті қабылдайды.",
      },
      {
        title: "Трансшекаралық сақтандыру шарты",
        text:
          "Сіз ЕО аумағына жарамды «Жасыл картасыз» кіріп жатырсыз, ал көлік Еуропалық экономикалық аймақтан тыс елде тіркелген.",
      },
      {
        title: "Біздің сервис",
        text:
          "Біз Польшаға және ЕО-ның басқа елдеріне кіру үшін трансшекаралық сақтандыру шартын қашықтан рәсімдеуге көмектесеміз.",
      },
    ],

    note:
      "Егер сізге қандай сақтандыру қажет екеніне сенімді болмасаңыз — өтінімде маршрутыңызды және көлік тіркелген елді көрсетіңіз. Біз «Жасыл карта» жеткілікті ме немесе шекаралық сақтандыру қажет пе екенін түсіндіреміз.",
  },
  tr: {
    kicker: "TERİMLER",
    title:
      "Sınır Sigortası Sözleşmesi (OC graniczne) ≠ Yeşil Kart",

    leftBlocks: [
      {
        strong: "Sınır Sigortası Sözleşmesi (OC graniczne)",
        text:
          "— Avrupa Ekonomik Alanı’na dahil olmayan ülkelerde kayıtlı araçlar için, geçerli bir “Yeşil Kart” bulunmadığında AB’ye giriş sırasında düzenlenen zorunlu mali sorumluluk sigortasıdır. Poliçe sınırlı süreyle ve yalnızca belirtilen ülkelerde geçerlidir.",
      },
      {
        strong: "Yeşil Kart",
        text:
          "— aracın kayıtlı olduğu ülkede, yurt dışına çıkmadan önce düzenlenen ve “Yeşil Kart” sistemine dahil ülkelerde kullanılan uluslararası motorlu taşıt sorumluluk sigortası poliçesidir.",
      },
    ],

    rightTitle: "Sizin İçin Hangisi Gereklidir?",

    rows: [
      {
        title: "Yeşil Kart",
        text:
          "Poliçeyi kendi ülkenizde düzenleme imkânınız varsa ve giriş yapacağınız ülke “Yeşil Kart” sistemini kabul ediyorsa.",
      },
      {
        title: "Sınır Ötesi Sigorta Sözleşmesi",
        text:
          "Geçerli bir “Yeşil Kart” olmadan AB’ye giriş yapıyorsanız ve aracınız Avrupa Ekonomik Alanı dışında kayıtlıysa.",
      },
      {
        title: "Hizmetimiz",
        text:
          "Polonya ve diğer AB ülkelerine giriş için sınır ötesi sigorta sözleşmesinin uzaktan düzenlenmesine yardımcı oluyoruz.",
      },
    ],

    note:
      "Hangi sigortaya ihtiyacınız olduğundan emin değilseniz, başvuruda güzergâhınızı ve aracın kayıtlı olduğu ülkeyi belirtin. “Yeşil Kart”ın yeterli olup olmadığını veya sınır sigortası gerekip gerekmediğini size bildirelim.",
  },
  fa: {
    kicker: "اصطلاحات",
    title:
      "قرارداد بیمه مرزی (OC graniczne) ≠ گرین کارت",

    leftBlocks: [
      {
        strong: "قرارداد بیمه مرزی (OC graniczne)",
        text:
          "— بیمه‌نامه مسئولیت مدنی است که هنگام ورود به اتحادیه اروپا برای وسایل نقلیه ثبت‌شده در کشورهای خارج از منطقه اقتصادی اروپا صادر می‌شود، در صورتی که «گرین کارت» معتبر نداشته باشید. این بیمه‌نامه دارای مدت اعتبار محدود بوده و فقط در کشورهای مشخص‌شده معتبر است.",
      },
      {
        strong: "گرین کارت",
        text:
          "— بیمه‌نامه بین‌المللی مسئولیت مدنی است که پیش از خروج از کشور محل ثبت خودرو صادر می‌شود و در کشورهای عضو سیستم «گرین کارت» مورد استفاده قرار می‌گیرد.",
      },
    ],

    rightTitle: "کدام گزینه برای شما مناسب است؟",

    rows: [
      {
        title: "گرین کارت",
        text:
          "شما امکان صدور بیمه‌نامه گرین کارت را در کشور خود دارید و کشور مقصد ورود، «گرین کارت» را می‌پذیرد.",
      },
      {
        title: "قرارداد بیمه فرامرزی",
        text:
          "شما بدون «گرین کارت» معتبر وارد اتحادیه اروپا می‌شوید و وسیله نقلیه در خارج از منطقه اقتصادی اروپا ثبت شده است.",
      },
      {
        title: "خدمات ما",
        text:
          "ما در صدور غیرحضوری قرارداد بیمه فرامرزی برای ورود به لهستان و سایر کشورهای اتحادیه اروپا به شما کمک می‌کنیم.",
      },
    ],

    note:
      "اگر مطمئن نیستید به چه نوع بیمه‌ای نیاز دارید، مسیر سفر و کشور ثبت وسیله نقلیه را در درخواست خود ذکر کنید. ما بررسی خواهیم کرد که آیا «گرین کارت» مناسب است یا به بیمه مرزی نیاز دارید.",
  },
  hy: {
    kicker: "ՏԵՐՄԻՆՆԵՐ",
    title:
      "Սահմանային ապահովագրության պայմանագիր (OC graniczne) ≠ Green Card",

    leftBlocks: [
      {
        strong: "Սահմանային ապահովագրության պայմանագիր (OC graniczne)",
        text:
          "— քաղաքացիական պատասխանատվության ապահովագրական պոլիս է, որը ձևակերպվում է ԵՄ մուտք գործելիս այն տրանսպորտային միջոցների համար, որոնք գրանցված են Եվրոպական տնտեսական տարածքից դուրս գտնվող երկրներում, եթե դուք չունեք գործող «Green Card»։ Պոլիսը գործում է սահմանափակ ժամկետով և միայն նշված երկրներում։",
      },
      {
        strong: "Green Card",
        text:
          "— միջազգային քաղաքացիական պատասխանատվության ապահովագրության պոլիս է, որը ձևակերպվում է ավտոմեքենայի գրանցման երկրում մինչև արտասահման մեկնելը և օգտագործվում է «Green Card» համակարգի անդամ երկրներում։",
      },
    ],

    rightTitle: "Ի՞նչ է անհրաժեշտ հենց ձեզ։",

    rows: [
      {
        title: "Green Card",
        text:
          "Դուք հնարավորություն ունեք ձևակերպել Green Card պոլիսը ձեր երկրում, և մուտքի երկիրը ընդունում է «Green Card»-ը։",
      },
      {
        title: "Միջսահմանային ապահովագրության պայմանագիր",
        text:
          "Դուք մուտք եք գործում ԵՄ առանց գործող «Green Card»-ի, իսկ ավտոմեքենան գրանցված է Եվրոպական տնտեսական տարածքից դուրս։",
      },
      {
        title: "Մեր ծառայությունը",
        text:
          "Մենք օգնում ենք հեռավար ձևակերպել միջսահմանային ապահովագրության պայմանագիր՝ օրինակ Լեհաստան և ԵՄ այլ երկրներ մուտք գործելու համար։",
      },
    ],

    note:
      "Եթե վստահ չեք, թե ինչ է ձեզ անհրաժեշտ, հայտում նշեք երթուղին և գրանցման երկիրը։ Մենք կհուշենք՝ բավարար կլինի արդյոք «Green Card»-ը, թե անհրաժեշտ կլինի սահմանային ապահովագրություն։",
  },
  ckb: {
    kicker: "زاراوەکان",
    title: "بیمەی سنووری (OC Graniczne) ≠ گرین کارت",

    leftBlocks: [
      {
        strong: "بیمەی سنووری (OC Graniczne)",
        text:
          "— بیمەنامەی بەرپرسیاری شارستانییە کە کاتی چوونە ناو یەکێتی ئەورووپا بۆ ئامرازە گواستنەوە تۆمارکراوەکان لە وڵاتانی دەرەوەی ناوچەی ئابووری ئەورووپا دەر دەکرێت، ئەگەر «گرین کارت»ی کارات پێ نەبێت. ئەم بیمەنامەیە تەنها بۆ ماوەیەکی دیاریکراو و لەو وڵاتانەدا کارا دەبێت کە لە بیمەنامەکەدا هاتوون.",
      },
      {
        strong: "گرین کارت",
        text:
          "— بیمەنامەیەکی نێودەوڵەتی بەرپرسیاری شارستانییە کە پێش گەشت لە وڵاتی تۆمارکردنی ئۆتۆمبێلەکەت وەردەگریت و لە وڵاتە ئەندامەکانی سیستەمی «گرین کارت» بەکاردێت.",
      },
    ],

    rightTitle: "کام یەک پێویستتە؟",

    rows: [
      {
        title: "گرین کارت",
        text:
          "دەتوانیت لە وڵاتی خۆت بیمەنامەی گرین کارت وەربگریت و وڵاتی مەبەستیش گرین کارت قبووڵ دەکات.",
      },
      {
        title: "بیمەی سنووری",
        text:
          "بەبێ گرین کارتی کارا دەچیتە ناو یەکێتی ئەورووپا و ئۆتۆمبێلەکەت لە دەرەوەی ناوچەی ئابووری ئەورووپا تۆمار کراوە.",
      },
      {
        title: "خزمەتگوزاری ئێمە",
        text:
          "یارمەتیت دەدەین بە شێوەی دوورەوە بیمەی سنووری بۆ چوونە ناو پۆڵەندا و وڵاتانی تری یەکێتی ئەورووپا وەربگریت.",
      },
    ],

    note:
      "ئەگەر دڵنیانیت کام جۆری بیمە پێویستتە، لە داواکارییەکەدا ڕێگاکە و وڵاتی تۆمارکردنی ئۆتۆمبێلەکە بنووسە. پێت دەڵێین ئایا گرین کارت گونجاوە یان بیمەی سنووری پێویستە.",
  },
  kmr: {
    kicker: "TERM",
    title: "Peymana Sîgorteya Sînorî (OC Graniczne) ≠ Green Card",

    leftBlocks: [
      {
        strong: "Peymana Sîgorteya Sînorî (OC Graniczne)",
        text:
          "— polîçeyek berpirsiyariya sivîl e ku dema ketina Yekîtiya Ewropayê ji bo wesayîtên ku li welatên derveyî Herêma Aborî ya Ewropayê hatine qeydkirin tê derxistin, heke hûn Green Card-a derbasdar nebin. Ev polîçe tenê ji bo demek diyarkirî û li welatên ku di polîçeyê de hatine destnîşankirin derbasdar e.",
      },
      {
        strong: "Green Card",
        text:
          "— polîçeyek navneteweyî ya berpirsiyariya sivîl e ku hûn wê berî rêketinê li welatê qeydkirina wesayîtê derdixin û li welatên endamê pergala Green Card bikar tînin.",
      },
    ],

    rightTitle: "Hûn bi rastî çi hewce ne?",

    rows: [
      {
        title: "Green Card",
        text:
          "Hûn dikarin Green Card li welatê xwe derxînin û welata ku hûn lê diçin Green Card qebûl dike.",
      },
      {
        title: "Peymana Sîgorteya Sînorî",
        text:
          "Hûn bê Green Card-a derbasdar dikevin Yekîtiya Ewropayê û wesayîta we li derveyî Herêma Aborî ya Ewropayê qeydkirî ye.",
      },
      {
        title: "Xizmeta me",
        text:
          "Em alîkariyê dikin ku hûn Peymana Sîgorteya Sînorî ji dûr ve derxînin, bo nimûne ji bo ketina Polonya û welatên din ên Yekîtiya Ewropayê.",
      },
    ],

    note:
      "Heke hûn ne bawer in ku kîjan berhem hewce ye, di daxwazê de rê û welata qeydkirina wesayîtê binivîsin. Em ê ji we re bêjin ka Green Card bes e an jî sîgorteya sînorî pêwîst e.",
  },
  ar: {
    kicker: "المصطلحات",
    title: "تأمين الحدود (OC Graniczne) ≠ البطاقة الخضراء",

    leftBlocks: [
      {
        strong: "تأمين الحدود (OC Graniczne)",
        text:
          "هو وثيقة تأمين للمسؤولية المدنية يتم إصدارها عند دخول الاتحاد الأوروبي للمركبات المسجلة في دول خارج المنطقة الاقتصادية الأوروبية، وذلك في حال عدم توفر بطاقة خضراء سارية المفعول. تكون الوثيقة محددة المدة وتسري فقط في الدول المذكورة فيها.",
      },
      {
        strong: "البطاقة الخضراء",
        text:
          "هي وثيقة تأمين دولية للمسؤولية المدنية يتم إصدارها في بلد تسجيل المركبة قبل السفر، وتُستخدم في الدول الأعضاء في نظام البطاقة الخضراء.",
      },
    ],

    rightTitle: "ما التأمين الذي تحتاجه؟",

    rows: [
      {
        title: "البطاقة الخضراء",
        text:
          "إذا كان بإمكانك إصدار البطاقة الخضراء في بلدك وكانت دولة الدخول تقبل هذا النوع من التأمين.",
      },
      {
        title: "تأمين الحدود",
        text:
          "إذا كنت تدخل الاتحاد الأوروبي دون بطاقة خضراء سارية وكانت مركبتك مسجلة خارج المنطقة الاقتصادية الأوروبية.",
      },
      {
        title: "خدمتنا",
        text:
          "نساعدك على إصدار تأمين الحدود عن بُعد لدخول بولندا ودول الاتحاد الأوروبي الأخرى.",
      },
    ],

    note:
      "إذا لم تكن متأكدًا من نوع التأمين المناسب، فاذكر مسار رحلتك وبلد تسجيل المركبة في الطلب. سنوضح لك ما إذا كانت البطاقة الخضراء كافية أو إذا كنت بحاجة إلى تأمين حدودي.",
  },

  uk: {
    kicker: "ТЕРМІНИ",
    title: "Договір прикордонного страхування (OC graniczne) ≠ Зелена картка",

    leftBlocks: [
      {
        strong: "Договір прикордонного страхування (OC graniczne)",
        text:
          "— це поліс страхування цивільної відповідальності, який оформлюється під час в’їзду до ЄС щодо транспортних засобів, зареєстрованих у країнах, що не входять до Європейського економічного простору, якщо у вас немає чинної «Зеленої картки». Поліс діє протягом обмеженого строку та лише в зазначених країнах.",
      },
      {
        strong: "Зелена картка",
        text:
          "— міжнародний поліс страхування цивільної відповідальності, який оформлюється в країні реєстрації автомобіля до виїзду та використовується в країнах — учасницях системи «Зелена картка».",
      },
    ],

    rightTitle: "Що потрібно саме вам?",

    rows: [
      {
        title: "Зелена картка",
        text:
          "У вас є можливість оформити поліс «Зелена картка» у своїй країні, а країна в’їзду приймає цей вид страхування.",
      },
      {
        title: "Договір прикордонного страхування",
        text:
          "Ви в’їжджаєте до ЄС без чинної «Зеленої картки», а автомобіль зареєстрований за межами Європейського економічного простору.",
      },
      {
        title: "Наш сервіс",
        text:
          "Ми допомагаємо дистанційно оформити договір прикордонного страхування для в’їзду, наприклад, до Польщі та інших країн ЄС.",
      },
    ],

    note:
      "Якщо ви не впевнені, який поліс вам потрібен, вкажіть маршрут і країну реєстрації транспортного засобу в заявці. Ми підкажемо, чи підійде «Зелена картка», чи буде потрібне прикордонне страхування.",
  },

  he: {
    kicker: "מונחים",
    title: "ביטוח גבול (OC Graniczne) ≠ גרין קארד",

    leftBlocks: [
      {
        strong: "ביטוח גבול (OC Graniczne)",
        text:
          "— פוליסת ביטוח אחריות כלפי צד שלישי המונפקת בעת כניסה לאיחוד האירופי עבור כלי רכב הרשומים במדינות שאינן חלק מהמרחב הכלכלי האירופי, כאשר אין ברשותכם פוליסת 'גרין קארד' בתוקף. הפוליסה תקפה לתקופה מוגבלת ורק במדינות המצוינות בה.",
      },
      {
        strong: "גרין קארד",
        text:
          "— פוליסת ביטוח אחריות בינלאומית המונפקת במדינת הרישום של הרכב לפני היציאה לחו״ל ומשמשת במדינות החברות במערכת 'גרין קארד'.",
      },
    ],

    rightTitle: "איזה ביטוח אתם צריכים?",

    rows: [
      {
        title: "גרין קארד",
        text:
          "יש לכם אפשרות להנפיק פוליסת גרין קארד במדינתכם, ומדינת היעד מכירה במערכת 'גרין קארד'.",
      },
      {
        title: "ביטוח גבול",
        text:
          "אתם נכנסים לאיחוד האירופי ללא פוליסת 'גרין קארד' בתוקף, והרכב רשום מחוץ למרחב הכלכלי האירופי.",
      },
      {
        title: "השירות שלנו",
        text:
          "אנו מסייעים בהנפקה מרחוק של ביטוח גבול לצורך כניסה לפולין ולמדינות נוספות באיחוד האירופי.",
      },
    ],

    note:
      "אם אינכם בטוחים איזה סוג ביטוח נדרש לכם, ציינו בבקשה את מסלול הנסיעה ואת מדינת הרישום של הרכב בטופס הבקשה. אנו נבדוק האם גרין קארד מתאים למקרה שלכם או שנדרש ביטוח גבול.",
  },

  az: {
    kicker: "TERMİNLƏR",
    title: "Sərhəd sığortası müqaviləsi (OC graniczne) ≠ Yaşıl Kart",

    leftBlocks: [
      {
        strong: "Sərhəd sığortası müqaviləsi (OC graniczne)",
        text:
          "— qüvvədə olan «Yaşıl Kart»ınız olmadığı halda, Avropa İqtisadi Məkanına daxil olmayan ölkələrdə qeydiyyatdan keçmiş nəqliyyat vasitələrinin Aİ ərazisinə daxil olması zamanı rəsmiləşdirilən mülki məsuliyyət sığortası polisidir. Polis məhdud müddət ərzində və yalnız göstərilən ölkələrdə qüvvədə olur.",
      },
      {
        strong: "Yaşıl Kart",
        text:
          "— avtomobilin qeydiyyatda olduğu ölkədə səfərdən əvvəl rəsmiləşdirilən və «Yaşıl Kart» sisteminə üzv ölkələrdə istifadə olunan beynəlxalq mülki məsuliyyət sığortası polisidir.",
      },
    ],

    rightTitle: "Sizə hansı sığorta lazımdır?",

    rows: [
      {
        title: "Yaşıl Kart",
        text:
          "Sığorta polisini öz ölkənizdə rəsmiləşdirmək imkanınız var və giriş etdiyiniz ölkə «Yaşıl Kart»ı qəbul edir.",
      },
      {
        title: "Sərhəd sığortası müqaviləsi",
        text:
          "Siz qüvvədə olan «Yaşıl Kart» olmadan Aİ ərazisinə daxil olursunuz və avtomobil Avropa İqtisadi Məkanından kənarda qeydiyyatdan keçib.",
      },
      {
        title: "Bizim xidmət",
        text:
          "Biz Polşaya və digər Aİ ölkələrinə giriş üçün sərhəd sığortası müqaviləsinin məsafədən rəsmiləşdirilməsinə kömək edirik.",
      },
    ],

    note:
      "Hansı sığortaya ehtiyacınız olduğuna əmin deyilsinizsə, müraciətdə marşrutu və avtomobilin qeydiyyat ölkəsini göstərin. Biz sizə «Yaşıl Kart»ın uyğun olub-olmadığını və ya sərhəd sığortasının tələb olunduğunu izah edəcəyik.",
  },

  ro: {
    kicker: "TERMENI",
    title: "Asigurarea de frontieră (OC graniczne) ≠ Cartea Verde",

    leftBlocks: [
      {
        strong: "Asigurarea de frontieră (OC graniczne)",
        text:
          "— este o poliță de răspundere civilă auto emisă la intrarea în Uniunea Europeană pentru vehiculele înmatriculate în țări din afara Spațiului Economic European, în cazul în care nu dețineți o poliță «Carte Verde» valabilă. Polița este valabilă pentru o perioadă limitată și numai în țările indicate în document.",
      },
      {
        strong: "Cartea Verde",
        text:
          "— este o poliță internațională de răspundere civilă auto pe care o încheiați în țara de înmatriculare a vehiculului înainte de plecare și o utilizați în țările participante la sistemul «Carte Verde».",
      },
    ],

    rightTitle: "De ce aveți nevoie?",

    rows: [
      {
        title: "Carte Verde",
        text:
          "Aveți posibilitatea să încheiați polița Carte Verde în țara dumneavoastră, iar țara de destinație acceptă sistemul «Carte Verde».",
      },
      {
        title: "Asigurare de frontieră",
        text:
          "Intrați în Uniunea Europeană fără o poliță «Carte Verde» valabilă, iar vehiculul este înmatriculat în afara Spațiului Economic European.",
      },
      {
        title: "Serviciul nostru",
        text:
          "Vă ajutăm să încheiați de la distanță o asigurare de frontieră pentru intrarea în Polonia și în alte țări ale Uniunii Europene.",
      },
    ],

    note:
      "Dacă nu sunteți sigur ce tip de asigurare vă este necesar, indicați ruta și țara de înmatriculare în cerere. Vă vom informa dacă este suficientă o «Carte Verde» sau dacă este necesară asigurarea de frontieră.",
  },

  sr: {
    kicker: "TERMINI",
    title: "Polisa graničnog osiguranja (OC graniczne) ≠ Zelena karta",

    leftBlocks: [
      {
        strong: "Polisa graničnog osiguranja (OC graniczne)",
        text:
          "— predstavlja polisu osiguranja od građanske odgovornosti koja se ugovara prilikom ulaska u EU za vozila registrovana u državama koje nisu članice Evropskog ekonomskog prostora, ukoliko ne posedujete važeću „Zelenu kartu“. Polisa važi ograničen vremenski period i samo u navedenim državama.",
      },
      {
        strong: "Zelena karta",
        text:
          "— međunarodna polisa osiguranja od građanske odgovornosti koju ugovarate u državi registracije vozila pre putovanja i koristite u državama članicama sistema „Zelena karta“.",
      },
    ],

    rightTitle: "Šta vam je potrebno?",

    rows: [
      {
        title: "Zelena karta",
        text:
          "Imate mogućnost da ugovorite Zelenu kartu u svojoj zemlji, a država u koju ulazite prihvata sistem „Zelena karta“.",
      },
      {
        title: "Polisa graničnog osiguranja",
        text:
          "Ulazite u EU bez važeće „Zelene karte“, a vozilo je registrovano van Evropskog ekonomskog prostora.",
      },
      {
        title: "Naša usluga",
        text:
          "Pomažemo u daljinskom ugovaranju polise graničnog osiguranja za ulazak, na primer, u Poljsku i druge države Evropske unije.",
      },
    ],

    note:
      "Ako niste sigurni koja vrsta osiguranja vam je potrebna, navedite rutu putovanja i državu registracije vozila u zahtevu. Pomoći ćemo vam da utvrdite da li je dovoljna „Zelena karta“ ili je potrebno granično osiguranje.",
  },

  sq: {
    kicker: "TERMAT",
    title: "Sigurimi kufitar (OC graniczne) ≠ Green Card",

    leftBlocks: [
      {
        strong: "Sigurimi kufitar (OC graniczne)",
        text:
          "— është një policë e përgjegjësisë civile që lëshohet gjatë hyrjes në BE për automjetet e regjistruara në vende jashtë Zonës Ekonomike Evropiane, nëse nuk keni një Green Card të vlefshme. Polica është e vlefshme për një periudhë të kufizuar dhe vetëm në vendet e përcaktuara në të.",
      },
      {
        strong: "Green Card",
        text:
          "— është një policë ndërkombëtare e përgjegjësisë civile që lëshohet në vendin ku është regjistruar automjeti para nisjes dhe përdoret në vendet pjesëmarrëse në sistemin Green Card.",
      },
    ],

    rightTitle: "Çfarë ju nevojitet juve?",

    rows: [
      {
        title: "Green Card",
        text:
          "Ju keni mundësinë të lëshoni Green Card në vendin tuaj dhe vendi ku po hyni e pranon Green Card.",
      },
      {
        title: "Sigurimi ndërkufitar",
        text:
          "Ju po hyni në BE pa një Green Card të vlefshme dhe automjeti është i regjistruar jashtë Zonës Ekonomike Evropiane.",
      },
      {
        title: "Shërbimi ynë",
        text:
          "Ne ju ndihmojmë të lëshoni në distancë një kontratë sigurimi ndërkufitar për hyrje, për shembull, në Poloni dhe në vende të tjera të Bashkimit Evropian.",
      },
    ],

    note:
      "Nëse nuk jeni të sigurt se çfarë ju nevojitet, tregoni itinerarin dhe vendin e regjistrimit të automjetit në aplikim. Ne do t'ju këshillojmë nëse mjafton Green Card apo nëse nevojitet sigurimi kufitar.",
  },

  mn: {
    kicker: "НЭР ТОМЬЁО",
    title: "Хилийн даатгалын гэрээ (OC graniczne) ≠ Ногоон карт",

    leftBlocks: [
      {
        strong: "Хилийн даатгалын гэрээ (OC graniczne)",
        text:
          "— нь Европын Холбоонд нэвтрэх үед Европын эдийн засгийн бүсэд харьяалагддаггүй улсад бүртгэлтэй тээврийн хэрэгсэлд зориулан олгогддог иргэний хариуцлагын даатгал юм. Хэрэв танд хүчинтэй «Ногоон карт» байхгүй бол энэхүү полис шаардлагатай. Полис нь хязгаарлагдмал хугацаанд болон зөвхөн заасан улсуудад хүчинтэй байдаг.",
      },
      {
        strong: "Ногоон карт",
        text:
          "— нь автомашинаа гадаад улс руу явахаас өмнө бүртгэлтэй улсдаа авдаг олон улсын иргэний хариуцлагын даатгал бөгөөд «Ногоон карт» системийн гишүүн орнуудад ашиглагддаг.",
      },
    ],

    rightTitle: "Танд аль нь хэрэгтэй вэ?",

    rows: [
      {
        title: "Ногоон карт",
        text:
          "Та өөрийн улсад Ногоон картын полис авах боломжтой бөгөөд зорчих улс тань «Ногоон карт»-ыг хүлээн зөвшөөрдөг.",
      },
      {
        title: "Хил дамнасан даатгалын гэрээ",
        text:
          "Та хүчинтэй «Ногоон карт»-гүйгээр Европын Холбоонд нэвтэрч байгаа бөгөөд таны автомашин Европын эдийн засгийн бүсээс гадуур бүртгэлтэй.",
      },
      {
        title: "Манай үйлчилгээ",
        text:
          "Бид Польш болон Европын Холбооны бусад улс руу нэвтрэхэд шаардлагатай хил дамнасан даатгалын гэрээг алсаас бүрдүүлэхэд тусалдаг.",
      },
    ],

    note:
      "Хэрэв танд ямар даатгал хэрэгтэйгээ мэдэхгүй байвал хүсэлтдээ маршрутаа болон автомашины бүртгэлтэй улсыг заана уу. Бид «Ногоон карт» тохирох эсэх, эсвэл хилийн даатгал шаардлагатай эсэхийг тайлбарлаж өгнө.",
  },

};

export function getInfoCompareDictionary(lang: Lang) {
  const dict = infoCompareDictionary[lang];
  return dict ? dict : infoCompareDictionary.ru;
}