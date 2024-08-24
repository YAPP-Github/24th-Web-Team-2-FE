import ExploreTabButton from '@/components/ExploreTabButton';
import RefreshIcon from '@/assets/icons/RefreshIcon.svg';
import Image from 'next/image';

interface TopSectionProps {
  selectedTab: 'all' | 'unread';
  setSelectedTab: React.Dispatch<React.SetStateAction<'all' | 'unread'>>;
}

const TopSection = ({ selectedTab, setSelectedTab }: TopSectionProps) => {
  const handleClickTab = (tab: string) => {
    setSelectedTab(tab as 'all' | 'unread');
  };

  const handleRefreshBtnClick = () => {
    // TODO: refresh data
  };

  return (
    <div className='flex flex-row justify-between w-full'>
      <div className='flex flex-row justify-start w-full gap-3'>
        <ExploreTabButton selected={selectedTab === 'all'} onClick={() => handleClickTab('all')}>
          전체
        </ExploreTabButton>
        <ExploreTabButton selected={selectedTab === 'unread'} onClick={() => handleClickTab('unread')}>
          안 읽음
        </ExploreTabButton>
      </div>
      <Image
        src={RefreshIcon}
        width={16}
        height={16}
        alt='refresh'
        className='cursor-pointer'
        onClick={handleRefreshBtnClick}
      />
    </div>
  );
};

export default TopSection;
