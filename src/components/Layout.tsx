import { MenuPlanets } from ".";
import { usePlanet } from "../hooks";
import { LoadingPlanet } from "./LoadingPlanet";
import { PlanetMain } from "./PlanetMain";

export const Layout = () => {
  const { isLoad } = usePlanet();
  return !isLoad ? (
    <>
      <MenuPlanets />
      <PlanetMain />
    </>
  ) : (
    <LoadingPlanet />
  );
};
