import Image from 'next/image';

const OnboardHeader = () => {
  return (
    <div className={'py-6 justify-center px-6 flex items-center w-full bg-white'}>
      <Image src='/BI.svg' width={156} height={24} alt={'BI'} />
    </div>
  );
};

export default OnboardHeader;
