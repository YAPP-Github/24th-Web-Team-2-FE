'use client';

import { useEffect, useRef, useState } from 'react';
import type { ArticleType } from '@/types';
import Link from 'next/link';

interface ScrollNavigationProps {
  articleData: ArticleType[];
  isReady: boolean;
}

const ScrollNavigation = ({ articleData, isReady }: ScrollNavigationProps) => {
  const [activeId, setActiveId] = useState<string | null>(articleData[0].id);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    // FIXME: @우찬
    console.log('isReady', isReady);
    if (isReady) {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1,
      });

      articleData.forEach(article => {
        const element = document.getElementById(article.id);
        if (element) observer.observe(element);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [articleData, isReady]);

  useEffect(() => {
    console.log(activeId);
  }, [activeId]);

  return (
    <div
      className='fixed flex flex-row items-center gap-4 transform -translate-y-1/2 right-10 top-1/2'
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className='flex flex-col gap-2 w-[13.5rem] rounded-xl shadow-[0_0_12px_0_rgba(0,0,0,0.25)] p-4 bg-white'>
          {articleData.map(article => (
            <Link
              key={article.id}
              href={{
                pathname: `/main`,
                query: { tab: 'today' },
                hash: article.id,
              }}
              className={`overflow-hidden whitespace-nowrap text-caption text-ellipsis ${
                activeId === article.id ? 'text-blue' : 'text-darkgrey'
              }`}
            >
              {article.title}
            </Link>
          ))}
        </div>
      )}
      <div className='flex flex-col w-4 cursor-pointer gap-3' onMouseEnter={() => setIsHovered(true)}>
        {articleData.map(article => (
          <span
            className={`w-full rounded-full h-0.5 ${activeId === article.id ? 'bg-darkgrey' : 'bg-lightgrey'}`}
            key={article.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollNavigation;
