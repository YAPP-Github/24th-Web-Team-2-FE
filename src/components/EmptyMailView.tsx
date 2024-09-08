import Image from 'next/image';
import Link from 'next/link';
import EmptyView from '@/assets/images/EmptyView.png';

const EmptyMailView = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full h-full bg-background_grey rounded-xl pt-25'>
      <div className='flex flex-col items-center gap-3'>
        <Image src={EmptyView} alt='EmptyView' width={120} height={106} />
        <div className='flex flex-col items-center gap-1'>
          <span className='text-h2 text-darkgrey'>뉴스레터를 모두 읽었어요</span>
          <span className='flex flex-row gap-1 text-btn1'>
            <span className='text-darkgrey'>더 많은 뉴스레터를 읽고 싶다면</span>
            <Link
              className='underline text-blue underline-offset-2'
              href={{
                pathname: '/main',
                query: { tab: 'search' },
              }}
            >
              탐색 탭으로 이동
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmptyMailView;
