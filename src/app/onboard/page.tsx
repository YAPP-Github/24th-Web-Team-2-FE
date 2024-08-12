'use client';

import ServiceIcon from '@/assets/icons/ServiceIcon';
import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import { GOOGLE_AUTH_API_URL } from '@/utils/constants/api/api';

const OnBoard = () => {
  const BLUR_DATA_URL = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcUg8AAa0BFSX8uBwAAAAASUVORK5CYII=';
  return (
    <div className='flex flex-col items-center gap-10 mb-10'>
      <span className='flex flex-col items-center'>
        <span className='flex flex-row items-center'>
          <ServiceIcon width={195} />
          <span className='text-black text-h1'>은 관리되지 않는 메일함 속에서</span>
        </span>
        <span className='text-black text-h1'>방치되는 유익한 메일을 큐레이팅해요</span>
      </span>
      <Carousel width={603.75} height={350} length={3}>
        <div className='flex flex-col items-center justify-center'>
          <Carousel.Wrapper>
            <Carousel.Item index={0}>
              {/* child img tag에 object-cover w-full h-full 속성 적용 */}
              <img
                className='object-cover w-full h-full'
                src='https://i.namu.wiki/i/8i-B9u3OUzEhUR1amZyU_PAMsp58lPIRpNvxPCy_xgyw9VYS3t13rbLEBgINOU4QoAheMcnfsWV1T3So58SXwnCdUF8V-x-X6yCF_fdBMYNPlplTK0XNDSPW84V1c4mtGKWm07hiTGTKPScRDkVKEEAZWWlHqNHgck2fD9ELErQ.webp'
              />
            </Carousel.Item>
            <Carousel.Item index={1}>
              <img
                className='object-cover w-full h-full'
                src='https://i.namu.wiki/i/8i-B9u3OUzEhUR1amZyU_PAMsp58lPIRpNvxPCy_xgyw9VYS3t13rbLEBgINOU4QoAheMcnfsWV1T3So58SXwnCdUF8V-x-X6yCF_fdBMYNPlplTK0XNDSPW84V1c4mtGKWm07hiTGTKPScRDkVKEEAZWWlHqNHgck2fD9ELErQ.webp'
              />
            </Carousel.Item>
            <Carousel.Item index={2}>
              <img
                className='object-cover w-full h-full'
                src='https://i.namu.wiki/i/8i-B9u3OUzEhUR1amZyU_PAMsp58lPIRpNvxPCy_xgyw9VYS3t13rbLEBgINOU4QoAheMcnfsWV1T3So58SXwnCdUF8V-x-X6yCF_fdBMYNPlplTK0XNDSPW84V1c4mtGKWm07hiTGTKPScRDkVKEEAZWWlHqNHgck2fD9ELErQ.webp'
              />
            </Carousel.Item>
          </Carousel.Wrapper>
          <div className='text-body2'>당신의 이메일 함 속 유용한 이메일을 보여줄게요</div>
          <div style={{ width: '48px', paddingTop: '40px' }}>
            <Carousel.Dots imageLength={3} size={8} selectedColor='green' unSelectedColor='lightgrey' />
          </div>
        </div>
      </Carousel>

      <Link href={GOOGLE_AUTH_API_URL}>
        <Image className='cursor-pointer' src='./googleLogin.svg' alt='google login' width={350} height={64} />
      </Link>
    </div>
  );
};
export default OnBoard;
