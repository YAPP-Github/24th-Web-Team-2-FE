import HomeIcon from '@/assets/icons/HomeIcon';
import ServiceIcon from '@/assets/icons/ServiceIcon';

const MainPageHeader = () => {
  return (
    <div className={`py-8 justify-between px-6 flex items-center w-full bg-white`}>
      <ServiceIcon width={195} />

      <span className='flex flex-row items-center gap-1'>
        <HomeIcon width={24} />
        <span className='cursor-pointer text-body3'>My Page</span>
      </span>
    </div>
  );
};

export default MainPageHeader;
