import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (threshold: number = 1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold },
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return { isVisible, elementRef };
};

export default useIntersectionObserver;
