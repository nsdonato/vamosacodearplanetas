import { useEffect, useReducer } from "react";
import { PlanetContext } from "./PlanetContext";

import { initialState, PlanetReducer } from "../reducer/PlanetReducer";
import { PlanetActions } from "../actions/PlanetActions";
import { ServicePlanets } from "../service/planet";

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
    void (async () => {
      dispatch({ type: PlanetActions.LOAD_PLANET });

      const res = await ServicePlanets.get(planetName);
      const { planet, error } = res;

      if (planet) {
        dispatch({
          type: PlanetActions.LOAD_PLANET_SUCCESS,
          payload: planet,
        });
      }

      dispatch({
        type: PlanetActions.LOAD_PLANET_ERROR,
        payload: error,
      });
    })();
  }, [planetName]);

  return (
    <PlanetContext.Provider value={{ ...state }}>
      {children}
    </PlanetContext.Provider>
  );
};

export { PlanetProvider };
