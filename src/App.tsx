import { useEffect } from "react";
import { useRoute } from "wouter";
import { PlanetProvider } from "./context/PlanetProvider";
import { AppRouter } from "./routers/AppRouter.routing";
import { isValidPathCharacteristic } from "./helpers/validPathCharacteristic";

function App() {
  const [match, params] = useRoute("/planets/:planetName/:characteristicName");

  useEffect(() => {
    if (!match || !isValidPathCharacteristic(params)) {
      window.location.href = "/planets/jupiter/overview";
    }
  }, []);
  return (
    <PlanetProvider planetName={params?.planetName}>
      <AppRouter />
    </PlanetProvider>
  );
}

export default App;
