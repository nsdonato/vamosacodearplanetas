import { usePlanet } from "../hooks";

export const PlanetInfo = () => {
  const { planet } = usePlanet();
  const name = planet?.name;
  const { content, source } = planet?.overview;

  return (
    <section className="flex flex-col p-2 gap-3 w-[310px]">
      <h1 className="font-antonio text-80 uppercase text-white">{name}</h1>
      <p className="font-spartan text-15 text-gray-light">{content}</p>
      <span className="inline-flex font-spartan text-15 gap-1 text-gray-light">
        Source :
        <a
          className="flex items-strech gap-2 underline font-bold text-gray-light"
          href={source}
        >
          Wikipedia<img className="self-center" src="../icon-source.svg"></img>
        </a>
      </span>
    </section>
  );
};
