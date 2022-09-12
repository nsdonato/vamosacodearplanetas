declare module "@planet/types" {
  export interface ContentPlanet {
    content: string;
    source: string;
  }

  export interface ImagesPlanet {
    planet: string;
    internal: string;
    geology: string;
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
