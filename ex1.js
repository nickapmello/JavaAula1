const readline = require('readline');

function ex1(nome, idade) {
    return `${nome} tem ${idade} anos`;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idade) => {
        console.log(ex1(nome, idade));
        rl.close();
    });
});
