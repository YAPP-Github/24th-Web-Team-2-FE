'use client';

import LinkedInIcon from '@/assets/icons/LinkedInIcon';
import { EmailSenderButton } from '@/components/EmailSenderButton';
import { OnboardButton } from '@/components/OnboardButton';
import { IncomingSenders } from '@/types/onboard';
import { useState } from 'react';

interface EmailListInteractionProps {
  userName: string;
  incomingSenders: IncomingSenders;
  techSenders: IncomingSenders;
}

const EmailListInteraction = ({ incomingSenders, techSenders }: EmailListInteractionProps) => {
  const [selectedEmailList, setSelectedEmailList] = useState<string[]>([]);

  const handleAddEmail = (email: string) => {
    setSelectedEmailList(prev => [...prev, email]);
  };

  const handleRemoveEmail = (email: string) => {
    const filteredEmail = selectedEmailList.filter(selectedEmail => selectedEmail !== email);
    console.log(filteredEmail, email);
    setSelectedEmailList(filteredEmail);
  };

  return (
    <div className='flex flex-col items-center gap-16'>
      <div className='flex flex-row gap-6 max-h-[575px]'>
        <div className='flex flex-col max-h-full gap-2 overflow-auto noScrollbar'>
          {incomingSenders.senders.map(({ senderId, fullAddress, localPart, domain, category }) => {
            return (
              <EmailSenderButton
                ChildIcon={<LinkedInIcon width={48} />}
                key={senderId}
                title={localPart}
                tag={category}
                type='subscribe'
                isActivated={selectedEmailList.includes(localPart)}
                setIsActivated={isActivated => (isActivated ? handleAddEmail(localPart) : handleRemoveEmail(localPart))}
              />
            );
          })}
        </div>
        <div className='flex flex-col max-h-full gap-2 overflow-auto noScrollbar'>
          {techSenders.senders.map(({ senderId, fullAddress, localPart, domain, category }) => {
            return (
              <EmailSenderButton
                ChildIcon={<LinkedInIcon width={48} />}
                key={senderId}
                title={localPart}
                tag={category}
                type='subscribe'
                isActivated={selectedEmailList.includes(localPart)}
                setIsActivated={isActivated => (isActivated ? handleAddEmail(localPart) : handleRemoveEmail(localPart))}
              />
            );
          })}
        </div>
      </div>
      <OnboardButton text='이렇게 볼래요!' type='onboard' isActivated={selectedEmailList.length > 0} />
    </div>
  );
};

export default EmailListInteraction;
