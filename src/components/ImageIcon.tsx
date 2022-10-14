interface ImageIconProps {
  src: string;
  className: string;
}

export const ImageIcon = ({ src, className = "" }: ImageIconProps) => (
  <img src={src} className={className} />
);
