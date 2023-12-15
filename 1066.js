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
let contPar = 0;
let contImpar = 0;
let contPositivo = 0;
let contNegativo = 0;

for (let variavel = 0; variavel < 5; variavel++) 
{
    if (ehPar(valores[variavel])) 
    {
        contPar++;
    }
    else
    {
        contImpar++;
    }

    if ((valores[variavel]) > 0)
    {
        contPositivo++;
    }
    else if ((valores[variavel]) < 0)
    {
        contNegativo++;
    }
}

console.log(contPar + " valor(es) par(es)");
console.log(contImpar + " valor(es) impar(es)");
console.log(contPositivo + " valor(es) positivo(s)");
console.log(contNegativo + " valor(es) negativo(s)");

function ehPar(valor) {
    return valor % 2 === 0;
}