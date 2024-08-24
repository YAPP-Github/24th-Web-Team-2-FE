import Image from 'next/image';
import Link from 'next/link';
import ServiceIcon from '@/assets/icons/ServiceIcon.svg';

const OnboardHeader = () => {
  return (
    <div className={'py-6 justify-start px-6 flex items-center w-content bg-white'}>
      <Link href='/'>
        <Image src={ServiceIcon} width={154} height={24} alt={'BI'} />
      </Link>
    </div>
  );
};

export default OnboardHeader;
