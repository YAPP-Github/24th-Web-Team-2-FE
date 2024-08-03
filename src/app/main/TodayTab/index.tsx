import ArticleCard from '@/components/Article/ArticleCard';
import { Chip } from '@/components/Chip';
import type { ArticleType } from '@/types';
import { formatToYMD } from '@/utils/formatDate/formatToYMD';
import Image from 'next/image';
import DoubleArrow from '@/assets/icons/DoubleArrow.svg';
import Link from 'next/link';
interface TodayTabProps {
  articleData: ArticleType[];
}

const TodayTab = async ({ articleData }: TodayTabProps) => {
  return (
    <>
      <div className='flex flex-col items-center gap-3 mt-10'>
        <span className='text-blue text-body3'>{formatToYMD(new Date())}</span>
        <span className='text-center text-h1'>
          {/* TODO: 이름 api를 통해 받아오기 */}
          채현님에게
          <br />
          오늘 도착한 메일이에요
        </span>
        <span className='text-darkgrey text-h2'>{articleData.length}개의 인사이트가 도착했어요</span>
      </div>
      <div className='flex flex-col gap-6'>
        {articleData.map(article => (
          <div key={article.id} className='flex flex-col gap-3'>
            <Chip text={article.type} />
            <ArticleCard key={article.id} {...article} isToday={true} currentTab='today' />
          </div>
        ))}
      </div>
      <Link
        href={`/main#${articleData[0].id}`}
        className='flex flex-row justify-center w-full gap-1 cursor-pointer text-darkgrey'
      >
        첫 번째부터 읽기
        <Image className='p-1.5' src={DoubleArrow} width={24} height={24} alt='Scroll Down' />
      </Link>
    </>
  );
};
export default TodayTab;
