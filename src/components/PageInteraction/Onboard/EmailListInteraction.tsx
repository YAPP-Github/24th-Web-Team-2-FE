'use client';

import LinkedInIcon from '@/assets/icons/LinkedInIcon';
import { EmailSenderButton } from '@/components/EmailSenderButton';
import { OnboardButton } from '@/components/OnboardButton';
import type { IncomingSenders } from '@/types/onboard';
import { useState } from 'react';

interface EmailListInteractionProps {
  userName: string;
  interest: string;
  incomingSenders: IncomingSenders;
}

const EmailListInteraction = ({ userName, interest, incomingSenders }: EmailListInteractionProps) => {
  const [selectedEmailList, setSelectedEmailList] = useState<string[]>([]);

  const handleAddEmail = (email: string) => {
    setSelectedEmailList(prev => [...prev, email]);
  };

  const handleRemoveEmail = (email: string) => {
    const filteredEmail = selectedEmailList.filter(selectedEmail => selectedEmail !== email);
    setSelectedEmailList(filteredEmail);
  };

  return (
    <div className='flex flex-col items-center gap-16'>
      <div className='flex flex-row gap-6 max-h-[575px] relative'>
        <div className='flex flex-col gap-3'>
          <span className='text-body3'>
            <span className='text-blue'>{userName}님의 메일함에서 발견된</span>
            <span className='text-darkgrey'> 뉴스레터에요.</span>
          </span>
          <div className='flex flex-col max-h-full overflow-auto gap-2 noScrollbar'>
            {incomingSenders.senders.map(({ senderId, fullAddress, localPart, domain, category }) => {
              return (
                <EmailSenderButton
                  ChildIcon={<LinkedInIcon width={48} />}
                  key={senderId}
                  title={localPart}
                  tag={category}
                  type='subscribe'
                  isActivated={selectedEmailList.includes(localPart)}
                  setIsActivated={isActivated =>
                    isActivated ? handleAddEmail(localPart) : handleRemoveEmail(localPart)
                  }
                />
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-body3'>
            <span className='text-blue'>{interest}에 관심이 있다면,</span>
            <span className='text-darkgrey'> 이런 발신인은 어때요?</span>
          </span>
          {/* <div className='flex flex-col max-h-full overflow-auto gap-2 noScrollbar'>
            {techSenders.senders.map(({ senderId, fullAddress, localPart, domain, category }) => {
              return (
                <EmailSenderButton
                  ChildIcon={<LinkedInIcon width={48} />}
                  key={senderId}
                  title={localPart}
                  tag={category}
                  type='subscribe'
                  isActivated={selectedEmailList.includes(localPart)}
                  setIsActivated={isActivated =>
                    isActivated ? handleAddEmail(localPart) : handleRemoveEmail(localPart)
                  }
                />
              );
            })}
          </div> */}
        </div>
        <div className='absolute bottom-0 right-0 w-full h-16 pointer-events-none bg-gradient-to-t from-white to-transparent' />
      </div>
      <OnboardButton text='이렇게 볼래요!' type='onboard' isActivated={selectedEmailList.length > 0} />
    </div>
  );
};

export default EmailListInteraction;
