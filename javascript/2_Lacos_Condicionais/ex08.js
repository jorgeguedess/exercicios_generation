const input = require("readline-sync");

let balance = 1000;

function displayMenu() {
  console.log(`
  \x1b[1mCódigo da Operação\x1b[0m\t| \x1b[1mOperação\x1b[0m\t|
  ------------------\t| -------------\t|
  \x1b[1m1\x1b[0m\t\t\t| Saldo \t| 
  \x1b[1m2\x1b[0m\t\t\t| Saque\t\t| 
  \x1b[1m3\x1b[0m\t\t\t| Depósito\t|`);
}

function displayBalance() {
  console.log(`\nSaldo: R$ ${balance.toFixed(2)}`);
}

function withdraw() {
  const value = inputFloat("Valor: R$ ", "Valor inválido!\n");

  if (balance >= value) {
    balance -= value;
    console.log(`\nNovo Saldo: R$ ${balance.toFixed(2)}`);
  } else {
    console.log("\nSaldo Insuficiente!");
  }
}

function deposit() {
  const valueDeposit = inputFloat("Valor: R$ ", "Valor inválido!\n");
  balance += valueDeposit;
  console.log(`\nNovo Saldo: R$ ${balance.toFixed(2)}`);
}

function processOperation(operation) {
  switch (operation) {
    case 1:
      console.log("Operação - Saldo");
      displayBalance();
      break;
    case 2:
      console.log("Operação - Saque");
      withdraw();
      break;
    case 3:
      console.log("Operação - Depósito");
      deposit();
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
}

displayMenu();
const operation = inputInt("Digite a opção desejada: ", "Opção inválida!\n");
processOperation(operation);

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
