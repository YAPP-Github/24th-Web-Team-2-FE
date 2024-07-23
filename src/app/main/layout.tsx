import type { Metadata } from 'next';
import MainListTap from '@/components/ListTap/MainListTap';
import MSWComponent from '@/mocks/MSWWrapper';
import MainPageHeader from '@/components/Header/MainPageHeader';

export const metadata: Metadata = {
  title: 'Inspo Mail Club',
  description: 'TODO: FIX DESCRIPTION',
};

export default async function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabApiData = await getMainPageApiData();
  return (
    <MSWComponent>
      <MainPageHeader />
      <div className='flex flex-col w-content'>
        <MainListTap tabData={tabApiData} />
        <div className='flex justify-center w-full h-full'>{children}</div>
      </div>
    </MSWComponent>
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
