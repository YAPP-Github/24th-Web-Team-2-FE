'use client';

import { useProfileQuery } from '@/api/hooks/useFetchProfileQuery';
import { EmailSenderButton } from '@/components/EmailSenderButton';
import OnboardHeader from '@/components/Header/OnboardHeader';
import type { IncomingSender, IncomingSenders } from '@/types/onboard';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FoldIcon from '@/assets/icons/FoldIcon.svg';
import CloseIcon from '@/assets/icons/CloseIcon';
import FoldIconWithDirection from '@/assets/icons/FoldIconWithDirection';
import Image from 'next/image';
import SubscribeButton from '@/components/SubscribeButton';
import { formatToMonthDayKorean } from '@/utils/formatDate/formatToMonthDayKorean';
import { useSubscribtionMutation } from '@/api/hooks/useSubscribtionMutation';

interface EmailListInteractionProps {
  incomingSenders: IncomingSenders;
}

const EmailListInteraction = ({ incomingSenders }: EmailListInteractionProps) => {
  const { data } = useProfileQuery();
  const [selectedEmailList, setSelectedEmailList] = useState<string[]>([]);
  const [emailSet, setEmailSet] = useState<Set<string>>(new Set());
  const [targetEmail, setTargetEmail] = useState<IncomingSender | null>(null);
  const router = useRouter();
  const subscribtionMutation = useSubscribtionMutation();
  const isReady = selectedEmailList.length > 0;

  useEffect(() => {
    // Initialize the set with unique email addresses from incomingSenders
    const uniqueEmails = new Set(incomingSenders.senders.map(sender => sender.from.address));
    setEmailSet(uniqueEmails);
  }, [incomingSenders]);

  const handleAddEmail = (email: string) => {
    setSelectedEmailList(prev => [...prev, email]);
  };

  const handleRemoveEmail = (email: string) => {
    const filteredEmail = selectedEmailList.filter(selectedEmail => selectedEmail !== email);
    setSelectedEmailList(filteredEmail);
  };

  const handleSelectAll = () => {
    if (selectedEmailList.length === incomingSenders.senders.length) {
      setSelectedEmailList([]);
      return;
    }
    setSelectedEmailList(Array.from(emailSet));
  };

  const getCurrentEmailIndex = () => {
    if (!targetEmail) return -1;
    return incomingSenders.senders.findIndex(sender => sender.from.address === targetEmail.from.address);
  };

  // Function to handle navigating to the previous email
  const handlePrevArticle = () => {
    const currentIndex = getCurrentEmailIndex();
    if (currentIndex < incomingSenders.senders.length - 1) {
      setTargetEmail(incomingSenders.senders[currentIndex + 1]);
    }
  };

  // Function to handle navigating to the next email
  const handleNextArticle = () => {
    const currentIndex = getCurrentEmailIndex();
    if (currentIndex > 0) {
      setTargetEmail(incomingSenders.senders[currentIndex - 1]);
    }
  };

  const handleClickNextProcess = () => {
    subscribtionMutation.mutate({
      subscriptions: selectedEmailList.map(email => {
        const sender = incomingSenders.senders.find(sender => sender.from.address === email)!;
        return {
          name: sender.from.name,
          address: sender.from.address,
        };
      }),
    });
    router.push('/onboard/interest');
  };

  const handleSubscribeBtnClick = () => {
    if (selectedEmailList.includes(targetEmail!.from.address)) {
      handleRemoveEmail(targetEmail!.from.address);
    } else {
      handleAddEmail(targetEmail!.from.address);
    }
  };

  const hasPrevArticle = getCurrentEmailIndex() < incomingSenders.senders.length - 1;
  const hasNextArticle = getCurrentEmailIndex() > 0;

  return (
    <>
      <OnboardHeader isBtn isReady={isReady} onClick={handleClickNextProcess} />
      <div
        className={`bg-white flex flex-row w-full gap-16 h-[calc(100%-4rem)] ${targetEmail ? 'justify-between' : 'justify-center'}`}
      >
        <div className='flex flex-col items-center h-full gap-12 mb-24 grow-0'>
          <span className='flex flex-col items-center gap-2 pt-12'>
            <span className='text-black text-h2'>인스포메일클럽에서 골라 볼 뉴스레터를 선택하세요</span>

            <span className='flex flex-col items-center text-body2'>
              <span>선택한 뉴스레터는 앞으로 Gmail 받은편지함 대신 InspoMailClub에서 표시돼요.</span>
              <span>추후 원한다면 언제든지 다시 받은편지함에서 볼 수 있어요.</span>
            </span>
          </span>
          <div className='flex flex-col items-center h-[550px] gap-16'>
            <div className='flex flex-row h-full gap-6'>
              <div className='flex flex-col h-full gap-3'>
                <span className='flex justify-between w-full text-body2'>
                  <span className='inline'>
                    <span className='text-blue'>{data?.username}님의 메일함에서 발견된</span>
                    <span className='text-darkgrey'> 뉴스레터에요.</span>
                  </span>
                  <span className='cursor-pointer text-blue' onClick={handleSelectAll}>
                    전체선택
                  </span>
                </span>
                <div className='flex flex-col h-full gap-2 overflow-auto noScrollbar'>
                  {Array.from(emailSet).map(email => {
                    const sender = incomingSenders.senders.find(sender => sender.from.address === email)!;
                    return (
                      <EmailSenderButton
                        key={sender.mailId}
                        title={sender.from.name}
                        domain={sender.from.address}
                        type='subscribe'
                        isActivated={selectedEmailList.includes(email)}
                        onClick={() => setTargetEmail(sender)}
                        setIsActivated={isActivated => (isActivated ? handleAddEmail(email) : handleRemoveEmail(email))}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {targetEmail && (
          <div className='w-full h-full flex flex-col items-center bg-white shadow-[-4px_0_23.5px_0_rgba(0,0,0,0.25)] rounded-tl-2xl'>
            <div className='flex w-full h-[2.875rem] justify-between items-center px-4 border-b border-b-lightgrey py-3'>
              <div className='flex justify-between w-full'>
                <span className='flex gap-6'>
                  <Image
                    src={FoldIcon}
                    width={16}
                    height={16}
                    alt='Fold Page'
                    className='cursor-pointer'
                    onClick={() => setTargetEmail(null)}
                  />
                  <span className='flex flex-row items-center gap-2'>
                    <FoldIconWithDirection
                      width={24}
                      height={24}
                      rotate='up'
                      fill={hasNextArticle ? '#797979' : '#DBDBDB'}
                      onClick={handleNextArticle}
                      className='cursor-pointer'
                    />
                    <FoldIconWithDirection
                      width={24}
                      height={24}
                      rotate='down'
                      fill={hasPrevArticle ? '#797979' : '#DBDBDB'}
                      onClick={handlePrevArticle}
                      className='cursor-pointer'
                    />
                  </span>
                </span>
                <SubscribeButton
                  isSubscribed={selectedEmailList.includes(targetEmail.from.address)}
                  onClick={handleSubscribeBtnClick}
                />
              </div>
            </div>
            <div className='flex max-w-[60rem] flex-col items-center w-full gap-3 p-10 h-full overflow-y-scroll'>
              <div className='flex flex-col w-full gap-6'>
                <div className='flex flex-row gap-3'>
                  <span className='text-h3'>{targetEmail.from.name}</span>
                  <span className='text-body2'>{targetEmail.from.address}</span>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-row gap-3'>
                    <span className='text-body2 text-blue shrink-0 basis-[170px]'>이런 뉴스레터를 읽을 수 있어요</span>
                    <span className='max-w-[22rem] overflow-x-hidden text-black break-all shrink-0 whitespace-nowrap text-h2 text-ellipsis'>
                      {targetEmail.subject}
                    </span>
                  </div>
                  <div className='flex flex-row gap-5 text-body2'>
                    <span className='text-darkgrey'>{targetEmail.from.name}</span>
                    <span className='text-blue basis-[4rem]'>{formatToMonthDayKorean(new Date(targetEmail.date))}</span>
                  </div>
                </div>
              </div>
              <div
                className='py-4 overflow-x-scroll h-fit shrink-0 noScrollbar'
                dangerouslySetInnerHTML={{ __html: targetEmail.payload.find(p => p.mimeType === 'text/html')!.body }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmailListInteraction;
