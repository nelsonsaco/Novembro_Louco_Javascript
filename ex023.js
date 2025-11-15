const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite o tamanho da base (5 a 15): ", (base) => {
  base = Number(base);

  if (base < 5 || base > 15) {
    console.log("valor inválido, tem que estar entre 5 e 15.");
    rl.close();
    return;
  }

  console.log("\ntriângulo:\n");

  for (let i = 1; i <= base; i += 2) {
    console.log("#".repeat(i));
  }

  rl.close();
});
