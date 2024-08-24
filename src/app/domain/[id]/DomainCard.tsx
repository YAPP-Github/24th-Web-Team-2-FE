import SubscribeButton from '@/components/SubscribeButton';
import type { DomainType } from '@/types/';
import Image from 'next/image';
import Link from 'next/link';
import WebsiteIcon from '@/assets/icons/WebsiteIcon.svg';

interface DomainCardProps {
  domainData: DomainType;
  isSubscribed: boolean;
}

const DomainCard = ({ domainData, isSubscribed }: DomainCardProps) => {
  return (
    <div className='flex flex-col w-[22.5rem] gap-3'>
      <span className='relative w-20 aspect-square'>
        {/* TODO: Image에 적당한 placeholder 추가 */}
        <Image src={domainData.profile} alt={domainData.name} className='rounded' fill />
      </span>
      <div className='flex flex-row items-center justify-between w-full'>
        <span className='flex flex-col'>
          <span className='flex flex-row items-center gap-3'>
            <span className='text-h3'>{domainData.newsLetter}</span>
          </span>
          <span className='text-caption text-darkgrey'>
            {domainData.name} • <span className='text-blue'>구독자 {domainData.subscriberCnt}명</span>
          </span>
        </span>
        <SubscribeButton isSubscribed={isSubscribed} />
      </div>
      <div className='whitespace-pre-wrap break-keep text-body2'>{domainData.description}</div>
      <Link
        target='_blank'
        href={domainData.website}
        className='flex flex-row items-center gap-2 text-blue w-fit text-btn1'
      >
        웹사이트 방문
        <Image src={WebsiteIcon} alt='Website' width={14} height={14} />
      </Link>
    </div>
  );
};

export default DomainCard;
