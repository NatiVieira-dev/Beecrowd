const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

console.clear();

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines = lines[0].split(" ");

let valor = parseFloat(lines[0]);

valor = Math.round(valor * 100);

console.log("NOTAS:");
console.log(Math.floor(valor / 10000) + " nota(s) de R$ 100.00");
valor %= 10000;

console.log(Math.floor(valor / 5000) + " nota(s) de R$ 50.00");
valor %= 5000;

console.log(Math.floor(valor / 2000) + " nota(s) de R$ 20.00");
valor %= 2000;

console.log(Math.floor(valor / 1000) + " nota(s) de R$ 10.00");
valor %= 1000;

console.log(Math.floor(valor / 500) + " nota(s) de R$ 5.00");
valor %= 500;

console.log(Math.floor(valor / 200) + " nota(s) de R$ 2.00");
valor %= 200;

console.log("MOEDAS:");
console.log(Math.floor(valor / 100) + " moeda(s) de R$ 1.00");
valor %= 100;

console.log(Math.floor(valor / 50) + " moeda(s) de R$ 0.50");
valor %= 50;

console.log(Math.floor(valor / 25) + " moeda(s) de R$ 0.25");
valor %= 25;

console.log(Math.floor(valor / 10) + " moeda(s) de R$ 0.10");
valor %= 10;

console.log(Math.floor(valor / 5) + " moeda(s) de R$ 0.05");
valor %= 5;

console.log(Math.floor(valor) + " moeda(s) de R$ 0.01");
