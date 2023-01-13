interface LineProps {
  className?: string;
}
export const Line = ({ className = "" }: LineProps) => (
  <div data-testid="line" className={`h-px ${className} bg-gray`}></div>
);
