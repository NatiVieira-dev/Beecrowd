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
linha1 = lines[0].split(" ");
linha2 = lines[1].split(" ");

let x1 = parseFloat(linha1[0]);
let y1 = parseFloat(linha1[1]);
let x2 = parseFloat(linha2[0]);
let y2 = parseFloat(linha2[1]);

let subt1 = (x2 - x1);
let subt2 = (y2 - y1);
let pot1 = Math.pow(subt1 , 2);
let pot2 = Math.pow(subt2 , 2);
let soma = ((pot1 + pot2));


console.log(Math.sqrt(soma).toFixed(4));
