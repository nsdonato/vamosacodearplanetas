interface planetInfoProps {
  title?: string;
  info?: string;
  link?: string;
}

export const PlanetInfo = ({ title, info, link }: planetInfoProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{info}</p>
      <p>
        <span>Source: </span>
        {link}
      </p>
    </div>
  );
};
