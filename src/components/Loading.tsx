import Image from 'next/image';
import LoadingGIF from '@/assets/images/loadingGIF.gif';

const LoadingComponent = () => {
  return <Image src={LoadingGIF} alt='loading' className='w-full h-full' />;
};
export default LoadingComponent;
