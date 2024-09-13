import { useMailDeleteMutation } from '@/api/hooks/useMailReadMutation';
import DeleteIcon from '@/assets/icons/DeleteIcon.svg';
import ListIcon from '@/assets/icons/ListIcon.svg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ArticleFooterProps {
  mailId: string;
}

const ArticleFooter = ({ mailId }: ArticleFooterProps) => {
  const router = useRouter();
  const deleteMutation = useMailDeleteMutation();

  const handleDeleteMail = (mailId: string) => {
    deleteMutation.mutate(
      { mailId },
      {
        onSuccess: () => {
          handleRedirectMain();
        },
      },
    );
  };

  const handleRedirectMain = () => {
    router.push('/main?tab=Digest'); // 클라이언트 사이드에서 리디렉션
  };

  return (
    <div className='fixed bottom-0 flex flex-row items-center justify-center w-full h-12 bg-white border-t border-lightgrey'>
      <div className='flex flex-row justify-end gap-6 px-6 w-content'>
        <span className='flex items-center justify-center w-6 h-6 cursor-pointer'>
          <Image src={DeleteIcon} alt='delete' width={16} height={24} onClick={() => handleDeleteMail(mailId)} />
        </span>
        <span className='flex items-center justify-center w-6 h-6 cursor-pointer' onClick={handleRedirectMain}>
          <Image src={ListIcon} alt='list' width={24} height={24} />
        </span>
      </div>
    </div>
  );
};

export default ArticleFooter;
