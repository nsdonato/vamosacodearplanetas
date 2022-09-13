import { PlanetMain } from "../components/PlanetMain";

interface LayoutProps {
  planetName?: string;
}

// TODO: Layout components
export const Layout = ({ planetName = "jupiter" }: LayoutProps) => {
  return (
    <main className="h-screen flex justify-center items-center">
      <p className="text-white">
        <PlanetMain planet={planetName} />
      </p>
    </main>
  );
};
