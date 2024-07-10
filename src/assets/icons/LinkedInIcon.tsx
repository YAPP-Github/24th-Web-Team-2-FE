import type { IconProps } from '@/types/icon';

interface LinkedInIconProps extends IconProps {
  disabled?: boolean;
}

const LinkedInIcon = ({ width = 24, height, className, onClick, disabled }: LinkedInIconProps) => (
  <svg
    width={width}
    height={height ?? width}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    onClick={onClick}
  >
    <g id='img-logo-linkedin' opacity={disabled ? 0.4 : 1}>
      <rect width={width} height={height ?? width} rx='4' fill='#168FD0' />
      <path
        id='Vector'
        d='M7.89742 18.2737H14.6887V40.1249H7.89742V18.2737ZM11.2949 7.39868C12.0738 7.39868 12.8353 7.62971 13.4829 8.06253C14.1305 8.49536 14.6351 9.11053 14.9331 9.83023C15.231 10.5499 15.3087 11.3418 15.1565 12.1057C15.0043 12.8696 14.6289 13.5712 14.0778 14.1217C13.5268 14.6723 12.8248 15.047 12.0608 15.1985C11.2967 15.35 10.5049 15.2715 9.78551 14.9729C9.06609 14.6743 8.4514 14.169 8.01919 13.521C7.58698 12.873 7.35668 12.1114 7.35742 11.3324C7.35842 10.2888 7.7737 9.28824 8.51202 8.55062C9.25033 7.81301 10.2513 7.39868 11.2949 7.39868ZM18.9487 18.2737H25.4587V21.2737H25.5487C26.4562 19.5562 28.6687 17.7449 31.9724 17.7449C38.8499 17.7299 40.1249 22.2562 40.1249 28.1249V40.1249H33.3337V29.4937C33.3337 26.9624 33.2887 23.7037 29.8049 23.7037C26.3212 23.7037 25.7287 26.4637 25.7287 29.3287V40.1249H18.9487V18.2737Z'
        fill='white'
      />
    </g>
  </svg>
);
export default LinkedInIcon;
