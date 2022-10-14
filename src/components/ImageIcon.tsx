interface ImageIconProps {
  src: string;
  className: string;
  altImage: string;
  eventClick?: () => void;
}

export const ImageIcon = ({
  src,
  className = "",
  altImage = "",
  eventClick = undefined,
}: ImageIconProps) => (
  <img src={src} className={className} alt={altImage} onClick={eventClick} />
);
