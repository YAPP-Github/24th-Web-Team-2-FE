import Link from 'next/link';

interface ListItemProps {
  id: string;
  name: string;
  isActive: boolean;
  onClick?: () => void;
}

const ListItem = ({ id, name, isActive, onClick }: ListItemProps) => {
  return (
    <Link
      href={{
        pathname: '/main',
        query: { tab: id },
      }}
      onClick={onClick}
      className={`${isActive ? (id === 'Digest' ? 'bg-background_grey rounded-t border-bottom-gradient text-black' : 'border-bottom-gradient text-black') : 'text-darkgrey'} flex flex-row items-center gap-4 px-6 py-3 whitespace-pre-wrap text-body3`}
    >
      {name}
    </Link>
  );
};

export default ListItem;
