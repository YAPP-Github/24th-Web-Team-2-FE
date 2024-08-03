import type { Metadata } from 'next';
import '@/styles/tailwind.css';
import ReactQueryProviders from '@/api/queryClient';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Inspo Mail Club',
  description: 'TODO: FIX DESCRIPTION',
};

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='ko'>
      <body className='flex flex-col items-center w-full'>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
