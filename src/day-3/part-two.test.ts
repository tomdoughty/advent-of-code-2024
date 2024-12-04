import { expect, test } from "vitest";
import { getAnswer } from "./part-two";
import { inputToString } from "../utils/input-to-string";

const exampleInput = inputToString("./src/day-3/input.example2.txt");
const input = inputToString("./src/day-3/input.txt");

test("getAnswer returns correct answer for example input", () => {
  expect(getAnswer(exampleInput)).toBe(48);
});

test("getAnswer returns correct answer for input", () => {
  expect(getAnswer(input)).toBe(63013756);
});
