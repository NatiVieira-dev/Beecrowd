const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

console.clear();

for (let numero = 1; numero <= 100; numero++) 
{
    if (ehPar(numero))
    {
        console.log(numero);
    }
}

function ehPar(numero)
{
    return (numero % 2 === 0)
}
