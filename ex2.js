const readline = require('readline');

function ex2(notas) {
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite as notas separadas por vírgula (ex: 5, 6, 7): ', (input) => {
    const notas = input.split(',').map(nota => parseFloat(nota.trim()));
    console.log(`Média: ${ex2(notas).toFixed(2)}`);
    rl.close();
});
