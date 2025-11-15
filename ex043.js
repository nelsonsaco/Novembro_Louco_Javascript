const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let maximo = null;

function lernumero() {
  rl.question("digite um número (9999 para terminar): ", (numstr) => {
    const num = parseFloat(numstr);

    if (num === 9999) {
      if (maximo === null) {
        console.log("\nnenhum número foi digitado");
      } else {
        console.log(`\nmaior número digitado: ${maximo}`);
      }
      rl.close();
    } else {
      if (maximo === null || num > maximo) maximo = num;
      lernumero();
    }
  });
}

lernumero();
