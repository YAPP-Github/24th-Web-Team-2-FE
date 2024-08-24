import type { PropsWithChildren } from 'react';
import ReactQueryProviders from '@/api/queryClient';
import '@/styles/tailwind.css';

export const metadata = {
  metadataBase: new URL('https://inspomail.club'),
  title: 'InspoMailClub',
  description: 'Your Daily Insight Source',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'InspoMailClub',
      },
    ],
  },
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
