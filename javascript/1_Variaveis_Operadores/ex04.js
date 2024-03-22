let leia = require("readline-sync");

let numero1 = leia.questionFloat("1º numero: ");
let numero2 = leia.questionFloat("2º numero: ");
let numero3 = leia.questionFloat("3º numero: ");
let numero4 = leia.questionFloat("4º numero: ");

let calculo = numero1 * numero2 - numero3 * numero4;

console.log("\nDiferença:", calculo);
