const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function fatorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

rl.question("Quantos valores deseja ler? ", (input) => {
  let n = parseInt(input);
  let count = 0;

  function lerNumero() {
    if (count < n) {
      rl.question(`Digite o número ${count + 1}: `, (numInput) => {
        let valor = parseInt(numInput);
        console.log(`Valor: ${valor} | Fatorial: ${fatorial(valor)}`);
        count++;
        lerNumero(); 
      });
    } else {
      rl.close();
    }
  }

  lerNumero();
});