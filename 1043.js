const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines = lines[0].split(" ");

let valor1 = parseFloat(lines[0]);
let valor2 = parseFloat(lines[1]);
let valor3 = parseFloat(lines[2]);

if (valor1 < (valor2 + valor3) && valor2 < (valor1 + valor3) && valor3 < (valor1 + valor2))
{
    let perimetro = valor1 + valor2 + valor3;
    console.log("Perimetro = " + perimetro.toFixed(1));
}
else
{
    let area = ((valor1 + valor2) * valor3) / 2.0;
    console.log("Area = " + area.toFixed(1));   
}
