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
let notasD100 = Math.floor(valor / 100);
let restanteD100 = (valor - (notasD100 * 100));
let notasD50 = Math.floor(restanteD100 / 50);
let restanteD50 = (restanteD100 - (notasD50 * 50));
let notasD20 = Math.floor(restanteD50 / 20);
let restanteD20 = (restanteD50 - (notasD20 * 20));
let notasD10 = Math.floor(restanteD20 / 10);
let restanteD10 = (restanteD20 - (notasD10 * 10));
let notasD5 = Math.floor(restanteD10 / 5);
let restanteD5 = (restanteD10 - (notasD5 * 5));
let notasD2 = Math.floor(restanteD5 / 2);
let restanteD2 = (restanteD5 - (notasD2 * 2));
let notasD1 = Math.floor(restanteD2 / 1);

console.log(valor);
console.log(notasD100 + " nota(s) de R$ 100,00");
console.log(notasD50 + " nota(s) de R$ 50,00");
console.log(notasD20 + " nota(s) de R$ 20,00");
console.log(notasD10 + " nota(s) de R$ 10,00");
console.log(notasD5 + " nota(s) de R$ 5,00");
console.log(notasD2 + " nota(s) de R$ 2,00");
console.log(notasD1 + " nota(s) de R$ 1,00");
