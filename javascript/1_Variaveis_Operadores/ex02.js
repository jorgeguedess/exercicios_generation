const input = require("readline-sync");

const amountGrades = 4;
let sumGrades = 0;

const isInvalidGrade = (grade = 0) => grade < 0 || grade > 10;

for (let i = 0; i < amountGrades; i++) {
  let grade = 0;
  do {
    grade = input.questionFloat(`${i + 1}ª Nota: `, {
      limitMessage: "Nota inválida. Digite de 0 a 10.",
    });
    if (isInvalidGrade(grade)) {
      console.log("Nota inválida. Digite de 0 a 10.");
    }
  } while (isInvalidGrade(grade));
  sumGrades += grade;
}

const average = sumGrades / amountGrades;
console.log("\nMédia final:", average.toFixed(1));
