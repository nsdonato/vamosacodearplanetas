import { usePlanet } from "../hooks";
import { CardInfo } from "./CardInfo";

export const PlanetCardInfo = () => {
  const { planet } = usePlanet();
  const info = {
    "ROTATION TIME": planet?.rotation,
    "REVOLUTION TIME": planet?.revolution,
    RADIUS: planet?.radius,
    "AVERAGE TEMP.": planet?.temperature,
  };

  return (
    <section className="flex justify-center gap-7 text-white w-4/5 m-auto">
      {Object.entries(info).map(([title, value]) => {
        return <CardInfo key={title} title={title} value={value} />;
      })}
    </section>
  );
};
