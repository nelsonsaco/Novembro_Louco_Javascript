const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escolha a figura (triangulo/losango): ', (figura) => {
  rl.question('Digite o tamanho (número de linhas): ', (input) => {
    const n = parseInt(input);

    if (figura === 'triangulo') {
      for (let i = 1; i <= n; i++) {
        console.log('%'.repeat(i));
      }
    } else if (figura === 'losango') {
      
      for (let i = 1; i <= n; i++) {
        const espacos = ' '.repeat(n - i);
        const simbolos = '%'.repeat(2 * i - 1);
        console.log(espacos + simbolos);
      }
      
      for (let i = n - 1; i >= 1; i--) {
        const espacos = ' '.repeat(n - i);
        const simbolos = '%'.repeat(2 * i - 1);
        console.log(espacos + simbolos);
      }
    } else {
      console.log('Figura inválida!');
    }

    rl.close();
  });
});