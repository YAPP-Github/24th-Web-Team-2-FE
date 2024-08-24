import { DomainSpecificType } from '@/types';

interface TypeHeaderProps {
  selectedType: number;
  setSelectedType: React.Dispatch<React.SetStateAction<number>>;
}

const TypeHeader = ({ selectedType, setSelectedType }: TypeHeaderProps) => {
  return (
    <div className='flex flex-row px-4 py-2 rounded-full gap-4 w-fit bg-background_grey'>
      {DomainSpecificType.map(type => (
        <button
          key={type.id}
          className={`px-4 py-2 rounded-full ${selectedType === Number(type.id) ? 'bg-black text-white' : 'bg-background_grey text-black'} `}
          onClick={() => setSelectedType(Number(type.id))}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
};

export default TypeHeader;
