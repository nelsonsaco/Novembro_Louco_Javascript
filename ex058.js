const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o valor de N (>=2): ", (res_n) => {
  let n = parseInt(res_n);
  let fib0 = 0;
  let fib1 = 1;

  console.log("Sequência de Fibonacci:");
  process.stdout.write(fib0 + " " + fib1 + " ");

  for (let i = 3; i <= n; i++) {
    let fib_proximo = fib0 + fib1;
    process.stdout.write(fib_proximo + " ");
    fib0 = fib1;
    fib1 = fib_proximo;
  }

  console.log();
  rl.close();
});
