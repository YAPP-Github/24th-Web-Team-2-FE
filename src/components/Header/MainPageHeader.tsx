import HomeIcon from '@/assets/icons/HomeIcon';
import ServiceIcon from '@/assets/icons/ServiceIcon';
import Link from 'next/link';

const MainPageHeader = () => {
  return (
    <div className={`py-8 justify-between px-6 flex items-center w-content bg-white`}>
      <Link href='/'>
        <ServiceIcon width={195} />
      </Link>

      <Link href='/mypage' className='flex flex-row items-center gap-1 cursor-pointer '>
        <HomeIcon width={24} />
        <span className='text-body3'>My Page</span>
      </Link>
    </div>
  );
};

export default MainPageHeader;
