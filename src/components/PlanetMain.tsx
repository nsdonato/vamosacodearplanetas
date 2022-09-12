import React from "react";
import { PlanetButtons } from "./PlanetButtons";
import { PlanetImage } from "./PlanetImage";
import { PlanetInfo } from "./PlanetInfo";
import { PlanetFooter } from "./PlanetFooter";

interface planetProps {
  planet?: string;
}

export const PlanetMain = ({ planet }: planetProps) => {
  return (
    <>
      <PlanetImage img={"img"} imgAlt={"imgAlt"} />
      <PlanetInfo title={"title"} info={"info"} link={"link"} />
      <PlanetButtons />
      <PlanetFooter />
    </>
  );
};
