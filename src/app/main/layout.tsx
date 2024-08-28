import MainListTap from '@/components/ListTap/MainListTap';
import MainPageHeader from '@/components/Header/MainPageHeader';
import { Suspense } from 'react';

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-col'>
      <MainPageHeader />
      <div className='flex flex-col items-center w-full'>
        <Suspense fallback={<div></div>}>
          <MainListTap />
        </Suspense>
        <div className='flex justify-center h-full w-content'>{children}</div>
      </div>
    </main>
  );
}
