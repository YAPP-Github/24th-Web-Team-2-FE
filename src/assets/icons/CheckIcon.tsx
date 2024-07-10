import type { IconProps } from '@/types/icon';

const CheckIcon = ({ width, height, fill, className, onClick }: IconProps) => {
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
      <g id='material-symbols:check'>
        <path
          id='Vector'
          d='M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z'
          fill={fill || '#69B012'}
        />
      </g>
    </svg>
  );
};
export default CheckIcon;
