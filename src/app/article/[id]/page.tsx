'use client';
export const runtime = 'edge';

import type { pageProps } from '@/types/page';
import ArticleContent from '@/app/article/[id]/ArticleContent';
import MainPageHeader from '@/components/Header/MainPageHeader';
import { useMailByIdQuery } from '@/api/hooks/useFetchMailQuery';
import ArticleFooter from './ArticleFooter';

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const { data } = useMailByIdQuery(params.id);

  return (
    <main className='flex flex-col items-center w-full bg-white'>
      <MainPageHeader />
      {data && (
        <>
          <ArticleContent mailData={data} />
          <ArticleFooter mailId={data.mailId} />
        </>
      )}
    </main>
  );
};

export default ArticlePage;
