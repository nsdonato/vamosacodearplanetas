import { PlanetMain } from "../components/PlanetMain";

import { usePlanet } from "../hooks";

// TODO: Layout components
export const Layout = () => {
  const { planet } = usePlanet();
  return (
    <main className="h-screen flex justify-center items-center">
      {planet && (
        <p className="text-white">
          <PlanetMain planet={planet.name} />
        </p>
      )}
    </main>
  );
};
