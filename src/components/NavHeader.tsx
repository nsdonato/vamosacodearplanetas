import { planets } from "../models";
import { ClassProps, MenuPlanetItem } from "@planet/components";
import { Link } from "wouter";
import { usePlanet } from "../hooks";

type NavHeaderProps = ClassProps;

const VARIANTS = {
  mercury: "border-mercury",
  venus: "border-venus",
  earth: "border-earth",
  mars: "border-mars",
  jupiter: "border-jupiter",
  saturn: "border-saturn",
  uranus: "border-uranus",
  neptune: "border-neptune",
};

export const NavHeader = ({ className = "" }: NavHeaderProps) => {
  const { planet } = usePlanet();

  function getPlanetColor(planet: any) {
    return VARIANTS[planet as keyof typeof VARIANTS];
  }

  return (
    <>
      {planet && (
        <nav className={className}>
          <ul className="flex">
            {planets.map((p: MenuPlanetItem) => {
              return (
                <li key={p.name}>
                  <Link
                    href={`/planets/${p.name}`}
                    className={`${
                      p.name === planet.name.toLowerCase()
                        ? `border-t-4 ${getPlanetColor(p.name)}`
                        : ""
                    }  lg:pt-10  lg:px-4 p-5 items-center justify-between uppercase text-white font-spartan font-bold text-11 leading-25 tracking-1.36`}
                  >
                    {p.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};
