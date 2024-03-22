const leia = require("readline-sync");

console.log(`
    \x1b[1mCódigo da Operação\x1b[0m\t| \x1b[1mOperação\x1b[0m\t|
    ------------------\t| -------------\t|
    \x1b[1m1\x1b[0m\t\t\t| Saldo \t| 
    \x1b[1m2\x1b[0m\t\t\t| Saque\t\t| 
    \x1b[1m3\x1b[0m\t\t\t| Depósito\t|
`);

const saldo = 1000;
const operacao = leia.questionInt("Digite a opcao desejada: ");

switch (operacao) {
  case 1:
    console.log("Operação - Saldo");
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
    break;

  case 2:
    console.log("Operação - Saque");
    const valor = leia.questionFloat("Valor: R$ ");

    if (saldo > valor) {
      const novoSaldo = (saldo - valor).toFixed(2);
      console.log(`\nNovo Saldo: R$ ${novoSaldo}`);
    } else {
      console.log("\nSaldo Insuficiente!");
    }
    break;

  case 3:
    console.log("Operação - Depósito");
    const deposito = leia.questionFloat("Valor: R$ ");
    const novoSaldo = saldo + deposito;
    console.log(`\nNovo Saldo: R$ ${novoSaldo}`);
    break;

  default:
    console.log("Opção inválida!");
    break;
}
