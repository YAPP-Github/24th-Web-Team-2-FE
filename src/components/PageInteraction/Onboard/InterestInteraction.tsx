'use client';

import { useInterestMutation } from '@/api/hooks/useInterestMutation';
import { OnboardButton } from '@/components/OnboardButton';
import type { Interest } from '@/types/onboard';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardHeader from '@/components/Header/OnboardHeader';

interface InterestInteractionProps {
  userName: string;
  interestList: Interest[];
}
const InterestInteraction = ({ userName, interestList }: InterestInteractionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const isReady = selectedCategory.length > 0;
  const router = useRouter();

  const interestMutation = useInterestMutation();

  const handleCategoryClick = (category: string) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(prev => prev.filter(item => item !== category));
      return;
    } else {
      setSelectedCategory(prev => [...prev, category]);
    }
  };

  const handleConfirmBtnClick = () => {
    interestMutation.mutate(
      { interestList: selectedCategory },
      {
        onSuccess: () => router.push('/main'),
      },
    );
  };

  return (
    <>
      <OnboardHeader isBtn isReady={isReady} onClick={handleConfirmBtnClick} />
      <div className='flex flex-col items-center justify-start w-full h-full gap-10 pt-12'>
        <span className='flex flex-col items-center gap-2'>
          <h1 className='text-black text-h1'>{userName}님, 관심 있는 분야를 선택해주세요</h1>
          <div className='text-body3'>맞춤형 인사이트 제공을 위해 ‘1개 이상’ 선택해주세요.</div>
        </span>
        <span className='grid grid-flow-row grid-cols-3 gap-3'>
          {interestList.map(({ id, interest }) => {
            return (
              <OnboardButton
                key={id}
                type='category'
                text={interest}
                isActivated={selectedCategory.includes(interest)}
                onClick={() => handleCategoryClick(interest)}
              />
            );
          })}
        </span>

        <span className='flex flex-col items-center gap-4'>
          {selectedCategory.length > 0 && (
            <span className='text-caption'>
              <span className='text-blue'>
                {selectedCategory
                  .map((category: string) => `'${interestList.find(il => il.interest === category)?.desc}'`)
                  .join(', ')}
              </span>
              <span> 소식을 메일로 받아보세요</span>
            </span>
          )}
        </span>
      </div>
    </>
  );
};

export default InterestInteraction;
