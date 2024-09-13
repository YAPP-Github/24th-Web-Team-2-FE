import DomainListItem from '@/components/Domain/DomainListItem';
import AlternateListTap from '@/components/ListTap/AlternateListTap';
import { GET } from '@/network';
import RightFoldIcon from '@/assets/icons/RightFoldIcon.svg';
import Image from 'next/image';

interface SubscribeDataType {
  name: string;
  address: string;
}

interface SubscriptionResponseType {
  subscriptions: SubscribeDataType[];
}

const SubscribePage = async () => {
  const data: SubscriptionResponseType = await getSubscribeList();

  return (
    <div className='flex flex-col gap-11 w-articleCard pt-[7.625rem]'>
      <div className='flex flex-col gap-2'>
        <span className='flex flex-row text-sm font-medium gap-1 text-darkgrey'>
          마이페이지
          <Image src={RightFoldIcon} alt='RightFoldIcon' width={18} height={18} />
        </span>
        <span className='text-lg font-bold'>뉴스레터 구독 관리</span>
      </div>
      <div className='flex flex-col gap-4'>
        <AlternateListTap tapName='뉴스레터 구독 목록' tapCnt={20} />
        <div className='flex flex-col max-w-max_domainCard'>
          {data.subscriptions.map(subscribe => (
            <DomainListItem key={subscribe.name} name={subscribe.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;

const getSubscribeList = async () => {
  const response = await GET('/inbox/subscriptions');

  return response;
};
