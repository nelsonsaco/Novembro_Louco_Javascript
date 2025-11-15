const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === ' ') contador++;
  }
  console.log(`Número de espaços: ${contador}`);
  rl.close();
});