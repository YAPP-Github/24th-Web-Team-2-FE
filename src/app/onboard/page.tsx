'use client';

import ServiceIcon from '@/assets/icons/ServiceIcon';
// import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import { GOOGLE_AUTH_API_URL } from '@/utils/constants/api/api';

const OnBoard = () => {
  const BLUR_DATA_URL = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcUg8AAa0BFSX8uBwAAAAASUVORK5CYII=';
  return (
    <div className='flex flex-col items-center mb-10 gap-10'>
      <Link href={GOOGLE_AUTH_API_URL}>
        <Image className='cursor-pointer' src='./googleLogin.svg' alt='google login' width={350} height={64} />
      </Link>
    </div>
  );
};
export default OnBoard;
