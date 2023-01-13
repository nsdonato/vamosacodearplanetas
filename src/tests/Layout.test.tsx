import { act, render, renderHook, screen } from "../utils/test-utils";
import { Layout } from "../components/Layout";
import { usePlanet } from "../hooks";
import { PlanetProvider } from "../context/PlanetProvider";

describe("Layout", () => {
  test("should show Loading", () => {
    render(<Layout />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("should show Loading", () => {
    render(<Layout />, {
      wrapper: ({ children }) => (
        <PlanetProvider planetName="jupiter">{children}</PlanetProvider>
      ),
    });
    const { result } = renderHook(() => usePlanet());
    act(() => {
      result.current.isLoad = true;
    });
    expect(result.current.isLoad).toBe(true);
    screen.debug();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
