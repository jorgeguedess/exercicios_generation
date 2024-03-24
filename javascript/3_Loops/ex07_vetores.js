const input = require("readline-sync");

const numbers = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
console.log(`Números: [${numbers}]`);

const number = input.questionInt(
  "\nDigite o número que você deseja encontrar: ",
  {
    limitMessage: "Valor inválido!\n",
  }
);

const index = numbers.indexOf(number);

index !== -1
  ? console.log(`\nO número ${number} está localizado na posição: ${index}`)
  : console.log(`\nO número ${number} não foi encontrado!`);
