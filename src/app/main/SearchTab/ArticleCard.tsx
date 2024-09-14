import SubscribeButton from '@/components/SubscribeButton';
import Link from 'next/link';
import WebsiteIcon from '@/assets/icons/WebsiteIcon.svg';
import Image from 'next/image';
import { Newsletter } from '@/api/hooks/useSearchTabQuery';

interface ArticleCardProps {
  newsLetter: Newsletter;
}

const ArticleCard = ({ newsLetter }: ArticleCardProps) => {
  return (
    <div className='w-[320px] flex flex-col gap-3 shrink-0'>
      {/* <span className='h-[200px] w-full bg-blue rounded-lg'></span> */}
      <span className='w-[320px] h-[200px] relative rounded-lg'>
        <Image
          src={newsLetter.thumbnailImage}
          alt={`Thumbnail-${newsLetter.name}`}
          fill
          sizes='100%'
          className='object-cover'
        />
      </span>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-col'>
          <span className='text-h3'>{newsLetter.name}</span>
          <span className='text-caption text-darkgrey'>{newsLetter.companyName}</span>
        </div>
        <SubscribeButton
          isSubscribed={false}
          internalSubscribe={newsLetter.isAutomated}
          onClick={() => {
            window.open(newsLetter.subscriptionLink, '_blank');
          }}
        />
      </div>
      <div className='h-12 overflow-hidden whitespace-pre-wrap break-keep text-body2 line-clamp-2'>
        {newsLetter.content}
      </div>
      <Link
        href={newsLetter.contentLink}
        target='_blank'
        className='flex flex-row items-center gap-1 text-blue text-btn1'
      >
        웹사이트 방문
        <Image src={WebsiteIcon} alt='웹사이트 방문' width={14} height={14} />
      </Link>
    </div>
  );
};

export default ArticleCard;
