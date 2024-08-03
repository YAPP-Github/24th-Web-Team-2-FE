import LandingPageHeader from '@/components/Header/LandingPageHeader';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen'>
      <LandingPageHeader />
      landing page content
      <span className='transition-all animate-appear'>animated text</span>
    </main>
  );
}
