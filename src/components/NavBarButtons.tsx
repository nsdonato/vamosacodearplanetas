import { Fragment } from "react";
import { Link } from "wouter";
import { ImageIcon, Line } from "../components";
import { MenuPlanetItem } from "@planet/components";
import { planets } from "../models";

interface NavButtonsProps {
  className: string;
  hiddenMenu: () => void;
}

export const NavBarButtons = ({ className, hiddenMenu }: NavButtonsProps) => (
  <nav className={className}>
    <ul className="w-full mr-2">
      {planets.map((p: MenuPlanetItem) => {
        return (
          <Fragment key={p.name}>
            <li onClick={hiddenMenu} className="hover:bg-darkGray/20">
              <Link
                href={`/planets/${p.name}/overview`}
                className="w-full py-5 flex items-center uppercase justify-between"
              >
                <div className="flex items-center">
                  <ImageIcon
                    src={`/oval-${p.name}.svg`}
                    className="h-5 w-5 rounded-full mr-6"
                    altImage={p.name}
                  />
                  <h4 className="font-spartan text-white font-bold text-15 leading-25 tracking-1.36">
                    {p.name}
                  </h4>
                </div>
                <ImageIcon
                  src="/arrow-right.svg"
                  className="h-3 w-3"
                  altImage="arrow-menu"
                />
              </Link>
            </li>
            <Line className="last:hidden" />
          </Fragment>
        );
      })}
    </ul>
  </nav>
);
