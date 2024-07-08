import { useContext, type MouseEvent } from 'react';
import { CarouselContext, CarouselIndexContext } from './Carousel';

interface DotsProps {
  imageLength: number;
  size?: number;
  selectedColor?: string;
  unSelectedColor?: string;
}

const Dots = ({ imageLength, size = 6, selectedColor = '#fff', unSelectedColor = '#000' }: DotsProps) => {
  const images = Array.from({ length: imageLength }, () => '');

  const context = useContext(CarouselContext);
  const viewIndex = useContext(CarouselIndexContext);

  if (!context) throw Error('Carousel.Dots is only available within Carousel.');

  const { handleMoveImage } = context;

  return (
    <div className='flex justify-between'>
      {images.map((_, index) => (
        // viewIndex, index 비교 로직을 backgroundColor로 이동
        <button
          type='button'
          key={crypto.randomUUID()}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            handleMoveImage(index);
          }}
          className='border-none rounded-full cursor-pointer opacity-60'
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: viewIndex === index ? selectedColor : unSelectedColor,
          }}
        />
      ))}
    </div>
  );
};

export default Dots;
