const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function substituirUltima(frase, palavraAntiga, palavraNova) {
  const index = frase.lastIndexOf(palavraAntiga);
  if (index === -1) return frase;
  return frase.slice(0, index) + palavraNova + frase.slice(index + palavraAntiga.length);
}

rl.question('Digite a frase: ', (frase) => {
  rl.question('Digite a palavra antiga: ', (palavraAntiga) => {
    rl.question('Digite a palavra nova: ', (palavraNova) => {
      const resultado = substituirUltima(frase, palavraAntiga, palavraNova);
      console.log(`Resultado: ${resultado}`);
      rl.close();
    });
  });
});