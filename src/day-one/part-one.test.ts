import { expect, test } from "vitest";
import { getAnswer } from "./part-one";
import { inputToArray } from "../utils/input-to-array";

const exampleInput = inputToArray("./src/day-one/input.example.txt");
const input = inputToArray("./src/day-one/input.txt");

test("getAnswer returns correct answer for example input", () => {
  expect(getAnswer(exampleInput)).toBe(11);
});

test("getAnswer returns correct answer for input", () => {
  expect(getAnswer(input)).toBe(1938424);
});
