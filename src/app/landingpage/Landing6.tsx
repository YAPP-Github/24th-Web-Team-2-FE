import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import Image1 from '@/assets/images/Landing6_1.png';
import Image1_1 from '@/assets/images/Landing6_1_1.png';
import Image3 from '@/assets/images/Landing6_3.png';
import Image3_1 from '@/assets/images/Landing6_3_1.png';

import Image from 'next/image';
import Landing6_2 from '@/assets/images/Landing6_2';
import { useEffect, useState } from 'react';

const Landing6 = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.3);
  const [pinColor, setPinColor] = useState<string>('#F4F4F4');

  useEffect(() => {
    if (isVisible) {
      const timeout1 = setTimeout(() => {
        setPinColor('#168FD0');
      }, 1100);
      return () => {
        clearTimeout(timeout1);
      };
    }
  }, [isVisible]);
  return (
    <div id='5' ref={elementRef} className='flex flex-col w-full pb-20 snap-start shrink-0'>
      <div
        className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition delay-100 flex flex-col items-center w-full gap-1 pt-24 pb-16`}
      >
        <span className='text-body1-onboard text-darkgrey'>8월 말 예정</span>
        <span className='text-h1-onboard'>Upcoming!</span>
        <span className='text-body2-onboard'>조만간 추가 될 기능들에 대해서 알려줄게요</span>
      </div>
      <div className='flex flex-col items-center gap-32'>
        <div
          className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition delay-300 flex flex-row items-center gap-20 relative`}
        >
          <Image src={Image1} alt='Chapter1' />
          <Image
            src={Image1_1}
            alt='Chapter1_span'
            className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition delay-500 absolute bottom-6 left-32`}
          />
          <span className='flex flex-col gap-3'>
            <span className='text-h3-onboard'>핵심만 빠르게 요약</span>
            <span className='text-body2-onboard'>
              10분 분량의 뉴스레터를 1분 안에 파악할 수 있도록 핵심만 알려줄게요
              <br />
              자투리 시간을 활용해서 쉽고 빠르게 인사이트를 얻으세요.{' '}
            </span>
          </span>
        </div>
        <div
          className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition delay-700 flex flex-row items-center gap-14 relative`}
        >
          <Landing6_2 width={334} fill={pinColor} />
          <div className='absolute -bottom-4 left-10 h-[240px] aspect-square bg-[#E1F1FD] rounded-full -z-10' />
          <span className='flex flex-col gap-3'>
            <span className='text-h3-onboard'>나중에 볼 뉴스레터 북마크</span>
            <span className='text-body2-onboard'>
              못 다 읽은 뉴스레터는 북마크로 관리하세요
              <br />
              읽고 싶을 때 언제든 꺼내어 읽으세요
            </span>
          </span>
        </div>
        <div
          className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition delay-[1100ms] flex flex-row items-center gap-20`}
        >
          <Image src={Image3} alt='Chapter3' />
          <Image
            src={Image3_1}
            alt='Chapter3_span'
            className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition delay-[1300ms] absolute top-0 left-8`}
          />
          <span className='flex flex-col gap-3'>
            <span className='text-h3-onboard'>새로운 뉴스레터 탐색</span>
            <span className='text-body2-onboard'>
              새롭고 인기 있는 뉴스레터를 추천해드려요
              <br />
              당신의 취향을 발견하고, 관심 분야의 인사이트를 깊이 있게 살펴보세요.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing6;
