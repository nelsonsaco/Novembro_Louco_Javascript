const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("digite um número para ver a tabuada: ", (numstr) => {
  const num = parseInt(numstr);

  console.log(`\ntabuada do ${num}:`);
  for (let i = 1; i <= 13; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }

  rl.close();
});
