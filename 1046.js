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

let inicio = parseInt(lines[0]);
let fim = parseInt(lines[1]);

if (inicio < fim)
{
    console.log("O JOGO DUROU " + (fim - inicio) + " HORA(S)");
}
else
{
    let duracao = ((24 - inicio) + fim)

    if ((duracao < 1) || (duracao > 24))
    {
        console.log("O JOGO DUROU 24 HORA(S)");
    }
    else
    {
        console.log("O JOGO DUROU " + duracao + " HORA(S)");
    }
}
