import Image from 'next/image';
import Link from 'next/link';
import ServiceLogo from '@/assets/icons/ServiceLogo.svg';

const LandingPageHeader = () => {
  return (
    <div className={`flex h-16 justify-between w-[100vw] items-center px-6`}>
      <span className='relative w-full h-6'>
        <Image src={ServiceLogo} alt='serviceLogo' fill />
      </span>
      <>LPH</>
    </div>
  );
};

export default LandingPageHeader;
