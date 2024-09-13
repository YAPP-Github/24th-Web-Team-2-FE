import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

interface ListItemProps extends ComponentPropsWithoutRef<'div'> {
  id: string;
  name: string;
  isActive: boolean;
  tapCnt?: number;
  onClick?: () => void;
}

const ListItem = ({ id, name, isActive, tapCnt, onClick, children, ...attributes }: ListItemProps) => {
  return (
    <div {...attributes}>
      <Link
        href={{
          pathname: '/main',
          query: { tab: id },
        }}
        onClick={onClick}
        className={`${isActive ? (id === 'Digest' ? 'bg-background_grey rounded-t border-bottom-gradient text-black' : 'border-bottom-gradient text-black') : 'text-darkgrey'} flex flex-row items-center gap-4 px-6 py-3 whitespace-pre-wrap text-body3`}
      >
        {children}
        {name}
        {tapCnt && <span className='text-base font-light text-blue'>{tapCnt}</span>}
      </Link>
    </div>
  );
};

export default ListItem;
