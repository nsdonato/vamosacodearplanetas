import { Route } from "wouter";
import { Layout } from "../components/Layout";
import { MenuPlanets } from "../components/MenuPlanets";

export const AppRouter = () => (
  <>
    <MenuPlanets />
    <Route path="/planets/:planetName">
      {(params) => <Layout planetName={params.planetName} />}
    </Route>
    <Route path="/">
      {" "}
      <Layout />
    </Route>
  </>
);
