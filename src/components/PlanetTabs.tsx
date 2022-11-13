import { useRoute } from "wouter";
import { usePlanet } from "../hooks";
import { Line } from "./Line";
import { Tab } from "./Tab";

export const PlanetTabs = () => {
  const { planet } = usePlanet();
  const [, params] = useRoute("/planets/:planetName/:characteristicName");
  const name = planet?.name;

  const dataTabs = {
    overview: "overview",
    "internal-structure": "structure",
    "surface-geology": "geology",
  };

  const borderTab = Object.values(dataTabs).filter(
    (titleTab) => params?.characteristicName.includes(titleTab) && titleTab
  )[0];

  return (
    <div className="flex col-span-12 flex-col md:hidden">
      <div className="flex justify-between items-center px-6">
        {Object.entries(dataTabs).map(([characteristicPath, titleTab]) => {
          return (
            <Tab
              key={titleTab}
              borderTab={borderTab}
              titleTab={titleTab}
              namePlanet={name}
              characteristicPath={characteristicPath}
            />
          );
        })}
      </div>
      <Line />
    </div>
  );
};
