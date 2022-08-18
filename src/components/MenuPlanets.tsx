import React from "react";
import { MenuPlanetItem } from "../interfaces/planeta";
import { Link } from "wouter";
import { angularTitlePipe } from '../helpers'

export const MenuPlanets = () => {
  const planetas: MenuPlanetItem[] = [
    { name: "mercury" },
    { name: "venus" },
    { name: "earth" },
    { name: "mars" },
    { name: "jupiter" },
    { name: "saturn" },
    { name: "uranus" },
    { name: "neptune" },
  ];
  return (
    <>
      <ul>
        {planetas.map((p: MenuPlanetItem, i) => {
          return (<li key={i}>
            <Link href={`/planets/${p.name}`}>
              <a className="link">{angularTitlePipe(p.name)}</a>
            </Link>
          </li>);
        })}
      </ul>
    </>
  );
};
