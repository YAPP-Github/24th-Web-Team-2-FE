import type { pageProps } from '@/types/page';
import TodayTab from '@/app/main/TodayTab';
import DigestTab from '@/app/main/DigestTab';
import ArticleContent from './article/[id]/ArticleContent';
import { GET } from '@/network';
import type { ArticleType } from '@/types';
import SearchTab from './SearchTab';

const MainPage = async ({ searchParams }: pageProps) => {
  // apiData에서 tab에 들어갈 데이터 fetch
  const currentTab = (searchParams.tab ?? 'today') as string;
  const articleApiData = await getMainPageArticleData();

  return (
    <div className='flex flex-col items-center w-full gap-10 mb-10'>
      {currentTab === 'today' ? (
        <>
          <TodayTab articleData={articleApiData} />
          <div className='flex flex-col w-full gap-20'>
            {articleApiData.map(article => (
              <ArticleContent key={article.id} isToday={true} articleId={article.id} />
            ))}
          </div>
        </>
      ) : currentTab === 'search' ? (
        <SearchTab currentTab={currentTab} />
      ) : (
        <DigestTab currentTab={currentTab} />
      )}
    </div>
  );
};

export default MainPage;

const getMainPageArticleData = async (): Promise<ArticleType[]> => {
  // const response = await GET('/articleList');
  // return response.data;
  const data = [
    {
      id: 'randomString111',
      title: '국가안전보장회의',
      url: '/article/1',
      type: 'IT/테크',
      content:
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
      date: '2024-07-13',
      thumbnail: 'https://picsum.photos/156',
      isRead: false,
      from: {
        domain: 'official@git',
        profile: 'https://picsum.photos/36',
      },
    },
    {
      id: 'randomString112',
      title: '국가안전보장회의',
      url: '/article/2',
      type: 'IT/테크',
      content:
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
      date: '2024-07-13',
      thumbnail: 'https://picsum.photos/156',
      isRead: false,
      from: {
        domain: 'official@git',
        profile: 'https://picsum.photos/36',
      },
    },
    {
      id: 'randomString113',
      title: '국가안전보장회의',
      url: '/article/3',
      type: '시사',
      content:
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
      date: '2024-07-13',
      thumbnail: 'https://picsum.photos/156',
      isRead: false,
      from: {
        domain: 'official@git',
        profile: 'https://picsum.photos/36',
      },
    },
  ];
  return data;
};
