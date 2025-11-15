const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let soma = 0;
let total = 0;
let positivos = 0;
let negativos = 0;

function lerValor() {
  rl.question("Digite um número (ou vazio para sair): ", (entrada) => {
    if (entrada === "") {
      if (total === 0) {
        console.log("Nenhum valor foi informado.");
      } else {
        const media = soma / total;
        const percPos = ((positivos / total) * 100).toFixed(2);
        const percNeg = ((negativos / total) * 100).toFixed(2);
        console.log("\nMédia: ${media}");
        console.log("Quantidade de positivos: ${positivos}");
        console.log("Quantidade de negativos: ${negativos}");
        console.log("Percentual de positivos: ${percPos}%");
        console.log("Percentual de negativos: ${percNeg}%");
      }
      rl.close();
      return;
    }

    const numero = Number(entrada);
    soma += numero;
    total++;

    if (numero > 0) positivos++;
    if (numero < 0) negativos++;

    lerValor();
  });
}

lerValor();
