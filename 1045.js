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

let variaveis = [lines[0], lines[1], lines[2]];

variaveis.sort((b, a) => a - b);

let a = parseFloat(variaveis.shift());
let b = parseFloat(variaveis.shift());
let c = parseFloat(variaveis.shift());

if ((a > 0) && (b > 0) && (c > 0))
{
    if (a >= (b + c))
    {
        console.log("NAO FORMA TRIANGULO");
    }
    else
    { 
        if (Math.pow(a, 2) == (Math.pow(b, 2) + Math.pow(c, 2)))
        {
            console.log("TRIANGULO RETANGULO");
        }
        if (Math.pow(a, 2) > (Math.pow(b, 2) + Math.pow(c, 2)))
        {
            console.log("TRIANGULO OBTUSANGULO");
        }
        if (Math.pow(a, 2) < (Math.pow(b, 2) + Math.pow(c, 2)))
        {
            console.log("TRIANGULO ACUTANGULO");
        }
        if ((a == b) && (b == c))
        {
            console.log("TRIANGULO EQUILATERO");
        }
        if (((a == b) && (a != c)) || ((a == c) && (a != b)) || ((b == c) && (b != a)))
        {
            console.log("TRIANGULO ISOSCELES");
        }
    }
}
