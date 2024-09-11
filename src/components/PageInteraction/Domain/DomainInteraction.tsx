'use client';

import { MailDataType } from '@/api/hooks/useFetchMailQuery';
import ArticleCard from '@/components/Article/ArticleCard';
import EmptyMailView from '@/components/EmptyMailView';
import ExploreTabButton from '@/components/ExploreTabButton';
import { useState } from 'react';

interface DomainInteractionAreaProps {
  domainArticleData: MailDataType[];
}

const DomainInteractionArea = ({ domainArticleData }: DomainInteractionAreaProps) => {
  const [currentTab, setCurrentTab] = useState('unread');
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row gap-3'>
          <ExploreTabButton selected={currentTab === 'all'} onClick={() => setCurrentTab('all')}>
            전체
          </ExploreTabButton>
          <ExploreTabButton selected={currentTab === 'unread'} onClick={() => setCurrentTab('unread')}>
            안 읽음
          </ExploreTabButton>
        </div>
        <span className='text-sm font-normal text-darkgrey'>{domainArticleData.length}개의 글</span>
      </div>
      {domainArticleData.length === 0 ? (
        <div className='w-full h-[calc(100vh-428px)]'>
          <EmptyMailView />
        </div>
      ) : (
        <div className='flex flex-col w-full gap-4'>
          {domainArticleData
            ?.filter(article => {
              if (currentTab === 'unread') {
                return !article.isRead;
              }
              return true;
            })
            .map(article => <ArticleCard key={article.mailId} {...article} currentTab={'currentTab'} />)}
        </div>
      )}
    </div>
  );
};

export default DomainInteractionArea;
