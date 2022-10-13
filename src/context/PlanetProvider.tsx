import { useEffect, useReducer } from "react";
import { PlanetContext } from "./PlanetContext";
import { PlanetReducer, initialState } from "../reducer/PlanetReducer";
import { PlanetActions } from "../actions/PlanetActions";
import { ServicePlanets } from "../service/planet";
import { PlanetProviderProps } from "@planet/context";

const PlanetProvider = ({
  planetName = "jupiter",
  children,
}: PlanetProviderProps) => {
  // TODO: Opcional agregar localStorage para cachear los fetch
  const [state, dispatch] = useReducer(PlanetReducer, initialState);

  useEffect(() => {
    (async () => {
      dispatch({ type: PlanetActions.LOAD_PLANET });
      const res = await ServicePlanets.get(planetName);
      const { planet, error } = res;
      if (error) {
        dispatch({
          type: PlanetActions.LOAD_PLANET_ERROR,
          payload: error,
        });
      }
      if (planet) {
        dispatch({
          type: PlanetActions.LOAD_PLANET_SUCCESS,
          payload: planet,
        });
      }
    })();
  }, [planetName]);

  return (
    <PlanetContext.Provider value={{ ...state }}>
      {children}
    </PlanetContext.Provider>
  );
};

export { PlanetProvider };
