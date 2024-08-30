import DomainListWithSubscribeButton from '@/components/Domain/DomainListWithSubscribeButton';
import { DomainType } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const RecommendArea = () => {
  const [recommendDomainData, setRecommendDomainData] = useState<DomainType[]>([]);

  const fetchData = async () => {
    const data = [
      {
        id: 'randomString111',
        name: '요즘IT',
        profile: 'https://picsum.photos/48',
        type: 'IT/테크',
        isSubscribed: false,
      },
      {
        id: 'randomString112',
        name: '요즘IT',
        profile: 'https://picsum.photos/48',
        type: 'IT/테크',
        isSubscribed: false,
      },
      {
        id: 'randomString113',
        name: '요즘IT',
        profile: 'https://picsum.photos/48',
        type: 'IT/테크',
        isSubscribed: false,
      },
    ];
    return data;
  };

  useEffect(() => {
    // 임시로 unknown 변환(api로 받아올때 바꿔야해서)
    fetchData().then(data => setRecommendDomainData(data as unknown as DomainType[]));
  }, []);

  return (
    <div className='flex flex-col gap-3 min-w-domainCard'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col text-black gap-1'>
          <span className='text-body3'>채현님이 놓치고 있는 뉴스레터</span>
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
        {recommendDomainData.map((domain, index: number) => (
          <div
            key={index}
            className={`${index === recommendDomainData.length - 1 ? 'border-b-white' : 'border-b-lightgrey'} border-b`}
          >
            <DomainListWithSubscribeButton domainData={domain} isSubscribed={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendArea;
