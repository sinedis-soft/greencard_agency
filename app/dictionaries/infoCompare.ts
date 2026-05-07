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
};

export function getInfoCompareDictionary(lang: Lang) {
  const dict = infoCompareDictionary[lang];
  return dict ? dict : infoCompareDictionary.ru;
}