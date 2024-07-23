import ArticleCard from '@/components/Article/ArticleCard';
import { Chip } from '@/components/Chip';
import type { Article } from '@/types/article';
import RecommendArea from '@/app/main/TodayTab/RecommendArea';

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
const getCategoryArticleData = async (currentTab: string): Promise<Article[]> => {
  return [
    {
      id: 'randomString111',
      title: '국가안전보장회의',
      url: '/article/1',
      type: 'IT/테크',
      content:
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
      date: '2024-07-13',
      thumbnail: 'https://picsum.photos/156',
      isRead: true,
      from: {
        domain: 'official@git',
        profile: 'https://picsum.photos/36',
      },
    },
    {
      id: 'randomString112',
      title: '국가안전보장회의',
      url: '/article/1',
      type: 'IT/테크',
      content:
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
      date: '2024-07-13',
      thumbnail: 'https://picsum.photos/156',
      isRead: false,
      from: {
        domain: 'official@git',
        profile: 'https://picsum.photos/36',
      },
    },
    {
      id: 'randomString113',
      title: '국가안전보장회의',
      url: '/article/1',
      type: '시사',
      content:
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
      date: '2024-07-13',
      thumbnail: 'https://picsum.photos/156',
      isRead: false,
      from: {
        domain: 'official@git',
        profile: 'https://picsum.photos/36',
      },
    },
  ];
};
