import { render, screen } from "../utils/test-utils";
import { Button } from "../components/Button";

it("should render", () => {
  render(
    <Button name="hola" title={"Test"} characteristicName={"ke"} index={0} />
  );

  expect(screen.queryByText("Test")).toBeInTheDocument();
});
