const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
  let novaFrase = '';

  for (let i = 0; i < frase.length; i++) {
    novaFrase += frase[i] + frase[i]; // duplica o caractere
  }

  console.log('Frase duplicada:', novaFrase);
  rl.close();
});