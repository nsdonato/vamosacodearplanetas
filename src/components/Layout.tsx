import { MenuPlanets } from ".";
import { usePlanet } from "../hooks";
import { PlanetMain } from "./PlanetMain";

export const Layout = () => {
  const { planet } = usePlanet();
  return (
    <>
      <MenuPlanets />
      {planet && <PlanetMain />}
    </>
  );
};
