declare module "PlanetTypes" {
  export interface MenuPlanetItem {
    name: string;
  }

  export interface ClassProps {
    className?: string;
  }
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
