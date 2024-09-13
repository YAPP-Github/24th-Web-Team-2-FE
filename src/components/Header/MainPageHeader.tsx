import HomeIcon from '@/assets/icons/HomeIcon';

import Link from 'next/link';
import ServiceIcon from '@/assets/icons/ServiceIcon.svg';
import Image from 'next/image';

const MainPageHeader = () => {
  return (
    <div id='top' className={`justify-between flex h-16 items-center w-content bg-white`}>
      <Link href='/main'>
        <Image src={ServiceIcon} alt='ServiceIcon' width={153} height={64} />
      </Link>

      <Link href='/mypage' className='flex flex-row items-center cursor-pointer gap-1 text-blue'>
        <HomeIcon width={24} fill='#168FD0' />
        <span className='text-body3'>마이 페이지</span>
      </Link>
    </div>
  );
};

export default MainPageHeader;
