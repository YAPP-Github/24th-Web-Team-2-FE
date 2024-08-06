'use client';

import MainPageHeader from '@/components/Header/MainPageHeader';
import AlternateListTap from '@/components/ListTap/AlternateListTap';
import Image from 'next/image';

import { GET } from '@/network';
import { ArticleType, DomainType } from '@/types';
import { useMailData } from '@/api/getMailData';
import { useSearchParams } from 'next/navigation';

const DomainPage = () => {
  const param = useSearchParams();
  const mailId = (param.has('mailId') ? param.get('mailId') : '1') as string;
  const domainData = useMailData(mailId);

  return (
    <div className='flex flex-col items-center w-full'>
      <MainPageHeader />
      <div className='flex flex-row gap-10 mb-10 w-content'>
        <div className='flex flex-col gap-6 w-articleCard'>
          <div className='relative w-full aspect-[792/216]'>
            <Image
              src={domainData.data.profile}
              alt={domainData.data.domain}
              fill
              className='object-cover w-full h-full'
            />
            <div className='absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-white' />
          </div>
          {/* <div className='relative -top-10 text-h1'>{domainData.data.name}</div>
          <AlternateListTap tapName='지난 아티클' tapCount={domainArticleData.length} />
          <div className='flex flex-col w-full gap-4'>
            {domainArticleData.map(article => (
              <ArticleCard key={article.id} {...article} currentTab={'currentTab'} />
            ))}
          </div> */}
        </div>
        <div className='border-l border-lightgrey' />
        <div className='mt-20'>{/* <DomainCard domainData={domainData} isSubscribed={isSubscribed} /> */}</div>
      </div>
    </div>
  );
};

export default DomainPage;

export const getDomainPageData = async (id: string) => {
  const response = await GET(`/domainData/${id}`);

  return response;
};
