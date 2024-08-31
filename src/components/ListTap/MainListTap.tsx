'use client';

import { GroupsType, useFetchGroupListQuery } from '@/api/hooks/useFetchGroupListQuery';
import ListItem from '@/components/ListTap/ListItem';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const MainListTap = () => {
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState(searchParams.get('tab') ?? 'today');
  const [showOverlay, setShowOverlay] = useState(false);

  const { data } = useFetchGroupListQuery();

  const handleClickListItem = (id: string) => {
    setCurrentTab(id);
  };

  const handleMouseoverDigest = useCallback((hover: boolean) => {
    setShowOverlay(hover);
  }, []);

  useEffect(() => {
    setCurrentTab(searchParams.get('tab') ?? 'today');
  }, [searchParams]);

  return (
    <div className='flex justify-center w-full h-12 border-b border-lightgrey'>
      <div className='flex flex-row h-full gap-4 w-content'>
        <ListItem
          onClick={() => handleClickListItem('오늘의 인사이트')}
          key={'오늘의 인사이트'}
          id={'today'}
          name={'오늘의 인사이트'}
          isActive={currentTab === 'today'}
        />
        <ListItem
          onClick={() => handleClickListItem('탐색')}
          key={'탐색'}
          id={'search'}
          name={'탐색    🔎'}
          isActive={currentTab === 'search'}
        />
        <div onMouseOver={() => handleMouseoverDigest(true)} onMouseOut={() => handleMouseoverDigest(false)}>
          <ListItem
            onClick={() => handleClickListItem('Digest')}
            key={'Digest'}
            id={'Digest'}
            name={'Digest'}
            isActive={currentTab === 'Digest'}
          />
          {showOverlay ? <DigestTabOverlay data={data ? data.groups : []} /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default MainListTap;

interface TabOverlayProps {
  data: GroupsType;
}

const DigestTabOverlay = ({ data }: TabOverlayProps) => {
  const handleGroupMake = () => {
    console.log('클릭시 [마이페이지>구독관리>그룹생성 팝업] 랜딩');
  };

  if (!data.length) {
    return (
      <div
        style={{
          width: '258px',
          borderRadius: 'var(--Number-Spacing-spacing-3, 8px)',
          background: 'var(--Color-Neutral-white, #FFF)',
          boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.25)',
        }}
        className='absolute z-50 p-4 text-body2'
      >
        <div>뉴스레터 그룹을 만들어</div>
        <div className='pb-2'>주제별로 편하게 모아보세요!</div>
        <div className='flex justify-end w-full cursor-pointer text-body2 text-blue' onClick={handleGroupMake}>
          + 뉴스레터 그룹 만들기
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '258px',
        borderRadius: 'var(--Number-Spacing-spacing-3, 8px)',
        background: 'var(--Color-Neutral-white, #FFF)',
        boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.25)',
      }}
      className='absolute z-50 p-4 m-2 text-body2'
    >
      {data.map(group => (
        <div className='pb-2'>{group.name}</div>
      ))}
      <div className='flex justify-end w-full cursor-pointer text-body2 text-blue' onClick={handleGroupMake}>
        + 뉴스레터 그룹 만들기
      </div>
    </div>
  );
};
