import DomainListItem from '@/components/Domain/DomainListItem';
import AlternateListTap from '@/components/ListTap/AlternateListTap';
import ListItem from '@/components/ListTap/ListItem';
import SubscribeButton from '@/components/SubscribeButton';
import { GET } from '@/network';

interface SubscribeDataType {
  id: string;
  name: string;
  type: string;
  profile: string;
}

const SubscribePage = async () => {
  const subscribeList: SubscribeDataType[] = await getSubscribeList();

  return (
    <div className='flex flex-col gap-6 w-articleCard pt-[7.625rem]'>
      <div className='flex flex-col gap-2'>
        <span className='text-caption text-darkgrey'>{`마이페이지 >`}</span>
        <span className='text-h2'>뉴스레터 구독 관리</span>
        <span className='text-body3'>InspoMailClub에서 더 이상 읽고 싶지 않은 뉴스레터를 선택하세요</span>
      </div>
      <AlternateListTap tapName='발신인' tapCount={subscribeList.length} />
      <div className='flex flex-col max-w-max_domainCard'>
        {subscribeList.map(subscribe => (
          <DomainListItem domainData={subscribe} isSubscribed={true} />
        ))}
      </div>
    </div>
  );
};

export default SubscribePage;

const getSubscribeList = async () => {
  const response = await GET('/domainSubscribeList');
  return response.data;
};
