import Image from 'next/image';
import Link from 'next/link';
import ServiceLogo from '@/assets/icons/ServiceLogo.svg';

const LandingPageHeader = () => {
  return (
    <div className={`flex h-16 justify-between w-[100vw] items-center px-6`}>
      <span className='relative flex items-center h-full basis-1/5'>
        <Link className='flex items-center h-full' href='/'>
          <Image src={ServiceLogo} alt='serviceLogo' height={24} />
        </Link>
      </span>
      <div className='flex flex-row items-center justify-center h-full gap-4 basis-3/5 text-body2-onboard text-darkgrey'>
        <Link href='#1' className='flex items-center h-full text-black text-body1-onboard'>
          뉴스레터와 친해지기 어려운 이유
        </Link>
        <Link className='flex items-center h-full' href='#2'>
          솔루션
        </Link>
        <Link className='flex items-center h-full' href='#3'>
          Upcoming
        </Link>
        <Link className='flex items-center h-full' href='#4'>
          이용 방법
        </Link>
        <Link className='flex items-center h-full' href='#5'>
          이용 후기
        </Link>
      </div>
      <span className='flex flex-row justify-end gap-3 basis-1/5 text-body2-onboard'>
        <Link className='w-[6.375rem] py-2 flex items-center justify-center' href='/login'>
          로그인
        </Link>
        <Link
          className='w-[6.375rem] text-white flex items-center justify-center rounded border-gradient_horizontal_black'
          href='/onboard'
        >
          시작하기
        </Link>
      </span>
    </div>
  );
};

export default LandingPageHeader;
