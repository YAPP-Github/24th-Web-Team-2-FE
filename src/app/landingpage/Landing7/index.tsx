import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import { PropsWithChildren } from 'react';
import Image1 from '@/assets/images/Landing7_1.png';
import Image2 from '@/assets/images/Landing7_2.png';
import Image3 from '@/assets/images/Landing7_3.png';
import Image from 'next/image';

interface StepSpanProps extends PropsWithChildren {
  title: string;
  description: string;
  className: string;
}

const StepSpan = ({ title, description, className, children }: StepSpanProps) => {
  return (
    <span className={`${className} flex flex-col gap-10`}>
      <span className='flex flex-col items-center gap-3'>
        <span className='text-h3-onboard'>{title}</span>
        <span className='text-body2-onboard'>{description}</span>
      </span>
      {children}
    </span>
  );
};

const Landing7 = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.8);
  return (
    <div
      id='6'
      ref={elementRef}
      className='flex flex-col items-center justify-center w-full gap-28 snap-start h-landingPageHeight shrink-0'
    >
      <div
        className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-100 flex flex-col items-center`}
      >
        <span className='text-body1-onboard text-darkgrey'>InspoMailClub 이용 가이드</span>
        <span className='text-center text-h2-onboard'>
          Gmail로 로그인하고,
          <br /> 읽고 싶은 뉴스레터를 선택하면 끝!
        </span>
      </div>
      <div className='flex flex-row gap-20'>
        <StepSpan
          title='Gmail 연결'
          description='평소 뉴스레터를 받아보는 Gmail 계정을 연동해요'
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-300`}
        >
          <Image src={Image1} alt='GMAIL' />
        </StepSpan>
        <StepSpan
          title='뉴스레터 고르기'
          description='InspoMailClub에서 읽을 뉴스레터를 골라요'
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-500`}
        >
          <Image src={Image2} alt='Newsletter' />
        </StepSpan>
        <StepSpan
          title='쾌적하게 즐기기'
          description='뉴스레터만 모아둔 환경에서 쾌적하게 인사이트를 얻으세요'
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-700`}
        >
          <Image src={Image3} alt='Enjoy' />
        </StepSpan>
      </div>
    </div>
  );
};

export default Landing7;
