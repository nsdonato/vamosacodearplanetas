import { Route, useRoute } from "wouter";
import { Layout } from "../components/Layout";
import { MenuPlanets } from "../components/MenuPlanets";
import { PlanetProvider } from "../context/PlanetProvider";

export const AppRouter = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, params] = useRoute("/planets/:planetName");

  return (
    <>
      <MenuPlanets selectedPlanet={params?.planetName} />
      <Route path="/planets/:planetName">
        <PlanetProvider planetName={params?.planetName}>
          <Layout />
        </PlanetProvider>
      </Route>
      <Route path="/">
        <PlanetProvider>
          <Layout />
        </PlanetProvider>
      </Route>
    </>
  );
};
