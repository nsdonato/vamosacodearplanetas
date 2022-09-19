import { useEffect, useReducer } from "react";
import { PlanetContext } from "./PlanetContext";

// TODO: remover este import cuando el servicio fetch este implementado
import data from "../../starter-code/data.json";
import { initialState, PlanetReducer } from "../reducer/PlanetReducer";
import { PlanetActions } from "../actions/PlanetActions";

interface PlanetProviderProps {
  children: React.ReactNode;
  planetName?: string;
}
const PlanetProvider = ({
  planetName = "jupiter",
  children,
}: PlanetProviderProps) => {
  // TODO: Opcional agregar localStorage para cachear los fetch
  const [state, dispatch] = useReducer(PlanetReducer, initialState);

  useEffect(() => {
    // TODO: crear servicio fetch para obtener planeta
    dispatch({ type: PlanetActions.LOAD_PLANET });
    const item = data.find((e) => e.name.toLowerCase() === planetName);
    dispatch({ type: PlanetActions.LOAD_PLANET_SUCCESS, payload: item });
  }, [planetName]);

  return (
    <PlanetContext.Provider value={{ ...state }}>
      {children}
    </PlanetContext.Provider>
  );
};

export { PlanetProvider };
