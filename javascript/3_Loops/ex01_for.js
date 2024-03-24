const input = require("readline-sync");

const number1 = input.questionInt("Digite o primeiro número do intervalo: ", {
  limitMessage: "Número invalido!\n",
});
const number2 = input.questionInt("Digite o último número do intervalo: ", {
  limitMessage: "Número invalido!\n",
});

if (number1 < number2) {
  console.log(`\nNo Intervalo entre ${number1} e ${number2}:\n`);
  for (let index = number1; index < number2; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      console.log(`${index} é múltiplo de 3 e 5`);
    }
  }
} else {
  console.log("Intervalo inválido!");
}
