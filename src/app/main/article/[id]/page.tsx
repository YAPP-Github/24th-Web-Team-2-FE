import ArticleHeader from '@/components/Article/ArticleHeader';
import type { pageProps } from '@/types/page';

interface ArticlePageProps extends pageProps {
  params: { id: string };
}

const ArticlePage = async ({ searchParams, params }: ArticlePageProps) => {
  const articleData = await getArticleData(params.id);
  const isToday = (searchParams.tab ?? 'today') === 'today';

  return (
    <div className='flex flex-col w-full gap-2'>
      <ArticleHeader {...articleData} isToday={isToday} />
      <div id='article1' className='w-full h-[1200px] bg-darkgrey'></div>
    </div>
  );
};

export default ArticlePage;

const getArticleData = async (id: string) => {
  return {
    id: 'articleId1',
    title: '국가안전보장회의',
    type: 'IT/테크',
    date: '2024-06-14',
    from: {
      domain: 'official@git',
      profile: 'https://picsum.photos/36',
    },
  };
};
