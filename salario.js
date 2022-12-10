const prompt = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var salario_bruto = parseFloat(prompt("Digite seu salario bruto: "));
var ir = salario_bruto * 0.10;
var salario_liquido = salario_bruto - ir;
console.log("salário líquido: R$", salario_liquido);