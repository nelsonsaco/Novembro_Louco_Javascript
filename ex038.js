const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite um número para calcular o fatorial: ", (numstr) => {
  const num = parseInt(numstr);

  let fatorial = 1;

  for (let i = 1; i <= num; i++) {
    fatorial *= i;
  }

  console.log(`\no fatorial de ${num} é: ${fatorial}`);

  rl.close();
});
