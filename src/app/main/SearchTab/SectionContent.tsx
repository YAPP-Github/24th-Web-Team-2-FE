import { Newsletter } from '@/api/hooks/useSearchTabQuery';
import ArticleCard from '@/app/main/SearchTab/ArticleCard';
import useDragScroll from '@/utils/hooks/useDragScroll';

interface SectionContentProps {
  tab: string;
  newsLetters: Newsletter[];
}

const SectionContent = ({ tab, newsLetters }: SectionContentProps) => {
  const { scrollRef, onDragStart, onThrottleDragMove, onDragEnd, isDrag } = useDragScroll();
  return (
    <div className='flex flex-col gap-5 overflow-x-scroll noScrollbar'>
      <span className='text-xl font-bold'>{tab}</span>
      <div
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onThrottleDragMove : () => {}}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        ref={scrollRef}
        className='flex flex-row gap-4 overflow-x-scroll noScrollbar scroll-auto'
      >
        {newsLetters?.map((newsLetter, index) => <ArticleCard key={index} newsLetter={newsLetter} />)}
        <div className='h-20 w-[calc(50vw-37.5rem)] bg-white shrink-0' />
      </div>
    </div>
  );
};

export default SectionContent;
