'use client';

import ServiceIcon from '@/assets/icons/ServiceIcon';
// import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import { GOOGLE_AUTH_API_URL } from '@/utils/constants/api/api';

const OnBoard = () => {
  const BLUR_DATA_URL = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcUg8AAa0BFSX8uBwAAAAASUVORK5CYII=';
  return (
    <div className='flex flex-col items-center gap-10 mb-10'>
      <span className='flex flex-col items-center'>
        <span className='flex flex-row items-center'>
          <ServiceIcon width={195} />
          <span className='text-black text-h1'>은 관리되지 않는 메일함 속에서</span>
        </span>
        <span className='text-black text-h1'>방치되는 유익한 메일을 큐레이팅해요</span>
      </span>

      <Link href={GOOGLE_AUTH_API_URL}>
        <Image className='cursor-pointer' src='./googleLogin.svg' alt='google login' width={350} height={64} />
      </Link>
    </div>
  );
};
export default OnBoard;
