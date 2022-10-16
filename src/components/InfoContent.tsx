import { ContentPlanet } from "@planet/types";

interface InfoContentProps {
  dataCharacteristic: ContentPlanet;
  namePlanet: string;
}

export const InfoContent = ({
  dataCharacteristic,
  namePlanet,
}: InfoContentProps) => {
  return (
    <div className="px-6 flex flex-col md:col-span-7 justify-center items-center md:items-start md:py-8 md:px-4 lg:col-span-12 lg:p-0 lg:justify-end">
      <h1 className="font-antonio font-medium text-40 leading-normal tracking-0 uppercase text-white md:text-48 lg:text-80">
        {namePlanet}
      </h1>
      <p className="w-3/4 text-white font-spartan font-regular text-11 leading-22 tracking-0 text-center mt-4 mb-8 md:text-left md:mt-6 md:w-11/12 lg:text-14 lg:leading-25 lg:my-6">
        {dataCharacteristic.content}
      </p>
      <span className="font-spartan font-regular text-12 leading-25 tracking-0 text-gray-light flex items-center lg:text-14">
        Source :
        <a
          className="underline font-bold cursor-pointer pl-1"
          href={dataCharacteristic.source}
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>
        <img src="/icon-source.svg" className="ml-1 w-3 h-3" alt="source" />
      </span>
    </div>
  );
};
