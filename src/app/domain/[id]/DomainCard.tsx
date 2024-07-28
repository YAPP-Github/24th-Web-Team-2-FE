import { Chip } from '@/components/Chip';
import SubscribeButton from '@/components/SubscribeButton';
import type { DomainType } from '@/types/article';
import Image from 'next/image';
import Link from 'next/link';
import WebsiteIcon from '@/assets/icons/WebsiteIcon.svg';

interface DomainCardProps {
  domainData: DomainType;
  isSubscribed: boolean;
}

const DomainCard = ({ domainData, isSubscribed }: DomainCardProps) => {
  return (
    <div className='flex flex-col w-full gap-3'>
      <span className='relative w-20 aspect-square'>
        {/* TODO: Image에 적당한 placeholder 추가 */}
        <Image src={domainData.profile} alt={domainData.name} className='rounded-full' fill />
      </span>
      <div className='flex flex-row items-center justify-between w-full'>
        <span className='flex flex-col'>
          <span className='flex flex-row items-center gap-3'>
            <span className='text-h2'>{domainData.name}</span>
            <Chip text={domainData.type} />
          </span>
          <span className='text-body3'>{domainData.domain}</span>
        </span>
        <SubscribeButton isSubscribed={isSubscribed} />
      </div>
      <div className='w-full border-b border-lightgrey' />
      <div className='whitespace-pre-wrap text-body3'>{domainData.description}</div>
      <Link
        target='_blank'
        href={domainData.website}
        className='flex flex-row items-center gap-2 underline w-fit text-body3 decoration-black underline-offset-2'
      >
        Website
        <Image src={WebsiteIcon} alt='Website' width={14} height={14} />
      </Link>
    </div>
  );
};

export default DomainCard;
