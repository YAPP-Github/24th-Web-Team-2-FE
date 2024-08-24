import CloseIcon from '@/assets/icons/CloseIcon';
import Portal from '@/utils/Portal';
import Image from 'next/image';
import FolderImage from '@/assets/images/FolderImage.svg';
import { useFunnel } from '@/utils/hooks/useFunnel';
import PlusIcon from '@/assets/icons/PlusIcon';
import { useState } from 'react';

interface DomainPortalProps {
  handleCloseModal: () => void;
}

interface StepProps {
  onNextStep: () => void;
}

const DefaultStep = ({ onNextStep }: StepProps) => {
  return (
    <div className='flex flex-col justify-end w-full h-full px-4 pb-4'>
      <div className='absolute flex flex-col items-center justify-center gap-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
        <Image src={FolderImage} alt='folder' width={80} height={80} />
        <span className='text-body2'>뉴스레터를 관심사별 그룹핑 해보세요!</span>
      </div>
      <span className='flex justify-end w-full cursor-pointer text-btn1 text-blue' onClick={onNextStep}>
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
              <DefaultStep onNextStep={() => setStep(steps[1])} />
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
