import type { IconProps } from '@/types/icon';

const HomeIcon = ({ width, height, fill, className, onClick }: IconProps) => {
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
      <g id='icn'>
        <path
          id='Vector'
          d='M6 19.0009H9.692V13.1169H14.308V19.0009H18V10.0009L12 5.46289L6 10.0009V19.0009ZM5 20.0009V9.50089L12 4.21289L19 9.50089V20.0009H13.308V14.1169H10.692V20.0009H5Z'
          fill={fill || 'black'}
          stroke={fill || 'black'}
          strokeWidth='0.5'
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
