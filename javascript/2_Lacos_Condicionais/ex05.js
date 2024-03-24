const input = require("readline-sync");

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

function displayMenu() {
  console.log(`
    \x1b[1mCódigo do Produto\x1b[0m\t| \x1b[1mProduto\x1b[0m\t\t| \x1b[1mPreço Unitário\x1b[0m\t|
    --------------------| --------------------\t| --------------------\t| 
    \x1b[1m1\x1b[0m\t\t\t| Cachorro Quente \t| R$ 10.00 \t\t|
    \x1b[1m2\x1b[0m\t\t\t| X-Salada\t\t| R$ 15.00 \t\t|
    \x1b[1m3\x1b[0m\t\t\t| X-Bacon\t\t| R$ 18.00 \t\t|
    \x1b[1m4\x1b[0m\t\t\t| Bauru\t\t\t| R$ 12.00 \t\t|
    \x1b[1m5\x1b[0m\t\t\t| Refrigerante\t\t| R$ 8.00 \t\t|
    \x1b[1m6\x1b[0m\t\t\t| Suco de laranja\t| R$ 13.00 \t\t|
  `);
}

displayMenu();

const productCode = inputInt(
  "Código do Produto: ",
  "Código precisa ser um número de 1 a 6\n"
);

let product = "";
let price = 0;

switch (productCode) {
  case 1:
    product = "Cachorro Quente";
    price = 10;
    break;
  case 2:
    product = "X-Salada";
    price = 15;
    break;
  case 3:
    product = "X-Bacon";
    price = 18;
    break;
  case 4:
    product = "Bauru";
    price = 12;
    break;
  case 5:
    product = "Refrigerante";
    price = 8;
    break;
  case 6:
    product = "Suco de laranja";
    price = 13;
    break;

  default:
    console.log("Opção invalida!");
    process.exit(1);
}

const amount = inputInt("Quantidade: ", "Quantidade inválida!\n");
const totalPrice = amount * price;

console.log(`\nProduto: ${product}`);
console.log(`Valor total: R$ ${totalPrice.toFixed(2)}`);
