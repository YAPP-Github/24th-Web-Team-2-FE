'use client';

import ListItem from '@/components/ListTap/ListItem';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface TabData {
  name: string;
  count: number;
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
  const [currentTab, setCurrentTab] = useState('today');

  const searchParams = useSearchParams();

  useEffect(() => {
    setCurrentTab(searchParams.get('tab') ?? 'today');
  }, [searchParams]);

  const handleClickListItem = (id: string) => {
    setCurrentTab(id);
  };
  return (
    <div className='flex flex-row w-full h-12 gap-4 border-b border-lightgrey'>
      {Object.keys(tabData).map(id => (
        <ListItem
          onClick={() => handleClickListItem(id)}
          key={id}
          id={id}
          name={tabData[id].name}
          count={tabData[id].count}
          isActive={currentTab === id}
        />
      ))}
    </div>
  );
};

export default MainListTap;
