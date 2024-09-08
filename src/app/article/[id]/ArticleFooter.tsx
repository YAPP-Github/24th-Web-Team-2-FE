import { useMailDeleteMutation } from '@/api/hooks/useMailReadMutation';
import DeleteIcon from '@/assets/icons/DeleteIcon.svg';
import ListIcon from '@/assets/icons/ListIcon.svg';
import Image from 'next/image';

interface ArticleFooterProps {
  mailId: string;
}

const ArticleFooter = ({ mailId }: ArticleFooterProps) => {
  const deleteMutation = useMailDeleteMutation();

  const handleDeleteMail = (mailId: string) => {
    deleteMutation.mutate({ mailId });
  };
  return (
    <div className='fixed bottom-0 flex flex-row items-center justify-center w-full h-12 bg-white border-t border-lightgrey'>
      <div className='flex flex-row justify-end gap-6 px-6 w-content'>
        <span
          className='flex items-center justify-center w-6 h-6 cursor-pointer'
          onClick={() => handleDeleteMail(mailId)}
        >
          <Image src={DeleteIcon} alt='delete' width={16} height={24} />
        </span>
        <span className='flex items-center justify-center w-6 h-6 cursor-pointer'>
          <Image src={ListIcon} alt='list' width={24} height={24} />
        </span>
      </div>
    </div>
  );
};

export default ArticleFooter;
