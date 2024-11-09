import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Timer } from "./timer";

describe("Timer", () => {
  test("should display hours", () => {
    render(<Timer />);

    expect(screen.getByText("timer")).toBeInTheDocument();
  });
});
