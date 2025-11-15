const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome completo: ', (nome) => {
  const partes = nome.trim().split(' ');
  const sobrenome = partes[partes.length - 1];
  console.log(`Sobrenome: ${sobrenome}`);
  rl.close();
});