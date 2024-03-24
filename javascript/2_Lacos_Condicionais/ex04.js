const input = require("readline-sync");

const opcoes = [
  ["vertebrado", "invertebrado"],
  ["ave", "mamifero", "inseto", "anelideo"],
  ["carnivoro", "onivoro", "herbivoro", "hematofago"],
];

const animais = {
  vertebrado: {
    ave: {
      carnivoro: "Águia",
      onivoro: "Pomba",
    },
    mamifero: {
      onivoro: "Homem",
      herbivoro: "Vaca",
    },
  },
  invertebrado: {
    inseto: {
      hematofago: "Pulga",
      herbivoro: "Lagarta",
    },
    anelideo: {
      hematofago: "Sanguessuga",
      onivoro: "Minhoca",
    },
  },
};

function messageError(arrayOption = []) {
  return `Opção inválida. [${arrayOption.join(" / ")}]\n`;
}

function inputQuestion(prompt, opcoes) {
  return input.question(prompt, {
    limit: opcoes,
    limitMessage: messageError(opcoes),
  });
}

const palavras = Array.from({ length: 3 }, (_, i) =>
  inputQuestion(
    `Digite a ${i + 1}ª palavra [${opcoes[i].join(" / ")}]: `,
    opcoes[i]
  )
);

const animal =
  animais[palavras[0]]?.[palavras[1]]?.[palavras[2]] ?? "Animal não encontrado";
console.log(`\n${animal}`);
