import './web-development-process.scss';

import { StepBadge } from '../../components';
import Image from 'next/image';

type Step = { title: string; description: string };

type Props = {
  dictionary: {
    title: string;
    steps: Step[];
  };
};

export default function WebDevelopmentProcess({ dictionary }: Props) {
  const { title, steps } = dictionary;

  return (
    <section
      className="web-development-process"
      aria-labelledby="web-development-process__title"
    >
      <div className="container">
        <Image
          className="web-development-process__bgImg"
          src="/images/web-development/web-development-prosess.png"
          alt="web-development-prosess"
          width={1198}
          height={685}
        />

        <header className="web-development-process__header">
          <h2
            id="web-development-process__title"
            className="web-development-process__title"
          >
            {title}
          </h2>
        </header>

        <ol className="web-development-process__list">
          {steps.map((step, index) => {
            return (
              <li key={index} className="web-development-process__item">
                <article className="web-development-process__card">
                  <StepBadge value={index + 1} />
                  <h3 className="web-development-process__card-title">
                    {step.title}
                  </h3>
                  <p className="web-development-process__description">
                    {step.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
