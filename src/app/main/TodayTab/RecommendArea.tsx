import { Chip } from '@/components/Chip';
import DomainListItem from '@/components/Domain/DomainListItem';
import SubscribeButton from '@/components/SubscribeButton';
import { GET } from '@/network';
import { DomainType } from '@/types';
import Image from 'next/image';

const RecommendArea = async () => {
  const recommendDomainData: DomainType[] = await getRecommendDomainData();

  return (
    <div className='flex flex-col gap-3 min-w-domainCard'>
      <div className='flex flex-col'>
        <span className='text-body3'>채현님이 놓치고 있는 뉴스레터</span>
        <span className='text-caption text-darkgrey'>더 많은 인사이트를 얻으세요</span>
      </div>
      <div className='flex flex-col'>
        {recommendDomainData.map((domain, index: number) => (
          <div
            key={index}
            className={`${index === recommendDomainData.length - 1 ? 'border-b-white' : 'border-b-lightgrey'} border-b`}
          >
            <DomainListItem domainData={domain} isSubscribed={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendArea;

const getRecommendDomainData = async () => {
  const response = await GET('/domainRecommendList');
  return response.data;
};
