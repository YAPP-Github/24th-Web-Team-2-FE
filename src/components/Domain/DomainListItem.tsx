import { Chip } from '@/components/Chip';
import SubscribeButton from '@/components/SubscribeButton';
import type { DomainType } from '@/types';
import Image from 'next/image';

type DomainDataforListItem = Omit<DomainType, 'description' | 'website' | 'domain'>;

interface DomainListItemProps {
  domainData: DomainDataforListItem;
  isSubscribed: boolean;
}

const DomainListItem = ({ domainData, isSubscribed }: DomainListItemProps) => {
  return (
    <div className='flex flex-row items-center justify-between w-full py-3'>
      <span className='flex flex-col'>
        <span className='flex flex-row items-center gap-3'>
          <Image
            src={domainData.profile}
            alt={`thumbnail-${domainData.name}`}
            width={48}
            height={48}
            className='rounded-full'
          />
          <span className='text-body3'>{domainData.name}</span>
          <Chip text={domainData.type} />
        </span>
      </span>
      <SubscribeButton isSubscribed={isSubscribed} />
    </div>
  );
};
export default DomainListItem;
