'use client';

import './tools-section.scss';

import { useState } from 'react';

type Props = {
  dictionary: {
    title: string;
  };
};

export default function ToolsSection({ dictionary }: Props) {
  const [page, setPage] = useState(0);

  return (
    <section className="tools-section">
      <div className="container">
        <h2 className="tools-section__title">{dictionary.title}</h2>

        <ul className=".totools-section__list">
          <li className=".totools-section__item">СВГ</li>
        </ul>
      </div>
    </section>
  );
}
