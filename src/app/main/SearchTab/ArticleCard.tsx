import SubscribeButton from '@/components/SubscribeButton';
import Link from 'next/link';
import WebsiteIcon from '@/assets/icons/WebsiteIcon.svg';
import Image from 'next/image';
import { Newsletter } from '@/api/hooks/useSearchTabQuery';

interface ArticleCardProps {
  newsLetter: Newsletter;
}

const ArticleCard = ({ newsLetter }: ArticleCardProps) => {
  const content =
    '우리가 시간이 없지, 세상이 안 궁금하냐!\n시사, 경제, 커리어 등 지식 정보부터 일상 속 사소한 영감까지 자유롭게 이야기할 수 있는 플랫폼이에요.';
  return (
    <div className='w-[320px] flex flex-col gap-3 shrink-0'>
      {/* <span className='h-[200px] w-full bg-blue rounded-lg'></span> */}
      <Image src={newsLetter.contentLink} alt='뉴스레터 이미지' width={320} height={200} className='rounded-lg' />
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-col'>
          <span className='text-h3'>{newsLetter.name}</span>
          <span className='text-caption text-darkgrey'>{newsLetter.companyName} • 구독자 20명</span>
        </div>
        <SubscribeButton isSubscribed={false} internalSubscribe={true} />
      </div>
      <div className='whitespace-pre-wrap break-keep text-body2'>{content}</div>
      <Link href='/' className='flex flex-row items-center gap-1 text-blue text-btn1'>
        웹사이트 방문
        <Image src={WebsiteIcon} alt='웹사이트 방문' width={14} height={14} />
      </Link>
    </div>
  );
};

export default ArticleCard;
