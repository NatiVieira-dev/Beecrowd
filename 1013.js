////////////////////////////// ESQUELETO 1 ////////////////////////////////////

const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines = lines[0].split(" ");


let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);

let maiorAb = parseInt((a + b + Math.abs(a - b)) / 2);
let oMaior = parseInt((maiorAb + c + Math.abs(maiorAb - c)) / 2);

console.log(oMaior + " eh o maior");
