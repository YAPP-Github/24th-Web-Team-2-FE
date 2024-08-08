import Link from 'next/link';
import ServiceLogo from '@/assets/icons/ServiceLogo';

const LandingPageHeader = ({ backgroundFill }: { backgroundFill: 'black' | 'white' }) => {
  const handleScroll = (id: number) => {
    const element = document.getElementById(id.toString());
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - 64, // element's position + header height
        behavior: 'smooth',
      });
    }
  };

  const navButtons = [
    { id: 1, label: '뉴스레터와 친해지기 어려운 이유', className: 'text-black text-body1-onboard' },
    { id: 2, label: '솔루션' },
    { id: 5, label: 'Upcoming' },
    { id: 6, label: '이용 방법' },
    { id: 7, label: '이용 후기' },
  ];

  const renderNavButtons = () =>
    navButtons.map(button => (
      <button
        key={button.id}
        onClick={() => handleScroll(button.id)}
        className={`flex items-center h-full ${button.className || ''}`}
      >
        {button.label}
      </button>
    ));

  const renderAuthLinks = () => (
    <span className='flex flex-row justify-end gap-3 basis-1/5 text-body2-onboard'>
      <Link
        className={`${backgroundFill === 'white' ? 'text-black' : 'text-white'} w-[6.375rem] py-2 flex items-center justify-center`}
        href='/login'
      >
        로그인
      </Link>
      <Link
        className={`${backgroundFill === 'white' ? 'border-gradient_horizontal_black text-white' : 'border-gradient_horizontal text-black'} w-[6.375rem] flex items-center justify-center rounded`}
        href='/onboard'
      >
        시작하기
      </Link>
    </span>
  );

  return (
    <div className={`sticky top-0 bg-${backgroundFill} flex h-16 shrink-0 justify-between w-full items-center px-6`}>
      <span className='relative flex items-center h-full basis-1/5'>
        <button onClick={() => handleScroll(0)} className='flex items-center h-full'>
          <ServiceLogo height={25} width={154} fill={backgroundFill === 'black' ? 'white' : 'black'} />
        </button>
      </span>
      {backgroundFill === 'white' && (
        <div className='flex flex-row items-center justify-center h-full gap-4 basis-3/5 text-body2-onboard text-darkgrey'>
          {renderNavButtons()}
        </div>
      )}
      {renderAuthLinks()}
    </div>
  );
};

export default LandingPageHeader;
