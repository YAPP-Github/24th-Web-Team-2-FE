import Image from 'next/image';
import EmptyView from '@/assets/images/EmptyView.png';
import Link from 'next/link';

const EmptyTodayView = () => {
  return (
    <div className='h-[calc(100vh-8rem)] w-articleCard bg-background_grey'>
      <div className='flex flex-col items-center justify-start w-full h-full gap-3 pt-25'>
        <Image src={EmptyView} width={120} height={106} alt='Empty View' />
        <h2 className='text-h2 text-darkgrey'>오늘 온 뉴스레터가 없어요!</h2>
        <div className='flex flex-col gap-2'>
          <div className='text-center text-body2 text-darkgrey'>
            뉴스레터가 아직 도착하지 않았거나, 오늘 발송 예정인 뉴스레터가 없을 수 있어요.
            <br />
            기다리는 동안 아직 읽지 않은 뉴스레터를 먼저 확인해보세요!
          </div>
          <Link
            href={{
              pathname: '/main',
              query: { tab: 'Digest' },
            }}
            scroll={true}
            className='text-center cursor-pointer text-blue text-btn1'
          >
            Digest 탭으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyTodayView;
