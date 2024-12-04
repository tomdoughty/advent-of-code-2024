export const getAnswer = (input: string) => {
  let valid = true;
  return input
    .match(/(mul\(\d+,\d+\)|don't\(\)|do\(\))/g)
    .reduce((total, command) => {
      if (command.startsWith("mul") && valid) {
        const [_, firstNum, secondNum] = command.match(/mul\((\d+),(\d+)\)/);
        return total + parseInt(firstNum) * parseInt(secondNum);
      }
      if (command === "don't()") valid = false;
      if (command === "do()") valid = true;
      return total;
    }, 0);
};
