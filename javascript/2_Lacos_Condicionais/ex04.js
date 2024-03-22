const leia = require("readline-sync");

const opcao1 = ["vertebrado", "invertebrado"];
const opcao2 = ["ave", "mamifero", "inseto", "anelideo"];
const opcao3 = ["carnivoro", "onivoro", "herbivoro", "hematofago"];

function messageError(arrayOption = []) {
  return `\nOpção inválida. [${arrayOption.join(" / ")}]`;
}

const palavra1 = leia.question("Digite a 1ª palavra: ", {
  limit: opcao1,
  limitMessage: messageError(opcao1),
});
const palavra2 = leia.question("Digite a 2ª palavra: ", {
  limit: opcao2,
  limitMessage: messageError(opcao2),
});
const palavra3 = leia.question("Digite a 3ª palavra: ", {
  limit: opcao3,
  limitMessage: messageError(opcao3),
});

if (palavra1 === "vertebrado") {
  if (palavra2 === "ave") {
    if (palavra3 === "carnivoro") {
      console.log("Águia");
    } else {
      console.log("Pomba");
    }
  } else {
    if (palavra3 === "herbivoro") {
      console.log("Vaca");
    } else {
      console.log("Homem");
    }
  }
} else {
  if (palavra2 === "inseto") {
    if (palavra3 === "herbivoro") {
      console.log("Lagarta");
    } else {
      console.log("Pulga");
    }
  } else {
    if (palavra3 === "onivoro") {
      console.log("Minhoca");
    } else {
      console.log("Sanguessuga");
    }
  }
}
