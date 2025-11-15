const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um numero inteiro: ", (res_n) => {
  let n = parseInt(res_n);
  let i = 1;
  let quadrado = 1;

  while ((i + 1) * (i + 1) <= n) {
    i++;
    quadrado = i * i;
  }

  console.log("O maior quadrado menor ou igual a", n, "é", quadrado);
  rl.close();
});
