'use client';

import type { DomainType } from '@/types';
import Image from 'next/image';
import MoreBtnIcon from '@/assets/icons/MoreBtnIcon.svg';
import CloseIcon from '@/assets/icons/CloseIcon';
import FolderIcon from '@/assets/icons/FolderIcon.svg';
import { useRef, useState } from 'react';
import Portal from '@/utils/Portal';
import DomainPortal from './DomainPortal';

type DomainDataforListItem = Omit<DomainType, 'description' | 'website' | 'domain' | 'newsLetter' | 'subscriberCnt'>;

interface DomainListItemProps {
  domainData: DomainDataforListItem;
}

const DomainListItem = ({ domainData }: DomainListItemProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleUnsubscribe = () => {
    setIsHover(false);
    console.log('unsubscribe');
  };

  const handleAddGroupAction = () => {
    setIsModalOpen(true);
  };

  const handlecloseModal = () => {
    setIsHover(false);
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-row items-center justify-between w-[28.5rem] p-4'>
      <span className='flex flex-col'>
        <span className='flex flex-row items-center gap-3'>
          <Image
            src={domainData.profile}
            alt={`thumbnail-${domainData.name}`}
            width={48}
            height={48}
            className='rounded'
          />
          <span className='text-btn1'>{domainData.name}</span>
        </span>
      </span>
      <span className='relative w-10 h-10 rounded' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image
          src={MoreBtnIcon}
          alt='more'
          fill
          className='rounded hover:bg-[#E1F1FD] cursor-pointer'
          onClick={() => {}}
        />
        {isHover && (
          <div className='absolute bottom-0 right-0 flex flex-col translate-y-full w-[7.5rem] bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.25)] rounded z-30'>
            <span
              className='flex flex-row px-3 py-2 cursor-pointer gap-2 text-body2 hover:bg-background_grey'
              onClick={handleUnsubscribe}
            >
              <CloseIcon width={24} height={24} fill='#797979' />
              구독 해제
            </span>
            <span
              className='flex flex-row px-3 py-2 cursor-pointer gap-2 text-body2 hover:bg-background_grey'
              onClick={handleAddGroupAction}
            >
              <Image src={FolderIcon} width={24} height={24} alt='folder icon' />
              그룹에 추가
            </span>
          </div>
        )}
        {isModalOpen && <DomainPortal handleCloseModal={handlecloseModal} />}
      </span>
    </div>
  );
};
export default DomainListItem;
