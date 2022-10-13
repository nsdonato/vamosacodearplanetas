declare module "@planet/context" {
  export interface PlanetContextProps {
    planet: Planet | undefined;
    isLoad: boolean;
    isError: boolean;
    errorMessage: string;
  }

  interface PlanetProviderProps {
    children: React.ReactNode;
    planetName?: string;
  }

  export interface PlanetActionProps {
    payload?: Planet | boolean | string | undefined;
    type: string;
  }

  export type PlanetActionHandle = (
    state: PlanetContextProps,
    action: PlanetActionProps
  ) => PlanetContextProps;

  export type PlanetHandlers = Record<string, PlanetActionHandle>;
}
