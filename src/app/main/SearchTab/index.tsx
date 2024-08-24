'use client';

import { useState } from 'react';
import TopSection from './TopSection';
import SectionContent from './SectionContent';

interface SearchTabProps {
  currentTab: string;
}

export const TabContent = ['시사 / 경제', 'IT / 테크', '트렌드', '커리어', '스타트업', '디자인'];

const SearchTab = ({ currentTab }: SearchTabProps) => {
  const [selectedTab, setSelectedTab] = useState<string[]>([]);

  const isAllSelected = selectedTab.length === 0 || selectedTab.includes('전체');

  return (
    <div className='flex flex-col h-full overflow-x-visible w-content'>
      <TopSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div className='flex w-[calc(50vw+37.5rem)] gap-20 flex-col'>
        {TabContent.map(
          (tab, index) => (isAllSelected || selectedTab.includes(tab)) && <SectionContent key={index} tab={tab} />,
        )}
      </div>
    </div>
  );
};

export default SearchTab;
