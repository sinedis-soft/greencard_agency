import type { Lang } from "@/app/dictionaries/header";

export type BelarusPolandOcDictionary = {
  seo: { title: string; description: string };
  breadcrumbTitle: string;
  hero: { kicker: string; title: string; lead: string; cta: string };
  what: { title: string; text: string };
  who: { title: string; items: string[] };
  how: { title: string; steps: string[] };
  price: { title: string; text: string };
  validity: { title: string; text: string };
  form: { title: string; desc: string };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  carousel: { title: string; cardTitle: string; cardText: string; cta: string };
};

const ru: BelarusPolandOcDictionary = {
  seo: {
    title: "Страховка на белорусский автомобиль в Польшу",
    description:
      "Оформление страховки для поездки в Польшу. Онлайн-заявка, расчет стоимости, поддержка в WhatsApp и Telegram.",
  },
  breadcrumbTitle: "Страхование белорусского авто в Польшу",
  hero: {
    kicker: "Страхование для автомобилей из Беларуси",
    title: "Страховка в Польшу для машин на белорусских номерах",
    lead: "Оформите полис для въезда и поездки по Польше и ЕС: онлайн-заявка, расчет стоимости и сопровождение в мессенджерах.",
    cta: "Оформить заявку на страховку",
  },
  what: { title: "OC graniczne в Польшу для автомобиля на белорусских номерах", text: "Если автомобиль зарегистрирован в Беларуси и вы планируете поездку в Польшу, для въезда может потребоваться договор пограничного страхования OC graniczne. Такой полис оформляется для транспортных средств с регистрацией вне Европейской экономической зоны, если отсутствует действующая «Зелёная карта». На этой странице вы можете узнать, кому нужен OC graniczne, как проходит оформление, сколько стоит страховка и на какой срок её можно оформить. После подачи заявки полис направляется в PDF-формате." },
  who: { title: "Кому нужен этот полис:", items: ["Владельцам и водителям авто, зарегистрированных в Беларуси.", "Тем, кто въезжает в Польшу на личном автомобиле.", "Тем, кому нужна действующая страховая защита ответственности перед третьими лицами.", "Тем, кому необходимо временное страхование для поездки по ЕС.", "Если автомобиль направляется транзитом через Польшу."] },
  how: { title: "Как оформить", steps: ["Оставьте заявку через форму на сайте.", "Передайте данные авто и водителя для расчета.", "Оплатите страховой взнос удобным способом.", "Получите готовый полис и инструкцию по проверке."] },
  price: { title: "Стоимость", text: "Цена зависит от срока действия полиса и типа транспортного средства. Ориентировочную стоимость всегда можно посмотреть на главной странице сайта в онлайн-калькуляторе." },
  validity: { title: "Сроки действия", text: "Доступны полисы на срок от 30 дней до 364 дня. Дата начала указывается при оформлении, после чего покрытие действует выбранный период. Если при заполнении заявки вы не видите нужного вам срока - укажите эти данные в комментарии." },
  form: { title: "Форма заявки", desc: "Нажмите кнопку ниже — откроется главная страница с формой для оформления." },
  faq: { title: "FAQ", items: [
    { q: "Можно ли пересекать Белорусско-Польскую границу на авто с белорусскими номерами?", a: "Да, пересекать границу можно. Но важно понимать, что Польша ввела правило, что в автомобиле с белорусскими номерами в обязательном порядке должен быть владелец автомобиля. А это значит, что автомобиль не может принадлежать юридическому лицу, либо лицу которого нет в авто на момент пересечения границы." },
    { q: "Можно ли оформить онлайн, если я еще не пересек границу?", a: "Да, заявку можно оставить заранее, чтобы получить полис к нужной дате начала действия." },
    { q: "Подходит ли полис для поездок только по Польше?", a: "Полис оформляется для въезда в Польшу и может действовать на территории стран, указанных в условиях страхования (Страны Европейской экономической зоны + Швейцария)." },
    { q: "Можно ли оформить страховку на грузовой автомобиль?", a: "Да, оформление доступно как для легкового, так и для грузового транспорта но только на физлицо (например, на водителя)" },
    { q: "Как быстро приходит полис?", a: "После подтверждения оплаты полис обычно отправляется в течение короткого времени в электронном виде. Зависит от загруженности операторов, в среднем в чечение 10 минут." },
    { q: "Где проверить действительность полиса?", a: "Проверка возможна через официальный сервис UFG в Польше." },
  ] },
  carousel: { title: "Полезные страницы по направлениям", cardTitle: "Страхование белорусского авто для поездки в Польшу", cardText: "Условия, сроки, стоимость и оформление онлайн.", cta: "Открыть страницу" },
};

const pl: BelarusPolandOcDictionary = {
  seo: {
    title: "Ubezpieczenie dla samochodu z Białorusi do Polski",
    description:
      "Ubezpieczenie na wyjazd do Polski. Wniosek online, kalkulacja kosztów oraz wsparcie przez WhatsApp i Telegram.",
  },
  breadcrumbTitle: "Ubezpieczenie samochodu z Białorusi do Polski",
  hero: {
    kicker: "Ubezpieczenia dla pojazdów zarejestrowanych na Białorusi",
    title: "Ubezpieczenie do Polski dla samochodów na białoruskich numerach",
    lead:
      "Złóż wniosek o polisę na wjazd i podróż po Polsce oraz UE: formularz online, kalkulacja kosztów i wsparcie w komunikatorach.",
    cta: "Złóż wniosek o ubezpieczenie",
  },
  what: {
    title:
      "OC graniczne do Polski dla samochodu na białoruskich numerach",
    text:
      "Jeżeli pojazd jest zarejestrowany na Białorusi i planujesz podróż do Polski, przy wjeździe może być wymagane ubezpieczenie graniczne OC graniczne. Taka polisa przeznaczona jest dla pojazdów zarejestrowanych poza Europejskim Obszarem Gospodarczym, jeżeli nie posiadają ważonej Zielonej Karty. Na tej stronie możesz dowiedzieć się, komu potrzebne jest OC graniczne, jak przebiega proces zawarcia umowy, ile kosztuje ubezpieczenie oraz na jaki okres można je zawrzeć. Po złożeniu wniosku polisa zostanie przesłana w formacie PDF.",
  },
  who: {
    title: "Dla kogo przeznaczona jest ta polisa:",
    items: [
      "Dla właścicieli i kierowców pojazdów zarejestrowanych na Białorusi.",
      "Dla osób wjeżdżających do Polski własnym samochodem.",
      "Dla osób potrzebujących ważnej ochrony OC wobec osób trzecich.",
      "Dla osób potrzebujących tymczasowego ubezpieczenia na podróż po UE.",
      "Jeżeli pojazd przejeżdża tranzytem przez Polskę.",
    ],
  },
  how: {
    title: "Jak zawrzeć ubezpieczenie",
    steps: [
      "Złóż wniosek przez formularz na stronie.",
      "Przekaż dane pojazdu i kierowcy do kalkulacji.",
      "Opłać składkę w wygodny sposób.",
      "Odbierz gotową polisę oraz instrukcję weryfikacji.",
    ],
  },
  price: {
    title: "Koszt ubezpieczenia",
    text:
      "Cena zależy od okresu obowiązywania polisy oraz rodzaju pojazdu. Orientacyjną składkę można zawsze sprawdzić na stronie głównej w kalkulatorze online.",
  },
  validity: {
    title: "Okres obowiązywania",
    text:
      "Dostępne są polisy na okres od 30 do 364 dni. Data rozpoczęcia wskazywana jest podczas zawierania umowy, po czym ochrona obowiązuje przez wybrany okres. Jeżeli podczas składania wniosku nie widzisz potrzebnego okresu — wpisz tę informację w komentarzu.",
  },
  form: {
    title: "Formularz wniosku",
    desc:
      "Kliknij przycisk poniżej — otworzy się strona główna z formularzem zawarcia ubezpieczenia.",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Czy można przekroczyć granicę białorusko-polską samochodem na białoruskich numerach?",
        a:
          "Tak, przekroczenie granicy jest możliwe. Należy jednak pamiętać, że Polska wprowadziła zasadę, zgodnie z którą w pojeździe na białoruskich numerach rejestracyjnych obowiązkowo musi znajdować się właściciel pojazdu. Oznacza to, że pojazd nie może należeć do osoby prawnej ani do osoby, której nie ma w aucie podczas przekraczania granicy.",
      },
      {
        q: "Czy można zawrzeć polisę online jeszcze przed przekroczeniem granicy?",
        a:
          "Tak, wniosek można złożyć wcześniej, jednak aby otrzymać polisę, musisz znajdować się na terytorium Polski.",
      },
      {
        q: "Czy polisa obowiązuje wyłącznie na terenie Polski?",
        a:
          "Polisa zawierana jest na wjazd do Polski i może obowiązywać na terytorium państw wskazanych w warunkach ubezpieczenia (kraje Europejskiego Obszaru Gospodarczego oraz Szwajcaria).",
      },
      {
        q: "Czy można zawrzeć ubezpieczenie dla samochodu ciężarowego?",
        a:
          "Tak, ubezpieczenie dostępne jest zarówno dla samochodów osobowych, jak i ciężarowych, jednak wyłącznie na osobę fizyczną (na przykład kierowcę).",
      },
      {
        q: "Jak szybko otrzymam polisę?",
        a:
          "Po potwierdzeniu płatności polisa zazwyczaj wysyłana jest w krótkim czasie w formie elektronicznej. Czas zależy od obciążenia operatorów, średnio około 10 minut.",
      },
      {
        q: "Gdzie można sprawdzić ważność polisy?",
        a:
          "Weryfikacja możliwa jest poprzez oficjalny serwis UFG w Polsce.",
      },
    ],
  },
  carousel: {
    title: "Przydatne strony według kierunków",
    cardTitle:
      "Ubezpieczenie samochodu z Białorusi na wyjazd do Polski",
    cardText:
      "Warunki, okres obowiązywania, koszt oraz zawarcie online.",
    cta: "Otwórz stronę",
  },
};

const en: BelarusPolandOcDictionary = {
  seo: {
    title: "Insurance for a Belarusian Car Traveling to Poland",
    description:
      "Insurance оформление for travel to Poland. Online application, price calculation, and support via WhatsApp and Telegram.",
  },
  breadcrumbTitle: "Insurance for a Belarusian Vehicle Traveling to Poland",
  hero: {
    kicker: "Insurance for Vehicles from Belarus",
    title: "Insurance for Cars with Belarusian Plates Traveling to Poland",
    lead:
      "Apply for a policy for entry and travel within Poland and the EU: online application, price calculation, and support via messengers.",
    cta: "Apply for Insurance",
  },
  what: {
    title: "OC graniczne in Poland for a Vehicle with Belarusian Plates",
    text:
      "If your vehicle is registered in Belarus and you plan to travel to Poland, a border insurance policy (OC graniczne) may be required for entry. This type of policy is issued for vehicles registered outside the European Economic Area if there is no valid Green Card insurance certificate. On this page, you can find out who needs OC graniczne, how the application process works, how much the insurance costs, and for what period it can be issued. After submitting the application, the policy is sent in PDF format.",
  },
  who: {
    title: "Who Needs This Policy:",
    items: [
      "Owners and drivers of vehicles registered in Belarus.",
      "Those entering Poland with a private vehicle.",
      "Those who need valid third-party liability insurance coverage.",
      "Those who require temporary insurance for travel within the EU.",
      "If the vehicle is traveling through Poland in transit.",
    ],
  },
  how: {
    title: "How to Apply",
    steps: [
      "Submit an application through the form on the website.",
      "Provide vehicle and driver details for the quotation.",
      "Pay the insurance premium using a convenient payment method.",
      "Receive the completed policy and verification instructions.",
    ],
  },
  price: {
    title: "Price",
    text:
      "The price depends on the policy period and the type of vehicle. You can always check the estimated cost on the main page of the website using the online calculator.",
  },
  validity: {
    title: "Policy Period",
    text:
      "Policies are available for periods from 30 days to 364 days. The start date is selected during the application process, after which the coverage remains valid for the chosen period. If you do not see the required duration in the application form, specify it in the comments field.",
  },
  form: {
    title: "Application Form",
    desc:
      "Click the button below to open the main page with the application form.",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Can I cross the Belarus–Poland border with a car on Belarusian plates?",
        a:
          "Yes, crossing the border is possible. However, it is important to understand that Poland introduced a rule requiring the vehicle owner to be present in the car if it has Belarusian plates. This means the vehicle cannot belong to a legal entity or to a person who is not present in the vehicle at the moment of crossing the border.",
      },
      {
        q: "Can I apply online if I have not crossed the border yet?",
        a:
          "Yes, you can submit an application in advance, but to receive the policy you must be physically located in Poland.",
      },
      {
        q: "Is the policy valid only for trips within Poland?",
        a:
          "The policy is issued for entry into Poland and may also be valid in the countries specified in the insurance terms (European Economic Area countries + Switzerland).",
      },
      {
        q: "Can I insure a truck?",
        a:
          "Yes, insurance is available for both passenger cars and trucks, but only for private individuals (for example, the driver).",
      },
      {
        q: "How quickly will I receive the policy?",
        a:
          "After payment confirmation, the policy is usually sent electronically within a short time. The timing depends on operator workload, but on average it takes about 10 minutes.",
      },
      {
        q: "Where can I check the validity of the policy?",
        a:
          "Verification is available through the official UFG service in Poland.",
      },
    ],
  },
  carousel: {
    title: "Useful Pages by Destination",
    cardTitle:
      "Insurance for a Belarusian Vehicle Traveling to Poland",
    cardText:
      "Conditions, duration, pricing, and online application.",
    cta: "Open Page",
  },
};

const be: BelarusPolandOcDictionary = {
  seo: {
    title: "Страхоўка на беларускі аўтамабіль у Польшчу",
    description:
      "Афармленне страхоўкі для паездкі ў Польшчу. Анлайн-заяўка, разлік кошту, падтрымка ў WhatsApp і Telegram.",
  },
  breadcrumbTitle: "Страхаванне беларускага аўто ў Польшчу",
  hero: {
    kicker: "Страхаванне для аўтамабіляў з Беларусі",
    title: "Страхоўка ў Польшчу для аўтамабіляў на беларускіх нумарах",
    lead:
      "Аформіце поліс для ўезду і паездак па Польшчы і ЕС: анлайн-заяўка, разлік кошту і суправаджэнне ў мэсэнджарах.",
    cta: "Аформіць заяўку на страхоўку",
  },
  what: {
    title:
      "OC graniczne у Польшчу для аўтамабіля на беларускіх нумарах",
    text:
      "Калі аўтамабіль зарэгістраваны ў Беларусі і вы плануеце паездку ў Польшчу, для ўезду можа спатрэбіцца дагавор памежнага страхавання OC graniczne. Такі поліс афармляецца для транспартных сродкаў з рэгістрацыяй па-за межамі Еўрапейскай эканамічнай зоны, калі адсутнічае дзеючая «Зялёная карта». На гэтай старонцы вы можаце даведацца, каму патрэбны OC graniczne, як праходзіць афармленне, колькі каштуе страхоўка і на які тэрмін яе можна аформіць. Пасля падачы заяўкі поліс накіроўваецца ў PDF-фармаце.",
  },
  who: {
    title: "Каму патрэбны гэты поліс:",
    items: [
      "Уладальнікам і кіроўцам аўтамабіляў, зарэгістраваных у Беларусі.",
      "Тым, хто ўязджае ў Польшчу на асабістым аўтамабілі.",
      "Тым, каму патрэбна дзеючая страхавая абарона адказнасці перад трэцімі асобамі.",
      "Тым, каму неабходна часовае страхаванне для паездкі па ЕС.",
      "Калі аўтамабіль накіроўваецца транзітам праз Польшчу.",
    ],
  },
  how: {
    title: "Як аформіць",
    steps: [
      "Пакіньце заяўку праз форму на сайце.",
      "Перадайце дадзеныя аўтамабіля і кіроўцы для разліку.",
      "Аплаціце страхавы ўзнос зручным спосабам.",
      "Атрымайце гатовы поліс і інструкцыю па праверцы.",
    ],
  },
  price: {
    title: "Кошт",
    text:
      "Кошт залежыць ад тэрміну дзеяння поліса і тыпу транспартнага сродку. Прыкладны кошт заўсёды можна паглядзець на галоўнай старонцы сайта ў анлайн-калькулятары.",
  },
  validity: {
    title: "Тэрміны дзеяння",
    text:
      "Даступныя полісы на тэрмін ад 30 дзён да 364 дзён. Дата пачатку паказваецца пры афармленні, пасля чаго пакрыццё дзейнічае выбраны перыяд. Калі пры запаўненні заяўкі вы не бачыце патрэбнага вам тэрміну — укажыце гэтыя дадзеныя ў каментарыі.",
  },
  form: {
    title: "Форма заяўкі",
    desc:
      "Націсніце кнопку ніжэй — адкрыецца галоўная старонка з формай для афармлення.",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q:
          "Ці можна перасякаць беларуска-польскую мяжу на аўтамабілі з беларускімі нумарамі?",
        a:
          "Так, перасякаць мяжу можна. Але важна разумець, што Польшча ўвяла правіла, паводле якога ў аўтамабілі з беларускімі нумарамі абавязкова павінен знаходзіцца ўладальнік аўтамабіля. Гэта азначае, што аўтамабіль не можа належаць юрыдычнай асобе або асобе, якой няма ў аўтамабілі ў момант перасячэння мяжы.",
      },
      {
        q:
          "Ці можна аформіць анлайн, калі я яшчэ не перасёк мяжу?",
        a:
          "Так, заяўку можна пакінуць загадзя, каб атрымаць поліс на патрэбную дату пачатку дзеяння.",
      },
      {
        q:
          "Ці падыходзіць поліс толькі для паездак па Польшчы?",
        a:
          "Поліс афармляецца для ўезду ў Польшчу і можа дзейнічаць на тэрыторыі краін, указаных ва ўмовах страхавання (краіны Еўрапейскай эканамічнай зоны + Швейцарыя).",
      },
      {
        q:
          "Ці можна аформіць страхоўку на грузавы аўтамабіль?",
        a:
          "Так, афармленне даступна як для легкавога, так і для грузавога транспарту, але толькі на фізічную асобу (напрыклад, на кіроўцу).",
      },
      {
        q: "Як хутка прыходзіць поліс?",
        a:
          "Пасля пацвярджэння аплаты поліс звычайна адпраўляецца на працягу кароткага часу ў электронным выглядзе. Залежыць ад загружанасці аператараў, у сярэднім — каля 10 хвілін.",
      },
      {
        q: "Дзе праверыць сапраўднасць поліса?",
        a:
          "Праверка магчымая праз афіцыйны сэрвіс UFG у Польшчы.",
      },
    ],
  },
  carousel: {
    title: "Карысныя старонкі па напрамках",
    cardTitle:
      "Страхаванне беларускага аўто для паездкі ў Польшчу",
    cardText:
      "Умовы, тэрміны, кошт і анлайн-афармленне.",
    cta: "Адкрыць старонку",
  },
};

const uz: BelarusPolandOcDictionary = {
  seo: {
    title: "Belarus raqamli avtomobil uchun Polshaga sug‘urta",
    description:
      "Polshaga safar uchun sug‘urta rasmiylashtirish. Onlayn ariza, narx hisoblash, WhatsApp va Telegram orqali yordam.",
  },
  breadcrumbTitle: "Belarus avtomobilini Polshada sug‘urtalash",
  hero: {
    kicker: "Belarusdan kelgan avtomobillar uchun sug‘urta",
    title: "Belarus raqamli avtomobillar uchun Polshaga sug‘urta",
    lead:
      "Polsha va Yevropa Ittifoqiga kirish hamda safar qilish uchun polisni rasmiylashtiring: onlayn ariza, narx hisoblash va messenjerlarda qo‘llab-quvvatlash.",
    cta: "Sug‘urta uchun ariza yuborish",
  },
  what: {
    title:
      "Belarus raqamli avtomobil uchun Polshada OC graniczne",
    text:
      "Agar avtomobil Belarusda ro‘yxatdan o‘tgan bo‘lsa va siz Polshaga safar qilishni rejalashtirayotgan bo‘lsangiz, kirish uchun OC graniczne chegara sug‘urtasi talab qilinishi mumkin. Bunday polis Yevropa iqtisodiy hududidan tashqarida ro‘yxatdan o‘tgan transport vositalari uchun, agar amaldagi “Yashil karta” mavjud bo‘lmasa, rasmiylashtiriladi. Ushbu sahifada OC graniczne kimlarga kerakligi, rasmiylashtirish jarayoni, sug‘urta narxi va uni qaysi muddatga rasmiylashtirish mumkinligi haqida bilib olishingiz mumkin. Ariza yuborilgandan so‘ng polis PDF formatida yuboriladi.",
  },
  who: {
    title: "Ushbu polis kimlarga kerak:",
    items: [
      "Belarusda ro‘yxatdan o‘tgan avtomobil egalari va haydovchilariga.",
      "Shaxsiy avtomobilida Polshaga kirayotganlarga.",
      "Uchinchi shaxslar oldidagi javobgarlik bo‘yicha amaldagi sug‘urta himoyasiga muhtoj bo‘lganlarga.",
      "Yevropa Ittifoqi bo‘ylab safar uchun vaqtinchalik sug‘urta kerak bo‘lganlarga.",
      "Agar avtomobil Polsha orqali tranzit o‘tayotgan bo‘lsa.",
    ],
  },
  how: {
    title: "Qanday rasmiylashtiriladi",
    steps: [
      "Saytdagi forma orqali ariza yuboring.",
      "Hisob-kitob uchun avtomobil va haydovchi ma’lumotlarini yuboring.",
      "Sug‘urta badalini qulay usulda to‘lang.",
      "Tayyor polis va tekshirish bo‘yicha yo‘riqnomani oling.",
    ],
  },
  price: {
    title: "Narxi",
    text:
      "Narx polisning amal qilish muddati va transport vositasi turiga bog‘liq. Taxminiy narxni har doim sayt bosh sahifasidagi onlayn kalkulyator orqali ko‘rish mumkin.",
  },
  validity: {
    title: "Amal qilish muddati",
    text:
      "30 kundan 364 kungacha bo‘lgan polislar mavjud. Boshlanish sanasi rasmiylashtirish vaqtida ko‘rsatiladi va sug‘urta tanlangan muddat davomida amal qiladi. Agar ariza to‘ldirishda kerakli muddat ko‘rinmasa — bu ma’lumotni izohda ko‘rsating.",
  },
  form: {
    title: "Ariza formasi",
    desc:
      "Quyidagi tugmani bosing — rasmiylashtirish formasiga ega bosh sahifa ochiladi.",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q:
          "Belarus raqamli avtomobil bilan Belarus-Polsha chegarasini kesib o‘tish mumkinmi?",
        a:
          "Ha, chegarani kesib o‘tish mumkin. Lekin Polsha Belarus raqamli avtomobilda avtomobil egasi albatta bo‘lishi kerak degan qoidani joriy qilganini tushunish muhim. Bu avtomobil yuridik shaxsga tegishli bo‘lishi yoki chegarani kesib o‘tish vaqtida avtomobilda bo‘lmagan shaxs nomida bo‘lishi mumkin emasligini anglatadi.",
      },
      {
        q:
          "Agar men hali chegarani kesib o‘tmagan bo‘lsam, onlayn rasmiylashtirish mumkinmi?",
        a:
          "Ha, polis kerakli amal qilish sanasiga tayyor bo‘lishi uchun arizani oldindan yuborish mumkin.",
      },
      {
        q:
          "Polis faqat Polsha bo‘ylab safarlar uchun mos keladimi?",
        a:
          "Polis Polshaga kirish uchun rasmiylashtiriladi va sug‘urta shartlarida ko‘rsatilgan davlatlar hududida amal qilishi mumkin (Yevropa iqtisodiy hududi davlatlari + Shveytsariya).",
      },
      {
        q:
          "Yuk avtomobili uchun sug‘urta rasmiylashtirish mumkinmi?",
        a:
          "Ha, rasmiylashtirish yengil avtomobillar va yuk transporti uchun mavjud, lekin faqat jismoniy shaxs nomiga (masalan, haydovchi nomiga).",
      },
      {
        q: "Polis qanchalik tez yuboriladi?",
        a:
          "To‘lov tasdiqlangandan so‘ng polis odatda qisqa vaqt ichida elektron shaklda yuboriladi. Operatorlar bandligiga bog‘liq, o‘rtacha 10 daqiqa ichida.",
      },
      {
        q: "Polisning amal qilishini qayerda tekshirish mumkin?",
        a:
          "Tekshiruv Polshadagi rasmiy UFG xizmati orqali amalga oshirilishi mumkin.",
      },
    ],
  },
  carousel: {
    title: "Yo‘nalishlar bo‘yicha foydali sahifalar",
    cardTitle:
      "Belarus avtomobilining Polshaga safari uchun sug‘urtasi",
    cardText:
      "Shartlar, muddatlar, narx va onlayn rasmiylashtirish.",
    cta: "Sahifani ochish",
  },
};

const ka: BelarusPolandOcDictionary = {
  seo: {
    title: "ბელარუსულ ნომრიან ავტომობილზე დაზღვევა პოლონეთში",
    description:
      "დაზღვევის გაფორმება პოლონეთში გამგზავრებისთვის. ონლაინ განაცხადი, ღირებულების გამოთვლა, მხარდაჭერა WhatsApp-სა და Telegram-ში.",
  },
  breadcrumbTitle: "ბელარუსული ავტომობილის დაზღვევა პოლონეთში",
  hero: {
    kicker: "დაზღვევა ბელარუსში რეგისტრირებული ავტომობილებისთვის",
    title: "დაზღვევა პოლონეთში ბელარუსული ნომრიანი ავტომობილებისთვის",
    lead:
      "გააფორმეთ პოლისი პოლონეთსა და ევროკავშირის ქვეყნებში შესასვლელად და გადაადგილებისთვის: ონლაინ განაცხადი, ღირებულების გამოთვლა და მხარდაჭერა მესენჯერებში.",
    cta: "დაზღვევაზე განაცხადის გაფორმება",
  },
  what: {
    title:
      "OC graniczne პოლონეთში ბელარუსული ნომრიანი ავტომობილისთვის",
    text:
      "თუ ავტომობილი რეგისტრირებულია ბელარუსში და გეგმავთ პოლონეთში გამგზავრებას, შესასვლელად შესაძლოა საჭირო იყოს სასაზღვრო დაზღვევის ხელშეკრულება OC graniczne. ასეთი პოლისი გაიცემა იმ სატრანსპორტო საშუალებებისთვის, რომლებიც რეგისტრირებულია ევროპის ეკონომიკური ზონის ფარგლებს გარეთ, თუ არ არსებობს მოქმედი „მწვანე ბარათი“. ამ გვერდზე შეგიძლიათ გაიგოთ, ვის სჭირდება OC graniczne, როგორ ხდება გაფორმება, რა ღირს დაზღვევა და რა ვადით შეიძლება მისი გაფორმება. განაცხადის გაგზავნის შემდეგ პოლისი იგზავნება PDF ფორმატში.",
  },
  who: {
    title: "ვის სჭირდება ეს პოლისი:",
    items: [
      "ბელარუსში რეგისტრირებული ავტომობილების მფლობელებსა და მძღოლებს.",
      "მათ, ვინც პოლონეთში პირადი ავტომობილით შედის.",
      "მათ, ვისაც სჭირდება მოქმედი პასუხისმგებლობის დაზღვევა მესამე პირების წინაშე.",
      "მათ, ვისაც ევროკავშირში მგზავრობისთვის დროებითი დაზღვევა ესაჭიროება.",
      "თუ ავტომობილი პოლონეთის გავლით ტრანზიტით გადაადგილდება.",
    ],
  },
  how: {
    title: "როგორ გავაფორმოთ",
    steps: [
      "დატოვეთ განაცხადი ვებგვერდის ფორმის საშუალებით.",
      "გადმოგვიგზავნეთ ავტომობილისა და მძღოლის მონაცემები ღირებულების დასათვლელად.",
      "გადაიხადეთ სადაზღვევო პრემია თქვენთვის მოსახერხებელი მეთოდით.",
      "მიიღეთ მზა პოლისი და ინსტრუქცია მისი გადამოწმებისთვის.",
    ],
  },
  price: {
    title: "ღირებულება",
    text:
      "ფასი დამოკიდებულია პოლისის მოქმედების ვადასა და სატრანსპორტო საშუალების ტიპზე. სავარაუდო ღირებულების ნახვა ყოველთვის შესაძლებელია საიტის მთავარ გვერდზე ონლაინ-კალკულატორის საშუალებით.",
  },
  validity: {
    title: "მოქმედების ვადები",
    text:
      "ხელმისაწვდომია პოლისები 30 დღიდან 364 დღემდე ვადით. დაწყების თარიღი მითითებულია გაფორმების დროს, რის შემდეგაც დაფარვა მოქმედებს არჩეული პერიოდის განმავლობაში. თუ განაცხადის შევსებისას თქვენთვის საჭირო ვადას ვერ ხედავთ — მიუთითეთ ეს ინფორმაცია კომენტარში.",
  },
  form: {
    title: "განაცხადის ფორმა",
    desc:
      "დააჭირეთ ქვემოთ მოცემულ ღილაკს — გაიხსნება მთავარი გვერდი განაცხადის ფორმით.",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "შესაძლებელია თუ არა ბელარუსულ-პოლონური საზღვრის გადაკვეთა ბელარუსული ნომრიანი ავტომობილით?",
        a:
          "დიახ, საზღვრის გადაკვეთა შესაძლებელია. თუმცა მნიშვნელოვანია იცოდეთ, რომ პოლონეთში მოქმედებს წესი, რომლის მიხედვითაც ბელარუსული ნომრიანი ავტომობილის სალონში აუცილებლად უნდა იმყოფებოდეს ავტომობილის მფლობელი. ეს ნიშნავს, რომ ავტომობილი არ უნდა ეკუთვნოდეს იურიდიულ პირს ან პირს, რომელიც საზღვრის გადაკვეთის დროს ავტომობილში არ იმყოფება.",
      },
      {
        q: "შესაძლებელია თუ არა ონლაინ გაფორმება, თუ ჯერ საზღვარი არ გადამიკვეთავს?",
        a:
          "დიახ, განაცხადის დატოვება შესაძლებელია წინასწარ, რათა პოლისი მიიღოთ სასურველი დაწყების თარიღისთვის.",
      },
      {
        q: "გამოდგება თუ არა პოლისი მხოლოდ პოლონეთში მგზავრობისთვის?",
        a:
          "პოლისი ფორმდება პოლონეთში შესასვლელად და შეიძლება მოქმედებდეს დაზღვევის პირობებში მითითებულ ქვეყნებში (ევროპის ეკონომიკური ზონის ქვეყნები + შვეიცარია).",
      },
      {
        q: "შესაძლებელია თუ არა სატვირთო ავტომობილის დაზღვევის გაფორმება?",
        a:
          "დიახ, გაფორმება შესაძლებელია როგორც მსუბუქი, ისე სატვირთო ტრანსპორტისთვის, თუმცა მხოლოდ ფიზიკურ პირზე (მაგალითად, მძღოლზე).",
      },
      {
        q: "რამდენად სწრაფად იგზავნება პოლისი?",
        a:
          "გადახდის დადასტურების შემდეგ პოლისი, როგორც წესი, მოკლე დროში იგზავნება ელექტრონული ფორმით. ეს დამოკიდებულია ოპერატორების დატვირთვაზე, საშუალოდ დაახლოებით 10 წუთში.",
      },
      {
        q: "სად შეიძლება პოლისის ნამდვილობის შემოწმება?",
        a:
          "შემოწმება შესაძლებელია პოლონეთის ოფიციალური UFG სერვისის საშუალებით.",
      },
    ],
  },
  carousel: {
    title: "სასარგებლო გვერდები მიმართულებების მიხედვით",
    cardTitle:
      "ბელარუსული ავტომობილის დაზღვევა პოლონეთში მგზავრობისთვის",
    cardText:
      "პირობები, ვადები, ღირებულება და ონლაინ გაფორმება.",
    cta: "გვერდის გახსნა",
  },
};

const kk: BelarusPolandOcDictionary = {
  seo: {
    title: "Польшаға беларусь нөмірлі автокөлікке сақтандыру",
    description:
      "Польшаға сапарға арналған сақтандыруды рәсімдеу. Онлайн өтінім, бағаны есептеу, WhatsApp және Telegram арқылы қолдау.",
  },
  breadcrumbTitle: "Беларусь автокөлігін Польшаға сақтандыру",
  hero: {
    kicker: "Беларусьтен келген автокөліктерге арналған сақтандыру",
    title: "Беларусь нөмірлі көліктерге Польшаға сақтандыру",
    lead:
      "Польшаға және ЕО елдеріне кіру мен сапарға арналған полисті рәсімдеңіз: онлайн өтінім, бағаны есептеу және мессенджерлер арқылы қолдау.",
    cta: "Сақтандыруға өтінім беру",
  },
  what: {
    title: "Беларусь нөмірлі автокөлікке Польшадағы OC graniczne",
    text:
      "Егер автокөлік Беларусьте тіркелген болса және сіз Польшаға сапар жоспарлап отырсаңыз, кіру үшін OC graniczne шекаралық сақтандыру шарты қажет болуы мүмкін. Мұндай полис Еуропалық экономикалық аймақтан тыс тіркелген көлік құралдарына, егер жарамды «Жасыл карта» болмаса, рәсімделеді. Бұл бетте сіз OC graniczne кімге қажет екенін, рәсімдеу қалай өтетінін, сақтандыру қанша тұратынын және қандай мерзімге рәсімдеуге болатынын біле аласыз. Өтінім бергеннен кейін полис PDF форматында жіберіледі.",
  },
  who: {
    title: "Бұл полис кімге қажет:",
    items: [
      "Беларусьте тіркелген автокөліктердің иелері мен жүргізушілеріне.",
      "Польшаға жеке автокөлікпен кіретіндерге.",
      "Үшінші тұлғалар алдындағы жауапкершілікті сақтандыру қорғанысы қажет адамдарға.",
      "ЕО аумағында сапар үшін уақытша сақтандыру қажет адамдарға.",
      "Егер автокөлік Польша арқылы транзитпен өтетін болса.",
    ],
  },
  how: {
    title: "Қалай рәсімдеуге болады",
    steps: [
      "Сайттағы форма арқылы өтінім қалдырыңыз.",
      "Есептеу үшін автокөлік пен жүргізуші деректерін жіберіңіз.",
      "Сақтандыру жарнасын ыңғайлы тәсілмен төлеңіз.",
      "Дайын полис пен тексеру нұсқаулығын алыңыз.",
    ],
  },
  price: {
    title: "Құны",
    text:
      "Бағасы полистің қолданылу мерзімі мен көлік құралының түріне байланысты. Шамамен құнын сайттың басты бетіндегі онлайн-калькулятордан әрқашан көруге болады.",
  },
  validity: {
    title: "Қолданылу мерзімдері",
    text:
      "30 күннен 364 күнге дейінгі мерзімге полистер қолжетімді. Басталу күні рәсімдеу кезінде көрсетіледі, содан кейін сақтандыру таңдалған мерзім ішінде әрекет етеді. Егер өтінімді толтыру кезінде қажетті мерзімді көрмесеңіз — бұл ақпаратты түсініктемеде көрсетіңіз.",
  },
  form: {
    title: "Өтінім формасы",
    desc:
      "Төмендегі батырманы басыңыз — рәсімдеу формасы бар басты бет ашылады.",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Беларусь нөмірлі көлікпен Беларусь-Польша шекарасынан өтуге бола ма?",
        a:
          "Иә, шекарадан өтуге болады. Бірақ Польша беларусь нөмірлі автокөлікте міндетті түрде көлік иесі болуы керек деген ереже енгізгенін түсіну маңызды. Бұл көлік заңды тұлғаға тиесілі болмауы керек немесе шекарадан өту кезінде көлікте жоқ адамға тіркелмеуі тиіс дегенді білдіреді.",
      },
      {
        q: "Шекарадан әлі өтпесем де, онлайн рәсімдеуге бола ма?",
        a:
          "Иә, полисті қажетті басталу күніне алу үшін өтінімді алдын ала беруге болады.",
      },
      {
        q: "Полис тек Польша бойынша сапарларға жарай ма?",
        a:
          "Полис Польшаға кіру үшін рәсімделеді және сақтандыру шарттарында көрсетілген елдер аумағында әрекет етуі мүмкін (Еуропалық экономикалық аймақ елдері + Швейцария).",
      },
      {
        q: "Жүк көлігіне сақтандыру рәсімдеуге бола ма?",
        a:
          "Иә, рәсімдеу жеңіл және жүк көліктеріне қолжетімді, бірақ тек жеке тұлғаға (мысалы, жүргізушіге) рәсімделеді.",
      },
      {
        q: "Полис қаншалықты тез келеді?",
        a:
          "Төлем расталғаннан кейін полис әдетте қысқа уақыт ішінде электронды түрде жіберіледі. Бұл операторлардың жүктемесіне байланысты, орташа есеппен 10 минут ішінде.",
      },
      {
        q: "Полистің жарамдылығын қайдан тексеруге болады?",
        a:
          "Тексеру Польшадағы ресми UFG сервисі арқылы мүмкін.",
      },
    ],
  },
  carousel: {
    title: "Бағыттар бойынша пайдалы беттер",
    cardTitle:
      "Беларусь автокөлігін Польшаға сапар үшін сақтандыру",
    cardText:
      "Шарттар, мерзімдер, құны және онлайн рәсімдеу.",
    cta: "Бетті ашу",
  },
};


const tr: BelarusPolandOcDictionary = {
  seo: {
    title: "Belarus plakalı araçlar için Polonya sigortası",
    description:
      "Polonya seyahati için sigorta düzenlenmesi. Online başvuru, fiyat hesaplama, WhatsApp ve Telegram desteği.",
  },
  breadcrumbTitle: "Belarus plakalı araçlar için Polonya sigortası",
  hero: {
    kicker: "Belarus araçları için sigorta",
    title: "Belarus plakalı araçlar için Polonya sigortası",
    lead: "Polonya ve AB’ye giriş ile seyahatler için poliçenizi düzenleyin: online başvuru, fiyat hesaplama ve mesajlaşma uygulamalarında destek.",
    cta: "Sigorta başvurusu yap",
  },
  what: {
    title: "Belarus plakalı araçlar için Polonya OC graniczne sigortası",
    text: "Araç Belarus’ta kayıtlıysa ve Polonya’ya seyahat planlıyorsanız, ülkeye giriş için OC graniczne sınır sigortası gerekebilir. Bu poliçe, geçerli bir “Yeşil Kart” bulunmayan ve Avrupa Ekonomik Alanı dışında kayıtlı araçlar için düzenlenir. Bu sayfada OC graniczne sigortasının kimler için gerekli olduğunu, nasıl düzenlendiğini, sigorta ücretini ve hangi süreler için yapılabileceğini öğrenebilirsiniz. Başvuru gönderildikten sonra poliçe PDF formatında iletilir.",
  },
  who: {
    title: "Bu poliçe kimler için gereklidir:",
    items: [
      "Belarus’ta kayıtlı araçların sahipleri ve sürücüleri için.",
      "Kendi aracıyla Polonya’ya giriş yapanlar için.",
      "Üçüncü şahıslara karşı geçerli sorumluluk sigortası korumasına ihtiyaç duyanlar için.",
      "AB içinde seyahat için geçici sigortaya ihtiyaç duyanlar için.",
      "Araç Polonya üzerinden transit geçiş yapıyorsa.",
    ],
  },
  how: {
    title: "Nasıl düzenlenir",
    steps: [
      "Web sitesindeki form üzerinden başvuru bırakın.",
      "Hesaplama için araç ve sürücü bilgilerini gönderin.",
      "Sigorta primini size uygun bir yöntemle ödeyin.",
      "Hazır poliçeyi ve kontrol talimatlarını alın.",
    ],
  },
  price: {
    title: "Fiyat",
    text: "Fiyat, poliçenin geçerlilik süresine ve araç türüne bağlıdır. Yaklaşık maliyet her zaman sitenin ana sayfasındaki online hesaplayıcıda görülebilir.",
  },
  validity: {
    title: "Geçerlilik süreleri",
    text: "30 günden 364 güne kadar poliçeler mevcuttur. Başlangıç tarihi düzenleme sırasında belirtilir ve kapsam seçilen süre boyunca geçerli olur. Başvuru formunda ihtiyacınız olan süreyi göremiyorsanız, bu bilgiyi yorum kısmında belirtin.",
  },
  form: {
    title: "Başvuru formu",
    desc: "Aşağıdaki butona tıklayın — başvuru formunun bulunduğu ana sayfa açılacaktır.",
  },
  faq: {
    title: "SSS",
    items: [
      {
        q: "Belarus plakalı araçla Belarus-Polonya sınırı geçilebilir mi?",
        a: "Evet, sınır geçilebilir. Ancak Polonya’nın, Belarus plakalı araçta araç sahibinin mutlaka bulunması gerektiği yönünde bir kural getirdiğini anlamak önemlidir. Bu da aracın tüzel kişiye ait olamayacağı veya sınır geçişi sırasında araç sahibi araçta bulunmuyorsa giriş yapılamayacağı anlamına gelir.",
      },
      {
        q: "Sınırı henüz geçmediysem online başvuru yapabilir miyim?",
        a: "Evet, poliçeyi gerekli başlangıç tarihine hazır almak için başvuruyu önceden bırakabilirsiniz.",
      },
      {
        q: "Poliçe yalnızca Polonya içindeki seyahatler için mi geçerlidir?",
        a: "Poliçe Polonya’ya giriş için düzenlenir ve sigorta şartlarında belirtilen ülkelerde geçerli olabilir (Avrupa Ekonomik Alanı ülkeleri + İsviçre).",
      },
      {
        q: "Kamyon için sigorta yaptırmak mümkün mü?",
        a: "Evet, sigorta hem binek araçlar hem de yük taşımacılığı araçları için düzenlenebilir, ancak yalnızca gerçek kişi adına (örneğin sürücü adına).",
      },
      {
        q: "Poliçe ne kadar sürede gönderilir?",
        a: "Ödeme onaylandıktan sonra poliçe genellikle kısa süre içinde elektronik formatta gönderilir. Operatörlerin yoğunluğuna bağlıdır, ortalama olarak yaklaşık 10 dakika sürer.",
      },
      {
        q: "Poliçenin geçerliliği nereden kontrol edilir?",
        a: "Kontrol, Polonya’daki resmi UFG servisi üzerinden yapılabilir.",
      },
    ],
  },
  carousel: {
    title: "Yönlere göre faydalı sayfalar",
    cardTitle: "Polonya seyahati için Belarus plakalı araç sigortası",
    cardText: "Şartlar, süreler, fiyatlar ve online düzenleme.",
    cta: "Sayfayı aç",
  },
};

const fa: BelarusPolandOcDictionary = {
  seo: {
    title: "بیمه خودرو بلاروسی برای سفر به لهستان",
    description:
      "صدور بیمه برای سفر به لهستان. درخواست آنلاین، محاسبه هزینه، پشتیبانی در WhatsApp و Telegram.",
  },
  breadcrumbTitle: "بیمه خودروی بلاروسی برای لهستان",
  hero: {
    kicker: "بیمه برای خودروهای ثبت‌شده در بلاروس",
    title: "بیمه سفر به لهستان برای خودروهای دارای پلاک بلاروس",
    lead:
      "برای ورود و سفر در لهستان و اتحادیه اروپا بیمه تهیه کنید: درخواست آنلاین، محاسبه هزینه و پشتیبانی از طریق پیام‌رسان‌ها.",
    cta: "ثبت درخواست بیمه",
  },
  what: {
    title: "بیمه OC graniczne لهستان برای خودروهای دارای پلاک بلاروس",
    text:
      "اگر خودرو در بلاروس ثبت شده و قصد سفر به لهستان را دارید، ممکن است برای ورود به این کشور به بیمه مرزی OC graniczne نیاز داشته باشید. این بیمه برای وسایل نقلیه ثبت‌شده خارج از منطقه اقتصادی اروپا صادر می‌شود، در صورتی که «گرین کارت» معتبر وجود نداشته باشد. در این صفحه می‌توانید بررسی کنید چه کسانی به OC graniczne نیاز دارند، روند صدور چگونه است، هزینه بیمه چقدر است و برای چه مدتی می‌توان آن را صادر کرد. پس از ثبت درخواست، بیمه‌نامه در قالب PDF ارسال می‌شود.",
  },
  who: {
    title: "این بیمه برای چه کسانی لازم است:",
    items: [
      "مالکان و رانندگان خودروهای ثبت‌شده در بلاروس.",
      "افرادی که با خودروی شخصی وارد لهستان می‌شوند.",
      "افرادی که به پوشش معتبر مسئولیت در برابر اشخاص ثالث نیاز دارند.",
      "افرادی که برای سفر در اتحادیه اروپا به بیمه موقت نیاز دارند.",
      "در صورتی که خودرو از طریق لهستان به صورت ترانزیتی عبور کند.",
    ],
  },
  how: {
    title: "نحوه دریافت بیمه",
    steps: [
      "درخواست خود را از طریق فرم سایت ارسال کنید.",
      "اطلاعات خودرو و راننده را برای محاسبه هزینه ارائه دهید.",
      "حق بیمه را به روش مناسب پرداخت کنید.",
      "بیمه‌نامه آماده و دستورالعمل بررسی اعتبار آن را دریافت کنید.",
    ],
  },
  price: {
    title: "هزینه",
    text:
      "قیمت به مدت اعتبار بیمه‌نامه و نوع وسیله نقلیه بستگی دارد. هزینه تقریبی را همیشه می‌توانید در صفحه اصلی سایت و از طریق ماشین‌حساب آنلاین مشاهده کنید.",
  },
  validity: {
    title: "مدت اعتبار",
    text:
      "بیمه‌نامه‌ها برای بازه زمانی ۳۰ روز تا ۳۶۴ روز در دسترس هستند. تاریخ شروع هنگام ثبت مشخص می‌شود و پوشش برای مدت انتخاب‌شده معتبر خواهد بود. اگر هنگام تکمیل فرم، مدت موردنظر خود را مشاهده نمی‌کنید، آن را در بخش توضیحات ذکر کنید.",
  },
  form: {
    title: "فرم درخواست",
    desc:
      "روی دکمه زیر کلیک کنید — صفحه اصلی با فرم صدور بیمه باز خواهد شد.",
  },
  faq: {
    title: "سوالات متداول",
    items: [
      {
        q: "آیا می‌توان با خودروی دارای پلاک بلاروس از مرز بلاروس و لهستان عبور کرد؟",
        a:
          "بله، عبور از مرز امکان‌پذیر است. اما باید توجه داشت که لهستان قانونی وضع کرده است که در خودروی دارای پلاک بلاروس، مالک خودرو باید حتماً حضور داشته باشد. این یعنی خودرو نمی‌تواند متعلق به شخص حقوقی باشد یا متعلق به شخصی باشد که هنگام عبور از مرز داخل خودرو حضور ندارد.",
      },
      {
        q: "آیا می‌توان قبل از عبور از مرز، بیمه را آنلاین صادر کرد؟",
        a:
          "بله، می‌توانید از قبل درخواست ثبت کنید تا بیمه‌نامه در تاریخ موردنیاز شما فعال شود.",
      },
      {
        q: "آیا این بیمه فقط برای سفر در لهستان معتبر است؟",
        a:
          "این بیمه برای ورود به لهستان صادر می‌شود و ممکن است در کشورهای ذکرشده در شرایط بیمه نیز معتبر باشد (کشورهای منطقه اقتصادی اروپا + سوئیس).",
      },
      {
        q: "آیا می‌توان بیمه را برای کامیون صادر کرد؟",
        a:
          "بله، صدور بیمه هم برای خودروهای سواری و هم برای وسایل نقلیه باری امکان‌پذیر است، اما فقط برای اشخاص حقیقی (مثلاً راننده).",
      },
      {
        q: "بیمه‌نامه با چه سرعتی ارسال می‌شود؟",
        a:
          "پس از تأیید پرداخت، بیمه‌نامه معمولاً در مدت کوتاهی به صورت الکترونیکی ارسال می‌شود. این موضوع به میزان شلوغی اپراتورها بستگی دارد، اما به طور متوسط حدود ۱۰ دقیقه زمان می‌برد.",
      },
      {
        q: "اعتبار بیمه‌نامه را از کجا می‌توان بررسی کرد؟",
        a:
          "بررسی اعتبار از طریق سرویس رسمی UFG در لهستان امکان‌پذیر است.",
      },
    ],
  },
  carousel: {
    title: "صفحات مفید بر اساس مسیرها",
    cardTitle: "بیمه خودروی بلاروسی برای سفر به لهستان",
    cardText: "شرایط، مدت اعتبار، هزینه و صدور آنلاین.",
    cta: "باز کردن صفحه",
  },
};

const hy: BelarusPolandOcDictionary = {
  seo: {
    title: "Ապահովագրություն բելառուսական համարանիշով մեքենայի համար Լեհաստան մեկնելու համար",
    description:
      "Ապահովագրության ձևակերպում Լեհաստան ուղևորության համար։ Առցանց հայտ, արժեքի հաշվարկ, աջակցություն WhatsApp և Telegram մեսենջերներում։",
  },
  breadcrumbTitle: "Բելառուսական մեքենայի ապահովագրություն Լեհաստան մեկնելու համար",
  hero: {
    kicker: "Ապահովագրություն Բելառուսից մեքենաների համար",
    title: "Ապահովագրություն Լեհաստան մեկնելու համար բելառուսական համարանիշով մեքենաների համար",
    lead: "Ձևակերպեք ապահովագրական պոլիս Լեհաստան և ԵՄ մուտք գործելու ու ճանապարհորդելու համար՝ առցանց հայտ, արժեքի հաշվարկ և աջակցություն մեսենջերներում։",
    cta: "Ներկայացնել ապահովագրության հայտ",
  },
  what: {
    title: "OC graniczne Լեհաստանի համար բելառուսական համարանիշով մեքենայի համար",
    text:
      "Եթե մեքենան գրանցված է Բելառուսում և դուք նախատեսում եք ուղևորություն Լեհաստան, մուտքի համար կարող է պահանջվել սահմանային ապահովագրության պայմանագիր OC graniczne։ Այդպիսի պոլիսը ձևակերպվում է Եվրոպական տնտեսական գոտուց դուրս գրանցված տրանսպորտային միջոցների համար, եթե բացակայում է գործող «Կանաչ քարտը»։ Այս էջում կարող եք տեղեկանալ, թե ում է անհրաժեշտ OC graniczne-ը, ինչպես է կատարվում ձևակերպումը, որքան արժե ապահովագրությունը և ինչ ժամկետով կարելի է այն ձևակերպել։ Հայտը ներկայացնելուց հետո պոլիսը ուղարկվում է PDF ձևաչափով։",
  },
  who: {
    title: "Ում է անհրաժեշտ այս պոլիսը․",
    items: [
      "Բելառուսում գրանցված մեքենաների սեփականատերերին և վարորդներին։",
      "Նրանց, ովքեր անձնական մեքենայով մուտք են գործում Լեհաստան։",
      "Նրանց, ում անհրաժեշտ է գործող պատասխանատվության ապահովագրություն երրորդ անձանց նկատմամբ։",
      "Նրանց, ում անհրաժեշտ է ժամանակավոր ապահովագրություն ԵՄ տարածքում ուղևորության համար։",
      "Եթե մեքենան անցնում է Լեհաստանով տարանցիկ երթուղով։",
    ],
  },
  how: {
    title: "Ինչպես ձևակերպել",
    steps: [
      "Լրացրեք հայտ կայքի ձևի միջոցով։",
      "Տրամադրեք մեքենայի և վարորդի տվյալները հաշվարկի համար։",
      "Վճարեք ապահովագրական վճարը հարմար եղանակով։",
      "Ստացեք պատրաստի պոլիսը և ստուգման հրահանգները։",
    ],
  },
  price: {
    title: "Արժեք",
    text:
      "Գինը կախված է պոլիսի գործողության ժամկետից և տրանսպորտային միջոցի տեսակից։ Մոտավոր արժեքը միշտ կարելի է տեսնել կայքի գլխավոր էջի առցանց հաշվիչում։",
  },
  validity: {
    title: "Գործողության ժամկետներ",
    text:
      "Հասանելի են պոլիսներ 30 օրից մինչև 364 օր ժամկետով։ Սկսման ամսաթիվը նշվում է ձևակերպման ընթացքում, որից հետո ապահովագրական ծածկույթը գործում է ընտրված ժամանակահատվածում։ Եթե հայտը լրացնելիս չեք տեսնում ձեզ անհրաժեշտ ժամկետը, նշեք այդ տվյալները մեկնաբանության դաշտում։",
  },
  form: {
    title: "Հայտի ձև",
    desc:
      "Սեղմեք ստորև գտնվող կոճակը — կբացվի գլխավոր էջը հայտի ձևով։",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Հնարավո՞ր է բելառուսական համարանիշով մեքենայով հատել Բելառուս-Լեհաստան սահմանը։",
        a: "Այո, սահմանը հատել հնարավոր է։ Սակայն կարևոր է հասկանալ, որ Լեհաստանը սահմանել է կանոն, ըստ որի բելառուսական համարանիշով մեքենայում պարտադիր պետք է գտնվի մեքենայի սեփականատերը։ Սա նշանակում է, որ մեքենան չի կարող պատկանել իրավաբանական անձի կամ այն անձին, որը սահմանը հատելու պահին մեքենայում ներկա չէ։",
      },
      {
        q: "Հնարավո՞ր է ձևակերպել առցանց, եթե ես դեռ չեմ հատել սահմանը։",
        a: "Այո, կարող եք նախապես թողնել հայտը, որպեսզի ստանաք պոլիսը անհրաժեշտ մեկնարկի ամսաթվով։",
      },
      {
        q: "Արդյո՞ք պոլիսը հարմար է միայն Լեհաստան ուղևորությունների համար։",
        a: "Պոլիսը ձևակերպվում է Լեհաստան մուտք գործելու համար և կարող է գործել ապահովագրության պայմաններում նշված երկրների տարածքում (Եվրոպական տնտեսական գոտու երկրներ + Շվեյցարիա)։",
      },
      {
        q: "Հնարավո՞ր է ապահովագրություն ձևակերպել բեռնատար մեքենայի համար։",
        a: "Այո, ձևակերպումը հասանելի է ինչպես թեթև, այնպես էլ բեռնատար տրանսպորտի համար, սակայն միայն ֆիզիկական անձի անունով (օրինակ՝ վարորդի)։",
      },
      {
        q: "Որքա՞ն արագ է ուղարկվում պոլիսը։",
        a: "Վճարման հաստատումից հետո պոլիսը սովորաբար ուղարկվում է կարճ ժամանակում էլեկտրոնային ձևաչափով։ Դա կախված է օպերատորների ծանրաբեռնվածությունից, միջինում՝ մոտ 10 րոպեի ընթացքում։",
      },
      {
        q: "Որտե՞ղ կարելի է ստուգել պոլիսի վավերականությունը։",
        a: "Ստուգումը հնարավոր է Լեհաստանի պաշտոնական UFG ծառայության միջոցով։",
      },
    ],
  },
  carousel: {
    title: "Օգտակար էջեր ուղղությունների վերաբերյալ",
    cardTitle:
      "Բելառուսական մեքենայի ապահովագրություն Լեհաստան մեկնելու համար",
    cardText:
      "Պայմաններ, ժամկետներ, արժեք և առցանց ձևակերպում։",
    cta: "Բացել էջը",
  },
};



export const belarusPolandOcDictionary: Record<Lang, BelarusPolandOcDictionary> = { ru, pl, en, be, uz, ka, kk, tr, fa, hy };

export function getBelarusPolandOcDictionary(lang: Lang): BelarusPolandOcDictionary {
  return belarusPolandOcDictionary[lang] ?? ru;
}
