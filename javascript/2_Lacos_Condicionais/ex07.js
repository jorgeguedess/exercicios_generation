const leia = require("readline-sync");

console.log(`
    \x1b[1mCódigo\x1b[0m\t| \x1b[1mOperação\x1b[0m\t|
    ------------| -------------\t|
    \x1b[1m1\x1b[0m\t\t| Soma \t\t| 
    \x1b[1m2\x1b[0m\t\t| Subtração\t| 
    \x1b[1m3\x1b[0m\t\t| Multiplicação\t|
    \x1b[1m4\x1b[0m\t\t| Divisão\t| 
`);

const numero1 = leia.questionFloat("Digite o 1º número: ");
const numero2 = leia.questionFloat("Digite o 2º número: ");
const operacao = leia.questionInt("Operação: ");

let operador = "";
let resultado = 0;

switch (operacao) {
  case 1:
    operador = "+";
    resultado = numero1 + numero2;
    break;
  case 2:
    operador = "-";
    resultado = numero1 - numero2;
    break;
  case 3:
    operador = "*";
    resultado = numero1 * numero2;
    break;
  case 4:
    operador = "/";
    resultado = numero1 / numero2;
    break;
  default:
    console.log("\nOperação Inválida!");
    return;
}

console.log(`\n${numero1} ${operador} ${numero2} = ${resultado}`);
