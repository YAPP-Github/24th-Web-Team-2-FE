import type { Metadata } from 'next';

import '@/styles/tailwind.css';
import OnboardHeader from '@/components/Header/OnboardHeader';
import { PropsWithChildren } from 'react';
export const metadata: Metadata = {
  title: 'Inspo Mail Club',
  description: 'TODO: FIX DESCRIPTION',
};

export default function OnBoardLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <OnboardHeader />
      <div className='flex justify-center w-full h-full mt-12'>{children}</div>
    </>
  );
}
