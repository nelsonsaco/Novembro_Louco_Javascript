const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarPalavras(frase) {
  // Remove espaços extras no início/fim e divide por espaços
  const palavras = frase.trim().split(/\s+/);
  return palavras.filter(p => p.length > 0).length;
}

rl.question('Digite uma frase: ', (frase) => {
  const total = contarPalavras(frase);
  console.log(`Número de palavras: ${total}`);
  rl.close();
});