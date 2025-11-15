const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (input) => {
  let num = parseInt(input);

  console.log("Contagem regressiva:");
  for (let i = num; i >= 0; i -= 2) {
    process.stdout.write(i + " ");
  }
  console.log(); // quebra de linha no final
  rl.close();
});