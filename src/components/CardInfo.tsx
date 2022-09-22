interface CardProps {
  title: string;
  value?: string;
}

export const CardInfo = ({ title, value }: CardProps) => {
  return (
    <div className="flex flex-col text-left border-solid border-2 border-gray w-[255px] h-[128px] p-6">
      <p className="font-spartan font-bold text-11 text-gray-light text-l tracking-1 leading-6">
        {title}
      </p>
      <p className="font-antonio font-medium text-40 uppercase tracking-1.5">
        {value}
      </p>
    </div>
  );
};
