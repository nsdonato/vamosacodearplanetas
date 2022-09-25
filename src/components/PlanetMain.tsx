import { PlanetImage } from "./PlanetImage";
import { PlanetInfo } from "./PlanetInfo";
import { Planet } from "@planet/types";

interface planetProps {
  planet?: Planet;
}

export const PlanetMain = ({ planet }: planetProps) => {
  return (
    <>
      <section className="flex justify-end m-32">
        <PlanetImage img={"img"} imgAlt={"imgAlt"} />
        <PlanetInfo />
        {/* <PlanetCardInfo /> */}
      </section>
    </>
  );
};
