'use client';

import Image from 'next/image';
import Link from 'next/link';
import ServiceIcon from '@/assets/icons/ServiceIcon.svg';

interface OnboardHeaderProps {
  isBtn: boolean;
  isReady?: boolean;
  onClick?: () => void;
}

const OnboardHeader = ({ isBtn, isReady, onClick }: OnboardHeaderProps) => {
  return (
    <div className={'py-6 justify-center px-6 flex items-center w-screen h-16 bg-white border-b border-b-darkgrey'}>
      <div className='flex items-center justify-between w-content'>
        <Link href='/'>
          <Image src={ServiceIcon} width={154} height={24} alt={'BI'} />
        </Link>
        {isBtn && (
          <div
            role='button'
            onClick={onClick}
            className={`${isReady ? 'text-white bg-black' : 'text-darkgrey bg-lightgrey'} py-2 px-6 rounded cursor-pointer`}
          >
            다음으로
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardHeader;
