import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import ReactQueryProviders from '@/api/queryClient';
import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: 'InspoMailClub',
  description: 'Your Daily Insight Source',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='ko'>
      <body className='flex flex-col items-center w-full'>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
