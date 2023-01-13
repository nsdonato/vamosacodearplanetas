import { render, screen } from "../utils/test-utils";
import { Line } from "../components/Line";

describe("Line", () => {
  test("should render with class", () => {
    const className = "test";
    render(<Line className={className} />);
    expect(screen.getByTestId(/line/i)).toBeInTheDocument();
    expect(screen.getByTestId(/line/i)).toHaveClass(
      `h-px ${className} bg-gray`
    );
  });

  test("should render without class", () => {
    render(<Line className="" />);
    expect(screen.getByTestId(/line/i)).toBeInTheDocument();
    expect(screen.getByTestId(/line/i)).not.toHaveClass("test");
  });
});
