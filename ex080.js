const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function substituirEspaco(frase) {
  return frase.replace(/ /g, '#'); // substitui todos os espaços por #
}

function lerFrase(callback) {
  rl.question('Digite uma frase: ', (frase) => {
    callback(frase);
  });
}


lerFrase((frase) => {
  const resultado = substituirEspaco(frase);
  console.log(`Frase modificada: ${resultado}`);
  rl.close();
});