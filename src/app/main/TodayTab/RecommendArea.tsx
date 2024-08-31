'use client';

import { useProfileQuery } from '@/api/hooks/useFetchProfileQuery';
import { useFetchSubscriptionListQuery } from '@/api/hooks/useFetchSubscriptionListQuery';
import { useSubscribtionMutation } from '@/api/hooks/useSubscribtionMutation';
import DomainListWithSubscribeButton from '@/components/Domain/DomainListWithSubscribeButton';
import Link from 'next/link';

const RecommendArea = () => {
  const { data } = useFetchSubscriptionListQuery();
  const { data: profileData } = useProfileQuery();

  return (
    <div className='flex flex-col gap-3 min-w-domainCard'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col text-black gap-1'>
          <span className='text-body3'>{profileData?.username}님이 놓치고 있는 뉴스레터</span>
          <span className='text-caption text-darkgrey'>더 많은 인사이트를 얻으세요</span>
        </div>
        <Link
          href={{
            pathname: '/main',
            query: { tab: 'search' },
          }}
          className='text-blue text-body2'
        >
          더보기
        </Link>
      </div>
      <div className='flex flex-col'>
        {data?.subscriptions.map((domain, index: number) => (
          <div
            key={index}
            className={`${index === data.subscriptions.length - 1 ? 'border-b-white' : 'border-b-lightgrey'} border-b`}
          >
            <DomainListWithSubscribeButton domainData={domain} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendArea;
