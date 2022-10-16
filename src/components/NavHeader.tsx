import { planets } from "../models";
import { ClassProps, MenuPlanetItem } from "@planet/components";
import { Link } from "wouter";
import { usePlanet } from "../hooks";

type NavHeaderProps = ClassProps;

export const NavHeader = ({ className = "" }: NavHeaderProps) => {
  const { planet } = usePlanet();

  return (
    <>
      {planet && (
        <nav className={className}>
          <ul className="flex">
            {planets.map((p: MenuPlanetItem) => {
              return (
                <li
                  key={p.name}
                  className={`${
                    p.name === planet.name.toLowerCase()
                      ? `border-t-4 border-${p.name} md:pt-1 lg:pt-[29px]`
                      : "md:pt-2 lg:pt-[33px]"
                  } mx-4 first:ml-0 last:mr-0 font-spartan font-bold leading-25 tracking-1 lg:pb-[7px]`}
                >
                  <Link href={`/planets/${p.name}/overview`}>
                    <h4 className="text-11 text-white/75 uppercase hover:text-white cursor-pointer">
                      {p.name}
                    </h4>
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
