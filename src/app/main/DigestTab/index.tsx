'use client';

import type { ArticleType } from '@/types';
import TopSection from './TopSection';
import { useEffect, useState } from 'react';
import ArticleCard from '@/components/Article/ArticleCard';
import RecommendArea from '../TodayTab/RecommendArea';

const DigestTab = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'unread'>('unread');
  const [articleData, setArticleData] = useState<ArticleType[]>([]);

  const fetchData = async () => {
    const data = [
      {
        id: 'randomString111',
        title: '국가안전보장회의',
        url: '/article/1',
        type: 'IT / 테크',
        content:
          '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
        date: '2024-07-13',
        thumbnail: 'https://picsum.photos/156',
        isRead: false,
        from: {
          domain: 'official@git',
          profile: 'https://picsum.photos/36',
        },
      },
      {
        id: 'randomString112',
        title: '국가안전보장회의',
        url: '/article/2',
        type: 'IT / 테크',
        content:
          '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
        date: '2024-07-13',
        thumbnail: 'https://picsum.photos/156',
        isRead: false,
        from: {
          domain: 'official@git',
          profile: 'https://picsum.photos/36',
        },
      },
      {
        id: 'randomString113',
        title: '국가안전보장회의',
        url: '/article/3',
        type: '시사',
        content:
          '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
        date: '2024-07-13',
        thumbnail: 'https://picsum.photos/156',
        isRead: false,
        from: {
          domain: 'official@git',
          profile: 'https://picsum.photos/36',
        },
      },
      {
        id: 'randomString114',
        title: '국가안전보장회의',
        url: '/article/4',
        type: '시사',
        content:
          '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
        date: '2024-07-13',
        thumbnail: 'https://picsum.photos/156',
        isRead: false,
        from: {
          domain: 'official@git',
          profile: 'https://picsum.photos/36',
        },
      },
      {
        id: 'randomString115',
        title: '국가안전보장회의',
        url: '/article/5',
        type: '시사',
        content:
          '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
        date: '2024-07-13',
        thumbnail: 'https://picsum.photos/156',
        isRead: false,
        from: {
          domain: 'official@git',
          profile: 'https://picsum.photos/36',
        },
      },
      {
        id: 'randomString116',
        title: '국가안전보장회의',
        url: '/article/6',
        type: '시사',
        content:
          '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
        date: '2024-07-13',
        thumbnail: 'https://picsum.photos/156',
        isRead: false,
        from: {
          domain: 'official@git',
          profile: 'https://picsum.photos/36',
        },
      },
    ];
    return data;
  };

  useEffect(() => {
    fetchData().then(data => setArticleData(data));
  }, []);

  return (
    <div className='flex flex-row w-full h-full gap-16'>
      <div className='flex flex-col pt-3 gap-3'>
        <TopSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {articleData.map(article => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <div className='sticky top-0 pt-9 h-fit'>
        <RecommendArea />
      </div>
    </div>
  );
};

export default DigestTab;
