'use client';

import ServiceIcon from '@/assets/icons/ServiceIcon';
import EmailListInteraction from './Interaction';

interface EmailListProps {
  userName: string;
}

const EmailList = async ({ userName }: EmailListProps) => {
  const incomingSenders = await getIncomingSenders();
  const incomingSenders2 = await getIncomingSenders2();
  return (
    <div className='flex flex-col items-center gap-10'>
      <span className='flex flex-col items-center gap-2'>
        <span className='flex flex-row items-center'>
          <ServiceIcon width={195} />
          <span className='text-black text-h1'>에서 골라 볼 뉴스레터를 선택하세요</span>
        </span>
        <span className='text-body3'>골라 볼 뉴스레터 목록은 언제든 수정할 수 있어요.</span>
      </span>

      <EmailListInteraction userName={userName} incomingSenders={incomingSenders} techSenders={incomingSenders2} />
    </div>
  );
};

export default EmailList;

const getIncomingSenders = async () => {
  const response = {
    senders: [
      {
        senderId: 'randomString1',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub1',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString2',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub2',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString3',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub3',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString4',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub4',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString5',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub5',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
    ],
    count: 5,
  };

  return response;
};

const getIncomingSenders2 = async () => {
  const response = {
    senders: [
      {
        senderId: 'randomString1',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub1',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString2',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub2',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString3',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub3',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString4',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub4',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString5',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub5',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString6',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub5',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString7',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub5',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString8',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub5',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString9',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub5',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
      {
        senderId: 'randomString10',
        fullAddress: 'inspomailclub@hedwig.com',
        localPart: 'inspomailclub5',
        domain: 'hedwig.com',
        category: 'IT / 테크',
      },
    ],
    count: 10,
  };

  return response;
};
