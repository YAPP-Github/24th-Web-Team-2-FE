'use client';

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
}

// viewIndex context 분리
export const CarouselContext = createContext<{
  width: number;
  height: number;
  length: number;
  itemRef: React.MutableRefObject<HTMLDivElement | null>;
  carouselBoxRef: React.MutableRefObject<HTMLDivElement | null>;
  handleMoveImage: (imageNumber: number) => void;
  handleMoveNext: (e: MouseEvent<HTMLButtonElement>) => void;
  handleMovePrev: (e: MouseEvent<HTMLButtonElement>) => void;
} | null>(null);

export const CarouselIndexContext = createContext<number>(0);

const Carousel = ({ width, height, length, children }: CarouselProps) => {
  const { viewIndex, itemRef, carouselBoxRef, handleMoveImage, handleMoveNext, handleMovePrev } = useCarousel(length);

  const carouselContextValue = useMemo(
    () => ({
      width,
      height,
      length,
      itemRef,
      carouselBoxRef,
      handleMoveImage,
      handleMoveNext,
      handleMovePrev,
    }),
    [width, height, length, itemRef, carouselBoxRef, handleMoveImage, handleMoveNext, handleMovePrev],
  );

  // viewIndex context 분리하여 다른 상태를 구독중인 component가 리렌더링 되지 않도록 함
  return (
    <CarouselContext.Provider value={carouselContextValue}>
      <CarouselIndexContext.Provider value={viewIndex}>{children}</CarouselIndexContext.Provider>
    </CarouselContext.Provider>
  );
};

Carousel.Wrapper = Wrapper;
Carousel.Item = CarouselItem;
Carousel.Move = Move;
Carousel.Dots = Dots;

export default Carousel;
