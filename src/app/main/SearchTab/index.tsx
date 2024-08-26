'use client';

import { useEffect, useState } from 'react';
import TopSection from './TopSection';
import SectionContent from './SectionContent';
import { SubscriptionList, useSearchTabQuery } from '@/api/hooks/useSearchTabQuery';

export const TabContent = [
  {
    label: 'business',
    value: '시사 / 경제',
  },
  {
    label: 'tech',
    value: 'IT / 테크',
  },
  {
    label: 'trend',
    value: '트렌드',
  },
  {
    label: 'career',
    value: '커리어',
  },
  {
    label: 'startup',
    value: '스타트업',
  },
  {
    label: 'health',
    value: '디자인',
  },
];

const SearchTab = () => {
  const { data } = useSearchTabQuery();

  const [selectedTab, setSelectedTab] = useState<string[]>([]);

  const isAllSelected = selectedTab.length === 0 || selectedTab.includes('전체');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='flex flex-col h-full overflow-x-visible w-content'>
      <TopSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {data && (
        <div className='flex w-[calc(50vw+37.5rem)] gap-20 flex-col'>
          {TabContent.map((tab, index) => {
            return (
              (isAllSelected || selectedTab.includes(tab.value)) && (
                <SectionContent key={index} tab={tab.value} newsLetters={data[tab.label as keyof SubscriptionList]} />
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchTab;
