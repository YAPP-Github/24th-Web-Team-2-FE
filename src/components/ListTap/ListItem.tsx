import Link from 'next/link';

interface ListItemProps {
  id: string;
  name: string;
  count: number;
  isActive: boolean;
}

const ListItem = (props: ListItemProps) => {
  const { id, name, count, isActive } = props;

  return (
    <Link
      href={`/main?tab=${id}`}
      className={`${isActive && 'border-bottom-gradient'} flex flex-row items-center gap-4 px-6 py-3 text-body3`}
    >
      {name}
      <span className={`${name === '오늘의 인사이트' && 'text-red'}`}>{count}</span>
    </Link>
  );
};

export default ListItem;
