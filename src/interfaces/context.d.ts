declare module "@planet/context" {
  export interface PlanetContextProps {
    planet: Planet | undefined;
    isLoad: boolean;
    showMenu: boolean;
    isError: boolean;
    errorMessage: string;
    toggleMenu?: () => void;
    hiddenMenu?: () => void;
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
