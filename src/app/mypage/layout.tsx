import MainPageHeader from '@/components/Header/MainPageHeader';
import { PropsWithChildren } from 'react';

export default async function MypageLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <MainPageHeader />
      <div className='flex flex-col w-content'>
        <div className='flex justify-center w-full h-full'>{children}</div>
      </div>
    </>
  );
}
