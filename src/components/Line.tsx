interface LineProps {
  className?: string;
}
export const Line = ({ className = "" }: LineProps) => (
  <div className={`h-0.5 ${className} bg-gray last:hidden`}></div>
);
