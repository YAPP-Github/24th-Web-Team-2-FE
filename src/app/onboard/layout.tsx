import type { Metadata } from 'next';
import MSWComponent from '@/mocks/MSWWrapper';
import '@/styles/tailwind.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Inspo Mail Club',
  description: 'TODO: FIX DESCRIPTION',
};

export default function OnBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MSWComponent>
        <Header isMain={false} />
        {children}
      </MSWComponent>
    </div>
  );
}
