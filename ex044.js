const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite o primeiro número (num1): ", (num1str) => {
  const num1 = parseInt(num1str);

  rl.question("digite o segundo número (num2): ", (num2str) => {
    const num2 = parseInt(num2str);

    let quoc = 0;
    let resto = num1;

    while (resto >= num2) {
      resto -= num2;
      quoc++;
    }

    console.log(`\nquociente: ${quoc}`);
    console.log(`resto: ${resto}`);

    rl.close();
  });
});
