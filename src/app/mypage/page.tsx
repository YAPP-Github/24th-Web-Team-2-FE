import type { UserDataType, UserDataTypes } from '@/types';
import Link from 'next/link';
import { GET } from '@/network';

const MyPage = async () => {
  //TODO: 추후 로그인 로직 완성 후 주석 교체
  const userData: UserDataTypes = await getUserData();
  console.log(userData);
  // const userData = cookies().get('userData');

  return (
    <div className='flex flex-col gap-8 w-articleCard'>
      <div className='flex flex-col'>
        <div className='relative w-full aspect-[792/216] bg-[#E1F1FD]'>
          <div className='absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-white' />
        </div>
        <div className='text-xl font-bold -bottom-6'>{userData?.username}</div>
      </div>
      <div className='flex flex-col w-full gap-8 pl-4 text-btn1'>
        <Link
          className='py-4 font-bold w-fit'
          href='/mypage/subscribe' // Link to Subscribe Management Page
        >
          뉴스레터 구독 관리
        </Link>
        <Link
          href='/logout' // Link to Logout
          className='flex flex-col gap-2 py-4 font-bold w-fit'
        >
          로그아웃
          <span className='font-normal text-body2 text-darkgrey'>다시 로그인 할 때까지 계정이 비활성화됩니다.</span>
        </Link>
        <Link href='/mypage' className='flex flex-col gap-2 py-4 font-bold w-fit text-darkgrey'>
          회원 탈퇴
          <span className='font-normal text-body2'>개인 정보 및 설정이 모두 영구적으로 삭제됩니다</span>
        </Link>
      </div>
    </div>
  );
};

export default MyPage;

// TODO: 추후 로그인 로직 완성 후 아래 제거
const getUserData = async () => {
  const response = await GET('/users');
  console.log(response);
  return response.data;
};
