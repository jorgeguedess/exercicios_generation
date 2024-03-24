const input = require("readline-sync");

function displayMenu() {
  console.log(`
  \x1b[1mCódigo do Cargo\x1b[0m\t| \x1b[1mCargo\x1b[0m\t\t| \x1b[1mPercentual do Reajuste\x1b[0m |
  --------------------| -------------\t| -----------------------| 
  \x1b[1m1\x1b[0m\t\t\t| Gerente \t| 10% \t\t\t |
  \x1b[1m2\x1b[0m\t\t\t| Vendedor\t| 7% \t\t\t |
  \x1b[1m3\x1b[0m\t\t\t| Supervisor\t| 9% \t\t\t |
  \x1b[1m4\x1b[0m\t\t\t| Motorista\t| 6% \t\t\t |
  \x1b[1m5\x1b[0m\t\t\t| Estoquista\t| 5% \t\t\t |
  \x1b[1m6\x1b[0m\t\t\t| Técnico de TI\t| 8% \t\t\t |
`);
}

displayMenu();

const name = input.question("Nome do colaborador: ", {
  limitMessage: "Nome inválido!",
});
const jobCode = inputInt("Cargo: ", "Código precisa ser um número de 1 a 6\n");

let readjustment = 0;
let job = "";

switch (jobCode) {
  case 1:
    job = "Gerente";
    readjustment = 10;
    break;
  case 2:
    job = "Vendedor";
    readjustment = 7;
    break;
  case 3:
    job = "Supervisor";
    readjustment = 9;
    break;
  case 4:
    job = "Motorista";
    readjustment = 6;
    break;
  case 5:
    job = "Estoquista";
    readjustment = 5;
    break;
  case 6:
    job = "Técnico de TI";
    readjustment = 8;
    break;

  default:
    console.log("Cargo inválido!");
    process.exit(1);
}

const salary = inputFloat("Salário: R$ ", "Salário inválido.");
const adjustedSalary = salary * (1 + readjustment / 100);

console.log(`\nNome do colaborador: ${name}`);
console.log(`Cargo: ${job}`);
console.log(`Salário: ${formatCurrency(adjustedSalary)}`);

function inputInt(message = "", limitMessage = "") {
  let value;
  do {
    value = input.questionInt(message, {
      limitMessage,
    });
    if (value <= 0) {
      console.log(limitMessage);
    }
  } while (isNaN(value) || value <= 0);
  return value;
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

function formatCurrency(price = 0) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(price));
}
