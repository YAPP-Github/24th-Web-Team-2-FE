import ExploreTabButton from '@/components/ExploreTabButton';
import { TabContent } from '@/app/main/SearchTab';

interface TopSectionProps {
  selectedTab: string[];
  setSelectedTab: React.Dispatch<React.SetStateAction<string[]>>;
}

const TopSection = ({ selectedTab, setSelectedTab }: TopSectionProps) => {
  const handleClickTab = (tab: string) => {
    if (tab === '전체') {
      setSelectedTab([]);
    } else if (selectedTab.includes(tab)) {
      setSelectedTab(selectedTab.filter(selected => selected !== tab));
    } else {
      setSelectedTab([...selectedTab, tab]);
    }
  };

  return (
    <div className='flex flex-col w-full py-10 gap-8'>
      <div className='flex flex-col text-black gap-2 text-h1'>
        오늘 많이 주목된 뉴스레터
        <span className='text-body2'>취향에 맞는 새로운 뉴스레터를 발견해보세요</span>
      </div>
      <div className='flex flex-row gap-3'>
        <ExploreTabButton selected={selectedTab.length === 0} onClick={() => handleClickTab('전체')}>
          전체
        </ExploreTabButton>
        {TabContent.map((tab, index) => (
          <ExploreTabButton key={index} selected={selectedTab.includes(tab)} onClick={() => handleClickTab(tab)}>
            {tab}
          </ExploreTabButton>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
