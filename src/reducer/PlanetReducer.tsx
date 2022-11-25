import {
  PlanetActionHandle,
  PlanetActionProps,
  PlanetHandlers,
  PlanetContextProps,
} from "@planet/context";
import { PlanetActions } from "../actions/PlanetActions";

const initialState = {
  planet: undefined,
  isLoad: true,
  isError: false,
  errorMessage: "",
};

const handlers: PlanetHandlers = {};

const handleLoadPlanet: PlanetActionHandle = (state, action) => {
  return {
    ...state,
    isLoad: true,
  };
};
const handlePlanetSuccess: PlanetActionHandle = (state, action) => {
  return {
    ...state,
    isLoad: false,
    isError: false,
    planet: action.payload,
  };
};

const handlePlanetError: PlanetActionHandle = (state, action) => {
  return {
    ...state,
    isLoad: false,
    isError: true,
    planet: null,
  };
};

handlers[PlanetActions.LOAD_PLANET] = handleLoadPlanet;
handlers[PlanetActions.LOAD_PLANET_SUCCESS] = handlePlanetSuccess;
handlers[PlanetActions.LOAD_PLANET_ERROR] = handlePlanetError;

function reducerFactory(
  initialState: PlanetContextProps,
  handlers: PlanetHandlers
) {
  return function (state = initialState, action: PlanetActionProps) {
    const handler = handlers[action.type];
    if (handler) {
      return handler(state, action);
    }
    return state;
  };
}
const PlanetReducer = reducerFactory(initialState, handlers);
export { initialState, PlanetReducer };
