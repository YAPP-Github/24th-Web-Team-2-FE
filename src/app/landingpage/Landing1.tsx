import Image from 'next/image';
import Link from 'next/link';
import LandingImage1 from '@/assets/images/Landing1_1.svg';
import LandingImage3 from '@/assets/images/Landing1_3.png';
import LandingFoldIcon from '@/assets/icons/OnboardFoldIcon.svg';

const Landing1 = () => {
  return (
    <div className='mt-[calc(20vh-64px)] flex flex-col gap-10 items-center justify-start text-white'>
      <div className='flex flex-col'>
        <div className='w-[50vw] aspect-[942/100] relative'>
          <Image src={LandingImage1} fill alt='Landing1' className='object-contain' />
        </div>
        <span className='text-center text-body1'>
          새로운 인사이트와 정보를 얻기 위해 구독한 뉴스레터, 다 읽지 못하고 쌓여만 있진 않나요?
          <br />
          받은편지함 속에서 유익한 뉴스레터만 따로 모아 보세요. 매일 인사이트를 얻으세요
        </span>
      </div>
      <Link
        style={{ width: '20rem', height: '3.5rem' }}
        className={`border-gradient_horizontal text-black flex items-center justify-center rounded`}
        href='/onboard'
      >
        인사이트 받으러 가기
      </Link>
      <div className='absolute bottom-0 -translate-x-1/2 left-1/2 h-[50vh] w-full'>
        <Image src={LandingImage3} fill alt='Landing3' className='object-contain' />
      </div>
      <div className='absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black to-transparent flex items-center flex-col justify-center gap-4'>
        <div className='text-body2'>
          인스포메일클럽의 이야기가 궁금하다면 <b>스크롤</b>해 보세요
        </div>
        <Link href='#1' scroll={true}>
          <Image src={LandingFoldIcon} width={72} height={32} alt='scroll down' className='animate-bounce' />
        </Link>
      </div>
    </div>
  );
};

export default Landing1;
