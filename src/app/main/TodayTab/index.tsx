'use client';

import ArticleCard from '@/components/Article/ArticleCard';
import { formatToYMD } from '@/utils/formatDate/formatToYMD';
import Image from 'next/image';
import DoubleArrow from '@/assets/icons/DoubleArrow.svg';
import Link from 'next/link';
import ScrollNavigation from './ScrollNavigation';
import { MailDataType } from '@/api/hooks/useFetchMailQuery';
import { useProfileQuery } from '@/api/hooks/useFetchProfileQuery';

interface TodayTabProps {
  articleData: MailDataType[];
  isArticleArea: boolean;
}

const TodayTab = ({ articleData, isArticleArea }: TodayTabProps) => {
  const { data } = useProfileQuery();

  return articleData.length > 0 ? (
    <>
      <div className='flex flex-col items-center gap-3 mt-10'>
        <span className='text-blue text-body1'>{formatToYMD(new Date())}</span>
        <span className='text-center text-h1'>
          {/* TODO: 이름 api를 통해 받아오기 */}
          채현님에게
          <br />
          오늘 도착한 메일이에요
        </span>
        <span className='text-darkgrey text-body1'>
          <span className='text-blue'>{articleData.length}개의 인사이트</span>가 도착했어요
        </span>
      </div>
      <div className='flex flex-col gap-6'>
        {articleData.map(article => (
          <div key={article.mailId} className='flex flex-col gap-3'>
            <ArticleCard key={article.mailId} {...article} isToday={true} currentTab='today' />
          </div>
        ))}
      </div>
      {isArticleArea ? (
        <Link href='/main' scroll={true} className={`fixed w-10 h-10 bottom-4 left-4 rounded-full bg-green z-50`} />
      ) : (
        <Link
          href={`/main#${articleData[0].mailId}`}
          scroll={true}
          className={`fixed -translate-x-1/2 cursor-pointer left-1/2 bottom-8 text-darkgrey`}
        >
          <div className={`flex flex-row justify-center w-full gap-1 text-darkgrey animate-bounce`}>
            첫 번째부터 읽기
            <Image className='p-1.5' src={DoubleArrow} width={24} height={24} alt='Scroll Down' />
          </div>
        </Link>
      )}
      <ScrollNavigation articleData={articleData} />
    </>
  ) : (
    <>Loading...</>
  );
};
export default TodayTab;
