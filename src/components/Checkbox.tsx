import { pallete } from '@/styles/colors';
import React, { useState } from 'react';

interface CheckboxProps {
  checked?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Checkbox = ({ checked = false, onClick }: CheckboxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const renderIcon = () => {
    if (checked && isHovered) {
      return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='24' height='24' rx='3' fill={pallete.blue} />
          <line x1='6' y1='12' x2='18' y2='12' stroke='white' strokeWidth='2' />
        </svg>
      );
    } else if ((checked && !isHovered) || (!checked && isHovered)) {
      return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='24' height='24' rx='3' fill={pallete.blue} />
          <path d='M6 12.7L10.293 17L18 9.293L16.586 7.879L10.293 14.172L7.414 11.293L6 12.7Z' fill='white' />
        </svg>
      );
    } else {
      return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='24' height='24' rx='3' fill='#f4f4f4' stroke='#DBDBDB' />
        </svg>
      );
    }
  };

  return (
    <div
      className='w-6 h-6 cursor-pointer'
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderIcon()}
    </div>
  );
};
