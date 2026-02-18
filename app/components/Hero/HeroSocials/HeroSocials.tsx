import { socials } from '../../../data';

import styles from './HeroSocials.module.scss';

export default function HeroSocials() {
  return (
    <div className={styles.wrapper}>
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
