import { readFileSync } from "fs";

export const inputToArray = (fileName: string, splitBy = "\n"): string[] => {
  const input = readFileSync(fileName, "utf8").toString();
  return input.trim().split(splitBy);
};
