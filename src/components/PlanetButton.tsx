import { ContentPlanet } from "@planet/types";
import { Button } from "./Button";

interface PlanetButtonProps {
  name: string;
  dataButtons: {
    [key: string]: ContentPlanet;
  };
  characteristicName: string;
}

export const PlanetButton = ({
  name,
  dataButtons,
  characteristicName,
}: PlanetButtonProps) => (
  <div className="hidden px-6 md:flex md:col-span-5 md:px-0 md:flex-col md:justify-center md:gap-4 md:items-center lg:col-span-12 lg:justify-start lg:mt-10">
    {Object.keys(dataButtons).map((title, index) => {
      return (
        <Button
          key={title}
          title={title}
          index={index}
          name={name}
          characteristicName={characteristicName}
        />
      );
    })}
  </div>
);
