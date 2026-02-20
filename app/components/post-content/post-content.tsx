'use client';

import { useState } from 'react';

import Image from 'next/image';

import { BlogListItem } from '../../components';

import type { BlogContentBlock } from '@/app/interfaces/post';

import './post-content.scss';

type Props = {
  content: BlogContentBlock[];
};

const blogCards = [
  {
    id: 1,
    image: '/images/blog/seo-promotion.webp',
    imageAlt: 'Етапи просування сайту',
    title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
    description:
      'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
    tags: ['AI', 'Чеклісти', 'апдейти'],
    author: {
      name: 'Іванина Роман',
      avatar: '/images/blog/avatar.png',
    },
    date: '21.11.2025',
    views: 9394,
    href: '/blog/etapy-prosuvannya-saitu',
  },

  {
    id: 2,
    image: '/images/blog/seo-promotion.webp',
    imageAlt: 'Етапи просування сайту',
    title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
    description:
      'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
    tags: ['AI', 'Чеклісти', 'апдейти'],
    author: {
      name: 'Іванина Роман',
      avatar: '/images/blog/avatar.png',
    },
    date: '21.11.2025',
    views: 9394,
    href: '/blog/etapy-prosuvannya-saitu',
  },
  {
    id: 3,
    image: '/images/blog/seo-promotion.webp',
    imageAlt: 'Етапи просування сайту',
    title: 'ЕТАПИ ПРОСУВАННЯ САЙТУ',
    description:
      'У цій статті ми хочемо максимально описати весь процес пошукового просування. Ми...',
    tags: ['AI', 'Чеклісти', 'апдейти'],
    author: {
      name: 'Іванина Роман',
      avatar: '/images/blog/avatar.png',
    },
    date: '21.11.2025',
    views: 9394,
    href: '/blog/etapy-prosuvannya-saitu',
  },
];

export default function PostContent({ content }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <article className="post-content">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>Зміст</span>
        <Image
          src="/icons/chevron-down.svg"
          alt="chevron-down"
          width={20}
          height={20}
          priority
        />
      </button>

      {isOpen &&
        content.map((block, index) => <Block key={index} block={block} />)}

      <section className="post-content__related">
        <h2 className="post-content__relatedTitle">СХОЖІ СТАТТІ</h2>

        <ul className={'post-content__recommended'}>
          {blogCards.map((card) => (
            <BlogListItem key={card.id} {...card} small />
          ))}
        </ul>
      </section>
    </article>
  );
}

function Block({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case 'heading': {
      const Title = `h${block.level}` as const;
      return (
        <Title id={block.anchor} className={`post-content__h${block.level}`}>
          {block.text}
        </Title>
      );
    }

    case 'paragraph':
      return <p className="post-content__p">{block.text}</p>;

    case 'list':
      return block.style === 'bullet' ? (
        <ol className="post-content__list">
          {block.items.map((it, i) => (
            <li key={i} className="post-content__li">
              <Image
                src="/icons/list-circle.svg"
                alt=""
                width={20}
                height={20}
              />
              {it}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="post-content__list">
          {block.items.map((it, i) => (
            <li key={i} className="post-content__li">
              <Image
                src="/icons/circle-check.svg"
                alt=""
                width={20}
                height={20}
              />
              {it}
            </li>
          ))}
        </ul>
      );

    case 'image':
      return (
        <figure className="post-content__figure">
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width ?? 1200}
            height={block.height ?? 675}
            className="post-content__img"
          />
          {block.caption ? (
            <figcaption className="post-content__caption">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case 'ctaForm':
      return (
        <section className="post-content__cta" aria-label="CTA">
          <h3 className="post-content__ctaTitle">{block.title}</h3>

          <form
            className="post-content__ctaRow"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="post-content__ctaField">
              <label className="post-content__ctaLabel" htmlFor={`cta-email`}>
                Електронна пошта<span aria-hidden="true">*</span>
              </label>
              <input
                id={`cta-email`}
                type="email"
                className="post-content__ctaInput"
                autoComplete="email"
                inputMode="email"
              />
            </div>

            <button className="post-form__submit" type="submit">
              <span>Відправити</span>
              <Image
                src="/icons/move-right.svg"
                alt="arrow right"
                width={24}
                height={24}
                priority
              />
              <Image
                src="/icons/move-right-white.svg"
                alt="arrow right"
                width={24}
                height={24}
                priority
              />
            </button>
          </form>
        </section>
      );

    case 'table':
      return (
        <div className="post-content__tableWrap">
          <table className="post-content__table">
            {block.caption ? (
              <caption className="post-content__tableCaption">
                {block.caption}
              </caption>
            ) : null}
            <thead>
              <tr>
                {block.head.map((h, index) => (
                  <th key={index} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'spacer':
      return (
        <div
          className={`post-content__spacer post-content__spacer--${block.size}`}
        />
      );

    default:
      return null;
  }
}
