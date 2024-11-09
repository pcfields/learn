import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Time } from "./time";

describe("Timer", () => {
  test("should display formatted minutes and seconds", () => {
    render(<Time minutes={19} seconds={0} />);

    expect(screen.getByTestId("timer")).toHaveTextContent("19:00");
    expect(screen.getByRole("time")).toHaveTextContent("19:00");
  });

  test("should format single digit minutes and seconds to double digits with zeros in front", () => {
    render(<Time minutes={1} seconds={3} />);

    expect(screen.getByRole("time")).toHaveTextContent("01:03");
  });
});
