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

  //TODO: 구독 버튼 클릭 시 구독 페이지로 이동 로직 추가
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
          <span className='relative w-12 h-12 rounded-full'>
            <Image
              src={domainData.thumbnailImage}
              alt={`thumbnail-${domainData.name}`}
              fill
              className='object-cover rounded-full'
            />
          </span>
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
