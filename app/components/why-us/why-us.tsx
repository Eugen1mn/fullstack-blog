import './why-us.scss';

type Step = { title: string; description: string };

type Props = {
  dictionary: {
    title: string;
    items: Step[];
  };
};

function formatValue(value: number | string) {
  if (typeof value === 'number') return String(value).padStart(2, '0');
  return value;
}

export default function WhyUs({ dictionary }: Props) {
  const { title, items } = dictionary;

  return (
    <section className="why-us">
      <div className="why-us__bg" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/video/why-us.mp4" type="video/mp4" />
        </video>
        <div className="why-us__overlay"></div>
      </div>

      <div className="container">
        <header className="why-us__header">
          <h2 id="why-us__title" className="why-us__title">
            {title}
          </h2>
        </header>

        <ul className="why-us__list">
          {items.map((item, index) => {
            return (
              <li key={index} className="why-us__item">
                <article className="why-us__card">
                  <h3 className="why-us__card-title">
                    <span className="why-us__badge">
                      #{formatValue(index + 1)}
                    </span>
                    {item.title}
                  </h3>
                  <p className="why-us__description">{item.description}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
