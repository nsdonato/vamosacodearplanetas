import { render, screen } from "../utils/test-utils";
import { ImageIcon } from "../components/ImageIcon";

describe("ImageIcon", () => {
  test("should render", () => {
    render(
      <ImageIcon
        src="/assets/icon-source.svg"
        className="ml-1 w-3 h-3"
        altImage="source"
      />
    );
    expect(screen.getByRole("img", { name: /source/i })).toBeInTheDocument();
  });
});
