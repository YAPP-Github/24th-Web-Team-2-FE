import MainPageHeader from '@/components/Header/MainPageHeader';
import DomainListTap from '@/components/ListTap/DomainListTap';
import Image from 'next/image';
import ArticleCard from '@/components/Article/ArticleCard';
import DomainCard from '@/app/domain/[id]/DomainCard';

interface DomainPageProps {
  params: {
    id: string;
  };
}

const DomainPage = async ({ params }: DomainPageProps) => {
  const { domainData, isSubscribed, domainArticleData } = await getDomainPageData(params.id);

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
          <DomainListTap />
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

export const getDomainPageData = async (id: string) => {
  return {
    domainData: {
      id: id,
      name: '뉴닉',
      type: '시사',
      domain: 'newneek@gmail.com',
      profile: 'https://picsum.photos/800',
      description:
        '우리가 시간이 없지, 세상이 안 궁금하냐!\n시사, 경제, 커리어 등 지식 정보부터 일상 속 사소한\n영감까지 자유롭게 이야기할 수 있는 플랫폼이에요.',
      website: 'https://newneek.co/',
    },
    isSubscribed: true,
    domainArticleData: [
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
        url: '/article/2',
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
    ],
  };
};
