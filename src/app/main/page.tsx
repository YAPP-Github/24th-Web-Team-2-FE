'use client';

import type { pageProps } from '@/types/page';
import TodayTab from '@/app/main/TodayTab';
import DigestTab from '@/app/main/DigestTab';
import ArticleContent from '../article/[id]/ArticleContent';
import type { ArticleType } from '@/types';
import SearchTab from './SearchTab';
import { useEffect, useRef, useState } from 'react';
import { notFound } from 'next/navigation';
import { shallow } from 'zustand/shallow';
import { useFocusIdStore } from '../../utils/hooks/useFocusIdStore';
import { MailDataType, useUnreadQuery } from '@/api/hooks/useFetchMailQuery';

const MainPage = ({ searchParams }: pageProps) => {
  const currentTab = (searchParams.tab ?? 'today') as string;
  const containerRef = useRef<HTMLDivElement>(null);
  const setFocusId = useFocusIdStore(state => state.setFocusId, shallow);
  const [todayArticleData, setTodayArticleData] = useState<MailDataType[]>([]);

  const { data, isError } = useUnreadQuery({});

  useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const targetIndex = Number(entry.target.getAttribute('data-index'));
              setFocusId(targetIndex);
            }
          });
        },
        { threshold: 0.1 },
      );

      const boxes = containerRef.current.querySelectorAll('.content-box');
      console.log(containerRef.current);
      console.log(containerRef.current.getElementsByClassName('content-box'));
      boxes.forEach(box => observer.observe(box));

      return () => {
        boxes.forEach(box => observer.unobserve(box));
      };
    }
  }, [setFocusId]);

  useEffect(() => {
    const filteredData: MailDataType[] =
      data?.filter(d => {
        const today = new Date();
        const articleDate = new Date(d.date);
        return (
          articleDate.getFullYear() === today.getFullYear() &&
          articleDate.getMonth() === today.getMonth() &&
          articleDate.getDate() === today.getDate()
        );
      }) ?? [];

    setTodayArticleData(filteredData);
  }, [data]);

  useEffect(() => {
    if (isError) {
      // notFound();
    }
  }, [isError]);

  return (
    <div className='flex flex-col items-center w-full mb-10 gap-10'>
      {currentTab === 'today' ? (
        <>
          <TodayTab articleData={todayArticleData} isArticleArea={true} />
          <div className='flex flex-col w-full gap-20'>
            <div ref={containerRef}>
              {todayArticleData?.map((article, index) => (
                <div className='content-box' key={article.mailId} data-index={index}>
                  <ArticleContent mailData={article} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : currentTab === 'search' ? (
        <SearchTab />
      ) : currentTab === 'Digest' ? (
        <DigestTab />
      ) : (
        notFound()
      )}
    </div>
  );
};

export default MainPage;

const getMainPageArticleData = async (): Promise<ArticleType[]> => {
  // Mock 데이터
  const data = [
    {
      id: 'randomString111',
      title: '국가안전보장회의',
      url: '/article/1',
      type: 'IT/테크',
      content:
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다.',
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
      type: 'IT/테크',
      content:
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다.',
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
        '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다.',
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
