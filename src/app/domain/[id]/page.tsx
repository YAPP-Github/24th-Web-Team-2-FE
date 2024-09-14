import MainPageHeader from '@/components/Header/MainPageHeader';
import AlternateListTap from '@/components/ListTap/AlternateListTap';
import Image from 'next/image';
import ArticleCard from '@/components/Article/ArticleCard';
import DomainCard from '@/app/domain/[id]/DomainCard';
import { GET } from '@/network';
import { ArticleType, DomainType } from '@/types';
import ExploreTabButton from '@/components/ExploreTabButton';
import DomainInteractionArea from '@/components/PageInteraction/Domain/DomainInteraction';
import { MailDataType } from '@/api/hooks/useFetchMailQuery';
import { Newsletter } from '@/api/hooks/useSearchTabQuery';

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
    domainData: Newsletter;
    isSubscribed: boolean;
    domainArticleData: MailDataType[];
  } = await getDomainPageData(params.id);

  return (
    <div className='flex flex-col items-center w-full'>
      <MainPageHeader />
      <div className='flex flex-row justify-center mb-10 w-content'>
        <div className='flex flex-col gap-3 w-articleCard'>
          <div className='relative w-full aspect-[693/216]'>
            <Image src={domainData.thumbnailImage} alt={domainData.name} fill className='object-cover w-full h-full' />
            <div className='absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-white' />
          </div>
          <div className='relative text-h1'>{domainData.name}</div>

          <DomainInteractionArea domainArticleData={domainArticleData} />
        </div>
      </div>
    </div>
  );
};

export default DomainPage;

const getDomainPageData = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/domainData/${id}`);
  return response.json();
};
