'use client';

import { Slider } from '../../components';
import { projects } from '../../data';

import { ProjectCard } from './ProjectCard';

import styles from './Projects.module.scss';
import { ButtonArrow } from '../../assest/about';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.title}>Projects</h2>
          <button className={styles.actionBtn}>
            Переглянути портфоліо
            <ButtonArrow />
          </button>
        </div>
        <Slider
          data={projects}
          renderItem={(item) => <ProjectCard item={item} />}
          gap={20}
          navigation="dots"
          responsive={{
            mobile: 1,
            tablet: 2,
            desktop: 3,
          }}
        />{' '}
        <button className={styles.actionBtn}>
          Аааааааааааа ааааааааа
          <ButtonArrow />
        </button>
      </div>
    </section>
  );
}
