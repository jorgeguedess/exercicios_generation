const leia = require("readline-sync");

const numero1 = leia.questionInt("Digite o primeiro número do intervalo: ");
const numero2 = leia.questionInt("Digite o último número do intervalo: ");

if (numero1 < numero2) {
  console.log(`No Intervalo entre ${numero1} e ${numero2}:\n`);
  for (let index = numero1; index < numero2; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      console.log(`${index} é múltiplo de 3 e 5`);
    }
  }
} else {
  console.log("Intervalo inválido!");
}
