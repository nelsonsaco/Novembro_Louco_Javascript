function conjuntoInstrucoes(numero) {
    console.log(`Executando a iteração ${numero}`);
    
}

console.log("=== a) Executar 10 vezes ===");
for (let i = 1; i <= 10; i++) {
    conjuntoInstrucoes(i);
}

console.log("\n=== b) Não executar nenhuma vez ===");
for (let i = 1; i < 1; i++) {
    conjuntoInstrucoes(i);
}


console.log("\n=== c) Executar 100 vezes com duas estruturas de repetição ===");
let contador = 0;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        contador++;
        conjuntoInstrucoes(contador);
    }
}

console.log("\n=== d) Executar N vezes (N informado pelo usuário) ===");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite quantas vezes deseja executar (N): ', (resposta) => {
    const N = parseInt(resposta);
    
    if (isNaN(N) || N < 0) {
        console.log("Por favor, digite um número válido!");
    } else {
        console.log(`\nExecutando ${N} vezes:`);
        for (let i = 1; i <= N; i++) {
            conjuntoInstrucoes(i);
        }
    }
    
    rl.close();
});
