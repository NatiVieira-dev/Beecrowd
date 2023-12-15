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

let valores = [lines[0], lines[1], lines[2]];

valores.sort((a, b) => a - b);

let valor1 = parseInt(valores.shift());
let valor2 = parseInt(valores.shift());
let valor3 = parseInt(valores.shift());

console.log(valor1);
console.log(valor2);
console.log(valor3);

valores = [lines[0], lines[1], lines[2]];

valor1 = parseInt(valores.shift());
valor2 = parseInt(valores.shift());
valor3 = parseInt(valores.shift());

console.log();
console.log(valor1);
console.log(valor2);
console.log(valor3);
