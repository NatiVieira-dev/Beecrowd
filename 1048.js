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

let salario = parseFloat(lines[0]);

if ((salario > 0) && (salario <= 400))
{
    let novoSalario = (salario * 1.15);
    let reajuste = (novoSalario - salario);

    console.log("Novo salario: " + novoSalario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 15 %");
}
else if ((salario > 400) && (salario <= 800))
{
    let novoSalario = (salario * 1.12);
    let reajuste = (novoSalario - salario);

    console.log("Novo salario: " + novoSalario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 12 %");
}
else if ((salario > 800) && (salario <= 1200))
{
    let novoSalario = (salario * 1.10);
    let reajuste = (novoSalario - salario);

    console.log("Novo salario: " + novoSalario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 10 %");
}
else if ((salario > 1200) && (salario <= 2000))
{
    let novoSalario = (salario * 1.07);
    let reajuste = (novoSalario - salario);

    console.log("Novo salario: " + novoSalario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 7 %");
}
else if (salario > 2000)
{
    let novoSalario = (salario * 1.04);
    let reajuste = (novoSalario - salario);

    console.log("Novo salario: " + novoSalario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 4 %");
}
