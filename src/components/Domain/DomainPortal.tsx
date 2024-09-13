import CloseIcon from '@/assets/icons/CloseIcon';
import Portal from '@/utils/Portal';
import Image from 'next/image';
import FolderImage from '@/assets/images/FolderImage.svg';
import { useFunnel } from '@/utils/hooks/useFunnel';
import PlusIcon from '@/assets/icons/PlusIcon';
import { useState } from 'react';
import { GroupsType, useFetchGroupListQuery } from '@/api/hooks/useFetchGroupListQuery';
import { H14Image, H24Image } from '@/components/Image';

interface DomainPortalProps {
  handleCloseModal: () => void;
}

interface StepProps {
  onNextStep: () => void;
}

interface DefaultStepProps extends StepProps {
  data: GroupsType;
}

const DefaultStep = ({ onNextStep, data }: DefaultStepProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className='flex flex-col w-full h-full px-4 pb-4'>
      {!data.length ? (
        <div className='absolute flex flex-col items-center justify-center gap-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
          <Image src={FolderImage} alt='folder' width={80} height={80} />
          <span className='text-body2'>뉴스레터를 관심사별 그룹핑 해보세요!</span>
        </div>
      ) : (
        <div className='w-full'>
          {data.map(mail => {
            return (
              <div key={mail.groupId} className='flex w-full justify-between py-3'>
                <div>{mail.name}</div>
                <span
                  className='relative'
                  onMouseEnter={() => handleMouseEnter(mail.groupId)}
                  onMouseLeave={handleMouseLeave}
                >
                  <H24Image src={'dots.svg'} className='cursor-pointer' />
                  {hoveredId === mail.groupId && (
                    <div
                      style={{
                        width: '120px',
                        borderRadius: 'var(--Number-Spacing-spacing-3, 8px)',
                        background: 'var(--Color-Neutral-white, #FFF)',
                        boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.25)',
                        transform: 'translateX(-92px)',
                      }}
                      className='absolute cursor-pointer flex items-center gap-2 z-50 py-2 px-3 text-body2'
                    >
                      <div>
                        <H14Image src='trash.svg' />
                      </div>
                      <div className='text-body2'>그룹 삭제하기</div>
                    </div>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      )}
      <span className='flex mt-auto justify-end w-full cursor-pointer text-btn1 text-blue' onClick={onNextStep}>
        + 뉴스레터 그룹 만들기
      </span>
    </div>
  );
};

const CreateStep = ({ onNextStep }: StepProps) => {
  const [newValue, setNewValue] = useState('');
  const handleAdditionBtnClick = () => {
    onNextStep();
  };
  return (
    <div className='flex flex-col'>
      <span className='flex flex-row justify-between px-4 py-3 bg-background_grey'>
        <input
          type='text'
          value={newValue}
          onChange={e => setNewValue(e.target.value)}
          placeholder='새로운 그룹 이름'
          className='w-full h-full bg-transparent outline-none text-body2 text-darkgrey'
        />
        <PlusIcon width={24} height={24} fill='#168FD0' className='cursor-pointer' onClick={handleAdditionBtnClick} />
      </span>
    </div>
  );
};

const steps = ['default', 'create'];

const DomainPortal = ({ handleCloseModal }: DomainPortalProps) => {
  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  const { data } = useFetchGroupListQuery();

  return (
    <Portal selector='#portal'>
      <div
        className='fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-[rgba(0,0,0,0.4)]'
        onClick={handleCloseModal}
      >
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className='flex flex-col z-50 w-[36rem] h-[27rem] bg-white opacity-100 rounded-xl shadow-[0_0_12px_0_rgba(0,0,0,0.25)] relative'
        >
          <div className='flex flex-row items-center justify-between p-4 border-b border-b-lightgrey'>
            <span className='text-h3'>뉴스레터 그룹</span>
            <CloseIcon width={24} height={24} fill='#000000' onClick={handleCloseModal} className='cursor-pointer' />
          </div>
          <Funnel>
            <Step name={steps[0]}>
              <DefaultStep data={data ? data.groups : []} onNextStep={() => setStep(steps[1])} />
            </Step>
            <Step name={steps[1]}>
              <CreateStep onNextStep={() => setStep(steps[0])} />
            </Step>
          </Funnel>
        </div>
      </div>
    </Portal>
  );
};
export default DomainPortal;
