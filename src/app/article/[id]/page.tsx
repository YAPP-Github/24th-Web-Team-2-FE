import type { pageProps } from '@/types/page';
import ArticleContent from '@/app/article/[id]/ArticleContent';
import MainPageHeader from '@/components/Header/MainPageHeader';

interface ArticlePageProps extends pageProps {
  params: { id: string };
}

const ArticlePage = ({ searchParams, params }: ArticlePageProps) => {
  const isToday = (searchParams.tab ?? 'today') === 'today';

  return (
    <main className='flex flex-col items-center w-full'>
      <MainPageHeader />
      <ArticleContent isToday={isToday} articleId={params.id} />
    </main>
  );
};

export default ArticlePage;
