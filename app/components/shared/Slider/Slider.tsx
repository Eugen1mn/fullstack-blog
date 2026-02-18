'use client';

import React, { useEffect, useState } from 'react';
import { SliderArrowIcon, SmallArrowIcon } from '../../../assest/about';
import { useSlider } from '../../../shared';

import styles from './Slider.module.scss';

interface SliderProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  gap?: number;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  enableSwipe?: boolean;
  initialIndex?: number;
  responsive?: {
    mobile: number;
    tablet: number;
    desktop: number;
    largeDesktop?: number;
  };
  navigation?: 'arrows' | 'dots' | 'both' | 'none';
  navigationVariant?: 'split' | 'grouped';
  wrapperClassName?: string;
  desktopFadeEffect?: boolean;
}

export default function Slider<T>({
  data,
  renderItem,
  gap,
  autoScroll,
  autoScrollInterval,
  enableSwipe,
  responsive,
  navigation = 'arrows',
  navigationVariant = 'split',
  wrapperClassName,
  initialIndex,
  desktopFadeEffect = false,
}: SliderProps<T>) {
  const [isDesktop, setIsDesktop] = useState(false);

  const extendedData =
    isDesktop && desktopFadeEffect && data.length > 1
      ? [data[data.length - 1], ...data]
      : data;

  const {
    scrollRef,
    slideRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    scrollToIndex,
    activeIndex,
    visibleIndices,
    totalDots,
  } = useSlider(extendedData, {
    gap,
    autoScroll,
    autoScrollInterval,
    enableSwipe,
    responsive,
    initialIndex,
  });

  const [opacities, setOpacities] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!desktopFadeEffect || !isDesktop || !scrollRef.current) return;

    const container = scrollRef.current;

    const updateOpacity = () => {
      const containerRect = container.getBoundingClientRect();
      const slides = Array.from(container.children) as HTMLElement[];

      const newOpacities = slides.map((slide) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2 - containerRect.left;
        const relative = slideCenter / containerRect.width;

        if (relative > 0.17 && relative < 0.83) return 1;

        if (
          (relative >= 0 && relative <= 0.17) ||
          (relative >= 0.83 && relative <= 1)
        )
          return 0.4;

        return 0.2;
      });

      setOpacities(newOpacities);
    };

    updateOpacity();
    container.addEventListener('scroll', updateOpacity, { passive: true });
    window.addEventListener('resize', updateOpacity);

    return () => {
      container.removeEventListener('scroll', updateOpacity);
      window.removeEventListener('resize', updateOpacity);
    };
  }, [desktopFadeEffect, isDesktop, scrollRef]);

  return (
    <div className={`${styles.wrapper} ${wrapperClassName ?? ''}`}>
      {(navigation === 'arrows' || navigation === 'both') &&
        navigationVariant === 'split' && (
          <button
            className={`${styles.navBtn} ${
              !canScrollLeft ? styles.disabled : ''
            }`}
            onClick={scrollLeft}
          >
            <SliderArrowIcon />
          </button>
        )}

      <div
        className={styles.slider}
        ref={scrollRef}
        style={{ gap: `${gap ?? 20}px` }}
      >
        {extendedData.map((item, index) => {
          const opacity =
            desktopFadeEffect && isDesktop
              ? (opacities[index] ?? 0.5)
              : visibleIndices.includes(index)
                ? 1
                : 0.5;

          return (
            <div
              key={index}
              ref={index === 0 ? slideRef : null}
              className={styles.slide}
              style={{
                opacity,
                transition: 'opacity 0.5s ease',
              }}
            >
              {renderItem(item)}
            </div>
          );
        })}
      </div>

      {(navigation === 'arrows' || navigation === 'both') &&
        navigationVariant === 'split' && (
          <button
            className={`${styles.navBtn} ${
              !canScrollRight ? styles.disabled : ''
            }`}
            onClick={scrollRight}
          >
            <SliderArrowIcon className={styles.nextBtn} />
          </button>
        )}

      {(navigation === 'dots' || navigation === 'both') &&
        totalDots > 1 &&
        (!isDesktop || (isDesktop && !desktopFadeEffect)) && (
          <div className={styles.dots}>
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${
                  i === activeIndex ? styles.active : ''
                }`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>
        )}

      {(navigation === 'both' || navigation === 'arrows') &&
        navigationVariant === 'grouped' &&
        isDesktop && (
          <div className={styles.groupedArrows}>
            <button onClick={scrollLeft}>
              <SmallArrowIcon
                className={` ${!canScrollLeft ? styles.disabled : ''}`}
              />
            </button>
            <button onClick={scrollRight}>
              <SmallArrowIcon
                className={`${styles.nextBtn} ${
                  !canScrollRight ? styles.disabled : ''
                }`}
              />
            </button>
          </div>
        )}
    </div>
  );
}
