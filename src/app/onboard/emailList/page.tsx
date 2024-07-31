import ServiceIcon from '@/assets/icons/ServiceIcon';
import EmailListInteraction from '@/components/PageInteraction/Onboard/EmailListInteraction';
import { GET } from '@/network';

interface EmailListProps {
  userName: string;
}

const EmailList = async ({ userName = '채현' }: EmailListProps) => {
  const incomingSenders = await getIncomingSenders();
  const incomingSenders2 = await getIncomingSenders2();
  return (
    <div className='flex flex-col items-center gap-10 mb-24'>
      <span className='flex flex-col items-center gap-2'>
        <span className='flex flex-row items-center'>
          <ServiceIcon width={195} />
          <span className='text-black text-h1'>에서 골라 볼 뉴스레터를 선택하세요</span>
        </span>
        <span className='text-body3'>골라 볼 뉴스레터 목록은 언제든 수정할 수 있어요.</span>
      </span>

      <EmailListInteraction
        userName={userName}
        interest={'IT/테크'}
        incomingSenders={incomingSenders}
        techSenders={incomingSenders2}
      />
    </div>
  );
};

export default EmailList;

const getIncomingSenders = async () => {
  const response = GET('/incomingSenders/1');
  return response;
};

const getIncomingSenders2 = async () => {
  const response = GET('/incomingSenders/2');
  return response;
};
