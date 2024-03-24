const input = require("readline-sync");

let number = 0;
let sum = 0;

do {
  number = input.questionInt("Digite um número (0 para sair): ", {
    limitMessage: "Valor inválido!\n",
  });
  if (number > 0) sum += number;
} while (number !== 0);

console.log(`\nA soma dos números positivos é: ${sum}`);
