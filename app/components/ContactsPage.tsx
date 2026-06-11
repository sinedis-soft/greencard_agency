import type { Lang } from "@/app/dictionaries/header";

import ContactFeedbackForm from "@/app/components/ContactFeedbackForm";

import { keepShortWords } from "@/app/utils/typography";

const titles: Record<Lang, string> = {
  ru: "Контакты",
  en: "Contacts",
  pl: "Kontakt",
  be: "Кантакты",
  uk: "Контакти",

  kk: "Байланыс",
  uz: "Kontaktlar",
  az: "Əlaqə",

  tr: "İletişim",

  ka: "კონტაქტები",
  hy: "Կոնտակտներ",

  fa: "تماس با ما",
  ckb: "پەیوەندی",
  kmr: "Têkilî",
  ar: "اتصل بنا",
  he: "יצירת קשר",

  ro: "Contact",
  sr: "Контакт",
  sq: "Kontakt",

  mn: "Холбоо барих",
};

const intro: Record<Lang, string> = {
  ru: "Свяжитесь с нами удобным для вас способом.",
  en: "Contact us in any convenient way.",
  pl: "Skontaktuj się z nami w wygodny dla siebie sposób.",
  be: "Звяжыцеся з намі зручным для вас спосабам.",
  uk: "Зв’яжіться з нами зручним для вас способом.",

  kk: "Бізбен өзіңізге ыңғайлы тәсілмен хабарласыңыз.",
  uz: "Biz bilan o'zingizga qulay usulda bog'laning.",
  az: "Bizimlə sizin üçün əlverişli olan istənilən üsulla əlaqə saxlayın.",

  tr: "Bize size en uygun yoldan ulaşın.",

  ka: "დაგვიკავშირდით თქვენთვის მოსახერხებელი ნებისმიერი გზით.",
  hy: "Կապվեք մեզ հետ ձեզ հարմար ցանկացած եղանակով։",

  fa: "از هر روشی که برای شما راحت‌تر است با ما تماس بگیرید.",
  ckb: "بە هەر شێوازێک کە بۆت گونجاوە پەیوەندیمان پێوە بکە.",
  kmr: "Bi her awayê ku ji bo we guncaw e bi me re têkilî daynin.",
  ar: "تواصل معنا بالطريقة التي تناسبك.",
  he: "צרו איתנו קשר בכל דרך הנוחה לכם.",

  ro: "Contactați-ne în orice mod convenabil pentru dumneavoastră.",
  sr: "Контактирајте нас на начин који вам највише одговара.",
  sq: "Na kontaktoni në mënyrën që ju përshtatet më shumë.",

  mn: "Өөрт тохиромжтой аргаар бидэнтэй холбоо барина уу.",
};

const labels: Record<
  Lang,
  {
    phone: string;
    email: string;
    whatsapp: string;
    telegram: string;
    facebook: string;
    instagram: string;
  }
> = {
  ru: {
    phone: "Телефон",
    email: "Электронная почта",
    whatsapp: "WhatsApp",
    telegram: "Телеграм",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  en: {
    phone: "Phone",
    email: "E-mail",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  pl: {
    phone: "Telefon",
    email: "Poczta elektroniczna",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  be: {
    phone: "Тэлефон",
    email: "Электронная пошта",
    whatsapp: "WhatsApp",
    telegram: "Тэлеграм",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  uk: {
    phone: "Телефон",
    email: "Електронна пошта",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  kk: {
    phone: "Телефон",
    email: "Электрондық пошта",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  uz: {
    phone: "Telefon",
    email: "Elektron pochta",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  az: {
    phone: "Telefon",
    email: "Elektron poçt",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  tr: {
    phone: "Telefon",
    email: "E-posta",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  ka: {
    phone: "ტელეფონი",
    email: "ელექტრონული ფოსტა",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  hy: {
    phone: "Հեռախոս",
    email: "Էլեկտրոնային փոստ",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  fa: {
    phone: "تلفن",
    email: "پست الکترونیکی",
    whatsapp: "واتس‌اپ",
    telegram: "تلگرام",
    facebook: "فیسبوک مسنجر",
    instagram: "اینستاگرام",
  },

  ckb: {
    phone: "تەلەفۆن",
    email: "ئیمەیڵ",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  kmr: {
    phone: "Telefon",
    email: "E-name",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  ar: {
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب",
    telegram: "تيليجرام",
    facebook: "فيسبوك ماسنجر",
    instagram: "إنستغرام",
  },

  he: {
    phone: "טלפון",
    email: "דואר אלקטרוני",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  ro: {
    phone: "Telefon",
    email: "E-mail",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  sr: {
    phone: "Телефон",
    email: "Е-пошта",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  sq: {
    phone: "Telefon",
    email: "E-mail",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },

  mn: {
    phone: "Утас",
    email: "И-мэйл",
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    facebook: "Facebook Messenger",
    instagram: "Instagram",
  },
};

export default function ContactsPage({ lang }: { lang: Lang }) {

  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <div className="section__hd">
            <div>

              <h1 className="section__title">{keepShortWords(titles[lang])}</h1>
              <p className="section__desc">{keepShortWords(intro[lang])}</p>

            </div>
          </div>

          <div className="panel contact-card">
            <div className="panel__body">

              <div className="contact-company">
                SINEDIS SP. Z O.O.
              </div>

              <a
                className="contact-row"
                href="mailto:europolis@greencard.agency"
              >
                <span className="contact-label">
                  {labels[lang].email}
                </span>

                <span className="contact-value">
                  europolis@greencard.agency
                </span>
              </a>

              <a
                className="contact-row"
                href="https://wa.me/48573581333"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-label">
                  {labels[lang].whatsapp}
                </span>

                <span className="contact-value">
                  +48 573 581 333
                </span>
              </a>

              <a
                className="contact-row"
                href="https://t.me/GreenCardAgency_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-label">
                  {labels[lang].telegram}
                </span>

                <span className="contact-value">
                  @GreenCardAgency_bot
                </span>
              </a>
              
              <a
                className="contact-row"
                href="https://m.me/779464698588846"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-label">
                  {labels[lang].facebook}
                </span>

                <span className="contact-value">
                  www.facebook.com/people/Sinedis/61580498747893/
                </span>
              </a>

              <a
                className="contact-row"
                href="https://www.instagram.com/sinedis_ubezpieczenia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-label">
                  {labels[lang].instagram}
                </span>

                <span className="contact-value">
                  @sinedis_ubezpieczenia
                </span>
              </a>

            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="panel__body">

              <ContactFeedbackForm lang={lang} />

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
