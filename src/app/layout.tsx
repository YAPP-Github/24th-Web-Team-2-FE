import type { Metadata } from 'next';
import MSWComponent from '@/mocks/MSWWrapper';
import '@/styles/tailwind.css';
import OnboardHeader from '@/components/Header/OnboardHeader';

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
      <body>
        <OnboardHeader />
        <MSWComponent>{children}</MSWComponent>
      </body>
    </html>
  );
}
