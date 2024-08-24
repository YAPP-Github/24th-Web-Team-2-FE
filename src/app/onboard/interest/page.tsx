import { OnboardButton } from '@/components/OnboardButton';
import { getInterestList } from '@/api/onboard';
import InterestInteraction from '@/components/PageInteraction/Onboard/InterestInteraction';

const Interest = async () => {
  const userName = '채현';
  const interestList = await getInterestList();

  return (
    <div className='flex flex-col items-center justify-start w-full h-full gap-10'>
      <span className='flex flex-col items-center gap-2'>
        <h1 className='text-black text-h1'>{userName}님, 관심 있는 분야를 선택해주세요</h1>
        <div className='text-body3'>맞춤형 인사이트 제공을 위해 ‘1개 이상’ 선택해주세요.</div>
      </span>

      <InterestInteraction interestList={interestList} />
    </div>
  );
};

export default Interest;
