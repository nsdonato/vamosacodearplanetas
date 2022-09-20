import { Route, useRoute } from "wouter";
import { Layout } from "../components/Layout";
import { PlanetProvider } from "../context/PlanetProvider";

export const AppRouter = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, params] = useRoute("/planets/:planetName");

  return (
    <>
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
