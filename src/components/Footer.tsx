import Image from 'next/image';
import InstagramLogo from '@/assets/icons/InstagramLogo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full h-[35.5vh] flex pt-6 bg-black justify-center shrink-0'>
      <div className='flex flex-row gap-8 text-white text-body1-onboard h-fit'>
        <Link target='_blank' href='https://standing-lift-8bd.notion.site/937d0c8aa7dc4a97b0519402d4cabd47'>
          InspoMailClub 소개
        </Link>
        <Link target='_blank' href='https://standing-lift-8bd.notion.site/FAQ-08e9d1f9f21e4db9bd107a10cb2923ed?pvs=4'>
          자주 묻는 질문
        </Link>
        <Link target='_blank' href='mailto:thenewhedwig@gmail.com'>
          비즈니스 문의
        </Link>
        <Link href='/privacy-policy' scroll={true}>
          개인정보보호정책
        </Link>
        <Link href='/terms-of-service' scroll={true}>
          서비스이용약관
        </Link>
        <Link target='_blank' href='https://www.instagram.com/inspomailclub/'>
          <Image width={24} height={24} src={InstagramLogo} alt='Instagram Link' />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
