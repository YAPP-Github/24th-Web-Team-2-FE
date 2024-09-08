'use client';

import type { pageProps } from '@/types/page';
import ArticleContent from '@/app/article/[id]/ArticleContent';
import MainPageHeader from '@/components/Header/MainPageHeader';
import { useMailByIdQuery } from '@/api/hooks/useFetchMailQuery';

interface ArticlePageProps extends pageProps {
  params: { id: string };
}

const ArticlePage = ({ searchParams, params }: ArticlePageProps) => {
  const { data } = useMailByIdQuery(params.id);

  return (
    <main className='flex flex-col items-center w-full bg-white'>
      <MainPageHeader />
      {/* TODO: 개별 mail 받아와서 데이터 넘겨줘야함~~ */}
      {data && <ArticleContent mailData={data} />}
    </main>
  );
};

export default ArticlePage;
