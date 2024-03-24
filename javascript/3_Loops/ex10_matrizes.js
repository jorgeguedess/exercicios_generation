const input = require("readline-sync");

const STUDENTS_NUMBER = 10;
const BIMONTHLY = 4;

const previousGrades = [
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

let previousAverages = [];

function calculateAverage(grades) {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return (sum / BIMONTHLY).toFixed(1);
}

console.log("Nota dos alunos anteriores:\n");
previousGrades.forEach((grades, index) => {
  const average = calculateAverage(grades);
  previousAverages.push(average);
  console.log(`Aluno ${index + 1}: ${average}`);
});

console.log("\n\nNovo Cadastro de Notas:");
let averages = [];
for (let i = 0; i < STUDENTS_NUMBER; i++) {
  console.log(`\nAluno ${i + 1}:`);
  let studentGrades = [];
  for (let j = 0; j < BIMONTHLY; j++) {
    const grade = inputFloat(
      `Nota do ${j + 1}º bimestre: `,
      "Nota inválida. Digite uma nota de 0 a 10.\n"
    );

    studentGrades.push(grade);
  }
  const average = calculateAverage(studentGrades);
  averages.push(average);
  console.log(`Média do aluno ${i + 1}: ${average}`);
}

console.log("\n\nResumo das médias:\n");
averages.forEach((media, index) => {
  console.log(`Aluno ${index + 1}: ${media}`);
});

function inputFloat(message = "", limitMessage = "") {
  let value;
  do {
    value = input.questionFloat(message, {
      limitMessage,
    });
    if (value < 0 || value > 10) console.log(limitMessage);
  } while (isNaN(value) || value < 0 || value > 10);
  return value;
}
