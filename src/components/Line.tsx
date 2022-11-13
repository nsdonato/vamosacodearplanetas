interface LineProps {
  className?: string;
}
export const Line = ({ className = "" }: LineProps) => (
  <div className={`h-px ${className} bg-gray`}></div>
);
