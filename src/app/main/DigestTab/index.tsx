'use client';

import type { ArticleType } from '@/types';
import TopSection from './TopSection';
import { useEffect, useState } from 'react';
import ArticleCard from '@/components/Article/ArticleCard';
import RecommendArea from '../TodayTab/RecommendArea';
import { useUnreadQuery } from '@/api/hooks/useFetchMailQuery';
import EmptyMailView from '@/components/EmptyMailView';
import { useMailReadMutation } from '@/api/hooks/useMailReadMutation';
import LoadingComponent from '@/components/Loading';

const DigestTab = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'unread'>('unread');

  const { data, isFetched, refetch } = useUnreadQuery({});
  const readMutation = useMailReadMutation();

  const handleReadMail = (mailId: string) => {
    readMutation.mutate({ mailId });
  };

  return isFetched ? (
    <div className='flex flex-row justify-center w-full h-full gap-16'>
      <div className='flex flex-col h-full gap-3 pt-3'>
        <TopSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} handleRefresh={() => refetch()} />
        {data?.filter(d => (selectedTab === 'all' ? true : d.isRead === false)).length === 0 ? (
          <div className='h-[calc(100vh-8rem-60px)] overflow-visible w-articleCard'>
            <EmptyMailView />
          </div>
        ) : (
          data
            ?.filter(d => (selectedTab === 'all' ? true : d.isRead === false))
            .map((article, index) => (
              <div
                key={article.mailId}
                onClick={() => handleReadMail(article.mailId)}
                className={`${index === data.length - 1 && 'mb-10'}`}
              >
                <ArticleCard {...article} />
              </div>
            ))
        )}
      </div>
      <div className='sticky top-0 pt-9 h-fit'>
        <RecommendArea />
      </div>
    </div>
  ) : (
    <div className='w-[400px] aspect-square'>
      <LoadingComponent />
    </div>
  );
};

export default DigestTab;
