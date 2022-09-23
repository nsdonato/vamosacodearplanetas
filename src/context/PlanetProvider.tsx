import { useEffect, useReducer } from "react";
import { PlanetContext } from "./PlanetContext";

// TODO: remover este import cuando el servicio fetch este implementado
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

  const getPlanet = () => {
    dispatch({ type: PlanetActions.LOAD_PLANET });

    ServicePlanets.get(planetName)
      .then((res) => {
        const { planet, error } = res;

        if (planet !== undefined) {
          dispatch({
            type: PlanetActions.LOAD_PLANET_SUCCESS,
            payload: planet,
          });

          return;
        }

        dispatch({
          type: PlanetActions.LOAD_PLANET_ERROR,
          payload: error,
        });
      })
      .catch((err) => {
        dispatch({ type: PlanetActions.LOAD_PLANET_ERROR, payload: err });
      });
  };

  useEffect(() => {
    getPlanet();
  }, [planetName]);

  return (
    <PlanetContext.Provider value={{ ...state }}>
      {children}
    </PlanetContext.Provider>
  );
};

export { PlanetProvider };
