////////////////////////////// ESQUELETO 1 ////////////////////////////////////

const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
let variavel1 = parseFloat(lines[0]);
//obtem o segundo valor do arquivo stdin
let variavel2 = parseFloat(lines[1]);





////////////////////////////// ESQUELETO 2 ////////////////////////////////////


const fileSystem = require('fs')
const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [var1, var2, var3, var4] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let notaExame = lines.shift();   