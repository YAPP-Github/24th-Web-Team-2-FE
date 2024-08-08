import { PropsWithChildren } from 'react';

interface StepSpanProps extends PropsWithChildren {
  title: string;
  description: string;
}

const StepSpan = ({ title, description, children }: StepSpanProps) => {
  return (
    <span className='flex flex-col gap-10'>
      <span className='flex flex-col items-center gap-3'>
        <span className='text-h3-onboard'>{title}</span>
        <span className='text-body2-onboard'>{description}</span>
      </span>
      {children}
    </span>
  );
};

const Landing7 = () => {
  return (
    <div
      id='6'
      className='flex flex-col items-center justify-center w-full gap-28 snap-start h-landingPageHeight shrink-0'
    >
      <div className='flex flex-col items-center'>
        <span className='text-body1-onboard text-darkgrey'>InspoMailClub 이용 가이드</span>
        <span className='text-center text-h2-onboard'>
          Gmail로 로그인하고,
          <br /> 읽고 싶은 뉴스레터를 선택하면 끝!
        </span>
      </div>
      <div className='flex flex-row gap-20'>
        <StepSpan title='Gmail 연결' description='평소 뉴스레터를 받아보는 Gmail 계정을 연동해요'>
          <span className='h-[300px] aspect-square bg-darkgrey' />
        </StepSpan>
        <StepSpan title='뉴스레터 고르기' description='InspoMailClub에서 읽을 뉴스레터를 골라요'>
          <span className='h-[300px] aspect-square bg-darkgrey' />
        </StepSpan>
        <StepSpan title='쾌적하게 즐기기' description='뉴스레터만 모아둔 환경에서 쾌적하게 인사이트를 얻으세요'>
          <span className='h-[300px] aspect-square bg-darkgrey' />
        </StepSpan>
      </div>
    </div>
  );
};

export default Landing7;
