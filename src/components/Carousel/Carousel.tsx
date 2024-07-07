import { createContext, useMemo } from 'react';
import type { MouseEvent, PropsWithChildren } from 'react';

import CarouselItem from './CarouselItem';
import useCarousel from './useCarousel';
import Move from './Move';
import Wrapper from './Wrapper';
import Dots from './Dots';

export interface CarouselProps extends PropsWithChildren {
  width: number;
  height: number;
  length: number;
  // children?: JSX.Element | JSX.Element[];
}

export const CarouselContext = createContext<{
  viewIndex: number;
  width: number;
  height: number;
  length: number;
  itemRef: React.MutableRefObject<HTMLDivElement | null>;
  carouselBoxRef: React.MutableRefObject<HTMLDivElement | null>;
  handleMoveImage: (imageNumber: number) => void;
  handleMoveNext: (e: MouseEvent<HTMLButtonElement>) => void;
  handleMovePrev: (e: MouseEvent<HTMLButtonElement>) => void;
} | null>(null);

const Carousel = ({ width, height, length, children }: CarouselProps) => {
  const { viewIndex, itemRef, carouselBoxRef, handleMoveImage, handleMoveNext, handleMovePrev } = useCarousel(length);

  const context = useMemo(
    () => ({
      width,
      height,
      length,
      viewIndex,
      itemRef,
      carouselBoxRef,
      handleMoveImage,
      handleMoveNext,
      handleMovePrev,
    }),
    [width, height, length, viewIndex, itemRef, carouselBoxRef, handleMoveImage, handleMoveNext, handleMovePrev],
  );

  return <CarouselContext.Provider value={context}>{children}</CarouselContext.Provider>;
};

Carousel.Wrapper = Wrapper;
Carousel.Item = CarouselItem;
Carousel.Move = Move;
Carousel.Dots = Dots;

export default Carousel;
