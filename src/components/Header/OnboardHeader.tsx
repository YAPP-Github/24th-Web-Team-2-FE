import Image from 'next/image';
import Link from 'next/link';

const OnboardHeader = () => {
  return (
    <div className={'py-6 justify-center px-6 flex items-center w-full bg-white'}>
      <Link href='/'>
        <Image src='/BI.svg' width={156} height={24} alt={'BI'} />
      </Link>
    </div>
  );
};

export default OnboardHeader;
