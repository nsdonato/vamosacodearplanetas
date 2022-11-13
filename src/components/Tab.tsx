import { Link } from "wouter";

interface TabProp {
  titleTab: string;
  namePlanet: string;
  characteristicPath: string;
  borderTab: string;
}

export const Tab = ({
  titleTab,
  namePlanet,
  characteristicPath,
  borderTab,
}: TabProp) => {
  return (
    <Link href={`/planets/${namePlanet.toLowerCase()}/${characteristicPath}`}>
      <button
        className={`uppercase font-spartan text-9 tracking-1.93 leading-normal font-bold py-5 ${
          characteristicPath.includes(borderTab)
            ? `border-b-4 border-${namePlanet.toLowerCase()}`
            : "text-gray-light hover:text-white"
        }`}
      >
        {titleTab}
      </button>
    </Link>
  );
};
