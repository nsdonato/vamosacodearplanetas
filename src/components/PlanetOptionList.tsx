import { Button } from "./Button";

interface OptionListProps {
  options: string[];
}

export default function PlanetOptionList({ options }: OptionListProps) {
  return (
    <ul className="p-0 m-0 flex flex-col gap-4">
      {options.map((option, index) => (
        <li key={`option-${index}`}>
          <Button
            className="bg-none border-[1px] border-gray-light flex
          gap-8 pl-8 pr-16 py-3 text-white font-bold w-full tracking-[2px]"
          >
            <span>{`0${index + 1}`}</span>
            <p className="uppercase">{option}</p>
          </Button>
        </li>
      ))}
    </ul>
  );
}
