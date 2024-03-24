const input = require("readline-sync");

function formatCurrency(price = 0) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(price));
}

function inputFloat(message = "", limitMessage = "") {
  let value;
  do {
    value = input.questionFloat(message, {
      limitMessage,
    });
    if (value <= 0) {
      console.log(limitMessage);
    }
  } while (isNaN(value) || value <= 0);
  return value;
}

const wage = inputFloat("Digite o Salário: R$ ", "Salário inválido.\n");
const allowance = inputFloat("Digite o Abono: ", "Abono inválido.\n");
const newWage = wage + allowance;

console.log(`\nNovo Salário: ${formatCurrency(newWage)}`);
