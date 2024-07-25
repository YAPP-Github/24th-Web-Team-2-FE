import { Chip } from '@/components/Chip';
import SubscribeButton from '@/components/SubscribeButton';
import Image from 'next/image';

const RecommendArea = async () => {
  const recommendBrandData = await getRecommendBrandData();

  return (
    <div className='flex flex-col gap-3 w-brandCard'>
      <div className='flex flex-col'>
        <span className='text-body3'>채현님이 놓치고 있는 뉴스레터</span>
        <span className='text-caption text-darkgrey'>더 많은 인사이트를 얻으세요</span>
      </div>
      <div className='flex flex-col'>
        {recommendBrandData.map((brand, index) => (
          <div
            key={brand.id}
            className={`${index !== recommendBrandData.length - 1 && 'border-b border-lightgrey'} flex flex-row justify-between w-full py-3`}
          >
            <span className='flex flex-row items-center gap-3'>
              <Image
                src={brand.thumbnail}
                alt={`thumbnail-${brand.brandName}`}
                width={48}
                height={48}
                className='rounded-full'
              />
              <span className='flex flex-row gap-1 h-fit'>
                <span className='text-body3'>{brand.brandName}</span>
                <Chip text={brand.type} />
              </span>
            </span>
            <span className='py-2'>
              <SubscribeButton isSubscribed={brand.subscribed} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendArea;

const getRecommendBrandData = async () => {
  return [
    {
      id: 'randomString111',
      brandName: '요즘IT',
      thumbnail: 'https://picsum.photos/48',
      type: 'IT/테크',
      subscribed: false,
    },
    {
      id: 'randomString112',
      brandName: '요즘IT',
      thumbnail: 'https://picsum.photos/48',
      type: 'IT/테크',
      subscribed: false,
    },
    {
      id: 'randomString113',
      brandName: '요즘IT',
      thumbnail: 'https://picsum.photos/48',
      type: 'IT/테크',
      subscribed: false,
    },
  ];
};
