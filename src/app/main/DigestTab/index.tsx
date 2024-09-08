'use client';

import type { ArticleType } from '@/types';
import TopSection from './TopSection';
import { useEffect, useState } from 'react';
import ArticleCard from '@/components/Article/ArticleCard';
import RecommendArea from '../TodayTab/RecommendArea';
import { useUnreadQuery } from '@/api/hooks/useFetchMailQuery';

const DigestTab = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'unread'>('unread');

  const { data, isFetched } = useUnreadQuery({});

  return isFetched ? (
    <div className='flex flex-row w-full h-full gap-16'>
      <div className='flex flex-col gap-3 pt-3'>
        <TopSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {data?.map(article => <ArticleCard key={article.mailId} {...article} />)}
      </div>
      <div className='sticky top-0 pt-9 h-fit'>
        <RecommendArea />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default DigestTab;
