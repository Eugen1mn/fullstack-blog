import { useRef, useState, useEffect, useCallback } from "react";

interface UseSliderOptions {
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
  desktopFadeEffect?: boolean;
}

export function useSlider<T>(data: T[], options: UseSliderOptions = {}) {
  const {
    gap = 16,
    responsive = { mobile: 2, tablet: 2.5, desktop: 5 },
    initialIndex,
    desktopFadeEffect,
  } = options;

  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [step, setStep] = useState(0);
  const [itemsVisible, setItemsVisible] = useState<number>(responsive.mobile);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

  const totalDots = Math.max(1, Math.ceil(data.length - itemsVisible + 1));

  // visible items
  const checkScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Update scroll boundaries
    const canLeft = scrollLeft > 5;
    const canRight = scrollLeft < scrollWidth - clientWidth - 5;
    setCanScrollLeft(canLeft);
    setCanScrollRight(canRight);

    let index = Math.round(scrollLeft / step);

    if (desktopFadeEffect && window.innerWidth >= 1440) {
      const slides = Array.from(container.children) as HTMLElement[];
      const center = scrollLeft + clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      slides.forEach((slide, i) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(center - slideCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      index = closestIndex;
    }

    setActiveIndex(index);

    // Determine visible slides
    const slides = Array.from(container.children) as HTMLElement[];
    const containerRect = container.getBoundingClientRect();
    const visible = slides.reduce<number[]>((acc, slide, i) => {
      const rect = slide.getBoundingClientRect();
      const fullyVisible =
        rect.left >= containerRect.left - 1 &&
        rect.right <= containerRect.right + 1;
      if (fullyVisible) acc.push(i);
      return acc;
    }, []);

    setVisibleIndices(visible);
  }, [step, desktopFadeEffect]);

  // adapt
  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsVisible(responsive.mobile);
      else if (width < 1024) setItemsVisible(responsive.tablet);
      else if (width < 1440) setItemsVisible(responsive.desktop);
      else setItemsVisible(responsive.largeDesktop ?? responsive.desktop);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, [responsive]);

  // scroll
  useEffect(() => {
    if (!scrollRef.current || !slideRef.current) return;
    const slide = slideRef.current;
    const newStep = slide.offsetWidth + gap;
    setStep(newStep);
  }, [data, gap, itemsVisible]);

  useEffect(() => {
    if (!scrollRef.current || !slideRef.current) return;
    if (initialIndex && initialIndex > 0) {
      const startIndex = initialIndex ?? 1;
      const stepSize = slideRef.current.offsetWidth + (gap ?? 16);
      const offset = stepSize * startIndex - stepSize * 0.5;
      scrollRef.current.scrollTo({
        left: offset,
        behavior: "auto",
      });
    }
  }, [initialIndex, gap]);

  // scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => container.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scrollLeft = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -step * 1, behavior: "smooth" });
  }, [step]);

  const scrollRight = useCallback(() => {
    scrollRef.current?.scrollBy({ left: step * 1, behavior: "smooth" });
  }, [step]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;
      container.scrollTo({
        left: step * index,
        behavior: "smooth",
      });
    },
    [step]
  );

  return {
    scrollRef,
    slideRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    scrollToIndex,
    itemsVisible,
    activeIndex,
    visibleIndices,
    totalDots,
  };
}
