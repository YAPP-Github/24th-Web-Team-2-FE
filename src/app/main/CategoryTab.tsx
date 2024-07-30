import ArticleCard from '@/components/Article/ArticleCard';
import { Chip } from '@/components/Chip';
import type { ArticleType } from '@/types';
import RecommendArea from '@/app/main/TodayTab/RecommendArea';
import { GET } from '@/network';

interface CategoryTabProps {
  currentTab: string;
}

const CategoryTab = async ({ currentTab }: CategoryTabProps) => {
  const articleApiData = await getCategoryArticleData(currentTab);
  return (
    <div className='flex flex-row gap-10 mt-6'>
      <div className='flex flex-col gap-6'>
        {articleApiData.map(article => (
          <div key={article.id} className='flex flex-col gap-3'>
            <Chip text={article.type} />
            <ArticleCard key={article.id} {...article} currentTab={currentTab} />
          </div>
        ))}
      </div>
      <div className='h-full border-l border-lightgrey' />
      <RecommendArea />
    </div>
  );
};

export default CategoryTab;

// currentTab을 props로 넘겨서 해당 탭에 맞는 데이터를 fetch
const getCategoryArticleData = async (currentTab: string): Promise<ArticleType[]> => {
  const response = await GET('/articleList', { currentTab });
  return response.data;
};
