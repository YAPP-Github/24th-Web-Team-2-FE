import PlusIcon from '@/assets/icons/PlusIcon';
import { useState } from 'react';

interface OnboardButtonProps {
  /**
   * text to display
   */
  text: string;
  /**
   * Button state
   */
  isActivated?: boolean;
  /**
   * Optional click handler
   */
  type: 'onboard' | 'category';
  onClick?: () => void;
}

export const OnboardButton = ({ text, isActivated = true, type, onClick }: OnboardButtonProps) => {
  const [ishovered, setIshovered] = useState(false);

  const buttonStyle = {
    onboard: {
      default: 'w-50 h-14',
      hover: 'bg-darkgrey',
      enabled: 'bg-black shadow-lg',
      disabled: 'bg-lightgrey',
      text: 'text-white text-btn1',
    },
    category: {
      default: 'w-40 h-12',
      hover: '',
      enabled: 'bg-white text-dark border-gradient_vertical',
      disabled: 'bg-background_grey text-darkgrey border-lightgrey border',
      text: 'text-body3',
    },
  };

  return (
    <div
      role='button'
      onClick={onClick}
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
      className={`${[buttonStyle[type].default, ishovered && buttonStyle[type].hover, isActivated ? buttonStyle[type].enabled : buttonStyle[type].disabled].join(' ')} flex justify-center items-center rounded`}
    >
      <span className={`${buttonStyle[type].text}`}>{text}</span>
    </div>
  );
};
