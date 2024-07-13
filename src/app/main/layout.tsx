import type { Metadata } from 'next';
import MSWComponent from '@/mocks/MSWWrapper';
import MainPageHeader from '@/components/Header/MainPageHeader';

export const metadata: Metadata = {
  title: 'Inspo Mail Club',
  description: 'TODO: FIX DESCRIPTION',
};

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MSWComponent>
      <MainPageHeader />
      <div className='flex justify-center w-full h-full mt-12'>{children}</div>
    </MSWComponent>
  );
}
