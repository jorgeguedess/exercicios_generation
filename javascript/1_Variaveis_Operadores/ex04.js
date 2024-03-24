const input = require("readline-sync");

const numbers = [];

const calculateDifference = (numbers = []) =>
  numbers[0] * numbers[1] - numbers[2] * numbers[3];

for (let i = 0; i < 4; i++) {
  numbers[i] = input.questionFloat(`${i + 1}º número: `, {
    limitMessage: "Valor inválido.\n",
  });
}

const difference = calculateDifference(numbers);
console.log(`\nDiferença: ${difference}`);
