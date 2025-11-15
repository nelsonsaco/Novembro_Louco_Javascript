const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let chico = 1.5;
let ze = 1.1;
let anos = 0;

while (ze <= chico) {
  chico += 0.02;
  ze += 0.03;
  anos++;
}

console.log(`Serão necessários ${anos} anos para que Zé seja maior que Chico.`);
rl.close();
