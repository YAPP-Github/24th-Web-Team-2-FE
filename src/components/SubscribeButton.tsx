'use client';

import { useState } from 'react';

interface SubscribeButtonProps {
  isSubscribed: boolean;
  internalSubscribe?: boolean;
  onClick?: () => void;
}

const SubscribeButton = ({
  isSubscribed: initialIsSubscribed,
  internalSubscribe = false,
  onClick,
}: SubscribeButtonProps) => {
  const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleButtonClick = () => {
    setIsSubscribed(!isSubscribed);
    if (onClick) onClick();
  };

  return (
    <div
      className={`w-[4.5rem] py-1 h-fit rounded flex justify-center items-center cursor-pointer transition text-btn1 border border-blue ${isSubscribed ? 'text-blue' : 'bg-blue text-white'} ${isHovered && 'bg-blue text-white shadow-md shadow-blue'}`}
      role='button'
      onClick={handleButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isSubscribed
        ? isHovered
          ? '구독 해제'
          : '구독 중'
        : isHovered
          ? '구독하기'
          : internalSubscribe
            ? '바로 구독'
            : '구독'}
    </div>
  );
};

export default SubscribeButton;
