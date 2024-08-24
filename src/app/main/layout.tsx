import MainListTap from '@/components/ListTap/MainListTap';
import MainPageHeader from '@/components/Header/MainPageHeader';

const tabData = {
  today: {
    name: '오늘의 인사이트',
  },
  search: {
    name: '탐색     🔍',
  },
  Digest: {
    name: 'Digest',
  },
};

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainPageHeader />
      <MainListTap tabData={tabData} />
      <div className='flex flex-col w-content'>
        <div className='flex justify-center w-full h-full'>{children}</div>
      </div>
    </>
  );
}
