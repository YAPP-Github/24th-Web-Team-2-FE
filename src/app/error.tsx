'use client';

import Link from 'next/link';
import Image from 'next/image';
import NotfoundImage from '@/assets/images/notfound.png';

const Test = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen gap-6'>
      <Image src={NotfoundImage} alt='Not Found' />
      <div className='flex flex-col items-center gap-3'>
        <h1 className='text-black text-h1'>Something Went Wrong...</h1>
        <Link href='/' className='text-blue text-btn1'>
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default Test;
