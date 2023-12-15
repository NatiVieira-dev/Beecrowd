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
linha3 = lines[2].split(" ");
linha4 = lines[3].split(" ");
linha5 = lines[4].split(" ");

let valores = [linha1[0], linha2[0], linha3[0], linha4[0], linha5[0]];
let contPar = 0


for (let variaveis = 1; variaveis <= 5; variaveis++) 
{
    if (ehPar(valores))
    {   
        contPar++
    }
}

console.log(contPar + " valores pares");

function ehPar(valores)
{
    return (valores % 2 === 0)
}