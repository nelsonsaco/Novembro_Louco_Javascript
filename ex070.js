const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um texto: ', (texto) => {
  const totalCaracteres = texto.length;
  const palavras = texto.trim().split(/\s+/); 
  const totalPalavras = texto.trim() === '' ? 0 : palavras.length;

  console.log(`Total de caracteres: ${totalCaracteres}`);
  console.log(`Total de palavras: ${totalPalavras}`);
  rl.close();
});