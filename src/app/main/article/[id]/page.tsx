import ArticleHeader from '@/components/Article/ArticleHeader';
import type { pageProps } from '@/types/page';
import ArticleContent from './ArticleContent';

interface ArticlePageProps extends pageProps {
  params: { id: string };
}

const ArticlePage = async ({ searchParams, params }: ArticlePageProps) => {
  const isToday = (searchParams.tab ?? 'today') === 'today';

  return <ArticleContent isToday={isToday} articleId={params.id} />;
};

export default ArticlePage;
