import { PropsWithChildren, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from 'framer-motion';

interface ParallaxProps extends PropsWithChildren {
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);

  // TODO: animation중간에 끊기는 부분 수정 -> 필요 아마 이곳으로 추정
  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    moveBy += directionFactor.current * moveBy;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className='parallax'>
      <motion.div className='scroller' style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
