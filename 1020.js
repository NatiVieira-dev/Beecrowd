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

let valor = parseInt(lines[0]);

let ano = Math.floor(valor / 365);
let restante1 = (valor % 365);
let mes = Math.floor(restante1 / 30);
let dias = Math.floor(restante1 % 30);

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dias + " dia(s)");
