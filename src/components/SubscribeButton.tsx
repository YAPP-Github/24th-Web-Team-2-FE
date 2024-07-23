'use client';

import { useState } from 'react';

interface SubscribeButtonProps {
  isSubscribed: boolean;
}

const SubscribeButton = ({ isSubscribed: initialIsSubscribed }: SubscribeButtonProps) => {
  const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleButtonClick = () => setIsSubscribed(!isSubscribed);

  return (
    <div
      className={`w-20 py-1 rounded flex justify-center items-center cursor-pointer transition text-btn1 border border-blue ${isSubscribed ? 'text-blue' : 'bg-blue text-white'} ${isHovered && 'bg-blue text-white shadow-md shadow-blue'}`}
      role='button'
      onClick={handleButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isSubscribed ? (isHovered ? '구독 해제' : '구독 중') : isHovered ? '구독하기' : '구독'}
    </div>
  );
};

export default SubscribeButton;
