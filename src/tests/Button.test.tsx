import { render, screen, userEvent } from "../utils/test-utils";
import { Button } from "../components/Button";

describe("Button", () => {
  const planetName = "jupiter";

  const internal = "internal-structure";
  const overview = "overview";
  const surface = "surface-geology";

  test("should render", () => {
    const { rerender } = render(
      <Button
        name={planetName}
        title={overview}
        characteristicName={overview}
        index={0}
      />
    );

    const firstButton = screen.getByRole("button", {
      name: /01 overview/i,
    });

    expect(firstButton).toBeInTheDocument();
    expect(firstButton).toHaveClass(`bg-${planetName}`);

    rerender(
      <Button
        name={planetName}
        title={internal}
        characteristicName={internal}
        index={1}
      />
    );

    expect(
      screen.getByRole("button", {
        name: /02 internal structure/i,
      })
    ).toBeInTheDocument();

    rerender(
      <Button
        name={planetName}
        title={surface}
        characteristicName={surface}
        index={2}
      />
    );

    expect(
      screen.getByRole("button", {
        name: /03 surface geology/i,
      })
    ).toBeInTheDocument();
  });

  test("should call /planets/jupiter/overview when click on first button", async () => {
    render(
      <Button
        name={planetName}
        title={overview}
        characteristicName={overview}
        index={0}
      />
    );

    const buttonOverview = screen.getByRole("button", {
      name: /01 overview/i,
    });

    await userEvent.click(buttonOverview);

    expect(window.location.pathname).toBe("/planets/jupiter/overview");
  });

  test("should call /planets/jupiter/internal-structure when click on first button", async () => {
    render(
      <Button
        name={planetName}
        title={internal}
        characteristicName={internal}
        index={1}
      />
    );

    const buttonOverview = screen.getByRole("button", {
      name: /02 internal structure/i,
    });

    await userEvent.click(buttonOverview);

    expect(window.location.pathname).toBe(
      "/planets/jupiter/internal-structure"
    );
  });

  test("should call /planets/jupiter/surface-geology when click on first button", async () => {
    render(
      <Button
        name={planetName}
        title={surface}
        characteristicName={surface}
        index={2}
      />
    );

    const buttonOverview = screen.getByRole("button", {
      name: /03 surface geology/i,
    });

    await userEvent.click(buttonOverview);

    expect(window.location.pathname).toBe("/planets/jupiter/surface-geology");
  });
});
