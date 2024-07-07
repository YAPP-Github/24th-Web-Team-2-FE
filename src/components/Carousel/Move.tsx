import { ComponentPropsWithoutRef, MouseEvent, useContext } from 'react';
import { CarouselContext } from './Carousel';

export interface MoveProps extends ComponentPropsWithoutRef<'button'> {
  direction: 'prev' | 'next';
  addFunc?: CallableFunction;
}

const Move = ({ direction = 'next', addFunc, children, ...attributes }: MoveProps) => {
  const context = useContext(CarouselContext);

  if (!context) throw Error('Carousel.Move is only available within Carousel.');

  const { handleMovePrev, handleMoveNext } = context;

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (addFunc) addFunc();
    if (direction === 'prev') return handleMovePrev(e);
    return handleMoveNext(e);
  };

  return (
    <button onClick={handleMove} {...attributes}>
      {children}
    </button>
  );
};

export default Move;
