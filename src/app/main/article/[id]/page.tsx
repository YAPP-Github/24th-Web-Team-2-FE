import type { pageProps } from '@/types/page';
import ArticleContent from '@/app/main/article/[id]/ArticleContent';

interface ArticlePageProps extends pageProps {
  params: { id: string };
}

const ArticlePage = async ({ searchParams, params }: ArticlePageProps) => {
  const isToday = (searchParams.tab ?? 'today') === 'today';

  return <ArticleContent isToday={isToday} articleId={params.id} />;
};

export default ArticlePage;
