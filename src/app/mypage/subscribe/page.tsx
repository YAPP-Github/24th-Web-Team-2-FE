import DomainListItem from '@/components/Domain/DomainListItem';
import AlternateListTap from '@/components/ListTap/AlternateListTap';
import ListItem from '@/components/ListTap/ListItem';
import SubscribeButton from '@/components/SubscribeButton';
import { GET } from '@/network';
import RightFoldIcon from '@/assets/icons/RightFoldIcon.svg';
import Image from 'next/image';

interface SubscribeDataType {
  id: string;
  name: string;
  type: string;
  profile: string;
}

const SubscribePage = async () => {
  const subscribeList: SubscribeDataType[] = await getSubscribeList();

  return (
    <div className='flex flex-col gap-11 w-articleCard pt-[7.625rem]'>
      <div className='flex flex-col gap-2'>
        <span className='flex flex-row gap-1 text-sm font-medium text-darkgrey'>
          마이페이지
          <Image src={RightFoldIcon} alt='RightFoldIcon' width={18} height={18} />
        </span>
        <span className='text-lg font-bold'>뉴스레터 구독 관리</span>
      </div>
      <div className='flex flex-col gap-4'>
        <AlternateListTap tapName='뉴스레터 구독 목록' tapCnt={20} />
        <div className='flex flex-col max-w-max_domainCard'>
          {subscribeList.map(subscribe => (
            <DomainListItem domainData={subscribe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;

const getSubscribeList = async () => {
  const response = await GET('/domainSubscribeList');
  return response.data;
};
