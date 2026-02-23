import './how-we-work.scss';

import { StepBadge } from '../../components';
import Image from 'next/image';

type Props = {
  dictionary: {
    title: string;
    description: string;
    steps: string[];
  };
};

export default function HowWeWork({ dictionary }: Props) {
  const { title, description, steps } = dictionary;

  return (
    <section className="how-we-work" aria-labelledby="how-we-work__title">
      <div className="container">
        <header className="how-we-work__header">
          <h2 id="how-we-work__title" className="how-we-work__title">
            Як ми працюємо?
          </h2>

          <p className="how-we-work__description">
            Ми вивчаємо потреби клієнта, виявляємо всі проблемні питання та
            віднаходимо, як їх усунути. Аналізуємо конкуренцію у пошукових
            результатах та їх стратегії. Проводимо аудит доступного трафіку на
            сайті з точки зору джерел та ефективності в пошукових системах
          </p>
        </header>

        <ol className="how-we-work__steps">
          {steps.map((title, idx) => {
            const number = String(idx + 1).padStart(2, '0');
            return (
              <li key={title} className="how-we-work__step">
                <div
                  className={`how-we-work__badge how-we-work__badge${number}`}
                >
                  <StepBadge value={number} />
                </div>

                {idx === 0 && (
                  <>
                    <hr />
                    <Image
                      src="/icons/prosses-arrow.svg"
                      alt="prosess-arrow"
                      width={26}
                      height={26}
                      className="how-we-work__arrow"
                    />
                  </>
                )}

                <p className="how-we-work__step-title">{title}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
