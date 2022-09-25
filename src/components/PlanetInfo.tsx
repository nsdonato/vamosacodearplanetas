import { usePlanet } from "../hooks";

export const PlanetInfo = () => {
  const { planet } = usePlanet();
  const name = planet?.name;
  const { content, source } = planet?.overview;

  return (
    <section className="flex flex-col gap-2 w-[278px] text-white">
      <h1 className="font-antonio text-80 uppercase">{name}</h1>
      <p className="font-spartan text-15 ">{content}</p>
      <p className="flex flex-col justify-items-stretch">
        <span className="font-spartan text-15 text-gray-light">
          Source :
          <a className="p-2 underline" href={source}>
            Wikipedia <img src="../icon-source.svg"></img>
          </a>
        </span>
      </p>
    </section>
  );
};
