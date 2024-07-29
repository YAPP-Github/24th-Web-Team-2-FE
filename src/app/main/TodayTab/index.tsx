import ArticleCard from '@/components/Article/ArticleCard';
import { Chip } from '@/components/Chip';
import type { ArticleType } from '@/types';
import { formatToYMD } from '@/utils/formatDate/formatToYMD';
import Image from 'next/image';
import DoubleArrow from '@/assets/icons/DoubleArrow.svg';
import Link from 'next/link';

const TodayTab = async () => {
  const articleApiData = await getMainPageArticleData();
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
        <span className='text-darkgrey text-h2'>{articleApiData.length}개의 인사이트가 도착했어요</span>
      </div>
      <div className='flex flex-col gap-6'>
        {articleApiData.map(article => (
          <div key={article.id} className='flex flex-col gap-3'>
            <Chip text={article.type} />
            <ArticleCard key={article.id} {...article} isToday={true} currentTab='today' />
          </div>
        ))}
      </div>
      <Link href='#article1' className='flex flex-row justify-center w-full gap-1 cursor-pointer text-darkgrey'>
        첫 번째부터 읽기
        <Image className='p-1.5' src={DoubleArrow} width={24} height={24} alt='Scroll Down' />
      </Link>
    </>
  );
};
export default TodayTab;

const getMainPageArticleData = async (): Promise<ArticleType[]> => {
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
      url: '/article/2',
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
      url: '/article/3',
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
