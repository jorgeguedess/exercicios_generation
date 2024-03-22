const leia = require("readline-sync");

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

const nome = leia.question("Nome do colaborador: ");
const codigoCargo = leia.questionInt("Cargo: ");

let reajuste = 0;
let cargo = "";

switch (codigoCargo) {
  case 1:
    cargo = "Gerente";
    reajuste = 10;
    break;
  case 2:
    cargo = "Vendedor";
    reajuste = 7;
    break;
  case 3:
    cargo = "Supervisor";
    reajuste = 9;
    break;
  case 4:
    cargo = "Motorista";
    reajuste = 6;
    break;
  case 5:
    cargo = "Estoquista";
    reajuste = 5;
    break;
  case 6:
    cargo = "Técnico de TI";
    reajuste = 8;
    break;

  default:
    console.log("Cargo inválido!");
    return;
}

const salario = leia.questionFloat("Salário: ");
const salarioAjustado = salario * (1 + reajuste / 100);

console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: R$ ${salarioAjustado.toFixed(2)}`);
