import ArticleCard from '@/app/main/SearchTab/ArticleCard';

interface SectionContentProps {
  tab: string;
}

const SectionContent = ({ tab }: SectionContentProps) => {
  return (
    <div className='flex flex-col overflow-x-scroll gap-5'>
      <span className='text-xl font-bold'>{tab}</span>
      <div className='flex flex-row overflow-x-scroll gap-4 noScrollbar'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <div className='h-20 w-[calc(50vw-37.5rem)] bg-white shrink-0' />
      </div>
    </div>
  );
};

export default SectionContent;
