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

const MESES = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

let mes = parseInt(lines[0]);

if ((mes >= "1") && (mes <= "12"))
{
    let mesEscrito = MESES[mes - 1];
    console.log(mesEscrito);
}
