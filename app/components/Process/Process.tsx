'use client';

import { Slider } from '../../components';
import { processData } from '../../data';

import styles from './Process.module.scss';

export default function Process() {
  return (
    <section className={styles.process}>
      <video className={styles.videoBackground} autoPlay muted loop playsInline>
        <source src="/video/background-video.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.inner}>
        <div className="container">
          <h2 className={styles.title}>Process</h2>
        </div>
        <div className={styles.slider}>
          <div className="container">
            <Slider
              data={processData}
              gap={20}
              navigation="both"
              navigationVariant="grouped"
              initialIndex={1}
              responsive={{
                mobile: 2,
                tablet: 2,
                desktop: 4,
              }}
              wrapperClassName={styles.sliderWrapper}
              desktopFadeEffect
              renderItem={(item) => (
                <div className={styles.processCard}>
                  <span className={styles.number}>{item.id}.</span>
                  <div className={styles.dot}></div>
                  <div className={styles.info}>
                    <h3 className={styles.infoTitle}>{item.title}</h3>
                    <p className={styles.infoText}>{item.text}</p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
