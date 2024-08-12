import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import Image from 'next/image';
import Image1 from '@/assets/images/Landing5_1.png';
import Image2 from '@/assets/images/Landing5_2.png';
import Image3 from '@/assets/images/Landing5_3.png';

const Landing5 = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.8);

  return (
    <div
      id='4'
      ref={elementRef}
      className='relative flex flex-col items-center justify-end w-full gap-16 overflow-hidden snap-start h-landingPageHeight shrink-0'
    >
      <span className='flex flex-row gap-10'>
        <h2
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-100 text-orange text-h1-onboard`}
        >
          알림 한 번으로
          <br />
          24시간 아끼기
        </h2>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-300 flex flex-col gap-3`}
        >
          <div className='flex flex-col'>
            <span className='text-body1-onboard text-darkgrey'>Our Solution(3)</span>
            <span className='text-h2-onboard'>하루에 한 번, 오늘의 인사이트 도착</span>
          </div>
          <span className='text-body2-onboard'>
            지난{' '}
            <span className={`${isVisible ? 'bg-[#FFF6C6]' : 'bg-white'} transition delay-500 `}>
              24시간 동안 도착한 뉴스레터를 한 번에
            </span>{' '}
            모아 드려요
            <br />
            흩어져 도착하는{' '}
            <span className={`${isVisible ? 'bg-[#FFF6C6]' : 'bg-white'} transition delay-500 `}>
              메일 알림을 하루에 한 번만
            </span>{' '}
            받아보세요
          </span>
        </div>
      </span>
      <div className='flex flex-row items-start justify-center w-full gap-9 h-3/5'>
        <Image
          src={Image1}
          alt='Article Image'
          className={`${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition delay-[1800ms] object-contain h-1/3`}
        />
        <span className='relative flex flex-col h-full pb-20'>
          <div
            className={`${isVisible ? 'translate-y-0' : 'translate-y-full'} transition delay-[2000ms] flex flex-col h-full gap-2 z-10`}
          >
            <Image src={Image2} alt='Article Image' className='object-contain h-1/3' />
            <Image src={Image3} alt='Article Image' className='object-contain h-1/3' />
            <Image src={Image3} alt='Article Image' className='object-contain h-1/3' />
          </div>
          <span
            className={`${
              isVisible ? 'rotate-180' : 'rotate-0'
            } overflow-hidden transition delay-[900ms] duration-[1200ms] h-[calc(130%)] aspect-square rounded-full absolute bottom-[100px] translate-y-1/2 translate-x-[9%]`}
          >
            <div className='bg-[#E1F1FD] h-1/2 w-full'></div>
            <div className='bg-[#FFF6C6] h-1/2 w-full'></div>
          </span>
        </span>
      </div>
      <div className='absolute bottom-0 z-10 w-full bg-white h-[100px]' />
    </div>
  );
};

export default Landing5;
