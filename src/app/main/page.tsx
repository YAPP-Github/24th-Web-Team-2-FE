import type { pageProps } from '@/types/page';
import TodayTab from '@/app/main/TodayTab';
import CategoryTab from '@/app/main/CategoryTab';

const MainPage = async ({ searchParams }: pageProps) => {
  const currentTab = (searchParams.tab ?? 'today') as string;
  // apiData에서 tab에 들어갈 데이터 fetch

  return (
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
  );
};

export default MainPage;
