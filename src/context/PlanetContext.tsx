import { PlanetContextProps } from "@planet/context";
import { createContext } from "react";
import { initialState } from "../reducer/PlanetReducer";

export const PlanetContext = createContext<PlanetContextProps>(initialState);
