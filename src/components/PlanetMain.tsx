import { PlanetImage } from "./PlanetImage";
import { PlanetInfo } from "./PlanetInfo";
import { PlanetCardInfo } from "./PlanetCardInfo";
import { Planet } from "@planet/types";

interface planetProps {
  planet?: Planet;
}

export const PlanetMain = ({ planet }: planetProps) => {
  return (
    <section className="grid grid-row-2">
      <div className="inline-flex justify-around">
        <PlanetImage img={"img"} imgAlt={"imgAlt"} />
        <PlanetInfo />
      </div>
      <PlanetCardInfo />
    </section>
  );
};
