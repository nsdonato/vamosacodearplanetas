import { PlanetImage } from "./PlanetImage";
import { PlanetInfo } from "./PlanetInfo";
import { PlanetCardInfo } from "./PlanetCardInfo";

interface planetProps {
  planet?: string;
}

export const PlanetMain = ({ planet }: planetProps) => {
  return (
    <>
      <PlanetImage img={"img"} imgAlt={"imgAlt"} />
      <PlanetInfo title={"title"} info={"info"} link={"link"} />
      <PlanetCardInfo />
    </>
  );
};
