const leia = require("readline-sync");

let pares = 0;
let impares = 0;

for (let index = 0; index < 10; index++) {
  let numero = leia.questionInt(`Digite o ${index + 1}º número: `);
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`\nTotal de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);
