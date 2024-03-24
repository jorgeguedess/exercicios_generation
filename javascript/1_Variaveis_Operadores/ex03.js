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

const salaryGross = inputFloat("Salário Bruto: R$ ", "Salário inválido.\n");
const additional = inputFloat("Adicional Noturno: ", "Adicional inválido.\n");
const extraHours = inputFloat("Horas Extras: ", "Horas inválidas.\n");
const discounts = inputFloat("Descontos: ", "Descontos inválidos.\n");

const salaryNet = salaryGross + additional + extraHours * 5 - discounts;
console.log(`\nSalário Líquido: ${formatCurrency(salaryNet)}`);
