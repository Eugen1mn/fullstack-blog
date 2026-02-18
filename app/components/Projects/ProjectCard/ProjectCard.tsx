import React from 'react';
import Image from 'next/image';

import { ButtonArrow, SmallArrowIcon } from '../../../assest/about';

import styles from './ProjectCard.module.scss';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  buttonText: string;
  image: string;
}

interface ProjectCardProps {
  item: ProjectItem;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={item.title}
          className={styles.image}
          fill
        />

        <div className={styles.overlay}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.category}>{item.category}</p>

          <button className={styles.actionBtn}>
            {item.buttonText}
            <ButtonArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
