const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let soma = 0;
let count = 0;

function pedirValor() {
  rl.question(
    "digite um valor positivo (ou negativo para sair): ",
    (entrada) => {
      let valor = Number(entrada);

      if (valor >= 0) {
        soma += valor;
        count++;
        pedirValor(); // pede outro valor
      } else {
        if (count > 0) {
          let media = soma / count;
          console.log("media dos valores positivos: " + media.toFixed(2));
        } else {
          console.log("nenhum valor positivo foi informado.");
        }
        rl.close();
      }
    }
  );
}

pedirValor();
