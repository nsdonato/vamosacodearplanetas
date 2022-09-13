interface CardProps {
  title: string;
  value: string;
}

export const CardInfo = ({ title, value }: CardProps) => {
  return (
    <>
      <p>{title}</p>
      <p>{value}</p>
    </>
  );
};
