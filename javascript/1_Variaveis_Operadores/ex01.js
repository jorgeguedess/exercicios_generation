let leia = require("readline-sync");

let salario = leia.questionFloat("\nDigite o Salário: ");
let abono = leia.questionFloat("\nDigite o Abono: ");
let novoSalario = salario + abono;

console.log(novoSalario);
