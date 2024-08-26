import { useRef, useState } from 'react';
import useThrottleCallback from '@/utils/hooks/useThrottleCallback';

const useDragScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const onDragStart = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragMove = (e: React.MouseEvent) => {
    if (!isDrag || !scrollRef.current) return;
    const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

    scrollRef.current.scrollLeft = startX - e.pageX;

    if (scrollLeft === 0) {
      setStartX(e.pageX);
    } else if (scrollWidth <= clientWidth + scrollLeft) {
      setStartX(e.pageX + scrollLeft);
    }
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onThrottleDragMove = useThrottleCallback(onDragMove, 10);

  return {
    scrollRef,
    onDragStart,
    onThrottleDragMove,
    onDragEnd,
    isDrag,
  };
};

export default useDragScroll;
