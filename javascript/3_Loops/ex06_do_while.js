const leia = require("readline-sync");

let numero = 0;
let soma = 0;
let total = 0;

do {
  numero = leia.questionInt("Digite um número (0 para sair): ");
  if (numero > 0) {
    if (numero % 3 == 0) {
      total += 1;
      soma += numero;
    }
  }
} while (numero !== 0);

const media = soma / total;

console.log(
  `\nA média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`
);
