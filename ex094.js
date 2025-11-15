const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let count = 0;
let somaPares = 0;
let somaPrimos = 0;

// Função para verificar se um número é primo
function ehPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function pedirNumero() {
  rl.question(`Digite o número ${count + 1}: `, (input) => {
    const num = parseInt(input);
    numeros.push(num);

    if (num % 2 === 0) somaPares += num;
    if (ehPrimo(num)) somaPrimos += num;

    count++;
    if (count < 10) {
      pedirNumero();
    } else {
      console.log(`Soma dos números pares: ${somaPares}`);
      console.log(`Soma dos números primos: ${somaPrimos}`);
      rl.close();
    }
  });
}

pedirNumero();