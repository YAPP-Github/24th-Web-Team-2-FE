import ExploreTabButton from '@/components/ExploreTabButton';
import { TabContent } from '@/app/main/SearchTab';

interface TopSectionProps {
  selectedTab: 'all' | 'unread';
  setSelectedTab: React.Dispatch<React.SetStateAction<'all' | 'unread'>>;
}

const TopSection = ({ selectedTab, setSelectedTab }: TopSectionProps) => {
  const handleClickTab = (tab: string) => {
    setSelectedTab(tab as 'all' | 'unread');
  };

  return (
    <div className='flex flex-row justify-start w-full gap-3'>
      <ExploreTabButton selected={selectedTab === 'all'} onClick={() => handleClickTab('all')}>
        전체
      </ExploreTabButton>
      <ExploreTabButton selected={selectedTab === 'unread'} onClick={() => handleClickTab('unread')}>
        안 읽음
      </ExploreTabButton>
    </div>
  );
};

export default TopSection;
