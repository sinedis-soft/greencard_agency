// app/components/InfoCompare.tsx

import type { Lang } from "@/app/dictionaries/header";
import { getInfoCompareDictionary } from "@/app/dictionaries/infoCompare";
import { keepTypography } from "@/app/utils/typography";

export default function InfoCompare({ lang }: { lang: Lang }) {
  const t = getInfoCompareDictionary(lang);

  return (
    <section className="section info-compare-section">
      <div className="container">
        <div className="info-compare">
          <div className="info-compare__content">
            <div className="info-compare__kicker">{t.kicker}</div>
            <h2 className="info-compare__title">{keepTypography(t.title)}</h2>

            <div className="info-compare__definitions">
              {t.leftBlocks.map((block) => (
                <article className="info-compare__definition" key={block.strong}>
                  <span className="info-compare__definition-index" aria-hidden="true" />
                  <p className="info-compare__p">
                    <strong>{block.strong}</strong> {block.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="info-compare__right panel" aria-label={t.rightTitle}>
            <div className="panel__hd info-compare__right-hd">
              <div className="panel__title">{t.rightTitle}</div>
            </div>

            <div className="panel__body info-compare__right-body">
              <div className="info-compare__rows">
                {t.rows.map((row) => (
                  <div className="info-compare__row" key={row.title}>
                    <div className="info-compare__row-marker" aria-hidden="true" />
                    <div>
                      <div className="info-compare__row-title">{row.title}</div>
                      <div className="info-compare__row-text">{row.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="info-compare__note">{t.note}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
