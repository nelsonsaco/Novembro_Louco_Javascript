const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dezenas = [
  '', '', 'vinte', 'trinta', 'quarenta', 'cinquenta',
  'sessenta', 'setenta', 'oitenta', 'noventa'
];

const unidades = [
  '', 'um', 'dois', 'três', 'quatro', 'cinco',
  'seis', 'sete', 'oito', 'nove'
];

rl.question('Digite um número entre 20 e 99: ', (input) => {
  const n = parseInt(input);

  if (n < 20 || n > 99) {
    console.log('Número fora do intervalo.');
  } else {
    const dezena = Math.floor(n / 10);
    const unidade = n % 10;

    let resultado = dezenas[dezena];
    if (unidade !== 0) {
      resultado += ' e ' + unidades[unidade];
    }

    console.log(`Número por extenso: ${resultado}`);
  }

  rl.close();
});