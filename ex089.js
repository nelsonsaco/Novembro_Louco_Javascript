const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um verbo regular terminado em ER: ', (verbo) => {
  if (!verbo.endsWith('er')) {
    console.log('O verbo precisa terminar com "er" minúsculo.');
    rl.close();
    return;
  }

  const raiz = verbo.slice(0, -2); // tira "er"

  console.log(`Eu ${raiz}o`.replace('oo','o')); // ajusta erros
  console.log(`Tu ${raiz}es`);
  console.log(`Ele ${raiz}e`);
  console.log(`Ela ${raiz}e`);
  console.log(`Nós ${raiz}emos`);
  console.log(`Vós ${raiz}eis`);
  console.log(`Eles ${raiz}em`);
  console.log(`Elas ${raiz}em`);

  rl.close();
})