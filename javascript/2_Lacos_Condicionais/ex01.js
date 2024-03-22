const leia = require("readline-sync");

const numeroA = leia.questionInt("Digite o número A: ");
const numeroB = leia.questionInt("Digite o número B: ");
const numeroC = leia.questionInt("Digite o número C: ");

if (numeroA + numeroB > numeroC) {
  console.log("A Soma de A + B é Maior do que C");
} else if (numeroA + numeroB < numeroC) {
  console.log("A Soma de A + B é Menor do que C");
} else if (numeroA + numeroB === numeroC) {
  console.log("A Soma de A + B é Igual a C");
}
