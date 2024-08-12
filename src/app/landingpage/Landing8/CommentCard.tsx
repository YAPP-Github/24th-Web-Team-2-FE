import type { CardData } from './index';

const CommentCard = ({ author, text, bgColor }: CardData) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`w-[26.25rem] h-[11.125rem] p-8 rounded-4xl flex flex-col gap-3`}
    >
      <span className='text-caption text-darkgrey'>익명의 {author}님</span>
      <span className='text-body2 text-wrap line-clamp-3'>{text}</span>
    </div>
  );
};

export default CommentCard;
