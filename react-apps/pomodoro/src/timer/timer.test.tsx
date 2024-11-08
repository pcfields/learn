import { describe, expect, test } from "vitest";
import { Timer } from "./timer";

describe("Timer", () => {
  test("should display hours", () => {
    expect(<Timer />).toBeInTheDocument();
  });
});
