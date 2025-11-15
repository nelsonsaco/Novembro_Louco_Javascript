const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro positivo: ", (res) => {
  const n = parseInt(res);
  let e = 1;
  let fat = 1;

  for (let i = 1; i <= n; i++) {
    fat *= i;
    e += 1 / fat;
  }

  console.log("Valor de E:", e.toFixed(6));
  rl.close();
});
