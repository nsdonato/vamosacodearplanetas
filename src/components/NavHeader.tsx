import { planets } from "../models";
import { ClassProps, MenuPlanetItem } from "@planet/components";
import { Link } from "wouter";

interface NavHeaderProps extends ClassProps {
  selectedPlanet: string | undefined;
}

export const NavHeader = ({
  className = "",
  selectedPlanet,
}: NavHeaderProps) => {
  return (
    <nav className={className}>
      <ul className="flex">
        {planets.map((p: MenuPlanetItem) => {
          return (
            <li key={p.name}>
              <Link
                href={`/planets/${p.name}`}
                className={`${
                  p.name === selectedPlanet
                    ? "border-t-4 border-orange-dark"
                    : ""
                } p-4 items-center justify-between uppercase text-white font-spartan font-bold text-11 leading-25 tracking-1.36`}
              >
                {p.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
