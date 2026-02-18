import { statsData } from '../../data';

import styles from './Stats.module.scss';

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.inner}>
          {statsData.map((item) => (
            <div key={item.id} className={styles.item}>
              <p className={styles.label}>{item.label}</p>
              <h3 className={styles.value}>{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
