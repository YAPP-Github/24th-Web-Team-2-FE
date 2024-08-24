import Image from 'next/image';
import InstagramLogo from '@/assets/icons/InstagramLogo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full h-[35.5vh] flex pt-6 bg-black justify-center shrink-0'>
      <div className='flex flex-row text-white gap-8 text-body1-onboard h-fit'>
        {/* TODO: Link로 교체 */}
        <Link target='_blank' href=''>
          InspoMailClub 소개
        </Link>
        <Link target='_blank' href='https://standing-lift-8bd.notion.site/FAQ-08e9d1f9f21e4db9bd107a10cb2923ed?pvs=4'>
          자주 묻는 질문
        </Link>
        <Link target='_blank' href='mailto:thenewhedwig@gmail.com'>
          비즈니스 문의
        </Link>
        <Link target='_blank' href='https://standing-lift-8bd.notion.site/161372fadec848e9a6533d4ee1f4efa5?pvs=4'>
          개인정보보호정책
        </Link>
        <Link target='_blank' href='https://standing-lift-8bd.notion.site/74d694878a174139a8a5286ddb3d919c?pvs=4'>
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
