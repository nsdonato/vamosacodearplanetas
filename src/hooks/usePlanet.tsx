import { useContext } from "react";
import { PlanetContext } from "../context/PlanetContext";

export function usePlanet() {
  const context = useContext(PlanetContext);

  if (context === undefined) {
    throw new Error("usePlanet must be used within a PlanetProvider");
  }
  return context;
}
