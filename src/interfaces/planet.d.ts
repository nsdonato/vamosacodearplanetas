declare module "@planet/types" {
  export interface ContentPlanet {
    content: string;
    source: string;
  }

  export interface ImagesPlanet {
    planet: {
      small: string;
      medium: string;
      large: string;
    };
    internal: {
      small: string;
      medium: string;
      large: string;
    };
    geology: {
      small: string;
      medium: string;
      large: string;
    };
  }

  export interface Planet {
    name: string;
    overview: ContentPlanet;
    structure: ContentPlanet;
    geology: ContentPlanet;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: ImagesPlanet;
  }
}
