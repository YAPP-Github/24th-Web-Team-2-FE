import { useContext } from 'react';
import type { PropsWithChildren } from 'react';

import { CarouselContext } from './Carousel';

interface WrapperProps extends PropsWithChildren {
  height?: string;
}

const Wrapper = ({ height = '100%', children }: WrapperProps) => {
  const context = useContext(CarouselContext);

  if (!context) throw Error('Carousel.Wrapper is only available within Carousel.');

  const { carouselBoxRef, width } = context;

  return (
    <div ref={carouselBoxRef} className='relative overflow-hidden' style={{ width, height }}>
      <div className='relative flex w-full p-0 m-0 overflow-hidden' style={{ width, height }}>
        {children}
      </div>
      <div className='absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-white to-transparent' />
    </div>
  );
};

export default Wrapper;
