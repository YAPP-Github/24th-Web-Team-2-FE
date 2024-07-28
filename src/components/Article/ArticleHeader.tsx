import Image from 'next/image';
import { Chip } from '@/components/Chip';
import { formatToMonthDayKorean } from '@/utils/formatDate/formatToMonthDayKorean';

interface ArticleHeaderProps {
  isToday: boolean;
  title: string;
  type: string;
  date: string;
  from: {
    domain: string;
    profile: string;
  };
}

const ArticleHeader = ({ isToday, title, type, date, from }: ArticleHeaderProps) => {
  return (
    <div className='flex flex-col w-full gap-3 p-6 border-b border-b-lightgrey'>
      <p>
        {isToday && <div className='text-blue text-caption'>오늘의 발견</div>}
        <div className='flex flex-row items-center gap-2'>
          <h1 className='font-bold text-black text-h1'>{title}</h1>
          <span className='h-fit'>
            <Chip text={type} />
          </span>
        </div>
      </p>
      <div className='flex flex-row items-center w-full gap-4'>
        <div className='flex flex-row items-center gap-2.5 text-body3'>
          <Image src={from.profile} width={36} height={36} alt='Profile' className='rounded-full' />
          <span className='text-body3'>{from.domain}</span>
        </div>
        <span className='text-body3'>{formatToMonthDayKorean(new Date(date))}</span>
      </div>
    </div>
  );
};

export default ArticleHeader;
