import Image from 'next/image';
import { Chip } from '@/components/Chip';
import { formatToMonthDayKorean } from '@/utils/formatDate/formatToMonthDayKorean';
import Link from 'next/link';

interface ArticleHeaderProps {
  id: string;
  title: string;
  type: string;
  date: string;
  from: {
    domain: string;
    profile: string;
  };
  group?: string;
}

const ArticleHeader = ({ id, title, type, date, from, group }: ArticleHeaderProps) => {
  return (
    <div className='flex flex-col items-center w-screen border-b border-b-lightgrey'>
      <div className='flex flex-col py-4 gap-3 w-content'>
        <div className='flex flex-col gap-1'>
          <div className='text-body1 text-darkgrey'>{group ?? 'Digest'}</div>
          <div className='flex flex-row items-center gap-2'>
            <h1 className='font-bold text-black text-h1'>{title}</h1>
          </div>
        </div>
        <div className='flex flex-row items-center w-full gap-4'>
          <Link href={`/domain/${id}`} className='flex flex-row items-center gap-2.5 text-body3'>
            <Image src={from.profile} width={36} height={36} alt='Profile' className='rounded-full' />
            <span className='text-body2 text-darkgrey'>{from.domain}</span>
          </Link>
          <span className='text-body2 text-blue'>{formatToMonthDayKorean(new Date(date))}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
