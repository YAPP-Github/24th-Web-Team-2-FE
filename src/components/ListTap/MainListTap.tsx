import ListItem from './ListItem';

interface TabData {
  name: string;
  count: number;
}

interface MainListTapProps {
  currentTab: string;
  tabData: { [key: string]: TabData };
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
      {Object.keys(tabData).map(id => (
        <ListItem key={id} id={id} name={tabData[id].name} count={tabData[id].count} isActive={currentTab === id} />
      ))}
    </div>
  );
};

export default MainListTap;
