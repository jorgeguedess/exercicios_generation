const leia = require("readline-sync");

const matriz = new Array(3);
const diagonalPrincipal = [];
const diagonalSecundaria = [];

let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

for (let linha = 0; linha < matriz.length; linha++) {
  matriz[linha] = Array(3);
}

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz.length; coluna++) {
    matriz[linha][coluna] = leia.questionInt(
      `Digite o numero do elemento [${linha}][${coluna}]: `
    );
  }
}

for (let linha = 0; linha < 3; linha++) {
  diagonalPrincipal.push(matriz[linha][linha]);
  diagonalSecundaria.push(matriz[linha][2 - linha]);

  somaDiagonalPrincipal += matriz[linha][linha];
  somaDiagonalSecundaria += matriz[linha][2 - linha];
}

console.log(
  `\nElementos da Diagonal Principal: ${diagonalPrincipal.join(" ")}`
);
console.log(
  `Elementos da Diagonal Secundária: ${diagonalSecundaria.join(" ")}`
);
console.log(
  `Soma dos Elementos da Diagonal Principal: ${somaDiagonalPrincipal}`
);
console.log(
  `Soma dos Elementos da Diagonal Secundária: ${somaDiagonalSecundaria}`
);
