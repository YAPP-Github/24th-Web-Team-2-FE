import Image from 'next/image';
import { Chip } from '@/components/Chip';
import { formatToMonthDayKorean } from '@/utils/formatDate/formatToMonthDayKorean';
import Link from 'next/link';
import { MailDataType } from '@/api/hooks/useFetchMailQuery';

interface ArticleHeaderProps extends MailDataType {
  headerType: 'default' | 'simplified';
  group?: string;
}

const ArticleHeader = ({ headerType, mailId, subject, date, from, group }: ArticleHeaderProps) => {
  return (
    <div className='z-[9990] sticky top-0 flex flex-col items-center w-screen bg-white border-b border-b-lightgrey'>
      <div
        className={`flex py-4 w-content ${headerType === 'default' ? 'flex-col gap-3' : 'flex-row justify-between items-center'}`}
      >
        <div className={`flex ${headerType === 'default' ? 'flex-col gap-1' : 'flex-row gap-3 items-center'}`}>
          <div className={`text-body1 ${headerType === 'default' ? 'text-darkgrey' : 'text-black'}`}>
            {group ?? 'Digest'}
          </div>
          <div className='flex flex-row items-center gap-2'>
            <h1 className={`font-bold text-black ${headerType === 'default' ? 'text-h1' : 'text-h2'}`}>{subject}</h1>
          </div>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <Link href={`/domain/${mailId}`} className='flex flex-row items-center gap-2.5 text-body3'>
            {/* <Image src={from.profile} width={36} height={36} alt='Profile' className='rounded-full' /> */}
            <span className='text-body2 text-darkgrey'>{from.name}</span>
          </Link>
          <span className='text-body2 text-blue'>{formatToMonthDayKorean(new Date(date))}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
