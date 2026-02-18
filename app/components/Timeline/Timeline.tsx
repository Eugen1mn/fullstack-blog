import { timelineData } from '../../data';

import styles from './Timeline.module.scss';

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <div className="container">
        <h2 className={styles.title}>Timeline</h2>
        <div className={styles.timelineWrapper}>
          <div className={styles.line}>
            <svg
              viewBox="0 0 723 230"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.92505 152.703L56.5824 66.0959C102.575 -8.13913 204.94 -21.8331 268.827 37.7028L307.401 73.6493C351.319 114.576 421.687 105.162 453.303 54.1313C484.919 3.10061 555.287 -6.31286 599.204 34.6134L725.925 152.703"
                stroke="#D4AF37"
              />
            </svg>
          </div>
          <div className={styles.stepsContainer}>
            {timelineData.map((step, index) => (
              <div
                key={step.id}
                className={`${styles.stepItem} ${styles[`step_${index + 1}`]}`}
              >
                <div className={styles.content}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>{' '}
                <div className={styles.verticalLine}></div>
                <div className={styles.iconBadge}>
                  <div className={styles.icon}>{step.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
