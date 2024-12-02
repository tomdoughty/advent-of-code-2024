import { expect, test } from "vitest";
import { getAnswer } from "./part-two";
import { inputToArray } from "../utils/input-to-array";

const exampleInput = inputToArray("./src/day-two/input.example.txt");
const input = inputToArray("./src/day-two/input.txt");

test("getAnswer returns correct answer for example input", () => {
  expect(getAnswer(exampleInput)).toBe(4);
});

test("getAnswer returns correct answer for input", () => {
  expect(getAnswer(input)).toBe(658);
});
