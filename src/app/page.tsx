'use client';

import LandingPageHeader from '@/components/Header/LandingPageHeader';
import { useEffect, useState, useRef } from 'react';
import Landing1 from '@/app/landingpage/Landing1';
import Landing2 from '@/app/landingpage/Landing2/index';
import Landing3 from '@/app/landingpage/Landing3';
import Landing4 from '@/app/landingpage/Landing4/index';
import Landing7 from '@/app/landingpage/Landing7';
import Landing8 from '@/app/landingpage/Landing8/index';
import Landing9 from '@/app/landingpage/Landing9';
import Landing5 from '@/app/landingpage/Landing5';
import Landing6 from '@/app/landingpage/Landing6';

export default function Home() {
  const [backgroundFill, setBackgroundFill] = useState<'black' | 'white'>('black');
  const landing1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!landing1Ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBackgroundFill('black');
        } else {
          setBackgroundFill('white');
        }
      },
      {
        threshold: 0.085,
      },
    );

    observer.observe(landing1Ref.current);

    return () => {
      if (landing1Ref.current) {
        observer.unobserve(landing1Ref.current);
      }
    };
  }, []);

  return (
    <main className='flex flex-col items-center w-full h-screen bg-white'>
      <LandingPageHeader backgroundFill={backgroundFill} />
      <div className='flex flex-col w-full overflow-y-scroll snap-y snap-mandatory noScrollbar'>
        {/* <div className='flex flex-row w-full overflow-x-scroll snap-x snap-mandatory'> */}
        <div
          id='0'
          ref={landing1Ref}
          className='flex items-center justify-center w-full bg-black snap-start h-landingPageHeight shrink-0'
        >
          <Landing1 />
        </div>
        <Landing2 />
        <Landing3 />
        <Landing4 />
        <Landing5 />
        <Landing6 />
        <Landing7 />
        <Landing8 />
        <Landing9 />
      </div>
    </main>
  );
}
