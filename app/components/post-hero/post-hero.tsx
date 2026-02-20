import './post-hero.scss';

import Image from 'next/image';
import Link from 'next/link';

import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

type PostHeroProps = {
  lang: 'en' | 'uk' | 'de' | 'pl' | 'it' | 'es' | 'ru';
  title: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  views: number;
  tags: string[];
};

export default function PostHero({
  lang,
  title,
  image,
  imageAlt,
  date,
  readTime,
  views,
  tags,
}: PostHeroProps) {
  return (
    <header className="post-hero">
      <div className="post-hero__bg" aria-hidden="true">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="post-hero__bgImg"
        />
        <div className="post-hero__overlay"></div>

        <Image
          className={'post-hero__scroll'}
          src="/icons/scroll.svg"
          alt="scroll"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="container">
        <div className="post-hero__bread-crumbs">
          <BreadCrumbs
            lang={lang}
            listUrls={[
              { name: 'Блог', url: '/blog' },
              { name: imageAlt, url: '#' },
            ]}
          />
        </div>

        <h1 className="post-hero__title">{title}</h1>

        <div className="post-hero__meta" aria-label="Post meta">
          <time dateTime={date} className="post-hero__metaItem">
            <Image
              src="/icons/calendar-days.svg"
              alt="calendar"
              width={20}
              height={20}
            />
            <span>{date}</span>
          </time>

          <div className="post-hero__metaItem">
            <Image src="/icons/timer.svg" alt="clock" width={20} height={20} />
            <span className="post-hero__metaText">{readTime}</span>
          </div>

          <div className="post-hero__metaItem">
            <Image src="/icons/eye.svg" alt="eye" width={20} height={20} />
            <span className="post-hero__metaText">{views}</span>
          </div>
        </div>

        <ul className="post-hero__tags" aria-label="Tags">
          {tags.map((t) => (
            <li key={t} className="post-hero__tag">
              #{t}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
