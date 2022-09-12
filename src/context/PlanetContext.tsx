import { Planet } from "@planet/types";
import { createContext } from "react";

interface PlanetContextProps {
  planet: Planet | undefined;
}

const initialState = {
  planet: undefined,
};

export const PlanetContext = createContext<PlanetContextProps>(initialState);
