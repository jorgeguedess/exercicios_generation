const leia = require("readline-sync");

console.log(`
    \x1b[1mCódigo do Produto\x1b[0m\t| \x1b[1mProduto\x1b[0m\t\t| \x1b[1mPreço Unitário\x1b[0m\t|
    --------------------| --------------------\t| --------------------\t| 
    \x1b[1m1\x1b[0m\t\t\t| Cachorro Quente \t| R$ 10.00 \t\t|
    \x1b[1m2\x1b[0m\t\t\t| X-Salada\t\t| R$ 10.00 \t\t|
    \x1b[1m3\x1b[0m\t\t\t| X-Bacon\t\t| R$ 10.00 \t\t|
    \x1b[1m4\x1b[0m\t\t\t| Bauru\t\t\t| R$ 10.00 \t\t|
    \x1b[1m5\x1b[0m\t\t\t| Refrigerante\t\t| R$ 10.00 \t\t|
    \x1b[1m6\x1b[0m\t\t\t| Suco de laranja\t| R$ 10.00 \t\t|
`);

const codigoProduto = leia.questionInt("Código do Produto: ");

let produto = "";
let preco = 0;

switch (codigoProduto) {
  case 1:
    produto = "Cachorro Quente";
    preco = 10;
    break;
  case 2:
    produto = "X-Salada";
    preco = 15;
    break;
  case 3:
    produto = "X-Bacon";
    preco = 18;
    break;
  case 4:
    produto = "Bauru";
    preco = 12;
    break;
  case 5:
    produto = "Refrigerante";
    preco = 8;
    break;
  case 6:
    produto = "Suco de laranja";
    preco = 13;
    break;

  default:
    console.log("Opção invalida!");
    return;
}

const quantidade = leia.questionInt("Quantidade: ");
const total = quantidade * preco;

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);
