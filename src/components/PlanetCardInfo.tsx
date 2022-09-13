import { CardInfo } from "./CardInfo";

interface PlanetCardInfoProps {
  info: {
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
  };
}

export const PlanetCardInfo = ({ info }: PlanetCardInfoProps) => {
  return (
    <>
      {Object.entries(info).map(([title, value]) => {
        return <CardInfo key={title} title={title} value={value} />;
      })}
    </>
  );
};
