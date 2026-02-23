import './portfolio-promo.scss';

import Image from 'next/image';

type PortfolioPromoItem = {
  title: string;
  description: string[];
  cta: string;
  href: string;
};

type Props = {
  dictionary: {
    items: PortfolioPromoItem[];
  };
};

export default function PortfolioPromo({ dictionary }: Props) {
  const { items } = dictionary;
  return (
    <section className="case-promo" aria-labelledby="case-promo__title">
      <div className="container">
        <ul className="case-promo__list">
          {items.map((item, idx) => (
            <li key={idx} className="case-promo__item">
              <article className="case-promo__card">
                <div className="case-promo__bg">
                  <Image
                    src={`/images/web-development/case-${idx === 0 ? 1 : 2}.png`}
                    alt="case"
                    width={950}
                    height={587}
                    className="case-promo__bgImg"
                  />
                </div>
                <div className="case-promo__card-wrapper">
                  <h3 className="case-promo__card-title">{item.title}</h3>

                  {item.description.map((text, idx) => (
                    <p key={idx} className="case-promo__text">
                      {text}
                    </p>
                  ))}

                  <a className="case-promo__btn" href={item.href}>
                    <span aria-hidden="true">{item.cta}</span>

                    <Image
                      src="/icons/move-right.svg"
                      alt="arrow right"
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
