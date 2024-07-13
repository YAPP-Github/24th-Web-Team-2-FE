'use client';

import Carousel from '@/components/Carousel/Carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <Carousel width={690} height={400} length={3}>
        <div className='flex flex-col items-center justify-center'>
          <Carousel.Wrapper>
            <Carousel.Item index={0}>
              <img src='https://i.namu.wiki/i/8i-B9u3OUzEhUR1amZyU_PAMsp58lPIRpNvxPCy_xgyw9VYS3t13rbLEBgINOU4QoAheMcnfsWV1T3So58SXwnCdUF8V-x-X6yCF_fdBMYNPlplTK0XNDSPW84V1c4mtGKWm07hiTGTKPScRDkVKEEAZWWlHqNHgck2fD9ELErQ.webp' />
            </Carousel.Item>
            <Carousel.Item index={1}>
              <img src='https://i.namu.wiki/i/8i-B9u3OUzEhUR1amZyU_PAMsp58lPIRpNvxPCy_xgyw9VYS3t13rbLEBgINOU4QoAheMcnfsWV1T3So58SXwnCdUF8V-x-X6yCF_fdBMYNPlplTK0XNDSPW84V1c4mtGKWm07hiTGTKPScRDkVKEEAZWWlHqNHgck2fD9ELErQ.webp' />
            </Carousel.Item>
            <Carousel.Item index={2}>
              <img src='https://i.namu.wiki/i/8i-B9u3OUzEhUR1amZyU_PAMsp58lPIRpNvxPCy_xgyw9VYS3t13rbLEBgINOU4QoAheMcnfsWV1T3So58SXwnCdUF8V-x-X6yCF_fdBMYNPlplTK0XNDSPW84V1c4mtGKWm07hiTGTKPScRDkVKEEAZWWlHqNHgck2fD9ELErQ.webp' />
            </Carousel.Item>
          </Carousel.Wrapper>
          <div className='text-body2'>당신의 이메일 함 속 유용한 이메일을 보여줄게요</div>
          <div style={{ width: '48px', paddingTop: '40px' }}>
            <Carousel.Dots imageLength={3} size={8} selectedColor='green' unSelectedColor='lightgrey' />
          </div>
        </div>
      </Carousel>
      <button>
        <Image className='user-drag-none' alt='구글 로그인' src='/googleLogin.svg' width={350} height={64} />
      </button>
    </main>
  );
}
