const leia = require("readline-sync");

let idade = 0;
let maiorDe50 = 0;
let menorDe21 = 0;

while (idade >= 0) {
  idade = leia.questionInt("Digite uma idade (-1 para sair): ");
  if (idade > 50) {
    maiorDe50++;
  } else if (idade >= 0 && idade < 21) {
    console.log(idade);
    menorDe21++;
  }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menorDe21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiorDe50}`);
