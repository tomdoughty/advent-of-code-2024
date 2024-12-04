export const getAnswer = (input: string) => {
  return input.match(/mul\((\d+),(\d+)\)/g).reduce((total, command) => {
    const [_, firstNum, secondNum] = command.match(/mul\((\d+),(\d+)\)/);
    return total + parseInt(firstNum) * parseInt(secondNum);
  }, 0);
};
