const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
  const original = frase;
  // Remove espaços, pontuação e deixa tudo minúsculo
  const limpada = frase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const invertida = limpada.split('').reverse().join('');

  console.log(`Frase digitada: ${original}`);
  if (limpada === invertida) {
    console.log('É um palíndromo');
  } else {
    console.log('Não é um palíndromo');
  }

  rl.close();
});