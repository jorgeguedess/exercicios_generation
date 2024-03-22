const leia = require("readline-sync");

const nome = leia.question("Digite o Nome do doador: ");
const idade = leia.questionInt("Digite a Idade do doador: ");
const primeiraDoacao = leia
  .question("Primeira doação de sangue? (s - sim/n - não):  ")
  .toLowerCase();
const naoPodeDoar = primeiraDoacao.startsWith("s") || primeiraDoacao === "true";

if (idade >= 18 && idade <= 69) {
  if (idade >= 60) {
    if (naoPodeDoar) {
      console.log(`${nome} não está apto(a) para doar sangue!`);
    } else {
      console.log(`${nome} está apto(a) para doar sangue!`);
    }
  } else {
    console.log(`${nome} está apto(a) para doar sangue!`);
  }
} else {
  console.log(`${nome} não está apto(a) para doar sangue!`);
}
