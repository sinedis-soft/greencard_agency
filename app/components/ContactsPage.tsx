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

const labels: Record<Lang, { phone: string; email: string }> = {
  ru: { phone: "Телефон", email: "E-mail" },
  pl: { phone: "Telefon", email: "E-mail" },
  en: { phone: "Phone", email: "E-mail" },
  be: { phone: "Тэлефон", email: "E-mail" },
  uz: { phone: "Telefon", email: "E-mail" },
  ka: { phone: "ტელეფონი", email: "ელ-ფოსტა" },
  kk: { phone: "Телефон", email: "Электрондық пошта" },
  tr: { phone: "Telefon", email: "E-posta" },
  fa: { phone: "تلفن", email: "ایمیل" },
  hy: { phone: "Հեռախոս", email: "Էլ. փոստ" },
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

          <div className="panel">
            <div className="panel__body">

              <p className="section__desc" style={{ margin: "0 0 10px", fontWeight: 700 }}>SINEDIS SP. Z O.O.</p>
              <p className="section__desc" style={{ margin: "0 0 10px" }}>
                {labels[lang].phone}: <a href="tel:+48573581333">+48 573 581 333</a>
              </p>
              <p className="section__desc" style={{ margin: 0 }}>
                {labels[lang].email}: <a href="mailto:europolis@greencard.agency">europolis@greencard.agency</a>
              </p>

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
