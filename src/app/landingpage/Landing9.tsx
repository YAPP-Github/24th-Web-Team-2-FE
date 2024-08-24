import Footer from '@/components/Footer';
import ImageLanding9 from '@/assets/images/Landing9.png';
import Image from 'next/image';
import Link from 'next/link';
import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';

const Landing9 = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.8);

  return (
    <div
      ref={elementRef}
      id='8'
      className='flex flex-col items-center justify-center w-full snap-start h-landingPageHeight shrink-0'
    >
      <span className='flex flex-row items-center justify-center h-full gap-8'>
        <Image
          src={ImageLanding9}
          alt='Landing 9'
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition`}
        />
        <span
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-200 flex flex-col gap-6 text-h3-onboard`}
        >
          InspoMailClub 멤버가 되어주세요!
          <Link
            className='flex items-center justify-center text-white w-[17.625rem] h-16 rounded text-body1-onboard border-gradient_horizontal_black'
            // href='/onboard'
            href={'https://tally.so/r/mZlV1e'}
          >
            {'인사이트 받으러 가기 →'}
          </Link>
        </span>
      </span>
      <Footer />
    </div>
  );
};

export default Landing9;
