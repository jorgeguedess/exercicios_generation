const input = require("readline-sync");

let age = 0;
let over50 = 0;
let under21 = 0;

while (age >= 0) {
  age = input.questionInt("Digite uma age (-1 para sair): ", {
    limitMessage: "Idade inválida!\n",
  });
  age < 21 ? under21++ : age > 50 && over50++;
}

console.log(`\nTotal de pessoas menores de 21 anos: ${under21}`);
console.log(`Total de pessoas maiores de 50 anos: ${over50}`);
