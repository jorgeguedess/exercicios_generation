let leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Salário Bruto: ");
let adicionalNoturno = leia.questionFloat("Adicional Noturno: ");
let horasExtra = leia.questionFloat("Horas Extras: ");
let descontos = leia.questionFloat("Descontos: ");

let salarioLiquido =
  salarioBruto + adicionalNoturno + horasExtra * 5 - descontos;
