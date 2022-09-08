interface ImgProps {
  src: string;
  className: string;
}

export const Img = ({ src, className = "" }: ImgProps) => (
  <img src={src} className={className} />
);
