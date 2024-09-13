'use client';

import { GroupsType, useFetchGroupListQuery } from '@/api/hooks/useFetchGroupListQuery';
import ListItem from '@/components/ListTap/ListItem';
import { useGroupOverlayStore } from '@/utils/hooks/useGroupOverlayStore';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ComponentPropsWithoutRef, MouseEvent, useCallback, useEffect, useState } from 'react';

const MainListTap = () => {
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState(searchParams.get('tab') ?? 'today');
  const [isHover, setIsHover] = useState(false);

  const { data } = useFetchGroupListQuery();

  const handleClickListItem = (id: string) => {
    setCurrentTab(id);
  };

  const handleMouseEnterDigest = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeaveDigest = useCallback(() => {
    setIsHover(false);
  }, []);

  useEffect(() => {
    setCurrentTab(searchParams.get('tab') ?? 'today');
  }, [searchParams]);

  return (
    <div className='flex justify-center w-screen h-12 border-b border-lightgrey'>
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
        <div
          onMouseEnter={handleMouseEnterDigest}
          onMouseLeave={handleMouseLeaveDigest}
          style={{ position: 'relative' }}
        >
          <span className='relative' onMouseEnter={handleMouseEnterDigest} onMouseLeave={handleMouseLeaveDigest}>
            <ListItem
              onClick={() => handleClickListItem('Digest')}
              key={'Digest'}
              id={'Digest'}
              name={'Digest'}
              isActive={currentTab === 'Digest'}
            />
            {isHover && <DigestTabOverlay data={data ? data.groups : []} />}
          </span>
        </div>
        <ListItem
          onClick={() => handleClickListItem('탐색')}
          key={'탐색'}
          id={'search'}
          name={'탐색    🔎'}
          isActive={currentTab === 'search'}
        />
      </div>
    </div>
  );
};

export default MainListTap;

interface TabOverlayProps extends ComponentPropsWithoutRef<'div'> {
  data: GroupsType;
}

const DigestTabOverlay = ({ data, onMouseEnter, onMouseLeave }: TabOverlayProps) => {
  const { setOpen } = useGroupOverlayStore();
  const router = useRouter();

  const handleGroupMake = (e: MouseEvent) => {
    e.preventDefault();

    setOpen(true);
    router.push('/mypage/subscribe');
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
      className='absolute z-50 p-4 text-body2'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {data.map(group => (
        <div key={group.name} className='pb-2'>
          {group.name}
        </div>
      ))}
      <div className='flex justify-end w-full cursor-pointer text-body2 text-blue' onClick={handleGroupMake}>
        + 뉴스레터 그룹 만들기
      </div>
    </div>
  );
};
