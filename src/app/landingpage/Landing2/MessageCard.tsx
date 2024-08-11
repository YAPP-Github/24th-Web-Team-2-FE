import Image1 from '@/assets/images/Landing2_1.svg';
import Image2 from '@/assets/images/Landing2_2.svg';
import Image from 'next/image';

interface MessageCardProps {
  from: string;
  title: string;
  message: string;
  fill: boolean;
}
const MessageCard = ({ from, title, message, fill }: MessageCardProps) => {
  return (
    <div
      className={`${fill ? 'border-[#E1F1FD] bg-[#E1F1FD]' : 'border-lightgrey'} w-[55rem] h-[3.375rem] border border-lightgrey rounded-md flex flex-row gap-10 items-center justify-start p-4 -translate-x-1/2 text-[15px] font-normal`}
    >
      <div className='flex flex-row gap-4'>
        <Image src={Image2} alt='image2' />
        <Image src={Image1} alt='image1' />
        <span>{from}</span>
      </div>
      <div className='flex flex-row gap-1'>
        <span className='font-bold'>{title}</span>
        <span className='text-darkgrey'>- {message}</span>
      </div>
    </div>
  );
};
export default MessageCard;
