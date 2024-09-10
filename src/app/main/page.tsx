'use client';

import type { pageProps } from '@/types/page';
import TodayTab from '@/app/main/TodayTab';
import DigestTab from '@/app/main/DigestTab';
import SearchTab from './SearchTab';
import { notFound } from 'next/navigation';

const MainPage = ({ searchParams }: pageProps) => {
  const currentTab = (searchParams.tab ?? 'today') as string;

  return (
    <div className='flex flex-col items-center w-full gap-10 mb-10'>
      {currentTab === 'today' ? (
        <TodayTab />
      ) : currentTab === 'search' ? (
        <SearchTab />
      ) : currentTab === 'Digest' ? (
        <DigestTab />
      ) : (
        notFound()
      )}
    </div>
  );
};

export default MainPage;
