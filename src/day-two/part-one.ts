export const getAnswer = (input: string[]) => {
  return input
    .map((rowString) => rowString.split(" "))
    .map((row) => {
      const numberRow = row.map((v) => parseInt(v));
      return (
        (numberRow.every((x, i, a) => i === 0 || x > a[i - 1]) ||
          numberRow.every((x, i, a) => i === 0 || x < a[i - 1])) &&
        numberRow.every((x, i, a) => i === 0 || Math.abs(x - a[i - 1]) <= 3)
      );
    })
    .filter(Boolean).length;
};
