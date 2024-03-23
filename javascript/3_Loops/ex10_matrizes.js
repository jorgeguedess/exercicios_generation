const leia = require("readline-sync");

const NUMERO_PARTICIPANTES = 10;
const BIMESTRES = 4;

const notasAnterior = [
  [4.0, 5.0, 7.0, 3.0],
  [2.5, 6.5, 4.7, 8.0],
  [10.0, 8.5, 9.5, 8.0],
  [9.0, 6.5, 7.6, 8.2],
  [5.0, 5.0, 5.0, 6.3],
  [7.0, 8.0, 9.0, 8.5],
  [5.5, 3.5, 2.5, 1.0],
  [8.0, 9.0, 10.0, 9.5],
  [5.6, 5.8, 6.5, 7.0],
  [7.5, 8.5, 9.5, 10.0],
];
let mediasAnterior = [];
let medias = [];

console.log("Nota dos alunos anteriores:\n");
for (let i = 0; i < NUMERO_PARTICIPANTES; i++) {
  let soma = 0;
  for (let j = 0; j < BIMESTRES; j++) {
    soma += notasAnterior[i][j];
  }
  let media = soma / BIMESTRES;
  mediasAnterior.push(media);
  console.log(`Aluno ${i + 1}: ${media.toFixed(1)}`);
}

console.log("\n\nNovo Cadastro de Notas:\n");
for (let i = 0; i < NUMERO_PARTICIPANTES; i++) {
  let notasAluno = [];
  let soma = 0;
  let nota = 0;
  console.log(`\nAluno ${i + 1}:`);
  for (let j = 0; j < BIMESTRES; j++) {
    do {
      nota = leia.questionFloat(`Nota do ${j + 1}º bimestre: `, {
        limitMessage: "Digite um número",
      });
      if (nota < 0 || nota > 10) {
        console.log("Nota inválida. Digite uma nota de 0 a 10");
      }
    } while (nota < 0 || nota > 10);
    notasAluno.push(nota);
    soma += nota;
  }
  let media = (soma / BIMESTRES).toFixed(1);
  medias.push(media);
  console.log(`Média do aluno ${i + 1}: ${media}`);
}

console.log("\n\nResumo das médias:\n");
for (let i = 0; i < NUMERO_PARTICIPANTES; i++) {
  const media = medias[i];
  console.log(`Aluno ${i + 1}: ${media}`);
}
