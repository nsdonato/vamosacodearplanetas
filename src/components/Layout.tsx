import { usePlanet } from "../hooks";
import PlanetOptionList from "./PlanetOptionList";

// TODO: Layout components
export const Layout = () => {
  const { planet } = usePlanet();
  return (
    <main className="h-screen flex justify-center items-center">
      {planet && (
        <>
          <p className="text-white">
            Acá va a haber un hermoso layout del planeta: {planet.name}
          </p>
          <PlanetOptionList
            options={["overview", "internal structure", "surface geology"]}
          />
        </>
      )}
    </main>
  );
};
