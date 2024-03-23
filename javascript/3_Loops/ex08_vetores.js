const leia = require("readline-sync");

let numeros = [];
let impares = [];
let pares = [];
let soma = 0;
let media = 0;

let indexImpar = 0;
let indexPar = 0;

for (let index = 0; index < 10; index++) {
  numeros[index] = leia.questionInt(`Digite o ${index + 1}º número: `);

  if (index % 2 !== 0) {
    impares[indexImpar] = numeros[index];
    indexImpar++;
  }
  if (numeros[index] % 2 === 0) {
    pares[indexPar] = numeros[index];
    indexPar++;
  }
  soma += numeros[index];
}

media = soma / 10;

console.log(`Elementos nos índices ímpares: ${impares.join(" ")}`);
console.log(`Elementos pares: ${pares.join(" ")}`);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);
