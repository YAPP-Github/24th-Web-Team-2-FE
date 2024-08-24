import MainListTap from '@/components/ListTap/MainListTap';
import MainPageHeader from '@/components/Header/MainPageHeader';
import { Suspense } from 'react';

export default async function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabApiData = await getMainPageApiData();
  return (
    <>
      <MainPageHeader />
      <div className='flex flex-col w-content'>
        <Suspense fallback={<div></div>}>
          <MainListTap tabData={tabApiData} />
        </Suspense>
        <div className='flex justify-center w-full h-full'>{children}</div>
      </div>
    </>
  );
}

const getMainPageApiData = async () => {
  return {
    today: {
      name: '오늘의 인사이트',
      count: 2,
    },
    randomString1: {
      name: 'it/테크',
      count: 12,
    },
    randomString2: {
      name: '채용',
      count: 27,
    },
    randomString3: {
      name: '시사',
      count: 5,
    },
  };
};
