const input = require("readline-sync");

const letters = ["A", "B", "C"];
const numbers = letters.map((letter) =>
  input.questionInt(`Digite o número ${letter}: `, {
    limitMessage: "Valor inválido.\n",
  })
);

const sumAB = numbers[0] + numbers[1];
const numberC = numbers[2];

if (sumAB > numberC) {
  console.log("\nA Soma de A + B é Maior do que C");
} else if (sumAB < numberC) {
  console.log("\nA Soma de A + B é Menor do que C");
} else {
  console.log("\nA Soma de A + B é Igual a C");
}
