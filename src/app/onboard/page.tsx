import ServiceIcon from '@/assets/icons/ServiceIcon';
import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image';
import GoogleIcon from '@/assets/icons/GoogleIcon.png';
import Link from 'next/link';

const OnBoard = () => {
  const BLUR_DATA_URL = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcUg8AAa0BFSX8uBwAAAAASUVORK5CYII=';
  return (
    <div className='flex flex-col items-center gap-10'>
      <span className='flex flex-col items-center'>
        <span className='flex flex-row items-center'>
          <ServiceIcon width={195} />
          <span className='text-black text-h1'>은 관리되지 않는 메일함 속에서</span>
        </span>
        <span className='text-black text-h1'>방치되는 유익한 메일을 큐레이팅해요</span>
      </span>
      <Image
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
        src='http://via.placeholder.com/690x400'
        alt='carousel'
        width={690}
        height={400}
      />
      <Link href='/onboard/interest'>
        <Image
          className='cursor-pointer'
          placeholder='blur'
          src={GoogleIcon}
          alt='google login'
          width={350}
          height={64}
        />
      </Link>
    </div>
  );
};
export default OnBoard;
