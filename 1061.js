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

let diaInicio = parseInt(linha1[1]);
let horaInicio = parseInt(linha2[0]);
let minInicio = parseInt(linha2[2]);
let segInicio = parseInt(linha2[4]);

let diaFim = parseInt(linha3[1]);
let horaFim = parseInt(linha4[0]);
let minFim = parseInt(linha4[2]);
let segFim = parseInt(linha4[4]);

let dias = diaFim - diaInicio;
let horas = horaFim - horaInicio;
let minutos = minFim - minInicio;
let segundos = segFim - segInicio;

if (segundos < 0) {
    segundos += 60;
    minutos--;
}

if (minutos < 0) {
    minutos += 60;
    horas--;
}

if (horas < 0) {
    horas += 24;
    dias--;
}

console.log(dias + " dia(s)");
console.log(horas + " hora(s)");
console.log(minutos + " minuto(s)");
console.log(segundos + " segundo(s)");

