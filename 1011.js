////////////////////////////// ESQUELETO 1 ////////////////////////////////////

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

//obtem o primeiro valor do arquivo stdin
let raio = parseFloat(lines[0]);
const PI = 3.14159;

console.log("VOLUME = " + ((4/3.0) * PI * Math.pow(raio, 3)).toFixed(3));