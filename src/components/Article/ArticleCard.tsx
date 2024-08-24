import type { ArticleType } from '@/types';
import Image from 'next/image';
import { formatToMonthDayKorean } from '@/utils/formatDate/formatToMonthDayKorean';
import Link from 'next/link';

interface ArticleCardProps extends ArticleType {
  isToday?: boolean;
  currentTab?: string;
}

const ArticleCard = ({ title, url, id, content, date, thumbnail, isRead, from, isToday = false }: ArticleCardProps) => {
  return (
    <Link
      // https://stackoverflow.com/questions/66821351/nextjs-error-message-failed-prop-type-the-prop-href-expects-a-string-or-o
      href={{ pathname: isToday ? `/main` : `${url}`, hash: isToday ? id : null }}
      scroll={true}
      className={`${isRead ? 'bg-background_grey' : isToday ? 'border-gradient_horizontal bg-white' : 'border border-lightgrey bg-white'} rounded-xl w-articleCard `}
    >
      <div className='flex flex-row items-center justify-between px-6 py-5'>
        <div className='flex flex-col gap-6 w-[460px]'>
          <div className='flex flex-col gap-1'>
            <span className='text-h3 line-clamp-2'>{title}</span>
            <span className='text-body2 line-clamp-2'>{content}</span>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <span className='flex flex-row items-center gap-2'>
              <Image className='rounded-full' src={from.profile} alt='profile' width={36} height={36} />
              <span className='text-body2 text-darkgrey'>{from.domain}</span>
            </span>
            <span className='text-body2 text-blue'>{formatToMonthDayKorean(new Date(date))}</span>
          </div>
        </div>

        <Image className='shrink-0' width={160} height={160} src={thumbnail!} alt={`thumbnail for ${title} article`} />
      </div>
    </Link>
  );
};

export default ArticleCard;
