import { useRoute } from "wouter";
import { usePlanet } from "../hooks";
import { InfoContent } from "./InfoContent";
import { PlanetButton } from "./PlanetButton";

export const PlanetInfo = () => {
  const { planet } = usePlanet();
  const [, params] = useRoute("/planets/:planetName/:characteristicName");

  const name = planet?.name;
  const dataButtons = {
    overview: planet?.overview,
    "internal-structure": planet?.structure,
    "surface-geology": planet?.geology,
  };
  const [characteristicName, dataCharacteristic] = Object.entries(
    dataButtons
  ).filter(
    ([title, value]) => title === params?.characteristicName && value
  )[0];

  return (
    <div className="col-span-12 md:grid md:grid-cols-12 md:gap-4 lg:col-span-5 lg:gap-0 lg:py-8 lg:px-4">
      <InfoContent dataCharacteristic={dataCharacteristic} namePlanet={name} />
      <PlanetButton
        characteristicName={characteristicName}
        dataButtons={dataButtons}
        name={name}
      />
    </div>
  );
};
