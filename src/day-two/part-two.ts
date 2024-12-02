export const getAnswer = (input: string[]) => {
  return input
    .map((rowString) => rowString.split(" "))
    .map((row) => {
      const numberRow = row.map((v) => parseInt(v));

      const numberRows = numberRow.map((_, i, a) => {
        const clone = [...a];
        clone.splice(i, 1);
        return clone;
      });

      return [numberRow, ...numberRows].some((multiRow) => {
        return (
          (multiRow.every((v, i, a) => i === 0 || v > a[i - 1]) ||
            multiRow.every((v, i, a) => i === 0 || v < a[i - 1])) &&
          multiRow.every((v, i, a) => i === 0 || Math.abs(v - a[i - 1]) <= 3)
        );
      });
    })
    .filter(Boolean).length;
};
