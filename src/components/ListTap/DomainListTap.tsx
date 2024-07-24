'use client';

import ListItem from '@/components/ListTap/ListItem';

const DomainListTap = () => {
  return (
    <div className='flex flex-row w-full h-12 gap-4 border-b border-lightgrey'>
      <ListItem id='PastArticle' name='지난 아티클' count={24} isActive={true} />
    </div>
  );
};

export default DomainListTap;
