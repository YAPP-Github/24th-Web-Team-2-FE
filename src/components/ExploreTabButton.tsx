import { PropsWithChildren } from 'react';

interface ExploreTabButtonProps extends PropsWithChildren {
  selected: boolean;
  onClick: () => void;
}

const ExploreTabButton = ({ selected, onClick, children }: ExploreTabButtonProps) => {
  return (
    <div
      className={`${selected ? 'border-gradient_vertical' : 'bg-background_grey border-background_grey'} border rounded-4xl text-btn1 flex hover:bg-white cursor-pointer`}
      onClick={onClick}
    >
      <span className='px-5 py-2'>{children}</span>
    </div>
  );
};

export default ExploreTabButton;
