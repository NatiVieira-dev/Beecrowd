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


let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
const PI = 3.14159;

console.log("TRIANGULO: " + ((a * c) / 2).toFixed(3));
console.log("CIRCULO: " + (Math.pow(c, 2) * PI).toFixed(3));
console.log("TRAPEZIO: " + (((a + b) * c) / 2).toFixed(3));
console.log("QUADRADO: " + (b * b).toFixed(3));
console.log("RETANGULO: " + (a * b).toFixed(3));
