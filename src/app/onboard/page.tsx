import GoogleIcon from '@/assets/images/googleLogin.svg';
import Image from 'next/image';
import Link from 'next/link';
import { GOOGLE_AUTH_API_URL } from '@/utils/constants/api/api';
import Onboard1 from '@/assets/images/Onboard_1.svg';
import Onboard2 from '@/assets/images/Onboard_2.svg';
import Onboard3 from '@/assets/images/Onboard_3.svg';
import Onboard4 from '@/assets/images/Onboard_4.svg';
import Onboard5 from '@/assets/images/Onboard_5.svg';
import Onboard6 from '@/assets/images/Onboard_6.svg';
import OnboardHeader from '@/components/Header/OnboardHeader';

interface CardProps {
  title: string;
  description: string;
  Icon: HTMLImageElement;
  bgColor: string;
}

const CardComponent = ({ title, description, Icon, bgColor }: CardProps) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='w-[15rem] h-[15rem] shrink-0 flex flex-col gap-3 p-6 rounded-2xl hover:brightness-[0.88] cursor-pointer'
    >
      <Image src={Icon} alt='service icon' width={100} height={100} className='rounded-lg' />
      <div className='flex flex-col'>
        <span className='break-words whitespace-pre-wrap text-h3'>{title}</span>
        <span className='text-body2'>{description}</span>
      </div>
    </div>
  );
};

const CardData: CardProps[] = [
  {
    title: 'Gmail에서\n뉴스레터만 뽑아보기',
    description: '원하는 뉴스레터만 골라 읽으세요',
    Icon: Onboard1,
    bgColor: '#FFFDEB',
  },
  {
    title: '오늘 도착한\n뉴스레터만 모아보기',
    description: '오늘의 인사이트를 충전하세요',
    Icon: Onboard2,
    bgColor: '#FCE4E5',
  },
  {
    title: '새로운 뉴스레터\n1초 만에 바로 구독하기',
    description: '관심 분야의 뉴스레터를 탐색하세요',
    Icon: Onboard3,
    bgColor: '#EAFBCC',
  },
  {
    title: '그룹을 만들어\n깔끔히 관리하기',
    description: '뉴스레터를 주제별로 모아보세요',
    Icon: Onboard4,
    bgColor: '#E1F1FD',
  },
  {
    title: '아직 안 읽은\n뉴스레터 확인하기',
    description: '중요한 뉴스레터 놓치지 마세요',
    Icon: Onboard5,
    bgColor: '#FCEBFB',
  },
  {
    title: '필요 없는 뉴스레터\n1초 만에 삭제하기',
    description: '메일함을 쉽게 정리하세요',
    Icon: Onboard6,
    bgColor: '#FFF6C6',
  },
];

const OnBoard = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <OnboardHeader isBtn={false} />
      <div className='flex flex-col items-center gap-10 mb-[3.125rem] pt-12'>
        <h1 className='flex text-h2'>반가워요! 구글 로그인으로 인스포메일클럽을 시작해보세요</h1>
        <div className='grid grid-cols-3 gap-x-3 gap-y-4'>
          {CardData.map((card, index) => (
            <CardComponent key={index} {...card} />
          ))}
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Link href={GOOGLE_AUTH_API_URL}>
            <Image className='cursor-pointer' src={GoogleIcon} alt='google login' width={320} height={56} />
          </Link>
          <div className='inline text-black text-caption'>
            <span className='text-blue'>평소 뉴스레터를 구독하는 Google 계정</span>으로 로그인해주세요
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnBoard;
