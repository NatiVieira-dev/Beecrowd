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

let discriminante = (Math.pow(b, 2) - ((a * c) * 4));

if ((discriminante <= 0) || (a <= 0) || (b <= 0) || (c <= 0))
{
    console.log("Impossivel calcular");
}
else
{
    console.log("R1 = " + ((-b + Math.sqrt(discriminante)) / (2 * a)).toFixed(5));
    console.log("R2 = " + ((-b - Math.sqrt(discriminante)) / (2 * a)).toFixed(5));
}
