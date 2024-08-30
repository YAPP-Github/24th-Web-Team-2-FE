import { Chip } from '@/components/Chip';
import { Checkbox } from '@/components/Checkbox';

interface EmailSenderButtonProps {
  title: string;
  onClick?: () => void;
  domain: string;
  type: 'spam' | 'subscribe';
  isActivated: boolean;
  setIsActivated: (value: boolean) => void;
}

export const EmailSenderButton = ({
  title,
  onClick,
  domain,
  type,
  isActivated,
  setIsActivated,
}: EmailSenderButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActivated(!isActivated);
  };

  return (
    <div
      role='button'
      className={`${isActivated ? (type === 'subscribe' ? 'border-blue bg-[#E1F1FD]' : 'border-red') : 'border-lightgrey'} border w-emailSenderButton h-16 py-3 px-4 gap-3 flex justify-between items-center rounded-smaller shrink-0`}
      onClick={onClick}
    >
      <div className={`${isActivated ? 'text-blue' : 'text-darkgrey'} flex flex-col w-full text-body1`}>
        <span className={`overflow-hidden break-all whitespace-nowrap text-ellipsis`}>{title}</span>
        <span className='text-caption'>{domain}</span>
      </div>
      <Checkbox checked={isActivated} onClick={handleClick} />
    </div>
  );
};
