'use client';

import { useEffect, useRef, useState } from 'react';
import type { ArticleType } from '@/types';
import Link from 'next/link';
import { useFocusIdStore } from '../../../utils/hooks/useFocusIdStore';
import { shallow } from 'zustand/shallow';

interface ScrollNavigationProps {
  articleData: ArticleType[];
}

const ScrollNavigation = ({ articleData }: ScrollNavigationProps) => {
  const [activeId, setActiveId] = useState<string | null>(articleData[0].id);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const focusId = useFocusIdStore(state => state.focusId, shallow);

  useEffect(() => {
    console.log(activeId);
  }, [activeId]);

  return (
    <div
      ref={itemRef}
      className='fixed flex flex-row items-center gap-4 transform -translate-y-1/2 right-10 top-1/2'
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className='flex flex-col gap-2 w-[13.5rem] rounded-xl shadow-[0_0_12px_0_rgba(0,0,0,0.25)] p-4 bg-white'>
          {articleData.map((article, index) => (
            <Link
              key={article.id}
              href={{
                pathname: `/main`,
                query: { tab: 'today' },
                hash: article.id,
              }}
              className={`overflow-hidden whitespace-nowrap text-caption text-ellipsis ${
                focusId === index ? 'text-blue' : 'text-darkgrey'
              }`}
            >
              {article.title}
            </Link>
          ))}
        </div>
      )}
      <div className='flex flex-col w-4 cursor-pointer gap-3' onMouseEnter={() => setIsHovered(true)}>
        {articleData.map((article, index) => (
          <span
            className={`w-full rounded-full h-0.5 ${focusId === index ? 'bg-darkgrey' : 'bg-lightgrey'}`}
            key={article.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollNavigation;
