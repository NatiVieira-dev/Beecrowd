const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines = lines[0].split(" ");

let valor = parseInt(lines[0]);

for (let numero = 1; numero <= valor; numero++) 
{
    if (!ehPar(numero))
    {
        console.log(numero);
    }
}

function ehPar(numero)
{
    return (numero % 2 === 0)
}