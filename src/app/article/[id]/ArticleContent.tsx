'use client';

import { MailDataType } from '@/api/hooks/useFetchMailQuery';
import ArticleHeader from '@/components/Article/ArticleHeader';
import { ArticleType } from '@/types';
import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

interface ArticleContentProps {
  mailData: MailDataType;
}

const ArticleContent = ({ mailData }: ArticleContentProps) => {
  const [headerType, setHeaderType] = useState<'default' | 'simplified'>('default');

  return (
    <div id={mailData.mailId} className='flex flex-col items-center w-full gap-2'>
      <ArticleHeader {...mailData} headerType={headerType} />

      <div
        className='py-4 overflow-x-scroll w-content h-fit shrink-0'
        dangerouslySetInnerHTML={{ __html: mailData.payload.find(pl => pl.mimeType === 'text/html')!.body }}
      ></div>
    </div>
  );
};

export default ArticleContent;
