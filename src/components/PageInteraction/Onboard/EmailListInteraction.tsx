'use client';

import { useProfileQuery } from '@/api/hooks/useFetchProfileQuery';
import { EmailSenderButton } from '@/components/EmailSenderButton';
import OnboardHeader from '@/components/Header/OnboardHeader';
import type { IncomingSenders } from '@/types/onboard';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface EmailListInteractionProps {
  incomingSenders: IncomingSenders;
}

const EmailListInteraction = ({ incomingSenders }: EmailListInteractionProps) => {
  const { data } = useProfileQuery();
  const [selectedEmailList, setSelectedEmailList] = useState<string[]>([]);
  const [emailSet, setEmailSet] = useState<Set<string>>(new Set());
  const [targetEmail, setTargetEmail] = useState<string | null>(null);
  const router = useRouter();
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

  const handleClickNextProcess = () => {
    // API call to subscribe selected emails
    router.push('/onboard/interest');
  };

  return (
    <>
      <OnboardHeader isBtn isReady={isReady} onClick={handleClickNextProcess} />
      <div className={`flex flex-row w-full gap-16 ${targetEmail ? 'justify-between' : 'justify-center'}`}>
        <div className='flex flex-col items-center h-[calc(100%-4rem)] gap-12 mb-24 grow-0'>
          <span className='flex flex-col items-center gap-2'>
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
                        onClick={() => setTargetEmail(email)}
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
          <div className='w-full h-full bg-white shadow-[-4px_0_23.5px_0_rgba(0,0,0,0.25)] rounded-tl-2xl'>test123</div>
        )}
      </div>
    </>
  );
};

export default EmailListInteraction;
