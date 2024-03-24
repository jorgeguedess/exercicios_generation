const input = require("readline-sync");

let pairs = 0;
let odd = 0;

for (let index = 0; index < 10; index++) {
  const number = input.questionInt(`Digite o ${index + 1}º número: `, {
    limitMessage: "Número inválido!\n",
  });
  number % 2 === 0 ? pairs++ : odd++;
}

console.log(`\nTotal de números pares: ${pairs}`);
console.log(`Total de números ímpares: ${odd}`);
