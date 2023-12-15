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

let horaInicio = parseInt(lines[0]);
let minInicio = parseInt(lines[1]);
let horaFim = parseInt(lines[2]);
let minFim = parseInt(lines[3]);

if ((horaInicio === horaFim) && (minInicio === minFim)) 
{
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} 
else if (horaInicio < horaFim) 
{
  let horas = (horaFim - horaInicio);
  let minutos = (minFim - minInicio);
  
  if (minutos < 0) 
  {
    horas--;
    minutos += 60;
  }
  
  console.log("O JOGO DUROU " + horas + " HORA(S) E " + minutos + " MINUTO(S)");
} 
else 
{
  let horas = ((24 - horaInicio) + horaFim);
  let minutos = (minFim - minInicio);
  
  if (minutos < 0) 
  {
    horas--;
    minutos += 60;
  }
  
  if (horas >= 24) 
  {
    horas -= 24;
  }
  
  console.log("O JOGO DUROU " + horas + " HORA(S) E " + minutos + " MINUTO(S)");
}

