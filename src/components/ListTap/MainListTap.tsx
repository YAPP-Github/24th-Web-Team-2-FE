'use client';

import ListItem from '@/components/ListTap/ListItem';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface TabData {
  name: string;
}

interface MainListTapProps {
  tabData: { [key: string]: TabData };
}

/**
 *
 * @param tabData tab에 들어갈 data
 * @returns
 */
const MainListTap = ({ tabData }: MainListTapProps) => {
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState(searchParams.get('tab') ?? 'today');

  const handleClickListItem = (id: string) => {
    setCurrentTab(id);
  };
  return (
    <div className='flex justify-center w-full h-12 border-b border-lightgrey'>
      <div className='flex flex-row h-full gap-4 w-content'>
        {Object.keys(tabData).map(id => (
          <ListItem
            onClick={() => handleClickListItem(id)}
            key={id}
            id={id}
            name={tabData[id].name}
            isActive={currentTab === id}
          />
        ))}
      </div>
    </div>
  );
};

export default MainListTap;
