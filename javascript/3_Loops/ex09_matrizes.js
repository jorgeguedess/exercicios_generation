const input = require("readline-sync");

const QUANTITY = 3;

const matrix = [];
const mainDiagonal = [];
const secondaryDiagonal = [];

let mainDiagonalSum = 0;
let secondaryDiagonalSum = 0;

function createMatrix() {
  for (let i = 0; i < QUANTITY; i++) {
    matrix[i] = [];
    for (let j = 0; j < QUANTITY; j++) {
      matrix[i][j] = input.questionInt(
        `Digite o numero do elemento [${i}][${j}]: `,
        {
          limitMessage: "Valor Inválido!\n",
        }
      );
    }
  }
}

function calculateDiagonals() {
  for (let i = 0; i < QUANTITY; i++) {
    mainDiagonal.push(matrix[i][i]);
    secondaryDiagonal.push(matrix[i][2 - i]);

    mainDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][2 - i];
  }
}

function displayResults() {
  console.log(`\nElementos da Diagonal Principal: ${mainDiagonal.join(" ")}`);
  console.log(
    `Elementos da Diagonal Secundária: ${secondaryDiagonal.join(" ")}`
  );
  console.log(`Soma dos Elementos da Diagonal Principal: ${mainDiagonalSum}`);
  console.log(
    `Soma dos Elementos da Diagonal Secundária: ${secondaryDiagonalSum}`
  );
}

createMatrix();
calculateDiagonals();
displayResults();
