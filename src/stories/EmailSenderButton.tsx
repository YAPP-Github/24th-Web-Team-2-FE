import CheckIcon from '@/assets/icons/CheckIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import PlusIcon from '@/assets/icons/PlusIcon';
import { pallete } from '@/styles/colors';
import { Chip } from './Chip';
import { Checkbox } from './Checkbox';

interface EmailSenderButtonProps {
  ChildIcon: any;
  title: string;
  tag: string;
  email: string;
  onClick?: () => void;
  type: 'spam' | 'subscribe';
  isActivated: boolean;
  setIsActivated: (value: boolean) => void;
}

export const EmailSenderButton = ({
  title,
  tag,
  email,
  ChildIcon,
  onClick,
  type,
  isActivated,
  setIsActivated,
}: EmailSenderButtonProps) => {
  const handleClick = () => {
    setIsActivated(!isActivated);
  };

  return (
    <div
      role='button'
      className={`${isActivated ? (type === 'subscribe' ? 'border-blue' : 'border-red') : 'border-white'} border w-emailSenderButton max-h-20 py-4 px-6 flex justify-between items-center`}
      onClick={handleClick}
    >
      <div className='flex items-center w-full gap-4'>
        {ChildIcon}
        <div className={`${isActivated ? 'text-black' : 'text-darkgrey'} flex flex-col justify-between h-full`}>
          <span className='flex flex-row gap-1'>
            <span className='text-body3'>{title}</span>
            <Chip text={tag} isActivated={isActivated} />
          </span>
        </div>
      </div>
      <Checkbox checked={isActivated} onClick={handleClick} />
    </div>
  );
};
