const readline = require('readline');

function ex4(nomes) {
    let longos = [];
    for (let nome of nomes) {
        if (nome.length > 5) {
            longos.push(nome);
        }
    }
    return longos;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite os nomes separados por vírgula: ', (input) => {
    const nomes = input.split(',').map(nome => nome.trim());
    console.log(`Nomes com mais de 5 letras: ${ex4(nomes).join(', ')}`);
    rl.close();
});
