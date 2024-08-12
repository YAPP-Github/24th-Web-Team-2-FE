import Link from 'next/link';

const Landing1 = () => {
  return (
    <div className='flex flex-col gap-[6.75rem] items-center justify-center text-white'>
      <span className='flex flex-col items-center gap-3'>
        <h3 className='text-h3-onboard'>Your Daily Insight Source</h3>
        <h1 className='text-h1-onboard'>매일 인사이트 얻고 싶은 사람들의 모임</h1>
        <p className='flex text-center text-body2-onboard'>
          새로운 인사이트와 정보를 얻기 위해 구독한 뉴스레터, 다 읽지 못하고 쌓여만 있진 않나요?
          <br />
          받은편지함 속에서 유익한 뉴스레터만 따로 모아 보세요. 매일 인사이트를 얻으세요
        </p>
      </span>

      <Link
        style={{ width: '11.375rem', height: '3.75rem' }}
        className={`border-gradient_horizontal text-black flex items-center justify-center rounded`}
        // href='/onboard'
        href={'https://tally.so/r/mZlV1e'}
        target='_blank'
      >
        시작하기
      </Link>
    </div>
  );
};

export default Landing1;
