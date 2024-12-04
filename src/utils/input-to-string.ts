import { readFileSync } from "fs";

export const inputToString = (fileName: string): string => {
  return readFileSync(fileName, "utf8").toString().trim();
};
