const leia = require("readline-sync");

let continua = "S",
  idade,
  genero,
  categoria;
let back = 0,
  front = 0,
  mobile = 0,
  full = 0,
  total = 0,
  somaIdade = 0,
  media = 0.0;

while (continua === "S") {
  idade = leia.questionInt("\nDigite a idade: ");

  console.log(`
    \x1b[1mCódigo do Gênero\x1b[0m\t| \x1b[1mGênero\x1b[0m\t\t
    --------------------|---------------\t
    \x1b[1m1\x1b[0m\t\t\t| Mulher Cis\t
    \x1b[1m2\x1b[0m\t\t\t| Homem Cis\t
    \x1b[1m3\x1b[0m\t\t\t| Não Binário\t
    \x1b[1m4\x1b[0m\t\t\t| Mulher Trans\t
    \x1b[1m5\x1b[0m\t\t\t| Homem Trans\t
    \x1b[1m6\x1b[0m\t\t\t| Outros\t
`);

  genero = leia.questionInt("Digite o Código do Gênero: ");
  while (genero < 0 || genero > 6) {
    genero = leia.questionInt("Código inválido. Digite de 1 a 6: ");
  }

  console.log(`
  \x1b[1mCódigo de Desenvolvedor(a)\x1b[0m\t| \x1b[1mDesenvolvedor(a)\x1b[0m\t\t
  ------------------------------|---------------\t
  \x1b[1m1\x1b[0m\t\t\t\t| Backend\t
  \x1b[1m2\x1b[0m\t\t\t\t| Frontend\t
  \x1b[1m3\x1b[0m\t\t\t\t| Mobile\t
  \x1b[1m4\x1b[0m\t\t\t\t| FullStack\t
`);

  categoria = leia.questionInt("Digite o Código de Desenvolvedor(a): ");
  while (categoria < 0 || categoria > 6) {
    categoria = leia.questionInt("Código inválido. Digite de 1 a 4: ");
  }

  if (categoria === 1) back++;

  if (categoria === 2 && (genero === 1 || genero === 4)) front++;

  if (categoria === 3 && (genero === 2 || genero === 5) && idade > 40) mobile++;

  if (categoria === 4 && genero === 3 && idade < 30) full++;

  total += 1;

  somaIdade += idade;

  media = somaIdade / total;

  continua = leia.question("\nDeseja continuar (S/N)? ").toUpperCase();
  while (continua !== "S" && continua !== "N") {
    continua = leia
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
  `Média de idade das pessoas que responderam a pesquisa: ${media.toFixed(2)}`
);
