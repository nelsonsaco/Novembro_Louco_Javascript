const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite 15 números separados por vírgula: ', (input) => {
  
    const numeros = input.split(',').map(n => Number(n.trim()));

   
    if (numeros.length !== 15 || numeros.some(isNaN)) {
        console.log('Erro: digite exatamente 15 números válidos separados por vírgula.');
    } else {
       
        const soma = numeros.reduce((acc, n) => acc + n, 0);
        console.log(`A soma dos números é: ${soma}`);
    }

    rl.close();
});