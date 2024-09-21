import EmailListInteraction from '@/components/PageInteraction/Onboard/EmailListInteraction';
import { GET } from '@/network';

export const runtime = 'edge';

const EmailList = async () => {
  const incomingSenders = await getIncomingSenders();
  return (
    <div className='flex flex-col h-screen'>
      <EmailListInteraction incomingSenders={incomingSenders} />
    </div>
  );
};

export default EmailList;

const getIncomingSenders = async () => {
  const response = GET('/inbox/incoming-senders');

  return response;
};
