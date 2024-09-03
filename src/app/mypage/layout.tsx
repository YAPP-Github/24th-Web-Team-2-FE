import MainPageHeader from '@/components/Header/MainPageHeader';
import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import UserDataCard from '@/app/mypage/UserDataCard';

export default async function MypageLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <MainPageHeader />
      <div className='flex flex-col w-content'>
        <div className='flex justify-center w-full h-full'>
          <div className='flex flex-row gap-10 w-content'>
            {children}
            <div className='border-l border-lightgrey' />
            <div className='flex flex-col justify-between h-[calc(100vh-11.25rem)]'>
              <div className='pt-20'>
                <span className='w-full bg-red h-[200px]'>
                  <UserDataCard />
                </span>
              </div>
              <div className='flex flex-col gap-3 pb-6 text-caption'>
                <Link href='/mypage'>설정</Link>
                <Link href='http://pf.kakao.com/_xdxfaxoG' target='_blank'>
                  문의하기
                </Link>
                <div className='flex flex-row gap-4'>
                  <Link href='/terms-of-service'>이용 약관</Link>
                  <Link href='/privacy-policy'>개인정보 처리방침</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
