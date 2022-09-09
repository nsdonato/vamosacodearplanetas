import { Route } from "wouter";
import { Layout } from "../components/Layout";
import { MenuPlanets } from "../components/MenuPlanets";
import { PlanetProvider } from "../context/PlanetProvider";

export const AppRouter = () => (
  <>
    <MenuPlanets />
    <Route path="/planets/:planetName">
      {(params) => (
        <PlanetProvider planetName={params.planetName}>
          <Layout />
        </PlanetProvider>
      )}
    </Route>
    <Route path="/">
      <PlanetProvider>
        <Layout />
      </PlanetProvider>
    </Route>
  </>
);
