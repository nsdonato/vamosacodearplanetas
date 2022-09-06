import { Fragment } from "react";
import { Link } from "wouter";
import { Button, Img, Line } from "../components";
import { ClassProps, MenuPlanetItem } from "../interfaces";
import { planets } from "../models";

type NavButtonsProps = ClassProps;

export const NavBarButtons = ({ className }: NavButtonsProps) => (
  <nav className={className}>
    <ul className="w-full">
      {planets.map((p: MenuPlanetItem) => {
        return (
          <Fragment key={p.name}>
            <li className="py-4">
              <Link href={`/planets/${p.name}`}>
                <Button className="w-full p-4 flex items-center justify-between uppercase text-white font-spartan font-bold text-15 leading-25 tracking-1.36">
                  <div className="flex">
                    <Img
                      src={`/oval-${p.name}.svg`}
                      className="h-5 w-5 rounded-full mr-8"
                    />
                    {p.name}
                  </div>
                  <Img src="/arrow-right.svg" className="h-3 w-3" />
                </Button>
              </Link>
            </li>
            <Line className="w-11/12 my-0 m-auto" />
          </Fragment>
        );
      })}
    </ul>
  </nav>
);
