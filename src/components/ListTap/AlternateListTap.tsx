'use client';

import ListItem from '@/components/ListTap/ListItem';

interface AlternateListTapProps {
  tapName: string;
  tapCount: number;
}

const AlternateListTap = ({ tapName, tapCount }: AlternateListTapProps) => {
  return (
    <div className='flex flex-row w-full h-12 gap-4 border-b border-lightgrey'>
      <ListItem id={tapName} name={tapName} count={tapCount} isActive={true} />
    </div>
  );
};

export default AlternateListTap;
