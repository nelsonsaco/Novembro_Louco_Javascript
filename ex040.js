const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite o primeiro número: ", (num1str) => {
  const num1 = parseInt(num1str);

  rl.question("digite o segundo número: ", (num2str) => {
    const num2 = parseInt(num2str);
    let resultado = 0;

    for (let i = 0; i < Math.abs(num2); i++) {
      resultado += num1;
    }

    // ajusta sinal caso num2 seja negativo
    if (num2 < 0) resultado = -resultado;

    console.log(`\no resultado de ${num1} x ${num2} é: ${resultado}`);

    rl.close();
  });
});
