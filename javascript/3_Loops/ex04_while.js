const input = require("readline-sync");

let continua = "S",
  age,
  gender,
  category;
let back = 0,
  front = 0,
  mobile = 0,
  full = 0,
  total = 0,
  sumAge = 0,
  average = 0.0;

while (continua === "S") {
  age = input.questionInt("\nDigite a idade: ", {
    limitMessage: "Valor inválido!\n",
  });
  while (age <= 0) {
    age = input.questionInt("Idade inválida. Digite novamente: ", {
      limitMessage: "Valor inválido!\n",
    });
  }

  displayMenuGender();

  gender = input.questionInt("Digite o Código do Gênero: ", {
    limitMessage: "Valor inválido!\n",
  });
  while (gender <= 0 || gender > 6) {
    displayMenuGender();
    gender = input.questionInt("Código inválido. Digite de 1 a 6: ", {
      limitMessage: "Valor inválido!:\n",
    });
  }

  displayMenuDev();

  category = input.questionInt("Digite o Código de Desenvolvedor(a): ", {
    limitMessage: "Valor inválido!\n",
  });
  while (category <= 0 || category > 4) {
    displayMenuDev();
    category = input.questionInt("Código inválido. Digite de 1 a 4: ", {
      limitMessage: "Valor inválido!:\n",
    });
  }

  if (category === 1) back++;
  if (category === 2 && (gender === 1 || gender === 4)) front++;
  if (category === 3 && (gender === 2 || gender === 5) && age > 40) mobile++;
  if (category === 4 && gender === 3 && age < 30) full++;

  total += 1;

  sumAge += age;
  average = sumAge / total;

  continua = input.question("\nDeseja continuar (S/N)? ").toUpperCase();
  while (continua !== "S" && continua !== "N") {
    continua = input
      .question("\nOpção inválida digite (S - Sim/N - Não): ")
      .toUpperCase();
  }
}

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${back}`);
console.log(`Total de Mulheres desenvolvedoras Frontend: ${front}`);
console.log(
  `Total de Homens desenvolvedores Mobile maiores de 40 anos: ${mobile}`
);
console.log(
  `Total de Pessoas Não Binárias desenvolvedoras/es Full menores de 30 anos: ${full}`
);
console.log(`Total de pessoas que responderam a pesquisa: ${total}`);
console.log(
  `Média de idade das pessoas que responderam a pesquisa: ${average.toFixed(1)}`
);

function displayMenuGender() {
  console.log(`
  \x1b[1mCódigo do Gênero\x1b[0m\t| \x1b[1mGênero\x1b[0m\t\t
  ----------------------|---------------\t
  \x1b[1m1\x1b[0m\t\t\t| Mulher Cis\t
  \x1b[1m2\x1b[0m\t\t\t| Homem Cis\t
  \x1b[1m3\x1b[0m\t\t\t| Não Binário\t
  \x1b[1m4\x1b[0m\t\t\t| Mulher Trans\t
  \x1b[1m5\x1b[0m\t\t\t| Homem Trans\t
  \x1b[1m6\x1b[0m\t\t\t| Outros\t
`);
}

function displayMenuDev() {
  console.log(`
  \x1b[1mCódigo de Desenvolvedor(a)\x1b[0m\t| \x1b[1mDesenvolvedor(a)\x1b[0m\t\t
  ------------------------------|---------------\t
  \x1b[1m1\x1b[0m\t\t\t\t| Backend\t
  \x1b[1m2\x1b[0m\t\t\t\t| Frontend\t
  \x1b[1m3\x1b[0m\t\t\t\t| Mobile\t
  \x1b[1m4\x1b[0m\t\t\t\t| FullStack\t
`);
}
