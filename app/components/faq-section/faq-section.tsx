import './faq-section.scss';

import Link from 'next/link';
import Image from 'next/image';

type FaqItem = {
  question: string;
  href: string;
};

type Props = {
  dictionary: {
    title: string;
    items: FaqItem[];
  };
};

export default function FaqSection({ dictionary }: Props) {
  return (
    <section className="faq-section">
      <div className="faq-section__bg" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/video/faq.mp4" type="video/mp4" />
        </video>
        <div className="faq-section__overlay"></div>
      </div>

      <div className="container">
        <h2 className="faq-section__title">{dictionary.title}</h2>

        <ul className="faq-section__list">
          {dictionary.items.map((item, idx) => (
            <li key={idx} className="faq-section__item">
              <Link href={item.href} className="faq-section__link">
                <span className="faq-section__question">{item.question}</span>

                <Image
                  className="faq-section__arrow"
                  src="/icons/link.svg"
                  alt="scroll"
                  width={60}
                  height={60}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
