import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { CountdownTimer } from "./countdown-timer";
import userEvent from "@testing-library/user-event";

describe("Countdown Timer", () => {
  test("should display default 25 mins", () => {
    render(<CountdownTimer />);

    expect(screen.getByRole("time")).toHaveTextContent("25:00");
  });

  test("should allow custom duration", () => {
    render(<CountdownTimer duration={19} />);

    expect(screen.getByRole("time")).toHaveTextContent("19:00");
  });

  test("should display start button", () => {
    render(<CountdownTimer />);

    expect(screen.getByRole("button", { name: "Start" })).toHaveAttribute(
      "type",
      "submit",
    );
  });

  test("should display reset button", () => {
    render(<CountdownTimer />);

    expect(screen.getByRole("button", { name: "Reset" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  test("should display stop button after timer is started", async () => {
    render(<CountdownTimer />);

    const user = userEvent.setup();
    user.click(screen.getByRole("button", { name: "Start" }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();
    });
  });

  test.todo("should not go below 00:00", () => {
    render(<CountdownTimer />);
    expect(screen.getByTestId("timer")).toBeInTheDocument();
  });
});
