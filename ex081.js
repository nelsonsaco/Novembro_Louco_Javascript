const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a primeira palavra: ', (p1) => {
  rl.question('Digite a segunda palavra: ', (p2) => {
    const p2Invertida = p2.split('').reverse().join('');
    if (p1 === p2Invertida) {
      console.log('São palíndromas mútuas!');
    } else {
      console.log('Não são palíndromas mútuas.');
    }
    rl.close();
  });
});