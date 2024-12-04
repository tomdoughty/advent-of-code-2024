import { expect, test } from "vitest";
import { getAnswer } from "./part-one";
import { inputToArray } from "../utils/input-to-array";

const exampleInput = inputToArray("./src/day-2/input.example.txt");
const input = inputToArray("./src/day-2/input.txt");

test("getAnswer returns correct answer for example input", () => {
  expect(getAnswer(exampleInput)).toBe(2);
});

test("getAnswer returns correct answer for input", () => {
  expect(getAnswer(input)).toBe(624);
});
