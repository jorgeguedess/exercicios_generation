const input = require("readline-sync");

let number;
let sum = 0;
let total = 0;

do {
  number = input.questionInt("Digite um número (0 para sair): ", {
    limitMessage: "Valor inválido!\n",
  });
  if (number > 0 && number % 3 == 0) {
    total++;
    sum += number;
  }
} while (number !== 0);

const average = total !== 0 ? sum / total : 0;

console.log(
  `\nA média de todos os números múltiplos de 3 é: ${average.toFixed(2)}`
);
