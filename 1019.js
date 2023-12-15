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

let valorEmSegundos = parseInt(lines[0]);

let horas = Math.floor(valorEmSegundos / 3600);
let minutos = Math.floor((valorEmSegundos % 3600) / 60);
let segundos = Math.floor(valorEmSegundos % 60);

console.log(horas + ":" + minutos + ":" + segundos);
