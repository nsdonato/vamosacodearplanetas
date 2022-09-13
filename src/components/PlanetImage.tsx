interface imgProps {
  img: string;
  imgAlt: string;
}

export const PlanetImage = ({ img, imgAlt }: imgProps) => {
  return (
    <picture>
      <img src={img} alt={imgAlt} />
    </picture>
  );
};
