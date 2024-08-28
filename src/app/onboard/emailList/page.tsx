import ServiceIcon from '@/assets/icons/ServiceIcon';
import EmailListInteraction from '@/components/PageInteraction/Onboard/EmailListInteraction';
import { GET } from '@/network';

const EmailList = async () => {
  const userName = '채현';
  const incomingSenders = await getIncomingSenders();

  return (
    <div className='flex flex-col items-center mb-24 gap-10'>
      <span className='flex flex-col items-center gap-2'>
        <span className='flex flex-row items-center'>
          <ServiceIcon width={195} />
          <span className='text-black text-h1'>에서 골라 볼 뉴스레터를 선택하세요</span>
        </span>
        <span className='text-body3'>골라 볼 뉴스레터 목록은 언제든 수정할 수 있어요.</span>
      </span>

      <EmailListInteraction userName={userName} interest={'IT/테크'} incomingSenders={incomingSenders} />
    </div>
  );
};

export default EmailList;

const getIncomingSenders = async () => {
  const response = GET('/inbox/incoming-senders');

  return response;
};
