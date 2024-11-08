import { expect } from "vitest";
import * as matches from "@testing-library/jest-dom/matchers";
//NOTE: do I need to do cleanup after each test?

expect.extend(matches);
