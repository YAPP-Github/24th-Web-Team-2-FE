import { useContext, type MouseEvent } from 'react';
import { CarouselContext } from './Carousel';

interface DotsProps {
  imageLength: number;
  size?: number;
  selectedColor?: string;
  unSelectedColor?: string;
}

const Dots = ({ imageLength, size = 6, selectedColor = '#fff', unSelectedColor = '#000' }: DotsProps) => {
  const images = Array.from({ length: imageLength }, () => '');

  const context = useContext(CarouselContext);

  if (!context) throw Error('Carousel.Dots is only available within Carousel.');

  const { viewIndex, handleMoveImage } = context;

  return (
    <div className='flex justify-between'>
      {images.map((_, index) => {
        if (viewIndex === index)
          return (
            <button
              type='button'
              key={crypto.randomUUID()}
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                handleMoveImage(index);
              }}
              className=' rounded-full border-none opacity-60 cursor-pointer'
              style={{ width: `${size}px`, height: `${size}px`, backgroundColor: selectedColor }}
            />
          );
        return (
          <button
            type='button'
            key={crypto.randomUUID()}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              handleMoveImage(index);
            }}
            className='bg-black rounded-full border-none opacity-60 cursor-pointer'
            style={{ width: `${size}px`, height: `${size}px`, backgroundColor: unSelectedColor }}
          />
        );
      })}
    </div>
  );
};

export default Dots;
