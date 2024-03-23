const leia = require("readline-sync");

const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
console.log(`Números: [${numeros}]`);

const numero = leia.questionInt(
  "\nDigite o número que você deseja encontrar: "
);

if (numeros.includes(numero)) {
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] === numero) {
      console.log(`O número ${numero} está localizado na posição: ${index}`);
    }
  }
} else {
  console.log(`O número ${numero} não foi encontrado!`);
}
