'use client';

import { OnboardButton } from '@/components/OnboardButton';
import type { Interest } from '@/types/onboard';
import { useState } from 'react';

interface InterestInteractionProps {
  interestList: Interest[];
}
const InterestInteraction = ({ interestList }: InterestInteractionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(prev => prev.filter(item => item !== category));
      return;
    } else {
      setSelectedCategory(prev => [...prev, category]);
    }
  };

  const handleConfirmBtnClick = () => {
    console.log('confirm button clicked with selected category: ', selectedCategory);
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
