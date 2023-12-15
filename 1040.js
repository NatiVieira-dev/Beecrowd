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

let nota1 = parseFloat(linha1[0]);
let nota2 = parseFloat(linha1[1]);
let nota3 = parseFloat(linha1[2]);
let nota4 = parseFloat(linha1[3]);

let media = (((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / (2 + 3 + 4 + 1));

if (media >= 7)
{
    console.log("Media: " + Number(media).toFixed(1));
    console.log("Aluno aprovado.")
}
else if (media < 5)
{
    console.log("Media: " + Number(media).toFixed(1));
    console.log("Aluno reprovado.")
}
else
{   linha2 = lines[1].split(" ");
    let notaExame = parseFloat(linha2[0]);

    console.log("Media: " + Number(media).toFixed(1));
    console.log("Aluno em exame.");

    let mediaFinal = ((notaExame + Number(media)) / 2);

    console.log("Nota do exame: " + Number(notaExame).toFixed(1));

    if (mediaFinal >= 5)
    {
        console.log("Aluno aprovado.");
        console.log("Media final: " + Number(mediaFinal).toFixed(1));
    }
    else
    {
        console.log("Aluno reprovado.");
        console.log("Media final: " + Number(mediaFinal).toFixed(1));
    }
}