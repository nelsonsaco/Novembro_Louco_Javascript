const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (input) => {
  const num = parseInt(input);
  let encontrado = false;

  // Vamos testar todos os números consecutivos possíveis
  for (let i = 1; i <= num; i++) {
    if (i * (i + 1) * (i + 2) === num) {
      console.log(`${num} é um número triangular: ${i} x ${i + 1} x ${i + 2} = ${num}`);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log(`${num} não é um número triangular.`);
  }

  rl.close();
});