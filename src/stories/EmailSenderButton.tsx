import CheckIcon from '@/assets/icons/CheckIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import PlusIcon from '@/assets/icons/PlusIcon';
import { pallete } from '@/styles/colors';

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

const ChildButton = ({
  type,
  isActivated,
  onClick,
  i,
  C,
}: {
  type: 'spam' | 'subscribe';
  isActivated: boolean;
  onClick?: () => void;
}) => {
  if (type === 'subscribe') {
    return (
      <button
        className={`h-full items-center flex flex-row gap-1 shrink-0 ${isActivated ? 'text-blue' : 'text-darkgrey'}`}
        onClick={onClick}
      >
        {isActivated ? <CheckIcon width={24} fill={pallete.blue} /> : <PlusIcon width={24} fill={pallete.darkgrey} />}
        <span className='w-full text-caption'>{isActivated ? '등록 완료' : '등록'}</span>
      </button>
    );
  } else {
    return (
      <button
        className={`h-full items-center flex flex-row gap-1 shrink-0 ${isActivated ? 'text-darkgrey' : 'text-red'}`}
        onClick={onClick}
      >
        {isActivated ? <CloseIcon width={24} fill={pallete.darkgrey} /> : <PlusIcon width={24} fill={pallete.red} />}
        <span className='w-full text-caption'>{isActivated ? '스팸 해제' : '스팸'}</span>
      </button>
    );
  }
};

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
            {/* @우찬 TAG Button 따로 빼야하는지 추후 논의 필요 */}
            <span
              className={`${isActivated ? 'border-black' : 'border-darkgrey'} px-2 border rounded-3xl text-caption`}
            >
              {tag}
            </span>
          </span>
          <span className='text-caption'>{email}</span>
        </div>
      </div>
      <ChildButton type={type} isActivated={isActivated} onClick={onClick} />
    </div>
  );
};
