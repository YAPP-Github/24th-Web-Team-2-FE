import ArticleHeader from '@/components/Article/ArticleHeader';

interface ArticleContentProps {
  isToday: boolean;
  articleId: string;
}

const ArticleContent = async ({ isToday, articleId }: ArticleContentProps) => {
  const articleData = await getArticleData(articleId);

  return (
    <div id={articleId} className='flex flex-col w-full gap-2'>
      <ArticleHeader {...articleData} isToday={isToday} />
      <div id='article1' className='w-full h-[1200px] bg-darkgrey'></div>
    </div>
  );
};

export default ArticleContent;

const getArticleData = async (id: string) => {
  return {
    id: 'articleId1',
    title: '국가안전보장회의',
    type: 'IT/테크',
    date: '2024-06-14',
    from: {
      domain: 'official@git',
      profile: 'https://picsum.photos/36',
    },
  };
};
