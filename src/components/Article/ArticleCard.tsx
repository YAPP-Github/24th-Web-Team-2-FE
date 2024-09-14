import type { ArticleType } from '@/types';
import Image from 'next/image';
import { formatToMonthDayKorean } from '@/utils/formatDate/formatToMonthDayKorean';
import Link from 'next/link';
import { MailDataType } from '@/api/hooks/useFetchMailQuery';

interface ArticleCardProps extends MailDataType {
  isToday?: boolean;
  currentTab?: string;
}

const ArticleCard = ({ subject, mailId, snippet, date, read, payload, from, isToday = false }: ArticleCardProps) => {
  return (
    <Link
      // https://stackoverflow.com/questions/66821351/nextjs-error-message-failed-prop-type-the-prop-href-expects-a-string-or-o
      href={{ pathname: isToday ? `/main` : `/article/${mailId}`, hash: isToday ? mailId : null }}
      scroll={true}
      className={`${isToday ? 'border-gradient_horizontal bg-white' : read ? 'bg-background_grey' : 'border border-lightgrey bg-white'} flex rounded-xl w-articleCard `}
    >
      <div className='flex flex-row items-center justify-between px-6 py-5'>
        <div className='flex flex-col gap-6 w-[460px]'>
          <div className='flex flex-col text-black gap-1'>
            <span className='text-h3 line-clamp-2'>{subject}</span>
            {/* <span className='text-body2 line-clamp-2'>{content}</span> */}
            <span className='text-body2 line-clamp-2'>{snippet}</span>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <span className='flex flex-row items-center gap-2'>
              {/* <Image className='rounded-full' src={from.profile} alt='profile' width={36} height={36} /> */}
              <span className='text-body2 text-darkgrey'>{from.name}</span>
            </span>
            <span className='text-body2 text-blue'>{formatToMonthDayKorean(new Date(date))}</span>
          </div>
        </div>

        {/* <Image
          className='shrink-0'
          width={160}
          height={160}
          src={thumbnail!}
          alt={`thumbnail for ${subject} article`}
        /> */}
      </div>
    </Link>
  );
};

export default ArticleCard;
