const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines = lines[0].split(" ");

let variavel1 = parseInt(lines[0]);
let variavel2 = parseInt(lines[1]);

if (((variavel1 % variavel2) == 0) || ((variavel2 % variavel1) == 0))
{
    console.log("Sao Multiplos");
}
else
{
    console.log("Nao sao Multiplos");
}