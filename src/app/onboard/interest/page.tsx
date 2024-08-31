import { useProfileQuery } from '@/api/hooks/useFetchProfileQuery';
import InterestInteraction from '@/components/PageInteraction/Onboard/InterestInteraction';

const Interest = async () => {
  const userName = useProfileQuery().data?.username!;

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
    <>
      <InterestInteraction userName={userName} interestList={interestList} />
    </>
  );
};

export default Interest;
