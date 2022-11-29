import { render, screen } from "../utils/test-utils";
import { Button } from "../components/Button";

// TODO: h3 no es una etiqueta valida para estar dentro de un Button
// Realizar tarea en Trello de mejoras y tenerlo en cuenta.

// Test de ejemplo, sin terminar, pero corriendo ok
it("should render", () => {
  render(
    <Button
      name="jupiter"
      title={"jupiter"}
      characteristicName={"jupiter"}
      index={0}
    />
  );
  expect(screen.queryByText("jupiter")).toBeInTheDocument();
});
