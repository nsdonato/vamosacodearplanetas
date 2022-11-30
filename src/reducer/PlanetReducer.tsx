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
  showMenu: false,
};

const handlers: PlanetHandlers = {};

const handleToggleMenu: PlanetActionHandle = (state, action) => {
  return {
    ...state,
    showMenu: !state.showMenu,
  };
};

const handleHiddenMenu: PlanetActionHandle = (state, action) => {
  return {
    ...state,
    showMenu: false,
  };
};

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
handlers[PlanetActions.TOGGLE_MENU] = handleToggleMenu;
handlers[PlanetActions.HIDDEN_MENU] = handleHiddenMenu;

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
