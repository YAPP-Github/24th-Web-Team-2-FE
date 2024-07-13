import ListItem from './ListItem';

interface TabData {
  id: string;
  name: string;
  count: number;
}

interface MainListTapProps {
  currentTab: string;
  tabData: TabData[];
}

/**
 *
 * @param currentTab url의 query로 받아온 current tab (지금은 data의 id)
 * @param tabData tab에 들어갈 data
 * @returns
 */
const MainListTap = (props: MainListTapProps) => {
  const { currentTab, tabData } = props;

  return (
    <div className='flex flex-row w-full h-12 gap-4 border-b border-lightgrey'>
      {tabData.map(tab => (
        <ListItem key={tab.id} id={tab.id} name={tab.name} count={tab.count} isActive={currentTab === tab.id} />
      ))}
    </div>
  );
};

export default MainListTap;
