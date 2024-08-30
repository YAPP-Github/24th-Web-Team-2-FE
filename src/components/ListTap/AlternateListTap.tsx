'use client';

import ListItem from '@/components/ListTap/ListItem';

interface AlternateListTapProps {
  tapName: string;
  tapCnt?: number;
}

const AlternateListTap = ({ tapName, tapCnt }: AlternateListTapProps) => {
  return (
    <div className='flex flex-row w-full h-12 border-b gap-4 border-lightgrey'>
      <ListItem id={tapName} name={tapName} isActive={true} />
    </div>
  );
};

export default AlternateListTap;
