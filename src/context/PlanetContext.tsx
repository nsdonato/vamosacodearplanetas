import { Planet } from "@planet/types";
import { createContext } from "react";
import { initialState } from "../reducer/PlanetReducer";

interface PlanetContextProps {
  planet: Planet | undefined;
  isLoad: boolean;
  isError: boolean;
  errorMessage: string;
}

export const PlanetContext = createContext<PlanetContextProps>(initialState);
