import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders the mocked API data", async () => {
  render(<App />);
  const pokeElement = await screen.findByText(/ditto/i);
  expect(pokeElement).toBeInTheDocument();
});
