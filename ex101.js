const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function somaSemMais(a, b) {
    while (b !== 0) {
        let carry = a & b;       
        a = a ^ b;               
        b = carry << 1;          
    }
    return a;
}


function parOuImpar(n) {
    return (n % 2 === 0) ? 'par' : 'ímpar';
}

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        const a = Number(num1);
        const b = Number(num2);

        const soma = somaSemMais(a, b);
        console.log(`A soma é ${soma} e ela é ${parOuImpar(soma)}`);

        rl.close();
    });
});