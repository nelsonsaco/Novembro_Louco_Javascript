const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function lerPalavra() {
  rl.question('Digite uma palavra: ', (palavra) => {
    const primeira = palavra[0];
    const ultima = palavra[palavra.length - 1];
    console.log(`${palavra} ${primeira} - ${ultima}`);

    if (palavra[0].toLowerCase() === 'f') {
      rl.close();
    } else {
      lerPalavra();
    }
  });
}

lerPalavra();