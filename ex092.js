const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma frase: ', (frase) => {
  let resultado = '';

  for (let i = 0; i < frase.length; i++) {
    const char = frase[i];
    if (/[aeiou]/i.test(char)) {
      resultado += '!';
    } else if (/[a-z]/i.test(char)) {
      resultado += char.toUpperCase();
    } else {
      resultado += char;
    }
  }

  console.log(`Frase transformada: ${resultado}`);
  rl.close();
});