const input = require("readline-sync");

const TOTALNUMBERS = 10;
const numbers = [];
const odd = [];
const pairs = [];

let sum = 0;

for (let index = 0; index < TOTALNUMBERS; index++) {
  const number = input.questionInt(`Digite o ${index + 1}º número: `, {
    limitMessage: "Valor inválido!\n",
  });
  numbers.push(number);

  index % 2 !== 0 && odd.push(number);
  numbers[index] % 2 === 0 && pairs.push(number);

  sum += number;
}

const average = (sum / TOTALNUMBERS).toFixed(1);

console.log(`\nElementos nos índices ímpares: ${odd.join(" ")}`);
console.log(`Elementos pares: ${pairs.join(" ")}`);
console.log(`Soma: ${sum}`);
console.log(`Média: ${average}`);
