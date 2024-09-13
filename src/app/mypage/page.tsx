'use client';

import Link from 'next/link';
import { useProfileQuery, usewithdrawalMutation } from '@/api/hooks/useFetchProfileQuery';

const MyPage = () => {
  const { data: userData } = useProfileQuery();
  const withdrawalMutation = usewithdrawalMutation();

  const handleWithdrawal = () => {
    withdrawalMutation.mutate(null, {
      onSuccess: () => {
        alert('회원 탈퇴가 완료되었습니다.');
        window.location.href = '/';
      },
      onError: () => {
        alert('회원 탈퇴에 실패했습니다.\n관리자에게 문의하세요.');
        window.open('mailto:thenewhedwig@gmail.com', '_blank');
      },
    });
  };

  const handleLogout = () => {
    document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/';
  };

  return (
    <div className='flex flex-col gap-8 w-articleCard'>
      <div className='flex flex-col'>
        <div className='relative w-full aspect-[792/216] bg-[#E1F1FD]'>
          <div className='absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-white' />
        </div>
        <div className='text-xl font-bold -bottom-6'>{userData?.username}</div>
      </div>
      <div className='flex flex-col w-full pl-4 gap-8 text-btn1'>
        <Link
          className='py-4 font-bold w-fit'
          href='/mypage/subscribe' // Link to Subscribe Management Page
        >
          뉴스레터 구독 관리
        </Link>
        <div role='button' onClick={handleLogout} className='flex flex-col py-4 font-bold gap-2 w-fit'>
          로그아웃
          <span className='font-normal text-body2 text-darkgrey'>다시 로그인 할 때까지 계정이 비활성화됩니다.</span>
        </div>
        <div
          role='button'
          onClick={handleWithdrawal}
          className='flex flex-col py-4 font-bold gap-2 w-fit text-darkgrey'
        >
          회원 탈퇴
          <span className='font-normal text-body2'>개인 정보 및 설정이 모두 영구적으로 삭제됩니다</span>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
