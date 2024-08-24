import type { UserDataType } from '@/types';
import Link from 'next/link';
import { GET } from '@/network';

interface MyPageProps {
  userData: UserDataType;
}

const MyPage = async () => {
  //TODO: 추후 로그인 로직 완성 후 주석 교체
  const userData: UserDataType = await getUserData();
  // const userData = cookies().get('userData');

  return (
    <div className='flex flex-col gap-12 w-articleCard'>
      <div className='relative w-full aspect-[792/216] bg-blue'>
        <div className='absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-white' />
        <div className='absolute ml-4 -bottom-6 text-h1'>{userData?.name}</div>
      </div>
      <div className='flex flex-col w-full pl-4 gap-8 text-btn1'>
        <Link
          className='w-fit'
          href='/mypage/subscribe' // Link to Subscribe Management Page
        >
          뉴스레터 구독 관리
        </Link>
        <Link
          href='/logout' // Link to Logout
          className='flex flex-col gap-1 w-fit'
        >
          로그아웃
          <span className='text-caption'>다시 로그인 할 때까지 계정이 비활성화됩니다.</span>
        </Link>
        <Link
          href='/withdrawl' // Link to Withdrawal
          className='flex flex-col gap-1 w-fit text-darkgrey'
        >
          회원 탈퇴
          <span className='text-caption'>개인 정보 및 설정이 모두 영구적으로 삭제됩니다</span>
        </Link>
      </div>
    </div>
  );
};

export default MyPage;

// TODO: 추후 로그인 로직 완성 후 아래 제거
const getUserData = async () => {
  const response = await GET('/userData');
  return response.data;
};
