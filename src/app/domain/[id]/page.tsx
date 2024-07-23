import MainPageHeader from '@/components/Header/MainPageHeader';

const DomainPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='flex flex-col items-center w-full'>
      <MainPageHeader />
      <div className='flex flex-row gap-10 w-content '>
        <>{params.id}</>
      </div>
    </div>
  );
};

export default DomainPage;

export const getDomainPageData = async (id: string) => {
  return {
    domainData: {
      id: id,
      name: '뉴닉',
      type: '시사',
      domain: 'newneek@gmail.com',
      profile: 'https://picsum.photos/800',
      description:
        '우리가 시간이 없지, 세상이 안 궁금하냐!\n시사, 경제, 커리어 등 지식 정보부터 일상 속 사소한\n영감까지 자유롭게 이야기할 수 있는 플랫폼이에요.',
      website: 'https://newneek.co/',
    },
    isSubscribed: true,
  };
};
