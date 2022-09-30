import { PlanetImage } from "./PlanetImage";
import { PlanetInfo } from "./PlanetInfo";
import { PlanetCardInfo } from "./PlanetCardInfo";
import { Planet } from "@planet/types";

interface planetProps {
  planet?: Planet;
}

export const PlanetMain = ({ planet }: planetProps) => {
  return (
    <section className="text-white">
      <PlanetImage img={"img"} imgAlt={"imgAlt"} />
      <PlanetInfo title={"title"} info={"info"} link={"link"} />
      <PlanetCardInfo />
    </section>
  );
};
