import { Chip } from '@/components/Chip';
import DomainListItem from '@/components/Domain/DomainListItem';
import SubscribeButton from '@/components/SubscribeButton';
import Image from 'next/image';

const RecommendArea = async () => {
  const recommendDomainData = await getRecommendDomainData();

  return (
    <div className='flex flex-col gap-3 min-w-domainCard'>
      <div className='flex flex-col'>
        <span className='text-body3'>채현님이 놓치고 있는 뉴스레터</span>
        <span className='text-caption text-darkgrey'>더 많은 인사이트를 얻으세요</span>
      </div>
      <div className='flex flex-col'>
        {recommendDomainData.map((domain, index) => (
          <div
            key={index}
            className={`${index === recommendDomainData.length - 1 ? 'border-b-white' : 'border-b-lightgrey'} border-b`}
          >
            <DomainListItem domainData={domain} isSubscribed={domain.isSubscribed} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendArea;

const getRecommendDomainData = async () => {
  return [
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
};
