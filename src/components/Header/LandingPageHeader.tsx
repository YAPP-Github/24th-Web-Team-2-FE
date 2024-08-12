import { useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceLogo from '@/assets/icons/ServiceLogo';
import { GOOGLE_AUTH_API_URL } from '@/utils/constants/api/api';

const LandingPageHeader = ({ backgroundFill }: { backgroundFill: 'black' | 'white' }) => {
  // Define section groups by ids
  const sectionGroups = [
    { ids: [1], label: '뉴스레터와 친해지기 어려운 이유' },
    { ids: [2, 3, 4], label: '솔루션' },
    { ids: [5], label: 'Upcoming' },
    { ids: [6], label: '이용 방법' },
    { ids: [7, 8], label: '이용 후기' },
  ];

  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  useEffect(() => {
    // Flatten section ids from groups for observation
    const sectionIds = sectionGroups.flatMap(group => group.ids);
    const sections = sectionIds.map(id => document.getElementById(id.toString()));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.id);
            const group = sectionGroups.find(g => g.ids.includes(id));
            if (group) {
              setActiveGroup(group.ids[0]); // Set the first id of the active group
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionGroups]);

  const renderNavButtons = () =>
    sectionGroups.map(group =>
      group.label ? (
        <Link
          href={`#${group.ids[0]}`}
          key={group.ids[0]}
          className={`flex items-center h-full ${activeGroup === group.ids[0] ? 'text-black text-body1-onboard' : ''}`}
        >
          {group.label}
        </Link>
      ) : null,
    );

  const renderAuthLinks = () => (
    <span className='flex flex-row justify-end gap-3 basis-1/5 text-body2-onboard'>
      <Link
        className={`${backgroundFill === 'white' ? 'text-black' : 'text-white'} w-[6.375rem] py-2 flex items-center justify-center`}
        href={'https://tally.so/r/mZlV1e'}
        target='_blank'
      >
        로그인
      </Link>
      <Link
        className={`${backgroundFill === 'white' ? 'border-gradient_horizontal_black text-white' : 'border-gradient_horizontal text-black'} w-[6.375rem] flex items-center justify-center rounded`}
        href={'https://tally.so/r/mZlV1e'}
        target='_blank'
      >
        시작하기
      </Link>
    </span>
  );

  return (
    <div className={`sticky top-0 bg-${backgroundFill} flex h-16 shrink-0 justify-between w-full items-center px-6`}>
      <span className='relative flex items-center h-full basis-1/5'>
        <Link href={`#0`} className='flex items-center h-full'>
          <ServiceLogo height={25} width={154} fill={backgroundFill === 'black' ? 'white' : 'black'} />
        </Link>
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
