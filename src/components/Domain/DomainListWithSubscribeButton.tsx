import { ProfileType } from '@/api/hooks/useFetchProfileQuery';
import { SubscriptionListType } from '@/api/hooks/useFetchSubscriptionListQuery';
import { useSubscribtionMutation } from '@/api/hooks/useSubscribtionMutation';
import { Chip } from '@/components/Chip';
import SubscribeButton from '@/components/SubscribeButton';
import type { DomainType } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface DomainListWithSubscribeButtonProps {
  domainData: SubscriptionListType;
}

const DomainListWithSubscribeButton = ({ domainData }: DomainListWithSubscribeButtonProps) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribtionMutation = useSubscribtionMutation();

  const handleSubscribe = (name: string, address: string) => {
    subscribtionMutation.mutate(
      {
        subscriptions: [{ name, address }],
      },
      {
        onSuccess: () => {
          setIsSubscribed(true);
        },
        onError: () => {
          setIsSubscribed(false);
        },
      },
    );
  };

  return (
    <div className='flex flex-row items-center justify-between w-full py-3'>
      <span className='flex flex-col'>
        <span className='flex flex-row items-center gap-3'>
          <Image
            src={domainData.thumbnailImage}
            alt={`thumbnail-${domainData.name}`}
            width={48}
            height={48}
            className='rounded-full'
          />
          <span className='text-body2'>{domainData.name}</span>
        </span>
      </span>
      <SubscribeButton
        onClick={() => handleSubscribe(domainData.name, domainData.address)}
        isSubscribed={isSubscribed}
      />
    </div>
  );
};
export default DomainListWithSubscribeButton;
