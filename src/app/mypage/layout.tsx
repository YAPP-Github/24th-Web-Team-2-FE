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
                <Link href='/setting'>설정</Link>
                <Link href='/contact'>문의하기</Link>
                <div className='flex flex-row gap-4'>
                  <Link
                    href='/privacy' // Link to Privacy Policy
                    className='underline decoration-black underline-offset-2'
                  >
                    이용 약관
                  </Link>
                  <Link
                    href='/terms' // Link to Terms of Service
                    className='underline decoration-black underline-offset-2'
                  >
                    개인정보 처리방침
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
