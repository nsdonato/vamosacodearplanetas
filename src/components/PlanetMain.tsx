import { PlanetImage } from "./PlanetImage";
import { PlanetInfo } from "./PlanetInfo";
import { PlanetCardInfo } from "./PlanetCardInfo";
import { Planet } from "@planet/types";
import { PlanetTabs } from "./PlanetTabs";

interface planetProps {
  planet?: Planet;
}

export const PlanetMain = ({ planet }: planetProps) => {
  return (
    <>
      <section className="text-white grid grid-cols-12 gap-4 mt-[69px] md:mt-0 lg:gap-8 md:mx-6 lg:mx-8">
        <PlanetTabs />
        <PlanetImage img={"img"} imgAlt={"imgAlt"} />
        <PlanetInfo />
      </section>
      <PlanetCardInfo />
    </>
  );
};
