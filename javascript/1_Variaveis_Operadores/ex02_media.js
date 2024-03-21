let leia = require("readline-sync");

let nota1 = leia.questionFloat("1º Nota: ");
let nota2 = leia.questionFloat("2º Nota: ");
let nota3 = leia.questionFloat("3º Nota: ");
let nota4 = leia.questionFloat("4º Nota: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nMédia final:", media.toFixed(1));
