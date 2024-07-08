import { useContext, useEffect, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { CarouselContext, CarouselIndexContext } from './Carousel';

export interface CarouselItemProps extends PropsWithChildren {
  index: number;
}

const CarouselItem = ({ index, children }: CarouselItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const context = useContext(CarouselContext);
  // viewIndex context 추가
  const viewIndex = useContext(CarouselIndexContext);

  if (!context) throw Error('Carousel.Item is only available within Carousel.');

  // viewIndex 분리
  const { width, height, itemRef } = context;

  useEffect(() => {
    if (ref.current) {
      if (index === viewIndex) itemRef.current = ref.current;
    }
  }, [viewIndex]);

  return (
    <div ref={ref} style={{ width, height }}>
      {children}
    </div>
  );
};

export default CarouselItem;
