// app/dictionaries/coverage.ts
import type { Lang } from "@/app/dictionaries/header";

type CoverageItem = {
  title: string;
  text: string;
  note?: string;
};

type CoverageDict = {
  title: string;
  mapAlt: string;
  mapCaption?: string;
  items: CoverageItem[];
};

const DICT: Record<Lang, CoverageDict> = {
  ru: {
    title: "Зона покрытия и условия",
    mapAlt: "Страны действия договора трансграничного страхования",
    mapCaption: " ",
    items: [
      {
        title: "Территория действия",
        text:
          "Полис действует в странах, отмеченных на карте. A - Австрия, B - Бельгия, BG - Болгария, CY - Кипр, CZ - Чехия, D - Германия, DK - Дания, E - Испания, EST - Эстония, F - Франция, FIN - Финляндия, GR - Греция, H - Венгрия, HR - Хорватия, I - Италия, IRL - Ирландия, IS - Исландия, L - Люксембург, LT - Литва, LV - Латвия, M - Мальта, N - Норвегия, NL - Нидерланды, P - Португалия, PL - Польша, RO - Румыния, S - Швеция, SK - Словакия, SLO - Словения, CH - Швейцария.",
      },
      {
        title: "Типы транспортных средств",
        text: "Легковые автомобили, мотоциклы, грузовой транспорт, прицепы, автобусы.",
      },
      {
        title: "Срок действия",
        text: "Минимальный срок - 1 месяц. Максимальный - 1 год.",
      },
    ],
  },

  pl: {
    title: "Zakres terytorialny i warunki",
    mapAlt: "Państwa objęte umową ubezpieczenia transgranicznego",
    mapCaption: " ",
    items: [
      {
        title: "Zakres terytorialny",
        text:
          "Polisa obowiązuje w krajach oznaczonych na mapie. A - Austria, B - Belgia, BG - Bułgaria, CY - Cypr, CZ - Czechy, D - Niemcy, DK - Dania, E - Hiszpania, EST - Estonia, F - Francja, FIN - Finlandia, GR - Grecja, H - Węgry, HR - Chorwacja, I - Włochy, IRL - Irlandia, IS - Islandia, L - Luksemburg, LT - Litwa, LV - Łotwa, M - Malta, N - Norwegia, NL - Niderlandy, P - Portugalia, PL - Polska, RO - Rumunia, S - Szwecja, SK - Słowacja, SLO - Słowenia, CH - Szwajcaria.",
      },
      {
        title: "Rodzaje pojazdów",
        text:
          "Samochody osobowe, motocykle, pojazdy ciężarowe, przyczepy oraz autobusy.",
      },
      {
        title: "Okres obowiązywania",
        text:
          "Minimalny okres ubezpieczenia wynosi 1 miesiąc. Maksymalny okres wynosi 1 rok.",
      },
    ],
  },

  en: {
    title: "Coverage Area and Terms",
    mapAlt: "Countries covered under the cross-border insurance policy",
    mapCaption: " ",
    items: [
      {
        title: "Territorial Scope",
        text:
          "The policy is valid in the countries marked on the map. A - Austria, B - Belgium, BG - Bulgaria, CY - Cyprus, CZ - Czech Republic, D - Germany, DK - Denmark, E - Spain, EST - Estonia, F - France, FIN - Finland, GR - Greece, H - Hungary, HR - Croatia, I - Italy, IRL - Ireland, IS - Iceland, L - Luxembourg, LT - Lithuania, LV - Latvia, M - Malta, N - Norway, NL - Netherlands, P - Portugal, PL - Poland, RO - Romania, S - Sweden, SK - Slovakia, SLO - Slovenia, CH - Switzerland.",
      },
      {
        title: "Vehicle Types",
        text:
          "Passenger cars, motorcycles, commercial vehicles, trailers, and buses.",
      },
      {
        title: "Insurance Period",
        text:
          "Minimum period — 1 month. Maximum period — 1 year.",
      },
    ],
  },

  be: {
    title: "Тэрыторыя пакрыцця і ўмовы",
    mapAlt: "Краіны дзеяння дагавора трансгранічнага страхавання",
    mapCaption: " ",
    items: [
      {
        title: "Тэрыторыя дзеяння",
        text:
          "Поліс дзейнічае ў краінах, пазначаных на карце. A - Аўстрыя, B - Бельгія, BG - Балгарыя, CY - Кіпр, CZ - Чэхія, D - Германія, DK - Данія, E - Іспанія, EST - Эстонія, F - Францыя, FIN - Фінляндыя, GR - Грэцыя, H - Венгрыя, HR - Харватыя, I - Італія, IRL - Ірландыя, IS - Ісландыя, L - Люксембург, LT - Літва, LV - Латвія, M - Мальта, N - Нарвегія, NL - Нідэрланды, P - Партугалія, PL - Польшча, RO - Румынія, S - Швецыя, SK - Славакія, SLO - Славенія, CH - Швейцарыя.",
      },
      {
        title: "Тыпы транспартных сродкаў",
        text:
          "Легкавыя аўтамабілі, матацыклы, грузавы транспарт, прычэпы, аўтобусы.",
      },
      {
        title: "Тэрмін дзеяння",
        text:
          "Мінімальны тэрмін — 1 месяц. Максімальны — 1 год.",
      },
    ],
  },

  uz: {
    title: "Qamrov hududi va shartlar",
    mapAlt: "Transchegaraviy sug‘urta shartnomasi amal qiladigan davlatlar",
    mapCaption: " ",
    items: [
      {
        title: "Amal qilish hududi",
        text:
          "Polis xaritada ko‘rsatilgan davlatlarda amal qiladi. A - Avstriya, B - Belgiya, BG - Bolgariya, CY - Kipr, CZ - Chexiya, D - Germaniya, DK - Daniya, E - Ispaniya, EST - Estoniya, F - Fransiya, FIN - Finlyandiya, GR - Gretsiya, H - Vengriya, HR - Xorvatiya, I - Italiya, IRL - Irlandiya, IS - Islandiya, L - Lyuksemburg, LT - Litva, LV - Latviya, M - Malta, N - Norvegiya, NL - Niderlandiya, P - Portugaliya, PL - Polsha, RO - Ruminiya, S - Shvetsiya, SK - Slovakiya, SLO - Sloveniya, CH - Shveytsariya.",
      },
      {
        title: "Transport vositalari turlari",
        text:
          "Yengil avtomobillar, mototsikllar, yuk transporti, tirkamalar, avtobuslar.",
      },
      {
        title: "Amal qilish muddati",
        text:
          "Minimal muddat — 1 oy. Maksimal muddat — 1 yil.",
      },
    ],
  },
  ka: {
    title: "დაფარვის ზონა და პირობები",
    mapAlt: "საერთაშორისო სასაზღვრო დაზღვევის ხელშეკრულების მოქმედების ქვეყნები",
    mapCaption: " ",
    items: [
      {
        title: "მოქმედების ტერიტორია",
        text:
          "პოლისი მოქმედებს რუკაზე აღნიშნულ ქვეყნებში. A - ავსტრია, B - ბელგია, BG - ბულგარეთი, CY - კვიპროსი, CZ - ჩეხეთი, D - გერმანია, DK - დანია, E - ესპანეთი, EST - ესტონეთი, F - საფრანგეთი, FIN - ფინეთი, GR - საბერძნეთი, H - უნგრეთი, HR - ხორვატია, I - იტალია, IRL - ირლანდია, IS - ისლანდია, L - ლუქსემბურგი, LT - ლიტვა, LV - ლატვია, M - მალტა, N - ნორვეგია, NL - ნიდერლანდები, P - პორტუგალია, PL - პოლონეთი, RO - რუმინეთი, S - შვედეთი, SK - სლოვაკეთი, SLO - სლოვენია, CH - შვეიცარია.",
      },
      {
        title: "სატრანსპორტო საშუალებების ტიპები",
        text:
          "მსუბუქი ავტომობილები, მოტოციკლები, სატვირთო ტრანსპორტი, მისაბმელები, ავტობუსები.",
      },
      {
        title: "მოქმედების ვადა",
        text:
          "მინიმალური ვადა — 1 თვე. მაქსიმალური — 1 წელი.",
      },
    ],
  },
  kk: {
    title: "Қамту аймағы және шарттар",
    mapAlt: "Трансшекаралық сақтандыру шарты қолданылатын елдер",
    mapCaption: " ",
    items: [
      {
        title: "Қолданылу аумағы",
        text:
          "Полис картада көрсетілген елдерде жарамды. A - Австрия, B - Бельгия, BG - Болгария, CY - Кипр, CZ - Чехия, D - Германия, DK - Дания, E - Испания, EST - Эстония, F - Франция, FIN - Финляндия, GR - Грекия, H - Венгрия, HR - Хорватия, I - Италия, IRL - Ирландия, IS - Исландия, L - Люксембург, LT - Литва, LV - Латвия, M - Мальта, N - Норвегия, NL - Нидерланд, P - Португалия, PL - Польша, RO - Румыния, S - Швеция, SK - Словакия, SLO - Словения, CH - Швейцария.",
      },
      {
        title: "Көлік құралдарының түрлері",
        text:
          "Жеңіл автомобильдер, мотоциклдер, жүк көліктері, тіркемелер, автобустар.",
      },
      {
        title: "Қолданылу мерзімі",
        text:
          "Ең төменгі мерзім — 1 ай. Ең ұзақ мерзім — 1 жыл.",
      },
    ],
  },
  tr: {
    title: "Teminat Bölgesi ve Şartlar",
    mapAlt: "Sınır ötesi sigorta sözleşmesinin geçerli olduğu ülkeler",
    mapCaption: " ",
    items: [
      {
        title: "Geçerlilik Bölgesi",
        text:
          "Poliçe, haritada belirtilen ülkelerde geçerlidir. A - Avusturya, B - Belçika, BG - Bulgaristan, CY - Kıbrıs, CZ - Çekya, D - Almanya, DK - Danimarka, E - İspanya, EST - Estonya, F - Fransa, FIN - Finlandiya, GR - Yunanistan, H - Macaristan, HR - Hırvatistan, I - İtalya, IRL - İrlanda, IS - İzlanda, L - Lüksemburg, LT - Litvanya, LV - Letonya, M - Malta, N - Norveç, NL - Hollanda, P - Portekiz, PL - Polonya, RO - Romanya, S - İsveç, SK - Slovakya, SLO - Slovenya, CH - İsviçre.",
      },
      {
        title: "Araç Türleri",
        text:
          "Binek araçlar, motosikletler, yük taşıma araçları, römorklar ve otobüsler.",
      },
      {
        title: "Geçerlilik Süresi",
        text:
          "Asgari sigorta süresi 1 ay, azami sigorta süresi ise 1 yıldır.",
      },
    ],
  },
  fa: {
    title: "منطقه پوشش و شرایط",
    mapAlt: "کشورهای تحت پوشش قرارداد بیمه فرامرزی",
    mapCaption: " ",
    items: [
      {
        title: "محدوده جغرافیایی پوشش",
        text:
          "بیمه‌نامه در کشورهای مشخص‌شده روی نقشه معتبر است. A - اتریش، B - بلژیک، BG - بلغارستان، CY - قبرس، CZ - جمهوری چک، D - آلمان، DK - دانمارک، E - اسپانیا، EST - استونی، F - فرانسه، FIN - فنلاند، GR - یونان، H - مجارستان، HR - کرواسی، I - ایتالیا، IRL - ایرلند، IS - ایسلند، L - لوکزامبورگ، LT - لیتوانی، LV - لتونی، M - مالت، N - نروژ، NL - هلند، P - پرتغال، PL - لهستان، RO - رومانی، S - سوئد، SK - اسلواکی، SLO - اسلوونی، CH - سوئیس.",
      },
      {
        title: "انواع وسایل نقلیه",
        text:
          "خودروهای سواری، موتورسیکلت‌ها، وسایل نقلیه باری، تریلرها و اتوبوس‌ها.",
      },
      {
        title: "مدت اعتبار",
        text:
          "حداقل مدت اعتبار بیمه ۱ ماه و حداکثر مدت اعتبار ۱ سال است.",
      },
    ],
  },
  hy: {
    title: "Ծածկույթի տարածք և պայմաններ",
    mapAlt: "Միջսահմանային ապահովագրության պայմանագրի գործողության երկրները",
    mapCaption: " ",
    items: [
      {
        title: "Գործողության տարածք",
        text:
          "Պոլիսը գործում է քարտեզում նշված երկրներում։ A - Ավստրիա, B - Բելգիա, BG - Բուլղարիա, CY - Կիպրոս, CZ - Չեխիա, D - Գերմանիա, DK - Դանիա, E - Իսպանիա, EST - Էստոնիա, F - Ֆրանսիա, FIN - Ֆինլանդիա, GR - Հունաստան, H - Հունգարիա, HR - Խորվաթիա, I - Իտալիա, IRL - Իռլանդիա, IS - Իսլանդիա, L - Լյուքսեմբուրգ, LT - Լիտվա, LV - Լատվիա, M - Մալթա, N - Նորվեգիա, NL - Նիդեռլանդներ, P - Պորտուգալիա, PL - Լեհաստան, RO - Ռումինիա, S - Շվեդիա, SK - Սլովակիա, SLO - Սլովենիա, CH - Շվեյցարիա։",
      },
      {
        title: "Տրանսպորտային միջոցների տեսակներ",
        text:
          "Թեթև մարդատար ավտոմեքենաներ, մոտոցիկլետներ, բեռնատար տրանսպորտ, կցորդներ, ավտոբուսներ։",
      },
      {
        title: "Գործողության ժամկետ",
        text:
          "Նվազագույն ժամկետը՝ 1 ամիս։ Առավելագույնը՝ 1 տարի։",
      },
    ],
  },
};

export function getCoverageDictionary(lang: Lang): CoverageDict {
  return DICT[lang] ?? DICT.ru;
}