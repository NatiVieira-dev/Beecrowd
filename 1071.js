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

let valorInicio = parseInt(linha1[0]);
let valorFinal = parseInt(linha2[0]);

let cont = 0;

let inicio = Math.min(valorInicio, valorFinal);
let fim = Math.max(valorInicio, valorFinal);

for (let numero = (inicio + 1); numero < fim; numero++) 
{
    if (!ehPar(numero))
    {
        cont = cont + numero;
    }
}

console.log(cont);

function ehPar(numero) {
    return (numero % 2 === 0);
}

