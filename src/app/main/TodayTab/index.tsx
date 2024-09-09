'use client';

import ArticleCard from '@/components/Article/ArticleCard';
import { formatToYMD } from '@/utils/formatDate/formatToYMD';
import Image from 'next/image';
import DoubleArrow from '@/assets/icons/DoubleArrow.svg';
import Link from 'next/link';
import ScrollNavigation from './ScrollNavigation';
import { MailDataType, useUnreadQuery } from '@/api/hooks/useFetchMailQuery';
import { useProfileQuery } from '@/api/hooks/useFetchProfileQuery';
import { useFocusIdStore } from '@/utils/hooks/useFocusIdStore';
import ArticleContent from '@/app/article/[id]/ArticleContent';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { shallow } from 'zustand/shallow';

const TodayTab = () => {
  const { data: userData } = useProfileQuery();
  const { data, isError, error, isFetched } = useUnreadQuery({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusId, setFocusId] = useFocusIdStore(state => [state.focusId, state.setFocusId], shallow);
  const [todayArticleData, setTodayArticleData] = useState<MailDataType[]>([]);
  const router = useRouter();
  const isArticleArea = focusId > 0;

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
    if (isError && error.response?.status === 403) {
      alert('로그인이 필요한 서비스입니다.');
      router.push('/');
    }
  }, [isError]);

  if (!todayArticleData.length && isFetched) return <div>No Today's Contents</div>;

  return isFetched && todayArticleData.length > 0 ? (
    <>
      <div className='flex flex-col items-center gap-3 mt-10'>
        <span className='text-blue text-body1'>{formatToYMD(new Date())}</span>
        <span className='text-center text-h1'>
          {userData?.username}님에게
          <br />
          오늘 도착한 메일이에요
        </span>
        <span className='text-darkgrey text-body1'>
          <span className='text-blue'>{todayArticleData.length}개의 인사이트</span>가 도착했어요
        </span>
      </div>
      <div className='flex flex-col gap-6'>
        {todayArticleData.map(article => (
          <div key={article.mailId} className='flex flex-col gap-3'>
            <ArticleCard key={article.mailId} {...article} isToday={true} currentTab='today' />
          </div>
        ))}
      </div>
      {isArticleArea ? (
        <Link href='/main' scroll={true} className={`fixed w-10 h-10 bottom-4 left-4 rounded-full bg-green z-[9999]`} />
      ) : (
        <Link
          href={`/main#${todayArticleData[0].mailId}`}
          scroll={true}
          className={`fixed -translate-x-1/2 cursor-pointer left-1/2 bottom-8 text-darkgrey z-[9999]`}
        >
          <div className={`flex flex-row justify-center w-full gap-1 text-darkgrey animate-bounce`}>
            첫 번째부터 읽기
            <Image className='p-1.5' src={DoubleArrow} width={24} height={24} alt='Scroll Down' />
          </div>
        </Link>
      )}
      <ScrollNavigation articleData={todayArticleData} />
      <div className='flex flex-col w-full gap-20'>
        <div ref={containerRef}>
          {todayArticleData?.map((article, index) => (
            <div className='content-box' key={article.mailId} data-index={index + 1}>
              <ArticleContent mailData={article} />
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <>Loading...</>
  );
};
export default TodayTab;
