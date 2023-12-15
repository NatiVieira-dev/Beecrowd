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
linha6 = lines[5].split(" ");

let valores = [linha1[0], linha2[0], linha3[0], linha4[0], linha5[0], linha6[0]];
let contadora = 0;

for (let valor = 1; valor <= 6; valor++) 
{
    let numero = Number(valores[valor-1])
    
    if (numero > 0)
    {
    contadora++
    }
}

console.log(contadora + " valores positivos");
