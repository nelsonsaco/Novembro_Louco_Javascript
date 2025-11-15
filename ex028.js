const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let valores = [];
let somaPositivos = 0;
let countNegativos = 0;
let i = 0;

function lerValor() {
  if (i < 50) {
    rl.question(`Digite o valor ${i + 1}: `, (entrada) => {
      let num = Number(entrada);
      valores.push(num);
      if (num > 0) somaPositivos += num;
      if (num < 0) countNegativos++;
      i++;
      lerValor();
    });
  } else {
    console.log(`Soma dos números positivos: ${somaPositivos}`);
    console.log(`Quantidade de números negativos: ${countNegativos}`);
    rl.close();
  }
}

lerValor();
