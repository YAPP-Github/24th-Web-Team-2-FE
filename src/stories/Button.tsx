import PlusIcon from '@/assets/icons/PlusIcon';

interface ButtonProps {
  /**
   * text to display
   */
  text: string;
  /**
   * Button state
   */
  isActivated?: boolean;
  size: 'big' | 'small';
  /**
   * Button color
   */
  color?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  ChildIcon?: React.ReactNode;
}

export const Button = ({ text, isActivated = true, size = 'big', color = 'blue', ChildIcon, onClick }: ButtonProps) => {
  return (
    <div
      role='button'
      className={`${size === 'big' ? (isActivated ? 'bg-black px-10 py-4' : 'bg-lightgrey px-10 py-4') : isActivated ? 'bg-white border-gradient px-6 py-2' : 'bg-background_grey border-none px-6 py-2'}`}
      onClick={onClick}
    >
      <div className='flex items-center justify-between w-full h-full'>
        <span
          className={`${size === 'big' ? 'text-white text-btn1' : isActivated ? 'text-black text-body3' : 'text-lightgrey text-body3'}`}
        >
          {text}
        </span>
        {ChildIcon && <span>{ChildIcon}</span>}
      </div>
    </div>
  );
};
