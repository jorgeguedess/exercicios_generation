const input = require("readline-sync");

function displayMenu() {
  console.log(`
  \x1b[1mCódigo\x1b[0m\t| \x1b[1mOperação\x1b[0m\t|
  --------------| -------------\t|
  \x1b[1m1\x1b[0m\t\t| Soma \t\t| 
  \x1b[1m2\x1b[0m\t\t| Subtração\t| 
  \x1b[1m3\x1b[0m\t\t| Multiplicação\t|
  \x1b[1m4\x1b[0m\t\t| Divisão\t| 
`);
}

const firstNumber = input.questionFloat("Digite o 1º número: ", {
  limitMessage: "Valor inválido!\n",
});
const secondNumber = input.questionFloat("Digite o 2º número: ", {
  limitMessage: "Valor inválido!\n",
});

displayMenu();

const operation = input.questionInt("Operação: ", {
  limitMessage: "Operação Inválida!\n",
});

let operator = "";
let result = 0;

switch (operation) {
  case 1:
    operator = "+";
    result = firstNumber + secondNumber;
    break;
  case 2:
    operator = "-";
    result = firstNumber - secondNumber;
    break;
  case 3:
    operator = "*";
    result = firstNumber * secondNumber;
    break;
  case 4:
    operator = "/";
    result = firstNumber / secondNumber;
    break;
  default:
    console.log("\nOperação Inválida!");
    process.exit(1);
}

console.log(`\n${firstNumber} ${operator} ${secondNumber} = ${result}`);
