import MainListTap from '@/components/ListTap/MainListTap';
import MainPageHeader from '@/components/Header/MainPageHeader';
import { Suspense } from 'react';

const tabData = {
  today: {
    name: '오늘의 인사이트',
  },
  search: {
    name: '탐색     🔍',
  },
  Digest: {
    name: 'Digest',
  },
};

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainPageHeader />
      <div className='flex flex-col w-content'>
        <Suspense fallback={<div></div>}>
          <MainListTap tabData={tabData} />
        </Suspense>
        <div className='flex justify-center w-full h-full'>{children}</div>
      </div>
    </>
  );
}
