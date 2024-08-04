'use client';

import InterestInteraction from '@/components/PageInteraction/Onboard/InterestInteraction';
import { useProfileData } from '@/api/profile';
import { Suspense } from 'react';

const Interest = () => {
  const profileData = useProfileData();
  const userName = profileData.data ? profileData.data.username : '';

  return (
    <div className='flex flex-col items-center justify-start w-full h-full gap-10'>
      <span className='flex flex-col items-center gap-2'>
        <h1 className='text-black text-h1'>{userName}님, 관심 있는 분야를 선택해주세요</h1>
        <div className='text-body3'>맞춤형 인사이트 제공을 위해 ‘1개 이상’ 선택해주세요.</div>
      </span>

      {/* 로딩스피너 하나 있어도 괜찮을것같은데 어떤가요 */}
      <Suspense fallback={<div>Loading...</div>}>
        <InterestInteraction />
      </Suspense>
    </div>
  );
};

export default Interest;
