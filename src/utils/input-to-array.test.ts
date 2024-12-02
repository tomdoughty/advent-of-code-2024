import { expect, test } from "vitest";
import { inputToArray } from "./input-to-array";

test("inputToArray", () => {
  expect(inputToArray("./src/utils/input-to-array.fixture.txt")).toEqual([
    "3   4",
    "4   3",
    "2   5",
    "1   3",
    "3   9",
    "3   3",
  ]);
});
