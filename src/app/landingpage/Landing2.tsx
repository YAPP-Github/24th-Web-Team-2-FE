import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';

const Landing2 = () => {
  const { isVisible, elementRef } = useIntersectionObserver(1);

  return (
    <div
      id='1'
      ref={elementRef}
      className='flex flex-col items-center justify-end w-full gap-1 snap-start h-landingPageHeight shrink-0'
    >
      <span className='flex flex-row gap-10'>
        <h2
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-100 text-red text-h1-onboard`}
        >
          무조건 메일
          <br />
          쌓아두기
        </h2>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition delay-300 flex flex-col gap-3`}
        >
          <div className='flex flex-col'>
            <span className='text-body1-onboard text-darkgrey'>Problem</span>
            <span className='text-h2-onboard'>뉴스레터와 친해지기 어려운 이유</span>
          </div>
          <span className='text-body2-onboard'>
            구독한 뉴스레터를 읽지 않는 가장 큰 이유.
            <br />
            <span
              className={`relative inline-block overflow-hidden transition-all delay-700 ${isVisible ? 'bg-[#FCE4E5]' : ''}`}
            >
              <span
                className={`absolute inset-0 transition-transform delay-700 transform ${isVisible ? 'translate-x-0' : ' -translate-x-full'} bg-[#FCE4E5]`}
              />
              <span className='relative'>이메일이 체계 없이 무분별하게 쌓여 유익한 뉴스레터가 묻히기 때문입니다.</span>
            </span>
          </span>
        </div>
      </span>
      <div className='h-[400px] w-full bg-lightgrey' />
    </div>
  );
};

export default Landing2;
