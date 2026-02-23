import './web-development-hero.scss';

import Image from 'next/image';

import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { Locale } from '@/i18n.config';

type WebDevelopmentHeroDictionary = {
  title: string;
  quote: string;
  author: string;
  cta: string;
  breadcrumbsCurrent: string;
};

type WebDevelopmentHeroProps = {
  lang: Locale;
  dictionary: WebDevelopmentHeroDictionary;
};

export default function WebDevelopmentHero({
  lang,
  dictionary,
}: WebDevelopmentHeroProps) {
  const { title, quote, author, cta, breadcrumbsCurrent } = dictionary;
  return (
    <section className="web-development-hero">
      <div className="web-development-hero__bg" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/video/web-development-hero.mp4" type="video/mp4" />
        </video>
        <div className="web-development-hero__overlay"></div>

        <Image
          className={'web-development-hero__scroll'}
          src="/icons/scroll.svg"
          alt="scroll"
          width={100}
          height={100}
          priority
        />
      </div>

      <div className="container">
        <div className="web-development-hero__bread-crumbs">
          <BreadCrumbs
            lang={lang}
            listUrls={[{ name: breadcrumbsCurrent, url: '#' }]}
          />
        </div>

        <h1 className="web-development-hero__title">{title}</h1>

        <blockquote className="web-development-hero__quote">
          <p>«{quote}»</p>
          <cite>— {author}</cite>
        </blockquote>

        <button className="web-development-hero__btn" type="button">
          <span>{cta}</span>
          <Image
            src="/icons/move-right.svg"
            alt="arrow right"
            width={24}
            height={24}
            priority
          />
        </button>
      </div>
    </section>
  );
}
