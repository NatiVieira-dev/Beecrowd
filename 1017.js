const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

console.clear();

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
linha1 = lines[0].split(" ");
linha2 = lines[1].split(" ");


const KML = 12;
let tempoViagem = parseInt(linha1[0]);
let velocidadeMedia = parseInt(linha2[0]);

let distPercorrida = (tempoViagem * velocidadeMedia);

console.log((distPercorrida / KML).toFixed(3));