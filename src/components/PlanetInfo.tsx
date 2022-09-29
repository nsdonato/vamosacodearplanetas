import { usePlanet } from "../hooks";

export const PlanetInfo = () => {
  const { planet } = usePlanet();
  const name = planet?.name;
  const { content, source } = planet?.overview;

  return (
    <section className="flex flex-col gap-6 w-[350px] h-[326px]">
      <h1 className="font-antonio text-80 uppercase text-white">{name}</h1>
      <p className="font-spartan text-14 text-gray-light h-auto text-left align-top">
        {content}
      </p>
      <span className="inline-flex font-spartan text-14 pt-1 pb-1 gap-1 w-[164px] h-[25px] text-gray-light">
        Source :
        <a
          className="flex flex-row gap-2 underline font-bold text-gray-light"
          href={source}
        >
          Wikipedia<img className="self-end" src="../icon-source.svg"></img>
        </a>
      </span>
    </section>
  );
};
