import { useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { PlanetProvider } from "./context/PlanetProvider";
import { AppRouter } from "./routers/AppRouter.routing";

function App() {
  const [match, params] = useRoute("/planets/:planetName");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useLocation();
  useEffect(() => {
    if (!match) {
      setLocation("/planets/jupiter");
    }
  }, []);
  return (
    <PlanetProvider planetName={params?.planetName}>
      <AppRouter />
    </PlanetProvider>
  );
}

export default App;
