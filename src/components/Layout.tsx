import { MenuPlanets } from ".";
import { usePlanet } from "../hooks";
import { PlanetMain } from "./PlanetMain";

// TODO: Layout components
export const Layout = () => {
  const { planet } = usePlanet();
  return (
    <>
      <MenuPlanets />
      {planet && <PlanetMain planet={planet} />}
    </>
  );
};
