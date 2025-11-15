const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let soma = 0;
let contador = 0;

function lernumero() {
  rl.question("digite um número (9999 para terminar): ", (numstr) => {
    const num = parseFloat(numstr);

    if (num === 9999) {
      if (contador === 0) {
        console.log("\nnenhum número foi digitado");
      } else {
        const media = soma / contador;
        console.log(`\nsoma: ${soma}`);
        console.log(`média: ${media.toFixed(2)}`);
      }
      rl.close();
    } else {
      soma += num;
      contador++;
      lernumero();
    }
  });
}

lernumero();
