import { IconProps } from '@/types/icon';

const PlusIcon = ({ width, height, fill, onClick, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height ?? width}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <g id='ic:baseline-plus'>
        <path
          id='Vector'
          d='M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z'
          fill={fill || '#797979'}
        />
      </g>
    </svg>
  );
};

export default PlusIcon;
