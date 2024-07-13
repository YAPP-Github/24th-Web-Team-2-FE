import HomeIcon from '@/assets/icons/HomeIcon';
import ServiceIcon from '@/assets/icons/ServiceIcon';

interface HeaderProps {
  isMain: boolean;
}

export const Header = ({ isMain }: HeaderProps) => {
  return (
    <div
      className={`${isMain ? 'py-8 justify-between' : 'py-6 justify-center'} px-6 flex items-center w-full bg-white`}
    >
      <ServiceIcon width={isMain ? 195 : 156} />
      {isMain && (
        <span className='flex flex-row items-center gap-1'>
          <HomeIcon width={24} />
          <span className='cursor-pointer text-body3'>My Page</span>
        </span>
      )}
    </div>
  );
};
