import Image from 'next/image';
import { CSSProperties } from 'react';

interface ImageProps {
  src: string;
  width?: number;
  style?: CSSProperties;
  onClick?: any;
  className?: any;
}

const getAlt = (fileName: string) => {
  return fileName
    .replaceAll('/', '')
    .split('_')
    .map((d: string) => `${d.charAt(0).toUpperCase()}${d.slice(1)}`)
    .join(' ');
};

function H8Image({ src, width = 8, ...props }: ImageProps) {
  const fileName = src.split('.')[0];
  const alt = getAlt(fileName);

  return <Image src={`/H8/${src}`} alt={alt} width={width} height={8} priority {...props} />;
}

function H14Image({ src, width = 14, ...props }: ImageProps) {
  const fileName = src.split('.')[0];
  const alt = getAlt(fileName);

  return <Image src={`/H14/${src}`} alt={alt} width={width} height={14} priority {...props} />;
}

function H16Image({ src, width = 16, ...props }: ImageProps) {
  const fileName = src.split('.')[0];
  const alt = getAlt(fileName);

  return <Image src={`/H16/${src}`} alt={alt} width={width} height={16} priority {...props} />;
}

function H24Image({ src, width = 24, ...props }: ImageProps) {
  const fileName = src.split('.')[0];
  const alt = getAlt(fileName);

  return <Image src={`/H24/${src}`} alt={alt} width={width} height={24} priority {...props} />;
}

function H36Image({ src, width = 36, ...props }: ImageProps) {
  const fileName = src.split('.')[0];
  const alt = getAlt(fileName);

  return <Image src={`/H36/${src}`} alt={alt} width={width} height={36} priority {...props} />;
}

function H56Image({ src, width = 56, ...props }: ImageProps) {
  const fileName = src.split('.')[0];
  const alt = getAlt(fileName);

  return <Image src={`/H56/${src}`} alt={alt} width={width} height={56} priority {...props} />;
}

function H92Image({ src, width = 92, ...props }: ImageProps) {
  const fileName = src.split('.')[0];
  const alt = getAlt(fileName);

  return <Image src={`/H92/${src}`} alt={alt} width={width} height={92} priority {...props} />;
}

export { H8Image, H14Image, H16Image, H24Image, H36Image, H56Image, H92Image };
