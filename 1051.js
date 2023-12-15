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

let renda = parseFloat(lines[0]);
let imposto = 0;

if (renda <= 2000.00) 
{
    console.log("Isento");
} else {
    if (renda > 4500.00) {
        imposto += (renda - 4500.00) * 0.28;
        renda = 4500.00;
    }
    if (renda > 3000.00) {
        imposto += (renda - 3000.00) * 0.18;
        renda = 3000.00;
    }
    if (renda > 2000.00) {
        imposto += (renda - 2000.00) * 0.08;
    }
    console.log("R$ " + imposto.toFixed(2));
}