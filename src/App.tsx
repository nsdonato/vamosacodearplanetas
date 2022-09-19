import { PlanetProvider } from "./context/PlanetProvider";
import "./index.css";
import { AppRouter } from "./routers/AppRouter.routing";

function App() {
  return (
    <PlanetProvider>
      <AppRouter />
    </PlanetProvider>
  );
}

export default App;
