import { IconProps } from '@/types/icon';

interface FoldIconProps extends IconProps {
  rotate?: 'up' | 'down' | 'left' | 'right';
}

const FoldIconWithDirection = ({
  width,
  height,
  fill,
  className,
  onClick,
  rotate = 'left', // Set default rotation to "left"
}: FoldIconProps) => {
  const getRotation = () => {
    switch (rotate) {
      case 'left':
        return 'rotate(-90 12 12)';
      case 'right':
        return 'rotate(90 12 12)';
      case 'down':
        return 'rotate(180 12 12)';
      case 'up':
        return 'rotate(0 12 12)';
    }
  };

  return (
    <svg
      width={width}
      height={height ?? width}
      viewBox='0 0 24 24'
      onClick={onClick}
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='out' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' transform={getRotation()}>
        <path
          d='M5 15L11.6746 9.27891C11.8618 9.11842 12.1382 9.11842 12.3254 9.27891L19 15'
          stroke={fill || '#DBDBDB'}
          strokeWidth='1.5'
        />
      </g>
    </svg>
  );
};

export default FoldIconWithDirection;
