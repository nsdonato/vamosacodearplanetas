import { usePlanet } from "../hooks";

// TODO: Layout components
export const Layout = () => {
  const { planet } = usePlanet();
  return (
    <main className="h-screen flex justify-center items-center">
      {planet && (
        <p className="text-white">
          Acá va a haber un hermoso layout del planeta: {planet.name}
        </p>
      )}
    </main>
  );
};
