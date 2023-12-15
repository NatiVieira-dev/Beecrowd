const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

console.clear();

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
let linha1 = lines[0].split(" ");
let linha2 = lines[1].split(" ");

let codigo1 = linha1[0];
let numPecas1 = linha1[1];
let valPecas1 = linha1[2];
let codigo2 = linha2[0];
let numPecas2 = linha2[1];
let valPecas2 = linha2[2];


console.log("VALOR A PAGAR: R$ " + ((numPecas1 * valPecas1) + (numPecas2 * valPecas2)).toFixed(2));

