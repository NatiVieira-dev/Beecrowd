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

let codigo = parseInt(lines[0]);
let quantidade = parseInt(lines[1]);

if (codigo == 1)
{
    console.log("Total: R$ " + (quantidade * 4).toFixed(2));
}
else if (codigo == 2)
{
    console.log("Total: R$ " + (quantidade * 4.5).toFixed(2));
}
else if (codigo == 3)
{
    console.log("Total: R$ " + (quantidade * 5).toFixed(2));
}
else if (codigo == 4)
{
    console.log("Total: R$ " + (quantidade * 2).toFixed(2));
}
else if (codigo == 5)
{
    console.log("Total: R$ " + (quantidade * 1.5).toFixed(2));
}