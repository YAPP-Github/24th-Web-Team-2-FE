import { getInterestList } from '@/api/onboard';
import InterestInteraction from '@/components/PageInteraction/Onboard/InterestInteraction';

const Interest = async () => {
  const userName = '채현';

  const interestList = [
    {
      id: 'randomstring1',
      interest: '스타트업',
      desc: '핵심 기업',
    },
    {
      id: 'randomstring2',
      interest: 'IT / 테크',
      desc: '최신 테크',
    },
    {
      id: 'randomstring3',
      interest: '디자인',
      desc: '디자인 영감',
    },
    {
      id: 'randomstring4',
      interest: '시사 / 경제',
      desc: '세상 돌아가는',
    },
    {
      id: 'randomstring5',
      interest: '트렌드',
      desc: '글로벌 트렌드',
    },
    {
      id: 'randomstring6',
      interest: '커리어',
      desc: '신규 채용',
    },
  ];

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
