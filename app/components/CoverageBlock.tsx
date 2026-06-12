// app/components/CoverageBlock.tsx
import Image from "next/image";

import type { Lang } from "@/app/dictionaries/header";
import { getCoverageDictionary } from "@/app/dictionaries/coverage";

type Props = { lang: Lang };

export default function CoverageBlock({ lang }: Props) {
  const t = getCoverageDictionary(lang);

  return (
    <section className="section coverage-section">
      <div className="container">
        <div className="coverage panel">
          <div className="coverage__hd">
            <span className="coverage__eyebrow" aria-hidden="true" />
            <h2 className="coverage__title">{t.title}</h2>
          </div>

          <div className="coverage__grid">
            <div className="coverage__left">
              {t.items.map((item, index) => (
                <article className="coverage__item" key={item.title}>
                  <span className="coverage__dot" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="coverage__item-body">
                    <h3 className="coverage__item-title">{item.title}</h3>
                    <p className="coverage__item-text">{item.text}</p>
                    {item.note ? (
                      <p className="coverage__item-note">{item.note}</p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="coverage__right">
              <figure className="coverage__map">
                <div className="coverage__map-frame">
                  <Image
                    src="/coverage-map.png"
                    alt={t.mapAlt}
                    width={1990}
                    height={2048}
                    sizes="(max-width: 980px) 100vw, 560px"
                    className="coverage__map-img"
                  />
                </div>

                {t.mapCaption ? (
                  <figcaption className="coverage__map-caption">
                    {t.mapCaption}
                  </figcaption>
                ) : null}
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
