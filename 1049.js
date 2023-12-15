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

let palavra1 = linha1[0];
let palavra2 = linha2[0];
let palavra3 = linha3[0];

if (palavra1 == "vertebrado")
{
    if (palavra2 == "ave")
    {
        if (palavra3 == "onivoro")
        {
            console.log("pomba");
        }
        else if (palavra3 == "carnivoro")
        {
            console.log("aguia");
        }
    }
    else if (palavra2 == "mamifero")
    {
        if (palavra3 == "onivoro")
        {
            console.log("homem");
        }
        else if (palavra3 == "herbivoro")
        {
            console.log("vaca");
        }
    }
}
else if (palavra1 == "invertebrado")
{
    if (palavra2 == "inseto")
    {
        if (palavra3 == "hematofago")
        {
            console.log("pulga");
        }
        else if (palavra3 == "herbivoro")
        {
            console.log("lagarta");
        }
    }
    else if (palavra2 == "anelideo")
    {
        if (palavra3 == "hematofago")
        {
            console.log("sanguessuga");
        }
        else if (palavra3 == "onivoro")
        {
            console.log("minhoca");
        }
    }
}