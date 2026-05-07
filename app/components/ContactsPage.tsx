import type { Lang } from "@/app/dictionaries/header";

import ContactFeedbackForm from "@/app/components/ContactFeedbackForm";

import { keepShortWords } from "@/app/utils/typography";

const titles: Record<Lang, string> = {
  ru: "Контакты",
  pl: "Kontakt",
  en: "Contacts",
  be: "Кантакты",
  uz: "Kontaktlar",
  ka: "კონტაქტები",
  kk: "Байланыс",
  tr: "İletişim",
  fa: "تماس با ما",
  hy: "Կոնտակտներ",
};

const intro: Record<Lang, string> = {
  ru: "Свяжитесь с нами удобным для вас способом.",
  pl: "Skontaktuj się z nami w wygodny dla Państwa sposób.",
  en: "Contact us in any convenient way.",
  be: "Звяжыцеся з намі зручным для вас спосабам.",
  uz: "Biz bilan o'zingizga qulay usulda bog'laning.",
  ka: "დაგვიკავშირდით თქვენთვის ხელსაყრელი ნებისმიერი ფორმით.",
  kk: "Бізге өзіңізге ыңғайлы тәсілмен хабарласыңыз.",
  tr: "Bize size en uygun yoldan ulaşın.",
  fa: "از هر طریقی که برایتان راحت‌تر است با ما تماس بگیرید.",
  hy: "Կապվեք մեզ հետ ձեզ հարմար ցանկացած տարբերակով:"
};

const labels: Record<Lang, { phone: string; email: string; whatsapp:string; telegram:string; facebook:string; instagram:string;}> = {
  ru: { phone: "Телефон", email: "Электронная почта", whatsapp:"Whats App", telegram: "Телеграм", facebook: "Facebook messenger", instagram:"Instagram", },
  pl: {    phone: "Telefon",    email: "Poczta elektroniczna",    whatsapp: "WhatsApp",    telegram: "Telegram", facebook: "Facebook messenger", instagram:"Instagram",},
  en: {    phone: "Phone",    email: "E-mail",    whatsapp: "WhatsApp",    telegram: "Telegram", facebook: "Facebook messenger", instagram:"Instagram",},
  be: {    phone: "Тэлефон",    email: "Электронная пошта",    whatsapp: "WhatsApp",    telegram: "Тэлеграм", facebook: "Facebook messenger", instagram:"Instagram",},
  uz: {    phone: "Telefon",    email: "Elektron pochta",    whatsapp: "WhatsApp",    telegram: "Telegram", facebook: "Facebook messenger", instagram:"Instagram",},
  ka: {    phone: "ტელეფონი",    email: "ელექტრონული ფოსტა",    whatsapp: "WhatsApp",    telegram: "Telegram", facebook: "Facebook messenger", instagram:"Instagram",},
  kk: {    phone: "Телефон",    email: "Электрондық пошта",    whatsapp: "WhatsApp",    telegram: "Telegram", facebook: "Facebook messenger", instagram:"Instagram",},
  tr: {    phone: "Telefon",    email: "E-posta",    whatsapp: "WhatsApp",    telegram: "Telegram", facebook: "Facebook messenger", instagram:"Instagram",},
  fa: {    phone: "تلفن",    email: "پست الکترونیکی",    whatsapp: "واتس‌اپ",    telegram: "تلگرام", facebook: "Facebook messenger", instagram:"Instagram",},
  hy: {    phone: "Հեռախոս",    email: "Էլեկտրոնային փոստ",    whatsapp: "WhatsApp",    telegram: "Telegram", facebook: "Facebook messenger", instagram:"Instagram",},
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
