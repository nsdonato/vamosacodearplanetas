import { PlanetActions } from "../actions/PlanetActions";

const initialState = {
  planet: undefined,
  isLoad: false,
  isError: false,
  errorMessage: "",
};

const PlanetReducer = (state, actions) => {
  switch (actions.type) {
    case PlanetActions.LOAD_PLANET:
      return { ...state, isLoad: true };
    case PlanetActions.LOAD_PLANET_SUCCESS:
      return { ...state, isLoad: false, planet: actions.payload };
    case PlanetActions.LOAD_PLANET_ERROR:
      return {
        ...state,
        isLoad: false,
        isError: true,
        errorMessage: actions.payload,
      };
    default:
      return { ...state };
  }
};

export { PlanetReducer, initialState };
