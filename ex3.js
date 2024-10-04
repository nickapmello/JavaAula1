const readline = require('readline');

function ex3(nomes, notas) {
    let aprovados = [];
    for (let i = 0; i < nomes.length; i++) {
        if (notas[i] >= 7) {
            aprovados.push(nomes[i]);
        }
    }
    return aprovados;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite os nomes separados por vírgula (ex: João, Maria, José): ', (nomesInput) => {
    rl.question('Digite as notas separadas por vírgula (ex: 5, 6, 7): ', (notasInput) => {
        const nomes = nomesInput.split(',').map(nome => nome.trim());
        const notas = notasInput.split(',').map(nota => parseFloat(nota.trim()));
        console.log(`Aprovados: ${ex3(nomes, notas).join(', ')}`);
        rl.close();
    });
});
