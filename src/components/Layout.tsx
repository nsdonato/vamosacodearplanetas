import { MenuPlanets } from ".";
import { usePlanet } from "../hooks";
import { LoadingPlanet } from "./LoadingPlanet";
import { PlanetMain } from "./PlanetMain";

export const Layout = () => {
  const { isLoad, showMenu } = usePlanet();
  return !isLoad ? (
    <>
      <MenuPlanets />
      {!showMenu && <PlanetMain />}
    </>
  ) : (
    <LoadingPlanet />
  );
};
