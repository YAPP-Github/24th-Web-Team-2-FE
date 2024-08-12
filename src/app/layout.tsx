import type { Metadata } from 'next';
import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: 'Inspo Mail Club',
  description: 'TODO: FIX DESCRIPTION',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='flex flex-col items-center w-full'>{children}</body>
    </html>
  );
}
