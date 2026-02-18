import Image from "next/image";

import styles from "./TeamCard.module.scss";

interface TeamCardProps {
  member: { name: string; img: string; role: string };
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className={styles.teamCard}>
      <div className={styles.imageWrapper}>
        <Image src={member.img} alt={member.name} fill />
      </div>
      <div className={styles.info}>
        <div className={styles.roleRow}>
          <span className={styles.dot} />
          <p className={styles.roleText}>{member.role}</p>
        </div>
        <h3 className={styles.name}>{member.name}</h3>
      </div>
    </div>
  );
}
