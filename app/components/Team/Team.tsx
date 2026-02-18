'use client';

import { Slider } from '../../components';
import { teamList } from '../../data';

import { TeamCard } from './TeamCard';

import styles from './Team.module.scss';

export default function Team() {
  return (
    <section className={styles.team}>
      <div className="container ">
        <h2 className={styles.title}>TEAM</h2>
        <Slider
          data={teamList}
          renderItem={(teamMember) => <TeamCard member={teamMember} />}
          responsive={{ mobile: 2, tablet: 2.5, desktop: 5 }}
          gap={20}
          navigation="arrows"
        />
      </div>
    </section>
  );
}
