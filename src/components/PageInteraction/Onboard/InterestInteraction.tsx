'use client';

import { useInterestMutation } from '@/api/hooks/useInterestMutation';
import { OnboardButton } from '@/components/OnboardButton';
import type { Interest } from '@/types/onboard';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface InterestInteractionProps {
  interestList: Interest[];
}
const InterestInteraction = ({ interestList }: InterestInteractionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
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
        onSuccess: () => router.push('/onboard/emailList'), // TODO: 백엔드 개발 미완, 수정필요
      },
    );
  };

  return (
    <>
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
        <OnboardButton
          text='이렇게 선택할게요!'
          type='onboard'
          isActivated={selectedCategory.length > 0}
          onClick={handleConfirmBtnClick}
        />
      </span>
    </>
  );
};

export default InterestInteraction;
