const readline2 = require("readline");
const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl2.question("numero: ", (num) => {
  let n = parseFloat(num);
  let count = 0;

  while (n >= 1) {
    n = n / 2;
    count++;
  }

  console.log(`resultado final: ${n}`);
  console.log(`quantidade de divisoes: ${count}`);
  rl2.close();
});