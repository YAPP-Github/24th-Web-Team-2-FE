import ListTap from '@/components/ListTap/MainListTap';
import type { pageProps } from '@/types/page';
import TodayTab from './TodayTab';
import CategoryTab from './CategoryTab';

const MainPage = async ({ searchParams }: pageProps) => {
  const currentTab = (searchParams.tab ?? 'today') as string;
  // apiData에서 tab에 들어갈 데이터 fetch
  const tabApiData = await getMainPageApiData();

  return (
    <div className='flex flex-col w-content'>
      <ListTap currentTab={currentTab} tabData={tabApiData} />
      <div className='flex flex-col items-center w-full gap-10 mb-10'>
        {currentTab === 'today' ? (
          <>
            <TodayTab />
            <div id='article1' className='w-full h-[1200px] bg-darkgrey'></div>
            <div id='article2' className='w-full h-[1200px] bg-blue'></div>
          </>
        ) : (
          <CategoryTab currentTab={currentTab} />
        )}
      </div>
    </div>
  );
};

export default MainPage;

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
