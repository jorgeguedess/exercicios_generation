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

const nome = input.question("Digite o Nome do doador: ", {
  limitMessage: "Nome inválido!\n",
});
const idade = inputInt("Digite a Idade do doador: ", "Idade inválida!\n");
const primeiraDoacao = input
  .question("Primeira doação de sangue? (s - sim/n - não):  ")
  .toLowerCase();
const naoPodeDoar = primeiraDoacao.startsWith("s");

const aptoParaDoar =
  idade >= 18 && idade <= 69 && !(idade >= 60 && naoPodeDoar);

console.log(
  `\n${nome} ${
    aptoParaDoar ? "está apto(a) para" : "não está apto(a) para"
  } doar sangue!`
);
