'use client';

import ArticleHeader from '@/components/Article/ArticleHeader';
import { ArticleType } from '@/types';
import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

interface ArticleContentProps {
  isToday: boolean;
  articleId: string;
}

const ArticleContent = ({ isToday, articleId }: ArticleContentProps) => {
  const [articleData, setArticleData] = useState<ArticleType>();
  const [headerType, setHeaderType] = useState<'default' | 'simplified'>('default');

  useEffect(() => {
    getArticleData(articleId).then(data => setArticleData(data));
  }, [articleId]);

  return (
    articleData && (
      <div id={articleId} className='flex flex-col items-center w-full gap-2'>
        <ArticleHeader {...articleData} headerType={headerType} />

        <div className='w-content h-[1200px] bg-blue'></div>
      </div>
    )
  );
};

export default ArticleContent;

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
    group: '채민이의 유용한 아티클',
  };
};
