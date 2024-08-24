import MainPageHeader from '@/components/Header/MainPageHeader';
import AlternateListTap from '@/components/ListTap/AlternateListTap';
import Image from 'next/image';
import ArticleCard from '@/components/Article/ArticleCard';
import DomainCard from '@/app/domain/[id]/DomainCard';
import { GET } from '@/network';
import { ArticleType, DomainType } from '@/types';

interface DomainPageProps {
  params: {
    id: string;
  };
}

const DomainPage = async ({ params }: DomainPageProps) => {
  const {
    domainData,
    isSubscribed,
    domainArticleData,
  }: {
    domainData: DomainType;
    isSubscribed: boolean;
    domainArticleData: ArticleType[];
  } = await getDomainPageData(params.id);

  return (
    <div className='flex flex-col items-center w-full'>
      <MainPageHeader />
      <div className='flex flex-row gap-10 mb-10 w-content'>
        <div className='flex flex-col gap-6 w-articleCard'>
          <div className='relative w-full aspect-[792/216]'>
            <Image src={domainData.profile} alt={domainData.domain} fill className='object-cover w-full h-full' />
            <div className='absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-white' />
          </div>
          <div className='relative -top-10 text-h1'>{domainData.name}</div>
          <AlternateListTap tapName='지난 아티클' tapCount={domainArticleData.length} />
          <div className='flex flex-col w-full gap-4'>
            {domainArticleData.map(article => (
              <ArticleCard key={article.id} {...article} currentTab={'currentTab'} />
            ))}
          </div>
        </div>
        <div className='border-l border-lightgrey' />
        <div className='mt-20'>
          <DomainCard domainData={domainData} isSubscribed={isSubscribed} />
        </div>
      </div>
    </div>
  );
};

export default DomainPage;

const getDomainPageData = async (id: string) => {
  const response = await GET(`/domainData/${id}`);
  return response;
};
