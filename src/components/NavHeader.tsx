import { planets } from "../models";
import { ClassProps, MenuPlanetItem } from "@planet/components";
import { Link } from "wouter";

type NavHeaderProps = ClassProps;

export const NavHeader = ({ className = "" }: NavHeaderProps) => (
  <nav className={className}>
    <ul className="flex">
      {planets.map((p: MenuPlanetItem) => {
        return (
          <li key={p.name}>
            <Link
              href={`/planets/${p.name}`}
              className="p-4 items-center justify-between uppercase text-white font-spartan font-bold text-11 leading-25 tracking-1.36"
            >
              {p.name}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);
