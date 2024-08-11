import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import TypeHeader from './TypeHeader';
import { useState } from 'react';
import Image from 'next/image';

const Landing4 = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.4);
  const [selectedType, setSelectedType] = useState(1);

  return (
    <div
      id='3'
      ref={elementRef}
      className='flex flex-col items-center justify-start w-full pt-20 gap-14 snap-start min-h-landingPageHeight shrink-0'
    >
      <span className='flex flex-row gap-10'>
        <h2
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-100 text-violet text-h1-onboard`}
        >
          관심사 맞춤
          <br />
          뉴스레터
        </h2>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-300 flex flex-col gap-3`}
        >
          <div className='flex flex-col'>
            <span className='text-body1-onboard text-darkgrey'>Our Solution(2)</span>
            <span className='text-h2-onboard'>취향 따라 모아보는 뉴스레터</span>
          </div>
          <span className='text-body2-onboard'>
            당신의{' '}
            <span className={`${isVisible ? 'bg-[#FCEBFB]' : 'bg-white'} transition delay-500 `}>
              관심사에 맞는 뉴스레터를 구독
            </span>
            하고,{' '}
            <span className={`${isVisible ? 'bg-[#FCEBFB]' : 'bg-white'} transition delay-500 `}>
              분야별 카테고리로 깔끔하게 모아보세요.
            </span>
          </span>
        </div>
      </span>
      <span
        className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition delay-500 flex flex-col items-center`}
      >
        <TypeHeader selectedType={selectedType} setSelectedType={setSelectedType} />
        <Image src={require(`/src/assets/images/Landing4/${selectedType}.png`)} alt='Brand Image' />
      </span>
    </div>
  );
};

export default Landing4;
