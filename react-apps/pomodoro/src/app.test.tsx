import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should display title", () => {
    render(<App />);

    expect(screen.getByText("Countdown Timer")).toBeInTheDocument();
  });

  test("should display countdown timer", () => {
    render(<App />);

    expect(screen.getByTestId("timer")).toBeInTheDocument();
  });
});
