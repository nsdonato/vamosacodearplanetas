import { PlanetImage } from "./PlanetImage";
import { PlanetInfo } from "./PlanetInfo";
import { Planet } from "@planet/types";

interface planetProps {
  planet?: Planet;
}

export const PlanetMain = ({ planet }: planetProps) => {
  return (
    <section className="flex justify-around mx-auto my-20">
      <PlanetImage img={"img"} imgAlt={"imgAlt"} />
      <PlanetInfo />
      {/* <PlanetCardInfo /> */}
    </section>
  );
};
