import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import MessageCard from './MessageCard';

const Landing2 = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.8);

  return (
    <div
      id='1'
      ref={elementRef}
      className='flex flex-col items-center justify-end w-full snap-start h-landingPageHeight shrink-0'
    >
      <span className='flex flex-row gap-10 mt-20'>
        <h2
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition delay-100 text-red text-h1-onboard`}
        >
          무조건 메일
          <br />
          쌓아두기
        </h2>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition delay-300 flex flex-col gap-3`}
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
      <div className='relative z-10 items-center w-full h-full mb-10 overflow-x-hidden overflow-y-visible'>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition-transform delay-700 duration-500 absolute -rotate-[14deg] bottom-[32rem] left-[calc(50%-17.25rem)]`}
        >
          <MessageCard title='1분에 100만원 버는 방법' message='그런 방법은 없습니다' from='김미영 대리' fill={true} />
        </div>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition-transform delay-700 duration-500 absolute rotate-[5.3deg] bottom-[19.2rem] left-[calc(50%+19.9rem)]`}
        >
          <MessageCard title='DAILY DIGEST' message='Today’s Highlights' from='Medium' fill={false} />
        </div>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition-transform delay-700 duration-500 absolute -rotate-[2.8deg] bottom-[18.7rem] left-[calc(50%-10.1rem)]`}
        >
          <MessageCard
            title='[중요] 스프린트 관련 공지'
            message='안녕하세요, 8월 주요 공지 알려드립니다.'
            from='PM'
            fill={false}
          />
        </div>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition-transform delay-700 duration-500 absolute -rotate-[4.7deg] bottom-[16.2rem] left-[calc(50%)]`}
        >
          <MessageCard title='당신의 취향을 맞춰볼게요' message='(이미지 첨부)' from='Pinterest' fill={false} />
        </div>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition-transform delay-700 duration-500 absolute bottom-[5.2rem] rotate-[5deg] left-[calc(50%+18.68rem)]`}
        >
          <MessageCard
            title='당신에게 딱 맞는 테크 소식을 알려줄게요'
            message='오늘 새롭게 업데이트 된 따끈따끈한 테크 소식 알려드릴게요!'
            from='NEONEEK'
            fill={true}
          />
        </div>

        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition-transform delay-500 duration-500 absolute bottom-[3.2rem] left-[calc(50%+3.45rem)] rotate-[4deg]`}
        >
          <MessageCard
            title='맞춤형 채용 소식'
            message='인메클님께 드리는 금주의 채용 소식입니다'
            from='채용 소식'
            fill={false}
          />
        </div>
        <div
          className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[100vh]'} transition-transform delay-500 absolute bottom-0 left-[calc(50%)]`}
        >
          <MessageCard
            title='최신 트렌드에 대해 알고 싶나요?'
            message='안녕하세요, 최신 트렌드 뉴스를 전달해줄게요'
            from='NEONEEK'
            fill={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing2;
