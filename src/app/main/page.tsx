import type { pageProps } from '@/types/page';
import TodayTab from '@/app/main/TodayTab';
import CategoryTab from '@/app/main/CategoryTab';
import ArticleContent from './article/[id]/ArticleContent';
import { GET } from '@/network';
import type { ArticleType } from '@/types';

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
              <ArticleContent isToday={true} articleId={article.id} />
            ))}
          </div>
        </>
      ) : (
        <CategoryTab currentTab={currentTab} />
      )}
    </div>
  );
};

export default MainPage;

const getMainPageArticleData = async (): Promise<ArticleType[]> => {
  const response = await GET('/articleList');
  return response.data;
};
