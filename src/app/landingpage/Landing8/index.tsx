import React, { useEffect, useRef } from 'react';
import useIntersectionObserver from '@/utils/hooks/useIntersectionObserver';
import CommentCard from './CommentCard';
import Marquee from 'react-fast-marquee';

export interface CardData {
  id: number;
  author: string;
  text: string;
  bgColor: string;
}

const cardFirstRow: CardData[] = [
  {
    id: 1,
    author: '윤인스포',
    text: '웹사이트의 디자인이 정말 깔끔하고 사용하기 편리해요. 시각적으로도 만족스러워 사용하면서 늘 즐거움을 느낍니다.',
    bgColor: '#EAFBCC',
  },
  {
    id: 2,
    author: '김인스포',
    text: '제가 여러 시간에 자주 사용하는 서비스입니다. 바쁜 일정에도 쉽게 빠르게 인사이트를 접할 수 있어서 좋아요.',
    bgColor: '#FCE4E5',
  },
  {
    id: 3,
    author: '박인스포',
    text: '뉴스레터 많이 구독하는 사람이라 정말 편하게 사용하고 있어요! 좋은 서비스 만들어 주셔서 감사해요. 최고입니다!',
    bgColor: '#E1F1FD',
  },
  {
    id: 4,
    author: '이인스포',
    text: '매일매일 새로운 인사이트를 얻는 재미가 쏠쏠해요!',
    bgColor: '#FFF6C6',
  },
  {
    id: 5,
    author: '박인스포',
    text: '다양한 카테고리로 뉴스레터를 구독하고 관리할 수 있어서 정말 만족스럽습니다. 뉴스레터를 읽는 시간이 훨씬 소중해진 느낌이에요!',
    bgColor: '#FCEBFB',
  },
];

const cardSecondRow: CardData[] = [
  {
    id: 6,
    author: '김인스포',
    text: '이런 뉴스레터 아침 씻다가 InspoMailClub 덕분에 그 유용한 기능이 좋아서 결정했어요!',
    bgColor: '#FCEBFB',
  },
  {
    id: 7,
    author: '윤인스포',
    text: '제 메일 주소를 그대로 사용해서 뉴스레터를 받을 수 있어서 정말 좋네요. 훌륭한 서비스 감사드립니다',
    bgColor: '#FFF6C6',
  },
  {
    id: 8,
    author: '이인스포',
    text: '항상 찾아 헤매던 서비스에요. 제가 사용해본 것 중 최고이 뉴스레터 서비스입니다. 응원해요!',
    bgColor: '#E1F1FD',
  },
  {
    id: 9,
    author: '김인스포',
    text: '이번엔 이 서비스를 사용해 봤는데 너무 좋았어요.',
    bgColor: '#FCE4E5',
  },
  {
    id: 10,
    author: '윤인스포',
    text: '뉴스레터 관리가 쉬워졌어요. 메일함에 쌓여 있던 뉴스레터들을 한 곳에서 모아볼 수 있고, 중요한 정보들을 놓치지 않고 챙겨볼 수 있어 정말 편리합니다.👍🏻',
    bgColor: '#EAFBCC',
  },
];

const Landing8: React.FC = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.8);
  return (
    <div
      id='7'
      ref={elementRef}
      className='flex flex-col items-center justify-center w-full gap-44 snap-start h-landingPageHeight shrink-0'
    >
      <div
        className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-100 transition flex flex-col items-center gap-3`}
      >
        <span className='text-h2-onboard'>InspoMailClub로 확 바뀐 뉴스레터 읽기</span>
        {/* TODO: Link로 교체 */}
        <span className='text-body2-onboard'>{`나도 후기 작성하러 가기->`}</span>
      </div>
      <div
        className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-500 transition relative flex flex-col w-full gap-6`}
      >
        <Marquee gradient={false} speed={40} style={{ gap: '2rem' }}>
          <div className='flex flex-row gap-8'>
            {cardFirstRow.map(card => (
              <CommentCard key={card.id} {...card} />
            ))}
          </div>
        </Marquee>
        <Marquee gradient={false} speed={40} direction='right' style={{ gap: '2rem' }}>
          <div className='flex flex-row gap-8'>
            {cardSecondRow.map(card => (
              <CommentCard key={card.id} {...card} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Landing8;
