import Image from 'next/image';
import InstagramLogo from '@/assets/icons/InstagramLogo.svg';

const Footer = () => {
  return (
    <div className='w-full h-[35.5vh] flex pt-6 bg-black justify-center shrink-0'>
      <div className='flex flex-row gap-8 text-white text-body1-onboard'>
        {/* TODO: Link로 교체 */}
        <span>InspoMailClub 소개</span>
        <span>자주 묻는 질문</span>
        <span>비즈니스 문의</span>
        <span>개인정보보호정책</span>
        <span>서비스이용약관</span>
        <span>
          <Image width={24} height={24} src={InstagramLogo} alt='Instagram Link' />
        </span>
      </div>
    </div>
  );
};

export default Footer;
