const leia = require("readline-sync");

let numero = 0;
let soma = 0;

do {
  numero = leia.questionInt("Digite um número (0 para sair): ");
  if (numero > 0) soma += numero;
} while (numero !== 0);

console.log(`\nA soma dos números positivos é: ${soma}`);
