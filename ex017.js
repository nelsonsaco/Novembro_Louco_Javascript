const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro N: ", (entrada) => {
  const N = Number(entrada);
  let totalDivisoes = 0;

  console.log(`Primos entre 1 e ${N}:`);
  for (let i = 2; i <= N; i++) {
    let primo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      totalDivisoes++;
      if (i % j === 0) {
        primo = false;
        break;
      }
    }
    if (primo) console.log(i);
  }

  console.log(`Total de divisões executadas: ${totalDivisoes}`);
  rl.close();
});
