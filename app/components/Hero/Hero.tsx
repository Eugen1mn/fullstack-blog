import Image from 'next/image';

import { ArrowIcon, HeroIcon } from '../../assest/about';

import { HeroSocials } from './HeroSocials';

import styles from './Hero.module.scss';

const circles = [
  { id: 'rc1', className: styles.rightCircle1 },
  { id: 'rc2', className: styles.rightCircle2 },
  { id: 'rc3', className: styles.rightCircle3 },
  { id: 'lc1', className: styles.leftCircle1 },
  { id: 'lc2', className: styles.leftCircle2 },
  { id: 'lc3', className: styles.leftCircle3 },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBlur} />

      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>Fullstack innovations</h1>

          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <Image
                src="/images/about/hero/hero.webp"
                alt="Hero image"
                fill
                priority
              />
            </div>

            <HeroIcon className={styles.icon} />

            {circles.map((circle) => (
              <div
                key={circle.id}
                className={`${styles.circleBase} ${circle.className}`}
              >
                <Image
                  src="/images/about/hero/circle.webp"
                  alt="3d-element"
                  width={100}
                  height={100}
                />
              </div>
            ))}

            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <ArrowIcon className={styles.arrowIcon} />
                <span className={styles.badgeText}>Текст всередині</span>
              </div>
            </div>

            <div className={styles.socials}>
              <HeroSocials />
            </div>
          </div>

          <p className={styles.description}>
            We build modern web applications tailored to your business needs,
            ensuring scalability, performance, and exceptional user experiences.
            We build modern web applications tailored to your business needs,
            ensuring scalability, performance, and exceptional user experiences.
            We build modern web applications tailored to your business needs,
            ensuring scalability, performance, and exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
