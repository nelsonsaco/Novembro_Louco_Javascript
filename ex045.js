const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let qpares = 0;
let qimpares = 0;

function lernumero() {
  rl.question("digite um número (9999 para terminar): ", (numstr) => {
    const num = parseInt(numstr);

    if (num === 9999) {
      console.log(`\nquantidade de pares: ${qpares}`);
      console.log(`quantidade de impares: ${qimpares}`);
      rl.close();
    } else {
      if (num % 2 === 0) qpares++;
      else qimpares++;
      lernumero();
    }
  });
}

lernumero();
