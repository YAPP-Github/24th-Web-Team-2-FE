import ListTap from '@/components/ListTap/MainListTap';
import type { pageProps } from '@/types/page';

const MainPage = async ({ searchParams }: pageProps) => {
  const currentTab = (searchParams.tab ?? 'today') as string;
  // apiData에서 tab에 들어갈 데이터 fetch
  const apiData = await getMainPageApiData();
  return (
    <div className='w-content'>
      <ListTap {...apiData} currentTab={currentTab} tabData={apiData} />
    </div>
  );
};

export default MainPage;

const getMainPageApiData = async () => {
  return [
    {
      id: 'randomString10',
      name: '오늘의 인사이트',
      count: 2,
    },
    {
      id: 'randomString1',
      name: 'it/테크',
      count: 12,
    },
    {
      id: 'randomString2',
      name: '채용',
      count: 27,
    },
    {
      id: 'randomString3',
      name: '시사',
      count: 5,
    },
  ];
};
