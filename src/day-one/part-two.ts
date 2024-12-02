export const getAnswer = (input: string[]) => {
  const left = input.map((row) => parseInt(row.split("   ")[0]));
  const right = input.map((row) => parseInt(row.split("   ")[1]));

  const frequency = left.map((leftValue) => {
    return (
      leftValue * right.filter((rightValue) => rightValue === leftValue).length
    );
  });

  return frequency.reduce((value, total) => total + value, 0);
};
