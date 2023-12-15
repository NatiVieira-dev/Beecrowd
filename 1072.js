const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

console.clear();

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha

lines = lines;
let numVariaveis = lines.shift();

let contIn = 0;
let contOut = 0;


for (let numero = 0; numero < numVariaveis; numero++) 
{
    if ((lines[numero] >= 10) && (lines[numero] <= 20))
    {
        contIn = contIn + 1;
    }
    else
    {
        contOut = contOut + 1;
    }

}

console.log (contIn + " in");
console.log (contOut + " out");
