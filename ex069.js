const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome completo: ', (nome) => {
  const ignorar = ['e', 'do', 'da', 'dos', 'das', 'de', 'di', 'du'];
  const palavras = nome.split(' ');
  let iniciais = '';

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i].toLowerCase();
    if (!ignorar.includes(palavra) && palavra.length > 0) {
      iniciais += palavra[0].toUpperCase();
    }
  }

  console.log(`Iniciais: ${iniciais}`);
  rl.close();
});