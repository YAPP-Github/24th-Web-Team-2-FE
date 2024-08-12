import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import Image from 'next/image';
import Image1 from '@/assets/images/Landing3_1.png';
import Image2 from '@/assets/images/Landing3_2.png';
import Image3 from '@/assets/images/Landing3_3.png';
import Image4 from '@/assets/images/Landing3_4.png';
import Image5 from '@/assets/images/Landing3_5.png';

const Landing3 = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.8);

  // TODO: Add scroll event listener
  return (
    <div
      id='2'
      ref={elementRef}
      className='flex flex-col items-center justify-center w-full gap-16 overflow-x-hidden snap-start h-landingPageHeight shrink-0 noScrollbar'
    >
      <span className='flex flex-row gap-10'>
        <h2
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-100 text-blue text-h1-onboard`}
        >
          필요한
          <br />
          뉴스레터만
        </h2>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-300 flex flex-col gap-3`}
        >
          <div className='flex flex-col'>
            <span className='text-body1-onboard text-darkgrey'>Our Solution(1)</span>
            <span className='text-h2-onboard'>뉴스레터를 해방시키세요</span>
          </div>
          <span className='text-body2-onboard'>
            이제 뉴스레터는 InspoMailClub에서 따로 모아보세요
            <br />
            <span
              className={`relative inline-block overflow-hidden transition-all delay-700 ${isVisible ? 'bg-[#E1F1FD]' : ''}`}
            >
              <span
                className={`absolute inset-0 transition-transform delay-700 transform ${isVisible ? 'translate-x-0' : ' -translate-x-full'} bg-[#E1F1FD]`}
              />
              <span className='relative'>가득 쌓인 메일함 속 뉴스레터만 쏙 뽑아내어 오직 뉴스레터만 보여드릴게요</span>
            </span>
          </span>
        </div>
      </span>
      <div
        className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-[900ms]`}
      >
        <span
          className={`${isVisible ? 'translate-x-0' : 'translate-x-1/2'} transition delay-[900ms] duration-1000 flex px-10 flex-row gap-10`}
        >
          <Image src={Image1} alt='Our Solution 1' />
          <Image
            src={Image2}
            alt='Our Solution 2'
            className={`${isVisible ? 'opacity-30 scale-[87%]' : 'opacity-100 scale-100'} transition delay-[1300ms] duration-1000`}
          />
          <Image src={Image3} alt='Our Solution 3' />
          <Image
            src={Image4}
            alt='Our Solution 4'
            className={`${isVisible ? 'opacity-30 scale-[87%]' : 'opacity-100 scale-100'} transition delay-[1300ms] duration-1000`}
          />
          <Image src={Image5} alt='Our Solution 5' />
        </span>
      </div>
    </div>
  );
};

export default Landing3;
