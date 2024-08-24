'use client';

import { MailDataType } from '@/api/hooks/useUnreadQuery';
import ArticleHeader from '@/components/Article/ArticleHeader';
import { ArticleType } from '@/types';
import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

interface ArticleContentProps {
  isToday: boolean;
  mailData: MailDataType;
}

const ArticleContent = ({ isToday, mailData }: ArticleContentProps) => {
  const [headerType, setHeaderType] = useState<'default' | 'simplified'>('default');

  return (
    <div id={mailData.mailId} className='flex flex-col items-center w-full gap-2'>
      <ArticleHeader {...mailData} headerType={headerType} />

      <div
        className='w-content h-[1200px] overflow-x-scroll'
        dangerouslySetInnerHTML={{ __html: mailData.payload[0].body }}
      ></div>
    </div>
  );
};

export default ArticleContent;
