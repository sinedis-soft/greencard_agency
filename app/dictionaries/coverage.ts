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
        text: "Доступные сроки: 30, 60, 90, 180 или 364 дня — в зависимости от типа ТС и правил оформления.",
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

  ckb: {
    title: "ناوچەی پاراستن و مەرجەکان",
    mapAlt: "وڵاتەکانی شمولی گرێبەستی بیمەی سنووری",
    mapCaption: " ",
    items: [
      {
        title: "ناوچەی کارایی",
        text:
          "بیمەنامەکە لەو وڵاتانەدا کارا دەبێت کە لەسەر نەخشەکە نیشان دراون. A - نەمسا، B - بەلجیکا، BG - بولگاریا، CY - قوبرس، CZ - چیک، D - ئەڵمانیا، DK - دانیمارک، E - ئیسپانیا، EST - ئێستۆنیا، F - فەڕەنسا، FIN - فینلەندا، GR - یۆنان، H - مەجارستان، HR - کرۆواتیا، I - ئیتاڵیا، IRL - ئیرلەندا، IS - ئایسلەندا، L - لۆکسەمبۆرگ، LT - لیتوانیا، LV - لاتویا، M - ماڵتا، N - نەرویج، NL - هۆڵەندا، P - پورتوگال، PL - پۆڵەندا، RO - ڕۆمانیا، S - سوید، SK - سلۆڤاکیا، SLO - سلۆڤینیا، CH - سویسرا.",
      },
      {
        title: "جۆرەکانی ئامرازە گواستنەوەکان",
        text:
          "ئۆتۆمبێلی سواری، ماتۆڕ، ئامرازە بارهەڵگرەکان، پاشکۆ و پاس.",
      },
      {
        title: "ماوەی کارایی",
        text:
          "کەمترین ماوە 1 مانگە و زۆرترین ماوە 1 ساڵە.",
      },
    ],
  },
  kmr: {
    title: "Herêma Berfirehbûnê û Mercan",
    mapAlt: "Welatên ku peymana sîgorteya sînorî lê derbasdar e",
    mapCaption: " ",
    items: [
      {
        title: "Herêma berfirehbûnê",
        text:
          "Polîçe li welatên ku li ser nexşeyê hatine nîşandan derbasdar e. A - Awusturya, B - Belçîka, BG - Bulgaristan, CY - Qibris, CZ - Çekya, D - Almanya, DK - Danîmarka, E - Spanya, EST - Estonya, F - Fransa, FIN - Fînlandiya, GR - Yewnanistan, H - Macaristan, HR - Xirwatistan, I - Îtalya, IRL - Îrlanda, IS - Îzlanda, L - Luksembûrg, LT - Lîtvanya, LV - Letonya, M - Malta, N - Norwêc, NL - Hollanda, P - Portekîz, PL - Polonya, RO - Romanya, S - Swêd, SK - Slovakya, SLO - Slovenya, CH - Swîsre.",
      },
      {
        title: "Cureyên wesayîtan",
        text:
          "Otomobîl, motorsîklet, wesayîtên barhilgir, rimork, otobûs.",
      },
      {
        title: "Dema derbasdariyê",
        text:
          "Demjimêra herî kêm 1 meh e. Demjimêra herî zêde 1 sal e.",
      },
    ],
  },
  ar: {
    title: "نطاق التغطية والشروط",
    mapAlt: "الدول التي يغطيها عقد التأمين الحدودي",
    mapCaption: " ",
    items: [
      {
        title: "نطاق التغطية الجغرافي",
        text:
          "تسري وثيقة التأمين في الدول الموضحة على الخريطة: A - النمسا، B - بلجيكا، BG - بلغاريا، CY - قبرص، CZ - التشيك، D - ألمانيا، DK - الدنمارك، E - إسبانيا، EST - إستونيا، F - فرنسا، FIN - فنلندا، GR - اليونان، H - المجر، HR - كرواتيا، I - إيطاليا، IRL - أيرلندا، IS - آيسلندا، L - لوكسمبورغ، LT - ليتوانيا، LV - لاتفيا، M - مالطا، N - النرويج، NL - هولندا، P - البرتغال، PL - بولندا، RO - رومانيا، S - السويد، SK - سلوفاكيا، SLO - سلوفينيا، CH - سويسرا.",
      },
      {
        title: "أنواع المركبات",
        text:
          "السيارات الخاصة، الدراجات النارية، الشاحنات، المقطورات، والحافلات.",
      },
      {
        title: "مدة التأمين",
        text:
          "الحد الأدنى لمدة التأمين شهر واحد، والحد الأقصى سنة واحدة.",
      },
    ],
  },

  uk: {
    title: "Територія покриття та умови",
    mapAlt: "Країни дії договору транскордонного страхування",
    mapCaption: " ",
    items: [
      {
        title: "Територія дії",
        text:
          "Поліс діє в країнах, позначених на карті. A - Австрія, B - Бельгія, BG - Болгарія, CY - Кіпр, CZ - Чехія, D - Німеччина, DK - Данія, E - Іспанія, EST - Естонія, F - Франція, FIN - Фінляндія, GR - Греція, H - Угорщина, HR - Хорватія, I - Італія, IRL - Ірландія, IS - Ісландія, L - Люксембург, LT - Литва, LV - Латвія, M - Мальта, N - Норвегія, NL - Нідерланди, P - Португалія, PL - Польща, RO - Румунія, S - Швеція, SK - Словаччина, SLO - Словенія, CH - Швейцарія.",
      },
      {
        title: "Типи транспортних засобів",
        text:
          "Легкові автомобілі, мотоцикли, вантажний транспорт, причепи, автобуси.",
      },
      {
        title: "Строк дії",
        text:
          "Мінімальний строк — 1 місяць. Максимальний — 1 рік.",
      },
    ],
  },

  he: {
    title: "אזור הכיסוי ותנאי הביטוח",
    mapAlt: "מדינות שבהן תקף ביטוח הגבול",
    mapCaption: " ",
    items: [
      {
        title: "אזור הכיסוי",
        text:
          "הפוליסה תקפה במדינות המסומנות במפה. A - אוסטריה, B - בלגיה, BG - בולגריה, CY - קפריסין, CZ - צ'כיה, D - גרמניה, DK - דנמרק, E - ספרד, EST - אסטוניה, F - צרפת, FIN - פינלנד, GR - יוון, H - הונגריה, HR - קרואטיה, I - איטליה, IRL - אירלנד, IS - איסלנד, L - לוקסמבורג, LT - ליטא, LV - לטביה, M - מלטה, N - נורווגיה, NL - הולנד, P - פורטוגל, PL - פולין, RO - רומניה, S - שוודיה, SK - סלובקיה, SLO - סלובניה, CH - שווייץ.",
      },
      {
        title: "סוגי כלי רכב",
        text: "רכבים פרטיים, אופנועים, משאיות, נגררים ואוטובוסים.",
      },
      {
        title: "תקופת הביטוח",
        text: "התקופה המינימלית היא חודש אחד. התקופה המקסימלית היא שנה אחת.",
      },
    ],
  },

  az: {
    title: "Əhatə dairəsi və şərtlər",
    mapAlt: "Transsərhəd sığorta müqaviləsinin qüvvədə olduğu ölkələr",
    mapCaption: " ",

    items: [
      {
        title: "Qüvvədə olduğu ərazi",
        text:
          "Polis xəritədə göstərilən ölkələrdə qüvvədədir. A - Avstriya, B - Belçika, BG - Bolqarıstan, CY - Kipr, CZ - Çexiya, D - Almaniya, DK - Danimarka, E - İspaniya, EST - Estoniya, F - Fransa, FIN - Finlandiya, GR - Yunanıstan, H - Macarıstan, HR - Xorvatiya, I - İtaliya, IRL - İrlandiya, IS - İslandiya, L - Lüksemburq, LT - Litva, LV - Latviya, M - Malta, N - Norveç, NL - Niderland, P - Portuqaliya, PL - Polşa, RO - Rumıniya, S - İsveç, SK - Slovakiya, SLO - Sloveniya, CH - İsveçrə.",
      },
      {
        title: "Nəqliyyat vasitələrinin növləri",
        text:
          "Minik avtomobilləri, motosikletlər, yük nəqliyyatı, qoşqular və avtobuslar.",
      },
      {
        title: "Qüvvədə olma müddəti",
        text:
          "Minimum müddət — 1 ay. Maksimum müddət — 1 il.",
      },
    ],
  },

  ro: {
    title: "Zona de acoperire și condiții",
    mapAlt: "Țările în care este valabilă asigurarea de frontieră",
    mapCaption: " ",
    items: [
      {
        title: "Teritoriul de valabilitate",
        text:
          "Polița este valabilă în țările marcate pe hartă. A - Austria, B - Belgia, BG - Bulgaria, CY - Cipru, CZ - Cehia, D - Germania, DK - Danemarca, E - Spania, EST - Estonia, F - Franța, FIN - Finlanda, GR - Grecia, H - Ungaria, HR - Croația, I - Italia, IRL - Irlanda, IS - Islanda, L - Luxemburg, LT - Lituania, LV - Letonia, M - Malta, N - Norvegia, NL - Țările de Jos, P - Portugalia, PL - Polonia, RO - România, S - Suedia, SK - Slovacia, SLO - Slovenia, CH - Elveția.",
      },
      {
        title: "Tipuri de vehicule",
        text:
          "Autoturisme, motociclete, vehicule de transport marfă, remorci și autobuze.",
      },
      {
        title: "Perioada de valabilitate",
        text:
          "Perioada minimă este de 1 lună. Perioada maximă este de 1 an.",
      },
    ],
  },

  sr: {
    title: "Teritorijalno pokriće i uslovi",
    mapAlt: "Države u kojima važi polisa prekograničnog osiguranja",
    mapCaption: " ",
    items: [
      {
        title: "Teritorija važenja",
        text:
          "Polisa važi u državama označenim na karti. A - Austrija, B - Belgija, BG - Bugarska, CY - Kipar, CZ - Češka, D - Nemačka, DK - Danska, E - Španija, EST - Estonija, F - Francuska, FIN - Finska, GR - Grčka, H - Mađarska, HR - Hrvatska, I - Italija, IRL - Irska, IS - Island, L - Luksemburg, LT - Litvanija, LV - Letonija, M - Malta, N - Norveška, NL - Holandija, P - Portugal, PL - Poljska, RO - Rumunija, S - Švedska, SK - Slovačka, SLO - Slovenija, CH - Švajcarska.",
      },
      {
        title: "Vrste vozila",
        text: "Putnička vozila, motocikli, teretna vozila, prikolice i autobusi.",
      },
      {
        title: "Period važenja",
        text: "Minimalni period važenja je 1 mesec. Maksimalni period važenja je 1 godina.",
      },
    ],
  },

  sq: {
    title: "Zona e mbulimit dhe kushtet",
    mapAlt: "Vendet ku është i vlefshëm sigurimi ndërkufitar",
    mapCaption: " ",
    items: [
      {
        title: "Territori i vlefshmërisë",
        text:
          "Polica është e vlefshme në vendet e shënuara në hartë. A - Austri, B - Belgjikë, BG - Bullgari, CY - Qipro, CZ - Çeki, D - Gjermani, DK - Danimarkë, E - Spanjë, EST - Estoni, F - Francë, FIN - Finlandë, GR - Greqi, H - Hungari, HR - Kroaci, I - Itali, IRL - Irlandë, IS - Islandë, L - Luksemburg, LT - Lituani, LV - Letoni, M - Maltë, N - Norvegji, NL - Holandë, P - Portugali, PL - Poloni, RO - Rumani, S - Suedi, SK - Sllovaki, SLO - Slloveni, CH - Zvicër.",
      },
      {
        title: "Llojet e automjeteve",
        text: "Automjete pasagjerësh, motoçikleta, automjete mallrash, rimorkio dhe autobusë.",
      },
      {
        title: "Periudha e vlefshmërisë",
        text: "Periudha minimale është 1 muaj. Periudha maksimale është 1 vit.",
      },
    ],
  },

  mn: {
    title: "Хамрах хүрээ ба нөхцөл",

    mapAlt: "Хил дамнасан даатгалын гэрээ хүчинтэй үйлчлэх орнууд",

    mapCaption: " ",

    items: [
      {
        title: "Үйлчлэх нутаг дэвсгэр",
        text:
          "Полис нь газрын зураг дээр тэмдэглэгдсэн улсуудад хүчинтэй. A - Австри, B - Бельги, BG - Болгар, CY - Кипр, CZ - Чех, D - Герман, DK - Дани, E - Испани, EST - Эстон, F - Франц, FIN - Финланд, GR - Грек, H - Унгар, HR - Хорват, I - Итали, IRL - Ирланд, IS - Исланд, L - Люксембург, LT - Литва, LV - Латви, M - Мальта, N - Норвеги, NL - Нидерланд, P - Португал, PL - Польш, RO - Румын, S - Швед, SK - Словак, SLO - Словени, CH - Швейцар.",
      },
      {
        title: "Тээврийн хэрэгслийн төрөл",
        text:
          "Суудлын автомашин, мотоцикл, ачааны тээврийн хэрэгсэл, чиргүүл, автобус.",
      },
      {
        title: "Хүчинтэй хугацаа",
        text:
          "Хамгийн бага хугацаа — 1 сар. Хамгийн их хугацаа — 1 жил.",
      },
    ],
  },
};

export function getCoverageDictionary(lang: Lang): CoverageDict {
  return DICT[lang] ?? DICT.ru;
}