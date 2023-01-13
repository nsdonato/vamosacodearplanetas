import { render, screen } from "../utils/test-utils";
import { InfoContent } from "../components/InfoContent";

describe("InfoContent", () => {
  test("should render info of planet jupiter", () => {
    render(
      <InfoContent
        namePlanet="jupiter"
        dataCharacteristic={{ content: "content", source: "source" }}
      />
    );

    expect(screen.getByText(/jupiter/i)).toBeInTheDocument();
    expect(screen.getByText(/wikipedia/i)).toBeInTheDocument();
    expect(screen.getByText(/Source :/i)).toBeInTheDocument();
  });
});
