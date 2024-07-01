import ServiceIcon from '@/assets/icons/ServiceIcon';

interface HeaderProps {
  isMain: boolean;
}

export const Header = ({ isMain }: HeaderProps) => {
  return (
    <div className={`${isMain ? 'py-8' : 'py-6'} px-6 flex items-center justify-between w-full bg-white`}>
      <ServiceIcon width={isMain ? 250 : 150} />
      {isMain && <span className='cursor-pointer text-body3'>My Page</span>}
    </div>
  );
};
