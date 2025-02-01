import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { test } from "node:test";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Home />);
  screen.logTestingPlaygroundURL();
  // ASSERT
  //   expect(screen.getByRole("heading")).toHaveTextContent("hello there");
});
