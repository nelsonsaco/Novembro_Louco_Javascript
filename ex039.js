const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite a massa inicial do material (em gramas): ", (massastr) => {
  let massa = parseFloat(massastr);
  const limite = 0.05;
  let tempo = 0;

  while (massa >= limite) {
    massa /= 2;
    tempo += 50;
  }

  console.log(
    `\no tempo necessário para a massa ficar menor que ${limite}g é: ${tempo} segundos`
  );

  rl.close();
});
