const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const termos = 20;
let a = 0;
let b = 1;

console.log(`série de fibonacci (${termos} primeiros termos):`);
process.stdout.write(`${a}, ${b}`);

for (let i = 3; i <= termos; i++) {
  let proximo = a + b;
  process.stdout.write(`, ${proximo}`);
  a = b;
  b = proximo;
}

console.log(); 
rl.close();