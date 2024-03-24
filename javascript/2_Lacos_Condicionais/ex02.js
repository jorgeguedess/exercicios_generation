const input = require("readline-sync");

const number = input.questionInt("Digite um número: ", {
  limitMessage: "Valor inválido!\n",
});
const parity = number % 2 === 0 ? "par" : "ímpar";
const positivity = number >= 0 ? "positivo" : "negativo";

console.log(`\nO Número ${number} é ${parity} e ${positivity}!`);
