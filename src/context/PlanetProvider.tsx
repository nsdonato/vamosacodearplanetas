import { useEffect, useState } from "react";
import { PlanetContext } from "./PlanetContext";
import { Planet } from "PlanetTypes";
// TODO: remover este import cuando el servicio fetch este implementado
import data from "../../starter-code/data.json";

interface PlanetProviderProps {
  children: React.ReactNode;
  planetName?: string;
}
const PlanetProvider = ({
  planetName = "jupiter",
  children,
}: PlanetProviderProps) => {
  // TODO: Opcional agregar localStorage para cachear los fetch
  const [planet, setPlanet] = useState<Planet>();

  useEffect(() => {
    // TODO: crear servicio fetch para obtener planeta
    const item = data.find((e) => e.name.toLowerCase() === planetName);
    setPlanet(item);
  }, [planetName]);

  return (
    <PlanetContext.Provider value={{ planet }}>
      {children}
    </PlanetContext.Provider>
  );
};

export { PlanetProvider };
