export const getAnswer = (input: string[]) => {
  const left = input.map((row) => parseInt(row.split("   ")[0])).sort();
  const right = input.map((row) => parseInt(row.split("   ")[1])).sort();

  const difference = left.map((leftValue, index) =>
    Math.abs(leftValue - right[index])
  );

  return difference.reduce((value, total) => total + value, 0);
};
